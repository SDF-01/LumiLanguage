"use client";

import { PathTrail } from "@/components/game/path-trail";
import { WordsOfTheDay } from "@/components/learning/words-of-the-day";
import { japanesePathNodes, pathMeta } from "@/content/catalog";
import { getJapaneseWordsOfTheDay } from "@/content/words-of-the-day/japanese";
import { useLocale } from "@/lib/i18n/locale-context";

export default function JapanesePathPage() {
  const { locale, t } = useLocale();
  const daily = getJapaneseWordsOfTheDay();

  const nodesFor = (section: (typeof japanesePathNodes)[number]["section"]) =>
    japanesePathNodes
      .filter((n) => n.section === section)
      .map((n) => ({
        id: n.id,
        label: locale === "ja" ? n.labelJa : n.label,
        locked: false,
        href: `/japanese/unit/${n.unitId}`,
      }));

  return (
    <PathTrail
      title={locale === "ja" ? pathMeta.japanese.titleJa : pathMeta.japanese.title}
      subtitle={
        locale === "ja" ? pathMeta.japanese.blurbJa : pathMeta.japanese.blurb
      }
      readyLabel={t.common.readyToPlay}
      spotlight={
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
      }
      sections={[
        { title: t.japanese.sectionStart, nodes: nodesFor("startHere") },
        { title: t.japanese.sectionHiragana, nodes: nodesFor("hiragana") },
        { title: t.japanese.sectionKatakana, nodes: nodesFor("katakana") },
        { title: t.japanese.sectionKanji, nodes: nodesFor("kanji") },
        { title: t.japanese.sectionPhrases, nodes: nodesFor("phrases") },
      ]}
      primaryCta={{
        href: `/japanese/unit/${pathMeta.japanese.unitId}`,
        label: t.japanese.startCta,
      }}
    />
  );
}
