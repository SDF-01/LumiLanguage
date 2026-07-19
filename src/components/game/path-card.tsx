import Link from "next/link";
import { SoftPanel } from "@/components/brand/soft-panel";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PathCard({
  href,
  title,
  titleJa,
  blurb,
  cta,
  accent,
}: {
  href: string;
  title: string;
  titleJa: string;
  blurb: string;
  cta: string;
  accent: "jade" | "coral" | "primary";
}) {
  const panelAccent = accent === "coral" ? "coral" : "primary";
  const isCoral = accent === "coral";

  return (
    <SoftPanel
      accent={panelAccent}
      className="pop-in flex flex-col gap-3.5 !p-0 overflow-hidden"
    >
      <div
        className={cn(
          "relative px-4 pb-3 pt-4",
          isCoral
            ? "bg-gradient-to-br from-[#fff1eb] via-white to-[#ffe8e0]"
            : "bg-gradient-to-br from-[#e8fafb] via-white to-[#dff4f8]",
        )}
      >
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute -right-8 -top-8 size-28 rounded-full opacity-50",
            isCoral ? "bg-[#ffd0c2]" : "bg-[#b8e4f0]",
          )}
        />
        <div className="relative flex items-start gap-3">
          <LumiMascot
            size={64}
            mood={isCoral ? "think" : "cheer"}
            className="shrink-0 float-soft"
          />
          <div className="flex min-w-0 flex-col gap-0.5 pt-1">
            <p
              className={cn(
                "text-[10px] font-bold tracking-[0.16em] uppercase",
                isCoral ? "text-[var(--brand-coral)]" : "text-[var(--brand-primary-deep)]",
              )}
            >
              {isCoral ? "Japanese Quest" : "TOEIC 800+"}
            </p>
            <h2 className="font-display text-xl font-semibold leading-tight text-[var(--brand-ink)]">
              {title}
            </h2>
            <p className="text-xs font-semibold text-muted-foreground">
              {titleJa}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        <p className="text-sm leading-snug text-[#3d4d5c]">{blurb}</p>
        <Button
          asChild
          className={cn(
            "pressable soft-shadow min-h-12 w-full rounded-2xl border-0 text-sm font-bold text-white",
            isCoral
              ? "bg-[var(--brand-coral)] hover:bg-[#e86545]"
              : "bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-deep)]",
          )}
        >
          <Link href={href}>{cta}</Link>
        </Button>
      </div>
    </SoftPanel>
  );
}
