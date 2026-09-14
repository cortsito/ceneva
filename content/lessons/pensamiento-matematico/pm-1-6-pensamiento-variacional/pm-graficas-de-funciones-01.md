---
id: pm-graficas-de-funciones-01
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-2-graficas-de-funciones-de-una-variable-real
title: crecimiento y decrecimiento
objective: identificar intervalos crecientes y decrecientes en la gráfica de una función.
estimated-minutes: 12
prerequisites:
  - pm-expresiones-algebraicas-01
question-ids:
  - pm-gfcd-001
  - pm-gfcd-002
  - pm-gfcd-003
  - pm-gfcd-004
  - pm-gfcd-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 1.6.2
---

# crecimiento y decrecimiento

## objetivo

identificar dónde una función aumenta o disminuye al recorrer su gráfica de izquierda a derecha.

## explicación

una función es creciente en un intervalo cuando sus valores de `y` aumentan al aumentar `x`. es decreciente cuando sus valores de `y` disminuyen al aumentar `x`.

para leer una gráfica, recórrela de izquierda a derecha:

- si la curva sube, la función es creciente.
- si la curva baja, la función es decreciente.
- en un máximo o mínimo cambia el comportamiento, por lo que esos puntos separan intervalos.

los intervalos se expresan con valores de `x`, no con alturas de `y`.

## ejemplo resuelto

considera la función `f(x) = x²`. su gráfica tiene un mínimo en `x = 0`.

1. antes de `0`, al avanzar de `-3` a `-2` o a `-1`, los valores de `x²` bajan.
2. por tanto, la función decrece en `(-∞, 0)`.
3. después de `0`, al avanzar de `1` a `2` o a `3`, los valores de `x²` suben.
4. por tanto, la función crece en `(0, ∞)`.

## error frecuente

no declares que una función es creciente solo porque sus valores son positivos. una función puede tener valores positivos y estar bajando; el criterio es cómo cambia al aumentar `x`.

## práctica guiada

1. intenta primero: una gráfica sube desde `x = -4` hasta `x = 1` y después baja hasta `x = 5`. indica sus intervalos.
   respuesta: es creciente en `(-4, 1)` y decreciente en `(1, 5)`. el cambio ocurre en `x = 1`.
2. intenta primero: para `g(x) = -x²`, ¿en qué lado de `x = 0` la función es creciente?
   respuesta: en `(-∞, 0)`. al acercarse a `0` desde la izquierda, los valores suben hacia `0`.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes leer crecimiento y decrecimiento desde una gráfica. avanza siempre de izquierda a derecha y expresa la respuesta con intervalos de `x`.
