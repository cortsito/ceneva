import { describe, expect, it } from "vitest";

import {
  get_available_unit,
  get_available_units_for_area,
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

  it("resuelve la unidad de conciencia histórica ch-3-2, incluyendo su tema dividido en dos lecciones", () => {
    const resolved = get_available_unit(
      "conciencia-historica",
      "ch-3-2-mexico-durante-el-expansionismo-capitalista",
    );

    expect(resolved?.area.id).toBe("conciencia-historica");
    expect(resolved?.unit.id).toBe(
      "ch-3-2-mexico-durante-el-expansionismo-capitalista",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "ch-3-2-1-causas-internas-y-externas-de-la-independencia",
      "ch-3-2-2-proyectos-de-emancipacion-del-siglo-xix",
      "ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano",
      "ch-3-2-4-intervenciones-de-francia-y-estados-unidos-en-mexico",
      "ch-3-2-5-movimientos-sociales-del-siglo-xix",
      "ch-3-2-6-consecuencias-de-la-enajenacion-de-bienes-comunales",
      "ch-3-2-7-caracteristicas-del-porfiriato",
      "ch-3-2-8-movimientos-de-oposicion-al-porfiriato",
      "ch-3-2-9-facciones-de-la-revolucion-mexicana",
      "ch-3-2-10-impacto-de-la-revolucion-mexicana",
    ]);
    expect(
      resolved?.unit.topics.find(
        (topic) =>
          topic.id === "ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano",
      )?.lesson_ids,
    ).toEqual([
      "ch-liberalismo-mexicano-01",
      "ch-instituciones-y-leyes-del-liberalismo-02",
    ]);
  });

  it("resuelve la unidad de conciencia histórica ch-3-3, que completa el área", () => {
    const resolved = get_available_unit(
      "conciencia-historica",
      "ch-3-3-realidad-actual-en-perspectiva-historica",
    );

    expect(resolved?.area.id).toBe("conciencia-historica");
    expect(resolved?.unit.id).toBe("ch-3-3-realidad-actual-en-perspectiva-historica");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "ch-3-3-1-factores-de-consolidacion-del-presidencialismo",
      "ch-3-3-2-participacion-de-mexico-en-eventos-internacionales-del-siglo-xx",
      "ch-3-3-3-causas-del-neoliberalismo-en-mexico",
      "ch-3-3-4-globalizacion-en-la-actualidad",
      "ch-3-3-5-causas-de-la-alternancia-politica",
      "ch-3-3-6-impacto-social-de-los-medios-de-comunicacion-en-la-historia",
    ]);
  });

  it("resuelve la unidad de ciencias naturales cn-5-2, con calor específico dependiendo de conversión de temperatura", () => {
    const resolved = get_available_unit(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-2-conservacion-de-la-energia-y-sus-interacciones",
    );

    expect(resolved?.area.id).toBe("ciencias-naturales-experimentales-y-tecnologia");
    expect(resolved?.unit.id).toBe(
      "cn-5-2-conservacion-de-la-energia-y-sus-interacciones",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cn-5-2-1-caracteristicas-de-la-luz-visible",
      "cn-5-2-2-calor-especifico",
      "cn-5-2-3-caracteristicas-de-los-tipos-de-energia",
      "cn-5-2-4-energia-cinetica-y-potencial",
      "cn-5-2-5-leyes-de-la-termodinamica",
    ]);
  });

  it("resuelve la unidad de ciencias naturales cn-5-3, con redes tróficas dependiendo de fotosíntesis", () => {
    const resolved = get_available_unit(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-3-ecosistemas-interacciones-energia-y-dinamica",
    );

    expect(resolved?.area.id).toBe("ciencias-naturales-experimentales-y-tecnologia");
    expect(resolved?.unit.id).toBe(
      "cn-5-3-ecosistemas-interacciones-energia-y-dinamica",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cn-5-3-1-productos-y-reactivos-en-la-fotosintesis",
      "cn-5-3-2-caracteristicas-de-los-biomas",
      "cn-5-3-3-niveles-de-las-redes-troficas",
      "cn-5-3-4-sustancias-en-ciclos-biogeoquimicos",
      "cn-5-3-5-tipos-de-productividad-en-un-ecosistema",
      "cn-5-3-6-tipos-de-servicios-ambientales",
      "cn-5-3-7-consecuencias-del-desequilibrio-ecologico",
    ]);
  });

  it("resuelve la unidad de ciencias naturales cn-5-4, con masa molar, reacciones químicas y nucleares", () => {
    const resolved = get_available_unit(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-4-reacciones-quimicas-y-conservacion-de-la-materia",
    );

    expect(resolved?.area.id).toBe("ciencias-naturales-experimentales-y-tecnologia");
    expect(resolved?.unit.id).toBe(
      "cn-5-4-reacciones-quimicas-y-conservacion-de-la-materia",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cn-5-4-1-masa-molar-de-compuestos-quimicos",
      "cn-5-4-2-tipos-de-reacciones-quimicas",
      "cn-5-4-3-tipos-de-reacciones-nucleares",
    ]);
  });

  it("resuelve la unidad de ciencias naturales cn-5-5, con ondas electromagnéticas dependiente de luz visible de cn-5-2", () => {
    const resolved = get_available_unit(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-5-energia-en-los-procesos-de-la-vida-diaria",
    );

    expect(resolved?.area.id).toBe("ciencias-naturales-experimentales-y-tecnologia");
    expect(resolved?.unit.id).toBe("cn-5-5-energia-en-los-procesos-de-la-vida-diaria");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cn-5-5-1-tipos-de-choques",
      "cn-5-5-2-momento-lineal",
      "cn-5-5-3-ondas-electromagneticas-en-dispositivos-cotidianos",
      "cn-5-5-4-caida-libre",
    ]);
  });

  it("resuelve la unidad de ciencias naturales cn-5-6, con respiración celular dependiendo de organelos celulares", () => {
    const resolved = get_available_unit(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-6-organismos-estructura-y-procesos",
    );

    expect(resolved?.area.id).toBe("ciencias-naturales-experimentales-y-tecnologia");
    expect(resolved?.unit.id).toBe("cn-5-6-organismos-estructura-y-procesos");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cn-5-6-1-organelos-celulares",
      "cn-5-6-2-niveles-de-organizacion-biologica",
      "cn-5-6-3-etapas-de-la-respiracion-celular",
    ]);
  });

  it("resuelve la unidad de ciencias naturales cn-5-7, que completa el área", () => {
    const resolved = get_available_unit(
      "ciencias-naturales-experimentales-y-tecnologia",
      "cn-5-7-herencia-y-evolucion-biologica",
    );

    expect(resolved?.area.id).toBe("ciencias-naturales-experimentales-y-tecnologia");
    expect(resolved?.unit.id).toBe("cn-5-7-herencia-y-evolucion-biologica");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cn-5-7-1-reproduccion-sexual-y-asexual",
      "cn-5-7-2-tipos-de-cromosomas",
      "cn-5-7-3-cuadros-de-punnett",
      "cn-5-7-4-teorias-evolutivas",
      "cn-5-7-5-consecuencias-de-la-evolucion",
    ]);
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

  it("resuelve la unidad de humanidades hu-4-2, con su cadena de prerrequisitos lineal", () => {
    const resolved = get_available_unit(
      "humanidades",
      "hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
    );

    expect(resolved?.area.id).toBe("humanidades");
    expect(resolved?.unit.id).toBe(
      "hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "hu-4-2-1-funciones-de-la-lengua",
      "hu-4-2-2-premisas-y-conclusion-del-argumento",
      "hu-4-2-3-argumentos-deductivos-inductivos-y-analogicos",
      "hu-4-2-4-tipos-de-discurso-argumentativo",
    ]);
  });

  it("resuelve la unidad de humanidades hu-4-3, con sus tres temas sin prerrequisitos", () => {
    const resolved = get_available_unit(
      "humanidades",
      "hu-4-3-construccion-de-la-persona-para-la-convivencia",
    );

    expect(resolved?.area.id).toBe("humanidades");
    expect(resolved?.unit.id).toBe(
      "hu-4-3-construccion-de-la-persona-para-la-convivencia",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "hu-4-3-1-postulados-de-las-teorias-eticas",
      "hu-4-3-2-valores-y-su-definicion",
      "hu-4-3-3-tipos-de-normas",
    ]);
  });

  it("resuelve la unidad de humanidades hu-4-4, con sus dos temas", () => {
    const resolved = get_available_unit(
      "humanidades",
      "hu-4-4-reflexion-politica-y-participacion-ciudadana",
    );

    expect(resolved?.area.id).toBe("humanidades");
    expect(resolved?.unit.id).toBe(
      "hu-4-4-reflexion-politica-y-participacion-ciudadana",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "hu-4-4-1-autonomia-y-heteronomia",
      "hu-4-4-2-discurso-politico",
    ]);
  });

  it("resuelve la unidad de humanidades hu-4-5, con sus cinco temas", () => {
    const resolved = get_available_unit(
      "humanidades",
      "hu-4-5-humanidad-ante-desafios-contemporaneos",
    );

    expect(resolved?.area.id).toBe("humanidades");
    expect(resolved?.unit.id).toBe("hu-4-5-humanidad-ante-desafios-contemporaneos");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "hu-4-5-1-principios-de-bioetica",
      "hu-4-5-2-principios-eticos-aplicados-a-la-sustentabilidad",
      "hu-4-5-3-perspectiva-de-genero",
      "hu-4-5-4-reconocimiento-de-la-alteridad",
      "hu-4-5-5-relacion-entre-humanos-y-otros-seres-vivos",
    ]);
  });

  it("resuelve la unidad de humanidades hu-4-6, con sus dos temas", () => {
    const resolved = get_available_unit(
      "humanidades",
      "hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
    );

    expect(resolved?.area.id).toBe("humanidades");
    expect(resolved?.unit.id).toBe(
      "hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
    );
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "hu-4-6-1-categorias-esteticas",
      "hu-4-6-2-definicion-de-hermeneutica",
    ]);
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

  it("resuelve la unidad lc-6-2 de lengua y comunicación, con la calibración editorial recién aplicada", () => {
    const resolved = get_available_unit(
      "lengua-y-comunicacion",
      "lc-6-2-recursos-del-analisis-literario",
    );

    expect(resolved?.area.id).toBe("lengua-y-comunicacion");
    expect(resolved?.unit.id).toBe("lc-6-2-recursos-del-analisis-literario");
    expect(resolved?.unit.title).toBe("Recursos del análisis literario");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "lc-6-2-2-tema-central-del-texto-literario-narrativo",
      "lc-6-2-3-trama-del-texto-literario-narrativo",
      "lc-6-2-4-caracteristicas-y-acciones-de-personajes",
      "lc-6-2-5-caracteristicas-del-narrador",
      "lc-6-2-6-ambito-de-la-narracion",
      "lc-6-2-7-tipos-de-tiempo-narrativo",
    ]);
  });

  it("resuelve la unidad lc-6-3 de lengua y comunicación, con las tres muestras oficiales calibradas", () => {
    const resolved = get_available_unit(
      "lengua-y-comunicacion",
      "lc-6-3-procesos-de-composicion-de-textos",
    );

    expect(resolved?.area.id).toBe("lengua-y-comunicacion");
    expect(resolved?.unit.id).toBe("lc-6-3-procesos-de-composicion-de-textos");
    expect(resolved?.unit.title).toBe("Procesos de composición de textos");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "lc-6-3-1-etapas-para-la-composicion-de-un-ensayo",
      "lc-6-3-2-tipos-de-fuentes-de-informacion",
      "lc-6-3-3-reglas-de-acentuacion",
      "lc-6-3-4-reglas-de-puntuacion",
      "lc-6-3-5-funcion-de-unidades-sintacticas",
      "lc-6-3-6-coherencia-de-un-texto",
      "lc-6-3-7-adecuacion-de-un-texto",
    ]);
  });

  it("resuelve la unidad lc-6-4 de lengua y comunicación, sin muestras oficiales aplicables", () => {
    const resolved = get_available_unit(
      "lengua-y-comunicacion",
      "lc-6-4-formas-orales-de-la-comunicacion",
    );

    expect(resolved?.area.id).toBe("lengua-y-comunicacion");
    expect(resolved?.unit.id).toBe("lc-6-4-formas-orales-de-la-comunicacion");
    expect(resolved?.unit.title).toBe("Formas orales de la comunicación");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "lc-6-4-1-elementos-de-la-exposicion-oral",
      "lc-6-4-2-caracteristicas-del-dialogo",
      "lc-6-4-3-elementos-del-debate",
      "lc-6-4-4-funciones-de-formas-orales",
    ]);
  });

  it("resuelve la unidad lc-6-5 de lengua y comunicación, que completa el área", () => {
    const resolved = get_available_unit(
      "lengua-y-comunicacion",
      "lc-6-5-estructura-gramatical-del-ingles",
    );

    expect(resolved?.area.id).toBe("lengua-y-comunicacion");
    expect(resolved?.unit.id).toBe("lc-6-5-estructura-gramatical-del-ingles");
    expect(resolved?.unit.title).toBe("Estructura gramatical del idioma inglés");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "lc-6-5-1-tiempo-presente",
      "lc-6-5-2-tiempo-pasado",
      "lc-6-5-3-tiempo-futuro",
      "lc-6-5-4-presente-perfecto",
      "lc-6-5-5-pasado-perfecto",
      "lc-6-5-6-preguntas-wh",
      "lc-6-5-7-relaciones-de-comparacion",
      "lc-6-5-8-verbos-modales",
      "lc-6-5-9-estructuras-condicionales",
      "lc-6-5-10-voz-pasiva",
    ]);
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

  it("resuelve la unidad cs-7-2 de ciencias sociales, con la calibración editorial recién aplicada", () => {
    const resolved = get_available_unit(
      "ciencias-sociales",
      "cs-7-2-perspectivas-politicas",
    );

    expect(resolved?.area.id).toBe("ciencias-sociales");
    expect(resolved?.unit.id).toBe("cs-7-2-perspectivas-politicas");
    expect(resolved?.unit.title).toBe("Perspectivas políticas");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cs-7-2-1-teorias-sobre-el-origen-del-estado",
      "cs-7-2-2-caracteristicas-de-la-democracia-electoral",
      "cs-7-2-3-requisitos-para-obtener-ciudadania-mexicana",
      "cs-7-2-4-funcion-de-instituciones-del-estado-mexicano",
      "cs-7-2-5-poderes-facticos",
      "cs-7-2-6-principios-de-politica-exterior",
      "cs-7-2-7-organismos-internacionales",
      "cs-7-2-8-areas-en-el-sistema-mundo",
    ]);
  });

  it("resuelve la unidad cs-7-3 de ciencias sociales, que completa el área", () => {
    const resolved = get_available_unit(
      "ciencias-sociales",
      "cs-7-3-problemas-sociologicos",
    );

    expect(resolved?.area.id).toBe("ciencias-sociales");
    expect(resolved?.unit.id).toBe("cs-7-3-problemas-sociologicos");
    expect(resolved?.unit.title).toBe("Problemas sociológicos");
    expect(resolved?.unit.topics.map((topic) => topic.id)).toEqual([
      "cs-7-3-1-tipos-de-organizacion-social",
      "cs-7-3-2-indicadores-de-desarrollo-comunitario",
      "cs-7-3-3-indicadores-de-bienestar",
      "cs-7-3-4-factores-que-propician-la-segregacion-social",
      "cs-7-3-5-derechos-de-ninas-ninos-y-adolescentes",
      "cs-7-3-6-consecuencias-de-crisis-sociales-economicas-y-ambientales",
      "cs-7-3-7-tipos-de-migraciones",
      "cs-7-3-8-movimientos-sociales-antisistema",
    ]);
  });

  it("no resuelve un área desconocida", () => {
    expect(
      get_available_unit("ciencias-naturales", "cualquier-unidad"),
    ).toBeUndefined();
  });

  it("no resuelve una unidad no registrada aunque el área exista", () => {
    expect(
      get_available_unit("lengua-y-comunicacion", "lc-6-6-unidad-inexistente"),
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

describe("get_available_units_for_area", () => {
  it("resuelve las seis unidades listas de pensamiento matemático, en orden curricular", () => {
    expect(
      get_available_units_for_area("pensamiento-matematico").map(
        (resolved) => resolved.unit.id,
      ),
    ).toEqual([
      "pm-1-1-pensamiento-estadistico",
      "pm-1-2-pensamiento-probabilistico",
      "pm-1-3-pensamiento-algebraico",
      "pm-1-4-pensamiento-aritmetico",
      "pm-1-5-pensamiento-geometrico",
      "pm-1-6-pensamiento-variacional",
    ]);
  });

  it("resuelve las cuatro unidades listas de cultura digital, en orden de registro", () => {
    expect(
      get_available_units_for_area("cultura-digital").map(
        (resolved) => resolved.unit.id,
      ),
    ).toEqual([
      "cd-2-1-ciudadania-digital",
      "cd-2-2-comunicacion-y-colaboracion-digital",
      "cd-2-3-creatividad-digital",
      "cd-2-4-pensamiento-algoritmico",
    ]);
  });

  it("resuelve las seis unidades listas de humanidades, en orden de registro", () => {
    expect(
      get_available_units_for_area("humanidades").map((resolved) => resolved.unit.id),
    ).toEqual([
      "hu-4-1-fundamentos-del-pensamiento-filosofico",
      "hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
      "hu-4-3-construccion-de-la-persona-para-la-convivencia",
      "hu-4-4-reflexion-politica-y-participacion-ciudadana",
      "hu-4-5-humanidad-ante-desafios-contemporaneos",
      "hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
    ]);
  });

  it("resuelve las cinco unidades listas de lengua y comunicación, en orden de registro", () => {
    expect(
      get_available_units_for_area("lengua-y-comunicacion").map(
        (resolved) => resolved.unit.id,
      ),
    ).toEqual([
      "lc-6-1-estrategias-de-comprension-lectora",
      "lc-6-2-recursos-del-analisis-literario",
      "lc-6-3-procesos-de-composicion-de-textos",
      "lc-6-4-formas-orales-de-la-comunicacion",
      "lc-6-5-estructura-gramatical-del-ingles",
    ]);
  });

  it("resuelve las siete unidades listas de ciencias naturales, en orden de registro", () => {
    expect(
      get_available_units_for_area(
        "ciencias-naturales-experimentales-y-tecnologia",
      ).map((resolved) => resolved.unit.id),
    ).toEqual([
      "cn-5-1-materia-y-sus-interacciones",
      "cn-5-2-conservacion-de-la-energia-y-sus-interacciones",
      "cn-5-3-ecosistemas-interacciones-energia-y-dinamica",
      "cn-5-4-reacciones-quimicas-y-conservacion-de-la-materia",
      "cn-5-5-energia-en-los-procesos-de-la-vida-diaria",
      "cn-5-6-organismos-estructura-y-procesos",
      "cn-5-7-herencia-y-evolucion-biologica",
    ]);
  });

  it("resuelve las tres unidades listas de conciencia histórica, en orden de registro", () => {
    expect(
      get_available_units_for_area("conciencia-historica").map(
        (resolved) => resolved.unit.id,
      ),
    ).toEqual([
      "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      "ch-3-2-mexico-durante-el-expansionismo-capitalista",
      "ch-3-3-realidad-actual-en-perspectiva-historica",
    ]);
  });

  it("resuelve las tres unidades listas de ciencias sociales, en orden de registro", () => {
    expect(
      get_available_units_for_area("ciencias-sociales").map(
        (resolved) => resolved.unit.id,
      ),
    ).toEqual([
      "cs-7-1-organizacion-economica",
      "cs-7-2-perspectivas-politicas",
      "cs-7-3-problemas-sociologicos",
    ]);
  });

  it("no resuelve un área sin unidades de contenido listas", () => {
    expect(get_available_units_for_area("ciencias-naturales")).toEqual([]);
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

  it("devuelve las treinta preguntas de la unidad de conciencia histórica ch-3-1", () => {
    expect(
      get_unit_questions(
        "conciencia-historica",
        "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
      ),
    ).toHaveLength(30);
  });

  it("devuelve las cincuenta y cinco preguntas de la unidad de conciencia histórica ch-3-2", () => {
    expect(
      get_unit_questions(
        "conciencia-historica",
        "ch-3-2-mexico-durante-el-expansionismo-capitalista",
      ),
    ).toHaveLength(55);
  });

  it("devuelve las treinta preguntas de la unidad de conciencia histórica ch-3-3, que completa el área", () => {
    expect(
      get_unit_questions(
        "conciencia-historica",
        "ch-3-3-realidad-actual-en-perspectiva-historica",
      ),
    ).toHaveLength(30);
  });

  it("devuelve las veinte preguntas de la unidad de humanidades hu-4-1", () => {
    expect(
      get_unit_questions(
        "humanidades",
        "hu-4-1-fundamentos-del-pensamiento-filosofico",
      ),
    ).toHaveLength(20);
  });

  it("devuelve las veinte preguntas de la unidad de humanidades hu-4-2", () => {
    expect(
      get_unit_questions(
        "humanidades",
        "hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
      ),
    ).toHaveLength(20);
  });

  it("devuelve las veinticinco preguntas de la unidad de ciencias naturales cn-5-1", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-1-materia-y-sus-interacciones",
      ),
    ).toHaveLength(25);
  });

  it("devuelve las veinticinco preguntas de la unidad de ciencias naturales cn-5-2", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-2-conservacion-de-la-energia-y-sus-interacciones",
      ),
    ).toHaveLength(25);
  });

  it("devuelve las treinta y cinco preguntas de la unidad de ciencias naturales cn-5-3", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-3-ecosistemas-interacciones-energia-y-dinamica",
      ),
    ).toHaveLength(35);
  });

  it("devuelve las quince preguntas de la unidad de ciencias naturales cn-5-4", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-4-reacciones-quimicas-y-conservacion-de-la-materia",
      ),
    ).toHaveLength(15);
  });

  it("devuelve las veinte preguntas de la unidad de ciencias naturales cn-5-5", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-5-energia-en-los-procesos-de-la-vida-diaria",
      ),
    ).toHaveLength(20);
  });

  it("devuelve las quince preguntas de la unidad de ciencias naturales cn-5-6", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-6-organismos-estructura-y-procesos",
      ),
    ).toHaveLength(15);
  });

  it("devuelve las veinticinco preguntas de la unidad de ciencias naturales cn-5-7", () => {
    expect(
      get_unit_questions(
        "ciencias-naturales-experimentales-y-tecnologia",
        "cn-5-7-herencia-y-evolucion-biologica",
      ),
    ).toHaveLength(25);
  });

  it("devuelve las veinte preguntas de la unidad de lengua y comunicación lc-6-1", () => {
    expect(
      get_unit_questions(
        "lengua-y-comunicacion",
        "lc-6-1-estrategias-de-comprension-lectora",
      ),
    ).toHaveLength(20);
  });

  it("devuelve las treinta preguntas de la unidad de lengua y comunicación lc-6-2", () => {
    expect(
      get_unit_questions(
        "lengua-y-comunicacion",
        "lc-6-2-recursos-del-analisis-literario",
      ),
    ).toHaveLength(30);
  });

  it("devuelve las treinta y cinco preguntas de la unidad de lengua y comunicación lc-6-3", () => {
    expect(
      get_unit_questions(
        "lengua-y-comunicacion",
        "lc-6-3-procesos-de-composicion-de-textos",
      ),
    ).toHaveLength(35);
  });

  it("devuelve las veinte preguntas de la unidad de lengua y comunicación lc-6-4", () => {
    expect(
      get_unit_questions(
        "lengua-y-comunicacion",
        "lc-6-4-formas-orales-de-la-comunicacion",
      ),
    ).toHaveLength(20);
  });

  it("devuelve las cincuenta preguntas de la unidad de lengua y comunicación lc-6-5", () => {
    expect(
      get_unit_questions(
        "lengua-y-comunicacion",
        "lc-6-5-estructura-gramatical-del-ingles",
      ),
    ).toHaveLength(50);
  });

  it("devuelve las cuarenta y cinco preguntas de la unidad de ciencias sociales", () => {
    expect(
      get_unit_questions("ciencias-sociales", "cs-7-1-organizacion-economica"),
    ).toHaveLength(45);
  });

  it("devuelve las cuarenta preguntas de la unidad cs-7-2 de ciencias sociales", () => {
    expect(
      get_unit_questions("ciencias-sociales", "cs-7-2-perspectivas-politicas"),
    ).toHaveLength(40);
  });

  it("devuelve las cuarenta preguntas de la unidad cs-7-3 de ciencias sociales", () => {
    expect(
      get_unit_questions("ciencias-sociales", "cs-7-3-problemas-sociologicos"),
    ).toHaveLength(40);
  });

  it("devuelve undefined para una unidad no registrada", () => {
    expect(
      get_unit_questions("ciencias-naturales", "cualquier-unidad"),
    ).toBeUndefined();
  });
});
