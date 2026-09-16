"use client";

import { useState } from "react";
import Link from "next/link";

import {
  calculate_pilot_simulator_report,
  type pilot_simulator_answer,
} from "./pilot-simulator-report";
import type { pilot_simulator_item } from "./pilot-simulator";

type pilot_simulator_check_props = {
  items: pilot_simulator_item[];
  is_ready?: boolean;
  on_submit_answer?: (answer: pilot_simulator_answer) => void;
};

export function PilotSimulatorCheck({
  items,
  is_ready = true,
  on_submit_answer,
}: pilot_simulator_check_props) {
  const [current_index, set_current_index] = useState(0);
  const [pending_option_index, set_pending_option_index] = useState<number | undefined>(
    undefined,
  );
  const [answers, set_answers] = useState<Record<string, pilot_simulator_answer>>({});

  const is_finished = current_index >= items.length;

  if (is_finished) {
    const report = calculate_pilot_simulator_report(items, answers);

    return (
      <section aria-labelledby="resultado-simulacro" className="mt-8">
        <h2
          className="text-2xl font-semibold tracking-tight text-slate-950"
          id="resultado-simulacro"
        >
          {report.correct_count} de {report.total_count} respuestas correctas
        </h2>
        <ol className="mt-6 space-y-8" aria-label="resultado por tema">
          {report.topics.map((topic_report) => (
            <li key={topic_report.topic.id}>
              <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <p className="text-sm font-semibold text-teal-800">
                  {topic_report.topic.title}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {topic_report.correct_count} de {topic_report.total_count} correctas ·
                  precisión {Math.round(topic_report.accuracy * 100)}%
                </p>
                {topic_report.incorrect_items.length === 0 ? (
                  <p className="mt-3 leading-6 text-teal-800">
                    respondiste correctamente todas las preguntas de este tema.
                  </p>
                ) : (
                  <ul className="mt-4 space-y-4">
                    {topic_report.incorrect_items.map((incorrect) => (
                      <li
                        className="rounded-lg border border-red-200 bg-red-50 p-4"
                        key={incorrect.question.id}
                      >
                        <p className="whitespace-pre-line font-semibold leading-6 text-slate-950">
                          {incorrect.question.prompt}
                        </p>
                        <p className="mt-2 leading-6 text-slate-800">
                          tu respuesta:{" "}
                          <strong>
                            {
                              incorrect.question.options[
                                incorrect.selected_option_index
                              ]
                            }
                          </strong>
                        </p>
                        <p className="mt-2 leading-6 text-slate-800">
                          respuesta correcta:{" "}
                          <strong>
                            {
                              incorrect.question.options[
                                incorrect.question.correct_option_index
                              ]
                            }
                          </strong>
                        </p>
                        <p className="mt-2 leading-6 text-slate-700">
                          {incorrect.question.explanation}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  className="mt-4 inline-block text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                  href={`/leccion/${topic_report.lesson.id}`}
                >
                  repasar {topic_report.lesson.title}
                </Link>
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
    const answer: pilot_simulator_answer = {
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
    <section aria-labelledby="simulacro-piloto" className="mt-8">
      <h2
        className="text-xl font-semibold tracking-tight text-slate-950"
        id="simulacro-piloto"
      >
        pregunta {current_index + 1} de {items.length} · {current_item.topic.title}
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
        {current_index + 1 < items.length ? "siguiente pregunta" : "ver reporte"}
      </button>
    </section>
  );
}
