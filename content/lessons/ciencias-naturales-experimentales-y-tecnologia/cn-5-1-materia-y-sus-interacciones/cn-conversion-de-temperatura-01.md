---
id: cn-conversion-de-temperatura-01
area-id: ciencias-naturales-experimentales-y-tecnologia
unit-id: cn-5-1-materia-y-sus-interacciones
topic-id: cn-5-1-4-conversion-de-escalas-termometricas
title: Conversión de temperatura
objective: Convertir temperaturas entre escalas Celsius y Fahrenheit.
estimated-minutes: 10
prerequisites: []
question-ids:
  - cn-ct-001
  - cn-ct-002
  - cn-ct-003
  - cn-ct-004
  - cn-ct-005
source:
  guide: docs/guiaoficial.pdf
  page: 15
  code: 5.1.4
---

# Conversión de temperatura

## Objetivo

Convertir un valor de temperatura de la escala Celsius a Fahrenheit, o de Fahrenheit a Celsius, aplicando la fórmula correspondiente paso a paso.

## Explicación

Celsius y Fahrenheit son dos escalas distintas para medir la misma temperatura, con puntos de referencia diferentes: el agua se congela a 0 °C pero a 32 °F, y hierve a 100 °C pero a 212 °F. Para convertir entre ellas se usan estas fórmulas:

- De Celsius a Fahrenheit: `°F = (°C × 9/5) + 32`
- De Fahrenheit a Celsius: `°C = (°F − 32) × 5/9`

El factor `9/5` (o su inverso `5/9`) ajusta el tamaño del grado, porque un grado Celsius equivale a 1.8 grados Fahrenheit. La constante `32` ajusta el punto de partida, porque 0 °C no corresponde a 0 °F, sino a 32 °F. Al convertir de Fahrenheit a Celsius, hay que restar el 32 primero, antes de multiplicar por `5/9`, porque esa resta ubica el valor en la misma referencia de partida (0) que usa la escala Celsius.

## Ejemplo resuelto

Convierte 25 °C a Fahrenheit, y luego convierte 98.6 °F a Celsius.

**De Celsius a Fahrenheit:**

1. Fórmula: `°F = (°C × 9/5) + 32`
2. Sustitución: `°F = (25 × 9/5) + 32`
3. Aritmética: 25 × 9 = 225; 225 ÷ 5 = 45; 45 + 32 = 77
4. Resultado con unidad: 25 °C equivalen a 77 °F.

**De Fahrenheit a Celsius:**

1. Fórmula: `°C = (°F − 32) × 5/9`
2. Sustitución: `°C = (98.6 − 32) × 5/9`
3. Aritmética: 98.6 − 32 = 66.6; 66.6 × 5 = 333; 333 ÷ 9 = 37
4. Resultado con unidad: 98.6 °F equivalen a 37 °C.

## Error frecuente

Respeta el orden de las operaciones en cada fórmula. Al convertir de Fahrenheit a Celsius, el error típico es multiplicar `°F` por `5/9` primero y restar 32 después, en lugar de restar 32 primero y multiplicar el resultado por `5/9`; eso produce un valor incorrecto porque la resta debe aplicarse antes de reescalar el grado. De forma similar, al convertir de Celsius a Fahrenheit, sumar 32 antes de multiplicar por `9/5` también da un resultado equivocado.

## Práctica guiada

1. Intenta primero: convierte 40 °C a Fahrenheit, mostrando fórmula, sustitución y aritmética.
   Respuesta: `°F = (40 × 9/5) + 32`; 40 × 9 = 360; 360 ÷ 5 = 72; 72 + 32 = 104. 40 °C equivalen a 104 °F.
2. Intenta primero: convierte 212 °F a Celsius, mostrando fórmula, sustitución y aritmética.
   Respuesta: `°C = (212 − 32) × 5/9`; 212 − 32 = 180; 180 × 5 = 900; 900 ÷ 9 = 100. 212 °F equivalen a 100 °C.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/ciencias-naturales-experimentales-y-tecnologia.ts`.

## Cierre

Ya puedes convertir una temperatura entre Celsius y Fahrenheit en cualquier dirección, aplicando la fórmula correcta con sus sustituciones y su orden de operaciones.
