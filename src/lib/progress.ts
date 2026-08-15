import type { ProgressState, SkillFocus } from "@/lib/types";

const STORAGE_KEY = "neon-lingua-progress-v1";

const emptySkillXp = (): Record<SkillFocus, number> => ({
  read: 0,
  write: 0,
  speak: 0,
  listen: 0,
});

const defaultProgress = (): ProgressState => ({
  xp: 0,
  streak: 0,
  lastPlayedDate: null,
  completedUnits: [],
  examBestPercent: null,
  skillXp: emptySkillXp(),
  speakAttempts: 0,
  speakPasses: 0,
  lastJapaneseUnitId: null,
});

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

let progressCache: { raw: string | null; value: ProgressState } | null = null;

export function loadProgress(): ProgressState {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (progressCache && progressCache.raw === raw) return progressCache.value;
    if (!raw) {
      const empty = defaultProgress();
      progressCache = { raw, value: empty };
      return empty;
    }
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    const value: ProgressState = {
      ...defaultProgress(),
      ...parsed,
      skillXp: { ...emptySkillXp(), ...parsed.skillXp },
    };
    progressCache = { raw, value };
    return value;
  } catch {
    return defaultProgress();
  }
}

export function getServerProgress(): ProgressState {
  return defaultProgress();
}

export function subscribeProgress(onStoreChange: () => void): () => void {
  const handler = () => {
    progressCache = null;
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener("focus", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("focus", handler);
  };
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  progressCache = { raw: JSON.stringify(state), value: state };
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
    lastJapaneseUnitId: unitId.startsWith("jp-")
      ? unitId
      : current.lastJapaneseUnitId,
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

export function addSkillXp(skill: SkillFocus, amount: number): ProgressState {
  const current = loadProgress();
  const next: ProgressState = {
    ...current,
    skillXp: {
      ...current.skillXp,
      [skill]: (current.skillXp[skill] ?? 0) + amount,
    },
  };
  saveProgress(next);
  return next;
}

export function recordSpeakAttempt(passed: boolean): ProgressState {
  const current = loadProgress();
  const next: ProgressState = {
    ...current,
    speakAttempts: current.speakAttempts + 1,
    speakPasses: current.speakPasses + (passed ? 1 : 0),
    lastPlayedDate: todayKey(),
  };
  saveProgress(next);
  return next;
}

export function markJapaneseUnit(unitId: string): ProgressState {
  const current = loadProgress();
  const next: ProgressState = {
    ...current,
    lastJapaneseUnitId: unitId,
  };
  saveProgress(next);
  return next;
}
