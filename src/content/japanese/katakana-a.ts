import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseKatakanaAUnit = createKanaLineUnit({
  id: "jp-katakana-a-line",
  script: "katakana",
  lineKey: "ア行",
  titleJa: "カタカナ ア行",
  chars: [
    {
      kana: "ア",
      romaji: "a",
      tipEn: "ア is katakana a. More angular than hiragana あ.",
      tipJa: "ア はカタカナの a。あより角ばっています。",
    },
    { kana: "イ", romaji: "i", tipEn: "イ = i.", tipJa: "イ＝i。" },
    { kana: "ウ", romaji: "u", tipEn: "ウ = u.", tipJa: "ウ＝u。" },
    { kana: "エ", romaji: "e", tipEn: "エ = e.", tipJa: "エ＝e。" },
    { kana: "オ", romaji: "o", tipEn: "オ = o.", tipJa: "オ＝o。" },
  ],
});
