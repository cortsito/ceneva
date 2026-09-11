---
id: pm-tecnicas-de-conteo-01
area-id: pensamiento-matematico
unit-id: pm-1-2-pensamiento-probabilistico
topic-id: pm-1-2-1-tecnicas-de-conteo
title: combinaciones y permutaciones
objective: resolver problemas de conteo con combinaciones o permutaciones.
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

# combinaciones y permutaciones

## objetivo

resolver problemas de conteo identificando cuándo importa el orden de los elementos.

## explicación

las técnicas de conteo permiten calcular cuántos resultados distintos son posibles sin enumerarlos todos.

- usa una permutación cuando el orden o el puesto de cada elemento cambia el resultado. por ejemplo, asignar presidencia, secretaría y tesorería a personas distintas.
- usa una combinación cuando solo importa qué elementos se eligen, no el orden. por ejemplo, formar un equipo de tres personas.

si se eligen `r` elementos de un total de `n`, una permutación sin repetición se calcula con `n! / (n - r)!`. una combinación sin repetición se calcula con `n! / (r! × (n - r)!)`. el símbolo `!` significa factorial: `4! = 4 × 3 × 2 × 1`.

antes de aplicar una fórmula, plantea dos resultados con los mismos elementos en orden invertido. si cuentan como resultados diferentes, se trata de una permutación.

## ejemplo resuelto

de cinco estudiantes se elegirán una presidencia, una secretaría y una tesorería.

1. los cargos son distintos; ana en presidencia y bruno en secretaría no es lo mismo que bruno en presidencia y ana en secretaría.
2. el orden importa, así que se usa una permutación de cinco elementos tomados de tres en tres.
3. calcula: `5 × 4 × 3 = 60`.

hay `60` formas de asignar los tres cargos.

## error frecuente

no uses una permutación para formar un grupo sin cargos. al elegir a ana y bruno para un equipo, `ana-bruno` y `bruno-ana` describen el mismo equipo; contarlos por separado duplica resultados.

## práctica guiada

1. intenta primero: con los dígitos `1, 2, 3, 4, 5`, ¿cuántas claves de cuatro cifras sin repetición se pueden formar?
   respuesta: `5 × 4 × 3 × 2 = 120`. el orden de las cifras cambia la clave, por lo que se usa una permutación.
2. intenta primero: de seis personas, ¿cuántas parejas distintas pueden elegirse para representar a un grupo?
   respuesta: `6! / (2! × 4!) = 15`. el orden no cambia la pareja, por lo que se usa una combinación.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes decidir si un problema requiere una combinación o una permutación. determina primero si el orden cambia el resultado y después calcula el número de posibilidades.
