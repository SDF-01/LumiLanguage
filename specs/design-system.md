# Design System — LOCKED

This visual system is permanent unless the product owner explicitly requests a redesign.

## Fonts (do not change)

| Role | Font | CSS variable |
| --- | --- | --- |
| Display / headings | **Fredoka** | `--font-display` |
| Body UI | **Nunito** | `--font-body` |
| Japanese text | **Noto Sans JP** | `--font-jp` |

Utility: `.font-display` for Fredoka headings.

## Color schema — Tiffany / Baby Blue

| Token | Role | Hex |
| --- | --- | --- |
| `--brand-primary` | Primary CTA / Lumi body | `#40C8C8` (Tiffany) |
| `--brand-primary-deep` | Hover / emphasis text | `#2A9E9E` |
| `--brand-baby` | Soft surfaces / tints | `#B8E4F0` |
| `--brand-mist` | Page wash | `#EAF7FB` |
| `--brand-coral` | Warm accent (streaks, nose) | `#FF7A59` |
| `--brand-sun` | XP / celebration | `#FFC857` |
| `--brand-ink` | Body text | `#1F2A37` |

Legacy aliases `--brand-jade` / `--brand-jade-deep` map to the primary blues for compatibility.

## UI schema (do not change)

- Soft white panels (`SoftPanel`) with chunky bottom shadow (`.soft-shadow`)
- Pressable CTAs (`.pressable`) — large rounded-2xl buttons, min-h 56px
- Lumi mascot moods: happy / cheer / think / celebrate
- Light mode default; welcoming Duolingo-like tone
- Mobile-first, safe-area aware
- No dark CRT, no neon glow, no purple gradient themes

## Brand name & mascot

- **Name:** LUMI (all caps; `src/lib/brand.ts`)
- **Mascot:** Cute owl (`src/components/brand/lumi-mascot.tsx`), tiffany/baby blue
- **Locale:** EN / JP selector (`src/lib/i18n/*`), persists in localStorage
