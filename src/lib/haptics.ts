export function haptic(kind: "ok" | "bad" | "tap" = "tap"): void {
  if (typeof navigator === "undefined" || typeof navigator.vibrate !== "function") {
    return;
  }
  switch (kind) {
    case "ok":
      navigator.vibrate(14);
      return;
    case "bad":
      navigator.vibrate([18, 40, 18]);
      return;
    case "tap":
      navigator.vibrate(8);
      return;
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}
