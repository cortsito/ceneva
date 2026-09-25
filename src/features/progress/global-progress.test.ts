import { describe, expect, it } from "vitest";

import { available_units } from "@/features/curriculum/available-units";
import { create_empty_learner_progress } from "@/lib/storage/progress-repository";

import {
  calculate_global_progress,
  get_global_next_action,
  type area_progress,
  type area_topic_definitions,
} from "./global-progress";
import {
  get_area_topic_definitions,
  get_global_topic_definitions,
} from "./global-topic-definitions";
import { complete_lesson, record_attempt } from "./pilot-progress";
import { calculate_pilot_summary } from "./pilot-summary";

const unique_area_count = new Set(available_units.map((entry) => entry.area_id)).size;

function create_area(area_id: string, topic_ids: string[]): area_topic_definitions {
  return {
    area_id,
    area_title: `área ${area_id}`,
    topic_definitions: topic_ids.map((topic_id) => ({
      id: topic_id,
      title: `tema ${topic_id}`,
      code: "1.1.1",
      lesson_ids: [`${topic_id}-leccion`],
      prerequisite_lesson_ids: [],
      question_ids: [
        `${topic_id}-q1`,
        `${topic_id}-q2`,
        `${topic_id}-q3`,
        `${topic_id}-q4`,
        `${topic_id}-q5`,
      ],
      lessons: [{ id: `${topic_id}-leccion`, title: `lección ${topic_id}` }],
    })),
  };
}

function dominate(
  progress: ReturnType<typeof create_empty_learner_progress>,
  topic_id: string,
) {
  let next_progress = complete_lesson(progress, `${topic_id}-leccion`);

  for (let index = 1; index <= 5; index += 1) {
    next_progress = record_attempt(next_progress, {
      question_id: `${topic_id}-q${index}`,
      selected_option_index: 1,
      is_correct: true,
      created_at: `2026-09-18T00:00:0${index}.000Z`,
      mode: "practice",
    });
  }

  return next_progress;
}

describe("get_global_topic_definitions", () => {
  it("cubre exactamente las áreas únicas de available_units, en su orden de primera aparición", async () => {
    const areas = await get_global_topic_definitions();
    const expected_order = [...new Set(available_units.map((unit) => unit.area_id))];

    expect(areas).toHaveLength(unique_area_count);
    expect(areas.map((area) => area.area_id)).toEqual(expected_order);
  });

  it("agrega los temas de las seis unidades listas de pensamiento matemático en una sola entrada de área", async () => {
    const areas = await get_global_topic_definitions();
    const pm_area = areas.find((area) => area.area_id === "pensamiento-matematico");
    const expected = await get_area_topic_definitions("pensamiento-matematico");

    expect(pm_area?.topic_definitions).toEqual(expected?.topic_definitions);
    expect(pm_area?.topic_definitions.length).toBe(30);
  });

  it("concatena las unidades listas de cultura digital en un solo bloque de área", async () => {
    const areas = await get_global_topic_definitions();
    const cd_area = areas.find((area) => area.area_id === "cultura-digital");

    expect(cd_area?.topic_definitions).toHaveLength(18);
  });
});

describe("calculate_global_progress", () => {
  it("calcula el progreso de cada área de forma independiente, sin depender de pensamiento matemático", () => {
    const areas = [
      create_area("area-a", ["a-1", "a-2"]),
      create_area("area-b", ["b-1"]),
    ];
    const progress = dominate(create_empty_learner_progress(), "a-1");

    const result = calculate_global_progress(areas, progress);

    expect(result).toHaveLength(2);
    expect(result[0].topics.map((topic) => topic.status)).toEqual([
      "dominado",
      "disponible",
    ]);
    expect(result[1].topics.map((topic) => topic.status)).toEqual(["disponible"]);
    expect(result[1].summary.dominated_topics).toBe(0);
  });

  it("conserva el orden de las áreas y de sus temas curriculares", () => {
    const areas = [
      create_area("area-a", ["a-1", "a-2"]),
      create_area("area-b", ["b-1", "b-2"]),
    ];

    const result = calculate_global_progress(areas, create_empty_learner_progress());

    expect(result.map((area) => area.area_id)).toEqual(["area-a", "area-b"]);
    expect(result[0].topics.map((topic) => topic.definition.id)).toEqual([
      "a-1",
      "a-2",
    ]);
  });
});

describe("get_global_next_action", () => {
  it("con pm dominado y otra área intacta, recomienda la primera acción elegible de la otra área", () => {
    const areas = [create_area("area-a", ["a-1"]), create_area("area-b", ["b-1"])];
    const progress = dominate(create_empty_learner_progress(), "a-1");
    const global_progress = calculate_global_progress(areas, progress);

    const next_action = get_global_next_action(
      global_progress,
      progress.completed_lesson_ids,
    );

    expect(next_action).toMatchObject({
      kind: "lesson",
      area_id: "area-b",
      href: "/leccion/b-1-leccion",
      label: "Continuar lección b-1",
    });
    expect(next_action.kind).not.toBe("completed");
  });

  it("nunca recomienda un tema bloqueado", () => {
    const blocked_area: area_progress = {
      area_id: "area-a",
      area_title: "área a",
      topics: [
        {
          definition: create_area("area-a", ["a-1"]).topic_definitions[0],
          status: "bloqueado",
          completed_lesson_count: 0,
          attempt_count: 0,
          correct_attempt_count: 0,
          accuracy: undefined,
        },
      ],
      summary: {
        total_topics: 1,
        dominated_topics: 0,
        completed_lessons: 0,
        total_lessons: 1,
        accuracy: undefined,
        pending_review_count: 0,
      },
    };
    const available_area = create_area("area-b", ["b-1"]);
    const global_progress = calculate_global_progress(
      [available_area],
      create_empty_learner_progress(),
    );

    const next_action = get_global_next_action([blocked_area, ...global_progress], []);

    expect(next_action).toMatchObject({ kind: "lesson", area_id: "area-b" });
  });

  it("solo devuelve completed cuando todas las áreas están dominadas", () => {
    const areas = [create_area("area-a", ["a-1"]), create_area("area-b", ["b-1"])];
    let progress = dominate(create_empty_learner_progress(), "a-1");
    progress = dominate(progress, "b-1");
    const global_progress = calculate_global_progress(areas, progress);

    const next_action = get_global_next_action(
      global_progress,
      progress.completed_lesson_ids,
    );

    expect(next_action).toEqual({ kind: "completed" });
  });
});

describe("/progreso composition over the seven real areas", () => {
  it("covers all seven registered areas with zero dominated topics and undefined accuracy on empty progress", async () => {
    const areas = await get_global_topic_definitions();
    const area_progress = calculate_global_progress(
      areas,
      create_empty_learner_progress(),
    );

    expect(area_progress).toHaveLength(unique_area_count);

    const summary = calculate_pilot_summary(
      area_progress.flatMap((area) => area.topics),
      0,
    );

    expect(summary.total_topics).toBe(
      area_progress.reduce((sum, area) => sum + area.topics.length, 0),
    );
    expect(summary.total_topics).toBeGreaterThan(0);
    expect(summary.dominated_topics).toBe(0);
    expect(summary.completed_lessons).toBe(0);
    expect(summary.accuracy).toBeUndefined();
  });

  it("keeps unrelated areas at zero when only one area has attempts", async () => {
    const areas = await get_global_topic_definitions();
    const [pm_entry, cd_entry] = areas;
    let progress = create_empty_learner_progress();

    for (const topic of pm_entry.topic_definitions) {
      progress = complete_lesson(progress, topic.lesson_ids[0]);
    }

    const area_progress = calculate_global_progress(areas, progress);
    const pm_result = area_progress.find((area) => area.area_id === pm_entry.area_id);
    const cd_result = area_progress.find((area) => area.area_id === cd_entry.area_id);

    expect(pm_result?.summary.completed_lessons).toBeGreaterThan(0);
    expect(cd_result?.summary.completed_lessons).toBe(0);
    expect(cd_result?.summary.accuracy).toBeUndefined();
  });
});
