import Link from "next/link";

import { TopicPracticeSession } from "@/features/progress/topic-practice-session";

import type { topic_content } from "./unit-topic-content";

type topic_practice_view_props = {
  content: topic_content;
};

export function TopicPracticeView({ content }: topic_practice_view_props) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header>
        <p className="text-sm font-semibold tracking-wide text-teal-800">
          práctica por tema · {content.topic.code}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {content.topic.title}
        </h1>
        <p className="mt-4 leading-7 text-slate-700">
          responde las {content.questions.length} preguntas de este tema, una a la vez.
          cada confirmación cuenta como un intento.
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {content.lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                className="inline-block text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                href={`/leccion/${lesson.id}`}
              >
                repasar {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <TopicPracticeSession lessons={content.lessons} questions={content.questions} />
    </section>
  );
}
