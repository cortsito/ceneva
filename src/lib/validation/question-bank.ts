import type { question } from "@content/questions/types";

export function find_invalid_options(question: question): string[] {
  const errors: string[] = [];

  const unique_options = new Set(question.options);

  if (question.options.length !== 3 || unique_options.size !== 3) {
    errors.push(`${question.id} debe tener exactamente tres opciones distintas.`);
  }

  if (
    question.correct_option_index < 0 ||
    question.correct_option_index >= question.options.length
  ) {
    errors.push(`${question.id} tiene una respuesta correcta inválida.`);
  }

  if (question.explanation.trim().length === 0) {
    errors.push(`${question.id} requiere una explicación.`);
  }

  if (!question.common_error || question.common_error.trim().length === 0) {
    errors.push(`${question.id} requiere un error común.`);
  }

  if (!question.source_reference || question.source_reference.trim().length === 0) {
    errors.push(`${question.id} requiere una referencia de origen.`);
  }

  return errors;
}

export function find_duplicate_ids(...banks: question[][]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const bank of banks) {
    for (const question of bank) {
      if (seen.has(question.id)) {
        duplicates.add(question.id);
      }

      seen.add(question.id);
    }
  }

  return Array.from(duplicates);
}

export function group_questions_by_topic(
  questions: question[],
): Map<string, question[]> {
  const grouped = new Map<string, question[]>();

  for (const question of questions) {
    const topic_questions = grouped.get(question.topic_id) ?? [];
    topic_questions.push(question);
    grouped.set(question.topic_id, topic_questions);
  }

  return grouped;
}
