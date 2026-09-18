import Link from "next/link";

import { get_pilot_review_candidates } from "@/features/practice/pilot-review-candidates";
import { GlobalHomeGuidance } from "@/features/progress/global-home-guidance";
import { get_global_topic_definitions } from "@/features/progress/global-topic-definitions";

const study_promises = [
  "una ruta clara a partir de la guía oficial.",
  "lecciones breves con práctica y explicación.",
  "progreso que indica qué estudiar después.",
];

export default async function HomePage() {
  const areas = await get_global_topic_definitions();
  const review_candidates = await get_pilot_review_candidates();

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
      <div className="flex flex-col items-start gap-7">
        <p className="text-sm font-semibold tracking-wide text-teal-800">acuerdo 286</p>
        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            estudia con una ruta, no solo con un simulador.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            ceneva convierte la guía oficial en una preparación clara, medible y
            práctica para acreditar el bachillerato.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            className="rounded-md bg-teal-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            href="/onboarding"
          >
            comenzar mi preparación
          </Link>
          <Link
            className="rounded-md border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            href="/ruta"
          >
            explorar la ruta
          </Link>
        </div>
        <div className="w-full border-t border-slate-200 pt-6">
          <p className="text-sm font-semibold text-slate-950">tu próxima acción</p>
          <GlobalHomeGuidance areas={areas} review_candidates={review_candidates} />
        </div>
      </div>
      <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold text-slate-950">lo que encontrarás</p>
        <ul className="mt-5 space-y-4">
          {study_promises.map((promise) => (
            <li className="flex gap-3 text-slate-600" key={promise}>
              <span
                aria-hidden="true"
                className="mt-2 size-2 shrink-0 rounded-full bg-teal-600"
              />
              <span>{promise}</span>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
