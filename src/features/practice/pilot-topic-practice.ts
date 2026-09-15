import {
  pensamiento_matematico_questions,
  type question,
} from "@content/questions/pensamiento-matematico";

import { get_pilot_curriculum } from "@/features/curriculum/pilot-curriculum";
import { get_pilot_lessons } from "@/features/lesson/pilot-lessons";

export type pilot_topic_practice = {
  topic: {
    id: string;
    title: string;
    code: string;
  };
  lesson: {
    id: string;
    title: string;
  };
  questions: question[];
};

const questions_by_id = new Map(
  pensamiento_matematico_questions.map((question) => [question.id, question]),
);

function validate_topic_question(question: question, topic_id: string): void {
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

export async function get_pilot_topic_practice(
  topic_id: string,
): Promise<pilot_topic_practice | undefined> {
  const { unit } = get_pilot_curriculum();
  const topic = unit.topics.find((candidate) => candidate.id === topic_id);

  if (!topic) {
    return undefined;
  }

  const lessons = await get_pilot_lessons();
  const lesson = lessons.find((candidate) => candidate.topic_id === topic_id);

  if (!lesson) {
    return undefined;
  }

  const questions = lesson.question_ids.map((question_id) => {
    const question = questions_by_id.get(question_id);

    if (!question) {
      throw new Error(
        `no se encontró la pregunta ${question_id} del tema ${topic_id}.`,
      );
    }

    validate_topic_question(question, topic_id);

    return question;
  });

  return {
    topic: {
      id: topic.id,
      title: topic.title,
      code: topic.source.code,
    },
    lesson: {
      id: lesson.id,
      title: lesson.title,
    },
    questions,
  };
}
