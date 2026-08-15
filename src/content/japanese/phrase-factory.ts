import { speechTargets } from "@/lib/japanese-normalize";
import type { Exercise, LearningUnit, TeachCard } from "@/lib/types";

export type PhraseItem = {
  ja: string;
  reading: string;
  romaji: string;
  meaningEn: string;
  meaningJa: string;
  tipEn: string;
  tipJa: string;
  pitch?: string;
};

function distractors(items: PhraseItem[], keep: PhraseItem): PhraseItem[] {
  return items.filter((item) => item.ja !== keep.ja).slice(0, 3);
}

function meaningChoices(items: PhraseItem[], target: PhraseItem): Exercise["choices"] {
  const pool = [target, ...distractors(items, target)].slice(0, 4);
  const ids = ["a", "b", "c", "d"] as const;
  return pool.map((item, index) => ({
    id: ids[index] ?? "a",
    label: item.meaningEn,
  }));
}

function jaChoices(items: PhraseItem[], target: PhraseItem): Exercise["choices"] {
  const pool = [target, ...distractors(items, target)].slice(0, 4);
  const ids = ["a", "b", "c", "d"] as const;
  return pool.map((item, index) => ({
    id: ids[index] ?? "a",
    label: `${item.ja} (${item.romaji})`,
  }));
}

function correctId(choices: NonNullable<Exercise["choices"]>, label: string): string {
  return choices.find((choice) => choice.label === label)?.id ?? "a";
}

export function createPhraseUnit(options: {
  id: string;
  title: string;
  titleJa: string;
  subtitle: string;
  tutorialTitle: string;
  tutorialTitleJa: string;
  bodyEn: string;
  bodyJa: string;
  tips: string[];
  items: PhraseItem[];
  xpReward?: number;
}): LearningUnit {
  const { items, xpReward = 130 } = options;
  const teach: TeachCard[] = items.map((item) => ({
    glyph: item.ja,
    reading: item.romaji,
    tipEn: item.tipEn,
    tipJa: item.tipJa,
    ttsText: item.ja,
    ttsLang: "ja-JP",
    pitch: item.pitch,
    meaningEn: item.meaningEn,
    meaningJa: item.meaningJa,
  }));

  const first = items[0];
  const second = items[1] ?? items[0];
  const third = items[2] ?? items[0];
  const last = items[items.length - 1] ?? items[0];
  if (!first || !second || !third || !last) {
    throw new Error(`Phrase unit ${options.id} needs at least one item`);
  }

  const listenChoices = meaningChoices(items, first);
  const readChoices = jaChoices(items, second);
  const writeChoices = jaChoices(items, third);
  const listen2Choices = meaningChoices(items, last);

  const exercises: Exercise[] = [
    {
      id: `${options.id}-listen`,
      kind: "listen-choice",
      skill: "listen",
      prompt: "Listen. What does this mean?",
      promptJa: "聞いて、意味を選ぶ。",
      ttsText: first.ja,
      ttsLang: "ja-JP",
      choices: listenChoices,
      correctChoiceId: correctId(listenChoices ?? [], first.meaningEn),
      explanationEn: `${first.ja} (${first.romaji}) means ${first.meaningEn}.`,
      explanationJa: `${first.ja}は「${first.meaningJa}」です。`,
    },
    {
      id: `${options.id}-read`,
      kind: "multiple-choice",
      skill: "read",
      prompt: `Read: which Japanese says “${second.meaningEn}”?`,
      promptJa: `読む：「${second.meaningJa}」はどれ？`,
      choices: readChoices,
      correctChoiceId: correctId(
        readChoices ?? [],
        `${second.ja} (${second.romaji})`,
      ),
      explanationEn: `${second.ja} = ${second.meaningEn}.`,
      explanationJa: `${second.ja}＝${second.meaningJa}。`,
    },
    {
      id: `${options.id}-speak`,
      kind: "speak-prompt",
      skill: "speak",
      prompt: `Speak: say ${first.ja} (${first.romaji}).`,
      promptJa: `話す：${first.ja} と言ってください。`,
      ttsText: first.ja,
      ttsLang: "ja-JP",
      expectedSpeech: speechTargets(first.ja, first.reading, first.romaji),
      explanationEn: `${first.ja} means ${first.meaningEn}. Match Lumi’s melody.`,
      explanationJa: `${first.ja}は「${first.meaningJa}」。リズムをそろえましょう。`,
    },
    {
      id: `${options.id}-write`,
      kind: "write-choice",
      skill: "write",
      prompt: `Write: choose the line for “${third.meaningEn}”.`,
      promptJa: `書く：「${third.meaningJa}」を選ぶ。`,
      choices: writeChoices,
      correctChoiceId: correctId(
        writeChoices ?? [],
        `${third.ja} (${third.romaji})`,
      ),
      strokeGlyph: third.ja[0],
      explanationEn: `${third.ja} = ${third.meaningEn}.`,
      explanationJa: `${third.ja}＝${third.meaningJa}。`,
    },
    {
      id: `${options.id}-match`,
      kind: "match",
      skill: "read",
      prompt: "Match each Japanese line to English.",
      promptJa: "日本語と英語を結ぶ。",
      pairs: items.slice(0, 4).map((item, index) => ({
        id: `${options.id}-p${index}`,
        left: item.ja,
        right: item.meaningEn,
      })),
      explanationEn: "Read the whole line, then the meaning. Do not translate word-by-word yet.",
      explanationJa: "文全体を見てから意味を結びます。単語ごとに訳しすぎない。",
    },
    {
      id: `${options.id}-speak2`,
      kind: "speak-prompt",
      skill: "speak",
      prompt: `Speak: say ${last.ja} (${last.romaji}).`,
      promptJa: `話す：${last.ja} と言ってください。`,
      ttsText: last.ja,
      ttsLang: "ja-JP",
      expectedSpeech: speechTargets(last.ja, last.reading, last.romaji),
      explanationEn: `${last.ja} means ${last.meaningEn}.`,
      explanationJa: `${last.ja}は「${last.meaningJa}」。`,
    },
    {
      id: `${options.id}-listen2`,
      kind: "listen-choice",
      skill: "listen",
      prompt: "Listen again. Pick the meaning.",
      promptJa: "もう一度聞いて、意味を選ぶ。",
      ttsText: last.ja,
      ttsLang: "ja-JP",
      choices: listen2Choices,
      correctChoiceId: correctId(listen2Choices ?? [], last.meaningEn),
      explanationEn: `You heard ${last.ja}: ${last.meaningEn}.`,
      explanationJa: `${last.ja}（${last.meaningJa}）が聞こえました。`,
    },
  ];

  return {
    id: options.id,
    pathId: "japanese",
    title: options.title,
    titleJa: options.titleJa,
    subtitle: options.subtitle,
    xpReward,
    tutorial: {
      title: options.tutorialTitle,
      titleJa: options.tutorialTitleJa,
      bodyEn: options.bodyEn,
      bodyJa: options.bodyJa,
      tips: options.tips,
    },
    teach,
    exercises,
  };
}
