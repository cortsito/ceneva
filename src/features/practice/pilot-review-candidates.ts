import type { question } from "@content/questions/types";

import { get_pilot_curriculum } from "@/features/curriculum/pilot-curriculum";

import { get_pilot_topic_practice } from "./pilot-topic-practice";

export type pilot_review_candidate = {
  question: question;
  topic: { id: string; title: string; code: string };
  lesson: { id: string; title: string };
};

export async function get_pilot_review_candidates(): Promise<pilot_review_candidate[]> {
  const { unit } = get_pilot_curriculum();
  const candidates: pilot_review_candidate[] = [];

  for (const topic of unit.topics) {
    const practice = await get_pilot_topic_practice(topic.id);

    if (!practice) {
      continue;
    }

    practice.questions.forEach((question) => {
      candidates.push({
        question,
        topic: practice.topic,
        lesson: practice.lesson,
      });
    });
  }

  return candidates;
}
