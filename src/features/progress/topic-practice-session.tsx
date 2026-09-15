"use client";

import type { question } from "@content/questions/pensamiento-matematico";

import { TopicPracticeCheck } from "@/features/practice/topic-practice-check";

import { usePilotProgress } from "./use-pilot-progress";

type topic_practice_session_props = {
  lesson: { id: string; title: string };
  questions: question[];
};

export function TopicPracticeSession({
  lesson,
  questions,
}: topic_practice_session_props) {
  const { is_hydrated, record_practice_answer } = usePilotProgress();

  return (
    <div>
      {!is_hydrated ? (
        <p className="mt-6 text-sm text-slate-600" role="status">
          cargando tu avance local.
        </p>
      ) : null}
      <TopicPracticeCheck
        is_ready={is_hydrated}
        lesson={lesson}
        on_submit_answer={record_practice_answer}
        questions={questions}
      />
    </div>
  );
}
