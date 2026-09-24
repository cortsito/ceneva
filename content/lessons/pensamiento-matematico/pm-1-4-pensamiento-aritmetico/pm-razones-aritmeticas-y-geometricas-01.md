---
id: pm-razones-aritmeticas-y-geometricas-01
area-id: pensamiento-matematico
unit-id: pm-1-4-pensamiento-aritmetico
topic-id: pm-1-4-3-razones-aritmeticas-o-geometricas
title: Razones en sucesiones
objective: Identificar la razón aritmética o geométrica de una sucesión numérica.
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

# Razones en sucesiones

## Objetivo

Identificar si una sucesión es aritmética o geométrica y calcular su razón.

## Explicación

Una sucesión es una lista ordenada de números que sigue una regla.

- En una sucesión aritmética, se suma o resta siempre la misma cantidad. Esa diferencia constante se llama razón aritmética.
- En una sucesión geométrica, se multiplica o divide siempre por el mismo número. Ese factor constante se llama razón geométrica.

Para decidir el tipo, resta términos consecutivos. Si las diferencias son iguales, es aritmética. Si no lo son, divide un término entre el anterior; si los cocientes son iguales, es geométrica.

## Ejemplo resuelto

Identifica la regla de `3, 6, 12, 24`.

1. Las diferencias son `3, 6, 12`; no son constantes.
2. Los cocientes son `6 / 3 = 2`, `12 / 6 = 2` y `24 / 12 = 2`.
3. La sucesión es geométrica con razón `2`.

## Error frecuente

No llames razón a la diferencia en una sucesión geométrica. En `3, 6, 12, 24`, la diferencia cambia, pero el cociente se mantiene en `2`.

## Práctica guiada

1. Intenta primero: identifica el tipo y la razón de `5, 8, 11, 14`.
   Respuesta: es aritmética con razón `3`, porque cada término aumenta tres unidades.
2. Intenta primero: identifica el siguiente término de `81, 27, 9, 3`.
   Respuesta: `1`, porque es geométrica con razón `1 / 3`.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes identificar la regla de una sucesión. Compara diferencias para sucesiones aritméticas y cocientes para sucesiones geométricas.
