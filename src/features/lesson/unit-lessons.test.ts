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

  it("carga las once lecciones de la unidad de conciencia histórica ch-3-2, con su tema partido en dos y su cadena de prerrequisitos", async () => {
    const lessons = await get_unit_lessons(
      "conciencia-historica",
      "ch-3-2-mexico-durante-el-expansionismo-capitalista",
    );

    expect(lessons).toHaveLength(11);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "ch-causas-de-la-independencia-01",
        "ch-proyectos-de-emancipacion-01",
        "ch-liberalismo-mexicano-01",
        "ch-instituciones-y-leyes-del-liberalismo-02",
        "ch-intervenciones-extranjeras-del-siglo-xix-01",
        "ch-movimientos-sociales-del-siglo-xix-01",
        "ch-enajenacion-de-bienes-comunales-01",
        "ch-caracteristicas-del-porfiriato-01",
        "ch-oposicion-al-porfiriato-01",
        "ch-facciones-de-la-revolucion-mexicana-01",
        "ch-derechos-originados-en-la-revolucion-01",
      ].sort(),
    );

    const liberalismo = lessons.find(
      (lesson) => lesson.id === "ch-liberalismo-mexicano-01",
    );
    const instituciones = lessons.find(
      (lesson) => lesson.id === "ch-instituciones-y-leyes-del-liberalismo-02",
    );

    expect(liberalismo?.topic_id).toBe(instituciones?.topic_id);
    expect(liberalismo?.prerequisites).toEqual(["ch-proyectos-de-emancipacion-01"]);
    expect(instituciones?.prerequisites).toEqual(["ch-liberalismo-mexicano-01"]);

    const causas = lessons.find(
      (lesson) => lesson.id === "ch-causas-de-la-independencia-01",
    );
    const movimientos_sociales = lessons.find(
      (lesson) => lesson.id === "ch-movimientos-sociales-del-siglo-xix-01",
    );
    const derechos = lessons.find(
      (lesson) => lesson.id === "ch-derechos-originados-en-la-revolucion-01",
    );

    expect(causas?.prerequisites).toEqual([]);
    expect(movimientos_sociales?.prerequisites).toEqual([]);
    expect(derechos?.prerequisites).toEqual([
      "ch-facciones-de-la-revolucion-mexicana-01",
    ]);
  });

  it("carga las seis lecciones de la unidad de conciencia histórica ch-3-3, que completa el área", async () => {
    const lessons = await get_unit_lessons(
      "conciencia-historica",
      "ch-3-3-realidad-actual-en-perspectiva-historica",
    );

    expect(lessons).toHaveLength(6);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "ch-consolidacion-del-presidencialismo-01",
        "ch-mexico-en-eventos-internacionales-01",
        "ch-causas-del-neoliberalismo-01",
        "ch-globalizacion-en-la-vida-cotidiana-01",
        "ch-causas-de-la-alternancia-politica-01",
        "ch-impacto-social-de-los-medios-01",
      ].sort(),
    );

    const consolidacion = lessons.find(
      (lesson) => lesson.id === "ch-consolidacion-del-presidencialismo-01",
    );
    const neoliberalismo = lessons.find(
      (lesson) => lesson.id === "ch-causas-del-neoliberalismo-01",
    );
    const alternancia = lessons.find(
      (lesson) => lesson.id === "ch-causas-de-la-alternancia-politica-01",
    );
    const eventos = lessons.find(
      (lesson) => lesson.id === "ch-mexico-en-eventos-internacionales-01",
    );

    expect(consolidacion?.prerequisites).toEqual([
      "ch-derechos-originados-en-la-revolucion-01",
    ]);
    expect(neoliberalismo?.prerequisites).toEqual([
      "ch-consolidacion-del-presidencialismo-01",
    ]);
    expect(alternancia?.prerequisites).toEqual([
      "ch-consolidacion-del-presidencialismo-01",
    ]);
    expect(eventos?.prerequisites).toEqual([]);
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

  it("carga las cuatro lecciones de humanidades hu-4-2, con su cadena de prerrequisitos lineal", async () => {
    const lessons = await get_unit_lessons(
      "humanidades",
      "hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
    );

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "hu-funciones-de-la-lengua-01",
        "hu-premisas-y-conclusion-01",
        "hu-tipos-de-argumentos-01",
        "hu-discursos-argumentativos-01",
      ].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    expect(by_id.get("hu-funciones-de-la-lengua-01")?.prerequisites).toEqual([]);
    expect(by_id.get("hu-premisas-y-conclusion-01")?.prerequisites).toEqual([
      "hu-funciones-de-la-lengua-01",
    ]);
    expect(by_id.get("hu-tipos-de-argumentos-01")?.prerequisites).toEqual([
      "hu-premisas-y-conclusion-01",
    ]);
    expect(by_id.get("hu-discursos-argumentativos-01")?.prerequisites).toEqual([
      "hu-tipos-de-argumentos-01",
    ]);
  });

  it("carga las tres lecciones de humanidades hu-4-3, ninguna con prerrequisito", async () => {
    const lessons = await get_unit_lessons(
      "humanidades",
      "hu-4-3-construccion-de-la-persona-para-la-convivencia",
    );

    expect(lessons).toHaveLength(3);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "hu-teorias-eticas-01",
        "hu-valores-para-la-convivencia-01",
        "hu-tipos-de-normas-01",
      ].sort(),
    );
    expect(lessons.every((lesson) => lesson.prerequisites.length === 0)).toBe(true);
  });

  it("carga las dos lecciones de humanidades hu-4-4, una sin prerrequisito y otra encadenada a hu-4-2", async () => {
    const lessons = await get_unit_lessons(
      "humanidades",
      "hu-4-4-reflexion-politica-y-participacion-ciudadana",
    );

    expect(lessons).toHaveLength(2);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      ["hu-autonomia-y-heteronomia-01", "hu-discurso-politico-01"].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    expect(by_id.get("hu-autonomia-y-heteronomia-01")?.prerequisites).toEqual([]);
    expect(by_id.get("hu-discurso-politico-01")?.prerequisites).toEqual([
      "hu-discursos-argumentativos-01",
    ]);
  });

  it("carga las cinco lecciones de humanidades hu-4-5, con los dos prerrequisitos reales encadenados a bioética", async () => {
    const lessons = await get_unit_lessons(
      "humanidades",
      "hu-4-5-humanidad-ante-desafios-contemporaneos",
    );

    expect(lessons).toHaveLength(5);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "hu-principios-de-bioetica-01",
        "hu-etica-y-sustentabilidad-01",
        "hu-perspectiva-de-genero-01",
        "hu-reconocimiento-de-la-alteridad-01",
        "hu-humanos-y-otros-seres-vivos-01",
      ].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    expect(by_id.get("hu-principios-de-bioetica-01")?.prerequisites).toEqual([
      "hu-teorias-eticas-01",
    ]);
    expect(by_id.get("hu-etica-y-sustentabilidad-01")?.prerequisites).toEqual([
      "hu-principios-de-bioetica-01",
    ]);
    expect(by_id.get("hu-humanos-y-otros-seres-vivos-01")?.prerequisites).toEqual([
      "hu-principios-de-bioetica-01",
    ]);
    expect(by_id.get("hu-perspectiva-de-genero-01")?.prerequisites).toEqual([]);
    expect(by_id.get("hu-reconocimiento-de-la-alteridad-01")?.prerequisites).toEqual(
      [],
    );
  });

  it("carga las dos lecciones de humanidades hu-4-6, sin prerrequisitos entre sí", async () => {
    const lessons = await get_unit_lessons(
      "humanidades",
      "hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
    );

    expect(lessons).toHaveLength(2);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      ["hu-categorias-esteticas-01", "hu-hermeneutica-01"].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    expect(by_id.get("hu-categorias-esteticas-01")?.prerequisites).toEqual([]);
    expect(by_id.get("hu-hermeneutica-01")?.prerequisites).toEqual([]);
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
  });

  it("carga las cinco lecciones de la unidad de ciencias naturales cn-5-2, con el calor específico dependiendo de la conversión de temperatura de cn-5-1", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-2-conservacion-de-la-energia-y-sus-interacciones",
    );

    expect(lessons).toHaveLength(5);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cn-luz-visible-01",
        "cn-calor-especifico-01",
        "cn-tipos-de-energia-01",
        "cn-energia-cinetica-y-potencial-01",
        "cn-leyes-de-la-termodinamica-01",
      ].sort(),
    );

    const specific_heat = lessons.find(
      (lesson) => lesson.id === "cn-calor-especifico-01",
    );
    const thermodynamics = lessons.find(
      (lesson) => lesson.id === "cn-leyes-de-la-termodinamica-01",
    );
    const light = lessons.find((lesson) => lesson.id === "cn-luz-visible-01");
    const energy_types = lessons.find(
      (lesson) => lesson.id === "cn-tipos-de-energia-01",
    );
    const kinetic_and_potential = lessons.find(
      (lesson) => lesson.id === "cn-energia-cinetica-y-potencial-01",
    );

    expect(specific_heat?.prerequisites).toEqual(["cn-conversion-de-temperatura-01"]);
    expect(thermodynamics?.prerequisites).toEqual(["cn-calor-especifico-01"]);
    expect(light?.prerequisites).toEqual([]);
    expect(energy_types?.prerequisites).toEqual([]);
    expect(kinetic_and_potential?.prerequisites).toEqual(["cn-tipos-de-energia-01"]);
  });

  it("carga las siete lecciones de la unidad de ciencias naturales cn-5-3, con su cadena interna de prerrequisitos", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-3-ecosistemas-interacciones-energia-y-dinamica",
    );

    expect(lessons).toHaveLength(7);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cn-fotosintesis-01",
        "cn-biomas-01",
        "cn-redes-troficas-01",
        "cn-ciclos-biogeoquimicos-01",
        "cn-productividad-en-ecosistemas-01",
        "cn-servicios-ambientales-01",
        "cn-desequilibrio-ecologico-01",
      ].sort(),
    );

    const photosynthesis = lessons.find((lesson) => lesson.id === "cn-fotosintesis-01");
    const biomes = lessons.find((lesson) => lesson.id === "cn-biomas-01");
    const food_webs = lessons.find((lesson) => lesson.id === "cn-redes-troficas-01");
    const biogeochemical_cycles = lessons.find(
      (lesson) => lesson.id === "cn-ciclos-biogeoquimicos-01",
    );
    const ecosystem_productivity = lessons.find(
      (lesson) => lesson.id === "cn-productividad-en-ecosistemas-01",
    );
    const environmental_services = lessons.find(
      (lesson) => lesson.id === "cn-servicios-ambientales-01",
    );
    const ecological_imbalance = lessons.find(
      (lesson) => lesson.id === "cn-desequilibrio-ecologico-01",
    );

    expect(photosynthesis?.prerequisites).toEqual([]);
    expect(biomes?.prerequisites).toEqual([]);
    expect(food_webs?.prerequisites).toEqual(["cn-fotosintesis-01"]);
    expect(biogeochemical_cycles?.prerequisites).toEqual([]);
    expect(ecosystem_productivity?.prerequisites).toEqual(["cn-redes-troficas-01"]);
    expect(environmental_services?.prerequisites).toEqual([]);
    expect(ecological_imbalance?.prerequisites).toEqual([
      "cn-servicios-ambientales-01",
    ]);
  });

  it("carga las tres lecciones de la unidad de ciencias naturales cn-5-4, con prerrequisitos reales de cn-5-1", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-4-reacciones-quimicas-y-conservacion-de-la-materia",
    );

    expect(lessons).toHaveLength(3);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cn-masa-molar-01",
        "cn-reacciones-quimicas-01",
        "cn-reacciones-nucleares-01",
      ].sort(),
    );

    const molar_mass = lessons.find((lesson) => lesson.id === "cn-masa-molar-01");
    const chemical_reactions = lessons.find(
      (lesson) => lesson.id === "cn-reacciones-quimicas-01",
    );
    const nuclear_reactions = lessons.find(
      (lesson) => lesson.id === "cn-reacciones-nucleares-01",
    );

    expect(molar_mass?.prerequisites).toEqual(["cn-tipos-de-enlaces-01"]);
    expect(chemical_reactions?.prerequisites).toEqual([
      "cn-conservacion-de-la-materia-01",
    ]);
    expect(nuclear_reactions?.prerequisites).toEqual([]);
  });

  it("carga las cuatro lecciones de la unidad de ciencias naturales cn-5-5, con ondas electromagnéticas dependiendo de luz visible de cn-5-2", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-5-energia-en-los-procesos-de-la-vida-diaria",
    );

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cn-choques-elasticos-e-inelasticos-01",
        "cn-momento-lineal-01",
        "cn-ondas-electromagneticas-01",
        "cn-caida-libre-01",
      ].sort(),
    );

    const collisions = lessons.find(
      (lesson) => lesson.id === "cn-choques-elasticos-e-inelasticos-01",
    );
    const linear_momentum = lessons.find(
      (lesson) => lesson.id === "cn-momento-lineal-01",
    );
    const electromagnetic_waves = lessons.find(
      (lesson) => lesson.id === "cn-ondas-electromagneticas-01",
    );
    const free_fall = lessons.find((lesson) => lesson.id === "cn-caida-libre-01");

    expect(collisions?.prerequisites).toEqual([]);
    expect(linear_momentum?.prerequisites).toEqual([]);
    expect(electromagnetic_waves?.prerequisites).toEqual(["cn-luz-visible-01"]);
    expect(free_fall?.prerequisites).toEqual([]);
  });

  it("carga las tres lecciones de la unidad de ciencias naturales cn-5-6, con respiración celular dependiendo de organelos celulares", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-6-organismos-estructura-y-procesos",
    );

    expect(lessons).toHaveLength(3);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cn-organelos-celulares-01",
        "cn-niveles-de-organizacion-biologica-01",
        "cn-respiracion-celular-01",
      ].sort(),
    );

    const organelles = lessons.find(
      (lesson) => lesson.id === "cn-organelos-celulares-01",
    );
    const biological_organization = lessons.find(
      (lesson) => lesson.id === "cn-niveles-de-organizacion-biologica-01",
    );
    const cellular_respiration = lessons.find(
      (lesson) => lesson.id === "cn-respiracion-celular-01",
    );

    expect(organelles?.prerequisites).toEqual([]);
    expect(biological_organization?.prerequisites).toEqual([]);
    expect(cellular_respiration?.prerequisites).toEqual(["cn-organelos-celulares-01"]);
  });

  it("carga las cinco lecciones de la unidad de ciencias naturales cn-5-7, que completa el área", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-7-herencia-y-evolucion-biologica",
    );

    expect(lessons).toHaveLength(5);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cn-reproduccion-sexual-y-asexual-01",
        "cn-tipos-de-cromosomas-01",
        "cn-cuadros-de-punnett-01",
        "cn-teorias-evolutivas-01",
        "cn-consecuencias-de-la-evolucion-01",
      ].sort(),
    );

    const reproduction = lessons.find(
      (lesson) => lesson.id === "cn-reproduccion-sexual-y-asexual-01",
    );
    const chromosome_types = lessons.find(
      (lesson) => lesson.id === "cn-tipos-de-cromosomas-01",
    );
    const punnett_squares = lessons.find(
      (lesson) => lesson.id === "cn-cuadros-de-punnett-01",
    );
    const evolutionary_theories = lessons.find(
      (lesson) => lesson.id === "cn-teorias-evolutivas-01",
    );
    const evolution_consequences = lessons.find(
      (lesson) => lesson.id === "cn-consecuencias-de-la-evolucion-01",
    );

    expect(reproduction?.prerequisites).toEqual([]);
    expect(chromosome_types?.prerequisites).toEqual([]);
    expect(punnett_squares?.prerequisites).toEqual(["cn-tipos-de-cromosomas-01"]);
    expect(evolutionary_theories?.prerequisites).toEqual([]);
    expect(evolution_consequences?.prerequisites).toEqual(["cn-teorias-evolutivas-01"]);
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

  it("carga las seis lecciones de la unidad de lengua y comunicación lc-6-2, con trama dependiendo de tema central", async () => {
    const lessons = await get_unit_lessons(
      "lengua-y-comunicacion",
      "lc-6-2-recursos-del-analisis-literario",
    );

    expect(lessons).toHaveLength(6);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "lc-tema-central-del-texto-narrativo-01",
        "lc-trama-del-texto-narrativo-01",
        "lc-personajes-del-texto-narrativo-01",
        "lc-narrador-del-texto-narrativo-01",
        "lc-ambito-de-la-narracion-01",
        "lc-tiempo-narrativo-01",
      ].sort(),
    );

    const central_theme = lessons.find(
      (lesson) => lesson.id === "lc-tema-central-del-texto-narrativo-01",
    );
    const plot = lessons.find(
      (lesson) => lesson.id === "lc-trama-del-texto-narrativo-01",
    );
    const characters = lessons.find(
      (lesson) => lesson.id === "lc-personajes-del-texto-narrativo-01",
    );
    const narrator = lessons.find(
      (lesson) => lesson.id === "lc-narrador-del-texto-narrativo-01",
    );
    const setting = lessons.find(
      (lesson) => lesson.id === "lc-ambito-de-la-narracion-01",
    );
    const time = lessons.find((lesson) => lesson.id === "lc-tiempo-narrativo-01");

    expect(central_theme?.prerequisites).toEqual([]);
    expect(plot?.prerequisites).toEqual(["lc-tema-central-del-texto-narrativo-01"]);
    expect(characters?.prerequisites).toEqual([]);
    expect(narrator?.prerequisites).toEqual([]);
    expect(setting?.prerequisites).toEqual([]);
    expect(time?.prerequisites).toEqual([]);
  });

  it("carga las siete lecciones de la unidad de lengua y comunicación lc-6-3, ninguna con prerrequisito", async () => {
    const lessons = await get_unit_lessons(
      "lengua-y-comunicacion",
      "lc-6-3-procesos-de-composicion-de-textos",
    );

    expect(lessons).toHaveLength(7);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "lc-composicion-de-un-ensayo-01",
        "lc-tipos-de-fuentes-de-informacion-01",
        "lc-reglas-de-acentuacion-01",
        "lc-reglas-de-puntuacion-01",
        "lc-unidades-sintacticas-01",
        "lc-coherencia-textual-01",
        "lc-adecuacion-textual-01",
      ].sort(),
    );

    for (const lesson of lessons) {
      expect(lesson.prerequisites).toEqual([]);
    }
  });

  it("carga las cuatro lecciones de la unidad de lengua y comunicación lc-6-4, con su cadena de prerrequisitos lineal", async () => {
    const lessons = await get_unit_lessons(
      "lengua-y-comunicacion",
      "lc-6-4-formas-orales-de-la-comunicacion",
    );

    expect(lessons).toHaveLength(4);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "lc-elementos-de-la-exposicion-oral-01",
        "lc-caracteristicas-del-dialogo-01",
        "lc-elementos-del-debate-01",
        "lc-funciones-del-dialogo-y-debate-01",
      ].sort(),
    );

    const exposition = lessons.find(
      (lesson) => lesson.id === "lc-elementos-de-la-exposicion-oral-01",
    );
    const dialogue = lessons.find(
      (lesson) => lesson.id === "lc-caracteristicas-del-dialogo-01",
    );
    const debate = lessons.find((lesson) => lesson.id === "lc-elementos-del-debate-01");
    const functions = lessons.find(
      (lesson) => lesson.id === "lc-funciones-del-dialogo-y-debate-01",
    );

    expect(exposition?.prerequisites).toEqual([]);
    expect(dialogue?.prerequisites).toEqual([]);
    expect(debate?.prerequisites).toEqual(["lc-caracteristicas-del-dialogo-01"]);
    expect(functions?.prerequisites).toEqual(["lc-elementos-del-debate-01"]);
  });

  it("carga las diez lecciones de la unidad de lengua y comunicación lc-6-5, con su grafo de prerrequisitos real", async () => {
    const lessons = await get_unit_lessons(
      "lengua-y-comunicacion",
      "lc-6-5-estructura-gramatical-del-ingles",
    );

    expect(lessons).toHaveLength(10);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "lc-tiempo-presente-en-ingles-01",
        "lc-tiempo-pasado-en-ingles-01",
        "lc-tiempo-futuro-en-ingles-01",
        "lc-presente-perfecto-en-ingles-01",
        "lc-pasado-perfecto-en-ingles-01",
        "lc-preguntas-wh-en-ingles-01",
        "lc-comparaciones-en-ingles-01",
        "lc-verbos-modales-en-ingles-01",
        "lc-estructuras-condicionales-en-ingles-01",
        "lc-voz-pasiva-en-ingles-01",
      ].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    expect(by_id.get("lc-tiempo-presente-en-ingles-01")?.prerequisites).toEqual([]);
    expect(by_id.get("lc-tiempo-pasado-en-ingles-01")?.prerequisites).toEqual([
      "lc-tiempo-presente-en-ingles-01",
    ]);
    expect(by_id.get("lc-tiempo-futuro-en-ingles-01")?.prerequisites).toEqual([
      "lc-tiempo-presente-en-ingles-01",
    ]);
    expect(by_id.get("lc-presente-perfecto-en-ingles-01")?.prerequisites).toEqual([
      "lc-tiempo-presente-en-ingles-01",
    ]);
    expect(by_id.get("lc-pasado-perfecto-en-ingles-01")?.prerequisites).toEqual([
      "lc-tiempo-pasado-en-ingles-01",
    ]);
    expect(by_id.get("lc-preguntas-wh-en-ingles-01")?.prerequisites).toEqual([
      "lc-tiempo-presente-en-ingles-01",
    ]);
    expect(by_id.get("lc-comparaciones-en-ingles-01")?.prerequisites).toEqual([]);
    expect(by_id.get("lc-verbos-modales-en-ingles-01")?.prerequisites).toEqual([
      "lc-tiempo-presente-en-ingles-01",
    ]);
    expect(
      by_id.get("lc-estructuras-condicionales-en-ingles-01")?.prerequisites,
    ).toEqual(["lc-tiempo-presente-en-ingles-01"]);
    expect(by_id.get("lc-voz-pasiva-en-ingles-01")?.prerequisites).toEqual([
      "lc-tiempo-pasado-en-ingles-01",
    ]);
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

  it("carga las ocho lecciones de la unidad cs-7-2 de ciencias sociales, con su grafo de prerrequisitos real", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-sociales",
      "cs-7-2-perspectivas-politicas",
    );

    expect(lessons).toHaveLength(8);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cs-teorias-sobre-el-origen-del-estado-01",
        "cs-democracia-electoral-01",
        "cs-ciudadania-mexicana-01",
        "cs-instituciones-del-estado-mexicano-01",
        "cs-poderes-facticos-01",
        "cs-principios-de-politica-exterior-01",
        "cs-organismos-internacionales-01",
        "cs-areas-en-el-sistema-mundo-01",
      ].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    for (const no_prerequisite_id of [
      "cs-teorias-sobre-el-origen-del-estado-01",
      "cs-poderes-facticos-01",
      "cs-principios-de-politica-exterior-01",
      "cs-organismos-internacionales-01",
      "cs-areas-en-el-sistema-mundo-01",
    ]) {
      expect(by_id.get(no_prerequisite_id)?.prerequisites).toEqual([]);
    }

    expect(by_id.get("cs-democracia-electoral-01")?.prerequisites).toEqual([
      "cs-teorias-sobre-el-origen-del-estado-01",
    ]);
    expect(by_id.get("cs-ciudadania-mexicana-01")?.prerequisites).toEqual([
      "cs-democracia-electoral-01",
    ]);
    expect(by_id.get("cs-instituciones-del-estado-mexicano-01")).toMatchObject({
      area_id: "ciencias-sociales",
      unit_id: "cs-7-2-perspectivas-politicas",
      topic_id: "cs-7-2-4-funcion-de-instituciones-del-estado-mexicano",
      prerequisites: ["cs-teorias-sobre-el-origen-del-estado-01"],
      question_ids: [
        "cs-iem-001",
        "cs-iem-002",
        "cs-iem-003",
        "cs-iem-004",
        "cs-iem-005",
      ],
    });
  });

  it("carga las ocho lecciones de la unidad cs-7-3 de ciencias sociales, que completa el área, con su grafo de prerrequisitos real", async () => {
    const lessons = await get_unit_lessons(
      "ciencias-sociales",
      "cs-7-3-problemas-sociologicos",
    );

    expect(lessons).toHaveLength(8);
    expect(lessons.map((lesson) => lesson.id).sort()).toEqual(
      [
        "cs-organizacion-social-01",
        "cs-indicadores-de-desarrollo-comunitario-01",
        "cs-indicadores-de-bienestar-01",
        "cs-segregacion-social-01",
        "cs-derechos-de-ninas-ninos-y-adolescentes-01",
        "cs-crisis-sociales-economicas-y-ambientales-01",
        "cs-tipos-de-migraciones-01",
        "cs-movimientos-sociales-antisistema-01",
      ].sort(),
    );

    const by_id = new Map(lessons.map((lesson) => [lesson.id, lesson]));

    for (const no_prerequisite_id of [
      "cs-organizacion-social-01",
      "cs-derechos-de-ninas-ninos-y-adolescentes-01",
      "cs-crisis-sociales-economicas-y-ambientales-01",
      "cs-tipos-de-migraciones-01",
      "cs-movimientos-sociales-antisistema-01",
    ]) {
      expect(by_id.get(no_prerequisite_id)?.prerequisites).toEqual([]);
    }

    for (const dependent_id of [
      "cs-indicadores-de-desarrollo-comunitario-01",
      "cs-indicadores-de-bienestar-01",
      "cs-segregacion-social-01",
    ]) {
      expect(by_id.get(dependent_id)?.prerequisites).toEqual([
        "cs-organizacion-social-01",
      ]);
    }

    expect(by_id.get("cs-organizacion-social-01")).toMatchObject({
      area_id: "ciencias-sociales",
      unit_id: "cs-7-3-problemas-sociologicos",
      topic_id: "cs-7-3-1-tipos-de-organizacion-social",
      question_ids: [
        "cs-tos-001",
        "cs-tos-002",
        "cs-tos-003",
        "cs-tos-004",
        "cs-tos-005",
      ],
    });
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
      get_unit_lesson_ids("lengua-y-comunicacion", "lc-6-6-unidad-inexistente"),
    ).toEqual([]);
    await expect(
      get_unit_lessons("lengua-y-comunicacion", "lc-6-6-unidad-inexistente"),
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

    const humanidades_hu_4_3_lesson = await get_available_lesson(
      "hu-tipos-de-normas-01",
    );

    expect(humanidades_hu_4_3_lesson).toMatchObject({
      id: "hu-tipos-de-normas-01",
      area_id: "humanidades",
      unit_id: "hu-4-3-construccion-de-la-persona-para-la-convivencia",
      topic_id: "hu-4-3-3-tipos-de-normas",
      prerequisites: [],
    });

    const humanidades_hu_4_4_lesson = await get_available_lesson(
      "hu-discurso-politico-01",
    );

    expect(humanidades_hu_4_4_lesson).toMatchObject({
      id: "hu-discurso-politico-01",
      area_id: "humanidades",
      unit_id: "hu-4-4-reflexion-politica-y-participacion-ciudadana",
      topic_id: "hu-4-4-2-discurso-politico",
      prerequisites: ["hu-discursos-argumentativos-01"],
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
      get_available_lesson("lc-leccion-de-una-unidad-inexistente-01"),
    ).resolves.toBeUndefined();
    await expect(
      get_available_lesson("otra-leccion-inexistente"),
    ).resolves.toBeUndefined();
  });
});
