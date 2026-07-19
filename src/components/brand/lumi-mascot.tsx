import { cn } from "@/lib/utils";

type Mood = "happy" | "cheer" | "think" | "celebrate";

const moods: Record<
  Mood,
  { beakOpen: boolean; browTilt: number; sparkle: boolean; wingUp: boolean }
> = {
  happy: { beakOpen: false, browTilt: 0, sparkle: false, wingUp: false },
  cheer: { beakOpen: true, browTilt: -2, sparkle: true, wingUp: true },
  think: { beakOpen: false, browTilt: 4, sparkle: false, wingUp: false },
  celebrate: { beakOpen: true, browTilt: -3, sparkle: true, wingUp: true },
};

/** Lumi — cute tiffany/baby-blue owl mascot (locked design system). */
export function LumiMascot({
  mood = "happy",
  className,
  size = 180,
}: {
  mood?: Mood;
  className?: string;
  size?: number;
}) {
  const m = moods[mood];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mascot-bounce select-none", className)}
      role="img"
      aria-label="Lumi the owl, your language buddy"
    >
      {/* ground shadow */}
      <ellipse cx="100" cy="178" rx="46" ry="9" fill="#2a9e9e" opacity="0.16" />

      {/* body */}
      <ellipse cx="100" cy="118" rx="54" ry="58" fill="#40c8c8" />
      {/* belly */}
      <ellipse cx="100" cy="128" rx="38" ry="40" fill="#d7f3f8" />
      {/* belly speckles */}
      <circle cx="88" cy="120" r="3.5" fill="#b8e4f0" />
      <circle cx="112" cy="124" r="3" fill="#b8e4f0" />
      <circle cx="98" cy="138" r="2.5" fill="#b8e4f0" />

      {/* left wing */}
      <ellipse
        cx="48"
        cy={m.wingUp ? 108 : 122}
        rx="16"
        ry="28"
        fill="#35b4b4"
        transform={m.wingUp ? "rotate(-18 48 108)" : "rotate(-8 48 122)"}
      />
      {/* right wing */}
      <ellipse
        cx="152"
        cy={m.wingUp ? 108 : 122}
        rx="16"
        ry="28"
        fill="#35b4b4"
        transform={m.wingUp ? "rotate(18 152 108)" : "rotate(8 152 122)"}
      />

      {/* head */}
      <ellipse cx="100" cy="78" rx="48" ry="44" fill="#40c8c8" />

      {/* ear tufts */}
      <path d="M62 48 L70 22 L84 52 Z" fill="#2a9e9e" />
      <path d="M138 48 L130 22 L116 52 Z" fill="#2a9e9e" />
      <path d="M66 48 L72 30 L82 50 Z" fill="#5fdede" />
      <path d="M134 48 L128 30 L118 50 Z" fill="#5fdede" />

      {/* face disc */}
      <ellipse cx="100" cy="84" rx="40" ry="34" fill="#eaf7fb" />

      {/* eye rings */}
      <circle cx="80" cy="80" r="16" fill="#ffffff" />
      <circle cx="120" cy="80" r="16" fill="#ffffff" />
      {/* pupils */}
      <circle cx="82" cy="82" r="8" fill="#1f2a37" />
      <circle cx="122" cy="82" r="8" fill="#1f2a37" />
      {/* highlights */}
      <circle cx="85" cy="78" r="2.8" fill="#ffffff" />
      <circle cx="125" cy="78" r="2.8" fill="#ffffff" />

      {/* brows */}
      <path
        d="M66 64 Q80 58 92 64"
        stroke="#1a6b75"
        strokeWidth="3.5"
        strokeLinecap="round"
        transform={`rotate(${m.browTilt} 80 64)`}
      />
      <path
        d="M108 64 Q120 58 134 64"
        stroke="#1a6b75"
        strokeWidth="3.5"
        strokeLinecap="round"
        transform={`rotate(${-m.browTilt} 120 64)`}
      />

      {/* beak */}
      {m.beakOpen ? (
        <path d="M92 96 L100 112 L108 96 Z" fill="#ff7a59" />
      ) : (
        <path d="M92 94 L100 106 L108 94 Z" fill="#ff7a59" />
      )}

      {/* feet */}
      <path
        d="M78 168 Q82 158 88 168 M84 168 Q88 156 94 168"
        stroke="#ffc857"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M106 168 Q110 158 116 168 M112 168 Q116 156 122 168"
        stroke="#ffc857"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {m.sparkle && (
        <>
          <path
            d="M156 40 L159 48 L167 51 L159 54 L156 62 L153 54 L145 51 L153 48 Z"
            fill="#ffc857"
          />
          <path
            d="M36 52 L39 58 L45 60 L39 62 L36 68 L33 62 L27 60 L33 58 Z"
            fill="#7ec8f0"
          />
        </>
      )}
    </svg>
  );
}
