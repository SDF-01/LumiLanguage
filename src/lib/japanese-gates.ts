import { japanesePathNodes, type PathNode } from "@/content/catalog";

function prevInSectionCompleted(
  node: PathNode,
  completed: string[],
): boolean {
  const sectionNodes = japanesePathNodes.filter((item) => item.section === node.section);
  const index = sectionNodes.findIndex((item) => item.id === node.id);
  if (index <= 0) return true;
  const prev = sectionNodes[index - 1];
  return Boolean(prev && completed.includes(prev.unitId));
}

export function isJapaneseNodeLocked(
  node: PathNode,
  completed: string[],
): boolean {
  if (completed.includes(node.unitId)) return false;

  switch (node.section) {
    case "startHere":
      return !prevInSectionCompleted(node, completed);
    case "hiragana":
      if (!completed.includes("jp-before-hiragana")) return true;
      return !prevInSectionCompleted(node, completed);
    case "katakana":
      if (!completed.includes("jp-hiragana-wa-line")) return true;
      return !prevInSectionCompleted(node, completed);
    case "kanji":
      if (!completed.includes("jp-hiragana-a-line")) return true;
      return !prevInSectionCompleted(node, completed);
    case "phrases":
    case "life":
      if (!completed.includes("jp-welcome")) return true;
      return !prevInSectionCompleted(node, completed);
    case "readTrack":
      if (!completed.includes("jp-hiragana-a-line")) return true;
      return !prevInSectionCompleted(node, completed);
    case "proRead":
      if (!completed.includes("jp-sentence-mix")) return true;
      return !prevInSectionCompleted(node, completed);
    case "vocab":
    case "reading":
    case "grammar":
    case "listening":
    case "examReading":
      return false;
    default: {
      const _exhaustive: never = node.section;
      return _exhaustive;
    }
  }
}

export function japaneseLockHint(
  node: PathNode,
  locale: "en" | "ja",
): string | null {
  switch (node.section) {
    case "hiragana":
      return locale === "ja"
        ? "ロック：あいうえおを先に覚えましょう"
        : "Locked: learn あいうえお first";
    case "katakana":
      return locale === "ja"
        ? "ロック：ひらがな わ行まで完了すると解放"
        : "Locked: finish hiragana through わをん";
    case "kanji":
      return locale === "ja"
        ? "ロック：ひらがな あ行を完了すると解放"
        : "Locked: finish hiragana あ行 first";
    case "phrases":
    case "life":
      return locale === "ja"
        ? "ロック：はじめてのフレーズを完了すると解放"
        : "Locked: finish First phrases, then speak every day";
    case "readTrack":
      return locale === "ja"
        ? "ロック：ひらがな あ行を完了すると文づくりが開く"
        : "Locked: finish hiragana あ行, then build sentences";
    case "proRead":
      return locale === "ja"
        ? "ロック：3つの文字を混ぜるレッスンを完了"
        : "Locked: finish Mix the three scripts first";
    case "startHere":
      return locale === "ja"
        ? "ロック：ひとつ前のレッスンを完了"
        : "Locked: finish the previous Start Here lesson";
    case "vocab":
    case "reading":
    case "grammar":
    case "listening":
    case "examReading":
      return null;
    default: {
      const _exhaustive: never = node.section;
      return _exhaustive;
    }
  }
}

export function nextJapaneseUnitId(completed: string[]): string {
  for (const node of japanesePathNodes) {
    if (!completed.includes(node.unitId) && !isJapaneseNodeLocked(node, completed)) {
      return node.unitId;
    }
  }
  for (const node of japanesePathNodes) {
    if (!completed.includes(node.unitId)) return node.unitId;
  }
  return japanesePathNodes[0]?.unitId ?? "jp-welcome";
}

export function japaneseCompletion(completed: string[]): {
  done: number;
  total: number;
  percent: number;
} {
  const total = japanesePathNodes.length;
  const done = japanesePathNodes.filter((node) =>
    completed.includes(node.unitId),
  ).length;
  return {
    done,
    total,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
  };
}
