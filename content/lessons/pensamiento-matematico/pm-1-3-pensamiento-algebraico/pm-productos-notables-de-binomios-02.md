---
id: pm-productos-notables-de-binomios-02
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-3-producto-notable-de-binomios
title: optimización de funciones cuadráticas
objective: determinar el valor máximo o mínimo de una función polinomial de segundo grado.
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

# optimización de funciones cuadráticas

## objetivo

determinar el valor máximo o mínimo de una función cuadrática escrita en forma de vértice.

## explicación

una función cuadrática puede escribirse como `f(x) = a(x - h)² + k`. esta forma muestra el vértice de la parábola en `(h, k)`.

- si `a` es positivo, la parábola abre hacia arriba y `k` es el valor mínimo.
- si `a` es negativo, la parábola abre hacia abajo y `k` es el valor máximo.

el valor de `x` que produce el extremo es `h`. observa con cuidado el signo dentro del paréntesis: en `(x - 3)²`, `h` es `3`; en `(x + 3)²`, `h` es `-3`.

## ejemplo resuelto

la ganancia de un negocio se modela con `g(x) = -2(x - 3)² + 18`. determina la ganancia máxima.

1. el coeficiente `-2` es negativo, así que la parábola abre hacia abajo.
2. por ello, el vértice representa un máximo.
3. el vértice es `(3, 18)`.

la ganancia máxima es `18` y se alcanza cuando `x = 3`.

## error frecuente

no elijas el valor más grande de `x` como máximo de la función. el máximo o mínimo depende de la apertura de la parábola y ocurre en el vértice, no en cualquier valor alto de la variable.

## práctica guiada

1. intenta primero: determina el mínimo de `f(x) = 3(x + 2)² - 5`.
   respuesta: el mínimo es `-5` y ocurre en `x = -2`, porque `3` es positivo y la parábola abre hacia arriba.
2. intenta primero: determina el máximo de `r(x) = -(x - 4)² + 9`.
   respuesta: el máximo es `9` y ocurre en `x = 4`, porque el coeficiente principal es negativo.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes identificar el extremo de una función cuadrática en forma de vértice. revisa la apertura para decidir si `k` representa un máximo o un mínimo.
