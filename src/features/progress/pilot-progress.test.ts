import { describe, expect, it } from "vitest";

import {
  create_empty_learner_progress,
  type learner_progress,
} from "@/lib/storage/progress-repository";

import {
  calculate_topic_progress,
  complete_lesson,
  record_attempt,
  type pilot_topic_progress_definition,
} from "./pilot-progress";

const topic: pilot_topic_progress_definition = {
  id: "tema-piloto",
  title: "tema piloto",
  code: "1.1.1",
  lesson_ids: ["leccion-piloto"],
  prerequisite_lesson_ids: [],
  question_ids: ["pregunta-1", "pregunta-2", "pregunta-3", "pregunta-4", "pregunta-5"],
  lessons: [
    {
      id: "leccion-piloto",
      title: "lección piloto",
    },
  ],
};

function add_attempts(
  progress: learner_progress,
  outcomes: boolean[],
): learner_progress {
  return outcomes.reduce(
    (current_progress, is_correct, index) =>
      record_attempt(current_progress, {
        question_id: `pregunta-${index + 1}`,
        selected_option_index: is_correct ? 1 : 0,
        is_correct,
        created_at: `2026-09-14T00:00:0${index}.000Z`,
        mode: "practice",
      }),
    progress,
  );
}

describe("calculate_topic_progress", () => {
  it("marca un tema intacto y accesible como disponible", () => {
    const progress = create_empty_learner_progress();

    expect(calculate_topic_progress(topic, progress).status).toBe("disponible");
  });

  it("marca como bloqueado un tema cuyo requisito previo no está completado", () => {
    const progress = add_attempts(create_empty_learner_progress(), [true]);
    const blocked_topic = {
      ...topic,
      prerequisite_lesson_ids: ["leccion-previa"],
    };

    expect(calculate_topic_progress(blocked_topic, progress).status).toBe("bloqueado");
  });

  it("requiere cinco intentos aunque la lección esté completada", () => {
    const progress = add_attempts(
      complete_lesson(create_empty_learner_progress(), "leccion-piloto"),
      [true, true, true, true],
    );

    expect(calculate_topic_progress(topic, progress).status).toBe("en progreso");
  });

  it("domina con lección completada y precisión exacta de ochenta por ciento", () => {
    const progress = add_attempts(
      complete_lesson(create_empty_learner_progress(), "leccion-piloto"),
      [true, true, true, true, false],
    );
    const topic_progress = calculate_topic_progress(topic, progress);

    expect(topic_progress.status).toBe("dominado");
    expect(topic_progress.accuracy).toBe(0.8);
  });

  it("no domina con precisión menor a ochenta por ciento o sin la lección completada", () => {
    const lower_accuracy_progress = add_attempts(
      complete_lesson(create_empty_learner_progress(), "leccion-piloto"),
      [true, true, true, false, false],
    );
    const incomplete_lesson_progress = add_attempts(create_empty_learner_progress(), [
      true,
      true,
      true,
      true,
      true,
    ]);

    expect(calculate_topic_progress(topic, lower_accuracy_progress).status).toBe(
      "en progreso",
    );
    expect(calculate_topic_progress(topic, incomplete_lesson_progress).status).toBe(
      "en progreso",
    );
  });
});
