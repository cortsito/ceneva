import type { question } from "@content/questions/types";

import { get_pilot_curriculum } from "@/features/curriculum/pilot-curriculum";
import { get_pilot_topic_practice } from "@/features/practice/pilot-topic-practice";

export type pilot_simulator_group = {
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

export type pilot_simulator_item = {
  topic: pilot_simulator_group["topic"];
  lesson: pilot_simulator_group["lesson"];
  question: question;
};

export async function get_pilot_simulator(): Promise<pilot_simulator_group[]> {
  const { unit } = get_pilot_curriculum();
  const groups: pilot_simulator_group[] = [];

  for (const topic of unit.topics) {
    const practice = await get_pilot_topic_practice(topic.id);

    if (!practice) {
      throw new Error(`no se encontró el tema piloto ${topic.id} para el simulacro.`);
    }

    practice.questions.forEach((question) => {
      if (!question.use_cases.includes("simulator")) {
        throw new Error(
          `la pregunta ${question.id} no está habilitada para simulacro.`,
        );
      }
    });

    groups.push({
      topic: practice.topic,
      lesson: practice.lesson,
      questions: practice.questions,
    });
  }

  return groups;
}

export function flatten_pilot_simulator_groups(
  groups: pilot_simulator_group[],
): pilot_simulator_item[] {
  return groups.flatMap((group) =>
    group.questions.map((question) => ({
      topic: group.topic,
      lesson: group.lesson,
      question,
    })),
  );
}
