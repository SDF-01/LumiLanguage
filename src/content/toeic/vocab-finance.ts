import { createThematicVocabUnit } from "@/content/toeic/vocab-factory";

/** Phase A7: Finance */
export const toeicVocabFinanceUnit = createThematicVocabUnit({
  id: "toeic-vocab-finance",
  title: "VOCAB: Finance",
  titleJa: "語彙：財務・お金",
  subtitle: "Budget, revenue, and invoice language",
  tutorialTitleEn: "Articles and emails talk money",
  tutorialTitleJa: "記事やメールのお金の語",
  bodyEn:
    "Part 7 articles and workplace emails use budget, revenue, expense, profit, and invoice. Learn them before exam reading.",
  bodyJa:
    "Part 7の記事や社内メールでは budget, revenue, expense, profit, invoice がよく出ます。読解の前に固めましょう。",
  words: [
    {
      word: "budget",
      reading: "BUJ-it",
      meaningEn: "plan for spending money",
      meaningJa: "予算",
      wrongMeanings: ["Meeting snack", "Badge printer", "Lobby sofa"],
    },
    {
      word: "revenue",
      reading: "REV-uh-nyoo",
      meaningEn: "money a company earns",
      meaningJa: "収益・売上",
      wrongMeanings: ["Office temperature", "Employee hobby", "Street address"],
    },
    {
      word: "expense",
      reading: "ik-SPENS",
      meaningEn: "money spent for business",
      meaningJa: "経費・支出",
      wrongMeanings: ["Free sample", "Name badge", "Window view"],
      listenDistractors: ["expand", "expect", "express"],
    },
    {
      word: "profit",
      reading: "PROF-it",
      meaningEn: "money left after costs",
      meaningJa: "利益",
      wrongMeanings: ["Broken keyboard", "Train delay", "Staff picnic"],
    },
    {
      word: "invoice",
      reading: "IN-vois",
      meaningEn: "bill requesting payment",
      meaningJa: "請求書",
      wrongMeanings: ["Holiday card", "Coffee order", "Floor map"],
    },
    {
      word: "investment",
      reading: "in-VEST-ment",
      meaningEn: "money put into something for growth",
      meaningJa: "投資",
      wrongMeanings: ["Desk tidy rule", "Lunch coupon", "Elevator music"],
    },
  ],
});
