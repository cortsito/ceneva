"use client";

import type { ReactNode } from "react";

import type { question } from "@content/questions/types";

type question_progress_props = {
  current: number;
  total: number;
  context?: string;
};

export function QuestionProgress({ current, total, context }: question_progress_props) {
  const progress = total === 0 ? 0 : Math.min(100, (current / total) * 100);

  return (
    <div className="question-progress">
      <div className="question-progress__copy">
        <p className="question-progress__step">
          Pregunta {current} de {total}
        </p>
        {context ? <p className="question-progress__context">{context}</p> : null}
      </div>
      <div
        aria-label={`Progreso: pregunta ${current} de ${total}`}
        aria-valuemax={total}
        aria-valuemin={1}
        aria-valuenow={current}
        className="question-progress__track"
        role="progressbar"
      >
        <span className="question-progress__value" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

type question_prompt_props = {
  prompt: string;
  stimulus?: string;
  compact?: boolean;
};

export function QuestionPrompt({
  prompt,
  stimulus,
  compact = false,
}: question_prompt_props) {
  return (
    <span className={`question-content ${compact ? "question-content--compact" : ""}`}>
      {stimulus ? (
        <span className="question-stimulus">
          <span className="question-stimulus__label">Texto base</span>
          <span className="question-stimulus__copy">{stimulus}</span>
        </span>
      ) : null}
      <span className="question-prompt">{prompt}</span>
    </span>
  );
}

type question_frame_props = {
  children: ReactNode;
  disabled?: boolean;
  prompt: string;
  stimulus?: string;
};

export function QuestionFrame({
  children,
  disabled = false,
  prompt,
  stimulus,
}: question_frame_props) {
  return (
    <div className={`question-card ${disabled ? "question-card--disabled" : ""}`}>
      <fieldset className="question-fieldset" disabled={disabled}>
        <legend className="w-full">
          <QuestionPrompt prompt={prompt} stimulus={stimulus} />
        </legend>
        <div className="answer-list">{children}</div>
      </fieldset>
    </div>
  );
}

type answer_option_state = "idle" | "selected" | "correct" | "incorrect";

type answer_option_props = {
  described_by?: string;
  checked: boolean;
  index: number;
  name: string;
  on_change: () => void;
  option: string;
  state?: answer_option_state;
};

const state_class: Record<answer_option_state, string> = {
  idle: "",
  selected: "answer-option--selected",
  correct: "answer-option--correct",
  incorrect: "answer-option--incorrect",
};

export function AnswerOption({
  described_by,
  checked,
  index,
  name,
  on_change,
  option,
  state = "idle",
}: answer_option_props) {
  return (
    <label className={`answer-option ${state_class[state]}`}>
      <input
        aria-describedby={described_by}
        checked={checked}
        className="answer-option__input"
        name={name}
        onChange={on_change}
        type="radio"
        value={index}
      />
      <span aria-hidden="true" className="answer-option__marker">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="answer-option__copy">{option}</span>
    </label>
  );
}

function StatusIcon({ is_correct }: { is_correct: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="result-status__icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      {is_correct ? (
        <path d="m6.5 12.5 3.3 3.3 7.7-8" stroke="currentColor" strokeWidth="2.3" />
      ) : (
        <path d="m8 8 8 8m0-8-8 8" stroke="currentColor" strokeWidth="2.3" />
      )}
    </svg>
  );
}

export function ResultStatus({ is_correct }: { is_correct: boolean }) {
  return (
    <span
      className={`result-status ${
        is_correct ? "result-status--correct" : "result-status--incorrect"
      }`}
    >
      <StatusIcon is_correct={is_correct} />
      {is_correct ? "Acierto" : "Por reforzar"}
    </span>
  );
}

type feedback_panel_props = {
  children: ReactNode;
  id?: string;
  tone: "success" | "danger";
};

export function FeedbackPanel({ children, id, tone }: feedback_panel_props) {
  const is_correct = tone === "success";

  return (
    <div
      aria-atomic="true"
      className={`feedback-panel feedback-panel--${tone}`}
      id={id}
      role="status"
    >
      <div className="feedback-panel__heading">
        <StatusIcon is_correct={is_correct} />
        <p>{is_correct ? "Correcto." : "Por reforzar."}</p>
      </div>
      <div className="feedback-panel__body">{children}</div>
    </div>
  );
}

type score_summary_props = {
  correct: number;
  description: string;
  total: number;
};

export function ScoreSummary({ correct, description, total }: score_summary_props) {
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
  const tone = percentage >= 80 ? "success" : percentage >= 60 ? "accent" : "danger";

  return (
    <section className={`score-summary score-summary--${tone}`}>
      <div className="score-summary__metric" aria-hidden="true">
        <strong>{correct}</strong>
        <span>/ {total}</span>
      </div>
      <div className="score-summary__content">
        <p className="score-summary__label">Resultado general</p>
        <h2 className="score-summary__title">
          {correct} de {total} respuestas correctas
        </h2>
        <p className="score-summary__description">{description}</p>
        <div
          aria-label={`${percentage}% de respuestas correctas`}
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={percentage}
          className="score-summary__track"
          role="progressbar"
        >
          <span style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </section>
  );
}

type answer_review_card_props = {
  action?: ReactNode;
  collapsible?: boolean;
  context?: string;
  index?: number;
  is_correct: boolean;
  question: question;
  selected_option_index: number;
  total?: number;
};

function AnswerReviewBody({
  action,
  is_correct,
  question,
  selected_option_index,
}: Pick<
  answer_review_card_props,
  "action" | "is_correct" | "question" | "selected_option_index"
>) {
  return (
    <div className="answer-review">
      <dl className="answer-review__answers">
        <div className={is_correct ? "answer-review__answer--correct" : ""}>
          <dt>Tu respuesta:</dt>
          <dd>{question.options[selected_option_index]}</dd>
        </div>
        {!is_correct ? (
          <div className="answer-review__answer--correct">
            <dt>Respuesta correcta:</dt>
            <dd>{question.options[question.correct_option_index]}</dd>
          </div>
        ) : null}
      </dl>
      <div className="answer-review__explanation">
        <p className="answer-review__label">Por qué</p>
        <p>{question.explanation}</p>
      </div>
      {!is_correct && question.common_error ? (
        <div className="answer-review__common-error">
          <p className="answer-review__label">Error común</p>
          <p>{question.common_error}</p>
        </div>
      ) : null}
      {action ? <div className="answer-review__action">{action}</div> : null}
    </div>
  );
}

function ReviewHeading({
  context,
  index,
  is_correct,
  question,
  total,
}: Pick<
  answer_review_card_props,
  "context" | "index" | "is_correct" | "question" | "total"
>) {
  return (
    <div className="answer-review__heading">
      <div className="answer-review__meta">
        <ResultStatus is_correct={is_correct} />
        {context ? <span>{context}</span> : null}
        {index !== undefined && total !== undefined ? (
          <span>
            Pregunta {index} de {total}
          </span>
        ) : null}
      </div>
      <QuestionPrompt compact prompt={question.prompt} stimulus={question.stimulus} />
    </div>
  );
}

export function AnswerReviewCard({
  action,
  collapsible = false,
  context,
  index,
  is_correct,
  question,
  selected_option_index,
  total,
}: answer_review_card_props) {
  const class_name = `result-card ${
    is_correct ? "result-card--correct" : "result-card--incorrect"
  }`;

  if (collapsible) {
    return (
      <details className={class_name} open={!is_correct}>
        <summary className="result-card__summary">
          <ReviewHeading
            context={context}
            index={index}
            is_correct={is_correct}
            question={question}
            total={total}
          />
          <span className="result-card__toggle">
            {is_correct ? "Ver detalle" : "Ocultar detalle"}
          </span>
        </summary>
        <AnswerReviewBody
          action={action}
          is_correct={is_correct}
          question={question}
          selected_option_index={selected_option_index}
        />
      </details>
    );
  }

  return (
    <article className={class_name}>
      <ReviewHeading
        context={context}
        index={index}
        is_correct={is_correct}
        question={question}
        total={total}
      />
      <AnswerReviewBody
        action={action}
        is_correct={is_correct}
        question={question}
        selected_option_index={selected_option_index}
      />
    </article>
  );
}
