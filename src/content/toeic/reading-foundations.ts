import type { LearningUnit } from "@/lib/types";

export const toeicReadingFoundationsUnit: LearningUnit = {
  id: "toeic-reading-foundations",
  pathId: "toeic",
  title: "READING: Foundations",
  titleJa: "読解：基礎",
  subtitle: "Skim emails and notices before Part 5 to 7",
  examPart: "READING",
  xpReward: 110,
  tutorial: {
    title: "Reading from scratch",
    titleJa: "読解のはじめ方",
    bodyEn:
      "Before exam Parts 5 to 7, learn how to skim workplace texts. Find the purpose, the deadline, and the action you must take. This foundation unit uses short original emails and notices, the same genres as Part 7.",
    bodyJa:
      "本番のPart 5〜7の前に、職場文書の読み方を学びます。目的・期限・やるべき行動を素早く見つけます。Part 7と同系統の短いメール／お知らせ（オリジナル）で練習します。",
    tips: [
      "Read the question before the full text when helpful",
      "Circle dates, names, and 'please' actions",
      "Ignore extra details that do not answer the question",
    ],
  },
  exercises: [
    {
      id: "rf-1",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Email: 'Please submit timesheets by 5 p.m. Thursday.' What is required?",
      promptJa: "何が求められていますか？",
      choices: [
        { id: "a", label: "A) Submit timesheets by Thursday 5 p.m." },
        { id: "b", label: "B) Book a flight on Thursday" },
        { id: "c", label: "C) Call a client at 5 p.m." },
        { id: "d", label: "D) Clean desks on Friday" },
      ],
      correctChoiceId: "a",
      explanationEn: "The required action and deadline are stated clearly.",
      explanationJa: "木曜午後5時までのタイムシート提出が求められています。",
    },
    {
      id: "rf-2",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Notice: 'The east elevator is closed for maintenance until Monday.' What should readers do?",
      promptJa: "読者はどうすべき？",
      choices: [
        { id: "a", label: "A) Avoid the east elevator until Monday" },
        { id: "b", label: "B) Buy a new elevator" },
        { id: "c", label: "C) Work only on weekends" },
        { id: "d", label: "D) Cancel all meetings forever" },
      ],
      correctChoiceId: "a",
      explanationEn: "Maintenance closes the east elevator until Monday.",
      explanationJa: "月曜まで東エレベーターは使えません。",
    },
    {
      id: "rf-3",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Memo: 'Team lunch is optional. RSVP only if you will attend.' Who should reply?",
      promptJa: "誰が返信すべき？",
      choices: [
        { id: "a", label: "A) Only people who will attend" },
        { id: "b", label: "B) Everyone in the company" },
        { id: "c", label: "C) Only managers" },
        { id: "d", label: "D) Nobody" },
      ],
      correctChoiceId: "a",
      explanationEn: "RSVP is requested only from attendees.",
      explanationJa: "出席する人だけが返信すればよい、とあります。",
    },
    {
      id: "rf-4",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Ad: 'Members get 15% off printers this week only.' What is limited?",
      promptJa: "何が期間限定？",
      choices: [
        { id: "a", label: "A) The 15% printer discount for members" },
        { id: "b", label: "B) Free coffee forever" },
        { id: "c", label: "C) All store jobs" },
        { id: "d", label: "D) Parking rules" },
      ],
      correctChoiceId: "a",
      explanationEn: "The discount is for members, on printers, this week only.",
      explanationJa: "会員向けプリンター15%オフが今週限定です。",
    },
    {
      id: "rf-5",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Email: 'Attached is the revised contract. Please review section 4.' What should you review?",
      promptJa: "確認すべきものは？",
      choices: [
        { id: "a", label: "A) Section 4 of the revised contract" },
        { id: "b", label: "B) The cafeteria menu" },
        { id: "c", label: "C) Last year's photos" },
        { id: "d", label: "D) A boarding pass" },
      ],
      correctChoiceId: "a",
      explanationEn: "Readers must review section 4 of the attached revised contract.",
      explanationJa: "改訂契約書の第4節を確認するよう求められています。",
    },
  ],
};
