"use client";

import { KanaChartView } from "@/components/japanese/kana-chart-view";
import { SoftPanel } from "@/components/brand/soft-panel";
import { useLocale } from "@/lib/i18n/locale-context";

export default function ChartPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-4">
      <SoftPanel className="flex flex-col gap-1">
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {t.japanese.chartTitle}
        </h1>
        <p className="text-sm text-muted-foreground">{t.japanese.chartSubtitle}</p>
      </SoftPanel>
      <KanaChartView />
    </div>
  );
}
