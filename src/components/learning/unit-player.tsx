"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AudioButton } from "@/components/learning/audio-button";
import { MatchBoard } from "@/components/japanese/match-board";
import { PitchBar } from "@/components/japanese/pitch-bar";
import { SentenceBuilder } from "@/components/japanese/sentence-builder";
import { SpeakCoach } from "@/components/japanese/speak-coach";
import { StrokePad } from "@/components/japanese/stroke-pad";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useSpeechRecognitionSupport } from "@/lib/client-store";
import { addSkillXp, completeUnit, markJapaneseUnit } from "@/lib/progress";
import { haptic } from "@/lib/haptics";
import { type SpeechScore } from "@/lib/speech";
import { queueFromExercise } from "@/lib/srs";
import type { Exercise, LearningUnit, TeachCard } from "@/lib/types";
import { skillForExercise, skillLabel } from "@/lib/skills";
import { unlockAudio, type TtsLang } from "@/lib/tts";
import { useLocale } from "@/lib/i18n/locale-context";

type Phase = "tutorial" | "teach" | "exercise" | "checkpoint";

export function UnitPlayer({ unit }: { unit: LearningUnit }) {
  const router = useRouter();
  const { locale, t } = useLocale();
  const teachCards = unit.teach ?? [];
  const hasTeach = teachCards.length > 0;

  const [phase, setPhase] = useState<Phase>("tutorial");
  const [teachIndex, setTeachIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [earnedXp, setEarnedXp] = useState(0);
  const [justWrong, setJustWrong] = useState(false);
  const speechReady = useSpeechRecognitionSupport();

  const exercise = unit.exercises[index];
  const total = unit.exercises.length;
  const teachTotal = teachCards.length;
  const teachCard = teachCards[teachIndex];

  useEffect(() => {
    if (unit.pathId === "japanese") markJapaneseUnit(unit.id);
  }, [unit.id, unit.pathId]);

  const progressValue = useMemo(() => {
    if (phase === "tutorial") return 6;
    if (phase === "checkpoint") return 100;
    if (phase === "teach") {
      const teachSpan = hasTeach ? 40 : 0;
      return 6 + Math.round(((teachIndex + 1) / Math.max(teachTotal, 1)) * teachSpan);
    }
    const base = hasTeach ? 46 : 6;
    const span = hasTeach ? 50 : 90;
    return (
      base + Math.round(((index + (revealed ? 1 : 0)) / Math.max(total, 1)) * span)
    );
  }, [
    phase,
    index,
    revealed,
    total,
    teachIndex,
    teachTotal,
    hasTeach,
  ]);

  function startFromTutorial() {
    unlockAudio();
    if (hasTeach) {
      setTeachIndex(0);
      setPhase("teach");
      return;
    }
    setPhase("exercise");
  }

  function nextTeach() {
    if (teachIndex + 1 >= teachTotal) {
      setIndex(0);
      setSelected(null);
      setRevealed(false);
      setPhase("exercise");
      return;
    }
    setTeachIndex((i) => i + 1);
  }

  function finishItem(ok: boolean) {
    setRevealed(true);
    setJustWrong(!ok);
    haptic(ok ? "ok" : "bad");
    if (ok) {
      setCorrectCount((c) => c + 1);
      if (exercise) addSkillXp(skillForExercise(exercise), 8);
    } else if (exercise && unit.pathId === "japanese") {
      queueFromExercise(exercise);
    }
  }

  function submitChoice(choiceId: string) {
    if (revealed || !exercise) return;
    setSelected(choiceId);
    finishItem(exercise.correctChoiceId === choiceId);
  }

  function continueSpeak() {
    if (!exercise) return;
    finishItem(true);
  }

  function onSpeakScore(score: SpeechScore) {
    if (revealed) return;
    finishItem(score.passed);
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

  const phaseBadge =
    phase === "exercise"
      ? `Quiz ${index + 1}/${total}`
      : phase === "teach"
        ? `Learn ${teachIndex + 1}/${teachTotal}`
        : phase === "checkpoint"
          ? "Done"
          : "Intro";

  return (
    <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col gap-4 px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom))] pt-4">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(ellipse_at_top,rgba(64,200,200,0.16),transparent_70%)]"
      />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <p className="font-display text-base font-semibold text-[var(--brand-primary-deep)]">
            {unit.title}
          </p>
          <span className="rounded-xl border border-[var(--brand-border)] bg-white/90 px-3 py-1 text-sm font-bold text-[var(--brand-primary-deep)] shadow-sm">
            {phaseBadge}
          </span>
        </div>
        <Progress
          value={progressValue}
          className="h-3.5 rounded-xl bg-[var(--brand-baby)]"
        />
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
          {hasTeach && (
            <p className="rounded-2xl bg-[var(--brand-tint)] px-4 py-3 text-sm font-bold text-[var(--brand-primary-deep)]">
              {locale === "ja"
                ? unit.pathId === "toeic"
                  ? "次は Learn：英語を1つずつ音声つきで教えます。クイズはそのあとです。"
                  : "次は Learn：文字とフレーズを1つずつ音声つきで教えます。クイズはそのあとです。"
                : unit.pathId === "toeic"
                  ? "Next is Learn: we teach each English item with audio. The quiz comes after."
                  : "Next is Learn: we teach each item with audio. Then you speak, write, and read."}
            </p>
          )}
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

      {phase === "teach" && teachCard && (
        <TeachView
          card={teachCard}
          step={teachIndex + 1}
          total={teachTotal}
          locale={locale}
        />
      )}

      {phase === "exercise" && exercise && (
        <ExerciseView
          key={exercise.id}
          exercise={exercise}
          selected={selected}
          revealed={revealed}
          justWrong={justWrong}
          onSelect={submitChoice}
          onSpeak={onSpeakScore}
          onStroke={(ok) => finishItem(ok)}
          onMatch={() => finishItem(true)}
          onBuild={(ok) => finishItem(ok)}
          listenLabel={t.japanese.listening}
          speakLabel={t.japanese.tapToSpeak}
          locale={locale}
          trayLabel={t.japanese.buildTray}
          bankLabel={t.japanese.buildBank}
          checkLabel={t.japanese.buildCheck}
          clearLabel={t.japanese.buildClear}
          emptyLabel={t.japanese.buildEmpty}
        />
      )}

      {phase === "checkpoint" && (
        <SoftPanel
          accent="sun"
          className="pop-in flex flex-col items-center gap-3 text-center"
        >
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
              : `${unit.title} complete. Review weak lines in the Review tab.`}
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
            {unit.pathId === "japanese" && (
              <Button
                asChild
                className="pressable soft-shadow min-h-14 rounded-2xl border-0 bg-[var(--brand-coral)] text-base font-bold text-white"
              >
                <Link
                  href={
                    unit.exercises.some((item) => item.kind === "sentence-build")
                      ? "/japanese/read"
                      : "/japanese/speak"
                  }
                >
                  {unit.exercises.some((item) => item.kind === "sentence-build")
                    ? t.japanese.nav.read
                    : t.japanese.speakLabTitle}
                </Link>
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
              onClick={startFromTutorial}
            >
              {hasTeach
                ? locale === "ja"
                  ? "先に覚える"
                  : "Learn first"
                : "Let's go"}
            </Button>
          )}
          {phase === "teach" && (
            <Button
              className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
              onClick={nextTeach}
            >
              {teachIndex + 1 >= teachTotal
                ? locale === "ja"
                  ? "練習へ"
                  : "Start practice"
                : locale === "ja"
                  ? "次へ"
                  : "Next"}
            </Button>
          )}
          {phase === "exercise" && revealed && (
            <Button
              className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
              onClick={next}
            >
              {index + 1 >= total ? "Claim XP" : t.common.continue}
            </Button>
          )}
          {phase === "exercise" &&
            !revealed &&
            exercise?.kind === "speak-prompt" &&
            !speechReady && (
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

function TeachView({
  card,
  step,
  total,
  locale,
}: {
  card: TeachCard;
  step: number;
  total: number;
  locale: "en" | "ja";
}) {
  const lang = (card.ttsLang ?? "ja-JP") as TtsLang;

  return (
    <SoftPanel className="pop-in flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-xl bg-[var(--brand-tint)] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-[var(--brand-primary-deep)]">
          {locale === "ja" ? "覚える" : "Learn"}
        </span>
        <span className="text-xs font-bold text-muted-foreground">
          {step} / {total}
        </span>
      </div>

      <div className="relative flex flex-col items-center gap-2 py-5 text-center">
        <div
          aria-hidden
          className="absolute inset-x-8 top-2 h-28 rounded-full bg-[radial-gradient(circle,rgba(64,200,200,0.2),transparent_70%)]"
        />
        <p className="font-jp relative text-6xl font-semibold leading-none text-[var(--brand-primary-deep)] sm:text-7xl">
          {card.glyph}
        </p>
        <p className="font-display relative text-2xl font-semibold tracking-wide text-[var(--brand-coral)]">
          {card.reading}
        </p>
        {(card.meaningEn || card.meaningJa) && (
          <p className="relative text-sm font-bold text-[var(--brand-ink)]">
            {locale === "ja" ? card.meaningJa ?? card.meaningEn : card.meaningEn}
          </p>
        )}
        <PitchBar pattern={card.pitch} />
      </div>

      <p className="text-base leading-relaxed">
        {locale === "ja" ? card.tipJa : card.tipEn}
      </p>
      {locale === "ja" ? (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {card.tipEn}
        </p>
      ) : (
        <p className="text-sm leading-relaxed text-muted-foreground">
          {card.tipJa}
        </p>
      )}

      {card.ttsText && (
        <AudioButton text={card.ttsText} lang={lang} label="Listen" />
      )}

      <div className="flex items-start gap-3 rounded-2xl bg-[var(--brand-mist)] px-4 py-3">
        <LumiMascot size={56} mood="think" />
        <p className="pt-1 text-sm font-medium leading-relaxed text-[var(--brand-primary-deep)]">
          {locale === "ja"
            ? "形を目で覚え、Listen で音を確認し、声に出してから次へ。"
            : "Look, tap Listen, say it once, then go to the next card."}
        </p>
      </div>
    </SoftPanel>
  );
}

function ExerciseView({
  exercise,
  selected,
  revealed,
  justWrong,
  onSelect,
  onSpeak,
  onStroke,
  onMatch,
  onBuild,
  listenLabel,
  speakLabel,
  locale,
  trayLabel,
  bankLabel,
  checkLabel,
  clearLabel,
  emptyLabel,
}: {
  exercise: Exercise;
  selected: string | null;
  revealed: boolean;
  justWrong: boolean;
  onSelect: (id: string) => void;
  onSpeak: (score: SpeechScore) => void;
  onStroke: (ok: boolean) => void;
  onMatch: () => void;
  onBuild: (ok: boolean) => void;
  listenLabel: string;
  speakLabel: string;
  locale: "en" | "ja";
  trayLabel: string;
  bankLabel: string;
  checkLabel: string;
  clearLabel: string;
  emptyLabel: string;
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
        exercise.kind === "speak-prompt" ||
        exercise.kind === "sentence-build") &&
        exercise.ttsText && (
          <AudioButton text={exercise.ttsText} lang={lang} label="Listen" />
        )}

      {exercise.kind === "speak-prompt" && !revealed && (
        <SpeakCoach
          expected={
            exercise.expectedSpeech ??
            [exercise.ttsText, exercise.prompt].filter(
              (value): value is string => Boolean(value),
            )
          }
          listenLabel={listenLabel}
          speakLabel={speakLabel}
          onResult={onSpeak}
        />
      )}

      {exercise.kind === "stroke-write" && exercise.strokeGlyph && (
        <StrokePad
          glyph={exercise.strokeGlyph}
          checkLabel={locale === "ja" ? "チェック" : "Check"}
          clearLabel={locale === "ja" ? "消す" : "Clear"}
          onPass={() => onStroke(true)}
          onFail={() => onStroke(false)}
          disabled={revealed}
        />
      )}

      {exercise.kind === "match" && exercise.pairs && (
        <MatchBoard
          pairs={exercise.pairs}
          revealed={revealed}
          onComplete={onMatch}
        />
      )}

      {exercise.kind === "sentence-build" &&
        exercise.tiles &&
        exercise.correctOrder && (
          <SentenceBuilder
            tiles={exercise.tiles}
            correctOrder={exercise.correctOrder}
            revealed={revealed}
            onComplete={onBuild}
            checkLabel={checkLabel}
            clearLabel={clearLabel}
            trayLabel={trayLabel}
            bankLabel={bankLabel}
            emptyLabel={emptyLabel}
          />
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

      {exercise.kind === "write-choice" && exercise.strokeGlyph && !revealed && (
        <StrokePad
          glyph={exercise.strokeGlyph}
          checkLabel={locale === "ja" ? "なぞりチェック" : "Trace check"}
          clearLabel={locale === "ja" ? "消す" : "Clear"}
          onPass={() => undefined}
          onFail={() => undefined}
        />
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
            {justWrong ? "Almost. Here's why" : "Great job. Here's why"}
          </p>
          {exercise.kind === "sentence-build" &&
            exercise.tiles &&
            exercise.correctOrder && (
              <p className="font-jp text-xl font-semibold text-[var(--brand-primary-deep)]">
                {exercise.correctOrder
                  .map(
                    (id) =>
                      exercise.tiles?.find((tile) => tile.id === id)?.label ?? "",
                  )
                  .join("")}
              </p>
            )}
          <p className="text-sm leading-relaxed">{exercise.explanationEn}</p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {exercise.explanationJa}
          </p>
        </div>
      )}
    </SoftPanel>
  );
}
