"use client";

import { usePilotProgress } from "./use-pilot-progress";

type lesson_completion_status_props = {
  lesson_id: string;
};

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function LessonCompletionStatus({ lesson_id }: lesson_completion_status_props) {
  const { progress, is_hydrated } = usePilotProgress();
  const is_completed = progress.completed_lesson_ids.includes(lesson_id);

  if (!is_hydrated) {
    return (
      <span className="lesson-status lesson-status--loading" role="status">
        Comprobando avance
      </span>
    );
  }

  return (
    <span className={`lesson-status ${is_completed ? "lesson-status--completed" : ""}`}>
      {is_completed ? <CheckIcon /> : null}
      {is_completed ? "Lección completada" : "Lección pendiente"}
    </span>
  );
}
