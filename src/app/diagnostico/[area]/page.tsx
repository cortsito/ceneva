import { notFound } from "next/navigation";

import { get_area_diagnostic } from "@/features/diagnostic/area-diagnostic";
import { DiagnosticView } from "@/features/diagnostic/diagnostic-view";
import { get_available_units_for_area } from "@/features/curriculum/available-curriculum";
import { get_area_topic_definitions } from "@/features/progress/global-topic-definitions";

type area_diagnostic_page_props = {
  params: Promise<{ area: string }>;
};

export const metadata = { title: "diagnóstico" };

export default async function AreaDiagnosticPage({
  params,
}: area_diagnostic_page_props) {
  const { area } = await params;
  const units = get_available_units_for_area(area);

  if (units.length === 0) {
    notFound();
  }

  const items = await get_area_diagnostic(area);
  const area_definitions = await get_area_topic_definitions(area);

  if (!items || !area_definitions) {
    notFound();
  }

  return (
    <DiagnosticView
      area_title={units[0].area.title}
      items={items}
      topic_definitions={area_definitions.topic_definitions}
    />
  );
}
