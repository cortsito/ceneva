---
id: pm-minimo-comun-multiplo-01
area-id: pensamiento-matematico
unit-id: pm-1-4-pensamiento-aritmetico
topic-id: pm-1-4-1-minimo-comun-multiplo
title: Mínimo común múltiplo
objective: Calcular el mínimo común múltiplo de números enteros.
estimated-minutes: 10
prerequisites: []
question-ids:
  - pm-mcm-001
  - pm-mcm-002
  - pm-mcm-003
  - pm-mcm-004
  - pm-mcm-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.4.1
---

# Mínimo común múltiplo

## Objetivo

Calcular el menor número positivo que es múltiplo de dos o más números enteros.

## Explicación

Un múltiplo de un número se obtiene al multiplicarlo por un entero. El mínimo común múltiplo, o MCM, es el menor múltiplo positivo que comparten dos o más números.

Puedes encontrarlo con factorización prima:

1. Descompón cada número en factores primos.
2. Toma todos los factores que aparecen.
3. Para cada factor, usa la mayor potencia observada.
4. Multiplica los factores elegidos.

El MCM es útil para encontrar cuándo coinciden ciclos o para convertir fracciones a un denominador común.

## Ejemplo resuelto

Calcula el MCM de `12` y `18`.

1. `12 = 2² × 3`.
2. `18 = 2 × 3²`.
3. Toma la mayor potencia de cada primo: `2²` y `3²`.
4. `2² × 3² = 4 × 9 = 36`.

El mínimo común múltiplo es `36`.

## Error frecuente

No multipliques siempre los números completos. `12 × 18 = 216` es un múltiplo común, pero no el menor. Usa solo las potencias necesarias de cada factor primo.

## Práctica guiada

1. Intenta primero: calcula el MCM de `6` y `8`.
   Respuesta: `6 = 2 × 3` y `8 = 2³`; el MCM es `2³ × 3 = 24`.
2. Intenta primero: una alarma suena cada `4` minutos y otra cada `6`. Si suenan juntas ahora, ¿en cuántos minutos volverán a coincidir?
   Respuesta: en `12` minutos, porque `mcm(4, 6) = 12`.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes calcular el MCM mediante factores primos. Elige la mayor potencia de cada factor para obtener el primer múltiplo que todos comparten.
