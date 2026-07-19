import { createThematicVocabUnit } from "@/content/toeic/vocab-factory";

/** Phase A2: People & jobs */
export const toeicVocabPeopleUnit = createThematicVocabUnit({
  id: "toeic-vocab-people",
  title: "VOCAB: People & jobs",
  titleJa: "語彙：人・職業",
  subtitle: "Titles and departments for Parts 1, 3, and 7",
  tutorialTitleEn: "Know who people are at work",
  tutorialTitleJa: "職場の人の呼び方を知る",
  bodyEn:
    "Photos, conversations, and emails name roles: manager, client, applicant. Learn titles and departments with Listen first.",
  bodyJa:
    "写真・会話・メールでは役職名が出ます。manager, client, applicant など。Listen で覚えてから練習へ。",
  words: [
    {
      word: "manager",
      reading: "MAN-uh-jer",
      meaningEn: "person who leads a team",
      meaningJa: "マネージャー・管理者",
      wrongMeanings: ["Office plant", "Shipping box", "Train ticket"],
    },
    {
      word: "colleague",
      reading: "KOL-eeg",
      meaningEn: "person you work with",
      meaningJa: "同僚",
      wrongMeanings: ["Competitor company", "Building elevator", "Desk lamp"],
      listenDistractors: ["college", "collect", "collar"],
    },
    {
      word: "client",
      reading: "KLY-ent",
      meaningEn: "customer who buys services",
      meaningJa: "顧客・クライアント",
      wrongMeanings: ["Internal printer", "Night security", "Parking ticket"],
    },
    {
      word: "applicant",
      reading: "AP-li-kent",
      meaningEn: "person applying for a job",
      meaningJa: "応募者",
      wrongMeanings: ["Retired founder", "Office snack", "Flight attendant only"],
    },
    {
      word: "department",
      reading: "dih-PART-ment",
      meaningEn: "section of a company",
      meaningJa: "部署",
      wrongMeanings: ["Personal hobby", "City park", "Hotel pillow"],
    },
    {
      word: "supervisor",
      reading: "SOO-per-vy-zer",
      meaningEn: "person who oversees work",
      meaningJa: "上司・監督者",
      wrongMeanings: ["Delivery drone", "Lunch menu", "Window curtain"],
    },
  ],
});
