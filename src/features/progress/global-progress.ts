import type { learner_progress } from "@/lib/storage/progress-repository";

import {
  calculate_topic_progress,
  type pilot_topic_progress_definition,
  type topic_progress,
} from "./pilot-progress";
import { calculate_pilot_summary, type pilot_summary } from "./pilot-summary";

export type area_topic_definitions = {
  area_id: string;
  area_title: string;
  topic_definitions: pilot_topic_progress_definition[];
};

export type area_progress = {
  area_id: string;
  area_title: string;
  topics: topic_progress[];
  summary: pilot_summary;
};

export function calculate_global_progress(
  areas: area_topic_definitions[],
  progress: learner_progress,
): area_progress[] {
  return areas.map((entry) => {
    const topics = entry.topic_definitions.map((definition) =>
      calculate_topic_progress(definition, progress),
    );

    return {
      area_id: entry.area_id,
      area_title: entry.area_title,
      topics,
      summary: calculate_pilot_summary(topics, 0),
    };
  });
}

export type global_next_action =
  | {
      kind: "lesson";
      area_id: string;
      area_title: string;
      topic_id: string;
      lesson_id: string;
      href: string;
      label: string;
    }
  | {
      kind: "practice";
      area_id: string;
      area_title: string;
      topic_id: string;
      href: string;
      label: string;
    }
  | { kind: "completed" };

export function get_global_next_action(
  areas: area_progress[],
  completed_lesson_ids: string[],
): global_next_action {
  for (const area of areas) {
    const target_topic = area.topics.find(
      (topic) => topic.status !== "bloqueado" && topic.status !== "dominado",
    );

    if (!target_topic) {
      continue;
    }

    const incomplete_lesson = target_topic.definition.lessons.find(
      (lesson) => !completed_lesson_ids.includes(lesson.id),
    );

    if (incomplete_lesson) {
      return {
        kind: "lesson",
        area_id: area.area_id,
        area_title: area.area_title,
        topic_id: target_topic.definition.id,
        lesson_id: incomplete_lesson.id,
        href: `/leccion/${incomplete_lesson.id}`,
        label: `continuar ${incomplete_lesson.title}`,
      };
    }

    return {
      kind: "practice",
      area_id: area.area_id,
      area_title: area.area_title,
      topic_id: target_topic.definition.id,
      href: `/practica/${target_topic.definition.id}`,
      label: `practicar ${target_topic.definition.title}`,
    };
  }

  return { kind: "completed" };
}
