import { describe, expect, it } from "vitest";

import type {
  pilot_topic_progress_definition,
  topic_progress,
  topic_status,
} from "@/features/progress/pilot-progress";

import { get_diagnostic_recommendation } from "./diagnostic-recommendation";
import type { diagnostic_answer } from "./diagnostic-recommendation";
import type { area_diagnostic_item } from "./area-diagnostic";

function create_item(topic_id: string, question_id: string): area_diagnostic_item {
  return {
    topic: { id: topic_id, title: `tema ${topic_id}`, code: "1.1.1" },
    lesson: { id: `${topic_id}-leccion`, title: `lección ${topic_id}` },
    question: {
      id: question_id,
      topic_id,
      prompt: `pregunta de ${topic_id}`,
      options: ["a", "b", "c"],
      correct_option_index: 0,
      explanation: "explicación",
      difficulty: "basic",
      use_cases: ["diagnostic"],
    },
  };
}

function create_definition(topic_id: string): pilot_topic_progress_definition {
  return {
    id: topic_id,
    title: `tema ${topic_id}`,
    code: "1.1.1",
    lesson_ids: [`${topic_id}-leccion`],
    prerequisite_lesson_ids: [],
    question_ids: [`${topic_id}-q1`],
    lessons: [{ id: `${topic_id}-leccion`, title: `lección ${topic_id}` }],
  };
}

function create_topic_progress(topic_id: string, status: topic_status): topic_progress {
  return {
    definition: create_definition(topic_id),
    status,
    completed_lesson_count: 0,
    attempt_count: 0,
    correct_attempt_count: 0,
    accuracy: undefined,
  };
}

function answer(question_id: string, is_correct: boolean): diagnostic_answer {
  return { question_id, selected_option_index: 0, is_correct };
}

describe("get_diagnostic_recommendation", () => {
  const items = [
    create_item("t1", "q1"),
    create_item("t2", "q2"),
    create_item("t3", "q3"),
    create_item("t4", "q4"),
  ];
  const all_disponible = [
    create_topic_progress("t1", "disponible"),
    create_topic_progress("t2", "disponible"),
    create_topic_progress("t3", "disponible"),
    create_topic_progress("t4", "disponible"),
  ];

  it("recomienda el primer tema incorrecto en orden curricular", () => {
    const answers = {
      q1: answer("q1", true),
      q2: answer("q2", false),
      q3: answer("q3", false),
      q4: answer("q4", true),
    };

    expect(get_diagnostic_recommendation(items, answers, all_disponible)).toEqual({
      topic_id: "t2",
      topic_title: "tema t2",
      lesson_id: "t2-leccion",
      lesson_title: "lección t2",
    });
  });

  it("recomienda el primer tema accesible cuando todas las respuestas son correctas, sin recomendar un tema bloqueado", () => {
    const answers = {
      q1: answer("q1", true),
      q2: answer("q2", true),
      q3: answer("q3", true),
      q4: answer("q4", true),
    };
    const topics = [
      create_topic_progress("t1", "bloqueado"),
      create_topic_progress("t2", "disponible"),
      create_topic_progress("t3", "en progreso"),
      create_topic_progress("t4", "dominado"),
    ];

    expect(get_diagnostic_recommendation(items, answers, topics)).toEqual({
      topic_id: "t2",
      topic_title: "tema t2",
      lesson_id: "t2-leccion",
      lesson_title: "lección t2",
    });
  });

  it("cae al primer tema del diagnóstico si ninguno está accesible con todo correcto", () => {
    const answers = {
      q1: answer("q1", true),
      q2: answer("q2", true),
      q3: answer("q3", true),
      q4: answer("q4", true),
    };
    const topics = [
      create_topic_progress("t1", "bloqueado"),
      create_topic_progress("t2", "bloqueado"),
      create_topic_progress("t3", "bloqueado"),
      create_topic_progress("t4", "bloqueado"),
    ];

    expect(get_diagnostic_recommendation(items, answers, topics)).toEqual({
      topic_id: "t1",
      topic_title: "tema t1",
      lesson_id: "t1-leccion",
      lesson_title: "lección t1",
    });
  });
});
