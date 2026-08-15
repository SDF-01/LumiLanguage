import type { Choice, LearningUnit, TeachCard } from "@/lib/types";

type KanaCell = {
  kana: string;
  romaji: string;
  tipEn?: string;
  tipJa?: string;
};

function choicesFrom(chars: KanaCell[], order: number[]): Choice[] {
  const ids = ["a", "b", "c", "d"] as const;
  return order.slice(0, 4).map((charIndex, i) => ({
    id: ids[i],
    label: chars[charIndex]?.kana ?? chars[0].kana,
  }));
}

function correctIdFor(
  order: number[],
  targetIndex: number,
): "a" | "b" | "c" | "d" {
  const pos = order.indexOf(targetIndex);
  const ids = ["a", "b", "c", "d"] as const;
  return ids[Math.max(0, pos)] ?? "a";
}

function teachCardsFor(chars: KanaCell[]): TeachCard[] {
  return chars.map((c) => ({
    glyph: c.kana,
    reading: c.romaji,
    tipEn:
      c.tipEn ??
      `This is ${c.kana}. Say "${c.romaji}" while you look at the shape. Trace it top to bottom, left to right.`,
    tipJa:
      c.tipJa ??
      `これは ${c.kana} です。形を見ながら「${c.romaji}」と言いましょう。上から下、左から右でなぞります。`,
    ttsText: c.kana,
    ttsLang: "ja-JP",
  }));
}

export function createKanaLineUnit(options: {
  id: string;
  script: "hiragana" | "katakana";
  lineKey: string;
  titleJa: string;
  chars: KanaCell[];
  xpReward?: number;
}): LearningUnit {
  const { id, script, lineKey, titleJa, chars, xpReward = 100 } = options;
  const scriptLabel = script === "hiragana" ? "Hiragana" : "Katakana";
  const chart = chars.map((c) => `${c.kana} (${c.romaji})`).join(" · ");
  const n = chars.length;
  const i0 = 0;
  const i1 = Math.min(1, n - 1);
  const i2 = Math.min(2, n - 1);
  const iLast = n - 1;

  const readOrder = [i0, i1, i2, iLast];
  const writeOrder = [iLast, i0, i2, i1];
  const listenOrder = [i0, i2, iLast, i1];
  const write2Order = [i1, i2, i0, iLast];

  return {
    id,
    pathId: "japanese",
    title: `${scriptLabel} ${lineKey}`,
    titleJa,
    subtitle: `Learn the alphabet first, then practice: ${chars.map((c) => c.kana).join("")}`,
    xpReward,
    tutorial: {
      title: `Learn ${lineKey} before the quiz`,
      titleJa: `${titleJa}を先に覚える`,
      bodyEn: `First you will learn each character one by one with audio: ${chart}. Only after that do the short quiz (read → write → speak → listen). Do not skip the Learn step.`,
      bodyJa: `最初に1文字ずつ音声つきで覚えます：${chars
        .map((c) => `${c.kana}（${c.romaji}）`)
        .join("、")}。そのあと短いクイズ（読む→書く→話す→聞く）です。Learn を飛ばさないでください。`,
      tips: [
        "Study every character with Listen before the quiz",
        "Say the romaji while looking at the kana",
        "Stroke habit: top to bottom, left to right",
      ],
    },
    teach: teachCardsFor(chars),
    exercises: [
      {
        id: `${id}-read`,
        kind: "multiple-choice",
        skill: "read",
        prompt: `Read: which kana is '${chars[i0].romaji}'?`,
        promptJa: `読む：「${chars[i0].romaji}」はどれ？`,
        choices: choicesFrom(chars, readOrder),
        correctChoiceId: correctIdFor(readOrder, i0),
        explanationEn: `${chars[i0].kana} = ${chars[i0].romaji}.`,
        explanationJa: `${chars[i0].kana} = ${chars[i0].romaji} です。`,
      },
      {
        id: `${id}-write`,
        kind: "write-choice",
        skill: "write",
        prompt: `Write: which kana is '${chars[i1].romaji}'?`,
        promptJa: `書く：「${chars[i1].romaji}」はどれ？`,
        choices: choicesFrom(chars, writeOrder),
        correctChoiceId: correctIdFor(writeOrder, i1),
        strokeGlyph: chars[i1].kana,
        explanationEn: `${chars[i1].kana} = ${chars[i1].romaji}.`,
        explanationJa: `${chars[i1].kana} = ${chars[i1].romaji} です。`,
      },
      {
        id: `${id}-speak`,
        kind: "speak-prompt",
        skill: "speak",
        prompt: `Speak: say ${chars[i2].kana} (${chars[i2].romaji}).`,
        promptJa: `話す：${chars[i2].kana}（${chars[i2].romaji}）と言ってください。`,
        ttsText: chars[i2].kana,
        ttsLang: "ja-JP",
        expectedSpeech: [chars[i2].kana, chars[i2].romaji],
        explanationEn: `${chars[i2].kana} = ${chars[i2].romaji}.`,
        explanationJa: `${chars[i2].kana} = ${chars[i2].romaji} です。`,
      },
      {
        id: `${id}-listen`,
        kind: "listen-choice",
        skill: "listen",
        prompt: "Listen: which kana do you hear?",
        promptJa: "聞く：聞こえたかなは？",
        ttsText: chars[iLast].kana,
        ttsLang: "ja-JP",
        choices: choicesFrom(chars, listenOrder),
        correctChoiceId: correctIdFor(listenOrder, iLast),
        explanationEn: `You heard ${chars[iLast].kana} (${chars[iLast].romaji}).`,
        explanationJa: `${chars[iLast].kana}（${chars[iLast].romaji}）が聞こえました。`,
      },
      {
        id: `${id}-write2`,
        kind: "write-choice",
        skill: "write",
        prompt: `Write: choose ${chars[iLast].kana} (${chars[iLast].romaji}).`,
        promptJa: `書く：${chars[iLast].kana}（${chars[iLast].romaji}）を選ぶ。`,
        choices: choicesFrom(chars, write2Order),
        correctChoiceId: correctIdFor(write2Order, iLast),
        explanationEn: `${chars[iLast].kana} = ${chars[iLast].romaji}.`,
        explanationJa: `${chars[iLast].kana} = ${chars[iLast].romaji} です。`,
      },
    ],
  };
}

/** @deprecated Prefer createKanaLineUnit */
export function createHiraganaLineUnit(
  options: Omit<Parameters<typeof createKanaLineUnit>[0], "script">,
) {
  return createKanaLineUnit({ ...options, script: "hiragana" });
}
