import type { ReactNode } from "react";
import Link from "next/link";
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
  spotlight,
}: {
  title: string;
  subtitle: string;
  sections: TrailSection[];
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  readyLabel?: string;
  spotlight?: ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-3 px-4 py-4 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
      <SoftPanel className="pop-in flex flex-col gap-1.5 !p-4">
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {title}
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
      </SoftPanel>

      <Button
        asChild
        className="pressable soft-shadow min-h-12 rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
      >
        <Link href={primaryCta.href}>{primaryCta.label}</Link>
      </Button>
      {secondaryCta && (
        <Button
          asChild
          variant="secondary"
          className="min-h-12 rounded-2xl border-2 border-[var(--brand-border)] bg-white font-bold text-[var(--brand-primary-deep)]"
        >
          <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
        </Button>
      )}

      {spotlight}

      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-2 pt-1">
          <h2 className="font-display text-sm font-semibold tracking-wide text-[var(--brand-coral)]">
            {section.title}
          </h2>
          <div className="relative flex flex-col pl-1">
            <div
              aria-hidden
              className="absolute bottom-3 left-[1.85rem] top-3 w-1 rounded-full bg-[var(--brand-border)]"
            />
            {section.nodes.map((node, i) => {
              const body = (
                <>
                  <div
                    className={cn(
                      "flex size-12 shrink-0 items-center justify-center rounded-xl border-2 text-xs font-bold",
                      node.locked
                        ? "border-[#d7e3dc] bg-[#eef3f0] text-[#8a9a92]"
                        : "border-[var(--brand-primary)] bg-white text-[var(--brand-primary-deep)] soft-shadow",
                    )}
                  >
                    {node.id}
                  </div>
                  <div
                    className={cn(
                      "min-h-12 flex-1 rounded-xl border-2 px-3 py-2",
                      node.locked
                        ? "border-[#e2ebe6] bg-white/70 text-muted-foreground"
                        : "border-[var(--brand-border)] bg-white",
                    )}
                  >
                    <p className="text-sm font-bold leading-snug">{node.label}</p>
                    <p className="text-xs font-semibold text-[var(--brand-primary-deep)]">
                      {node.locked ? "Coming soon" : readyLabel}
                    </p>
                  </div>
                </>
              );

              return (
                <div
                  key={node.id}
                  className={cn(
                    "relative z-10 flex items-center gap-3 py-1.5",
                    i % 2 === 0 ? "translate-x-0" : "translate-x-4",
                  )}
                >
                  {!node.locked && node.href ? (
                    <Link
                      href={node.href}
                      className="flex w-full items-center gap-3 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)]"
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
  );
}
