import { createPhraseUnit } from "@/content/japanese/phrase-factory";

export const japaneseFamilyUnit = createPhraseUnit({
  id: "jp-family",
  title: "Family words",
  titleJa: "かぞく",
  subtitle: "Talk about mom, dad, and friends politely",
  tutorialTitle: "Family has two vocab sets",
  tutorialTitleJa: "家族語は二種類",
  bodyEn:
    "When you talk about your own family to others, Japanese often uses humble words: はは, ちち. When you talk about someone else's family, use おかあさん, おとうさん. Today you learn both and speak full lines.",
  bodyJa:
    "自分の家族を外に言うときは はは・ちち。相手の家族は おかあさん・おとうさん。今日は両方を文で話します。",
  tips: [
    "はは = my mom (to others); おかあさん = mom / your mom",
    "ともだち is friend — very high frequency",
    "の links two nouns: わたしのともだち",
  ],
  items: [
    {
      ja: "はは",
      reading: "はは",
      romaji: "haha",
      meaningEn: "My mother (humble)",
      meaningJa: "母（自分の）",
      tipEn: "Use はは when speaking about your own mom to others.",
      tipJa: "自分の母を外に言うとき。",
    },
    {
      ja: "ちち",
      reading: "ちち",
      romaji: "chichi",
      meaningEn: "My father (humble)",
      meaningJa: "父（自分の）",
      tipEn: "Same pattern as はは.",
      tipJa: "ははと同じ使い方。",
    },
    {
      ja: "おかあさん",
      reading: "おかあさん",
      romaji: "okaasan",
      meaningEn: "Mom / your mother",
      meaningJa: "お母さん",
      tipEn: "Long aa in かあ. Polite and warm.",
      tipJa: "かあ の長音。丁寧でやわらかい。",
    },
    {
      ja: "わたしのともだち",
      reading: "わたしのともだち",
      romaji: "watashi no tomodachi",
      meaningEn: "My friend",
      meaningJa: "私の友達",
      tipEn: "の is the 's / of' linker.",
      tipJa: "の は所有・つながり。",
    },
    {
      ja: "かぞくはよにんです",
      reading: "かぞくはよにんです",
      romaji: "kazoku wa yonin desu",
      meaningEn: "There are four people in my family",
      meaningJa: "家族は四人です",
      tipEn: "にん is the counter for people (よにん, not よんにん).",
      tipJa: "人のカウンターは にん。よにん。",
    },
  ],
});
