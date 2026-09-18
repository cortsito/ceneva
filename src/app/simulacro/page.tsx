import { get_simulator_coverage } from "@/features/simulator/simulator-coverage";
import { SimulatorView } from "@/features/simulator/simulator-view";

export const metadata = { title: "simulacro" };

export default async function SimulatorPage() {
  const items = await get_simulator_coverage();

  return <SimulatorView items={items} />;
}
