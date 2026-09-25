import { Eyebrow } from "@/components/ui/eyebrow";
import { SimulatorSession } from "@/features/progress/simulator-session";

import type { simulator_coverage_item } from "./simulator-coverage";

type simulator_view_props = {
  items: simulator_coverage_item[];
};

export function SimulatorView({ items }: simulator_view_props) {
  return (
    <section className="assessment-shell flex flex-col gap-8">
      <header className="activity-header">
        <Eyebrow>Simulacro de cobertura MVP</Eyebrow>
        <h1 className="activity-title">Valida tu preparación en las siete áreas.</h1>
        <p className="activity-intro">
          Responde {items.length} preguntas, una por cada tema de las siete áreas
          disponibles, una a la vez. No verás si acertaste hasta terminar; al final
          tendrás un reporte agrupado por área y tema con enlace directo a cada lección.
        </p>
        <p className="activity-note">
          Esta cobertura MVP no es el examen oficial completo ni lo sustituye: cubre las
          unidades disponibles hoy, no la totalidad de reactivos del Acuerdo 286.
        </p>
      </header>
      <SimulatorSession items={items} />
    </section>
  );
}
