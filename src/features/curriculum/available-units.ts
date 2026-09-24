import type { curriculum_area } from "@content/curriculum/types";
import { ciencias_naturales_experimentales_y_tecnologia } from "@content/curriculum/ciencias-naturales-experimentales-y-tecnologia";
import { ciencias_sociales } from "@content/curriculum/ciencias-sociales";
import { conciencia_historica } from "@content/curriculum/conciencia-historica";
import { cultura_digital } from "@content/curriculum/cultura-digital";
import { humanidades } from "@content/curriculum/humanidades";
import { lengua_y_comunicacion } from "@content/curriculum/lengua-y-comunicacion";
import { pensamiento_matematico } from "@content/curriculum/pensamiento-matematico";
import { ciencias_naturales_experimentales_y_tecnologia_questions } from "@content/questions/ciencias-naturales-experimentales-y-tecnologia";
import { ciencias_sociales_questions } from "@content/questions/ciencias-sociales";
import { conciencia_historica_questions } from "@content/questions/conciencia-historica";
import { cultura_digital_questions } from "@content/questions/cultura-digital";
import { humanidades_questions } from "@content/questions/humanidades";
import { lengua_y_comunicacion_questions } from "@content/questions/lengua-y-comunicacion";
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
    area_id: "pensamiento-matematico",
    unit_id: "pm-1-2-pensamiento-probabilistico",
    area: pensamiento_matematico,
    questions: pensamiento_matematico_questions,
  },
  {
    area_id: "pensamiento-matematico",
    unit_id: "pm-1-3-pensamiento-algebraico",
    area: pensamiento_matematico,
    questions: pensamiento_matematico_questions,
  },
  {
    area_id: "pensamiento-matematico",
    unit_id: "pm-1-4-pensamiento-aritmetico",
    area: pensamiento_matematico,
    questions: pensamiento_matematico_questions,
  },
  {
    area_id: "pensamiento-matematico",
    unit_id: "pm-1-5-pensamiento-geometrico",
    area: pensamiento_matematico,
    questions: pensamiento_matematico_questions,
  },
  {
    area_id: "pensamiento-matematico",
    unit_id: "pm-1-6-pensamiento-variacional",
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
    area_id: "cultura-digital",
    unit_id: "cd-2-2-comunicacion-y-colaboracion-digital",
    area: cultura_digital,
    questions: cultura_digital_questions,
  },
  {
    area_id: "cultura-digital",
    unit_id: "cd-2-3-creatividad-digital",
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
  {
    area_id: "ciencias-naturales-experimentales-y-tecnologia",
    unit_id: "cn-5-1-materia-y-sus-interacciones",
    area: ciencias_naturales_experimentales_y_tecnologia,
    questions: ciencias_naturales_experimentales_y_tecnologia_questions,
  },
  {
    area_id: "lengua-y-comunicacion",
    unit_id: "lc-6-1-estrategias-de-comprension-lectora",
    area: lengua_y_comunicacion,
    questions: lengua_y_comunicacion_questions,
  },
  {
    area_id: "ciencias-sociales",
    unit_id: "cs-7-1-organizacion-economica",
    area: ciencias_sociales,
    questions: ciencias_sociales_questions,
  },
];
