import { PagePlaceholder } from "@/components/ui/page-placeholder";

type area_page_props = {
  params: Promise<{ area: string }>;
};

export default async function AreaPage({ params }: area_page_props) {
  const { area } = await params;
  const area_name = area.replaceAll("-", " ");

  return (
    <PagePlaceholder
      description={`la ruta de ${area_name} se conectará con sus unidades, temas, lecciones y progreso local.`}
      eyebrow="mi ruta"
      title="área de estudio"
    />
  );
}
