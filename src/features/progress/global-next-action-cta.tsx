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
        <p className="text-sm font-medium text-accent">
          Dominaste todos los temas disponibles de las siete áreas.
        </p>
      ) : (
        <Link className="button-primary" href={next_action.href}>
          {next_action.label}
        </Link>
      )}
      {pending_review_count > 0 ? (
        <Link
          className="button-secondary border-warning bg-warning-soft text-warning"
          href="/practica"
        >
          Repasar {pending_review_count} pendiente
          {pending_review_count === 1 ? "" : "s"}
        </Link>
      ) : null}
    </div>
  );
}
