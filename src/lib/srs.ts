import type { Exercise, SrsCard, TeachCard } from "@/lib/types";

const STORAGE_KEY = "lumi-jp-srs-v1";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days: number): string {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function defaultEase(): number {
  return 2.3;
}

let srsCache: { raw: string | null; value: SrsCard[] } | null = null;

export function loadSrs(): SrsCard[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (srsCache && srsCache.raw === raw) return srsCache.value;
    if (!raw) {
      srsCache = { raw, value: [] };
      return [];
    }
    const parsed = JSON.parse(raw) as SrsCard[];
    const value = Array.isArray(parsed) ? parsed : [];
    srsCache = { raw, value };
    return value;
  } catch {
    return [];
  }
}

export function subscribeSrs(onStoreChange: () => void): () => void {
  const handler = () => {
    srsCache = null;
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener("focus", handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("focus", handler);
  };
}

export function saveSrs(cards: SrsCard[]): void {
  if (typeof window === "undefined") return;
  const raw = JSON.stringify(cards);
  localStorage.setItem(STORAGE_KEY, raw);
  srsCache = { raw, value: cards };
}

export function dueSrsCards(now = todayKey()): SrsCard[] {
  return loadSrs()
    .filter((card) => card.due <= now)
    .sort((a, b) => a.due.localeCompare(b.due));
}

export function srsDueCount(): number {
  return dueSrsCards().length;
}

function upsertCard(next: SrsCard): SrsCard[] {
  const cards = loadSrs();
  const index = cards.findIndex((card) => card.id === next.id);
  if (index === -1) cards.push(next);
  else cards[index] = next;
  saveSrs(cards);
  return cards;
}

export function queueSrsCard(partial: {
  id: string;
  front: string;
  reading: string;
  meaning: string;
  ttsText: string;
}): SrsCard {
  const existing = loadSrs().find((card) => card.id === partial.id);
  if (existing) {
    const updated: SrsCard = {
      ...existing,
      ...partial,
      due: todayKey(),
      lapses: existing.lapses + 1,
      intervalDays: 0,
    };
    upsertCard(updated);
    return updated;
  }
  const created: SrsCard = {
    ...partial,
    ease: defaultEase(),
    intervalDays: 0,
    due: todayKey(),
    reps: 0,
    lapses: 0,
  };
  upsertCard(created);
  return created;
}

export function queueFromExercise(exercise: Exercise): void {
  const front = exercise.ttsText || exercise.prompt;
  queueSrsCard({
    id: `ex-${exercise.id}`,
    front,
    reading: exercise.ttsText ?? "",
    meaning: exercise.explanationEn,
    ttsText: exercise.ttsText ?? front,
  });
}

export function queueFromTeach(card: TeachCard, unitId: string): void {
  queueSrsCard({
    id: `teach-${unitId}-${card.glyph}`,
    front: card.glyph,
    reading: card.reading,
    meaning: card.meaningEn ?? card.tipEn,
    ttsText: card.ttsText ?? card.glyph,
  });
}

export function reviewSrsCard(
  id: string,
  grade: "again" | "good" | "easy",
): SrsCard | null {
  const cards = loadSrs();
  const card = cards.find((item) => item.id === id);
  if (!card) return null;

  if (grade === "again") {
    const next: SrsCard = {
      ...card,
      reps: 0,
      lapses: card.lapses + 1,
      intervalDays: 0,
      ease: Math.max(1.3, card.ease - 0.2),
      due: todayKey(),
    };
    upsertCard(next);
    return next;
  }

  const easeBump = grade === "easy" ? 0.15 : 0;
  const ease = Math.min(3.2, card.ease + easeBump);
  let interval = 1;
  if (card.reps === 0) interval = grade === "easy" ? 2 : 1;
  else if (card.reps === 1) interval = grade === "easy" ? 6 : 3;
  else interval = Math.max(1, Math.round(card.intervalDays * ease));

  const next: SrsCard = {
    ...card,
    ease,
    reps: card.reps + 1,
    intervalDays: interval,
    due: addDays(interval),
  };
  upsertCard(next);
  return next;
}
