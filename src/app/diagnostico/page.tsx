import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { IndexItem, IndexList } from "@/components/ui/index-list";
import { get_available_units_for_area } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

export const metadata = { title: "diagnóstico" };

function get_ready_areas() {
  const seen = new Set<string>();
  const areas: { area_id: string; area_title: string; topic_count: number }[] = [];

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
      topic_count: units.reduce(
        (sum, resolved) => sum + resolved.unit.topics.length,
        0,
      ),
    });
  }

  return areas;
}

export default function DiagnosticSelectorPage() {
  const areas = get_ready_areas();

  return (
    <section className="page-shell flex max-w-5xl flex-col gap-10">
      <div className="space-y-4">
        <Eyebrow>Diagnóstico</Eyebrow>
        <h1 className="page-heading">Elige un área para empezar.</h1>
        <p className="page-intro">
          Cada diagnóstico usa una pregunta por cada tema listo del área elegida, así
          que su duración varía según cuánto contenido tenga esa área. No verás si
          acertaste hasta terminar, y al final tendrás una recomendación para esa área.
        </p>
      </div>
      <IndexList aria_label="áreas disponibles para diagnóstico">
        {areas.map((area, index) => (
          <IndexItem
            eyebrow="Área disponible"
            index={index + 1}
            key={area.area_id}
            title={area.area_title}
          >
            <p className="max-w-xl leading-7 text-ink-muted">
              {area.topic_count} preguntas, una por cada tema de {area.area_title}.
            </p>
            <Link
              className="button-primary sm:w-auto"
              href={`/diagnostico/${area.area_id}`}
            >
              Empezar diagnóstico de {area.area_title}
            </Link>
          </IndexItem>
        ))}
      </IndexList>
    </section>
  );
}
