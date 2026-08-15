import { notFound } from "next/navigation";
import { StoryReader } from "@/components/japanese/story-reader";
import { getStory, japaneseStories } from "@/content/japanese/stories";

export function generateStaticParams() {
  return japaneseStories.map((story) => ({ storyId: story.id }));
}

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
