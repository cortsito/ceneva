"use client";

import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";

import {
  calculate_global_progress,
  get_global_next_action,
  type area_progress,
  type area_topic_definitions,
  type global_next_action,
} from "./global-progress";
import { select_pending_review_items } from "./pilot-review";
import { usePilotProgress } from "./use-pilot-progress";

type global_dashboard = {
  is_hydrated: boolean;
  area_progress: area_progress[];
  next_action: global_next_action;
  pending_review_count: number;
};

export function useGlobalDashboard(
  areas: area_topic_definitions[],
  review_candidates: pilot_review_candidate[],
): global_dashboard {
  const { progress, is_hydrated } = usePilotProgress();
  const area_progress = calculate_global_progress(areas, progress);
  const pending_review_count = select_pending_review_items(
    review_candidates,
    progress.attempts,
  ).length;

  return {
    is_hydrated,
    area_progress,
    next_action: get_global_next_action(area_progress, progress.completed_lesson_ids),
    pending_review_count,
  };
}
