import { describe, expect, it } from "vitest";

import { get_pilot_curriculum, pilot_area_id, pilot_unit_id } from "./pilot-curriculum";

describe("get_pilot_curriculum", () => {
  it("resuelve el área y la unidad piloto desde el currículo tipado", () => {
    const curriculum = get_pilot_curriculum();

    expect(curriculum.area.id).toBe(pilot_area_id);
    expect(curriculum.unit.id).toBe(pilot_unit_id);
    expect(curriculum.unit.title).toBe("Pensamiento estadístico");
    expect(curriculum.unit.topics.map((topic) => topic.id)).toEqual([
      "pm-1-1-1-tipos-de-variables",
      "pm-1-1-2-tipos-de-muestra",
      "pm-1-1-3-medidas-de-tendencia-central",
      "pm-1-1-4-medidas-de-dispersion",
    ]);
    expect(curriculum.unit.topics.flatMap((topic) => topic.lesson_ids)).toEqual([
      "pm-tipos-de-variables-01",
      "pm-tipos-de-muestra-01",
      "pm-medidas-de-tendencia-central-01",
      "pm-medidas-de-dispersion-01",
    ]);
  });
});
