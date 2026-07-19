import { createKanaLineUnit } from "@/content/japanese/kana-factory";

export const japaneseKatakanaKaUnit = createKanaLineUnit({
  id: "jp-katakana-ka-line",
  script: "katakana",
  lineKey: "カ行",
  titleJa: "カタカナ カ行",
  chars: [
    { kana: "カ", romaji: "ka" },
    { kana: "キ", romaji: "ki" },
    { kana: "ク", romaji: "ku" },
    { kana: "ケ", romaji: "ke" },
    { kana: "コ", romaji: "ko" },
  ],
});

export const japaneseKatakanaSaUnit = createKanaLineUnit({
  id: "jp-katakana-sa-line",
  script: "katakana",
  lineKey: "サ行",
  titleJa: "カタカナ サ行",
  chars: [
    { kana: "サ", romaji: "sa" },
    { kana: "シ", romaji: "shi" },
    { kana: "ス", romaji: "su" },
    { kana: "セ", romaji: "se" },
    { kana: "ソ", romaji: "so" },
  ],
});

export const japaneseKatakanaTaUnit = createKanaLineUnit({
  id: "jp-katakana-ta-line",
  script: "katakana",
  lineKey: "タ行",
  titleJa: "カタカナ タ行",
  chars: [
    { kana: "タ", romaji: "ta" },
    { kana: "チ", romaji: "chi" },
    { kana: "ツ", romaji: "tsu" },
    { kana: "テ", romaji: "te" },
    { kana: "ト", romaji: "to" },
  ],
});

export const japaneseKatakanaNaUnit = createKanaLineUnit({
  id: "jp-katakana-na-line",
  script: "katakana",
  lineKey: "ナ行",
  titleJa: "カタカナ ナ行",
  chars: [
    { kana: "ナ", romaji: "na" },
    { kana: "ニ", romaji: "ni" },
    { kana: "ヌ", romaji: "nu" },
    { kana: "ネ", romaji: "ne" },
    { kana: "ノ", romaji: "no" },
  ],
});

export const japaneseKatakanaHaUnit = createKanaLineUnit({
  id: "jp-katakana-ha-line",
  script: "katakana",
  lineKey: "ハ行",
  titleJa: "カタカナ ハ行",
  chars: [
    { kana: "ハ", romaji: "ha" },
    { kana: "ヒ", romaji: "hi" },
    { kana: "フ", romaji: "fu" },
    { kana: "ヘ", romaji: "he" },
    { kana: "ホ", romaji: "ho" },
  ],
});

export const japaneseKatakanaMaUnit = createKanaLineUnit({
  id: "jp-katakana-ma-line",
  script: "katakana",
  lineKey: "マ行",
  titleJa: "カタカナ マ行",
  chars: [
    { kana: "マ", romaji: "ma" },
    { kana: "ミ", romaji: "mi" },
    { kana: "ム", romaji: "mu" },
    { kana: "メ", romaji: "me" },
    { kana: "モ", romaji: "mo" },
  ],
});

export const japaneseKatakanaYaUnit = createKanaLineUnit({
  id: "jp-katakana-ya-line",
  script: "katakana",
  lineKey: "ヤ行",
  titleJa: "カタカナ ヤ行",
  chars: [
    { kana: "ヤ", romaji: "ya" },
    { kana: "ユ", romaji: "yu" },
    { kana: "ヨ", romaji: "yo" },
  ],
});

export const japaneseKatakanaRaUnit = createKanaLineUnit({
  id: "jp-katakana-ra-line",
  script: "katakana",
  lineKey: "ラ行",
  titleJa: "カタカナ ラ行",
  chars: [
    { kana: "ラ", romaji: "ra" },
    { kana: "リ", romaji: "ri" },
    { kana: "ル", romaji: "ru" },
    { kana: "レ", romaji: "re" },
    { kana: "ロ", romaji: "ro" },
  ],
});

export const japaneseKatakanaWaUnit = createKanaLineUnit({
  id: "jp-katakana-wa-line",
  script: "katakana",
  lineKey: "ワ行・ン",
  titleJa: "カタカナ ワヲン",
  chars: [
    { kana: "ワ", romaji: "wa" },
    { kana: "ヲ", romaji: "o (wo)" },
    { kana: "ン", romaji: "n" },
  ],
});
