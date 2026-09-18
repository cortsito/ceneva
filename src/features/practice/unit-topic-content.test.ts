import { describe, expect, it } from "vitest";

import type { question } from "@content/questions/types";

import type { lesson } from "@/features/lesson/unit-lessons";

import {
  get_available_topic_content,
  get_topic_content,
  resolve_topic_questions,
} from "./unit-topic-content";

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

  it("resuelve un tema real de la unidad de humanidades", async () => {
    const content = await get_topic_content(
      "humanidades",
      "hu-4-1-fundamentos-del-pensamiento-filosofico",
      "hu-4-1-2-pensamiento-critico",
    );

    expect(content?.topic).toMatchObject({
      id: "hu-4-1-2-pensamiento-critico",
      title: "pensamiento crítico",
      code: "4.1.2",
    });
    expect(content?.lessons).toEqual([
      { id: "hu-pensamiento-critico-01", title: "pensamiento crítico" },
    ]);
    expect(content?.questions.map((item) => item.question.id)).toEqual([
      "hu-pc-001",
      "hu-pc-002",
      "hu-pc-003",
      "hu-pc-004",
      "hu-pc-005",
    ]);
  });

  it("resuelve un tema real de la unidad de ciencias naturales", async () => {
    const content = await get_topic_content(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-1-materia-y-sus-interacciones",
      "cn-5-1-3-ley-de-conservacion-de-la-materia",
    );

    expect(content?.topic).toMatchObject({
      id: "cn-5-1-3-ley-de-conservacion-de-la-materia",
      title: "ley de la conservación de la materia",
      code: "5.1.3",
    });
    expect(content?.lessons).toEqual([
      { id: "cn-conservacion-de-la-materia-01", title: "conservación de la materia" },
    ]);
    expect(content?.questions.map((item) => item.question.id)).toEqual([
      "cn-cm-001",
      "cn-cm-002",
      "cn-cm-003",
      "cn-cm-004",
      "cn-cm-005",
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

  it("atribuye cada una de las diez preguntas del tema real ch-3-1-2 a su lección declarante exacta", async () => {
    const content = await get_topic_content(
      "conciencia-historica",
      "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
    );

    expect(content?.lessons).toEqual([
      {
        id: "ch-resistencias-de-pueblos-originarios-01",
        title: "resistencias de pueblos originarios",
      },
      {
        id: "ch-impacto-cultural-de-resistencias-originarias-02",
        title: "impacto cultural de resistencias originarias",
      },
    ]);
    expect(content?.questions).toHaveLength(10);

    const by_lesson = new Map(
      content?.questions.map((item) => [item.question.id, item.lesson.id]),
    );

    for (const id of [
      "ch-rpo-001",
      "ch-rpo-002",
      "ch-rpo-003",
      "ch-rpo-004",
      "ch-rpo-005",
    ]) {
      expect(by_lesson.get(id)).toBe("ch-resistencias-de-pueblos-originarios-01");
    }
    for (const id of [
      "ch-icr-001",
      "ch-icr-002",
      "ch-icr-003",
      "ch-icr-004",
      "ch-icr-005",
    ]) {
      expect(by_lesson.get(id)).toBe(
        "ch-impacto-cultural-de-resistencias-originarias-02",
      );
    }
  });
});

describe("get_available_topic_content", () => {
  it("resuelve el contenido de un tema piloto de una sola lección sin declarar su área ni unidad", async () => {
    const content = await get_available_topic_content("pm-1-1-1-tipos-de-variables");

    expect(content?.topic.id).toBe("pm-1-1-1-tipos-de-variables");
    expect(content?.lessons).toEqual([
      { id: "pm-tipos-de-variables-01", title: "variables estadísticas" },
    ]);
    expect(content?.questions).toHaveLength(5);
  });

  it("resuelve el contenido de un tema de cultura digital sin declarar su área ni unidad", async () => {
    const content = await get_available_topic_content(
      "cd-2-1-4-tipos-de-amenazas-de-seguridad-digital",
    );

    expect(content?.topic).toMatchObject({
      id: "cd-2-1-4-tipos-de-amenazas-de-seguridad-digital",
      title: "tipos de amenazas de seguridad digital",
      code: "2.1.4",
    });
    expect(content?.lessons).toEqual([
      {
        id: "cd-amenazas-de-seguridad-digital-01",
        title: "amenazas de seguridad digital",
      },
    ]);
    expect(content?.questions.map((item) => item.question.id)).toEqual([
      "cd-asd-001",
      "cd-asd-002",
      "cd-asd-003",
      "cd-asd-004",
      "cd-asd-005",
    ]);
  });

  it("resuelve el contenido dinámico de diez preguntas del tema real ch-3-1-2 con sus dos lecciones", async () => {
    const content = await get_available_topic_content(
      "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
    );

    expect(content?.lessons).toHaveLength(2);
    expect(content?.questions).toHaveLength(10);
    expect(
      content?.questions.every((item) => item.question.topic_id === content.topic.id),
    ).toBe(true);
  });

  it("resuelve el contenido de un tema de humanidades sin declarar su área ni unidad", async () => {
    const content = await get_available_topic_content(
      "hu-4-1-1-filosofia-mito-y-ciencia",
    );

    expect(content?.topic).toMatchObject({
      id: "hu-4-1-1-filosofia-mito-y-ciencia",
      title: "filosofía, mito y ciencia",
      code: "4.1.1",
    });
    expect(content?.lessons).toEqual([
      { id: "hu-filosofia-mito-y-ciencia-01", title: "filosofía, mito y ciencia" },
    ]);
    expect(content?.questions).toHaveLength(5);
  });

  it("resuelve el contenido de un tema de ciencias naturales sin declarar su área ni unidad", async () => {
    const content = await get_available_topic_content("cn-5-1-1-tipos-de-enlaces");

    expect(content?.topic).toMatchObject({
      id: "cn-5-1-1-tipos-de-enlaces",
      title: "tipos de enlaces iónico, covalente y metálico",
      code: "5.1.1",
    });
    expect(content?.lessons).toEqual([
      { id: "cn-tipos-de-enlaces-01", title: "enlaces químicos" },
    ]);
    expect(content?.questions).toHaveLength(5);
  });

  it("no resuelve un tema inexistente ni uno de una unidad no registrada", async () => {
    await expect(
      get_available_topic_content("tema-inexistente"),
    ).resolves.toBeUndefined();
    await expect(
      get_available_topic_content("cd-2-2-1-definicion-del-ciberespacio"),
    ).resolves.toBeUndefined();
    await expect(
      get_available_topic_content(
        "ch-3-2-1-causas-internas-y-externas-de-la-independencia",
      ),
    ).resolves.toBeUndefined();
    await expect(
      get_available_topic_content("hu-4-2-1-funciones-de-la-lengua"),
    ).resolves.toBeUndefined();
  });
});
