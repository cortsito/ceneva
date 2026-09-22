"use client";

import { useState } from "react";
import Link from "next/link";

import { AnswerOption, FeedbackPanel } from "@/components/learning/question-ui";
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
    <section className="reading-shell flex flex-col gap-10">
      <header className="space-y-4">
        <Eyebrow>Práctica</Eyebrow>
        <h1 className="page-heading">Repasa tus errores pendientes.</h1>
        <p className="page-intro">
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
                <fieldset className="question-card mt-0" disabled={has_answered}>
                  <legend className="w-full">
                    <span className="text-[0.7rem] font-extrabold tracking-[0.16em] text-accent uppercase">
                      Repaso {item_index + 1} de {queue.length} · {item.topic.title}
                    </span>
                    <span className="question-prompt mt-3 whitespace-pre-line">
                      {item.question.prompt}
                    </span>
                  </legend>
                  <div className="answer-list">
                    {item.question.options.map((option, option_index) => {
                      const is_selected = has_answered
                        ? answer.selected_option_index === option_index
                        : false;
                      const option_state = has_answered
                        ? is_selected
                          ? answer.is_correct
                            ? "correct"
                            : "incorrect"
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
                  </div>
                </fieldset>
                {has_answered ? (
                  <FeedbackPanel tone={answer.is_correct ? "success" : "danger"}>
                    <p className="font-semibold">
                      {answer.is_correct ? "Correcto." : "Todavía no es correcto."}
                    </p>
                    {!answer.is_correct ? (
                      <p className="mt-2 leading-6">
                        La respuesta correcta es:{" "}
                        <strong>
                          {item.question.options[item.question.correct_option_index]}
                        </strong>
                        .
                      </p>
                    ) : null}
                    <p className="mt-2 leading-6">{item.question.explanation}</p>
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
