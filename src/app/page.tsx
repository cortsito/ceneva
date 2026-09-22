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
    <section className="page-shell">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col items-start gap-7 lg:col-span-8 lg:pr-10">
          <div className="flex items-center gap-3">
            <Eyebrow>Acuerdo 286</Eyebrow>
            <span className="h-px w-10 bg-line" />
            <span className="text-[0.7rem] font-bold tracking-[0.14em] text-ink-subtle uppercase">
              Edición 01
            </span>
          </div>
          <div className="space-y-6">
            <h1 className="page-heading page-heading--display">
              Estudia con una ruta, no solo con un simulador.
            </h1>
            <p className="page-intro">
              Ceneva convierte la guía oficial en una preparación clara, medible y
              práctica para acreditar el bachillerato.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link className="button-primary" href="/onboarding">
              Comenzar mi preparación
            </Link>
            <Link className="button-secondary" href="/ruta">
              Explorar la ruta
            </Link>
          </div>
        </div>

        <aside className="surface-panel overflow-hidden lg:col-span-4">
          <div className="border-b border-line bg-accent-soft p-5 sm:p-6">
            <Eyebrow>Tu próxima acción</Eyebrow>
            <GlobalHomeGuidance areas={areas} review_candidates={review_candidates} />
          </div>
          <div className="grid grid-cols-2 divide-x divide-line border-b border-line">
            <div className="p-5">
              <p className="text-3xl font-extrabold tracking-tight text-ink">7</p>
              <p className="mt-1 text-xs font-semibold text-ink-muted">
                áreas de estudio
              </p>
            </div>
            <div className="p-5">
              <p className="text-3xl font-extrabold tracking-tight text-ink">185</p>
              <p className="mt-1 text-xs font-semibold text-ink-muted">
                reactivos explicados
              </p>
            </div>
          </div>
          <div className="p-5 sm:p-6">
            <Eyebrow>Lo que encontrarás</Eyebrow>
            <ol className="mt-3 divide-y divide-line">
              {study_promises.map((promise, index) => (
                <li className="grid grid-cols-[1.5rem_1fr] gap-3 py-3" key={promise}>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs font-bold text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-6 text-ink-muted">{promise}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
