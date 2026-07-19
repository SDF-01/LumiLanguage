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
        ? "border-[#ffe3a1]"
        : "border-[var(--brand-border)] soft-shadow";

  return (
    <div
      className={cn(
        "relative rounded-3xl border-2 bg-white p-5",
        tone,
        className,
      )}
    >
      {children}
    </div>
  );
}

/** @deprecated Use SoftPanel */
export const GlowPanel = SoftPanel;
