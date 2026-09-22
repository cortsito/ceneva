"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AnswerOption,
  FeedbackPanel,
  QuestionFrame,
} from "@/components/learning/question-ui";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { pilot_review_candidate } from "@/features/practice/pilot-review-candidates";

import { select_pending_review_items, type pilot_review_item } from "./pilot-review";
import { usePilotProgress } from "./use-pilot-progress";

type pilot_review_queue_props = {
  candidates: pilot_review_candidate[];
};

type submitted_answer = {
  selected_option_index: number;
  is_correct: boolean;
};

export function PilotReviewQueue({ candidates }: pilot_review_queue_props) {
  const { progress, is_hydrated, record_review_answer } = usePilotProgress();
  const [queue, set_queue] = useState<pilot_review_item[] | null>(null);
  const [answers, set_answers] = useState<Record<string, submitted_answer>>({});

  if (is_hydrated && queue === null) {
    set_queue(select_pending_review_items(candidates, progress.attempts));
  }

  function select_option(item: pilot_review_item, option_index: number) {
    const is_correct = option_index === item.question.correct_option_index;

    set_answers((current_answers) => ({
      ...current_answers,
      [item.question.id]: { selected_option_index: option_index, is_correct },
    }));
    record_review_answer({
      question_id: item.question.id,
      selected_option_index: option_index,
      is_correct,
    });
  }

  return (
    <section className="assessment-shell flex flex-col gap-8">
      <header className="activity-header">
        <Eyebrow>Práctica</Eyebrow>
        <h1 className="activity-title">Repasa tus errores pendientes.</h1>
        <p className="activity-intro">
          Esta cola muestra preguntas cuya última respuesta fue incorrecta, hasta cinco
          a la vez.
        </p>
      </header>

      {!is_hydrated || queue === null ? (
        <p className="text-sm text-ink-muted" role="status">
          Cargando tu cola de repaso.
        </p>
      ) : queue.length === 0 ? (
        <p className="border-y border-line py-8 leading-7 text-ink-muted">
          No tienes preguntas pendientes de repaso. Las preguntas que respondas de forma
          incorrecta en la ruta o en práctica por tema aparecerán aquí.
        </p>
      ) : (
        <ol aria-label="preguntas pendientes de repaso" className="space-y-8">
          {queue.map((item, item_index) => {
            const answer = answers[item.question.id];
            const has_answered = answer !== undefined;

            return (
              <li key={item.question.id}>
                <p className="mb-2 text-xs font-extrabold tracking-[0.12em] text-ink-muted uppercase">
                  Repaso {item_index + 1} de {queue.length} · {item.topic.title}
                </p>
                <QuestionFrame
                  disabled={has_answered}
                  prompt={item.question.prompt}
                  stimulus={item.question.stimulus}
                >
                  {item.question.options.map((option, option_index) => {
                    const is_selected = has_answered
                      ? answer.selected_option_index === option_index
                      : false;
                    const option_state = has_answered
                      ? option_index === item.question.correct_option_index
                        ? "correct"
                        : is_selected
                          ? "incorrect"
                          : "idle"
                      : "idle";

                    return (
                      <AnswerOption
                        checked={is_selected}
                        index={option_index}
                        key={option}
                        name={item.question.id}
                        on_change={() => select_option(item, option_index)}
                        option={option}
                        state={option_state}
                      />
                    );
                  })}
                </QuestionFrame>
                {has_answered ? (
                  <FeedbackPanel tone={answer.is_correct ? "success" : "danger"}>
                    {!answer.is_correct ? (
                      <div className="answer-review__answers">
                        <div className="answer-review__answer--correct">
                          <p className="answer-review__label">Respuesta correcta:</p>
                          <p className="font-semibold leading-6">
                            {item.question.options[item.question.correct_option_index]}
                          </p>
                        </div>
                      </div>
                    ) : null}
                    <div className="answer-review__explanation mt-3">
                      <p className="answer-review__label">Por qué</p>
                      <p>{item.question.explanation}</p>
                    </div>
                    {!answer.is_correct && item.question.common_error ? (
                      <div className="answer-review__common-error mt-3">
                        <p className="answer-review__label">Error común</p>
                        <p>{item.question.common_error}</p>
                      </div>
                    ) : null}
                    <p className="mt-3 text-sm font-medium leading-6">
                      {answer.is_correct
                        ? "Saldrá de tu cola de repaso la próxima vez que la visites."
                        : "Sigue pendiente en tu cola de repaso."}
                    </p>
                  </FeedbackPanel>
                ) : null}
                <Link className="button-quiet mt-3" href={`/leccion/${item.lesson.id}`}>
                  Repasar {item.lesson.title}
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
