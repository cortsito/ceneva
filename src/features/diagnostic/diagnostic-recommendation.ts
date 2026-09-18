import type { topic_progress } from "@/features/progress/pilot-progress";

import type { area_diagnostic_item } from "./area-diagnostic";

export type diagnostic_answer = {
  question_id: string;
  selected_option_index: number;
  is_correct: boolean;
};

export type diagnostic_recommendation = {
  topic_id: string;
  topic_title: string;
  lesson_id: string;
  lesson_title: string;
};

function to_recommendation(item: area_diagnostic_item): diagnostic_recommendation {
  return {
    topic_id: item.topic.id,
    topic_title: item.topic.title,
    lesson_id: item.lesson.id,
    lesson_title: item.lesson.title,
  };
}

export function get_diagnostic_recommendation(
  items: area_diagnostic_item[],
  answers: Record<string, diagnostic_answer>,
  topics: topic_progress[],
): diagnostic_recommendation {
  const first_incorrect_item = items.find(
    (item) => answers[item.question.id]?.is_correct === false,
  );

  if (first_incorrect_item) {
    return to_recommendation(first_incorrect_item);
  }

  const accessible_topic_ids = new Set(
    topics
      .filter((topic) => topic.status !== "bloqueado")
      .map((topic) => topic.definition.id),
  );
  const fallback_item =
    items.find((item) => accessible_topic_ids.has(item.topic.id)) ?? items[0];

  return to_recommendation(fallback_item);
}
