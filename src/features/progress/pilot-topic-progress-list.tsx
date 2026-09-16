"use client";

import Link from "next/link";

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
  bloqueado: "bg-amber-100 text-amber-950",
  disponible: "bg-slate-200 text-slate-800",
  "en progreso": "bg-teal-100 text-teal-950",
  dominado: "bg-emerald-100 text-emerald-950",
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
    <ol className="space-y-4" aria-label={aria_label}>
      {topics.map((definition, index) => {
        const topic_progress = calculate_topic_progress(definition, progress);

        return (
          <li key={definition.id}>
            <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-teal-800">
                    tema {index + 1} · {definition.code}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                    {definition.title}
                  </h2>
                </div>
                {is_hydrated ? (
                  <span
                    className={`w-fit rounded-full px-3 py-1 text-sm font-semibold ${status_styles[topic_progress.status]}`}
                  >
                    {topic_progress.status}
                  </span>
                ) : (
                  <span className="w-fit rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-800">
                    cargando avance
                  </span>
                )}
              </div>
              {is_hydrated ? (
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {topic_progress.completed_lesson_count}/{definition.lesson_ids.length}{" "}
                  lecciones completadas · {topic_progress.attempt_count} intentos ·
                  precisión {format_accuracy(topic_progress.accuracy)}
                </p>
              ) : null}
              {is_hydrated && topic_progress.status === "bloqueado" ? (
                <p className="mt-3 text-sm font-medium text-amber-950">
                  completa la lección previa para desbloquear el dominio de este tema.
                </p>
              ) : null}
              <ul className="mt-5 space-y-3">
                {definition.lessons.map((lesson) => {
                  const is_completed = progress.completed_lesson_ids.includes(
                    lesson.id,
                  );

                  return (
                    <li
                      className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
                      key={lesson.id}
                    >
                      <Link
                        className="w-fit rounded-md font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                        href={`/leccion/${lesson.id}`}
                      >
                        estudiar {lesson.title}
                      </Link>
                      {is_hydrated ? (
                        <span className="text-sm text-slate-600">
                          {is_completed ? "lección completada" : "lección pendiente"}
                        </span>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
