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
import type { topic_progress } from "@/features/progress/pilot-progress";

import {
  get_diagnostic_recommendation,
  type diagnostic_answer,
} from "./diagnostic-recommendation";
import type { area_diagnostic_item } from "./area-diagnostic";

type diagnostic_check_props = {
  items: area_diagnostic_item[];
  topics: topic_progress[];
  is_ready?: boolean;
  on_submit_answer?: (answer: diagnostic_answer) => void;
};

export function DiagnosticCheck({
  items,
  topics,
  is_ready = true,
  on_submit_answer,
}: diagnostic_check_props) {
  const [current_index, set_current_index] = useState(0);
  const [pending_option_index, set_pending_option_index] = useState<number | undefined>(
    undefined,
  );
  const [answers, set_answers] = useState<Record<string, diagnostic_answer>>({});

  const is_finished = current_index >= items.length;

  if (is_finished) {
    const correct_count = items.filter(
      (item) => answers[item.question.id]?.is_correct,
    ).length;
    const recommendation = get_diagnostic_recommendation(items, answers, topics);

    return (
      <section aria-labelledby="resultado-diagnostico" className="question-stage">
        <div id="resultado-diagnostico">
          <ScoreSummary
            correct={correct_count}
            description="Este resultado orienta tu punto de partida; no modifica por sí solo el dominio de los temas."
            total={items.length}
          />
        </div>
        <ol className="mt-7 space-y-4" aria-label="resultado por tema">
          {items.map((item, item_index) => {
            const answer = answers[item.question.id];

            if (!answer) {
              return null;
            }

            return (
              <li key={item.question.id}>
                <AnswerReviewCard
                  context={item.topic.title}
                  index={item_index + 1}
                  is_correct={answer.is_correct}
                  question={item.question}
                  selected_option_index={answer.selected_option_index}
                  total={items.length}
                />
              </li>
            );
          })}
        </ol>
        <div className="surface-panel mt-6 border-accent bg-accent-soft p-5 sm:p-6">
          <p className="font-semibold text-ink">
            Empieza por {recommendation.topic_title}.
          </p>
          <Link
            className="button-primary mt-4"
            href={`/leccion/${recommendation.lesson_id}`}
          >
            Ir a {recommendation.lesson_title}
          </Link>
        </div>
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
    const answer: diagnostic_answer = {
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
    <section aria-labelledby="diagnostico-piloto" className="question-stage">
      <h2
        aria-label={`Pregunta ${current_index + 1} de ${items.length}`}
        className="sr-only"
        id="diagnostico-piloto"
      />
      <QuestionProgress
        context={current_item.topic.title}
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
        {current_index + 1 < items.length ? "Siguiente pregunta" : "Ver resultado"}
      </button>
    </section>
  );
}
