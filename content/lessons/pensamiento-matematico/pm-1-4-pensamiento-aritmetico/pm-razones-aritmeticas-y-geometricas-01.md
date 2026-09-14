---
id: pm-razones-aritmeticas-y-geometricas-01
area-id: pensamiento-matematico
unit-id: pm-1-4-pensamiento-aritmetico
topic-id: pm-1-4-3-razones-aritmeticas-o-geometricas
title: razones en sucesiones
objective: identificar la razón aritmética o geométrica de una sucesión numérica.
estimated-minutes: 10
prerequisites: []
question-ids:
  - pm-rag-001
  - pm-rag-002
  - pm-rag-003
  - pm-rag-004
  - pm-rag-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.4.3
---

# razones en sucesiones

## objetivo

identificar si una sucesión es aritmética o geométrica y calcular su razón.

## explicación

una sucesión es una lista ordenada de números que sigue una regla.

- en una sucesión aritmética, se suma o resta siempre la misma cantidad. esa diferencia constante se llama razón aritmética.
- en una sucesión geométrica, se multiplica o divide siempre por el mismo número. ese factor constante se llama razón geométrica.

para decidir el tipo, resta términos consecutivos. si las diferencias son iguales, es aritmética. si no lo son, divide un término entre el anterior; si los cocientes son iguales, es geométrica.

## ejemplo resuelto

identifica la regla de `3, 6, 12, 24`.

1. las diferencias son `3, 6, 12`; no son constantes.
2. los cocientes son `6 / 3 = 2`, `12 / 6 = 2` y `24 / 12 = 2`.
3. la sucesión es geométrica con razón `2`.

## error frecuente

no llames razón a la diferencia en una sucesión geométrica. en `3, 6, 12, 24`, la diferencia cambia, pero el cociente se mantiene en `2`.

## práctica guiada

1. intenta primero: identifica el tipo y la razón de `5, 8, 11, 14`.
   respuesta: es aritmética con razón `3`, porque cada término aumenta tres unidades.
2. intenta primero: identifica el siguiente término de `81, 27, 9, 3`.
   respuesta: `1`, porque es geométrica con razón `1 / 3`.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes identificar la regla de una sucesión. compara diferencias para sucesiones aritméticas y cocientes para sucesiones geométricas.
