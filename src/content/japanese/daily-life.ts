import { createPhraseUnit } from "@/content/japanese/phrase-factory";

export const japaneseDailyLifeUnit = createPhraseUnit({
  id: "jp-daily-life",
  title: "Daily life",
  titleJa: "まいにち",
  subtitle: "Wake, go, come home, and say what you do",
  tutorialTitle: "Verbs that run a whole day",
  tutorialTitleJa: "一日を動かす動詞",
  bodyEn:
    "Polite verbs end in ます. Today: おきます, いきます, かえります, ねます. Pair them with time words (あさ, よる) so you can narrate a real day — the core of beginner speaking.",
  bodyJa:
    "丁寧な動詞は ます。おきます・いきます・かえります・ねます。あさ・よると組んで、一日を話せるように。",
  tips: [
    "Time + に + verb: しちじにおきます",
    "いきます = go; きます = come; do not mix them",
    "ねます is go to bed, not only 'sleep' as a state",
  ],
  items: [
    {
      ja: "あさ、おきます",
      reading: "あさ おきます",
      romaji: "asa, okimasu",
      meaningEn: "In the morning, I get up",
      meaningJa: "朝、起きます",
      tipEn: "おきる is wake/get up. あさ sets the scene.",
      tipJa: "おきるは起きる。あさは場面。",
    },
    {
      ja: "がっこうにいきます",
      reading: "がっこうにいきます",
      romaji: "gakkou ni ikimasu",
      meaningEn: "I go to school",
      meaningJa: "学校に行きます",
      tipEn: "に marks the destination.",
      tipJa: "に は行き先。",
    },
    {
      ja: "うちへかえります",
      reading: "うちへかえります",
      romaji: "uchi e kaerimasu",
      meaningEn: "I go home",
      meaningJa: "家へ帰ります",
      tipEn: "へ is said e. かえります is specifically return home.",
      tipJa: "へは「え」。かえりますは帰る。",
    },
    {
      ja: "よる、ねます",
      reading: "よる ねます",
      romaji: "yoru, nemasu",
      meaningEn: "At night, I go to bed",
      meaningJa: "夜、寝ます",
      tipEn: "ねます is the polite bedtime verb.",
      tipJa: "ねますは丁寧な「寝る」。",
    },
    {
      ja: "いまなんじですか",
      reading: "いまなんじですか",
      romaji: "ima nanji desu ka",
      meaningEn: "What time is it now?",
      meaningJa: "今何時ですか",
      tipEn: "なんじ = what o'clock. High-frequency survival line.",
      tipJa: "なんじは「何時」。超頻出。",
    },
  ],
});
