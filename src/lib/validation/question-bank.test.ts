import { readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";
import { describe, expect, it } from "vitest";

import { ciencias_naturales_experimentales_y_tecnologia_questions } from "@content/questions/ciencias-naturales-experimentales-y-tecnologia";
import { ciencias_sociales_questions } from "@content/questions/ciencias-sociales";
import { conciencia_historica_questions } from "@content/questions/conciencia-historica";
import { cultura_digital_questions } from "@content/questions/cultura-digital";
import { humanidades_questions } from "@content/questions/humanidades";
import { lengua_y_comunicacion_questions } from "@content/questions/lengua-y-comunicacion";
import { pensamiento_matematico_questions } from "@content/questions/pensamiento-matematico";
import type { question } from "@content/questions/types";

import {
  find_duplicate_ids,
  find_invalid_options,
  group_questions_by_topic,
} from "./question-bank";

describe("question bank stimulus validation", () => {
  const valid_question: question = {
    id: "q-stimulus",
    topic_id: "topic-stimulus",
    prompt: "¿qué afirma el texto?",
    options: ["opción a", "opción b", "opción c"],
    correct_option_index: 0,
    explanation: "explicación de prueba.",
    common_error: "error común de prueba.",
    source_reference: "referencia de prueba.",
    difficulty: "basic",
    use_cases: ["practice"],
  };

  it("acepta una pregunta sin estímulo separado", () => {
    expect(find_invalid_options(valid_question)).toEqual([]);
  });

  it("rechaza un estímulo explícito vacío", () => {
    expect(find_invalid_options({ ...valid_question, stimulus: "   " })).toContain(
      "q-stimulus tiene un texto base vacío.",
    );
  });
});

const cd_2_1_reserved_ids: Record<string, string[]> = {
  "cd-2-1-1-elementos-de-la-identidad-digital": [
    "cd-id-001",
    "cd-id-002",
    "cd-id-003",
    "cd-id-004",
    "cd-id-005",
  ],
  "cd-2-1-2-tipos-de-licenciamiento-de-software": [
    "cd-ls-001",
    "cd-ls-002",
    "cd-ls-003",
    "cd-ls-004",
    "cd-ls-005",
  ],
  "cd-2-1-3-tipos-de-servicios-digitales": [
    "cd-sd-001",
    "cd-sd-002",
    "cd-sd-003",
    "cd-sd-004",
    "cd-sd-005",
  ],
  "cd-2-1-4-tipos-de-amenazas-de-seguridad-digital": [
    "cd-asd-001",
    "cd-asd-002",
    "cd-asd-003",
    "cd-asd-004",
    "cd-asd-005",
  ],
  "cd-2-1-5-medidas-de-seguridad-digital": [
    "cd-ms-001",
    "cd-ms-002",
    "cd-ms-003",
    "cd-ms-004",
    "cd-ms-005",
  ],
};

const cd_2_1_lesson_ids = [
  "cd-identidad-digital-01",
  "cd-licenciamiento-de-software-01",
  "cd-servicios-digitales-01",
  "cd-amenazas-de-seguridad-digital-01",
  "cd-medidas-de-seguridad-digital-01",
];

const cd_2_1_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "cultura-digital",
  "cd-2-1-ciudadania-digital",
);

async function read_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cd_2_1_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("cultura digital question bank — cd-2-1-ciudadania-digital", () => {
  it("has exactly twenty-five records", () => {
    expect(cultura_digital_questions).toHaveLength(25);
  });

  it("has exactly the five reserved ids for each documented topic, no extra records", () => {
    const grouped = group_questions_by_topic(cultura_digital_questions);

    expect(new Set(grouped.keys())).toEqual(new Set(Object.keys(cd_2_1_reserved_ids)));

    for (const [topic_id, expected_ids] of Object.entries(cd_2_1_reserved_ids)) {
      const actual_ids = (grouped.get(topic_id) ?? []).map((question) => question.id);
      expect(new Set(actual_ids)).toEqual(new Set(expected_ids));
    }
  });

  it("has no structurally invalid question — options, answer, explanation, common error, source", () => {
    const errors = cultura_digital_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático bank", () => {
    expect(
      find_duplicate_ids(cultura_digital_questions, pensamiento_matematico_questions),
    ).toEqual([]);
  });

  it("every question traces to its topic's guide code", () => {
    for (const question of cultura_digital_questions) {
      const code = question.topic_id
        .match(/^cd-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("matches each lesson's reserved question-ids exactly", async () => {
    const grouped = group_questions_by_topic(cultura_digital_questions);

    for (const lesson_id of cd_2_1_lesson_ids) {
      const lesson = await read_lesson_frontmatter(lesson_id);
      const topic_questions = grouped.get(lesson.topic_id) ?? [];

      expect(new Set(topic_questions.map((question) => question.id))).toEqual(
        new Set(lesson.question_ids),
      );

      for (const question of topic_questions) {
        expect(question.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("includes at least one relation or ordering question", () => {
    const has_relation_or_ordering = cultura_digital_questions.some((question) =>
      question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)),
    );

    expect(has_relation_or_ordering).toBe(true);
  });
});

const ch_3_1_reserved_ids: Record<string, string[]> = {
  "ch-conquista-de-pueblos-originarios-01": [
    "ch-cpo-001",
    "ch-cpo-002",
    "ch-cpo-003",
    "ch-cpo-004",
    "ch-cpo-005",
  ],
  "ch-resistencias-de-pueblos-originarios-01": [
    "ch-rpo-001",
    "ch-rpo-002",
    "ch-rpo-003",
    "ch-rpo-004",
    "ch-rpo-005",
  ],
  "ch-impacto-cultural-de-resistencias-originarias-02": [
    "ch-icr-001",
    "ch-icr-002",
    "ch-icr-003",
    "ch-icr-004",
    "ch-icr-005",
  ],
  "ch-grupos-sociales-de-la-nueva-espana-01": [
    "ch-gsn-001",
    "ch-gsn-002",
    "ch-gsn-003",
    "ch-gsn-004",
    "ch-gsn-005",
  ],
  "ch-origen-del-patrimonio-historico-01": [
    "ch-oph-001",
    "ch-oph-002",
    "ch-oph-003",
    "ch-oph-004",
    "ch-oph-005",
  ],
  "ch-preservacion-del-patrimonio-historico-01": [
    "ch-pph-001",
    "ch-pph-002",
    "ch-pph-003",
    "ch-pph-004",
    "ch-pph-005",
  ],
};

const ch_3_1_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "conciencia-historica",
  "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
);

async function read_ch_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(ch_3_1_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("conciencia histórica question bank — ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales", () => {
  it("has exactly thirty records", () => {
    expect(conciencia_historica_questions).toHaveLength(30);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, no extra records", async () => {
    const by_id = new Map(
      conciencia_historica_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(ch_3_1_reserved_ids).flat();

    expect(
      new Set(conciencia_historica_questions.map((question) => question.id)),
    ).toEqual(new Set(all_expected_ids));

    for (const [lesson_id, expected_ids] of Object.entries(ch_3_1_reserved_ids)) {
      const lesson = await read_ch_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("gives topic ch-3-1-2 exactly ten questions, split across its two declaring lessons", () => {
    const grouped = group_questions_by_topic(conciencia_historica_questions);
    const topic_3_1_2 =
      grouped.get("ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios") ?? [];

    const expected_ids = new Set([
      ...ch_3_1_reserved_ids["ch-resistencias-de-pueblos-originarios-01"],
      ...ch_3_1_reserved_ids["ch-impacto-cultural-de-resistencias-originarias-02"],
    ]);

    expect(topic_3_1_2).toHaveLength(10);
    expect(new Set(topic_3_1_2.map((question) => question.id))).toEqual(expected_ids);
  });

  it("has no structurally invalid question — options, answer, explanation, common error, source", () => {
    const errors = conciencia_historica_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático or cultura digital banks", () => {
    expect(
      find_duplicate_ids(
        conciencia_historica_questions,
        cultura_digital_questions,
        pensamiento_matematico_questions,
      ),
    ).toEqual([]);
  });

  it("every question traces to its topic's guide code on page 13", () => {
    for (const question of conciencia_historica_questions) {
      const code = question.topic_id
        .match(/^ch-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 13");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation and one ordering question", () => {
    const relation_or_ordering = conciencia_historica_questions.filter((question) =>
      question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)),
    );
    const has_ordering = relation_or_ordering.some((question) =>
      question.options.every((option) => /^[\d,\s]+$/.test(option)),
    );
    const has_relation = relation_or_ordering.some((question) =>
      question.options.some((option) => /[a-z]/.test(option)),
    );

    expect(has_ordering).toBe(true);
    expect(has_relation).toBe(true);
  });
});

const hu_4_1_reserved_ids: Record<string, string[]> = {
  "hu-filosofia-mito-y-ciencia-01": [
    "hu-fmc-001",
    "hu-fmc-002",
    "hu-fmc-003",
    "hu-fmc-004",
    "hu-fmc-005",
  ],
  "hu-pensamiento-critico-01": [
    "hu-pc-001",
    "hu-pc-002",
    "hu-pc-003",
    "hu-pc-004",
    "hu-pc-005",
  ],
  "hu-pensamiento-existencialista-01": [
    "hu-pe-001",
    "hu-pe-002",
    "hu-pe-003",
    "hu-pe-004",
    "hu-pe-005",
  ],
  "hu-doxa-y-episteme-01": [
    "hu-de-001",
    "hu-de-002",
    "hu-de-003",
    "hu-de-004",
    "hu-de-005",
  ],
};

const hu_4_1_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "humanidades",
  "hu-4-1-fundamentos-del-pensamiento-filosofico",
);

async function read_hu_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(hu_4_1_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("humanidades question bank — hu-4-1-fundamentos-del-pensamiento-filosofico", () => {
  it("has exactly twenty records", () => {
    expect(humanidades_questions).toHaveLength(20);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, no extra records", async () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(hu_4_1_reserved_ids).flat();

    expect(new Set(humanidades_questions.map((question) => question.id))).toEqual(
      new Set(all_expected_ids),
    );

    for (const [lesson_id, expected_ids] of Object.entries(hu_4_1_reserved_ids)) {
      const lesson = await read_hu_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question — options, answer, explanation, common error, source", () => {
    const errors = humanidades_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático, cultura digital or conciencia histórica banks", () => {
    expect(
      find_duplicate_ids(
        humanidades_questions,
        conciencia_historica_questions,
        cultura_digital_questions,
        pensamiento_matematico_questions,
      ),
    ).toEqual([]);
  });

  it("every question traces to its topic's guide code on page 14", () => {
    for (const question of humanidades_questions) {
      const code = question.topic_id
        .match(/^hu-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 14");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(humanidades_questions);

    for (const [, questions] of grouped) {
      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });
});

const cn_5_1_reserved_ids: Record<string, string[]> = {
  "cn-tipos-de-enlaces-01": [
    "cn-enl-001",
    "cn-enl-002",
    "cn-enl-003",
    "cn-enl-004",
    "cn-enl-005",
  ],
  "cn-estados-de-agregacion-01": [
    "cn-eam-001",
    "cn-eam-002",
    "cn-eam-003",
    "cn-eam-004",
    "cn-eam-005",
  ],
  "cn-conservacion-de-la-materia-01": [
    "cn-cm-001",
    "cn-cm-002",
    "cn-cm-003",
    "cn-cm-004",
    "cn-cm-005",
  ],
  "cn-conversion-de-temperatura-01": [
    "cn-ct-001",
    "cn-ct-002",
    "cn-ct-003",
    "cn-ct-004",
    "cn-ct-005",
  ],
  "cn-ley-de-coulomb-01": [
    "cn-lco-001",
    "cn-lco-002",
    "cn-lco-003",
    "cn-lco-004",
    "cn-lco-005",
  ],
};

const cn_5_1_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-naturales-experimentales-y-tecnologia",
  "cn-5-1-materia-y-sus-interacciones",
);

async function read_cn_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cn_5_1_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias naturales question bank — cn-5-1-materia-y-sus-interacciones", () => {
  it("has exactly twenty-five records", () => {
    expect(ciencias_naturales_experimentales_y_tecnologia_questions).toHaveLength(25);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, no extra records", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_1_reserved_ids).flat();

    expect(
      new Set(
        ciencias_naturales_experimentales_y_tecnologia_questions.map(
          (question) => question.id,
        ),
      ),
    ).toEqual(new Set(all_expected_ids));

    for (const [lesson_id, expected_ids] of Object.entries(cn_5_1_reserved_ids)) {
      const lesson = await read_cn_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question — options, answer, explanation, common error, source", () => {
    const errors =
      ciencias_naturales_experimentales_y_tecnologia_questions.flatMap(
        find_invalid_options,
      );
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático, cultura digital, conciencia histórica or humanidades banks", () => {
    expect(
      find_duplicate_ids(
        ciencias_naturales_experimentales_y_tecnologia_questions,
        humanidades_questions,
        conciencia_historica_questions,
        cultura_digital_questions,
        pensamiento_matematico_questions,
      ),
    ).toEqual([]);
  });

  it("every question traces to its topic's guide code on page 15", () => {
    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      const code = question.topic_id
        .match(/^cn-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 15");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation and one ordering question", () => {
    const relation_or_ordering =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)),
      );
    const has_ordering = relation_or_ordering.some((question) =>
      question.options.every((option) => /^[\d,\s]+$/.test(option)),
    );
    const has_relation = relation_or_ordering.some((question) =>
      question.options.some((option) => /[a-z]/.test(option)),
    );

    expect(has_ordering).toBe(true);
    expect(has_relation).toBe(true);
  });

  it("gives every calculation question a determinate, unit-labeled correct answer", () => {
    const calculation_ids = new Set([
      "cn-ct-001",
      "cn-ct-002",
      "cn-ct-003",
      "cn-ct-004",
      "cn-lco-001",
      "cn-lco-002",
      "cn-lco-003",
      "cn-lco-005",
    ]);

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!calculation_ids.has(question.id)) continue;

      expect(new Set(question.options).size).toBe(question.options.length);
      expect(question.explanation).toMatch(/[0-9]/);
    }
  });
});

const lc_6_1_reserved_ids: Record<string, string[]> = {
  "lc-titulo-del-texto-expositivo-01": [
    "lc-tte-001",
    "lc-tte-002",
    "lc-tte-003",
    "lc-tte-004",
    "lc-tte-005",
  ],
  "lc-relaciones-logicas-entre-oraciones-01": [
    "lc-rlo-001",
    "lc-rlo-002",
    "lc-rlo-003",
    "lc-rlo-004",
    "lc-rlo-005",
  ],
  "lc-jerarquia-en-mapas-conceptuales-01": [
    "lc-jmc-001",
    "lc-jmc-002",
    "lc-jmc-003",
    "lc-jmc-004",
    "lc-jmc-005",
  ],
  "lc-formas-textuales-de-comunicacion-01": [
    "lc-ftc-001",
    "lc-ftc-002",
    "lc-ftc-003",
    "lc-ftc-004",
    "lc-ftc-005",
  ],
};

const lc_6_1_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "lengua-y-comunicacion",
  "lc-6-1-estrategias-de-comprension-lectora",
);

async function read_lc_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(lc_6_1_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("lengua y comunicación question bank — lc-6-1-estrategias-de-comprension-lectora", () => {
  it("has exactly twenty records", () => {
    expect(lengua_y_comunicacion_questions).toHaveLength(20);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, no extra records", async () => {
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(lc_6_1_reserved_ids).flat();

    expect(
      new Set(lengua_y_comunicacion_questions.map((question) => question.id)),
    ).toEqual(new Set(all_expected_ids));

    for (const [lesson_id, expected_ids] of Object.entries(lc_6_1_reserved_ids)) {
      const lesson = await read_lc_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question — options, answer, explanation, common error, source", () => {
    const errors = lengua_y_comunicacion_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático, cultura digital, conciencia histórica, humanidades or ciencias naturales banks", () => {
    expect(
      find_duplicate_ids(
        lengua_y_comunicacion_questions,
        ciencias_naturales_experimentales_y_tecnologia_questions,
        humanidades_questions,
        conciencia_historica_questions,
        cultura_digital_questions,
        pensamiento_matematico_questions,
      ),
    ).toEqual([]);
  });

  it("every question traces to its topic's guide code on page 17", () => {
    for (const question of lengua_y_comunicacion_questions) {
      const code = question.topic_id
        .match(/^lc-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 17");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes a real general-to-particular ordering question in the concept-hierarchy topic", () => {
    const grouped = group_questions_by_topic(lengua_y_comunicacion_questions);
    const jmc_questions =
      grouped.get("lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales") ?? [];

    const has_ordering = jmc_questions.some((question) =>
      question.options.every((option) => /^[\d,\s]+$/.test(option)),
    );

    expect(has_ordering).toBe(true);
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(lengua_y_comunicacion_questions);

    for (const [, questions] of grouped) {
      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });
});

const cs_7_1_reserved_ids: Record<string, string[]> = {
  "cs-necesidades-materiales-01": [
    "cs-nmv-001",
    "cs-nmv-002",
    "cs-nmv-003",
    "cs-nmv-004",
    "cs-nmv-005",
  ],
  "cs-factores-de-produccion-01": [
    "cs-fpp-001",
    "cs-fpp-002",
    "cs-fpp-003",
    "cs-fpp-004",
    "cs-fpp-005",
  ],
  "cs-sectores-productivos-01": [
    "cs-tsp-001",
    "cs-tsp-002",
    "cs-tsp-003",
    "cs-tsp-004",
    "cs-tsp-005",
  ],
  "cs-distribucion-de-la-riqueza-01": [
    "cs-mdr-001",
    "cs-mdr-002",
    "cs-mdr-003",
    "cs-mdr-004",
    "cs-mdr-005",
  ],
  "cs-empleo-formal-e-informal-01": [
    "cs-efi-001",
    "cs-efi-002",
    "cs-efi-003",
    "cs-efi-004",
    "cs-efi-005",
  ],
  "cs-redistribucion-estatal-de-la-riqueza-01": [
    "cs-mer-001",
    "cs-mer-002",
    "cs-mer-003",
    "cs-mer-004",
    "cs-mer-005",
  ],
  "cs-estado-de-bienestar-01": [
    "cs-ceb-001",
    "cs-ceb-002",
    "cs-ceb-003",
    "cs-ceb-004",
    "cs-ceb-005",
  ],
  "cs-modelo-economico-neoliberal-01": [
    "cs-cmen-001",
    "cs-cmen-002",
    "cs-cmen-003",
    "cs-cmen-004",
    "cs-cmen-005",
  ],
  "cs-degradacion-ambiental-y-produccion-01": [
    "cs-dap-001",
    "cs-dap-002",
    "cs-dap-003",
    "cs-dap-004",
    "cs-dap-005",
  ],
};

const cs_7_1_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-sociales",
  "cs-7-1-organizacion-economica",
);

async function read_cs_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cs_7_1_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias sociales question bank — cs-7-1-organizacion-economica", () => {
  it("has exactly forty-five records", () => {
    expect(ciencias_sociales_questions).toHaveLength(45);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, no extra records", async () => {
    const by_id = new Map(
      ciencias_sociales_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(cs_7_1_reserved_ids).flat();

    expect(new Set(ciencias_sociales_questions.map((question) => question.id))).toEqual(
      new Set(all_expected_ids),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cs_7_1_reserved_ids)) {
      const lesson = await read_cs_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question — options, answer, explanation, common error, source", () => {
    const errors = ciencias_sociales_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático, cultura digital, conciencia histórica, humanidades, ciencias naturales or lengua y comunicación banks", () => {
    expect(
      find_duplicate_ids(
        ciencias_sociales_questions,
        lengua_y_comunicacion_questions,
        ciencias_naturales_experimentales_y_tecnologia_questions,
        humanidades_questions,
        conciencia_historica_questions,
        cultura_digital_questions,
        pensamiento_matematico_questions,
      ),
    ).toEqual([]);
  });

  it("every question traces to its topic's guide code on page 19", () => {
    for (const question of ciencias_sociales_questions) {
      const code = question.topic_id
        .match(/^cs-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 19");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes a genuine relation question distinguishing vital from non-vital needs", () => {
    const grouped = group_questions_by_topic(ciencias_sociales_questions);
    const nmv_questions =
      grouped.get("cs-7-1-1-necesidades-materiales-vitales-y-no-vitales") ?? [];

    const has_relation = nmv_questions.some(
      (question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
        question.options.some((option) => /[a-z]/.test(option)),
    );

    expect(has_relation).toBe(true);
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(ciencias_sociales_questions);

    for (const [, questions] of grouped) {
      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });
});
