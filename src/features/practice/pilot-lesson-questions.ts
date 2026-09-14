import {
  pensamiento_matematico_questions,
  type question,
} from "@content/questions/pensamiento-matematico";

import type { pilot_lesson } from "@/features/lesson/pilot-lessons";

const questions_by_id = new Map(
  pensamiento_matematico_questions.map((question) => [question.id, question]),
);

function validate_question_for_lesson(question: question, lesson: pilot_lesson): void {
  if (question.topic_id !== lesson.topic_id) {
    throw new Error(
      `la pregunta ${question.id} no pertenece al tema ${lesson.topic_id}.`,
    );
  }

  if (question.options.length !== 3) {
    throw new Error(`la pregunta ${question.id} debe tener exactamente tres opciones.`);
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

export function get_pilot_lesson_questions(lesson: pilot_lesson): question[] {
  return lesson.question_ids.map((question_id) => {
    const question = questions_by_id.get(question_id);

    if (!question) {
      throw new Error(`no se encontró la pregunta ${question_id} de ${lesson.id}.`);
    }

    validate_question_for_lesson(question, lesson);

    return question;
  });
}
