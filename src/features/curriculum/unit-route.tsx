import { Eyebrow } from "@/components/ui/eyebrow";
import { get_unit_lessons } from "@/features/lesson/unit-lessons";
import { create_pilot_topic_progress_definitions } from "@/features/progress/pilot-progress";
import { PilotTopicProgressList } from "@/features/progress/pilot-topic-progress-list";

import { get_available_unit } from "./available-curriculum";

type unit_route_props = {
  area_id: string;
  unit_id: string;
};

export async function UnitRoute({ area_id, unit_id }: unit_route_props) {
  const resolved = get_available_unit(area_id, unit_id);

  if (!resolved) {
    return null;
  }

  const { area, unit } = resolved;
  const lessons = await get_unit_lessons(area_id, unit_id);
  const topics = create_pilot_topic_progress_definitions(unit, lessons);

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="space-y-4">
        <Eyebrow>
          {area.title} · {unit.source.code}
        </Eyebrow>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {unit.title}
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-ink-muted">
          {topics.length} temas de la guía oficial para estudiar {unit.title}.
        </p>
      </header>

      <PilotTopicProgressList aria_label={`temas de ${unit.title}`} topics={topics} />
    </section>
  );
}
