/** Rough TOEIC-style band hint from percent correct on a short practice set. */
export function practicePercentToBandHint(percent: number): {
  label: string;
  labelJa: string;
  targetNote: string;
} {
  if (percent >= 90) {
    return {
      label: "On track for 860 to 990",
      labelJa: "860〜990点帯のペース",
      targetNote: "Elite accuracy. Keep timing pressure high.",
    };
  }
  if (percent >= 80) {
    return {
      label: "On track for 800 to 855",
      labelJa: "800〜855点帯のペース",
      targetNote: "Solid 800+ trajectory. Tighten Part 5 and 6 traps.",
    };
  }
  if (percent >= 65) {
    return {
      label: "On track for 700 to 795",
      labelJa: "700〜795点帯のペース",
      targetNote: "Close to 800. Drill grammar collocations daily.",
    };
  }
  return {
    label: "Build toward 600 to 695",
    labelJa: "600〜695点帯の基礎固め",
    targetNote: "Focus on high-frequency Part 5 patterns first.",
  };
}
