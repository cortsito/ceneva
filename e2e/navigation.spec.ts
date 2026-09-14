import { expect, test } from "@playwright/test";

const base_routes = [
  "/",
  "/onboarding",
  "/diagnostico",
  "/ruta",
  "/ruta/pensamiento-matematico",
  "/leccion/pm-tipos-de-variables-01",
  "/practica",
  "/practica/pm-1-1-1-tipos-de-variables",
  "/simulacro",
  "/progreso",
  "/recursos",
];

test("la navegación global lleva a mi ruta", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "mi ruta" }).click();

  await expect(page).toHaveURL(/\/ruta$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "una ruta de estudio",
  );
});

test("la ruta piloto abre una lección markdown real", async ({ page }) => {
  await page.goto("/ruta");

  await page.getByRole("link", { name: "explorar pensamiento matemático" }).click();

  await expect(page).toHaveURL("/ruta/pensamiento-matematico");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "pensamiento estadístico",
  );

  await page.getByRole("link", { name: "estudiar variables estadísticas" }).click();

  await expect(page).toHaveURL("/leccion/pm-tipos-de-variables-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "variables estadísticas",
  );
  await expect(
    page.getByText("clasificar variables cuantitativas, cualitativas y categóricas."),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "explicación" }),
  ).toBeVisible();
});

test("una lección ajena al piloto responde con not found", async ({ page }) => {
  await page.goto("/leccion/pm-probabilidad-simple-01");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "no encontramos esta página.",
  );
});

test("la comprobación responde desde el teclado con feedback explicado", async ({
  page,
}) => {
  await page.goto("/leccion/pm-tipos-de-variables-01");

  const first_option = page.getByRole("radio", {
    name: "el peso de una mochila en kilogramos",
  });

  await expect(first_option).toBeEnabled();
  await first_option.focus();
  await page.keyboard.press("ArrowDown");

  await expect(
    page.getByRole("radio", {
      name: "el número de llamadas recibidas en un día",
    }),
  ).toBeChecked();
  await expect(page.getByRole("status").first()).toContainText("correcto.");
  await expect(page.getByRole("status").first()).toContainText(
    "el número de llamadas se obtiene contando unidades completas.",
  );
});

test("el avance del piloto persiste después de recargar", async ({ page }) => {
  await page.goto("/leccion/pm-tipos-de-variables-01");

  const completion_button = page.getByRole("button", {
    name: "marcar lección como completada",
  });

  await expect(completion_button).toBeEnabled();

  for (const option of [
    "el número de llamadas recibidas en un día",
    "categórica",
    "cualitativa",
    "se obtiene por medición y puede incluir fracciones",
    "1b, 2a, 3c",
  ]) {
    await page.getByRole("radio", { name: option, exact: true }).check();
  }

  await completion_button.click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.reload();

  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/ruta/pensamiento-matematico");

  const route_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(route_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/progreso");

  const progress_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(progress_topic.getByText("dominado", { exact: true })).toBeVisible();
});

test("storage malformado no impide renderizar la ruta piloto", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("ceneva.learner-progress", "{");
  });

  await page.goto("/ruta/pensamiento-matematico");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "pensamiento estadístico",
  );
  await expect(page.getByText("disponible", { exact: true }).first()).toBeVisible();
});

test("las rutas base se muestran sin error", async ({ page }) => {
  for (const route of base_routes) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});
