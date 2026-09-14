export const learner_progress_schema_version = 1 as const;
export const learner_progress_storage_key = "ceneva.learner-progress";

export type attempt_mode = "diagnostic" | "practice" | "review" | "simulator";

export type learner_attempt = {
  question_id: string;
  selected_option_index: number;
  is_correct: boolean;
  created_at: string;
  mode: attempt_mode;
};

export type learner_progress = {
  schema_version: typeof learner_progress_schema_version;
  completed_lesson_ids: string[];
  attempts: learner_attempt[];
  onboarding_completed: boolean;
};

type storage_like = Pick<Storage, "getItem" | "setItem">;

export type progress_repository = {
  read: () => learner_progress;
  write: (progress: learner_progress) => void;
};

export function create_empty_learner_progress(): learner_progress {
  return {
    schema_version: learner_progress_schema_version,
    completed_lesson_ids: [],
    attempts: [],
    onboarding_completed: false,
  };
}

function is_record(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function is_attempt_mode(value: unknown): value is attempt_mode {
  return (
    value === "diagnostic" ||
    value === "practice" ||
    value === "review" ||
    value === "simulator"
  );
}

function is_learner_attempt(value: unknown): value is learner_attempt {
  if (!is_record(value)) {
    return false;
  }

  return (
    typeof value.question_id === "string" &&
    typeof value.selected_option_index === "number" &&
    Number.isInteger(value.selected_option_index) &&
    typeof value.is_correct === "boolean" &&
    typeof value.created_at === "string" &&
    value.created_at.length > 0 &&
    is_attempt_mode(value.mode)
  );
}

function parse_stored_progress(serialized_progress: string): learner_progress {
  let parsed_progress: unknown;

  try {
    parsed_progress = JSON.parse(serialized_progress);
  } catch {
    return create_empty_learner_progress();
  }

  if (!is_record(parsed_progress)) {
    return create_empty_learner_progress();
  }

  const { schema_version, completed_lesson_ids, attempts, onboarding_completed } =
    parsed_progress;

  if (
    schema_version !== learner_progress_schema_version ||
    !Array.isArray(completed_lesson_ids) ||
    completed_lesson_ids.some((lesson_id) => typeof lesson_id !== "string") ||
    !Array.isArray(attempts) ||
    attempts.some((attempt) => !is_learner_attempt(attempt)) ||
    typeof onboarding_completed !== "boolean"
  ) {
    return create_empty_learner_progress();
  }

  return {
    schema_version: learner_progress_schema_version,
    completed_lesson_ids: [...new Set(completed_lesson_ids)],
    attempts,
    onboarding_completed,
  };
}

export function create_local_storage_progress_repository(
  storage?: storage_like,
): progress_repository {
  return {
    read() {
      if (!storage) {
        return create_empty_learner_progress();
      }

      try {
        const serialized_progress = storage.getItem(learner_progress_storage_key);

        return serialized_progress
          ? parse_stored_progress(serialized_progress)
          : create_empty_learner_progress();
      } catch {
        return create_empty_learner_progress();
      }
    },
    write(progress) {
      if (!storage) {
        return;
      }

      try {
        storage.setItem(learner_progress_storage_key, JSON.stringify(progress));
      } catch {
        return;
      }
    },
  };
}

export function create_browser_progress_repository(): progress_repository {
  if (typeof window === "undefined") {
    return create_local_storage_progress_repository();
  }

  try {
    return create_local_storage_progress_repository(window.localStorage);
  } catch {
    return create_local_storage_progress_repository();
  }
}
