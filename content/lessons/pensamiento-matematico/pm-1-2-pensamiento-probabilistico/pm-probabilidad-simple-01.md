---
id: pm-probabilidad-simple-01
area-id: pensamiento-matematico
unit-id: pm-1-2-pensamiento-probabilistico
topic-id: pm-1-2-2-probabilidad-simple
title: probabilidad simple
objective: calcular la probabilidad simple de un evento y expresarla como fracción o porcentaje.
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

# probabilidad simple

## objetivo

calcular la probabilidad de un evento simple como fracción, decimal o porcentaje.

## explicación

la probabilidad mide qué tan posible es que ocurra un evento. cuando todos los resultados tienen la misma posibilidad de ocurrir, se calcula así:

`probabilidad = casos favorables / casos posibles`.

los casos favorables son los resultados que cumplen lo pedido. los casos posibles son todos los resultados del espacio muestral. una probabilidad puede expresarse como fracción, decimal o porcentaje; para pasar de decimal a porcentaje, multiplica por `100`.

por ejemplo, si hay dos resultados favorables entre ocho posibles, la probabilidad es `2 / 8 = 1 / 4 = 0.25 = 25 %`.

## ejemplo resuelto

en una caja hay cuatro fichas rojas, seis azules y dos verdes. se extrae una ficha al azar. calcula la probabilidad de que sea azul.

1. los casos favorables son las seis fichas azules.
2. los casos posibles son todas las fichas: `4 + 6 + 2 = 12`.
3. divide: `6 / 12 = 1 / 2`.
4. expresa el resultado como porcentaje: `1 / 2 = 0.5 = 50 %`.

la probabilidad de extraer una ficha azul es `1 / 2` o `50 %`.

## error frecuente

no uses solo las fichas que no son del color pedido como denominador. el denominador siempre incluye todos los resultados posibles, incluso los que no favorecen el evento.

## práctica guiada

1. intenta primero: al lanzar un dado equilibrado, ¿cuál es la probabilidad de obtener un número par?
   respuesta: `3 / 6 = 1 / 2 = 50 %`, porque los resultados favorables son `2, 4` y `6` de seis resultados posibles.
2. intenta primero: una bolsa contiene tres canicas negras y dos blancas. ¿cuál es la probabilidad de extraer una canica que no sea negra?
   respuesta: `2 / 5 = 0.4 = 40 %`, porque hay dos canicas blancas entre cinco canicas en total.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. al menos una pregunta debe calcular casos favorables entre casos posibles y expresar el resultado en porcentaje, como el ejemplo oficial de pelotas de colores para este tema (`docs/guiaoficial.pdf`, página 27). sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes calcular una probabilidad simple. cuenta con cuidado los resultados favorables y el total, simplifica la fracción cuando sea posible y conviértela a porcentaje si el problema lo pide.
