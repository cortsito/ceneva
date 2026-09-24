---
id: pm-productos-notables-de-binomios-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-3-producto-notable-de-binomios
title: Productos notables de binomios
objective: Desarrollar productos notables de binomios necesarios para trabajar funciones cuadráticas.
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

# Productos notables de binomios

## Objetivo

Desarrollar cuadrados de binomios y diferencias de cuadrados para simplificar expresiones cuadráticas.

## Explicación

Los productos notables son multiplicaciones con patrones que se repiten. Los más útiles para funciones cuadráticas son:

- Cuadrado de una suma: `(a + b)² = a² + 2ab + b²`.
- Cuadrado de una diferencia: `(a - b)² = a² - 2ab + b²`.
- Diferencia de cuadrados: `(a + b)(a - b) = a² - b²`.

El término central de un cuadrado de binomio siempre es el doble del producto de los dos términos. En una diferencia de cuadrados, los términos centrales se cancelan.

## Ejemplo resuelto

Desarrolla `(x + 4)²`.

1. Identifica `a = x` y `b = 4`.
2. Aplica `a² + 2ab + b²`.
3. `x² + 2(x)(4) + 4² = x² + 8x + 16`.

Por lo tanto, `(x + 4)² = x² + 8x + 16`.

## Error frecuente

No eleves cada término y omitas el término central. `(x + 4)²` no es `x² + 16`; falta `8x`, que resulta de multiplicar ambos términos dos veces.

## Práctica guiada

1. Intenta primero: desarrolla `(y - 3)²`.
   Respuesta: `y² - 6y + 9`. El término central es negativo porque el binomio contiene una resta.
2. Intenta primero: simplifica `(m + 5)(m - 5)`.
   Respuesta: `m² - 25`. Es una diferencia de cuadrados y los términos `5m` y `-5m` se cancelan.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes reconocer y desarrollar los productos notables más frecuentes. Conserva el término central al elevar un binomio al cuadrado; será necesario para analizar funciones cuadráticas.
