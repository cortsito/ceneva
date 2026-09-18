import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";
import { get_unit_lessons } from "@/features/lesson/unit-lessons";

import type { area_topic_definitions } from "./global-progress";
import { create_pilot_topic_progress_definitions } from "./pilot-progress";

export async function get_global_topic_definitions(): Promise<
  area_topic_definitions[]
> {
  const results: area_topic_definitions[] = [];

  for (const { area_id, unit_id } of available_units) {
    const resolved = get_available_unit(area_id, unit_id);

    if (!resolved) {
      continue;
    }

    const lessons = await get_unit_lessons(area_id, unit_id);

    results.push({
      area_id,
      unit_id,
      area_title: resolved.area.title,
      unit_title: resolved.unit.title,
      topic_definitions: create_pilot_topic_progress_definitions(
        resolved.unit,
        lessons,
      ),
    });
  }

  return results;
}
