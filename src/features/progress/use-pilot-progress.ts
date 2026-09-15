"use client";

import { useEffect, useRef, useState } from "react";

import {
  create_browser_progress_repository,
  create_empty_learner_progress,
  type learner_progress,
  type progress_repository,
} from "@/lib/storage/progress-repository";

import { complete_lesson, record_attempt } from "./pilot-progress";

type practice_answer = {
  question_id: string;
  selected_option_index: number;
  is_correct: boolean;
};

export function usePilotProgress() {
  const repository_ref = useRef<progress_repository | null>(null);
  const progress_ref = useRef<learner_progress>(create_empty_learner_progress());
  const [progress, set_progress] = useState<learner_progress>(
    create_empty_learner_progress,
  );
  const [is_hydrated, set_is_hydrated] = useState(false);

  useEffect(() => {
    const repository = create_browser_progress_repository();
    const restored_progress = repository.read();
    const timeout_id = window.setTimeout(() => {
      progress_ref.current = restored_progress;
      set_progress(restored_progress);
      set_is_hydrated(true);
    }, 0);

    repository_ref.current = repository;

    return () => window.clearTimeout(timeout_id);
  }, []);

  function persist_progress(next_progress: learner_progress) {
    progress_ref.current = next_progress;
    repository_ref.current?.write(next_progress);
    set_progress(next_progress);
  }

  function record_practice_answer(answer: practice_answer) {
    if (!is_hydrated) {
      return;
    }

    persist_progress(
      record_attempt(progress_ref.current, {
        ...answer,
        created_at: new Date().toISOString(),
        mode: "practice",
      }),
    );
  }

  function record_review_answer(answer: practice_answer) {
    if (!is_hydrated) {
      return;
    }

    persist_progress(
      record_attempt(progress_ref.current, {
        ...answer,
        created_at: new Date().toISOString(),
        mode: "review",
      }),
    );
  }

  function mark_lesson_completed(lesson_id: string) {
    if (!is_hydrated) {
      return;
    }

    persist_progress(complete_lesson(progress_ref.current, lesson_id));
  }

  return {
    progress,
    is_hydrated,
    record_practice_answer,
    record_review_answer,
    mark_lesson_completed,
  };
}
