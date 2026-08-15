export type PathId = "toeic" | "japanese";

export type StepKind = "tutorial" | "exercise" | "explanation" | "checkpoint";

export type SkillFocus = "read" | "write" | "speak" | "listen";

export type ExerciseKind =
  | "multiple-choice"
  | "write-choice"
  | "listen-choice"
  | "match"
  | "speak-prompt"
  | "stroke-write"
  | "sentence-build";

export type ScriptKind = "hiragana" | "katakana" | "kanji" | "particle";

export interface SentenceTile {
  id: string;
  label: string;
  script: ScriptKind;
  reading?: string;
}

export interface Choice {
  id: string;
  label: string;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface Exercise {
  id: string;
  kind: ExerciseKind;
  /** Pedagogical focus for badges. Inferred from kind if omitted. */
  skill?: SkillFocus;
  prompt: string;
  promptJa?: string;
  ttsText?: string;
  ttsLang?: string;
  choices?: Choice[];
  correctChoiceId?: string;
  explanationEn: string;
  explanationJa: string;
  /** Accepted speech transcripts (kana, kanji, or romaji). */
  expectedSpeech?: string[];
  /** Glyph to trace on the stroke pad. */
  strokeGlyph?: string;
  /** Pairs for match-the-columns drills. */
  pairs?: MatchPair[];
  /** Tiles to arrange into a sentence (includes distractors). */
  tiles?: SentenceTile[];
  /** Correct tile id order for sentence-build. */
  correctOrder?: string[];
  /** Hide furigana on tiles so the learner must recognize the script. */
  hideReadings?: boolean;
}

export interface TutorialBlock {
  title: string;
  titleJa?: string;
  bodyEn: string;
  bodyJa: string;
  tips?: string[];
}

/** Shown in a Learn phase before quizzes (alphabet / kana teaching). */
export interface TeachCard {
  glyph: string;
  reading: string;
  tipEn: string;
  tipJa: string;
  ttsText?: string;
  ttsLang?: "ja-JP" | "en-US";
  /** Mora pitch pattern, e.g. "LHH" (first mora low, rest high). */
  pitch?: string;
  meaningEn?: string;
  meaningJa?: string;
}

export interface LearningUnit {
  id: string;
  pathId: PathId;
  title: string;
  titleJa?: string;
  subtitle: string;
  examPart?: string;
  xpReward: number;
  tutorial: TutorialBlock;
  /** If set, learner studies these cards before any quiz. */
  teach?: TeachCard[];
  exercises: Exercise[];
}

export interface ProgressState {
  xp: number;
  streak: number;
  lastPlayedDate: string | null;
  completedUnits: string[];
  examBestPercent: number | null;
  skillXp: Record<SkillFocus, number>;
  speakAttempts: number;
  speakPasses: number;
  lastJapaneseUnitId: string | null;
}

export interface ReadingToken {
  surface: string;
  reading?: string;
  meaning?: string;
  tts?: string;
}

export interface GradedStory {
  id: string;
  title: string;
  titleJa: string;
  level: string;
  minutes: number;
  synopsisEn: string;
  synopsisJa: string;
  lines: ReadingToken[][];
  questions: Exercise[];
  furiganaDefault?: "on" | "off";
}

export interface DialogueLine {
  id: string;
  speaker: "lumi" | "you" | "friend";
  ja: string;
  reading: string;
  en: string;
  expectedSpeech?: string[];
}

export interface DialogueScene {
  id: string;
  title: string;
  titleJa: string;
  settingEn: string;
  settingJa: string;
  lines: DialogueLine[];
}

export interface SpeakDrill {
  id: string;
  ja: string;
  reading: string;
  en: string;
  pitch?: string;
  expectedSpeech?: string[];
}

export interface SrsCard {
  id: string;
  front: string;
  reading: string;
  meaning: string;
  ttsText: string;
  ease: number;
  intervalDays: number;
  due: string;
  reps: number;
  lapses: number;
}
