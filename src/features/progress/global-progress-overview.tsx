import { get_pilot_review_candidates } from "@/features/practice/pilot-review-candidates";

import { AreaProgressBlocks } from "./area-progress-blocks";
import { GlobalProgressSummary } from "./global-progress-summary";
import { get_global_topic_definitions } from "./global-topic-definitions";

export async function GlobalProgressOverview() {
  const areas = await get_global_topic_definitions();
  const review_candidates = await get_pilot_review_candidates();

  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-teal-800">progreso</p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          tu avance en las siete áreas
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          revisa tus temas dominados, lecciones completadas y precisión por área.
        </p>
      </header>
      <GlobalProgressSummary areas={areas} review_candidates={review_candidates} />
      <AreaProgressBlocks areas={areas} />
    </section>
  );
}
