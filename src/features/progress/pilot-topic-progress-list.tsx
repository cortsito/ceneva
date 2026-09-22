"use client";

import Link from "next/link";

import { IndexItem, IndexList } from "@/components/ui/index-list";

import {
  calculate_topic_progress,
  type pilot_topic_progress_definition,
  type topic_status,
} from "./pilot-progress";
import { usePilotProgress } from "./use-pilot-progress";

type pilot_topic_progress_list_props = {
  aria_label: string;
  topics: pilot_topic_progress_definition[];
};

const status_styles: Record<topic_status, string> = {
  bloqueado: "border-warning/50 bg-warning-soft text-warning",
  disponible: "border-line-strong bg-surface-raised text-ink-muted",
  "en progreso": "border-accent/50 bg-accent-soft text-accent",
  dominado: "border-success/50 bg-success-soft text-success",
};

function format_accuracy(accuracy: number | undefined): string {
  return accuracy === undefined ? "sin intentos" : `${Math.round(accuracy * 100)}%`;
}

export function PilotTopicProgressList({
  aria_label,
  topics,
}: pilot_topic_progress_list_props) {
  const { progress, is_hydrated } = usePilotProgress();

  return (
    <IndexList aria_label={aria_label}>
      {topics.map((definition, index) => {
        const topic_progress = calculate_topic_progress(definition, progress);

        return (
          <IndexItem
            eyebrow={`Tema · ${definition.code}`}
            index={index + 1}
            key={definition.id}
            status={
              is_hydrated ? (
                <span
                  className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${status_styles[topic_progress.status]}`}
                >
                  {topic_progress.status}
                </span>
              ) : (
                <span className="w-fit shrink-0 rounded-full border border-line bg-surface-raised px-3 py-1 text-xs font-bold text-ink-muted">
                  Cargando avance
                </span>
              )
            }
            title={definition.title}
          >
            {is_hydrated ? (
              <p className="text-sm leading-6 text-ink-muted">
                {topic_progress.completed_lesson_count}/{definition.lesson_ids.length}{" "}
                lecciones completadas · {topic_progress.attempt_count} intentos ·
                precisión {format_accuracy(topic_progress.accuracy)}
              </p>
            ) : null}
            {is_hydrated && topic_progress.status === "bloqueado" ? (
              <p className="text-sm font-medium text-warning">
                Completa la lección previa para desbloquear el dominio de este tema.
              </p>
            ) : null}
            <ul className="space-y-3">
              {definition.lessons.map((lesson) => {
                const is_completed = progress.completed_lesson_ids.includes(lesson.id);

                return (
                  <li
                    className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
                    key={lesson.id}
                  >
                    <Link
                      className="button-secondary w-fit py-2"
                      href={`/leccion/${lesson.id}`}
                    >
                      Estudiar {lesson.title}
                    </Link>
                    {is_hydrated ? (
                      <span className="text-sm text-ink-muted">
                        {is_completed ? "Lección completada" : "Lección pendiente"}
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </IndexItem>
        );
      })}
    </IndexList>
  );
}
