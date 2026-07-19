import { createThematicVocabUnit } from "@/content/toeic/vocab-factory";

/** Phase A1: Numbers, dates, time */
export const toeicVocabNumbersUnit = createThematicVocabUnit({
  id: "toeic-vocab-numbers",
  title: "VOCAB: Numbers, dates & time",
  titleJa: "語彙：数・日付・時刻",
  subtitle: "Clocks, calendars, and quantities for L&R",
  tutorialTitleEn: "Numbers appear everywhere on TOEIC",
  tutorialTitleJa: "TOEICでは数字が頻出",
  bodyEn:
    "Listening and Reading both use times, dates, prices, and quantities. Learn these building blocks with audio first, then a short quiz.",
  bodyJa:
    "ListeningもReadingも、時刻・日付・金額・数量がよく出ます。音声で覚えてから短いクイズへ。",
  words: [
    {
      word: "quarter past",
      reading: "KWOR-ter past",
      meaningEn: "15 minutes after the hour",
      meaningJa: "〜時15分",
      wrongMeanings: ["30 minutes before", "Exactly on the hour", "Tomorrow morning"],
    },
    {
      word: "duration",
      reading: "doo-RAY-shun",
      meaningEn: "how long something lasts",
      meaningJa: "所要時間・期間",
      wrongMeanings: ["Office floor number", "Company logo color", "Employee badge shape"],
    },
    {
      word: "appointment",
      reading: "uh-POINT-ment",
      meaningEn: "scheduled meeting time",
      meaningJa: "予約・約束の時間",
      wrongMeanings: ["Random holiday", "Salary raise", "Printer error"],
    },
    {
      word: "overtime",
      reading: "OH-ver-time",
      meaningEn: "work beyond normal hours",
      meaningJa: "残業",
      wrongMeanings: ["Paid vacation", "Morning commute", "Team lunch"],
      listenDistractors: ["overseas", "overview", "overdue"],
    },
    {
      word: "quarterly",
      reading: "KWOR-ter-lee",
      meaningEn: "every three months",
      meaningJa: "四半期ごとの",
      wrongMeanings: ["Once a week", "Every hour", "Only on weekends"],
    },
    {
      word: "estimate",
      reading: "ES-ti-mit",
      meaningEn: "approximate number or cost",
      meaningJa: "見積もり・概算",
      wrongMeanings: ["Final invoice only", "Employee badge", "Meeting minutes"],
    },
  ],
});
