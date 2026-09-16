import { describe, expect, it } from "vitest";

import {
  calculate_pilot_simulator_report,
  type pilot_simulator_answer,
} from "./pilot-simulator-report";
import type { pilot_simulator_item } from "./pilot-simulator";

function create_item(
  topic_id: string,
  question_id: string,
  lesson_id = `${topic_id}-leccion`,
): pilot_simulator_item {
  return {
    topic: { id: topic_id, title: `tema ${topic_id}`, code: "1.1.1" },
    lesson: { id: lesson_id, title: `lección ${topic_id}` },
    question: {
      id: question_id,
      topic_id,
      prompt: `pregunta ${question_id}`,
      options: ["a", "b", "c"],
      correct_option_index: 0,
      explanation: `explicación ${question_id}`,
      difficulty: "basic",
      use_cases: ["simulator"],
    },
  };
}

function answer(question_id: string, is_correct: boolean): pilot_simulator_answer {
  return { question_id, selected_option_index: is_correct ? 0 : 1, is_correct };
}

describe("calculate_pilot_simulator_report", () => {
  it("calcula el puntaje total y agrupa cada tema en orden, con precisión y conteos", () => {
    const items = [
      create_item("t1", "q1"),
      create_item("t1", "q2"),
      create_item("t2", "q3"),
      create_item("t2", "q4"),
    ];
    const answers = {
      q1: answer("q1", true),
      q2: answer("q2", false),
      q3: answer("q3", true),
      q4: answer("q4", true),
    };

    const report = calculate_pilot_simulator_report(items, answers);

    expect(report.correct_count).toBe(3);
    expect(report.total_count).toBe(4);
    expect(report.topics.map((topic) => topic.topic.id)).toEqual(["t1", "t2"]);
    expect(report.topics[0]).toMatchObject({
      correct_count: 1,
      total_count: 2,
      accuracy: 0.5,
    });
    expect(report.topics[1]).toMatchObject({
      correct_count: 2,
      total_count: 2,
      accuracy: 1,
    });
  });

  it("solo incluye las respuestas incorrectas de cada tema, con su respuesta y la correcta", () => {
    const items = [create_item("t1", "q1"), create_item("t1", "q2")];
    const answers = {
      q1: answer("q1", true),
      q2: answer("q2", false),
    };

    const report = calculate_pilot_simulator_report(items, answers);

    expect(report.topics[0].incorrect_items).toHaveLength(1);
    expect(report.topics[0].incorrect_items[0]).toMatchObject({
      selected_option_index: 1,
      question: { id: "q2", correct_option_index: 0 },
    });
  });

  it("enlaza cada tema con incorrectas a su lección relacionada", () => {
    const items = [create_item("t1", "q1", "leccion-uno")];
    const answers = { q1: answer("q1", false) };

    const report = calculate_pilot_simulator_report(items, answers);

    expect(report.topics[0].lesson).toEqual({
      id: "leccion-uno",
      title: "lección t1",
    });
  });

  it("reporta cero errores cuando todas las respuestas de un tema son correctas", () => {
    const items = [create_item("t1", "q1"), create_item("t1", "q2")];
    const answers = {
      q1: answer("q1", true),
      q2: answer("q2", true),
    };

    const report = calculate_pilot_simulator_report(items, answers);

    expect(report.topics[0].incorrect_items).toEqual([]);
    expect(report.topics[0].accuracy).toBe(1);
  });
});
