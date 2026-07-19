"use client";

import { PathCard } from "@/components/game/path-card";
import { pathMeta } from "@/content/catalog";
import { useLocale } from "@/lib/i18n/locale-context";

export default function PathsPage() {
  const { locale, t } = useLocale();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-3 px-4 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
      <div className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-ink)]">
          {t.paths.title}
        </h1>
        <p className="text-sm text-muted-foreground">{t.paths.subtitle}</p>
      </div>
      <PathCard
        href="/toeic"
        title={locale === "ja" ? pathMeta.toeic.titleJa : pathMeta.toeic.title}
        titleJa={pathMeta.toeic.titleJa}
        blurb={locale === "ja" ? pathMeta.toeic.blurbJa : pathMeta.toeic.blurb}
        cta={t.paths.toeicCta}
        accent="primary"
      />
      <PathCard
        href="/japanese"
        title={
          locale === "ja" ? pathMeta.japanese.titleJa : pathMeta.japanese.title
        }
        titleJa={pathMeta.japanese.titleJa}
        blurb={
          locale === "ja" ? pathMeta.japanese.blurbJa : pathMeta.japanese.blurb
        }
        cta={t.paths.japaneseCta}
        accent="coral"
      />
    </div>
  );
}
