import { describe, expect, it } from "vitest";

import { get_pilot_review_candidates } from "./pilot-review-candidates";

describe("get_pilot_review_candidates", () => {
  it("resuelve las veinte preguntas piloto con su tema y lección", async () => {
    const candidates = await get_pilot_review_candidates();

    expect(candidates).toHaveLength(20);
    expect(new Set(candidates.map((candidate) => candidate.question.id)).size).toBe(20);
    expect(
      candidates.every(
        (candidate) => candidate.question.topic_id === candidate.topic.id,
      ),
    ).toBe(true);

    const tipos_de_variables_candidate = candidates.find(
      (candidate) => candidate.question.id === "pm-tv-001",
    );

    expect(tipos_de_variables_candidate).toMatchObject({
      topic: { id: "pm-1-1-1-tipos-de-variables", title: "tipos de variables" },
      lesson: { id: "pm-tipos-de-variables-01", title: "variables estadísticas" },
    });
  });
});
