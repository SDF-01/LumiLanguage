export type AlphaScript = "hiragana" | "katakana" | "kanji";

export type GlyphMastery = {
  id: string;
  script: AlphaScript;
  seen: number;
  streak: number;
  mastered: boolean;
};

const STORAGE_KEY = "lumi-jp-alpha-v1";
const CHANGE_EVENT = "lumi-alpha-change";

type Store = Record<string, GlyphMastery>;

let cache: { raw: string | null; value: Store } | null = null;

function keyOf(script: AlphaScript, id: string): string {
  return `${script}:${id}`;
}

function emptyStore(): Store {
  return {};
}

export function loadAlphabetMastery(): Store {
  if (typeof window === "undefined") return emptyStore();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (cache && cache.raw === raw) return cache.value;
    if (!raw) {
      cache = { raw, value: emptyStore() };
      return emptyStore();
    }
    const parsed = JSON.parse(raw) as Store;
    const value = parsed && typeof parsed === "object" ? parsed : emptyStore();
    cache = { raw, value };
    return value;
  } catch {
    return emptyStore();
  }
}

export function subscribeAlphabetMastery(onStoreChange: () => void): () => void {
  const handler = () => {
    cache = null;
    onStoreChange();
  };
  window.addEventListener("storage", handler);
  window.addEventListener("focus", handler);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener("focus", handler);
    window.removeEventListener(CHANGE_EVENT, handler);
  };
}

function save(store: Store): void {
  if (typeof window === "undefined") return;
  const raw = JSON.stringify(store);
  localStorage.setItem(STORAGE_KEY, raw);
  cache = { raw, value: store };
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function getGlyphMastery(
  script: AlphaScript,
  id: string,
): GlyphMastery {
  const existing = loadAlphabetMastery()[keyOf(script, id)];
  return (
    existing ?? {
      id,
      script,
      seen: 0,
      streak: 0,
      mastered: false,
    }
  );
}

export function recordGlyphResult(
  script: AlphaScript,
  id: string,
  ok: boolean,
): GlyphMastery {
  const store = { ...loadAlphabetMastery() };
  const current = getGlyphMastery(script, id);
  const streak = ok ? current.streak + 1 : 0;
  const next: GlyphMastery = {
    id,
    script,
    seen: current.seen + 1,
    streak,
    mastered: streak >= 3,
  };
  store[keyOf(script, id)] = next;
  save(store);
  return next;
}

export function scriptMasteryStats(
  script: AlphaScript,
  ids: string[],
): { mastered: number; total: number; percent: number } {
  const store = loadAlphabetMastery();
  const mastered = ids.filter((id) => store[keyOf(script, id)]?.mastered).length;
  const total = ids.length;
  return {
    mastered,
    total,
    percent: total === 0 ? 0 : Math.round((mastered / total) * 100),
  };
}
