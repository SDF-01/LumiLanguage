"use client";

import type { ReactNode } from "react";
import { NativeAppMark } from "@/components/providers/native-app-mark";
import { LocaleProvider } from "@/lib/i18n/locale-context";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <NativeAppMark />
      {children}
    </LocaleProvider>
  );
}
