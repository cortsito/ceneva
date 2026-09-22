import { describe, expect, it } from "vitest";

import {
  get_pilot_lesson,
  get_pilot_lesson_ids,
  get_pilot_lessons,
} from "./pilot-lessons";

describe("pilot lesson loader", () => {
  it("carga las cuatro lecciones piloto con su frontmatter y cuerpo markdown", async () => {
    const lessons = await get_pilot_lessons();

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id)).toEqual(get_pilot_lesson_ids());
    expect(lessons[0]).toMatchObject({
      id: "pm-tipos-de-variables-01",
      area_id: "pensamiento-matematico",
      unit_id: "pm-1-1-pensamiento-estadistico",
      topic_id: "pm-1-1-1-tipos-de-variables",
      title: "Variables estadísticas",
      objective: "Clasificar variables cuantitativas, cualitativas y categóricas.",
      estimated_minutes: 10,
      prerequisites: [],
      question_ids: ["pm-tv-001", "pm-tv-002", "pm-tv-003", "pm-tv-004", "pm-tv-005"],
      source: {
        guide: "docs/guiaoficial.pdf",
        page: 11,
        code: "1.1.1",
      },
    });
    expect(lessons[0]?.body).toContain("## Explicación");
    expect(lessons[3]?.prerequisites).toEqual(["pm-medidas-de-tendencia-central-01"]);
  });

  it("no expone ids ajenos al piloto", async () => {
    await expect(
      get_pilot_lesson("pm-probabilidad-simple-01"),
    ).resolves.toBeUndefined();
    await expect(get_pilot_lesson("leccion-inexistente")).resolves.toBeUndefined();
  });
});
