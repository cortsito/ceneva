---
id: cd-formulas-de-hoja-de-calculo-01
area-id: cultura-digital
unit-id: cd-2-3-creatividad-digital
topic-id: cd-2-3-1-herramientas-de-hoja-de-calculo
title: Fórmulas de hoja de cálculo
objective: Usar fórmulas para realizar operaciones básicas en una hoja de cálculo.
estimated-minutes: 12
prerequisites: []
question-ids:
  - cd-hc-001
  - cd-hc-002
  - cd-hc-003
  - cd-hc-004
  - cd-hc-005
source:
  guide: docs/guiaoficial.pdf
  page: 13
  code: 2.3.1
---

# Fórmulas de hoja de cálculo

## Objetivo

Elegir la fórmula correcta de una hoja de cálculo para resolver una operación básica sobre un rango de celdas.

## Explicación

Una hoja de cálculo organiza datos en celdas identificadas por una columna y una fila (por ejemplo, `A1` o `B3`). En lugar de calcular a mano, se escribe una fórmula que comienza con el signo `=` y opera sobre uno o varios valores o rangos de celdas. Las fórmulas más usadas para operaciones básicas son:

- `=SUMA(rango)`: suma todos los valores del rango indicado, por ejemplo `=SUMA(A1:A5)`.
- `=PROMEDIO(rango)`: calcula la media aritmética de los valores del rango.
- `=MAX(rango)` y `=MIN(rango)`: devuelven el valor más alto y el más bajo del rango.
- `=CONTAR(rango)`: cuenta cuántas celdas del rango contienen un valor numérico.

Un rango se escribe como `celda_inicial:celda_final`; `A1:A5` incluye las celdas `A1`, `A2`, `A3`, `A4` y `A5`. Al copiar una fórmula hacia otras celdas, las referencias a celdas se ajustan automáticamente según la nueva posición, salvo que se fije la fila o columna con el signo `$` (por ejemplo, `$A$1`), lo que mantiene esa referencia sin cambios al copiarla.

## Ejemplo resuelto

Una hoja de cálculo tiene, en las celdas `B2` a `B6`, las calificaciones de cinco exámenes de un estudiante: 8, 9, 7, 10 y 8. Se necesita conocer la calificación promedio.

1. La operación requerida es una media aritmética sobre un rango de celdas.
2. La fórmula correspondiente a una media aritmética es `=PROMEDIO(rango)`.
3. La fórmula que resuelve el caso es `=PROMEDIO(B2:B6)`, que da como resultado 8.4.

## Error frecuente

No confundas `=SUMA(rango)` con `=PROMEDIO(rango)`: la primera devuelve el total de los valores, no su media. Tampoco olvides que el rango debe cubrir exactamente las celdas que se quieren calcular; un rango incompleto (por ejemplo, `A1:A3` cuando los datos llegan hasta `A5`) deja valores fuera del cálculo.

## Práctica guiada

1. Intenta primero: en las celdas `C1` a `C4` hay cuatro precios de productos. ¿Qué fórmula obtiene el precio más alto?
   Respuesta: `=MAX(C1:C4)`. Devuelve el valor más alto del rango indicado.
2. Intenta primero: se necesita saber cuántas celdas del rango `D1:D10` tienen un valor numérico capturado. ¿Qué fórmula usarías?
   Respuesta: `=CONTAR(D1:D10)`. Cuenta las celdas con valor numérico dentro del rango.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/cultura-digital.ts`.

## Cierre

Ya puedes elegir entre `SUMA`, `PROMEDIO`, `MAX`, `MIN` y `CONTAR` la fórmula adecuada para resolver una operación básica sobre un rango de celdas en una hoja de cálculo.
