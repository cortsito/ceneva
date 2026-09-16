import { pilot_area_id, pilot_unit_id } from "@/features/curriculum/pilot-curriculum";

import {
  get_unit_topic_practice,
  type unit_topic_practice,
} from "./unit-topic-content";

export type pilot_topic_practice = unit_topic_practice;

export async function get_pilot_topic_practice(
  topic_id: string,
): Promise<pilot_topic_practice | undefined> {
  return get_unit_topic_practice(pilot_area_id, pilot_unit_id, topic_id);
}
