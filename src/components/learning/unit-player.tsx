"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AudioButton } from "@/components/learning/audio-button";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { completeUnit } from "@/lib/progress";
import type { Exercise, LearningUnit } from "@/lib/types";
import { skillForExercise, skillLabel } from "@/lib/skills";
import { unlockAudio, type TtsLang } from "@/lib/tts";

type Phase = "tutorial" | "exercise" | "checkpoint";

export function UnitPlayer({ unit }: { unit: LearningUnit }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("tutorial");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [earnedXp, setEarnedXp] = useState(0);
  const [justWrong, setJustWrong] = useState(false);

  const exercise = unit.exercises[index];
  const total = unit.exercises.length;
  const progressValue = useMemo(() => {
    if (phase === "tutorial") return 8;
    if (phase === "checkpoint") return 100;
    return Math.round(((index + (revealed ? 1 : 0)) / total) * 88) + 8;
  }, [phase, index, revealed, total]);

  function startExercises() {
    unlockAudio();
    setPhase("exercise");
  }

  function submitChoice(choiceId: string) {
    if (revealed || !exercise) return;
    setSelected(choiceId);
    setRevealed(true);
    const ok = exercise.correctChoiceId === choiceId;
    setJustWrong(!ok);
    if (ok) setCorrectCount((c) => c + 1);
  }

  function continueSpeak() {
    if (!exercise) return;
    setRevealed(true);
    setJustWrong(false);
    setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 >= total) {
      completeUnit(unit.id, unit.xpReward);
      setEarnedXp(unit.xpReward);
      setPhase("checkpoint");
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
    setJustWrong(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col gap-4 px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom))] pt-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <p className="font-display text-base font-semibold text-[var(--brand-primary-deep)]">
            {unit.title}
          </p>
          <span className="rounded-xl bg-white px-3 py-1 text-sm font-bold text-muted-foreground border border-[var(--brand-border)]">
            {phase === "exercise" ? `${index + 1} / ${total}` : "Intro"}
          </span>
        </div>
        <Progress value={progressValue} className="h-3.5 rounded-xl bg-[var(--brand-baby)]" />
      </div>

      {phase === "tutorial" && (
        <SoftPanel className="pop-in flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <LumiMascot size={72} mood="cheer" />
            <div className="flex flex-col gap-1">
              <h1 className="font-display text-2xl font-semibold leading-tight">
                {unit.tutorial.title}
              </h1>
              {unit.tutorial.titleJa && (
                <p className="text-sm font-semibold text-muted-foreground">
                  {unit.tutorial.titleJa}
                </p>
              )}
            </div>
          </div>
          <p className="text-base leading-relaxed">{unit.tutorial.bodyEn}</p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {unit.tutorial.bodyJa}
          </p>
          {unit.tutorial.tips && (
            <ul className="flex flex-col gap-2">
              {unit.tutorial.tips.map((tip) => (
                <li
                  key={tip}
                  className="rounded-2xl bg-[var(--brand-mist)] px-4 py-3 text-sm font-medium text-[var(--brand-primary-deep)]"
                >
                  {tip}
                </li>
              ))}
            </ul>
          )}
        </SoftPanel>
      )}

      {phase === "exercise" && exercise && (
        <ExerciseView
          exercise={exercise}
          selected={selected}
          revealed={revealed}
          justWrong={justWrong}
          onSelect={submitChoice}
        />
      )}

      {phase === "checkpoint" && (
        <SoftPanel accent="sun" className="pop-in flex flex-col items-center gap-3 text-center">
          <LumiMascot size={140} mood="celebrate" />
          <h2 className="font-display text-3xl font-semibold text-[var(--brand-primary-deep)]">
            You did it!
          </h2>
          <p className="text-lg font-bold">
            {correctCount}/{total} correct · +{earnedXp || unit.xpReward} XP
          </p>
          <p className="text-base text-muted-foreground">
            {unit.pathId === "toeic"
              ? `Nice work on ${unit.title}. Ready for a quick timed quiz?`
              : `${unit.title} complete. Come back tomorrow and keep the streak!`}
          </p>
          <div className="flex w-full flex-col gap-2 pt-2">
            {unit.pathId === "toeic" && (
              <Button
                asChild
                className="pressable soft-shadow min-h-14 rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
              >
                <Link href="/toeic/exam">Try practice quiz</Link>
              </Button>
            )}
            <Button
              variant="secondary"
              className="min-h-14 rounded-2xl border-2 border-[var(--brand-border)] bg-white font-bold"
              onClick={() => router.push(`/${unit.pathId}`)}
            >
              Back to path
            </Button>
          </div>
        </SoftPanel>
      )}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[var(--brand-border)] bg-white/95 px-4 pt-3 backdrop-blur-md pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-lg gap-2">
          {phase === "tutorial" && (
            <Button
              className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
              onClick={startExercises}
            >
              Let&apos;s go
            </Button>
          )}
          {phase === "exercise" && revealed && (
            <Button
              className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
              onClick={next}
            >
              {index + 1 >= total ? "Claim XP" : "Continue"}
            </Button>
          )}
          {phase === "exercise" &&
            !revealed &&
            exercise?.kind === "speak-prompt" && (
              <Button
                className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
                onClick={continueSpeak}
              >
                I said it. Continue
              </Button>
            )}
          {phase === "checkpoint" && (
            <Button
              asChild
              variant="outline"
              className="min-h-14 w-full rounded-2xl border-2 border-[var(--brand-border)] font-bold"
            >
              <Link href="/">Home</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function ExerciseView({
  exercise,
  selected,
  revealed,
  justWrong,
  onSelect,
}: {
  exercise: Exercise;
  selected: string | null;
  revealed: boolean;
  justWrong: boolean;
  onSelect: (id: string) => void;
}) {
  const lang = (exercise.ttsLang ?? "en-US") as TtsLang;

  return (
    <SoftPanel className="flex flex-col gap-4">
      <div className="flex items-start gap-3">
        <LumiMascot
          size={64}
          mood={revealed ? (justWrong ? "think" : "cheer") : "happy"}
          className={revealed && justWrong ? "wiggle" : undefined}
        />
        <div className="flex flex-col gap-1 pt-1">
          <span className="w-fit rounded-xl bg-[var(--brand-tint)] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-[var(--brand-primary-deep)]">
            {skillLabel(skillForExercise(exercise))}
          </span>
          <p className="text-lg font-bold leading-relaxed">{exercise.prompt}</p>
          {exercise.promptJa && (
            <p className="text-sm font-medium text-muted-foreground">
              {exercise.promptJa}
            </p>
          )}
        </div>
      </div>

      {(exercise.kind === "listen-choice" ||
        exercise.kind === "speak-prompt") &&
        exercise.ttsText && (
          <AudioButton text={exercise.ttsText} lang={lang} label="Listen" />
        )}

      {(exercise.kind === "multiple-choice" ||
        exercise.kind === "write-choice" ||
        exercise.kind === "listen-choice") &&
        exercise.choices && (
        <div className="flex flex-col gap-2.5">
          {exercise.choices.map((choice) => {
            const isCorrect = choice.id === exercise.correctChoiceId;
            const isSelected = choice.id === selected;
            let tone =
              "border-[var(--brand-border)] bg-[var(--brand-mist)] text-[var(--brand-ink)] active:bg-[var(--brand-mist)]";
            if (revealed && isCorrect) {
              tone =
                "border-[var(--brand-primary)] bg-[var(--brand-tint)] text-[var(--brand-primary-deep)] ring-2 ring-[var(--brand-primary)]/30";
            } else if (revealed && isSelected && !isCorrect) {
              tone = "border-[#fb7185] bg-[#ffe4e8] text-[#9f1239]";
            } else if (isSelected) {
              tone = "border-[var(--brand-primary)] bg-[var(--brand-tint)]";
            }

            return (
              <button
                key={choice.id}
                type="button"
                disabled={revealed}
                onClick={() => onSelect(choice.id)}
                className={`pressable min-h-14 rounded-2xl border-2 px-4 py-3 text-left text-base font-bold transition ${tone}`}
              >
                {choice.label}
              </button>
            );
          })}
        </div>
      )}

      {exercise.kind === "speak-prompt" && !revealed && (
        <p className="text-sm font-medium text-muted-foreground">
          Say it out loud, then tap Continue. Lumi believes in you.
        </p>
      )}

      {revealed && (
        <div
          className={`flex flex-col gap-2 rounded-2xl border-2 px-4 py-3 ${
            justWrong
              ? "border-[#ffd0c2] bg-[#fff4ef]"
              : "border-[var(--brand-border)] bg-[var(--brand-mist)]"
          }`}
        >
          <p className="text-sm font-bold text-[var(--brand-primary-deep)]">
            {justWrong ? "Almost. Here’s why" : "Great job. Here’s why"}
          </p>
          <p className="text-sm leading-relaxed">{exercise.explanationEn}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {exercise.explanationJa}
          </p>
        </div>
      )}
    </SoftPanel>
  );
}
