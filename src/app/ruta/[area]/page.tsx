import { notFound } from "next/navigation";

import { PilotUnit } from "@/features/curriculum/pilot-unit";
import { pilot_area_id } from "@/features/curriculum/pilot-curriculum";

type area_page_props = {
  params: Promise<{ area: string }>;
};

export default async function AreaPage({ params }: area_page_props) {
  const { area } = await params;

  if (area !== pilot_area_id) {
    notFound();
  }

  return <PilotUnit />;
}
