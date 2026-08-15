export function PitchBar({
  pattern,
  label,
}: {
  pattern?: string;
  label?: string;
}) {
  if (!pattern) return null;
  const marks = Array.from(pattern.toUpperCase()).filter(
    (ch) => ch === "H" || ch === "L",
  );
  if (marks.length === 0) return null;

  return (
    <div className="flex flex-col gap-1">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
        {label ?? "Pitch"}
      </p>
      <div className="flex items-end gap-1.5" aria-label={`Pitch ${pattern}`}>
        {marks.map((mark, index) => {
          const high = mark === "H";
          return (
            <span
              key={`${mark}-${index}`}
              className={`size-2.5 rounded-full ${
                high
                  ? "mb-3 bg-[var(--brand-primary)]"
                  : "mb-0 bg-[var(--brand-coral)]"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
