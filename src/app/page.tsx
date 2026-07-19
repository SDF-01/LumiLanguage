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
      {/* Full-bleed scenic plane */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_90%_at_50%_-15%,#d8f4f8_0%,#eaf7fb_42%,#f7fcfd_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(#2a9e9e18_1.2px,transparent_1.2px)] [background-size:22px_22px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-0 size-72 rounded-[46%] bg-[#b8e4f0] blob-drift opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-28 size-64 rounded-[50%] bg-[#95d8e6] blob-drift opacity-55"
        style={{ animationDelay: "1.4s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,transparent_0%,rgba(64,200,200,0.16)_40%,rgba(184,228,240,0.55)_100%)]"
      />
      {/* Soft horizon hills */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-10%] bottom-0 h-40"
      >
        <svg
          viewBox="0 0 400 120"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80 C60 40 120 95 180 70 C240 45 300 90 400 55 L400 120 L0 120 Z"
            fill="rgba(64,200,200,0.22)"
          />
          <path
            d="M0 95 C80 70 140 105 210 85 C280 65 340 100 400 78 L400 120 L0 120 Z"
            fill="rgba(42,158,158,0.18)"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center gap-6 px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-4 text-center">
        <div className="rise-in flex flex-col items-center gap-3">
          <div className="relative float-soft">
            <div
              aria-hidden
              className="absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(64,200,200,0.35)_0%,transparent_68%)]"
            />
            <LumiMascot mood="cheer" size={188} className="relative" />
          </div>

          <p className="font-display text-[11px] font-semibold tracking-[0.22em] text-[var(--brand-coral)] uppercase">
            {t.brandTagline}
          </p>
          <h1 className="font-display text-5xl font-semibold leading-none tracking-wide text-[var(--brand-primary-deep)] sm:text-6xl">
            {brand.name}
          </h1>
          <p className="max-w-[20rem] text-base leading-snug text-[#3d4d5c] sm:text-lg">
            {locale === "ja"
              ? "TOEIC 800点と日本語ゼロからの道を、ひとつで。"
              : "One playful path for TOEIC 800+ and Japanese from zero."}
          </p>
        </div>

        <div className="rise-in stagger-2 flex w-full flex-col gap-2.5">
          <Button
            asChild
            className="pressable soft-shadow min-h-14 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
          >
            <Link href="/paths">{t.home.startLearning}</Link>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="pressable min-h-12 w-full rounded-2xl border-2 border-[var(--brand-border)] bg-white/85 text-sm font-bold text-[var(--brand-primary-deep)] backdrop-blur-sm"
          >
            <Link href="/toeic/exam">{t.home.quickQuiz}</Link>
          </Button>
        </div>

        <div className="rise-in stagger-3 flex items-center gap-3 text-[11px] font-bold tracking-[0.14em] text-[var(--brand-primary-deep)]/75 uppercase">
          <span>TOEIC L&R</span>
          <span className="size-1.5 rounded-full bg-[var(--brand-coral)]" />
          <span>{locale === "ja" ? "日本語クエスト" : "Japanese Quest"}</span>
        </div>
      </div>
    </section>
  );
}
