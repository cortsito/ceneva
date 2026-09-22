import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { IndexItem, IndexList } from "@/components/ui/index-list";
import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

export const metadata = { title: "mi ruta" };

export default function RoutePage() {
  return (
    <section className="page-shell flex flex-col gap-10">
      <div className="space-y-4">
        <Eyebrow>Mi ruta</Eyebrow>
        <h1 className="page-heading">Una ruta de estudio, tema por tema.</h1>
        <p className="page-intro">
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
                className="button-primary sm:w-auto"
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
