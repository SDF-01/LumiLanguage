import { createPhraseUnit } from "@/content/japanese/phrase-factory";

export const japaneseNumbersSpeakUnit = createPhraseUnit({
  id: "jp-numbers-speak",
  title: "Numbers you can say",
  titleJa: "言える数字",
  subtitle: "Count 1–10 and ask how much",
  tutorialTitle: "Speak numbers, do not only tap them",
  tutorialTitleJa: "数字は声に出す",
  bodyEn:
    "Beginners need numbers for prices, time, and train platforms. Learn the Sino-Japanese set いち〜じゅう, then the question いくらですか. Listen for the extra mora in しち (7) vs いち (1).",
  bodyJa:
    "値段・時間・ホームに数字が要ります。いち〜じゅうと「いくらですか」を声に出します。しちといちの拍の違いに注意。",
  tips: [
    "4 is よん in prices more often than し",
    "7 is なな or しち — both are used",
    "いくらですか = how much is it?",
  ],
  items: [
    {
      ja: "いち、に、さん",
      reading: "いち に さん",
      romaji: "ichi ni san",
      meaningEn: "One, two, three",
      meaningJa: "1、2、3",
      tipEn: "Keep each number one clean beat.",
      tipJa: "各数字を1拍で。",
    },
    {
      ja: "よん",
      reading: "よん",
      romaji: "yon",
      meaningEn: "Four",
      meaningJa: "4",
      tipEn: "Use よん for money and most counting.",
      tipJa: "お金や数えでは よん が多い。",
    },
    {
      ja: "なな",
      reading: "なな",
      romaji: "nana",
      meaningEn: "Seven",
      meaningJa: "7",
      tipEn: "なな is the safer everyday reading.",
      tipJa: "日常では なな が安心。",
    },
    {
      ja: "じゅう",
      reading: "じゅう",
      romaji: "juu",
      meaningEn: "Ten",
      meaningJa: "10",
      tipEn: "Long uu — do not say English 'jew'.",
      tipJa: "うを長めに。英語の jew ではない。",
    },
    {
      ja: "いくらですか",
      reading: "いくらですか",
      romaji: "ikura desu ka",
      meaningEn: "How much is it?",
      meaningJa: "いくらですか",
      tipEn: "Rising ka at the end makes it a question.",
      tipJa: "か で疑問文。",
      pitch: "LHHHH",
    },
  ],
});
