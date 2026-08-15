import { notFound } from "next/navigation";
import { DialoguePlayer } from "@/components/japanese/dialogue-player";
import { getDialogue, japaneseDialogues } from "@/content/japanese/dialogues";

export function generateStaticParams() {
  return japaneseDialogues.map((scene) => ({ dialogueId: scene.id }));
}

export default async function DialoguePage({
  params,
}: {
  params: Promise<{ dialogueId: string }>;
}) {
  const { dialogueId } = await params;
  const scene = getDialogue(dialogueId);
  if (!scene) notFound();
  return <DialoguePlayer scene={scene} />;
}
