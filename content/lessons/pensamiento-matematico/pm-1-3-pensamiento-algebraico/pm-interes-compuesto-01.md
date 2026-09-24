---
id: pm-interes-compuesto-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-8-interes-compuesto
title: Monto con interés compuesto
objective: Calcular un monto en una situación de interés compuesto.
estimated-minutes: 14
prerequisites:
  - pm-interes-simple-01
question-ids:
  - pm-icm-001
  - pm-icm-002
  - pm-icm-003
  - pm-icm-004
  - pm-icm-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.3.8
---

# Monto con interés compuesto

## Objetivo

Calcular el monto acumulado de una inversión con interés compuesto.

## Explicación

En el interés compuesto, cada periodo genera interés sobre el capital inicial y sobre los intereses acumulados. La fórmula para un monto es:

`m = c(1 + r)^t`.

`c` es el capital inicial, `r` es la tasa en decimal por periodo y `t` es el número de periodos. El exponente representa cuántas veces se aplica el crecimiento. La tasa y el tiempo deben usar la misma unidad: una tasa anual requiere años; una tasa mensual requiere meses.

## Ejemplo resuelto

Se invierten `5 000` al `10 %` anual durante dos años. Calcula el monto.

1. Convierte la tasa: `10 % = 0.10`.
2. Sustituye: `m = 5 000(1 + 0.10)²`.
3. Calcula la potencia: `1.10² = 1.21`.
4. Multiplica: `m = 5 000 × 1.21 = 6 050`.

El monto final es `6 050`.

## Error frecuente

No uses `c + c × r × t`, que corresponde al interés simple. En el interés compuesto el factor `(1 + r)` se eleva al número de periodos porque los intereses también generan interés.

## Práctica guiada

1. Intenta primero: calcula el monto de `2 000` al `5 %` anual durante dos años.
   Respuesta: `m = 2 000(1.05)² = 2 000(1.1025) = 2 205`.
2. Intenta primero: una tasa es `2 %` mensual y la inversión permanece tres meses. ¿Qué exponente corresponde en la fórmula?
   Respuesta: `3`, porque la tasa y el tiempo están expresados por mes y el crecimiento se aplica tres veces.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes calcular un monto con interés compuesto. Usa la tasa decimal, el periodo correcto y la potencia para representar cada acumulación sucesiva.
