import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { TopicPracticeSession } from "@/features/progress/topic-practice-session";

import type { topic_content } from "./unit-topic-content";

type topic_practice_view_props = {
  content: topic_content;
};

export function TopicPracticeView({ content }: topic_practice_view_props) {
  return (
    <section className="reading-shell flex flex-col gap-8">
      <header>
        <Eyebrow>Práctica por tema · {content.topic.code}</Eyebrow>
        <h1 className="page-heading mt-3">{content.topic.title}</h1>
        <p className="page-intro mt-4">
          Responde las {content.questions.length} preguntas de este tema, una a la vez.
          Cada confirmación cuenta como un intento.
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {content.lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link className="button-quiet" href={`/leccion/${lesson.id}`}>
                Repasar {lesson.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <TopicPracticeSession lessons={content.lessons} questions={content.questions} />
    </section>
  );
}
