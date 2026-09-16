"use client";

import { PilotDiagnosticCheck } from "@/features/diagnostic/pilot-diagnostic-check";
import type { pilot_diagnostic_item } from "@/features/diagnostic/pilot-diagnostic";

import {
  calculate_topic_progress,
  type pilot_topic_progress_definition,
} from "./pilot-progress";
import { usePilotProgress } from "./use-pilot-progress";

type pilot_diagnostic_session_props = {
  items: pilot_diagnostic_item[];
  topic_definitions: pilot_topic_progress_definition[];
};

export function PilotDiagnosticSession({
  items,
  topic_definitions,
}: pilot_diagnostic_session_props) {
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
      <PilotDiagnosticCheck
        is_ready={is_hydrated}
        items={items}
        on_submit_answer={record_diagnostic_answer}
        topics={topics}
      />
    </div>
  );
}
