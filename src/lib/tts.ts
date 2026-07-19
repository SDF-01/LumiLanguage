import {
  DEFAULT_VOICE,
  VOICE_CHARACTERS,
  toPiperLanguage,
  type TtsLang,
  type VoiceCharacterId,
} from "@/lib/tts-voices";

export type { TtsLang, VoiceCharacterId } from "@/lib/tts-voices";
export {
  VOICE_CHARACTERS,
  DEFAULT_VOICE,
  listVoiceCharacters,
} from "@/lib/tts-voices";

/** Learner-friendly pace (slower than 1.0). */
export const DEFAULT_SPEECH_RATE = 0.72;

type PiperAudio = {
  play: () => Promise<void>;
  toBlob: () => Blob;
};

type PiperInstance = {
  synthesize: (
    text: string,
    options?: { language?: string; lengthScale?: number },
  ) => Promise<PiperAudio>;
  dispose: () => void;
  isInitialized: boolean;
};

type LoadState =
  | { status: "idle" }
  | { status: "loading"; progress: number; message: string }
  | { status: "ready" }
  | { status: "error"; message: string };

let engine: "piper" | "webspeech" | null = null;
let loadState: LoadState = { status: "idle" };
let activeAudio: { stop?: () => void } | null = null;
let speakGeneration = 0;
const piperByModel = new Map<string, Promise<PiperInstance>>();
let preferredVoice: VoiceCharacterId = DEFAULT_VOICE;
const listeners = new Set<(state: LoadState) => void>();

export function getTtsLoadState(): LoadState {
  return loadState;
}

export function onTtsLoadState(cb: (state: LoadState) => void): () => void {
  listeners.add(cb);
  cb(loadState);
  return () => listeners.delete(cb);
}

function setLoadState(next: LoadState) {
  loadState = next;
  for (const cb of listeners) cb(next);
}

export function setPreferredVoice(id: VoiceCharacterId) {
  preferredVoice = id;
}

export function getPreferredVoice(): VoiceCharacterId {
  return preferredVoice;
}

export function isTtsSupported(): boolean {
  return typeof window !== "undefined";
}

/** Kept for older call sites; piper unlocks on first Listen tap. */
export function unlockAudio(): void {
  if (typeof window === "undefined") return;
  try {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    void ctx.resume().finally(() => void ctx.close());
  } catch {
    // ignore
  }
}

export function stopSpeech(): void {
  speakGeneration += 1;
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (activeAudio && typeof activeAudio.stop === "function") {
    activeAudio.stop();
  }
  activeAudio = null;
}

/**
 * Load piper-plus without letting the bundler statically analyze it.
 * piper-plus uses `import(url)` for WASM, which breaks Turbopack/webpack graph analysis.
 */
async function importPiperPlus(): Promise<{
  PiperPlus: {
    initialize: (opts: Record<string, unknown>) => Promise<PiperInstance>;
  };
}> {
  const specifier = "piper" + "-plus";
  return import(
    /* webpackIgnore: true */
    /* turbopackIgnore: true */
    specifier
  ) as Promise<{
    PiperPlus: {
      initialize: (opts: Record<string, unknown>) => Promise<PiperInstance>;
    };
  }>;
}

async function importOrt(): Promise<{
  env: { wasm: { wasmPaths: string } };
}> {
  const specifier = "onnxruntime" + "-web";
  return import(
    /* webpackIgnore: true */
    /* turbopackIgnore: true */
    specifier
  ) as Promise<{ env: { wasm: { wasmPaths: string } } }>;
}

async function getPiper(model: string): Promise<PiperInstance> {
  const existing = piperByModel.get(model);
  if (existing) return existing;

  const promise = (async () => {
    setLoadState({
      status: "loading",
      progress: 0,
      message: "Loading voice model…",
    });

    const ort = await importOrt();
    ort.env.wasm.wasmPaths =
      "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.27.0/dist/";

    const { PiperPlus } = await importPiperPlus();
    const tts = await PiperPlus.initialize({
      model,
      ort,
      onProgress: (info: { progress?: number; message?: string }) => {
        setLoadState({
          status: "loading",
          progress: info.progress ?? 0,
          message: info.message || "Loading voice model…",
        });
      },
    });

    setLoadState({ status: "ready" });
    engine = "piper";
    return tts;
  })().catch((err) => {
    piperByModel.delete(model);
    const message =
      err instanceof Error ? err.message : "Failed to load neural TTS";
    setLoadState({ status: "error", message });
    throw err;
  });

  piperByModel.set(model, promise);
  return promise;
}

function pickFemaleVoice(
  voices: SpeechSynthesisVoice[],
  lang: TtsLang,
): SpeechSynthesisVoice | null {
  const prefix = lang.slice(0, 2).toLowerCase();
  const pool = voices.filter((v) => v.lang.toLowerCase().startsWith(prefix));
  const ranked = pool.length > 0 ? pool : voices;

  const femaleHints =
    /female|woman|girl|nanami|ayumi|haruka|kyoko|zira|samantha|victoria|karen|moira|tessa|fiona|susan|linda|heami|yuna|google 日本語|google us english|microsoft haruka|microsoft ayumi|microsoft nanami/i;
  const maleHints =
    /male|man|boy|david|mark|george|daniel|james|ichiro|hayato|microsoft ichiro|microsoft hayato/i;

  const female = ranked.find((v) => femaleHints.test(v.name));
  if (female) return female;

  const nonMale = ranked.find((v) => !maleHints.test(v.name));
  if (nonMale) return nonMale;

  return ranked[0] ?? null;
}

function speakWebSpeech(
  text: string,
  lang: TtsLang,
  rate: number,
  generation: number,
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      reject(new Error("Speech synthesis not supported"));
      return;
    }

    const synth = window.speechSynthesis;
    synth.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = rate;
    utter.pitch = 1.05;

    const start = () => {
      if (generation !== speakGeneration) {
        resolve();
        return;
      }
      const voice = pickFemaleVoice(synth.getVoices(), lang);
      if (voice) utter.voice = voice;

      utter.onend = () => {
        if (generation === speakGeneration) activeAudio = null;
        resolve();
      };
      utter.onerror = () => {
        if (generation === speakGeneration) activeAudio = null;
        reject(new Error("Speech failed"));
      };

      activeAudio = {
        stop: () => {
          synth.cancel();
          activeAudio = null;
          resolve();
        },
      };

      engine = "webspeech";
      synth.speak(utter);
    };

    if (synth.getVoices().length === 0) {
      const onVoices = () => {
        synth.removeEventListener("voiceschanged", onVoices);
        start();
      };
      synth.addEventListener("voiceschanged", onVoices);
      window.setTimeout(() => {
        synth.removeEventListener("voiceschanged", onVoices);
        start();
      }, 400);
    } else {
      start();
    }
  });
}

async function playPiperBlob(
  blob: Blob,
  generation: number,
): Promise<void> {
  const url = URL.createObjectURL(blob);
  const el = new Audio(url);
  el.preload = "auto";

  await new Promise<void>((resolve, reject) => {
    if (generation !== speakGeneration) {
      URL.revokeObjectURL(url);
      resolve();
      return;
    }

    activeAudio = {
      stop: () => {
        el.pause();
        el.removeAttribute("src");
        URL.revokeObjectURL(url);
        activeAudio = null;
        resolve();
      },
    };

    el.onended = () => {
      URL.revokeObjectURL(url);
      if (generation === speakGeneration) activeAudio = null;
      resolve();
    };
    el.onerror = () => {
      URL.revokeObjectURL(url);
      if (generation === speakGeneration) activeAudio = null;
      reject(new Error("Audio playback failed"));
    };

    void el.play().catch((err) => {
      URL.revokeObjectURL(url);
      if (generation === speakGeneration) activeAudio = null;
      reject(err);
    });
  });
}

export async function speak(
  text: string,
  lang: TtsLang = "en-US",
  rate = DEFAULT_SPEECH_RATE,
  voiceId?: VoiceCharacterId,
): Promise<void> {
  if (!text.trim()) return;
  if (typeof window === "undefined") {
    throw new Error("TTS only runs in the browser");
  }

  unlockAudio();
  stopSpeech();
  const generation = speakGeneration;

  // Always use the warm female tutor voice (Lumi / Tsukuyomi-chan).
  preferredVoice = "lumi";
  void voiceId;
  const character = VOICE_CHARACTERS.lumi;
  const piperLang = toPiperLanguage(lang);
  // piper lengthScale > 1 = slower speech
  const lengthScale = Math.max(1.15, Math.min(1.55, 1 / rate));

  try {
    const piper = await getPiper(character.model);
    if (generation !== speakGeneration) return;

    const result = await piper.synthesize(text, {
      language: piperLang,
      lengthScale,
    });
    if (generation !== speakGeneration) return;

    // Use blob playback only (do not also call result.play()).
    engine = "piper";
    await playPiperBlob(result.toBlob(), generation);
    return;
  } catch {
    if (generation !== speakGeneration) return;
    // Single fallback engine — female system voice only.
    await speakWebSpeech(text, lang, rate, generation);
  }
}

export function getActiveTtsEngine(): "piper" | "webspeech" | null {
  return engine;
}

export async function preloadTts(
  voiceId: VoiceCharacterId = DEFAULT_VOICE,
): Promise<void> {
  const character = VOICE_CHARACTERS[voiceId] ?? VOICE_CHARACTERS.lumi;
  await getPiper(character.model);
}
