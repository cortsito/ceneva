import type { question } from "@content/questions/types";

import { pilot_area_id, pilot_unit_id } from "@/features/curriculum/pilot-curriculum";

import { get_topic_content } from "./unit-topic-content";

export type pilot_topic_practice = {
  topic: {
    id: string;
    title: string;
    code: string;
  };
  lesson: {
    id: string;
    title: string;
  };
  questions: question[];
};

export async function get_pilot_topic_practice(
  topic_id: string,
): Promise<pilot_topic_practice | undefined> {
  const content = await get_topic_content(pilot_area_id, pilot_unit_id, topic_id);

  if (!content) {
    return undefined;
  }

  const [lesson] = content.lessons;

  if (!lesson) {
    return undefined;
  }

  return {
    topic: content.topic,
    lesson,
    questions: content.questions.map((item) => item.question),
  };
}
