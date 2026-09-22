import { describe, expect, it } from "vitest";

import {
  calculate_simulator_coverage_report,
  type simulator_answer,
} from "./simulator-report";
import type { simulator_coverage_item } from "./simulator-coverage";

function create_item(
  area_id: string,
  topic_id: string,
  question_id: string,
  lesson_id = `${topic_id}-leccion`,
): simulator_coverage_item {
  return {
    area: { id: area_id, title: `área ${area_id}` },
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

function answer(question_id: string, is_correct: boolean): simulator_answer {
  return { question_id, selected_option_index: is_correct ? 0 : 1, is_correct };
}

describe("calculate_simulator_coverage_report", () => {
  it("calcula el puntaje total y agrupa cada área en orden, con precisión y conteos", () => {
    const items = [
      create_item("a1", "t1", "q1"),
      create_item("a1", "t2", "q2"),
      create_item("a2", "t3", "q3"),
      create_item("a2", "t4", "q4"),
    ];
    const answers = {
      q1: answer("q1", true),
      q2: answer("q2", false),
      q3: answer("q3", true),
      q4: answer("q4", true),
    };

    const report = calculate_simulator_coverage_report(items, answers);

    expect(report.correct_count).toBe(3);
    expect(report.total_count).toBe(4);
    expect(report.areas.map((area) => area.area.id)).toEqual(["a1", "a2"]);
    expect(report.areas[0]).toMatchObject({
      correct_count: 1,
      total_count: 2,
      accuracy: 0.5,
    });
    expect(report.areas[1]).toMatchObject({
      correct_count: 2,
      total_count: 2,
      accuracy: 1,
    });
  });

  it("agrupa los temas dentro de cada área en el orden en que aparecen", () => {
    const items = [create_item("a1", "t1", "q1"), create_item("a1", "t2", "q2")];
    const answers = { q1: answer("q1", true), q2: answer("q2", false) };

    const report = calculate_simulator_coverage_report(items, answers);

    expect(report.areas[0].topics.map((topic) => topic.topic.id)).toEqual(["t1", "t2"]);
  });

  it("solo incluye la pregunta incorrecta en el tema fallado, con su respuesta y la correcta", () => {
    const items = [create_item("a1", "t1", "q1"), create_item("a1", "t2", "q2")];
    const answers = { q1: answer("q1", true), q2: answer("q2", false) };

    const report = calculate_simulator_coverage_report(items, answers);

    expect(report.areas[0].topics[0].incorrect_items).toEqual([]);
    expect(report.areas[0].topics[1].incorrect_items).toHaveLength(1);
    expect(report.areas[0].topics[1].incorrect_items[0]).toMatchObject({
      selected_option_index: 1,
      question: { id: "q2", correct_option_index: 0 },
    });
    expect(report.areas[0].topics[0].result_items[0]).toMatchObject({
      is_correct: true,
      selected_option_index: 0,
      question: { id: "q1" },
    });
    expect(report.areas[0].topics[1].result_items[0]).toMatchObject({
      is_correct: false,
      selected_option_index: 1,
      question: { id: "q2" },
    });
  });

  it("enlaza cada tema fallado a su lección relacionada", () => {
    const items = [create_item("a1", "t1", "q1", "leccion-uno")];
    const answers = { q1: answer("q1", false) };

    const report = calculate_simulator_coverage_report(items, answers);

    expect(report.areas[0].topics[0].lesson).toEqual({
      id: "leccion-uno",
      title: "lección t1",
    });
  });

  it("reporta cero errores cuando todas las respuestas de un área son correctas", () => {
    const items = [create_item("a1", "t1", "q1"), create_item("a1", "t2", "q2")];
    const answers = { q1: answer("q1", true), q2: answer("q2", true) };

    const report = calculate_simulator_coverage_report(items, answers);

    report.areas[0].topics.forEach((topic) => {
      expect(topic.incorrect_items).toEqual([]);
      expect(topic.accuracy).toBe(1);
    });
  });
});
