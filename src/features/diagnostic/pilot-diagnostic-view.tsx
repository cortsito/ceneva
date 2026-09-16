import { PilotDiagnosticSession } from "@/features/progress/pilot-diagnostic-session";
import type { pilot_topic_progress_definition } from "@/features/progress/pilot-progress";

import type { pilot_diagnostic_item } from "./pilot-diagnostic";

type pilot_diagnostic_view_props = {
  items: pilot_diagnostic_item[];
  topic_definitions: pilot_topic_progress_definition[];
};

export function PilotDiagnosticView({
  items,
  topic_definitions,
}: pilot_diagnostic_view_props) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header>
        <p className="text-sm font-semibold tracking-wide text-teal-800">diagnóstico</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          identifica qué estudiar primero.
        </h1>
        <p className="mt-4 leading-7 text-slate-700">
          responde cuatro preguntas, una por cada tema de pensamiento matemático. no
          verás si acertaste hasta terminar; al final tendrás una recomendación para
          empezar.
        </p>
      </header>
      <PilotDiagnosticSession items={items} topic_definitions={topic_definitions} />
    </section>
  );
}
