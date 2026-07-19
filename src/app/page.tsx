"use client";

import Link from "next/link";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { useLocale } from "@/lib/i18n/locale-context";

export default function HomePage() {
  const { t, locale } = useLocale();

  return (
    <section className="relative flex min-h-[calc(100dvh-3rem-env(safe-area-inset-top))] flex-1 flex-col overflow-hidden">
      {/* Full-bleed atmospheric wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,#dff4f8_0%,#eaf7fb_45%,#f4fbfd_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent_0%,rgba(64,200,200,0.14)_55%,rgba(184,228,240,0.35)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 size-56 rounded-[42%] bg-[#b8e4f0] blob-drift opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-36 size-48 rounded-[48%] bg-[#9fdce8] blob-drift opacity-50"
        style={{ animationDelay: "1.4s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[18%] size-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#fff8_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center gap-5 px-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-3 text-center">
        <div className="pop-in flex flex-col items-center gap-3">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 scale-125 rounded-full bg-[#40c8c8]/15 blur-2xl"
            />
            <LumiMascot mood="cheer" size={176} className="relative" />
          </div>

          <p className="font-display text-xs font-semibold tracking-[0.2em] text-[var(--brand-coral)] uppercase">
            {t.brandTagline}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-none tracking-wide text-[var(--brand-primary-deep)] sm:text-6xl">
            {brand.name}
          </h1>
          <p className="max-w-sm text-base leading-snug text-[#3d4d5c] sm:text-lg">
            {locale === "ja"
              ? "TOEIC 800点と日本語ゼロからの道を、ひとつで。"
              : "One playful path for TOEIC 800+ and Japanese from zero."}
          </p>
        </div>

        <div className="flex w-full flex-col gap-2.5 pt-1">
          <Button
            asChild
            className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
          >
            <Link href="/paths">{t.home.startLearning}</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="pressable min-h-12 w-full rounded-2xl border-2 border-[var(--brand-border)] bg-white/90 text-sm font-bold text-[var(--brand-primary-deep)] backdrop-blur-sm"
          >
            <Link href="/toeic/exam">{t.home.quickQuiz}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 pt-1 text-[11px] font-bold tracking-wide text-[var(--brand-primary-deep)]/70 uppercase">
          <span>TOEIC L&R</span>
          <span className="size-1 rounded-full bg-[var(--brand-coral)]" />
          <span>{locale === "ja" ? "日本語クエスト" : "Japanese Quest"}</span>
        </div>
      </div>
    </section>
  );
}
