import type { Choice, LearningUnit } from "@/lib/types";

type KanaCell = { kana: string; romaji: string };

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
    subtitle: `Read, write, speak, listen: ${chars.map((c) => c.kana).join("")}`,
    xpReward,
    tutorial: {
      title: `${lineKey} line`,
      titleJa,
      bodyEn: `Learn the ${script} ${lineKey} line: read → write → speak → listen. Characters: ${chars
        .map((c) => `${c.kana} (${c.romaji})`)
        .join(", ")}.`,
      bodyJa: `${titleJa}を、読む→書く→話す→聞くの順で。文字：${chars
        .map((c) => `${c.kana}（${c.romaji}）`)
        .join("、")}。`,
      tips: [
        "Review the previous line for 2 minutes first",
        "Say romaji, then look at the kana",
        "Use Listen twice if needed",
      ],
    },
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
