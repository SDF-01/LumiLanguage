# TTS Research Notes

## Selected for MVP

1. **Primary: Web Speech API (`speechSynthesis`)** — zero install, works in Chromium/Safari/Firefox, good enough for listening drills; unlock on first user gesture (required on iOS).
2. **Fallback:** silent mode + on-screen phonetic helper if synthesis unavailable.

## Strong GitHub / open options for later upgrade

| Library | Notes | Fit |
| --- | --- | --- |
| [hexgrad/kokoro](https://github.com/hexgrad/kokoro) | High-quality neural TTS; Apache-2.0 | Cloud/worker or heavier client |
| [rhasspy/piper](https://github.com/rhasspy/piper) | Fast local ONNX voices | Offline desktop/PWA with WASM port |
| [hexgrad/kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx) | ONNX runtime path | Better for bundling |
| [espnet/espnet](https://github.com/espnet/espnet) | Research-grade multi-lang | Heavy; server-side |
| [coqui-ai/TTS](https://github.com/coqui-ai/TTS) | Mature Python TTS | Server-side generation |

## Mobile constraints

- Must call `speak()` after a tap/click (iOS audio unlock).
- Provide play / stop / replay controls ≥44px.
- Prefer English + Japanese system voices when available (`ja-JP`, `en-US`).
