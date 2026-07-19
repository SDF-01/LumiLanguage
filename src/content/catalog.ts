import { japaneseBridgeUnit } from "@/content/japanese/foundations-bridge";
import { japaneseScriptsUnit } from "@/content/japanese/foundations-scripts";
import { japaneseSoundsUnit } from "@/content/japanese/foundations-sounds";
import { japaneseWelcomeUnit } from "@/content/japanese/foundations-welcome";
import { japaneseGreetingsUnit } from "@/content/japanese/greetings";
import { japaneseHiraganaAUnit } from "@/content/japanese/hiragana-a";
import { japaneseHiraganaKaUnit } from "@/content/japanese/hiragana-ka";
import {
  japaneseHiraganaHaUnit,
  japaneseHiraganaMaUnit,
  japaneseHiraganaNaUnit,
  japaneseHiraganaRaUnit,
  japaneseHiraganaTaUnit,
  japaneseHiraganaWaUnit,
  japaneseHiraganaYaUnit,
} from "@/content/japanese/hiragana-lines";
import { japaneseHiraganaSaUnit } from "@/content/japanese/hiragana-sa";
import { japaneseKanjiBasicsUnit } from "@/content/japanese/kanji-basics";
import { japaneseKatakanaAUnit } from "@/content/japanese/katakana-a";
import {
  japaneseKatakanaHaUnit,
  japaneseKatakanaKaUnit,
  japaneseKatakanaMaUnit,
  japaneseKatakanaNaUnit,
  japaneseKatakanaRaUnit,
  japaneseKatakanaSaUnit,
  japaneseKatakanaTaUnit,
  japaneseKatakanaWaUnit,
  japaneseKatakanaYaUnit,
} from "@/content/japanese/katakana-lines";
import { japaneseParticlesUnit } from "@/content/japanese/particles";
import { toeicPart1Unit } from "@/content/toeic/part1";
import { toeicPart2Unit } from "@/content/toeic/part2";
import { toeicPart3Unit } from "@/content/toeic/part3";
import { toeicPart4Unit } from "@/content/toeic/part4";
import { toeicPart5Unit } from "@/content/toeic/part5";
import { toeicPart6Unit } from "@/content/toeic/part6";
import { toeicPart7Unit } from "@/content/toeic/part7";
import { toeicReadingFoundationsUnit } from "@/content/toeic/reading-foundations";
import { toeicVocabOfficeUnit } from "@/content/toeic/vocab-office";
import { toeicVocabTravelUnit } from "@/content/toeic/vocab-travel";
import type { LearningUnit, PathId } from "@/lib/types";

const units: LearningUnit[] = [
  toeicVocabOfficeUnit,
  toeicVocabTravelUnit,
  toeicReadingFoundationsUnit,
  toeicPart1Unit,
  toeicPart2Unit,
  toeicPart3Unit,
  toeicPart4Unit,
  toeicPart5Unit,
  toeicPart6Unit,
  toeicPart7Unit,
  japaneseWelcomeUnit,
  japaneseSoundsUnit,
  japaneseScriptsUnit,
  japaneseBridgeUnit,
  japaneseHiraganaAUnit,
  japaneseHiraganaKaUnit,
  japaneseHiraganaSaUnit,
  japaneseHiraganaTaUnit,
  japaneseHiraganaNaUnit,
  japaneseHiraganaHaUnit,
  japaneseHiraganaMaUnit,
  japaneseHiraganaYaUnit,
  japaneseHiraganaRaUnit,
  japaneseHiraganaWaUnit,
  japaneseKatakanaAUnit,
  japaneseKatakanaKaUnit,
  japaneseKatakanaSaUnit,
  japaneseKatakanaTaUnit,
  japaneseKatakanaNaUnit,
  japaneseKatakanaHaUnit,
  japaneseKatakanaMaUnit,
  japaneseKatakanaYaUnit,
  japaneseKatakanaRaUnit,
  japaneseKatakanaWaUnit,
  japaneseKanjiBasicsUnit,
  japaneseGreetingsUnit,
  japaneseParticlesUnit,
];

export function getUnit(unitId: string): LearningUnit | undefined {
  return units.find((u) => u.id === unitId);
}

export function getUnitsForPath(pathId: PathId): LearningUnit[] {
  return units.filter((u) => u.pathId === pathId);
}

export function getAllUnits(): LearningUnit[] {
  return units;
}

export function getExamPool() {
  return [
    ...toeicPart5Unit.exercises.filter((e) => e.kind === "multiple-choice"),
    ...toeicPart6Unit.exercises.filter((e) => e.kind === "multiple-choice"),
    ...toeicPart7Unit.exercises.filter((e) => e.kind === "multiple-choice"),
    ...toeicPart2Unit.exercises.filter((e) => e.kind === "listen-choice"),
    ...toeicVocabOfficeUnit.exercises.filter((e) => e.kind === "multiple-choice"),
  ];
}

export type PathSection =
  | "vocab"
  | "reading"
  | "listening"
  | "examReading"
  | "startHere"
  | "hiragana"
  | "katakana"
  | "kanji"
  | "phrases";

export type PathNode = {
  id: string;
  label: string;
  labelJa: string;
  unitId: string;
  section: PathSection;
};

export const toeicPathNodes: PathNode[] = [
  {
    id: "V1",
    label: "VOCAB: Office basics",
    labelJa: "語彙：オフィス基礎",
    unitId: toeicVocabOfficeUnit.id,
    section: "vocab",
  },
  {
    id: "V2",
    label: "VOCAB: Travel & logistics",
    labelJa: "語彙：旅行・物流",
    unitId: toeicVocabTravelUnit.id,
    section: "vocab",
  },
  {
    id: "R0",
    label: "READING: Foundations",
    labelJa: "読解：基礎",
    unitId: toeicReadingFoundationsUnit.id,
    section: "reading",
  },
  {
    id: "L1",
    label: "Listening Part 1: Photographs",
    labelJa: "リスニング Part 1：写真",
    unitId: toeicPart1Unit.id,
    section: "listening",
  },
  {
    id: "L2",
    label: "Listening Part 2: Question-Response",
    labelJa: "リスニング Part 2：応答問題",
    unitId: toeicPart2Unit.id,
    section: "listening",
  },
  {
    id: "L3",
    label: "Listening Part 3: Conversations",
    labelJa: "リスニング Part 3：会話問題",
    unitId: toeicPart3Unit.id,
    section: "listening",
  },
  {
    id: "L4",
    label: "Listening Part 4: Talks",
    labelJa: "リスニング Part 4：説明文",
    unitId: toeicPart4Unit.id,
    section: "listening",
  },
  {
    id: "R5",
    label: "Reading Part 5: Incomplete Sentences",
    labelJa: "リーディング Part 5：短文穴埋め",
    unitId: toeicPart5Unit.id,
    section: "examReading",
  },
  {
    id: "R6",
    label: "Reading Part 6: Text Completion",
    labelJa: "リーディング Part 6：長文穴埋め",
    unitId: toeicPart6Unit.id,
    section: "examReading",
  },
  {
    id: "R7",
    label: "Reading Part 7: Reading Comprehension",
    labelJa: "リーディング Part 7：読解",
    unitId: toeicPart7Unit.id,
    section: "examReading",
  },
];

export const japanesePathNodes: PathNode[] = [
  {
    id: "S0",
    label: "First phrases: hello, thanks, yes, no",
    labelJa: "はじめてのフレーズ：こんにちは・ありがとう・はい・いいえ",
    unitId: japaneseWelcomeUnit.id,
    section: "startHere",
  },
  {
    id: "S1",
    label: "Japanese sounds (romaji + audio)",
    labelJa: "日本語の音（ローマ字＋音声）",
    unitId: japaneseSoundsUnit.id,
    section: "startHere",
  },
  {
    id: "S2",
    label: "Three writing systems",
    labelJa: "3つの文字体系",
    unitId: japaneseScriptsUnit.id,
    section: "startHere",
  },
  {
    id: "S3",
    label: "Ready for hiragana",
    labelJa: "ひらがな準備",
    unitId: japaneseBridgeUnit.id,
    section: "startHere",
  },
  {
    id: "H1",
    label: "Hiragana あ行",
    labelJa: "ひらがな あ行",
    unitId: japaneseHiraganaAUnit.id,
    section: "hiragana",
  },
  {
    id: "H2",
    label: "Hiragana か行",
    labelJa: "ひらがな か行",
    unitId: japaneseHiraganaKaUnit.id,
    section: "hiragana",
  },
  {
    id: "H3",
    label: "Hiragana さ行",
    labelJa: "ひらがな さ行",
    unitId: japaneseHiraganaSaUnit.id,
    section: "hiragana",
  },
  {
    id: "H4",
    label: "Hiragana た行",
    labelJa: "ひらがな た行",
    unitId: japaneseHiraganaTaUnit.id,
    section: "hiragana",
  },
  {
    id: "H5",
    label: "Hiragana な行",
    labelJa: "ひらがな な行",
    unitId: japaneseHiraganaNaUnit.id,
    section: "hiragana",
  },
  {
    id: "H6",
    label: "Hiragana は行",
    labelJa: "ひらがな は行",
    unitId: japaneseHiraganaHaUnit.id,
    section: "hiragana",
  },
  {
    id: "H7",
    label: "Hiragana ま行",
    labelJa: "ひらがな ま行",
    unitId: japaneseHiraganaMaUnit.id,
    section: "hiragana",
  },
  {
    id: "H8",
    label: "Hiragana や行",
    labelJa: "ひらがな や行",
    unitId: japaneseHiraganaYaUnit.id,
    section: "hiragana",
  },
  {
    id: "H9",
    label: "Hiragana ら行",
    labelJa: "ひらがな ら行",
    unitId: japaneseHiraganaRaUnit.id,
    section: "hiragana",
  },
  {
    id: "H10",
    label: "Hiragana わ行・ん",
    labelJa: "ひらがな わをん",
    unitId: japaneseHiraganaWaUnit.id,
    section: "hiragana",
  },
  {
    id: "K1",
    label: "Katakana ア行",
    labelJa: "カタカナ ア行",
    unitId: japaneseKatakanaAUnit.id,
    section: "katakana",
  },
  {
    id: "K2",
    label: "Katakana カ行",
    labelJa: "カタカナ カ行",
    unitId: japaneseKatakanaKaUnit.id,
    section: "katakana",
  },
  {
    id: "K3",
    label: "Katakana サ行",
    labelJa: "カタカナ サ行",
    unitId: japaneseKatakanaSaUnit.id,
    section: "katakana",
  },
  {
    id: "K4",
    label: "Katakana タ行",
    labelJa: "カタカナ タ行",
    unitId: japaneseKatakanaTaUnit.id,
    section: "katakana",
  },
  {
    id: "K5",
    label: "Katakana ナ行",
    labelJa: "カタカナ ナ行",
    unitId: japaneseKatakanaNaUnit.id,
    section: "katakana",
  },
  {
    id: "K6",
    label: "Katakana ハ行",
    labelJa: "カタカナ ハ行",
    unitId: japaneseKatakanaHaUnit.id,
    section: "katakana",
  },
  {
    id: "K7",
    label: "Katakana マ行",
    labelJa: "カタカナ マ行",
    unitId: japaneseKatakanaMaUnit.id,
    section: "katakana",
  },
  {
    id: "K8",
    label: "Katakana ヤ行",
    labelJa: "カタカナ ヤ行",
    unitId: japaneseKatakanaYaUnit.id,
    section: "katakana",
  },
  {
    id: "K9",
    label: "Katakana ラ行",
    labelJa: "カタカナ ラ行",
    unitId: japaneseKatakanaRaUnit.id,
    section: "katakana",
  },
  {
    id: "K10",
    label: "Katakana ワ行・ン",
    labelJa: "カタカナ ワヲン",
    unitId: japaneseKatakanaWaUnit.id,
    section: "katakana",
  },
  {
    id: "C1",
    label: "Kanji basics",
    labelJa: "漢字入門",
    unitId: japaneseKanjiBasicsUnit.id,
    section: "kanji",
  },
  {
    id: "P1",
    label: "Greetings",
    labelJa: "あいさつ",
    unitId: japaneseGreetingsUnit.id,
    section: "phrases",
  },
  {
    id: "P2",
    label: "Particles は・を・に",
    labelJa: "助詞 は・を・に",
    unitId: japaneseParticlesUnit.id,
    section: "phrases",
  },
];

export const pathMeta = {
  toeic: {
    id: "toeic" as const,
    title: "TOEIC 800+",
    titleJa: "TOEIC 800点突破",
    blurb:
      "Official Listening and Reading skills. Start with VOCAB and READING, then exam Parts 1 to 7. Original items only.",
    blurbJa:
      "公式のListening & Readingスキル。まずVOCABとREADING、その後Part 1〜7へ。オリジナル問題のみです。",
    cta: "Continue TOEIC path",
    ctaJa: "TOEICコースへ",
    unitId: toeicVocabOfficeUnit.id,
  },
  japanese: {
    id: "japanese" as const,
    title: "Japanese Quest",
    titleJa: "日本語クエスト",
    blurb:
      "Real lessons from day one: first phrases, sounds, scripts, then full hiragana and katakana, kanji, and more phrases. Every lesson builds read, write, speak, listen.",
    blurbJa:
      "最初から本番レッスン：はじめてのフレーズ、音、文字体系、そのあとひらがな・カタカナ全体、漢字とフレーズへ。毎回読む→書く→話す→聞くです。",
    cta: "Continue Japanese path",
    ctaJa: "日本語コースへ",
    unitId: japaneseWelcomeUnit.id,
  },
};
