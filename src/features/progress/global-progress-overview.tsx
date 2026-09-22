import { Eyebrow } from "@/components/ui/eyebrow";
import { get_pilot_review_candidates } from "@/features/practice/pilot-review-candidates";

import { AreaProgressBlocks } from "./area-progress-blocks";
import { GlobalProgressSummary } from "./global-progress-summary";
import { get_global_topic_definitions } from "./global-topic-definitions";

export async function GlobalProgressOverview() {
  const areas = await get_global_topic_definitions();
  const review_candidates = await get_pilot_review_candidates();

  return (
    <section className="page-shell flex max-w-5xl flex-col gap-10">
      <header className="space-y-4">
        <Eyebrow>Progreso</Eyebrow>
        <h1 className="page-heading">Tu avance en las siete áreas</h1>
        <p className="page-intro">
          Revisa tus temas dominados, lecciones completadas y precisión por área.
        </p>
      </header>
      <GlobalProgressSummary areas={areas} review_candidates={review_candidates} />
      <AreaProgressBlocks areas={areas} />
    </section>
  );
}
