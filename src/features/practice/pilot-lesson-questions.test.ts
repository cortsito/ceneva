import { describe, expect, it } from "vitest";

import { get_pilot_lesson, get_pilot_lessons } from "@/features/lesson/pilot-lessons";

import { get_pilot_lesson_questions } from "./pilot-lesson-questions";

describe("get_pilot_lesson_questions", () => {
  it("resuelve solo las cinco preguntas declaradas por cada lección piloto", async () => {
    const lessons = await get_pilot_lessons();
    const resolved_question_ids = lessons.flatMap((lesson) => {
      const questions = get_pilot_lesson_questions(lesson);

      expect(questions).toHaveLength(5);
      expect(questions.map((question) => question.id)).toEqual(lesson.question_ids);
      expect(questions.every((question) => question.topic_id === lesson.topic_id)).toBe(
        true,
      );
      expect(questions.every((question) => question.options.length === 3)).toBe(true);
      expect(questions.every((question) => question.explanation.length > 0)).toBe(true);

      return questions.map((question) => question.id);
    });

    expect(lessons).toHaveLength(4);
    expect(resolved_question_ids).toHaveLength(20);
    expect(new Set(resolved_question_ids)).toHaveLength(20);
  });

  it("rechaza una referencia de pregunta que no pertenece al tema de la lección", async () => {
    const lesson = await get_pilot_lesson("pm-tipos-de-variables-01");

    if (!lesson) {
      throw new Error("no se encontró la lección piloto para la prueba.");
    }

    expect(() =>
      get_pilot_lesson_questions({
        ...lesson,
        question_ids: ["pm-tm-001"],
      }),
    ).toThrow("no pertenece al tema");
  });
});
