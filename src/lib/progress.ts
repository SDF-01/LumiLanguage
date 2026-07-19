import type { ProgressState } from "@/lib/types";

const STORAGE_KEY = "neon-lingua-progress-v1";

const defaultProgress = (): ProgressState => ({
  xp: 0,
  streak: 0,
  lastPlayedDate: null,
  completedUnits: [],
  examBestPercent: null,
});

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return { ...defaultProgress(), ...JSON.parse(raw) } as ProgressState;
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function completeUnit(unitId: string, xpReward: number): ProgressState {
  const current = loadProgress();
  const today = todayKey();
  let streak = current.streak;

  if (current.lastPlayedDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    streak = current.lastPlayedDate === yKey ? current.streak + 1 : 1;
  }

  const already = current.completedUnits.includes(unitId);
  const next: ProgressState = {
    ...current,
    xp: current.xp + (already ? Math.floor(xpReward / 4) : xpReward),
    streak,
    lastPlayedDate: today,
    completedUnits: already
      ? current.completedUnits
      : [...current.completedUnits, unitId],
  };
  saveProgress(next);
  return next;
}

export function recordExamScore(percent: number): ProgressState {
  const current = loadProgress();
  const next: ProgressState = {
    ...current,
    examBestPercent:
      current.examBestPercent == null
        ? percent
        : Math.max(current.examBestPercent, percent),
    lastPlayedDate: todayKey(),
  };
  saveProgress(next);
  return next;
}
