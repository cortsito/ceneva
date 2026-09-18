import { describe, expect, it } from "vitest";

import { theme_preference_storage_key } from "./theme-preference";
import { create_local_storage_theme_repository } from "./theme-repository";

class memory_storage {
  private readonly values = new Map<string, string>();

  getItem(key: string): string | null {
    return this.values.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value);
  }
}

describe("local storage theme repository", () => {
  it("recupera system ante datos ausentes o inválidos", () => {
    const storage = new memory_storage();
    const repository = create_local_storage_theme_repository(storage);

    expect(repository.read()).toBe("system");

    storage.setItem(theme_preference_storage_key, "auto");
    expect(repository.read()).toBe("system");
  });

  it("persiste una preferencia explícita y la recupera", () => {
    const storage = new memory_storage();
    const repository = create_local_storage_theme_repository(storage);

    repository.write("dark");
    expect(repository.read()).toBe("dark");

    repository.write("light");
    expect(repository.read()).toBe("light");
  });

  it("no lanza y recupera system cuando no hay almacenamiento disponible", () => {
    const repository = create_local_storage_theme_repository(undefined);

    expect(repository.read()).toBe("system");
    expect(() => repository.write("dark")).not.toThrow();
  });

  it("no lanza y recupera system cuando el almacenamiento falla", () => {
    const failing_storage = {
      getItem() {
        throw new Error("storage blocked");
      },
      setItem() {
        throw new Error("storage blocked");
      },
    };
    const repository = create_local_storage_theme_repository(failing_storage);

    expect(repository.read()).toBe("system");
    expect(() => repository.write("dark")).not.toThrow();
  });
});
