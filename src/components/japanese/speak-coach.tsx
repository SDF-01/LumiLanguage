"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSpeechRecognitionSupport } from "@/lib/client-store";
import { haptic } from "@/lib/haptics";
import {
  listenJapaneseOnce,
  scoreTranscript,
  type SpeechScore,
} from "@/lib/speech";
import { recordSpeakAttempt } from "@/lib/progress";

export function SpeakCoach({
  expected,
  listenLabel,
  speakLabel,
  onResult,
  disabled,
}: {
  expected: string[];
  listenLabel: string;
  speakLabel: string;
  onResult: (score: SpeechScore) => void;
  disabled?: boolean;
}) {
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [last, setLast] = useState<SpeechScore | null>(null);
  const supported = useSpeechRecognitionSupport();

  async function onSpeak() {
    if (disabled || listening) return;
    setError(null);
    haptic("tap");
    setListening(true);
    try {
      const heard = await listenJapaneseOnce();
      if (heard.length === 0) {
        setError("No speech heard. Hold the phone closer and try again.");
        return;
      }
      const score = scoreTranscript(heard, expected);
      setLast(score);
      recordSpeakAttempt(score.passed);
      haptic(score.passed ? "ok" : "bad");
      onResult(score);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Mic failed");
    } finally {
      setListening(false);
    }
  }

  if (!supported) {
    return (
      <div className="flex flex-col gap-2 rounded-2xl bg-[var(--brand-mist)] px-4 py-3">
        <p className="text-sm font-medium text-[var(--brand-primary-deep)]">
          This Android browser has no speech recognition. Say it out loud, then
          continue. Chrome on Android hears Japanese best.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        type="button"
        className="pressable soft-shadow min-h-16 w-full rounded-2xl border-0 bg-[var(--brand-coral)] text-base font-bold text-white hover:bg-[#e56648]"
        onClick={() => void onSpeak()}
        disabled={disabled || listening}
      >
        {listening ? listenLabel : speakLabel}
      </Button>
      {last && (
        <p className="text-sm font-bold text-[var(--brand-primary-deep)]">
          Heard “{last.heard}” · {last.score}%
        </p>
      )}
      {error && <p className="text-sm font-medium text-[#9f1239]">{error}</p>}
    </div>
  );
}
