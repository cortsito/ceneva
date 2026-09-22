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

- encabezado compacto y pegajoso: marca tipográfica, navegación mínima y selector de tema.
- en móvil, el encabezado cerrado ocupa una sola fila: marca, tema y menú. la navegación se muestra en un panel desplegable de dos columnas; nunca se distribuye en varias filas dentro del encabezado.
- en escritorio, la navegación se agrupa como un control central compacto y el descriptor largo solo aparece cuando existe espacio suficiente.
- pie sobrio con divisor editorial, sin una segunda barra de navegación pesada.
- ancho de lectura estrecho para lecciones; ancho de composición mayor para ruta, inicio y progreso.

### inicio y navegación

- inicio como portada editorial: índice vertical, titular grande, resumen breve, dos acciones y una pieza de progreso útil.
- ruta y progreso como índices: cada área o tema usa número, estado, métrica y acción; no una cuadrícula de tarjetas idénticas.
- repaso, diagnóstico y simulacro conservan su propósito, pero introducen contexto de área, contador y divisores de sección.

### aprendizaje

- lección: encabezado con código, título, objetivo y metadatos; cuerpo con medida tipográfica de lectura, intertítulos serif y llamadas puntuales.
- práctica, diagnóstico y simulacro: panel de pregunta contrastado, progreso lineal visible y opciones identificadas con letras. selección, acierto y error cambian borde, fondo, marcador y texto; ningún estado depende solo del color.
- en móvil, los controles usan toda la anchura disponible y mantienen una altura táctil mínima. el encabezado permanece en una sola fila y la pregunta conserva una columna de lectura sin desbordamiento horizontal.
- resultados: errores, explicación y siguiente acción se organizan por jerarquía editorial, no por alertas genéricas.

## revisión integral de interfaz · 2026-09-22

la segunda revisión visual sustituye el primer resultado del rediseño editorial sin cambiar su intención. el sistema conserva la serif editorial, el teal y la grilla, pero corrige densidad, contraste y consistencia:

- la paleta clara usa un canvas cálido, superficies blancas y tinta azul-negra; la paleta oscura usa canvas `#090e13`, superficies `#111920`/`#17232c`, tinta `#f5f7f4` y texto secundario `#bec9cd`.
- se añaden `surface-soft`, `ink-subtle` y `line-strong` para evitar usar texto tenue o bordes ambiguos en contextos que requieren más contraste.
- `page-shell`, `reading-shell`, `page-heading`, `page-intro`, botones, paneles y controles de pregunta forman el vocabulario presentacional compartido. estas clases no contienen reglas de dominio.
- las opciones conservan radios nativos para teclado y lector de pantalla, pero presentan marcadores `a`/`b`/`c`, áreas táctiles amplias y estados visuales propios.
- inicio, ruta, diagnóstico, progreso, lecciones, práctica, simulacro, placeholders y errores comparten ahora la misma escala, radio, borde y jerarquía de acciones.
- no se agregan dependencias visuales, fuentes remotas ni cambios a contenido, rutas, progreso o persistencia.

## ux pedagógica de preguntas y lecciones · 2026-09-22

la claridad de aprendizaje prevalece sobre cualquier gesto editorial. una pantalla debe dejar claro qué se está estudiando, qué acción sigue y qué resultado tuvo sin depender de inferencias, color aislado o jerarquías tipográficas ambiguas.

- toda pregunta vive dentro de una superficie completa. el enunciado ya no funciona como `legend` visual sobre el borde: el `fieldset` nativo se conserva para semántica y teclado, pero no dibuja el contenedor.
- cuando un reactivo incluye una lectura, caso o cita extensa, `stimulus` contiene el texto base y `prompt` conserva únicamente la instrucción. ambos bloques tienen etiquetas y estilos distintos.
- una opción contestada comunica su estado con texto, icono, borde y color. los resultados siempre dicen `acierto` o `por reforzar`; nunca se interpreta un acierto por la ausencia de una corrección.
- la revisión separa `tu respuesta`, `respuesta correcta`, `por qué` y `error común`. las respuestas correctas pueden colapsar su detalle en resultados extensos; los errores permanecen abiertos porque requieren una acción de aprendizaje.
- el resultado total es el dato principal de la pantalla: cantidad correcta, total, porcentaje y siguiente acción aparecen antes del detalle por pregunta.
- diagnóstico y simulacro conservan su regla de no revelar respuestas durante la sesión. esta mejora cambia la presentación del reporte final, no la validez de la evaluación.
- la lección no muestra metadatos de autoría, ids, rutas de archivos, calibración ni notas del banco. `comprobación` existe como sección editorial interna y el componente interactivo representa esa etapa para la persona usuaria.
- las lecciones usan una secuencia constante: objetivo observable, aprende, observa, error frecuente, inténtalo, comprobación interactiva y cierre. cada etapa tiene una función visual distinta y un índice lateral solo cuando existe espacio suficiente.
- los títulos de actividad son compactos. la portada puede conservar un display expresivo, pero preguntas, lecciones y resultados priorizan contenido visible antes del primer scroll.
- el ancho de una evaluación es mayor que el ancho de lectura de una lección. el contenido usa mejor el escritorio sin crear líneas de texto excesivamente largas.

estas reglas son estructurales y se aplican mediante componentes compartidos en `src/components/learning/question-ui.tsx`; no deben volver a implementarse de forma aislada en cada flujo.

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
