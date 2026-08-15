"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n/locale-context";
import { cn } from "@/lib/utils";

function hideOn(pathname: string): boolean {
  return (
    pathname.includes("/unit/") ||
    pathname.includes("/story/") ||
    pathname.includes("/dialogue/")
  );
}

const tabs = [
  { href: "/japanese", key: "learn" as const },
  { href: "/japanese/speak", key: "speak" as const },
  { href: "/japanese/read", key: "read" as const },
  { href: "/japanese/review", key: "review" as const },
  { href: "/japanese/chart", key: "chart" as const },
];

export function JapaneseShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const immersive = hideOn(pathname);
  return (
    <div
      className={
        immersive
          ? "flex flex-1 flex-col"
          : "flex flex-1 flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))]"
      }
    >
      {children}
      <JapaneseBottomNav />
    </div>
  );
}

export function JapaneseBottomNav() {
  const pathname = usePathname();
  const { t } = useLocale();
  if (hideOn(pathname)) return null;

  return (
    <nav
      aria-label="Japanese labs"
      className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-[var(--brand-border)] bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
    >
      <div className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-1">
        {tabs.map((tab) => {
          const active =
            tab.href === "/japanese"
              ? pathname === "/japanese"
              : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-bold uppercase tracking-wide",
                active
                  ? "text-[var(--brand-primary-deep)]"
                  : "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  active ? "bg-[var(--brand-coral)]" : "bg-transparent",
                )}
              />
              {t.japanese.nav[tab.key]}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
