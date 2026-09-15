import { describe, expect, it } from "vitest";

import type { pilot_topic_progress_definition, topic_progress } from "./pilot-progress";
import { calculate_pilot_summary, get_pilot_next_action } from "./pilot-summary";

function create_definition(
  id: string,
  lesson_id: string,
): pilot_topic_progress_definition {
  return {
    id,
    title: `tema ${id}`,
    code: "1.1.1",
    lesson_ids: [lesson_id],
    prerequisite_lesson_ids: [],
    question_ids: [`${id}-q1`, `${id}-q2`, `${id}-q3`, `${id}-q4`, `${id}-q5`],
    lessons: [{ id: lesson_id, title: `lección ${id}` }],
  };
}

function create_topic_progress(
  definition: pilot_topic_progress_definition,
  overrides: Partial<topic_progress> = {},
): topic_progress {
  return {
    definition,
    status: "disponible",
    completed_lesson_count: 0,
    attempt_count: 0,
    correct_attempt_count: 0,
    accuracy: undefined,
    ...overrides,
  };
}

describe("calculate_pilot_summary", () => {
  it("reporta ceros y precisión indefinida con progreso vacío", () => {
    const definition = create_definition("t1", "l1");
    const topics = [create_topic_progress(definition)];

    const summary = calculate_pilot_summary(topics, 0);

    expect(summary).toEqual({
      total_topics: 1,
      dominated_topics: 0,
      completed_lessons: 0,
      total_lessons: 1,
      accuracy: undefined,
      pending_review_count: 0,
    });
  });

  it("agrega temas dominados, lecciones completadas, precisión y repaso pendiente", () => {
    const definition_a = create_definition("t1", "l1");
    const definition_b = create_definition("t2", "l2");
    const topics = [
      create_topic_progress(definition_a, {
        status: "dominado",
        completed_lesson_count: 1,
        attempt_count: 5,
        correct_attempt_count: 4,
        accuracy: 0.8,
      }),
      create_topic_progress(definition_b, {
        status: "en progreso",
        completed_lesson_count: 1,
        attempt_count: 3,
        correct_attempt_count: 1,
        accuracy: 1 / 3,
      }),
    ];

    const summary = calculate_pilot_summary(topics, 2);

    expect(summary).toEqual({
      total_topics: 2,
      dominated_topics: 1,
      completed_lessons: 2,
      total_lessons: 2,
      accuracy: 5 / 8,
      pending_review_count: 2,
    });
  });
});

describe("get_pilot_next_action", () => {
  it("recomienda la lección del primer tema cuando el progreso está vacío", () => {
    const definition = create_definition("t1", "l1");
    const topics = [create_topic_progress(definition)];

    expect(get_pilot_next_action(topics, [])).toEqual({
      kind: "lesson",
      href: "/leccion/l1",
      label: "continuar lección t1",
    });
  });

  it("recomienda practicar el tema cuando su lección ya está completa", () => {
    const definition = create_definition("t1", "l1");
    const topics = [
      create_topic_progress(definition, {
        status: "en progreso",
        completed_lesson_count: 1,
      }),
    ];

    expect(get_pilot_next_action(topics, ["l1"])).toEqual({
      kind: "practice",
      href: "/practica/t1",
      label: "practicar tema t1",
    });
  });

  it("omite temas dominados y bloqueados para encontrar el siguiente accesible", () => {
    const definition_a = create_definition("t1", "l1");
    const definition_b = create_definition("t2", "l2");
    const definition_c = create_definition("t3", "l3");
    const topics = [
      create_topic_progress(definition_a, { status: "dominado" }),
      create_topic_progress(definition_b, { status: "bloqueado" }),
      create_topic_progress(definition_c, { status: "disponible" }),
    ];

    expect(get_pilot_next_action(topics, [])).toEqual({
      kind: "lesson",
      href: "/leccion/l3",
      label: "continuar lección t3",
    });
  });

  it("indica finalización cuando todos los temas están dominados", () => {
    const definition = create_definition("t1", "l1");
    const topics = [create_topic_progress(definition, { status: "dominado" })];

    expect(get_pilot_next_action(topics, ["l1"])).toEqual({ kind: "completed" });
  });
});
