---
id: pm-area-en-el-plano-cartesiano-01
area-id: pensamiento-matematico
unit-id: pm-1-5-pensamiento-geometrico
topic-id: pm-1-5-4-area-de-figuras-en-el-plano-cartesiano
title: Áreas en el plano cartesiano
objective: Calcular el área de cuadrados y triángulos rectángulos en el plano cartesiano.
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

# Áreas en el plano cartesiano

## Objetivo

Calcular el área de cuadrados y triángulos rectángulos a partir de sus coordenadas.

## Explicación

En el plano cartesiano, la distancia horizontal entre dos puntos con la misma coordenada `y` se obtiene restando sus coordenadas `x`. La distancia vertical entre dos puntos con la misma coordenada `x` se obtiene restando sus coordenadas `y`.

Para un cuadrado con lados paralelos a los ejes, calcula la longitud de un lado y elévala al cuadrado. Para un triángulo rectángulo con catetos paralelos a los ejes, calcula base y altura con las diferencias de coordenadas y usa `base × altura / 2`.

Usa valores absolutos al restar para que las longitudes sean positivas.

## Ejemplo resuelto

Un cuadrado tiene vértices en `(1, 1)`, `(5, 1)`, `(5, 5)` y `(1, 5)`. Calcula su área.

1. La longitud horizontal es `5 - 1 = 4` unidades.
2. La longitud vertical también es `5 - 1 = 4` unidades.
3. El área es `4 × 4 = 16` unidades cuadradas.

## Error frecuente

No multipliques directamente las coordenadas de un punto. Las coordenadas indican posiciones; primero debes obtener las longitudes de base y altura mediante sus diferencias.

## Práctica guiada

1. Intenta primero: un triángulo rectángulo tiene vértices `(0, 0)`, `(6, 0)` y `(0, 4)`. Calcula su área.
   Respuesta: la base mide `6` y la altura `4`; `6 × 4 / 2 = 12` unidades cuadradas.
2. Intenta primero: un cuadrado tiene un lado desde `x = -2` hasta `x = 3`. ¿Cuánto mide ese lado?
   Respuesta: `|3 - (-2)| = 5` unidades. La resta de un número negativo equivale a sumar.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes transformar coordenadas en longitudes y después aplicar la fórmula de área adecuada. Resta coordenadas correspondientes antes de operar con la figura.
