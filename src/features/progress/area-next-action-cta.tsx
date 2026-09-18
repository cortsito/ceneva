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
      <p className="text-sm font-medium text-teal-900">
        dominaste todos los temas disponibles de {area_title}.
      </p>
    );
  }

  return (
    <Link
      className="w-fit rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      href={next_action.href}
    >
      {next_action.label}
    </Link>
  );
}
