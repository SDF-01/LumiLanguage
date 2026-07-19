import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseHiraganaKaUnit = createKanaLineUnit({
  id: "jp-hiragana-ka-line",
  script: "hiragana",
  lineKey: "か行",
  titleJa: "ひらがな か行",
  chars: [
    { kana: "か", romaji: "ka", tipEn: "か = ka. K + a.", tipJa: "か＝ka。" },
    { kana: "き", romaji: "ki", tipEn: "き = ki. K + i.", tipJa: "き＝ki。" },
    { kana: "く", romaji: "ku", tipEn: "く = ku. K + u.", tipJa: "く＝ku。" },
    { kana: "け", romaji: "ke", tipEn: "け = ke. K + e.", tipJa: "け＝ke。" },
    { kana: "こ", romaji: "ko", tipEn: "こ = ko. K + o.", tipJa: "こ＝ko。" },
  ],
});
