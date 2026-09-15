"use client";

import { useState } from "react";
import Link from "next/link";

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
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header>
        <p className="text-sm font-semibold tracking-wide text-teal-800">práctica</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          repasa tus errores pendientes.
        </h1>
        <p className="mt-4 max-w-xl leading-7 text-slate-600">
          esta cola muestra preguntas cuya última respuesta fue incorrecta, hasta cinco
          a la vez.
        </p>
      </header>

      {!is_hydrated || queue === null ? (
        <p className="text-sm text-slate-600" role="status">
          cargando tu cola de repaso.
        </p>
      ) : queue.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white p-6 leading-7 text-slate-700 shadow-sm">
          no tienes preguntas pendientes de repaso. las preguntas que respondas de forma
          incorrecta en la ruta o en práctica por tema aparecerán aquí.
        </p>
      ) : (
        <ol aria-label="preguntas pendientes de repaso" className="space-y-6">
          {queue.map((item, item_index) => {
            const answer = answers[item.question.id];
            const has_answered = answer !== undefined;

            return (
              <li key={item.question.id}>
                <fieldset
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  disabled={has_answered}
                >
                  <legend className="w-full">
                    <span className="text-sm font-semibold text-teal-800">
                      repaso {item_index + 1} de {queue.length} · {item.topic.title}
                    </span>
                    <span className="mt-3 block whitespace-pre-line text-lg font-semibold leading-7 text-slate-950">
                      {item.question.prompt}
                    </span>
                  </legend>
                  <div className="mt-5 space-y-3">
                    {item.question.options.map((option, option_index) => {
                      const is_selected = has_answered
                        ? answer.selected_option_index === option_index
                        : false;
                      const option_state = has_answered
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
                            name={item.question.id}
                            onChange={() => select_option(item, option_index)}
                            type="radio"
                            value={option_index}
                          />
                          <span className="whitespace-pre-line leading-6">
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                {has_answered ? (
                  <div
                    aria-atomic="true"
                    className={`mt-3 rounded-lg border p-4 ${
                      answer.is_correct
                        ? "border-teal-200 bg-teal-50 text-teal-950"
                        : "border-red-200 bg-red-50 text-red-950"
                    }`}
                    role="status"
                  >
                    <p className="font-semibold">
                      {answer.is_correct ? "correcto." : "todavía no es correcto."}
                    </p>
                    {!answer.is_correct ? (
                      <p className="mt-2 leading-6">
                        la respuesta correcta es:{" "}
                        <strong>
                          {item.question.options[item.question.correct_option_index]}
                        </strong>
                        .
                      </p>
                    ) : null}
                    <p className="mt-2 leading-6">{item.question.explanation}</p>
                    <p className="mt-3 text-sm font-medium leading-6">
                      {answer.is_correct
                        ? "saldrá de tu cola de repaso la próxima vez que la visites."
                        : "sigue pendiente en tu cola de repaso."}
                    </p>
                  </div>
                ) : null}
                <Link
                  className="mt-3 inline-block text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
                  href={`/leccion/${item.lesson.id}`}
                >
                  repasar {item.lesson.title}
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
