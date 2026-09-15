"use client";

import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";

import {
  calculate_topic_progress,
  type pilot_topic_progress_definition,
  type topic_progress,
} from "./pilot-progress";
import { select_pending_review_items } from "./pilot-review";
import {
  calculate_pilot_summary,
  get_pilot_next_action,
  type pilot_next_action,
  type pilot_summary,
} from "./pilot-summary";
import { usePilotProgress } from "./use-pilot-progress";

type pilot_dashboard = {
  is_hydrated: boolean;
  topics: topic_progress[];
  summary: pilot_summary;
  next_action: pilot_next_action;
};

export function usePilotDashboard(
  topic_definitions: pilot_topic_progress_definition[],
  review_candidates: pilot_review_candidate[],
): pilot_dashboard {
  const { progress, is_hydrated } = usePilotProgress();
  const topics = topic_definitions.map((definition) =>
    calculate_topic_progress(definition, progress),
  );
  const pending_review_count = select_pending_review_items(
    review_candidates,
    progress.attempts,
  ).length;

  return {
    is_hydrated,
    topics,
    summary: calculate_pilot_summary(topics, pending_review_count),
    next_action: get_pilot_next_action(topics, progress.completed_lesson_ids),
  };
}
