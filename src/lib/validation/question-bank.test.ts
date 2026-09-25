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
