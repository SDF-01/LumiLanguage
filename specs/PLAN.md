# Plan — LumiLanguage enhancement wave

Dual-path depth upgrade: TTS reliability, landing polish, thicker TOEIC/Japanese lessons, real Words of the Day glosses.

1. ✅ **TTS single female voice** — Stop double playback; always Lumi (Tsukuyomi); slower classroom rate.
   - Output: `src/lib/tts.ts`, `src/lib/tts-voices.ts`, `src/components/learning/audio-button.tsx`
2. ✅ **Landing hero polish** — Brand-first full-bleed atmosphere within locked Tiffany design system.
   - Output: `src/app/page.tsx`, `src/lib/i18n/dictionaries.ts`
3. ✅ **Lesson UX fixes** — Unit-specific checkpoint copy; larger timed quiz (12 items / 180s).
   - Output: `src/components/learning/unit-player.tsx`, `src/components/learning/exam-player.tsx`
4. ✅ **TOEIC content depth** — ~2x exercises per unit; real daily-word meanings.
   - Output: `src/content/toeic/*`, `scripts/word-pools/toeic-meanings.mjs`, regenerated `toeic.json`
5. ✅ **Japanese content depth** — Dakuten/yōon + extra kanji units wired into catalog.
   - Output: `src/content/japanese/hiragana-dakuten.ts`, `hiragana-youon.ts`, `katakana-dakuten.ts`, `kanji-nature.ts`, `kanji-numbers-time.ts`, `catalog.ts`
6. ✅ **Words of the Day regenerate** — Rebuild JSON with glosses.
   - Output: `src/content/words-of-the-day/data/*.json`
7. 🔄 **Ship** — Build, commit, push to `SDF-01/LumiLanguage` for Vercel.
