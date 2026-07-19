import type { LearningUnit } from "@/lib/types";

/** Phase: Part 7 double-passage (cross-text) */
export const toeicPart7DoubleUnit: LearningUnit = {
  id: "toeic-r7-double-passage",
  pathId: "toeic",
  title: "Reading Part 7: Double passages",
  titleJa: "リーディング Part 7：ダブル文書",
  subtitle: "Connect information across two original texts",
  examPart: "R7",
  xpReward: 140,
  tutorial: {
    title: "Two texts, one answer set",
    titleJa: "2文書で1セット",
    bodyEn:
      "Official Part 7 includes double and triple sets. You must find which document holds a detail, or combine facts from both. All texts below are original Lumi materials.",
    bodyJa:
      "公式Part 7にはダブル・トリプルがあります。どの文書に詳細があるか、両方の事実を組み合わせる問題が出ます。以下はすべてLumiオリジナルです。",
    tips: [
      "Label Text A and Text B in your mind",
      "Check names, dates, and prices in both",
      "Cross-text answers need evidence from each side",
    ],
  },
  teach: [
    {
      glyph: "Text A + Text B",
      reading: "double set",
      tipEn: "Skim both first. Then read the question. Then hunt.",
      tipJa: "先に両文書をざっと見る→設問→探す。",
      ttsText: "Read both texts",
      ttsLang: "en-US",
    },
    {
      glyph: "Which document?",
      reading: "source check",
      tipEn: "Some items ask where the information appears.",
      tipJa: "情報がどちらの文書にあるかを問う問題もある。",
      ttsText: "Which document",
      ttsLang: "en-US",
    },
  ],
  exercises: [
    {
      id: "r7d-1",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (email): 'Please book Lab 2 for Thursday 3 p.m. Demo for Apex.' Text B (calendar note): 'Lab 2 reserved Thu 3–4 p.m. Contact: Rina Sato.' Who should you contact about the room?",
      promptJa: "部屋について誰に連絡すべき？",
      choices: [
        { id: "a", label: "A) Apex sales only" },
        { id: "b", label: "B) Rina Sato" },
        { id: "c", label: "C) The Lab 1 manager" },
        { id: "d", label: "D) Thursday catering" },
      ],
      correctChoiceId: "b",
      explanationEn: "Text B lists Contact: Rina Sato.",
      explanationJa: "Text B に Contact: Rina Sato とあります。",
    },
    {
      id: "r7d-2",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (ad): 'Harbor Cafe: lunch special $9 until Friday.' Text B (review): 'I paid $12 for the special on Saturday.' Why might the prices differ?",
      promptJa: "価格が違う理由として最も妥当なのは？",
      choices: [
        { id: "a", label: "A) The $9 special ended after Friday" },
        { id: "b", label: "B) The cafe never sells lunch" },
        { id: "c", label: "C) Harbor Cafe is closed on weekends" },
        { id: "d", label: "D) All meals cost exactly $9" },
      ],
      correctChoiceId: "a",
      explanationEn:
        "Text A limits the $9 special until Friday; Text B is Saturday.",
      explanationJa:
        "Text A は金曜までの$9。Text B は土曜なので特価対象外の可能性。",
    },
    {
      id: "r7d-3",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (memo): 'Wi-Fi offline Saturday 1–3 p.m. for upgrades.' Text B (chat): 'Can we meet in Building 3 Saturday at 2?' What is the problem with the chat plan?",
      promptJa: "チャットの予定の問題点は？",
      choices: [
        { id: "a", label: "A) Building 3 Wi-Fi will be offline then" },
        { id: "b", label: "B) Saturday is a company holiday forever" },
        { id: "c", label: "C) Upgrades cancel all meetings forever" },
        { id: "d", label: "D) Text A bans entering the building" },
      ],
      correctChoiceId: "a",
      explanationEn: "2 p.m. Saturday falls inside the Wi-Fi outage window.",
      explanationJa: "土曜14時は Wi-Fi 不通時間帯に含まれる。",
    },
    {
      id: "r7d-4",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (invoice): 'Amount due: $480. Pay by March 10.' Text B (email): 'We paid $480 on March 8. Please confirm.' What should the vendor do?",
      promptJa: "業者側がすべきことは？",
      choices: [
        { id: "a", label: "A) Confirm that payment was received" },
        { id: "b", label: "B) Send a new $480 invoice for April" },
        { id: "c", label: "C) Cancel the order automatically" },
        { id: "d", label: "D) Change the due date to March 8" },
      ],
      correctChoiceId: "a",
      explanationEn: "Text B asks for confirmation after paying.",
      explanationJa: "Text B が入金確認を求めている。",
    },
    {
      id: "r7d-5",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (job post): 'Open role: warehouse associate. Apply by May 2.' Text B (email): 'Attached is Ken's resume for the warehouse role, sent May 1.' Is Ken's application on time?",
      promptJa: "Kenの応募は期限内？",
      choices: [
        { id: "a", label: "A) Yes, it was sent before the May 2 deadline" },
        { id: "b", label: "B) No, applications close April 30" },
        { id: "c", label: "C) No, resumes are never accepted by email" },
        { id: "d", label: "D) The post has no deadline" },
      ],
      correctChoiceId: "a",
      explanationEn: "May 1 is before the May 2 deadline in Text A.",
      explanationJa: "5/1送信は Text A の締切5/2より前。",
    },
    {
      id: "r7d-6",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (flight notice): 'Flight NL204 departs Gate 12 at 6:40 p.m.' Text B (text): 'I'm at Gate 18. Is that right for NL204?' What should the traveler do?",
      promptJa: "旅行者はどうすべき？",
      choices: [
        { id: "a", label: "A) Move to Gate 12 for NL204" },
        { id: "b", label: "B) Stay at Gate 18 for all flights" },
        { id: "c", label: "C) Cancel NL204 immediately" },
        { id: "d", label: "D) Arrive after 6:40 p.m." },
      ],
      correctChoiceId: "a",
      explanationEn: "Text A assigns NL204 to Gate 12, not 18.",
      explanationJa: "Text A では NL204 はゲート12。",
    },
    {
      id: "r7d-7",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (policy): 'Refunds within 14 days with receipt.' Text B (customer email): 'I bought a lamp 20 days ago and lost the receipt. I want a refund.' According to both texts, can the store approve a standard refund?",
      promptJa: "通常の返金は認められる？",
      choices: [
        { id: "a", label: "A) No, both the time limit and receipt are missing" },
        { id: "b", label: "B) Yes, any lamp is always refundable" },
        { id: "c", label: "C) Yes, because 20 days is under 14" },
        { id: "d", label: "D) Yes, receipts are optional" },
      ],
      correctChoiceId: "a",
      explanationEn:
        "20 days is past 14, and Text B says the receipt was lost.",
      explanationJa: "20日は14日超、かつ領収書なし。",
    },
    {
      id: "r7d-8",
      kind: "multiple-choice",
      skill: "read",
      prompt:
        "Text A (article): 'After opening in Osaka, online orders rose 12%.' Text B (chart note): 'Osaka store open date: June. Online orders +12% in July.' What do the texts together suggest?",
      promptJa: "両文書から言えることは？",
      choices: [
        {
          id: "a",
          label: "A) Online orders rose after the Osaka opening",
        },
        { id: "b", label: "B) Osaka never opened" },
        { id: "c", label: "C) Online orders fell in July" },
        { id: "d", label: "D) The company closed all Tokyo shops" },
      ],
      correctChoiceId: "a",
      explanationEn:
        "Text A states the rise after Osaka; Text B places the +12% in July after a June opening.",
      explanationJa: "大阪開店後にオンライン注文が伸びた、と両文書が示す。",
    },
  ],
};
