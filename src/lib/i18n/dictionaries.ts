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
    speakReadCta: "Speak & read Japanese",
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
      "10-phase path: START HERE, themed VOCAB, READING, GRAMMAR packs, then Listening and Reading exam parts. Teach first, then practice.",
    startCta: "Start with first phrases",
    quizCta: "Timed L&R practice quiz (20 items)",
    sectionStart: "START HERE",
    sectionVocab: "VOCAB",
    sectionReading: "READING",
    sectionGrammar: "GRAMMAR (Part 5 patterns)",
    sectionListening: "LISTENING (exam parts)",
    sectionExamReading: "READING (exam parts)",
    wordsTitle: "5 words of the day",
    wordsSubtitle: "Workplace English with clear explanations. New set each day.",
  },
  japanese: {
    startCta: "Start speaking today",
    sectionStart: "START HERE",
    sectionHiragana: "HIRAGANA",
    sectionKatakana: "KATAKANA",
    sectionKanji: "KANJI",
    sectionPhrases: "PHRASES",
    sectionLife: "SPEAK LIFE",
    wordsTitle: "Words of the day",
    wordsSubtitle:
      "5 hiragana, 5 katakana, and 5 kanji words with English explanations. New set each day.",
    nav: {
      learn: "Learn",
      speak: "Speak",
      read: "Read",
      review: "Review",
      chart: "Chart",
    },
    continuePath: "Continue your path",
    speakLabTitle: "Speaking lab",
    speakLabSubtitle:
      "Shadow Lumi, then speak into the mic. Android Chrome scores Japanese for you.",
    readLabTitle: "Reading lab",
    readLabSubtitle:
      "Graded stories with furigana. Tap a word to hear it, then shadow the line.",
    reviewTitle: "Spaced review",
    reviewSubtitle: "Missed lines come back right when you are about to forget them.",
    chartTitle: "Gojuon chart",
    chartSubtitle: "The full 五十音図. Tap, hear, say, and trace any kana.",
    writeDojo: "Stroke dojo",
    tapToSpeak: "Tap and speak",
    listening: "Listening…",
    shadow: "Shadow this line",
    readLine: "Line",
    checkReading: "Check reading",
    backToRead: "Back to stories",
    dialogue: "Role-play",
    yourLine: "Your line",
    friend: "Clerk",
    dueReviews: "due today",
    speakScore: "Speak hits",
    chartTabs: {
      hiragana: "Hira",
      katakana: "Kata",
      dakuten: "Voice",
      youon: "Youon",
    },
  },
  common: {
    readyToPlay: "Tap to play",
    xp: "XP",
    streak: "Streak",
    listen: "Listen",
    continue: "Continue",
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
    speakReadCta: "日本語を話す・読む",
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
      "10フェーズ：まずはここから → テーマ別VOCAB → READING → 文法パック → 本番リスニング／リーディング。先に教えてから練習。",
    startCta: "はじめてのフレーズから",
    quizCta: "時間制限つき L&R クイズ（20問）",
    sectionStart: "まずはここから",
    sectionVocab: "語彙 VOCAB",
    sectionReading: "読解 READING",
    sectionGrammar: "文法（Part 5型）",
    sectionListening: "リスニング（本番パート）",
    sectionExamReading: "リーディング（本番パート）",
    wordsTitle: "今日の5語",
    wordsSubtitle: "ビジネス英語を短い説明つきで。毎日入れ替わります。",
  },
  japanese: {
    startCta: "今日から話す",
    sectionStart: "まずはここから",
    sectionHiragana: "ひらがな",
    sectionKatakana: "カタカナ",
    sectionKanji: "漢字",
    sectionPhrases: "フレーズ",
    sectionLife: "生活で話す",
    wordsTitle: "今日の単語",
    wordsSubtitle:
      "ひらがな・カタカナ・漢字を各5語。英語の意味と説明つき。毎日入れ替わります。",
    nav: {
      learn: "学ぶ",
      speak: "話す",
      read: "読む",
      review: "復習",
      chart: "五十音",
    },
    continuePath: "コースを続ける",
    speakLabTitle: "スピーキングラボ",
    speakLabSubtitle:
      "ルミの後にシャドーイング。Android Chromeが日本語を採点します。",
    readLabTitle: "リーディングラボ",
    readLabSubtitle: "ふりがな付きの段階別物語。単語をタップして聞いて、行を影読み。",
    reviewTitle: "間隔復習",
    reviewSubtitle: "間違えた行は、忘れそうなときに戻ってきます。",
    chartTitle: "五十音図",
    chartSubtitle: "すべてのかな。タップ、聞く、言う、なぞる。",
    writeDojo: "書きの道場",
    tapToSpeak: "タップして話す",
    listening: "聞いています…",
    shadow: "この行を影読み",
    readLine: "行",
    checkReading: "読解チェック",
    backToRead: "物語一覧へ",
    dialogue: "ロールプレイ",
    yourLine: "あなたの行",
    friend: "店員",
    dueReviews: "今日の復習",
    speakScore: "スピーキング成功",
    chartTabs: {
      hiragana: "ひら",
      katakana: "カタ",
      dakuten: "濁音",
      youon: "拗音",
    },
  },
  common: {
    readyToPlay: "タップして学習",
    xp: "XP",
    streak: "連続",
    listen: "聞く",
    continue: "つづける",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, ja };

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ja";
}
