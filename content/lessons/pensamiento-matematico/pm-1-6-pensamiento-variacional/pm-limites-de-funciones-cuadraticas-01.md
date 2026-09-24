---
id: pm-limites-de-funciones-cuadraticas-01
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-3-limite-de-una-funcion-de-una-variable-real
title: Límites de funciones cuadráticas
objective: Calcular el límite de una función cuadrática.
estimated-minutes: 12
prerequisites:
  - pm-graficas-de-funciones-02
question-ids:
  - pm-lfc-001
  - pm-lfc-002
  - pm-lfc-003
  - pm-lfc-004
  - pm-lfc-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 1.6.3
---

# Límites de funciones cuadráticas

## Objetivo

Calcular el límite de una función cuadrática mediante sustitución directa.

## Explicación

El límite describe el valor al que se aproxima una función cuando `x` se acerca a un número. Las funciones cuadráticas son continuas: no tienen saltos ni huecos. Por ello, para calcular su límite en un valor dado, basta sustituir ese valor en la expresión.

Si se pide `límite cuando x tiende a a de f(x)`, reemplaza cada `x` por `a`, realiza las operaciones y reporta el resultado. No confundas el número al que se acerca `x` con el resultado de la función.

## Ejemplo resuelto

Calcula el límite de `f(x) = x² - 4x + 1` cuando `x` tiende a `3`.

1. Sustituye `x = 3`: `3² - 4(3) + 1`.
2. Calcula: `9 - 12 + 1 = -2`.

El límite es `-2`.

## Error frecuente

No sustituyas solo en el primer término. Cada aparición de `x` debe reemplazarse por el mismo valor; de otro modo, la evaluación deja de representar la función original.

## Práctica guiada

1. Intenta primero: calcula el límite de `g(x) = 2x² + x - 3` cuando `x` tiende a `2`.
   Respuesta: `2(2²) + 2 - 3 = 8 + 2 - 3 = 7`.
2. Intenta primero: calcula el límite de `h(x) = x² + 5` cuando `x` tiende a `-4`.
   Respuesta: `(-4)² + 5 = 16 + 5 = 21`. El cuadrado de un número negativo es positivo.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes calcular límites de funciones cuadráticas por sustitución directa. Reemplaza cada variable con cuidado y respeta los signos y paréntesis.
