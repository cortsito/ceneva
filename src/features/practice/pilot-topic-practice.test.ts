import { describe, expect, it } from "vitest";

import { get_pilot_topic_practice } from "./pilot-topic-practice";

describe("get_pilot_topic_practice", () => {
  it("resuelve el tema, su lección relacionada y sus cinco preguntas", async () => {
    const practice = await get_pilot_topic_practice("pm-1-1-1-tipos-de-variables");

    expect(practice).toMatchObject({
      topic: {
        id: "pm-1-1-1-tipos-de-variables",
        title: "tipos de variables",
        code: "1.1.1",
      },
      lesson: {
        id: "pm-tipos-de-variables-01",
        title: "variables estadísticas",
      },
    });
    expect(practice?.questions).toHaveLength(5);
    expect(practice?.questions.map((question) => question.id)).toEqual([
      "pm-tv-001",
      "pm-tv-002",
      "pm-tv-003",
      "pm-tv-004",
      "pm-tv-005",
    ]);
    expect(
      practice?.questions.every((question) => question.topic_id === practice.topic.id),
    ).toBe(true);
    expect(practice?.questions.every((question) => question.options.length === 3)).toBe(
      true,
    );
    expect(
      practice?.questions.every(
        (question) => new Set(question.options).size === question.options.length,
      ),
    ).toBe(true);
  });

  it("resuelve los cuatro temas piloto sin mezclar preguntas entre ellos", async () => {
    const topic_ids = [
      "pm-1-1-1-tipos-de-variables",
      "pm-1-1-2-tipos-de-muestra",
      "pm-1-1-3-medidas-de-tendencia-central",
      "pm-1-1-4-medidas-de-dispersion",
    ];

    const all_question_ids = new Set<string>();

    for (const topic_id of topic_ids) {
      const practice = await get_pilot_topic_practice(topic_id);

      expect(practice).toBeDefined();
      practice?.questions.forEach((question) => {
        expect(all_question_ids.has(question.id)).toBe(false);
        all_question_ids.add(question.id);
      });
    }

    expect(all_question_ids.size).toBe(20);
  });

  it("no resuelve ids de tema inválidos o ajenos al piloto", async () => {
    await expect(get_pilot_topic_practice("tema-inexistente")).resolves.toBeUndefined();
    await expect(
      get_pilot_topic_practice("pm-1-2-1-tecnicas-de-conteo"),
    ).resolves.toBeUndefined();
  });
});
