import { get_pilot_lessons } from "@/features/lesson/pilot-lessons";
import { create_pilot_topic_progress_definitions } from "@/features/progress/pilot-progress";
import { PilotTopicProgressList } from "@/features/progress/pilot-topic-progress-list";

import { get_pilot_curriculum } from "./pilot-curriculum";

export async function PilotUnit() {
  const { area, unit } = get_pilot_curriculum();
  const lessons = await get_pilot_lessons();
  const topics = create_pilot_topic_progress_definitions(unit, lessons);

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-teal-800">
          {area.title} · {unit.source.code}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {unit.title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          cuatro temas para interpretar datos, seleccionar muestras y resumir su
          comportamiento.
        </p>
      </header>

      <PilotTopicProgressList topics={topics} />
    </section>
  );
}
