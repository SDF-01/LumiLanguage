import { notFound } from "next/navigation";
import { DialoguePlayer } from "@/components/japanese/dialogue-player";
import { getDialogue } from "@/content/japanese/dialogues";

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
