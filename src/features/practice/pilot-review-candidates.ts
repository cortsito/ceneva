import type { question } from "@content/questions/types";

import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

import { get_topic_content } from "./unit-topic-content";

export type pilot_review_candidate = {
  question: question;
  topic: { id: string; title: string; code: string };
  lesson: { id: string; title: string };
};

export async function get_pilot_review_candidates(): Promise<pilot_review_candidate[]> {
  const candidates: pilot_review_candidate[] = [];

  for (const { area_id, unit_id } of available_units) {
    const resolved = get_available_unit(area_id, unit_id);

    if (!resolved) {
      continue;
    }

    for (const topic of resolved.unit.topics) {
      const content = await get_topic_content(area_id, unit_id, topic.id);

      if (!content) {
        continue;
      }

      content.questions.forEach(({ question, lesson }) => {
        candidates.push({ question, topic: content.topic, lesson });
      });
    }
  }

  return candidates;
}
