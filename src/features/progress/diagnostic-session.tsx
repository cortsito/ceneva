"use client";

import { DiagnosticCheck } from "@/features/diagnostic/diagnostic-check";
import type { area_diagnostic_item } from "@/features/diagnostic/area-diagnostic";

import {
  calculate_topic_progress,
  type pilot_topic_progress_definition,
} from "./pilot-progress";
import { usePilotProgress } from "./use-pilot-progress";

type diagnostic_session_props = {
  items: area_diagnostic_item[];
  topic_definitions: pilot_topic_progress_definition[];
};

export function DiagnosticSession({
  items,
  topic_definitions,
}: diagnostic_session_props) {
  const { progress, is_hydrated, record_diagnostic_answer } = usePilotProgress();
  const topics = topic_definitions.map((definition) =>
    calculate_topic_progress(definition, progress),
  );

  return (
    <div>
      {!is_hydrated ? (
        <p className="mt-6 text-sm text-slate-600" role="status">
          cargando tu avance local.
        </p>
      ) : null}
      <DiagnosticCheck
        is_ready={is_hydrated}
        items={items}
        on_submit_answer={record_diagnostic_answer}
        topics={topics}
      />
    </div>
  );
}
