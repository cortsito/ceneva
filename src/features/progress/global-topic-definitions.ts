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

  const definitions_by_unit = await Promise.all(
    units.map(async ({ unit }) => {
      const lessons = await get_unit_lessons(area_id, unit.id);
      return create_pilot_topic_progress_definitions(unit, lessons);
    }),
  );
  const topic_definitions: pilot_topic_progress_definition[] =
    definitions_by_unit.flat();

  return {
    area_id,
    area_title: units[0].area.title,
    topic_definitions,
  };
}

export async function get_global_topic_definitions(): Promise<
  area_topic_definitions[]
> {
  const area_ids = Array.from(new Set(available_units.map(({ area_id }) => area_id)));
  const results = await Promise.all(area_ids.map(get_area_topic_definitions));

  return results.filter(
    (entry): entry is area_topic_definitions => entry !== undefined,
  );
}
