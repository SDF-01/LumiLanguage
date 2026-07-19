import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseHiraganaSaUnit = createKanaLineUnit({
  id: "jp-hiragana-sa-line",
  script: "hiragana",
  lineKey: "さ行",
  titleJa: "ひらがな さ行",
  chars: [
    { kana: "さ", romaji: "sa", tipEn: "さ = sa.", tipJa: "さ＝sa。" },
    {
      kana: "し",
      romaji: "shi",
      tipEn: "し is shi (not si). Remember that spelling.",
      tipJa: "し は shi（si ではない）。",
    },
    { kana: "す", romaji: "su", tipEn: "す = su.", tipJa: "す＝su。" },
    { kana: "せ", romaji: "se", tipEn: "せ = se.", tipJa: "せ＝se。" },
    { kana: "そ", romaji: "so", tipEn: "そ = so.", tipJa: "そ＝so。" },
  ],
});
