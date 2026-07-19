"use client";

import { PathTrail } from "@/components/game/path-trail";
import { WordsOfTheDay } from "@/components/learning/words-of-the-day";
import { pathMeta, toeicPathNodes } from "@/content/catalog";
import { getToeicWordsOfTheDay } from "@/content/words-of-the-day/toeic";
import { useLocale } from "@/lib/i18n/locale-context";

export default function ToeicPathPage() {
  const { locale, t } = useLocale();
  const daily = getToeicWordsOfTheDay();

  const nodesFor = (section: (typeof toeicPathNodes)[number]["section"]) =>
    toeicPathNodes
      .filter((n) => n.section === section)
      .map((n) => ({
        id: n.id,
        label: locale === "ja" ? n.labelJa : n.label,
        locked: false,
        href: `/toeic/unit/${n.unitId}`,
      }));

  return (
    <PathTrail
      title={locale === "ja" ? pathMeta.toeic.titleJa : t.toeic.title}
      subtitle={t.toeic.subtitle}
      readyLabel={t.common.readyToPlay}
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
        { title: t.toeic.sectionVocab, nodes: nodesFor("vocab") },
        { title: t.toeic.sectionReading, nodes: nodesFor("reading") },
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
