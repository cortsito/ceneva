import { describe, expect, it } from "vitest";

import {
  get_next_theme_preference,
  is_theme_preference,
  resolve_theme,
} from "./theme-preference";

describe("is_theme_preference", () => {
  it("acepta únicamente los tres valores de preferencia válidos", () => {
    expect(is_theme_preference("light")).toBe(true);
    expect(is_theme_preference("dark")).toBe(true);
    expect(is_theme_preference("system")).toBe(true);
  });

  it("rechaza valores inválidos, vacíos o de otro tipo", () => {
    expect(is_theme_preference("auto")).toBe(false);
    expect(is_theme_preference("")).toBe(false);
    expect(is_theme_preference(null)).toBe(false);
    expect(is_theme_preference(undefined)).toBe(false);
    expect(is_theme_preference(1)).toBe(false);
  });
});

describe("resolve_theme", () => {
  it("respeta una preferencia explícita sin importar el sistema", () => {
    expect(resolve_theme("light", true)).toBe("light");
    expect(resolve_theme("dark", false)).toBe("dark");
  });

  it("sigue la preferencia del sistema cuando la preferencia es system", () => {
    expect(resolve_theme("system", true)).toBe("dark");
    expect(resolve_theme("system", false)).toBe("light");
  });
});

describe("get_next_theme_preference", () => {
  it("cicla en el orden light → dark → system → light", () => {
    expect(get_next_theme_preference("light")).toBe("dark");
    expect(get_next_theme_preference("dark")).toBe("system");
    expect(get_next_theme_preference("system")).toBe("light");
  });
});
