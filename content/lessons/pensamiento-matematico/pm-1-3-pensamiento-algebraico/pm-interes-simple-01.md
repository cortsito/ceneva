---
id: pm-interes-simple-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-7-interes-simple
title: interés simple
objective: calcular plazo o tasa en una situación de interés simple.
estimated-minutes: 12
prerequisites:
  - pm-ecuaciones-lineales-una-incognita-01
question-ids:
  - pm-is-001
  - pm-is-002
  - pm-is-003
  - pm-is-004
  - pm-is-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.7
---

# interés simple

## objetivo

calcular la tasa o el plazo de un préstamo o inversión con interés simple.

## explicación

en el interés simple, el interés se calcula siempre sobre el capital inicial. usa estas relaciones:

- `i = c × r × t`, donde `i` es interés, `c` capital, `r` tasa en decimal y `t` tiempo.
- `m = c + i`, donde `m` es el monto final.

antes de sustituir datos, convierte porcentajes a decimales: `5 % = 0.05`. también usa unidades de tiempo compatibles con la tasa. si la tasa es anual y el plazo está en meses, convierte los meses a años o adapta la tasa de manera consistente.

## ejemplo resuelto

un préstamo de `3 000` genera `450` de interés simple en tres años. calcula la tasa anual.

1. usa `i = c × r × t`: `450 = 3 000 × r × 3`.
2. divide entre `9 000`: `r = 450 / 9 000 = 0.05`.
3. convierte a porcentaje: `0.05 = 5 %`.

la tasa anual es `5 %`.

## error frecuente

no sustituyas `5` en lugar de `0.05` al usar una tasa de `5 %`. el porcentaje debe convertirse a decimal; de otro modo, el interés resulta cien veces mayor.

## práctica guiada

1. intenta primero: una inversión de `2 000` al `6 %` anual genera interés simple durante dos años. calcula el interés.
   respuesta: `i = 2 000 × 0.06 × 2 = 240`. el interés es `240`.
2. intenta primero: un capital de `4 000` al `10 %` anual genera `800` de interés simple. calcula el plazo.
   respuesta: `800 = 4 000 × 0.10 × t`; `800 = 400t`; `t = 2`. el plazo es de dos años.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes despejar la tasa o el plazo en interés simple. identifica el capital, convierte la tasa a decimal y mantén consistentes las unidades de tiempo.
