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
    speakReadCta: string;
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
    sectionLife: string;
    wordsTitle: string;
    wordsSubtitle: string;
    nav: {
      learn: string;
      speak: string;
      read: string;
      review: string;
      chart: string;
    };
    continuePath: string;
    speakLabTitle: string;
    speakLabSubtitle: string;
    readLabTitle: string;
    readLabSubtitle: string;
    reviewTitle: string;
    reviewSubtitle: string;
    chartTitle: string;
    chartSubtitle: string;
    writeDojo: string;
    tapToSpeak: string;
    listening: string;
    shadow: string;
    readLine: string;
    checkReading: string;
    backToRead: string;
    dialogue: string;
    yourLine: string;
    friend: string;
    dueReviews: string;
    speakScore: string;
    chartTabs: {
      hiragana: string;
      katakana: string;
      dakuten: string;
      youon: string;
    };
  };
  common: {
    readyToPlay: string;
    xp: string;
    streak: string;
    listen: string;
    continue: string;
  };
};
