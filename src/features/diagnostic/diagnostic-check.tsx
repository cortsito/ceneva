"use client";

import { useState } from "react";
import Link from "next/link";

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
      <section aria-labelledby="resultado-diagnostico" className="mt-8">
        <h2
          className="text-2xl font-semibold tracking-tight text-slate-950"
          id="resultado-diagnostico"
        >
          {correct_count} de {items.length} respuestas correctas
        </h2>
        <ol className="mt-6 space-y-6" aria-label="resultado por tema">
          {items.map((item, item_index) => {
            const answer = answers[item.question.id];

            if (!answer) {
              return null;
            }

            return (
              <li key={item.question.id}>
                <article
                  className={`rounded-xl border p-5 shadow-sm sm:p-6 ${
                    answer.is_correct
                      ? "border-teal-200 bg-teal-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-700">
                    tema {item_index + 1} de {items.length} · {item.topic.title}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-lg font-semibold leading-7 text-slate-950">
                    {item.question.prompt}
                  </p>
                  <p className="mt-3 leading-6 text-slate-800">
                    tu respuesta:{" "}
                    <strong>
                      {item.question.options[answer.selected_option_index]}
                    </strong>
                  </p>
                  {!answer.is_correct ? (
                    <p className="mt-2 leading-6 text-slate-800">
                      respuesta correcta:{" "}
                      <strong>
                        {item.question.options[item.question.correct_option_index]}
                      </strong>
                    </p>
                  ) : null}
                  <p className="mt-2 leading-6 text-slate-700">
                    {item.question.explanation}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
        <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-5 shadow-sm sm:p-6">
          <p className="font-semibold text-teal-950">
            empieza por {recommendation.topic_title}.
          </p>
          <Link
            className="mt-4 inline-block rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            href={`/leccion/${recommendation.lesson_id}`}
          >
            ir a {recommendation.lesson_title}
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
    <section aria-labelledby="diagnostico-piloto" className="mt-8">
      <h2
        className="text-xl font-semibold tracking-tight text-slate-950"
        id="diagnostico-piloto"
      >
        pregunta {current_index + 1} de {items.length}
      </h2>
      <fieldset
        className="mt-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm disabled:cursor-wait disabled:opacity-70 sm:p-6"
        disabled={!is_ready}
      >
        <legend className="w-full">
          <span className="block whitespace-pre-line text-lg font-semibold leading-7 text-slate-950">
            {current_item.question.prompt}
          </span>
        </legend>
        <div className="mt-5 space-y-3">
          {current_item.question.options.map((option, option_index) => {
            const is_selected = pending_option_index === option_index;

            return (
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-slate-800 transition-colors ${
                  is_selected
                    ? "border-teal-700 bg-teal-50"
                    : "border-slate-300 bg-white hover:border-slate-400"
                }`}
                key={option}
              >
                <input
                  checked={is_selected}
                  className="mt-0.5 size-4 shrink-0 accent-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                  name={current_item.question.id}
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
      <button
        className="mt-5 rounded-md bg-teal-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        disabled={!is_ready || pending_option_index === undefined}
        onClick={submit_answer}
        type="button"
      >
        {current_index + 1 < items.length ? "siguiente pregunta" : "ver resultado"}
      </button>
    </section>
  );
}
