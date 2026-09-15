import { notFound } from "next/navigation";

import { PilotTopicPractice } from "@/features/practice/pilot-topic-practice-view";
import { get_pilot_topic_practice } from "@/features/practice/pilot-topic-practice";

type topic_page_props = {
  params: Promise<{ "topic-id": string }>;
};

export default async function TopicPracticePage({ params }: topic_page_props) {
  const { "topic-id": topic_id } = await params;
  const practice = await get_pilot_topic_practice(topic_id);

  if (!practice) {
    notFound();
  }

  return <PilotTopicPractice practice={practice} />;
}
