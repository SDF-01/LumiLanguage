import { notFound } from "next/navigation";
import { StoryReader } from "@/components/japanese/story-reader";
import { getStory } from "@/content/japanese/stories";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ storyId: string }>;
}) {
  const { storyId } = await params;
  const story = getStory(storyId);
  if (!story) notFound();
  return <StoryReader story={story} />;
}
