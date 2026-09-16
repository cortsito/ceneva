import type { topic_progress } from "@/features/progress/pilot-progress";

import type { pilot_diagnostic_item } from "./pilot-diagnostic";

export type pilot_diagnostic_answer = {
  question_id: string;
  selected_option_index: number;
  is_correct: boolean;
};

export type pilot_diagnostic_recommendation = {
  topic_id: string;
  topic_title: string;
  lesson_id: string;
  lesson_title: string;
};

function to_recommendation(
  item: pilot_diagnostic_item,
): pilot_diagnostic_recommendation {
  return {
    topic_id: item.topic.id,
    topic_title: item.topic.title,
    lesson_id: item.lesson.id,
    lesson_title: item.lesson.title,
  };
}

export function get_pilot_diagnostic_recommendation(
  items: pilot_diagnostic_item[],
  answers: Record<string, pilot_diagnostic_answer>,
  topics: topic_progress[],
): pilot_diagnostic_recommendation {
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
