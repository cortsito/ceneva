"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import { resolve_theme, type theme_preference } from "@/lib/theme/theme-preference";
import { create_browser_theme_repository } from "@/lib/theme/theme-repository";

const use_isomorphic_layout_effect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

function get_system_prefers_dark(): boolean {
  return typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;
}

function apply_theme_preference(preference: theme_preference): void {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute(
    "data-theme",
    resolve_theme(preference, get_system_prefers_dark()),
  );
}

export function useThemePreference(): {
  preference: theme_preference;
  set_preference: (next_preference: theme_preference) => void;
} {
  const [preference, set_preference_state] = useState<theme_preference>("system");

  use_isomorphic_layout_effect(() => {
    const stored_preference = create_browser_theme_repository().read();

    set_preference_state(stored_preference);
    apply_theme_preference(stored_preference);
  }, []);

  useEffect(() => {
    if (preference !== "system" || typeof window.matchMedia !== "function") {
      return;
    }

    const media_query = window.matchMedia("(prefers-color-scheme: dark)");

    function handle_system_preference_change() {
      apply_theme_preference("system");
    }

    media_query.addEventListener("change", handle_system_preference_change);

    return () => {
      media_query.removeEventListener("change", handle_system_preference_change);
    };
  }, [preference]);

  const set_preference = useCallback((next_preference: theme_preference) => {
    set_preference_state(next_preference);
    apply_theme_preference(next_preference);
    create_browser_theme_repository().write(next_preference);
  }, []);

  return { preference, set_preference };
}
