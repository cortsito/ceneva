"use client";

import {
  get_next_theme_preference,
  type theme_preference,
} from "@/lib/theme/theme-preference";

import { useThemePreference } from "./use-theme-preference";

const theme_preference_label: Record<theme_preference, string> = {
  light: "Claro",
  dark: "Oscuro",
  system: "Sistema",
};

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.5M12 19v2.5M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2.5 12H5M19 12h2.5M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <rect height="12" rx="1.5" width="18" x="3" y="4" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

const theme_preference_icon: Record<theme_preference, () => React.JSX.Element> = {
  light: SunIcon,
  dark: MoonIcon,
  system: SystemIcon,
};

export function ThemeToggle() {
  const { preference, set_preference } = useThemePreference();
  const next_preference = get_next_theme_preference(preference);
  const Icon = theme_preference_icon[preference];

  return (
    <button
      aria-label={`Tema: ${theme_preference_label[preference]}. Cambiar a ${theme_preference_label[next_preference]}.`}
      className="theme-toggle"
      onClick={() => set_preference(next_preference)}
      type="button"
    >
      <Icon />
      <span aria-hidden="true" className="theme-toggle__label">
        {theme_preference_label[preference]}
      </span>
    </button>
  );
}
