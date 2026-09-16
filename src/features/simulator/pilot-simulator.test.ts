import { describe, expect, it } from "vitest";

import { flatten_pilot_simulator_groups, get_pilot_simulator } from "./pilot-simulator";

describe("get_pilot_simulator", () => {
  it("agrupa las veinte preguntas del piloto en los cuatro temas, cinco por tema, en orden curricular", async () => {
    const groups = await get_pilot_simulator();

    expect(groups).toHaveLength(4);
    expect(groups.map((group) => group.topic.id)).toEqual([
      "pm-1-1-1-tipos-de-variables",
      "pm-1-1-2-tipos-de-muestra",
      "pm-1-1-3-medidas-de-tendencia-central",
      "pm-1-1-4-medidas-de-dispersion",
    ]);
    groups.forEach((group) => {
      expect(group.questions).toHaveLength(5);
      group.questions.forEach((question) => {
        expect(question.topic_id).toBe(group.topic.id);
        expect(question.use_cases).toContain("simulator");
        expect(question.options).toHaveLength(3);
        expect(new Set(question.options).size).toBe(3);
        expect(question.correct_option_index).toBeGreaterThanOrEqual(0);
        expect(question.correct_option_index).toBeLessThan(3);
        expect(question.explanation.trim().length).toBeGreaterThan(0);
      });
    });
  });

  it("no repite preguntas entre temas y cubre las veinte preguntas del piloto", async () => {
    const groups = await get_pilot_simulator();
    const question_ids = groups.flatMap((group) =>
      group.questions.map((question) => question.id),
    );

    expect(question_ids).toHaveLength(20);
    expect(new Set(question_ids).size).toBe(20);
  });

  it("mantiene el mismo tema y lección relacionada dentro de cada grupo", async () => {
    const groups = await get_pilot_simulator();
    const tipos_de_variables = groups.find(
      (group) => group.topic.id === "pm-1-1-1-tipos-de-variables",
    );

    expect(tipos_de_variables).toMatchObject({
      lesson: { id: "pm-tipos-de-variables-01", title: "variables estadísticas" },
    });
    expect(tipos_de_variables?.questions.map((question) => question.id)).toEqual([
      "pm-tv-001",
      "pm-tv-002",
      "pm-tv-003",
      "pm-tv-004",
      "pm-tv-005",
    ]);
  });
});

describe("flatten_pilot_simulator_groups", () => {
  it("produce una lista plana de veinte elementos en orden de tema y de lección", async () => {
    const groups = await get_pilot_simulator();
    const items = flatten_pilot_simulator_groups(groups);

    expect(items).toHaveLength(20);
    expect(items.map((item) => item.question.id)).toEqual(
      groups.flatMap((group) => group.questions.map((question) => question.id)),
    );
    items.forEach((item) => {
      expect(item.question.topic_id).toBe(item.topic.id);
    });
  });
});
