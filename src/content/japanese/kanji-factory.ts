import { kanjiById } from "@/content/japanese/kanji-school";
import type { Choice, Exercise } from "@/lib/types";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = copy[i];
    const swap = copy[j];
    if (current !== undefined && swap !== undefined) {
      copy[i] = swap;
      copy[j] = current;
    }
  }
  return copy;
}

function labeled(
  correct: string,
  distractors: string[],
): { choices: Choice[]; correctChoiceId: string } {
  const labels = shuffle([correct, ...distractors.slice(0, 3)]);
  const ids = ["a", "b", "c", "d"] as const;
  const choices = labels.map((label, index) => ({
    id: ids[index] ?? "a",
    label,
  }));
  const hit = choices.find((choice) => choice.label === correct);
  return { choices, correctChoiceId: hit?.id ?? "a" };
}

export function kanjiRecallExercises(
  prefix: string,
  glyphs: string[],
): Exercise[] {
  const entries = glyphs
    .map((glyph) => kanjiById(glyph))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const exercises: Exercise[] = [];

  for (const entry of entries) {
    const meaning = labeled(
      entry.meaningEn,
      entries
        .filter((item) => item.kanji !== entry.kanji)
        .map((item) => item.meaningEn),
    );
    exercises.push({
      id: `${prefix}-mean-${entry.kanji}`,
      kind: "multiple-choice",
      skill: "read",
      prompt: `What does ${entry.kanji} mean? No reading is printed.`,
      promptJa: `${entry.kanji} の意味は？読みは書いていません。`,
      choices: meaning.choices,
      correctChoiceId: meaning.correctChoiceId,
      explanationEn: `${entry.kanji} = ${entry.meaningEn} (${entry.kun} / ${entry.on}).`,
      explanationJa: `${entry.kanji}＝${entry.meaningJa}。`,
    });

    const glyph = labeled(
      entry.kanji,
      entries.filter((item) => item.kanji !== entry.kanji).map((item) => item.kanji),
    );
    exercises.push({
      id: `${prefix}-glyph-${entry.kanji}`,
      kind: "multiple-choice",
      skill: "read",
      prompt: `Which kanji means "${entry.meaningEn}"?`,
      promptJa: `「${entry.meaningEn}」の漢字はどれ？`,
      choices: glyph.choices,
      correctChoiceId: glyph.correctChoiceId,
      explanationEn: `${entry.meaningEn} is ${entry.kanji}.`,
      explanationJa: `${entry.meaningEn} は ${entry.kanji}。`,
    });
  }

  const first = entries[0];
  const second = entries[1] ?? first;
  if (first) {
    exercises.push({
      id: `${prefix}-stroke-${first.kanji}`,
      kind: "stroke-write",
      skill: "write",
      prompt: `Trace ${first.kanji}. Name it before you lift your finger.`,
      promptJa: `${first.kanji} をなぞる。書く前に音を言う。`,
      strokeGlyph: first.kanji,
      explanationEn: `${first.kanji} = ${first.meaningEn}.`,
      explanationJa: `${first.kanji}＝${first.meaningJa}。`,
    });
  }
  if (second) {
    exercises.push({
      id: `${prefix}-speak-${second.kanji}`,
      kind: "speak-prompt",
      skill: "speak",
      prompt: `Say ${second.kanji}. Reading is not shown.`,
      promptJa: `${second.kanji} を言う。読みは出していません。`,
      ttsText: second.tts,
      ttsLang: "ja-JP",
      expectedSpeech: [second.tts, second.kun, second.on, second.meaningEn],
      explanationEn: `${second.kanji} = ${second.meaningEn} (${second.kun} / ${second.on}).`,
      explanationJa: `${second.kanji}＝${second.meaningJa}。`,
    });
  }

  return exercises;
}
