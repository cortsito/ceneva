---
id: pm-productos-notables-de-binomios-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-3-producto-notable-de-binomios
title: productos notables de binomios
objective: desarrollar productos notables de binomios necesarios para trabajar funciones cuadráticas.
estimated-minutes: 12
prerequisites:
  - pm-expresiones-algebraicas-01
question-ids:
  - pm-pnb-001
  - pm-pnb-002
  - pm-pnb-003
  - pm-pnb-004
  - pm-pnb-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.3
---

# productos notables de binomios

## objetivo

desarrollar cuadrados de binomios y diferencias de cuadrados para simplificar expresiones cuadráticas.

## explicación

los productos notables son multiplicaciones con patrones que se repiten. los más útiles para funciones cuadráticas son:

- cuadrado de una suma: `(a + b)² = a² + 2ab + b²`.
- cuadrado de una diferencia: `(a - b)² = a² - 2ab + b²`.
- diferencia de cuadrados: `(a + b)(a - b) = a² - b²`.

el término central de un cuadrado de binomio siempre es el doble del producto de los dos términos. en una diferencia de cuadrados, los términos centrales se cancelan.

## ejemplo resuelto

desarrolla `(x + 4)²`.

1. identifica `a = x` y `b = 4`.
2. aplica `a² + 2ab + b²`.
3. `x² + 2(x)(4) + 4² = x² + 8x + 16`.

por lo tanto, `(x + 4)² = x² + 8x + 16`.

## error frecuente

no eleves cada término y omitas el término central. `(x + 4)²` no es `x² + 16`; falta `8x`, que resulta de multiplicar ambos términos dos veces.

## práctica guiada

1. intenta primero: desarrolla `(y - 3)²`.
   respuesta: `y² - 6y + 9`. el término central es negativo porque el binomio contiene una resta.
2. intenta primero: simplifica `(m + 5)(m - 5)`.
   respuesta: `m² - 25`. es una diferencia de cuadrados y los términos `5m` y `-5m` se cancelan.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes reconocer y desarrollar los productos notables más frecuentes. conserva el término central al elevar un binomio al cuadrado; será necesario para analizar funciones cuadráticas.
