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
    {
      id: "rf-6",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Email: 'The client visit is moved to Tuesday. Please prepare name badges by Monday noon.' What is due by Monday noon?",
      promptJa: "月曜正午までの期限は？",
      choices: [
        { id: "a", label: "A) Preparing name badges" },
        { id: "b", label: "B) Booking hotel rooms" },
        { id: "c", label: "C) Canceling the visit" },
        { id: "d", label: "D) Printing boarding passes" },
      ],
      correctChoiceId: "a",
      explanationEn: "Name badges must be prepared by Monday noon.",
      explanationJa: "ネームバッジの準備が月曜正午までです。",
    },
    {
      id: "rf-7",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Notice: 'The printer on Floor 2 is for black-and-white jobs only. Use Floor 5 for color.' Where should you print in color?",
      promptJa: "カラー印刷はどこで？",
      choices: [
        { id: "a", label: "A) Floor 2" },
        { id: "b", label: "B) Floor 5" },
        { id: "c", label: "C) The lobby cafe" },
        { id: "d", label: "D) Outside the building" },
      ],
      correctChoiceId: "b",
      explanationEn: "Color printing is directed to Floor 5.",
      explanationJa: "カラーは5階を使うよう案内されています。",
    },
    {
      id: "rf-8",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Memo: 'Bring your laptop charger to the workshop. Power strips will not be provided.' What should attendees bring?",
      promptJa: "参加者は何を持参すべき？",
      choices: [
        { id: "a", label: "A) A laptop charger" },
        { id: "b", label: "B) Extra power strips for everyone" },
        { id: "c", label: "C) Printed tickets only" },
        { id: "d", label: "D) Nothing at all" },
      ],
      correctChoiceId: "a",
      explanationEn: "Attendees should bring their own laptop charger.",
      explanationJa: "ノートPCの充電器を持参するよう求められています。",
    },
    {
      id: "rf-9",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Ad: 'Free shipping on orders over $50 this month. Gift wrapping costs $3.' What is free this month?",
      promptJa: "今月無料なのは？",
      choices: [
        { id: "a", label: "A) Shipping on orders over $50" },
        { id: "b", label: "B) Gift wrapping on every order" },
        { id: "c", label: "C) All products in the store" },
        { id: "d", label: "D) Returns with no receipt" },
      ],
      correctChoiceId: "a",
      explanationEn: "Orders over $50 get free shipping this month.",
      explanationJa: "50ドル超の注文は送料無料です。",
    },
    {
      id: "rf-10",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Email: 'I am out of the office until May 8. For urgent IT issues, contact the help desk.' Who should you contact for urgent IT help?",
      promptJa: "緊急のIT問題は誰へ？",
      choices: [
        { id: "a", label: "A) The help desk" },
        { id: "b", label: "B) The sender only after May 8" },
        { id: "c", label: "C) The cafeteria manager" },
        { id: "d", label: "D) No one" },
      ],
      correctChoiceId: "a",
      explanationEn: "Urgent IT issues should go to the help desk.",
      explanationJa: "緊急のIT問題はヘルプデスクへ連絡するよう書いてあります。",
    },
  ],
};
