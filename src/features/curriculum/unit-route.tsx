import Link from "next/link";

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
    <section className="page-shell flex max-w-5xl flex-col gap-10">
      <header className="space-y-4">
        <Link
          className="text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-strong"
          href={`/ruta/${area_id}`}
        >
          Volver a las unidades de {area.title}
        </Link>
        <Eyebrow>
          {area.title} · {unit.source.code}
        </Eyebrow>
        <h1 className="page-heading">{unit.title}</h1>
        <p className="page-intro">
          {topics.length} temas de la guía oficial para estudiar {unit.title}.
        </p>
      </header>

      <PilotTopicProgressList aria_label={`temas de ${unit.title}`} topics={topics} />
    </section>
  );
}
