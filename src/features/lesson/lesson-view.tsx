import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";

import { Eyebrow } from "@/components/ui/eyebrow";
import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { get_lesson_questions_for_unit } from "@/features/practice/unit-topic-content";
import { LessonSession } from "@/features/progress/lesson-session";

import type { lesson } from "./unit-lessons";

type lesson_view_props = {
  lesson: lesson;
};

const markdown_components: Components = {
  h2: ({ children }) => (
    <h2 className="mt-12 font-display text-3xl font-semibold tracking-[-0.025em] text-ink">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-ink">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-[1.02rem] leading-8 text-ink-muted">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-3 pl-6 text-[1.02rem] leading-8 text-ink-muted marker:text-accent">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-3 pl-6 text-[1.02rem] leading-8 text-ink-muted marker:font-bold marker:text-accent">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  code: ({ children }) => (
    <code className="rounded-md border border-line bg-surface-raised px-1.5 py-0.5 font-mono text-[0.9em] text-ink">
      {children}
    </code>
  ),
};

function get_markdown_body(body: string): string {
  return body.replace(/^\s*# [^\n]+\r?\n+/, "");
}

type markdown_sections = {
  before_comprobacion: string;
  comprobacion: string;
  cierre: string;
};

const COMPROBACION_HEADING = /\n(## comprobación)\n/i;
const CIERRE_HEADING = /\n(## cierre)\n/i;

function get_markdown_sections(body: string): markdown_sections {
  const body_without_title = get_markdown_body(body);
  const comprobacion_match = body_without_title.match(COMPROBACION_HEADING);

  if (comprobacion_match?.index === undefined) {
    return {
      before_comprobacion: body_without_title,
      comprobacion: "",
      cierre: "",
    };
  }

  const before_comprobacion = body_without_title.slice(0, comprobacion_match.index);
  const remaining_body = body_without_title.slice(
    comprobacion_match.index + comprobacion_match[0].length,
  );
  const cierre_match = remaining_body.match(CIERRE_HEADING);

  if (cierre_match?.index === undefined) {
    return {
      before_comprobacion,
      comprobacion: `${comprobacion_match[1]}\n${remaining_body}`,
      cierre: "",
    };
  }

  return {
    before_comprobacion,
    comprobacion: `${comprobacion_match[1]}\n${remaining_body.slice(0, cierre_match.index)}`,
    cierre: `${cierre_match[1]}\n${remaining_body.slice(cierre_match.index + cierre_match[0].length)}`,
  };
}

export function LessonView({ lesson }: lesson_view_props) {
  const questions = get_lesson_questions_for_unit(lesson);
  const sections = get_markdown_sections(lesson.body);
  const resolved_unit = get_available_unit(lesson.area_id, lesson.unit_id);

  return (
    <article className="reading-shell">
      {resolved_unit ? (
        <Link className="button-quiet" href={`/ruta/${lesson.area_id}`}>
          Volver a {resolved_unit.unit.title}
        </Link>
      ) : null}
      <header className="mt-7 border-b border-line pb-9">
        <Eyebrow>Lección · tema {lesson.source.code}</Eyebrow>
        <h1 className="page-heading mt-3">{lesson.title}</h1>
        <p className="page-intro mt-5">{lesson.objective}</p>
        <p className="mt-5 inline-flex rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink-muted">
          {lesson.estimated_minutes} minutos · guía oficial, página {lesson.source.page}
        </p>
        {lesson.prerequisites.length > 0 ? (
          <div className="surface-panel mt-6 p-4">
            <p className="text-sm font-semibold text-ink">Antes de continuar</p>
            <ul className="mt-2 space-y-2">
              {lesson.prerequisites.map((prerequisite_id) => (
                <li key={prerequisite_id}>
                  <Link
                    className="button-quiet text-sm"
                    href={`/leccion/${prerequisite_id}`}
                  >
                    Repasa {prerequisite_id}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>
      <div className="pb-4">
        <ReactMarkdown components={markdown_components} skipHtml>
          {sections.before_comprobacion}
        </ReactMarkdown>
        {sections.comprobacion ? (
          <ReactMarkdown components={markdown_components} skipHtml>
            {sections.comprobacion}
          </ReactMarkdown>
        ) : null}
        <LessonSession lesson_id={lesson.id} questions={questions} />
        {sections.cierre ? (
          <ReactMarkdown components={markdown_components} skipHtml>
            {sections.cierre}
          </ReactMarkdown>
        ) : null}
      </div>
    </article>
  );
}
