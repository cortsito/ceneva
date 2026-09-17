---
id: cn-conversion-de-temperatura-01
area-id: ciencias-naturales-experimentales-y-tecnologia
unit-id: cn-5-1-materia-y-sus-interacciones
topic-id: cn-5-1-4-conversion-de-escalas-termometricas
title: conversión de temperatura
objective: convertir temperaturas entre escalas celsius y fahrenheit.
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

# conversión de temperatura

## objetivo

convertir un valor de temperatura de la escala celsius a fahrenheit, o de fahrenheit a celsius, aplicando la fórmula correspondiente paso a paso.

## explicación

celsius y fahrenheit son dos escalas distintas para medir la misma temperatura, con puntos de referencia diferentes: el agua se congela a 0 °c pero a 32 °f, y hierve a 100 °c pero a 212 °f. para convertir entre ellas se usan estas fórmulas:

- de celsius a fahrenheit: `°f = (°c × 9/5) + 32`
- de fahrenheit a celsius: `°c = (°f − 32) × 5/9`

el factor `9/5` (o su inverso `5/9`) ajusta el tamaño del grado, porque un grado celsius equivale a 1.8 grados fahrenheit. la constante `32` ajusta el punto de partida, porque 0 °c no corresponde a 0 °f, sino a 32 °f. al convertir de fahrenheit a celsius, hay que restar el 32 primero, antes de multiplicar por `5/9`, porque esa resta ubica el valor en la misma referencia de partida (0) que usa la escala celsius.

## ejemplo resuelto

convierte 25 °c a fahrenheit, y luego convierte 98.6 °f a celsius.

**de celsius a fahrenheit:**

1. fórmula: `°f = (°c × 9/5) + 32`
2. sustitución: `°f = (25 × 9/5) + 32`
3. aritmética: 25 × 9 = 225; 225 ÷ 5 = 45; 45 + 32 = 77
4. resultado con unidad: 25 °c equivalen a 77 °f.

**de fahrenheit a celsius:**

1. fórmula: `°c = (°f − 32) × 5/9`
2. sustitución: `°c = (98.6 − 32) × 5/9`
3. aritmética: 98.6 − 32 = 66.6; 66.6 × 5 = 333; 333 ÷ 9 = 37
4. resultado con unidad: 98.6 °f equivalen a 37 °c.

## error frecuente

respeta el orden de las operaciones en cada fórmula. al convertir de fahrenheit a celsius, el error típico es multiplicar `°f` por `5/9` primero y restar 32 después, en lugar de restar 32 primero y multiplicar el resultado por `5/9`; eso produce un valor incorrecto porque la resta debe aplicarse antes de reescalar el grado. de forma similar, al convertir de celsius a fahrenheit, sumar 32 antes de multiplicar por `9/5` también da un resultado equivocado.

## práctica guiada

1. intenta primero: convierte 40 °c a fahrenheit, mostrando fórmula, sustitución y aritmética.
   respuesta: `°f = (40 × 9/5) + 32`; 40 × 9 = 360; 360 ÷ 5 = 72; 72 + 32 = 104. 40 °c equivalen a 104 °f.
2. intenta primero: convierte 212 °f a celsius, mostrando fórmula, sustitución y aritmética.
   respuesta: `°c = (212 − 32) × 5/9`; 212 − 32 = 180; 180 × 5 = 900; 900 ÷ 9 = 100. 212 °f equivalen a 100 °c.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes convertir una temperatura entre celsius y fahrenheit en cualquier dirección, aplicando la fórmula correcta con sus sustituciones y su orden de operaciones.
