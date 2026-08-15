"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { haptic } from "@/lib/haptics";
import type { ScriptKind, SentenceTile } from "@/lib/types";

function scriptTone(script: ScriptKind): string {
  switch (script) {
    case "hiragana":
      return "border-[var(--brand-primary)] bg-[var(--brand-tint)] text-[var(--brand-primary-deep)]";
    case "katakana":
      return "border-[var(--brand-coral)] bg-[#fff4ef] text-[#c2410c]";
    case "kanji":
      return "border-[#ffe3a1] bg-[#fff9e0] text-[#9a6700]";
    case "particle":
      return "border-[var(--brand-baby)] bg-white text-[var(--brand-ink)]";
    default: {
      const _exhaustive: never = script;
      return _exhaustive;
    }
  }
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = copy[i];
    const swap = copy[j];
    if (current !== undefined && swap !== undefined) {
      copy[i] = swap;
      copy[j] = current;
    }
  }
  return copy;
}

export function SentenceBuilder({
  tiles,
  correctOrder,
  revealed,
  onComplete,
  checkLabel,
  clearLabel,
  trayLabel,
  bankLabel,
  emptyLabel,
}: {
  tiles: SentenceTile[];
  correctOrder: string[];
  revealed: boolean;
  onComplete: (ok: boolean) => void;
  checkLabel: string;
  clearLabel: string;
  trayLabel: string;
  bankLabel: string;
  emptyLabel: string;
}) {
  const initialBank = useMemo(() => shuffle(tiles), [tiles]);
  const [bank, setBank] = useState<SentenceTile[]>(initialBank);
  const [tray, setTray] = useState<SentenceTile[]>([]);

  function add(tile: SentenceTile) {
    if (revealed) return;
    haptic("tap");
    setBank((items) => items.filter((item) => item.id !== tile.id));
    setTray((items) => [...items, tile]);
  }

  function remove(tile: SentenceTile) {
    if (revealed) return;
    haptic("tap");
    setTray((items) => items.filter((item) => item.id !== tile.id));
    setBank((items) => [...items, tile]);
  }

  function move(index: number, delta: number) {
    if (revealed) return;
    const next = index + delta;
    if (next < 0 || next >= tray.length) return;
    haptic("tap");
    setTray((items) => {
      const copy = [...items];
      const current = copy[index];
      const swap = copy[next];
      if (!current || !swap) return items;
      copy[index] = swap;
      copy[next] = current;
      return copy;
    });
  }

  function clear() {
    if (revealed) return;
    setBank(shuffle(tiles));
    setTray([]);
  }

  function check() {
    if (revealed) return;
    const got = tray.map((tile) => tile.id).join("|");
    const want = correctOrder.join("|");
    onComplete(got === want);
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-1.5 text-[10px] font-bold uppercase tracking-wide">
        <span className="rounded-lg border border-[var(--brand-primary)] bg-[var(--brand-tint)] px-2 py-0.5">
          ひらがな
        </span>
        <span className="rounded-lg border border-[var(--brand-coral)] bg-[#fff4ef] px-2 py-0.5">
          カタカナ
        </span>
        <span className="rounded-lg border border-[#ffe3a1] bg-[#fff9e0] px-2 py-0.5">
          漢字
        </span>
        <span className="rounded-lg border border-[var(--brand-baby)] bg-white px-2 py-0.5">
          助詞
        </span>
      </div>

      <div>
        <p className="mb-1 text-xs font-bold text-[var(--brand-primary-deep)]">
          {trayLabel}
        </p>
        <div className="flex min-h-20 flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed border-[var(--brand-border)] bg-white px-2 py-2">
          {tray.length === 0 && (
            <p className="px-2 py-3 text-sm text-muted-foreground">
              {emptyLabel}
            </p>
          )}
          {tray.map((tile, index) => (
            <div key={`tray-${tile.id}`} className="flex items-center gap-0.5">
              <button
                type="button"
                disabled={revealed}
                onClick={() => remove(tile)}
                className={`pressable min-h-12 rounded-xl border-2 px-2.5 font-jp text-lg font-semibold ${scriptTone(tile.script)}`}
              >
                {tile.label}
                {tile.reading && (
                  <span className="mt-0.5 block text-[10px] font-bold opacity-70">
                    {tile.reading}
                  </span>
                )}
              </button>
              <div className="flex flex-col">
                <button
                  type="button"
                  className="px-1 text-xs font-bold text-[var(--brand-primary-deep)]"
                  disabled={revealed || index === 0}
                  onClick={() => move(index, -1)}
                  aria-label="Move left"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="px-1 text-xs font-bold text-[var(--brand-primary-deep)]"
                  disabled={revealed || index === tray.length - 1}
                  onClick={() => move(index, 1)}
                  aria-label="Move right"
                >
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-1 text-xs font-bold text-[var(--brand-primary-deep)]">
          {bankLabel}
        </p>
        <div className="flex min-h-16 flex-wrap gap-2">
          {bank.map((tile) => (
            <button
              key={`bank-${tile.id}`}
              type="button"
              disabled={revealed}
              onClick={() => add(tile)}
              className={`pressable min-h-12 rounded-xl border-2 px-2.5 font-jp text-lg font-semibold ${scriptTone(tile.script)}`}
            >
              {tile.label}
              {tile.reading && (
                <span className="mt-0.5 block text-[10px] font-bold opacity-70">
                  {tile.reading}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {!revealed && (
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="secondary"
            className="min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-white font-bold"
            onClick={clear}
          >
            {clearLabel}
          </Button>
          <Button
            type="button"
            className="pressable min-h-12 rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
            onClick={check}
            disabled={tray.length === 0}
          >
            {checkLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
