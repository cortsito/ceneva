import { notFound } from "next/navigation";

import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { UnitRoute } from "@/features/curriculum/unit-route";

type unit_page_props = {
  params: Promise<{ area: string; unit: string }>;
};

export default async function AreaUnitPage({ params }: unit_page_props) {
  const { area, unit } = await params;
  const resolved = get_available_unit(area, unit);

  if (!resolved) {
    notFound();
  }

  return <UnitRoute area_id={area} unit_id={unit} />;
}
