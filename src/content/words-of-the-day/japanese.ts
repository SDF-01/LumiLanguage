import type { DailyWord } from "@/lib/daily-words";
import { pickDailyWords } from "@/lib/daily-words";
import hiraganaJson from "@/content/words-of-the-day/data/hiragana.json";
import katakanaJson from "@/content/words-of-the-day/data/katakana.json";
import kanjiJson from "@/content/words-of-the-day/data/kanji.json";

export const hiraganaWordPool = hiraganaJson as DailyWord[];
export const katakanaWordPool = katakanaJson as DailyWord[];
export const kanjiWordPool = kanjiJson as DailyWord[];

export function getJapaneseWordsOfTheDay(date = new Date()) {
  return {
    hiragana: pickDailyWords(hiraganaWordPool, 5, "jp-hiragana", date),
    katakana: pickDailyWords(katakanaWordPool, 5, "jp-katakana", date),
    kanji: pickDailyWords(kanjiWordPool, 5, "jp-kanji", date),
  };
}
