import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { IndexItem, IndexList } from "@/components/ui/index-list";
import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

export const metadata = { title: "diagnóstico" };

export default function DiagnosticSelectorPage() {
  return (
    <section className="page-shell flex max-w-5xl flex-col gap-10">
      <div className="space-y-4">
        <Eyebrow>Diagnóstico</Eyebrow>
        <h1 className="page-heading">Elige un área para empezar.</h1>
        <p className="page-intro">
          Cada diagnóstico es breve: una pregunta por cada tema del área elegida. No
          verás si acertaste hasta terminar, y al final tendrás una recomendación para
          esa área.
        </p>
      </div>
      <IndexList aria_label="áreas disponibles para diagnóstico">
        {available_units.map((entry, index) => {
          const resolved = get_available_unit(entry.area_id, entry.unit_id);

          if (!resolved) {
            return null;
          }

          const { area, unit } = resolved;

          return (
            <IndexItem
              eyebrow="Área disponible"
              index={index + 1}
              key={entry.area_id}
              title={area.title}
            >
              <p className="max-w-xl leading-7 text-ink-muted">
                {unit.topics.length} preguntas, una por cada tema de {unit.title}.
              </p>
              <Link
                className="button-primary sm:w-auto"
                href={`/diagnostico/${entry.area_id}`}
              >
                Empezar diagnóstico de {area.title}
              </Link>
            </IndexItem>
          );
        })}
      </IndexList>
    </section>
  );
}
