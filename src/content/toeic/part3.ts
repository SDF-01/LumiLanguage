import type { LearningUnit } from "@/lib/types";

export const toeicPart3Unit: LearningUnit = {
  id: "toeic-l3-conversations",
  pathId: "toeic",
  title: "Listening Part 3",
  titleJa: "リスニング Part 3",
  subtitle: "Official skill: Conversations (Listening Part 3)",
  examPart: "L3",
  xpReward: 130,
  tutorial: {
    title: "Real TOEIC Part 3",
    titleJa: "本番の Part 3",
    bodyEn:
      "Official Part 3 has 39 questions: 13 conversations with 3 questions each. Questions appear in the test book. Skills tested: gist, detail, inference, and speaker intent in workplace dialogues. Lumi drills one conversation focus at a time with original scripts.",
    bodyJa:
      "公式Part 3は39問（会話13×各3問）。設問は問題用紙に印刷されます。職場会話の主旨・詳細・推論・意図が問われます。Lumiはオリジナル台本で一点集中ドリルします。",
    tips: [
      "Preview the three questions before the audio when you can",
      "Track names, times, places, and next steps",
      "Use the final lines for follow-up actions",
    ],
  },
  exercises: [
    {
      id: "l3-1",
      kind: "listen-choice",
      prompt: "Why is the woman calling?",
      promptJa: "女性が電話した理由は？",
      ttsText:
        "Man: Accounting, Ken speaking. Woman: Hi Ken, this is Mai from sales. I'm calling to confirm whether the Q3 invoices were sent to Horizon Corp.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) To apply for a job" },
        { id: "b", label: "B) To confirm invoices were sent" },
        { id: "c", label: "C) To cancel a meeting" },
        { id: "d", label: "D) To order office supplies" },
      ],
      correctChoiceId: "b",
      explanationEn: "She says she is calling to confirm the invoices were sent.",
      explanationJa: "請求書送付の確認のために電話した、と言っています。",
    },
    {
      id: "l3-2",
      kind: "listen-choice",
      prompt: "Where will they meet?",
      promptJa: "どこで会いますか？",
      ttsText:
        "Woman: Can we discuss the venue options today? Man: Sure. Let's meet in the second-floor lounge at three.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) In the parking garage" },
        { id: "b", label: "B) In the second-floor lounge" },
        { id: "c", label: "C) At the client's factory" },
        { id: "d", label: "D) In the cafeteria kitchen" },
      ],
      correctChoiceId: "b",
      explanationEn: "He proposes the second-floor lounge at three.",
      explanationJa: "2階ラウンジで3時、と提案しています。",
    },
    {
      id: "l3-3",
      kind: "listen-choice",
      prompt: "What will the man do next?",
      promptJa: "男性が次にすることは？",
      ttsText:
        "Woman: The printer on floor four is jammed again. Man: I'll go reset it and replace the paper tray.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) Call a taxi" },
        { id: "b", label: "B) Fix the printer" },
        { id: "c", label: "C) Book a hotel" },
        { id: "d", label: "D) Update the website" },
      ],
      correctChoiceId: "b",
      explanationEn: "He will reset the printer and replace the paper tray.",
      explanationJa: "プリンターをリセットして用紙トレイを替える、と言っています。",
    },
    {
      id: "l3-4",
      kind: "listen-choice",
      prompt: "What is the problem?",
      promptJa: "問題は何ですか？",
      ttsText:
        "Man: Did the samples arrive? Woman: Not yet. The courier said the package is delayed until Thursday.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) The samples are delayed" },
        { id: "b", label: "B) The office is closed" },
        { id: "c", label: "C) The price is too high" },
        { id: "d", label: "D) The meeting room is booked" },
      ],
      correctChoiceId: "a",
      explanationEn: "The package with samples is delayed until Thursday.",
      explanationJa: "サンプルの荷物が木曜まで遅れる、とあります。",
    },
    {
      id: "l3-5",
      kind: "listen-choice",
      prompt: "What does the woman suggest?",
      promptJa: "女性の提案は？",
      ttsText:
        "Man: Traffic looks heavy. We might miss the 9 a.m. kickoff. Woman: Let's take the subway. It should be faster this morning.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) Cancel the kickoff" },
        { id: "b", label: "B) Take the subway" },
        { id: "c", label: "C) Work from home" },
        { id: "d", label: "D) Rent a larger car" },
      ],
      correctChoiceId: "b",
      explanationEn: "She suggests taking the subway because it should be faster.",
      explanationJa: "地下鉄の方が早いので地下鉄で行こう、と提案しています。",
    },
  ],
};
