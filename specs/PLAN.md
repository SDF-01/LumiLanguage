# Plan

Dual vertical-slice MVP: TOEIC path + Japanese path (one unit each), shared game shell, TTS, mobile-first.

1. ✅ **Project bootstrap** — Scaffold Next.js (App Router) + TypeScript + Tailwind + shadcn; mobile viewport meta, safe-area support, and touch-friendly defaults from day one. _(Skill: directory-management + shadcn)_
   - Output: `package.json`, `src/app/*`, `components.json`
2. ✅ **Install agent pack** — Copy curated agents/skills/rules/commands from `Agent Dev Ops` into `.claude/` / `.cursor/`.
   - Output: `manifests/agent-pack.json`, `.claude/`, `.cursor/rules/`, `.cursor/skills/`
3. ✅ **Use-case & curriculum specs** — Dual-path specs + TOEIC criteria + XP/progress + mobile UX. _(Skill: use-case-specification, adapted)_
   - Output: `specs/toeic_learning_use_case_spec.md`, `specs/curriculum-toeic.md`, `specs/curriculum-japanese.md`
4. ✅ **Retro game design system (mobile-first)** — Theme tokens, glow/bit motion, HUD/XP chrome.
   - Output: `src/app/globals.css`, `src/components/game/*`
5. ✅ **Landing / hero (responsive)** — Full-bleed hero + path chooser.
   - Output: `src/app/page.tsx`
6. ✅ **Core learning engine** — Shared lesson → exercise → explanation → checkpoint with local progress.
   - Output: `src/components/learning/unit-player.tsx`, `src/lib/progress.ts`
7. ✅ **TOEIC vertical slice** — Part 5 unit with EN→JP explanations.
   - Output: `src/content/toeic-part5-unit.ts`, `src/app/toeic/**`
8. ✅ **Japanese vertical slice** — Hiragana あ行 unit.
   - Output: `src/content/japanese-hiragana-unit.ts`, `src/app/japanese/**`
9. ✅ **TTS listening layer** — Web Speech API + research notes for Kokoro/Piper upgrade path.
   - Output: `src/lib/tts.ts`, `src/components/learning/audio-button.tsx`, `specs/tts-research.md`
10. ✅ **Mini practice exam** — Timed TOEIC-format R5 block + band hint results.
    - Output: `src/components/learning/exam-player.tsx`, `src/app/toeic/exam/page.tsx`
11. ✅ **Mobile verify & polish** — Phone/tablet breakpoints, safe areas, build verify, smoke test.
    - Output: production build OK; routes `/`, `/toeic`, `/japanese`, units, exam all HTTP 200
12. ✅ **Full curriculum content wave 1**
    - TOEIC Parts 1 to 7 live lessons
    - Japanese: あ/か/さ行, katakana ア行, greetings, particles
    - Hero copy cleaned (no em dashes)
    - Output: `src/content/toeic/*`, `src/content/japanese/*`, `src/content/catalog.ts`
