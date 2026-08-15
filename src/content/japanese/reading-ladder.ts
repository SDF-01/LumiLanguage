export type ReadingRung = {
  id: string;
  titleEn: string;
  titleJa: string;
  blurbEn: string;
  blurbJa: string;
  unitIds: string[];
  storyIds: string[];
};

export const readingLadder: ReadingRung[] = [
  {
    id: "start",
    titleEn: "Start — move tiles, feel SOV",
    titleJa: "はじめ — タイルでSOVを感じる",
    blurbEn:
      "A question in English. Tap hiragana (and a little katakana) into who → what → verb. Recognition starts here.",
    blurbJa:
      "英語の問いを見て、ひらがなを「だれ→なに→どうする」に並べます。認識はここから。",
    unitIds: ["jp-sentence-first"],
    storyIds: ["ohayou", "neko-to-inu"],
  },
  {
    id: "mix",
    titleEn: "N5 — mix 漢字 / ひらがな / カタカナ",
    titleJa: "N5 — 3つの文字を混ぜる",
    blurbEn:
      "Real lines mix scripts. Kanji carry meaning, hiragana carries grammar, katakana marks loans. Build, then read a school and station story.",
    blurbJa:
      "本物の文は混ざる。漢字は意味、ひらがなは文法、カタカナは外来語。組み立ててから学校と駅の物語。",
    unitIds: ["jp-sentence-mix"],
    storyIds: ["gakkou", "eki", "konbini"],
  },
  {
    id: "pro",
    titleEn: "Workplace — email, news, meetings",
    titleJa: "仕事 — メール・ニュース・会議",
    blurbEn:
      "Rebuild polite inbox frames, expand a headline that dropped its particles, then read a short office mail with furigana off.",
    blurbJa:
      "丁寧なメールの型、助詞の落ちた見出し、ふりがななしの短い社内メール。",
    unitIds: ["jp-pro-email", "jp-pro-news", "jp-pro-meeting"],
    storyIds: ["office-mail"],
  },
];
