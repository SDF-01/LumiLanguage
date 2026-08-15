"use client";

import { useState } from "react";
import Link from "next/link";
import { AudioButton } from "@/components/learning/audio-button";
import { SpeakCoach } from "@/components/japanese/speak-coach";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { completeUnit } from "@/lib/progress";
import { queueSrsCard } from "@/lib/srs";
import { useLocale } from "@/lib/i18n/locale-context";
import type { DialogueScene } from "@/lib/types";

export function DialoguePlayer({ scene }: { scene: DialogueScene }) {
  const { locale, t } = useLocale();
  const [index, setIndex] = useState(0);
  const [spoken, setSpoken] = useState(false);
  const line = scene.lines[index];
  const done = index >= scene.lines.length;

  if (!line || done) {
    return (
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-6">
        <SoftPanel accent="sun" className="flex flex-col items-center gap-3 text-center">
          <LumiMascot size={120} mood="celebrate" />
          <h1 className="font-display text-2xl font-semibold">
            {locale === "ja" ? "会話クリア" : "Dialogue complete"}
          </h1>
          <Button asChild className="pressable min-h-14 w-full rounded-2xl bg-[var(--brand-primary)] font-bold text-white">
            <Link href="/japanese/speak">{t.japanese.nav.speak}</Link>
          </Button>
        </SoftPanel>
      </div>
    );
  }

  const yourTurn = line.speaker === "you";

  function next() {
    if (index + 1 >= scene.lines.length) {
      completeUnit(`dialogue-${scene.id}`, 70);
    }
    setIndex((value) => value + 1);
    setSpoken(false);
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-1 flex-col gap-4 px-4 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-4">
      <SoftPanel className="flex flex-col gap-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
          {t.japanese.dialogue}
        </p>
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {locale === "ja" ? scene.titleJa : scene.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {locale === "ja" ? scene.settingJa : scene.settingEn}
        </p>
      </SoftPanel>

      <SoftPanel className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <LumiMascot size={64} mood={yourTurn ? "cheer" : "happy"} />
          <div>
            <p className="text-xs font-bold uppercase text-[var(--brand-primary-deep)]">
              {yourTurn ? t.japanese.yourLine : line.speaker === "lumi" ? "Lumi" : t.japanese.friend}
            </p>
            <p className="font-jp text-2xl font-semibold">{line.ja}</p>
            <p className="text-sm font-bold text-[var(--brand-coral)]">{line.reading}</p>
            <p className="text-sm text-muted-foreground">{line.en}</p>
          </div>
        </div>
        <AudioButton text={line.ja} lang="ja-JP" label={t.common.listen} />
        {yourTurn && (
          <SpeakCoach
            expected={line.expectedSpeech ?? [line.ja, line.reading]}
            listenLabel={t.japanese.listening}
            speakLabel={t.japanese.tapToSpeak}
            onResult={(score) => {
              setSpoken(true);
              if (!score.passed) {
                queueSrsCard({
                  id: `dlg-${scene.id}-${line.id}`,
                  front: line.ja,
                  reading: line.reading,
                  meaning: line.en,
                  ttsText: line.ja,
                });
              }
            }}
          />
        )}
      </SoftPanel>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[var(--brand-border)] bg-white/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <div className="mx-auto max-w-lg">
          <Button
            className="pressable min-h-14 w-full rounded-2xl bg-[var(--brand-primary)] font-bold text-white"
            onClick={next}
            disabled={yourTurn && !spoken}
          >
            {t.common.continue}
          </Button>
        </div>
      </div>
    </div>
  );
}
