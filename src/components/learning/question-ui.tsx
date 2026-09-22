"use client";

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

type feedback_panel_props = {
  children: React.ReactNode;
  id?: string;
  tone: "success" | "danger";
};

export function FeedbackPanel({ children, id, tone }: feedback_panel_props) {
  return (
    <div
      aria-atomic="true"
      className={`feedback-panel feedback-panel--${tone}`}
      id={id}
      role="status"
    >
      {children}
    </div>
  );
}
