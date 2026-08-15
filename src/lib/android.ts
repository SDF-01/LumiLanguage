import { Capacitor } from "@capacitor/core";

/** Direct APK served from /public/downloads after `npm run android:apk`. */
export const APK_DOWNLOAD_HREF = "/downloads/lumi-japanese.apk";
export const ANDROID_APP_ID = "com.lumi.japanese";

type CapacitorWindow = Window & {
  Capacitor?: {
    isNativePlatform?: () => boolean;
    getPlatform?: () => string;
  };
};

function injectedNative(): boolean {
  if (typeof window === "undefined") return false;
  const injected = (window as CapacitorWindow).Capacitor;
  if (injected?.isNativePlatform?.()) return true;
  const platform = injected?.getPlatform?.();
  return platform === "android" || platform === "ios";
}

function packagedWebView(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/Capacitor/i.test(ua)) return true;
  const host = window.location.hostname;
  const localHost =
    host === "localhost" ||
    host === "capacitor" ||
    host.endsWith(".localhost");
  const webView = /; wv\)/i.test(ua);
  return localHost && webView && /Android/i.test(ua);
}

export function isNativeApp(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (Capacitor.isNativePlatform()) return true;
    const platform = Capacitor.getPlatform();
    if (platform === "android" || platform === "ios") return true;
  } catch {
    // Capacitor may be unavailable during static export.
  }
  return injectedNative() || packagedWebView();
}

export function markNativeDocument(): void {
  if (typeof document === "undefined") return;
  if (!isNativeApp()) return;
  document.documentElement.dataset.lumiNative = "1";
}
