import { useSyncExternalStore } from "react";
import {
  getServerProgress,
  loadProgress,
  subscribeProgress,
} from "@/lib/progress";
import { isSpeechRecognitionSupported } from "@/lib/speech";
import { loadSrs, subscribeSrs } from "@/lib/srs";
import type { ProgressState, SrsCard } from "@/lib/types";

export function useProgress(): ProgressState {
  return useSyncExternalStore(
    subscribeProgress,
    loadProgress,
    getServerProgress,
  );
}

export function useSrsCards(): SrsCard[] {
  return useSyncExternalStore(subscribeSrs, loadSrs, () => []);
}

export function useSpeechRecognitionSupport(): boolean {
  return useSyncExternalStore(
    () => () => undefined,
    isSpeechRecognitionSupported,
    () => false,
  );
}
