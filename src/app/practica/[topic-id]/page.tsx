import { notFound } from "next/navigation";

import { get_available_topic_content } from "@/features/practice/unit-topic-content";
import { TopicPracticeView } from "@/features/practice/topic-practice-view";

type topic_page_props = {
  params: Promise<{ "topic-id": string }>;
};

export default async function TopicPracticePage({ params }: topic_page_props) {
  const { "topic-id": topic_id } = await params;
  const content = await get_available_topic_content(topic_id);

  if (!content) {
    notFound();
  }

  return <TopicPracticeView content={content} />;
}
