---
id: pm-factorizacion-de-polinomios-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-2-factorizacion-de-expresiones-algebraicas
title: factorización de polinomios
objective: identificar la factorización correcta de un polinomio de segundo grado.
estimated-minutes: 14
prerequisites:
  - pm-expresiones-algebraicas-01
question-ids:
  - pm-fp-001
  - pm-fp-002
  - pm-fp-003
  - pm-fp-004
  - pm-fp-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.2
---

# factorización de polinomios

## objetivo

identificar dos binomios cuyo producto corresponde a un polinomio de segundo grado.

## explicación

factorizar es escribir un polinomio como multiplicación de expresiones más simples. para un trinomio de la forma `x² + bx + c`, busca dos números que cumplan a la vez:

- su suma es `b`.
- su producto es `c`.

si esos números son `m` y `n`, entonces `x² + bx + c = (x + m)(x + n)`. para comprobar una factorización, multiplica los binomios: el producto exterior e interior debe producir el término central y el producto final debe producir el término independiente.

los signos importan. si el término independiente es positivo y el término central es negativo, ambos números deben ser negativos.

## ejemplo resuelto

factoriza `x² + 7x + 12`.

1. busca dos números cuyo producto sea `12` y cuya suma sea `7`.
2. `3 × 4 = 12` y `3 + 4 = 7`.
3. escribe los binomios: `(x + 3)(x + 4)`.
4. comprueba: `x² + 4x + 3x + 12 = x² + 7x + 12`.

la factorización correcta es `(x + 3)(x + 4)`.

## error frecuente

no revises solo el producto de los números. en `x² + 7x + 12`, los números `2` y `6` también multiplican `12`, pero suman `8`; por eso no forman la factorización correcta.

## práctica guiada

1. intenta primero: factoriza `x² + 5x + 6`.
   respuesta: `(x + 2)(x + 3)`, porque `2 + 3 = 5` y `2 × 3 = 6`.
2. intenta primero: identifica la factorización de `x² - 9x + 20`.
   respuesta: `(x - 4)(x - 5)`, porque `-4 + -5 = -9` y `-4 × -5 = 20`.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes comprobar una factorización con dos condiciones: suma para el término central y producto para el término independiente. verifica ambas antes de elegir un par de binomios.
