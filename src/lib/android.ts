import { Capacitor } from "@capacitor/core";

/** Direct APK served from /public/downloads after `npm run android:apk`. */
export const APK_DOWNLOAD_HREF = "/downloads/lumi-japanese.apk";
export const ANDROID_APP_ID = "com.lumi.japanese";

export function isNativeApp(): boolean {
  if (typeof window === "undefined") return false;
  return Capacitor.isNativePlatform();
}
