import { createPhraseUnit } from "@/content/japanese/phrase-factory";

export const japaneseFoodUnit = createPhraseUnit({
  id: "jp-food",
  title: "Food and drink",
  titleJa: "たべもの・のみもの",
  subtitle: "Order, enjoy, and say it was delicious",
  tutorialTitle: "Restaurant Japanese you will actually use",
  tutorialTitleJa: "店で本当に使う日本語",
  bodyEn:
    "Duolingo often stops at 'apple'. Here you learn the lines that get food to the table: ください, おねがいします, and おいしいです. Katakana loanwords (コーヒー, パン) show up constantly — listen for the long vowel mark ー.",
  bodyJa:
    "りんごだけで終わりません。ください・おねがいします・おいしいです。コーヒーやパンの長音「ー」をよく聞いて。",
  tips: [
    "ください = please give me (after the item)",
    "おいしいです is the safe compliment",
    "水 is みず — tap water is often free",
  ],
  items: [
    {
      ja: "みずをください",
      reading: "みずをください",
      romaji: "mizu o kudasai",
      meaningEn: "Water, please",
      meaningJa: "水をください",
      tipEn: "Item + を + ください. Soft, not a bark.",
      tipJa: "名詞＋を＋ください。やわらかく。",
    },
    {
      ja: "コーヒーをおねがいします",
      reading: "コーヒーをおねがいします",
      romaji: "koohii o onegai shimasu",
      meaningEn: "Coffee, please",
      meaningJa: "コーヒーをお願いします",
      tipEn: "ー stretches こお and ひい. Very polite request.",
      tipJa: "ーで母音を伸ばす。丁寧なお願い。",
    },
    {
      ja: "パンをたべます",
      reading: "パンをたべます",
      romaji: "pan o tabemasu",
      meaningEn: "I eat bread",
      meaningJa: "パンを食べます",
      tipEn: "たべます is the polite eat verb.",
      tipJa: "たべますは丁寧な「食べる」。",
    },
    {
      ja: "おいしいです",
      reading: "おいしいです",
      romaji: "oishii desu",
      meaningEn: "It is delicious",
      meaningJa: "おいしいです",
      tipEn: "Say this while you still have food — it lands better.",
      tipJa: "食べているときに言うと自然。",
      pitch: "LHHH",
    },
    {
      ja: "おなかがすきました",
      reading: "おなかがすきました",
      romaji: "onaka ga sukimashita",
      meaningEn: "I am hungry",
      meaningJa: "お腹が空きました",
      tipEn: "Literally 'my stomach became empty'.",
      tipJa: "直訳は「お腹が空いた」。",
    },
  ],
});
