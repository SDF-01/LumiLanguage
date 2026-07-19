import { cn } from "@/lib/utils";

/** Soft full-bleed scenic wash used behind path / chooser screens. */
export function Atmosphere({
  tone = "mist",
  className,
}: {
  tone?: "mist" | "coral" | "sun";
  className?: string;
}) {
  const wash =
    tone === "coral"
      ? "from-[#fff4ef] via-[#eaf7fb] to-[#dff4f8]"
      : tone === "sun"
        ? "from-[#fff8e8] via-[#eaf7fb] to-[#dff4f8]"
        : "from-[#dff4f8] via-[#eaf7fb] to-[#f4fbfd]";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-b", wash)} />
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#2a9e9e22_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="absolute -left-24 top-8 size-64 rounded-[45%] bg-[#b8e4f0] blob-drift opacity-55" />
      <div
        className="absolute -right-20 top-40 size-56 rounded-[48%] bg-[#9fdce8] blob-drift opacity-45"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="absolute bottom-[-10%] left-1/2 size-[120%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(circle_at_50%_0%,rgba(64,200,200,0.22),transparent_55%)]"
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#eaf7fb] to-transparent" />
    </div>
  );
}
