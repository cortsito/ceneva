import { expect, test, type Page } from "@playwright/test";

const base_routes = [
  "/",
  "/onboarding",
  "/diagnostico",
  "/ruta",
  "/ruta/pensamiento-matematico",
  "/ruta/cultura-digital",
  "/ruta/conciencia-historica",
  "/ruta/humanidades",
  "/leccion/pm-tipos-de-variables-01",
  "/leccion/cd-identidad-digital-01",
  "/leccion/ch-conquista-de-pueblos-originarios-01",
  "/leccion/hu-filosofia-mito-y-ciencia-01",
  "/ruta/ciencias-naturales-experimentales-y-tecnologia",
  "/leccion/cn-tipos-de-enlaces-01",
  "/ruta/lengua-y-comunicacion",
  "/leccion/lc-titulo-del-texto-expositivo-01",
  "/ruta/ciencias-sociales",
  "/leccion/cs-necesidades-materiales-01",
  "/practica",
  "/practica/pm-1-1-1-tipos-de-variables",
  "/practica/cd-2-1-1-elementos-de-la-identidad-digital",
  "/practica/ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos",
  "/practica/hu-4-1-1-filosofia-mito-y-ciencia",
  "/practica/cn-5-1-1-tipos-de-enlaces",
  "/practica/lc-6-1-1-titulo-del-texto-expositivo",
  "/practica/cs-7-1-1-necesidades-materiales-vitales-y-no-vitales",
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

const cultura_digital_identidad_correct_options = [
  "su historial de comentarios, reacciones y publicaciones en distintos servicios en línea",
  "sí forma",
  "sí, porque pueden asociarse con su actividad en línea aunque no use su nombre real",
  "actividad y metadatos asociados a la persona",
  "1b, 2c, 3a",
];

test("la comprobación de cultura digital responde desde el teclado con feedback explicado", async ({
  page,
}) => {
  await page.goto("/leccion/cd-identidad-digital-01");

  const first_option = page.getByRole("radio", {
    name: "la contraseña que usa para iniciar sesión en sus cuentas",
  });

  await expect(first_option).toBeEnabled();
  await first_option.focus();
  await page.keyboard.press("ArrowDown");

  await expect(
    page.getByRole("radio", {
      name: "su historial de comentarios, reacciones y publicaciones en distintos servicios en línea",
    }),
  ).toBeChecked();
  await expect(page.getByRole("status").first()).toContainText("correcto.");
  await expect(page.getByRole("status").first()).toContainText(
    "la identidad digital reúne datos de perfil, contenido publicado e interacciones",
  );
});

test("el flujo completo de cultura digital persiste tras recargar y no afecta el progreso de pensamiento matemático", async ({
  page,
}) => {
  await page.goto("/ruta");

  await expect(
    page.getByRole("link", { name: "explorar pensamiento matemático" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "explorar cultura digital" }).click();

  await expect(page).toHaveURL("/ruta/cultura-digital");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "ciudadanía digital",
  );

  const blocked_topic = page
    .getByRole("heading", { name: "medidas de seguridad digital" })
    .locator("xpath=ancestor::article");

  await expect(blocked_topic.getByText("bloqueado", { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "estudiar identidad digital" }).click();

  await expect(page).toHaveURL("/leccion/cd-identidad-digital-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("identidad digital");

  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/practica/cd-2-1-1-elementos-de-la-identidad-digital");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "elementos de la identidad digital",
  );

  for (const [
    index,
    option_label,
  ] of cultura_digital_identidad_correct_options.entries()) {
    const is_last_question =
      index === cultura_digital_identidad_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "volver a identidad digital" }).click();

  await expect(page).toHaveURL("/leccion/cd-identidad-digital-01");

  await page.goto("/ruta/cultura-digital");

  const identidad_topic = page
    .getByRole("heading", { name: "elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(identidad_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(identidad_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();
});

test("la práctica de cultura digital se puede responder en pantalla móvil", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/practica/cd-2-1-1-elementos-de-la-identidad-digital");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "elementos de la identidad digital",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(
    page,
    "su historial de comentarios, reacciones y publicaciones en distintos servicios en línea",
    "siguiente pregunta",
  );

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

test("las rutas base se muestran sin error", async ({ page }) => {
  for (const route of base_routes) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

const tipos_de_muestra_correct_options = [
  "sistemático",
  "estratificado",
  "por conglomerados",
  "una muestra de cada turno",
  "1c, 2b, 3a",
];

async function answer_topic_question(
  page: Page,
  option_label: string,
  final_action_label: "siguiente pregunta" | "ver resultados",
) {
  await page.getByRole("radio", { name: option_label, exact: true }).check();
  await page.getByRole("button", { name: "confirmar respuesta" }).click();
  await page.getByRole("button", { name: final_action_label }).click();
}

async function complete_tipos_de_muestra_practice(page: Page) {
  await page.goto("/practica/pm-1-1-2-tipos-de-muestra");

  for (const [index, option_label] of tipos_de_muestra_correct_options.entries()) {
    const is_last_question = index === tipos_de_muestra_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }
}

test("completar una práctica por tema muestra resultados explicados y enlaza a la lección", async ({
  page,
}) => {
  await page.goto("/practica/pm-1-1-2-tipos-de-muestra");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("tipos de muestra");
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  for (const [index, option_label] of tipos_de_muestra_correct_options.entries()) {
    const is_last_question = index === tipos_de_muestra_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "volver a tipos de muestreo" }).click();

  await expect(page).toHaveURL("/leccion/pm-tipos-de-muestra-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("tipos de muestreo");
});

test("una práctica por tema con id inválido responde con not found", async ({
  page,
}) => {
  await page.goto("/practica/tema-inexistente");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "no encontramos esta página.",
  );
});

test("los intentos de la práctica por tema persisten después de recargar", async ({
  page,
}) => {
  await complete_tipos_de_muestra_practice(page);

  await page.goto("/ruta/pensamiento-matematico");

  const topic_card = page
    .getByRole("heading", { name: "tipos de muestra" })
    .locator("xpath=ancestor::article");

  await expect(topic_card.getByText("5 intentos", { exact: false })).toBeVisible();
  await expect(topic_card.getByText("precisión 100%", { exact: false })).toBeVisible();

  await page.reload();

  await expect(topic_card.getByText("5 intentos", { exact: false })).toBeVisible();
  await expect(topic_card.getByText("precisión 100%", { exact: false })).toBeVisible();
});

test("un error de práctica por tema entra a la cola de repaso y sale al corregirse", async ({
  page,
}) => {
  await page.goto("/practica/pm-1-1-2-tipos-de-muestra");

  await page.getByRole("radio", { name: "estratificado", exact: true }).check();
  await page.getByRole("button", { name: "confirmar respuesta" }).click();

  await page.goto("/practica");

  await expect(page.getByText("tipos de muestra", { exact: false })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "repasar tipos de muestreo" }),
  ).toBeVisible();

  await page.getByRole("radio", { name: "sistemático", exact: true }).check();

  await expect(page.getByRole("status").first()).toContainText("correcto.");
  await expect(page.getByRole("status").first()).toContainText(
    "la selección comienza en una posición aleatoria",
  );

  await page.reload();

  await expect(
    page.getByText("no tienes preguntas pendientes de repaso", { exact: false }),
  ).toBeVisible();
});

test("storage malformado no impide renderizar la cola de repaso", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("ceneva.learner-progress", "{");
  });

  await page.goto("/practica");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "repasa tus errores pendientes.",
  );
  await expect(
    page.getByText("no tienes preguntas pendientes de repaso", { exact: false }),
  ).toBeVisible();
});

test("el inicio recomienda continuar la primera lección con progreso vacío", async ({
  page,
}) => {
  await page.goto("/");

  const next_action_link = page.getByRole("link", {
    name: "continuar variables estadísticas",
  });

  await expect(next_action_link).toBeVisible();
  await next_action_link.focus();
  await page.keyboard.press("Enter");

  await expect(page).toHaveURL("/leccion/pm-tipos-de-variables-01");
});

test("inicio y progreso recomiendan practicar tras completar la lección de un tema, y persiste tras recargar", async ({
  page,
}) => {
  await page.goto("/leccion/pm-tipos-de-variables-01");
  await page.getByRole("button", { name: "marcar lección como completada" }).click();

  await page.goto("/");

  await expect(
    page.getByRole("link", { name: "practicar tipos de variables" }),
  ).toBeVisible();

  await page.goto("/progreso");

  const lessons_stat = page
    .getByText("lecciones completadas", { exact: true })
    .locator("xpath=following-sibling::*[1]");

  await expect(lessons_stat).toHaveText("1/4");
  await expect(
    page.getByRole("link", { name: "practicar tipos de variables" }),
  ).toBeVisible();

  await page.reload();

  await expect(lessons_stat).toHaveText("1/4");
  await expect(
    page.getByRole("link", { name: "practicar tipos de variables" }),
  ).toBeVisible();

  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  await expect(
    page.getByRole("link", { name: "practicar tipos de variables" }),
  ).toBeVisible();
});

const diagnostic_correct_options = [
  "el número de llamadas recibidas en un día",
  "sistemático",
  "`8.5`",
  "el conjunto b, porque sus datos se alejan más de la media",
];

async function answer_diagnostic_question(
  page: Page,
  option_label: string,
  final_action_label: "siguiente pregunta" | "ver resultado",
) {
  await page.getByRole("radio", { name: option_label, exact: true }).check();
  await page.getByRole("button", { name: final_action_label }).click();
}

async function complete_pilot_diagnostic(page: Page) {
  await page.goto("/diagnostico");

  for (const [index, option_label] of diagnostic_correct_options.entries()) {
    const is_last_question = index === diagnostic_correct_options.length - 1;

    await answer_diagnostic_question(
      page,
      option_label,
      is_last_question ? "ver resultado" : "siguiente pregunta",
    );
  }
}

test("el diagnóstico responde desde el teclado y no revela resultados hasta terminar", async ({
  page,
}) => {
  await page.goto("/diagnostico");

  await expect(page.getByText("pregunta 1 de 4")).toBeVisible();

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
  await page.getByRole("button", { name: "siguiente pregunta" }).click();

  await expect(page.getByText("pregunta 2 de 4")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);
});

test("completar el diagnóstico muestra resultados explicados por tema y recomienda una lección", async ({
  page,
}) => {
  await complete_pilot_diagnostic(page);

  await expect(
    page.getByRole("heading", { level: 2, name: "4 de 4 respuestas correctas" }),
  ).toBeVisible();
  await expect(page.getByText("tema 1 de 4 · tipos de variables")).toBeVisible();
  await expect(page.getByText("tema 4 de 4 · medidas de dispersión")).toBeVisible();
  await expect(
    page.getByText("empieza por tipos de variables.", { exact: false }),
  ).toBeVisible();

  await page.getByRole("link", { name: "ir a variables estadísticas" }).click();

  await expect(page).toHaveURL("/leccion/pm-tipos-de-variables-01");
});

test("una respuesta incorrecta del diagnóstico recomienda el tema correspondiente", async ({
  page,
}) => {
  await page.goto("/diagnostico");

  await answer_diagnostic_question(
    page,
    "el peso de una mochila en kilogramos",
    "siguiente pregunta",
  );

  for (const [index, option_label] of diagnostic_correct_options.slice(1).entries()) {
    const is_last_question = index === diagnostic_correct_options.length - 2;

    await answer_diagnostic_question(
      page,
      option_label,
      is_last_question ? "ver resultado" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "3 de 4 respuestas correctas" }),
  ).toBeVisible();
  await expect(
    page.getByText("empieza por tipos de variables.", { exact: false }),
  ).toBeVisible();
});

test("los intentos del diagnóstico persisten como historial y recargar reinicia la sesión visual", async ({
  page,
}) => {
  await complete_pilot_diagnostic(page);

  await page.goto("/ruta/pensamiento-matematico");

  const topic_card = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(topic_card.getByText("1 intentos", { exact: false })).toBeVisible();
  await expect(topic_card.getByText("precisión 100%", { exact: false })).toBeVisible();

  await page.goto("/diagnostico");

  await expect(page.getByText("pregunta 1 de 4")).toBeVisible();

  await page.reload();

  await expect(page.getByText("pregunta 1 de 4")).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  await expect(topic_card.getByText("1 intentos", { exact: false })).toBeVisible();
});

const pilot_simulator_correct_options = [
  "el número de llamadas recibidas en un día",
  "categórica",
  "cualitativa",
  "se obtiene por medición y puede incluir fracciones",
  "1b, 2a, 3c",
  "sistemático",
  "estratificado",
  "por conglomerados",
  "una muestra de cada turno",
  "1c, 2b, 3a",
  "`8.5`",
  "`7`",
  "azul",
  "la mediana",
  "1b, 2c, 3a",
  "`8 / 3`",
  "`1`",
  "el conjunto b, porque sus datos se alejan más de la media",
  "elevar al cuadrado las diferencias, sumarlas y dividir entre el número de datos",
  "1c, 2b, 3a",
];

async function answer_simulator_question(
  page: Page,
  option_label: string,
  final_action_label: "siguiente pregunta" | "ver reporte",
) {
  await page.getByRole("radio", { name: option_label, exact: true }).check();
  await page.getByRole("button", { name: final_action_label }).click();
}

async function complete_pilot_simulator(
  page: Page,
  option_overrides: Record<number, string> = {},
) {
  await page.goto("/simulacro");

  for (const [index, default_option] of pilot_simulator_correct_options.entries()) {
    const is_last_question = index === pilot_simulator_correct_options.length - 1;

    await answer_simulator_question(
      page,
      option_overrides[index] ?? default_option,
      is_last_question ? "ver reporte" : "siguiente pregunta",
    );
  }
}

test("el simulacro responde desde el teclado y no revela resultados hasta el reporte final", async ({
  page,
}) => {
  await page.goto("/simulacro");

  await expect(page.getByText("pregunta 1 de 20")).toBeVisible();

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

  await page.getByRole("button", { name: "siguiente pregunta" }).click();

  await expect(page.getByText("pregunta 2 de 20")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);
});

test("completar el simulacro con un error muestra el reporte agrupado por tema y enlaza el error a su lección", async ({
  page,
}) => {
  await complete_pilot_simulator(page, { 6: "por conglomerados" });

  await expect(
    page.getByRole("heading", { level: 2, name: "19 de 20 respuestas correctas" }),
  ).toBeVisible();

  const mismatched_topic = page
    .getByText("tipos de muestra", { exact: true })
    .locator("xpath=ancestor::article");

  await expect(
    mismatched_topic.getByText("4 de 5 correctas", { exact: false }),
  ).toBeVisible();
  await expect(
    mismatched_topic.getByText("una universidad separa a su alumnado", {
      exact: false,
    }),
  ).toBeVisible();
  await expect(
    mismatched_topic.getByText("tu respuesta:", { exact: false }),
  ).toContainText("por conglomerados");
  await expect(
    mismatched_topic.getByText("respuesta correcta:", { exact: false }),
  ).toContainText("estratificado");

  const flawless_topic = page
    .getByText("tipos de variables", { exact: true })
    .locator("xpath=ancestor::article");

  await expect(
    flawless_topic.getByText("respondiste correctamente todas las preguntas"),
  ).toBeVisible();

  await mismatched_topic
    .getByRole("link", { name: "repasar tipos de muestreo" })
    .click();

  await expect(page).toHaveURL("/leccion/pm-tipos-de-muestra-01");
});

test("los intentos del simulacro persisten como historial y recargar reinicia la sesión visual", async ({
  page,
}) => {
  await complete_pilot_simulator(page);

  await page.goto("/ruta/pensamiento-matematico");

  const topic_card = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(topic_card.getByText("5 intentos", { exact: false })).toBeVisible();
  await expect(topic_card.getByText("precisión 100%", { exact: false })).toBeVisible();

  await page.goto("/simulacro");

  await expect(page.getByText("pregunta 1 de 20")).toBeVisible();

  await page.reload();

  await expect(page.getByText("pregunta 1 de 20")).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  await expect(topic_card.getByText("5 intentos", { exact: false })).toBeVisible();
});

test("el simulacro se puede responder en pantalla móvil", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/simulacro");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "valida tu preparación.",
  );
  await expect(page.getByText("pregunta 1 de 20")).toBeVisible();

  await answer_simulator_question(
    page,
    "el número de llamadas recibidas en un día",
    "siguiente pregunta",
  );

  await expect(page.getByText("pregunta 2 de 20")).toBeVisible();
});

const ch_movimientos_correct_options = [
  "a la guerra de castas",
  "yaqui",
  "el despojo de tierras",
  "1b, 2c, 3a",
  "2, 3, 1, 4",
  "felipe carrillo puerto",
  "la danza del venado",
  "la cuaresma y semana santa yaqui",
  "la organización comunal en defensa de su territorio y sus recursos",
  "1b, 2c, 3a",
];

test("la ruta de conciencia histórica muestra sus cinco temas y el tema partido en dos lecciones", async ({
  page,
}) => {
  await page.goto("/ruta");

  await page.getByRole("link", { name: "explorar conciencia histórica" }).click();

  await expect(page).toHaveURL("/ruta/conciencia-historica");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "perspectivas del méxico antiguo y virreinal en los contextos globales",
  );

  const movimientos_topic = page
    .getByRole("heading", {
      name: "movimientos de resistencia de los pueblos originarios y su impacto actual",
    })
    .locator("xpath=ancestor::article");

  await expect(movimientos_topic.getByText("bloqueado", { exact: true })).toBeVisible();
  await expect(
    movimientos_topic.getByRole("link", {
      name: "estudiar resistencias de pueblos originarios",
    }),
  ).toBeVisible();
  await expect(
    movimientos_topic.getByRole("link", {
      name: "estudiar impacto cultural de resistencias originarias",
    }),
  ).toBeVisible();

  const conquista_topic = page
    .getByRole("heading", {
      name: "conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos xvi a xix",
    })
    .locator("xpath=ancestor::article");

  await expect(conquista_topic.getByText("disponible", { exact: true })).toBeVisible();
});

test("completar ambas lecciones del tema partido conciencia histórica habilita su práctica de diez preguntas con enlaces exactos por lección, persiste tras recargar y no afecta otras áreas", async ({
  page,
}) => {
  await page.goto("/leccion/ch-conquista-de-pueblos-originarios-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "conquista de pueblos originarios",
  );
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/ch-resistencias-de-pueblos-originarios-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "resistencias de pueblos originarios",
  );
  await expect(
    page.getByRole("link", { name: "repasa ch-conquista-de-pueblos-originarios-01" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/ruta/conciencia-historica");

  const movimientos_topic = page
    .getByRole("heading", {
      name: "movimientos de resistencia de los pueblos originarios y su impacto actual",
    })
    .locator("xpath=ancestor::article");

  await expect(
    movimientos_topic.getByText("en progreso", { exact: true }),
  ).toBeVisible();

  await page.goto("/leccion/ch-impacto-cultural-de-resistencias-originarias-02");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "impacto cultural de resistencias originarias",
  );
  await expect(
    page.getByRole("link", {
      name: "repasa ch-resistencias-de-pueblos-originarios-01",
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto(
    "/practica/ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "movimientos de resistencia de los pueblos originarios y su impacto actual",
  );
  await expect(
    page.getByText("responde las 10 preguntas de este tema", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "repasar resistencias de pueblos originarios" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "repasar impacto cultural de resistencias originarias",
    }),
  ).toBeVisible();
  await expect(page.getByText("pregunta 1 de 10")).toBeVisible();

  for (const [index, option_label] of ch_movimientos_correct_options.entries()) {
    const is_last_question = index === ch_movimientos_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "10 de 10 respuestas correctas" }),
  ).toBeVisible();

  const results = page
    .getByRole("list", { name: "resultado por pregunta" })
    .getByRole("listitem");

  await expect(results).toHaveCount(10);
  await expect(
    results
      .nth(0)
      .getByRole("link", { name: "repasar resistencias de pueblos originarios" }),
  ).toBeVisible();
  await expect(
    results
      .nth(4)
      .getByRole("link", { name: "repasar resistencias de pueblos originarios" }),
  ).toBeVisible();
  await expect(
    results.nth(5).getByRole("link", {
      name: "repasar impacto cultural de resistencias originarias",
    }),
  ).toBeVisible();
  await expect(
    results.nth(9).getByRole("link", {
      name: "repasar impacto cultural de resistencias originarias",
    }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "volver a resistencias de pueblos originarios" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "volver a impacto cultural de resistencias originarias",
    }),
  ).toBeVisible();

  await page
    .getByRole("link", {
      name: "volver a impacto cultural de resistencias originarias",
    })
    .click();

  await expect(page).toHaveURL(
    "/leccion/ch-impacto-cultural-de-resistencias-originarias-02",
  );

  await page.goto("/ruta/conciencia-historica");

  const dominated_topic = page
    .getByRole("heading", {
      name: "movimientos de resistencia de los pueblos originarios y su impacto actual",
    })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();
});

test("la práctica del tema partido conciencia histórica responde desde el teclado sin revelar aciertos antes de tiempo", async ({
  page,
}) => {
  await page.goto(
    "/practica/ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios",
  );

  await expect(page.getByText("pregunta 1 de 10")).toBeVisible();

  await answer_topic_question(page, "a la guerra de castas", "siguiente pregunta");

  await expect(page.getByText("pregunta 2 de 10")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  const second_question_option = page.getByRole("radio", { name: "usumacinta" });

  await expect(second_question_option).toBeEnabled();
  await second_question_option.focus();
  await page.keyboard.press("ArrowDown");

  await expect(page.getByRole("radio", { name: "yaqui" })).toBeChecked();

  await page.getByRole("button", { name: "confirmar respuesta" }).click();

  await expect(page.getByRole("status").first()).toContainText("correcto.");

  await page.getByRole("button", { name: "siguiente pregunta" }).click();

  await expect(page.getByText("pregunta 3 de 10")).toBeVisible();
});

test("la práctica de un tema de una sola lección de conciencia histórica se puede responder en pantalla móvil", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(
    "/practica/ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos",
  );

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos xvi a xix",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(page, "a los purépechas", "siguiente pregunta");

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

const hu_fmc_correct_options = [
  "pensamiento mítico",
  "filosófico",
  "pensamiento científico",
  "porque se valida por la coherencia del argumento, no por evidencia empírica contrastable",
  "1b, 2c, 3a",
];

test("la ruta de humanidades muestra sus cuatro temas, con los tres dependientes bloqueados hasta completar la lección base", async ({
  page,
}) => {
  await page.goto("/ruta");

  await page.getByRole("link", { name: "explorar humanidades" }).click();

  await expect(page).toHaveURL("/ruta/humanidades");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "fundamentos del pensamiento filosófico",
  );

  const base_topic = page
    .getByRole("heading", { name: "filosofía, mito y ciencia" })
    .locator("xpath=ancestor::article");

  await expect(base_topic.getByText("disponible", { exact: true })).toBeVisible();

  for (const topic_title of [
    "pensamiento crítico",
    "pensamiento existencialista",
    "doxa y episteme",
  ]) {
    const dependent_topic = page
      .getByRole("heading", { name: topic_title })
      .locator("xpath=ancestor::article");

    await expect(dependent_topic.getByText("bloqueado", { exact: true })).toBeVisible();
  }
});

test("completar la lección base de humanidades desbloquea una lección dependiente, y la práctica del tema base persiste como dominado tras recargar sin afectar otras áreas", async ({
  page,
}) => {
  await page.goto("/leccion/hu-filosofia-mito-y-ciencia-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "filosofía, mito y ciencia",
  );
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/hu-pensamiento-critico-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "pensamiento crítico",
  );
  await expect(
    page.getByRole("link", { name: "repasa hu-filosofia-mito-y-ciencia-01" }),
  ).toBeVisible();

  await page.goto("/ruta/humanidades");

  const dependent_topic = page
    .getByRole("heading", { name: "pensamiento crítico" })
    .locator("xpath=ancestor::article");

  await expect(dependent_topic.getByText("disponible", { exact: true })).toBeVisible();

  await page.goto("/practica/hu-4-1-1-filosofia-mito-y-ciencia");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "filosofía, mito y ciencia",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  const second_option = page.getByRole("radio", {
    name: "pensamiento filosófico",
    exact: true,
  });

  await expect(second_option).toBeEnabled();
  await second_option.focus();
  await page.keyboard.press("ArrowUp");

  await expect(
    page.getByRole("radio", { name: hu_fmc_correct_options[0], exact: true }),
  ).toBeChecked();

  await page.getByRole("button", { name: "confirmar respuesta" }).click();
  await expect(page.getByRole("status").first()).toContainText("correcto.");
  await page.getByRole("button", { name: "siguiente pregunta" }).click();

  for (const [index, option_label] of hu_fmc_correct_options.entries()) {
    if (index === 0) {
      continue;
    }

    const is_last_question = index === hu_fmc_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "volver a filosofía, mito y ciencia" }).click();

  await expect(page).toHaveURL("/leccion/hu-filosofia-mito-y-ciencia-01");

  await page.goto("/ruta/humanidades");

  const dominated_topic = page
    .getByRole("heading", { name: "filosofía, mito y ciencia" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/conciencia-historica");

  const conciencia_historica_topic = page
    .getByRole("heading", {
      name: "conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos xvi a xix",
    })
    .locator("xpath=ancestor::article");

  await expect(
    conciencia_historica_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    conciencia_historica_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();
});

test("la práctica de un tema de humanidades se puede responder en pantalla móvil", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/practica/hu-4-1-4-doxa-y-episteme");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("doxa y episteme");
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(
    page,
    "a doxa, porque se sostiene por costumbre y no por un fundamento verificable",
    "siguiente pregunta",
  );

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

const cn_enl_correct_options = [
  "iónico",
  "covalente",
  "metálico",
  "porque el magnesio, al ser metal, cede electrones al oxígeno, que los recibe al ser no metal",
  "1c, 2a, 3b",
];

test("la ruta de ciencias naturales muestra sus cinco temas, con conservación de la materia bloqueado hasta completar enlaces químicos", async ({
  page,
}) => {
  await page.goto("/ruta");

  await page
    .getByRole("link", {
      name: "explorar ciencias naturales, experimentales y tecnología",
    })
    .click();

  await expect(page).toHaveURL("/ruta/ciencias-naturales-experimentales-y-tecnologia");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "la materia y sus interacciones",
  );

  for (const topic_title of [
    "tipos de enlaces iónico, covalente y metálico",
    "características de los estados de agregación de la materia",
    "conversión de escalas termométricas",
    "ley de coulomb",
  ]) {
    const available_topic = page
      .getByRole("heading", { name: topic_title })
      .locator("xpath=ancestor::article");

    await expect(
      available_topic.getByText("disponible", { exact: true }),
    ).toBeVisible();
  }

  const conservation_topic = page
    .getByRole("heading", { name: "ley de la conservación de la materia" })
    .locator("xpath=ancestor::article");

  await expect(
    conservation_topic.getByText("bloqueado", { exact: true }),
  ).toBeVisible();
});

test("completar la lección de enlaces químicos desbloquea conservación de la materia, y la práctica del tema base persiste como dominado tras recargar sin afectar otras áreas", async ({
  page,
}) => {
  await page.goto("/leccion/cn-tipos-de-enlaces-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("enlaces químicos");
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/cn-conservacion-de-la-materia-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "conservación de la materia",
  );
  await expect(
    page.getByRole("link", { name: "repasa cn-tipos-de-enlaces-01" }),
  ).toBeVisible();

  await page.goto("/ruta/ciencias-naturales-experimentales-y-tecnologia");

  const conservation_topic = page
    .getByRole("heading", { name: "ley de la conservación de la materia" })
    .locator("xpath=ancestor::article");

  await expect(
    conservation_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();

  await page.goto("/practica/cn-5-1-1-tipos-de-enlaces");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "tipos de enlaces iónico, covalente y metálico",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  const third_option = page.getByRole("radio", { name: "metálico", exact: true });

  await expect(third_option).toBeEnabled();
  await third_option.focus();
  await page.keyboard.press("ArrowUp");

  await expect(
    page.getByRole("radio", { name: cn_enl_correct_options[0], exact: true }),
  ).toBeChecked();

  await page.getByRole("button", { name: "confirmar respuesta" }).click();
  await expect(page.getByRole("status").first()).toContainText("correcto.");
  await page.getByRole("button", { name: "siguiente pregunta" }).click();

  for (const [index, option_label] of cn_enl_correct_options.entries()) {
    if (index === 0) {
      continue;
    }

    const is_last_question = index === cn_enl_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "volver a enlaces químicos" }).click();

  await expect(page).toHaveURL("/leccion/cn-tipos-de-enlaces-01");

  await page.goto("/ruta/ciencias-naturales-experimentales-y-tecnologia");

  const dominated_topic = page
    .getByRole("heading", { name: "tipos de enlaces iónico, covalente y metálico" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/conciencia-historica");

  const conciencia_historica_topic = page
    .getByRole("heading", {
      name: "conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos xvi a xix",
    })
    .locator("xpath=ancestor::article");

  await expect(
    conciencia_historica_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    conciencia_historica_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/humanidades");

  const humanidades_topic = page
    .getByRole("heading", { name: "filosofía, mito y ciencia" })
    .locator("xpath=ancestor::article");

  await expect(
    humanidades_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    humanidades_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();
});

test("la práctica de un tema de ciencias naturales se puede responder en pantalla móvil", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/practica/cn-5-1-4-conversion-de-escalas-termometricas");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "conversión de escalas termométricas",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(page, "68 °f", "siguiente pregunta");

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

const lc_jmc_correct_options = [
  "animal",
  "sedán",
  "2, 3, 1",
  "4, 2, 1, 3",
  "1b, 2a, 3c",
];

test("la ruta de lengua y comunicación muestra sus cuatro temas disponibles desde el inicio, sin prerrequisito", async ({
  page,
}) => {
  await page.goto("/ruta");

  await page.getByRole("link", { name: "explorar lengua y comunicación" }).click();

  await expect(page).toHaveURL("/ruta/lengua-y-comunicacion");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "estrategias de comprensión lectora",
  );

  for (const topic_title of [
    "título del texto expositivo",
    "tipos de relaciones lógicas entre oraciones",
    "jerarquía de la información en mapas conceptuales",
    "tipos de formas textuales de comunicación (resumen, relato simple, reseña y comentario crítico)",
  ]) {
    const topic = page
      .getByRole("heading", { name: topic_title })
      .locator("xpath=ancestor::article");

    await expect(topic.getByText("disponible", { exact: true })).toBeVisible();
  }
});

test("completar la lección de jerarquía en mapas conceptuales habilita su práctica, cuyo resultado enlaza de vuelta y persiste como dominado tras recargar sin afectar otras áreas", async ({
  page,
}) => {
  await page.goto("/leccion/lc-jerarquia-en-mapas-conceptuales-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "jerarquía en mapas conceptuales",
  );
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/practica/lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "jerarquía de la información en mapas conceptuales",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  const second_option = page.getByRole("radio", { name: "reptil", exact: true });

  await expect(second_option).toBeEnabled();
  await second_option.focus();
  await page.keyboard.press("ArrowUp");

  await expect(
    page.getByRole("radio", { name: lc_jmc_correct_options[0], exact: true }),
  ).toBeChecked();

  await page.getByRole("button", { name: "confirmar respuesta" }).click();
  await expect(page.getByRole("status").first()).toContainText("correcto.");
  await page.getByRole("button", { name: "siguiente pregunta" }).click();

  for (const [index, option_label] of lc_jmc_correct_options.entries()) {
    if (index === 0) {
      continue;
    }

    const is_last_question = index === lc_jmc_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: "volver a jerarquía en mapas conceptuales" })
    .click();

  await expect(page).toHaveURL("/leccion/lc-jerarquia-en-mapas-conceptuales-01");

  await page.goto("/ruta/lengua-y-comunicacion");

  const dominated_topic = page
    .getByRole("heading", { name: "jerarquía de la información en mapas conceptuales" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/conciencia-historica");

  const conciencia_historica_topic = page
    .getByRole("heading", {
      name: "conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos xvi a xix",
    })
    .locator("xpath=ancestor::article");

  await expect(
    conciencia_historica_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    conciencia_historica_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/humanidades");

  const humanidades_topic = page
    .getByRole("heading", { name: "filosofía, mito y ciencia" })
    .locator("xpath=ancestor::article");

  await expect(
    humanidades_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    humanidades_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/ciencias-naturales-experimentales-y-tecnologia");

  const ciencias_naturales_topic = page
    .getByRole("heading", { name: "tipos de enlaces iónico, covalente y metálico" })
    .locator("xpath=ancestor::article");

  await expect(
    ciencias_naturales_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    ciencias_naturales_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();
});

test("la práctica de un tema de lengua y comunicación se puede responder en pantalla móvil", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/practica/lc-6-1-4-formas-textuales-de-comunicacion");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "tipos de formas textuales de comunicación (resumen, relato simple, reseña y comentario crítico)",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(page, "resumen", "siguiente pregunta");

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

const cs_fpp_correct_options = [
  "tierra",
  "capital",
  "no, porque el dinero se vuelve capital solo cuando se convierte en un bien productivo usado en el proceso, no mientras permanece ahorrado",
  "quien cose aporta trabajo; quien decide y asume el riesgo aporta organización",
  "1b, 2d, 3a, 4c",
];

test("la ruta de ciencias sociales muestra sus nueve temas, con necesidades, factores y empleo disponibles y el resto bloqueado por su grafo interno", async ({
  page,
}) => {
  await page.goto("/ruta");

  await page.getByRole("link", { name: "explorar ciencias sociales" }).click();

  await expect(page).toHaveURL("/ruta/ciencias-sociales");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "organización económica",
  );

  for (const topic_title of [
    "necesidades materiales vitales y no vitales",
    "factores de los procesos de producción",
    "empleo formal e informal",
  ]) {
    const topic = page
      .getByRole("heading", { name: topic_title })
      .locator("xpath=ancestor::article");

    await expect(topic.getByText("disponible", { exact: true })).toBeVisible();
  }

  for (const topic_title of [
    "tipos de sectores productivos",
    "mecanismos de distribución de la riqueza",
    "mecanismos estatales de redistribución de la riqueza",
    "características del estado de bienestar",
    "características del modelo económico neoliberal",
    "degradación ambiental por las formas de producción",
  ]) {
    const topic = page
      .getByRole("heading", { name: topic_title })
      .locator("xpath=ancestor::article");

    await expect(topic.getByText("bloqueado", { exact: true })).toBeVisible();
  }
});

test("completar la cadena interna de ciencias sociales desbloquea sectores, distribución, redistribución, estado de bienestar y neoliberalismo, la práctica de factores queda dominada y persiste tras recargar sin afectar otras áreas", async ({
  page,
}) => {
  async function complete_lesson(lesson_id: string, title: string) {
    await page.goto(`/leccion/${lesson_id}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(title);
    await page.getByRole("button", { name: "marcar lección como completada" }).click();
    await expect(
      page.getByRole("button", { name: "lección completada" }),
    ).toBeDisabled();
  }

  async function expect_topic_status(topic_title: string, status: string) {
    await page.goto("/ruta/ciencias-sociales");
    const topic = page
      .getByRole("heading", { name: topic_title })
      .locator("xpath=ancestor::article");
    await expect(topic.getByText(status, { exact: true })).toBeVisible();
  }

  await complete_lesson("cs-factores-de-produccion-01", "factores de producción");

  await expect_topic_status("tipos de sectores productivos", "disponible");
  await expect_topic_status("mecanismos de distribución de la riqueza", "disponible");

  await complete_lesson("cs-sectores-productivos-01", "sectores productivos");
  await expect_topic_status(
    "degradación ambiental por las formas de producción",
    "disponible",
  );

  await complete_lesson(
    "cs-distribucion-de-la-riqueza-01",
    "distribución de la riqueza",
  );
  await expect_topic_status(
    "mecanismos estatales de redistribución de la riqueza",
    "disponible",
  );

  await complete_lesson(
    "cs-redistribucion-estatal-de-la-riqueza-01",
    "redistribución estatal de la riqueza",
  );
  await expect_topic_status("características del estado de bienestar", "disponible");

  await complete_lesson("cs-estado-de-bienestar-01", "estado de bienestar");
  await expect_topic_status(
    "características del modelo económico neoliberal",
    "disponible",
  );

  await page.goto("/practica/cs-7-1-2-factores-de-procesos-de-produccion");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "factores de los procesos de producción",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  const second_option = page.getByRole("radio", { name: "capital", exact: true });

  await expect(second_option).toBeEnabled();
  await second_option.focus();
  await page.keyboard.press("ArrowUp");

  await expect(
    page.getByRole("radio", { name: cs_fpp_correct_options[0], exact: true }),
  ).toBeChecked();

  await page.getByRole("button", { name: "confirmar respuesta" }).click();
  await expect(page.getByRole("status").first()).toContainText("correcto.");
  await page.getByRole("button", { name: "siguiente pregunta" }).click();

  for (const [index, option_label] of cs_fpp_correct_options.entries()) {
    if (index === 0) {
      continue;
    }

    const is_last_question = index === cs_fpp_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "volver a factores de producción" }).click();

  await expect(page).toHaveURL("/leccion/cs-factores-de-produccion-01");

  await page.goto("/ruta/ciencias-sociales");

  const dominated_topic = page
    .getByRole("heading", { name: "factores de los procesos de producción" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/lengua-y-comunicacion");

  const lengua_y_comunicacion_topic = page
    .getByRole("heading", { name: "título del texto expositivo" })
    .locator("xpath=ancestor::article");

  await expect(
    lengua_y_comunicacion_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    lengua_y_comunicacion_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();
});

test("la práctica de un tema de ciencias sociales se puede responder en pantalla móvil", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/practica/cs-7-1-1-necesidades-materiales-vitales-y-no-vitales");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "necesidades materiales vitales y no vitales",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(
    page,
    "porque su ausencia prolongada pone en riesgo su supervivencia",
    "siguiente pregunta",
  );

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});
