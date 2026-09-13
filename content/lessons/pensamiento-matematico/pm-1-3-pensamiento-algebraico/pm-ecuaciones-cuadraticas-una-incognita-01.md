---
id: pm-ecuaciones-cuadraticas-una-incognita-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-5-ecuaciones-cuadraticas-una-incognita
title: ecuaciones cuadráticas
objective: calcular las raíces de una ecuación cuadrática con una incógnita.
estimated-minutes: 14
prerequisites:
  - pm-factorizacion-de-polinomios-01
question-ids:
  - pm-ec-001
  - pm-ec-002
  - pm-ec-003
  - pm-ec-004
  - pm-ec-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.5
---

# ecuaciones cuadráticas

## objetivo

calcular las raíces de una ecuación cuadrática mediante factorización o fórmula general.

## explicación

una ecuación cuadrática tiene la forma `ax² + bx + c = 0`, con `a` distinto de cero. sus soluciones, llamadas raíces, son los valores de `x` que hacen cero la expresión.

si el trinomio puede factorizarse, escribe dos binomios y aplica la propiedad del producto cero: si `p × q = 0`, entonces `p = 0` o `q = 0`. cuando no es sencillo factorizar, usa la fórmula general:

`x = (-b ± raíz de (b² - 4ac)) / 2a`.

en ambos métodos, primero iguala la ecuación a cero y después comprueba cada raíz en la ecuación original.

## ejemplo resuelto

resuelve `x² - 5x + 6 = 0`.

1. factoriza: `x² - 5x + 6 = (x - 2)(x - 3)`.
2. aplica producto cero: `x - 2 = 0` o `x - 3 = 0`.
3. despeja: `x = 2` o `x = 3`.
4. comprueba que ambos valores hacen cero la ecuación.

las raíces son `2` y `3`.

## error frecuente

no concluyas que el producto es cero sin igualar cada factor a cero. de `(x - 2)(x - 3) = 0` se obtienen dos ecuaciones distintas, no una sola raíz.

## práctica guiada

1. intenta primero: resuelve `x² - 9 = 0`.
   respuesta: `(x - 3)(x + 3) = 0`; por tanto, `x = 3` o `x = -3`.
2. intenta primero: resuelve `x² + 7x + 12 = 0`.
   respuesta: `(x + 3)(x + 4) = 0`; las raíces son `x = -3` y `x = -4`.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes resolver una ecuación cuadrática cuando identificas sus factores. iguala cada factor a cero y conserva las dos posibles raíces.
