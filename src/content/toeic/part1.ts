import type { LearningUnit } from "@/lib/types";

export const toeicPart1Unit: LearningUnit = {
  id: "toeic-l1-photographs",
  pathId: "toeic",
  title: "Listening Part 1",
  titleJa: "リスニング Part 1",
  subtitle: "Official skill: Photographs (Listening Part 1)",
  examPart: "L1",
  xpReward: 100,
  tutorial: {
    title: "Real TOEIC Part 1",
    titleJa: "本番の Part 1",
    bodyEn:
      "On the official TOEIC Listening and Reading test, Listening has 100 questions in about 45 minutes. Part 1 (Photographs) has 6 questions. You look at a photo and hear four statements (A to D). Only one matches the picture. Statements are not printed. In Lumi, we train the same skill with spoken scene descriptions and written choices (original content, not ETS materials).",
    bodyJa:
      "公式TOEIC L&Rのリスニングは約45分・100問です。Part 1（写真）は6問。写真を見ながらA〜Dの短い英文を聞き、写真と一致するものを選びます（選択肢は印刷されません）。Lumiでは同じ力を、オリジナルの場面描写音声で練習します。",
    tips: [
      "Focus on who is doing what, and where",
      "Ignore options that change one key detail",
      "Do not read ahead for meaning you did not hear",
    ],
  },
  exercises: [
    {
      id: "l1-1",
      kind: "listen-choice",
      prompt: "Listen, then choose the matching statement.",
      promptJa: "聞いて、合う文を選んでください。",
      ttsText:
        "A woman is typing on a laptop at a desk. There is a coffee cup beside the keyboard.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) She is writing on a whiteboard." },
        { id: "b", label: "B) She is using a laptop at a desk." },
        { id: "c", label: "C) She is standing in a hallway." },
        { id: "d", label: "D) She is talking on a phone outdoors." },
      ],
      correctChoiceId: "b",
      explanationEn: "The audio says she is typing on a laptop at a desk.",
      explanationJa: "音声はデスクでノートPCを使っている、と述べています。",
    },
    {
      id: "l1-2",
      kind: "listen-choice",
      prompt: "Which statement matches the scene?",
      promptJa: "場面に合う文はどれ？",
      ttsText:
        "Two men are shaking hands in front of an office building entrance.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) They are sitting at a conference table." },
        { id: "b", label: "B) They are boarding a train." },
        { id: "c", label: "C) They are shaking hands outside a building." },
        { id: "d", label: "D) They are packing boxes in a warehouse." },
      ],
      correctChoiceId: "c",
      explanationEn: "Handshake plus building entrance matches option C.",
      explanationJa: "握手とビル入口の描写に合うのは C です。",
    },
    {
      id: "l1-3",
      kind: "listen-choice",
      prompt: "Listen carefully for the main action.",
      promptJa: "主な動作に注意して聞いてください。",
      ttsText:
        "A delivery worker is unloading boxes from the back of a van.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) Someone is loading luggage onto a plane." },
        { id: "b", label: "B) Someone is unloading boxes from a van." },
        { id: "c", label: "C) Someone is driving through a tunnel." },
        { id: "d", label: "D) Someone is sealing envelopes at a desk." },
      ],
      correctChoiceId: "b",
      explanationEn: "Unloading boxes from a van is stated directly.",
      explanationJa: "バンから箱を下ろしている、と明確に述べられています。",
    },
    {
      id: "l1-4",
      kind: "listen-choice",
      prompt: "Pick the best match.",
      promptJa: "最も合うものを選ぶ。",
      ttsText:
        "People are seated in rows facing a speaker at a podium.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) An audience is listening to a presentation." },
        { id: "b", label: "B) Shoppers are waiting in a checkout line." },
        { id: "c", label: "C) Runners are lining up at a starting line." },
        { id: "d", label: "D) Diners are ordering at a counter." },
      ],
      correctChoiceId: "a",
      explanationEn: "Rows facing a podium describes an audience at a talk.",
      explanationJa: "演台に向かって並ぶ座席はプレゼンの聴衆の場面です。",
    },
    {
      id: "l1-5",
      kind: "listen-choice",
      prompt: "What matches the audio?",
      promptJa: "音声に合うのは？",
      ttsText:
        "A clerk is handing a form across the counter to a customer.",
      ttsLang: "en-US",
      choices: [
        { id: "a", label: "A) A customer is filling a shopping cart." },
        { id: "b", label: "B) A clerk is giving a form to a customer." },
        { id: "c", label: "C) A chef is tasting soup in a kitchen." },
        { id: "d", label: "D) A guard is locking a gate." },
      ],
      correctChoiceId: "b",
      explanationEn: "Handing a form across the counter matches B.",
      explanationJa: "カウンター越しに書類を渡す描写は B です。",
    },
  ],
};
