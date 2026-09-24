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
      title: "Identidad digital",
      question_ids: ["cd-id-001", "cd-id-002", "cd-id-003", "cd-id-004", "cd-id-005"],
      source: { guide: "docs/guiaoficial.pdf", page: 12, code: "2.1.1" },
    });
    expect(identidad?.body).toContain("# Identidad digital");
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
      title: "Resistencias de pueblos originarios",
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
      title: "Impacto cultural de resistencias originarias",
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

  it("carga las cuatro lecciones de la unidad de lengua y comunicación, todas sin prerrequisito", async () => {
    const lessons = await get_unit_lessons(
      "lengua-y-comunicacion",
      "lc-6-1-estrategias-de-comprension-lectora",
    );

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "lc-titulo-del-texto-expositivo-01",
        "lc-relaciones-logicas-entre-oraciones-01",
        "lc-jerarquia-en-mapas-conceptuales-01",
        "lc-formas-textuales-de-comunicacion-01",
      ].sort(),
    );

    for (const lesson of lessons) {
      expect(lesson.prerequisites).toEqual([]);
    }

    const jerarquia = lessons.find(
      (lesson) => lesson.id === "lc-jerarquia-en-mapas-conceptuales-01",
    );

    expect(jerarquia).toMatchObject({
      area_id: "lengua-y-comunicacion",
      unit_id: "lc-6-1-estrategias-de-comprension-lectora",
      topic_id: "lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales",
      title: "Jerarquía en mapas conceptuales",
      question_ids: [
        "lc-jmc-001",
        "lc-jmc-002",
        "lc-jmc-003",
        "lc-jmc-004",
        "lc-jmc-005",
      ],
      source: { guide: "docs/guiaoficial.pdf", page: 17, code: "6.1.3" },
    });
  });

  it("carga las nueve lecciones de la unidad de ciencias sociales, con su grafo de prerrequisitos real", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-sociales",
      "cs-7-1-organizacion-economica",
    );

    expect(lessons).toHaveLength(9);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cs-necesidades-materiales-01",
        "cs-factores-de-produccion-01",
        "cs-sectores-productivos-01",
        "cs-distribucion-de-la-riqueza-01",
        "cs-empleo-formal-e-informal-01",
        "cs-redistribucion-estatal-de-la-riqueza-01",
        "cs-estado-de-bienestar-01",
        "cs-modelo-economico-neoliberal-01",
        "cs-degradacion-ambiental-y-produccion-01",
      ].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    for (const no_prerequisite_id of [
      "cs-necesidades-materiales-01",
      "cs-factores-de-produccion-01",
      "cs-empleo-formal-e-informal-01",
    ]) {
      expect(by_id.get(no_prerequisite_id)?.prerequisites).toEqual([]);
    }

    expect(by_id.get("cs-sectores-productivos-01")).toMatchObject({
      area_id: "ciencias-sociales",
      unit_id: "cs-7-1-organizacion-economica",
      topic_id: "cs-7-1-3-tipos-de-sectores-productivos",
      prerequisites: ["cs-factores-de-produccion-01"],
      question_ids: [
        "cs-tsp-001",
        "cs-tsp-002",
        "cs-tsp-003",
        "cs-tsp-004",
        "cs-tsp-005",
      ],
    });
    expect(by_id.get("cs-distribucion-de-la-riqueza-01")?.prerequisites).toEqual([
      "cs-factores-de-produccion-01",
    ]);
    expect(
      by_id.get("cs-redistribucion-estatal-de-la-riqueza-01")?.prerequisites,
    ).toEqual(["cs-distribucion-de-la-riqueza-01"]);
    expect(by_id.get("cs-estado-de-bienestar-01")?.prerequisites).toEqual([
      "cs-redistribucion-estatal-de-la-riqueza-01",
    ]);
    expect(by_id.get("cs-modelo-economico-neoliberal-01")?.prerequisites).toEqual([
      "cs-estado-de-bienestar-01",
    ]);
    expect(
      by_id.get("cs-degradacion-ambiental-y-produccion-01")?.prerequisites,
    ).toEqual(["cs-sectores-productivos-01"]);
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
      get_unit_lesson_ids("cultura-digital", "cd-2-4-pensamiento-algoritmico"),
    ).toEqual([]);
    await expect(
      get_unit_lessons("cultura-digital", "cd-2-4-pensamiento-algoritmico"),
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

    const lengua_y_comunicacion_lesson = await get_available_lesson(
      "lc-formas-textuales-de-comunicacion-01",
    );

    expect(lengua_y_comunicacion_lesson).toMatchObject({
      id: "lc-formas-textuales-de-comunicacion-01",
      area_id: "lengua-y-comunicacion",
      unit_id: "lc-6-1-estrategias-de-comprension-lectora",
      topic_id: "lc-6-1-4-formas-textuales-de-comunicacion",
      prerequisites: [],
    });

    const ciencias_sociales_lesson = await get_available_lesson(
      "cs-redistribucion-estatal-de-la-riqueza-01",
    );

    expect(ciencias_sociales_lesson).toMatchObject({
      id: "cs-redistribucion-estatal-de-la-riqueza-01",
      area_id: "ciencias-sociales",
      unit_id: "cs-7-1-organizacion-economica",
      topic_id: "cs-7-1-6-mecanismos-estatales-de-redistribucion-de-la-riqueza",
      prerequisites: ["cs-distribucion-de-la-riqueza-01"],
    });
  });

  it("no resuelve una lección inexistente ni una de una unidad no registrada", async () => {
    await expect(get_available_lesson("leccion-inexistente")).resolves.toBeUndefined();
    await expect(
      get_available_lesson("cd-conceptos-del-lenguaje-algoritmico-01"),
    ).resolves.toBeUndefined();
    await expect(
      get_available_lesson("hu-funciones-de-la-lengua-01"),
    ).resolves.toBeUndefined();
    await expect(get_available_lesson("cn-luz-visible-01")).resolves.toBeUndefined();
    await expect(
      get_available_lesson("lc-fuentes-primarias-y-secundarias-01"),
    ).resolves.toBeUndefined();
    await expect(
      get_available_lesson("cs-teorias-sobre-el-origen-del-estado-01"),
    ).resolves.toBeUndefined();
  });
});
