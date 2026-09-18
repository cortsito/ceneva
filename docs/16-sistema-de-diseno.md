# sistema de diseño editorial

## intención

ceneva debe sentirse como una publicación de estudio contemporánea, no como un dashboard genérico ni una colección de tarjetas iguales. la interfaz mantiene el teal como color de identidad, pero se apoya en composición editorial, contraste tipográfico, espacio deliberado y una jerarquía que permita estudiar durante mucho tiempo.

las referencias editoriales de readymag se interpretan, no se copian: una grilla clara puede convivir con bloques asimétricos, titulares expresivos, etiquetas pequeñas y movimiento mínimo. la prioridad de ceneva sigue siendo comprender y practicar, nunca impresionar a costa de legibilidad o rendimiento.

## principios

1. **tipografía antes que decoración.** títulos y aprendizaje usan una serif editorial con contraste; navegación, controles y texto funcional usan una sans serif limpia. los datos técnicos usan monoespaciada solo cuando ayuda a leer ids, códigos o resultados.
2. **grilla con ritmo.** las pantallas parten de una grilla de doce columnas en escritorio y una columna en móvil. la asimetría se reserva para titulares, índices, llamadas a la acción y bloques de progreso; no rompe el orden de lectura.
3. **superficies, no tarjetas infinitas.** un borde fino, una esquina característica y bloques de color suave sustituyen sombras repetidas. una tarjeta solo existe cuando agrupa una decisión o una acción real.
4. **teal como señal.** el teal se conserva para acciones, progreso y enlaces. no se usa como relleno constante ni como sustituto de jerarquía tipográfica.
5. **modo de lectura.** fondo cálido claro, tinta profunda y líneas discretas en modo claro; fondo azul-negro, superficies elevadas y teal luminoso en modo oscuro. ambos modos deben conservar contraste aa.
6. **mayúsculas con intención.** toda interfaz visible usa ortografía y capitalización convencionales en español. títulos y textos de estudio mantienen mayúsculas, nombres propios, siglas y puntuación correctos. las etiquetas pequeñas pueden usar versalitas o mayúsculas breves mediante estilo, nunca para párrafos o preguntas.
7. **movimiento útil.** transiciones de color, foco y entrada son cortas y respetan `prefers-reduced-motion`. no hay parallax, partículas ni animación automática que compita con la lección.

## tokens

las pantallas usan tokens semánticos definidos en `globals.css`, no combinaciones fijas de `slate-*` y `white` que impidan el modo oscuro:

- `--canvas`, `--surface`, `--surface-raised`, `--ink`, `--ink-muted`, `--line`.
- `--accent`, `--accent-strong`, `--accent-soft`, `--accent-contrast`.
- `--success`, `--warning`, `--danger` y sus superficies suaves.
- `--display-font`: `iowan old style`, `palatino linotype`, `book antiqua`, `georgia`, serif.
- `--body-font`: `ui-sans-serif`, `system-ui`, sans-serif.
- `--mono-font`: `ui-monospace`, `sfmono-regular`, `consolas`, monospace.

el uso de fuentes del sistema evita una dependencia de red y da al titular una voz editorial en los sistemas donde la serif está disponible. no se agrega una fuente remota sin una decisión explícita sobre rendimiento, licencia y fallback.

## modo de color

- la preferencia se guarda de forma independiente en `localStorage` bajo una clave de interfaz; no toca `learner_progress`.
- el primer uso toma `prefers-color-scheme`; una elección explícita de la persona usuaria prevalece después.
- el atributo de tema se aplica a `html` antes de pintar para evitar flash.
- el control es visible, accesible por teclado, anuncia la acción disponible y no usa emojis como único indicador.
- el modo se valida en todas las superficies de lectura, controles, estados correctos/incorrectos y foco visible.

## componentes y composición

### marco

- encabezado compacto y pegajoso: marca tipográfica, descriptor pequeño, navegación mínima y selector de tema.
- pie sobrio con divisor editorial, sin una segunda barra de navegación pesada.
- ancho de lectura estrecho para lecciones; ancho de composición mayor para ruta, inicio y progreso.

### inicio y navegación

- inicio como portada editorial: índice vertical, titular grande, resumen breve, dos acciones y una pieza de progreso útil.
- ruta y progreso como índices: cada área o tema usa número, estado, métrica y acción; no una cuadrícula de tarjetas idénticas.
- repaso, diagnóstico y simulacro conservan su propósito, pero introducen contexto de área, contador y divisores de sección.

### aprendizaje

- lección: encabezado con código, título, objetivo y metadatos; cuerpo con medida tipográfica de lectura, intertítulos serif y llamadas puntuales.
- práctica, diagnóstico y simulacro: panel de pregunta contrastado, opciones con estado inequívoco y progreso visible sin revelar respuestas antes de tiempo.
- resultados: errores, explicación y siguiente acción se organizan por jerarquía editorial, no por alertas genéricas.

## alcance de capitalización

el rediseño corrige inmediatamente el chrome de la aplicación: navegación, botones, encabezados, mensajes de estado y metadatos. las lecciones y los 185 reactivos de las unidades registradas requieren una revisión editorial separada y manual por lote. no se aplica una transformación automática de mayúsculas: rompería nombres propios, siglas, citas, fórmulas y opciones de reactivos.

## no objetivos

- no se agregan ilustraciones generativas, fotos de stock, glassmorphism, gradientes decorativos constantes ni 3d.
- no se cambia la arquitectura de contenido, progreso, rutas o persistencia.
- no se sacrifica contraste, teclado, responsive o tiempos de carga por la estética.

## definición de hecho

- modo claro y oscuro persistentes y sin flash apreciable.
- contraste aa, foco visible y `prefers-reduced-motion` en los componentes modificados.
- la misma acción, estado y jerarquía se entienden en móvil y escritorio.
- no queda una superficie principal con colores hardcodeados que impidan cambiar de tema.
- el chrome visible usa capitalización convencional; la revisión de contenido queda registrada y verificable aparte.
