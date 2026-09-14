---
id: pm-derivadas-de-funciones-polinomiales-01
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-4-derivadas-de-funciones-polinomiales
title: derivadas de polinomios
objective: calcular la derivada de una función polinomial de hasta cuatro términos.
estimated-minutes: 12
prerequisites:
  - pm-expresiones-algebraicas-01
question-ids:
  - pm-dfp-001
  - pm-dfp-002
  - pm-dfp-003
  - pm-dfp-004
  - pm-dfp-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 1.6.4
---

# derivadas de polinomios

## objetivo

calcular la derivada de cada término de una función polinomial.

## explicación

la derivada representa la razón de cambio instantánea de una función. para derivar un término de la forma `axⁿ`, multiplica el coeficiente por el exponente y resta uno al exponente:

`d/dx de axⁿ = an xⁿ⁻¹`.

deriva cada término por separado. la derivada de una constante es `0`, porque no cambia al variar `x`. organiza el resultado de mayor a menor exponente para revisarlo con facilidad.

## ejemplo resuelto

deriva `f(x) = 3x³ - 2x² + 5x - 7`.

1. `d/dx de 3x³ = 9x²`.
2. `d/dx de -2x² = -4x`.
3. `d/dx de 5x = 5`.
4. `d/dx de -7 = 0`.

por lo tanto, `f'(x) = 9x² - 4x + 5`.

## error frecuente

no conserves el mismo exponente al derivar. la derivada de `x³` es `3x²`, no `3x³`; el exponente se multiplica y después disminuye una unidad.

## práctica guiada

1. intenta primero: deriva `g(x) = 5x⁴ + 7`.
   respuesta: `g'(x) = 20x³`. la constante `7` deriva a `0`.
2. intenta primero: deriva `h(x) = x² - 6x + 9`.
   respuesta: `h'(x) = 2x - 6`. el término constante no aparece en la derivada.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes derivar un polinomio término por término. multiplica cada coeficiente por su exponente, reduce el exponente y elimina las constantes.
