import type { question } from "@content/questions/types";

import {
  get_available_unit,
  get_unit_questions,
} from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";
import { get_unit_lessons, type lesson } from "@/features/lesson/unit-lessons";

export type topic_question = {
  question: question;
  lesson: { id: string; title: string };
};

export type topic_content = {
  topic: { id: string; title: string; code: string };
  lessons: { id: string; title: string }[];
  questions: topic_question[];
};

export type unit_topic_practice = {
  topic: { id: string; title: string; code: string };
  lesson: { id: string; title: string };
  questions: question[];
};

export function validate_question_shape(question: question, topic_id: string): void {
  if (question.topic_id !== topic_id) {
    throw new Error(`la pregunta ${question.id} no pertenece al tema ${topic_id}.`);
  }

  if (
    question.options.length !== 3 ||
    new Set(question.options).size !== question.options.length
  ) {
    throw new Error(`la pregunta ${question.id} debe tener tres opciones distintas.`);
  }

  if (
    question.correct_option_index < 0 ||
    question.correct_option_index >= question.options.length
  ) {
    throw new Error(
      `la pregunta ${question.id} tiene una respuesta correcta inválida.`,
    );
  }

  if (question.explanation.trim().length === 0) {
    throw new Error(`la pregunta ${question.id} requiere una explicación.`);
  }
}

export function get_lesson_questions(
  lesson: lesson,
  questions_by_id: Map<string, question>,
): question[] {
  return lesson.question_ids.map((question_id) => {
    const question = questions_by_id.get(question_id);

    if (!question) {
      throw new Error(`no se encontró la pregunta ${question_id} de ${lesson.id}.`);
    }

    validate_question_shape(question, lesson.topic_id);

    return question;
  });
}

export function get_lesson_questions_for_unit(lesson: lesson): question[] {
  const bank = get_unit_questions(lesson.area_id, lesson.unit_id) ?? [];
  const questions_by_id = new Map(bank.map((question) => [question.id, question]));

  return get_lesson_questions(lesson, questions_by_id);
}

export function resolve_topic_questions(
  topic_lesson_ids: string[],
  lessons: lesson[],
  questions_by_id: Map<string, question>,
): topic_question[] {
  const topic_lessons = lessons.filter((candidate) =>
    topic_lesson_ids.includes(candidate.id),
  );

  return topic_lessons.flatMap((topic_lesson) =>
    get_lesson_questions(topic_lesson, questions_by_id).map((question) => ({
      question,
      lesson: { id: topic_lesson.id, title: topic_lesson.title },
    })),
  );
}

export async function get_topic_content(
  area_id: string,
  unit_id: string,
  topic_id: string,
): Promise<topic_content | undefined> {
  const resolved = get_available_unit(area_id, unit_id);

  if (!resolved) {
    return undefined;
  }

  const topic = resolved.unit.topics.find((candidate) => candidate.id === topic_id);

  if (!topic) {
    return undefined;
  }

  const lessons = await get_unit_lessons(area_id, unit_id);
  const topic_lessons = lessons.filter((candidate) =>
    topic.lesson_ids.includes(candidate.id),
  );

  if (topic_lessons.length === 0) {
    return undefined;
  }

  const bank = get_unit_questions(area_id, unit_id) ?? [];
  const questions_by_id = new Map(bank.map((question) => [question.id, question]));

  return {
    topic: { id: topic.id, title: topic.title, code: topic.source.code },
    lessons: topic_lessons.map(({ id, title }) => ({ id, title })),
    questions: resolve_topic_questions(topic.lesson_ids, lessons, questions_by_id),
  };
}

export async function get_unit_topic_practice(
  area_id: string,
  unit_id: string,
  topic_id: string,
): Promise<unit_topic_practice | undefined> {
  const content = await get_topic_content(area_id, unit_id, topic_id);

  if (!content) {
    return undefined;
  }

  const [lesson] = content.lessons;

  if (!lesson) {
    return undefined;
  }

  return {
    topic: content.topic,
    lesson,
    questions: content.questions.map((item) => item.question),
  };
}

export async function get_available_topic_content(
  topic_id: string,
): Promise<topic_content | undefined> {
  for (const entry of available_units) {
    const content = await get_topic_content(entry.area_id, entry.unit_id, topic_id);

    if (content) {
      return content;
    }
  }

  return undefined;
}
