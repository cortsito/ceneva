import Link from "next/link";
import ReactMarkdown, { type Components } from "react-markdown";

import { Eyebrow } from "@/components/ui/eyebrow";
import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { get_lesson_questions_for_unit } from "@/features/practice/unit-topic-content";
import { LessonCompletionStatus } from "@/features/progress/lesson-completion-status";
import { LessonSession } from "@/features/progress/lesson-session";

import { get_available_lesson, type lesson } from "./unit-lessons";

type lesson_view_props = {
  lesson: lesson;
};

type lesson_section_kind =
  | "objective"
  | "explanation"
  | "example"
  | "error"
  | "guided"
  | "check"
  | "closing"
  | "generic";

type lesson_section = {
  body: string;
  heading: string;
  id: string;
  kind: lesson_section_kind;
};

const markdown_components: Components = {
  h3: ({ children }) => (
    <h3 className="mt-7 text-xl font-bold tracking-tight text-ink">{children}</h3>
  ),
  p: ({ children }) => <p>{children}</p>,
  ul: ({ children }) => <ul>{children}</ul>,
  ol: ({ children }) => <ol>{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => (
    <strong className="font-extrabold text-ink">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="rounded-md border border-line bg-surface-raised px-1.5 py-0.5 font-mono text-[0.9em] text-ink">
      {children}
    </code>
  ),
};

const section_contract: Record<
  string,
  { id: string; kind: lesson_section_kind; label: string; title: string }
> = {
  objetivo: {
    id: "objetivo",
    kind: "objective",
    label: "Meta",
    title: "Objetivo",
  },
  explicación: {
    id: "explicacion",
    kind: "explanation",
    label: "01 · Aprende",
    title: "Explicación",
  },
  "ejemplo resuelto": {
    id: "ejemplo-resuelto",
    kind: "example",
    label: "02 · Observa",
    title: "Ejemplo resuelto",
  },
  "error frecuente": {
    id: "error-frecuente",
    kind: "error",
    label: "Evita esta confusión",
    title: "Error frecuente",
  },
  "práctica guiada": {
    id: "practica-guiada",
    kind: "guided",
    label: "03 · Inténtalo",
    title: "Práctica guiada",
  },
  comprobación: {
    id: "comprobacion",
    kind: "check",
    label: "04 · Comprueba",
    title: "Comprobación",
  },
  cierre: {
    id: "cierre",
    kind: "closing",
    label: "Idea clave",
    title: "Qué te llevas",
  },
};

function get_markdown_body(body: string): string {
  return body.replace(/^\s*# [^\n]+\r?\n+/, "").trim();
}

function get_section_contract(heading: string) {
  return section_contract[heading.trim().toLocaleLowerCase("es-MX")];
}

function parse_lesson_sections(body: string): lesson_section[] {
  const source = get_markdown_body(body);
  const heading_pattern = /^##\s+(.+?)\s*$/gm;
  const matches = Array.from(source.matchAll(heading_pattern));

  return matches.map((match, index) => {
    const heading = match[1].trim();
    const contract = get_section_contract(heading);
    const body_start = (match.index ?? 0) + match[0].length;
    const body_end = matches[index + 1]?.index ?? source.length;

    return {
      body: source.slice(body_start, body_end).trim(),
      heading,
      id: contract?.id ?? `seccion-${index + 1}`,
      kind: contract?.kind ?? "generic",
    };
  });
}

function LessonSection({ section }: { section: lesson_section }) {
  const contract = get_section_contract(section.heading);
  const label = contract?.label ?? "Contenido";
  const title = contract?.title ?? section.heading;

  return (
    <section
      aria-labelledby={`${section.id}-titulo`}
      className={`lesson-section lesson-section--${section.kind}`}
      id={section.id}
    >
      <p className="lesson-section__label">{label}</p>
      <h2 className="lesson-section__title" id={`${section.id}-titulo`}>
        {title}
      </h2>
      <div className="lesson-section__body">
        <ReactMarkdown components={markdown_components} skipHtml>
          {section.body}
        </ReactMarkdown>
      </div>
    </section>
  );
}

export async function LessonView({ lesson }: lesson_view_props) {
  const questions = get_lesson_questions_for_unit(lesson);
  const sections = parse_lesson_sections(lesson.body);
  const resolved_unit = get_available_unit(lesson.area_id, lesson.unit_id);
  const prerequisite_lessons = await Promise.all(
    lesson.prerequisites.map(async (prerequisite_id) => ({
      id: prerequisite_id,
      title: (await get_available_lesson(prerequisite_id))?.title ?? prerequisite_id,
    })),
  );
  const content_sections = sections.filter(
    (section) =>
      section.kind !== "objective" &&
      section.kind !== "check" &&
      section.kind !== "closing",
  );
  const closing_section = sections.find((section) => section.kind === "closing");
  const outline_sections = [
    ...content_sections.map((section) => ({ id: section.id, title: section.heading })),
    { id: "comprobacion-interactiva", title: "Comprobación" },
    ...(closing_section ? [{ id: closing_section.id, title: "Cierre" }] : []),
  ];

  return (
    <article className="lesson-shell">
      {resolved_unit ? (
        <Link className="button-quiet" href={`/ruta/${lesson.area_id}`}>
          Volver a {resolved_unit.unit.title}
        </Link>
      ) : null}
      <header className="lesson-header">
        <Eyebrow>Lección · tema {lesson.source.code}</Eyebrow>
        <h1 className="lesson-title">{lesson.title}</h1>
        <div className="lesson-objective">
          <p className="lesson-objective__label">Al terminar podrás</p>
          <p>{lesson.objective}</p>
        </div>
        <div className="lesson-status-row">
          <p className="lesson-meta">
            {lesson.estimated_minutes} minutos · guía oficial, página{" "}
            {lesson.source.page}
          </p>
          <LessonCompletionStatus lesson_id={lesson.id} />
        </div>
        {lesson.prerequisites.length > 0 ? (
          <div className="lesson-prerequisite">
            <p className="text-sm font-semibold text-ink">Antes de continuar</p>
            <ul className="mt-2 space-y-2">
              {prerequisite_lessons.map((prerequisite) => (
                <li key={prerequisite.id}>
                  <Link
                    className="button-quiet text-sm"
                    href={`/leccion/${prerequisite.id}`}
                  >
                    Repasa {prerequisite.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      <div className="lesson-layout">
        <nav aria-label="contenido de la lección" className="lesson-outline">
          <p>En esta lección</p>
          <ol>
            {outline_sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="lesson-content">
          {content_sections.map((section) => (
            <LessonSection key={section.id} section={section} />
          ))}
          <LessonSession lesson_id={lesson.id} questions={questions}>
            {closing_section ? <LessonSection section={closing_section} /> : null}
          </LessonSession>
        </div>
      </div>
    </article>
  );
}
