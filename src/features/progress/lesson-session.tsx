"use client";

import type { question } from "@content/questions/types";

import { LessonCheck } from "@/features/practice/lesson-check";

import { usePilotProgress } from "./use-pilot-progress";

type lesson_session_props = {
  lesson_id: string;
  questions: question[];
};

export function LessonSession({ lesson_id, questions }: lesson_session_props) {
  const { progress, is_hydrated, record_practice_answer, mark_lesson_completed } =
    usePilotProgress();
  const is_completed = progress.completed_lesson_ids.includes(lesson_id);

  return (
    <div>
      {!is_hydrated ? (
        <p className="mt-6 text-sm text-ink-muted" role="status">
          Cargando tu avance local.
        </p>
      ) : null}
      <LessonCheck
        is_ready={is_hydrated}
        on_answer={record_practice_answer}
        questions={questions}
      />
      <section className="mt-8 rounded-xl border border-line bg-surface p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          Termina esta lección
        </h3>
        <p className="mt-3 leading-7 text-ink-muted">
          Marca la lección como completada cuando hayas revisado la comprobación.
        </p>
        <button
          className="mt-5 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          disabled={!is_hydrated || is_completed}
          onClick={() => mark_lesson_completed(lesson_id)}
          type="button"
        >
          {is_completed ? "Lección completada" : "Marcar lección como completada"}
        </button>
        {is_completed ? (
          <p className="mt-3 text-sm font-medium text-accent" role="status">
            Guardamos esta lección en tu avance local.
          </p>
        ) : null}
      </section>
    </div>
  );
}
