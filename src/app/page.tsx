"use client";

import Link from "next/link";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { useLocale } from "@/lib/i18n/locale-context";

export default function HomePage() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-[calc(100dvh-3rem-env(safe-area-inset-top))] flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-6 size-44 rounded-[40%] bg-[#b8e4f0] blob-drift opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-28 size-40 rounded-[45%] bg-[#c5eef5] blob-drift opacity-80"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center gap-4 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-2 text-center">
        <div className="pop-in flex flex-col items-center gap-2">
          <LumiMascot mood="cheer" size={160} />
          <p className="font-display text-xs font-semibold tracking-[0.18em] text-[var(--brand-coral)] uppercase">
            {t.brandTagline}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-none tracking-wide text-[var(--brand-primary-deep)] sm:text-5xl">
            {brand.name}
          </h1>
          <div className="flex max-w-sm flex-col gap-2 text-base leading-snug text-[#3d4d5c]">
            <p>{t.home.toeicLine}</p>
            <p>{t.home.japaneseLine}</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-2 pt-1">
          <Button
            asChild
            className="pressable soft-shadow min-h-12 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
          >
            <Link href="/paths">{t.home.startLearning}</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="pressable min-h-12 w-full rounded-2xl border-2 border-[var(--brand-border)] bg-white text-sm font-bold text-[var(--brand-primary-deep)]"
          >
            <Link href="/toeic/exam">{t.home.quickQuiz}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
