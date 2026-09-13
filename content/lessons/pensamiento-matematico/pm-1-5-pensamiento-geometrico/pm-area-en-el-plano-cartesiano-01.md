---
id: pm-area-en-el-plano-cartesiano-01
area-id: pensamiento-matematico
unit-id: pm-1-5-pensamiento-geometrico
topic-id: pm-1-5-4-area-de-figuras-en-el-plano-cartesiano
title: áreas en el plano cartesiano
objective: calcular el área de cuadrados y triángulos rectángulos en el plano cartesiano.
estimated-minutes: 14
prerequisites:
  - pm-area-de-triangulos-y-trapecios-01
question-ids:
  - pm-apc-001
  - pm-apc-002
  - pm-apc-003
  - pm-apc-004
  - pm-apc-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.5.4
---

# áreas en el plano cartesiano

## objetivo

calcular el área de cuadrados y triángulos rectángulos a partir de sus coordenadas.

## explicación

en el plano cartesiano, la distancia horizontal entre dos puntos con la misma coordenada `y` se obtiene restando sus coordenadas `x`. la distancia vertical entre dos puntos con la misma coordenada `x` se obtiene restando sus coordenadas `y`.

para un cuadrado con lados paralelos a los ejes, calcula la longitud de un lado y elévala al cuadrado. para un triángulo rectángulo con catetos paralelos a los ejes, calcula base y altura con las diferencias de coordenadas y usa `base × altura / 2`.

usa valores absolutos al restar para que las longitudes sean positivas.

## ejemplo resuelto

un cuadrado tiene vértices en `(1, 1)`, `(5, 1)`, `(5, 5)` y `(1, 5)`. calcula su área.

1. la longitud horizontal es `5 - 1 = 4` unidades.
2. la longitud vertical también es `5 - 1 = 4` unidades.
3. el área es `4 × 4 = 16` unidades cuadradas.

## error frecuente

no multipliques directamente las coordenadas de un punto. las coordenadas indican posiciones; primero debes obtener las longitudes de base y altura mediante sus diferencias.

## práctica guiada

1. intenta primero: un triángulo rectángulo tiene vértices `(0, 0)`, `(6, 0)` y `(0, 4)`. calcula su área.
   respuesta: la base mide `6` y la altura `4`; `6 × 4 / 2 = 12` unidades cuadradas.
2. intenta primero: un cuadrado tiene un lado desde `x = -2` hasta `x = 3`. ¿cuánto mide ese lado?
   respuesta: `|3 - (-2)| = 5` unidades. la resta de un número negativo equivale a sumar.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes transformar coordenadas en longitudes y después aplicar la fórmula de área adecuada. resta coordenadas correspondientes antes de operar con la figura.
