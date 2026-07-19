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
    {
      id: "r6-6",
      kind: "multiple-choice",
      prompt:
        "Email: Our warehouse will be closed next Monday for inventory. _______, please place urgent orders by Friday afternoon.",
      promptJa: "月曜は棚卸しで倉庫休業のため、急ぎの注文は金曜午後までに。",
      choices: [
        { id: "a", label: "A) In contrast" },
        { id: "b", label: "B) For this reason" },
        { id: "c", label: "C) On the other hand" },
        { id: "d", label: "D) Even so" },
      ],
      correctChoiceId: "b",
      explanationEn:
        "'For this reason' links the closure to the request to order early.",
      explanationJa:
        "休業という理由から早めの注文を求めるので For this reason が適切です。",
    },
    {
      id: "r6-7",
      kind: "multiple-choice",
      prompt:
        "Notice: Staff who work late may request a taxi voucher. Please ask reception _______ you leave the building.",
      promptJa: "残業時はタクシー券を申請できます。退館前に受付へ。",
      choices: [
        { id: "a", label: "A) before" },
        { id: "b", label: "B) among" },
        { id: "c", label: "C) without" },
        { id: "d", label: "D) against" },
      ],
      correctChoiceId: "a",
      explanationEn: "'Before you leave' correctly marks the time to ask reception.",
      explanationJa: "退館する前に、という時間関係なので before です。",
    },
    {
      id: "r6-8",
      kind: "multiple-choice",
      prompt:
        "Memo: The training materials _______ last week have been uploaded to the shared drive.",
      promptJa: "先週___された研修資料は共有ドライブにあります。",
      choices: [
        { id: "a", label: "A) revise" },
        { id: "b", label: "B) revising" },
        { id: "c", label: "C) revised" },
        { id: "d", label: "D) revision" },
      ],
      correctChoiceId: "c",
      explanationEn:
        "A past participle ('revised') modifies 'materials' in a reduced relative clause.",
      explanationJa:
        "過去分詞 revised が materials を修飾する分詞構文です。",
    },
    {
      id: "r6-9",
      kind: "multiple-choice",
      prompt:
        "Article: Demand for electric bikes continues to grow. Manufacturers are _______ production to meet orders.",
      promptJa: "電動自転車の需要が増え、メーカーは生産を___しています。",
      choices: [
        { id: "a", label: "A) increase" },
        { id: "b", label: "B) increasing" },
        { id: "c", label: "C) increased" },
        { id: "d", label: "D) increasingly" },
      ],
      correctChoiceId: "b",
      explanationEn:
        "After 'are' in the present progressive, use the -ing form: increasing.",
      explanationJa:
        "are のあとの進行形には increasing が必要です。",
    },
    {
      id: "r6-10",
      kind: "multiple-choice",
      prompt:
        "Email: Please find attached the agenda for Thursday. Kindly review it and send _______ comments by Wednesday.",
      promptJa: "木曜の議題を添付しました。水曜までにコメントを送ってください。",
      choices: [
        { id: "a", label: "A) you" },
        { id: "b", label: "B) your" },
        { id: "c", label: "C) yours" },
        { id: "d", label: "D) yourself" },
      ],
      correctChoiceId: "b",
      explanationEn: "You need a possessive adjective before the noun 'comments': your.",
      explanationJa: "名詞 comments の前には所有格 your が必要です。",
    },
  ],
};
