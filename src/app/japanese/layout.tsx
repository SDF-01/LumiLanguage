import { JapaneseShell } from "@/components/japanese/bottom-nav";

export default function JapaneseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <JapaneseShell>{children}</JapaneseShell>;
}
