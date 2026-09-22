import type { question } from "@content/questions/types";

import type { simulator_coverage_item } from "./simulator-coverage";

export type simulator_answer = {
  question_id: string;
  selected_option_index: number;
  is_correct: boolean;
};

export type simulator_incorrect_item = {
  question: question;
  selected_option_index: number;
};

export type simulator_result_item = simulator_incorrect_item & {
  is_correct: boolean;
};

export type simulator_topic_report = {
  topic: { id: string; title: string; code: string };
  lesson: { id: string; title: string };
  correct_count: number;
  total_count: number;
  accuracy: number;
  result_items: simulator_result_item[];
  incorrect_items: simulator_incorrect_item[];
};

export type simulator_area_report = {
  area: { id: string; title: string };
  correct_count: number;
  total_count: number;
  accuracy: number;
  topics: simulator_topic_report[];
};

export type simulator_coverage_report = {
  correct_count: number;
  total_count: number;
  areas: simulator_area_report[];
};

export function calculate_simulator_coverage_report(
  items: simulator_coverage_item[],
  answers: Record<string, simulator_answer>,
): simulator_coverage_report {
  const areas: simulator_area_report[] = [];
  const area_index_by_id = new Map<string, number>();

  items.forEach((item) => {
    const answer = answers[item.question.id];
    const is_correct = answer?.is_correct === true;
    let area_index = area_index_by_id.get(item.area.id);

    if (area_index === undefined) {
      area_index = areas.length;
      area_index_by_id.set(item.area.id, area_index);
      areas.push({
        area: item.area,
        correct_count: 0,
        total_count: 0,
        accuracy: 0,
        topics: [],
      });
    }

    const area_report = areas[area_index];

    area_report.topics.push({
      topic: item.topic,
      lesson: item.lesson,
      correct_count: is_correct ? 1 : 0,
      total_count: 1,
      accuracy: is_correct ? 1 : 0,
      result_items: answer
        ? [
            {
              question: item.question,
              selected_option_index: answer.selected_option_index,
              is_correct,
            },
          ]
        : [],
      incorrect_items:
        !is_correct && answer
          ? [
              {
                question: item.question,
                selected_option_index: answer.selected_option_index,
              },
            ]
          : [],
    });

    area_report.total_count += 1;

    if (is_correct) {
      area_report.correct_count += 1;
    }
  });

  areas.forEach((area_report) => {
    area_report.accuracy =
      area_report.total_count > 0
        ? area_report.correct_count / area_report.total_count
        : 0;
  });

  const correct_count = areas.reduce((sum, area) => sum + area.correct_count, 0);

  return {
    correct_count,
    total_count: items.length,
    areas,
  };
}
