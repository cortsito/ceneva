---
id: pm-interes-compuesto-02
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-8-interes-compuesto
title: Tasa y período con interés compuesto
objective: Determinar tasa o período en una situación de interés compuesto.
estimated-minutes: 14
prerequisites:
  - pm-interes-compuesto-01
question-ids:
  - pm-ict-001
  - pm-ict-002
  - pm-ict-003
  - pm-ict-004
  - pm-ict-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.8
---

# Tasa y período con interés compuesto

## Objetivo

Determinar la tasa o el número de periodos de una situación de interés compuesto.

## Explicación

Parte de la fórmula `m = c(1 + r)^t`. Para encontrar un dato desconocido, primero divide entre el capital: `m / c = (1 + r)^t`.

Si se conoce la tasa y el resultado coincide con una potencia conocida, compara los valores para encontrar `t`. Si se conoce el tiempo, calcula la raíz correspondiente para aislar `1 + r` y después resta `1`. En ambos casos, expresa la tasa final como porcentaje y verifica que el periodo use la misma unidad que la tasa.

## Ejemplo resuelto

Una inversión de `2 000` crece a `2 880` con una tasa de `20 %` por periodo. Calcula el número de periodos.

1. Divide entre el capital: `2 880 / 2 000 = 1.44`.
2. Plantea: `1.44 = (1.20)^t`.
3. Reconoce que `1.20² = 1.44`.

El plazo es `t = 2` periodos.

## Error frecuente

No restes el capital al monto y dividas una sola vez entre la tasa. Ese procedimiento supone interés simple y no considera que el crecimiento compuesto se acumula mediante potencias.

## Práctica guiada

1. Intenta primero: un capital de `5 000` se convierte en `6 050` en dos años. Calcula la tasa anual.
   Respuesta: `6 050 / 5 000 = 1.21`; como `raíz de 1.21 = 1.10`, entonces `r = 1.10 - 1 = 0.10 = 10 %`.
2. Intenta primero: un capital se duplica con una tasa de `100 %` por periodo. ¿Cuántos periodos tarda en duplicarse?
   Respuesta: un periodo, porque `c(1 + 1)^1 = 2c`.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes despejar la tasa o el periodo en una situación compuesta sencilla. Divide primero entre el capital y analiza el factor de crecimiento antes de resolver la potencia o la raíz.
