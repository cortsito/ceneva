import Link from "next/link";

import type { pilot_next_action } from "./pilot-summary";

type area_next_action_cta_props = {
  area_title: string;
  next_action: pilot_next_action;
};

export function AreaNextActionCta({
  area_title,
  next_action,
}: area_next_action_cta_props) {
  if (next_action.kind === "completed") {
    return (
      <p className="text-sm font-medium text-accent">
        Dominaste todos los temas disponibles de {area_title}.
      </p>
    );
  }

  return (
    <Link className="button-primary w-fit py-2" href={next_action.href}>
      {next_action.label}
    </Link>
  );
}
