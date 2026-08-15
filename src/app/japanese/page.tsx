"use client";

import Link from "next/link";
import { PathTrail } from "@/components/game/path-trail";
import { InstallBanner } from "@/components/japanese/install-banner";
import { WordsOfTheDay } from "@/components/learning/words-of-the-day";
import { SoftPanel } from "@/components/brand/soft-panel";
import { japanesePathNodes, pathMeta } from "@/content/catalog";
import { getJapaneseWordsOfTheDay } from "@/content/words-of-the-day/japanese";
import { useProgress, useSrsCards } from "@/lib/client-store";
import {
  isJapaneseNodeLocked,
  japaneseCompletion,
  nextJapaneseUnitId,
} from "@/lib/japanese-gates";
import { useLocale } from "@/lib/i18n/locale-context";

export default function JapanesePathPage() {
  const { locale, t } = useLocale();
  const daily = getJapaneseWordsOfTheDay();
  const progress = useProgress();
  const due = useSrsCards().filter(
    (card) => card.due <= new Date().toISOString().slice(0, 10),
  ).length;

  const completed = progress.completedUnits;
  const nextId = nextJapaneseUnitId(completed);
  const stats = japaneseCompletion(completed);
  const speakHits = `${progress.speakPasses}/${Math.max(progress.speakAttempts, 1)}`;

  const nodesFor = (section: (typeof japanesePathNodes)[number]["section"]) =>
    japanesePathNodes
      .filter((n) => n.section === section)
      .map((n) => {
        const locked = isJapaneseNodeLocked(n, completed);
        return {
          id: n.id,
          label: locale === "ja" ? n.labelJa : n.label,
          locked,
          href: locked ? undefined : n.href ?? `/japanese/unit/${n.unitId}`,
        };
      });

  return (
    <PathTrail
      tone="coral"
      title={locale === "ja" ? pathMeta.japanese.titleJa : pathMeta.japanese.title}
      subtitle={
        locale === "ja" ? pathMeta.japanese.blurbJa : pathMeta.japanese.blurb
      }
      readyLabel={t.common.readyToPlay}
      lockedLabel={locale === "ja" ? "ロック中" : "Locked"}
      spotlight={
        <div className="flex flex-col gap-3">
          <InstallBanner />
          <SoftPanel className="grid grid-cols-3 gap-2 !p-3">
            <Stat
              label={t.common.xp}
              value={String(progress.xp)}
            />
            <Stat
              label={t.japanese.dueReviews}
              value={String(due)}
            />
            <Stat
              label={t.japanese.speakScore}
              value={speakHits}
            />
          </SoftPanel>
          <p className="text-center text-xs font-bold text-[var(--brand-primary-deep)]">
            {stats.done}/{stats.total} · {stats.percent}%
          </p>
          <Link href="/japanese/chart">
            <SoftPanel accent="sun" className="flex flex-col gap-1">
              <p className="text-[10px] font-bold uppercase text-[var(--brand-coral)]">
                {t.japanese.nav.chart}
              </p>
              <p className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
                {t.japanese.alpha.title}
              </p>
              <p className="text-sm text-muted-foreground">
                {t.japanese.alpha.subtitle}
              </p>
            </SoftPanel>
          </Link>
          <div className="grid grid-cols-2 gap-2">
            <LabLink href={`/japanese/unit/${nextId}`} label={t.japanese.continuePath} />
            <LabLink href="/japanese/build" label={t.japanese.readWorkshopCta} />
            <LabLink href="/japanese/speak" label={t.japanese.nav.speak} />
            <LabLink href="/japanese/read" label={t.japanese.nav.read} />
            <LabLink href="/japanese/review" label={`${t.japanese.nav.review}${due > 0 ? ` · ${due}` : ""}`} />
            <LabLink href="/japanese/chart" label={t.japanese.nav.chart} />
          </div>
          <WordsOfTheDay
            title={t.japanese.wordsTitle}
            subtitle={t.japanese.wordsSubtitle}
            locale={locale}
            listenLabel={t.common.listen}
            groups={[
              { title: t.japanese.sectionHiragana, words: daily.hiragana },
              { title: t.japanese.sectionKatakana, words: daily.katakana },
              { title: t.japanese.sectionKanji, words: daily.kanji },
            ]}
          />
        </div>
      }
      sections={[
        { title: t.japanese.sectionStart, nodes: nodesFor("startHere") },
        { title: t.japanese.sectionHiragana, nodes: nodesFor("hiragana") },
        { title: t.japanese.sectionKatakana, nodes: nodesFor("katakana") },
        { title: t.japanese.sectionKanji, nodes: nodesFor("kanji") },
        { title: t.japanese.sectionPhrases, nodes: nodesFor("phrases") },
        { title: t.japanese.sectionRead, nodes: nodesFor("readTrack") },
        { title: t.japanese.sectionPro, nodes: nodesFor("proRead") },
        { title: t.japanese.sectionLife, nodes: nodesFor("life") },
      ]}
      primaryCta={{
        href: `/japanese/unit/${nextId}`,
        label: t.japanese.startCta,
      }}
      secondaryCta={{
        href: "/japanese/speak",
        label: t.japanese.speakLabTitle,
      }}
    />
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[var(--brand-mist)] px-2 py-2 text-center">
      <p className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
        {value}
      </p>
      <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function LabLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="pressable min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-white px-3 py-2 text-center text-sm font-bold text-[var(--brand-primary-deep)]"
    >
      {label}
    </Link>
  );
}
