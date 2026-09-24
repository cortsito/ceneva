---
id: pm-productos-notables-de-binomios-02
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-3-producto-notable-de-binomios
title: Optimización de funciones cuadráticas
objective: Determinar el valor máximo o mínimo de una función polinomial de segundo grado.
estimated-minutes: 14
prerequisites:
  - pm-productos-notables-de-binomios-01
question-ids:
  - pm-ofc-001
  - pm-ofc-002
  - pm-ofc-003
  - pm-ofc-004
  - pm-ofc-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.3
---

# Optimización de funciones cuadráticas

## Objetivo

Determinar el valor máximo o mínimo de una función cuadrática escrita en forma de vértice.

## Explicación

Una función cuadrática puede escribirse como `f(x) = a(x - h)² + k`. Esta forma muestra el vértice de la parábola en `(h, k)`.

- Si `a` es positivo, la parábola abre hacia arriba y `k` es el valor mínimo.
- Si `a` es negativo, la parábola abre hacia abajo y `k` es el valor máximo.

El valor de `x` que produce el extremo es `h`. Observa con cuidado el signo dentro del paréntesis: en `(x - 3)²`, `h` es `3`; en `(x + 3)²`, `h` es `-3`.

## Ejemplo resuelto

La ganancia de un negocio se modela con `g(x) = -2(x - 3)² + 18`. Determina la ganancia máxima.

1. El coeficiente `-2` es negativo, así que la parábola abre hacia abajo.
2. Por ello, el vértice representa un máximo.
3. El vértice es `(3, 18)`.

La ganancia máxima es `18` y se alcanza cuando `x = 3`.

## Error frecuente

No elijas el valor más grande de `x` como máximo de la función. El máximo o mínimo depende de la apertura de la parábola y ocurre en el vértice, no en cualquier valor alto de la variable.

## Práctica guiada

1. Intenta primero: determina el mínimo de `f(x) = 3(x + 2)² - 5`.
   Respuesta: el mínimo es `-5` y ocurre en `x = -2`, porque `3` es positivo y la parábola abre hacia arriba.
2. Intenta primero: determina el máximo de `r(x) = -(x - 4)² + 9`.
   Respuesta: el máximo es `9` y ocurre en `x = 4`, porque el coeficiente principal es negativo.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes identificar el extremo de una función cuadrática en forma de vértice. Revisa la apertura para decidir si `k` representa un máximo o un mínimo.
