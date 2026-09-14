---
id: pm-interes-compuesto-02
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-8-interes-compuesto
title: tasa y período con interés compuesto
objective: determinar tasa o período en una situación de interés compuesto.
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

# tasa y período con interés compuesto

## objetivo

determinar la tasa o el número de periodos de una situación de interés compuesto.

## explicación

parte de la fórmula `m = c(1 + r)^t`. para encontrar un dato desconocido, primero divide entre el capital: `m / c = (1 + r)^t`.

si se conoce la tasa y el resultado coincide con una potencia conocida, compara los valores para encontrar `t`. si se conoce el tiempo, calcula la raíz correspondiente para aislar `1 + r` y después resta `1`. en ambos casos, expresa la tasa final como porcentaje y verifica que el periodo use la misma unidad que la tasa.

## ejemplo resuelto

una inversión de `2 000` crece a `2 880` con una tasa de `20 %` por periodo. calcula el número de periodos.

1. divide entre el capital: `2 880 / 2 000 = 1.44`.
2. plantea: `1.44 = (1.20)^t`.
3. reconoce que `1.20² = 1.44`.

el plazo es `t = 2` periodos.

## error frecuente

no restes el capital al monto y dividas una sola vez entre la tasa. ese procedimiento supone interés simple y no considera que el crecimiento compuesto se acumula mediante potencias.

## práctica guiada

1. intenta primero: un capital de `5 000` se convierte en `6 050` en dos años. calcula la tasa anual.
   respuesta: `6 050 / 5 000 = 1.21`; como `raíz de 1.21 = 1.10`, entonces `r = 1.10 - 1 = 0.10 = 10 %`.
2. intenta primero: un capital se duplica con una tasa de `100 %` por periodo. ¿cuántos periodos tarda en duplicarse?
   respuesta: un periodo, porque `c(1 + 1)^1 = 2c`.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes despejar la tasa o el periodo en una situación compuesta sencilla. divide primero entre el capital y analiza el factor de crecimiento antes de resolver la potencia o la raíz.
