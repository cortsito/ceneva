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
  bloqueado: "bg-warning-soft text-warning",
  disponible: "bg-line text-ink",
  "en progreso": "bg-accent-soft text-accent",
  dominado: "bg-success-soft text-success",
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
                  className={`w-fit shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${status_styles[topic_progress.status]}`}
                >
                  {topic_progress.status}
                </span>
              ) : (
                <span className="w-fit shrink-0 rounded-full bg-line px-3 py-1 text-sm font-semibold text-ink">
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
                      className="w-fit rounded-md font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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
