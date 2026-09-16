import { notFound } from "next/navigation";

import { get_available_unit_for_area } from "@/features/curriculum/available-curriculum";
import { UnitRoute } from "@/features/curriculum/unit-route";

type area_page_props = {
  params: Promise<{ area: string }>;
};

export default async function AreaPage({ params }: area_page_props) {
  const { area } = await params;
  const resolved = get_available_unit_for_area(area);

  if (!resolved) {
    notFound();
  }

  return <UnitRoute area_id={area} unit_id={resolved.unit.id} />;
}
