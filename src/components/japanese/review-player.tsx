"use client";

import { useMemo, useState } from "react";
import { AudioButton } from "@/components/learning/audio-button";
import { SpeakCoach } from "@/components/japanese/speak-coach";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { dueSrsCards, reviewSrsCard, srsDueCount } from "@/lib/srs";
import { useLocale } from "@/lib/i18n/locale-context";
import type { SrsCard } from "@/lib/types";

export function ReviewPlayer() {
  const { locale, t } = useLocale();
  const initial = useMemo(() => dueSrsCards(), []);
  const [queue, setQueue] = useState<SrsCard[]>(initial);
  const [done, setDone] = useState(0);
  const card = queue[0];

  function grade(kind: "again" | "good" | "easy") {
    if (!card) return;
    reviewSrsCard(card.id, kind);
    setQueue((items) => items.slice(1));
    setDone((value) => value + 1);
  }

  if (!card) {
    return (
      <SoftPanel accent="sun" className="flex flex-col items-center gap-3 text-center">
        <LumiMascot size={120} mood="celebrate" />
        <h1 className="font-display text-2xl font-semibold">
          {srsDueCount() === 0
            ? locale === "ja"
              ? "今日の復習は完了"
              : "Today's reviews are clear"
            : locale === "ja"
              ? "このセットは終わり"
              : "This set is done"}
        </h1>
        <p className="text-sm text-muted-foreground">
          {done} {locale === "ja" ? "枚復習しました" : "cards reviewed"}
        </p>
      </SoftPanel>
    );
  }

  return (
    <SoftPanel className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--brand-coral)]">
          {t.japanese.nav.review}
        </p>
        <p className="text-xs font-bold text-muted-foreground">
          {done + 1}/{done + queue.length}
        </p>
      </div>
      <p className="font-jp text-center text-5xl font-semibold text-[var(--brand-primary-deep)]">
        {card.front}
      </p>
      <p className="text-center font-display text-xl text-[var(--brand-coral)]">
        {card.reading}
      </p>
      <p className="text-center text-sm text-muted-foreground">{card.meaning}</p>
      <AudioButton text={card.ttsText || card.front} lang="ja-JP" label={t.common.listen} />
      <SpeakCoach
        expected={[card.front, card.reading, card.ttsText]}
        listenLabel={t.japanese.listening}
        speakLabel={t.japanese.tapToSpeak}
        onResult={(score) => {
          if (score.passed) grade("good");
        }}
      />
      <div className="grid grid-cols-3 gap-2">
        <Button
          type="button"
          variant="secondary"
          className="min-h-12 rounded-xl border-2 border-[#ffd0c2] bg-[#fff4ef] font-bold"
          onClick={() => grade("again")}
        >
          {locale === "ja" ? "もう一度" : "Again"}
        </Button>
        <Button
          type="button"
          className="min-h-12 rounded-xl bg-[var(--brand-primary)] font-bold text-white"
          onClick={() => grade("good")}
        >
          {locale === "ja" ? "できた" : "Good"}
        </Button>
        <Button
          type="button"
          className="min-h-12 rounded-xl bg-[var(--brand-sun)] font-bold text-[#7a5200]"
          onClick={() => grade("easy")}
        >
          {locale === "ja" ? "かんたん" : "Easy"}
        </Button>
      </div>
    </SoftPanel>
  );
}
