import { describe, expect, it } from "vitest";

import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";
import type { learner_attempt } from "@/lib/storage/progress-repository";

import { select_pending_review_items } from "./pilot-review";

function create_candidate(question_id: string): pilot_review_candidate {
  return {
    question: {
      id: question_id,
      topic_id: "tema-piloto",
      prompt: `pregunta ${question_id}`,
      options: ["a", "b", "c"],
      correct_option_index: 0,
      explanation: `explicación de ${question_id}`,
      difficulty: "basic",
      use_cases: ["practice"],
    },
    topic: { id: "tema-piloto", title: "tema piloto", code: "1.1.1" },
    lesson: { id: "leccion-piloto", title: "lección piloto" },
  };
}

function create_attempt(
  question_id: string,
  is_correct: boolean,
  created_at: string,
): learner_attempt {
  return {
    question_id,
    selected_option_index: is_correct ? 0 : 1,
    is_correct,
    created_at,
    mode: "practice",
  };
}

const candidates = [
  create_candidate("q1"),
  create_candidate("q2"),
  create_candidate("q3"),
  create_candidate("q4"),
  create_candidate("q5"),
  create_candidate("q6"),
];

describe("select_pending_review_items", () => {
  it("deduplica y conserva solo el intento más reciente por pregunta", () => {
    const attempts = [
      create_attempt("q1", false, "2026-09-14T00:00:00.000Z"),
      create_attempt("q1", false, "2026-09-14T00:01:00.000Z"),
      create_attempt("q1", false, "2026-09-14T00:02:00.000Z"),
    ];

    const queue = select_pending_review_items(candidates, attempts);

    expect(queue).toHaveLength(1);
    expect(queue[0]?.latest_attempt.created_at).toBe("2026-09-14T00:02:00.000Z");
  });

  it("el intento más reciente decide si la pregunta está pendiente", () => {
    const now_correct = [
      create_attempt("q1", false, "2026-09-14T00:00:00.000Z"),
      create_attempt("q1", true, "2026-09-14T00:01:00.000Z"),
    ];
    const now_incorrect = [
      create_attempt("q2", true, "2026-09-14T00:00:00.000Z"),
      create_attempt("q2", false, "2026-09-14T00:01:00.000Z"),
    ];

    expect(select_pending_review_items(candidates, now_correct)).toHaveLength(0);

    const queue = select_pending_review_items(candidates, now_incorrect);

    expect(queue).toHaveLength(1);
    expect(queue[0]?.question.id).toBe("q2");
  });

  it("ordena por intento pendiente más reciente y conserva el orden guardado en empates", () => {
    const attempts = [
      create_attempt("q1", false, "2026-09-14T00:00:00.000Z"),
      create_attempt("q2", false, "2026-09-14T00:00:00.000Z"),
      create_attempt("q3", false, "2026-09-14T00:05:00.000Z"),
    ];

    const queue = select_pending_review_items(candidates, attempts);

    expect(queue.map((item) => item.question.id)).toEqual(["q3", "q1", "q2"]);
  });

  it("limita la cola a cinco preguntas, priorizando las más recientes", () => {
    const attempts = [
      create_attempt("q1", false, "2026-09-14T00:00:00.000Z"),
      create_attempt("q2", false, "2026-09-14T00:01:00.000Z"),
      create_attempt("q3", false, "2026-09-14T00:02:00.000Z"),
      create_attempt("q4", false, "2026-09-14T00:03:00.000Z"),
      create_attempt("q5", false, "2026-09-14T00:04:00.000Z"),
      create_attempt("q6", false, "2026-09-14T00:05:00.000Z"),
    ];

    const queue = select_pending_review_items(candidates, attempts);

    expect(queue).toHaveLength(5);
    expect(queue.map((item) => item.question.id)).toEqual([
      "q6",
      "q5",
      "q4",
      "q3",
      "q2",
    ]);
  });

  it("ignora intentos de preguntas ajenas al piloto", () => {
    const attempts = [
      create_attempt("pregunta-ajena", false, "2026-09-14T00:00:00.000Z"),
      create_attempt("q1", false, "2026-09-14T00:01:00.000Z"),
    ];

    const queue = select_pending_review_items(candidates, attempts);

    expect(queue).toHaveLength(1);
    expect(queue[0]?.question.id).toBe("q1");
  });
});
