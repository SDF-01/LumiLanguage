import Link from "next/link";
import { SoftPanel } from "@/components/brand/soft-panel";
import { LumiMascot } from "@/components/brand/lumi-mascot";
import { Button } from "@/components/ui/button";

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

  return (
    <SoftPanel accent={panelAccent} className="pop-in flex flex-col gap-3 !p-4">
      <div className="flex items-start gap-2.5">
        <LumiMascot
          size={56}
          mood={accent === "coral" ? "think" : "cheer"}
          className="shrink-0"
        />
        <div className="flex flex-col gap-0.5 pt-0.5">
          <h2 className="font-display text-xl font-semibold leading-tight text-[var(--brand-ink)]">
            {title}
          </h2>
          <p className="text-xs font-semibold text-muted-foreground">{titleJa}</p>
        </div>
      </div>
      <p className="text-sm leading-snug text-[#3d4d5c]">{blurb}</p>
      <Button
        asChild
        className="pressable soft-shadow min-h-12 w-full rounded-2xl border-0 bg-[var(--brand-primary)] text-sm font-bold text-white hover:bg-[var(--brand-primary-deep)]"
      >
        <Link href={href}>{cta}</Link>
      </Button>
    </SoftPanel>
  );
}
