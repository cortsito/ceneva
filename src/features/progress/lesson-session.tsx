"use client";

import type { ReactNode } from "react";

import type { question } from "@content/questions/types";

import { LessonCheck } from "@/features/practice/lesson-check";

import { usePilotProgress } from "./use-pilot-progress";

type lesson_session_props = {
  children?: ReactNode;
  lesson_id: string;
  questions: question[];
};

export function LessonSession({
  children,
  lesson_id,
  questions,
}: lesson_session_props) {
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
      {children}
      <section className="surface-panel mt-10 p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
          Termina esta lección
        </h3>
        <p className="mt-3 leading-7 text-ink-muted">
          Marca la lección como completada cuando hayas revisado la comprobación.
        </p>
        <button
          className="button-primary mt-5 sm:w-auto"
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
