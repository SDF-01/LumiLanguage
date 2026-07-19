import type { ReactNode } from "react";
import Link from "next/link";
import { Atmosphere } from "@/components/brand/atmosphere";
import { SoftPanel } from "@/components/brand/soft-panel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TrailNode = {
  id: string;
  label: string;
  locked?: boolean;
  href?: string;
};

export type TrailSection = {
  title: string;
  nodes: TrailNode[];
};

export function PathTrail({
  title,
  subtitle,
  sections,
  primaryCta,
  secondaryCta,
  readyLabel = "Tap to play",
  lockedLabel = "Locked",
  spotlight,
  tone = "mist",
}: {
  title: string;
  subtitle: string;
  sections: TrailSection[];
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  readyLabel?: string;
  lockedLabel?: string;
  spotlight?: ReactNode;
  tone?: "mist" | "coral" | "sun";
}) {
  return (
    <div className="relative flex-1 overflow-hidden">
      <Atmosphere tone={tone} />
      <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col gap-3.5 px-4 py-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
        <SoftPanel className="pop-in flex flex-col gap-1.5 !p-4">
          <p className="text-[10px] font-bold tracking-[0.18em] text-[var(--brand-coral)] uppercase">
            Quest map
          </p>
          <h1 className="font-display text-2xl font-semibold leading-tight text-[var(--brand-primary-deep)]">
            {title}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </SoftPanel>

        <Button
          asChild
          className="pressable soft-shadow rise-in min-h-12 rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
        >
          <Link href={primaryCta.href}>{primaryCta.label}</Link>
        </Button>
        {secondaryCta && (
          <Button
            asChild
            variant="secondary"
            className="pressable rise-in stagger-1 min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-white/90 font-bold text-[var(--brand-primary-deep)] backdrop-blur-sm"
          >
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        )}

        {spotlight}

        {sections.map((section, sectionIndex) => (
          <div
            key={section.title}
            className="rise-in flex flex-col gap-2.5 pt-1"
            style={{ animationDelay: `${0.08 + sectionIndex * 0.04}s` }}
          >
            <div className="flex items-center gap-2">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--brand-coral)]/50 to-transparent" />
              <h2 className="font-display text-xs font-semibold tracking-[0.16em] text-[var(--brand-coral)] uppercase">
                {section.title}
              </h2>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--brand-coral)]/50 to-transparent" />
            </div>

            <div className="relative flex flex-col pl-0.5">
              <div
                aria-hidden
                className="trail-pulse absolute bottom-4 left-[1.95rem] top-4 w-[3px] rounded-full bg-gradient-to-b from-[var(--brand-primary)] via-[var(--brand-baby)] to-[var(--brand-coral)]/70"
              />
              {section.nodes.map((node, i) => {
                const body = (
                  <>
                    <div
                      className={cn(
                        "relative flex size-[3.15rem] shrink-0 items-center justify-center rounded-full border-[3px] text-[11px] font-bold",
                        node.locked
                          ? "border-[#d5e4ea] bg-[#eef5f7] text-[#8aa0aa]"
                          : "border-[var(--brand-primary)] bg-white text-[var(--brand-primary-deep)] soft-shadow",
                      )}
                    >
                      {!node.locked && (
                        <span
                          aria-hidden
                          className="absolute inset-[-5px] rounded-full border border-[var(--brand-primary)]/25"
                        />
                      )}
                      {node.id}
                    </div>
                    <div
                      className={cn(
                        "min-h-14 flex-1 rounded-2xl border-2 px-3.5 py-2.5 transition",
                        node.locked
                          ? "border-[#e2ebe6] bg-white/60 text-muted-foreground"
                          : "border-[var(--brand-border)] bg-white/95 panel-shine hover:border-[var(--brand-primary)]/60",
                      )}
                    >
                      <p className="text-sm font-bold leading-snug text-[var(--brand-ink)]">
                        {node.label}
                      </p>
                      <p
                        className={cn(
                          "mt-0.5 text-xs font-bold",
                          node.locked
                            ? "text-muted-foreground"
                            : "text-[var(--brand-primary-deep)]",
                        )}
                      >
                        {node.locked ? lockedLabel : readyLabel}
                      </p>
                    </div>
                  </>
                );

                return (
                  <div
                    key={node.id}
                    className={cn(
                      "relative z-10 flex items-center gap-3 py-1.5",
                      i % 2 === 0 ? "translate-x-0" : "translate-x-5",
                    )}
                  >
                    {!node.locked && node.href ? (
                      <Link
                        href={node.href}
                        className="pressable flex w-full items-center gap-3 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
                      >
                        {body}
                      </Link>
                    ) : (
                      body
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
