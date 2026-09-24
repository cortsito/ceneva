---
id: pm-ecuaciones-cuadraticas-una-incognita-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-5-ecuaciones-cuadraticas-una-incognita
title: Ecuaciones cuadráticas
objective: Calcular las raíces de una ecuación cuadrática con una incógnita.
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

# Ecuaciones cuadráticas

## Objetivo

Calcular las raíces de una ecuación cuadrática mediante factorización o fórmula general.

## Explicación

Una ecuación cuadrática tiene la forma `ax² + bx + c = 0`, con `a` distinto de cero. Sus soluciones, llamadas raíces, son los valores de `x` que hacen cero la expresión.

Si el trinomio puede factorizarse, escribe dos binomios y aplica la propiedad del producto cero: si `p × q = 0`, entonces `p = 0` o `q = 0`. Cuando no es sencillo factorizar, usa la fórmula general:

`x = (-b ± raíz de (b² - 4ac)) / 2a`.

En ambos métodos, primero iguala la ecuación a cero y después comprueba cada raíz en la ecuación original.

## Ejemplo resuelto

Resuelve `x² - 5x + 6 = 0`.

1. Factoriza: `x² - 5x + 6 = (x - 2)(x - 3)`.
2. Aplica producto cero: `x - 2 = 0` o `x - 3 = 0`.
3. Despeja: `x = 2` o `x = 3`.
4. Comprueba que ambos valores hacen cero la ecuación.

Las raíces son `2` y `3`.

## Error frecuente

No concluyas que el producto es cero sin igualar cada factor a cero. De `(x - 2)(x - 3) = 0` se obtienen dos ecuaciones distintas, no una sola raíz.

## Práctica guiada

1. Intenta primero: resuelve `x² - 9 = 0`.
   Respuesta: `(x - 3)(x + 3) = 0`; por tanto, `x = 3` o `x = -3`.
2. Intenta primero: resuelve `x² + 7x + 12 = 0`.
   Respuesta: `(x + 3)(x + 4) = 0`; las raíces son `x = -3` y `x = -4`.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes resolver una ecuación cuadrática cuando identificas sus factores. Iguala cada factor a cero y conserva las dos posibles raíces.
