"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AudioButton } from "@/components/learning/audio-button";
import { getExamPool } from "@/content/catalog";
import { recordExamScore } from "@/lib/progress";
import { practicePercentToBandHint } from "@/lib/scoring";
import type { TtsLang } from "@/lib/tts";

const SECONDS = 180;
const EXAM_ITEMS = 12;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function ExamPlayer() {
  const pool = useMemo(
    () => shuffle(getExamPool()).slice(0, EXAM_ITEMS),
    [],
  );
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(SECONDS);
  const [selected, setSelected] = useState<string | null>(null);
  const correctRef = useRef(0);
  const finishedRef = useRef(false);

  function finish(finalCorrect: number) {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const percent = Math.round((finalCorrect / pool.length) * 100);
    recordExamScore(percent);
    setCorrect(finalCorrect);
    setDone(true);
  }

  useEffect(() => {
    if (done) return;
    const id = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          finish(correctRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [done, pool.length]);

  function choose(choiceId: string) {
    if (done || selected || finishedRef.current) return;
    const item = pool[index];
    if (!item) return;
    setSelected(choiceId);
    const nextCorrect =
      choiceId === item.correctChoiceId ? correct + 1 : correct;
    correctRef.current = nextCorrect;

    window.setTimeout(() => {
      if (index + 1 >= pool.length) {
        finish(nextCorrect);
        return;
      }
      setCorrect(nextCorrect);
      setIndex((i) => i + 1);
      setSelected(null);
    }, 280);
  }

  const percent = Math.round((correct / pool.length) * 100);
  const band = practicePercentToBandHint(percent);
  const item = pool[index];

  if (done) {
    return (
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-6 pb-[env(safe-area-inset-bottom)]">
        <SoftPanel accent="sun" className="pop-in flex flex-col items-center gap-3 text-center">
          <LumiMascot
            size={140}
            mood={percent >= 80 ? "celebrate" : "cheer"}
          />
          <h1 className="font-display text-3xl font-semibold text-[var(--brand-primary-deep)]">
            Quiz complete!
          </h1>
          <p className="font-display text-5xl font-semibold text-[var(--brand-coral)]">
            {percent}%
          </p>
          <p className="text-base font-bold">
            {correct}/{pool.length} correct
          </p>
          <p className="text-base font-semibold text-[var(--brand-primary-deep)]">
            {band.label}
          </p>
          <p className="text-sm text-muted-foreground">{band.labelJa}</p>
          <p className="text-sm">{band.targetNote}</p>
          <div className="flex w-full flex-col gap-2 pt-2">
            <Button
              asChild
              className="pressable soft-shadow min-h-14 rounded-2xl border-0 bg-[var(--brand-primary)] font-bold text-white hover:bg-[var(--brand-primary-deep)]"
            >
              <Link href="/toeic">Back to TOEIC path</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="min-h-14 rounded-2xl border-2 border-[var(--brand-border)] bg-white font-bold"
            >
              <Link href="/toeic/exam">Try again</Link>
            </Button>
          </div>
        </SoftPanel>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-4 pb-[calc(1rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center justify-between gap-3">
        <p className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
          Practice quiz
        </p>
        <span
          className={`inline-flex min-h-11 min-w-16 items-center justify-center rounded-2xl border-2 px-3 text-sm font-bold ${
            secondsLeft <= 15
              ? "border-[#fb7185] bg-[#ffe4e8] text-[#9f1239]"
              : "border-[#ffe3a1] bg-[#fff6d6] text-[#9a6700]"
          }`}
        >
          {secondsLeft}s
        </span>
      </div>
      <Progress
        value={((index + 1) / pool.length) * 100}
        className="h-3.5 rounded-xl bg-[var(--brand-baby)]"
      />

      {item && (
        <SoftPanel className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <LumiMascot size={56} mood="think" className="!animate-none" />
            <p className="pt-1 text-lg font-bold leading-relaxed">{item.prompt}</p>
          </div>
          {item.kind === "listen-choice" && item.ttsText && (
            <AudioButton
              text={item.ttsText}
              lang={(item.ttsLang ?? "en-US") as TtsLang}
              label="Listen"
            />
          )}
          <div className="flex flex-col gap-2.5">
            {item.choices?.map((choice) => (
              <button
                key={choice.id}
                type="button"
                onClick={() => choose(choice.id)}
                className={`pressable min-h-14 rounded-2xl border-2 px-4 py-3 text-left text-base font-bold ${
                  selected === choice.id
                    ? "border-[var(--brand-primary)] bg-[var(--brand-tint)]"
                    : "border-[var(--brand-border)] bg-[var(--brand-mist)]"
                }`}
              >
                {choice.label}
              </button>
            ))}
          </div>
        </SoftPanel>
      )}
    </div>
  );
}
