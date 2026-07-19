/** Unlock Listening after core VOCAB + READING foundations. */
export const TOEIC_LISTENING_REQUIREMENTS = [
  "toeic-vocab-office",
  "toeic-vocab-travel",
  "toeic-reading-foundations",
] as const;

/** Unlock exam Reading parts after Listening Part 1. */
export const TOEIC_EXAM_READING_REQUIREMENTS = [
  "toeic-l1-photographs",
] as const;

function hasAll(completed: string[], required: readonly string[]): boolean {
  return required.every((id) => completed.includes(id));
}

export function isToeicSectionLocked(
  section: string,
  completedUnitIds: string[],
): boolean {
  if (section === "listening") {
    return !hasAll(completedUnitIds, TOEIC_LISTENING_REQUIREMENTS);
  }
  if (section === "examReading") {
    return !hasAll(completedUnitIds, TOEIC_EXAM_READING_REQUIREMENTS);
  }
  return false;
}

export function toeicLockHint(
  section: string,
  locale: "en" | "ja",
): string | null {
  if (section === "listening") {
    return locale === "ja"
      ? "ロック：オフィス語彙・旅行語彙・読解基礎を完了すると解放"
      : "Locked: finish Office VOCAB, Travel VOCAB, and READING foundations";
  }
  if (section === "examReading") {
    return locale === "ja"
      ? "ロック：Listening Part 1 を完了すると解放"
      : "Locked: finish Listening Part 1 first";
  }
  return null;
}
