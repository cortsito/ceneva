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
  it("has exactly twenty-five records for its own five topics", () => {
    const cd_2_1_ids = new Set(Object.values(cd_2_1_reserved_ids).flat());
    const cd_2_1_questions = cultura_digital_questions.filter((question) =>
      cd_2_1_ids.has(question.id),
    );

    expect(cd_2_1_questions).toHaveLength(25);
  });

  it("has exactly the five reserved ids for each documented topic, no extra records", () => {
    const cd_2_1_topic_ids = new Set(Object.keys(cd_2_1_reserved_ids));
    const cd_2_1_questions = cultura_digital_questions.filter((question) =>
      cd_2_1_topic_ids.has(question.topic_id),
    );
    const grouped = group_questions_by_topic(cd_2_1_questions);

    expect(new Set(grouped.keys())).toEqual(cd_2_1_topic_ids);

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

const cd_2_2_reserved_ids: Record<string, string[]> = {
  "cd-ciberespacio-01": [
    "cd-ce-001",
    "cd-ce-002",
    "cd-ce-003",
    "cd-ce-004",
    "cd-ce-005",
  ],
  "cd-ticcad-01": ["cd-tc-001", "cd-tc-002", "cd-tc-003", "cd-tc-004", "cd-tc-005"],
  "cd-funciones-de-herramientas-digitales-01": [
    "cd-fh-001",
    "cd-fh-002",
    "cd-fh-003",
    "cd-fh-004",
    "cd-fh-005",
  ],
  "cd-uso-de-herramientas-digitales-02": [
    "cd-uh-001",
    "cd-uh-002",
    "cd-uh-003",
    "cd-uh-004",
    "cd-uh-005",
  ],
  "cd-metodos-de-investigacion-digital-01": [
    "cd-mi-001",
    "cd-mi-002",
    "cd-mi-003",
    "cd-mi-004",
    "cd-mi-005",
  ],
};

const cd_2_2_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "cultura-digital",
  "cd-2-2-comunicacion-y-colaboracion-digital",
);

async function read_cd_2_2_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cd_2_2_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("cultura digital question bank — cd-2-2-comunicacion-y-colaboracion-digital", () => {
  it("has exactly twenty-five records for its own five lessons", () => {
    const by_id = new Map(
      cultura_digital_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(cd_2_2_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(25);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      cultura_digital_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cd_2_2_reserved_ids)) {
      const lesson = await read_cd_2_2_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("gives topic cd-2-2-3 exactly ten questions, split across its two declaring lessons", () => {
    const grouped = group_questions_by_topic(cultura_digital_questions);
    const topic_2_2_3 =
      grouped.get("cd-2-2-3-funcion-y-uso-de-herramientas-digitales") ?? [];

    const expected_ids = new Set([
      ...cd_2_2_reserved_ids["cd-funciones-de-herramientas-digitales-01"],
      ...cd_2_2_reserved_ids["cd-uso-de-herramientas-digitales-02"],
    ]);

    expect(topic_2_2_3).toHaveLength(10);
    expect(new Set(topic_2_2_3.map((question) => question.id))).toEqual(expected_ids);
  });

  it("has no structurally invalid question in the full cultura digital bank", () => {
    const errors = cultura_digital_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("shares no id with the pensamiento matemático bank", () => {
    expect(
      find_duplicate_ids(cultura_digital_questions, pensamiento_matematico_questions),
    ).toEqual([]);
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(
      cultura_digital_questions.filter((question) =>
        Object.values(cd_2_2_reserved_ids).flat().includes(question.id),
      ),
    );

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
  lesson_directory: string,
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("conciencia histórica question bank — ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales", () => {
  it("has exactly thirty records for its own six lessons", () => {
    const by_id = new Map(
      conciencia_historica_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(ch_3_1_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(30);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      conciencia_historica_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(ch_3_1_reserved_ids)) {
      const lesson = await read_ch_lesson_frontmatter(
        ch_3_1_lesson_directory,
        lesson_id,
      );

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

  it("has no structurally invalid question in the full conciencia histórica bank", () => {
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
    const ch_3_1_ids = new Set(Object.values(ch_3_1_reserved_ids).flat());

    for (const question of conciencia_historica_questions.filter((question) =>
      ch_3_1_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^ch-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 13");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation and one ordering question", () => {
    const ch_3_1_ids = new Set(Object.values(ch_3_1_reserved_ids).flat());
    const own_questions = conciencia_historica_questions.filter((question) =>
      ch_3_1_ids.has(question.id),
    );
    const relation_or_ordering = own_questions.filter((question) =>
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

const ch_3_2_reserved_ids: Record<string, string[]> = {
  "ch-causas-de-la-independencia-01": [
    "ch-cdi-001",
    "ch-cdi-002",
    "ch-cdi-003",
    "ch-cdi-004",
    "ch-cdi-005",
  ],
  "ch-proyectos-de-emancipacion-01": [
    "ch-pde-001",
    "ch-pde-002",
    "ch-pde-003",
    "ch-pde-004",
    "ch-pde-005",
  ],
  "ch-liberalismo-mexicano-01": [
    "ch-lbm-001",
    "ch-lbm-002",
    "ch-lbm-003",
    "ch-lbm-004",
    "ch-lbm-005",
  ],
  "ch-instituciones-y-leyes-del-liberalismo-02": [
    "ch-ilb-001",
    "ch-ilb-002",
    "ch-ilb-003",
    "ch-ilb-004",
    "ch-ilb-005",
  ],
  "ch-intervenciones-extranjeras-del-siglo-xix-01": [
    "ch-iex-001",
    "ch-iex-002",
    "ch-iex-003",
    "ch-iex-004",
    "ch-iex-005",
  ],
  "ch-movimientos-sociales-del-siglo-xix-01": [
    "ch-msx-001",
    "ch-msx-002",
    "ch-msx-003",
    "ch-msx-004",
    "ch-msx-005",
  ],
  "ch-enajenacion-de-bienes-comunales-01": [
    "ch-ebc-001",
    "ch-ebc-002",
    "ch-ebc-003",
    "ch-ebc-004",
    "ch-ebc-005",
  ],
  "ch-caracteristicas-del-porfiriato-01": [
    "ch-cdp-001",
    "ch-cdp-002",
    "ch-cdp-003",
    "ch-cdp-004",
    "ch-cdp-005",
  ],
  "ch-oposicion-al-porfiriato-01": [
    "ch-oap-001",
    "ch-oap-002",
    "ch-oap-003",
    "ch-oap-004",
    "ch-oap-005",
  ],
  "ch-facciones-de-la-revolucion-mexicana-01": [
    "ch-frm-001",
    "ch-frm-002",
    "ch-frm-003",
    "ch-frm-004",
    "ch-frm-005",
  ],
  "ch-derechos-originados-en-la-revolucion-01": [
    "ch-dor-001",
    "ch-dor-002",
    "ch-dor-003",
    "ch-dor-004",
    "ch-dor-005",
  ],
};

const ch_3_2_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "conciencia-historica",
  "ch-3-2-mexico-durante-el-expansionismo-capitalista",
);

describe("conciencia histórica question bank — ch-3-2-mexico-durante-el-expansionismo-capitalista (calibración del área)", () => {
  it("has exactly fifty-five records for its own eleven lessons", () => {
    const by_id = new Map(
      conciencia_historica_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(ch_3_2_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(55);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      conciencia_historica_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(ch_3_2_reserved_ids)) {
      const lesson = await read_ch_lesson_frontmatter(
        ch_3_2_lesson_directory,
        lesson_id,
      );

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("gives topic ch-3-2-3 exactly ten questions, split across its two declaring lessons", () => {
    const grouped = group_questions_by_topic(conciencia_historica_questions);
    const topic_3_2_3 =
      grouped.get("ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano") ?? [];

    const expected_ids = new Set([
      ...ch_3_2_reserved_ids["ch-liberalismo-mexicano-01"],
      ...ch_3_2_reserved_ids["ch-instituciones-y-leyes-del-liberalismo-02"],
    ]);

    expect(topic_3_2_3).toHaveLength(10);
    expect(new Set(topic_3_2_3.map((question) => question.id))).toEqual(expected_ids);
  });

  it("has no structurally invalid question in the full conciencia histórica bank", () => {
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

  it("every question traces to its topic's guide code on page 13 or 14", () => {
    const ch_3_2_ids = new Set(Object.values(ch_3_2_reserved_ids).flat());

    for (const question of conciencia_historica_questions.filter((question) =>
      ch_3_2_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^ch-(\d-\d-\d\d?)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toMatch(/página 1[34]/);
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation and one ordering question among its own records", () => {
    const ch_3_2_ids = new Set(Object.values(ch_3_2_reserved_ids).flat());
    const own_questions = conciencia_historica_questions.filter((question) =>
      ch_3_2_ids.has(question.id),
    );
    const relation_or_ordering = own_questions.filter((question) =>
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

  it("attributes the guide's page-32 zapatista sample calibration to ch-frm-003, within the convencionista option", () => {
    const calibrated = conciencia_historica_questions.find(
      (question) => question.id === "ch-frm-003",
    );

    expect(calibrated?.topic_id).toBe("ch-3-2-9-facciones-de-la-revolucion-mexicana");
    expect(calibrated?.options[calibrated.correct_option_index]).toBe("convencionista");
    expect(calibrated?.source_reference).toContain(
      "calibración de profundidad: página 32",
    );
  });

  it("does not introduce current or contested political facts in the porfiriato and opposition lessons", () => {
    const ch_3_2_ids = new Set(Object.values(ch_3_2_reserved_ids).flat());
    const own_questions = conciencia_historica_questions.filter((question) =>
      ch_3_2_ids.has(question.id),
    );
    const contested_terms = /\b(202\d|actualidad|actual)\b/i;

    for (const question of own_questions) {
      expect(question.prompt).not.toMatch(contested_terms);
      expect(question.explanation).not.toMatch(contested_terms);
    }
  });
});

const ch_3_3_reserved_ids: Record<string, string[]> = {
  "ch-consolidacion-del-presidencialismo-01": [
    "ch-cpr-001",
    "ch-cpr-002",
    "ch-cpr-003",
    "ch-cpr-004",
    "ch-cpr-005",
  ],
  "ch-mexico-en-eventos-internacionales-01": [
    "ch-mei-001",
    "ch-mei-002",
    "ch-mei-003",
    "ch-mei-004",
    "ch-mei-005",
  ],
  "ch-causas-del-neoliberalismo-01": [
    "ch-cnl-001",
    "ch-cnl-002",
    "ch-cnl-003",
    "ch-cnl-004",
    "ch-cnl-005",
  ],
  "ch-globalizacion-en-la-vida-cotidiana-01": [
    "ch-glo-001",
    "ch-glo-002",
    "ch-glo-003",
    "ch-glo-004",
    "ch-glo-005",
  ],
  "ch-causas-de-la-alternancia-politica-01": [
    "ch-cap-001",
    "ch-cap-002",
    "ch-cap-003",
    "ch-cap-004",
    "ch-cap-005",
  ],
  "ch-impacto-social-de-los-medios-01": [
    "ch-ism-001",
    "ch-ism-002",
    "ch-ism-003",
    "ch-ism-004",
    "ch-ism-005",
  ],
};

const ch_3_3_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "conciencia-historica",
  "ch-3-3-realidad-actual-en-perspectiva-historica",
);

describe("conciencia histórica question bank — ch-3-3-realidad-actual-en-perspectiva-historica (completa el área)", () => {
  it("has exactly thirty records for its own six lessons", () => {
    const by_id = new Map(
      conciencia_historica_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(ch_3_3_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(30);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      conciencia_historica_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(ch_3_3_reserved_ids)) {
      const lesson = await read_ch_lesson_frontmatter(
        ch_3_3_lesson_directory,
        lesson_id,
      );

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full conciencia histórica bank", () => {
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

  it("every question traces to its topic's guide code on page 14", () => {
    const ch_3_3_ids = new Set(Object.values(ch_3_3_reserved_ids).flat());

    for (const question of conciencia_historica_questions.filter((question) =>
      ch_3_3_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^ch-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 14");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation and one ordering question among its own records", () => {
    const ch_3_3_ids = new Set(Object.values(ch_3_3_reserved_ids).flat());
    const own_questions = conciencia_historica_questions.filter((question) =>
      ch_3_3_ids.has(question.id),
    );
    const relation_or_ordering = own_questions.filter((question) =>
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

  it("does not introduce current or contested political facts in the neoliberalismo and alternancia lessons", () => {
    const ch_3_3_ids = new Set(Object.values(ch_3_3_reserved_ids).flat());
    const own_questions = conciencia_historica_questions.filter((question) =>
      ch_3_3_ids.has(question.id),
    );
    const contested_terms = /\b(202\d|actualidad)\b/i;

    for (const question of own_questions) {
      expect(question.prompt).not.toMatch(contested_terms);
      expect(question.explanation).not.toMatch(contested_terms);
    }
  });

  it("confirms none of conciencia histórica's three official sample reactivos apply to this closing unit, since all three were already used", () => {
    const ch_3_1_calibrated = conciencia_historica_questions.find(
      (question) => question.id === "ch-oph-001",
    );
    const ch_3_2_calibrated_ids = ["ch-pde-001", "ch-frm-003"];

    expect(ch_3_1_calibrated?.source_reference).toContain("calibración de profundidad");
    for (const id of ch_3_2_calibrated_ids) {
      const question = conciencia_historica_questions.find((q) => q.id === id);
      expect(question?.source_reference).toContain("calibración de profundidad");
    }
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
  it("has exactly twenty records for its own four lessons", () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(hu_4_1_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(20);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, no extra records", async () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
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
    const hu_4_1_ids = new Set(Object.values(hu_4_1_reserved_ids).flat());

    for (const question of humanidades_questions.filter((question) =>
      hu_4_1_ids.has(question.id),
    )) {
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

const hu_4_2_reserved_ids: Record<string, string[]> = {
  "hu-funciones-de-la-lengua-01": [
    "hu-fdl-001",
    "hu-fdl-002",
    "hu-fdl-003",
    "hu-fdl-004",
    "hu-fdl-005",
  ],
  "hu-premisas-y-conclusion-01": [
    "hu-pyc-001",
    "hu-pyc-002",
    "hu-pyc-003",
    "hu-pyc-004",
    "hu-pyc-005",
  ],
  "hu-tipos-de-argumentos-01": [
    "hu-tda-001",
    "hu-tda-002",
    "hu-tda-003",
    "hu-tda-004",
    "hu-tda-005",
  ],
  "hu-discursos-argumentativos-01": [
    "hu-dar-001",
    "hu-dar-002",
    "hu-dar-003",
    "hu-dar-004",
    "hu-dar-005",
  ],
};

const hu_4_2_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "humanidades",
  "hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
);

async function read_hu_4_2_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(hu_4_2_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("humanidades question bank — hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion", () => {
  it("has exactly twenty records for its own four lessons", () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(hu_4_2_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(20);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(hu_4_2_reserved_ids)) {
      const lesson = await read_hu_4_2_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full humanidades bank", () => {
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

  it("every question traces to its topic's guide code on page 15", () => {
    const hu_4_2_ids = new Set(Object.values(hu_4_2_reserved_ids).flat());

    for (const question of humanidades_questions.filter((question) =>
      hu_4_2_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^hu-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 15");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(
      humanidades_questions.filter((question) =>
        Object.values(hu_4_2_reserved_ids).flat().includes(question.id),
      ),
    );

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

const hu_4_3_reserved_ids: Record<string, string[]> = {
  "hu-teorias-eticas-01": [
    "hu-pte-001",
    "hu-pte-002",
    "hu-pte-003",
    "hu-pte-004",
    "hu-pte-005",
  ],
  "hu-valores-para-la-convivencia-01": [
    "hu-vpc-001",
    "hu-vpc-002",
    "hu-vpc-003",
    "hu-vpc-004",
    "hu-vpc-005",
  ],
  "hu-tipos-de-normas-01": [
    "hu-tdn-001",
    "hu-tdn-002",
    "hu-tdn-003",
    "hu-tdn-004",
    "hu-tdn-005",
  ],
};

const hu_4_3_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "humanidades",
  "hu-4-3-construccion-de-la-persona-para-la-convivencia",
);

async function read_hu_4_3_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(hu_4_3_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("humanidades question bank — hu-4-3-construccion-de-la-persona-para-la-convivencia", () => {
  it("has exactly fifteen records for its own three lessons", () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(hu_4_3_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(15);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(hu_4_3_reserved_ids)) {
      const lesson = await read_hu_4_3_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full humanidades bank", () => {
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

  it("every question traces to its topic's guide code on page 15", () => {
    const hu_4_3_ids = new Set(Object.values(hu_4_3_reserved_ids).flat());

    for (const question of humanidades_questions.filter((question) =>
      hu_4_3_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^hu-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 15");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(
      humanidades_questions.filter((question) =>
        Object.values(hu_4_3_reserved_ids).flat().includes(question.id),
      ),
    );

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

const hu_4_4_reserved_ids: Record<string, string[]> = {
  "hu-autonomia-y-heteronomia-01": [
    "hu-ayh-001",
    "hu-ayh-002",
    "hu-ayh-003",
    "hu-ayh-004",
    "hu-ayh-005",
  ],
  "hu-discurso-politico-01": [
    "hu-dp-001",
    "hu-dp-002",
    "hu-dp-003",
    "hu-dp-004",
    "hu-dp-005",
  ],
};

const hu_4_4_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "humanidades",
  "hu-4-4-reflexion-politica-y-participacion-ciudadana",
);

async function read_hu_4_4_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(hu_4_4_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("humanidades question bank — hu-4-4-reflexion-politica-y-participacion-ciudadana", () => {
  it("has exactly ten records for its own two lessons", () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(hu_4_4_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(10);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(hu_4_4_reserved_ids)) {
      const lesson = await read_hu_4_4_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full humanidades bank", () => {
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

  it("every question traces to its topic's guide code on page 15", () => {
    const hu_4_4_ids = new Set(Object.values(hu_4_4_reserved_ids).flat());

    for (const question of humanidades_questions.filter((question) =>
      hu_4_4_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^hu-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 15");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(
      humanidades_questions.filter((question) =>
        Object.values(hu_4_4_reserved_ids).flat().includes(question.id),
      ),
    );

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

const hu_4_5_reserved_ids: Record<string, string[]> = {
  "hu-principios-de-bioetica-01": [
    "hu-pb-001",
    "hu-pb-002",
    "hu-pb-003",
    "hu-pb-004",
    "hu-pb-005",
  ],
  "hu-etica-y-sustentabilidad-01": [
    "hu-es-001",
    "hu-es-002",
    "hu-es-003",
    "hu-es-004",
    "hu-es-005",
  ],
  "hu-perspectiva-de-genero-01": [
    "hu-pg-001",
    "hu-pg-002",
    "hu-pg-003",
    "hu-pg-004",
    "hu-pg-005",
  ],
  "hu-reconocimiento-de-la-alteridad-01": [
    "hu-ra-001",
    "hu-ra-002",
    "hu-ra-003",
    "hu-ra-004",
    "hu-ra-005",
  ],
  "hu-humanos-y-otros-seres-vivos-01": [
    "hu-hosv-001",
    "hu-hosv-002",
    "hu-hosv-003",
    "hu-hosv-004",
    "hu-hosv-005",
  ],
};

const hu_4_5_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "humanidades",
  "hu-4-5-humanidad-ante-desafios-contemporaneos",
);

async function read_hu_4_5_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(hu_4_5_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("humanidades question bank — hu-4-5-humanidad-ante-desafios-contemporaneos", () => {
  it("has exactly twenty-five records for its own five lessons", () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(hu_4_5_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(25);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(hu_4_5_reserved_ids)) {
      const lesson = await read_hu_4_5_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full humanidades bank", () => {
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

  it("every question traces to its topic's guide code on page 15", () => {
    const hu_4_5_ids = new Set(Object.values(hu_4_5_reserved_ids).flat());

    for (const question of humanidades_questions.filter((question) =>
      hu_4_5_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^hu-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 15");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(
      humanidades_questions.filter((question) =>
        Object.values(hu_4_5_reserved_ids).flat().includes(question.id),
      ),
    );

    for (const [, questions] of grouped) {
      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });

  it("has its opening diagnostic and simulator question's correct answer away from index 0, varied across lessons", () => {
    const opening_ids = [
      "hu-pb-001",
      "hu-es-001",
      "hu-pg-001",
      "hu-ra-001",
      "hu-hosv-001",
    ];
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );

    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });
});

const hu_4_6_reserved_ids: Record<string, string[]> = {
  "hu-categorias-esteticas-01": [
    "hu-ce-001",
    "hu-ce-002",
    "hu-ce-003",
    "hu-ce-004",
    "hu-ce-005",
  ],
  "hu-hermeneutica-01": [
    "hu-he-001",
    "hu-he-002",
    "hu-he-003",
    "hu-he-004",
    "hu-he-005",
  ],
};

const hu_4_6_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "humanidades",
  "hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
);

async function read_hu_4_6_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(hu_4_6_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("humanidades question bank — hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad", () => {
  it("has exactly ten records for its own two lessons", () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(hu_4_6_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(10);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(hu_4_6_reserved_ids)) {
      const lesson = await read_hu_4_6_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full humanidades bank", () => {
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

  it("every question traces to its topic's guide code on page 15", () => {
    const hu_4_6_ids = new Set(Object.values(hu_4_6_reserved_ids).flat());

    for (const question of humanidades_questions.filter((question) =>
      hu_4_6_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^hu-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 15");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question per lesson", () => {
    const grouped = group_questions_by_topic(
      humanidades_questions.filter((question) =>
        Object.values(hu_4_6_reserved_ids).flat().includes(question.id),
      ),
    );

    for (const [, questions] of grouped) {
      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });

  it("has its opening diagnostic and simulator question's correct answer away from index 0, varied across lessons", () => {
    const opening_ids = ["hu-ce-001", "hu-he-001"];
    const by_id = new Map(
      humanidades_questions.map((question) => [question.id, question]),
    );

    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
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
  it("has exactly twenty-five records for its own five lessons", () => {
    const cn_5_1_ids = new Set(Object.values(cn_5_1_reserved_ids).flat());
    const cn_5_1_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_1_ids.has(question.id),
      );

    expect(cn_5_1_questions).toHaveLength(25);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_1_reserved_ids).flat();

    expect(
      new Set(
        ciencias_naturales_experimentales_y_tecnologia_questions
          .filter((question) => question.topic_id.startsWith("cn-5-1-"))
          .map((question) => question.id),
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
    const cn_5_1_ids = new Set(Object.values(cn_5_1_reserved_ids).flat());

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!cn_5_1_ids.has(question.id)) continue;

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

const cn_5_2_reserved_ids: Record<string, string[]> = {
  "cn-luz-visible-01": [
    "cn-lv-001",
    "cn-lv-002",
    "cn-lv-003",
    "cn-lv-004",
    "cn-lv-005",
  ],
  "cn-calor-especifico-01": [
    "cn-ce-001",
    "cn-ce-002",
    "cn-ce-003",
    "cn-ce-004",
    "cn-ce-005",
  ],
  "cn-tipos-de-energia-01": [
    "cn-te-001",
    "cn-te-002",
    "cn-te-003",
    "cn-te-004",
    "cn-te-005",
  ],
  "cn-energia-cinetica-y-potencial-01": [
    "cn-ecp-001",
    "cn-ecp-002",
    "cn-ecp-003",
    "cn-ecp-004",
    "cn-ecp-005",
  ],
  "cn-leyes-de-la-termodinamica-01": [
    "cn-lt-001",
    "cn-lt-002",
    "cn-lt-003",
    "cn-lt-004",
    "cn-lt-005",
  ],
};

const cn_5_2_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-naturales-experimentales-y-tecnologia",
  "cn-5-2-conservacion-de-la-energia-y-sus-interacciones",
);

async function read_cn_5_2_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cn_5_2_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias naturales question bank — cn-5-2-conservacion-de-la-energia-y-sus-interacciones (calibración del área)", () => {
  it("has exactly twenty-five records for its own five lessons", () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_2_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(25);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cn_5_2_reserved_ids)) {
      const lesson = await read_cn_5_2_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias naturales bank", () => {
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

  it("every question traces to its topic's guide code on page 16", () => {
    const cn_5_2_ids = new Set(Object.values(cn_5_2_reserved_ids).flat());

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!cn_5_2_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^cn-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 16");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("gives every calculation question a determinate, unit-labeled correct answer", () => {
    const calculation_ids = new Set([
      "cn-ce-001",
      "cn-ce-002",
      "cn-ce-003",
      "cn-ce-004",
      "cn-ecp-001",
      "cn-ecp-002",
      "cn-ecp-003",
    ]);

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!calculation_ids.has(question.id)) continue;

      expect(new Set(question.options).size).toBe(question.options.length);
      expect(question.explanation).toMatch(/[0-9]/);
    }
  });

  it("calibrates the ley cero reactivo against the guide's page 35 sample, with an original scenario", () => {
    const ley_cero = ciencias_naturales_experimentales_y_tecnologia_questions.find(
      (question) => question.id === "cn-lt-001",
    );

    expect(ley_cero?.source_reference).toContain(
      "calibración de profundidad: página 35",
    );
    expect(ley_cero?.options[ley_cero.correct_option_index]).toBe("la ley cero");
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = [
      "cn-lv-001",
      "cn-ce-001",
      "cn-te-001",
      "cn-ecp-001",
      "cn-lt-001",
    ];
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });
});

const cn_5_3_reserved_ids: Record<string, string[]> = {
  "cn-fotosintesis-01": [
    "cn-fts-001",
    "cn-fts-002",
    "cn-fts-003",
    "cn-fts-004",
    "cn-fts-005",
  ],
  "cn-biomas-01": [
    "cn-bio-001",
    "cn-bio-002",
    "cn-bio-003",
    "cn-bio-004",
    "cn-bio-005",
  ],
  "cn-redes-troficas-01": [
    "cn-rtr-001",
    "cn-rtr-002",
    "cn-rtr-003",
    "cn-rtr-004",
    "cn-rtr-005",
  ],
  "cn-ciclos-biogeoquimicos-01": [
    "cn-cbg-001",
    "cn-cbg-002",
    "cn-cbg-003",
    "cn-cbg-004",
    "cn-cbg-005",
  ],
  "cn-productividad-en-ecosistemas-01": [
    "cn-pec-001",
    "cn-pec-002",
    "cn-pec-003",
    "cn-pec-004",
    "cn-pec-005",
  ],
  "cn-servicios-ambientales-01": [
    "cn-sam-001",
    "cn-sam-002",
    "cn-sam-003",
    "cn-sam-004",
    "cn-sam-005",
  ],
  "cn-desequilibrio-ecologico-01": [
    "cn-deq-001",
    "cn-deq-002",
    "cn-deq-003",
    "cn-deq-004",
    "cn-deq-005",
  ],
};

const cn_5_3_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-naturales-experimentales-y-tecnologia",
  "cn-5-3-ecosistemas-interacciones-energia-y-dinamica",
);

async function read_cn_5_3_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cn_5_3_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias naturales question bank — cn-5-3-ecosistemas-interacciones-energia-y-dinamica", () => {
  it("has exactly thirty-five records for its own seven lessons", () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_3_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(35);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cn_5_3_reserved_ids)) {
      const lesson = await read_cn_5_3_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias naturales bank", () => {
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

  it("every question traces to its topic's guide code on page 16", () => {
    const cn_5_3_ids = new Set(Object.values(cn_5_3_reserved_ids).flat());

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!cn_5_3_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^cn-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 16");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation and one ordering question", () => {
    const cn_5_3_ids = new Set(Object.values(cn_5_3_reserved_ids).flat());
    const cn_5_3_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_3_ids.has(question.id),
      );
    const relation_or_ordering = cn_5_3_questions.filter((question) =>
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
    const calculation_ids = new Set(["cn-pec-001", "cn-pec-003"]);

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!calculation_ids.has(question.id)) continue;

      expect(new Set(question.options).size).toBe(question.options.length);
      expect(question.explanation).toMatch(/[0-9]/);
    }
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = [
      "cn-fts-001",
      "cn-bio-001",
      "cn-rtr-001",
      "cn-cbg-001",
      "cn-pec-001",
      "cn-sam-001",
      "cn-deq-001",
    ];
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });
});

const cn_5_4_reserved_ids: Record<string, string[]> = {
  "cn-masa-molar-01": ["cn-mm-001", "cn-mm-002", "cn-mm-003", "cn-mm-004", "cn-mm-005"],
  "cn-reacciones-quimicas-01": [
    "cn-trq-001",
    "cn-trq-002",
    "cn-trq-003",
    "cn-trq-004",
    "cn-trq-005",
  ],
  "cn-reacciones-nucleares-01": [
    "cn-rnu-001",
    "cn-rnu-002",
    "cn-rnu-003",
    "cn-rnu-004",
    "cn-rnu-005",
  ],
};

const cn_5_4_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-naturales-experimentales-y-tecnologia",
  "cn-5-4-reacciones-quimicas-y-conservacion-de-la-materia",
);

async function read_cn_5_4_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cn_5_4_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias naturales question bank — cn-5-4-reacciones-quimicas-y-conservacion-de-la-materia", () => {
  it("has exactly fifteen records for its own three lessons", () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_4_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(15);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cn_5_4_reserved_ids)) {
      const lesson = await read_cn_5_4_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias naturales bank", () => {
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

  it("every question traces to its topic's guide code on page 16", () => {
    const cn_5_4_ids = new Set(Object.values(cn_5_4_reserved_ids).flat());

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!cn_5_4_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^cn-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 16");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question", () => {
    const cn_5_4_ids = new Set(Object.values(cn_5_4_reserved_ids).flat());
    const cn_5_4_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_4_ids.has(question.id),
      );
    const has_relation = cn_5_4_questions.some(
      (question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
        question.options.some((option) => /[a-z]/.test(option)),
    );

    expect(has_relation).toBe(true);
  });

  it("includes at least one ordering question", () => {
    const cn_5_4_ids = new Set(Object.values(cn_5_4_reserved_ids).flat());
    const cn_5_4_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_4_ids.has(question.id),
      );
    const has_ordering = cn_5_4_questions.some((question) =>
      question.options.every((option) => /^[\d,\s]+$/.test(option)),
    );

    expect(has_ordering).toBe(true);
  });

  it("gives every calculation question a determinate, unit-labeled correct answer", () => {
    const calculation_ids = new Set(["cn-mm-001", "cn-mm-002", "cn-mm-003"]);

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!calculation_ids.has(question.id)) continue;

      expect(new Set(question.options).size).toBe(question.options.length);
      expect(question.explanation).toMatch(/[0-9]/);
    }
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = ["cn-mm-001", "cn-trq-001", "cn-rnu-001"];
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });
});

const cn_5_5_reserved_ids: Record<string, string[]> = {
  "cn-choques-elasticos-e-inelasticos-01": [
    "cn-choq-001",
    "cn-choq-002",
    "cn-choq-003",
    "cn-choq-004",
    "cn-choq-005",
  ],
  "cn-momento-lineal-01": [
    "cn-mli-001",
    "cn-mli-002",
    "cn-mli-003",
    "cn-mli-004",
    "cn-mli-005",
  ],
  "cn-ondas-electromagneticas-01": [
    "cn-oem-001",
    "cn-oem-002",
    "cn-oem-003",
    "cn-oem-004",
    "cn-oem-005",
  ],
  "cn-caida-libre-01": [
    "cn-cli-001",
    "cn-cli-002",
    "cn-cli-003",
    "cn-cli-004",
    "cn-cli-005",
  ],
};

const cn_5_5_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-naturales-experimentales-y-tecnologia",
  "cn-5-5-energia-en-los-procesos-de-la-vida-diaria",
);

async function read_cn_5_5_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cn_5_5_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias naturales question bank — cn-5-5-energia-en-los-procesos-de-la-vida-diaria", () => {
  it("has exactly twenty records for its own four lessons", () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_5_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(20);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cn_5_5_reserved_ids)) {
      const lesson = await read_cn_5_5_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias naturales bank", () => {
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

  it("every question traces to its topic's guide code on page 16", () => {
    const cn_5_5_ids = new Set(Object.values(cn_5_5_reserved_ids).flat());

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!cn_5_5_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^cn-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 16");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question", () => {
    const cn_5_5_ids = new Set(Object.values(cn_5_5_reserved_ids).flat());
    const cn_5_5_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_5_ids.has(question.id),
      );
    const has_relation = cn_5_5_questions.some(
      (question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
        question.options.some((option) => /[a-z]/.test(option)),
    );

    expect(has_relation).toBe(true);
  });

  it("includes at least one ordering question", () => {
    const cn_5_5_ids = new Set(Object.values(cn_5_5_reserved_ids).flat());
    const cn_5_5_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_5_ids.has(question.id),
      );
    const has_ordering = cn_5_5_questions.some((question) =>
      question.options.every((option) => /^[\d,\s]+$/.test(option)),
    );

    expect(has_ordering).toBe(true);
  });

  it("gives every calculation question a determinate, unit-labeled correct answer", () => {
    const calculation_ids = new Set([
      "cn-mli-001",
      "cn-mli-002",
      "cn-mli-003",
      "cn-cli-001",
      "cn-cli-003",
    ]);

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!calculation_ids.has(question.id)) continue;

      expect(new Set(question.options).size).toBe(question.options.length);
      expect(question.explanation).toMatch(/[0-9]/);
    }
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = ["cn-choq-001", "cn-mli-001", "cn-oem-001", "cn-cli-001"];
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });
});

const cn_5_6_reserved_ids: Record<string, string[]> = {
  "cn-organelos-celulares-01": [
    "cn-org-001",
    "cn-org-002",
    "cn-org-003",
    "cn-org-004",
    "cn-org-005",
  ],
  "cn-niveles-de-organizacion-biologica-01": [
    "cn-nob-001",
    "cn-nob-002",
    "cn-nob-003",
    "cn-nob-004",
    "cn-nob-005",
  ],
  "cn-respiracion-celular-01": [
    "cn-rec-001",
    "cn-rec-002",
    "cn-rec-003",
    "cn-rec-004",
    "cn-rec-005",
  ],
};

const cn_5_6_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-naturales-experimentales-y-tecnologia",
  "cn-5-6-organismos-estructura-y-procesos",
);

async function read_cn_5_6_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cn_5_6_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias naturales question bank — cn-5-6-organismos-estructura-y-procesos", () => {
  it("has exactly fifteen records for its own three lessons", () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_6_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(15);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cn_5_6_reserved_ids)) {
      const lesson = await read_cn_5_6_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias naturales bank", () => {
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

  it("every question traces to its topic's guide code on page 16", () => {
    const cn_5_6_ids = new Set(Object.values(cn_5_6_reserved_ids).flat());

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!cn_5_6_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^cn-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 16");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question", () => {
    const cn_5_6_ids = new Set(Object.values(cn_5_6_reserved_ids).flat());
    const cn_5_6_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_6_ids.has(question.id),
      );
    const has_relation = cn_5_6_questions.some(
      (question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
        question.options.some((option) => /[a-z]/.test(option)),
    );

    expect(has_relation).toBe(true);
  });

  it("includes at least one ordering question", () => {
    const cn_5_6_ids = new Set(Object.values(cn_5_6_reserved_ids).flat());
    const cn_5_6_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_6_ids.has(question.id),
      );
    const has_ordering = cn_5_6_questions.some((question) =>
      question.options.every((option) => /^[\d,\s]+$/.test(option)),
    );

    expect(has_ordering).toBe(true);
  });

  it("calibrates the acetil-CoA reactivo against the guide's page 36 sample, with an original stage", () => {
    const acetyl_coa = ciencias_naturales_experimentales_y_tecnologia_questions.find(
      (question) => question.id === "cn-rec-003",
    );

    expect(acetyl_coa?.source_reference).toContain(
      "calibración de profundidad: página 36",
    );
    expect(acetyl_coa?.options[acetyl_coa.correct_option_index]).toBe("acetil-CoA");
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = ["cn-org-001", "cn-nob-001", "cn-rec-001"];
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });
});

const cn_5_7_reserved_ids: Record<string, string[]> = {
  "cn-reproduccion-sexual-y-asexual-01": [
    "cn-rsa-001",
    "cn-rsa-002",
    "cn-rsa-003",
    "cn-rsa-004",
    "cn-rsa-005",
  ],
  "cn-tipos-de-cromosomas-01": [
    "cn-toc-001",
    "cn-toc-002",
    "cn-toc-003",
    "cn-toc-004",
    "cn-toc-005",
  ],
  "cn-cuadros-de-punnett-01": [
    "cn-cdp-001",
    "cn-cdp-002",
    "cn-cdp-003",
    "cn-cdp-004",
    "cn-cdp-005",
  ],
  "cn-teorias-evolutivas-01": [
    "cn-tev-001",
    "cn-tev-002",
    "cn-tev-003",
    "cn-tev-004",
    "cn-tev-005",
  ],
  "cn-consecuencias-de-la-evolucion-01": [
    "cn-cev-001",
    "cn-cev-002",
    "cn-cev-003",
    "cn-cev-004",
    "cn-cev-005",
  ],
};

const cn_5_7_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-naturales-experimentales-y-tecnologia",
  "cn-5-7-herencia-y-evolucion-biologica",
);

async function read_cn_5_7_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cn_5_7_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias naturales question bank — cn-5-7-herencia-y-evolucion-biologica (completa el área)", () => {
  it("has exactly twenty-five records for its own five lessons", () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const all_expected_ids = Object.values(cn_5_7_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(25);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cn_5_7_reserved_ids)) {
      const lesson = await read_cn_5_7_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias naturales bank", () => {
    const errors =
      ciencias_naturales_experimentales_y_tecnologia_questions.flatMap(
        find_invalid_options,
      );
    expect(errors).toEqual([]);
  });

  it("has exactly one hundred sixty records total, across the area's seven units", () => {
    expect(ciencias_naturales_experimentales_y_tecnologia_questions).toHaveLength(160);
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

  it("every question traces to its topic's guide code on page 17", () => {
    const cn_5_7_ids = new Set(Object.values(cn_5_7_reserved_ids).flat());

    for (const question of ciencias_naturales_experimentales_y_tecnologia_questions) {
      if (!cn_5_7_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^cn-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 17");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question", () => {
    const cn_5_7_ids = new Set(Object.values(cn_5_7_reserved_ids).flat());
    const cn_5_7_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_7_ids.has(question.id),
      );
    const has_relation = cn_5_7_questions.some(
      (question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
        question.options.some((option) => /[a-z]/.test(option)),
    );

    expect(has_relation).toBe(true);
  });

  it("includes at least one ordering question", () => {
    const cn_5_7_ids = new Set(Object.values(cn_5_7_reserved_ids).flat());
    const cn_5_7_questions =
      ciencias_naturales_experimentales_y_tecnologia_questions.filter((question) =>
        cn_5_7_ids.has(question.id),
      );
    const has_ordering = cn_5_7_questions.some((question) =>
      question.options.every((option) => /^[\d,\s]+$/.test(option)),
    );

    expect(has_ordering).toBe(true);
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = [
      "cn-rsa-001",
      "cn-toc-001",
      "cn-cdp-001",
      "cn-tev-001",
      "cn-cev-001",
    ];
    const by_id = new Map(
      ciencias_naturales_experimentales_y_tecnologia_questions.map((question) => [
        question.id,
        question,
      ]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
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
  it("has exactly twenty records for its own four lessons", () => {
    const lc_6_1_ids = new Set(Object.values(lc_6_1_reserved_ids).flat());
    const lc_6_1_questions = lengua_y_comunicacion_questions.filter((question) =>
      lc_6_1_ids.has(question.id),
    );

    expect(lc_6_1_questions).toHaveLength(20);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(lc_6_1_reserved_ids).flat();

    expect(
      new Set(
        lengua_y_comunicacion_questions
          .filter((question) => question.topic_id.startsWith("lc-6-1-"))
          .map((question) => question.id),
      ),
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
    const lc_6_1_ids = new Set(Object.values(lc_6_1_reserved_ids).flat());

    for (const question of lengua_y_comunicacion_questions) {
      if (!lc_6_1_ids.has(question.id)) continue;

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
    const grouped = group_questions_by_topic(
      lengua_y_comunicacion_questions.filter((question) =>
        question.topic_id.startsWith("lc-6-1-"),
      ),
    );

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

const lc_6_2_reserved_ids: Record<string, string[]> = {
  "lc-tema-central-del-texto-narrativo-01": [
    "lc-tcn-001",
    "lc-tcn-002",
    "lc-tcn-003",
    "lc-tcn-004",
    "lc-tcn-005",
  ],
  "lc-trama-del-texto-narrativo-01": [
    "lc-trn-001",
    "lc-trn-002",
    "lc-trn-003",
    "lc-trn-004",
    "lc-trn-005",
  ],
  "lc-personajes-del-texto-narrativo-01": [
    "lc-pnj-001",
    "lc-pnj-002",
    "lc-pnj-003",
    "lc-pnj-004",
    "lc-pnj-005",
  ],
  "lc-narrador-del-texto-narrativo-01": [
    "lc-nar-001",
    "lc-nar-002",
    "lc-nar-003",
    "lc-nar-004",
    "lc-nar-005",
  ],
  "lc-ambito-de-la-narracion-01": [
    "lc-amb-001",
    "lc-amb-002",
    "lc-amb-003",
    "lc-amb-004",
    "lc-amb-005",
  ],
  "lc-tiempo-narrativo-01": [
    "lc-tpn-001",
    "lc-tpn-002",
    "lc-tpn-003",
    "lc-tpn-004",
    "lc-tpn-005",
  ],
};

const lc_6_2_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "lengua-y-comunicacion",
  "lc-6-2-recursos-del-analisis-literario",
);

async function read_lc_6_2_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(lc_6_2_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("lengua y comunicación question bank — lc-6-2-recursos-del-analisis-literario (calibración del área)", () => {
  it("has exactly thirty records for its own six lessons", () => {
    const lc_6_2_ids = new Set(Object.values(lc_6_2_reserved_ids).flat());
    const lc_6_2_questions = lengua_y_comunicacion_questions.filter((question) =>
      lc_6_2_ids.has(question.id),
    );

    expect(lc_6_2_questions).toHaveLength(30);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(lc_6_2_reserved_ids).flat();

    expect(
      new Set(
        lengua_y_comunicacion_questions
          .filter((question) => question.topic_id.startsWith("lc-6-2-"))
          .map((question) => question.id),
      ),
    ).toEqual(new Set(all_expected_ids));

    for (const [lesson_id, expected_ids] of Object.entries(lc_6_2_reserved_ids)) {
      const lesson = await read_lc_6_2_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full lengua y comunicación bank", () => {
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
    const lc_6_2_ids = new Set(Object.values(lc_6_2_reserved_ids).flat());

    for (const question of lengua_y_comunicacion_questions) {
      if (!lc_6_2_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^lc-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 17");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation question per lesson", () => {
    const lc_6_2_ids = new Set(Object.values(lc_6_2_reserved_ids).flat());
    const grouped = group_questions_by_topic(
      lengua_y_comunicacion_questions.filter((question) => lc_6_2_ids.has(question.id)),
    );

    for (const [, questions] of grouped) {
      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = [
      "lc-tcn-001",
      "lc-trn-001",
      "lc-pnj-001",
      "lc-nar-001",
      "lc-amb-001",
      "lc-tpn-001",
    ];
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });

  it("none of the area's three official sample reactivos apply to this unit, confirmed against pages 37 and 38", () => {
    const lc_6_2_ids = new Set(Object.values(lc_6_2_reserved_ids).flat());
    const lc_6_2_questions = lengua_y_comunicacion_questions.filter((question) =>
      lc_6_2_ids.has(question.id),
    );

    expect(
      lc_6_2_questions.some((question) =>
        question.source_reference?.includes("calibración"),
      ),
    ).toBe(false);
  });
});

const lc_6_3_reserved_ids: Record<string, string[]> = {
  "lc-composicion-de-un-ensayo-01": [
    "lc-cde-001",
    "lc-cde-002",
    "lc-cde-003",
    "lc-cde-004",
    "lc-cde-005",
  ],
  "lc-tipos-de-fuentes-de-informacion-01": [
    "lc-tfi-001",
    "lc-tfi-002",
    "lc-tfi-003",
    "lc-tfi-004",
    "lc-tfi-005",
  ],
  "lc-reglas-de-acentuacion-01": [
    "lc-rac-001",
    "lc-rac-002",
    "lc-rac-003",
    "lc-rac-004",
    "lc-rac-005",
  ],
  "lc-reglas-de-puntuacion-01": [
    "lc-rpu-001",
    "lc-rpu-002",
    "lc-rpu-003",
    "lc-rpu-004",
    "lc-rpu-005",
  ],
  "lc-unidades-sintacticas-01": [
    "lc-uds-001",
    "lc-uds-002",
    "lc-uds-003",
    "lc-uds-004",
    "lc-uds-005",
  ],
  "lc-coherencia-textual-01": [
    "lc-cht-001",
    "lc-cht-002",
    "lc-cht-003",
    "lc-cht-004",
    "lc-cht-005",
  ],
  "lc-adecuacion-textual-01": [
    "lc-adt-001",
    "lc-adt-002",
    "lc-adt-003",
    "lc-adt-004",
    "lc-adt-005",
  ],
};

const lc_6_3_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "lengua-y-comunicacion",
  "lc-6-3-procesos-de-composicion-de-textos",
);

async function read_lc_6_3_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(lc_6_3_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("lengua y comunicación question bank — lc-6-3-procesos-de-composicion-de-textos", () => {
  it("has exactly thirty-five records for its own seven lessons", () => {
    const lc_6_3_ids = new Set(Object.values(lc_6_3_reserved_ids).flat());
    const lc_6_3_questions = lengua_y_comunicacion_questions.filter((question) =>
      lc_6_3_ids.has(question.id),
    );

    expect(lc_6_3_questions).toHaveLength(35);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(lc_6_3_reserved_ids).flat();

    expect(
      new Set(
        lengua_y_comunicacion_questions
          .filter((question) => question.topic_id.startsWith("lc-6-3-"))
          .map((question) => question.id),
      ),
    ).toEqual(new Set(all_expected_ids));

    for (const [lesson_id, expected_ids] of Object.entries(lc_6_3_reserved_ids)) {
      const lesson = await read_lc_6_3_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full lengua y comunicación bank", () => {
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

  it("every question traces to its topic's guide code, on page 17 for 6.3.1–6.3.3 and page 18 for 6.3.4–6.3.7", () => {
    const lc_6_3_ids = new Set(Object.values(lc_6_3_reserved_ids).flat());

    for (const question of lengua_y_comunicacion_questions) {
      if (!lc_6_3_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^lc-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      const expected_page = ["6.3.1", "6.3.2", "6.3.3"].includes(code ?? "")
        ? "17"
        : "18";
      expect(question.source_reference).toContain(`página ${expected_page}`);
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation or ordering question per lesson", () => {
    const lc_6_3_ids = new Set(Object.values(lc_6_3_reserved_ids).flat());
    const grouped = group_questions_by_topic(
      lengua_y_comunicacion_questions.filter((question) => lc_6_3_ids.has(question.id)),
    );

    for (const [, questions] of grouped) {
      const has_relation_or_ordering = questions.some((question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)),
      );
      expect(has_relation_or_ordering).toBe(true);
    }
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = [
      "lc-cde-001",
      "lc-tfi-001",
      "lc-rac-001",
      "lc-rpu-001",
      "lc-uds-001",
      "lc-cht-001",
      "lc-adt-001",
    ];
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });

  it("calibrates all three of the area's official sample reactivos, one per applicable lesson", () => {
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );

    const sources = by_id.get("lc-tfi-005");
    const punctuation = by_id.get("lc-rpu-005");
    const coherence = by_id.get("lc-cht-005");

    expect(sources?.source_reference).toContain(
      "calibración de profundidad: página 37",
    );
    expect(punctuation?.source_reference).toContain(
      "calibración de profundidad: página 38",
    );
    expect(coherence?.source_reference).toContain(
      "calibración de profundidad: página 38",
    );
  });
});

const lc_6_4_reserved_ids: Record<string, string[]> = {
  "lc-elementos-de-la-exposicion-oral-01": [
    "lc-eeo-001",
    "lc-eeo-002",
    "lc-eeo-003",
    "lc-eeo-004",
    "lc-eeo-005",
  ],
  "lc-caracteristicas-del-dialogo-01": [
    "lc-cdi-001",
    "lc-cdi-002",
    "lc-cdi-003",
    "lc-cdi-004",
    "lc-cdi-005",
  ],
  "lc-elementos-del-debate-01": [
    "lc-edb-001",
    "lc-edb-002",
    "lc-edb-003",
    "lc-edb-004",
    "lc-edb-005",
  ],
  "lc-funciones-del-dialogo-y-debate-01": [
    "lc-fdd-001",
    "lc-fdd-002",
    "lc-fdd-003",
    "lc-fdd-004",
    "lc-fdd-005",
  ],
};

const lc_6_4_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "lengua-y-comunicacion",
  "lc-6-4-formas-orales-de-la-comunicacion",
);

async function read_lc_6_4_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(lc_6_4_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("lengua y comunicación question bank — lc-6-4-formas-orales-de-la-comunicacion", () => {
  it("has exactly twenty records for its own four lessons", () => {
    const lc_6_4_ids = new Set(Object.values(lc_6_4_reserved_ids).flat());
    const lc_6_4_questions = lengua_y_comunicacion_questions.filter((question) =>
      lc_6_4_ids.has(question.id),
    );

    expect(lc_6_4_questions).toHaveLength(20);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(lc_6_4_reserved_ids).flat();

    expect(
      new Set(
        lengua_y_comunicacion_questions
          .filter((question) => question.topic_id.startsWith("lc-6-4-"))
          .map((question) => question.id),
      ),
    ).toEqual(new Set(all_expected_ids));

    for (const [lesson_id, expected_ids] of Object.entries(lc_6_4_reserved_ids)) {
      const lesson = await read_lc_6_4_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full lengua y comunicación bank", () => {
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

  it("every question traces to its topic's guide code on page 18", () => {
    const lc_6_4_ids = new Set(Object.values(lc_6_4_reserved_ids).flat());

    for (const question of lengua_y_comunicacion_questions) {
      if (!lc_6_4_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^lc-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 18");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation or ordering question per lesson", () => {
    const lc_6_4_ids = new Set(Object.values(lc_6_4_reserved_ids).flat());
    const grouped = group_questions_by_topic(
      lengua_y_comunicacion_questions.filter((question) => lc_6_4_ids.has(question.id)),
    );

    for (const [, questions] of grouped) {
      const has_relation_or_ordering = questions.some((question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)),
      );
      expect(has_relation_or_ordering).toBe(true);
    }
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = ["lc-eeo-001", "lc-cdi-001", "lc-edb-001", "lc-fdd-001"];
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });

  it("carries no calibration note, since none of the area's three official sample reactivos apply to this unit", () => {
    const lc_6_4_ids = new Set(Object.values(lc_6_4_reserved_ids).flat());

    for (const question of lengua_y_comunicacion_questions) {
      if (!lc_6_4_ids.has(question.id)) continue;

      expect(question.source_reference?.includes("calibración")).toBe(false);
    }
  });
});

const lc_6_5_reserved_ids: Record<string, string[]> = {
  "lc-tiempo-presente-en-ingles-01": [
    "lc-tpi-001",
    "lc-tpi-002",
    "lc-tpi-003",
    "lc-tpi-004",
    "lc-tpi-005",
  ],
  "lc-tiempo-pasado-en-ingles-01": [
    "lc-tpa-001",
    "lc-tpa-002",
    "lc-tpa-003",
    "lc-tpa-004",
    "lc-tpa-005",
  ],
  "lc-tiempo-futuro-en-ingles-01": [
    "lc-tfu-001",
    "lc-tfu-002",
    "lc-tfu-003",
    "lc-tfu-004",
    "lc-tfu-005",
  ],
  "lc-presente-perfecto-en-ingles-01": [
    "lc-ppf-001",
    "lc-ppf-002",
    "lc-ppf-003",
    "lc-ppf-004",
    "lc-ppf-005",
  ],
  "lc-pasado-perfecto-en-ingles-01": [
    "lc-psp-001",
    "lc-psp-002",
    "lc-psp-003",
    "lc-psp-004",
    "lc-psp-005",
  ],
  "lc-preguntas-wh-en-ingles-01": [
    "lc-pwh-001",
    "lc-pwh-002",
    "lc-pwh-003",
    "lc-pwh-004",
    "lc-pwh-005",
  ],
  "lc-comparaciones-en-ingles-01": [
    "lc-rdc-001",
    "lc-rdc-002",
    "lc-rdc-003",
    "lc-rdc-004",
    "lc-rdc-005",
  ],
  "lc-verbos-modales-en-ingles-01": [
    "lc-vbm-001",
    "lc-vbm-002",
    "lc-vbm-003",
    "lc-vbm-004",
    "lc-vbm-005",
  ],
  "lc-estructuras-condicionales-en-ingles-01": [
    "lc-cnd-001",
    "lc-cnd-002",
    "lc-cnd-003",
    "lc-cnd-004",
    "lc-cnd-005",
  ],
  "lc-voz-pasiva-en-ingles-01": [
    "lc-vzp-001",
    "lc-vzp-002",
    "lc-vzp-003",
    "lc-vzp-004",
    "lc-vzp-005",
  ],
};

const lc_6_5_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "lengua-y-comunicacion",
  "lc-6-5-estructura-gramatical-del-ingles",
);

async function read_lc_6_5_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(lc_6_5_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("lengua y comunicación question bank — lc-6-5-estructura-gramatical-del-ingles", () => {
  it("has exactly fifty records for its own ten lessons", () => {
    const lc_6_5_ids = new Set(Object.values(lc_6_5_reserved_ids).flat());
    const lc_6_5_questions = lengua_y_comunicacion_questions.filter((question) =>
      lc_6_5_ids.has(question.id),
    );

    expect(lc_6_5_questions).toHaveLength(50);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(lc_6_5_reserved_ids).flat();

    expect(
      new Set(
        lengua_y_comunicacion_questions
          .filter((question) => question.topic_id.startsWith("lc-6-5-"))
          .map((question) => question.id),
      ),
    ).toEqual(new Set(all_expected_ids));

    for (const [lesson_id, expected_ids] of Object.entries(lc_6_5_reserved_ids)) {
      const lesson = await read_lc_6_5_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full lengua y comunicación bank", () => {
    const errors = lengua_y_comunicacion_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("has exactly one hundred fifty-five records total, across the area's five units", () => {
    expect(lengua_y_comunicacion_questions).toHaveLength(155);
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

  it("every question traces to its topic's guide code on page 18", () => {
    const lc_6_5_ids = new Set(Object.values(lc_6_5_reserved_ids).flat());

    for (const question of lengua_y_comunicacion_questions) {
      if (!lc_6_5_ids.has(question.id)) continue;

      const code = question.topic_id
        .match(/^lc-(\d-\d-(?:\d+))-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 18");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes at least one relation or ordering question per lesson", () => {
    const lc_6_5_ids = new Set(Object.values(lc_6_5_reserved_ids).flat());
    const grouped = group_questions_by_topic(
      lengua_y_comunicacion_questions.filter((question) => lc_6_5_ids.has(question.id)),
    );

    for (const [, questions] of grouped) {
      const has_relation_or_ordering = questions.some((question) =>
        question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)),
      );
      expect(has_relation_or_ordering).toBe(true);
    }
  });

  it("has each lesson's opening diagnostic question answer away from index 0, varied across lessons", () => {
    const opening_ids = [
      "lc-tpi-001",
      "lc-tpa-001",
      "lc-tfu-001",
      "lc-ppf-001",
      "lc-psp-001",
      "lc-pwh-001",
      "lc-rdc-001",
      "lc-vbm-001",
      "lc-cnd-001",
      "lc-vzp-001",
    ];
    const by_id = new Map(
      lengua_y_comunicacion_questions.map((question) => [question.id, question]),
    );
    const indexes = opening_ids.map((id) => by_id.get(id)?.correct_option_index);

    expect(indexes.every((index) => index !== 0)).toBe(true);
    expect(new Set(indexes).size).toBeGreaterThan(1);
  });

  it("carries no calibration note, since none of the area's three official sample reactivos apply to this unit", () => {
    const lc_6_5_ids = new Set(Object.values(lc_6_5_reserved_ids).flat());

    for (const question of lengua_y_comunicacion_questions) {
      if (!lc_6_5_ids.has(question.id)) continue;

      expect(question.source_reference?.includes("calibración")).toBe(false);
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
  it("has exactly forty-five records for its own nine lessons", () => {
    const by_id = new Map(
      ciencias_sociales_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(cs_7_1_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(45);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_sociales_questions.map((question) => [question.id, question]),
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

  it("has no structurally invalid question in the full ciencias sociales bank", () => {
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
    const cs_7_1_ids = new Set(Object.values(cs_7_1_reserved_ids).flat());

    for (const question of ciencias_sociales_questions.filter((question) =>
      cs_7_1_ids.has(question.id),
    )) {
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
    const grouped = group_questions_by_topic(
      ciencias_sociales_questions.filter((question) =>
        Object.values(cs_7_1_reserved_ids).flat().includes(question.id),
      ),
    );

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

const cs_7_2_reserved_ids: Record<string, string[]> = {
  "cs-teorias-sobre-el-origen-del-estado-01": [
    "cs-toe-001",
    "cs-toe-002",
    "cs-toe-003",
    "cs-toe-004",
    "cs-toe-005",
  ],
  "cs-democracia-electoral-01": [
    "cs-dem-001",
    "cs-dem-002",
    "cs-dem-003",
    "cs-dem-004",
    "cs-dem-005",
  ],
  "cs-ciudadania-mexicana-01": [
    "cs-ciu-001",
    "cs-ciu-002",
    "cs-ciu-003",
    "cs-ciu-004",
    "cs-ciu-005",
  ],
  "cs-instituciones-del-estado-mexicano-01": [
    "cs-iem-001",
    "cs-iem-002",
    "cs-iem-003",
    "cs-iem-004",
    "cs-iem-005",
  ],
  "cs-poderes-facticos-01": [
    "cs-pfa-001",
    "cs-pfa-002",
    "cs-pfa-003",
    "cs-pfa-004",
    "cs-pfa-005",
  ],
  "cs-principios-de-politica-exterior-01": [
    "cs-ppe-001",
    "cs-ppe-002",
    "cs-ppe-003",
    "cs-ppe-004",
    "cs-ppe-005",
  ],
  "cs-organismos-internacionales-01": [
    "cs-oin-001",
    "cs-oin-002",
    "cs-oin-003",
    "cs-oin-004",
    "cs-oin-005",
  ],
  "cs-areas-en-el-sistema-mundo-01": [
    "cs-asm-001",
    "cs-asm-002",
    "cs-asm-003",
    "cs-asm-004",
    "cs-asm-005",
  ],
};

const cs_7_2_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-sociales",
  "cs-7-2-perspectivas-politicas",
);

async function read_cs_7_2_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cs_7_2_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias sociales question bank — cs-7-2-perspectivas-politicas", () => {
  it("has exactly forty records for its own eight lessons", () => {
    const by_id = new Map(
      ciencias_sociales_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(cs_7_2_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(40);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_sociales_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cs_7_2_reserved_ids)) {
      const lesson = await read_cs_7_2_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias sociales bank", () => {
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
    const cs_7_2_ids = new Set(Object.values(cs_7_2_reserved_ids).flat());

    for (const question of ciencias_sociales_questions.filter((question) =>
      cs_7_2_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^cs-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 19");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes a jerarquización question ordering the stages of an electoral process", () => {
    const grouped = group_questions_by_topic(ciencias_sociales_questions);
    const dem_questions =
      grouped.get("cs-7-2-2-caracteristicas-de-la-democracia-electoral") ?? [];

    const has_ordering = dem_questions.some((question) =>
      question.options.every((option) => /^\d[\d,\s]*$/.test(option)),
    );

    expect(has_ordering).toBe(true);
  });

  it("includes at least one relation question in every cs-7-2 lesson except democracia electoral, which uses jerarquización instead", () => {
    const grouped = group_questions_by_topic(
      ciencias_sociales_questions.filter((question) =>
        Object.values(cs_7_2_reserved_ids).flat().includes(question.id),
      ),
    );

    for (const [topic_id, questions] of grouped) {
      if (topic_id === "cs-7-2-2-caracteristicas-de-la-democracia-electoral") {
        continue;
      }

      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });

  it("calibrates the función de las instituciones del estado mexicano lesson against the guide's own página 43 sample, without copying its wording", () => {
    const grouped = group_questions_by_topic(ciencias_sociales_questions);
    const iem_questions =
      grouped.get("cs-7-2-4-funcion-de-instituciones-del-estado-mexicano") ?? [];

    expect(iem_questions).toHaveLength(5);
    expect(
      iem_questions.every((question) =>
        ["SEP", "CONADIS", "SEDATU", "INAES"].some(
          (institution) =>
            question.prompt.includes(institution) ||
            question.options.some((option) => option.includes(institution)),
        ),
      ),
    ).toBe(true);
    expect(
      iem_questions.some((question) =>
        question.prompt.toLowerCase().includes("cenapred"),
      ),
    ).toBe(false);
  });
});

const cs_7_3_reserved_ids: Record<string, string[]> = {
  "cs-organizacion-social-01": [
    "cs-tos-001",
    "cs-tos-002",
    "cs-tos-003",
    "cs-tos-004",
    "cs-tos-005",
  ],
  "cs-indicadores-de-desarrollo-comunitario-01": [
    "cs-idc-001",
    "cs-idc-002",
    "cs-idc-003",
    "cs-idc-004",
    "cs-idc-005",
  ],
  "cs-indicadores-de-bienestar-01": [
    "cs-idb-001",
    "cs-idb-002",
    "cs-idb-003",
    "cs-idb-004",
    "cs-idb-005",
  ],
  "cs-segregacion-social-01": [
    "cs-seg-001",
    "cs-seg-002",
    "cs-seg-003",
    "cs-seg-004",
    "cs-seg-005",
  ],
  "cs-derechos-de-ninas-ninos-y-adolescentes-01": [
    "cs-dnna-001",
    "cs-dnna-002",
    "cs-dnna-003",
    "cs-dnna-004",
    "cs-dnna-005",
  ],
  "cs-crisis-sociales-economicas-y-ambientales-01": [
    "cs-cse-001",
    "cs-cse-002",
    "cs-cse-003",
    "cs-cse-004",
    "cs-cse-005",
  ],
  "cs-tipos-de-migraciones-01": [
    "cs-mig-001",
    "cs-mig-002",
    "cs-mig-003",
    "cs-mig-004",
    "cs-mig-005",
  ],
  "cs-movimientos-sociales-antisistema-01": [
    "cs-msa-001",
    "cs-msa-002",
    "cs-msa-003",
    "cs-msa-004",
    "cs-msa-005",
  ],
};

const cs_7_3_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "ciencias-sociales",
  "cs-7-3-problemas-sociologicos",
);

async function read_cs_7_3_lesson_frontmatter(
  lesson_id: string,
): Promise<{ topic_id: string; question_ids: string[] }> {
  const file_path = path.join(cs_7_3_lesson_directory, `${lesson_id}.md`);
  const raw = await readFile(file_path, "utf-8");
  const { data } = matter(raw);

  return {
    topic_id: data["topic-id"],
    question_ids: data["question-ids"],
  };
}

describe("ciencias sociales question bank — cs-7-3-problemas-sociologicos (completa el área)", () => {
  it("has exactly forty records for its own eight lessons", () => {
    const by_id = new Map(
      ciencias_sociales_questions.map((question) => [question.id, question]),
    );
    const all_expected_ids = Object.values(cs_7_3_reserved_ids).flat();

    const resolved = all_expected_ids.map((id) => by_id.get(id));
    expect(resolved.every((question) => question !== undefined)).toBe(true);
    expect(all_expected_ids).toHaveLength(40);
  });

  it("has exactly the reserved ids for each lesson, five per lesson, matching lesson frontmatter", async () => {
    const by_id = new Map(
      ciencias_sociales_questions.map((question) => [question.id, question]),
    );

    for (const [lesson_id, expected_ids] of Object.entries(cs_7_3_reserved_ids)) {
      const lesson = await read_cs_7_3_lesson_frontmatter(lesson_id);

      expect(new Set(lesson.question_ids)).toEqual(new Set(expected_ids));

      const lesson_questions = expected_ids.map((id) => by_id.get(id));
      expect(lesson_questions.every((question) => question !== undefined)).toBe(true);

      for (const question of lesson_questions) {
        expect(question?.topic_id).toBe(lesson.topic_id);
      }
    }
  });

  it("has no structurally invalid question in the full ciencias sociales bank", () => {
    const errors = ciencias_sociales_questions.flatMap(find_invalid_options);
    expect(errors).toEqual([]);
  });

  it("has exactly one hundred twenty-five records total, across the area's three units", () => {
    expect(ciencias_sociales_questions).toHaveLength(125);
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

  it("every question traces to its topic's guide code on page 20", () => {
    const cs_7_3_ids = new Set(Object.values(cs_7_3_reserved_ids).flat());

    for (const question of ciencias_sociales_questions.filter((question) =>
      cs_7_3_ids.has(question.id),
    )) {
      const code = question.topic_id
        .match(/^cs-(\d-\d-\d)-/)?.[1]
        ?.replaceAll("-", ".");
      expect(question.source_reference).toContain("página 20");
      expect(question.source_reference).toContain(`código ${code}`);
    }
  });

  it("includes a jerarquización question ordering the estereotipo-discriminación-exclusión sequence", () => {
    const grouped = group_questions_by_topic(ciencias_sociales_questions);
    const seg_questions =
      grouped.get("cs-7-3-4-factores-que-propician-la-segregacion-social") ?? [];

    const has_ordering = seg_questions.some((question) =>
      question.options.every((option) => /^\d[\d,\s]*$/.test(option)),
    );

    expect(has_ordering).toBe(true);
  });

  it("includes at least one relation question in every cs-7-3 lesson except segregación social, which uses jerarquización instead", () => {
    const grouped = group_questions_by_topic(
      ciencias_sociales_questions.filter((question) =>
        Object.values(cs_7_3_reserved_ids).flat().includes(question.id),
      ),
    );

    for (const [topic_id, questions] of grouped) {
      if (topic_id === "cs-7-3-4-factores-que-propician-la-segregacion-social") {
        continue;
      }

      const has_relation = questions.some(
        (question) =>
          question.options.every((option) => /^\d[a-z,\s\d]*$/.test(option)) &&
          question.options.some((option) => /[a-z]/.test(option)),
      );
      expect(has_relation).toBe(true);
    }
  });

  it("calibrates the tipos de organización social lesson against the guide's own página 44 sample, using the topic's own four categories instead of copying the sample's wording", () => {
    const grouped = group_questions_by_topic(ciencias_sociales_questions);
    const tos_questions = grouped.get("cs-7-3-1-tipos-de-organizacion-social") ?? [];

    expect(tos_questions).toHaveLength(5);
    expect(
      tos_questions.every((question) =>
        ["clase social", "grupo social", "comunidad", "institución"].some(
          (category) =>
            question.prompt.toLowerCase().includes(category) ||
            question.options.some((option) => option.toLowerCase().includes(category)),
        ),
      ),
    ).toBe(true);
  });

  it("does not introduce current political facts in the crisis and movements lessons", () => {
    const grouped = group_questions_by_topic(ciencias_sociales_questions);
    const cse_questions =
      grouped.get(
        "cs-7-3-6-consecuencias-de-crisis-sociales-economicas-y-ambientales",
      ) ?? [];
    const msa_questions =
      grouped.get("cs-7-3-8-movimientos-sociales-antisistema") ?? [];

    for (const question of [...cse_questions, ...msa_questions]) {
      expect(question.prompt.toLowerCase()).not.toMatch(
        /202\d|actual(mente)?|hoy en día/,
      );
    }
  });
});
