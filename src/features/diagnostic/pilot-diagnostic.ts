import type { question } from "@content/questions/types";

import { get_pilot_curriculum } from "@/features/curriculum/pilot-curriculum";
import { get_pilot_topic_practice } from "@/features/practice/pilot-topic-practice";

export type pilot_diagnostic_item = {
  topic: {
    id: string;
    title: string;
    code: string;
  };
  lesson: {
    id: string;
    title: string;
  };
  question: question;
};

const diagnostic_question_id_by_topic_id: Record<string, string> = {
  "pm-1-1-1-tipos-de-variables": "pm-tv-001",
  "pm-1-1-2-tipos-de-muestra": "pm-tm-001",
  "pm-1-1-3-medidas-de-tendencia-central": "pm-mtc-001",
  "pm-1-1-4-medidas-de-dispersion": "pm-md-003",
};

export async function get_pilot_diagnostic(): Promise<pilot_diagnostic_item[]> {
  const { unit } = get_pilot_curriculum();
  const items: pilot_diagnostic_item[] = [];

  for (const topic of unit.topics) {
    const diagnostic_question_id = diagnostic_question_id_by_topic_id[topic.id];

    if (!diagnostic_question_id) {
      throw new Error(
        `el tema ${topic.id} no tiene una pregunta de diagnóstico asignada.`,
      );
    }

    const practice = await get_pilot_topic_practice(topic.id);

    if (!practice) {
      throw new Error(`no se encontró el tema piloto ${topic.id} para el diagnóstico.`);
    }

    const question = practice.questions.find(
      (candidate) => candidate.id === diagnostic_question_id,
    );

    if (!question) {
      throw new Error(
        `no se encontró la pregunta de diagnóstico ${diagnostic_question_id}.`,
      );
    }

    if (!question.use_cases.includes("diagnostic")) {
      throw new Error(
        `la pregunta ${diagnostic_question_id} no está habilitada para diagnóstico.`,
      );
    }

    items.push({
      topic: practice.topic,
      lesson: practice.lesson,
      question,
    });
  }

  return items;
}
