import Link from "next/link";

import type { global_next_action } from "./global-progress";

type global_next_action_cta_props = {
  next_action: global_next_action;
  pending_review_count: number;
};

export function GlobalNextActionCta({
  next_action,
  pending_review_count,
}: global_next_action_cta_props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {next_action.kind === "completed" ? (
        <p className="text-sm font-medium text-teal-900">
          dominaste todos los temas disponibles de las siete áreas.
        </p>
      ) : (
        <Link
          className="rounded-md bg-teal-700 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          href={next_action.href}
        >
          {next_action.label}
        </Link>
      )}
      {pending_review_count > 0 ? (
        <Link
          className="rounded-md border border-amber-300 bg-amber-50 px-5 py-3 text-center text-sm font-semibold text-amber-900 transition-colors hover:border-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          href="/practica"
        >
          repasar {pending_review_count} pendiente
          {pending_review_count === 1 ? "" : "s"}
        </Link>
      ) : null}
    </div>
  );
}
