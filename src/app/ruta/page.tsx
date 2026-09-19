import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { IndexItem, IndexList } from "@/components/ui/index-list";
import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

export const metadata = { title: "mi ruta" };

export default function RoutePage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="space-y-4">
        <Eyebrow>Mi ruta</Eyebrow>
        <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Una ruta de estudio, tema por tema.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-ink-muted">
          Estas áreas ya tienen contenido listo. Las demás se habilitarán conforme
          tengan su contenido completo.
        </p>
      </div>
      <IndexList aria_label="áreas de estudio disponibles">
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
                Estudia {unit.title} mediante sus lecciones de la guía oficial.
              </p>
              <Link
                className="inline-block w-fit rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                href={`/ruta/${entry.area_id}`}
              >
                Explorar {area.title}
              </Link>
            </IndexItem>
          );
        })}
      </IndexList>
    </section>
  );
}
