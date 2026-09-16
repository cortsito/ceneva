import { describe, expect, it } from "vitest";

import {
  get_available_lesson,
  get_unit_lesson,
  get_unit_lesson_ids,
  get_unit_lessons,
} from "./unit-lessons";

describe("get_unit_lessons", () => {
  it("carga las cuatro lecciones de la unidad piloto de pensamiento matemático", async () => {
    const lessons = await get_unit_lessons(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id)).toEqual(
      get_unit_lesson_ids("pensamiento-matematico", "pm-1-1-pensamiento-estadistico"),
    );
    expect(lessons[0]).toMatchObject({
      id: "pm-tipos-de-variables-01",
      area_id: "pensamiento-matematico",
      unit_id: "pm-1-1-pensamiento-estadistico",
      topic_id: "pm-1-1-1-tipos-de-variables",
    });
  });

  it("carga las cinco lecciones de la unidad de cultura digital", async () => {
    const lessons = await get_unit_lessons(
      "cultura-digital",
      "cd-2-1-ciudadania-digital",
    );

    expect(lessons).toHaveLength(5);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cd-identidad-digital-01",
        "cd-licenciamiento-de-software-01",
        "cd-servicios-digitales-01",
        "cd-amenazas-de-seguridad-digital-01",
        "cd-medidas-de-seguridad-digital-01",
      ].sort(),
    );

    const identidad = lessons.find((lesson) => lesson.id === "cd-identidad-digital-01");

    expect(identidad).toMatchObject({
      area_id: "cultura-digital",
      unit_id: "cd-2-1-ciudadania-digital",
      topic_id: "cd-2-1-1-elementos-de-la-identidad-digital",
      title: "identidad digital",
      question_ids: ["cd-id-001", "cd-id-002", "cd-id-003", "cd-id-004", "cd-id-005"],
      source: { guide: "docs/guiaoficial.pdf", page: 12, code: "2.1.1" },
    });
    expect(identidad?.body).toContain("# identidad digital");
  });

  it("no expone lecciones ajenas a una unidad registrada", async () => {
    await expect(
      get_unit_lesson(
        "pensamiento-matematico",
        "pm-1-1-pensamiento-estadistico",
        "cd-identidad-digital-01",
      ),
    ).resolves.toBeUndefined();
    await expect(
      get_unit_lesson(
        "cultura-digital",
        "cd-2-1-ciudadania-digital",
        "leccion-inexistente",
      ),
    ).resolves.toBeUndefined();
  });

  it("no resuelve lecciones de una unidad no registrada", async () => {
    expect(
      get_unit_lesson_ids(
        "cultura-digital",
        "cd-2-2-comunicacion-y-colaboracion-digital",
      ),
    ).toEqual([]);
    await expect(
      get_unit_lessons("cultura-digital", "cd-2-2-comunicacion-y-colaboracion-digital"),
    ).resolves.toEqual([]);
  });
});

describe("get_available_lesson", () => {
  it("resuelve una lección real sin importar a qué unidad lista pertenece", async () => {
    const pilot_lesson = await get_available_lesson("pm-tipos-de-variables-01");
    const cultura_digital_lesson = await get_available_lesson(
      "cd-identidad-digital-01",
    );

    expect(pilot_lesson).toMatchObject({
      id: "pm-tipos-de-variables-01",
      area_id: "pensamiento-matematico",
      unit_id: "pm-1-1-pensamiento-estadistico",
    });
    expect(cultura_digital_lesson).toMatchObject({
      id: "cd-identidad-digital-01",
      area_id: "cultura-digital",
      unit_id: "cd-2-1-ciudadania-digital",
    });
  });

  it("no resuelve una lección inexistente ni una de una unidad no registrada", async () => {
    await expect(get_available_lesson("leccion-inexistente")).resolves.toBeUndefined();
    await expect(get_available_lesson("cd-ciberespacio-01")).resolves.toBeUndefined();
  });
});
