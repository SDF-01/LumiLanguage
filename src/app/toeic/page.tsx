"use client";

import { useEffect, useState } from "react";
import { PathTrail } from "@/components/game/path-trail";
import { WordsOfTheDay } from "@/components/learning/words-of-the-day";
import { pathMeta, toeicPathNodes } from "@/content/catalog";
import { getToeicWordsOfTheDay } from "@/content/words-of-the-day/toeic";
import { useLocale } from "@/lib/i18n/locale-context";
import { loadProgress } from "@/lib/progress";
import { isToeicSectionLocked, toeicLockHint } from "@/lib/toeic-gates";

export default function ToeicPathPage() {
  const { locale, t } = useLocale();
  const daily = getToeicWordsOfTheDay();
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const refresh = () => setCompleted(loadProgress().completedUnits);
    refresh();
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, []);

  const nodesFor = (section: (typeof toeicPathNodes)[number]["section"]) => {
    const sectionLocked = isToeicSectionLocked(section, completed);
    const hint = toeicLockHint(section, locale);
    return toeicPathNodes
      .filter((n) => n.section === section)
      .map((n, index) => ({
        id: n.id,
        label:
          sectionLocked && hint && index === 0
            ? `${locale === "ja" ? n.labelJa : n.label} (${hint})`
            : locale === "ja"
              ? n.labelJa
              : n.label,
        locked: sectionLocked,
        href: sectionLocked ? undefined : `/toeic/unit/${n.unitId}`,
      }));
  };

  return (
    <PathTrail
      tone="mist"
      title={locale === "ja" ? pathMeta.toeic.titleJa : t.toeic.title}
      subtitle={t.toeic.subtitle}
      readyLabel={t.common.readyToPlay}
      lockedLabel={locale === "ja" ? "ロック中" : "Locked"}
      spotlight={
        <WordsOfTheDay
          title={t.toeic.wordsTitle}
          subtitle={t.toeic.wordsSubtitle}
          locale={locale}
          listenLabel={t.common.listen}
          groups={[{ title: t.toeic.sectionVocab, words: daily }]}
        />
      }
      sections={[
        { title: t.toeic.sectionStart, nodes: nodesFor("startHere") },
        { title: t.toeic.sectionVocab, nodes: nodesFor("vocab") },
        { title: t.toeic.sectionReading, nodes: nodesFor("reading") },
        { title: t.toeic.sectionGrammar, nodes: nodesFor("grammar") },
        { title: t.toeic.sectionListening, nodes: nodesFor("listening") },
        { title: t.toeic.sectionExamReading, nodes: nodesFor("examReading") },
      ]}
      primaryCta={{
        href: `/toeic/unit/${pathMeta.toeic.unitId}`,
        label: t.toeic.startCta,
      }}
      secondaryCta={{
        href: "/toeic/exam",
        label: t.toeic.quizCta,
      }}
    />
  );
}
