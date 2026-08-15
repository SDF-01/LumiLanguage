export type KanaCell = {
  kana: string;
  romaji: string;
  pitch?: string;
};

export type KanaRow = {
  id: string;
  label: string;
  cells: Array<KanaCell | null>;
};

export const HIRAGANA_ROWS: KanaRow[] = [
  {
    id: "a",
    label: "あ行",
    cells: [
      { kana: "あ", romaji: "a", pitch: "H" },
      { kana: "い", romaji: "i", pitch: "H" },
      { kana: "う", romaji: "u", pitch: "H" },
      { kana: "え", romaji: "e", pitch: "H" },
      { kana: "お", romaji: "o", pitch: "H" },
    ],
  },
  {
    id: "ka",
    label: "か行",
    cells: [
      { kana: "か", romaji: "ka" },
      { kana: "き", romaji: "ki" },
      { kana: "く", romaji: "ku" },
      { kana: "け", romaji: "ke" },
      { kana: "こ", romaji: "ko" },
    ],
  },
  {
    id: "sa",
    label: "さ行",
    cells: [
      { kana: "さ", romaji: "sa" },
      { kana: "し", romaji: "shi" },
      { kana: "す", romaji: "su" },
      { kana: "せ", romaji: "se" },
      { kana: "そ", romaji: "so" },
    ],
  },
  {
    id: "ta",
    label: "た行",
    cells: [
      { kana: "た", romaji: "ta" },
      { kana: "ち", romaji: "chi" },
      { kana: "つ", romaji: "tsu" },
      { kana: "て", romaji: "te" },
      { kana: "と", romaji: "to" },
    ],
  },
  {
    id: "na",
    label: "な行",
    cells: [
      { kana: "な", romaji: "na" },
      { kana: "に", romaji: "ni" },
      { kana: "ぬ", romaji: "nu" },
      { kana: "ね", romaji: "ne" },
      { kana: "の", romaji: "no" },
    ],
  },
  {
    id: "ha",
    label: "は行",
    cells: [
      { kana: "は", romaji: "ha" },
      { kana: "ひ", romaji: "hi" },
      { kana: "ふ", romaji: "fu" },
      { kana: "へ", romaji: "he" },
      { kana: "ほ", romaji: "ho" },
    ],
  },
  {
    id: "ma",
    label: "ま行",
    cells: [
      { kana: "ま", romaji: "ma" },
      { kana: "み", romaji: "mi" },
      { kana: "む", romaji: "mu" },
      { kana: "め", romaji: "me" },
      { kana: "も", romaji: "mo" },
    ],
  },
  {
    id: "ya",
    label: "や行",
    cells: [
      { kana: "や", romaji: "ya" },
      null,
      { kana: "ゆ", romaji: "yu" },
      null,
      { kana: "よ", romaji: "yo" },
    ],
  },
  {
    id: "ra",
    label: "ら行",
    cells: [
      { kana: "ら", romaji: "ra" },
      { kana: "り", romaji: "ri" },
      { kana: "る", romaji: "ru" },
      { kana: "れ", romaji: "re" },
      { kana: "ろ", romaji: "ro" },
    ],
  },
  {
    id: "wa",
    label: "わ行",
    cells: [
      { kana: "わ", romaji: "wa" },
      null,
      null,
      null,
      { kana: "を", romaji: "o" },
    ],
  },
  {
    id: "n",
    label: "ん",
    cells: [{ kana: "ん", romaji: "n" }, null, null, null, null],
  },
];

export const HIRAGANA_DAKUTEN_ROWS: KanaRow[] = [
  {
    id: "ga",
    label: "が行",
    cells: [
      { kana: "が", romaji: "ga" },
      { kana: "ぎ", romaji: "gi" },
      { kana: "ぐ", romaji: "gu" },
      { kana: "げ", romaji: "ge" },
      { kana: "ご", romaji: "go" },
    ],
  },
  {
    id: "za",
    label: "ざ行",
    cells: [
      { kana: "ざ", romaji: "za" },
      { kana: "じ", romaji: "ji" },
      { kana: "ず", romaji: "zu" },
      { kana: "ぜ", romaji: "ze" },
      { kana: "ぞ", romaji: "zo" },
    ],
  },
  {
    id: "da",
    label: "だ行",
    cells: [
      { kana: "だ", romaji: "da" },
      { kana: "ぢ", romaji: "ji" },
      { kana: "づ", romaji: "zu" },
      { kana: "で", romaji: "de" },
      { kana: "ど", romaji: "do" },
    ],
  },
  {
    id: "ba",
    label: "ば行",
    cells: [
      { kana: "ば", romaji: "ba" },
      { kana: "び", romaji: "bi" },
      { kana: "ぶ", romaji: "bu" },
      { kana: "べ", romaji: "be" },
      { kana: "ぼ", romaji: "bo" },
    ],
  },
  {
    id: "pa",
    label: "ぱ行",
    cells: [
      { kana: "ぱ", romaji: "pa" },
      { kana: "ぴ", romaji: "pi" },
      { kana: "ぷ", romaji: "pu" },
      { kana: "ぺ", romaji: "pe" },
      { kana: "ぽ", romaji: "po" },
    ],
  },
];

export const HIRAGANA_YOUON_ROWS: KanaRow[] = [
  {
    id: "kya",
    label: "きゃ",
    cells: [
      { kana: "きゃ", romaji: "kya" },
      { kana: "きゅ", romaji: "kyu" },
      { kana: "きょ", romaji: "kyo" },
      null,
      null,
    ],
  },
  {
    id: "sha",
    label: "しゃ",
    cells: [
      { kana: "しゃ", romaji: "sha" },
      { kana: "しゅ", romaji: "shu" },
      { kana: "しょ", romaji: "sho" },
      null,
      null,
    ],
  },
  {
    id: "cha",
    label: "ちゃ",
    cells: [
      { kana: "ちゃ", romaji: "cha" },
      { kana: "ちゅ", romaji: "chu" },
      { kana: "ちょ", romaji: "cho" },
      null,
      null,
    ],
  },
  {
    id: "nya",
    label: "にゃ",
    cells: [
      { kana: "にゃ", romaji: "nya" },
      { kana: "にゅ", romaji: "nyu" },
      { kana: "にょ", romaji: "nyo" },
      null,
      null,
    ],
  },
];

function toKatakanaCell(cell: KanaCell | null): KanaCell | null {
  if (!cell) return null;
  const kana = Array.from(cell.kana)
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 0x3041 && code <= 0x3096) {
        return String.fromCharCode(code + 0x60);
      }
      return ch;
    })
    .join("");
  return { ...cell, kana };
}

function toKatakanaRows(rows: KanaRow[]): KanaRow[] {
  return rows.map((row) => ({
    ...row,
    cells: row.cells.map(toKatakanaCell),
  }));
}

export const KATAKANA_ROWS = toKatakanaRows(HIRAGANA_ROWS);
export const KATAKANA_DAKUTEN_ROWS = toKatakanaRows(HIRAGANA_DAKUTEN_ROWS);
export const KATAKANA_YOUON_ROWS = toKatakanaRows(HIRAGANA_YOUON_ROWS);

export type ChartTab = "hiragana" | "katakana" | "dakuten" | "youon";

export function rowsForTab(tab: ChartTab, script: "hiragana" | "katakana"): KanaRow[] {
  switch (tab) {
    case "hiragana":
      return script === "hiragana" ? HIRAGANA_ROWS : KATAKANA_ROWS;
    case "katakana":
      return KATAKANA_ROWS;
    case "dakuten":
      return script === "hiragana" ? HIRAGANA_DAKUTEN_ROWS : KATAKANA_DAKUTEN_ROWS;
    case "youon":
      return script === "hiragana" ? HIRAGANA_YOUON_ROWS : KATAKANA_YOUON_ROWS;
    default: {
      const _exhaustive: never = tab;
      return _exhaustive;
    }
  }
}

export function allKanaCells(): KanaCell[] {
  return [
    ...HIRAGANA_ROWS,
    ...HIRAGANA_DAKUTEN_ROWS,
    ...HIRAGANA_YOUON_ROWS,
    ...KATAKANA_ROWS,
    ...KATAKANA_DAKUTEN_ROWS,
    ...KATAKANA_YOUON_ROWS,
  ].flatMap((row) => row.cells.filter((cell): cell is KanaCell => cell !== null));
}
