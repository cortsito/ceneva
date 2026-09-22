"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AnswerOption,
  AnswerReviewCard,
  QuestionFrame,
  QuestionProgress,
  ScoreSummary,
} from "@/components/learning/question-ui";

import {
  calculate_simulator_coverage_report,
  type simulator_answer,
} from "./simulator-report";
import type { simulator_coverage_item } from "./simulator-coverage";

type simulator_check_props = {
  items: simulator_coverage_item[];
  is_ready?: boolean;
  on_submit_answer?: (answer: simulator_answer) => void;
};

export function SimulatorCheck({
  items,
  is_ready = true,
  on_submit_answer,
}: simulator_check_props) {
  const [current_index, set_current_index] = useState(0);
  const [pending_option_index, set_pending_option_index] = useState<number | undefined>(
    undefined,
  );
  const [answers, set_answers] = useState<Record<string, simulator_answer>>({});

  const is_finished = current_index >= items.length;

  if (is_finished) {
    const report = calculate_simulator_coverage_report(items, answers);

    return (
      <section aria-labelledby="resultado-simulacro" className="question-stage">
        <div id="resultado-simulacro">
          <ScoreSummary
            correct={report.correct_count}
            description="Este simulacro cubre una pregunta por tema disponible. Usa el detalle por área para decidir qué repasar después."
            total={report.total_count}
          />
        </div>
        <ol className="mt-7 space-y-5" aria-label="resultado por área">
          {report.areas.map((area_report) => (
            <li key={area_report.area.id}>
              <article className="surface-panel overflow-hidden">
                <details open={area_report.correct_count < area_report.total_count}>
                  <summary className="flex cursor-pointer list-none flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-ink">
                      {area_report.area.title}
                    </span>
                    <span className="text-sm font-bold text-ink-muted">
                      {area_report.correct_count} de {area_report.total_count} correctas
                      · {Math.round(area_report.accuracy * 100)}%
                    </span>
                  </summary>
                  <ol
                    className="space-y-4 border-t border-line p-4 sm:p-6"
                    aria-label={`temas de ${area_report.area.title}`}
                  >
                    {area_report.topics.map((topic_report) => (
                      <li key={topic_report.topic.id}>
                        {topic_report.result_items.map((result) => (
                          <AnswerReviewCard
                            action={
                              <Link
                                className="button-quiet"
                                href={`/leccion/${topic_report.lesson.id}`}
                              >
                                Repasar {topic_report.lesson.title}
                              </Link>
                            }
                            collapsible
                            context={topic_report.topic.title}
                            is_correct={result.is_correct}
                            key={result.question.id}
                            question={result.question}
                            selected_option_index={result.selected_option_index}
                          />
                        ))}
                      </li>
                    ))}
                  </ol>
                </details>
              </article>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  const current_item = items[current_index];

  function submit_answer() {
    if (pending_option_index === undefined) {
      return;
    }

    const is_correct =
      pending_option_index === current_item.question.correct_option_index;
    const answer: simulator_answer = {
      question_id: current_item.question.id,
      selected_option_index: pending_option_index,
      is_correct,
    };

    set_answers((current_answers) => ({
      ...current_answers,
      [current_item.question.id]: answer,
    }));
    on_submit_answer?.(answer);
    set_current_index((index) => index + 1);
    set_pending_option_index(undefined);
  }

  return (
    <section aria-labelledby="simulacro-cobertura" className="question-stage">
      <h2
        aria-label={`Pregunta ${current_index + 1} de ${items.length} · ${current_item.area.title} · ${current_item.topic.title}`}
        className="sr-only"
        id="simulacro-cobertura"
      />
      <QuestionProgress
        context={`${current_item.area.title} · ${current_item.topic.title}`}
        current={current_index + 1}
        total={items.length}
      />
      <QuestionFrame
        disabled={!is_ready}
        prompt={current_item.question.prompt}
        stimulus={current_item.question.stimulus}
      >
        {current_item.question.options.map((option, option_index) => {
          const is_selected = pending_option_index === option_index;

          return (
            <AnswerOption
              checked={is_selected}
              index={option_index}
              key={option}
              name={current_item.question.id}
              on_change={() => set_pending_option_index(option_index)}
              option={option}
              state={is_selected ? "selected" : "idle"}
            />
          );
        })}
      </QuestionFrame>
      <button
        className="button-primary mt-4 sm:w-auto"
        disabled={!is_ready || pending_option_index === undefined}
        onClick={submit_answer}
        type="button"
      >
        {current_index + 1 < items.length ? "Siguiente pregunta" : "Ver reporte"}
      </button>
    </section>
  );
}
