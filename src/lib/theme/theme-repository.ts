import {
  is_theme_preference,
  theme_preference_storage_key,
  type theme_preference,
} from "./theme-preference";

type storage_like = Pick<Storage, "getItem" | "setItem">;

export type theme_repository = {
  read: () => theme_preference;
  write: (preference: theme_preference) => void;
};

export function create_local_storage_theme_repository(
  storage?: storage_like,
): theme_repository {
  return {
    read() {
      if (!storage) {
        return "system";
      }

      try {
        const stored_value = storage.getItem(theme_preference_storage_key);

        return is_theme_preference(stored_value) ? stored_value : "system";
      } catch {
        return "system";
      }
    },
    write(preference) {
      if (!storage) {
        return;
      }

      try {
        storage.setItem(theme_preference_storage_key, preference);
      } catch {
        return;
      }
    },
  };
}

export function create_browser_theme_repository(): theme_repository {
  if (typeof window === "undefined") {
    return create_local_storage_theme_repository();
  }

  try {
    return create_local_storage_theme_repository(window.localStorage);
  } catch {
    return create_local_storage_theme_repository();
  }
}
