export type PathId = "toeic" | "japanese";

export type StepKind = "tutorial" | "exercise" | "explanation" | "checkpoint";

export type SkillFocus = "read" | "write" | "speak" | "listen";

export type ExerciseKind =
  | "multiple-choice"
  | "write-choice"
  | "listen-choice"
  | "match"
  | "speak-prompt";

export interface Choice {
  id: string;
  label: string;
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
}

export interface TutorialBlock {
  title: string;
  titleJa?: string;
  bodyEn: string;
  bodyJa: string;
  tips?: string[];
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
  exercises: Exercise[];
}

export interface ProgressState {
  xp: number;
  streak: number;
  lastPlayedDate: string | null;
  completedUnits: string[];
  examBestPercent: number | null;
}
