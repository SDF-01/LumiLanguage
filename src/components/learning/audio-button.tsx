"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_SPEECH_RATE,
  getActiveTtsEngine,
  getTtsLoadState,
  onTtsLoadState,
  setPreferredVoice,
  speak,
  stopSpeech,
  type TtsLang,
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
}: {
  text: string;
  lang?: TtsLang;
  label?: string;
  /** @deprecated Always uses female Lumi voice */
  voice?: string;
  /** @deprecated Voice picker removed to prevent double / mixed voices */
  showVoicePicker?: boolean;
}) {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loadMessage, setLoadMessage] = useState<string | null>(null);

  useEffect(() => {
    setPreferredVoice("lumi");
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

  async function onPlay() {
    setError(null);
    setPreferredVoice("lumi");
    stopSpeech();
    try {
      setPlaying(true);
      const state = getTtsLoadState();
      if (state.status === "idle" || state.status === "error") {
        setLoadMessage("Preparing voice…");
      }
      await speak(text, lang, DEFAULT_SPEECH_RATE, "lumi");
      void getActiveTtsEngine();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not play audio");
    } finally {
      setPlaying(false);
      setLoadMessage(null);
    }
  }

  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
}
