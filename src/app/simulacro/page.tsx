import {
  flatten_pilot_simulator_groups,
  get_pilot_simulator,
} from "@/features/simulator/pilot-simulator";
import { PilotSimulatorView } from "@/features/simulator/pilot-simulator-view";

export const metadata = { title: "simulacros" };

export default async function SimulatorPage() {
  const groups = await get_pilot_simulator();
  const items = flatten_pilot_simulator_groups(groups);

  return <PilotSimulatorView items={items} />;
}
