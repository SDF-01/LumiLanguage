import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseKatakanaGaUnit = createKanaLineUnit({
  id: "jp-katakana-ga-line",
  script: "katakana",
  lineKey: "ガ行",
  titleJa: "カタカナ ガ行（濁音）",
  chars: [
    { kana: "ガ", romaji: "ga" },
    { kana: "ギ", romaji: "gi" },
    { kana: "グ", romaji: "gu" },
    { kana: "ゲ", romaji: "ge" },
    { kana: "ゴ", romaji: "go" },
  ],
});

export const japaneseKatakanaZaUnit = createKanaLineUnit({
  id: "jp-katakana-za-line",
  script: "katakana",
  lineKey: "ザ行",
  titleJa: "カタカナ ザ行（濁音）",
  chars: [
    { kana: "ザ", romaji: "za" },
    { kana: "ジ", romaji: "ji" },
    { kana: "ズ", romaji: "zu" },
    { kana: "ゼ", romaji: "ze" },
    { kana: "ゾ", romaji: "zo" },
  ],
});

export const japaneseKatakanaDaUnit = createKanaLineUnit({
  id: "jp-katakana-da-line",
  script: "katakana",
  lineKey: "ダ行",
  titleJa: "カタカナ ダ行（濁音）",
  chars: [
    { kana: "ダ", romaji: "da" },
    { kana: "ヂ", romaji: "ji (di)" },
    { kana: "ヅ", romaji: "zu (du)" },
    { kana: "デ", romaji: "de" },
    { kana: "ド", romaji: "do" },
  ],
});

export const japaneseKatakanaBaUnit = createKanaLineUnit({
  id: "jp-katakana-ba-line",
  script: "katakana",
  lineKey: "バ行",
  titleJa: "カタカナ バ行（濁音）",
  chars: [
    { kana: "バ", romaji: "ba" },
    { kana: "ビ", romaji: "bi" },
    { kana: "ブ", romaji: "bu" },
    { kana: "ベ", romaji: "be" },
    { kana: "ボ", romaji: "bo" },
  ],
});

export const japaneseKatakanaPaUnit = createKanaLineUnit({
  id: "jp-katakana-pa-line",
  script: "katakana",
  lineKey: "パ行",
  titleJa: "カタカナ パ行（半濁音）",
  chars: [
    { kana: "パ", romaji: "pa" },
    { kana: "ピ", romaji: "pi" },
    { kana: "プ", romaji: "pu" },
    { kana: "ペ", romaji: "pe" },
    { kana: "ポ", romaji: "po" },
  ],
});
