import { describe, expect, it } from "vitest";

import {
  get_available_unit,
  get_available_unit_for_area,
  get_unit_questions,
} from "./available-curriculum";

describe("get_available_unit", () => {
  it("resuelve la unidad piloto de pensamiento matemático", () => {
    const resolved = get_available_unit(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );

    expect(resolved?.area.id).toBe("pensamiento-matematico");
    expect(resolved?.unit.id).toBe("pm-1-1-pensamiento-estadistico");
    expect(resolved?.unit.topics).toHaveLength(4);
  });

  it("resuelve la unidad de cultura digital", () => {
    const resolved = get_available_unit("cultura-digital", "cd-2-1-ciudadania-digital");

    expect(resolved?.area.id).toBe("cultura-digital");
    expect(resolved?.unit.id).toBe("cd-2-1-ciudadania-digital");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cd-2-1-1-elementos-de-la-identidad-digital",
      "cd-2-1-2-tipos-de-licenciamiento-de-software",
      "cd-2-1-3-tipos-de-servicios-digitales",
      "cd-2-1-4-tipos-de-amenazas-de-seguridad-digital",
      "cd-2-1-5-medidas-de-seguridad-digital",
    ]);
  });

  it("no resuelve un área desconocida", () => {
    expect(get_available_unit("humanidades", "cualquier-unidad")).toBeUndefined();
  });

  it("no resuelve una unidad no registrada aunque el área exista", () => {
    expect(
      get_available_unit(
        "cultura-digital",
        "cd-2-2-comunicacion-y-colaboracion-digital",
      ),
    ).toBeUndefined();
  });

  it("no resuelve una combinación cruzada de área y unidad de otra área", () => {
    expect(
      get_available_unit("pensamiento-matematico", "cd-2-1-ciudadania-digital"),
    ).toBeUndefined();
    expect(
      get_available_unit("cultura-digital", "pm-1-1-pensamiento-estadistico"),
    ).toBeUndefined();
  });
});

describe("get_available_unit_for_area", () => {
  it("resuelve la única unidad lista de un área disponible", () => {
    expect(get_available_unit_for_area("pensamiento-matematico")?.unit.id).toBe(
      "pm-1-1-pensamiento-estadistico",
    );
    expect(get_available_unit_for_area("cultura-digital")?.unit.id).toBe(
      "cd-2-1-ciudadania-digital",
    );
  });

  it("no resuelve un área sin unidades de contenido listas", () => {
    expect(get_available_unit_for_area("humanidades")).toBeUndefined();
  });
});

describe("get_unit_questions", () => {
  it("limita las preguntas de pensamiento matemático a los temas de su unidad lista", () => {
    const resolved = get_available_unit(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );
    const questions = get_unit_questions(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );

    expect(questions).toHaveLength(20);
    expect(
      questions?.every((question) =>
        resolved?.unit.topics.some((topic) => topic.id === question.topic_id),
      ),
    ).toBe(true);
  });

  it("devuelve el banco tipado de una unidad registrada", () => {
    expect(
      get_unit_questions("cultura-digital", "cd-2-1-ciudadania-digital"),
    ).toHaveLength(25);
  });

  it("devuelve undefined para una unidad no registrada", () => {
    expect(get_unit_questions("humanidades", "cualquier-unidad")).toBeUndefined();
  });
});
