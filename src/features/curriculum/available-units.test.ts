import { describe, expect, it } from "vitest";

import { available_units } from "./available-units";

describe("available_units", () => {
  it("lista exactamente las dos unidades de contenido listas, en orden estable", () => {
    expect(available_units).toHaveLength(2);
    expect(
      available_units.map((entry) => ({
        area_id: entry.area_id,
        unit_id: entry.unit_id,
      })),
    ).toEqual([
      { area_id: "pensamiento-matematico", unit_id: "pm-1-1-pensamiento-estadistico" },
      { area_id: "cultura-digital", unit_id: "cd-2-1-ciudadania-digital" },
    ]);
  });

  it("asocia cada entrada con su árbol de currículo y su banco de preguntas reales", () => {
    const [pensamiento_matematico, cultura_digital] = available_units;

    expect(pensamiento_matematico?.area.id).toBe("pensamiento-matematico");
    expect(pensamiento_matematico?.questions.length).toBeGreaterThan(0);
    expect(
      pensamiento_matematico?.questions.every((question) =>
        question.id.startsWith("pm-"),
      ),
    ).toBe(true);

    expect(cultura_digital?.area.id).toBe("cultura-digital");
    expect(cultura_digital?.questions).toHaveLength(25);
    expect(
      cultura_digital?.questions.every((question) => question.id.startsWith("cd-")),
    ).toBe(true);
  });
});
