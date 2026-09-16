"use client";

import { PilotSimulatorCheck } from "@/features/simulator/pilot-simulator-check";
import type { pilot_simulator_item } from "@/features/simulator/pilot-simulator";

import { usePilotProgress } from "./use-pilot-progress";

type pilot_simulator_session_props = {
  items: pilot_simulator_item[];
};

export function PilotSimulatorSession({ items }: pilot_simulator_session_props) {
  const { is_hydrated, record_simulator_answer } = usePilotProgress();

  return (
    <div>
      {!is_hydrated ? (
        <p className="mt-6 text-sm text-slate-600" role="status">
          cargando tu avance local.
        </p>
      ) : null}
      <PilotSimulatorCheck
        is_ready={is_hydrated}
        items={items}
        on_submit_answer={record_simulator_answer}
      />
    </div>
  );
}
