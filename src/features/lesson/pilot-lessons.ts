import { pilot_area_id, pilot_unit_id } from "@/features/curriculum/pilot-curriculum";

import {
  get_unit_lesson,
  get_unit_lesson_ids,
  get_unit_lessons,
  type lesson,
} from "./unit-lessons";

export type pilot_lesson = lesson;
export type pilot_lesson_summary = Pick<
  pilot_lesson,
  "id" | "title" | "estimated_minutes"
>;

export function get_pilot_lesson_ids(): string[] {
  return get_unit_lesson_ids(pilot_area_id, pilot_unit_id);
}

export async function get_pilot_lesson(
  lesson_id: string,
): Promise<pilot_lesson | undefined> {
  return get_unit_lesson(pilot_area_id, pilot_unit_id, lesson_id);
}

export async function get_pilot_lessons(): Promise<pilot_lesson[]> {
  return get_unit_lessons(pilot_area_id, pilot_unit_id);
}

export async function get_pilot_lesson_summaries(): Promise<pilot_lesson_summary[]> {
  const lessons = await get_pilot_lessons();

  return lessons.map(({ id, title, estimated_minutes }) => ({
    id,
    title,
    estimated_minutes,
  }));
}
