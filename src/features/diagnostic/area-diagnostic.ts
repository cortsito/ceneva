import type { question } from "@content/questions/types";

import { get_available_unit_for_area } from "@/features/curriculum/available-curriculum";
import { get_topic_content } from "@/features/practice/unit-topic-content";

export type area_diagnostic_item = {
  topic: { id: string; title: string; code: string };
  lesson: { id: string; title: string };
  question: question;
};

export async function get_area_diagnostic(
  area_id: string,
): Promise<area_diagnostic_item[] | undefined> {
  const resolved = get_available_unit_for_area(area_id);

  if (!resolved) {
    return undefined;
  }

  const items: area_diagnostic_item[] = [];

  for (const topic of resolved.unit.topics) {
    const content = await get_topic_content(area_id, resolved.unit.id, topic.id);

    if (!content) {
      throw new Error(`no se encontró el tema ${topic.id} para el diagnóstico.`);
    }

    const diagnostic_item = content.questions.find(({ question }) =>
      question.use_cases.includes("diagnostic"),
    );

    if (!diagnostic_item) {
      throw new Error(`el tema ${topic.id} no tiene una pregunta de diagnóstico.`);
    }

    items.push({
      topic: content.topic,
      lesson: diagnostic_item.lesson,
      question: diagnostic_item.question,
    });
  }

  return items;
}
