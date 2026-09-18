export const theme_preference_storage_key = "ceneva.interface-theme";

export type theme_preference = "light" | "dark" | "system";
export type resolved_theme = "light" | "dark";

const theme_preference_cycle: readonly theme_preference[] = ["light", "dark", "system"];

export function is_theme_preference(value: unknown): value is theme_preference {
  return value === "light" || value === "dark" || value === "system";
}

export function resolve_theme(
  preference: theme_preference,
  system_prefers_dark: boolean,
): resolved_theme {
  if (preference === "system") {
    return system_prefers_dark ? "dark" : "light";
  }

  return preference;
}

export function get_next_theme_preference(current: theme_preference): theme_preference {
  const current_index = theme_preference_cycle.indexOf(current);
  const next_index = (current_index + 1) % theme_preference_cycle.length;

  return theme_preference_cycle[next_index];
}
