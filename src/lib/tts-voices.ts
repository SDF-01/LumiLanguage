/**
 * Character voices for LUMI.
 *
 * Default learner voice is always the female tutor (Tsukuyomi-chan via piper-plus).
 * Docs: https://github.com/ayutaz/piper-plus
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

/** Female tutor voice only — used for every Listen button. */
export const VOICE_CHARACTERS: Record<VoiceCharacterId, VoiceCharacter> = {
  lumi: {
    id: "lumi",
    label: "Lumi",
    labelJa: "ルミ",
    model: "tsukuyomi",
    blurb: "Warm female tutor (slower classroom pace)",
    bestFor: ["ja-JP", "en-US"],
  },
  // Kept for API compatibility; both map to the same female model.
  sensei: {
    id: "sensei",
    label: "Lumi",
    labelJa: "ルミ",
    model: "tsukuyomi",
    blurb: "Warm female tutor (slower classroom pace)",
    bestFor: ["ja-JP", "en-US"],
  },
  announcer: {
    id: "announcer",
    label: "Lumi",
    labelJa: "ルミ",
    model: "tsukuyomi",
    blurb: "Warm female tutor (slower classroom pace)",
    bestFor: ["en-US", "ja-JP"],
  },
};

export const DEFAULT_VOICE: VoiceCharacterId = "lumi";

export function toPiperLanguage(lang: TtsLang): PiperLanguage {
  return lang.startsWith("ja") ? "ja" : "en";
}

export function defaultVoiceForLang(_lang: TtsLang): VoiceCharacterId {
  return "lumi";
}

/** List for UI pickers — single female voice. */
export function listVoiceCharacters(): VoiceCharacter[] {
  return [VOICE_CHARACTERS.lumi];
}
