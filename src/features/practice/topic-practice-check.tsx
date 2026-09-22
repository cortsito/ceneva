"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AnswerOption,
  FeedbackPanel,
  QuestionProgress,
} from "@/components/learning/question-ui";

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
      <section aria-labelledby="resultado-practica" className="question-stage">
        <h2
          className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
          id="resultado-practica"
        >
          {correct_count} de {questions.length} respuestas correctas
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-ink-muted">
          Revisa cada respuesta y vuelve a la lección cuando necesites reforzar un
          concepto.
        </p>
        <ol className="mt-7 space-y-4" aria-label="resultado por pregunta">
          {questions.map(({ question, lesson }, question_index) => {
            const answer = answers[question.id];

            if (!answer) {
              return null;
            }

            return (
              <li key={question.id}>
                <article
                  className={`result-card ${
                    answer.is_correct
                      ? "border-success bg-success-soft"
                      : "border-danger bg-danger-soft"
                  }`}
                >
                  <p className="text-sm font-semibold text-ink-muted">
                    Pregunta {question_index + 1} de {questions.length}
                  </p>
                  <p className="mt-2 text-lg leading-7 font-semibold whitespace-pre-line text-ink">
                    {question.prompt}
                  </p>
                  <p className="mt-3 leading-6 text-ink">
                    Tu respuesta:{" "}
                    <strong>{question.options[answer.selected_option_index]}</strong>
                  </p>
                  {!answer.is_correct ? (
                    <p className="mt-2 leading-6 text-ink">
                      Respuesta correcta:{" "}
                      <strong>{question.options[question.correct_option_index]}</strong>
                    </p>
                  ) : null}
                  <p className="mt-2 leading-6 text-ink-muted">
                    {question.explanation}
                  </p>
                  {has_multiple_lessons ? (
                    <Link
                      className="mt-3 inline-block text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      href={`/leccion/${lesson.id}`}
                    >
                      Repasar {lesson.title}
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
              className="button-primary"
              href={`/leccion/${lesson.id}`}
              key={lesson.id}
            >
              Volver a {lesson.title}
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
    <section aria-labelledby="practica-por-tema" className="question-stage">
      <h2
        aria-label={`Pregunta ${current_index + 1} de ${questions.length}`}
        className="sr-only"
        id="practica-por-tema"
      />
      <QuestionProgress current={current_index + 1} total={questions.length} />
      <fieldset className="question-card" disabled={!is_ready || has_submitted}>
        <legend className="w-full">
          <span className="question-prompt whitespace-pre-line">
            {current_question.prompt}
          </span>
        </legend>
        <div className="answer-list">
          {current_question.options.map((option, option_index) => {
            const is_selected = has_submitted
              ? answer.selected_option_index === option_index
              : pending_option_index === option_index;
            const option_state = has_submitted
              ? is_selected
                ? answer.is_correct
                  ? "correct"
                  : "incorrect"
                : "idle"
              : is_selected
                ? "selected"
                : "idle";

            return (
              <AnswerOption
                checked={is_selected}
                index={option_index}
                key={option}
                name={current_question.id}
                on_change={() => set_pending_option_index(option_index)}
                option={option}
                state={option_state}
              />
            );
          })}
        </div>
      </fieldset>
      {!has_submitted ? (
        <button
          className="button-primary mt-4 sm:w-auto"
          disabled={!is_ready || pending_option_index === undefined}
          onClick={submit_answer}
          type="button"
        >
          Confirmar respuesta
        </button>
      ) : (
        <FeedbackPanel tone={answer.is_correct ? "success" : "danger"}>
          <p className="font-semibold">
            {answer.is_correct ? "Correcto." : "Incorrecto."}
          </p>
          {!answer.is_correct ? (
            <p className="mt-2 leading-6">
              La respuesta correcta es:{" "}
              <strong>
                {current_question.options[current_question.correct_option_index]}
              </strong>
              .
            </p>
          ) : null}
          <p className="mt-2 leading-6">{current_question.explanation}</p>
          <button
            className="button-primary mt-4 sm:w-auto"
            onClick={go_to_next_question}
            type="button"
          >
            {current_index + 1 < questions.length
              ? "Siguiente pregunta"
              : "Ver resultados"}
          </button>
        </FeedbackPanel>
      )}
    </section>
  );
}
