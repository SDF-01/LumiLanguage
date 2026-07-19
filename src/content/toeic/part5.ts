import type { LearningUnit } from "@/lib/types";

export const toeicPart5Unit: LearningUnit = {
  id: "toeic-r5-incomplete-sentences",
  pathId: "toeic",
  title: "Reading Part 5",
  titleJa: "リーディング Part 5",
  subtitle: "Official skill: Incomplete Sentences (Reading Part 5)",
  examPart: "R5",
  xpReward: 120,
  tutorial: {
    title: "Real TOEIC Part 5",
    titleJa: "本番の Part 5",
    bodyEn:
      "Official Reading is 75 minutes and 100 questions. Part 5 has 30 incomplete-sentence items (A to D). It tests grammar and vocabulary recognition in a business context: word forms, prepositions, conjunctions, pronouns, and collocations. It is not a free-writing task. Aim for about 20 to 25 seconds per item to protect Part 7 time.",
    bodyJa:
      "公式リーディングは75分・100問。Part 5は空所補充30問（A〜D）。ビジネス文脈の文法・語彙（品詞・前置詞・接続詞・代名詞・コロケーション）が中心で、自由英作文ではありません。Part 7用に1問20〜25秒を目安に。",
    tips: [
      "Read the whole sentence before the choices",
      "Eliminate by part of speech first",
      "Prefer the collocation that fits business English",
    ],
  },
  exercises: [
    {
      id: "r5-1",
      kind: "multiple-choice",
      prompt:
        "The marketing team will _______ the campaign results at Friday's briefing.",
      promptJa: "マーケチームは金曜の説明会でキャンペーン結果を___する予定です。",
      choices: [
        { id: "a", label: "A) present" },
        { id: "b", label: "B) presentation" },
        { id: "c", label: "C) presently" },
        { id: "d", label: "D) presented" },
      ],
      correctChoiceId: "a",
      explanationEn:
        "After the modal 'will' you need the base verb. 'Present' is the correct verb form.",
      explanationJa:
        "助動詞 will のあとには動詞の原形が必要です。動詞 present が正解です。",
    },
    {
      id: "r5-2",
      kind: "multiple-choice",
      prompt:
        "Ms. Okada is responsible _______ coordinating vendors for the annual conference.",
      promptJa: "岡田さんは年次会議の業者調整を担当しています。",
      choices: [
        { id: "a", label: "A) to" },
        { id: "b", label: "B) for" },
        { id: "c", label: "C) of" },
        { id: "d", label: "D) with" },
      ],
      correctChoiceId: "b",
      explanationEn: "The collocation is 'responsible for' plus an -ing form.",
      explanationJa: "コロケーションは responsible for + 動名詞 です。",
    },
    {
      id: "r5-3",
      kind: "multiple-choice",
      prompt:
        "_______ the delay in shipping, customers will receive a discount code.",
      promptJa: "配送遅延のため、顧客に割引コードが送られます。",
      choices: [
        { id: "a", label: "A) Because" },
        { id: "b", label: "B) Although" },
        { id: "c", label: "C) Due to" },
        { id: "d", label: "D) Despite" },
      ],
      correctChoiceId: "c",
      explanationEn:
        "'Due to' is followed by a noun phrase ('the delay'). 'Because' needs a clause.",
      explanationJa:
        "Due to のあとには名詞句が続きます。Because は節が必要です。",
    },
    {
      id: "r5-4",
      kind: "multiple-choice",
      prompt: "Please submit the revised proposal _______ 5:00 p.m. tomorrow.",
      promptJa: "改訂提案書は明日の午後5時までに提出してください。",
      choices: [
        { id: "a", label: "A) until" },
        { id: "b", label: "B) by" },
        { id: "c", label: "C) during" },
        { id: "d", label: "D) since" },
      ],
      correctChoiceId: "b",
      explanationEn:
        "'By' means no later than a deadline. 'Until' marks a continuing state.",
      explanationJa:
        "by は期限までに、という意味です。until は状態の継続を表します。",
    },
    {
      id: "r5-5",
      kind: "multiple-choice",
      prompt:
        "The new software is _______ more efficient than the previous version.",
      promptJa: "新しいソフトは旧版よりかなり効率的です。",
      choices: [
        { id: "a", label: "A) considerable" },
        { id: "b", label: "B) considerably" },
        { id: "c", label: "C) considered" },
        { id: "d", label: "D) consideration" },
      ],
      correctChoiceId: "b",
      explanationEn:
        "You need an adverb to modify the adjective phrase 'more efficient'.",
      explanationJa:
        "形容詞 more efficient を修飾するには副詞が必要です。",
    },
    {
      id: "r5-6",
      kind: "multiple-choice",
      prompt:
        "Neither the manager nor the assistants _______ available this afternoon.",
      promptJa: "マネージャーもアシスタントも午後は空いていません。",
      choices: [
        { id: "a", label: "A) is" },
        { id: "b", label: "B) are" },
        { id: "c", label: "C) was" },
        { id: "d", label: "D) been" },
      ],
      correctChoiceId: "b",
      explanationEn:
        "With 'neither...nor', the verb agrees with the nearer subject ('assistants'), so use 'are'.",
      explanationJa:
        "neither A nor B では近い方の主語（assistants）に動詞を合わせます。",
    },
    {
      id: "r5-7",
      kind: "multiple-choice",
      prompt:
        "The CEO spoke _______ about the company's plans for overseas expansion.",
      promptJa: "CEOは海外進出計画について___話しました。",
      choices: [
        { id: "a", label: "A) enthusiasm" },
        { id: "b", label: "B) enthusiastic" },
        { id: "c", label: "C) enthusiastically" },
        { id: "d", label: "D) enthuse" },
      ],
      correctChoiceId: "c",
      explanationEn:
        "You need an adverb to modify the verb 'spoke'. 'Enthusiastically' fits.",
      explanationJa:
        "動詞 spoke を修飾するには副詞が必要です。enthusiastically が正解です。",
    },
    {
      id: "r5-8",
      kind: "multiple-choice",
      prompt:
        "Employees are encouraged to participate _______ the wellness program.",
      promptJa: "社員はウェルネスプログラムへの参加を勧められています。",
      choices: [
        { id: "a", label: "A) on" },
        { id: "b", label: "B) in" },
        { id: "c", label: "C) at" },
        { id: "d", label: "D) by" },
      ],
      correctChoiceId: "b",
      explanationEn: "The collocation is 'participate in' an activity or program.",
      explanationJa: "コロケーションは participate in です。",
    },
    {
      id: "r5-9",
      kind: "multiple-choice",
      prompt:
        "The contract will not be valid _______ both parties sign the final page.",
      promptJa: "双方が最終頁に署名するまで契約は有効になりません。",
      choices: [
        { id: "a", label: "A) unless" },
        { id: "b", label: "B) despite" },
        { id: "c", label: "C) during" },
        { id: "d", label: "D) among" },
      ],
      correctChoiceId: "a",
      explanationEn:
        "'Unless' introduces the condition required for the contract to be valid.",
      explanationJa:
        "unless は「〜しない限り」という条件を導きます。",
    },
    {
      id: "r5-10",
      kind: "multiple-choice",
      prompt:
        "After _______ the survey results, the board approved a new pricing plan.",
      promptJa: "調査結果を___したあと、取締役会は新価格案を承認しました。",
      choices: [
        { id: "a", label: "A) review" },
        { id: "b", label: "B) reviewed" },
        { id: "c", label: "C) reviewing" },
        { id: "d", label: "D) reviews" },
      ],
      correctChoiceId: "c",
      explanationEn:
        "After a preposition like 'after', use a gerund: reviewing.",
      explanationJa:
        "前置詞 after のあとは動名詞 reviewing が続きます。",
    },
    {
      id: "r5-11",
      kind: "multiple-choice",
      prompt:
        "The updated manual provides _______ instructions for installing the software.",
      promptJa: "改訂マニュアルはソフトのインストール手順を___示しています。",
      choices: [
        { id: "a", label: "A) clearly" },
        { id: "b", label: "B) clear" },
        { id: "c", label: "C) clarity" },
        { id: "d", label: "D) clearing" },
      ],
      correctChoiceId: "b",
      explanationEn:
        "You need an adjective to modify the noun 'instructions'. 'Clear' is correct.",
      explanationJa:
        "名詞 instructions を修飾するには形容詞 clear が必要です。",
    },
  ],
};
