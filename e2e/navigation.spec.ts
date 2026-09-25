import { expect, test, type Page } from "@playwright/test";

const base_routes = [
  "/",
  "/onboarding",
  "/diagnostico",
  "/diagnostico/pensamiento-matematico",
  "/diagnostico/cultura-digital",
  "/ruta",
  "/ruta/pensamiento-matematico",
  "/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico",
  "/ruta/pensamiento-matematico/pm-1-6-pensamiento-variacional",
  "/ruta/cultura-digital",
  "/ruta/cultura-digital/cd-2-1-ciudadania-digital",
  "/ruta/cultura-digital/cd-2-2-comunicacion-y-colaboracion-digital",
  "/leccion/cd-ciberespacio-01",
  "/practica/cd-2-2-1-definicion-del-ciberespacio",
  "/ruta/cultura-digital/cd-2-3-creatividad-digital",
  "/leccion/cd-formulas-de-hoja-de-calculo-01",
  "/practica/cd-2-3-1-herramientas-de-hoja-de-calculo",
  "/ruta/cultura-digital/cd-2-4-pensamiento-algoritmico",
  "/leccion/cd-conceptos-del-lenguaje-algoritmico-01",
  "/practica/cd-2-4-1-conceptos-del-lenguaje-algoritmico",
  "/ruta/conciencia-historica",
  "/ruta/conciencia-historica/ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
  "/ruta/humanidades",
  "/ruta/humanidades/hu-4-1-fundamentos-del-pensamiento-filosofico",
  "/ruta/humanidades/hu-4-2-elementos-para-el-pensamiento-y-la-argumentacion",
  "/leccion/hu-funciones-de-la-lengua-01",
  "/practica/hu-4-2-1-funciones-de-la-lengua",
  "/ruta/humanidades/hu-4-3-construccion-de-la-persona-para-la-convivencia",
  "/leccion/hu-valores-para-la-convivencia-01",
  "/practica/hu-4-3-2-valores-y-su-definicion",
  "/ruta/humanidades/hu-4-4-reflexion-politica-y-participacion-ciudadana",
  "/leccion/hu-autonomia-y-heteronomia-01",
  "/leccion/hu-discurso-politico-01",
  "/practica/hu-4-4-1-autonomia-y-heteronomia",
  "/ruta/humanidades/hu-4-5-humanidad-ante-desafios-contemporaneos",
  "/leccion/hu-principios-de-bioetica-01",
  "/practica/hu-4-5-1-principios-de-bioetica",
  "/ruta/humanidades/hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
  "/leccion/hu-categorias-esteticas-01",
  "/practica/hu-4-6-1-categorias-esteticas",
  "/leccion/pm-tipos-de-variables-01",
  "/leccion/pm-limites-de-funciones-cuadraticas-01",
  "/leccion/cd-identidad-digital-01",
  "/leccion/ch-conquista-de-pueblos-originarios-01",
  "/leccion/hu-filosofia-mito-y-ciencia-01",
  "/ruta/ciencias-naturales-experimentales-y-tecnologia",
  "/ruta/ciencias-naturales-experimentales-y-tecnologia/cn-5-1-materia-y-sus-interacciones",
  "/leccion/cn-tipos-de-enlaces-01",
  "/ruta/lengua-y-comunicacion",
  "/ruta/lengua-y-comunicacion/lc-6-1-estrategias-de-comprension-lectora",
  "/leccion/lc-titulo-del-texto-expositivo-01",
  "/ruta/ciencias-sociales",
  "/ruta/ciencias-sociales/cs-7-1-organizacion-economica",
  "/leccion/cs-necesidades-materiales-01",
  "/practica/pm-1-6-3-limite-de-una-funcion-de-una-variable-real",
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
    "Una ruta de estudio",
  );
});

test("el encabezado móvil permanece en una fila y abre la navegación bajo demanda", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const header = page.locator("header");
  const header_box = await header.boundingBox();

  expect(header_box).not.toBeNull();
  expect(header_box?.height).toBeLessThanOrEqual(66);
  await expect(
    page.getByRole("navigation", { name: "Navegación principal" }),
  ).not.toBeVisible();

  await page.getByRole("button", { name: "Abrir menú" }).click();

  await expect(
    page.getByRole("navigation", { name: "Navegación móvil" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Mi ruta" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Cerrar menú" })).toBeVisible();
  expect((await header.boundingBox())?.height).toBeLessThanOrEqual(66);
});

test("el selector de tema cicla claro, oscuro y sistema, persiste tras recargar y no toca el progreso", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("button", { name: /^Tema: Sistema\./ })).toBeVisible();

  await page.getByRole("button", { name: /^Tema: Sistema\./ }).click();
  await expect(page.getByRole("button", { name: /^Tema: Claro\./ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await page.getByRole("button", { name: /^Tema: Claro\./ }).click();
  await expect(page.getByRole("button", { name: /^Tema: Oscuro\./ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  await page.getByRole("button", { name: /^Tema: Oscuro\./ }).click();
  await expect(page.getByRole("button", { name: /^Tema: Sistema\./ })).toBeVisible();

  await page.getByRole("button", { name: /^Tema: Sistema\./ }).click();
  await expect(page.getByRole("button", { name: /^Tema: Claro\./ })).toBeVisible();

  await page.reload();

  await expect(page.getByRole("button", { name: /^Tema: Claro\./ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  const storage_snapshot = await page.evaluate(() => ({
    theme: window.localStorage.getItem("ceneva.interface-theme"),
    progress: window.localStorage.getItem("ceneva.learner-progress"),
  }));

  expect(storage_snapshot.theme).toBe("light");
  expect(storage_snapshot.progress).toBeNull();
});

test("el selector de tema se opera desde el teclado", async ({ page }) => {
  await page.goto("/");

  const theme_toggle = page.getByRole("button", { name: /^Tema: Sistema\./ });

  await theme_toggle.focus();
  await expect(theme_toggle).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: /^Tema: Claro\./ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

  await page.keyboard.press(" ");
  await expect(page.getByRole("button", { name: /^Tema: Oscuro\./ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("el tema oscuro persiste al navegar a las superficies de navegación y recargar", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: /^Tema: Sistema\./ }).click();
  await page.getByRole("button", { name: /^Tema: Claro\./ }).click();
  await expect(page.getByRole("button", { name: /^Tema: Oscuro\./ })).toBeVisible();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  for (const path of ["/ruta", "/progreso", "/practica"]) {
    await page.goto(path);
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }

  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("la ruta piloto abre una lección markdown real", async ({ page }) => {
  await page.goto("/ruta");

  await page.getByRole("link", { name: "explorar pensamiento matemático" }).click();

  await expect(page).toHaveURL("/ruta/pensamiento-matematico");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Unidades listas de Pensamiento matemático.",
  );

  await page.getByRole("link", { name: "explorar pensamiento estadístico" }).click();

  await expect(page).toHaveURL(
    "/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Pensamiento estadístico",
  );

  await page.getByRole("link", { name: "estudiar variables estadísticas" }).click();

  await expect(page).toHaveURL("/leccion/pm-tipos-de-variables-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Variables estadísticas",
  );
  await expect(
    page.getByText("clasificar variables cuantitativas, cualitativas y categóricas."),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "explicación" }),
  ).toBeVisible();
  await expect(page.getByText("al terminar podrás", { exact: false })).toBeVisible();
  await expect(page.getByText("question-ids", { exact: false })).toHaveCount(0);
  await expect(page.getByText("content/questions", { exact: false })).toHaveCount(0);
});

test("/ruta muestra el conteo de unidades listas de cada área", async ({ page }) => {
  await page.goto("/ruta");

  const pm_area = page
    .getByRole("heading", { name: "pensamiento matemático" })
    .locator("xpath=ancestor::article");

  await expect(pm_area.getByText("6 unidades listas")).toBeVisible();

  const cd_area = page
    .getByRole("heading", { name: "cultura digital" })
    .locator("xpath=ancestor::article");

  await expect(cd_area.getByText("4 unidades listas")).toBeVisible();
});

test("/ruta/pensamiento-matematico lista sus seis unidades listas en orden curricular", async ({
  page,
}) => {
  await page.goto("/ruta/pensamiento-matematico");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Unidades listas de Pensamiento matemático.",
  );

  const unit_headings = await page.getByRole("heading", { level: 2 }).allTextContents();

  expect(unit_headings).toEqual([
    "Pensamiento estadístico",
    "Pensamiento probabilístico",
    "Pensamiento algebraico",
    "Pensamiento aritmético",
    "Pensamiento geométrico",
    "Pensamiento variacional",
  ]);
});

test("un tema de una unidad recién registrada de pensamiento matemático (pm-1-2) completa lección y práctica, queda dominado, persiste tras recargar y no afecta pm-1-1 ni otra área", async ({
  page,
}) => {
  await page.goto("/ruta/pensamiento-matematico/pm-1-2-pensamiento-probabilistico");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Pensamiento probabilístico",
  );

  const conteo_topic = page
    .getByRole("heading", { name: "técnicas de conteo" })
    .locator("xpath=ancestor::article");

  await expect(conteo_topic.getByText("disponible", { exact: true })).toBeVisible();

  await conteo_topic
    .getByRole("link", { name: "estudiar combinaciones y permutaciones" })
    .click();

  await expect(page).toHaveURL("/leccion/pm-tecnicas-de-conteo-01");

  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/practica/pm-1-2-1-tecnicas-de-conteo");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Técnicas de conteo",
  );

  const conteo_correct_options = [
    "12",
    "6",
    "c(5, 2) = 10, porque solo importa quiénes integran la comisión",
    "1c, 2a, 3b",
    "2, 3, 4, 1",
  ];

  for (const [index, option_label] of conteo_correct_options.entries()) {
    const is_last_question = index === conteo_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-2-pensamiento-probabilistico");

  const dominated_conteo_topic = page
    .getByRole("heading", { name: "técnicas de conteo" })
    .locator("xpath=ancestor::article");

  await expect(
    dominated_conteo_topic.getByText("dominado", { exact: true }),
  ).toBeVisible();

  await page.reload();

  await expect(
    dominated_conteo_topic.getByText("dominado", { exact: true }),
  ).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pm_1_1_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pm_1_1_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pm_1_1_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const cd_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(cd_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(cd_topic.getByText("sin intentos", { exact: false })).toBeVisible();
});

test("una lección inexistente responde con not found", async ({ page }) => {
  await page.goto("/leccion/pm-leccion-inexistente-01");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "No encontramos esta página.",
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
  await expect(page.getByRole("status").first()).toContainText("Correcto.");
  await expect(page.getByRole("status").first()).toContainText(
    "El número de llamadas se obtiene contando unidades completas.",
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

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const route_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(route_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/progreso");

  const pm_area_block = page
    .getByRole("heading", { name: "pensamiento matemático" })
    .locator("xpath=ancestor::article");
  const dominated_stat = pm_area_block
    .getByText("temas dominados", { exact: true })
    .locator("xpath=following-sibling::*[1]");

  await expect(dominated_stat).toHaveText("1/30");
});

test("storage malformado no impide renderizar la ruta piloto", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("ceneva.learner-progress", "{");
  });

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Pensamiento estadístico",
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
  await expect(page.getByRole("status").first()).toContainText("Correcto.");
  await expect(page.getByRole("status").first()).toContainText(
    "La identidad digital reúne datos de perfil, contenido publicado e interacciones",
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
    "Unidades listas de Cultura digital.",
  );

  await page.getByRole("link", { name: "explorar ciudadanía digital" }).click();

  await expect(page).toHaveURL("/ruta/cultura-digital/cd-2-1-ciudadania-digital");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Ciudadanía digital",
  );

  const blocked_topic = page
    .getByRole("heading", { name: "medidas de seguridad digital" })
    .locator("xpath=ancestor::article");

  await expect(blocked_topic.getByText("bloqueado", { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "estudiar identidad digital" }).click();

  await expect(page).toHaveURL("/leccion/cd-identidad-digital-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Identidad digital");

  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/practica/cd-2-1-1-elementos-de-la-identidad-digital");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Elementos de la identidad digital",
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

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const identidad_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(identidad_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(identidad_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

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
    "Elementos de la identidad digital",
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
  test.setTimeout(60_000);

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

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Tipos de muestra");
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
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Tipos de muestreo");
});

test("una práctica por tema con id inválido responde con not found", async ({
  page,
}) => {
  await page.goto("/practica/tema-inexistente");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "No encontramos esta página.",
  );
});

test("los intentos de la práctica por tema persisten después de recargar", async ({
  page,
}) => {
  await complete_tipos_de_muestra_practice(page);

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const topic_card = page
    .getByRole("heading", { name: "Tipos de muestra" })
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

  await expect(page.getByText("Tipos de muestra", { exact: false })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "repasar tipos de muestreo" }),
  ).toBeVisible();

  await page.getByRole("radio", { name: "sistemático", exact: true }).check();

  await expect(page.getByRole("status").first()).toContainText("Correcto.");
  await expect(page.getByRole("status").first()).toContainText(
    "La selección comienza en una posición aleatoria",
  );

  await page.reload();

  await expect(
    page.getByText("no tienes preguntas pendientes de repaso", { exact: false }),
  ).toBeVisible();
});

test("un error de práctica en un área no-pm entra a la cola de repaso y sale al corregirse", async ({
  page,
}) => {
  await page.goto("/practica/cd-2-1-1-elementos-de-la-identidad-digital");

  await page
    .getByRole("radio", {
      name: "la contraseña que usa para iniciar sesión en sus cuentas",
      exact: true,
    })
    .check();
  await page.getByRole("button", { name: "confirmar respuesta" }).click();

  await page.goto("/practica");

  await expect(
    page.getByText("Elementos de la identidad digital", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "repasar identidad digital" }),
  ).toBeVisible();

  await page
    .getByRole("radio", {
      name: "su historial de comentarios, reacciones y publicaciones en distintos servicios en línea",
      exact: true,
    })
    .check();

  await expect(page.getByRole("status").first()).toContainText("Correcto.");

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
    "Repasa tus errores pendientes.",
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

  const pm_area_block = page
    .getByRole("heading", { name: "pensamiento matemático" })
    .locator("xpath=ancestor::article");
  const lessons_stat = pm_area_block
    .getByText("lecciones completadas", { exact: true })
    .locator("xpath=following-sibling::*[1]");

  await expect(lessons_stat).toHaveText("1/34");
  await expect(
    pm_area_block.getByRole("link", { name: "practicar tipos de variables" }),
  ).toBeVisible();

  await page.reload();

  await expect(lessons_stat).toHaveText("1/34");
  await expect(
    pm_area_block.getByRole("link", { name: "practicar tipos de variables" }),
  ).toBeVisible();

  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  await expect(
    page.getByRole("link", { name: "practicar tipos de variables" }),
  ).toBeVisible();
});

// pensamiento matemático ahora tiene treinta temas en seis unidades (antes cuatro en
// una sola unidad); dominar el área por completo requiere completar sus 34 lecciones y
// acertar los cinco (o diez, en sus cuatro temas de dos lecciones) reactivos propios de
// cada tema, no solo los de pm-1-1.
const pm_all_lesson_ids = [
  "pm-area-de-triangulos-y-trapecios-01",
  "pm-area-en-el-plano-cartesiano-01",
  "pm-derivadas-de-funciones-algebraicas-01",
  "pm-derivadas-de-funciones-polinomiales-01",
  "pm-derivadas-de-funciones-trascendentes-02",
  "pm-ecuaciones-cuadraticas-una-incognita-01",
  "pm-ecuaciones-lineales-una-incognita-01",
  "pm-expresiones-algebraicas-01",
  "pm-factorizacion-de-polinomios-01",
  "pm-graficas-de-funciones-01",
  "pm-graficas-de-funciones-02",
  "pm-interes-compuesto-01",
  "pm-interes-compuesto-02",
  "pm-interes-simple-01",
  "pm-intervalos-y-desigualdades-01",
  "pm-limites-de-funciones-cuadraticas-01",
  "pm-maximo-comun-divisor-01",
  "pm-medidas-de-dispersion-01",
  "pm-medidas-de-tendencia-central-01",
  "pm-minimo-comun-multiplo-01",
  "pm-optimizacion-con-derivadas-01",
  "pm-porcentajes-01",
  "pm-probabilidad-condicional-01",
  "pm-probabilidad-simple-01",
  "pm-productos-notables-de-binomios-01",
  "pm-productos-notables-de-binomios-02",
  "pm-proporcionalidad-directa-e-inversa-01",
  "pm-razones-aritmeticas-y-geometricas-01",
  "pm-semejanza-de-triangulos-01",
  "pm-sistemas-de-ecuaciones-lineales-01",
  "pm-tecnicas-de-conteo-01",
  "pm-teorema-de-pitagoras-01",
  "pm-tipos-de-muestra-01",
  "pm-tipos-de-variables-01",
];

const pm_all_question_ids = [
  "pm-md-001",
  "pm-md-002",
  "pm-md-003",
  "pm-md-004",
  "pm-md-005",
  "pm-mtc-001",
  "pm-mtc-002",
  "pm-mtc-003",
  "pm-mtc-004",
  "pm-mtc-005",
  "pm-tm-001",
  "pm-tm-002",
  "pm-tm-003",
  "pm-tm-004",
  "pm-tm-005",
  "pm-tv-001",
  "pm-tv-002",
  "pm-tv-003",
  "pm-tv-004",
  "pm-tv-005",
  "pm-pc-001",
  "pm-pc-002",
  "pm-pc-003",
  "pm-pc-004",
  "pm-pc-005",
  "pm-ps-001",
  "pm-ps-002",
  "pm-ps-003",
  "pm-ps-004",
  "pm-ps-005",
  "pm-tc-001",
  "pm-tc-002",
  "pm-tc-003",
  "pm-tc-004",
  "pm-tc-005",
  "pm-ec-001",
  "pm-ec-002",
  "pm-ec-003",
  "pm-ec-004",
  "pm-ec-005",
  "pm-el-001",
  "pm-el-002",
  "pm-el-003",
  "pm-el-004",
  "pm-el-005",
  "pm-ea-001",
  "pm-ea-002",
  "pm-ea-003",
  "pm-ea-004",
  "pm-ea-005",
  "pm-fp-001",
  "pm-fp-002",
  "pm-fp-003",
  "pm-fp-004",
  "pm-fp-005",
  "pm-icm-001",
  "pm-icm-002",
  "pm-icm-003",
  "pm-icm-004",
  "pm-icm-005",
  "pm-ict-001",
  "pm-ict-002",
  "pm-ict-003",
  "pm-ict-004",
  "pm-ict-005",
  "pm-is-001",
  "pm-is-002",
  "pm-is-003",
  "pm-is-004",
  "pm-is-005",
  "pm-pnb-001",
  "pm-pnb-002",
  "pm-pnb-003",
  "pm-pnb-004",
  "pm-pnb-005",
  "pm-ofc-001",
  "pm-ofc-002",
  "pm-ofc-003",
  "pm-ofc-004",
  "pm-ofc-005",
  "pm-sel-001",
  "pm-sel-002",
  "pm-sel-003",
  "pm-sel-004",
  "pm-sel-005",
  "pm-mcd-001",
  "pm-mcd-002",
  "pm-mcd-003",
  "pm-mcd-004",
  "pm-mcd-005",
  "pm-mcm-001",
  "pm-mcm-002",
  "pm-mcm-003",
  "pm-mcm-004",
  "pm-mcm-005",
  "pm-pm-001",
  "pm-pm-002",
  "pm-pm-003",
  "pm-pm-004",
  "pm-pm-005",
  "pm-pdi-001",
  "pm-pdi-002",
  "pm-pdi-003",
  "pm-pdi-004",
  "pm-pdi-005",
  "pm-rag-001",
  "pm-rag-002",
  "pm-rag-003",
  "pm-rag-004",
  "pm-rag-005",
  "pm-at-001",
  "pm-at-002",
  "pm-at-003",
  "pm-at-004",
  "pm-at-005",
  "pm-apc-001",
  "pm-apc-002",
  "pm-apc-003",
  "pm-apc-004",
  "pm-apc-005",
  "pm-st-001",
  "pm-st-002",
  "pm-st-003",
  "pm-st-004",
  "pm-st-005",
  "pm-pt-001",
  "pm-pt-002",
  "pm-pt-003",
  "pm-pt-004",
  "pm-pt-005",
  "pm-dfa-001",
  "pm-dfa-002",
  "pm-dfa-003",
  "pm-dfa-004",
  "pm-dfa-005",
  "pm-dfp-001",
  "pm-dfp-002",
  "pm-dfp-003",
  "pm-dfp-004",
  "pm-dfp-005",
  "pm-dft-001",
  "pm-dft-002",
  "pm-dft-003",
  "pm-dft-004",
  "pm-dft-005",
  "pm-gfcd-001",
  "pm-gfcd-002",
  "pm-gfcd-003",
  "pm-gfcd-004",
  "pm-gfcd-005",
  "pm-gfec-001",
  "pm-gfec-002",
  "pm-gfec-003",
  "pm-gfec-004",
  "pm-gfec-005",
  "pm-id-001",
  "pm-id-002",
  "pm-id-003",
  "pm-id-004",
  "pm-id-005",
  "pm-lfc-001",
  "pm-lfc-002",
  "pm-lfc-003",
  "pm-lfc-004",
  "pm-lfc-005",
  "pm-od-001",
  "pm-od-002",
  "pm-od-003",
  "pm-od-004",
  "pm-od-005",
];

test("el inicio no declara completed con pensamiento matemático dominado si otra área sigue intacta", async ({
  page,
}) => {
  await page.addInitScript(
    ({
      lesson_ids,
      question_ids,
    }: {
      lesson_ids: string[];
      question_ids: string[];
    }) => {
      const attempts = question_ids.map((question_id, index) => ({
        question_id,
        selected_option_index: 0,
        is_correct: true,
        created_at: `2026-09-18T${String(Math.floor(index / 60)).padStart(2, "0")}:${String(index % 60).padStart(2, "0")}:00.000Z`,
        mode: "practice",
      }));

      window.localStorage.setItem(
        "ceneva.learner-progress",
        JSON.stringify({
          schema_version: 1,
          completed_lesson_ids: lesson_ids,
          attempts,
          onboarding_completed: false,
        }),
      );
    },
    { lesson_ids: pm_all_lesson_ids, question_ids: pm_all_question_ids },
  );

  await page.goto("/");

  await expect(
    page.getByText("dominaste todos los temas disponibles", { exact: false }),
  ).not.toBeVisible();

  const next_action_link = page.getByRole("link", {
    name: "continuar identidad digital",
  });

  await expect(next_action_link).toBeVisible();
  await expect(next_action_link).toHaveAttribute(
    "href",
    "/leccion/cd-identidad-digital-01",
  );
});

test("el progreso de un área no-pm se refleja en /progreso tras recargar", async ({
  page,
}) => {
  await page.addInitScript(() => {
    const question_ids = [
      "cd-id-001",
      "cd-id-002",
      "cd-id-003",
      "cd-id-004",
      "cd-id-005",
    ];
    const attempts = question_ids.map((question_id, index) => ({
      question_id,
      selected_option_index: 0,
      is_correct: true,
      created_at: `2026-09-18T00:00:0${index}.000Z`,
      mode: "practice",
    }));

    window.localStorage.setItem(
      "ceneva.learner-progress",
      JSON.stringify({
        schema_version: 1,
        completed_lesson_ids: ["cd-identidad-digital-01"],
        attempts,
        onboarding_completed: false,
      }),
    );
  });

  await page.goto("/progreso");

  const cd_area_block = page
    .getByRole("heading", { name: "Cultura digital" })
    .locator("xpath=ancestor::article");
  const dominated_stat = cd_area_block
    .getByText("temas dominados", { exact: true })
    .locator("xpath=following-sibling::*[1]");

  await expect(dominated_stat).toHaveText("1/18");

  const pm_area_block = page
    .getByRole("heading", { name: "pensamiento matemático" })
    .locator("xpath=ancestor::article");

  await expect(
    pm_area_block
      .getByText("temas dominados", { exact: true })
      .locator("xpath=following-sibling::*[1]"),
  ).toHaveText("0/30");

  await page.reload();

  await expect(dominated_stat).toHaveText("1/18");
});

const diagnostic_correct_options = [
  "el número de llamadas recibidas en un día",
  "sistemático",
  "`8.5`",
  "el conjunto b, porque sus datos se alejan más de la media",
  "12",
  "3/5",
  "6/12",
  "150 + 12x",
  "(x + 2)(x + 3)",
  "x² + 6x + 9",
  "x = 5",
  "x = 2 y x = 3",
  "x = 6, y = 4",
  "$100",
  "$1,210",
  "24",
  "12",
  "16",
  "$105",
  "$160",
  "30 cm²",
  "12 cm",
  "10 cm",
  "6 u²",
  "(3, ∞)",
  "disminuye",
  "7",
  "6x",
  "-1/x²",
  "16",
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
  await page.goto("/diagnostico/pensamiento-matematico");

  for (const [index, option_label] of diagnostic_correct_options.entries()) {
    const is_last_question = index === diagnostic_correct_options.length - 1;

    await answer_diagnostic_question(
      page,
      option_label,
      is_last_question ? "ver resultado" : "siguiente pregunta",
    );
  }
}

test("el selector de diagnóstico muestra las siete áreas disponibles y lleva a un diagnóstico por área", async ({
  page,
}) => {
  await page.goto("/diagnostico");

  await expect(
    page.getByRole("link", { name: "empezar diagnóstico de pensamiento matemático" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "empezar diagnóstico de cultura digital" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "empezar diagnóstico de ciencias sociales" }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: "empezar diagnóstico de cultura digital" })
    .click();

  await expect(page).toHaveURL("/diagnostico/cultura-digital");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Cultura digital",
  );
});

test("un diagnóstico de un área distinta a pensamiento matemático se resuelve y recomienda solo dentro de esa área", async ({
  page,
}) => {
  await page.goto("/diagnostico/cultura-digital");

  await expect(page.getByText("pregunta 1 de 18")).toBeVisible();

  for (let index = 0; index < 18; index += 1) {
    const options = await page.getByRole("radio").all();

    await options[0].check();
    await page
      .getByRole("button", {
        name: index === 17 ? "ver resultado" : "siguiente pregunta",
      })
      .click();
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "de 18 respuestas correctas" }),
  ).toBeVisible();
  await expect(
    page.getByText("Elementos de la identidad digital", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Medidas de seguridad digital", { exact: true }),
  ).toBeVisible();
  await expect(page.locator(".result-card")).toHaveCount(18);
  await expect(page.getByText("Por reforzar", { exact: true })).toHaveCount(18);
  await expect(page.getByText("pensamiento matemático", { exact: false })).toHaveCount(
    0,
  );
});

test("el diagnóstico responde desde el teclado y no revela resultados hasta terminar", async ({
  page,
}) => {
  await page.goto("/diagnostico/pensamiento-matematico");

  await expect(page.getByText("pregunta 1 de 30")).toBeVisible();

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

  await expect(page.getByText("pregunta 2 de 30")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);
});

test("completar el diagnóstico muestra resultados explicados por tema y recomienda una lección", async ({
  page,
}) => {
  await complete_pilot_diagnostic(page);

  await expect(
    page.getByRole("heading", { level: 2, name: "30 de 30 respuestas correctas" }),
  ).toBeVisible();
  await expect(page.getByText("Acierto", { exact: true })).toHaveCount(30);
  await expect(page.getByText("Tipos de variables", { exact: true })).toBeVisible();
  await expect(page.getByText("Medidas de dispersión", { exact: true })).toBeVisible();
  await expect(page.getByText("Por qué", { exact: true })).toHaveCount(30);
  await expect(
    page.getByText("empieza por tipos de variables.", { exact: false }),
  ).toBeVisible();

  await page.getByRole("link", { name: "ir a variables estadísticas" }).click();

  await expect(page).toHaveURL("/leccion/pm-tipos-de-variables-01");
});

test("una respuesta incorrecta del diagnóstico recomienda el tema correspondiente", async ({
  page,
}) => {
  await page.goto("/diagnostico/pensamiento-matematico");

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
    page.getByRole("heading", { level: 2, name: "29 de 30 respuestas correctas" }),
  ).toBeVisible();
  const failed_result = page
    .getByText("Por reforzar", { exact: true })
    .locator("xpath=ancestor::article[1]");

  await expect(
    failed_result.getByText("tu respuesta:", { exact: false }),
  ).toBeVisible();
  await expect(
    failed_result.getByText("respuesta correcta:", { exact: false }),
  ).toBeVisible();
  await expect(failed_result.locator(".answer-review__explanation")).toContainText(
    "Por qué",
  );
  await expect(failed_result.locator(".answer-review__common-error")).toContainText(
    "Error común",
  );
  await expect(
    page.getByText("empieza por tipos de variables.", { exact: false }),
  ).toBeVisible();
});

test("los intentos del diagnóstico persisten como historial y recargar reinicia la sesión visual", async ({
  page,
}) => {
  await complete_pilot_diagnostic(page);

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const topic_card = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(topic_card.getByText("1 intentos", { exact: false })).toBeVisible();
  await expect(topic_card.getByText("precisión 100%", { exact: false })).toBeVisible();

  await page.goto("/diagnostico/pensamiento-matematico");

  await expect(page.getByText("pregunta 1 de 30")).toBeVisible();

  await page.reload();

  await expect(page.getByText("pregunta 1 de 30")).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  await expect(topic_card.getByText("1 intentos", { exact: false })).toBeVisible();
});

const simulator_coverage_correct_options = [
  "el número de llamadas recibidas en un día",
  "sistemático",
  "`8.5`",
  "`8 / 3`",
  "12",
  "3/5",
  "6/12",
  "150 + 12x",
  "(x + 2)(x + 3)",
  "x² + 6x + 9",
  "x = 5",
  "x = 2 y x = 3",
  "x = 6, y = 4",
  "$100",
  "$1,210",
  "24",
  "12",
  "16",
  "$105",
  "$160",
  "30 cm²",
  "12 cm",
  "10 cm",
  "6 u²",
  "(3, ∞)",
  "disminuye",
  "7",
  "6x",
  "-1/x²",
  "16",
  "su historial de comentarios, reacciones y publicaciones en distintos servicios en línea",
  "freeware",
  "almacenamiento en la nube",
  "phishing",
  "cambiar su contraseña por una nueva y única, y habilitar la autenticación en dos factores",
  "el entorno virtual que surge de la interconexión de redes y dispositivos digitales, donde ocurren la comunicación y el intercambio de información",
  "tecnologías de la información, comunicación, conocimiento y aprendizaje digital",
  "videoconferencia",
  "ciberetnografía",
  "=SUMA(A1:A5)",
  "insertar tabla",
  "insertar un gráfico",
  "analizar",
  "internet de las cosas",
  "variable",
  "leer la base y la altura",
  "definido",
  "óvalo",
  "a los purépechas",
  "a la Guerra de Castas",
  "a los criollos",
  "virreinal, porque se construyó durante la colonia como sede del poder virreinal",
  "transmisión comunitaria",
  "pensamiento mítico",
  "sí, porque evalúa la evidencia y la fuente antes de aceptar la afirmación",
  "sí, porque asume su libertad para decidir y su responsabilidad sobre el resultado",
  "a doxa, porque se sostiene por costumbre y no por un fundamento verificable",
  "función instrumental, porque su forma es un imperativo que busca guiar la conducta del receptor",
  '"dormir lo suficiente ayuda a reducir los errores laborales", porque es la afirmación que las otras dos sostienen, señalada por "por lo tanto"',
  "deductivo, porque la conclusión se sigue con necesidad de las premisas si estas son verdaderas",
  "deliberación, porque el grupo busca llegar a una decisión conjunta sopesando opciones, sin posturas fijas que defender",
  "estoicismo",
  "libertad",
  "norma religiosa",
  "autonomía, porque decide según su propio juicio, sin imposición externa",
  "sí, porque trata un asunto de gobierno y busca persuadir a la ciudadanía hacia una acción colectiva",
  "beneficencia, porque aporta activamente un beneficio a una población con una necesidad de salud",
  "sí, porque antepone la disponibilidad futura del suelo al beneficio inmediato",
  "micromachismo, porque es una conducta cotidiana y sutil que resta valor al logro de la diseñadora por su género",
  "reconocimiento de la alteridad, porque adapta el horario para incluir su diferencia religiosa",
  "postura humanista, porque justifica priorizar a los seres humanos apelando a una cualidad distintiva suya",
  "lo trágico, porque presenta la pérdida irreversible de alguien valioso y provoca compasión",
  "la hermenéutica, porque formula los principios generales que hacen posible interpretar correctamente un sentido",
  "iónico",
  "líquido",
  "sí, porque cada elemento tiene el mismo número de átomos en ambos lados: 1 calcio, 1 carbono y 3 oxígenos",
  "68 °F",
  "0.00899 N",
  "importancia de las abejas para la producción de alimentos",
  "relación causal",
  "animal",
  "resumen",
  "porque su ausencia prolongada pone en riesgo su supervivencia",
  "tierra",
  "sector primario",
  "renta",
  "informal, porque no está registrado ante las instituciones correspondientes, sin importar cuánto gane",
  "sí, porque traslada recursos de un grupo de mayor ingreso hacia otro de menor ingreso para reducir una desigualdad",
  "sí, porque es un sistema de seguridad social universal y sostenido con gasto público",
  "privatización",
  "la práctica es la remoción de suelo sin restauración posterior, y el impacto es la erosión y la sedimentación del río cercano",
  "Hobbes, porque describe el estado de naturaleza como una guerra permanente que solo un poder absoluto puede resolver",
  "no, porque falta la competencia real entre opciones y la posibilidad de alternancia según el resultado, aunque exista una votación periódica",
  "no todavía, porque tiene la nacionalidad mexicana desde su nacimiento, pero le falta cumplir el requisito de edad para ser considerado ciudadano",
  "la SEDATU, porque el ordenamiento territorial, la tenencia de la tierra y el desarrollo urbano son parte de su mandato específico",
  "sí, porque influye en un asunto de interés público sin tener una autoridad reconocida formalmente por la constitución o la ley",
  "la autodeterminación de los pueblos, porque el país A decide por sí mismo su propio sistema, sin que otro estado se lo imponga",
  "la UNESCO, porque la preservación del patrimonio cultural es parte de su mandato en educación, ciencia y cultura",
  "como área periférica, porque se especializa en la extracción de materia prima sin procesar y depende tecnológicamente de otras regiones",
];

async function answer_simulator_question(
  page: Page,
  correct_option_label: string,
  final_action_label: "siguiente pregunta" | "ver reporte",
  answer_correctly = true,
) {
  if (answer_correctly) {
    await page.getByRole("radio", { name: correct_option_label, exact: true }).check();
  } else {
    await page
      .locator("label")
      .filter({ hasNotText: correct_option_label })
      .first()
      .getByRole("radio")
      .check();
  }

  await page.getByRole("button", { name: final_action_label }).click();
}

async function complete_simulator_coverage(
  page: Page,
  incorrect_indexes: number[] = [],
) {
  await page.goto("/simulacro");

  for (const [index, correct_option] of simulator_coverage_correct_options.entries()) {
    const is_last_question = index === simulator_coverage_correct_options.length - 1;

    await answer_simulator_question(
      page,
      correct_option,
      is_last_question ? "ver reporte" : "siguiente pregunta",
      !incorrect_indexes.includes(index),
    );
  }
}

test("el simulacro identifica la cobertura mvp antes de iniciar y responde desde el teclado sin revelar resultados", async ({
  page,
}) => {
  await page.goto("/simulacro");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Valida tu preparación en las siete áreas",
  );
  await expect(
    page.getByText("simulacro de cobertura mvp", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByText("no es el examen oficial completo", { exact: false }),
  ).toBeVisible();
  await expect(page.getByText("pregunta 1 de 99")).toBeVisible();

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

  await expect(page.getByText("pregunta 2 de 99")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);
});

test("completar el simulacro de cobertura con un error no-pm muestra el reporte agrupado por área y tema, enlaza el error a su lección, y los intentos persisten tras recargar", async ({
  page,
}) => {
  const servicios_digitales_index = 32;

  await complete_simulator_coverage(page, [servicios_digitales_index]);

  await expect(
    page.getByRole("heading", { level: 2, name: "98 de 99 respuestas correctas" }),
  ).toBeVisible();

  const pm_area = page
    .getByText("Pensamiento matemático", { exact: true })
    .locator("xpath=ancestor::article[1]");

  await expect(pm_area.getByText("30 de 30 correctas", { exact: false })).toBeVisible();

  const cd_area = page
    .getByText("Cultura digital", { exact: true })
    .locator("xpath=ancestor::article[1]");

  await expect(cd_area.getByText("17 de 18 correctas", { exact: false })).toBeVisible();

  const mismatched_topic = cd_area
    .getByText("Tipos de servicios digitales", { exact: true })
    .locator("xpath=ancestor::li[1]");

  await expect(
    mismatched_topic.locator(".answer-review__answer--correct"),
  ).toContainText("almacenamiento en la nube");

  await mismatched_topic
    .getByRole("link", { name: "repasar servicios digitales" })
    .click();

  await expect(page).toHaveURL("/leccion/cd-servicios-digitales-01");

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const topic_card = page
    .getByRole("heading", { name: "tipos de servicios digitales" })
    .locator("xpath=ancestor::article");

  await expect(topic_card.getByText("1 intentos", { exact: false })).toBeVisible();

  await page.goto("/simulacro");

  await expect(page.getByText("pregunta 1 de 99")).toBeVisible();

  await page.reload();

  await expect(page.getByText("pregunta 1 de 99")).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  await expect(topic_card.getByText("1 intentos", { exact: false })).toBeVisible();
});

test("el simulacro se puede responder en pantalla móvil", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/simulacro");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Valida tu preparación en las siete áreas",
  );
  await expect(page.getByText("pregunta 1 de 99")).toBeVisible();

  await answer_simulator_question(
    page,
    "el número de llamadas recibidas en un día",
    "siguiente pregunta",
  );

  await expect(page.getByText("pregunta 2 de 99")).toBeVisible();
});

const ch_movimientos_correct_options = [
  "a la Guerra de Castas",
  "Yaqui",
  "el despojo de tierras",
  "1b, 2c, 3a",
  "2, 3, 1, 4",
  "Felipe Carrillo Puerto",
  "la Danza del Venado",
  "la Cuaresma y Semana Santa yaqui",
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
    "Unidades listas de Conciencia histórica.",
  );

  await page
    .getByRole("link", {
      name: "explorar perspectivas del méxico antiguo y virreinal en los contextos globales",
    })
    .click();

  await expect(page).toHaveURL(
    "/ruta/conciencia-historica/ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Perspectivas del México antiguo y virreinal en los contextos globales",
  );

  const movimientos_topic = page
    .getByRole("heading", {
      name: "Movimientos de resistencia de los pueblos originarios y su impacto actual",
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
      name: "Conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos XVI a XIX",
    })
    .locator("xpath=ancestor::article");

  await expect(conquista_topic.getByText("disponible", { exact: true })).toBeVisible();
});

test("completar ambas lecciones del tema partido conciencia histórica habilita su práctica de diez preguntas con enlaces exactos por lección, persiste tras recargar y no afecta otras áreas", async ({
  page,
}) => {
  await page.goto("/leccion/ch-conquista-de-pueblos-originarios-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Conquista de pueblos originarios",
  );
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/ch-resistencias-de-pueblos-originarios-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Resistencias de pueblos originarios",
  );
  await expect(
    page.getByRole("link", { name: "repasa ch-conquista-de-pueblos-originarios-01" }),
  ).toBeVisible();
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto(
    "/ruta/conciencia-historica/ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
  );

  const movimientos_topic = page
    .getByRole("heading", {
      name: "Movimientos de resistencia de los pueblos originarios y su impacto actual",
    })
    .locator("xpath=ancestor::article");

  await expect(
    movimientos_topic.getByText("en progreso", { exact: true }),
  ).toBeVisible();

  await page.goto("/leccion/ch-impacto-cultural-de-resistencias-originarias-02");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Impacto cultural de resistencias originarias",
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
    "Movimientos de resistencia de los pueblos originarios y su impacto actual",
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

  await page.goto(
    "/ruta/conciencia-historica/ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
  );

  const dominated_topic = page
    .getByRole("heading", {
      name: "Movimientos de resistencia de los pueblos originarios y su impacto actual",
    })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
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

  await answer_topic_question(page, "a la Guerra de Castas", "siguiente pregunta");

  await expect(page.getByText("pregunta 2 de 10")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  const second_question_option = page.getByRole("radio", { name: "Usumacinta" });

  await expect(second_question_option).toBeEnabled();
  await second_question_option.focus();
  await page.keyboard.press("ArrowDown");

  await expect(page.getByRole("radio", { name: "Yaqui" })).toBeChecked();

  await page.getByRole("button", { name: "confirmar respuesta" }).click();

  await expect(page.getByRole("status").first()).toContainText("Correcto.");

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
    "Conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos XVI a XIX",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(page, "a los purépechas", "siguiente pregunta");

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

test("la ruta de cultura digital muestra sus cuatro unidades listas", async ({
  page,
}) => {
  await page.goto("/ruta/cultura-digital");

  await expect(
    page.getByRole("link", { name: "explorar ciudadanía digital" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", {
      name: "explorar comunicación y colaboración a través de medios digitales",
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "explorar creatividad digital" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "explorar pensamiento algorítmico" }),
  ).toBeVisible();
});

const cd_2_2_funcion_y_uso_correct_options = [
  "videoconferencia",
  "creación de sitios web",
  "evaluación gamificada",
  "porque la videoconferencia permite comunicarse en tiempo real, pero no editar de forma simultánea un documento compartido",
  "1b, 2c, 3a",
  "Drive",
  "Prezi",
  "Docs",
  "Genially",
  "1b, 2c, 3a",
];

test("completar las dos lecciones del tema partido cultura digital habilita su práctica de diez preguntas con enlaces exactos por lección, persiste tras recargar y no afecta otras áreas", async ({
  page,
}) => {
  await page.goto("/ruta/cultura-digital/cd-2-2-comunicacion-y-colaboracion-digital");

  const ciberespacio_topic = page
    .getByRole("heading", { name: "Definición del ciberespacio" })
    .locator("xpath=ancestor::article");
  const ticcad_topic = page
    .getByRole("heading", { name: "Definición de las tecnologías" })
    .locator("xpath=ancestor::article");
  const funcion_y_uso_topic = page
    .getByRole("heading", { name: "Función y uso de herramientas digitales" })
    .locator("xpath=ancestor::article");

  await expect(
    ciberespacio_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(ticcad_topic.getByText("bloqueado", { exact: true })).toBeVisible();
  await expect(
    funcion_y_uso_topic.getByText("bloqueado", { exact: true }),
  ).toBeVisible();

  await page.goto("/leccion/cd-ciberespacio-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Ciberespacio");
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/cd-ticcad-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("TICCAD");
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/ruta/cultura-digital/cd-2-2-comunicacion-y-colaboracion-digital");

  await expect(
    funcion_y_uso_topic.getByText("bloqueado", { exact: true }),
  ).toBeVisible();

  await page.goto("/leccion/cd-funciones-de-herramientas-digitales-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Funciones de herramientas digitales",
  );
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/ruta/cultura-digital/cd-2-2-comunicacion-y-colaboracion-digital");

  await expect(
    funcion_y_uso_topic.getByText("en progreso", { exact: true }),
  ).toBeVisible();

  await page.goto("/leccion/cd-uso-de-herramientas-digitales-02");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Selección de herramientas digitales",
  );
  await expect(
    page.getByRole("link", {
      name: "repasa cd-funciones-de-herramientas-digitales-01",
    }),
  ).toBeVisible();
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/practica/cd-2-2-3-funcion-y-uso-de-herramientas-digitales");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Función y uso de herramientas digitales",
  );
  await expect(
    page.getByText("responde las 10 preguntas de este tema", { exact: false }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "repasar funciones de herramientas digitales" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "repasar selección de herramientas digitales" }),
  ).toBeVisible();
  await expect(page.getByText("pregunta 1 de 10")).toBeVisible();

  for (const [index, option_label] of cd_2_2_funcion_y_uso_correct_options.entries()) {
    const is_last_question = index === cd_2_2_funcion_y_uso_correct_options.length - 1;

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
      .getByRole("link", { name: "repasar funciones de herramientas digitales" }),
  ).toBeVisible();
  await expect(
    results
      .nth(4)
      .getByRole("link", { name: "repasar funciones de herramientas digitales" }),
  ).toBeVisible();
  await expect(
    results
      .nth(5)
      .getByRole("link", { name: "repasar selección de herramientas digitales" }),
  ).toBeVisible();
  await expect(
    results
      .nth(9)
      .getByRole("link", { name: "repasar selección de herramientas digitales" }),
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "volver a funciones de herramientas digitales" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "volver a selección de herramientas digitales" }),
  ).toBeVisible();

  await page
    .getByRole("link", { name: "volver a selección de herramientas digitales" })
    .click();

  await expect(page).toHaveURL("/leccion/cd-uso-de-herramientas-digitales-02");

  await page.goto("/ruta/cultura-digital/cd-2-2-comunicacion-y-colaboracion-digital");

  await expect(
    funcion_y_uso_topic.getByText("dominado", { exact: true }),
  ).toBeVisible();

  await page.reload();

  await expect(
    funcion_y_uso_topic.getByText("dominado", { exact: true }),
  ).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();
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
    "Unidades listas de Humanidades.",
  );

  await page
    .getByRole("link", { name: "explorar fundamentos del pensamiento filosófico" })
    .click();

  await expect(page).toHaveURL(
    "/ruta/humanidades/hu-4-1-fundamentos-del-pensamiento-filosofico",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Fundamentos del pensamiento filosófico",
  );

  const base_topic = page
    .getByRole("heading", { name: "Filosofía, mito y ciencia" })
    .locator("xpath=ancestor::article");

  await expect(base_topic.getByText("disponible", { exact: true })).toBeVisible();

  for (const topic_title of [
    "Pensamiento crítico",
    "pensamiento existencialista",
    "Doxa y episteme",
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
    "Filosofía, mito y ciencia",
  );
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/hu-pensamiento-critico-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Pensamiento crítico",
  );
  await expect(
    page.getByRole("link", { name: "repasa hu-filosofia-mito-y-ciencia-01" }),
  ).toBeVisible();

  await page.goto("/ruta/humanidades/hu-4-1-fundamentos-del-pensamiento-filosofico");

  const dependent_topic = page
    .getByRole("heading", { name: "Pensamiento crítico" })
    .locator("xpath=ancestor::article");

  await expect(dependent_topic.getByText("disponible", { exact: true })).toBeVisible();

  await page.goto("/practica/hu-4-1-1-filosofia-mito-y-ciencia");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Filosofía, mito y ciencia",
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
  await expect(page.getByRole("status").first()).toContainText("Correcto.");
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

  await page.goto("/ruta/humanidades/hu-4-1-fundamentos-del-pensamiento-filosofico");

  const dominated_topic = page
    .getByRole("heading", { name: "Filosofía, mito y ciencia" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto(
    "/ruta/conciencia-historica/ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
  );

  const conciencia_historica_topic = page
    .getByRole("heading", {
      name: "Conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos XVI a XIX",
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

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Doxa y episteme");
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
    "Unidades listas de Ciencias naturales, experimentales y tecnología.",
  );

  await page
    .getByRole("link", { name: "explorar la materia y sus interacciones" })
    .click();

  await expect(page).toHaveURL(
    "/ruta/ciencias-naturales-experimentales-y-tecnologia/cn-5-1-materia-y-sus-interacciones",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "La materia y sus interacciones",
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
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Enlaces químicos");
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/cn-conservacion-de-la-materia-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Conservación de la materia",
  );
  await expect(
    page.getByRole("link", { name: "repasa cn-tipos-de-enlaces-01" }),
  ).toBeVisible();

  await page.goto(
    "/ruta/ciencias-naturales-experimentales-y-tecnologia/cn-5-1-materia-y-sus-interacciones",
  );

  const conservation_topic = page
    .getByRole("heading", { name: "ley de la conservación de la materia" })
    .locator("xpath=ancestor::article");

  await expect(
    conservation_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();

  await page.goto("/practica/cn-5-1-1-tipos-de-enlaces");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Tipos de enlaces iónico, covalente y metálico",
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
  await expect(page.getByRole("status").first()).toContainText("Correcto.");
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

  await page.goto(
    "/ruta/ciencias-naturales-experimentales-y-tecnologia/cn-5-1-materia-y-sus-interacciones",
  );

  const dominated_topic = page
    .getByRole("heading", { name: "tipos de enlaces iónico, covalente y metálico" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto(
    "/ruta/conciencia-historica/ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
  );

  const conciencia_historica_topic = page
    .getByRole("heading", {
      name: "Conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos XVI a XIX",
    })
    .locator("xpath=ancestor::article");

  await expect(
    conciencia_historica_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    conciencia_historica_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/humanidades/hu-4-1-fundamentos-del-pensamiento-filosofico");

  const humanidades_topic = page
    .getByRole("heading", { name: "Filosofía, mito y ciencia" })
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
    "Conversión de escalas termométricas",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(page, "68 °F", "siguiente pregunta");

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
    "Unidades listas de Lengua y comunicación.",
  );

  await page
    .getByRole("link", { name: "explorar estrategias de comprensión lectora" })
    .click();

  await expect(page).toHaveURL(
    "/ruta/lengua-y-comunicacion/lc-6-1-estrategias-de-comprension-lectora",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Estrategias de comprensión lectora",
  );

  for (const topic_title of [
    "título del texto expositivo",
    "tipos de relaciones lógicas entre oraciones",
    "Jerarquía de la información en mapas conceptuales",
    "Tipos de formas textuales de comunicación (resumen, relato simple, reseña y comentario crítico)",
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
    "Jerarquía en mapas conceptuales",
  );
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/practica/lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Jerarquía de la información en mapas conceptuales",
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
  await expect(page.getByRole("status").first()).toContainText("Correcto.");
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

  await page.goto(
    "/ruta/lengua-y-comunicacion/lc-6-1-estrategias-de-comprension-lectora",
  );

  const dominated_topic = page
    .getByRole("heading", { name: "Jerarquía de la información en mapas conceptuales" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto(
    "/ruta/conciencia-historica/ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales",
  );

  const conciencia_historica_topic = page
    .getByRole("heading", {
      name: "Conquista de los pueblos mesoamericanos o aridoamericanos durante los siglos XVI a XIX",
    })
    .locator("xpath=ancestor::article");

  await expect(
    conciencia_historica_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    conciencia_historica_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto("/ruta/humanidades/hu-4-1-fundamentos-del-pensamiento-filosofico");

  const humanidades_topic = page
    .getByRole("heading", { name: "Filosofía, mito y ciencia" })
    .locator("xpath=ancestor::article");

  await expect(
    humanidades_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    humanidades_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto(
    "/ruta/ciencias-naturales-experimentales-y-tecnologia/cn-5-1-materia-y-sus-interacciones",
  );

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
    "Tipos de formas textuales de comunicación (resumen, relato simple, reseña y comentario crítico)",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(page, "resumen", "siguiente pregunta");

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

test("una lectura larga separa el texto base de la consigna sin montar la pregunta sobre el borde", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/practica/lc-6-1-1-titulo-del-texto-expositivo");

  const card = page.locator(".question-card").first();
  const prompt = card.locator(".question-prompt");
  const card_rect = await card.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return { left: rect.left, right: rect.right, top: rect.top };
  });
  const prompt_rect = await prompt.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    return { left: rect.left, right: rect.right, top: rect.top };
  });

  await expect(card.getByText("Texto base", { exact: true })).toBeVisible();
  await expect(prompt).toHaveText(
    "¿Cuál título representa mejor la idea principal de este texto?",
  );
  expect(prompt_rect.top).toBeGreaterThan(card_rect.top);
  expect(prompt_rect.left).toBeGreaterThan(card_rect.left);
  expect(prompt_rect.right).toBeLessThan(card_rect.right);
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
    "Unidades listas de Ciencias sociales.",
  );

  await page.getByRole("link", { name: "explorar organización económica" }).click();

  await expect(page).toHaveURL("/ruta/ciencias-sociales/cs-7-1-organizacion-economica");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Organización económica",
  );

  for (const topic_title of [
    "Necesidades materiales vitales y no vitales",
    "Factores de los procesos de producción",
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
    await page.goto("/ruta/ciencias-sociales/cs-7-1-organizacion-economica");
    const topic = page
      .getByRole("heading", { name: topic_title })
      .locator("xpath=ancestor::article");
    await expect(topic.getByText(status, { exact: true })).toBeVisible();
  }

  await complete_lesson("cs-factores-de-produccion-01", "Factores de producción");

  await expect_topic_status("tipos de sectores productivos", "disponible");
  await expect_topic_status("mecanismos de distribución de la riqueza", "disponible");

  await complete_lesson("cs-sectores-productivos-01", "Sectores productivos");
  await expect_topic_status(
    "degradación ambiental por las formas de producción",
    "disponible",
  );

  await complete_lesson(
    "cs-distribucion-de-la-riqueza-01",
    "Distribución de la riqueza",
  );
  await expect_topic_status(
    "mecanismos estatales de redistribución de la riqueza",
    "disponible",
  );

  await complete_lesson(
    "cs-redistribucion-estatal-de-la-riqueza-01",
    "Redistribución estatal de la riqueza",
  );
  await expect_topic_status("características del estado de bienestar", "disponible");

  await complete_lesson("cs-estado-de-bienestar-01", "Estado de bienestar");
  await expect_topic_status(
    "características del modelo económico neoliberal",
    "disponible",
  );

  await page.goto("/practica/cs-7-1-2-factores-de-procesos-de-produccion");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Factores de los procesos de producción",
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
  await expect(page.getByRole("status").first()).toContainText("Correcto.");
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

  await page.goto("/ruta/ciencias-sociales/cs-7-1-organizacion-economica");

  const dominated_topic = page
    .getByRole("heading", { name: "Factores de los procesos de producción" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-1-ciudadania-digital");

  const cultura_digital_topic = page
    .getByRole("heading", { name: "Elementos de la identidad digital" })
    .locator("xpath=ancestor::article");

  await expect(
    cultura_digital_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    cultura_digital_topic.getByText("sin intentos", { exact: false }),
  ).toBeVisible();

  await page.goto(
    "/ruta/lengua-y-comunicacion/lc-6-1-estrategias-de-comprension-lectora",
  );

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
    "Necesidades materiales vitales y no vitales",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();

  await answer_topic_question(
    page,
    "porque su ausencia prolongada pone en riesgo su supervivencia",
    "siguiente pregunta",
  );

  await expect(page.getByText("pregunta 2 de 5")).toBeVisible();
});

const cd_cla_correct_options = [
  "variable",
  "aritmético",
  "operador relacional",
  "estructura repetitiva",
  "1b, 2c, 3a",
];

test("completar la lección de conceptos del lenguaje algorítmico desbloquea pasos de un algoritmo y características del pensamiento algorítmico, y la práctica del tema base persiste como dominado tras recargar sin afectar otras áreas", async ({
  page,
}) => {
  await page.goto("/leccion/cd-conceptos-del-lenguaje-algoritmico-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Conceptos del lenguaje algorítmico",
  );
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto("/leccion/cd-pasos-de-un-algoritmo-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Pasos de un algoritmo",
  );
  await expect(
    page.getByRole("link", { name: "repasa cd-conceptos-del-lenguaje-algoritmico-01" }),
  ).toBeVisible();

  await page.goto("/ruta/cultura-digital/cd-2-4-pensamiento-algoritmico");

  const pasos_topic = page
    .getByRole("heading", { name: "Pasos de un algoritmo" })
    .locator("xpath=ancestor::article");
  const caracteristicas_topic = page
    .getByRole("heading", { name: "Características del pensamiento algorítmico" })
    .locator("xpath=ancestor::article");

  await expect(pasos_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(
    caracteristicas_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();

  await page.goto("/practica/cd-2-4-1-conceptos-del-lenguaje-algoritmico");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Conceptos del lenguaje algorítmico",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  for (const [index, option_label] of cd_cla_correct_options.entries()) {
    const is_last_question = index === cd_cla_correct_options.length - 1;

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
    .getByRole("link", { name: "volver a conceptos del lenguaje algorítmico" })
    .click();

  await expect(page).toHaveURL("/leccion/cd-conceptos-del-lenguaje-algoritmico-01");

  await page.goto("/ruta/cultura-digital/cd-2-4-pensamiento-algoritmico");

  const dominated_topic = page
    .getByRole("heading", { name: "Conceptos del lenguaje algorítmico" })
    .locator("xpath=ancestor::article");

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(dominated_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(pilot_topic.getByText("disponible", { exact: true })).toBeVisible();
  await expect(pilot_topic.getByText("sin intentos", { exact: false })).toBeVisible();
});

const hu_ce_correct_options = [
  "lo trágico, porque presenta la pérdida irreversible de alguien valioso y provoca compasión",
  "grotesco",
  "porque combina una deformidad exagerada y repulsiva con el efecto de risa, más allá de un simple contraste",
  "lo sublime, porque la magnitud del paisaje supera su capacidad de comprensión y produce fascinación junto con pequeñez",
  "1c, 2b, 3a",
];

test("completar la lección de categorías estéticas y practicar su tema lo lleva a dominado, con hermenéutica disponible desde el inicio y sin afectar otras áreas", async ({
  page,
}) => {
  await page.goto("/leccion/hu-categorias-esteticas-01");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Categorías estéticas",
  );
  await expect(page.getByText("antes de continuar")).toHaveCount(0);
  await page.getByRole("button", { name: "marcar lección como completada" }).click();
  await expect(page.getByRole("button", { name: "lección completada" })).toBeDisabled();

  await page.goto(
    "/ruta/humanidades/hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
  );

  const categorias_topic = page
    .getByRole("heading", { name: "Categorías estéticas" })
    .locator("xpath=ancestor::article");
  const hermeneutica_topic = page
    .getByRole("heading", { name: "Definición de hermenéutica" })
    .locator("xpath=ancestor::article");

  await expect(
    hermeneutica_topic.getByText("disponible", { exact: true }),
  ).toBeVisible();

  await page.goto("/practica/hu-4-6-1-categorias-esteticas");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Categorías estéticas",
  );
  await expect(page.getByText("pregunta 1 de 5")).toBeVisible();
  await expect(page.getByText("correcto", { exact: false })).toHaveCount(0);

  for (const [index, option_label] of hu_ce_correct_options.entries()) {
    const is_last_question = index === hu_ce_correct_options.length - 1;

    await answer_topic_question(
      page,
      option_label,
      is_last_question ? "ver resultados" : "siguiente pregunta",
    );
  }

  await expect(
    page.getByRole("heading", { level: 2, name: "5 de 5 respuestas correctas" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "volver a categorías estéticas" }).click();

  await expect(page).toHaveURL("/leccion/hu-categorias-esteticas-01");

  await page.goto(
    "/ruta/humanidades/hu-4-6-reflexiones-sobre-el-arte-y-la-sensibilidad",
  );

  await expect(categorias_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.reload();

  await expect(categorias_topic.getByText("dominado", { exact: true })).toBeVisible();

  await page.goto("/ruta/pensamiento-matematico/pm-1-1-pensamiento-estadistico");

  const pilot_topic_after_hu = page
    .getByRole("heading", { name: "tipos de variables" })
    .locator("xpath=ancestor::article");

  await expect(
    pilot_topic_after_hu.getByText("disponible", { exact: true }),
  ).toBeVisible();
  await expect(
    pilot_topic_after_hu.getByText("sin intentos", { exact: false }),
  ).toBeVisible();
});
