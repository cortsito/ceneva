"use client";

import Link from "next/link";

import { AreaNextActionCta } from "./area-next-action-cta";
import {
  calculate_global_progress,
  type area_topic_definitions,
} from "./global-progress";
import { calculate_pilot_summary, get_pilot_next_action } from "./pilot-summary";
import { usePilotProgress } from "./use-pilot-progress";

type area_progress_blocks_props = {
  areas: area_topic_definitions[];
};

function format_accuracy(accuracy: number | undefined): string {
  return accuracy === undefined ? "sin intentos" : `${Math.round(accuracy * 100)}%`;
}

export function AreaProgressBlocks({ areas }: area_progress_blocks_props) {
  const { progress, is_hydrated } = usePilotProgress();

  if (!is_hydrated) {
    return (
      <p className="text-sm text-slate-600" role="status">
        cargando el progreso por área.
      </p>
    );
  }

  const area_progress = calculate_global_progress(areas, progress);

  return (
    <ol className="space-y-4" aria-label="progreso por área">
      {area_progress.map((area) => {
        const summary = calculate_pilot_summary(area.topics, 0);
        const next_action = get_pilot_next_action(
          area.topics,
          progress.completed_lesson_ids,
        );

        return (
          <li key={area.area_id}>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-teal-800">área</p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                <Link
                  className="rounded-md underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                  href={`/ruta/${area.area_id}`}
                >
                  {area.area_title}
                </Link>
              </h2>
              <dl className="mt-4 grid grid-cols-3 gap-4">
                <div>
                  <dt className="text-sm text-slate-600">temas dominados</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-950">
                    {summary.dominated_topics}/{summary.total_topics}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-600">lecciones completadas</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-950">
                    {summary.completed_lessons}/{summary.total_lessons}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-slate-600">precisión</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-950">
                    {format_accuracy(summary.accuracy)}
                  </dd>
                </div>
              </dl>
              <div className="mt-5">
                <AreaNextActionCta
                  area_title={area.area_title}
                  next_action={next_action}
                />
              </div>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
