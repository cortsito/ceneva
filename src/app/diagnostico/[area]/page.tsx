import { notFound } from "next/navigation";

import { get_area_diagnostic } from "@/features/diagnostic/area-diagnostic";
import { DiagnosticView } from "@/features/diagnostic/diagnostic-view";
import { get_available_unit_for_area } from "@/features/curriculum/available-curriculum";
import { get_unit_lessons } from "@/features/lesson/unit-lessons";
import { create_pilot_topic_progress_definitions } from "@/features/progress/pilot-progress";

type area_diagnostic_page_props = {
  params: Promise<{ area: string }>;
};

export const metadata = { title: "diagnóstico" };

export default async function AreaDiagnosticPage({
  params,
}: area_diagnostic_page_props) {
  const { area } = await params;
  const resolved = get_available_unit_for_area(area);

  if (!resolved) {
    notFound();
  }

  const items = await get_area_diagnostic(area);

  if (!items) {
    notFound();
  }

  const lessons = await get_unit_lessons(area, resolved.unit.id);
  const topic_definitions = create_pilot_topic_progress_definitions(
    resolved.unit,
    lessons,
  );

  return (
    <DiagnosticView
      area_title={resolved.area.title}
      items={items}
      topic_definitions={topic_definitions}
    />
  );
}
