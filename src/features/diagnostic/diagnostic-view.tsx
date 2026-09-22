import { Eyebrow } from "@/components/ui/eyebrow";
import { DiagnosticSession } from "@/features/progress/diagnostic-session";
import type { pilot_topic_progress_definition } from "@/features/progress/pilot-progress";

import type { area_diagnostic_item } from "./area-diagnostic";

type diagnostic_view_props = {
  area_title: string;
  items: area_diagnostic_item[];
  topic_definitions: pilot_topic_progress_definition[];
};

export function DiagnosticView({
  area_title,
  items,
  topic_definitions,
}: diagnostic_view_props) {
  return (
    <section className="reading-shell flex flex-col gap-8">
      <header>
        <Eyebrow>Diagnóstico</Eyebrow>
        <h1 className="page-heading mt-3">
          Identifica qué estudiar primero en {area_title}.
        </h1>
        <p className="page-intro mt-4">
          Responde {items.length} preguntas, una por cada tema de {area_title}. No verás
          si acertaste hasta terminar; al final tendrás una recomendación para empezar.
        </p>
      </header>
      <DiagnosticSession items={items} topic_definitions={topic_definitions} />
    </section>
  );
}
