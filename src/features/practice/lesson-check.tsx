"use client";

import { useState } from "react";

import {
  AnswerOption,
  FeedbackPanel,
  QuestionFrame,
  QuestionProgress,
} from "@/components/learning/question-ui";
import type { question } from "@content/questions/types";

type lesson_check_props = {
  questions: question[];
  is_ready?: boolean;
  on_answer?: (answer: {
    question_id: string;
    selected_option_index: number;
    is_correct: boolean;
  }) => void;
};

type answers_by_question_id = Record<string, number>;

function get_feedback_id(question_id: string): string {
  return `feedback-${question_id}`;
}

export function LessonCheck({
  questions,
  is_ready = true,
  on_answer,
}: lesson_check_props) {
  const [answers, set_answers] = useState<answers_by_question_id>({});

  function select_answer(question: question, option_index: number) {
    set_answers((current_answers) => ({
      ...current_answers,
      [question.id]: option_index,
    }));
    on_answer?.({
      question_id: question.id,
      selected_option_index: option_index,
      is_correct: option_index === question.correct_option_index,
    });
  }

  return (
    <section className="mt-10" aria-labelledby="comprobacion-interactiva">
      <h2 className="activity-title text-2xl!" id="comprobacion-interactiva">
        Comprueba lo que aprendiste
      </h2>
      <p className="mt-2 leading-7 text-ink-muted">
        Responde cinco preguntas. Verás una explicación inmediata y puedes cambiar tu
        respuesta durante esta sesión.
      </p>
      <ol className="mt-7 space-y-8" aria-label="preguntas de comprobación">
        {questions.map((question, question_index) => {
          const selected_option_index = answers[question.id];
          const has_answer = selected_option_index !== undefined;
          const is_correct = selected_option_index === question.correct_option_index;
          const feedback_id = get_feedback_id(question.id);

          return (
            <li key={question.id}>
              <QuestionProgress current={question_index + 1} total={questions.length} />
              <QuestionFrame
                disabled={!is_ready}
                prompt={question.prompt}
                stimulus={question.stimulus}
              >
                {question.options.map((option, option_index) => {
                  const is_selected = selected_option_index === option_index;
                  const option_state = has_answer
                    ? option_index === question.correct_option_index
                      ? "correct"
                      : is_selected
                        ? "incorrect"
                        : "idle"
                    : is_selected
                      ? "selected"
                      : "idle";

                  return (
                    <AnswerOption
                      checked={is_selected}
                      described_by={has_answer ? feedback_id : undefined}
                      index={option_index}
                      key={option}
                      name={question.id}
                      on_change={() => select_answer(question, option_index)}
                      option={option}
                      state={option_state}
                    />
                  );
                })}
              </QuestionFrame>
              {has_answer ? (
                <FeedbackPanel
                  id={feedback_id}
                  tone={is_correct ? "success" : "danger"}
                >
                  {!is_correct ? (
                    <div className="answer-review__answers">
                      <div className="answer-review__answer--correct">
                        <p className="answer-review__label">Respuesta correcta:</p>
                        <p className="font-semibold leading-6">
                          {question.options[question.correct_option_index]}
                        </p>
                      </div>
                    </div>
                  ) : null}
                  <div className="answer-review__explanation mt-3">
                    <p className="answer-review__label">Por qué</p>
                    <p>{question.explanation}</p>
                  </div>
                  {!is_correct && question.common_error ? (
                    <div className="answer-review__common-error mt-3">
                      <p className="answer-review__label">Error común</p>
                      <p>{question.common_error}</p>
                    </div>
                  ) : null}
                  <p className="mt-3 text-sm leading-6 font-medium">
                    {is_correct
                      ? "Continúa con la siguiente pregunta."
                      : "Revisa la explicación y elige otra opción si quieres intentarlo de nuevo."}
                  </p>
                </FeedbackPanel>
              ) : null}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
