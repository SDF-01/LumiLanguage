"use client";

import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import type { DailyWord } from "@/lib/daily-words";
import { formatDailyDateLabel } from "@/lib/daily-words";
import { DEFAULT_SPEECH_RATE, speak, type TtsLang } from "@/lib/tts";
import { cn } from "@/lib/utils";

type WordGroup = {
  title: string;
  words: DailyWord[];
};

async function playWord(word: DailyWord) {
  const text = word.ttsText ?? word.word;
  const lang = (word.ttsLang ?? "en-US") as TtsLang;
  try {
    await speak(text, lang, DEFAULT_SPEECH_RATE, "lumi");
  } catch {
    // TTS optional
  }
}

function WordRow({
  word,
  locale,
  listenLabel,
}: {
  word: DailyWord;
  locale: "en" | "ja";
  listenLabel: string;
}) {
  const meaning =
    locale === "ja" && word.meaningJa ? word.meaningJa : word.meaningEn;
  const explanation =
    locale === "ja" && word.explanationJa
      ? word.explanationJa
      : word.explanationEn;

  return (
    <li className="flex items-start gap-2.5 border-t border-[var(--brand-border)]/80 py-3 first:border-t-0 first:pt-1">
      <div className="min-w-0 flex-1">
        <p
          className="font-display text-xl font-semibold leading-tight text-[var(--brand-primary-deep)]"
          style={{
            fontFamily: /[\u3040-\u30ff\u4e00-\u9faf]/.test(word.word)
              ? "var(--font-jp), var(--font-display), sans-serif"
              : undefined,
          }}
        >
          {word.word}
        </p>
        {word.reading ? (
          <p className="text-xs font-bold tracking-wide text-[var(--brand-coral)]">
            {word.reading}
          </p>
        ) : null}
        <p className="mt-0.5 text-sm font-bold text-foreground">{meaning}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
          {explanation}
        </p>
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="pressable mt-0.5 shrink-0 rounded-xl border-2 border-[var(--brand-border)] bg-white px-2.5 font-bold text-[var(--brand-primary-deep)] hover:bg-[var(--brand-tint)]"
        onClick={() => void playWord(word)}
        aria-label={`${listenLabel}: ${word.word}`}
      >
        {listenLabel}
      </Button>
    </li>
  );
}

export function WordsOfTheDay({
  title,
  subtitle,
  groups,
  locale,
  listenLabel,
  className,
}: {
  title: string;
  subtitle?: string;
  groups: WordGroup[];
  locale: "en" | "ja";
  listenLabel: string;
  className?: string;
}) {
  const dateLabel = formatDailyDateLabel();

  return (
    <SoftPanel
      className={cn("rise-in stagger-2 flex flex-col gap-3 !p-4", className)}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold tracking-[0.16em] text-[var(--brand-coral)] uppercase">
            Daily drop
          </p>
          <h2 className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
            {title}
          </h2>
          {subtitle ? (
            <p className="text-xs leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </div>
        <span className="shrink-0 rounded-xl border border-[var(--brand-border)] bg-gradient-to-b from-white to-[var(--brand-tint)] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[var(--brand-primary-deep)]">
          {dateLabel}
        </span>
      </div>

      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-1.5">
          <h3 className="font-display text-[11px] font-semibold tracking-[0.14em] text-[var(--brand-coral)] uppercase">
            {group.title}
          </h3>
          <ul className="rounded-2xl border-2 border-[var(--brand-border)] bg-gradient-to-b from-[#f8fcfd] to-[#eef8fa] px-3 py-1.5">
            {group.words.map((word) => (
              <WordRow
                key={word.id}
                word={word}
                locale={locale}
                listenLabel={listenLabel}
              />
            ))}
          </ul>
        </div>
      ))}
    </SoftPanel>
  );
}
