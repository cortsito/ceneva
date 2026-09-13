---
id: pm-sistemas-de-ecuaciones-lineales-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-6-sistemas-de-ecuaciones-lineales-dos-incognitas
title: sistemas de ecuaciones lineales
objective: resolver un sistema de dos ecuaciones lineales con dos incógnitas.
estimated-minutes: 14
prerequisites:
  - pm-ecuaciones-lineales-una-incognita-01
question-ids:
  - pm-sel-001
  - pm-sel-002
  - pm-sel-003
  - pm-sel-004
  - pm-sel-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.6
---

# sistemas de ecuaciones lineales

## objetivo

resolver un sistema de dos ecuaciones lineales encontrando el par de valores que satisface ambas.

## explicación

un sistema de dos ecuaciones lineales relaciona dos incógnitas. la solución es un par ordenado que cumple las dos ecuaciones al mismo tiempo.

dos métodos habituales son:

- sustitución: despeja una variable en una ecuación y reemplázala en la otra.
- eliminación: suma o resta ecuaciones para cancelar una de las variables.

elige eliminación cuando los coeficientes ya son opuestos o pueden hacerse opuestos con una multiplicación sencilla. al terminar, sustituye uno de los valores para obtener el otro y verifica ambos en las dos ecuaciones.

## ejemplo resuelto

resuelve el sistema `x + y = 11` y `x - y = 3`.

1. suma las ecuaciones: `(x + y) + (x - y) = 11 + 3`.
2. `y` y `-y` se cancelan, por lo que `2x = 14`.
3. divide entre `2`: `x = 7`.
4. sustituye en `x + y = 11`: `7 + y = 11`, entonces `y = 4`.

la solución es `(7, 4)`.

## error frecuente

no canceles variables que tienen el mismo signo al sumar. para eliminar una variable, los términos deben ser opuestos; si no lo son, puede ser necesario restar una ecuación o multiplicarla antes.

## práctica guiada

1. intenta primero: resuelve `a + b = 9` y `a - b = 1`.
   respuesta: al sumar se obtiene `2a = 10`, así que `a = 5`. al sustituir, `b = 4`. la solución es `(5, 4)`.
2. intenta primero: dos boletos de adulto y uno infantil cuestan `170`; un boleto de adulto y uno infantil cuestan `110`. ¿cuánto cuesta el boleto de adulto?
   respuesta: resta la segunda ecuación de la primera: `a = 60`. el boleto de adulto cuesta `60`.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes resolver un sistema al eliminar o sustituir una variable. la respuesta final debe satisfacer las dos ecuaciones, no solo una.
