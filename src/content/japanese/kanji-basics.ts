import { kanjiRecallExercises } from "@/content/japanese/kanji-factory";
import type { LearningUnit } from "@/lib/types";

export const japaneseKanjiBasicsUnit: LearningUnit = {
  id: "jp-kanji-basics",
  pathId: "japanese",
  title: "Kanji basics",
  titleJa: "漢字入門",
  subtitle: "Read, write, speak, and listen to first everyday kanji",
  xpReward: 140,
  tutorial: {
    title: "What is kanji?",
    titleJa: "漢字とは",
    bodyEn:
      "Kanji are characters that carry meaning. Japanese writing mixes hiragana, katakana, and kanji. We learn each new kanji in order: read it, write (choose) it, say it, then hear it. Start with high-frequency beginners: 一, 二, 三, 人, 日.",
    bodyJa:
      "漢字は意味を持つ文字です。日本語はひらがな・カタカナ・漢字を混ぜて書きます。新しい漢字は読む→書く→話す→聞くの順で学びます。まずは 一・二・三・人・日 から。",
    tips: [
      "One kanji can have more than one reading (on/kun)",
      "Count strokes when you study writing",
      "Learn words, not only isolated characters",
    ],
  },
  teach: [
    {
      glyph: "一",
      reading: "ichi / hito(tsu)",
      tipEn: "一 means one. One horizontal stroke.",
      tipJa: "一は「いち」。横線1本。",
      ttsText: "いち",
      ttsLang: "ja-JP",
    },
    {
      glyph: "二",
      reading: "ni / futa(tsu)",
      tipEn: "二 means two. Two strokes.",
      tipJa: "二は「に」。横線2本。",
      ttsText: "に",
      ttsLang: "ja-JP",
    },
    {
      glyph: "三",
      reading: "san / mit(tsu)",
      tipEn: "三 means three. Three strokes.",
      tipJa: "三は「さん」。横線3本。",
      ttsText: "さん",
      ttsLang: "ja-JP",
    },
    {
      glyph: "人",
      reading: "hito / jin",
      tipEn: "人 means person. Looks like a person walking.",
      tipJa: "人は「ひと」。人の形。",
      ttsText: "ひと",
      ttsLang: "ja-JP",
    },
    {
      glyph: "日",
      reading: "hi / nichi",
      tipEn: "日 means sun or day. A window of light.",
      tipJa: "日は「ひ／にち」。太陽や日。",
      ttsText: "ひ",
      ttsLang: "ja-JP",
    },
  ],
  exercises: kanjiRecallExercises("jp-kj", ["一", "二", "三", "人", "日"]),
};
