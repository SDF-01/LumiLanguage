import type {
  Exercise,
  LearningUnit,
  ScriptKind,
  SentenceTile,
  TeachCard,
} from "@/lib/types";

export type SentenceItem = {
  id: string;
  promptEn: string;
  promptJa: string;
  ttsText: string;
  tiles: Array<{
    id: string;
    label: string;
    script: ScriptKind;
    reading?: string;
  }>;
  order: string[];
  extra?: Array<{
    id: string;
    label: string;
    script: ScriptKind;
    reading?: string;
  }>;
  explainEn: string;
  explainJa: string;
  hideReadings?: boolean;
};

export function toTiles(
  parts: SentenceItem["tiles"],
  extra: SentenceItem["extra"] = [],
): SentenceTile[] {
  return [...parts, ...extra];
}

export function sentenceExercise(item: SentenceItem): Exercise {
  return {
    id: item.id,
    kind: "sentence-build",
    skill: "read",
    prompt: item.promptEn,
    promptJa: item.promptJa,
    ttsText: item.ttsText,
    ttsLang: "ja-JP",
    tiles: toTiles(item.tiles, item.extra),
    correctOrder: item.order,
    hideReadings: item.hideReadings,
    explanationEn: item.explainEn,
    explanationJa: item.explainJa,
  };
}

export function createSentenceUnit(options: {
  id: string;
  title: string;
  titleJa: string;
  subtitle: string;
  tutorialTitle: string;
  tutorialTitleJa: string;
  bodyEn: string;
  bodyJa: string;
  tips: string[];
  teach: TeachCard[];
  items: SentenceItem[];
  xpReward?: number;
  hideReadings?: boolean;
}): LearningUnit {
  return {
    id: options.id,
    pathId: "japanese",
    title: options.title,
    titleJa: options.titleJa,
    subtitle: options.subtitle,
    xpReward: options.xpReward ?? 140,
    tutorial: {
      title: options.tutorialTitle,
      titleJa: options.tutorialTitleJa,
      bodyEn: options.bodyEn,
      bodyJa: options.bodyJa,
      tips: options.tips,
    },
    teach: options.teach,
    exercises: options.items.map((item) =>
      sentenceExercise({
        ...item,
        hideReadings: item.hideReadings ?? options.hideReadings,
      }),
    ),
  };
}
