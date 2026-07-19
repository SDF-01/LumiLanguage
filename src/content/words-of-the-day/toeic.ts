import type { DailyWord } from "@/lib/daily-words";
import { pickDailyWords } from "@/lib/daily-words";
import toeicJson from "@/content/words-of-the-day/data/toeic.json";

export const toeicWordPool = toeicJson as DailyWord[];

export function getToeicWordsOfTheDay(date = new Date()): DailyWord[] {
  return pickDailyWords(toeicWordPool, 5, "toeic", date);
}
