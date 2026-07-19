import { cn } from "@/lib/utils";

export function SoftPanel({
  children,
  className,
  accent = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "primary" | "jade" | "coral" | "sun";
}) {
  const resolved = accent === "jade" ? "primary" : accent;
  const tone =
    resolved === "coral"
      ? "border-[#ffd0c2] soft-shadow-coral"
      : resolved === "sun"
        ? "border-[#ffe3a1] shadow-[0_5px_0_#f0c14b66,0_12px_28px_#ffc85733]"
        : "border-[var(--brand-border)] soft-shadow";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border-2 panel-shine p-5",
        tone,
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/80 to-transparent"
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

/** @deprecated Use SoftPanel */
export const GlowPanel = SoftPanel;
