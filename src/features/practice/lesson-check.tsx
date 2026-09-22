"use client";

import { useState } from "react";

import {
  AnswerOption,
  FeedbackPanel,
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
      <h3
        className="font-display text-xl font-semibold tracking-tight text-ink"
        id="comprobacion-interactiva"
      >
        Responde las cinco preguntas
      </h3>
      <p className="mt-3 leading-7 text-ink-muted">
        Elige una opción en cada pregunta. Recibirás feedback inmediato y puedes cambiar
        tu respuesta durante esta sesión.
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
              <fieldset className="question-card" disabled={!is_ready}>
                <legend className="w-full">
                  <span className="question-prompt whitespace-pre-line">
                    {question.prompt}
                  </span>
                </legend>
                <div className="answer-list">
                  {question.options.map((option, option_index) => {
                    const is_selected = selected_option_index === option_index;
                    const option_state =
                      has_answer && is_selected
                        ? is_correct
                          ? "correct"
                          : "incorrect"
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
                </div>
                {has_answer ? (
                  <FeedbackPanel
                    id={feedback_id}
                    tone={is_correct ? "success" : "danger"}
                  >
                    <p className="font-semibold">
                      {is_correct ? "Correcto." : "Todavía no es correcto."}
                    </p>
                    {!is_correct ? (
                      <p className="mt-2 leading-6">
                        La respuesta correcta es:{" "}
                        <strong>
                          {question.options[question.correct_option_index]}
                        </strong>
                        .
                      </p>
                    ) : null}
                    <p className="mt-2 leading-6">{question.explanation}</p>
                    <p className="mt-3 text-sm leading-6 font-medium">
                      {is_correct
                        ? "Continúa con la siguiente pregunta."
                        : "Revisa la explicación y elige otra opción si quieres intentarlo de nuevo."}
                    </p>
                  </FeedbackPanel>
                ) : null}
              </fieldset>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
