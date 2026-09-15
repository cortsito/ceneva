import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";
import type { learner_attempt } from "@/lib/storage/progress-repository";

export type pilot_review_item = pilot_review_candidate & {
  latest_attempt: learner_attempt;
};

const max_review_items = 5;

type latest_attempt_entry = {
  attempt: learner_attempt;
  index: number;
};

export function select_pending_review_items(
  candidates: pilot_review_candidate[],
  attempts: learner_attempt[],
): pilot_review_item[] {
  const candidates_by_question_id = new Map(
    candidates.map((candidate) => [candidate.question.id, candidate]),
  );
  const latest_attempt_by_question_id = new Map<string, latest_attempt_entry>();

  attempts.forEach((attempt, index) => {
    if (!candidates_by_question_id.has(attempt.question_id)) {
      return;
    }

    latest_attempt_by_question_id.set(attempt.question_id, { attempt, index });
  });

  return [...latest_attempt_by_question_id.entries()]
    .filter(([, entry]) => !entry.attempt.is_correct)
    .sort(([, a], [, b]) => {
      const time_diff =
        Date.parse(b.attempt.created_at) - Date.parse(a.attempt.created_at);

      return time_diff !== 0 ? time_diff : a.index - b.index;
    })
    .slice(0, max_review_items)
    .map(([question_id, entry]) => ({
      ...candidates_by_question_id.get(question_id)!,
      latest_attempt: entry.attempt,
    }));
}
