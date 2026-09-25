import Link from "next/link";
import { notFound } from "next/navigation";

import { Eyebrow } from "@/components/ui/eyebrow";
import { IndexItem, IndexList } from "@/components/ui/index-list";
import { get_available_units_for_area } from "@/features/curriculum/available-curriculum";

type area_page_props = {
  params: Promise<{ area: string }>;
};

export default async function AreaPage({ params }: area_page_props) {
  const { area } = await params;
  const units = get_available_units_for_area(area);

  if (units.length === 0) {
    notFound();
  }

  const area_title = units[0].area.title;

  return (
    <section className="page-shell flex flex-col gap-10">
      <header className="index-page-header">
        <Eyebrow>{area_title}</Eyebrow>
        <h1 className="page-heading">Unidades listas de {area_title}.</h1>
        <p className="page-intro">
          Elige una unidad para ver sus temas y avanzar en tu ruta.
        </p>
      </header>
      <IndexList aria_label={`unidades de ${area_title}`}>
        {units.map((resolved, index) => (
          <IndexItem
            eyebrow={resolved.unit.source.code}
            index={index + 1}
            key={resolved.unit.id}
            title={resolved.unit.title}
          >
            <p className="max-w-xl leading-7 text-ink-muted">
              {resolved.unit.topics.length} temas de la guía oficial.
            </p>
            <Link
              className="button-primary sm:w-auto"
              href={`/ruta/${area}/${resolved.unit.id}`}
            >
              Explorar {resolved.unit.title}
            </Link>
          </IndexItem>
        ))}
      </IndexList>
    </section>
  );
}
