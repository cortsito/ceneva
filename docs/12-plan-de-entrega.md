
## principio de ejecución

se construye por verticales: una experiencia completa y pequeña antes de ampliar alcance. cada etapa termina con algo usable en navegador.

## etapa 0: base del proyecto

### alcance

- crear proyecto next.js con typescript y tailwind css.
- configurar lint, formato, pruebas unitarias y ci.
- definir estructura de carpetas de [[10-arquitectura-de-aplicacion]].
- implementar layout, navegación y tema visual base.

### terminado cuando

- el proyecto corre localmente y se despliega en preview.
- cada ruta base existe, aunque use contenido temporal.
- lint y pruebas pasan con un solo comando.

## etapa 1: vertical de pensamiento matemático

pensamiento matemático es el área piloto: aquí se valida la plantilla de contenido y arquitectura antes de replicarla en las seis áreas restantes (ver etapa 5), ya que el mvp cubre las siete áreas.

### alcance

- modelar una unidad de pensamiento matemático desde la guía oficial.
- crear de tres a cinco lecciones reales.
- renderizar markdown y mostrar progreso de lección.
- implementar comprobación al final de una lección.
- guardar progreso y respuestas en localstorage.

### terminado cuando

- una persona puede abrir una unidad, completar lecciones, responder preguntas y volver sin perder avance.
- todo resultado tiene explicación.
- los estados de tema se actualizan con el contrato simétrico provisional documentado para etapa 1 en [[06-datos-y-progreso]].

## etapa 2: práctica y repaso

### alcance

- práctica por tema.
- lista breve de preguntas pendientes de repaso.
- pantalla de resultados conectada a la lección correspondiente.
- dashboard de progreso de pensamiento matemático.
- aplicar la regla de dominio con umbral de entrada de 80% y salida de 60%, definida en [[06-datos-y-progreso]].

### terminado cuando

- una respuesta incorrecta genera una siguiente acción concreta.
- la pantalla de inicio indica qué estudiar o repasar ahora.
- se prueban las reglas de selección y dominio.

## etapa 3: diagnóstico y simulacro inicial

### alcance

- diagnóstico corto de pensamiento matemático.
- recomendación inicial de temas.
- primera versión del simulacro basada en el material oficial permitido.
- reporte agrupado por tema.

### terminado cuando

- diagnóstico, ruta, práctica y simulacro usan los mismos ids de temas y preguntas.
- el reporte de errores permite regresar al contenido relevante.

## etapa 4: cuenta y sincronización

### alcance

- autenticación con supabase.
- migración explícita de progreso local.
- sincronización de intentos y lecciones completadas.

### terminado cuando

- iniciar sesión no borra progreso local.
- el mismo usuario conserva avance en dos dispositivos.

## etapa 5: expansión a las áreas restantes

parte del mvp, no una fase posterior: replicar el sistema de contenido validado (plantilla de lección, práctica y progreso) en las seis áreas restantes, con al menos una unidad de contenido cada una, conforme a [[07-mvp-y-roadmap]]. no modificar arquitectura salvo que una necesidad real lo justifique.

## orden inmediato

la implementación local de etapa 0 está completa: el scaffold, las rutas base y la cadena de calidad ya existen. falta verificar el preview de vercel cuando el repositorio se conecte al servicio; esa acción externa no bloqueó el trabajo de código.

etapa 1 está completa para la unidad piloto `pm-1-1-pensamiento-estadistico`: entrega de currículum y lecciones, comprobación con feedback y progreso local versionado. sus contratos concretos permanecen en `docs/tasks/2026-09-14-task_etapa-1-*.md` como historial de la vertical terminada.

etapa 2 está completa para la misma unidad piloto, en sus tres tareas secuenciales: práctica por tema y regla de dominio, cola de repaso y acciones, y siguiente acción con dashboard. sus contratos concretos permanecen en `docs/tasks/2026-09-14-task_etapa-2-*.md` como historial de la vertical terminada.

etapa 3 está completa para la unidad piloto en sus dos tareas secuenciales: diagnóstico breve y recomendación inicial, después simulacro y reporte agrupado por tema. sus contratos concretos permanecen en `docs/tasks/2026-09-15-task_etapa-3-*.md` como historial de la vertical terminada. la primera tarea corrió `/diagnostico` con las cuatro preguntas fijas del piloto, una por tema, sin revelar aciertos hasta el final, cerrando con resultados explicados por tema y una recomendación de lección. la segunda tarea corrió `/simulacro` con las veinte preguntas existentes del piloto, sin revelar aciertos hasta el final, cerrando con un reporte agrupado por tema (aciertos, precisión y cada error enlazado a su lección). ninguna de las dos agregó un esquema de sesión o resultado persistente: solo se guardan intentos ordinarios (`diagnostic` o `simulator`) mediante el repositorio existente.

etapa 5 comienza con una segunda vertical pequeña y completa: `cd-2-1-ciudadania-digital` de cultura digital. se divide en tres tareas secuenciales: banco editorial validado, capa de contenido para dos verticales reales e integración visible de cultura digital. sus contratos están en `docs/tasks/2026-09-16-task_etapa-5-*.md`. este lote no amplía diagnóstico, simulacro, repaso global ni dashboard global; esos flujos permanecen deliberadamente en el piloto de pensamiento matemático hasta que más áreas tengan contenido listo.

**etapa 5 está completa en sus tres tareas.** la primera creó y validó las 25 preguntas tipadas de `cd-2-1-ciudadania-digital`, con un tipo de pregunta compartido entre los dos bancos existentes. la segunda reemplazó los límites de contenido exclusivos del piloto por un registro explícito de exactamente dos unidades listas (`pensamiento-matematico`/`pm-1-1-pensamiento-estadistico` y `cultura-digital`/`cd-2-1-ciudadania-digital`) y funciones de resolución genéricas por id (área/unidad, lección y tema-pregunta), con la validación de frontmatter existente intacta y la atribución exacta de cada pregunta a su lección aunque un tema tenga varias. las funciones piloto existentes ahora son envolturas delgadas sobre ese límite genérico, así que ningún llamador (diagnóstico, simulacro, repaso, progreso, rutas) cambió. la tercera conectó ese límite genérico con las pantallas: `/ruta` lista las dos áreas listas, `/ruta/cultura-digital` muestra los cinco temas de `cd-2-1-ciudadania-digital` con el mismo estado/prerrequisito/precisión que pensamiento matemático, sus cinco lecciones cargan en `/leccion/[lesson-id]` y cada tema tiene práctica directa en `/practica/[topic-id]` — las tres rutas ahora resuelven por id entre las unidades registradas en lugar de estar fijas a pensamiento matemático. diagnóstico, simulacro, repaso global, guía de inicio y el resumen de `/progreso` siguen siendo exclusivos de pensamiento matemático, sin cambios de ids, esquema de progreso local ni regla de dominio. la tercera tarea también eliminó las vistas exclusivas del piloto que quedaron redundantes una vez que el límite genérico cubrió su función, en vez de dejarlas como código muerto.

**`ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales` ya está completa y es la tercera vertical del mvp.** sus tres tasks secuenciales están en `docs/tasks/2026-09-16-task_etapa-5-ch-3-1-*.md`: seis lecciones con ids reservados, un banco de treinta preguntas y su integración visible. la tercera task registró exactamente `conciencia-historica`/`ch-3-1-mexico-antiguo-y-virreinal-en-contextos-globales` como tercera entrada de `available_units`, así que `/ruta` lista ahora las tres áreas listas y `/ruta/conciencia-historica` muestra sus cinco temas y seis lecciones con el mismo estado/prerrequisito/precisión que las otras dos verticales. el tema real `3.1.2` (`movimientos-de-resistencia-de-pueblos-originarios`) fue el primer caso real de práctica directa con más de una lección: la tarea evolucionó el límite genérico de práctica por tema (antes `unit_topic_practice`, de una sola lección, usado también por diagnóstico/simulador/repaso) separándolo de una nueva capa de presentación (`topic_content`, con lecciones y preguntas plurales) que expone `/practica/[topic-id]`; `get_unit_topic_practice`/`get_pilot_topic_practice` no cambiaron de nombre, firma ni comportamiento, así que diagnóstico, simulador y repaso — exclusivos de pensamiento matemático — siguen intactos, igual que los temas de una sola lección de cultura digital. la práctica de `3.1.2` ahora renderiza sus diez preguntas de forma dinámica, ofrece los dos enlaces de lección relevantes y enlaza cada resultado a la lección exacta que reservó esa pregunta. la regla de dominio, el esquema de progreso local y los umbrales de maestría no cambiaron: el tema alcanza `dominado` con la misma función de reemplazo (`calculate_topic_progress`) una vez completadas ambas lecciones y con al menos cinco intentos al 80% o más. después se repetirá el mismo patrón, por una primera unidad completa, para humanidades, ciencias naturales, lengua y comunicación y ciencias sociales. también permanece pendiente verificar el preview de vercel si el repositorio ya está conectado.

**`hu-4-1-fundamentos-del-pensamiento-filosofico` ya está completa y es la cuarta vertical del mvp.** sus tres tasks secuenciales están en `docs/tasks/2026-09-16-task_etapa-5-hu-4-1-*.md`: cuatro lecciones con ids reservados, un banco validado de veinte preguntas y su registro e integración visible. como se anticipó, sus cuatro temas de una sola lección no requirieron ninguna evolución arquitectónica: la tercera task registró exactamente `humanidades`/`hu-4-1-fundamentos-del-pensamiento-filosofico` como cuarta entrada de `available_units` — el único cambio de código de producción necesario — y compuso directamente el límite genérico ya comprobado por cultura digital y conciencia histórica (`UnitRoute`, `LessonView`, `get_available_topic_content`, `calculate_topic_progress`). `/ruta` lista ahora las cuatro áreas listas y `/ruta/humanidades` muestra sus cuatro temas con el mismo estado/prerrequisito/precisión que las otras tres verticales; su prerrequisito real (`hu-filosofia-mito-y-ciencia-01` disponible primero, las otras tres lecciones dependientes de ella) ya vivía en el frontmatter de las lecciones y solo necesitó registrarse, no codificarse de nuevo. diagnóstico, simulacro, repaso global, guía de inicio y el resumen de `/progreso` siguen siendo exclusivos de pensamiento matemático, sin cambios de ids, esquema de progreso local ni regla de dominio. después se repetirá el mismo patrón, por una primera unidad completa, para ciencias naturales, lengua y comunicación y ciencias sociales.

**`cn-5-1-materia-y-sus-interacciones` ya está completa y es la quinta vertical del mvp.** sus tres tasks secuenciales están en `docs/tasks/2026-09-16-task_etapa-5-cn-5-1-*.md`: cinco lecciones con ids reservados, un banco validado de veinticinco preguntas y su registro e integración visible. la tercera task registró exactamente `ciencias-naturales-experimentales-y-tecnologia`/`cn-5-1-materia-y-sus-interacciones` como quinta entrada de `available_units`, sin crear infraestructura científica nueva: sus cinco temas de una sola lección reutilizan las rutas genéricas, el renderizador markdown, `topic_content` y el progreso local existentes. los temas de enlaces, estados, conversión y ley de coulomb están disponibles desde el inicio; conservación de la materia se mantiene bloqueado hasta completar `cn-tipos-de-enlaces-01`, mediante el prerrequisito existente en su frontmatter. diagnóstico, simulador, repaso global, guía de inicio y el resumen de `/progreso` permanecen exclusivamente en pensamiento matemático.

**`lc-6-1-estrategias-de-comprension-lectora` ya está completa y es la sexta vertical del mvp.** sus tres tasks secuenciales están en `docs/tasks/2026-09-18-task_etapa-5-lc-6-1-*.md`: cuatro lecciones con ids reservados, un banco validado de veinte preguntas y su registro e integración visible. la tercera task registró exactamente `lengua-y-comunicacion`/`lc-6-1-estrategias-de-comprension-lectora` como sexta entrada de `available_units`, sin crear infraestructura lingüística nueva: sus cuatro temas de una sola lección reutilizan las rutas genéricas, el renderizador markdown, `topic_content` y el progreso local existentes. los cuatro temas están disponibles desde el inicio porque su frontmatter no tiene prerrequisitos. diagnóstico, simulador, repaso global, guía de inicio y el resumen de `/progreso` permanecen exclusivamente en pensamiento matemático.

**`cs-7-1-organizacion-economica` ya está completa y es la séptima vertical del mvp.** sus tres tareas secuenciales en `docs/tasks/2026-09-18-task_etapa-5-cs-7-1-*.md` entregaron nueve lecciones, un banco validado de cuarenta y cinco preguntas y su registro visible como séptima entrada de `available_units`. sus nueve temas reutilizan las rutas genéricas, el renderizador markdown, `topic_content` y el progreso local existentes. necesidades, factores y empleo están disponibles desde el inicio; el resto sigue el grafo interno de prerrequisitos documentado en las lecciones. con esta integración, las siete áreas del mvp tienen una unidad navegable.

**la auditoría de alcance post-etapa-5 está completa** (`docs/tasks/2026-09-18-report_post-etapa-5-scope-audit.md`). el repaso global (`/practica`) y el dashboard/guía de inicio multi-área quedan clasificados como necesarios para cumplir el mvp documentado y sin bloqueo: las funciones que ya generalizaron etapa 5 (`create_pilot_topic_progress_definitions`, `calculate_topic_progress`, `get_unit_lessons`, `get_available_unit`) no dependen de un área fija, así que solo falta que los cinco puntos de entrada exclusivos del piloto (`get_pilot_review_candidates`, la composición de `/progreso` y de la guía de inicio) iteren `available_units` en vez de una sola unidad fija. el alcance del diagnóstico por área y del simulacro quedan clasificados como decisiones de producto pendientes: `docs/04` describe un único diagnóstico que termina en un resultado por área, mientras `docs/07` dice "diagnóstico breve por área" en singular por área — la misma ambigüedad aplica al simulacro (un simulacro combinado de las siete áreas frente a uno por área). ninguno de los dos se implementa hasta que la persona usuaria elija una forma.

**el lote posterior a etapa 5 se divide en tres tareas secuenciales y sin bloqueo**: `2026-09-18-task_post-etapa-5-repaso-global.md`, `2026-09-18-task_post-etapa-5-progreso-y-inicio-global.md` y `2026-09-18-task_post-etapa-5-dashboard-global.md`. primero se corrige el repaso global, después se añade el agregador puro de progreso para la guía de inicio, y finalmente el dashboard consume ese mismo agregado. diagnóstico y simulacro permanecen fuera de este lote hasta resolver su forma.

**las decisiones de producto sobre evaluación se resolvieron el 2026-09-18.** el diagnóstico será breve y por área: `/diagnostico` selecciona una de las siete áreas y `/diagnostico/[area]` ejecuta una pregunta `diagnostic` por tema de su unidad registrada, con resultado y recomendación dentro de esa área. el simulacro será uno combinado de cobertura mvp: una pregunta `simulator` por tema de las siete unidades, actualmente 36 preguntas, con reporte agrupado por área y tema. la interfaz debe aclarar que no es el examen oficial completo. estas decisiones sustituyen la condición pendiente de la auditoría y se implementan en ese orden.
