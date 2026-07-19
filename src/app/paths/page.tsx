"use client";

import { Atmosphere } from "@/components/brand/atmosphere";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { PathCard } from "@/components/game/path-card";
import { pathMeta } from "@/content/catalog";
import { useLocale } from "@/lib/i18n/locale-context";

export default function PathsPage() {
  const { locale, t } = useLocale();

  return (
    <div className="relative flex-1 overflow-hidden">
      <Atmosphere tone="mist" />
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
        <div className="rise-in flex items-center gap-3">
          <LumiMascot size={72} mood="cheer" className="float-soft shrink-0" />
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-bold tracking-[0.18em] text-[var(--brand-coral)] uppercase">
              Choose your path
            </p>
            <h1 className="font-display text-2xl font-semibold leading-tight text-[var(--brand-primary-deep)]">
              {t.paths.title}
            </h1>
            <p className="text-sm text-muted-foreground">{t.paths.subtitle}</p>
          </div>
        </div>

        <div className="rise-in stagger-1">
          <PathCard
            href="/toeic"
            title={locale === "ja" ? pathMeta.toeic.titleJa : pathMeta.toeic.title}
            titleJa={pathMeta.toeic.titleJa}
            blurb={locale === "ja" ? pathMeta.toeic.blurbJa : pathMeta.toeic.blurb}
            cta={t.paths.toeicCta}
            accent="primary"
          />
        </div>
        <div className="rise-in stagger-2">
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
      </div>
    </div>
  );
}
