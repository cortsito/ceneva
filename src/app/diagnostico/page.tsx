import { get_pilot_curriculum } from "@/features/curriculum/pilot-curriculum";
import { get_pilot_diagnostic } from "@/features/diagnostic/pilot-diagnostic";
import { PilotDiagnosticView } from "@/features/diagnostic/pilot-diagnostic-view";
import { get_pilot_lessons } from "@/features/lesson/pilot-lessons";
import { create_pilot_topic_progress_definitions } from "@/features/progress/pilot-progress";

export const metadata = { title: "diagnóstico" };

export default async function DiagnosticPage() {
  const { unit } = get_pilot_curriculum();
  const lessons = await get_pilot_lessons();
  const topic_definitions = create_pilot_topic_progress_definitions(unit, lessons);
  const items = await get_pilot_diagnostic();

  return <PilotDiagnosticView items={items} topic_definitions={topic_definitions} />;
}
