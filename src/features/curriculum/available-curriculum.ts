import type { curriculum_area, curriculum_unit } from "@content/curriculum/types";
import type { question } from "@content/questions/types";

import { available_units } from "./available-units";

export type resolved_unit = {
  area: curriculum_area;
  unit: curriculum_unit;
};

function find_available_unit(area_id: string, unit_id: string) {
  return available_units.find(
    (entry) => entry.area_id === area_id && entry.unit_id === unit_id,
  );
}

export function get_available_unit(
  area_id: string,
  unit_id: string,
): resolved_unit | undefined {
  const entry = find_available_unit(area_id, unit_id);

  if (!entry) {
    return undefined;
  }

  const unit = entry.area.units.find((candidate) => candidate.id === unit_id);

  if (!unit) {
    return undefined;
  }

  return { area: entry.area, unit };
}

export function get_available_units_for_area(area_id: string): resolved_unit[] {
  return available_units
    .filter((entry) => entry.area_id === area_id)
    .map((entry) => get_available_unit(entry.area_id, entry.unit_id))
    .filter((entry): entry is resolved_unit => entry !== undefined);
}

export function get_unit_questions(
  area_id: string,
  unit_id: string,
): question[] | undefined {
  const entry = find_available_unit(area_id, unit_id);
  const resolved = get_available_unit(area_id, unit_id);

  if (!entry || !resolved) {
    return undefined;
  }

  const topic_ids = new Set(resolved.unit.topics.map((topic) => topic.id));

  return entry.questions.filter((question) => topic_ids.has(question.topic_id));
}
