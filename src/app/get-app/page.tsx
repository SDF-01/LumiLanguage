"use client";

import Link from "next/link";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { SoftPanel } from "@/components/brand/soft-panel";
import { InstallBanner } from "@/components/japanese/install-banner";
import { Button } from "@/components/ui/button";
import { APK_DOWNLOAD_HREF } from "@/lib/android";
import { useNativeApp } from "@/lib/client-store";
import { useLocale } from "@/lib/i18n/locale-context";

export default function GetAppPage() {
  const { t } = useLocale();
  const nativeApp = useNativeApp();
  const steps = [
    t.getApp.step1,
    t.getApp.step2,
    t.getApp.step3,
    t.getApp.step4,
  ];

  if (nativeApp) {
    return (
      <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <SoftPanel className="flex flex-col items-center gap-3 text-center">
          <LumiMascot size={120} mood="cheer" />
          <h1 className="font-display text-3xl font-semibold text-[var(--brand-primary-deep)]">
            {t.getApp.alreadyTitle}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t.getApp.alreadyBody}
          </p>
          <Button
            asChild
            className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white"
          >
            <Link href="/japanese">{t.home.speakReadCta}</Link>
          </Button>
        </SoftPanel>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
      <SoftPanel className="flex flex-col items-center gap-3 text-center">
        <LumiMascot size={120} mood="cheer" />
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-coral)]">
          Android
        </p>
        <h1 className="font-display text-3xl font-semibold text-[var(--brand-primary-deep)]">
          {t.getApp.title}
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t.getApp.subtitle}
        </p>
        <Button
          asChild
          className="pressable soft-shadow min-h-16 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
        >
          <a href={APK_DOWNLOAD_HREF} download="lumi-japanese.apk">
            {t.getApp.downloadApk}
          </a>
        </Button>
        <p className="text-xs font-bold text-[var(--brand-primary-deep)]">
          {t.getApp.fileLabel}
        </p>
      </SoftPanel>

      <SoftPanel className="flex flex-col gap-3">
        <h2 className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
          {t.getApp.stepsTitle}
        </h2>
        <ol className="flex flex-col gap-2">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 rounded-2xl bg-[var(--brand-mist)] px-3 py-3 text-sm font-medium"
            >
              <span className="font-display text-lg font-semibold text-[var(--brand-coral)]">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </SoftPanel>

      <SoftPanel className="flex flex-col gap-2">
        <h2 className="font-display text-lg font-semibold text-[var(--brand-primary-deep)]">
          {t.getApp.pwaTitle}
        </h2>
        <p className="text-sm text-muted-foreground">{t.getApp.pwaBody}</p>
        <InstallBanner alwaysShow />
        <p className="text-xs text-muted-foreground">{t.getApp.note}</p>
      </SoftPanel>

      <Button
        asChild
        variant="secondary"
        className="min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-white font-bold"
      >
        <Link href="/japanese">{t.home.speakReadCta}</Link>
      </Button>
    </div>
  );
}
