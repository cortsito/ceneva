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

export function get_unit_questions(
  area_id: string,
  unit_id: string,
): question[] | undefined {
  return find_available_unit(area_id, unit_id)?.questions;
}
