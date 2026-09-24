import { get_available_units_for_area } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";
import { get_unit_lessons } from "@/features/lesson/unit-lessons";

import type { area_topic_definitions } from "./global-progress";
import {
  create_pilot_topic_progress_definitions,
  type pilot_topic_progress_definition,
} from "./pilot-progress";

export async function get_area_topic_definitions(
  area_id: string,
): Promise<area_topic_definitions | undefined> {
  const units = get_available_units_for_area(area_id);

  if (units.length === 0) {
    return undefined;
  }

  const topic_definitions: pilot_topic_progress_definition[] = [];

  for (const { unit } of units) {
    const lessons = await get_unit_lessons(area_id, unit.id);
    topic_definitions.push(...create_pilot_topic_progress_definitions(unit, lessons));
  }

  return {
    area_id,
    area_title: units[0].area.title,
    topic_definitions,
  };
}

export async function get_global_topic_definitions(): Promise<
  area_topic_definitions[]
> {
  const results: area_topic_definitions[] = [];
  const seen_area_ids = new Set<string>();

  for (const { area_id } of available_units) {
    if (seen_area_ids.has(area_id)) {
      continue;
    }

    seen_area_ids.add(area_id);

    const entry = await get_area_topic_definitions(area_id);

    if (entry) {
      results.push(entry);
    }
  }

  return results;
}
