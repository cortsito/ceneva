import type { question } from "@content/questions/types";

import { get_unit_questions } from "@/features/curriculum/available-curriculum";
import { pilot_area_id, pilot_unit_id } from "@/features/curriculum/pilot-curriculum";
import type { pilot_lesson } from "@/features/lesson/pilot-lessons";

import { get_lesson_questions } from "./unit-topic-content";

const questions_by_id = new Map(
  (get_unit_questions(pilot_area_id, pilot_unit_id) ?? []).map((question) => [
    question.id,
    question,
  ]),
);

export function get_pilot_lesson_questions(lesson: pilot_lesson): question[] {
  return get_lesson_questions(lesson, questions_by_id);
}
