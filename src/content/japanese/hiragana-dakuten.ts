import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseHiraganaGaUnit = createKanaLineUnit({
  id: "jp-hiragana-ga-line",
  script: "hiragana",
  lineKey: "が行",
  titleJa: "ひらがな が行（濁音）",
  chars: [
    { kana: "が", romaji: "ga" },
    { kana: "ぎ", romaji: "gi" },
    { kana: "ぐ", romaji: "gu" },
    { kana: "げ", romaji: "ge" },
    { kana: "ご", romaji: "go" },
  ],
});

export const japaneseHiraganaZaUnit = createKanaLineUnit({
  id: "jp-hiragana-za-line",
  script: "hiragana",
  lineKey: "ざ行",
  titleJa: "ひらがな ざ行（濁音）",
  chars: [
    { kana: "ざ", romaji: "za" },
    { kana: "じ", romaji: "ji" },
    { kana: "ず", romaji: "zu" },
    { kana: "ぜ", romaji: "ze" },
    { kana: "ぞ", romaji: "zo" },
  ],
});

export const japaneseHiraganaDaUnit = createKanaLineUnit({
  id: "jp-hiragana-da-line",
  script: "hiragana",
  lineKey: "だ行",
  titleJa: "ひらがな だ行（濁音）",
  chars: [
    { kana: "だ", romaji: "da" },
    { kana: "ぢ", romaji: "ji (di)" },
    { kana: "づ", romaji: "zu (du)" },
    { kana: "で", romaji: "de" },
    { kana: "ど", romaji: "do" },
  ],
});

export const japaneseHiraganaBaUnit = createKanaLineUnit({
  id: "jp-hiragana-ba-line",
  script: "hiragana",
  lineKey: "ば行",
  titleJa: "ひらがな ば行（濁音）",
  chars: [
    { kana: "ば", romaji: "ba" },
    { kana: "び", romaji: "bi" },
    { kana: "ぶ", romaji: "bu" },
    { kana: "べ", romaji: "be" },
    { kana: "ぼ", romaji: "bo" },
  ],
});

export const japaneseHiraganaPaUnit = createKanaLineUnit({
  id: "jp-hiragana-pa-line",
  script: "hiragana",
  lineKey: "ぱ行",
  titleJa: "ひらがな ぱ行（半濁音）",
  chars: [
    { kana: "ぱ", romaji: "pa" },
    { kana: "ぴ", romaji: "pi" },
    { kana: "ぷ", romaji: "pu" },
    { kana: "ぺ", romaji: "pe" },
    { kana: "ぽ", romaji: "po" },
  ],
});
