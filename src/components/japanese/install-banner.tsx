"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/locale-context";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function InstallBanner() {
  const { locale } = useLocale();
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

  if (!event || hidden) return null;

  return (
    <div className="flex flex-col gap-2 rounded-2xl border-2 border-[var(--brand-border)] bg-white/95 px-4 py-3">
      <p className="text-sm font-bold text-[var(--brand-primary-deep)]">
        {locale === "ja"
          ? "ホーム画面に追加して、Androidアプリのように使う"
          : "Add LUMI to your Android home screen"}
      </p>
      <div className="grid grid-cols-2 gap-2">
        <Button
          type="button"
          variant="secondary"
          className="min-h-11 rounded-xl border-2 border-[var(--brand-border)] bg-white font-bold"
          onClick={() => setHidden(true)}
        >
          {locale === "ja" ? "あとで" : "Later"}
        </Button>
        <Button
          type="button"
          className="pressable min-h-11 rounded-xl border-0 bg-[var(--brand-primary)] font-bold text-white"
          onClick={() => {
            void event.prompt();
            setHidden(true);
          }}
        >
          {locale === "ja" ? "追加する" : "Install"}
        </Button>
      </div>
    </div>
  );
}
