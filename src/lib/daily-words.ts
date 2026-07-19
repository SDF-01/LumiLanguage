/** Deterministic daily picks: sequential slices so nothing repeats for 200 days. */

export type DailyWord = {
  id: string;
  word: string;
  reading?: string;
  meaningEn: string;
  explanationEn: string;
  meaningJa?: string;
  explanationJa?: string;
  ttsText?: string;
  ttsLang?: "ja-JP" | "en-US";
};

export const DAILY_WORDS_PER_DAY = 5;
export const DAILY_WORD_CYCLE_DAYS = 200;

/** Anchor so day 0 is stable across machines. */
const EPOCH_UTC = Date.UTC(2026, 0, 1);

function dayKey(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function getDailyCycleIndex(date = new Date()): number {
  const utcMidnight = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const dayIndex = Math.floor((utcMidnight - EPOCH_UTC) / 86_400_000);
  return (
    ((dayIndex % DAILY_WORD_CYCLE_DAYS) + DAILY_WORD_CYCLE_DAYS) %
    DAILY_WORD_CYCLE_DAYS
  );
}

/**
 * Pick today's words from a pool sized for 200 days × 5 words.
 * Uses sequential slices (not reshuffles) so each day in the cycle is unique.
 */
export function pickDailyWords(
  pool: DailyWord[],
  count: number = DAILY_WORDS_PER_DAY,
  _salt?: string,
  date = new Date(),
): DailyWord[] {
  if (pool.length === 0) return [];
  const take = Math.min(count, DAILY_WORDS_PER_DAY);
  const cycleDays = Math.max(1, Math.floor(pool.length / take));
  const day = getDailyCycleIndex(date) % cycleDays;
  const start = day * take;
  return pool.slice(start, start + take);
}

export function formatDailyDateLabel(date = new Date()): string {
  return dayKey(date);
}
