---
id: pm-sistemas-de-ecuaciones-lineales-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-6-sistemas-de-ecuaciones-lineales-dos-incognitas
title: Sistemas de ecuaciones lineales
objective: Resolver un sistema de dos ecuaciones lineales con dos incógnitas.
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

# Sistemas de ecuaciones lineales

## Objetivo

Resolver un sistema de dos ecuaciones lineales encontrando el par de valores que satisface ambas.

## Explicación

Un sistema de dos ecuaciones lineales relaciona dos incógnitas. La solución es un par ordenado que cumple las dos ecuaciones al mismo tiempo.

Dos métodos habituales son:

- Sustitución: despeja una variable en una ecuación y reemplázala en la otra.
- Eliminación: suma o resta ecuaciones para cancelar una de las variables.

Elige eliminación cuando los coeficientes ya son opuestos o pueden hacerse opuestos con una multiplicación sencilla. Al terminar, sustituye uno de los valores para obtener el otro y verifica ambos en las dos ecuaciones.

## Ejemplo resuelto

Resuelve el sistema `x + y = 11` y `x - y = 3`.

1. Suma las ecuaciones: `(x + y) + (x - y) = 11 + 3`.
2. `y` y `-y` se cancelan, por lo que `2x = 14`.
3. Divide entre `2`: `x = 7`.
4. Sustituye en `x + y = 11`: `7 + y = 11`, entonces `y = 4`.

La solución es `(7, 4)`.

## Error frecuente

No canceles variables que tienen el mismo signo al sumar. Para eliminar una variable, los términos deben ser opuestos; si no lo son, puede ser necesario restar una ecuación o multiplicarla antes.

## Práctica guiada

1. Intenta primero: resuelve `a + b = 9` y `a - b = 1`.
   Respuesta: al sumar se obtiene `2a = 10`, así que `a = 5`. Al sustituir, `b = 4`. La solución es `(5, 4)`.
2. Intenta primero: dos boletos de adulto y uno infantil cuestan `170`; un boleto de adulto y uno infantil cuestan `110`. ¿Cuánto cuesta el boleto de adulto?
   Respuesta: resta la segunda ecuación de la primera: `a = 60`. El boleto de adulto cuesta `60`.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes resolver un sistema al eliminar o sustituir una variable. La respuesta final debe satisfacer las dos ecuaciones, no solo una.
