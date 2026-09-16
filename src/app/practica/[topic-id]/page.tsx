import { notFound } from "next/navigation";

import { get_available_topic_practice } from "@/features/practice/unit-topic-content";
import { TopicPracticeView } from "@/features/practice/topic-practice-view";

type topic_page_props = {
  params: Promise<{ "topic-id": string }>;
};

export default async function TopicPracticePage({ params }: topic_page_props) {
  const { "topic-id": topic_id } = await params;
  const practice = await get_available_topic_practice(topic_id);

  if (!practice) {
    notFound();
  }

  return <TopicPracticeView practice={practice} />;
}
