---
id: cn-calor-especifico-01
area-id: ciencias-naturales-experimentales-y-tecnologia
unit-id: cn-5-2-conservacion-de-la-energia-y-sus-interacciones
topic-id: cn-5-2-2-calor-especifico
title: Calor específico
objective: Calcular variables relacionadas con el calor específico de sustancias.
estimated-minutes: 14
prerequisites:
  - cn-conversion-de-temperatura-01
question-ids:
  - cn-ce-001
  - cn-ce-002
  - cn-ce-003
  - cn-ce-004
  - cn-ce-005
source:
  guide: docs/guiaoficial.pdf
  page: 16
  code: 5.2.2
---

# Calor específico

## Objetivo

Calcular el calor absorbido o cedido por una sustancia, o alguna de las variables que lo determinan, usando la fórmula del calor específico.

## Explicación

El calor específico (`c`) de una sustancia es la cantidad de calor necesaria para elevar en un grado la temperatura de una unidad de masa de esa sustancia. La cantidad de calor (`Q`) que absorbe o cede una sustancia se calcula con:

`Q = m × c × ΔT`

Donde `Q` es el calor en calorías (cal), `m` es la masa en gramos (g), `c` es el calor específico en `cal/(g·°C)`, y `ΔT` es el cambio de temperatura en grados Celsius (`ΔT = T_final − T_inicial`). El calor específico del agua es `c = 1 cal/(g·°C)`.

De esta fórmula se pueden despejar las demás variables:

- `ΔT = Q / (m × c)`
- `c = Q / (m × ΔT)`
- `m = Q / (c × ΔT)`

Cuando una temperatura se da en Fahrenheit, primero debe convertirse a Celsius (lección anterior) antes de calcular `ΔT`, porque la fórmula del calor específico usa grados Celsius.

## Ejemplo resuelto

Calcula el calor necesario para elevar la temperatura de 500 g de agua (`c = 1 cal/(g·°C)`) de 15 °C a 35 °C.

1. Fórmula: `Q = m × c × ΔT`.
2. Calcular `ΔT`: `35 − 15 = 20 °C`.
3. Sustitución: `Q = 500 × 1 × 20`.
4. Aritmética: `500 × 1 = 500`; `500 × 20 = 10,000`.
5. Resultado con unidad: `Q = 10,000 cal`.

## Error frecuente

No olvides calcular `ΔT` restando la temperatura inicial de la final antes de sustituir en la fórmula: usar directamente la temperatura final o la inicial, en lugar de su diferencia, produce un resultado incorrecto. Si una temperatura viene en Fahrenheit, conviértela a Celsius antes de calcular `ΔT`; restar valores en Fahrenheit y tratarlos como si fueran grados Celsius también da un resultado incorrecto.

## Práctica guiada

1. Intenta primero: calcula el calor necesario para elevar la temperatura de 300 g de agua de 10 °C a 40 °C.
   Respuesta: `ΔT = 40 − 10 = 30 °C`; `Q = 300 × 1 × 30 = 9,000 cal`.
2. Intenta primero: una sustancia de 100 g absorbe 600 cal y su temperatura sube de 20 °C a 40 °C. ¿Cuál es su calor específico?
   Respuesta: `ΔT = 40 − 20 = 20 °C`; `c = Q / (m × ΔT) = 600 / (100 × 20) = 0.3 cal/(g·°C)`.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Ninguno de los tres reactivos de ejemplo de la guía oficial para ciencias naturales corresponde a este tema; calibran `cn-5-1-1`, `cn-5-2-5` y una unidad posterior. Cada resultado numérico de esta lección y de su banco de preguntas fue verificado de forma independiente, sustituyendo los valores en la fórmula y repitiendo la aritmética paso a paso. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/ciencias-naturales-experimentales-y-tecnologia.ts`.

## Cierre

Ya puedes calcular el calor absorbido o cedido por una sustancia, y despejar la masa, el calor específico o el cambio de temperatura cuando se conocen las otras variables. La siguiente lección aborda las características de los distintos tipos de energía.
