"use client";

import { useState } from "react";
import { AudioButton } from "@/components/learning/audio-button";
import { PitchBar } from "@/components/japanese/pitch-bar";
import { SpeakCoach } from "@/components/japanese/speak-coach";
import { StrokePad } from "@/components/japanese/stroke-pad";
import { SoftPanel } from "@/components/brand/soft-panel";
import { queueSrsCard } from "@/lib/srs";
import {
  HIRAGANA_DAKUTEN_ROWS,
  HIRAGANA_ROWS,
  HIRAGANA_YOUON_ROWS,
  KATAKANA_DAKUTEN_ROWS,
  KATAKANA_ROWS,
  KATAKANA_YOUON_ROWS,
  type ChartTab,
  type KanaCell,
  type KanaRow,
} from "@/lib/kana-chart";
import { useLocale } from "@/lib/i18n/locale-context";
import { haptic } from "@/lib/haptics";

function rowsFor(tab: ChartTab): KanaRow[] {
  switch (tab) {
    case "hiragana":
      return HIRAGANA_ROWS;
    case "katakana":
      return KATAKANA_ROWS;
    case "dakuten":
      return [...HIRAGANA_DAKUTEN_ROWS, ...KATAKANA_DAKUTEN_ROWS];
    case "youon":
      return [...HIRAGANA_YOUON_ROWS, ...KATAKANA_YOUON_ROWS];
    default: {
      const _exhaustive: never = tab;
      return _exhaustive;
    }
  }
}

export function KanaChartView() {
  const { locale, t } = useLocale();
  const [tab, setTab] = useState<ChartTab>("hiragana");
  const [active, setActive] = useState<KanaCell | null>(HIRAGANA_ROWS[0]?.cells[0] ?? null);

  const tabs: ChartTab[] = ["hiragana", "katakana", "dakuten", "youon"];

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-4 gap-1">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`min-h-11 rounded-xl text-[11px] font-bold uppercase ${
              tab === item
                ? "bg-[var(--brand-primary)] text-white"
                : "bg-white text-[var(--brand-primary-deep)]"
            }`}
          >
            {t.japanese.chartTabs[item]}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {rowsFor(tab).map((row) => (
          <div key={row.id} className="grid grid-cols-5 gap-1">
            {row.cells.map((cell, index) =>
              cell ? (
                <button
                  key={cell.kana}
                  type="button"
                  onClick={() => {
                    setActive(cell);
                    haptic("tap");
                  }}
                  className={`min-h-14 rounded-xl border-2 ${
                    active?.kana === cell.kana
                      ? "border-[var(--brand-coral)] bg-[#fff4ef]"
                      : "border-[var(--brand-border)] bg-white"
                  }`}
                >
                  <span className="font-jp block text-xl font-semibold">{cell.kana}</span>
                  <span className="text-[10px] font-bold text-muted-foreground">
                    {cell.romaji}
                  </span>
                </button>
              ) : (
                <span key={`${row.id}-empty-${index}`} className="min-h-14" />
              ),
            )}
          </div>
        ))}
      </div>

      {active && (
        <SoftPanel className="flex flex-col gap-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-jp text-6xl font-semibold text-[var(--brand-primary-deep)]">
                {active.kana}
              </p>
              <p className="font-display text-xl text-[var(--brand-coral)]">{active.romaji}</p>
            </div>
            <PitchBar pattern={active.pitch} />
          </div>
          <AudioButton text={active.kana} lang="ja-JP" label={t.common.listen} />
          <SpeakCoach
            expected={[active.kana, active.romaji]}
            listenLabel={t.japanese.listening}
            speakLabel={t.japanese.tapToSpeak}
            onResult={(score) => {
              if (!score.passed) {
                queueSrsCard({
                  id: `kana-${active.kana}`,
                  front: active.kana,
                  reading: active.romaji,
                  meaning: active.romaji,
                  ttsText: active.kana,
                });
              }
            }}
          />
          <StrokePad
            glyph={active.kana}
            checkLabel={locale === "ja" ? "チェック" : "Check"}
            clearLabel={locale === "ja" ? "消す" : "Clear"}
            onPass={() => undefined}
            onFail={() => undefined}
          />
        </SoftPanel>
      )}
    </div>
  );
}
