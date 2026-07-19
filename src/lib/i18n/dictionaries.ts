import type { Dictionary, Locale } from "@/lib/i18n/types";

const en: Dictionary = {
  brandTagline: "LEARN WITH LUMI",
  nav: {
    toeic: "TOEIC",
    japanese: "Japanese",
    paths: "Paths",
    language: "Language",
  },
  home: {
    toeicLine:
      "One playful path for TOEIC 800+ and Japanese from zero.",
    japaneseLine:
      "Train Listening and Reading for the real exam, then build Japanese from first sounds to kana, kanji, and phrases.",
    startLearning: "Start learning",
    quickQuiz: "Quick practice quiz",
  },
  paths: {
    title: "Pick your adventure",
    subtitle: "LUMI will cheer you on either way.",
    toeicCta: "Continue TOEIC path",
    japaneseCta: "Continue Japanese path",
  },
  toeic: {
    title: "TOEIC 800+",
    subtitle:
      "Start from scratch: VOCAB and READING first, then Listening Parts 1 to 4 and Reading Parts 5 to 7.",
    startCta: "Start with VOCAB",
    quizCta: "Timed L&R practice quiz",
    sectionVocab: "VOCAB",
    sectionReading: "READING",
    sectionListening: "LISTENING (exam parts)",
    sectionExamReading: "READING (exam parts)",
    wordsTitle: "5 words of the day",
    wordsSubtitle: "Workplace English with clear explanations. New set each day.",
  },
  japanese: {
    startCta: "Start with first phrases",
    sectionStart: "START HERE",
    sectionHiragana: "HIRAGANA",
    sectionKatakana: "KATAKANA",
    sectionKanji: "KANJI",
    sectionPhrases: "PHRASES",
    wordsTitle: "Words of the day",
    wordsSubtitle:
      "5 hiragana, 5 katakana, and 5 kanji words with English explanations. New set each day.",
  },
  common: {
    readyToPlay: "Tap to play",
    xp: "XP",
    streak: "Streak",
    listen: "Listen",
  },
};

const ja: Dictionary = {
  brandTagline: "LUMIと一緒に学ぼう",
  nav: {
    toeic: "TOEIC",
    japanese: "日本語",
    paths: "コース",
    language: "言語",
  },
  home: {
    toeicLine: "TOEIC 800点と日本語ゼロからの道を、ひとつで。",
    japaneseLine:
      "本番のListening & Readingを鍛えつつ、音から仮名・漢字・フレーズまで日本語も学べます。",
    startLearning: "学習をはじめる",
    quickQuiz: "かんたん練習クイズ",
  },
  paths: {
    title: "コースを選ぶ",
    subtitle: "どちらでもLUMIが応援します。",
    toeicCta: "TOEICコースへ",
    japaneseCta: "日本語コースへ",
  },
  toeic: {
    title: "TOEIC 800点突破",
    subtitle:
      "ゼロから学べます。まずVOCABとREADING、そのあとListening Part 1〜4、Reading Part 5〜7へ進みます。",
    startCta: "VOCABから始める",
    quizCta: "時間制限つき L&R クイズ",
    sectionVocab: "語彙 VOCAB",
    sectionReading: "読解 READING",
    sectionListening: "リスニング（本番パート）",
    sectionExamReading: "リーディング（本番パート）",
    wordsTitle: "今日の5語",
    wordsSubtitle: "ビジネス英語を短い説明つきで。毎日入れ替わります。",
  },
  japanese: {
    startCta: "はじめてのフレーズから",
    sectionStart: "まずはここから",
    sectionHiragana: "ひらがな",
    sectionKatakana: "カタカナ",
    sectionKanji: "漢字",
    sectionPhrases: "フレーズ",
    wordsTitle: "今日の単語",
    wordsSubtitle:
      "ひらがな・カタカナ・漢字を各5語。英語の意味と説明つき。毎日入れ替わります。",
  },
  common: {
    readyToPlay: "タップして学習",
    xp: "XP",
    streak: "連続",
    listen: "聞く",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ja";
}
