
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
- los estados de tema se actualizan con reglas de [[06-datos-y-progreso]].

## etapa 2: práctica y repaso

### alcance

- práctica por tema.
- lista breve de preguntas pendientes de repaso.
- pantalla de resultados conectada a la lección correspondiente.
- dashboard de progreso de pensamiento matemático.

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

el siguiente trabajo de implementación es etapa 2, después de verificar el preview de vercel si el repositorio ya está conectado. antes de escribir código, se deben dividir sus alcances en tareas enfocadas como se hizo en etapa 1.
