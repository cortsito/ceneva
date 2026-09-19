"use client";

import type { topic_question } from "@/features/practice/unit-topic-content";
import { TopicPracticeCheck } from "@/features/practice/topic-practice-check";

import { usePilotProgress } from "./use-pilot-progress";

type topic_practice_session_props = {
  lessons: { id: string; title: string }[];
  questions: topic_question[];
};

export function TopicPracticeSession({
  lessons,
  questions,
}: topic_practice_session_props) {
  const { is_hydrated, record_practice_answer } = usePilotProgress();

  return (
    <div>
      {!is_hydrated ? (
        <p className="mt-6 text-sm text-ink-muted" role="status">
          Cargando tu avance local.
        </p>
      ) : null}
      <TopicPracticeCheck
        is_ready={is_hydrated}
        lessons={lessons}
        on_submit_answer={record_practice_answer}
        questions={questions}
      />
    </div>
  );
}
