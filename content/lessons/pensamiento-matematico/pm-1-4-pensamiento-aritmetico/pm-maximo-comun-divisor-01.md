---
id: pm-maximo-comun-divisor-01
area-id: pensamiento-matematico
unit-id: pm-1-4-pensamiento-aritmetico
topic-id: pm-1-4-2-maximo-comun-divisor
title: máximo común divisor
objective: calcular el máximo común divisor de números enteros.
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

# máximo común divisor

## objetivo

calcular el mayor número que divide exactamente a dos o más números enteros.

## explicación

un divisor de un número lo divide sin dejar residuo. el máximo común divisor, o mcd, es el divisor común más grande de dos o más números.

con factorización prima:

1. descompón cada número en factores primos.
2. identifica los factores presentes en todos los números.
3. toma la menor potencia común de cada factor.
4. multiplica esos factores.

el mcd ayuda a repartir objetos en grupos iguales lo más grandes posible y a simplificar fracciones.

## ejemplo resuelto

calcula el mcd de `48` y `60`.

1. `48 = 2⁴ × 3`.
2. `60 = 2² × 3 × 5`.
3. los factores comunes son `2` y `3`; usa la menor potencia de `2`, que es `2²`.
4. `2² × 3 = 12`.

el máximo común divisor es `12`.

## error frecuente

no incluyas factores que aparecen solo en uno de los números. el `5` de `60` no forma parte del mcd porque no divide a `48`.

## práctica guiada

1. intenta primero: calcula el mcd de `18` y `30`.
   respuesta: `18 = 2 × 3²` y `30 = 2 × 3 × 5`; el mcd es `2 × 3 = 6`.
2. intenta primero: hay `24` lápices rojos y `36` azules. se quieren hacer paquetes iguales, sin sobrantes y con la mayor cantidad posible en cada paquete. ¿cuántos paquetes se pueden formar?
   respuesta: `12` paquetes, porque `mcd(24, 36) = 12`. cada paquete tendrá dos lápices rojos y tres azules.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes calcular el mcd con factores comunes. para cada factor, conserva la menor potencia que aparece en todos los números.
