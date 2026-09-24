---
id: pm-probabilidad-simple-01
area-id: pensamiento-matematico
unit-id: pm-1-2-pensamiento-probabilistico
topic-id: pm-1-2-2-probabilidad-simple
title: Probabilidad simple
objective: Calcular la probabilidad simple de un evento y expresarla como fracción o porcentaje.
estimated-minutes: 12
prerequisites: []
question-ids:
  - pm-ps-001
  - pm-ps-002
  - pm-ps-003
  - pm-ps-004
  - pm-ps-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.2.2
---

# Probabilidad simple

## Objetivo

Calcular la probabilidad de un evento simple como fracción, decimal o porcentaje.

## Explicación

La probabilidad mide qué tan posible es que ocurra un evento. Cuando todos los resultados tienen la misma posibilidad de ocurrir, se calcula así:

`probabilidad = casos favorables / casos posibles`.

Los casos favorables son los resultados que cumplen lo pedido. Los casos posibles son todos los resultados del espacio muestral. Una probabilidad puede expresarse como fracción, decimal o porcentaje; para pasar de decimal a porcentaje, multiplica por `100`.

Por ejemplo, si hay dos resultados favorables entre ocho posibles, la probabilidad es `2 / 8 = 1 / 4 = 0.25 = 25 %`.

## Ejemplo resuelto

En una caja hay cuatro fichas rojas, seis azules y dos verdes. Se extrae una ficha al azar. Calcula la probabilidad de que sea azul.

1. Los casos favorables son las seis fichas azules.
2. Los casos posibles son todas las fichas: `4 + 6 + 2 = 12`.
3. Divide: `6 / 12 = 1 / 2`.
4. Expresa el resultado como porcentaje: `1 / 2 = 0.5 = 50 %`.

La probabilidad de extraer una ficha azul es `1 / 2` o `50 %`.

## Error frecuente

No uses solo las fichas que no son del color pedido como denominador. El denominador siempre incluye todos los resultados posibles, incluso los que no favorecen el evento.

## Práctica guiada

1. Intenta primero: al lanzar un dado equilibrado, ¿cuál es la probabilidad de obtener un número par?
   Respuesta: `3 / 6 = 1 / 2 = 50 %`, porque los resultados favorables son `2, 4` y `6` de seis resultados posibles.
2. Intenta primero: una bolsa contiene tres canicas negras y dos blancas. ¿Cuál es la probabilidad de extraer una canica que no sea negra?
   Respuesta: `2 / 5 = 0.4 = 40 %`, porque hay dos canicas blancas entre cinco canicas en total.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. El banco de preguntas incluye una que calcula casos favorables entre casos posibles y expresa el resultado en porcentaje, como el ejemplo oficial de pelotas de colores para este tema (`docs/guiaoficial.pdf`, página 27). Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes calcular una probabilidad simple. Cuenta con cuidado los resultados favorables y el total, simplifica la fracción cuando sea posible y conviértela a porcentaje si el problema lo pide.
