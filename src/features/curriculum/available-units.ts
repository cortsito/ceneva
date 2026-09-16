import type { curriculum_area } from "@content/curriculum/types";
import { cultura_digital } from "@content/curriculum/cultura-digital";
import { pensamiento_matematico } from "@content/curriculum/pensamiento-matematico";
import { cultura_digital_questions } from "@content/questions/cultura-digital";
import { pensamiento_matematico_questions } from "@content/questions/pensamiento-matematico";
import type { question } from "@content/questions/types";

export type available_unit = {
  area_id: string;
  unit_id: string;
  area: curriculum_area;
  questions: question[];
};

export const available_units: available_unit[] = [
  {
    area_id: "pensamiento-matematico",
    unit_id: "pm-1-1-pensamiento-estadistico",
    area: pensamiento_matematico,
    questions: pensamiento_matematico_questions,
  },
  {
    area_id: "cultura-digital",
    unit_id: "cd-2-1-ciudadania-digital",
    area: cultura_digital,
    questions: cultura_digital_questions,
  },
];
