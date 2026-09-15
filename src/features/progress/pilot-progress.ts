import type { curriculum_unit } from "@content/curriculum/types";

import type { pilot_lesson } from "@/features/lesson/pilot-lessons";
import type {
  learner_attempt,
  learner_progress,
} from "@/lib/storage/progress-repository";

export type topic_status = "bloqueado" | "disponible" | "en progreso" | "dominado";

export type pilot_topic_progress_definition = {
  id: string;
  title: string;
  code: string;
  lesson_ids: string[];
  prerequisite_lesson_ids: string[];
  question_ids: string[];
  lessons: Array<{
    id: string;
    title: string;
  }>;
};

export type topic_progress = {
  definition: pilot_topic_progress_definition;
  status: topic_status;
  completed_lesson_count: number;
  attempt_count: number;
  correct_attempt_count: number;
  accuracy: number | undefined;
};

export function create_pilot_topic_progress_definitions(
  unit: curriculum_unit,
  lessons: pilot_lesson[],
): pilot_topic_progress_definition[] {
  const lessons_by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

  return unit.topics.map((topic) => {
    const topic_lessons = topic.lesson_ids.map((lesson_id) => {
      const lesson = lessons_by_id.get(lesson_id);

      if (!lesson) {
        throw new Error(`no se encontró la lección ${lesson_id} del tema ${topic.id}.`);
      }

      return lesson;
    });

    return {
      id: topic.id,
      title: topic.title,
      code: topic.source.code,
      lesson_ids: [...topic.lesson_ids],
      prerequisite_lesson_ids: [
        ...new Set(topic_lessons.flatMap((lesson) => lesson.prerequisites)),
      ],
      question_ids: topic_lessons.flatMap((lesson) => lesson.question_ids),
      lessons: topic_lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
      })),
    };
  });
}

export function record_attempt(
  progress: learner_progress,
  attempt: learner_attempt,
): learner_progress {
  return {
    ...progress,
    attempts: [...progress.attempts, attempt],
  };
}

export function complete_lesson(
  progress: learner_progress,
  lesson_id: string,
): learner_progress {
  if (progress.completed_lesson_ids.includes(lesson_id)) {
    return progress;
  }

  return {
    ...progress,
    completed_lesson_ids: [...progress.completed_lesson_ids, lesson_id],
  };
}

function get_topic_attempts(
  definition: pilot_topic_progress_definition,
  attempts: learner_attempt[],
): learner_attempt[] {
  const question_ids = new Set(definition.question_ids);

  return attempts.filter((attempt) => question_ids.has(attempt.question_id));
}

const mastery_threshold = 0.8;
const demotion_threshold = 0.6;
const minimum_mastery_attempts = 5;

function has_reached_mastery(
  attempts: learner_attempt[],
  all_lessons_completed: boolean,
): boolean {
  let is_dominant = false;
  let correct_count = 0;

  attempts.forEach((attempt, index) => {
    if (attempt.is_correct) {
      correct_count += 1;
    }

    const attempts_so_far = index + 1;
    const accuracy_so_far = correct_count / attempts_so_far;

    if (is_dominant) {
      if (accuracy_so_far < demotion_threshold) {
        is_dominant = false;
      }
    } else if (
      all_lessons_completed &&
      attempts_so_far >= minimum_mastery_attempts &&
      accuracy_so_far >= mastery_threshold
    ) {
      is_dominant = true;
    }
  });

  return is_dominant;
}

export function calculate_topic_progress(
  definition: pilot_topic_progress_definition,
  progress: learner_progress,
): topic_progress {
  const completed_lesson_count = definition.lesson_ids.filter((lesson_id) =>
    progress.completed_lesson_ids.includes(lesson_id),
  ).length;
  const prerequisite_lessons_completed = definition.prerequisite_lesson_ids.every(
    (lesson_id) => progress.completed_lesson_ids.includes(lesson_id),
  );
  const attempts = get_topic_attempts(definition, progress.attempts);
  const correct_attempt_count = attempts.filter((attempt) => attempt.is_correct).length;
  const accuracy =
    attempts.length > 0 ? correct_attempt_count / attempts.length : undefined;
  const all_lessons_completed = completed_lesson_count === definition.lesson_ids.length;

  let status: topic_status;

  if (!prerequisite_lessons_completed) {
    status = "bloqueado";
  } else if (has_reached_mastery(attempts, all_lessons_completed)) {
    status = "dominado";
  } else if (completed_lesson_count > 0 || attempts.length > 0) {
    status = "en progreso";
  } else {
    status = "disponible";
  }

  return {
    definition,
    status,
    completed_lesson_count,
    attempt_count: attempts.length,
    correct_attempt_count,
    accuracy,
  };
}
