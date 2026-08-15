"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AudioButton } from "@/components/learning/audio-button";
import { FuriganaLine } from "@/components/japanese/furigana-text";
import { SentenceBuilder } from "@/components/japanese/sentence-builder";
import { SpeakCoach } from "@/components/japanese/speak-coach";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { completeUnit } from "@/lib/progress";
import { queueFromExercise } from "@/lib/srs";
import { useLocale } from "@/lib/i18n/locale-context";
import type { GradedStory } from "@/lib/types";

export function StoryReader({ story }: { story: GradedStory }) {
  const { locale, t } = useLocale();
  const router = useRouter();
  const [line, setLine] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [phase, setPhase] = useState<"read" | "quiz" | "done">("read");
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [showReading, setShowReading] = useState(
    story.furiganaDefault !== "off",
  );

  const tokens = story.lines[line] ?? [];
  const lineTts = tokens
    .map((token) => token.tts || "")
    .filter((text) => text.length > 1)
    .at(-1) ?? tokens.map((token) => token.surface).join("");
  const exercise = story.questions[quizIndex];

  function nextLine() {
    if (line + 1 >= story.lines.length) {
      setPhase("quiz");
      return;
    }
    setLine((value) => value + 1);
  }

  function submit(id: string) {
    if (!exercise || revealed) return;
    setRevealed(true);
    const ok = exercise.correctChoiceId === id;
    if (ok) setCorrect((value) => value + 1);
    else queueFromExercise(exercise);
  }

  function nextQuiz() {
    if (quizIndex + 1 >= story.questions.length) {
      completeUnit(`story-${story.id}`, 80);
      setPhase("done");
      return;
    }
    setQuizIndex((value) => value + 1);
    setRevealed(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col gap-4 px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-4">
      <SoftPanel className="flex flex-col gap-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
          {story.level} · {story.minutes} min
        </p>
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {locale === "ja" ? story.titleJa : story.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {locale === "ja" ? story.synopsisJa : story.synopsisEn}
        </p>
      </SoftPanel>

      {phase === "read" && (
        <SoftPanel className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-muted-foreground">
              {t.japanese.readLine} {line + 1}/{story.lines.length}
            </span>
            <button
              type="button"
              className="rounded-xl border border-[var(--brand-border)] bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--brand-primary-deep)]"
              onClick={() => setShowReading((value) => !value)}
            >
              {showReading ? t.japanese.furiganaOn : t.japanese.furiganaOff}
            </button>
          </div>
          <FuriganaLine tokens={tokens} showReading={showReading} />
          {lineTts && <AudioButton text={lineTts} lang="ja-JP" label={t.common.listen} />}
          <SpeakCoach
            expected={[lineTts, ...tokens.map((token) => token.reading ?? token.surface)]}
            listenLabel={t.japanese.listening}
            speakLabel={t.japanese.shadow}
            onResult={() => undefined}
          />
        </SoftPanel>
      )}

      {phase === "quiz" && exercise && (
        <SoftPanel className="flex flex-col gap-3">
          <p className="text-lg font-bold">{exercise.prompt}</p>
          {exercise.promptJa && (
            <p className="text-sm text-muted-foreground">{exercise.promptJa}</p>
          )}
          {exercise.ttsText && (
            <AudioButton text={exercise.ttsText} lang="ja-JP" label={t.common.listen} />
          )}
          {exercise.kind === "speak-prompt" ? (
            <SpeakCoach
              expected={exercise.expectedSpeech ?? [exercise.ttsText ?? ""]}
              listenLabel={t.japanese.listening}
              speakLabel={t.japanese.tapToSpeak}
              onResult={(score) => {
                setRevealed(true);
                if (score.passed) setCorrect((value) => value + 1);
                else queueFromExercise(exercise);
              }}
              disabled={revealed}
            />
          ) : exercise.kind === "sentence-build" &&
            exercise.tiles &&
            exercise.correctOrder ? (
            <SentenceBuilder
              key={exercise.id}
              tiles={exercise.tiles}
              correctOrder={exercise.correctOrder}
              revealed={revealed}
              onComplete={(ok) => {
                setRevealed(true);
                if (ok) setCorrect((value) => value + 1);
                else queueFromExercise(exercise);
              }}
              checkLabel={t.japanese.buildCheck}
              clearLabel={t.japanese.buildClear}
              trayLabel={t.japanese.buildTray}
              bankLabel={t.japanese.buildBank}
              emptyLabel={t.japanese.buildEmpty}
              hideReadings={Boolean(exercise.hideReadings)}
            />
          ) : (
            <div className="flex flex-col gap-2">
              {exercise.choices?.map((choice) => (
                <button
                  key={choice.id}
                  type="button"
                  disabled={revealed}
                  onClick={() => submit(choice.id)}
                  className="pressable min-h-14 rounded-2xl border-2 border-[var(--brand-border)] bg-[var(--brand-mist)] px-4 text-left font-bold"
                >
                  {choice.label}
                </button>
              ))}
            </div>
          )}
          {revealed && (
            <p className="text-sm leading-relaxed">{exercise.explanationEn}</p>
          )}
        </SoftPanel>
      )}

      {phase === "done" && (
        <SoftPanel accent="sun" className="flex flex-col items-center gap-3 text-center">
          <LumiMascot size={120} mood="celebrate" />
          <h2 className="font-display text-2xl font-semibold">
            {correct}/{story.questions.length} · +80 XP
          </h2>
          <Button
            className="pressable min-h-14 w-full rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
            onClick={() => router.push("/japanese/read")}
          >
            {t.japanese.backToRead}
          </Button>
        </SoftPanel>
      )}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[var(--brand-border)] bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-lg gap-2">
          {phase === "read" && (
            <Button
              className="pressable min-h-14 w-full rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
              onClick={nextLine}
            >
              {line + 1 >= story.lines.length ? t.japanese.checkReading : t.common.continue}
            </Button>
          )}
          {phase === "quiz" && revealed && (
            <Button
              className="pressable min-h-14 w-full rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
              onClick={nextQuiz}
            >
              {t.common.continue}
            </Button>
          )}
          {phase === "done" && (
            <Button asChild variant="outline" className="min-h-14 w-full rounded-2xl font-bold">
              <Link href="/japanese">{t.japanese.nav.learn}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
