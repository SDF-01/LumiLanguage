import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseKatakanaYouonUnit = createKanaLineUnit({
  id: "jp-katakana-youon",
  script: "katakana",
  lineKey: "拗音",
  titleJa: "カタカナ 拗音",
  chars: [
    {
      kana: "キャ",
      romaji: "kya",
      tipEn: "キャ is kya. One beat, like きゃ.",
      tipJa: "キャは kya。きゃと同じ1拍。",
    },
    {
      kana: "シャ",
      romaji: "sha",
      tipEn: "シャ is sha. Common in シャツ.",
      tipJa: "シャは sha。シャツなどで頻出。",
    },
    {
      kana: "チュ",
      romaji: "chu",
      tipEn: "チュ is chu. Hear it in チュー.",
      tipJa: "チュは chu。",
    },
    {
      kana: "ニョ",
      romaji: "nyo",
      tipEn: "ニョ is nyo. Small ョ, not ヨ.",
      tipJa: "ニョは nyo。小さいョ。",
    },
    {
      kana: "ミュ",
      romaji: "myu",
      tipEn: "ミュ is myu. Music words love this: ミュージック.",
      tipJa: "ミュは myu。ミュージックなど。",
    },
  ],
});
