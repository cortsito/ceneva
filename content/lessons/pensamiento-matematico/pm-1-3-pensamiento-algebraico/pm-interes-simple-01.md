---
id: pm-interes-simple-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-7-interes-simple
title: Interés simple
objective: Calcular plazo o tasa en una situación de interés simple.
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

# Interés simple

## Objetivo

Calcular la tasa o el plazo de un préstamo o inversión con interés simple.

## Explicación

En el interés simple, el interés se calcula siempre sobre el capital inicial. Usa estas relaciones:

- `i = c × r × t`, donde `i` es interés, `c` capital, `r` tasa en decimal y `t` tiempo.
- `m = c + i`, donde `m` es el monto final.

Antes de sustituir datos, convierte porcentajes a decimales: `5 % = 0.05`. También usa unidades de tiempo compatibles con la tasa. Si la tasa es anual y el plazo está en meses, convierte los meses a años o adapta la tasa de manera consistente.

## Ejemplo resuelto

Un préstamo de `3 000` genera `450` de interés simple en tres años. Calcula la tasa anual.

1. Usa `i = c × r × t`: `450 = 3 000 × r × 3`.
2. Divide entre `9 000`: `r = 450 / 9 000 = 0.05`.
3. Convierte a porcentaje: `0.05 = 5 %`.

La tasa anual es `5 %`.

## Error frecuente

No sustituyas `5` en lugar de `0.05` al usar una tasa de `5 %`. El porcentaje debe convertirse a decimal; de otro modo, el interés resulta cien veces mayor.

## Práctica guiada

1. Intenta primero: una inversión de `2 000` al `6 %` anual genera interés simple durante dos años. Calcula el interés.
   Respuesta: `i = 2 000 × 0.06 × 2 = 240`. El interés es `240`.
2. Intenta primero: un capital de `4 000` al `10 %` anual genera `800` de interés simple. Calcula el plazo.
   Respuesta: `800 = 4 000 × 0.10 × t`; `800 = 400t`; `t = 2`. El plazo es de dos años.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes despejar la tasa o el plazo en interés simple. Identifica el capital, convierte la tasa a decimal y mantén consistentes las unidades de tiempo.
