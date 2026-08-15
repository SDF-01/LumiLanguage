import {
  HIRAGANA_DAKUTEN_ROWS,
  HIRAGANA_ROWS,
  HIRAGANA_YOUON_ROWS,
  KATAKANA_DAKUTEN_ROWS,
  KATAKANA_ROWS,
  KATAKANA_YOUON_ROWS,
  type KanaCell,
} from "@/lib/kana-chart";

const HIRAGANA_NEAR: Record<string, string[]> = {
  あ: ["お", "め", "ぬ"],
  い: ["り", "こ", "ん"],
  う: ["つ", "ら", "ろ"],
  え: ["へ", "ん", "て"],
  お: ["あ", "を", "む"],
  か: ["が", "た", "わ"],
  き: ["さ", "ち", "ぎ"],
  く: ["へ", "し", "ぐ"],
  け: ["は", "ほ", "げ"],
  こ: ["に", "い", "ご"],
  さ: ["き", "ち", "ざ"],
  し: ["つ", "ん", "じ"],
  す: ["む", "ぬ", "ず"],
  せ: ["さ", "ぜ", "れ"],
  そ: ["ん", "て", "ぞ"],
  た: ["な", "に", "だ"],
  ち: ["さ", "き", "ぢ"],
  つ: ["う", "し", "て"],
  て: ["と", "そ", "で"],
  と: ["て", "ど", "こ"],
  な: ["た", "に", "め"],
  に: ["こ", "た", "ぬ"],
  ぬ: ["め", "あ", "す"],
  ね: ["れ", "わ", "ぬ"],
  の: ["め", "ぬ", "あ"],
  は: ["ほ", "け", "ば"],
  ひ: ["い", "り", "び"],
  ふ: ["う", "ぶ", "ぬ"],
  へ: ["く", "え", "べ"],
  ほ: ["は", "ま", "ぼ"],
  ま: ["ほ", "は", "よ"],
  み: ["ん", "し", "よ"],
  む: ["す", "ぬ", "お"],
  め: ["ぬ", "あ", "の"],
  も: ["も", "ほ", "を"],
  や: ["ゆ", "よ", "ま"],
  ゆ: ["つ", "よ", "う"],
  よ: ["ま", "ゆ", "や"],
  ら: ["う", "ち", "ろ"],
  り: ["い", "こ", "ん"],
  る: ["ろ", "す", "を"],
  れ: ["ね", "わ", "く"],
  ろ: ["る", "て", "を"],
  わ: ["れ", "ね", "ん"],
  を: ["お", "て", "ろ"],
  ん: ["そ", "し", "の"],
};

const KATAKANA_NEAR: Record<string, string[]> = {
  ア: ["マ", "ヤ", "ス"],
  イ: ["リ", "ト", "ン"],
  ウ: ["ワ", "ラ", "フ"],
  エ: ["ユ", "ェ", "フ"],
  オ: ["ホ", "タ", "ヲ"],
  カ: ["ガ", "ク", "タ"],
  キ: ["ギ", "チ", "サ"],
  ク: ["ケ", "タ", "ワ"],
  ケ: ["ク", "ハ", "タ"],
  コ: ["ユ", "ロ", "ゴ"],
  サ: ["セ", "チ", "ザ"],
  シ: ["ツ", "ン", "ソ"],
  ス: ["ヌ", "マ", "ズ"],
  セ: ["サ", "ゼ", "ヒ"],
  ソ: ["ン", "リ", "ツ"],
  タ: ["ナ", "ヌ", "ダ"],
  チ: ["テ", "サ", "ヂ"],
  ツ: ["シ", "ソ", "ン"],
  テ: ["チ", "ト", "デ"],
  ト: ["チ", "イ", "ド"],
  ナ: ["メ", "タ", "ヌ"],
  ニ: ["コ", "ミ", "エ"],
  ヌ: ["ス", "メ", "フ"],
  ネ: ["ホ", "ヌ", "レ"],
  ノ: ["ソ", "ン", "メ"],
  ハ: ["ホ", "バ", "マ"],
  ヒ: ["ビ", "モ", "イ"],
  フ: ["ウ", "ワ", "ヌ"],
  ヘ: ["ク", "ベ", "ス"],
  ホ: ["マ", "ネ", "ボ"],
  マ: ["ム", "ホ", "ア"],
  ミ: ["シ", "ン", "ヨ"],
  ム: ["マ", "ス", "ノ"],
  メ: ["ヌ", "ナ", "ノ"],
  モ: ["モ", "ヒ", "ホ"],
  ヤ: ["ア", "ユ", "マ"],
  ユ: ["コ", "エ", "ヨ"],
  ヨ: ["ユ", "ミ", "ヲ"],
  ラ: ["ウ", "フ", "ヲ"],
  リ: ["イ", "ソ", "ン"],
  ル: ["レ", "ノ", "ヲ"],
  レ: ["ル", "ク", "ソ"],
  ロ: ["コ", "ウ", "ヲ"],
  ワ: ["ウ", "フ", "ヲ"],
  ヲ: ["ヨ", "ユ", "オ"],
  ン: ["ソ", "シ", "ツ"],
};

export const HIRAGANA_TWINS: Array<[string, string]> = [
  ["ね", "れ"],
  ["れ", "わ"],
  ["ぬ", "め"],
  ["あ", "お"],
  ["は", "ほ"],
  ["る", "ろ"],
  ["さ", "き"],
  ["そ", "ん"],
  ["つ", "う"],
  ["い", "り"],
];

export const KATAKANA_TWINS: Array<[string, string]> = [
  ["シ", "ツ"],
  ["ソ", "ン"],
  ["シ", "ン"],
  ["ウ", "ワ"],
  ["ス", "ヌ"],
  ["ク", "ケ"],
  ["コ", "ユ"],
  ["マ", "ム"],
  ["ト", "イ"],
  ["ツ", "シ"],
];

function cellsOf(
  script: "hiragana" | "katakana",
): KanaCell[] {
  const rows =
    script === "hiragana"
      ? [...HIRAGANA_ROWS, ...HIRAGANA_DAKUTEN_ROWS, ...HIRAGANA_YOUON_ROWS]
      : [...KATAKANA_ROWS, ...KATAKANA_DAKUTEN_ROWS, ...KATAKANA_YOUON_ROWS];
  return rows.flatMap((row) =>
    row.cells.filter((cell): cell is KanaCell => cell !== null),
  );
}

export function kanaPool(script: "hiragana" | "katakana"): KanaCell[] {
  return cellsOf(script);
}

function unique(values: string[]): string[] {
  return [...new Set(values)];
}

export function distractorKana(
  kana: string,
  script: "hiragana" | "katakana",
  count: number,
): string[] {
  const near = (script === "hiragana" ? HIRAGANA_NEAR : KATAKANA_NEAR)[kana] ?? [];
  const pool = cellsOf(script)
    .map((cell) => cell.kana)
    .filter((item) => item !== kana && item.length === kana.length);
  const picked = unique([...near.filter((item) => item !== kana), ...pool]);
  return picked.slice(0, count);
}

export function distractorRomaji(
  romaji: string,
  script: "hiragana" | "katakana",
  count: number,
): string[] {
  const pool = unique(
    cellsOf(script)
      .map((cell) => cell.romaji)
      .filter((item) => item !== romaji),
  );
  const sameFamily = pool.filter((item) => {
    const tail = romaji.slice(-1);
    return item.endsWith(tail) || item[0] === romaji[0];
  });
  return unique([...sameFamily, ...pool]).slice(0, count);
}

export function twinsFor(script: "hiragana" | "katakana"): Array<[string, string]> {
  return script === "hiragana" ? HIRAGANA_TWINS : KATAKANA_TWINS;
}

export function readingOf(
  kana: string,
  script: "hiragana" | "katakana",
): string {
  return cellsOf(script).find((cell) => cell.kana === kana)?.romaji ?? kana;
}
