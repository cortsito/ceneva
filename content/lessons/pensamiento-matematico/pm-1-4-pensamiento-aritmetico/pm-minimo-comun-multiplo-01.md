---
id: pm-minimo-comun-multiplo-01
area-id: pensamiento-matematico
unit-id: pm-1-4-pensamiento-aritmetico
topic-id: pm-1-4-1-minimo-comun-multiplo
title: mínimo común múltiplo
objective: calcular el mínimo común múltiplo de números enteros.
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

# mínimo común múltiplo

## objetivo

calcular el menor número positivo que es múltiplo de dos o más números enteros.

## explicación

un múltiplo de un número se obtiene al multiplicarlo por un entero. el mínimo común múltiplo, o mcm, es el menor múltiplo positivo que comparten dos o más números.

puedes encontrarlo con factorización prima:

1. descompón cada número en factores primos.
2. toma todos los factores que aparecen.
3. para cada factor, usa la mayor potencia observada.
4. multiplica los factores elegidos.

el mcm es útil para encontrar cuándo coinciden ciclos o para convertir fracciones a un denominador común.

## ejemplo resuelto

calcula el mcm de `12` y `18`.

1. `12 = 2² × 3`.
2. `18 = 2 × 3²`.
3. toma la mayor potencia de cada primo: `2²` y `3²`.
4. `2² × 3² = 4 × 9 = 36`.

el mínimo común múltiplo es `36`.

## error frecuente

no multipliques siempre los números completos. `12 × 18 = 216` es un múltiplo común, pero no el menor. usa solo las potencias necesarias de cada factor primo.

## práctica guiada

1. intenta primero: calcula el mcm de `6` y `8`.
   respuesta: `6 = 2 × 3` y `8 = 2³`; el mcm es `2³ × 3 = 24`.
2. intenta primero: una alarma suena cada `4` minutos y otra cada `6`. si suenan juntas ahora, ¿en cuántos minutos volverán a coincidir?
   respuesta: en `12` minutos, porque `mcm(4, 6) = 12`.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes calcular el mcm mediante factores primos. elige la mayor potencia de cada factor para obtener el primer múltiplo que todos comparten.
