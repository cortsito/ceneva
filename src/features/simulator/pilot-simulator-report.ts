import type { question } from "@content/questions/pensamiento-matematico";

import type { pilot_simulator_item } from "./pilot-simulator";

export type pilot_simulator_answer = {
  question_id: string;
  selected_option_index: number;
  is_correct: boolean;
};

export type pilot_simulator_incorrect_item = {
  question: question;
  selected_option_index: number;
};

export type pilot_simulator_topic_report = {
  topic: { id: string; title: string; code: string };
  lesson: { id: string; title: string };
  correct_count: number;
  total_count: number;
  accuracy: number;
  incorrect_items: pilot_simulator_incorrect_item[];
};

export type pilot_simulator_report = {
  correct_count: number;
  total_count: number;
  topics: pilot_simulator_topic_report[];
};

export function calculate_pilot_simulator_report(
  items: pilot_simulator_item[],
  answers: Record<string, pilot_simulator_answer>,
): pilot_simulator_report {
  const topics: pilot_simulator_topic_report[] = [];
  const topic_index_by_id = new Map<string, number>();

  items.forEach((item) => {
    const answer = answers[item.question.id];
    const is_correct = answer?.is_correct === true;
    let topic_index = topic_index_by_id.get(item.topic.id);

    if (topic_index === undefined) {
      topic_index = topics.length;
      topic_index_by_id.set(item.topic.id, topic_index);
      topics.push({
        topic: item.topic,
        lesson: item.lesson,
        correct_count: 0,
        total_count: 0,
        accuracy: 0,
        incorrect_items: [],
      });
    }

    const topic_report = topics[topic_index];

    topic_report.total_count += 1;

    if (is_correct) {
      topic_report.correct_count += 1;
    } else if (answer) {
      topic_report.incorrect_items.push({
        question: item.question,
        selected_option_index: answer.selected_option_index,
      });
    }
  });

  topics.forEach((topic_report) => {
    topic_report.accuracy =
      topic_report.total_count > 0
        ? topic_report.correct_count / topic_report.total_count
        : 0;
  });

  const correct_count = topics.reduce((sum, topic) => sum + topic.correct_count, 0);

  return {
    correct_count,
    total_count: items.length,
    topics,
  };
}
