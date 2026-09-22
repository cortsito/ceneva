import { describe, expect, it } from "vitest";

import { get_unit_questions } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

import { get_pilot_review_candidates } from "./pilot-review-candidates";

describe("get_pilot_review_candidates", () => {
  it("resuelve un candidato por cada pregunta registrada en las siete áreas", async () => {
    const candidates = await get_pilot_review_candidates();
    const expected_total = available_units.reduce(
      (total, unit) =>
        total + (get_unit_questions(unit.area_id, unit.unit_id)?.length ?? 0),
      0,
    );

    expect(candidates).toHaveLength(expected_total);
    expect(candidates.length).toBeGreaterThan(20);
    expect(new Set(candidates.map((candidate) => candidate.question.id)).size).toBe(
      expected_total,
    );
    expect(
      candidates.every(
        (candidate) => candidate.question.topic_id === candidate.topic.id,
      ),
    ).toBe(true);
  });

  it("mantiene el comportamiento pm existente", async () => {
    const candidates = await get_pilot_review_candidates();

    const tipos_de_variables_candidate = candidates.find(
      (candidate) => candidate.question.id === "pm-tv-001",
    );

    expect(tipos_de_variables_candidate).toMatchObject({
      topic: { id: "pm-1-1-1-tipos-de-variables", title: "Tipos de variables" },
      lesson: { id: "pm-tipos-de-variables-01", title: "Variables estadísticas" },
    });
  });

  it("cubre áreas no-pm, por ejemplo cultura digital", async () => {
    const candidates = await get_pilot_review_candidates();

    const cultura_digital_candidate = candidates.find(
      (candidate) => candidate.question.id === "cd-id-001",
    );

    expect(cultura_digital_candidate).toBeDefined();
    expect(cultura_digital_candidate?.topic.id).toBe(
      cultura_digital_candidate?.question.topic_id,
    );
  });

  it("atribuye cada pregunta a su propia lección en un tema con varias lecciones", async () => {
    const candidates = await get_pilot_review_candidates();

    const resistencias_candidate = candidates.find(
      (candidate) => candidate.question.id === "ch-rpo-001",
    );
    const impacto_cultural_candidate = candidates.find(
      (candidate) => candidate.question.id === "ch-icr-001",
    );

    expect(resistencias_candidate).toMatchObject({
      topic: { id: "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios" },
      lesson: { id: "ch-resistencias-de-pueblos-originarios-01" },
    });
    expect(impacto_cultural_candidate).toMatchObject({
      topic: { id: "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios" },
      lesson: { id: "ch-impacto-cultural-de-resistencias-originarias-02" },
    });
  });

  it("respeta el orden de available_units y el orden curricular de los temas", async () => {
    const candidates = await get_pilot_review_candidates();
    const seen_topic_order: string[] = [];

    candidates.forEach((candidate) => {
      const last_seen = seen_topic_order[seen_topic_order.length - 1];

      if (last_seen !== candidate.topic.id) {
        seen_topic_order.push(candidate.topic.id);
      }
    });

    const expected_topic_order = available_units.flatMap((unit) =>
      unit.area.units
        .find((candidate) => candidate.id === unit.unit_id)!
        .topics.map((topic) => topic.id),
    );

    expect(seen_topic_order).toEqual(expected_topic_order);
  });
});
