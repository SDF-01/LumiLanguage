/**
 * Character voices for LUMI.
 *
 * HOW TO CHANGE A VOICE
 * 1. Edit the `model` field below (shortcut or full HuggingFace repo).
 * 2. Restart / hard-refresh the browser so IndexedDB can fetch the new model.
 * 3. Tap Listen once (first run downloads + caches the model).
 *
 * Built-in piper-plus shortcuts:
 * - "tsukuyomi"  → ayousanz/piper-plus-tsukuyomi-chan (anime-style JA tutor)
 * - "css10"      → ayousanz/piper-plus-css10-ja-6lang (clearer / more neutral)
 *
 * Or paste any piper-plus ONNX repo, e.g.:
 *   model: "ayousanz/piper-plus-tsukuyomi-chan"
 *
 * Docs: https://github.com/ayutaz/piper-plus
 * Models: https://huggingface.co/ayousanz
 */

export type TtsLang = "en-US" | "ja-JP";
export type PiperLanguage = "ja" | "en";

export type VoiceCharacterId = "lumi" | "sensei" | "announcer";

export type VoiceCharacter = {
  id: VoiceCharacterId;
  label: string;
  labelJa: string;
  /** piper-plus model shortcut or HuggingFace repo id */
  model: string;
  blurb: string;
  /** Prefer this voice for these lesson languages */
  bestFor: TtsLang[];
};

export const VOICE_CHARACTERS: Record<VoiceCharacterId, VoiceCharacter> = {
  lumi: {
    id: "lumi",
    label: "Lumi",
    labelJa: "ルミ",
    // Character-style Japanese voice (Tsukuyomi-chan). Less "news reader".
    model: "tsukuyomi",
    blurb: "Warm tutor character (Tsukuyomi-chan)",
    bestFor: ["ja-JP", "en-US"],
  },
  sensei: {
    id: "sensei",
    label: "Sensei",
    labelJa: "先生",
    // Clearer classroom tone.
    model: "css10",
    blurb: "Clear classroom voice (CSS10)",
    bestFor: ["ja-JP", "en-US"],
  },
  announcer: {
    id: "announcer",
    label: "Announcer",
    labelJa: "アナウンス",
    // Same CSS10 model, different label so learners can A/B styles.
    // Swap `model` to another HF repo when you find a preferred voice.
    model: "css10",
    blurb: "Neutral TOEIC-style delivery (swap model in tts-voices.ts)",
    bestFor: ["en-US"],
  },
};

export const DEFAULT_VOICE: VoiceCharacterId = "lumi";

export function toPiperLanguage(lang: TtsLang): PiperLanguage {
  return lang.startsWith("ja") ? "ja" : "en";
}

export function defaultVoiceForLang(lang: TtsLang): VoiceCharacterId {
  return lang.startsWith("ja") ? "lumi" : "announcer";
}

/** List for UI pickers */
export function listVoiceCharacters(): VoiceCharacter[] {
  return Object.values(VOICE_CHARACTERS);
}
