import { describe, expect, it } from "vitest";

import {
  create_empty_learner_progress,
  create_local_storage_progress_repository,
  learner_progress_storage_key,
  type learner_progress,
} from "./progress-repository";

class memory_storage {
  private readonly values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }
}

function create_valid_progress(): learner_progress {
  return {
    schema_version: 1,
    completed_lesson_ids: ["pm-tipos-de-variables-01"],
    attempts: [
      {
        question_id: "pm-tv-001",
        selected_option_index: 1,
        is_correct: true,
        created_at: "2026-09-14T00:00:00.000Z",
        mode: "practice",
      },
    ],
    onboarding_completed: false,
  };
}

describe("local storage progress repository", () => {
  it("recupera progreso vacío ante datos ausentes, malformados o incompatibles", () => {
    const storage = new memory_storage();
    const repository = create_local_storage_progress_repository(storage);

    expect(repository.read()).toEqual(create_empty_learner_progress());

    storage.setItem(learner_progress_storage_key, "{");
    expect(repository.read()).toEqual(create_empty_learner_progress());

    storage.setItem(
      learner_progress_storage_key,
      JSON.stringify({
        ...create_valid_progress(),
        schema_version: 2,
      }),
    );
    expect(repository.read()).toEqual(create_empty_learner_progress());

    storage.setItem(
      learner_progress_storage_key,
      JSON.stringify({
        ...create_valid_progress(),
        attempts: [{ question_id: "pm-tv-001" }],
      }),
    );
    expect(repository.read()).toEqual(create_empty_learner_progress());
  });

  it("persiste y recupera el modelo versionado", () => {
    const storage = new memory_storage();
    const repository = create_local_storage_progress_repository(storage);
    const progress = create_valid_progress();

    repository.write(progress);

    expect(repository.read()).toEqual(progress);
  });

  it("no falla cuando el almacenamiento no está disponible", () => {
    const unavailable_storage = {
      getItem() {
        throw new Error("no disponible");
      },
      setItem() {
        throw new Error("no disponible");
      },
    };
    const repository = create_local_storage_progress_repository(unavailable_storage);

    expect(repository.read()).toEqual(create_empty_learner_progress());
    expect(() => repository.write(create_valid_progress())).not.toThrow();
  });
});
