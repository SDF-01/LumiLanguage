import { createPhraseUnit } from "@/content/japanese/phrase-factory";

export const japaneseWeatherUnit = createPhraseUnit({
  id: "jp-weather",
  title: "Weather small talk",
  titleJa: "てんき",
  subtitle: "Rain, heat, and the safest Japanese chat opener",
  tutorialTitle: "Weather is the beginner conversation key",
  tutorialTitleJa: "天気は会話の入り口",
  bodyEn:
    "Japanese small talk loves weather. あめ, はれ, あつい, さむい, plus きょうはいいてんきですね. The ね at the end invites agreement — that is how conversations start, not with a quiz tile.",
  bodyJa:
    "雑談は天気から。あめ・はれ・あつい・さむい、そして きょうはいいてんきですね。ね は同意を誘います。",
  tips: [
    "ですね seeks a nod, not a debate",
    "あついです can be weather or a hot drink — context decides",
    "傘 is かさ — useful the first week in Japan",
  ],
  items: [
    {
      ja: "きょうはいいてんきですね",
      reading: "きょうはいいてんきですね",
      romaji: "kyou wa ii tenki desu ne",
      meaningEn: "Nice weather today, isn't it?",
      meaningJa: "今日はいい天気ですね",
      tipEn: "The classic opener. Smile and keep it light.",
      tipJa: "定番の入り。軽く。",
      pitch: "LHHHHHHH",
    },
    {
      ja: "あめがふっています",
      reading: "あめがふっています",
      romaji: "ame ga futte imasu",
      meaningEn: "It is raining",
      meaningJa: "雨が降っています",
      tipEn: "〜ています is happening now.",
      tipJa: "〜ていますは進行。",
    },
    {
      ja: "あついです",
      reading: "あついです",
      romaji: "atsui desu",
      meaningEn: "It is hot",
      meaningJa: "暑いです",
      tipEn: "Said as a comment, not a complaint marathon.",
      tipJa: "感想として短く。",
    },
    {
      ja: "さむいです",
      reading: "さむいです",
      romaji: "samui desu",
      meaningEn: "It is cold",
      meaningJa: "寒いです",
      tipEn: "Opposite of あついです.",
      tipJa: "あついですの反対。",
    },
    {
      ja: "かさがありますか",
      reading: "かさがありますか",
      romaji: "kasa ga arimasu ka",
      meaningEn: "Do you have an umbrella?",
      meaningJa: "傘がありますか",
      tipEn: "ありますか for possessions and stock.",
      tipJa: "持ち物・在庫に ありますか。",
    },
  ],
});
