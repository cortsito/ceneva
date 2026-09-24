
## principio

cada elemento del contenido debe poder rastrearse hasta un área y tema de la guía. los ids nunca cambian una vez publicados.

## esquema curricular

```text
area
├── id
├── title
├── description
└── units[]
    ├── id
    ├── title
    └── topics[]
        ├── id
        ├── title
        └── lesson-ids[]
```

## frontmatter de lección

```yaml
id: pm-ecuaciones-lineales-una-incognita-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-4-ecuaciones-lineales-una-incognita
title: ecuaciones lineales con una incógnita
objective: resolver ecuaciones lineales de una variable
estimated-minutes: 12
prerequisites: []
question-ids:
  - pm-ec-001
  - pm-ec-002
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.4
```

`unit-id` y `topic-id` usan el id estable definido en `content/source-maps/<area>.md` (con el código de la guía embebido, por ejemplo `pm-1-3-pensamiento-algebraico`), no un slug genérico. `source` registra la página y el código de la guía oficial de los que proviene la lección, para trazabilidad y para poder revisar el contenido si cambia una versión futura de la guía.

el cuerpo markdown usa bloques sencillos: explicación, ejemplo, error frecuente, práctica guiada y cierre. no se crea un lenguaje de contenido propio en el mvp.

## pregunta

```ts
type question = {
  id: string
  topic_id: string
  stimulus?: string
  prompt: string
  options: string[]
  correct_option_index: number
  explanation: string
  common_error?: string
  source_reference?: string
  difficulty: 'basic' | 'intermediate' | 'advanced'
  use_cases: ('diagnostic' | 'practice' | 'review' | 'simulator')[]
}
```

`stimulus` es opcional y contiene una lectura, cita, caso o datos base que deben distinguirse visualmente de la consigna. cuando no hay material previo que analizar, se omite. `prompt` conserva siempre la pregunta o instrucción que la persona debe responder; no se mezcla con un texto base extenso.

`options` tiene siempre exactamente tres elementos distintos: una respuesta correcta y dos distractores. este es el formato oficial del examen (`docs/guiaoficial.pdf`, apartado 5, «formato de reactivos»); no se usan cuatro opciones ni etiquetas duplicadas. los reactivos oficiales tienen cuatro variantes de forma —cuestionamiento directo, jerarquización, completamiento y relación de elementos— pero todas se resuelven eligiendo una de tres opciones; en jerarquización o relación de elementos, cada opción describe una secuencia o asociación completa (por ejemplo, `1a, 2b, 3c`), no un solo valor.

los distractores representan errores plausibles. una pregunta sin explicación no se publica. `common_error` describe, cuando aplica, el error de razonamiento típico que produce uno de los distractores (ver docs/05). `source_reference` guarda la página y el código de la guía oficial de los que proviene la orientación evaluada.

el número de "reactivos oficiales" que la guía asigna a un tema es la ponderación del examen real, no el tamaño del banco de práctica de ceneva: la regla de dominio ([[06-datos-y-progreso]]) exige un mínimo de cinco preguntas por tema, así que la mayoría de los temas necesitan preguntas adicionales escritas por ceneva más allá del o los reactivos oficiales documentados.

## progreso local

```ts
type attempt = {
  question_id: string
  selected_option_index: number
  is_correct: boolean
  created_at: string
  mode: 'diagnostic' | 'practice' | 'review' | 'simulator'
}

type learner_progress = {
  schema_version: 1
  completed_lesson_ids: string[]
  attempts: attempt[]
  onboarding_completed: boolean
}
```

el primer almacenamiento puede ser una sola clave versionada de localstorage. cuando se integre supabase, este formato se transforma mediante una capa de storage y no se filtra al resto de la app.

## validación

al cargar contenido, validar ids únicos, referencias válidas y preguntas con opciones suficientes. esta validación corre en desarrollo y en ci antes de desplegar.

## orden de creación de contenido

1. mapa de pensamiento matemático según la guía.
2. una unidad completa.
3. lecciones y preguntas conectadas.
4. revisión pedagógica y técnica.
5. siguiente unidad.

una vertical completa es más valiosa que muchas lecciones aisladas.
