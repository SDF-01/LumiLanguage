import { kanjiRecallExercises } from "@/content/japanese/kanji-factory";
import type { LearningUnit } from "@/lib/types";

export const japaneseKanjiNatureUnit: LearningUnit = {
  id: "jp-kanji-nature",
  pathId: "japanese",
  title: "Kanji: nature",
  titleJa: "漢字：自然",
  subtitle: "Read, write, speak, listen: mountain, river, tree, water, fire, sun, moon",
  xpReward: 140,
  tutorial: {
    title: "Nature kanji",
    titleJa: "自然の漢字",
    bodyEn:
      "These kanji name things you see outdoors. Learn meaning first, then a common reading with romaji: 山 yama (mountain), 川 kawa (river), 木 ki (tree), 水 mizu (water), 火 hi (fire), 日 hi / nichi (sun or day), 月 tsuki / getsu (moon or month). Order: read, write, speak, listen.",
    bodyJa:
      "外で見るものを表す漢字です。意味のあと、よく使う読みとローマ字：山 yama、川 kawa、木 ki、水 mizu、火 hi、日 hi / nichi、月 tsuki / getsu。順番は読む→書く→話す→聞くです。",
    tips: [
      "Picture the shape: 山 looks like peaks",
      "水 and 川 both relate to water",
      "日 and 月 appear in dates too",
    ],
  },
  teach: [
    {
      glyph: "山",
      reading: "yama",
      tipEn: "山 = mountain. Three peaks.",
      tipJa: "山＝yama。山のかたち。",
      ttsText: "やま",
      ttsLang: "ja-JP",
    },
    {
      glyph: "川",
      reading: "kawa",
      tipEn: "川 = river. Flowing lines.",
      tipJa: "川＝kawa。川の流れ。",
      ttsText: "かわ",
      ttsLang: "ja-JP",
    },
    {
      glyph: "木",
      reading: "ki",
      tipEn: "木 = tree.",
      tipJa: "木＝ki。",
      ttsText: "き",
      ttsLang: "ja-JP",
    },
    {
      glyph: "水",
      reading: "mizu",
      tipEn: "水 = water.",
      tipJa: "水＝mizu。",
      ttsText: "みず",
      ttsLang: "ja-JP",
    },
    {
      glyph: "火",
      reading: "hi",
      tipEn: "火 = fire.",
      tipJa: "火＝hi。",
      ttsText: "ひ",
      ttsLang: "ja-JP",
    },
  ],
  exercises: kanjiRecallExercises("jp-kn", ["山", "川", "木", "水", "火"]),
};

