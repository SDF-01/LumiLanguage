"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { brand } from "@/lib/brand";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/types";
import { loadProgress } from "@/lib/progress";
import type { ProgressState } from "@/lib/types";
import { cn } from "@/lib/utils";

function StreakIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="shrink-0">
      <path
        d="M12 2c1.5 3.5-.5 5.5-2 7.5C8 12 7 14 8.5 17c2.5-1.5 4-3 5.5-3-1 3.5.5 5.5 2 7.5 3-4.5 3-9.5-1-13.5C13.5 6.5 12.5 4 12 2z"
        fill="#ff7a59"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="shrink-0">
      <path
        d="M12 2l2.9 6.4 7 .8-5.2 4.7 1.4 6.9L12 17.8 5.9 20.8l1.4-6.9L2.1 9.2l7-.8L12 2z"
        fill="#ffc857"
      />
    </svg>
  );
}

function isLearningRoute(pathname: string): boolean {
  if (pathname === "/toeic" || pathname === "/japanese") return true;
  return (
    pathname.startsWith("/toeic/") ||
    pathname.startsWith("/japanese/")
  );
}

function LanguageSelector() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div
      className="inline-flex rounded-xl border-2 border-[var(--brand-border)] bg-white/90 p-0.5 shadow-sm"
      role="group"
      aria-label={t.nav.language}
    >
      {(["en", "ja"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "min-h-8 min-w-9 rounded-lg px-2 text-xs font-bold uppercase transition",
            locale === code
              ? "bg-[var(--brand-primary)] text-white soft-shadow !shadow-[0_2px_0_#2a9e9e55]"
              : "text-[var(--brand-primary-deep)] hover:bg-[var(--brand-tint)]",
          )}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const learning = isLearningRoute(pathname);
  const { t } = useLocale();
  const [progress, setProgress] = useState<ProgressState | null>(null);

  useEffect(() => {
    if (!learning) return;
    const refresh = () => setProgress(loadProgress());
    refresh();
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [learning]);

  const xp = progress?.xp ?? 0;
  const streak = progress?.streak ?? 0;

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--brand-border)]/80 bg-[color-mix(in_oklab,white_82%,#dff4f8)]/90 backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <div className="mx-auto flex min-h-12 max-w-lg items-center justify-between gap-2 px-3 py-1.5">
        <Link
          href="/"
          className="flex min-h-9 items-center gap-1.5 rounded-xl px-1 transition hover:bg-white/50"
        >
          <LumiMascot size={30} mood="happy" className="!animate-none" />
          <span className="font-display text-base font-semibold tracking-wide text-[var(--brand-primary-deep)]">
            {brand.name}
          </span>
        </Link>

        <div className="flex items-center gap-1.5">
          {learning ? (
            <div className="flex items-center gap-1 text-xs font-bold">
              <span className="inline-flex min-h-8 items-center gap-1 rounded-xl border border-[#ffe8a3] bg-gradient-to-b from-[#fff9e0] to-[#fff1b8] px-2 text-[#9a6700]">
                <StarIcon />
                {xp}
              </span>
              <span className="inline-flex min-h-8 items-center gap-1 rounded-xl border border-[#ffd0c2] bg-gradient-to-b from-[#fff4ef] to-[#ffe4da] px-2 text-[#c2410c]">
                <StreakIcon />
                {streak}
              </span>
            </div>
          ) : (
            <nav
              aria-label="Primary"
              className="flex items-center gap-0.5 text-xs font-bold text-[var(--brand-primary-deep)]"
            >
              <Link
                href="/toeic"
                className="inline-flex min-h-8 items-center rounded-lg px-2 hover:bg-white/70"
              >
                {t.nav.toeic}
              </Link>
              <Link
                href="/japanese"
                className="inline-flex min-h-8 items-center rounded-lg px-2 hover:bg-white/70"
              >
                {t.nav.japanese}
              </Link>
              <Link
                href="/paths"
                className="pressable inline-flex min-h-8 items-center rounded-xl bg-[var(--brand-primary)] px-2.5 text-white hover:bg-[var(--brand-primary-deep)]"
              >
                {t.nav.paths}
              </Link>
            </nav>
          )}
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
