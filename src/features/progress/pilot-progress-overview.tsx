import { get_pilot_curriculum } from "@/features/curriculum/pilot-curriculum";
import { get_pilot_lessons } from "@/features/lesson/pilot-lessons";
import { get_pilot_review_candidates } from "@/features/practice/pilot-review-candidates";

import { create_pilot_topic_progress_definitions } from "./pilot-progress";
import { PilotProgressSummary } from "./pilot-progress-summary";
import { PilotTopicProgressList } from "./pilot-topic-progress-list";

export async function PilotProgressOverview() {
  const { area, unit } = get_pilot_curriculum();
  const lessons = await get_pilot_lessons();
  const topics = create_pilot_topic_progress_definitions(unit, lessons);
  const review_candidates = await get_pilot_review_candidates();

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-teal-800">progreso</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {area.title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          revisa tus lecciones completadas, intentos y dominio en pensamiento
          estadístico.
        </p>
      </header>
      <PilotProgressSummary
        review_candidates={review_candidates}
        topic_definitions={topics}
      />
      <PilotTopicProgressList aria_label={`temas de ${unit.title}`} topics={topics} />
    </section>
  );
}
