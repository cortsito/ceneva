import type { question } from "@content/questions/types";

import {
  get_available_unit,
  get_unit_questions,
} from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";
import { get_unit_lessons } from "@/features/lesson/unit-lessons";

import { resolve_topic_questions } from "./unit-topic-content";

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

    const lessons = await get_unit_lessons(area_id, unit_id);
    const questions = get_unit_questions(area_id, unit_id) ?? [];
    const questions_by_id = new Map(
      questions.map((question) => [question.id, question]),
    );

    for (const topic of resolved.unit.topics) {
      resolve_topic_questions(topic.lesson_ids, lessons, questions_by_id).forEach(
        ({ question, lesson }) => {
          candidates.push({
            question,
            topic: { id: topic.id, title: topic.title, code: topic.source.code },
            lesson,
          });
        },
      );
    }
  }

  return candidates;
}
