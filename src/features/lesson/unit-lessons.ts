import { readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import type { curriculum_unit } from "@content/curriculum/types";

import { get_available_unit } from "@/features/curriculum/available-curriculum";

type lesson_source = {
  guide: "docs/guiaoficial.pdf";
  page: number;
  code: string;
};

export type lesson = {
  id: string;
  area_id: string;
  unit_id: string;
  topic_id: string;
  title: string;
  objective: string;
  estimated_minutes: number;
  prerequisites: string[];
  question_ids: string[];
  source: lesson_source;
  body: string;
};

export type lesson_summary = Pick<lesson, "id" | "title" | "estimated_minutes">;

function is_record(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function read_string(data: Record<string, unknown>, key: string): string {
  const value = data[key];

  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`el frontmatter requiere ${key}.`);
  }

  return value;
}

function read_string_array(data: Record<string, unknown>, key: string): string[] {
  const value = data[key];

  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`el frontmatter requiere ${key} como arreglo de textos.`);
  }

  return value;
}

function read_positive_number(data: Record<string, unknown>, key: string): number {
  const value = data[key];

  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    throw new Error(`el frontmatter requiere ${key} como número positivo.`);
  }

  return value;
}

function read_source(data: Record<string, unknown>): lesson_source {
  const source = data.source;

  if (!is_record(source)) {
    throw new Error("el frontmatter requiere source.");
  }

  const guide = read_string(source, "guide");
  const page = read_positive_number(source, "page");

  if (guide !== "docs/guiaoficial.pdf") {
    throw new Error("la fuente de una lección debe ser la guía oficial.");
  }

  return {
    guide,
    page,
    code: read_string(source, "code"),
  };
}

function topic_by_lesson_id(unit: curriculum_unit): Map<string, string> {
  return new Map(
    unit.topics.flatMap((topic) =>
      topic.lesson_ids.map((lesson_id) => [lesson_id, topic.id] as const),
    ),
  );
}

function parse_unit_lesson(
  document: string,
  area_id: string,
  unit_id: string,
  expected_topic_by_lesson_id: Map<string, string>,
): lesson {
  const parsed = matter(document);
  const data = parsed.data as Record<string, unknown>;
  const id = read_string(data, "id");
  const topic_id = read_string(data, "topic-id");
  const title = read_string(data, "title");
  const expected_topic_id = expected_topic_by_lesson_id.get(id);

  if (!expected_topic_id) {
    throw new Error(`la lección ${id} no pertenece a la unidad ${unit_id}.`);
  }

  if (read_string(data, "area-id") !== area_id) {
    throw new Error(`la lección ${id} no pertenece a ${area_id}.`);
  }

  if (read_string(data, "unit-id") !== unit_id) {
    throw new Error(`la lección ${id} no pertenece a ${unit_id}.`);
  }

  if (topic_id !== expected_topic_id) {
    throw new Error(`la lección ${id} no coincide con su tema del currículo.`);
  }

  if (!parsed.content.trimStart().startsWith(`# ${title}`)) {
    throw new Error(`el cuerpo de ${id} debe iniciar con su título.`);
  }

  return {
    id,
    area_id,
    unit_id,
    topic_id,
    title,
    objective: read_string(data, "objective"),
    estimated_minutes: read_positive_number(data, "estimated-minutes"),
    prerequisites: read_string_array(data, "prerequisites"),
    question_ids: read_string_array(data, "question-ids"),
    source: read_source(data),
    body: parsed.content,
  };
}

function unit_lesson_directory(area_id: string, unit_id: string): string {
  return path.join(process.cwd(), "content", "lessons", area_id, unit_id);
}

export function get_unit_lesson_ids(area_id: string, unit_id: string): string[] {
  const resolved = get_available_unit(area_id, unit_id);

  if (!resolved) {
    return [];
  }

  return resolved.unit.topics.flatMap((topic) => topic.lesson_ids);
}

export async function get_unit_lesson(
  area_id: string,
  unit_id: string,
  lesson_id: string,
): Promise<lesson | undefined> {
  const resolved = get_available_unit(area_id, unit_id);

  if (!resolved) {
    return undefined;
  }

  const expected_topic_by_lesson_id = topic_by_lesson_id(resolved.unit);

  if (!expected_topic_by_lesson_id.has(lesson_id)) {
    return undefined;
  }

  const source = await readFile(
    path.join(unit_lesson_directory(area_id, unit_id), `${lesson_id}.md`),
    "utf8",
  );

  return parse_unit_lesson(source, area_id, unit_id, expected_topic_by_lesson_id);
}

export async function get_unit_lessons(
  area_id: string,
  unit_id: string,
): Promise<lesson[]> {
  const lesson_ids = get_unit_lesson_ids(area_id, unit_id);

  const lessons = await Promise.all(
    lesson_ids.map((lesson_id) => get_unit_lesson(area_id, unit_id, lesson_id)),
  );

  return lessons.filter((candidate): candidate is lesson => candidate !== undefined);
}
