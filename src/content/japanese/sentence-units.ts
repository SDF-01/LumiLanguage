import { japaneseSentenceFirstUnit } from "@/content/japanese/sentence-first";
import { japaneseSentenceMixUnit } from "@/content/japanese/sentence-mix";
import {
  japaneseProEmailUnit,
  japaneseProMeetingUnit,
  japaneseProNewsUnit,
} from "@/content/japanese/sentence-work";
import type { Exercise, LearningUnit } from "@/lib/types";

export const japaneseSentenceUnits: LearningUnit[] = [
  japaneseSentenceFirstUnit,
  japaneseSentenceMixUnit,
  japaneseProEmailUnit,
  japaneseProNewsUnit,
  japaneseProMeetingUnit,
];

export function japaneseSentenceExercises(): Exercise[] {
  return japaneseSentenceUnits.flatMap((unit) =>
    unit.exercises.filter((exercise) => exercise.kind === "sentence-build"),
  );
}

export {
  japaneseSentenceFirstUnit,
  japaneseSentenceMixUnit,
  japaneseProEmailUnit,
  japaneseProNewsUnit,
  japaneseProMeetingUnit,
};
