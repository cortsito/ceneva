---
id: pm-graficas-de-funciones-01
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-2-graficas-de-funciones-de-una-variable-real
title: Crecimiento y decrecimiento
objective: Identificar intervalos crecientes y decrecientes en la gráfica de una función.
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

# Crecimiento y decrecimiento

## Objetivo

Identificar dónde una función aumenta o disminuye al recorrer su gráfica de izquierda a derecha.

## Explicación

Una función es creciente en un intervalo cuando sus valores de `y` aumentan al aumentar `x`. Es decreciente cuando sus valores de `y` disminuyen al aumentar `x`.

Para leer una gráfica, recórrela de izquierda a derecha:

- Si la curva sube, la función es creciente.
- Si la curva baja, la función es decreciente.
- En un máximo o mínimo cambia el comportamiento, por lo que esos puntos separan intervalos.

Los intervalos se expresan con valores de `x`, no con alturas de `y`.

## Ejemplo resuelto

Considera la función `f(x) = x²`. Su gráfica tiene un mínimo en `x = 0`.

1. Antes de `0`, al avanzar de `-3` a `-2` o a `-1`, los valores de `x²` bajan.
2. Por tanto, la función decrece en `(-∞, 0)`.
3. Después de `0`, al avanzar de `1` a `2` o a `3`, los valores de `x²` suben.
4. Por tanto, la función crece en `(0, ∞)`.

## Error frecuente

No declares que una función es creciente solo porque sus valores son positivos. Una función puede tener valores positivos y estar bajando; el criterio es cómo cambia al aumentar `x`.

## Práctica guiada

1. Intenta primero: una gráfica sube desde `x = -4` hasta `x = 1` y después baja hasta `x = 5`. Indica sus intervalos.
   Respuesta: es creciente en `(-4, 1)` y decreciente en `(1, 5)`. El cambio ocurre en `x = 1`.
2. Intenta primero: para `g(x) = -x²`, ¿en qué lado de `x = 0` la función es creciente?
   Respuesta: en `(-∞, 0)`. Al acercarse a `0` desde la izquierda, los valores suben hacia `0`.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes leer crecimiento y decrecimiento desde una gráfica. Avanza siempre de izquierda a derecha y expresa la respuesta con intervalos de `x`.
