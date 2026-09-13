---
id: pm-interes-compuesto-01
area-id: pensamiento-matematico
unit-id: pm-1-3-pensamiento-algebraico
topic-id: pm-1-3-8-interes-compuesto
title: monto con interés compuesto
objective: calcular un monto en una situación de interés compuesto.
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

# monto con interés compuesto

## objetivo

calcular el monto acumulado de una inversión con interés compuesto.

## explicación

en el interés compuesto, cada periodo genera interés sobre el capital inicial y sobre los intereses acumulados. la fórmula para un monto es:

`m = c(1 + r)^t`.

`c` es el capital inicial, `r` es la tasa en decimal por periodo y `t` es el número de periodos. el exponente representa cuántas veces se aplica el crecimiento. la tasa y el tiempo deben usar la misma unidad: una tasa anual requiere años; una tasa mensual requiere meses.

## ejemplo resuelto

se invierten `5 000` al `10 %` anual durante dos años. calcula el monto.

1. convierte la tasa: `10 % = 0.10`.
2. sustituye: `m = 5 000(1 + 0.10)²`.
3. calcula la potencia: `1.10² = 1.21`.
4. multiplica: `m = 5 000 × 1.21 = 6 050`.

el monto final es `6 050`.

## error frecuente

no uses `c + c × r × t`, que corresponde al interés simple. en el interés compuesto el factor `(1 + r)` se eleva al número de periodos porque los intereses también generan interés.

## práctica guiada

1. intenta primero: calcula el monto de `2 000` al `5 %` anual durante dos años.
   respuesta: `m = 2 000(1.05)² = 2 000(1.1025) = 2 205`.
2. intenta primero: una tasa es `2 %` mensual y la inversión permanece tres meses. ¿qué exponente corresponde en la fórmula?
   respuesta: `3`, porque la tasa y el tiempo están expresados por mes y el crecimiento se aplica tres veces.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes calcular un monto con interés compuesto. usa la tasa decimal, el periodo correcto y la potencia para representar cada acumulación sucesiva.
