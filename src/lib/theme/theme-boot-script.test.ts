import { describe, expect, it } from "vitest";

import { create_theme_boot_script } from "./theme-boot-script";
import { resolve_theme, theme_preference_storage_key } from "./theme-preference";

function run_boot_script(
  stored_value: string | null,
  system_prefers_dark: boolean,
): { attribute_value: string | undefined; threw: boolean } {
  const fake_window = {
    localStorage: {
      getItem: (key: string) =>
        key === theme_preference_storage_key ? stored_value : null,
    },
    matchMedia: () => ({ matches: system_prefers_dark }),
  };

  let attribute_value: string | undefined;
  const fake_document = {
    documentElement: {
      setAttribute: (name: string, value: string) => {
        if (name === "data-theme") {
          attribute_value = value;
        }
      },
    },
  };

  const run_script = new Function("window", "document", create_theme_boot_script());

  try {
    run_script(fake_window, fake_document);
    return { attribute_value, threw: false };
  } catch {
    return { attribute_value, threw: true };
  }
}

describe("theme boot script", () => {
  it.each([
    ["light", false],
    ["light", true],
    ["dark", false],
    ["dark", true],
    ["system", false],
    ["system", true],
  ] as const)(
    "resuelve %s con sistema oscuro=%s igual que resolve_theme",
    (stored_value, system_prefers_dark) => {
      const { attribute_value } = run_boot_script(stored_value, system_prefers_dark);

      expect(attribute_value).toBe(resolve_theme(stored_value, system_prefers_dark));
    },
  );

  it("cae a system cuando no hay valor guardado o es inválido", () => {
    expect(run_boot_script(null, false).attribute_value).toBe("light");
    expect(run_boot_script(null, true).attribute_value).toBe("dark");
    expect(run_boot_script("auto", true).attribute_value).toBe("dark");
  });

  it("no lanza cuando localStorage o matchMedia fallan", () => {
    const fake_window = {
      localStorage: {
        getItem: () => {
          throw new Error("storage blocked");
        },
      },
    };
    const fake_document = {
      documentElement: {
        setAttribute: () => {
          throw new Error("should not be called");
        },
      },
    };

    const run_script = new Function("window", "document", create_theme_boot_script());

    expect(() => run_script(fake_window, fake_document)).not.toThrow();
  });
});
