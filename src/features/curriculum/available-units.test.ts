import { describe, expect, it } from "vitest";

import { available_units } from "./available-units";

describe("available_units", () => {
  it("lista exactamente las cuatro unidades de contenido listas, en orden estable", () => {
    expect(available_units).toHaveLength(4);
    expect(
      available_units.map((entry) => ({
        area_id: entry.area_id,
        unit_id: entry.unit_id,
      })),
    ).toEqual([
      { area_id: "pensamiento-matematico", unit_id: "pm-1-1-pensamiento-estadistico" },
      { area_id: "cultura-digital", unit_id: "cd-2-1-ciudadania-digital" },
      {
        area_id: "conciencia-historica",
        unit_id: "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      },
      {
        area_id: "humanidades",
        unit_id: "hu-4-1-fundamentos-del-pensamiento-filosofico",
      },
    ]);
  });

  it("asocia cada entrada con su árbol de currículo y su banco de preguntas reales", () => {
    const [pensamiento_matematico, cultura_digital, conciencia_historica, humanidades] =
      available_units;

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

    expect(conciencia_historica?.area.id).toBe("conciencia-historica");
    expect(conciencia_historica?.questions).toHaveLength(30);
    expect(
      conciencia_historica?.questions.every((question) =>
        question.id.startsWith("ch-"),
      ),
    ).toBe(true);

    expect(humanidades?.area.id).toBe("humanidades");
    expect(humanidades?.questions).toHaveLength(20);
    expect(
      humanidades?.questions.every((question) => question.id.startsWith("hu-")),
    ).toBe(true);
  });
});
