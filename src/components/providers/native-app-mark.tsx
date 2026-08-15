"use client";

import { useEffect } from "react";
import { markNativeDocument } from "@/lib/android";

export function NativeAppMark() {
  useEffect(() => {
    markNativeDocument();
  }, []);
  return null;
}
