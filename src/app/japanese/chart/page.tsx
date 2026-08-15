"use client";

import { AlphabetDojo } from "@/components/japanese/alphabet-dojo";
import { SoftPanel } from "@/components/brand/soft-panel";
import { useLocale } from "@/lib/i18n/locale-context";

export default function ChartPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-4">
      <SoftPanel className="flex flex-col gap-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
          {t.japanese.nav.chart}
        </p>
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {t.japanese.chartTitle}
        </h1>
        <p className="text-sm text-muted-foreground">{t.japanese.chartSubtitle}</p>
      </SoftPanel>
      <AlphabetDojo />
    </div>
  );
}
