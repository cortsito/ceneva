
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
id: pm-ecuaciones-lineales-01
area-id: pensamiento-matematico
unit-id: algebra
topic-id: ecuaciones-lineales
title: ecuaciones lineales de una variable
objective: resolver ecuaciones lineales de una variable
estimated-minutes: 12
prerequisites: []
question-ids:
  - pm-ec-001
  - pm-ec-002
```

el cuerpo markdown usa bloques sencillos: explicación, ejemplo, error frecuente, práctica guiada y cierre. no se crea un lenguaje de contenido propio en el mvp.

## pregunta

```ts
type question = {
  id: string
  topic_id: string
  prompt: string
  options: string[]
  correct_option_index: number
  explanation: string
  difficulty: 'basic' | 'intermediate' | 'advanced'
  use_cases: ('diagnostic' | 'practice' | 'review' | 'simulator')[]
}
```

los distractores representan errores plausibles. una pregunta sin explicación no se publica.

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
