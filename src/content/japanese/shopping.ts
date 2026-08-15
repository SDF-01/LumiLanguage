import { createPhraseUnit } from "@/content/japanese/phrase-factory";

export const japaneseShoppingUnit = createPhraseUnit({
  id: "jp-shopping",
  title: "Shopping lines",
  titleJa: "かいもの",
  subtitle: "Ask the price, buy it, and say thank you",
  tutorialTitle: "Convenience-store Japanese",
  tutorialTitleJa: "コンビニで使える日本語",
  bodyEn:
    "Shopping is the fastest way to use Japanese in Japan. You will speak これをください, いくらですか, and べつのいろはありますか. Staff often reply はい、どうぞ — listen and answer.",
  bodyJa:
    "買い物は日本で一番早く使える場面。これをください、いくらですか、べつのいろはありますか。店員の「はい、どうぞ」を聞いて返す。",
  tips: [
    "これ / それ / あれ = this / that / that over there",
    "袋 is ふくろ — ふくろはいりますか is a real cashier line",
    "Keep ください quieter than English 'please'",
  ],
  items: [
    {
      ja: "これをください",
      reading: "これをください",
      romaji: "kore o kudasai",
      meaningEn: "This one, please",
      meaningJa: "これをください",
      tipEn: "Point + これ. Works at bakeries and 100-yen shops.",
      tipJa: "指差し＋これ。パン屋でも百均でも。",
    },
    {
      ja: "それはいくらですか",
      reading: "それはいくらですか",
      romaji: "sore wa ikura desu ka",
      meaningEn: "How much is that?",
      meaningJa: "それはいくらですか",
      tipEn: "それ is near the listener, not in your hand.",
      tipJa: "それは相手の近く。",
    },
    {
      ja: "べつのいろはありますか",
      reading: "べつのいろはありますか",
      romaji: "betsu no iro wa arimasu ka",
      meaningEn: "Do you have it in another color?",
      meaningJa: "別の色はありますか",
      tipEn: "ありますか asks if something exists / is in stock.",
      tipJa: "ありますかは「ありますか／在庫は？」。",
    },
    {
      ja: "はい、どうぞ",
      reading: "はい、どうぞ",
      romaji: "hai, douzo",
      meaningEn: "Yes, here you go",
      meaningJa: "はい、どうぞ",
      tipEn: "Staff line. You can also say どうぞ when offering.",
      tipJa: "店員フレーズ。すすめるときも どうぞ。",
    },
    {
      ja: "ふくろはいりますか",
      reading: "ふくろはいりますか",
      romaji: "fukuro wa irimasu ka",
      meaningEn: "Do you need a bag?",
      meaningJa: "袋は要りますか",
      tipEn: "Cashier question. Answer はい or だいじょうぶです.",
      tipJa: "レジの質問。はい／だいじょうぶです。",
    },
  ],
});
