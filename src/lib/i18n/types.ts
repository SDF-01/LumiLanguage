export type Locale = "en" | "ja";

export type Dictionary = {
  brandTagline: string;
  nav: {
    toeic: string;
    japanese: string;
    paths: string;
    language: string;
  };
  home: {
    toeicLine: string;
    japaneseLine: string;
    startLearning: string;
    quickQuiz: string;
  };
  paths: {
    title: string;
    subtitle: string;
    toeicCta: string;
    japaneseCta: string;
  };
  toeic: {
    title: string;
    subtitle: string;
    startCta: string;
    quizCta: string;
    sectionStart: string;
    sectionVocab: string;
    sectionReading: string;
    sectionGrammar: string;
    sectionListening: string;
    sectionExamReading: string;
    wordsTitle: string;
    wordsSubtitle: string;
  };
  japanese: {
    startCta: string;
    sectionStart: string;
    sectionHiragana: string;
    sectionKatakana: string;
    sectionKanji: string;
    sectionPhrases: string;
    wordsTitle: string;
    wordsSubtitle: string;
  };
  common: {
    readyToPlay: string;
    xp: string;
    streak: string;
    listen: string;
  };
};
