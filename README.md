# Lumi

Friendly, mobile-first language adventure with two paths — learn with Lumi the owl.

1. **TOEIC 800+** — for Japanese learners (Listening/Reading criteria, EN→JP explainers, practice exam)
2. **Japanese Quest** — speak and read from zero: mic coaching, stroke writing, furigana stories, 五十音図, and everyday life lines (Android PWA)

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Locked design: Fredoka + Nunito + Tiffany/baby blue (`specs/design-system.md`)
- Web Speech API TTS (`src/lib/tts.ts`)
- Local progress (XP / streak) via `localStorage`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use phone width in DevTools for the intended layout.

## Android app (direct APK)

LUMI ships as a sideloadable Android package (`com.lumi.japanese`).

1. On your phone, open `/get-app` and tap **Download LUMI.apk**, or grab `public/downloads/lumi-japanese.apk`.
2. Allow the browser/Files app to install unknown apps.
3. Tap the APK → **Install** → open **LUMI**.

Rebuild the package after lesson changes:

```bash
# Needs JDK 17+ and Android SDK (ANDROID_HOME)
npm run android:apk
```

That exports the Next.js app, wraps it with Capacitor, and writes a signed APK to `public/downloads/lumi-japanese.apk`. The sideload keystore lives in `android/keystore/` — replace it before a Play Store upload.

## Project docs

- `specs/PLAN.md` — execution plan
- `specs/design-system.md` — locked fonts, colors, mascot
- `specs/toeic_learning_use_case_spec.md` — use case
- `specs/curriculum-*.md` — curriculum notes
- `specs/tts-research.md` — TTS options
- `manifests/agent-pack.json` — installed Agent Dev Ops pack

## Brand

- Name & tagline: `src/lib/brand.ts`
- Owl mascot: `src/components/brand/lumi-mascot.tsx`
