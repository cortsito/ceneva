---
id: pm-optimizacion-con-derivadas-01
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-6-aplicacion-de-la-derivada-en-optimizacion
title: Optimización con derivadas
objective: Aplicar la derivada para determinar un valor máximo en un problema de optimización.
estimated-minutes: 14
prerequisites:
  - pm-derivadas-de-funciones-polinomiales-01
  - pm-graficas-de-funciones-02
question-ids:
  - pm-od-001
  - pm-od-002
  - pm-od-003
  - pm-od-004
  - pm-od-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 1.6.6
---

# Optimización con derivadas

## Objetivo

Usar la derivada de una función cuadrática para localizar y calcular un valor máximo.

## Explicación

En un problema de optimización, una función representa una cantidad que se quiere maximizar o minimizar. Para una función cuadrática, busca primero los puntos críticos, donde la derivada vale cero.

1. Deriva la función.
2. Iguala la derivada a cero y resuelve para `x`.
3. Determina si el punto es máximo o mínimo mediante la concavidad.
4. Sustituye el valor de `x` en la función original para obtener el valor extremo.

Si el coeficiente de `x²` es negativo, la parábola abre hacia abajo y el punto crítico es un máximo.

## Ejemplo resuelto

La utilidad de un negocio se modela con `u(x) = -x² + 8x + 5`. Determina la utilidad máxima.

1. Deriva: `u'(x) = -2x + 8`.
2. Iguala a cero: `-2x + 8 = 0`; entonces `x = 4`.
3. El coeficiente de `x²` es negativo, así que el punto corresponde a un máximo.
4. Evalúa: `u(4) = -16 + 32 + 5 = 21`.

La utilidad máxima es `21` y ocurre cuando `x = 4`.

## Error frecuente

No sustituyas el punto crítico en la derivada para buscar el valor máximo. La derivada en ese punto es cero; el valor máximo se obtiene al sustituir `x` en la función original.

## Práctica guiada

1. Intenta primero: encuentra el valor de `x` que maximiza `f(x) = -x² + 6x`.
   Respuesta: `f'(x) = -2x + 6`; al igualar a cero, `x = 3`. Como la parábola abre hacia abajo, ahí ocurre el máximo.
2. Intenta primero: para `g(x) = x² - 4x + 1`, ¿el punto crítico es máximo o mínimo?
   Respuesta: mínimo, porque el coeficiente de `x²` es positivo y la parábola abre hacia arriba.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes localizar un máximo de una función cuadrática con su derivada. Deriva, resuelve el punto crítico, revisa la concavidad y evalúa la función original.
