"use client";

import { useMemo, useState } from "react";
import { haptic } from "@/lib/haptics";
import type { MatchPair } from "@/lib/types";

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

export function MatchBoard({
  pairs,
  revealed,
  onComplete,
}: {
  pairs: MatchPair[];
  revealed: boolean;
  onComplete: (ok: boolean) => void;
}) {
  const left = pairs;
  const right = useMemo(() => shuffle(pairs), [pairs]);
  const [pickedLeft, setPickedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string | null>(null);

  function pickLeft(id: string) {
    if (revealed || matched.includes(id)) return;
    setPickedLeft(id);
    setWrong(null);
    haptic("tap");
  }

  function pickRight(id: string) {
    if (revealed || matched.includes(id) || !pickedLeft) return;
    if (pickedLeft === id) {
      const next = [...matched, id];
      setMatched(next);
      setPickedLeft(null);
      haptic("ok");
      if (next.length >= pairs.length) onComplete(true);
      return;
    }
    setWrong(id);
    haptic("bad");
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex flex-col gap-2">
        {left.map((pair) => {
          const done = matched.includes(pair.id);
          const active = pickedLeft === pair.id;
          return (
            <button
              key={`l-${pair.id}`}
              type="button"
              disabled={revealed || done}
              onClick={() => pickLeft(pair.id)}
              className={`pressable min-h-14 rounded-2xl border-2 px-3 py-2 text-left text-sm font-bold ${
                done
                  ? "border-[var(--brand-primary)] bg-[var(--brand-tint)]"
                  : active
                    ? "border-[var(--brand-coral)] bg-[#fff4ef]"
                    : "border-[var(--brand-border)] bg-[var(--brand-mist)]"
              }`}
            >
              {pair.left}
            </button>
          );
        })}
      </div>
      <div className="flex flex-col gap-2">
        {right.map((pair) => {
          const done = matched.includes(pair.id);
          const isWrong = wrong === pair.id;
          return (
            <button
              key={`r-${pair.id}`}
              type="button"
              disabled={revealed || done}
              onClick={() => pickRight(pair.id)}
              className={`pressable min-h-14 rounded-2xl border-2 px-3 py-2 text-left text-sm font-bold ${
                done
                  ? "border-[var(--brand-primary)] bg-[var(--brand-tint)]"
                  : isWrong
                    ? "border-[#fb7185] bg-[#ffe4e8]"
                    : "border-[var(--brand-border)] bg-white"
              }`}
            >
              {pair.right}
            </button>
          );
        })}
      </div>
    </div>
  );
}
