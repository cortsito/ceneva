"use client";

import Link from "next/link";

import { IndexItem, IndexList } from "@/components/ui/index-list";
import { Stat } from "@/components/ui/stat";

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
      <p className="text-sm text-ink-muted" role="status">
        Cargando el progreso por área.
      </p>
    );
  }

  const area_progress = calculate_global_progress(areas, progress);

  return (
    <IndexList aria_label="progreso por área">
      {area_progress.map((area, index) => {
        const summary = calculate_pilot_summary(area.topics, 0);
        const next_action = get_pilot_next_action(
          area.topics,
          progress.completed_lesson_ids,
        );

        return (
          <IndexItem
            eyebrow="Área"
            index={index + 1}
            key={area.area_id}
            title={
              <Link
                className="rounded-md underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                href={`/ruta/${area.area_id}`}
              >
                {area.area_title}
              </Link>
            }
          >
            <dl className="area-metrics">
              <Stat
                label="temas dominados"
                value={`${summary.dominated_topics}/${summary.total_topics}`}
              />
              <Stat
                label="lecciones completadas"
                value={`${summary.completed_lessons}/${summary.total_lessons}`}
              />
              <Stat label="precisión" value={format_accuracy(summary.accuracy)} />
            </dl>
            <AreaNextActionCta area_title={area.area_title} next_action={next_action} />
          </IndexItem>
        );
      })}
    </IndexList>
  );
}
