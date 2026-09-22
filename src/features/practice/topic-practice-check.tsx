"use client";

import { useState } from "react";
import Link from "next/link";

import {
  AnswerReviewCard,
  AnswerOption,
  FeedbackPanel,
  QuestionFrame,
  QuestionProgress,
  ScoreSummary,
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
        <div id="resultado-practica">
          <ScoreSummary
            correct={correct_count}
            description="Revisa cada respuesta y vuelve a la lección cuando necesites reforzar un concepto."
            total={questions.length}
          />
        </div>
        <ol className="mt-7 space-y-4" aria-label="resultado por pregunta">
          {questions.map(({ question, lesson }, question_index) => {
            const answer = answers[question.id];

            if (!answer) {
              return null;
            }

            return (
              <li key={question.id}>
                <AnswerReviewCard
                  action={
                    has_multiple_lessons ? (
                      <Link className="button-quiet" href={`/leccion/${lesson.id}`}>
                        Repasar {lesson.title}
                      </Link>
                    ) : undefined
                  }
                  index={question_index + 1}
                  is_correct={answer.is_correct}
                  question={question}
                  selected_option_index={answer.selected_option_index}
                  total={questions.length}
                />
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
      <QuestionFrame
        disabled={!is_ready || has_submitted}
        prompt={current_question.prompt}
        stimulus={current_question.stimulus}
      >
        {current_question.options.map((option, option_index) => {
          const is_selected = has_submitted
            ? answer.selected_option_index === option_index
            : pending_option_index === option_index;
          const option_state = has_submitted
            ? option_index === current_question.correct_option_index
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
              index={option_index}
              key={option}
              name={current_question.id}
              on_change={() => set_pending_option_index(option_index)}
              option={option}
              state={option_state}
            />
          );
        })}
      </QuestionFrame>
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
          {!answer.is_correct ? (
            <div className="answer-review__answers">
              <div className="answer-review__answer--correct">
                <p className="answer-review__label">Respuesta correcta:</p>
                <p className="font-semibold leading-6">
                  {current_question.options[current_question.correct_option_index]}
                </p>
              </div>
            </div>
          ) : null}
          <div className="answer-review__explanation mt-3">
            <p className="answer-review__label">Por qué</p>
            <p>{current_question.explanation}</p>
          </div>
          {!answer.is_correct && current_question.common_error ? (
            <div className="answer-review__common-error mt-3">
              <p className="answer-review__label">Error común</p>
              <p>{current_question.common_error}</p>
            </div>
          ) : null}
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
