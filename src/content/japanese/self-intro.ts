import { createPhraseUnit } from "@/content/japanese/phrase-factory";

export const japaneseSelfIntroUnit = createPhraseUnit({
  id: "jp-self-intro",
  title: "Self-introduction",
  titleJa: "じこしょうかい",
  subtitle: "Say your name, nationality, and that you are a student",
  tutorialTitle: "Introduce yourself out loud",
  tutorialTitleJa: "声に出して自己紹介",
  bodyEn:
    "Japanese self-intros are short and polite. Start with はじめまして, give your name with です, then よろしくおねがいします. You will hear each line, then speak it. This is how real first meetings start — not isolated vocab tiles.",
  bodyJa:
    "自己紹介は短く丁寧に。はじめまして、名前＋です、よろしくおねがいします。聞いてから話します。単語カードではなく、本番のあいさつです。",
  tips: [
    "です is a polite closer, not the English verb 'to be' in every case",
    "よろしくおねがいします is one breath — do not chop it",
    "Smile with your voice; Japanese greetings are warm, not shouted",
  ],
  items: [
    {
      ja: "はじめまして",
      reading: "はじめまして",
      romaji: "hajimemashite",
      meaningEn: "Nice to meet you",
      meaningJa: "初対面のあいさつ",
      tipEn: "Say this first when you meet someone new.",
      tipJa: "初対面の最初に言います。",
      pitch: "LHHHH",
    },
    {
      ja: "わたしはリアムです",
      reading: "わたしはリアムです",
      romaji: "watashi wa riamu desu",
      meaningEn: "I am Liam",
      meaningJa: "私はリアムです",
      tipEn: "は is written ha but said wa. Swap Liam for your name later.",
      tipJa: "はは「わ」と読みます。名前はあとで自分のに変えて。",
      pitch: "LHHHHHH",
    },
    {
      ja: "がくせいです",
      reading: "がくせいです",
      romaji: "gakusei desu",
      meaningEn: "I am a student",
      meaningJa: "学生です",
      tipEn: "Drop わたしは when the topic is already you.",
      tipJa: "主題が自分なら「わたしは」を省略できます。",
    },
    {
      ja: "にほんごをべんきょうします",
      reading: "にほんごをべんきょうします",
      romaji: "nihongo o benkyou shimasu",
      meaningEn: "I study Japanese",
      meaningJa: "日本語を勉強します",
      tipEn: "を marks what you study. べんきょうします = do study.",
      tipJa: "をは勉強する対象。べんきょうしますは「勉強する」。",
    },
    {
      ja: "よろしくおねがいします",
      reading: "よろしくおねがいします",
      romaji: "yoroshiku onegai shimasu",
      meaningEn: "Please treat me kindly / I look forward to it",
      meaningJa: "これからよろしくお願いします",
      tipEn: "Closes a first meeting. One smooth phrase, not five English words.",
      tipJa: "初対面の締め。ひと続きで。",
      pitch: "LHHHHHHHH",
    },
  ],
});
