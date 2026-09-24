---
id: pm-graficas-de-funciones-02
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-2-graficas-de-funciones-de-una-variable-real
title: Extremos y concavidad
objective: Determinar máximos, mínimos y concavidad en la gráfica de una función.
estimated-minutes: 14
prerequisites:
  - pm-graficas-de-funciones-01
question-ids:
  - pm-gfec-001
  - pm-gfec-002
  - pm-gfec-003
  - pm-gfec-004
  - pm-gfec-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 1.6.2
---

# Extremos y concavidad

## Objetivo

Determinar máximos, mínimos y concavidad a partir de la forma de una gráfica.

## Explicación

Un máximo local es un punto más alto que los puntos cercanos. Un mínimo local es un punto más bajo que los cercanos. La concavidad describe hacia dónde se abre la curva:

- Cóncava hacia arriba: forma similar a una sonrisa; la gráfica abre hacia arriba.
- Cóncava hacia abajo: forma similar a un arco; la gráfica abre hacia abajo.

En una parábola `f(x) = a(x - h)² + k`, el vértice `(h, k)` es un mínimo si `a` es positivo y un máximo si `a` es negativo. El signo de `a` también indica la concavidad.

## Ejemplo resuelto

Analiza `f(x) = -2(x - 3)² + 7`.

1. El coeficiente `-2` es negativo, por lo que la parábola es cóncava hacia abajo.
2. El vértice es `(3, 7)`.
3. Al abrir hacia abajo, el vértice representa un máximo.

La función tiene máximo `7` en `x = 3` y concavidad hacia abajo.

## Error frecuente

No confundas el valor del máximo con la coordenada donde ocurre. En el vértice `(3, 7)`, `x = 3` es la ubicación y `7` es el valor máximo de la función.

## Práctica guiada

1. Intenta primero: analiza `g(x) = (x + 1)² - 4`.
   Respuesta: abre hacia arriba, tiene mínimo `-4` y ocurre en `x = -1`.
2. Intenta primero: una gráfica tiene forma de arco y alcanza su punto más alto en `(5, 12)`. ¿Qué información puedes afirmar?
   Respuesta: es cóncava hacia abajo y tiene un máximo de `12` en `x = 5`.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes distinguir un máximo de un mínimo y describir la concavidad. Separa siempre la coordenada `x` del valor `y` del vértice.
