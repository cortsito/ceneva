import { PilotSimulatorSession } from "@/features/progress/pilot-simulator-session";

import type { pilot_simulator_item } from "./pilot-simulator";

type pilot_simulator_view_props = {
  items: pilot_simulator_item[];
};

export function PilotSimulatorView({ items }: pilot_simulator_view_props) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header>
        <p className="text-sm font-semibold tracking-wide text-teal-800">simulacro</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          valida tu preparación.
        </h1>
        <p className="mt-4 leading-7 text-slate-700">
          responde las veinte preguntas de pensamiento matemático, una a la vez. no
          verás si acertaste hasta terminar; al final tendrás un reporte por tema con
          enlace directo a cada lección.
        </p>
      </header>
      <PilotSimulatorSession items={items} />
    </section>
  );
}
