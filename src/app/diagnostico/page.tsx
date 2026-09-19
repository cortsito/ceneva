import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { IndexItem, IndexList } from "@/components/ui/index-list";
import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

export const metadata = { title: "diagnóstico" };

export default function DiagnosticSelectorPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="space-y-4">
        <Eyebrow>Diagnóstico</Eyebrow>
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Elige un área para empezar.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-ink-muted">
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
                className="inline-block w-fit rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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
