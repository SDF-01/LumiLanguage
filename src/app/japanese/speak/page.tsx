"use client";

import Link from "next/link";
import { useState } from "react";
import { AudioButton } from "@/components/learning/audio-button";
import { PitchBar } from "@/components/japanese/pitch-bar";
import { SpeakCoach } from "@/components/japanese/speak-coach";
import { SoftPanel } from "@/components/brand/soft-panel";
import { japaneseDialogues } from "@/content/japanese/dialogues";
import { speakLabDrills } from "@/content/japanese/speak-lab";
import { queueSrsCard } from "@/lib/srs";
import { useLocale } from "@/lib/i18n/locale-context";

export default function SpeakLabPage() {
  const { locale, t } = useLocale();
  const [index, setIndex] = useState(0);
  const drill = speakLabDrills[index] ?? speakLabDrills[0];
  if (!drill) return null;

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-4">
      <SoftPanel className="flex flex-col gap-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
          {t.japanese.nav.speak}
        </p>
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {t.japanese.speakLabTitle}
        </h1>
        <p className="text-sm text-muted-foreground">{t.japanese.speakLabSubtitle}</p>
      </SoftPanel>

      <SoftPanel className="flex flex-col gap-3">
        <p className="text-xs font-bold text-muted-foreground">
          {index + 1}/{speakLabDrills.length}
        </p>
        <p className="font-jp text-center text-4xl font-semibold text-[var(--brand-primary-deep)]">
          {drill.ja}
        </p>
        <p className="text-center font-display text-xl text-[var(--brand-coral)]">
          {drill.reading}
        </p>
        <p className="text-center text-sm text-muted-foreground">{drill.en}</p>
        <PitchBar pattern={drill.pitch} />
        <AudioButton text={drill.ja} lang="ja-JP" label={t.common.listen} />
        <SpeakCoach
          expected={drill.expectedSpeech ?? [drill.ja, drill.reading]}
          listenLabel={t.japanese.listening}
          speakLabel={t.japanese.tapToSpeak}
          onResult={(score) => {
            if (!score.passed) {
              queueSrsCard({
                id: `speak-${drill.id}`,
                front: drill.ja,
                reading: drill.reading,
                meaning: drill.en,
                ttsText: drill.ja,
              });
            } else if (index + 1 < speakLabDrills.length) {
              setIndex((value) => value + 1);
            }
          }}
        />
        <button
          type="button"
          className="min-h-12 text-sm font-bold text-[var(--brand-primary-deep)]"
          onClick={() =>
            setIndex((value) => (value + 1) % speakLabDrills.length)
          }
        >
          {t.common.continue}
        </button>
      </SoftPanel>

      <SoftPanel className="flex flex-col gap-2">
        <h2 className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
          {t.japanese.dialogue}
        </h2>
        {japaneseDialogues.map((scene) => (
          <Link
            key={scene.id}
            href={`/japanese/dialogue/${scene.id}`}
            className="pressable min-h-14 rounded-2xl border-2 border-[var(--brand-border)] bg-white px-4 py-3"
          >
            <p className="font-bold text-[var(--brand-ink)]">
              {locale === "ja" ? scene.titleJa : scene.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {locale === "ja" ? scene.settingJa : scene.settingEn}
            </p>
          </Link>
        ))}
      </SoftPanel>
    </div>
  );
}
