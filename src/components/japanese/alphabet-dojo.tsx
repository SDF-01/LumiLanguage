"use client";

import { useMemo, useState } from "react";
import { AudioButton } from "@/components/learning/audio-button";
import { SpeakCoach } from "@/components/japanese/speak-coach";
import { StrokePad } from "@/components/japanese/stroke-pad";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { kanjiSchool } from "@/content/japanese/kanji-school";
import { useAlphabetMastery } from "@/lib/client-store";
import {
  recordGlyphResult,
  scriptMasteryStats,
  type AlphaScript,
} from "@/lib/alphabet-mastery";
import { buildDrill, type DrillItem } from "@/lib/alphabet-drills";
import {
  HIRAGANA_DAKUTEN_ROWS,
  HIRAGANA_ROWS,
  KATAKANA_DAKUTEN_ROWS,
  KATAKANA_ROWS,
  type KanaRow,
} from "@/lib/kana-chart";
import { kanaPool, readingOf } from "@/lib/kana-lookalikes";
import { queueSrsCard } from "@/lib/srs";
import { haptic } from "@/lib/haptics";
import { useLocale } from "@/lib/i18n/locale-context";

type Mode = "learn" | "drill" | "twins";

function idsFor(script: AlphaScript): string[] {
  if (script === "kanji") return kanjiSchool.map((entry) => entry.kanji);
  return kanaPool(script).map((cell) => cell.kana);
}

function rowsFor(script: "hiragana" | "katakana", extra: boolean): KanaRow[] {
  if (script === "hiragana") {
    return extra ? [...HIRAGANA_ROWS, ...HIRAGANA_DAKUTEN_ROWS] : HIRAGANA_ROWS;
  }
  return extra ? [...KATAKANA_ROWS, ...KATAKANA_DAKUTEN_ROWS] : KATAKANA_ROWS;
}

export function AlphabetDojo() {
  const { locale, t } = useLocale();
  const mastery = useAlphabetMastery();
  const [script, setScript] = useState<AlphaScript>("hiragana");
  const [mode, setMode] = useState<Mode>("learn");
  const [showVoiced, setShowVoiced] = useState(false);
  const [selected, setSelected] = useState<string>("あ");
  const [revealed, setRevealed] = useState(false);
  const [drills, setDrills] = useState<DrillItem[]>([]);
  const [drillIndex, setDrillIndex] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const stats = scriptMasteryStats(script, idsFor(script));
  const a = t.japanese.alpha;

  const kanji = kanjiSchool.find((entry) => entry.kanji === selected);
  const kanaReading =
    script === "kanji" ? "" : readingOf(selected, script);

  function pickGlyph(id: string) {
    setSelected(id);
    setRevealed(false);
    haptic("tap");
  }

  function startRound(nextMode: Mode) {
    setMode(nextMode);
    setDrills(buildDrill(script, nextMode === "twins" ? "twins" : "drill"));
    setDrillIndex(0);
    setPicked(null);
    setChecked(false);
    setScore(0);
  }

  const drill = drills[drillIndex];

  function submit(id: string) {
    if (!drill || checked) return;
    setPicked(id);
    setChecked(true);
    const ok = id === drill.correctId;
    haptic(ok ? "ok" : "bad");
    recordGlyphResult(drill.script, drill.targetId, ok);
    if (ok) setScore((value) => value + 1);
    else {
      queueSrsCard({
        id: `alpha-${drill.script}-${drill.targetId}`,
        front: drill.glyph ?? drill.targetId,
        reading: drill.explainEn,
        meaning: drill.explainEn,
        ttsText: drill.tts ?? drill.targetId,
      });
    }
  }

  function nextDrill() {
    if (drillIndex + 1 >= drills.length) {
      setMode("learn");
      setDrills([]);
      return;
    }
    setDrillIndex((value) => value + 1);
    setPicked(null);
    setChecked(false);
  }

  const scripts: AlphaScript[] = ["hiragana", "katakana", "kanji"];
  const modes: Mode[] = ["learn", "drill", "twins"];

  const studyHint = useMemo(() => {
    if (script === "kanji" && kanji) {
      return locale === "ja" ? kanji.hintJa : kanji.hintEn;
    }
    return a.studyHint;
  }, [a.studyHint, kanji, locale, script]);

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-1">
        {scripts.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setScript(item);
              setMode("learn");
              setRevealed(false);
              setSelected(item === "kanji" ? "一" : item === "katakana" ? "ア" : "あ");
            }}
            className={`min-h-11 rounded-xl text-[11px] font-bold uppercase ${
              script === item
                ? "bg-[var(--brand-primary)] text-white"
                : "bg-white text-[var(--brand-primary-deep)]"
            }`}
          >
            {item === "hiragana"
              ? t.japanese.sectionHiragana
              : item === "katakana"
                ? t.japanese.sectionKatakana
                : t.japanese.sectionKanji}
          </button>
        ))}
      </div>

      <p className="text-center text-xs font-bold text-[var(--brand-primary-deep)]">
        {stats.mastered}/{stats.total} {a.mastered} · {stats.percent}%
      </p>

      <div className="grid grid-cols-3 gap-1">
        {modes.map((item) => (
          <button
            key={item}
            type="button"
            disabled={item === "twins" && script === "kanji"}
            onClick={() => {
              if (item === "learn") {
                setMode("learn");
                setDrills([]);
                return;
              }
              startRound(item);
            }}
            className={`min-h-11 rounded-xl text-[11px] font-bold uppercase ${
              mode === item
                ? "bg-[var(--brand-coral)] text-white"
                : "bg-white text-[var(--brand-primary-deep)]"
            }`}
          >
            {item === "learn" ? a.learn : item === "drill" ? a.drill : a.twins}
          </button>
        ))}
      </div>

      {mode === "learn" && (
        <>
          {script !== "kanji" && (
            <button
              type="button"
              className="text-xs font-bold text-[var(--brand-primary-deep)]"
              onClick={() => setShowVoiced((value) => !value)}
            >
              {showVoiced ? a.hideVoiced : a.showVoiced}
            </button>
          )}

          {script === "kanji" ? (
            <div className="grid grid-cols-6 gap-1">
              {kanjiSchool.map((entry) => {
                const state = mastery[`${script}:${entry.kanji}`];
                return (
                  <button
                    key={entry.kanji}
                    type="button"
                    onClick={() => pickGlyph(entry.kanji)}
                    className={`min-h-12 rounded-xl border-2 font-jp text-xl ${tone(
                      selected === entry.kanji,
                      Boolean(state?.mastered),
                      (state?.seen ?? 0) > 0,
                    )}`}
                  >
                    {entry.kanji}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {rowsFor(script, showVoiced).map((row) => (
                <div key={row.id} className="grid grid-cols-5 gap-1">
                  {row.cells.map((cell, index) =>
                    cell ? (
                      <button
                        key={cell.kana}
                        type="button"
                        onClick={() => pickGlyph(cell.kana)}
                        className={`min-h-14 rounded-xl border-2 ${tone(
                          selected === cell.kana,
                          Boolean(mastery[`${script}:${cell.kana}`]?.mastered),
                          (mastery[`${script}:${cell.kana}`]?.seen ?? 0) > 0,
                        )}`}
                      >
                        <span className="font-jp block text-xl font-semibold">
                          {cell.kana}
                        </span>
                      </button>
                    ) : (
                      <span key={`${row.id}-empty-${index}`} className="min-h-14" />
                    ),
                  )}
                </div>
              ))}
            </div>
          )}

          <SoftPanel className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-[var(--brand-coral)]">
              {a.noRomaji}
            </p>
            <p className="font-jp text-center text-7xl font-semibold text-[var(--brand-primary-deep)]">
              {selected}
            </p>
            {revealed ? (
              <div className="text-center">
                <p className="font-display text-2xl text-[var(--brand-coral)]">
                  {script === "kanji" && kanji
                    ? `${kanji.meaningEn} · ${kanji.kun} / ${kanji.on}`
                    : kanaReading}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{studyHint}</p>
              </div>
            ) : (
              <p className="text-center text-sm text-muted-foreground">
                {a.hideHint}
              </p>
            )}
            <AudioButton
              text={script === "kanji" && kanji ? kanji.tts : selected}
              lang="ja-JP"
              label={t.common.listen}
            />
            {!revealed && (
              <Button
                className="min-h-12 rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
                onClick={() => setRevealed(true)}
              >
                {a.reveal}
              </Button>
            )}
            {revealed && (
              <>
                <SpeakCoach
                  expected={
                    script === "kanji" && kanji
                      ? [kanji.tts, kanji.kun, kanji.on, kanji.meaningEn]
                      : [selected, kanaReading]
                  }
                  listenLabel={t.japanese.listening}
                  speakLabel={t.japanese.tapToSpeak}
                  onResult={(result) => {
                    recordGlyphResult(script, selected, result.passed);
                  }}
                />
                <StrokePad
                  glyph={selected}
                  checkLabel={locale === "ja" ? "チェック" : "Check"}
                  clearLabel={locale === "ja" ? "消す" : "Clear"}
                  onPass={() => recordGlyphResult(script, selected, true)}
                  onFail={() => recordGlyphResult(script, selected, false)}
                />
              </>
            )}
          </SoftPanel>
        </>
      )}

      {mode !== "learn" && drill && (
        <SoftPanel className="flex flex-col gap-3">
          <p className="text-xs font-bold text-muted-foreground">
            {drillIndex + 1}/{drills.length} · {score} {a.correct}
          </p>
          <p className="text-lg font-bold">{locale === "ja" ? drill.promptJa : drill.promptEn}</p>
          {drill.glyph && (
            <p className="font-jp text-center text-7xl font-semibold text-[var(--brand-primary-deep)]">
              {drill.glyph}
            </p>
          )}
          {drill.tts && (
            <AudioButton text={drill.tts} lang="ja-JP" label={t.common.listen} />
          )}
          <div className="flex flex-col gap-2">
            {drill.choices.map((choice) => {
              const isCorrect = choice.id === drill.correctId;
              const isPicked = choice.id === picked;
              let toneClass =
                "border-[var(--brand-border)] bg-[var(--brand-mist)]";
              if (checked && isCorrect) {
                toneClass =
                  "border-[var(--brand-primary)] bg-[var(--brand-tint)] ring-2 ring-[var(--brand-primary)]/30";
              } else if (checked && isPicked && !isCorrect) {
                toneClass = "border-[#fb7185] bg-[#ffe4e8]";
              }
              return (
                <button
                  key={choice.id}
                  type="button"
                  disabled={checked}
                  onClick={() => submit(choice.id)}
                  className={`pressable min-h-14 rounded-2xl border-2 px-4 text-left font-jp text-xl font-bold ${toneClass}`}
                >
                  {choice.label}
                </button>
              );
            })}
          </div>
          {checked && (
            <>
              <p className="text-sm leading-relaxed">
                {locale === "ja" ? drill.explainJa : drill.explainEn}
              </p>
              <Button
                className="min-h-12 rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
                onClick={nextDrill}
              >
                {drillIndex + 1 >= drills.length ? a.finishRound : t.common.continue}
              </Button>
            </>
          )}
        </SoftPanel>
      )}
    </div>
  );
}

function tone(active: boolean, mastered: boolean, seen: boolean): string {
  if (active) return "border-[var(--brand-coral)] bg-[#fff4ef]";
  if (mastered) return "border-[#ffe3a1] bg-[#fff9e0]";
  if (seen) return "border-[var(--brand-primary)] bg-[var(--brand-tint)]";
  return "border-[var(--brand-border)] bg-white";
}
