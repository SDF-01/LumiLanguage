import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseHiraganaTaUnit = createKanaLineUnit({
  id: "jp-hiragana-ta-line",
  script: "hiragana",
  lineKey: "た行",
  titleJa: "ひらがな た行",
  chars: [
    { kana: "た", romaji: "ta" },
    { kana: "ち", romaji: "chi" },
    { kana: "つ", romaji: "tsu" },
    { kana: "て", romaji: "te" },
    { kana: "と", romaji: "to" },
  ],
});

export const japaneseHiraganaNaUnit = createKanaLineUnit({
  id: "jp-hiragana-na-line",
  script: "hiragana",
  lineKey: "な行",
  titleJa: "ひらがな な行",
  chars: [
    { kana: "な", romaji: "na" },
    { kana: "に", romaji: "ni" },
    { kana: "ぬ", romaji: "nu" },
    { kana: "ね", romaji: "ne" },
    { kana: "の", romaji: "no" },
  ],
});

export const japaneseHiraganaHaUnit = createKanaLineUnit({
  id: "jp-hiragana-ha-line",
  script: "hiragana",
  lineKey: "は行",
  titleJa: "ひらがな は行",
  chars: [
    { kana: "は", romaji: "ha" },
    { kana: "ひ", romaji: "hi" },
    { kana: "ふ", romaji: "fu" },
    { kana: "へ", romaji: "he" },
    { kana: "ほ", romaji: "ho" },
  ],
});

export const japaneseHiraganaMaUnit = createKanaLineUnit({
  id: "jp-hiragana-ma-line",
  script: "hiragana",
  lineKey: "ま行",
  titleJa: "ひらがな ま行",
  chars: [
    { kana: "ま", romaji: "ma" },
    { kana: "み", romaji: "mi" },
    { kana: "む", romaji: "mu" },
    { kana: "め", romaji: "me" },
    { kana: "も", romaji: "mo" },
  ],
});

export const japaneseHiraganaYaUnit = createKanaLineUnit({
  id: "jp-hiragana-ya-line",
  script: "hiragana",
  lineKey: "や行",
  titleJa: "ひらがな や行",
  chars: [
    { kana: "や", romaji: "ya" },
    { kana: "ゆ", romaji: "yu" },
    { kana: "よ", romaji: "yo" },
  ],
});

export const japaneseHiraganaRaUnit = createKanaLineUnit({
  id: "jp-hiragana-ra-line",
  script: "hiragana",
  lineKey: "ら行",
  titleJa: "ひらがな ら行",
  chars: [
    { kana: "ら", romaji: "ra" },
    { kana: "り", romaji: "ri" },
    { kana: "る", romaji: "ru" },
    { kana: "れ", romaji: "re" },
    { kana: "ろ", romaji: "ro" },
  ],
});

export const japaneseHiraganaWaUnit = createKanaLineUnit({
  id: "jp-hiragana-wa-line",
  script: "hiragana",
  lineKey: "わ行・ん",
  titleJa: "ひらがな わをん",
  chars: [
    { kana: "わ", romaji: "wa" },
    { kana: "を", romaji: "o (wo)" },
    { kana: "ん", romaji: "n" },
  ],
});
