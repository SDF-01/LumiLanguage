import { kanjiRecallExercises } from "@/content/japanese/kanji-factory";
import type { LearningUnit } from "@/lib/types";

export const japaneseKanjiNumbersTimeUnit: LearningUnit = {
  id: "jp-kanji-numbers-time",
  pathId: "japanese",
  title: "Kanji: numbers and time",
  titleJa: "漢字：数と時間",
  subtitle: "Read, write, speak, listen: 1 to 10, year, month, day",
  xpReward: 150,
  tutorial: {
    title: "Count and date",
    titleJa: "数える・日付",
    bodyEn:
      "Learn number kanji 一 to 十, then 年 (year), 月 (month), 日 (day). Romaji helpers: 一 ichi, 二 ni, 三 san, 四 yon/shi, 五 go, 六 roku, 七 nana/shichi, 八 hachi, 九 kyuu/ku, 十 juu, 年 nen/toshi, 月 gatsu/tsuki, 日 nichi/hi. Skill order: read, write, speak, listen.",
    bodyJa:
      "数字の漢字 一〜十 と、年・月・日 を学びます。ローマ字の目安：一 ichi、二 ni、三 san、四 yon/shi、五 go、六 roku、七 nana/shichi、八 hachi、九 kyuu/ku、十 juu、年 nen/toshi、月 gatsu/tsuki、日 nichi/hi。順番は読む→書く→話す→聞くです。",
    tips: [
      "四 is often yon in counting, shi in some compounds",
      "七 is often nana when counting aloud",
      "Dates use 月 and 日 after numbers",
    ],
  },
  teach: [
    {
      glyph: "四",
      reading: "yon / shi",
      tipEn: "四 = four. Often yon when counting.",
      tipJa: "四＝yon / shi。数えるときは yon が多い。",
      ttsText: "よん",
      ttsLang: "ja-JP",
    },
    {
      glyph: "五",
      reading: "go",
      tipEn: "五 = five.",
      tipJa: "五＝go。",
      ttsText: "ご",
      ttsLang: "ja-JP",
    },
    {
      glyph: "十",
      reading: "juu",
      tipEn: "十 = ten. A cross.",
      tipJa: "十＝juu。",
      ttsText: "じゅう",
      ttsLang: "ja-JP",
    },
    {
      glyph: "年",
      reading: "nen / toshi",
      tipEn: "年 = year.",
      tipJa: "年＝nen / toshi。",
      ttsText: "ねん",
      ttsLang: "ja-JP",
    },
    {
      glyph: "月",
      reading: "gatsu / tsuki",
      tipEn: "月 = month or moon.",
      tipJa: "月＝gatsu / tsuki。月や年月。",
      ttsText: "つき",
      ttsLang: "ja-JP",
    },
  ],
  exercises: kanjiRecallExercises("jp-knt", ["四", "五", "十", "年", "月"]),
};
