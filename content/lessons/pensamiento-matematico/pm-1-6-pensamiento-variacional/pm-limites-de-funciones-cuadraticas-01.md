---
id: pm-limites-de-funciones-cuadraticas-01
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-3-limite-de-una-funcion-de-una-variable-real
title: límites de funciones cuadráticas
objective: calcular el límite de una función cuadrática.
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

# límites de funciones cuadráticas

## objetivo

calcular el límite de una función cuadrática mediante sustitución directa.

## explicación

el límite describe el valor al que se aproxima una función cuando `x` se acerca a un número. las funciones cuadráticas son continuas: no tienen saltos ni huecos. por ello, para calcular su límite en un valor dado, basta sustituir ese valor en la expresión.

si se pide `límite cuando x tiende a a de f(x)`, reemplaza cada `x` por `a`, realiza las operaciones y reporta el resultado. no confundas el número al que se acerca `x` con el resultado de la función.

## ejemplo resuelto

calcula el límite de `f(x) = x² - 4x + 1` cuando `x` tiende a `3`.

1. sustituye `x = 3`: `3² - 4(3) + 1`.
2. calcula: `9 - 12 + 1 = -2`.

el límite es `-2`.

## error frecuente

no sustituyas solo en el primer término. cada aparición de `x` debe reemplazarse por el mismo valor; de otro modo, la evaluación deja de representar la función original.

## práctica guiada

1. intenta primero: calcula el límite de `g(x) = 2x² + x - 3` cuando `x` tiende a `2`.
   respuesta: `2(2²) + 2 - 3 = 8 + 2 - 3 = 7`.
2. intenta primero: calcula el límite de `h(x) = x² + 5` cuando `x` tiende a `-4`.
   respuesta: `(-4)² + 5 = 16 + 5 = 21`. el cuadrado de un número negativo es positivo.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes calcular límites de funciones cuadráticas por sustitución directa. reemplaza cada variable con cuidado y respeta los signos y paréntesis.
