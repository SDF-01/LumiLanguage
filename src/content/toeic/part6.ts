import type { LearningUnit } from "@/lib/types";

export const toeicPart6Unit: LearningUnit = {
  id: "toeic-r6-text-completion",
  pathId: "toeic",
  title: "Reading Part 6",
  titleJa: "リーディング Part 6",
  subtitle: "Official skill: Text Completion (Reading Part 6)",
  examPart: "R6",
  xpReward: 120,
  tutorial: {
    title: "Real TOEIC Part 6",
    titleJa: "本番の Part 6",
    bodyEn:
      "Official Part 6 has 16 questions across 4 short texts (emails, notices, articles). Each text has blanks testing grammar, vocabulary, and discourse (transitions, pronouns, tense). Some items ask you to choose the best sentence to insert. Always read beyond the blank.",
    bodyJa:
      "公式Part 6は短文4つ・計16問。文法・語彙・談話（つなぎ・代名詞・時制）に加え、文挿入問題もあります。空所前後だけでなく全文を読みましょう。",
    tips: [
      "Skim the full text before answering",
      "Match tense and pronoun reference across sentences",
      "Pick transitions that match contrast vs result logic",
    ],
  },
  exercises: [
    {
      id: "r6-1",
      kind: "multiple-choice",
      prompt:
        "Email: Thank you for visiting our showroom yesterday. We _______ your interest in the Apex chair line.",
      promptJa: "昨日ショールームにお越しいただきありがとうございます。",
      choices: [
        { id: "a", label: "A) appreciate" },
        { id: "b", label: "B) appreciation" },
        { id: "c", label: "C) appreciating" },
        { id: "d", label: "D) appreciatedly" },
      ],
      correctChoiceId: "a",
      explanationEn: "After 'We' you need a present-tense verb: appreciate.",
      explanationJa: "We のあとは動詞 appreciate が必要です。",
    },
    {
      id: "r6-2",
      kind: "multiple-choice",
      prompt:
        "Notice: The lobby renovation will continue through Friday. _______, the north entrance will remain closed.",
      promptJa: "ロビー改装は金曜まで続きます。したがって北口は閉鎖です。",
      choices: [
        { id: "a", label: "A) However" },
        { id: "b", label: "B) Therefore" },
        { id: "c", label: "C) Otherwise" },
        { id: "d", label: "D) Meanwhile elsewhere" },
      ],
      correctChoiceId: "b",
      explanationEn: "'Therefore' shows a result of the renovation continuing.",
      explanationJa: "改装継続の結果として北口閉鎖なので Therefore が適切です。",
    },
    {
      id: "r6-3",
      kind: "multiple-choice",
      prompt:
        "Memo: All team leads should review the draft _______ Monday morning.",
      promptJa: "チームリーダーは月曜朝までに草案を確認してください。",
      choices: [
        { id: "a", label: "A) on" },
        { id: "b", label: "B) by" },
        { id: "c", label: "C) since" },
        { id: "d", label: "D) during" },
      ],
      correctChoiceId: "b",
      explanationEn: "'By Monday morning' means no later than that time.",
      explanationJa: "by は期限まで、の意味です。",
    },
    {
      id: "r6-4",
      kind: "multiple-choice",
      prompt:
        "Article: Sales rose in May. _______ gains were strongest in the western region.",
      promptJa: "5月に売上が伸び、特に西部で伸びました。",
      choices: [
        { id: "a", label: "A) This" },
        { id: "b", label: "B) These" },
        { id: "c", label: "C) That" },
        { id: "d", label: "D) Them" },
      ],
      correctChoiceId: "b",
      explanationEn: "'Gains' is plural, so use 'These'.",
      explanationJa: "gains は複数なので These です。",
    },
    {
      id: "r6-5",
      kind: "multiple-choice",
      prompt:
        "Email: If you _______ any questions, contact facilities before noon.",
      promptJa: "質問があれば正午までに施設課へ連絡を。",
      choices: [
        { id: "a", label: "A) has" },
        { id: "b", label: "B) having" },
        { id: "c", label: "C) have" },
        { id: "d", label: "D) had been" },
      ],
      correctChoiceId: "c",
      explanationEn: "With 'you', use 'have' in the present conditional.",
      explanationJa: "you には have を使います。",
    },
  ],
};
