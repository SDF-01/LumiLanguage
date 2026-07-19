import {
  DEFAULT_VOICE,
  VOICE_CHARACTERS,
  defaultVoiceForLang,
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

function speakWebSpeech(
  text: string,
  lang: TtsLang,
  rate = 0.95,
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

    const pickVoice = () => {
      const voices = synth.getVoices();
      const exact = voices.find((v) => v.lang === lang);
      if (exact) return exact;
      const prefix = lang.slice(0, 2);
      return voices.find((v) => v.lang.startsWith(prefix)) ?? null;
    };

    const start = () => {
      const voice = pickVoice();
      if (voice) utter.voice = voice;
      const keepAlive = window.setInterval(() => {
        if (synth.speaking) synth.resume();
      }, 5000);
      utter.onend = () => {
        window.clearInterval(keepAlive);
        resolve();
      };
      utter.onerror = () => {
        window.clearInterval(keepAlive);
        reject(new Error("Speech failed"));
      };
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

    engine = "webspeech";
  });
}

export async function speak(
  text: string,
  lang: TtsLang = "en-US",
  rate = 0.95,
  voiceId?: VoiceCharacterId,
): Promise<void> {
  if (!text.trim()) return;
  if (typeof window === "undefined") {
    throw new Error("TTS only runs in the browser");
  }

  unlockAudio();
  stopSpeech();

  const characterId = voiceId ?? preferredVoice ?? defaultVoiceForLang(lang);
  const character = VOICE_CHARACTERS[characterId] ?? VOICE_CHARACTERS.lumi;
  const piperLang = toPiperLanguage(lang);
  const lengthScale = Math.max(0.7, Math.min(1.4, 1 / rate));

  try {
    const piper = await getPiper(character.model);
    const result = await piper.synthesize(text, {
      language: piperLang,
      lengthScale,
    });

    const url = URL.createObjectURL(result.toBlob());
    const el = new Audio(url);
    await new Promise<void>((resolve, reject) => {
      activeAudio = {
        stop: () => {
          el.pause();
          el.removeAttribute("src");
          URL.revokeObjectURL(url);
          resolve();
        },
      };
      el.onended = () => {
        URL.revokeObjectURL(url);
        activeAudio = null;
        resolve();
      };
      el.onerror = () => {
        URL.revokeObjectURL(url);
        activeAudio = null;
        reject(new Error("Audio playback failed"));
      };
      void el.play().catch(reject);
    });
    return;
  } catch {
    await speakWebSpeech(text, lang, rate);
  }
}

export function getActiveTtsEngine(): "piper" | "webspeech" | null {
  return engine;
}

export async function preloadTts(
  voiceId: VoiceCharacterId = DEFAULT_VOICE,
): Promise<void> {
  const character = VOICE_CHARACTERS[voiceId];
  await getPiper(character.model);
}
