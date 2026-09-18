import { describe, expect, it } from "vitest";

import {
  get_available_unit,
  get_available_unit_for_area,
  get_unit_questions,
} from "./available-curriculum";

describe("get_available_unit", () => {
  it("resuelve la unidad piloto de pensamiento matemático", () => {
    const resolved = get_available_unit(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );

    expect(resolved?.area.id).toBe("pensamiento-matematico");
    expect(resolved?.unit.id).toBe("pm-1-1-pensamiento-estadistico");
    expect(resolved?.unit.topics).toHaveLength(4);
  });

  it("resuelve la unidad de cultura digital", () => {
    const resolved = get_available_unit("cultura-digital", "cd-2-1-ciudadania-digital");

    expect(resolved?.area.id).toBe("cultura-digital");
    expect(resolved?.unit.id).toBe("cd-2-1-ciudadania-digital");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cd-2-1-1-elementos-de-la-identidad-digital",
      "cd-2-1-2-tipos-de-licenciamiento-de-software",
      "cd-2-1-3-tipos-de-servicios-digitales",
      "cd-2-1-4-tipos-de-amenazas-de-seguridad-digital",
      "cd-2-1-5-medidas-de-seguridad-digital",
    ]);
  });

  it("resuelve la unidad de conciencia histórica, incluyendo su tema con dos lecciones", () => {
    const resolved = get_available_unit(
      "conciencia-historica",
      "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
    );

    expect(resolved?.area.id).toBe("conciencia-historica");
    expect(resolved?.unit.id).toBe(
      "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos",
      "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
      "ch-3-1-3-grupos-sociales-de-la-nueva-espana",
      "ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal",
      "ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal",
    ]);
    expect(
      resolved?.unit.topics.find(
        (topic) =>
          topic.id === "ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
      )?.lesson_ids,
    ).toEqual([
      "ch-resistencias-de-pueblos-originarios-01",
      "ch-impacto-cultural-de-resistencias-originarias-02",
    ]);
  });

  it("no resuelve una unidad de conciencia histórica todavía sin contenido listo", () => {
    expect(
      get_available_unit(
        "conciencia-historica",
        "ch-3-2-mexico-durante-el-expansionismo-capitalista",
      ),
    ).toBeUndefined();
  });

  it("resuelve la unidad de humanidades", () => {
    const resolved = get_available_unit(
      "humanidades",
      "hu-4-1-fundamentos-del-pensamiento-filosofico",
    );

    expect(resolved?.area.id).toBe("humanidades");
    expect(resolved?.unit.id).toBe("hu-4-1-fundamentos-del-pensamiento-filosofico");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "hu-4-1-1-filosofia-mito-y-ciencia",
      "hu-4-1-2-pensamiento-critico",
      "hu-4-1-3-pensamiento-existencialista",
      "hu-4-1-4-doxa-y-episteme",
    ]);
  });

  it("no resuelve una unidad de humanidades todavía sin contenido listo", () => {
    expect(
      get_available_unit(
        "humanidades",
        "hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
      ),
    ).toBeUndefined();
  });

  it("resuelve la unidad de ciencias naturales, con el tema de conservación bloqueado por su prerrequisito", () => {
    const resolved = get_available_unit(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-1-materia-y-sus-interacciones",
    );

    expect(resolved?.area.id).toBe("ciencias-naturales-experimentales-y-tecnologia");
    expect(resolved?.unit.id).toBe("cn-5-1-materia-y-sus-interacciones");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cn-5-1-1-tipos-de-enlaces",
      "cn-5-1-2-estados-de-agregacion-de-la-materia",
      "cn-5-1-3-ley-de-conservacion-de-la-materia",
      "cn-5-1-4-conversion-de-escalas-termometricas",
      "cn-5-1-5-ley-de-coulomb",
    ]);
  });

  it("no resuelve una unidad de ciencias naturales todavía sin contenido listo", () => {
    expect(
      get_available_unit(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-2-conservacion-de-la-energia-y-sus-interacciones",
      ),
    ).toBeUndefined();
  });

  it("resuelve la unidad de lengua y comunicación, con sus cuatro temas sin prerrequisito", () => {
    const resolved = get_available_unit(
      "lengua-y-comunicacion",
      "lc-6-1-estrategias-de-comprension-lectora",
    );

    expect(resolved?.area.id).toBe("lengua-y-comunicacion");
    expect(resolved?.unit.id).toBe("lc-6-1-estrategias-de-comprension-lectora");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "lc-6-1-1-titulo-del-texto-expositivo",
      "lc-6-1-2-relaciones-logicas-entre-oraciones",
      "lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales",
      "lc-6-1-4-formas-textuales-de-comunicacion",
    ]);
  });

  it("no resuelve una unidad de lengua y comunicación todavía sin contenido listo", () => {
    expect(
      get_available_unit(
        "lengua-y-comunicacion",
        "lc-6-2-recursos-del-analisis-literario",
      ),
    ).toBeUndefined();
  });

  it("resuelve la unidad de ciencias sociales, con su grafo de prerrequisitos interno", () => {
    const resolved = get_available_unit(
      "ciencias-sociales",
      "cs-7-1-organizacion-economica",
    );

    expect(resolved?.area.id).toBe("ciencias-sociales");
    expect(resolved?.unit.id).toBe("cs-7-1-organizacion-economica");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cs-7-1-1-necesidades-materiales-vitales-y-no-vitales",
      "cs-7-1-2-factores-de-procesos-de-produccion",
      "cs-7-1-3-tipos-de-sectores-productivos",
      "cs-7-1-4-mecanismos-de-distribucion-de-la-riqueza",
      "cs-7-1-5-empleo-formal-e-informal",
      "cs-7-1-6-mecanismos-estatales-de-redistribucion-de-la-riqueza",
      "cs-7-1-7-caracteristicas-del-estado-de-bienestar",
      "cs-7-1-8-caracteristicas-del-modelo-economico-neoliberal",
      "cs-7-1-9-degradacion-ambiental-por-formas-de-produccion",
    ]);
  });

  it("no resuelve una unidad de ciencias sociales todavía sin contenido listo", () => {
    expect(
      get_available_unit("ciencias-sociales", "cs-7-2-perspectivas-politicas"),
    ).toBeUndefined();
    expect(
      get_available_unit("ciencias-sociales", "cs-7-3-problemas-sociologicos"),
    ).toBeUndefined();
  });

  it("no resuelve un área desconocida", () => {
    expect(
      get_available_unit("ciencias-naturales", "cualquier-unidad"),
    ).toBeUndefined();
  });

  it("no resuelve una unidad no registrada aunque el área exista", () => {
    expect(
      get_available_unit(
        "cultura-digital",
        "cd-2-2-comunicacion-y-colaboracion-digital",
      ),
    ).toBeUndefined();
  });

  it("no resuelve una combinación cruzada de área y unidad de otra área", () => {
    expect(
      get_available_unit("pensamiento-matematico", "cd-2-1-ciudadania-digital"),
    ).toBeUndefined();
    expect(
      get_available_unit("cultura-digital", "pm-1-1-pensamiento-estadistico"),
    ).toBeUndefined();
  });
});

describe("get_available_unit_for_area", () => {
  it("resuelve la única unidad lista de un área disponible", () => {
    expect(get_available_unit_for_area("pensamiento-matematico")?.unit.id).toBe(
      "pm-1-1-pensamiento-estadistico",
    );
    expect(get_available_unit_for_area("cultura-digital")?.unit.id).toBe(
      "cd-2-1-ciudadania-digital",
    );
    expect(get_available_unit_for_area("conciencia-historica")?.unit.id).toBe(
      "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
    );
    expect(get_available_unit_for_area("humanidades")?.unit.id).toBe(
      "hu-4-1-fundamentos-del-pensamiento-filosofico",
    );
    expect(
      get_available_unit_for_area("ciencias-naturales-experimentales-y-tecnologia")
        ?.unit.id,
    ).toBe("cn-5-1-materia-y-sus-interacciones");
    expect(get_available_unit_for_area("lengua-y-comunicacion")?.unit.id).toBe(
      "lc-6-1-estrategias-de-comprension-lectora",
    );
    expect(get_available_unit_for_area("ciencias-sociales")?.unit.id).toBe(
      "cs-7-1-organizacion-economica",
    );
  });

  it("no resuelve un área sin unidades de contenido listas", () => {
    expect(get_available_unit_for_area("ciencias-naturales")).toBeUndefined();
  });
});

describe("get_unit_questions", () => {
  it("limita las preguntas de pensamiento matemático a los temas de su unidad lista", () => {
    const resolved = get_available_unit(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );
    const questions = get_unit_questions(
      "pensamiento-matematico",
      "pm-1-1-pensamiento-estadistico",
    );

    expect(questions).toHaveLength(20);
    expect(
      questions?.every((question) =>
        resolved?.unit.topics.some((topic) => topic.id === question.topic_id),
      ),
    ).toBe(true);
  });

  it("devuelve el banco tipado de una unidad registrada", () => {
    expect(
      get_unit_questions("cultura-digital", "cd-2-1-ciudadania-digital"),
    ).toHaveLength(25);
  });

  it("devuelve las treinta preguntas de la unidad de conciencia histórica", () => {
    expect(
      get_unit_questions(
        "conciencia-historica",
        "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      ),
    ).toHaveLength(30);
  });

  it("devuelve las veinte preguntas de la unidad de humanidades", () => {
    expect(
      get_unit_questions(
        "humanidades",
        "hu-4-1-fundamentos-del-pensamiento-filosofico",
      ),
    ).toHaveLength(20);
  });

  it("devuelve las veinticinco preguntas de la unidad de ciencias naturales", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-1-materia-y-sus-interacciones",
      ),
    ).toHaveLength(25);
  });

  it("devuelve las veinte preguntas de la unidad de lengua y comunicación", () => {
    expect(
      get_unit_questions(
        "lengua-y-comunicacion",
        "lc-6-1-estrategias-de-comprension-lectora",
      ),
    ).toHaveLength(20);
  });

  it("devuelve las cuarenta y cinco preguntas de la unidad de ciencias sociales", () => {
    expect(
      get_unit_questions("ciencias-sociales", "cs-7-1-organizacion-economica"),
    ).toHaveLength(45);
  });

  it("devuelve undefined para una unidad no registrada", () => {
    expect(
      get_unit_questions("ciencias-naturales", "cualquier-unidad"),
    ).toBeUndefined();
  });
});
