import { kanjiSchool, type KanjiSchoolEntry } from "@/content/japanese/kanji-school";
import type { AlphaScript } from "@/lib/alphabet-mastery";
import {
  distractorKana,
  distractorRomaji,
  kanaPool,
  readingOf,
  twinsFor,
} from "@/lib/kana-lookalikes";

export type DrillChoice = { id: string; label: string };

export type DrillItem = {
  id: string;
  kind: "sound" | "glyph" | "meaning" | "twin";
  script: AlphaScript;
  promptEn: string;
  promptJa: string;
  glyph?: string;
  tts?: string;
  choices: DrillChoice[];
  correctId: string;
  explainEn: string;
  explainJa: string;
  targetId: string;
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

function labeled(
  correct: string,
  distractors: string[],
): { choices: DrillChoice[]; correctId: string } {
  const labels = shuffle([correct, ...distractors.slice(0, 3)]);
  const ids = ["a", "b", "c", "d"] as const;
  const choices = labels.map((label, index) => ({
    id: ids[index] ?? "a",
    label,
  }));
  const hit = choices.find((choice) => choice.label === correct);
  return { choices, correctId: hit?.id ?? "a" };
}

function kanaSoundItem(
  kana: string,
  romaji: string,
  script: "hiragana" | "katakana",
): DrillItem {
  const { choices, correctId } = labeled(
    romaji,
    distractorRomaji(romaji, script, 8),
  );
  return {
    id: `sound-${script}-${kana}`,
    kind: "sound",
    script,
    promptEn: "No romaji. What sound is this?",
    promptJa: "ローマ字なし。これは何と読む？",
    glyph: kana,
    tts: kana,
    choices,
    correctId,
    explainEn: `${kana} is ${romaji}.`,
    explainJa: `${kana} は ${romaji}。`,
    targetId: kana,
  };
}

function kanaGlyphItem(
  kana: string,
  romaji: string,
  script: "hiragana" | "katakana",
): DrillItem {
  const { choices, correctId } = labeled(
    kana,
    distractorKana(kana, script, 8),
  );
  return {
    id: `glyph-${script}-${kana}`,
    kind: "glyph",
    script,
    promptEn: `Which character is "${romaji}"? Lookalikes are in the list.`,
    promptJa: `「${romaji}」はどれ？似ている字が混ざっています。`,
    tts: kana,
    choices,
    correctId,
    explainEn: `${romaji} is ${kana}.`,
    explainJa: `${romaji} は ${kana}。`,
    targetId: kana,
  };
}

function kanjiMeaningItem(entry: KanjiSchoolEntry): DrillItem {
  const others = shuffle(
    kanjiSchool.filter((item) => item.kanji !== entry.kanji),
  )
    .slice(0, 3)
    .map((item) => item.meaningEn);
  const { choices, correctId } = labeled(entry.meaningEn, others);
  return {
    id: `mean-${entry.kanji}`,
    kind: "meaning",
    script: "kanji",
    promptEn: "What does this kanji mean?",
    promptJa: "この漢字の意味は？",
    glyph: entry.kanji,
    tts: entry.tts,
    choices,
    correctId,
    explainEn: `${entry.kanji} = ${entry.meaningEn}. ${entry.kun} / ${entry.on}.`,
    explainJa: `${entry.kanji}＝${entry.meaningJa}。${entry.kun}／${entry.on}。`,
    targetId: entry.kanji,
  };
}

function kanjiGlyphItem(entry: KanjiSchoolEntry): DrillItem {
  const others = shuffle(
    kanjiSchool.filter((item) => item.kanji !== entry.kanji),
  )
    .slice(0, 3)
    .map((item) => item.kanji);
  const { choices, correctId } = labeled(entry.kanji, others);
  return {
    id: `kglyph-${entry.kanji}`,
    kind: "glyph",
    script: "kanji",
    promptEn: `Which kanji means "${entry.meaningEn}"?`,
    promptJa: `「${entry.meaningEn}」の漢字はどれ？`,
    tts: entry.tts,
    choices,
    correctId,
    explainEn: `${entry.meaningEn} is ${entry.kanji}.`,
    explainJa: `${entry.meaningEn} は ${entry.kanji}。`,
    targetId: entry.kanji,
  };
}

export function buildKanaDrill(
  script: "hiragana" | "katakana",
  count = 12,
): DrillItem[] {
  const pool = shuffle(kanaPool(script).filter((cell) => cell.kana.length === 1));
  const items: DrillItem[] = [];
  for (const cell of pool) {
    if (items.length >= count) break;
    items.push(
      items.length % 2 === 0
        ? kanaSoundItem(cell.kana, cell.romaji, script)
        : kanaGlyphItem(cell.kana, cell.romaji, script),
    );
  }
  return items;
}

export function buildKanjiDrill(count = 12): DrillItem[] {
  const pool = shuffle(kanjiSchool);
  const items: DrillItem[] = [];
  for (const entry of pool) {
    if (items.length >= count) break;
    items.push(
      items.length % 2 === 0 ? kanjiMeaningItem(entry) : kanjiGlyphItem(entry),
    );
  }
  return items;
}

export function buildTwinDrill(
  script: "hiragana" | "katakana",
): DrillItem[] {
  return shuffle(twinsFor(script)).map(([left, right], index) => {
    const askLeft = index % 2 === 0;
    const target = askLeft ? left : right;
    const romaji = readingOf(target, script);
    const { choices, correctId } = labeled(target, [askLeft ? right : left, ...distractorKana(target, script, 2)]);
    return {
      id: `twin-${script}-${left}-${right}`,
      kind: "twin" as const,
      script,
      promptEn: `Twins. Which one is "${romaji}"?`,
      promptJa: `似ている字。「${romaji}」はどれ？`,
      tts: target,
      choices,
      correctId,
      explainEn: `${romaji} is ${target}. Do not confuse ${left} and ${right}.`,
      explainJa: `${romaji} は ${target}。${left} と ${right} を混同しない。`,
      targetId: target,
    };
  });
}

export function buildDrill(script: AlphaScript, mode: "drill" | "twins"): DrillItem[] {
  if (script === "kanji") return buildKanjiDrill();
  if (mode === "twins") return buildTwinDrill(script);
  return buildKanaDrill(script);
}
