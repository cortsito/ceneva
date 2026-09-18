"use client";

import { SimulatorCheck } from "@/features/simulator/simulator-check";
import type { simulator_coverage_item } from "@/features/simulator/simulator-coverage";

import { usePilotProgress } from "./use-pilot-progress";

type simulator_session_props = {
  items: simulator_coverage_item[];
};

export function SimulatorSession({ items }: simulator_session_props) {
  const { is_hydrated, record_simulator_answer } = usePilotProgress();

  return (
    <div>
      {!is_hydrated ? (
        <p className="mt-6 text-sm text-slate-600" role="status">
          cargando tu avance local.
        </p>
      ) : null}
      <SimulatorCheck
        is_ready={is_hydrated}
        items={items}
        on_submit_answer={record_simulator_answer}
      />
    </div>
  );
}
