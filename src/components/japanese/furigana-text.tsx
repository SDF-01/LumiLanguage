"use client";

import { speak } from "@/lib/tts";
import type { ReadingToken } from "@/lib/types";
import { haptic } from "@/lib/haptics";

export function FuriganaLine({
  tokens,
  onSpeak,
  showReading = true,
}: {
  tokens: ReadingToken[];
  onSpeak?: (text: string) => void;
  showReading?: boolean;
}) {
  return (
    <p className="font-jp flex flex-wrap items-end gap-x-1 gap-y-3 text-2xl leading-none">
      {tokens.map((token, index) => {
        const play = token.tts || token.surface;
        const clickable = Boolean(play && token.surface !== "。" && token.surface !== "、");
        return (
          <button
            key={`${token.surface}-${index}`}
            type="button"
            disabled={!clickable}
            onClick={() => {
              if (!play) return;
              haptic("tap");
              onSpeak?.(play);
              void speak(play, "ja-JP");
            }}
            className={`inline-flex flex-col items-center rounded-lg px-0.5 ${
              clickable ? "active:bg-[var(--brand-tint)]" : ""
            }`}
          >
            {showReading && token.reading ? (
              <span className="text-[0.65rem] font-bold text-[var(--brand-coral)]">
                {token.reading}
              </span>
            ) : (
              <span className="h-3" />
            )}
            <span className="text-[1.65rem] font-medium text-[var(--brand-ink)]">
              {token.surface}
            </span>
          </button>
        );
      })}
    </p>
  );
}
