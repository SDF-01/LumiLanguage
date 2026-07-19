import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseHiraganaAUnit = createKanaLineUnit({
  id: "jp-hiragana-a-line",
  script: "hiragana",
  lineKey: "あ行",
  titleJa: "ひらがな あ行",
  chars: [
    {
      kana: "あ",
      romaji: "a",
      tipEn: "あ is a. Soft open vowel, like the a in father (short).",
      tipJa: "あ は a。口を自然に開けて短く。",
    },
    {
      kana: "い",
      romaji: "i",
      tipEn: "い is i. Smile a little; like ee in see, but shorter.",
      tipJa: "い は i。短くはっきり。",
    },
    {
      kana: "う",
      romaji: "u",
      tipEn: "う is u. Round lips; not English yoo.",
      tipJa: "う は u。唇を丸めて短く。",
    },
    {
      kana: "え",
      romaji: "e",
      tipEn: "え is e. Like e in get, clean and short.",
      tipJa: "え は e。短くはっきり。",
    },
    {
      kana: "お",
      romaji: "o",
      tipEn: "お is o. Pure o, not English ow.",
      tipJa: "お は o。おを短く。",
    },
  ],
});
