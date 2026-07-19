import type { LearningUnit } from "@/lib/types";

export const toeicPart7Unit: LearningUnit = {
  id: "toeic-r7-reading-comprehension",
  pathId: "toeic",
  title: "Reading Part 7",
  titleJa: "リーディング Part 7",
  subtitle: "Official skill: Reading Comprehension (Reading Part 7)",
  examPart: "R7",
  xpReward: 140,
  tutorial: {
    title: "Real TOEIC Part 7",
    titleJa: "本番の Part 7",
    bodyEn:
      "Official Part 7 has 54 questions: single passages and multiple-passage sets (double/triple). Genres include emails, letters, ads, articles, forms, and chats. Question types: main idea, detail, inference, vocabulary in context, and connecting information across texts. Lumi starts with single-passage drills using original texts.",
    bodyJa:
      "公式Part 7は54問。シングルと複数文書（ダブル／トリプル）があります。メール・広告・記事・フォーム・チャットなど。主旨・詳細・推論・語彙・文書横断が問われます。Lumiはまずオリジナル単文書から練習します。",
    tips: [
      "Scan for names, dates, prices, and reason words",
      "Inference must be supported by the passage",
      "For multi-text sets, check which document holds the answer",
    ],
  },
  exercises: [
    {
      id: "r7-1",
      kind: "multiple-choice",
      prompt:
        "Email: 'The product demo is moved to Thursday at 4 p.m. in Lab 2. Please bring your laptop.' When is the demo?",
      promptJa: "デモはいつですか？",
      choices: [
        { id: "a", label: "A) Tuesday morning" },
        { id: "b", label: "B) Thursday at 4 p.m." },
        { id: "c", label: "C) Friday in Lab 1" },
        { id: "d", label: "D) Next month" },
      ],
      correctChoiceId: "b",
      explanationEn: "The email states Thursday at 4 p.m.",
      explanationJa: "木曜午後4時と明記されています。",
    },
    {
      id: "r7-2",
      kind: "multiple-choice",
      prompt:
        "Ad: 'Sunrise Cafe opens at 7 a.m. on weekdays and 8 a.m. on weekends. Members get free refills.' What benefit do members get?",
      promptJa: "会員の特典は？",
      choices: [
        { id: "a", label: "A) Free parking" },
        { id: "b", label: "B) Free refills" },
        { id: "c", label: "C) Free delivery" },
        { id: "d", label: "D) A free laptop" },
      ],
      correctChoiceId: "b",
      explanationEn: "Members get free refills.",
      explanationJa: "会員は飲み放題（無料リフィル）です。",
    },
    {
      id: "r7-3",
      kind: "multiple-choice",
      prompt:
        "Notice: 'Building 3 Wi-Fi will be offline Saturday from 1 to 3 p.m. for upgrades.' What is the reason for the outage?",
      promptJa: "不通の理由は？",
      choices: [
        { id: "a", label: "A) A holiday closure" },
        { id: "b", label: "B) System upgrades" },
        { id: "c", label: "C) A fire drill" },
        { id: "d", label: "D) Bad weather" },
      ],
      correctChoiceId: "b",
      explanationEn: "The notice says the Wi-Fi is offline for upgrades.",
      explanationJa: "アップグレードのため、と書いてあります。",
    },
    {
      id: "r7-4",
      kind: "multiple-choice",
      prompt:
        "Article: 'After expanding to Osaka, Nova Wear reported a 12% rise in online orders.' What happened after the Osaka expansion?",
      promptJa: "大阪進出のあと何が起きた？",
      choices: [
        { id: "a", label: "A) Online orders rose 12%" },
        { id: "b", label: "B) The company closed its Tokyo shop" },
        { id: "c", label: "C) Prices fell by half" },
        { id: "d", label: "D) All stores moved online only" },
      ],
      correctChoiceId: "a",
      explanationEn: "The article links the expansion to a 12% rise in online orders.",
      explanationJa: "オンライン注文が12%増えた、とあります。",
    },
    {
      id: "r7-5",
      kind: "multiple-choice",
      prompt:
        "Email: 'Please RSVP by March 3 if you plan to attend the client dinner.' What should readers do?",
      promptJa: "読者は何をすべき？",
      choices: [
        { id: "a", label: "A) Pay the invoice today" },
        { id: "b", label: "B) RSVP by March 3 if attending" },
        { id: "c", label: "C) Rewrite the menu" },
        { id: "d", label: "D) Cancel all travel" },
      ],
      correctChoiceId: "b",
      explanationEn: "They should RSVP by March 3 if they plan to attend.",
      explanationJa: "出席する場合は3月3日までに返信が必要です。",
    },
  ],
};
