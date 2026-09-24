---
id: pm-tecnicas-de-conteo-01
area-id: pensamiento-matematico
unit-id: pm-1-2-pensamiento-probabilistico
topic-id: pm-1-2-1-tecnicas-de-conteo
title: Combinaciones y permutaciones
objective: Resolver problemas de conteo con combinaciones o permutaciones.
estimated-minutes: 14
prerequisites: []
question-ids:
  - pm-tc-001
  - pm-tc-002
  - pm-tc-003
  - pm-tc-004
  - pm-tc-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.2.1
---

# Combinaciones y permutaciones

## Objetivo

Resolver problemas de conteo identificando cuándo importa el orden de los elementos.

## Explicación

Las técnicas de conteo permiten calcular cuántos resultados distintos son posibles sin enumerarlos todos.

- Usa una permutación cuando el orden o el puesto de cada elemento cambia el resultado. Por ejemplo, asignar presidencia, secretaría y tesorería a personas distintas.
- Usa una combinación cuando solo importa qué elementos se eligen, no el orden. Por ejemplo, formar un equipo de tres personas.

Si se eligen `r` elementos de un total de `n`, una permutación sin repetición se calcula con `n! / (n - r)!`. Una combinación sin repetición se calcula con `n! / (r! × (n - r)!)`. El símbolo `!` significa factorial: `4! = 4 × 3 × 2 × 1`.

Antes de aplicar una fórmula, plantea dos resultados con los mismos elementos en orden invertido. Si cuentan como resultados diferentes, se trata de una permutación.

## Ejemplo resuelto

De cinco estudiantes se elegirán una presidencia, una secretaría y una tesorería.

1. Los cargos son distintos; Ana en presidencia y Bruno en secretaría no es lo mismo que Bruno en presidencia y Ana en secretaría.
2. El orden importa, así que se usa una permutación de cinco elementos tomados de tres en tres.
3. Calcula: `5 × 4 × 3 = 60`.

Hay `60` formas de asignar los tres cargos.

## Error frecuente

No uses una permutación para formar un grupo sin cargos. Al elegir a Ana y Bruno para un equipo, `ana-bruno` y `bruno-ana` describen el mismo equipo; contarlos por separado duplica resultados.

## Práctica guiada

1. Intenta primero: con los dígitos `1, 2, 3, 4, 5`, ¿cuántas claves de cuatro cifras sin repetición se pueden formar?
   Respuesta: `5 × 4 × 3 × 2 = 120`. El orden de las cifras cambia la clave, por lo que se usa una permutación.
2. Intenta primero: de seis personas, ¿cuántas parejas distintas pueden elegirse para representar a un grupo?
   Respuesta: `6! / (2! × 4!) = 15`. El orden no cambia la pareja, por lo que se usa una combinación.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes decidir si un problema requiere una combinación o una permutación. Determina primero si el orden cambia el resultado y después calcula el número de posibilidades.
