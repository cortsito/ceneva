import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { IndexItem, IndexList } from "@/components/ui/index-list";
import { get_available_units_for_area } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

export const metadata = { title: "mi ruta" };

function get_ready_areas() {
  const seen = new Set<string>();
  const areas: { area_id: string; area_title: string; ready_unit_count: number }[] = [];

  for (const entry of available_units) {
    if (seen.has(entry.area_id)) {
      continue;
    }

    seen.add(entry.area_id);

    const units = get_available_units_for_area(entry.area_id);

    if (units.length === 0) {
      continue;
    }

    areas.push({
      area_id: entry.area_id,
      area_title: units[0].area.title,
      ready_unit_count: units.length,
    });
  }

  return areas;
}

function format_unit_count(count: number): string {
  return count === 1 ? "1 unidad lista" : `${count} unidades listas`;
}

export default function RoutePage() {
  const areas = get_ready_areas();

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
        {areas.map((area, index) => (
          <IndexItem
            eyebrow="Área disponible"
            index={index + 1}
            key={area.area_id}
            title={area.area_title}
          >
            <p className="max-w-xl leading-7 text-ink-muted">
              {format_unit_count(area.ready_unit_count)} de la guía oficial.
            </p>
            <Link className="button-primary sm:w-auto" href={`/ruta/${area.area_id}`}>
              Explorar {area.area_title}
            </Link>
          </IndexItem>
        ))}
      </IndexList>
    </section>
  );
}
