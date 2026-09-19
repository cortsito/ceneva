"use client";

import { useState } from "react";
import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";

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
      <section aria-labelledby="resultado-simulacro" className="mt-8">
        <Eyebrow>Simulacro de cobertura MVP</Eyebrow>
        <h2
          className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink"
          id="resultado-simulacro"
        >
          {report.correct_count} de {report.total_count} respuestas correctas
        </h2>
        <p className="mt-2 leading-6 text-ink-muted">
          Cubre una pregunta por tema en las siete áreas disponibles. No es el examen
          oficial completo ni una simulación de su duración o dificultad real.
        </p>
        <ol className="mt-6 space-y-10" aria-label="resultado por área">
          {report.areas.map((area_report) => (
            <li key={area_report.area.id}>
              <article className="rounded-xl border border-line bg-surface-raised p-5 sm:p-6">
                <p className="text-sm font-semibold text-accent">
                  {area_report.area.title}
                </p>
                <p className="mt-2 text-lg font-semibold text-ink">
                  {area_report.correct_count} de {area_report.total_count} correctas ·
                  precisión {Math.round(area_report.accuracy * 100)}%
                </p>
                <ol
                  className="mt-4 space-y-4"
                  aria-label={`temas de ${area_report.area.title}`}
                >
                  {area_report.topics.map((topic_report) => (
                    <li
                      className="rounded-lg border border-line p-4"
                      key={topic_report.topic.id}
                    >
                      <p className="text-sm font-semibold text-ink-muted">
                        {topic_report.topic.title}
                      </p>
                      {topic_report.incorrect_items.length === 0 ? (
                        <p className="mt-2 leading-6 text-accent">
                          Respuesta correcta.
                        </p>
                      ) : (
                        <ul className="mt-2 space-y-3">
                          {topic_report.incorrect_items.map((incorrect) => (
                            <li
                              className="rounded-lg border border-danger bg-danger-soft p-4"
                              key={incorrect.question.id}
                            >
                              <p className="font-semibold leading-6 whitespace-pre-line text-ink">
                                {incorrect.question.prompt}
                              </p>
                              <p className="mt-2 leading-6 text-ink">
                                Tu respuesta:{" "}
                                <strong>
                                  {
                                    incorrect.question.options[
                                      incorrect.selected_option_index
                                    ]
                                  }
                                </strong>
                              </p>
                              <p className="mt-2 leading-6 text-ink">
                                Respuesta correcta:{" "}
                                <strong>
                                  {
                                    incorrect.question.options[
                                      incorrect.question.correct_option_index
                                    ]
                                  }
                                </strong>
                              </p>
                              <p className="mt-2 leading-6 text-ink-muted">
                                {incorrect.question.explanation}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link
                        className="mt-3 inline-block text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                        href={`/leccion/${topic_report.lesson.id}`}
                      >
                        Repasar {topic_report.lesson.title}
                      </Link>
                    </li>
                  ))}
                </ol>
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
    <section aria-labelledby="simulacro-cobertura" className="mt-8">
      <h2
        className="font-display text-xl font-semibold tracking-tight text-ink"
        id="simulacro-cobertura"
      >
        Pregunta {current_index + 1} de {items.length} · {current_item.area.title} ·{" "}
        {current_item.topic.title}
      </h2>
      <fieldset
        className="mt-5 rounded-xl border border-line bg-surface-raised p-5 disabled:cursor-wait disabled:opacity-70 sm:p-6"
        disabled={!is_ready}
      >
        <legend className="w-full">
          <span className="block text-lg leading-7 font-semibold whitespace-pre-line text-ink">
            {current_item.question.prompt}
          </span>
        </legend>
        <div className="mt-5 space-y-3">
          {current_item.question.options.map((option, option_index) => {
            const is_selected = pending_option_index === option_index;

            return (
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-ink transition-colors ${
                  is_selected
                    ? "border-accent bg-accent-soft"
                    : "border-line bg-surface-raised hover:border-accent"
                }`}
                key={option}
              >
                <input
                  checked={is_selected}
                  className="mt-0.5 size-4 shrink-0 accent-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  name={current_item.question.id}
                  onChange={() => set_pending_option_index(option_index)}
                  type="radio"
                  value={option_index}
                />
                <span className="leading-6 whitespace-pre-line">{option}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      <button
        className="mt-5 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        disabled={!is_ready || pending_option_index === undefined}
        onClick={submit_answer}
        type="button"
      >
        {current_index + 1 < items.length ? "Siguiente pregunta" : "Ver reporte"}
      </button>
    </section>
  );
}
