---
id: pm-maximo-comun-divisor-01
area-id: pensamiento-matematico
unit-id: pm-1-4-pensamiento-aritmetico
topic-id: pm-1-4-2-maximo-comun-divisor
title: Máximo común divisor
objective: Calcular el máximo común divisor de números enteros.
estimated-minutes: 10
prerequisites: []
question-ids:
  - pm-mcd-001
  - pm-mcd-002
  - pm-mcd-003
  - pm-mcd-004
  - pm-mcd-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.4.2
---

# Máximo común divisor

## Objetivo

Calcular el mayor número que divide exactamente a dos o más números enteros.

## Explicación

Un divisor de un número lo divide sin dejar residuo. El máximo común divisor, o MCD, es el divisor común más grande de dos o más números.

Con factorización prima:

1. Descompón cada número en factores primos.
2. Identifica los factores presentes en todos los números.
3. Toma la menor potencia común de cada factor.
4. Multiplica esos factores.

El MCD ayuda a repartir objetos en grupos iguales lo más grandes posible y a simplificar fracciones.

## Ejemplo resuelto

Calcula el MCD de `48` y `60`.

1. `48 = 2⁴ × 3`.
2. `60 = 2² × 3 × 5`.
3. Los factores comunes son `2` y `3`; usa la menor potencia de `2`, que es `2²`.
4. `2² × 3 = 12`.

El máximo común divisor es `12`.

## Error frecuente

No incluyas factores que aparecen solo en uno de los números. El `5` de `60` no forma parte del MCD porque no divide a `48`.

## Práctica guiada

1. Intenta primero: calcula el MCD de `18` y `30`.
   Respuesta: `18 = 2 × 3²` y `30 = 2 × 3 × 5`; el MCD es `2 × 3 = 6`.
2. Intenta primero: hay `24` lápices rojos y `36` azules. Se quieren hacer paquetes iguales, sin sobrantes y con la mayor cantidad posible en cada paquete. ¿Cuántos paquetes se pueden formar?
   Respuesta: `12` paquetes, porque `mcd(24, 36) = 12`. Cada paquete tendrá dos lápices rojos y tres azules.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes calcular el MCD con factores comunes. Para cada factor, conserva la menor potencia que aparece en todos los números.
