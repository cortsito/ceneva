import { get_pilot_review_candidates } from "@/features/practice/pilot-review-candidates";
import { PilotReviewQueue } from "@/features/progress/pilot-review-queue";

export const metadata = { title: "práctica" };

export default async function PracticePage() {
  const candidates = await get_pilot_review_candidates();

  return <PilotReviewQueue candidates={candidates} />;
}
