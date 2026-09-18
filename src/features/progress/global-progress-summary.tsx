"use client";

import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";

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
      <p className="text-sm text-slate-600" role="status">
        cargando tu resumen de avance.
      </p>
    );
  }

  const summary = calculate_pilot_summary(
    area_progress.flatMap((area) => area.topics),
    pending_review_count,
  );

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div>
          <dt className="text-sm text-slate-600">temas dominados</dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-950">
            {summary.dominated_topics}/{summary.total_topics}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-slate-600">lecciones completadas</dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-950">
            {summary.completed_lessons}/{summary.total_lessons}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-slate-600">precisión</dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-950">
            {format_accuracy(summary.accuracy)}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-slate-600">repaso pendiente</dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-950">
            {summary.pending_review_count}
          </dd>
        </div>
      </dl>
      <div className="mt-6">
        <GlobalNextActionCta
          next_action={next_action}
          pending_review_count={pending_review_count}
        />
      </div>
    </div>
  );
}
