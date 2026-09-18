import type { question } from "@content/questions/types";

import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";
import { get_topic_content } from "@/features/practice/unit-topic-content";

export type simulator_coverage_item = {
  area: { id: string; title: string };
  topic: { id: string; title: string; code: string };
  lesson: { id: string; title: string };
  question: question;
};

export function validate_simulator_question(
  question: question,
  topic_id: string,
): void {
  if (!question.use_cases.includes("simulator")) {
    throw new Error(`la pregunta ${question.id} no está habilitada para simulacro.`);
  }

  if (!question.common_error || question.common_error.trim().length === 0) {
    throw new Error(`la pregunta ${question.id} requiere un error común.`);
  }

  if (!question.source_reference || question.source_reference.trim().length === 0) {
    throw new Error(`la pregunta ${question.id} requiere una referencia de fuente.`);
  }

  if (question.topic_id !== topic_id) {
    throw new Error(`la pregunta ${question.id} no pertenece al tema ${topic_id}.`);
  }
}

export async function get_simulator_coverage(): Promise<simulator_coverage_item[]> {
  const items: simulator_coverage_item[] = [];

  for (const entry of available_units) {
    const resolved = get_available_unit(entry.area_id, entry.unit_id);

    if (!resolved) {
      throw new Error(`no se encontró la unidad ${entry.unit_id} para el simulacro.`);
    }

    for (const topic of resolved.unit.topics) {
      const content = await get_topic_content(entry.area_id, entry.unit_id, topic.id);

      if (!content) {
        throw new Error(`no se encontró el tema ${topic.id} para el simulacro.`);
      }

      const simulator_item = content.questions.find(({ question }) =>
        question.use_cases.includes("simulator"),
      );

      if (!simulator_item) {
        throw new Error(`el tema ${topic.id} no tiene una pregunta de simulacro.`);
      }

      validate_simulator_question(simulator_item.question, topic.id);

      items.push({
        area: { id: resolved.area.id, title: resolved.area.title },
        topic: content.topic,
        lesson: simulator_item.lesson,
        question: simulator_item.question,
      });
    }
  }

  const question_ids = items.map((item) => item.question.id);

  if (new Set(question_ids).size !== question_ids.length) {
    throw new Error("el simulacro de cobertura tiene preguntas repetidas.");
  }

  return items;
}
