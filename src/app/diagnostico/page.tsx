import Link from "next/link";

import { get_available_unit } from "@/features/curriculum/available-curriculum";
import { available_units } from "@/features/curriculum/available-units";

export const metadata = { title: "diagnóstico" };

export default function DiagnosticSelectorPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-teal-800">diagnóstico</p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          elige un área para empezar.
        </h1>
        <p className="max-w-2xl text-lg leading-8 text-slate-600">
          cada diagnóstico es breve: una pregunta por cada tema del área elegida. no
          verás si acertaste hasta terminar, y al final tendrás una recomendación para
          esa área.
        </p>
      </div>
      {available_units.map((entry) => {
        const resolved = get_available_unit(entry.area_id, entry.unit_id);

        if (!resolved) {
          return null;
        }

        const { area, unit } = resolved;

        return (
          <article
            className="flex flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            key={entry.area_id}
          >
            <div className="space-y-2">
              <p className="text-sm font-semibold text-teal-800">área disponible</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                {area.title}
              </h2>
              <p className="max-w-xl leading-7 text-slate-600">
                {unit.topics.length} preguntas, una por cada tema de {unit.title}.
              </p>
            </div>
            <Link
              className="rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              href={`/diagnostico/${entry.area_id}`}
            >
              empezar diagnóstico de {area.title}
            </Link>
          </article>
        );
      })}
    </section>
  );
}
