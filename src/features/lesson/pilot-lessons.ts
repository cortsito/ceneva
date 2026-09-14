import { readFile } from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import {
  get_pilot_curriculum,
  pilot_area_id,
  pilot_unit_id,
} from "@/features/curriculum/pilot-curriculum";

type lesson_source = {
  guide: "docs/guiaoficial.pdf";
  page: number;
  code: string;
};

export type pilot_lesson = {
  id: string;
  area_id: typeof pilot_area_id;
  unit_id: typeof pilot_unit_id;
  topic_id: string;
  title: string;
  objective: string;
  estimated_minutes: number;
  prerequisites: string[];
  question_ids: string[];
  source: lesson_source;
  body: string;
};

export type pilot_lesson_summary = Pick<
  pilot_lesson,
  "id" | "title" | "estimated_minutes"
>;

const pilot_lesson_directory = path.join(
  process.cwd(),
  "content",
  "lessons",
  "pensamiento-matematico",
  pilot_unit_id,
);

const { unit: pilot_unit } = get_pilot_curriculum();
const pilot_lesson_ids = pilot_unit.topics.flatMap((topic) => topic.lesson_ids);
const pilot_topic_by_lesson_id = new Map(
  pilot_unit.topics.flatMap((topic) =>
    topic.lesson_ids.map((lesson_id) => [lesson_id, topic.id]),
  ),
);

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
    throw new Error("la fuente de una lección piloto debe ser la guía oficial.");
  }

  return {
    guide,
    page,
    code: read_string(source, "code"),
  };
}

function parse_pilot_lesson(document: string): pilot_lesson {
  const parsed = matter(document);
  const data = parsed.data as Record<string, unknown>;
  const id = read_string(data, "id");
  const topic_id = read_string(data, "topic-id");
  const title = read_string(data, "title");
  const expected_topic_id = pilot_topic_by_lesson_id.get(id);

  if (!expected_topic_id) {
    throw new Error(`la lección ${id} no pertenece al piloto.`);
  }

  if (read_string(data, "area-id") !== pilot_area_id) {
    throw new Error(`la lección ${id} no pertenece a ${pilot_area_id}.`);
  }

  if (read_string(data, "unit-id") !== pilot_unit_id) {
    throw new Error(`la lección ${id} no pertenece a ${pilot_unit_id}.`);
  }

  if (topic_id !== expected_topic_id) {
    throw new Error(`la lección ${id} no coincide con su tema del currículo.`);
  }

  if (!parsed.content.trimStart().startsWith(`# ${title}`)) {
    throw new Error(`el cuerpo de ${id} debe iniciar con su título.`);
  }

  return {
    id,
    area_id: pilot_area_id,
    unit_id: pilot_unit_id,
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

function is_pilot_lesson_id(lesson_id: string): boolean {
  return pilot_lesson_ids.includes(lesson_id);
}

export function get_pilot_lesson_ids(): string[] {
  return [...pilot_lesson_ids];
}

export async function get_pilot_lesson(
  lesson_id: string,
): Promise<pilot_lesson | undefined> {
  if (!is_pilot_lesson_id(lesson_id)) {
    return undefined;
  }

  const source = await readFile(
    path.join(pilot_lesson_directory, `${lesson_id}.md`),
    "utf8",
  );

  return parse_pilot_lesson(source);
}

export async function get_pilot_lessons(): Promise<pilot_lesson[]> {
  return Promise.all(
    pilot_lesson_ids.map((lesson_id) => get_pilot_lesson(lesson_id)),
  ).then((lessons) =>
    lessons.filter((lesson): lesson is pilot_lesson => lesson !== undefined),
  );
}

export async function get_pilot_lesson_summaries(): Promise<pilot_lesson_summary[]> {
  const lessons = await get_pilot_lessons();

  return lessons.map(({ id, title, estimated_minutes }) => ({
    id,
    title,
    estimated_minutes,
  }));
}
