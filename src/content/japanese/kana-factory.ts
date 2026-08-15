import type { Choice, Exercise, LearningUnit, TeachCard } from "@/lib/types";
import { distractorKana, distractorRomaji } from "@/lib/kana-lookalikes";

type KanaCell = {
  kana: string;
  romaji: string;
  tipEn?: string;
  tipJa?: string;
};

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

function labeledChoices(
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

function teachCardsFor(chars: KanaCell[]): TeachCard[] {
  return chars.map((c) => ({
    glyph: c.kana,
    reading: c.romaji,
    tipEn:
      c.tipEn ??
      `Cover the romaji. ${c.kana} is "${c.romaji}". Look, say it, then trace top to bottom, left to right.`,
    tipJa:
      c.tipJa ??
      `ローマ字を隠して ${c.kana} を「${c.romaji}」と言う。上から下、左から右でなぞる。`,
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
  const { id, script, lineKey, titleJa, chars, xpReward = 140 } = options;
  const scriptLabel = script === "hiragana" ? "Hiragana" : "Katakana";
  const chart = chars.map((c) => c.kana).join(" ");

  const exercises: Exercise[] = [];

  for (const cell of chars) {
    const sound = labeledChoices(
      cell.romaji,
      distractorRomaji(cell.romaji, script, 8),
    );
    exercises.push({
      id: `${id}-sound-${cell.romaji}`,
      kind: "multiple-choice",
      skill: "read",
      prompt: `No romaji. What sound is ${cell.kana}?`,
      promptJa: `ローマ字なし。${cell.kana} の音は？`,
      choices: sound.choices,
      correctChoiceId: sound.correctChoiceId,
      explanationEn: `${cell.kana} = ${cell.romaji}.`,
      explanationJa: `${cell.kana} = ${cell.romaji}。`,
    });

    const glyph = labeledChoices(cell.kana, distractorKana(cell.kana, script, 8));
    exercises.push({
      id: `${id}-glyph-${cell.romaji}`,
      kind: "multiple-choice",
      skill: "read",
      prompt: `Which character is "${cell.romaji}"? Lookalikes are mixed in.`,
      promptJa: `「${cell.romaji}」はどれ？似ている字が混ざっています。`,
      choices: glyph.choices,
      correctChoiceId: glyph.correctChoiceId,
      explanationEn: `${cell.romaji} is ${cell.kana}.`,
      explanationJa: `${cell.romaji} は ${cell.kana}。`,
    });
  }

  const strokeTargets = chars.slice(0, Math.min(chars.length, 3));
  for (const cell of strokeTargets) {
    exercises.push({
      id: `${id}-stroke-${cell.romaji}`,
      kind: "stroke-write",
      skill: "write",
      prompt: `Trace ${cell.kana}. Do not look at romaji — feel the stroke order.`,
      promptJa: `${cell.kana} をなぞる。ローマ字は見ない。`,
      strokeGlyph: cell.kana,
      explanationEn: `${cell.kana} = ${cell.romaji}.`,
      explanationJa: `${cell.kana} = ${cell.romaji}。`,
    });
  }

  const listenTargets = chars.slice(-Math.min(chars.length, 2));
  for (const cell of listenTargets) {
    const listen = labeledChoices(cell.kana, distractorKana(cell.kana, script, 8));
    exercises.push({
      id: `${id}-listen-${cell.romaji}`,
      kind: "listen-choice",
      skill: "listen",
      prompt: "Listen. Pick the character — not the romaji.",
      promptJa: "聞いて、文字を選ぶ。ローマ字ではない。",
      ttsText: cell.kana,
      ttsLang: "ja-JP",
      choices: listen.choices,
      correctChoiceId: listen.correctChoiceId,
      explanationEn: `You heard ${cell.kana} (${cell.romaji}).`,
      explanationJa: `${cell.kana}（${cell.romaji}）が聞こえました。`,
    });
  }

  const speakCell = chars[Math.min(2, chars.length - 1)] ?? chars[0];
  if (speakCell) {
    exercises.push({
      id: `${id}-speak`,
      kind: "speak-prompt",
      skill: "speak",
      prompt: `Say this character. Cover any romanization: ${speakCell.kana}`,
      promptJa: `ローマ字を隠して ${speakCell.kana} と言う。`,
      ttsText: speakCell.kana,
      ttsLang: "ja-JP",
      expectedSpeech: [speakCell.kana, speakCell.romaji],
      explanationEn: `${speakCell.kana} = ${speakCell.romaji}.`,
      explanationJa: `${speakCell.kana} = ${speakCell.romaji}。`,
    });
  }

  return {
    id,
    pathId: "japanese",
    title: `${scriptLabel} ${lineKey}`,
    titleJa,
    subtitle: `Learn every letter, then recall ${chart} without free romaji`,
    xpReward,
    tutorial: {
      title: `Learn ${lineKey} — then prove it`,
      titleJa: `${titleJa}を覚えてから試す`,
      bodyEn: `Study each character with audio first: ${chart}. The quiz asks every letter both ways (sound from shape, shape from sound) and mixes lookalikes. Romaji is not printed on the answers.`,
      bodyJa: `先に1文字ずつ音声で覚えます：${chart}。クイズは全文字を「形→音」と「音→形」の両方で出し、似ている字を混ぜます。答えにローマ字は書きません。`,
      tips: [
        "Cover the reading on the Learn cards after the first look",
        "ね／れ／わ and シ／ツ／ン are the traps — slow down",
        "Trace after you can name the sound from the shape alone",
      ],
    },
    teach: teachCardsFor(chars),
    exercises,
  };
}

/** @deprecated Prefer createKanaLineUnit */
export function createHiraganaLineUnit(
  options: Omit<Parameters<typeof createKanaLineUnit>[0], "script">,
) {
  return createKanaLineUnit({ ...options, script: "hiragana" });
}
