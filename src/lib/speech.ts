import {
  levenshtein,
  normalizeJapanese,
  uniqueStrings,
} from "@/lib/japanese-normalize";

export type SpeechScore = {
  heard: string;
  alternatives: string[];
  score: number;
  passed: boolean;
  matched: string | null;
};

const PASS_SCORE = 58;

type RecognitionCtor = new () => SpeechRecognitionLike;

export type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionResultEvent = {
  results: ArrayLike<{
    isFinal?: boolean;
    [index: number]: { transcript?: string };
    length: number;
  }>;
};

function recognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor;
    webkitSpeechRecognition?: RecognitionCtor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function isSpeechRecognitionSupported(): boolean {
  return recognitionCtor() !== null;
}

export function scoreTranscript(
  heardList: string[],
  expected: string[],
): SpeechScore {
  const alternatives = uniqueStrings(heardList);
  const heard = alternatives[0] ?? "";
  const expectedNorm = uniqueStrings(expected).map((item) => ({
    raw: item,
    norm: normalizeJapanese(item),
  }));

  let best = 0;
  let matched: string | null = null;

  for (const alt of alternatives.length > 0 ? alternatives : [""]) {
    const got = normalizeJapanese(alt);
    if (!got) continue;
    for (const target of expectedNorm) {
      if (!target.norm) continue;
      let score = 0;
      if (got === target.norm) {
        score = 100;
      } else if (got.includes(target.norm) || target.norm.includes(got)) {
        const shorter = Math.min(got.length, target.norm.length);
        const longer = Math.max(got.length, target.norm.length);
        score = shorter >= 2 ? Math.round(78 + (shorter / longer) * 18) : 40;
      } else {
        const dist = levenshtein(got, target.norm);
        const longer = Math.max(got.length, target.norm.length, 1);
        score = Math.max(0, Math.round((1 - dist / longer) * 100));
      }
      if (score > best) {
        best = score;
        matched = target.raw;
      }
    }
  }

  return {
    heard,
    alternatives,
    score: best,
    passed: best >= PASS_SCORE,
    matched,
  };
}

export function listenJapaneseOnce(): Promise<string[]> {
  const Ctor = recognitionCtor();
  if (!Ctor) {
    return Promise.reject(new Error("Speech recognition is not available"));
  }

  return new Promise((resolve, reject) => {
    const rec = new Ctor();
    rec.lang = "ja-JP";
    rec.continuous = false;
    rec.interimResults = false;
    rec.maxAlternatives = 5;

    let settled = false;
    const finish = (alts: string[]) => {
      if (settled) return;
      settled = true;
      resolve(uniqueStrings(alts));
    };

    rec.onresult = (event) => {
      const alts: string[] = [];
      const first = event.results[0];
      if (first) {
        for (let i = 0; i < first.length; i += 1) {
          const text = first[i]?.transcript;
          if (text) alts.push(text);
        }
      }
      finish(alts);
    };
    rec.onerror = (event) => {
      if (settled) return;
      settled = true;
      reject(new Error(event.error || "Could not hear you"));
    };
    rec.onend = () => {
      if (!settled) finish([]);
    };

    try {
      rec.start();
    } catch (err) {
      reject(err instanceof Error ? err : new Error("Mic failed to start"));
    }
  });
}
