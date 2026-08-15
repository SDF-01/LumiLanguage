"use client";

import Link from "next/link";
import { SoftPanel } from "@/components/brand/soft-panel";
import { getUnit } from "@/content/catalog";
import { readingLadder } from "@/content/japanese/reading-ladder";
import { getStory, japaneseStories } from "@/content/japanese/stories";
import { useLocale } from "@/lib/i18n/locale-context";

export default function ReadLabPage() {
  const { locale, t } = useLocale();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-4">
      <SoftPanel className="flex flex-col gap-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
          {t.japanese.nav.read}
        </p>
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {t.japanese.readLabTitle}
        </h1>
        <p className="text-sm text-muted-foreground">{t.japanese.readLabSubtitle}</p>
      </SoftPanel>

      <Link href="/japanese/build">
        <SoftPanel accent="sun" className="flex flex-col gap-1">
          <p className="text-[10px] font-bold uppercase text-[var(--brand-coral)]">
            {t.japanese.readWorkshopCta}
          </p>
          <h2 className="font-display text-xl font-semibold text-[var(--brand-primary-deep)]">
            {t.japanese.buildLabTitle}
          </h2>
          <p className="text-sm text-muted-foreground">
            {t.japanese.buildLabSubtitle}
          </p>
        </SoftPanel>
      </Link>

      <h2 className="px-1 font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
        {t.japanese.readLadderTitle}
      </h2>

      {readingLadder.map((rung) => (
        <SoftPanel key={rung.id} className="flex flex-col gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
              {locale === "ja" ? rung.titleJa : rung.titleEn}
            </h3>
            <p className="text-sm text-muted-foreground">
              {locale === "ja" ? rung.blurbJa : rung.blurbEn}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {rung.unitIds.map((unitId) => {
              const unit = getUnit(unitId);
              if (!unit) return null;
              return (
                <Link
                  key={unitId}
                  href={`/japanese/unit/${unitId}`}
                  className="pressable min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-white px-4 py-3"
                >
                  <p className="text-[10px] font-bold uppercase text-[var(--brand-coral)]">
                    {t.japanese.readWorkshopCta}
                  </p>
                  <p className="font-bold text-[var(--brand-ink)]">
                    {locale === "ja" ? unit.titleJa ?? unit.title : unit.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{unit.subtitle}</p>
                </Link>
              );
            })}
            {rung.storyIds.map((storyId) => {
              const story = getStory(storyId);
              if (!story) return null;
              return (
                <Link
                  key={storyId}
                  href={`/japanese/story/${storyId}`}
                  className="pressable min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-[var(--brand-mist)] px-4 py-3"
                >
                  <p className="text-[10px] font-bold uppercase text-[var(--brand-coral)]">
                    {story.level} · {story.minutes} min
                  </p>
                  <p className="font-bold text-[var(--brand-ink)]">
                    {locale === "ja" ? story.titleJa : story.title}
                  </p>
                  <p className="font-jp text-sm">{story.titleJa}</p>
                </Link>
              );
            })}
          </div>
        </SoftPanel>
      ))}

      <h2 className="px-1 font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
        {t.japanese.readStoriesTitle}
      </h2>

      {japaneseStories.map((story) => (
        <Link key={story.id} href={`/japanese/story/${story.id}`}>
          <SoftPanel className="flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase text-[var(--brand-coral)]">
              {story.level} · {story.minutes} min
            </p>
            <h2 className="font-display text-xl font-semibold text-[var(--brand-primary-deep)]">
              {locale === "ja" ? story.titleJa : story.title}
            </h2>
            <p className="font-jp text-lg">{story.titleJa}</p>
            <p className="text-sm text-muted-foreground">
              {locale === "ja" ? story.synopsisJa : story.synopsisEn}
            </p>
          </SoftPanel>
        </Link>
      ))}
    </div>
  );
}
