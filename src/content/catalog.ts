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
import {
  japaneseHiraganaBaUnit,
  japaneseHiraganaDaUnit,
  japaneseHiraganaGaUnit,
  japaneseHiraganaPaUnit,
  japaneseHiraganaZaUnit,
} from "@/content/japanese/hiragana-dakuten";
import { japaneseHiraganaSaUnit } from "@/content/japanese/hiragana-sa";
import { japaneseHiraganaYouonUnit } from "@/content/japanese/hiragana-youon";
import { japaneseKanjiBasicsUnit } from "@/content/japanese/kanji-basics";
import { japaneseKanjiNatureUnit } from "@/content/japanese/kanji-nature";
import { japaneseKanjiNumbersTimeUnit } from "@/content/japanese/kanji-numbers-time";
import { japaneseKatakanaAUnit } from "@/content/japanese/katakana-a";
import {
  japaneseKatakanaBaUnit,
  japaneseKatakanaDaUnit,
  japaneseKatakanaGaUnit,
  japaneseKatakanaPaUnit,
  japaneseKatakanaZaUnit,
} from "@/content/japanese/katakana-dakuten";
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
import { japaneseKatakanaBridgeUnit } from "@/content/japanese/katakana-bridge";
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
  japaneseHiraganaGaUnit,
  japaneseHiraganaZaUnit,
  japaneseHiraganaDaUnit,
  japaneseHiraganaBaUnit,
  japaneseHiraganaPaUnit,
  japaneseHiraganaYouonUnit,
  japaneseKatakanaBridgeUnit,
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
  japaneseKatakanaGaUnit,
  japaneseKatakanaZaUnit,
  japaneseKatakanaDaUnit,
  japaneseKatakanaBaUnit,
  japaneseKatakanaPaUnit,
  japaneseKanjiBasicsUnit,
  japaneseKanjiNatureUnit,
  japaneseKanjiNumbersTimeUnit,
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
    label: "Learn あいうえお (first alphabet)",
    labelJa: "あいうえおを覚える（最初の五十音）",
    unitId: japaneseBridgeUnit.id,
    section: "startHere",
  },
  {
    id: "H1",
    label: "Learn + practice: あ行",
    labelJa: "覚える＋練習：あ行",
    unitId: japaneseHiraganaAUnit.id,
    section: "hiragana",
  },
  {
    id: "H2",
    label: "Learn + practice: か行",
    labelJa: "覚える＋練習：か行",
    unitId: japaneseHiraganaKaUnit.id,
    section: "hiragana",
  },
  {
    id: "H3",
    label: "Learn + practice: さ行",
    labelJa: "覚える＋練習：さ行",
    unitId: japaneseHiraganaSaUnit.id,
    section: "hiragana",
  },
  {
    id: "H4",
    label: "Learn + practice: た行",
    labelJa: "覚える＋練習：た行",
    unitId: japaneseHiraganaTaUnit.id,
    section: "hiragana",
  },
  {
    id: "H5",
    label: "Learn + practice: な行",
    labelJa: "覚える＋練習：な行",
    unitId: japaneseHiraganaNaUnit.id,
    section: "hiragana",
  },
  {
    id: "H6",
    label: "Learn + practice: は行",
    labelJa: "覚える＋練習：は行",
    unitId: japaneseHiraganaHaUnit.id,
    section: "hiragana",
  },
  {
    id: "H7",
    label: "Learn + practice: ま行",
    labelJa: "覚える＋練習：ま行",
    unitId: japaneseHiraganaMaUnit.id,
    section: "hiragana",
  },
  {
    id: "H8",
    label: "Learn + practice: や行",
    labelJa: "覚える＋練習：や行",
    unitId: japaneseHiraganaYaUnit.id,
    section: "hiragana",
  },
  {
    id: "H9",
    label: "Learn + practice: ら行",
    labelJa: "覚える＋練習：ら行",
    unitId: japaneseHiraganaRaUnit.id,
    section: "hiragana",
  },
  {
    id: "H10",
    label: "Learn + practice: わ行・ん",
    labelJa: "覚える＋練習：わをん",
    unitId: japaneseHiraganaWaUnit.id,
    section: "hiragana",
  },
  {
    id: "H11",
    label: "Learn + practice: が行",
    labelJa: "覚える＋練習：が行（濁音）",
    unitId: japaneseHiraganaGaUnit.id,
    section: "hiragana",
  },
  {
    id: "H12",
    label: "Learn + practice: ざ行",
    labelJa: "覚える＋練習：ざ行（濁音）",
    unitId: japaneseHiraganaZaUnit.id,
    section: "hiragana",
  },
  {
    id: "H13",
    label: "Learn + practice: だ行",
    labelJa: "覚える＋練習：だ行（濁音）",
    unitId: japaneseHiraganaDaUnit.id,
    section: "hiragana",
  },
  {
    id: "H14",
    label: "Learn + practice: ば行",
    labelJa: "覚える＋練習：ば行（濁音）",
    unitId: japaneseHiraganaBaUnit.id,
    section: "hiragana",
  },
  {
    id: "H15",
    label: "Learn + practice: ぱ行",
    labelJa: "覚える＋練習：ぱ行（半濁音）",
    unitId: japaneseHiraganaPaUnit.id,
    section: "hiragana",
  },
  {
    id: "H16",
    label: "Learn + practice: youon",
    labelJa: "覚える＋練習：拗音",
    unitId: japaneseHiraganaYouonUnit.id,
    section: "hiragana",
  },
  {
    id: "K0",
    label: "Learn アイウエオ (katakana alphabet)",
    labelJa: "アイウエオを覚える（カタカナ）",
    unitId: japaneseKatakanaBridgeUnit.id,
    section: "katakana",
  },
  {
    id: "K1",
    label: "Learn + practice: ア行",
    labelJa: "覚える＋練習：ア行",
    unitId: japaneseKatakanaAUnit.id,
    section: "katakana",
  },
  {
    id: "K2",
    label: "Learn + practice: カ行",
    labelJa: "覚える＋練習：カ行",
    unitId: japaneseKatakanaKaUnit.id,
    section: "katakana",
  },
  {
    id: "K3",
    label: "Learn + practice: サ行",
    labelJa: "覚える＋練習：サ行",
    unitId: japaneseKatakanaSaUnit.id,
    section: "katakana",
  },
  {
    id: "K4",
    label: "Learn + practice: タ行",
    labelJa: "覚える＋練習：タ行",
    unitId: japaneseKatakanaTaUnit.id,
    section: "katakana",
  },
  {
    id: "K5",
    label: "Learn + practice: ナ行",
    labelJa: "覚える＋練習：ナ行",
    unitId: japaneseKatakanaNaUnit.id,
    section: "katakana",
  },
  {
    id: "K6",
    label: "Learn + practice: ハ行",
    labelJa: "覚える＋練習：ハ行",
    unitId: japaneseKatakanaHaUnit.id,
    section: "katakana",
  },
  {
    id: "K7",
    label: "Learn + practice: マ行",
    labelJa: "覚える＋練習：マ行",
    unitId: japaneseKatakanaMaUnit.id,
    section: "katakana",
  },
  {
    id: "K8",
    label: "Learn + practice: ヤ行",
    labelJa: "覚える＋練習：ヤ行",
    unitId: japaneseKatakanaYaUnit.id,
    section: "katakana",
  },
  {
    id: "K9",
    label: "Learn + practice: ラ行",
    labelJa: "覚える＋練習：ラ行",
    unitId: japaneseKatakanaRaUnit.id,
    section: "katakana",
  },
  {
    id: "K10",
    label: "Learn + practice: ワ行・ン",
    labelJa: "覚える＋練習：ワヲン",
    unitId: japaneseKatakanaWaUnit.id,
    section: "katakana",
  },
  {
    id: "K11",
    label: "Learn + practice: ガ行",
    labelJa: "覚える＋練習：ガ行（濁音）",
    unitId: japaneseKatakanaGaUnit.id,
    section: "katakana",
  },
  {
    id: "K12",
    label: "Learn + practice: ザ行",
    labelJa: "覚える＋練習：ザ行（濁音）",
    unitId: japaneseKatakanaZaUnit.id,
    section: "katakana",
  },
  {
    id: "K13",
    label: "Learn + practice: ダ行",
    labelJa: "覚える＋練習：ダ行（濁音）",
    unitId: japaneseKatakanaDaUnit.id,
    section: "katakana",
  },
  {
    id: "K14",
    label: "Learn + practice: バ行",
    labelJa: "覚える＋練習：バ行（濁音）",
    unitId: japaneseKatakanaBaUnit.id,
    section: "katakana",
  },
  {
    id: "K15",
    label: "Learn + practice: パ行",
    labelJa: "覚える＋練習：パ行（半濁音）",
    unitId: japaneseKatakanaPaUnit.id,
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
    id: "C2",
    label: "Kanji: nature",
    labelJa: "漢字：自然",
    unitId: japaneseKanjiNatureUnit.id,
    section: "kanji",
  },
  {
    id: "C3",
    label: "Kanji: numbers and time",
    labelJa: "漢字：数と時間",
    unitId: japaneseKanjiNumbersTimeUnit.id,
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
      "Learn the alphabet before quizzes: each kana lesson teaches letters with audio first, then a short practice. Hiragana, katakana, kanji, and phrases.",
    blurbJa:
      "クイズの前に文字を教えます。各かなレッスンは音声つきで覚えてから短い練習へ。ひらがな・カタカナ・漢字・フレーズ。",
    cta: "Continue Japanese path",
    ctaJa: "日本語コースへ",
    unitId: japaneseWelcomeUnit.id,
  },
};
