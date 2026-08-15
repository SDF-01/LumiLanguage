"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APK_DOWNLOAD_HREF } from "@/lib/android";
import { useNativeApp } from "@/lib/client-store";
import { useLocale } from "@/lib/i18n/locale-context";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallBanner({ alwaysShow = false }: { alwaysShow?: boolean }) {
  const { locale, t } = useLocale();
  const nativeApp = useNativeApp();
  const [event, setEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onPrompt = (raw: Event) => {
      raw.preventDefault();
      setEvent(raw as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (hidden || nativeApp) return null;

  return (
    <div
      data-android-download
      className="flex flex-col gap-2 rounded-2xl border-2 border-[var(--brand-border)] bg-white/95 px-4 py-3"
    >
      <p className="text-sm font-bold text-[var(--brand-primary-deep)]">
        {locale === "ja"
          ? "AndroidにLUMIを入れる：APKを直接ダウンロード"
          : "Put LUMI on Android: download the APK"}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <Button
          asChild
          className="pressable min-h-11 rounded-xl border-0 bg-[var(--brand-primary)] font-bold text-white"
        >
          <a href={APK_DOWNLOAD_HREF} download="lumi-japanese.apk">
            {t.getApp.downloadApk}
          </a>
        </Button>
        {event ? (
          <Button
            type="button"
            variant="secondary"
            className="min-h-11 rounded-xl border-2 border-[var(--brand-border)] bg-white font-bold"
            onClick={() => {
              void event.prompt();
              setHidden(true);
            }}
          >
            {t.getApp.pwaCta}
          </Button>
        ) : (
          <Button
            asChild
            variant="secondary"
            className="min-h-11 rounded-xl border-2 border-[var(--brand-border)] bg-white font-bold"
          >
            <Link href={alwaysShow ? "/japanese" : "/get-app"}>
              {alwaysShow ? t.home.speakReadCta : t.home.getAndroid}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
