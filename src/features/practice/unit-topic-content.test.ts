import { describe, expect, it } from "vitest";

import type { question } from "@content/questions/types";

import type { lesson } from "@/features/lesson/unit-lessons";

import { get_topic_content, resolve_topic_questions } from "./unit-topic-content";

function make_question(id: string, topic_id: string): question {
  return {
    id,
    topic_id,
    prompt: `pregunta de prueba ${id}`,
    options: ["opción a", "opción b", "opción c"],
    correct_option_index: 0,
    explanation: "explicación de prueba.",
    difficulty: "basic",
    use_cases: ["practice"],
  };
}

function make_lesson(id: string, topic_id: string, question_ids: string[]): lesson {
  return {
    id,
    area_id: "area-de-prueba",
    unit_id: "unidad-de-prueba",
    topic_id,
    title: id,
    objective: "objetivo de prueba.",
    estimated_minutes: 5,
    prerequisites: [],
    question_ids,
    source: { guide: "docs/guiaoficial.pdf", page: 1, code: "9.9.9" },
    body: `# ${id}`,
  };
}

describe("resolve_topic_questions", () => {
  it("atribuye cada pregunta a la lección exacta que la declara en un tema con varias lecciones", () => {
    const topic_id = "tema-de-prueba";
    const lesson_a = make_lesson("leccion-a", topic_id, ["q1", "q2"]);
    const lesson_b = make_lesson("leccion-b", topic_id, ["q3"]);
    const questions_by_id = new Map([
      ["q1", make_question("q1", topic_id)],
      ["q2", make_question("q2", topic_id)],
      ["q3", make_question("q3", topic_id)],
    ]);

    const result = resolve_topic_questions(
      [lesson_a.id, lesson_b.id],
      [lesson_a, lesson_b],
      questions_by_id,
    );

    expect(result).toHaveLength(3);
    expect(result.find((item) => item.question.id === "q1")?.lesson.id).toBe(
      "leccion-a",
    );
    expect(result.find((item) => item.question.id === "q2")?.lesson.id).toBe(
      "leccion-a",
    );
    expect(result.find((item) => item.question.id === "q3")?.lesson.id).toBe(
      "leccion-b",
    );
  });

  it("no mezcla lecciones ajenas al tema aunque estén en el arreglo recibido", () => {
    const topic_id = "tema-de-prueba";
    const topic_lesson = make_lesson("leccion-del-tema", topic_id, ["q1"]);
    const other_lesson = make_lesson("leccion-de-otro-tema", "otro-tema", ["q2"]);
    const questions_by_id = new Map([
      ["q1", make_question("q1", topic_id)],
      ["q2", make_question("q2", "otro-tema")],
    ]);

    const result = resolve_topic_questions(
      [topic_lesson.id],
      [topic_lesson, other_lesson],
      questions_by_id,
    );

    expect(result.map((item) => item.question.id)).toEqual(["q1"]);
  });
});

describe("get_topic_content", () => {
  it("resuelve un tema real de la unidad piloto de pensamiento matemático", async () => {
    const content = await get_topic_content(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
      "pm-1-1-1-tipos-de-variables",
    );

    expect(content?.topic).toMatchObject({
      id: "pm-1-1-1-tipos-de-variables",
      title: "tipos de variables",
      code: "1.1.1",
    });
    expect(content?.lessons).toEqual([
      { id: "pm-tipos-de-variables-01", title: "variables estadísticas" },
    ]);
    expect(content?.questions).toHaveLength(5);
    expect(
      content?.questions.every((item) => item.question.topic_id === content.topic.id),
    ).toBe(true);
    expect(
      content?.questions.every((item) => item.lesson.id === "pm-tipos-de-variables-01"),
    ).toBe(true);
  });

  it("resuelve un tema real de la unidad de cultura digital", async () => {
    const content = await get_topic_content(
      "cultura-digital",
      "cd-2-1-ciudadania-digital",
      "cd-2-1-1-elementos-de-la-identidad-digital",
    );

    expect(content?.topic).toMatchObject({
      id: "cd-2-1-1-elementos-de-la-identidad-digital",
      title: "elementos de la identidad digital",
      code: "2.1.1",
    });
    expect(content?.lessons).toEqual([
      { id: "cd-identidad-digital-01", title: "identidad digital" },
    ]);
    expect(content?.questions.map((item) => item.question.id)).toEqual([
      "cd-id-001",
      "cd-id-002",
      "cd-id-003",
      "cd-id-004",
      "cd-id-005",
    ]);
  });

  it("no resuelve un tema inexistente, de otra unidad o de una unidad no registrada", async () => {
    await expect(
      get_topic_content(
        "pensamiento-matematico",
        "pm-1-1-pensamiento-estadistico",
        "tema-inexistente",
      ),
    ).resolves.toBeUndefined();
    await expect(
      get_topic_content(
        "cultura-digital",
        "cd-2-1-ciudadania-digital",
        "pm-1-1-1-tipos-de-variables",
      ),
    ).resolves.toBeUndefined();
    await expect(
      get_topic_content(
        "cultura-digital",
        "cd-2-2-comunicacion-y-colaboracion-digital",
        "cd-2-2-1-definicion-del-ciberespacio",
      ),
    ).resolves.toBeUndefined();
  });
});
