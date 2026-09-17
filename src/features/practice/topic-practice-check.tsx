"use client";

import { useState } from "react";
import Link from "next/link";

import type { topic_question } from "./unit-topic-content";

type submitted_answer = {
  selected_option_index: number;
  is_correct: boolean;
};

type topic_practice_check_props = {
  questions: topic_question[];
  lessons: { id: string; title: string }[];
  is_ready?: boolean;
  on_submit_answer?: (answer: {
    question_id: string;
    selected_option_index: number;
    is_correct: boolean;
  }) => void;
};

function unique_lessons(
  lessons: { id: string; title: string }[],
): { id: string; title: string }[] {
  const seen = new Set<string>();

  return lessons.filter((lesson) => {
    if (seen.has(lesson.id)) {
      return false;
    }

    seen.add(lesson.id);
    return true;
  });
}

export function TopicPracticeCheck({
  questions,
  lessons,
  is_ready = true,
  on_submit_answer,
}: topic_practice_check_props) {
  const [current_index, set_current_index] = useState(0);
  const [pending_option_index, set_pending_option_index] = useState<number | undefined>(
    undefined,
  );
  const [answers, set_answers] = useState<Record<string, submitted_answer>>({});

  const is_finished = current_index >= questions.length;
  const related_lessons = unique_lessons(lessons);
  const has_multiple_lessons = related_lessons.length > 1;

  if (is_finished) {
    const correct_count = questions.filter(
      (item) => answers[item.question.id]?.is_correct,
    ).length;

    return (
      <section aria-labelledby="resultado-practica" className="mt-8">
        <h2
          className="text-2xl font-semibold tracking-tight text-slate-950"
          id="resultado-practica"
        >
          {correct_count} de {questions.length} respuestas correctas
        </h2>
        <ol className="mt-6 space-y-6" aria-label="resultado por pregunta">
          {questions.map(({ question, lesson }, question_index) => {
            const answer = answers[question.id];

            if (!answer) {
              return null;
            }

            return (
              <li key={question.id}>
                <article
                  className={`rounded-xl border p-5 shadow-sm sm:p-6 ${
                    answer.is_correct
                      ? "border-teal-200 bg-teal-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-700">
                    pregunta {question_index + 1} de {questions.length}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-lg font-semibold leading-7 text-slate-950">
                    {question.prompt}
                  </p>
                  <p className="mt-3 leading-6 text-slate-800">
                    tu respuesta:{" "}
                    <strong>{question.options[answer.selected_option_index]}</strong>
                  </p>
                  {!answer.is_correct ? (
                    <p className="mt-2 leading-6 text-slate-800">
                      respuesta correcta:{" "}
                      <strong>{question.options[question.correct_option_index]}</strong>
                    </p>
                  ) : null}
                  <p className="mt-2 leading-6 text-slate-700">
                    {question.explanation}
                  </p>
                  {has_multiple_lessons ? (
                    <Link
                      className="mt-3 inline-block text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                      href={`/leccion/${lesson.id}`}
                    >
                      repasar {lesson.title}
                    </Link>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ol>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {related_lessons.map((lesson) => (
            <Link
              className="inline-block w-fit rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              href={`/leccion/${lesson.id}`}
              key={lesson.id}
            >
              volver a {lesson.title}
            </Link>
          ))}
        </div>
      </section>
    );
  }

  const current_question = questions[current_index].question;
  const answer = answers[current_question.id];
  const has_submitted = answer !== undefined;

  function submit_answer() {
    if (pending_option_index === undefined) {
      return;
    }

    const is_correct = pending_option_index === current_question.correct_option_index;

    set_answers((current_answers) => ({
      ...current_answers,
      [current_question.id]: {
        selected_option_index: pending_option_index,
        is_correct,
      },
    }));
    on_submit_answer?.({
      question_id: current_question.id,
      selected_option_index: pending_option_index,
      is_correct,
    });
  }

  function go_to_next_question() {
    set_current_index((index) => index + 1);
    set_pending_option_index(undefined);
  }

  return (
    <section aria-labelledby="practica-por-tema" className="mt-8">
      <h2
        className="text-xl font-semibold tracking-tight text-slate-950"
        id="practica-por-tema"
      >
        pregunta {current_index + 1} de {questions.length}
      </h2>
      <fieldset
        className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm disabled:cursor-wait disabled:opacity-70 sm:p-6"
        disabled={!is_ready || has_submitted}
      >
        <legend className="w-full">
          <span className="block whitespace-pre-line text-lg font-semibold leading-7 text-slate-950">
            {current_question.prompt}
          </span>
        </legend>
        <div className="mt-5 space-y-3">
          {current_question.options.map((option, option_index) => {
            const is_selected = has_submitted
              ? answer.selected_option_index === option_index
              : pending_option_index === option_index;
            const option_state = has_submitted
              ? is_selected
                ? answer.is_correct
                  ? "border-teal-700 bg-teal-50"
                  : "border-red-700 bg-red-50"
                : "border-slate-300 bg-white"
              : "border-slate-300 bg-white hover:border-slate-400";

            return (
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-slate-800 transition-colors ${option_state}`}
                key={option}
              >
                <input
                  checked={is_selected}
                  className="mt-0.5 size-4 shrink-0 accent-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  name={current_question.id}
                  onChange={() => set_pending_option_index(option_index)}
                  type="radio"
                  value={option_index}
                />
                <span className="whitespace-pre-line leading-6">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {!has_submitted ? (
        <button
          className="mt-5 rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          disabled={!is_ready || pending_option_index === undefined}
          onClick={submit_answer}
          type="button"
        >
          confirmar respuesta
        </button>
      ) : (
        <div
          aria-atomic="true"
          className={`mt-5 rounded-lg border p-4 ${
            answer.is_correct
              ? "border-teal-200 bg-teal-50 text-teal-950"
              : "border-red-200 bg-red-50 text-red-950"
          }`}
          role="status"
        >
          <p className="font-semibold">
            {answer.is_correct ? "correcto." : "incorrecto."}
          </p>
          {!answer.is_correct ? (
            <p className="mt-2 leading-6">
              la respuesta correcta es:{" "}
              <strong>
                {current_question.options[current_question.correct_option_index]}
              </strong>
              .
            </p>
          ) : null}
          <p className="mt-2 leading-6">{current_question.explanation}</p>
          <button
            className="mt-4 rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            onClick={go_to_next_question}
            type="button"
          >
            {current_index + 1 < questions.length
              ? "siguiente pregunta"
              : "ver resultados"}
          </button>
        </div>
      )}
    </section>
  );
}
