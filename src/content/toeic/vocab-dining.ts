import { createThematicVocabUnit } from "@/content/toeic/vocab-factory";

/** Phase A5: Dining / shopping */
export const toeicVocabDiningUnit = createThematicVocabUnit({
  id: "toeic-vocab-dining",
  title: "VOCAB: Dining & shopping",
  titleJa: "語彙：飲食・買い物",
  subtitle: "Menus, receipts, and store language",
  tutorialTitleEn: "Ads and chats use shop English",
  tutorialTitleJa: "広告や会話の買い物英語",
  bodyEn:
    "Part 1 photos, Part 3 chats, and Part 7 ads use dining and shopping words: menu, receipt, discount, reservation.",
  bodyJa:
    "Part 1の写真、Part 3の会話、Part 7の広告で menu, receipt, discount, reservation などが頻出します。",
  words: [
    {
      word: "menu",
      reading: "MEN-yoo",
      meaningEn: "list of food and drinks",
      meaningJa: "メニュー",
      wrongMeanings: ["Train schedule", "Staff badge", "Invoice stamp"],
      listenDistractors: ["memo", "metro", "medal"],
    },
    {
      word: "receipt",
      reading: "rih-SEET",
      meaningEn: "proof of payment",
      meaningJa: "領収書",
      wrongMeanings: ["Kitchen apron", "Window seat", "Name tag"],
    },
    {
      word: "discount",
      reading: "DIS-kownt",
      meaningEn: "price reduction",
      meaningJa: "割引",
      wrongMeanings: ["Extra tax only", "Longer wait time", "Free parking only"],
    },
    {
      word: "reservation",
      reading: "rez-er-VAY-shun",
      meaningEn: "booking for a table or room",
      meaningJa: "予約",
      wrongMeanings: ["Cleaning cart", "Broken chair", "Street map"],
    },
    {
      word: "cashier",
      reading: "ka-SHEER",
      meaningEn: "person who takes payment",
      meaningJa: "レジ係",
      wrongMeanings: ["Chef only", "Pilot", "Librarian only"],
    },
    {
      word: "refund",
      reading: "REE-fund",
      meaningEn: "money returned to a buyer",
      meaningJa: "返金",
      wrongMeanings: ["Store opening hours", "Gift wrap fee", "Loyalty stamp"],
    },
  ],
});
