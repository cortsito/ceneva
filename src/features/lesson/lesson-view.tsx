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
    <h2 className="mt-10 font-display text-2xl font-semibold tracking-tight text-ink">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-ink">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mt-4 leading-7 text-ink-muted">{children}</p>,
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-ink-muted">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-ink-muted">
      {children}
    </ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  code: ({ children }) => (
    <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.9em] text-ink">
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

function get_markdown_sections(body: string): markdown_sections {
  const body_without_title = get_markdown_body(body);
  const [before_comprobacion, remaining_body] = body_without_title.split(
    "\n## comprobación\n",
    2,
  );

  if (remaining_body === undefined) {
    return {
      before_comprobacion: body_without_title,
      comprobacion: "",
      cierre: "",
    };
  }

  const [comprobacion_body, cierre_body] = remaining_body.split("\n## cierre\n", 2);

  return {
    before_comprobacion,
    comprobacion: `## comprobación\n${comprobacion_body}`,
    cierre: cierre_body === undefined ? "" : `## cierre\n${cierre_body}`,
  };
}

export function LessonView({ lesson }: lesson_view_props) {
  const questions = get_lesson_questions_for_unit(lesson);
  const sections = get_markdown_sections(lesson.body);
  const resolved_unit = get_available_unit(lesson.area_id, lesson.unit_id);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {resolved_unit ? (
        <Link
          className="text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          href={`/ruta/${lesson.area_id}`}
        >
          Volver a {resolved_unit.unit.title}
        </Link>
      ) : null}
      <header className="mt-8 border-b border-line pb-8">
        <Eyebrow>Lección · tema {lesson.source.code}</Eyebrow>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {lesson.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink-muted">{lesson.objective}</p>
        <p className="mt-4 text-sm text-ink-muted">
          {lesson.estimated_minutes} minutos · guía oficial, página {lesson.source.page}
        </p>
        {lesson.prerequisites.length > 0 ? (
          <div className="mt-6 rounded-lg bg-surface p-4">
            <p className="text-sm font-semibold text-ink">Antes de continuar</p>
            <ul className="mt-2 space-y-2">
              {lesson.prerequisites.map((prerequisite_id) => (
                <li key={prerequisite_id}>
                  <Link
                    className="text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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
