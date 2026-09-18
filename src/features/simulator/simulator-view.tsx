import { SimulatorSession } from "@/features/progress/simulator-session";

import type { simulator_coverage_item } from "./simulator-coverage";

type simulator_view_props = {
  items: simulator_coverage_item[];
};

export function SimulatorView({ items }: simulator_view_props) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header>
        <p className="text-sm font-semibold tracking-wide text-teal-800">
          simulacro de cobertura mvp
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          valida tu preparación en las siete áreas.
        </h1>
        <p className="mt-4 leading-7 text-slate-700">
          responde {items.length} preguntas, una por cada tema de las siete áreas
          disponibles, una a la vez. no verás si acertaste hasta terminar; al final
          tendrás un reporte agrupado por área y tema con enlace directo a cada lección.
        </p>
        <p className="mt-4 leading-7 text-slate-700">
          esta cobertura mvp no es el examen oficial completo ni lo sustituye: cubre las
          unidades disponibles hoy, no la totalidad de reactivos del acuerdo 286.
        </p>
      </header>
      <SimulatorSession items={items} />
    </section>
  );
}
