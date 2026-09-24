import { describe, expect, it } from "vitest";

import type { question } from "@content/questions/types";

import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

import {
  get_simulator_coverage,
  validate_simulator_question,
} from "./simulator-coverage";

function expected_area_id_sequence(): string[] {
  return available_units.flatMap((entry) => {
    const resolved = get_available_unit(entry.area_id, entry.unit_id);
    return resolved ? Array(resolved.unit.topics.length).fill(entry.area_id) : [];
  });
}

function create_question(overrides: Partial<question> = {}): question {
  return {
    id: "q-1",
    topic_id: "topic-1",
    prompt: "pregunta",
    options: ["a", "b", "c"],
    correct_option_index: 0,
    explanation: "explicación",
    common_error: "error común",
    source_reference: "docs/guiaoficial.pdf p.1",
    difficulty: "basic",
    use_cases: ["simulator"],
    ...overrides,
  };
}

describe("get_simulator_coverage", () => {
  it("resuelve una pregunta por cada tema de cada unidad registrada, agrupadas por área en el orden de available_units", async () => {
    const items = await get_simulator_coverage();
    const expected_sequence = expected_area_id_sequence();

    expect(items).toHaveLength(expected_sequence.length);
    expect(items.map((item) => item.area.id)).toEqual(expected_sequence);
  });

  it("mantiene el orden curricular de temas dentro de cada área, incluyendo las seis unidades de pensamiento matemático", async () => {
    const items = await get_simulator_coverage();
    const pm_topics = items
      .filter((item) => item.area.id === "pensamiento-matematico")
      .map((item) => item.topic.id);

    expect(pm_topics.slice(0, 4)).toEqual([
      "pm-1-1-1-tipos-de-variables",
      "pm-1-1-2-tipos-de-muestra",
      "pm-1-1-3-medidas-de-tendencia-central",
      "pm-1-1-4-medidas-de-dispersion",
    ]);
    expect(pm_topics).toHaveLength(30);
    expect(pm_topics.at(-1)).toBe("pm-1-6-6-aplicacion-de-la-derivada-en-optimizacion");
  });

  it("ninguna área queda omitida, y pensamiento matemático cubre sus treinta temas", async () => {
    const items = await get_simulator_coverage();
    const area_ids = new Set(items.map((item) => item.area.id));

    expect(area_ids).toEqual(
      new Set([
        "pensamiento-matematico",
        "cultura-digital",
        "conciencia-historica",
        "humanidades",
        "ciencias-naturales-experimentales-y-tecnologia",
        "lengua-y-comunicacion",
        "ciencias-sociales",
      ]),
    );
    expect(
      items.filter((item) => item.area.id === "pensamiento-matematico"),
    ).toHaveLength(30);
  });

  it("cada pregunta pertenece a su tema, está etiquetada para simulacro, tiene tres opciones distintas y explicación", async () => {
    const items = await get_simulator_coverage();

    items.forEach((item) => {
      expect(item.question.topic_id).toBe(item.topic.id);
      expect(item.question.use_cases).toContain("simulator");
      expect(item.question.options).toHaveLength(3);
      expect(new Set(item.question.options).size).toBe(3);
      expect(item.question.correct_option_index).toBeGreaterThanOrEqual(0);
      expect(item.question.correct_option_index).toBeLessThan(3);
      expect(item.question.explanation.trim().length).toBeGreaterThan(0);
    });
  });

  it("los ids de pregunta son únicos en toda la cobertura", async () => {
    const items = await get_simulator_coverage();
    const question_ids = items.map((item) => item.question.id);

    expect(new Set(question_ids).size).toBe(question_ids.length);
  });

  it("atribuye el tema multi-lección ch-3-1-2 a su primera lección", async () => {
    const items = await get_simulator_coverage();
    const split_topic_item = items.find(
      (item) =>
        item.topic.id === "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
    );

    expect(split_topic_item?.question.id).toBe("ch-rpo-001");
    expect(split_topic_item?.lesson.id).toBe(
      "ch-resistencias-de-pueblos-originarios-01",
    );
  });
});

describe("validate_simulator_question", () => {
  it("no falla para una pregunta válida", () => {
    expect(() =>
      validate_simulator_question(create_question(), "topic-1"),
    ).not.toThrow();
  });

  it("falla si la pregunta no está etiquetada para simulacro", () => {
    expect(() =>
      validate_simulator_question(
        create_question({ use_cases: ["practice"] }),
        "topic-1",
      ),
    ).toThrow(/no está habilitada para simulacro/);
  });

  it("falla si la pregunta no tiene error común", () => {
    expect(() =>
      validate_simulator_question(
        create_question({ common_error: undefined }),
        "topic-1",
      ),
    ).toThrow(/error común/);
  });

  it("falla si la pregunta no tiene referencia de fuente", () => {
    expect(() =>
      validate_simulator_question(
        create_question({ source_reference: undefined }),
        "topic-1",
      ),
    ).toThrow(/referencia de fuente/);
  });

  it("falla si la pregunta no pertenece al tema", () => {
    expect(() => validate_simulator_question(create_question(), "otro-tema")).toThrow(
      /no pertenece al tema/,
    );
  });
});
