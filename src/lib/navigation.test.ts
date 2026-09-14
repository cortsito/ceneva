import { describe, expect, it } from "vitest";

import { base_routes, primary_navigation } from "@/lib/navigation";

describe("navegación base", () => {
  it("mantiene los cinco destinos globales definidos por el producto", () => {
    expect(primary_navigation).toHaveLength(5);
    expect(primary_navigation.map((item) => item.href)).toEqual([
      "/",
      "/ruta",
      "/practica",
      "/simulacro",
      "/progreso",
    ]);
  });

  it("declara rutas públicas sin duplicados", () => {
    expect(new Set(base_routes).size).toBe(base_routes.length);
  });
});
