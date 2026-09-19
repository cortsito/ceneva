"use client";

import { useState } from "react";

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
    <section className="mt-8" aria-labelledby="comprobacion-interactiva">
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
      <ol className="mt-6 space-y-6" aria-label="preguntas de comprobación">
        {questions.map((question, question_index) => {
          const selected_option_index = answers[question.id];
          const has_answer = selected_option_index !== undefined;
          const is_correct = selected_option_index === question.correct_option_index;
          const feedback_id = get_feedback_id(question.id);

          return (
            <li key={question.id}>
              <fieldset
                className="rounded-xl border border-line bg-surface-raised p-5 disabled:cursor-wait disabled:opacity-70 sm:p-6"
                disabled={!is_ready}
              >
                <legend className="w-full">
                  <span className="text-sm font-semibold text-accent">
                    Pregunta {question_index + 1} de {questions.length}
                  </span>
                  <span className="mt-3 block text-lg leading-7 font-semibold whitespace-pre-line text-ink">
                    {question.prompt}
                  </span>
                </legend>
                <div className="mt-5 space-y-3">
                  {question.options.map((option, option_index) => {
                    const is_selected = selected_option_index === option_index;
                    const option_state =
                      has_answer && is_selected
                        ? is_correct
                          ? "border-accent bg-accent-soft"
                          : "border-danger bg-danger-soft"
                        : "border-line bg-surface-raised hover:border-accent";

                    return (
                      <label
                        className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-ink transition-colors ${option_state}`}
                        key={option}
                      >
                        <input
                          aria-describedby={has_answer ? feedback_id : undefined}
                          checked={is_selected}
                          className="mt-0.5 size-4 shrink-0 accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                          name={question.id}
                          onChange={() => select_answer(question, option_index)}
                          type="radio"
                          value={option_index}
                        />
                        <span className="leading-6 whitespace-pre-line">{option}</span>
                      </label>
                    );
                  })}
                </div>
                {has_answer ? (
                  <div
                    aria-atomic="true"
                    className={`mt-5 rounded-lg border p-4 ${
                      is_correct
                        ? "border-accent bg-accent-soft text-ink"
                        : "border-danger bg-danger-soft text-ink"
                    }`}
                    id={feedback_id}
                    role="status"
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
                  </div>
                ) : null}
              </fieldset>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
