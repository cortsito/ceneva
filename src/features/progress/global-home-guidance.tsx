"use client";

import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";

import type { area_topic_definitions } from "./global-progress";
import { GlobalNextActionCta } from "./global-next-action-cta";
import { useGlobalDashboard } from "./use-global-dashboard";

type global_home_guidance_props = {
  areas: area_topic_definitions[];
  review_candidates: pilot_review_candidate[];
};

export function GlobalHomeGuidance({
  areas,
  review_candidates,
}: global_home_guidance_props) {
  const { is_hydrated, next_action, pending_review_count } = useGlobalDashboard(
    areas,
    review_candidates,
  );

  if (!is_hydrated) {
    return (
      <p className="mt-6 text-sm text-ink-muted" role="status">
        Cargando tu próxima acción.
      </p>
    );
  }

  return (
    <div className="mt-6">
      <GlobalNextActionCta
        next_action={next_action}
        pending_review_count={pending_review_count}
      />
    </div>
  );
}
