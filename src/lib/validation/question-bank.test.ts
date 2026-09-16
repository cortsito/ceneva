import { readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { describe, expect, it } from "vitest";

import { cultura_digital_questions } from "@content/questions/cultura-digital";
import { pensamiento_matematico_questions } from "@content/questions/pensamiento-matematico";

import {
  find_duplicate_ids,
  find_invalid_options,
  group_questions_by_topic,
} from "./question-bank";

const cd_2_1_reserved_ids: Record<string, string[]> = {
  "cd-2-1-1-elementos-de-la-identidad-digital": [
    "cd-id-001",
    "cd-id-002",
    "cd-id-003",
    "cd-id-004",
    "cd-id-005",
  ],
  "cd-2-1-2-tipos-de-licenciamiento-de-software": [
    "cd-ls-001",
    "cd-ls-002",
    "cd-ls-003",
    "cd-ls-004",
    "cd-ls-005",
  ],
  "cd-2-1-3-tipos-de-servicios-digitales": [
    "cd-sd-001",
    "cd-sd-002",
    "cd-sd-003",
    "cd-sd-004",
    "cd-sd-005",
  ],
  "cd-2-1-4-tipos-de-amenazas-de-seguridad-digital": [
    "cd-asd-001",
    "cd-asd-002",
    "cd-asd-003",
    "cd-asd-004",
    "cd-asd-005",
  ],
  "cd-2-1-5-medidas-de-seguridad-digital": [
    "cd-ms-001",
    "cd-ms-002",
    "cd-ms-003",
    "cd-ms-004",
    "cd-ms-005",
  ],
};

const cd_2_1_lesson_ids = [
  "cd-identidad-digital-01",
  "cd-licenciamiento-de-software-01",
  "cd-servicios-digitales-01",
  "cd-amenazas-de-seguridad-digital-01",
  "cd-medidas-de-seguridad-digital-01",
];

const cd_2_1_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "cultura-digital",
  "cd-2-1-ciudadania-digital",
);

async function read_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cd_2_1_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("cultura digital question bank — cd-2-1-ciudadania-digital", () => {
  it("has exactly twenty-five records", () => {
    expect(cultura_digital_questions).toHaveLength(25);
  });

  it("has exactly the five reserved ids for each documented topic, no extra records", () => {
    const grouped = group_questions_by_topic(cultura_digital_questions);

    expect(new Set(grouped.keys())).toEqual(new Set(Object.keys(cd_2_1_reserved_ids)));

    for (const [topic_id, expected_ids] of Object.entries(cd_2_1_reserved_ids)) {
      const actual_ids = (grouped.get(topic_id) ?? []).map((question) => question.id);
      expect(new Set(actual_ids)).toEqual(new Set(expected_ids));
    }
  });

  it("has no structurally invalid question — options, answer, explanation, common error, source", () => {
    const errors = cultura_digital_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático bank", () => {
    expect(
      find_duplicate_ids(cultura_digital_questions, pensamiento_matematico_questions),
    ).toEqual([]);
  });

  it("every question traces to its topic's guide code", () => {
    for (const question of cultura_digital_questions) {
      const code = question.topic_id
        .match(/^cd-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("matches each lesson's reserved question-ids exactly", async () => {
    const grouped = group_questions_by_topic(cultura_digital_questions);

    for (const lesson_id of cd_2_1_lesson_ids) {
      const lesson = await read_lesson_frontmatter(lesson_id);
      const topic_questions = grouped.get(lesson.topic_id) ?? [];

      expect(new Set(topic_questions.map((question) => question.id))).toEqual(
        new Set(lesson.question_ids),
      );

      for (const question of topic_questions) {
        expect(question.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("includes at least one relation or ordering question", () => {
    const has_relation_or_ordering = cultura_digital_questions.some((question) =>
      question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)),
    );

    expect(has_relation_or_ordering).toBe(true);
  });
});
