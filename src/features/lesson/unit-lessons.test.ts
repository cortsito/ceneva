import { describe, expect, it } from "vitest";

import {
  get_available_lesson,
  get_unit_lesson,
  get_unit_lesson_ids,
  get_unit_lessons,
} from "./unit-lessons";

describe("get_unit_lessons", () => {
  it("carga las cuatro lecciones de la unidad piloto de pensamiento matemático", async () => {
    const lessons = await get_unit_lessons(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id)).toEqual(
      get_unit_lesson_ids("pensamiento-matematico", "pm-1-1-pensamiento-estadistico"),
    );
    expect(lessons[0]).toMatchObject({
      id: "pm-tipos-de-variables-01",
      area_id: "pensamiento-matematico",
      unit_id: "pm-1-1-pensamiento-estadistico",
      topic_id: "pm-1-1-1-tipos-de-variables",
    });
  });

  it("carga las cinco lecciones de la unidad de cultura digital", async () => {
    const lessons = await get_unit_lessons(
      "cultura-digital",
      "cd-2-1-ciudadania-digital",
    );

    expect(lessons).toHaveLength(5);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cd-identidad-digital-01",
        "cd-licenciamiento-de-software-01",
        "cd-servicios-digitales-01",
        "cd-amenazas-de-seguridad-digital-01",
        "cd-medidas-de-seguridad-digital-01",
      ].sort(),
    );

    const identidad = lessons.find((lesson) => lesson.id === "cd-identidad-digital-01");

    expect(identidad).toMatchObject({
      area_id: "cultura-digital",
      unit_id: "cd-2-1-ciudadania-digital",
      topic_id: "cd-2-1-1-elementos-de-la-identidad-digital",
      title: "identidad digital",
      question_ids: ["cd-id-001", "cd-id-002", "cd-id-003", "cd-id-004", "cd-id-005"],
      source: { guide: "docs/guiaoficial.pdf", page: 12, code: "2.1.1" },
    });
    expect(identidad?.body).toContain("# identidad digital");
  });

  it("carga las seis lecciones de la unidad de conciencia histórica, incluyendo el tema partido en dos", async () => {
    const lessons = await get_unit_lessons(
      "conciencia-historica",
      "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
    );

    expect(lessons).toHaveLength(6);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "ch-conquista-de-pueblos-originarios-01",
        "ch-resistencias-de-pueblos-originarios-01",
        "ch-impacto-cultural-de-resistencias-originarias-02",
        "ch-grupos-sociales-de-la-nueva-espana-01",
        "ch-origen-del-patrimonio-historico-01",
        "ch-preservacion-del-patrimonio-historico-01",
      ].sort(),
    );

    const resistencias = lessons.find(
      (lesson) => lesson.id === "ch-resistencias-de-pueblos-originarios-01",
    );
    const impacto_cultural = lessons.find(
      (lesson) => lesson.id === "ch-impacto-cultural-de-resistencias-originarias-02",
    );

    expect(resistencias).toMatchObject({
      area_id: "conciencia-historica",
      unit_id: "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      topic_id: "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
      title: "resistencias de pueblos originarios",
      prerequisites: ["ch-conquista-de-pueblos-originarios-01"],
      question_ids: [
        "ch-rpo-001",
        "ch-rpo-002",
        "ch-rpo-003",
        "ch-rpo-004",
        "ch-rpo-005",
      ],
      source: { guide: "docs/guiaoficial.pdf", page: 13, code: "3.1.2" },
    });
    expect(impacto_cultural).toMatchObject({
      area_id: "conciencia-historica",
      unit_id: "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      topic_id: "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
      title: "impacto cultural de resistencias originarias",
      prerequisites: ["ch-resistencias-de-pueblos-originarios-01"],
      question_ids: [
        "ch-icr-001",
        "ch-icr-002",
        "ch-icr-003",
        "ch-icr-004",
        "ch-icr-005",
      ],
    });
    expect(resistencias?.topic_id).toBe(impacto_cultural?.topic_id);

    const origen = lessons.find(
      (lesson) => lesson.id === "ch-origen-del-patrimonio-historico-01",
    );
    const preservacion = lessons.find(
      (lesson) => lesson.id === "ch-preservacion-del-patrimonio-historico-01",
    );

    expect(origen?.prerequisites).toEqual([]);
    expect(preservacion?.prerequisites).toEqual([
      "ch-origen-del-patrimonio-historico-01",
    ]);
  });

  it("carga las cuatro lecciones de la unidad de humanidades, con su prerrequisito real", async () => {
    const lessons = await get_unit_lessons(
      "humanidades",
      "hu-4-1-fundamentos-del-pensamiento-filosofico",
    );

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "hu-filosofia-mito-y-ciencia-01",
        "hu-pensamiento-critico-01",
        "hu-pensamiento-existencialista-01",
        "hu-doxa-y-episteme-01",
      ].sort(),
    );

    const foundation = lessons.find(
      (lesson) => lesson.id === "hu-filosofia-mito-y-ciencia-01",
    );
    const dependent_ids = [
      "hu-pensamiento-critico-01",
      "hu-pensamiento-existencialista-01",
      "hu-doxa-y-episteme-01",
    ];

    expect(foundation).toMatchObject({
      area_id: "humanidades",
      unit_id: "hu-4-1-fundamentos-del-pensamiento-filosofico",
      topic_id: "hu-4-1-1-filosofia-mito-y-ciencia",
      prerequisites: [],
      question_ids: [
        "hu-fmc-001",
        "hu-fmc-002",
        "hu-fmc-003",
        "hu-fmc-004",
        "hu-fmc-005",
      ],
    });

    for (const dependent_id of dependent_ids) {
      const dependent = lessons.find((lesson) => lesson.id === dependent_id);
      expect(dependent?.prerequisites).toEqual(["hu-filosofia-mito-y-ciencia-01"]);
    }
  });

  it("carga las cinco lecciones de la unidad de ciencias naturales, con el prerrequisito real de conservación", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-1-materia-y-sus-interacciones",
    );

    expect(lessons).toHaveLength(5);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cn-tipos-de-enlaces-01",
        "cn-estados-de-agregacion-01",
        "cn-conservacion-de-la-materia-01",
        "cn-conversion-de-temperatura-01",
        "cn-ley-de-coulomb-01",
      ].sort(),
    );

    const bond_types = lessons.find((lesson) => lesson.id === "cn-tipos-de-enlaces-01");
    const conservation = lessons.find(
      (lesson) => lesson.id === "cn-conservacion-de-la-materia-01",
    );

    expect(bond_types?.prerequisites).toEqual([]);
    expect(conservation).toMatchObject({
      area_id: "ciencias-naturales-experimentales-y-tecnologia",
      unit_id: "cn-5-1-materia-y-sus-interacciones",
      topic_id: "cn-5-1-3-ley-de-conservacion-de-la-materia",
      prerequisites: ["cn-tipos-de-enlaces-01"],
      question_ids: ["cn-cm-001", "cn-cm-002", "cn-cm-003", "cn-cm-004", "cn-cm-005"],
    });

    for (const no_prerequisite_id of [
      "cn-estados-de-agregacion-01",
      "cn-conversion-de-temperatura-01",
      "cn-ley-de-coulomb-01",
    ]) {
      const lesson = lessons.find((item) => item.id === no_prerequisite_id);
      expect(lesson?.prerequisites).toEqual([]);
    }
  });

  it("no expone lecciones ajenas a una unidad registrada", async () => {
    await expect(
      get_unit_lesson(
        "pensamiento-matematico",
        "pm-1-1-pensamiento-estadistico",
        "cd-identidad-digital-01",
      ),
    ).resolves.toBeUndefined();
    await expect(
      get_unit_lesson(
        "cultura-digital",
        "cd-2-1-ciudadania-digital",
        "leccion-inexistente",
      ),
    ).resolves.toBeUndefined();
  });

  it("no resuelve lecciones de una unidad no registrada", async () => {
    expect(
      get_unit_lesson_ids(
        "cultura-digital",
        "cd-2-2-comunicacion-y-colaboracion-digital",
      ),
    ).toEqual([]);
    await expect(
      get_unit_lessons("cultura-digital", "cd-2-2-comunicacion-y-colaboracion-digital"),
    ).resolves.toEqual([]);
  });
});

describe("get_available_lesson", () => {
  it("resuelve una lección real sin importar a qué unidad lista pertenece", async () => {
    const pilot_lesson = await get_available_lesson("pm-tipos-de-variables-01");
    const cultura_digital_lesson = await get_available_lesson(
      "cd-identidad-digital-01",
    );

    expect(pilot_lesson).toMatchObject({
      id: "pm-tipos-de-variables-01",
      area_id: "pensamiento-matematico",
      unit_id: "pm-1-1-pensamiento-estadistico",
    });
    expect(cultura_digital_lesson).toMatchObject({
      id: "cd-identidad-digital-01",
      area_id: "cultura-digital",
      unit_id: "cd-2-1-ciudadania-digital",
    });

    const conciencia_historica_lesson = await get_available_lesson(
      "ch-impacto-cultural-de-resistencias-originarias-02",
    );

    expect(conciencia_historica_lesson).toMatchObject({
      id: "ch-impacto-cultural-de-resistencias-originarias-02",
      area_id: "conciencia-historica",
      unit_id: "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      topic_id: "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
    });

    const humanidades_lesson = await get_available_lesson("hu-pensamiento-critico-01");

    expect(humanidades_lesson).toMatchObject({
      id: "hu-pensamiento-critico-01",
      area_id: "humanidades",
      unit_id: "hu-4-1-fundamentos-del-pensamiento-filosofico",
      topic_id: "hu-4-1-2-pensamiento-critico",
      prerequisites: ["hu-filosofia-mito-y-ciencia-01"],
    });

    const ciencias_naturales_lesson = await get_available_lesson(
      "cn-conservacion-de-la-materia-01",
    );

    expect(ciencias_naturales_lesson).toMatchObject({
      id: "cn-conservacion-de-la-materia-01",
      area_id: "ciencias-naturales-experimentales-y-tecnologia",
      unit_id: "cn-5-1-materia-y-sus-interacciones",
      topic_id: "cn-5-1-3-ley-de-conservacion-de-la-materia",
      prerequisites: ["cn-tipos-de-enlaces-01"],
    });
  });

  it("no resuelve una lección inexistente ni una de una unidad no registrada", async () => {
    await expect(get_available_lesson("leccion-inexistente")).resolves.toBeUndefined();
    await expect(get_available_lesson("cd-ciberespacio-01")).resolves.toBeUndefined();
    await expect(
      get_available_lesson("hu-funciones-de-la-lengua-01"),
    ).resolves.toBeUndefined();
    await expect(get_available_lesson("cn-luz-visible-01")).resolves.toBeUndefined();
  });
});
