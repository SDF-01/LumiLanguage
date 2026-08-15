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
import { japaneseSelfIntroUnit } from "@/content/japanese/self-intro";
import { japaneseNumbersSpeakUnit } from "@/content/japanese/numbers";
import { japaneseFamilyUnit } from "@/content/japanese/family";
import { japaneseFoodUnit } from "@/content/japanese/food";
import { japaneseShoppingUnit } from "@/content/japanese/shopping";
import { japaneseDailyLifeUnit } from "@/content/japanese/daily-life";
import { japaneseWeatherUnit } from "@/content/japanese/weather";
import { japaneseKatakanaYouonUnit } from "@/content/japanese/katakana-youon";
import { japaneseKanjiPeopleUnit } from "@/content/japanese/kanji-people";
import {
  japaneseProEmailUnit,
  japaneseProMeetingUnit,
  japaneseProNewsUnit,
  japaneseSentenceFirstUnit,
  japaneseSentenceMixUnit,
} from "@/content/japanese/sentence-units";
import { toeicBridgeUnit } from "@/content/toeic/foundations-bridge";
import { toeicSoundsUnit } from "@/content/toeic/foundations-sounds";
import { toeicWelcomeUnit } from "@/content/toeic/foundations-welcome";
import { toeicWordSystemsUnit } from "@/content/toeic/foundations-words";
import { toeicGrammarConjunctionsUnit } from "@/content/toeic/grammar-conjunctions";
import { toeicGrammarPrepositionsUnit } from "@/content/toeic/grammar-prepositions";
import { toeicGrammarWordFormsUnit } from "@/content/toeic/grammar-word-forms";
import { toeicPart1Unit } from "@/content/toeic/part1";
import { toeicPart2Unit } from "@/content/toeic/part2";
import { toeicPart3Unit } from "@/content/toeic/part3";
import { toeicPart4Unit } from "@/content/toeic/part4";
import { toeicPart5Unit } from "@/content/toeic/part5";
import { toeicPart6Unit } from "@/content/toeic/part6";
import { toeicPart7Unit } from "@/content/toeic/part7";
import { toeicPart7DoubleUnit } from "@/content/toeic/part7-double";
import { toeicReadingFoundationsUnit } from "@/content/toeic/reading-foundations";
import { toeicVocabDiningUnit } from "@/content/toeic/vocab-dining";
import { toeicVocabFinanceUnit } from "@/content/toeic/vocab-finance";
import { toeicVocabHrUnit } from "@/content/toeic/vocab-hr";
import { toeicVocabNumbersUnit } from "@/content/toeic/vocab-numbers";
import { toeicVocabOfficeUnit } from "@/content/toeic/vocab-office";
import { toeicVocabPeopleUnit } from "@/content/toeic/vocab-people";
import { toeicVocabTravelUnit } from "@/content/toeic/vocab-travel";
import type { LearningUnit, PathId } from "@/lib/types";

const units: LearningUnit[] = [
  toeicWelcomeUnit,
  toeicSoundsUnit,
  toeicWordSystemsUnit,
  toeicBridgeUnit,
  toeicVocabNumbersUnit,
  toeicVocabPeopleUnit,
  toeicVocabOfficeUnit,
  toeicVocabTravelUnit,
  toeicVocabDiningUnit,
  toeicVocabHrUnit,
  toeicVocabFinanceUnit,
  toeicReadingFoundationsUnit,
  toeicGrammarWordFormsUnit,
  toeicGrammarPrepositionsUnit,
  toeicGrammarConjunctionsUnit,
  toeicPart1Unit,
  toeicPart2Unit,
  toeicPart3Unit,
  toeicPart4Unit,
  toeicPart5Unit,
  toeicPart6Unit,
  toeicPart7Unit,
  toeicPart7DoubleUnit,
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
  japaneseKatakanaYouonUnit,
  japaneseKanjiBasicsUnit,
  japaneseKanjiNatureUnit,
  japaneseKanjiNumbersTimeUnit,
  japaneseKanjiPeopleUnit,
  japaneseGreetingsUnit,
  japaneseParticlesUnit,
  japaneseSentenceFirstUnit,
  japaneseSentenceMixUnit,
  japaneseProEmailUnit,
  japaneseProNewsUnit,
  japaneseProMeetingUnit,
  japaneseSelfIntroUnit,
  japaneseNumbersSpeakUnit,
  japaneseFamilyUnit,
  japaneseFoodUnit,
  japaneseShoppingUnit,
  japaneseDailyLifeUnit,
  japaneseWeatherUnit,
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
    ...toeicPart7DoubleUnit.exercises.filter((e) => e.kind === "multiple-choice"),
    ...toeicGrammarWordFormsUnit.exercises.filter(
      (e) => e.kind === "multiple-choice",
    ),
    ...toeicGrammarPrepositionsUnit.exercises.filter(
      (e) => e.kind === "multiple-choice",
    ),
    ...toeicGrammarConjunctionsUnit.exercises.filter(
      (e) => e.kind === "multiple-choice",
    ),
    ...toeicPart2Unit.exercises.filter((e) => e.kind === "listen-choice"),
    ...toeicVocabOfficeUnit.exercises.filter((e) => e.kind === "multiple-choice"),
    ...toeicVocabFinanceUnit.exercises.filter(
      (e) => e.kind === "multiple-choice",
    ),
  ];
}

export type PathSection =
  | "vocab"
  | "reading"
  | "grammar"
  | "listening"
  | "examReading"
  | "startHere"
  | "hiragana"
  | "katakana"
  | "kanji"
  | "phrases"
  | "life"
  | "readTrack"
  | "proRead";

export type PathNode = {
  id: string;
  label: string;
  labelJa: string;
  unitId: string;
  section: PathSection;
  href?: string;
};

export const toeicPathNodes: PathNode[] = [
  {
    id: "E0",
    label: "First English phrases",
    labelJa: "はじめての英語フレーズ",
    unitId: toeicWelcomeUnit.id,
    section: "startHere",
  },
  {
    id: "E1",
    label: "English sounds (R/L, TH, vowels)",
    labelJa: "英語の音（R/L・TH・母音）",
    unitId: toeicSoundsUnit.id,
    section: "startHere",
  },
  {
    id: "E2",
    label: "How English words work",
    labelJa: "英単語の仕組み",
    unitId: toeicWordSystemsUnit.id,
    section: "startHere",
  },
  {
    id: "E3",
    label: "Ready for vocabulary",
    labelJa: "語彙レッスン準備",
    unitId: toeicBridgeUnit.id,
    section: "startHere",
  },
  {
    id: "V0",
    label: "Learn + practice: Numbers, dates & time",
    labelJa: "覚える＋練習：数・日付・時刻",
    unitId: toeicVocabNumbersUnit.id,
    section: "vocab",
  },
  {
    id: "V0b",
    label: "Learn + practice: People & jobs",
    labelJa: "覚える＋練習：人・職業",
    unitId: toeicVocabPeopleUnit.id,
    section: "vocab",
  },
  {
    id: "V1",
    label: "Learn + practice: Office basics",
    labelJa: "覚える＋練習：オフィス基礎",
    unitId: toeicVocabOfficeUnit.id,
    section: "vocab",
  },
  {
    id: "V2",
    label: "Learn + practice: Travel & logistics",
    labelJa: "覚える＋練習：旅行・物流",
    unitId: toeicVocabTravelUnit.id,
    section: "vocab",
  },
  {
    id: "V3",
    label: "Learn + practice: Dining & shopping",
    labelJa: "覚える＋練習：飲食・買い物",
    unitId: toeicVocabDiningUnit.id,
    section: "vocab",
  },
  {
    id: "V4",
    label: "Learn + practice: HR & meetings",
    labelJa: "覚える＋練習：人事・会議",
    unitId: toeicVocabHrUnit.id,
    section: "vocab",
  },
  {
    id: "V5",
    label: "Learn + practice: Finance",
    labelJa: "覚える＋練習：財務",
    unitId: toeicVocabFinanceUnit.id,
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
    id: "G1",
    label: "Learn + practice: Word forms",
    labelJa: "覚える＋練習：品詞",
    unitId: toeicGrammarWordFormsUnit.id,
    section: "grammar",
  },
  {
    id: "G2",
    label: "Learn + practice: Prepositions",
    labelJa: "覚える＋練習：前置詞",
    unitId: toeicGrammarPrepositionsUnit.id,
    section: "grammar",
  },
  {
    id: "G3",
    label: "Learn + practice: Conjunctions",
    labelJa: "覚える＋練習：接続詞",
    unitId: toeicGrammarConjunctionsUnit.id,
    section: "grammar",
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
  {
    id: "R7b",
    label: "Reading Part 7: Double passages",
    labelJa: "リーディング Part 7：ダブル文書",
    unitId: toeicPart7DoubleUnit.id,
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
    id: "K16",
    label: "Learn + practice: katakana youon",
    labelJa: "覚える＋練習：カタカナ拗音",
    unitId: japaneseKatakanaYouonUnit.id,
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
    id: "C4",
    label: "Kanji: people",
    labelJa: "漢字：人",
    unitId: japaneseKanjiPeopleUnit.id,
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
  {
    id: "B1",
    label: "Build first sentences",
    labelJa: "はじめての文づくり",
    unitId: japaneseSentenceFirstUnit.id,
    section: "readTrack",
  },
  {
    id: "B2",
    label: "Mix hiragana, katakana, kanji",
    labelJa: "3つの文字を混ぜる",
    unitId: japaneseSentenceMixUnit.id,
    section: "readTrack",
  },
  {
    id: "W1",
    label: "Read a work email",
    labelJa: "仕事のメールを読む",
    unitId: japaneseProEmailUnit.id,
    section: "proRead",
  },
  {
    id: "W2",
    label: "Read a news headline",
    labelJa: "ニュースの見出し",
    unitId: japaneseProNewsUnit.id,
    section: "proRead",
  },
  {
    id: "W3",
    label: "Read a meeting line",
    labelJa: "会議の一言",
    unitId: japaneseProMeetingUnit.id,
    section: "proRead",
  },
  {
    id: "L1",
    label: "Speak: self-introduction",
    labelJa: "話す：自己紹介",
    unitId: japaneseSelfIntroUnit.id,
    section: "life",
  },
  {
    id: "L2",
    label: "Speak: numbers and prices",
    labelJa: "話す：数字と値段",
    unitId: japaneseNumbersSpeakUnit.id,
    section: "life",
  },
  {
    id: "L3",
    label: "Speak: family",
    labelJa: "話す：家族",
    unitId: japaneseFamilyUnit.id,
    section: "life",
  },
  {
    id: "L4",
    label: "Speak: food and drink",
    labelJa: "話す：食べ物・飲み物",
    unitId: japaneseFoodUnit.id,
    section: "life",
  },
  {
    id: "L5",
    label: "Speak: shopping",
    labelJa: "話す：買い物",
    unitId: japaneseShoppingUnit.id,
    section: "life",
  },
  {
    id: "L6",
    label: "Speak: daily life",
    labelJa: "話す：毎日",
    unitId: japaneseDailyLifeUnit.id,
    section: "life",
  },
  {
    id: "L7",
    label: "Speak: weather small talk",
    labelJa: "話す：天気の雑談",
    unitId: japaneseWeatherUnit.id,
    section: "life",
  },
];

export const pathMeta = {
  toeic: {
    id: "toeic" as const,
    title: "TOEIC 800+",
    titleJa: "TOEIC 800点突破",
    blurb:
      "10-phase path: START HERE, themed VOCAB, READING, GRAMMAR, then Listening and Reading exam skills including double Part 7. Teach first, then practice. Original items only.",
    blurbJa:
      "10フェーズ：まずはここから、テーマ別VOCAB、READING、文法、本番リスニング／リーディング（ダブルPart 7含む）。先に教えてから練習。オリジナル問題のみ。",
    cta: "Continue TOEIC path",
    ctaJa: "TOEICコースへ",
    unitId: toeicWelcomeUnit.id,
  },
  japanese: {
    id: "japanese" as const,
    title: "Japanese Quest",
    titleJa: "日本語クエスト",
    blurb:
      "First learn the letters — hiragana, katakana, and kanji — with romaji hidden. Then build sentences and climb to workplace reading.",
    blurbJa:
      "まず文字。ひらがな・カタカナ・漢字を、ローマ字を隠して覚える。それから文を組み立て、仕事の読解へ。",
    cta: "Continue Japanese path",
    ctaJa: "日本語コースへ",
    unitId: japaneseWelcomeUnit.id,
  },
};
