"use client";

import { useMemo, useState } from "react";
import { AudioButton } from "@/components/learning/audio-button";
import { SentenceBuilder } from "@/components/japanese/sentence-builder";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { japaneseSentenceExercises } from "@/content/japanese/sentence-units";
import { queueFromExercise } from "@/lib/srs";
import { useLocale } from "@/lib/i18n/locale-context";

export default function SentenceWorkshopPage() {
  const { locale, t } = useLocale();
  const items = useMemo(() => japaneseSentenceExercises(), []);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [justWrong, setJustWrong] = useState(false);
  const exercise = items[index];

  if (!exercise || !exercise.tiles || !exercise.correctOrder) return null;

  function next() {
    setIndex((value) => (value + 1) % items.length);
    setRevealed(false);
    setJustWrong(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-4">
      <SoftPanel className="flex flex-col gap-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
          {t.japanese.nav.read}
        </p>
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {t.japanese.buildLabTitle}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t.japanese.buildLabSubtitle}
        </p>
      </SoftPanel>

      <SoftPanel className="flex flex-col gap-3">
        <p className="text-xs font-bold text-muted-foreground">
          {index + 1}/{items.length}
        </p>
        <p className="text-lg font-bold leading-relaxed">{exercise.prompt}</p>
        {exercise.promptJa && (
          <p className="text-sm text-muted-foreground">{exercise.promptJa}</p>
        )}
        {exercise.ttsText && (
          <AudioButton
            text={exercise.ttsText}
            lang="ja-JP"
            label={t.common.listen}
          />
        )}
        <SentenceBuilder
          key={exercise.id}
          tiles={exercise.tiles}
          correctOrder={exercise.correctOrder}
          revealed={revealed}
          onComplete={(ok) => {
            setRevealed(true);
            setJustWrong(!ok);
            if (!ok) queueFromExercise(exercise);
          }}
          checkLabel={t.japanese.buildCheck}
          clearLabel={t.japanese.buildClear}
          trayLabel={t.japanese.buildTray}
          bankLabel={t.japanese.buildBank}
          emptyLabel={t.japanese.buildEmpty}
          hideReadings={Boolean(exercise.hideReadings)}
        />
        {revealed && (
          <div
            className={`rounded-2xl border-2 px-4 py-3 ${
              justWrong
                ? "border-[#ffd0c2] bg-[#fff4ef]"
                : "border-[var(--brand-border)] bg-[var(--brand-mist)]"
            }`}
          >
            <p className="font-jp text-xl font-semibold text-[var(--brand-primary-deep)]">
              {exercise.correctOrder
                .map(
                  (id) =>
                    exercise.tiles?.find((tile) => tile.id === id)?.label ?? "",
                )
                .join("")}
            </p>
            <p className="mt-2 text-sm leading-relaxed">
              {locale === "ja" ? exercise.explanationJa : exercise.explanationEn}
            </p>
          </div>
        )}
        {revealed && (
          <Button
            className="pressable min-h-12 rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
            onClick={next}
          >
            {t.japanese.buildNext}
          </Button>
        )}
      </SoftPanel>
    </div>
  );
}
