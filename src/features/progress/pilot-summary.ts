import type { topic_progress } from "./pilot-progress";

export type pilot_summary = {
  total_topics: number;
  dominated_topics: number;
  completed_lessons: number;
  total_lessons: number;
  accuracy: number | undefined;
  pending_review_count: number;
};

export function calculate_pilot_summary(
  topics: topic_progress[],
  pending_review_count: number,
): pilot_summary {
  const total_lessons = topics.reduce(
    (sum, topic) => sum + topic.definition.lesson_ids.length,
    0,
  );
  const completed_lessons = topics.reduce(
    (sum, topic) => sum + topic.completed_lesson_count,
    0,
  );
  const total_attempts = topics.reduce((sum, topic) => sum + topic.attempt_count, 0);
  const total_correct_attempts = topics.reduce(
    (sum, topic) => sum + topic.correct_attempt_count,
    0,
  );

  return {
    total_topics: topics.length,
    dominated_topics: topics.filter((topic) => topic.status === "dominado").length,
    completed_lessons,
    total_lessons,
    accuracy: total_attempts > 0 ? total_correct_attempts / total_attempts : undefined,
    pending_review_count,
  };
}

export type pilot_next_action =
  | { kind: "lesson"; href: string; label: string }
  | { kind: "practice"; href: string; label: string }
  | { kind: "completed" };

export function get_pilot_next_action(
  topics: topic_progress[],
  completed_lesson_ids: string[],
): pilot_next_action {
  const target_topic = topics.find(
    (topic) => topic.status !== "bloqueado" && topic.status !== "dominado",
  );

  if (!target_topic) {
    return { kind: "completed" };
  }

  const incomplete_lesson = target_topic.definition.lessons.find(
    (lesson) => !completed_lesson_ids.includes(lesson.id),
  );

  if (incomplete_lesson) {
    return {
      kind: "lesson",
      href: `/leccion/${incomplete_lesson.id}`,
      label: `continuar ${incomplete_lesson.title}`,
    };
  }

  return {
    kind: "practice",
    href: `/practica/${target_topic.definition.id}`,
    label: `practicar ${target_topic.definition.title}`,
  };
}
