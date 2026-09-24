import { describe, expect, it } from "vitest";

import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";
import { get_unit_lessons } from "@/features/lesson/unit-lessons";
import { get_topic_content } from "@/features/practice/unit-topic-content";

import { find_duplicate_ids, find_invalid_options } from "./question-bank";

describe("registered content integrity — every available_units entry", () => {
  for (const entry of available_units) {
    const label = `${entry.area_id}/${entry.unit_id}`;

    it(`${label}: resolves through the registry and matches its own curriculum tree`, () => {
      const resolved = get_available_unit(entry.area_id, entry.unit_id);

      expect(resolved).toBeDefined();
      expect(resolved?.area.id).toBe(entry.area_id);
      expect(resolved?.unit.id).toBe(entry.unit_id);
    });

    it(`${label}: loads exactly the lessons its curriculum topics declare, each with five reserved question ids`, async () => {
      const resolved = get_available_unit(entry.area_id, entry.unit_id);
      if (!resolved) throw new Error(`${label} did not resolve`);

      const expected_lesson_ids = resolved.unit.topics.flatMap(
        (topic) => topic.lesson_ids,
      );
      const lessons = await get_unit_lessons(entry.area_id, entry.unit_id);

      expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
        [...expected_lesson_ids].sort(),
      );

      for (const lesson of lessons) {
        expect(lesson.question_ids, `${lesson.id} question-ids`).toHaveLength(5);
        expect(lesson.area_id).toBe(entry.area_id);
        expect(lesson.unit_id).toBe(entry.unit_id);
      }
    });

    it(`${label}: attributes every topic's questions to their exact declaring lesson and topic, with diagnostic and simulator coverage`, async () => {
      const resolved = get_available_unit(entry.area_id, entry.unit_id);
      if (!resolved) throw new Error(`${label} did not resolve`);

      for (const topic of resolved.unit.topics) {
        const content = await get_topic_content(entry.area_id, entry.unit_id, topic.id);

        expect(content, `${label} topic ${topic.id}`).toBeDefined();
        if (!content) continue;

        expect(content.questions).toHaveLength(topic.lesson_ids.length * 5);

        for (const { question, lesson } of content.questions) {
          expect(question.topic_id, question.id).toBe(topic.id);
          expect(topic.lesson_ids, `${question.id} declaring lesson`).toContain(
            lesson.id,
          );
        }

        const has_diagnostic = content.questions.some(({ question }) =>
          question.use_cases.includes("diagnostic"),
        );
        const has_simulator = content.questions.some(({ question }) =>
          question.use_cases.includes("simulator"),
        );

        expect(has_diagnostic, `${label} topic ${topic.id} diagnostic coverage`).toBe(
          true,
        );
        expect(has_simulator, `${label} topic ${topic.id} simulator coverage`).toBe(
          true,
        );
      }
    });

    it(`${label}: has no structurally invalid question in its own topic slice`, async () => {
      const resolved = get_available_unit(entry.area_id, entry.unit_id);
      if (!resolved) throw new Error(`${label} did not resolve`);

      for (const topic of resolved.unit.topics) {
        const content = await get_topic_content(entry.area_id, entry.unit_id, topic.id);

        if (!content) continue;

        const errors = content.questions.flatMap(({ question }) =>
          find_invalid_options(question),
        );

        expect(errors).toEqual([]);
      }
    });
  }

  it("has no duplicate lesson id across every registered unit", async () => {
    const all_lesson_ids: string[] = [];

    for (const entry of available_units) {
      const lessons = await get_unit_lessons(entry.area_id, entry.unit_id);
      all_lesson_ids.push(...lessons.map((lesson) => lesson.id));
    }

    const duplicates = all_lesson_ids.filter(
      (id, index) => all_lesson_ids.indexOf(id) !== index,
    );

    expect(duplicates).toEqual([]);
  });

  it("has no duplicate question id across every registered unit's bank", () => {
    const banks = available_units.map((entry) => entry.questions);
    // available_units repeats the same pensamiento matemático bank object across
    // its six entries by design (one shared area bank, filtered per unit), so
    // duplicate-checking must dedupe by bank reference first.
    const unique_banks = Array.from(new Set(banks));

    expect(find_duplicate_ids(...unique_banks)).toEqual([]);
  });
});
