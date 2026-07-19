"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  getActiveTtsEngine,
  getTtsLoadState,
  listVoiceCharacters,
  onTtsLoadState,
  setPreferredVoice,
  speak,
  stopSpeech,
  type TtsLang,
  type VoiceCharacterId,
} from "@/lib/tts";

function SpeakerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M4 9v6h4l5 4V5L8 9H4zm11.5 3a3.5 3.5 0 00-1.5-2.9v5.8a3.5 3.5 0 001.5-2.9z"
        fill="currentColor"
      />
    </svg>
  );
}

export function AudioButton({
  text,
  lang = "en-US",
  label = "Listen",
  voice,
  showVoicePicker = true,
}: {
  text: string;
  lang?: TtsLang;
  label?: string;
  voice?: VoiceCharacterId;
  showVoicePicker?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadMessage, setLoadMessage] = useState<string | null>(null);
  const [engineNote, setEngineNote] = useState<string | null>(null);
  const [character, setCharacter] = useState<VoiceCharacterId>(
    voice ?? (lang.startsWith("ja") ? "lumi" : "announcer"),
  );
  const voices = listVoiceCharacters();

  useEffect(() => {
    return onTtsLoadState((state) => {
      if (state.status === "loading") {
        const pct = Math.round((state.progress || 0) * 100);
        setLoadMessage(
          pct > 0 ? `Loading voice ${pct}%` : state.message || "Loading voice…",
        );
      } else {
        setLoadMessage(null);
      }
    });
  }, []);

  useEffect(() => {
    if (voice) setCharacter(voice);
  }, [voice]);

  async function onPlay() {
    setError(null);
    setPreferredVoice(character);
    try {
      setPlaying(true);
      // Warm status for UX on first download
      const state = getTtsLoadState();
      if (state.status === "idle" || state.status === "error") {
        setLoadMessage("Preparing neural voice (first time may take a minute)…");
      }
      await speak(text, lang, 0.95, character);
      const engine = getActiveTtsEngine();
      setEngineNote(
        engine === "piper"
          ? "Playing neural voice (piper-plus)"
          : engine === "webspeech"
            ? "Fell back to system voice (sounds generic). Check network / try again."
            : null,
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not play audio");
    } finally {
      setPlaying(false);
      setLoadMessage(null);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {showVoicePicker && (
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-semibold text-muted-foreground">
            Voice character
          </p>
          <div className="flex flex-wrap gap-1.5">
            {voices.map((v) => {
              const active = character === v.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  title={v.blurb}
                  onClick={() => {
                    setCharacter(v.id);
                    setPreferredVoice(v.id);
                    setEngineNote(null);
                  }}
                  className={`rounded-xl border-2 px-2.5 py-1 text-xs font-bold transition ${
                    active
                      ? "border-[var(--brand-primary)] bg-[var(--brand-tint)] text-[var(--brand-primary-deep)]"
                      : "border-[var(--brand-border)] bg-white text-muted-foreground"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex gap-2">
        <Button
          type="button"
          className="pressable soft-shadow min-h-14 flex-1 rounded-2xl border-0 bg-[var(--brand-primary)] text-base font-bold text-white hover:bg-[var(--brand-primary-deep)]"
          onClick={() => void onPlay()}
          disabled={playing}
        >
          <span className="inline-flex items-center gap-2">
            <SpeakerIcon />
            {playing ? "Playing…" : label}
          </span>
        </Button>
        <Button
          type="button"
          variant="outline"
          className="min-h-14 min-w-14 rounded-2xl border-2 border-[var(--brand-border)] bg-white font-bold"
          onClick={() => {
            stopSpeech();
            setPlaying(false);
          }}
          aria-label="Stop audio"
        >
          Stop
        </Button>
      </div>

      {loadMessage && (
        <p className="text-xs font-medium text-[var(--brand-primary-deep)]">
          {loadMessage}
        </p>
      )}
      {error && (
        <p className="text-xs font-medium text-[#9f1239]">{error}</p>
      )}
      {engineNote && (
        <p className="text-xs font-medium text-[var(--brand-primary-deep)]">
          {engineNote}
        </p>
      )}
      <p className="text-[11px] leading-snug text-muted-foreground">
        Swap models in <code className="font-semibold">src/lib/tts-voices.ts</code>
        . Powered by{" "}
        <a
          className="font-semibold text-[var(--brand-primary-deep)] underline-offset-2 hover:underline"
          href="https://github.com/ayutaz/piper-plus"
          target="_blank"
          rel="noreferrer"
        >
          piper-plus
        </a>
        .
      </p>
    </div>
  );
}
