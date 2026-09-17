import type { curriculum_area } from "@content/curriculum/types";
import { conciencia_historica } from "@content/curriculum/conciencia-historica";
import { cultura_digital } from "@content/curriculum/cultura-digital";
import { humanidades } from "@content/curriculum/humanidades";
import { pensamiento_matematico } from "@content/curriculum/pensamiento-matematico";
import { conciencia_historica_questions } from "@content/questions/conciencia-historica";
import { cultura_digital_questions } from "@content/questions/cultura-digital";
import { humanidades_questions } from "@content/questions/humanidades";
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
  {
    area_id: "conciencia-historica",
    unit_id: "ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
    area: conciencia_historica,
    questions: conciencia_historica_questions,
  },
  {
    area_id: "humanidades",
    unit_id: "hu-4-1-fundamentos-del-pensamiento-filosofico",
    area: humanidades,
    questions: humanidades_questions,
  },
];
