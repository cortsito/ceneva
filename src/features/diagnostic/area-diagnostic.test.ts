import { describe, expect, it } from "vitest";

import { get_area_diagnostic } from "./area-diagnostic";

describe("get_area_diagnostic", () => {
  it("resuelve exactamente las cuatro preguntas de pensamiento matemático, en orden curricular", async () => {
    const items = await get_area_diagnostic("pensamiento-matematico");

    expect(items).toBeDefined();
    expect(items).toHaveLength(4);
    expect(items?.map((item) => item.question.id)).toEqual([
      "pm-tv-001",
      "pm-tm-001",
      "pm-mtc-001",
      "pm-md-003",
    ]);
    expect(items?.map((item) => item.topic.id)).toEqual([
      "pm-1-1-1-tipos-de-variables",
      "pm-1-1-2-tipos-de-muestra",
      "pm-1-1-3-medidas-de-tendencia-central",
      "pm-1-1-4-medidas-de-dispersion",
    ]);
    expect(items?.map((item) => item.lesson.id)).toEqual([
      "pm-tipos-de-variables-01",
      "pm-tipos-de-muestra-01",
      "pm-medidas-de-tendencia-central-01",
      "pm-medidas-de-dispersion-01",
    ]);
  });

  it("resuelve una pregunta por cada uno de los cinco temas de cultura digital", async () => {
    const items = await get_area_diagnostic("cultura-digital");

    expect(items).toHaveLength(5);
    items?.forEach((item) => {
      expect(item.question.use_cases).toContain("diagnostic");
      expect(item.question.topic_id).toBe(item.topic.id);
    });
  });

  it("cada pregunta pertenece a su tema, tiene tres opciones distintas, explicación y está etiquetada para diagnóstico", async () => {
    const items = await get_area_diagnostic("pensamiento-matematico");

    items?.forEach((item) => {
      expect(item.question.topic_id).toBe(item.topic.id);
      expect(item.question.options).toHaveLength(3);
      expect(new Set(item.question.options).size).toBe(3);
      expect(item.question.correct_option_index).toBeGreaterThanOrEqual(0);
      expect(item.question.correct_option_index).toBeLessThan(3);
      expect(item.question.explanation.trim().length).toBeGreaterThan(0);
      expect(item.question.use_cases).toContain("diagnostic");
    });
  });

  it("selecciona la primera pregunta de diagnóstico de un tema con dos lecciones, atribuida a la lección correcta", async () => {
    const items = await get_area_diagnostic("conciencia-historica");

    expect(items).toHaveLength(5);

    const split_topic_item = items?.find(
      (item) =>
        item.topic.id === "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
    );

    expect(split_topic_item?.question.id).toBe("ch-rpo-001");
    expect(split_topic_item?.lesson.id).toBe(
      "ch-resistencias-de-pueblos-originarios-01",
    );
  });

  it("devuelve undefined para un área desconocida o no registrada", async () => {
    await expect(get_area_diagnostic("area-inexistente")).resolves.toBeUndefined();
  });
});
