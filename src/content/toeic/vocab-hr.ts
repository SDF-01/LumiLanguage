import { createThematicVocabUnit } from "@/content/toeic/vocab-factory";

/** Phase A6: HR / meetings */
export const toeicVocabHrUnit = createThematicVocabUnit({
  id: "toeic-vocab-hr",
  title: "VOCAB: HR & meetings",
  titleJa: "語彙：人事・会議",
  subtitle: "Hiring, training, and meeting language",
  tutorialTitleEn: "Emails love HR and meeting words",
  tutorialTitleJa: "メールで多い人事・会議語",
  bodyEn:
    "Part 3 conversations and Part 7 emails talk about interviews, training, resignations, and meeting minutes.",
  bodyJa:
    "Part 3の会話やPart 7のメールでは、面接・研修・退職・議事録などの語が出ます。",
  words: [
    {
      word: "interview",
      reading: "IN-ter-vyoo",
      meaningEn: "formal job conversation",
      meaningJa: "面接",
      wrongMeanings: ["Factory tour only", "Parking fine", "Coffee break"],
    },
    {
      word: "resume",
      reading: "REZ-oo-may",
      meaningEn: "document of work history",
      meaningJa: "履歴書",
      wrongMeanings: ["Office plant", "Bus pass", "Water cooler"],
      listenDistractors: ["review", "rescue", "result"],
    },
    {
      word: "training",
      reading: "TRAY-ning",
      meaningEn: "teaching skills for a job",
      meaningJa: "研修・トレーニング",
      wrongMeanings: ["Vacation package", "Desk lamp", "Tax form only"],
    },
    {
      word: "resign",
      reading: "rih-ZYN",
      meaningEn: "quit a job formally",
      meaningJa: "辞職する",
      wrongMeanings: ["Arrive early", "Order lunch", "Print badges"],
    },
    {
      word: "minutes",
      reading: "MIN-its",
      meaningEn: "written record of a meeting",
      meaningJa: "議事録",
      wrongMeanings: ["Clock batteries", "Elevator delay", "Staff uniforms"],
    },
    {
      word: "benefits",
      reading: "BEN-uh-fits",
      meaningEn: "extras from an employer (health, leave)",
      meaningJa: "福利厚生",
      wrongMeanings: ["Desk drawers", "Lobby plants", "Street parking"],
    },
  ],
});
