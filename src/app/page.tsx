import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { get_pilot_review_candidates } from "@/features/practice/pilot-review-candidates";
import { GlobalHomeGuidance } from "@/features/progress/global-home-guidance";
import { get_global_topic_definitions } from "@/features/progress/global-topic-definitions";

const study_promises = [
  "Una ruta clara a partir de la guía oficial.",
  "Lecciones breves con práctica y explicación.",
  "Progreso que indica qué estudiar después.",
];

export default async function HomePage() {
  const areas = await get_global_topic_definitions();
  const review_candidates = await get_pilot_review_candidates();

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-16 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:gap-x-10 lg:px-8">
      <div className="flex flex-col items-start gap-7 lg:col-span-7">
        <Eyebrow>Acuerdo 286</Eyebrow>
        <div className="space-y-5">
          <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            Estudia con una ruta, no solo con un simulador.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-ink-muted">
            Ceneva convierte la guía oficial en una preparación clara, medible y
            práctica para acreditar el bachillerato.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-md bg-accent px-5 py-3 text-center text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            href="/onboarding"
          >
            Comenzar mi preparación
          </Link>
          <Link
            className="rounded-md border border-line px-5 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-accent hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            href="/ruta"
          >
            Explorar la ruta
          </Link>
        </div>
        <div className="w-full border-t border-line pt-6">
          <p className="text-sm font-semibold text-ink">Tu próxima acción</p>
          <GlobalHomeGuidance areas={areas} review_candidates={review_candidates} />
        </div>
      </div>
      <aside className="lg:col-span-5">
        <Eyebrow>Lo que encontrarás</Eyebrow>
        <ol className="mt-5 divide-y divide-line border-t border-line">
          {study_promises.map((promise, index) => (
            <li className="flex gap-4 py-5" key={promise}>
              <span
                aria-hidden="true"
                className="font-display text-lg text-ink-muted/70"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="leading-7 text-ink-muted">{promise}</span>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}
