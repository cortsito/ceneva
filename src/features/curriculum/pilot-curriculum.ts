import type { curriculum_area, curriculum_unit } from "@content/curriculum/types";

import { get_available_unit } from "./available-curriculum";

export const pilot_area_id = "pensamiento-matematico";
export const pilot_unit_id = "pm-1-1-pensamiento-estadistico";

export type pilot_curriculum = {
  area: curriculum_area;
  unit: curriculum_unit;
};

export function get_pilot_curriculum(): pilot_curriculum {
  const resolved = get_available_unit(pilot_area_id, pilot_unit_id);

  if (!resolved) {
    throw new Error(`no se encontró la unidad piloto ${pilot_unit_id}.`);
  }

  return resolved;
}
