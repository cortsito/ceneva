import { describe, expect, it } from "vitest";

import { available_units } from "./available-units";

describe("available_units", () => {
  it("lista exactamente las doce unidades de contenido listas, en orden estable", () => {
    expect(available_units).toHaveLength(12);
    expect(
      available_units.map((entry) => ({
        area_id: entry.area_id,
        unit_id: entry.unit_id,
      })),
    ).toEqual([
      { area_id: "pensamiento-matematico", unit_id: "pm-1-1-pensamiento-estadistico" },
      {
        area_id: "pensamiento-matematico",
        unit_id: "pm-1-2-pensamiento-probabilistico",
      },
      { area_id: "pensamiento-matematico", unit_id: "pm-1-3-pensamiento-algebraico" },
      { area_id: "pensamiento-matematico", unit_id: "pm-1-4-pensamiento-aritmetico" },
      { area_id: "pensamiento-matematico", unit_id: "pm-1-5-pensamiento-geometrico" },
      { area_id: "pensamiento-matematico", unit_id: "pm-1-6-pensamiento-variacional" },
      { area_id: "cultura-digital", unit_id: "cd-2-1-ciudadania-digital" },
      {
        area_id: "conciencia-historica",
        unit_id: "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      },
      {
        area_id: "humanidades",
        unit_id: "hu-4-1-fundamentos-del-pensamiento-filosofico",
      },
      {
        area_id: "ciencias-naturales-experimentales-y-tecnologia",
        unit_id: "cn-5-1-materia-y-sus-interacciones",
      },
      {
        area_id: "lengua-y-comunicacion",
        unit_id: "lc-6-1-estrategias-de-comprension-lectora",
      },
      {
        area_id: "ciencias-sociales",
        unit_id: "cs-7-1-organizacion-economica",
      },
    ]);
  });

  it("mantiene las seis unidades de pensamiento matemático contiguas, apuntando al mismo árbol de área y banco de preguntas", () => {
    const pm_entries = available_units.filter(
      (entry) => entry.area_id === "pensamiento-matematico",
    );

    expect(pm_entries).toHaveLength(6);
    expect(
      pm_entries.every((entry) => entry.area.id === "pensamiento-matematico"),
    ).toBe(true);
    expect(
      pm_entries.every(
        (entry) => entry.questions.length === pm_entries[0].questions.length,
      ),
    ).toBe(true);
    expect(pm_entries[0].questions.length).toBe(170);
    expect(
      pm_entries.every((entry) =>
        entry.questions.every((question) => question.id.startsWith("pm-")),
      ),
    ).toBe(true);
  });

  it("asocia cada entrada de las demás áreas con su árbol de currículo y su banco de preguntas reales", () => {
    const by_area = new Map(available_units.map((entry) => [entry.area_id, entry]));

    const cultura_digital = by_area.get("cultura-digital");
    expect(cultura_digital?.area.id).toBe("cultura-digital");
    expect(cultura_digital?.questions).toHaveLength(25);
    expect(
      cultura_digital?.questions.every((question) => question.id.startsWith("cd-")),
    ).toBe(true);

    const conciencia_historica = by_area.get("conciencia-historica");
    expect(conciencia_historica?.area.id).toBe("conciencia-historica");
    expect(conciencia_historica?.questions).toHaveLength(30);
    expect(
      conciencia_historica?.questions.every((question) =>
        question.id.startsWith("ch-"),
      ),
    ).toBe(true);

    const humanidades = by_area.get("humanidades");
    expect(humanidades?.area.id).toBe("humanidades");
    expect(humanidades?.questions).toHaveLength(20);
    expect(
      humanidades?.questions.every((question) => question.id.startsWith("hu-")),
    ).toBe(true);

    const ciencias_naturales = by_area.get(
      "ciencias-naturales-experimentales-y-tecnologia",
    );
    expect(ciencias_naturales?.area.id).toBe(
      "ciencias-naturales-experimentales-y-tecnologia",
    );
    expect(ciencias_naturales?.questions).toHaveLength(25);
    expect(
      ciencias_naturales?.questions.every((question) => question.id.startsWith("cn-")),
    ).toBe(true);

    const lengua_y_comunicacion = by_area.get("lengua-y-comunicacion");
    expect(lengua_y_comunicacion?.area.id).toBe("lengua-y-comunicacion");
    expect(lengua_y_comunicacion?.questions).toHaveLength(20);
    expect(
      lengua_y_comunicacion?.questions.every((question) =>
        question.id.startsWith("lc-"),
      ),
    ).toBe(true);

    const ciencias_sociales = by_area.get("ciencias-sociales");
    expect(ciencias_sociales?.area.id).toBe("ciencias-sociales");
    expect(ciencias_sociales?.questions).toHaveLength(45);
    expect(
      ciencias_sociales?.questions.every((question) => question.id.startsWith("cs-")),
    ).toBe(true);
  });
});
