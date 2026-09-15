"use client";

import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";

import type { pilot_topic_progress_definition } from "./pilot-progress";
import { PilotNextActionCta } from "./pilot-next-action-cta";
import { usePilotDashboard } from "./use-pilot-dashboard";

type pilot_home_guidance_props = {
  topic_definitions: pilot_topic_progress_definition[];
  review_candidates: pilot_review_candidate[];
};

export function PilotHomeGuidance({
  topic_definitions,
  review_candidates,
}: pilot_home_guidance_props) {
  const { is_hydrated, next_action, summary } = usePilotDashboard(
    topic_definitions,
    review_candidates,
  );

  if (!is_hydrated) {
    return (
      <p className="mt-6 text-sm text-slate-600" role="status">
        cargando tu próxima acción.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <PilotNextActionCta
        next_action={next_action}
        pending_review_count={summary.pending_review_count}
      />
    </div>
  );
}
