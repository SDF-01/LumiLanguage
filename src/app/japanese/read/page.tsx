"use client";

import Link from "next/link";
import { SoftPanel } from "@/components/brand/soft-panel";
import { japaneseStories } from "@/content/japanese/stories";
import { useLocale } from "@/lib/i18n/locale-context";

export default function ReadLabPage() {
  const { locale, t } = useLocale();

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col gap-4 px-4 py-4">
      <SoftPanel className="flex flex-col gap-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-coral)]">
          {t.japanese.nav.read}
        </p>
        <h1 className="font-display text-2xl font-semibold text-[var(--brand-primary-deep)]">
          {t.japanese.readLabTitle}
        </h1>
        <p className="text-sm text-muted-foreground">{t.japanese.readLabSubtitle}</p>
      </SoftPanel>

      {japaneseStories.map((story) => (
        <Link key={story.id} href={`/japanese/story/${story.id}`}>
          <SoftPanel className="flex flex-col gap-1">
            <p className="text-[10px] font-bold uppercase text-[var(--brand-coral)]">
              {story.level} · {story.minutes} min
            </p>
            <h2 className="font-display text-xl font-semibold text-[var(--brand-primary-deep)]">
              {locale === "ja" ? story.titleJa : story.title}
            </h2>
            <p className="font-jp text-lg">{story.titleJa}</p>
            <p className="text-sm text-muted-foreground">
              {locale === "ja" ? story.synopsisJa : story.synopsisEn}
            </p>
          </SoftPanel>
        </Link>
      ))}
    </div>
  );
}
