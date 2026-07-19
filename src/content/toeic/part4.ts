import type { LearningUnit } from "@/lib/types";

export const toeicPart4Unit: LearningUnit = {
  id: "toeic-l4-talks",
  pathId: "toeic",
  title: "Listening Part 4",
  titleJa: "リスニング Part 4",
  subtitle: "Official skill: Talks (Listening Part 4)",
  examPart: "L4",
  xpReward: 130,
  tutorial: {
    title: "Real TOEIC Part 4",
    titleJa: "本番の Part 4",
    bodyEn:
      "Official Part 4 has 30 questions: 10 short talks with 3 questions each. Formats include announcements, excerpts, ads, and voicemail. Questions are printed. Train purpose, detail, and implied next action. Note: standard TOEIC L&R does not score speaking or writing; those are a separate TOEIC Speaking and Writing test.",
    bodyJa:
      "公式Part 4は30問（トーク10×各3問）。アナウンス・抜粋・広告・留守電など。設問は印刷あり。目的・詳細・次の行動を鍛えます。なお標準のTOEIC L&Rにスピーキング／ライティング採点はなく、それらは別試験（S&W）です。",
    tips: [
      "The first sentence often states the purpose",
      "Capture numbers, dates, and locations",
      "Listen for what the audience should do next",
    ],
  },
  exercises: [
    {
      id: "l4-1",
      kind: "listen-choice",
      prompt: "What is the purpose of the announcement?",
      promptJa: "アナウンスの目的は？",
      ttsText:
        "Attention passengers. The 10:15 express to Kyoto will depart from track 5 instead of track 2. Please move to track 5.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) To sell train tickets" },
        { id: "b", label: "B) To change the departure track" },
        { id: "c", label: "C) To cancel all express trains" },
        { id: "d", label: "D) To introduce a new station cafe" },
      ],
      correctChoiceId: "b",
      explanationEn: "Listeners must move because the train now leaves from track 5.",
      explanationJa: "発車番線が5番に変わったので移動するよう案内しています。",
    },
    {
      id: "l4-2",
      kind: "listen-choice",
      prompt: "Who is this message for?",
      promptJa: "この案内の対象は？",
      ttsText:
        "Good morning staff. Please submit your vacation requests for August by Friday so managers can finalize schedules.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) Hotel guests" },
        { id: "b", label: "B) Company staff" },
        { id: "c", label: "C) Delivery drivers only" },
        { id: "d", label: "D) New customers" },
      ],
      correctChoiceId: "b",
      explanationEn: "It addresses staff about vacation requests.",
      explanationJa: "社員向けに休暇申請の案内をしています。",
    },
    {
      id: "l4-3",
      kind: "listen-choice",
      prompt: "What discount is offered?",
      promptJa: "割引はいくら？",
      ttsText:
        "This week only, Green Leaf Market is offering 20 percent off all fresh produce for members. Join at the service desk.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) 10 percent off electronics" },
        { id: "b", label: "B) 20 percent off fresh produce for members" },
        { id: "c", label: "C) Buy one get one free on all items" },
        { id: "d", label: "D) Free shipping on furniture" },
      ],
      correctChoiceId: "b",
      explanationEn: "Members get 20 percent off fresh produce this week.",
      explanationJa: "会員は生鮮食品が20%オフです。",
    },
    {
      id: "l4-4",
      kind: "listen-choice",
      prompt: "When does the workshop begin?",
      promptJa: "ワークショップはいつ始まる？",
      ttsText:
        "Welcome to the safety workshop. We will begin at 1:30 in Room B after a short equipment check.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) At noon in Room A" },
        { id: "b", label: "B) At 1:30 in Room B" },
        { id: "c", label: "C) At 3:00 online" },
        { id: "d", label: "D) Tomorrow morning" },
      ],
      correctChoiceId: "b",
      explanationEn: "It starts at 1:30 in Room B.",
      explanationJa: "B室で1時半開始です。",
    },
    {
      id: "l4-5",
      kind: "listen-choice",
      prompt: "What should listeners do?",
      promptJa: "聞き手は何をすべき？",
      ttsText:
        "Due to maintenance, the east elevator is closed until Monday. Please use the west elevator or the stairs.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) Avoid the building entirely" },
        { id: "b", label: "B) Use the west elevator or stairs" },
        { id: "c", label: "C) Call security immediately" },
        { id: "d", label: "D) Wait for a shuttle bus" },
      ],
      correctChoiceId: "b",
      explanationEn: "They should use the west elevator or the stairs.",
      explanationJa: "西エレベーターか階段を使うよう案内されています。",
    },
  ],
};
