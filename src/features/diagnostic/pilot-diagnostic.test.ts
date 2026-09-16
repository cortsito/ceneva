import { describe, expect, it } from "vitest";

import { get_pilot_diagnostic } from "./pilot-diagnostic";

describe("get_pilot_diagnostic", () => {
  it("resuelve exactamente las cuatro preguntas de diagnóstico documentadas, en orden curricular", async () => {
    const items = await get_pilot_diagnostic();

    expect(items).toHaveLength(4);
    expect(items.map((item) => item.question.id)).toEqual([
      "pm-tv-001",
      "pm-tm-001",
      "pm-mtc-001",
      "pm-md-003",
    ]);
    expect(items.map((item) => item.topic.id)).toEqual([
      "pm-1-1-1-tipos-de-variables",
      "pm-1-1-2-tipos-de-muestra",
      "pm-1-1-3-medidas-de-tendencia-central",
      "pm-1-1-4-medidas-de-dispersion",
    ]);
  });

  it("cada pregunta pertenece a su tema, tiene tres opciones distintas y explicación", async () => {
    const items = await get_pilot_diagnostic();

    items.forEach((item) => {
      expect(item.question.topic_id).toBe(item.topic.id);
      expect(item.question.options).toHaveLength(3);
      expect(new Set(item.question.options).size).toBe(3);
      expect(item.question.correct_option_index).toBeGreaterThanOrEqual(0);
      expect(item.question.correct_option_index).toBeLessThan(3);
      expect(item.question.explanation.trim().length).toBeGreaterThan(0);
      expect(item.question.use_cases).toContain("diagnostic");
    });
  });

  it("resuelve la lección relacionada de cada tema piloto", async () => {
    const items = await get_pilot_diagnostic();

    expect(items.map((item) => item.lesson.id)).toEqual([
      "pm-tipos-de-variables-01",
      "pm-tipos-de-muestra-01",
      "pm-medidas-de-tendencia-central-01",
      "pm-medidas-de-dispersion-01",
    ]);
  });
});
