"use client";

import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";
import { Stat } from "@/components/ui/stat";

import type { area_topic_definitions } from "./global-progress";
import { GlobalNextActionCta } from "./global-next-action-cta";
import { calculate_pilot_summary } from "./pilot-summary";
import { useGlobalDashboard } from "./use-global-dashboard";

type global_progress_summary_props = {
  areas: area_topic_definitions[];
  review_candidates: pilot_review_candidate[];
};

function format_accuracy(accuracy: number | undefined): string {
  return accuracy === undefined ? "sin intentos" : `${Math.round(accuracy * 100)}%`;
}

export function GlobalProgressSummary({
  areas,
  review_candidates,
}: global_progress_summary_props) {
  const { area_progress, is_hydrated, next_action, pending_review_count } =
    useGlobalDashboard(areas, review_candidates);

  if (!is_hydrated) {
    return (
      <p className="text-sm text-ink-muted" role="status">
        Cargando tu resumen de avance.
      </p>
    );
  }

  const summary = calculate_pilot_summary(
    area_progress.flatMap((area) => area.topics),
    pending_review_count,
  );

  return (
    <div className="surface-panel overflow-hidden">
      <dl className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 sm:divide-y-0">
        <div className="p-5 sm:p-6">
          <Stat
            label="temas dominados"
            value={`${summary.dominated_topics}/${summary.total_topics}`}
          />
        </div>
        <div className="p-5 sm:p-6">
          <Stat
            label="lecciones completadas"
            value={`${summary.completed_lessons}/${summary.total_lessons}`}
          />
        </div>
        <div className="p-5 sm:p-6">
          <Stat label="precisión" value={format_accuracy(summary.accuracy)} />
        </div>
        <div className="p-5 sm:p-6">
          <Stat label="repaso pendiente" value={summary.pending_review_count} />
        </div>
      </dl>
      <div className="border-t border-line bg-accent-soft p-5 sm:p-6">
        <GlobalNextActionCta
          next_action={next_action}
          pending_review_count={pending_review_count}
        />
      </div>
    </div>
  );
}
