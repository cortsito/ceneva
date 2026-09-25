---
id: cn-cuadros-de-punnett-01
area-id: ciencias-naturales-experimentales-y-tecnologia
unit-id: cn-5-7-herencia-y-evolucion-biologica
topic-id: cn-5-7-3-cuadros-de-punnett
title: Cuadros de Punnett
objective: Identificar el cuadro de Punnett de la descendencia de dos progenitores.
estimated-minutes: 14
prerequisites:
  - cn-tipos-de-cromosomas-01
question-ids:
  - cn-cdp-001
  - cn-cdp-002
  - cn-cdp-003
  - cn-cdp-004
  - cn-cdp-005
source:
  guide: docs/guiaoficial.pdf
  page: 17
  code: 5.7.3
---

# Cuadros de Punnett

## Objetivo

Construir e interpretar un cuadro de Punnett para predecir las proporciones genotípicas y fenotípicas de la descendencia de dos progenitores, a partir de sus alelos.

## Explicación

Un cuadro de Punnett es una tabla que combina los alelos (variantes de un gen) de dos progenitores para predecir los genotipos posibles de su descendencia. Cada progenitor aporta un alelo por cada gameto; el alelo dominante se escribe con mayúscula (`A`) y el recesivo con minúscula (`a`).

Casos comunes con un solo gen (cruza monohíbrida):

- **`Aa` × `Aa`** (ambos heterocigotos): la descendencia tiene proporción genotípica `1 AA : 2 Aa : 1 aa`. Si `A` es dominante, la proporción fenotípica es `3` dominante `: 1` recesivo.
- **`AA` × `aa`** (homocigoto dominante × homocigoto recesivo): toda la descendencia es `Aa`, es decir, `100%` con fenotipo dominante.
- **`Aa` × `aa`** (heterocigoto × homocigoto recesivo, cruza de prueba): la descendencia tiene proporción `1 Aa : 1 aa`, es decir, `50%` dominante y `50%` recesivo.

El criterio para resolver un cuadro de Punnett es identificar los alelos de cada progenitor, combinarlos en la tabla (cada progenitor en un eje) y contar cuántas combinaciones resultan en cada genotipo.

## Ejemplo resuelto

Un enunciado describe la cruza de dos progenitores heterocigotos (`Aa` × `Aa`) para un gen con dominancia completa, y pregunta qué proporción fenotípica se espera en la descendencia.

1. Al combinar los alelos de ambos progenitores en el cuadro, resultan las combinaciones `AA`, `Aa`, `Aa` y `aa`.
2. Como `A` es dominante, tanto `AA` como `Aa` producen el fenotipo dominante; solo `aa` produce el fenotipo recesivo.
3. La conclusión es que la proporción fenotípica esperada es `3` dominante `: 1` recesivo.

## Error frecuente

No confundas la proporción genotípica con la fenotípica en una cruza `Aa` × `Aa`: la proporción genotípica es `1 AA : 2 Aa : 1 aa` (tres genotipos distintos), pero la proporción fenotípica, si hay dominancia completa, es `3 : 1` (solo dos fenotipos, porque `AA` y `Aa` se ven igual).

## Práctica guiada

1. Intenta primero: ¿qué proporción de descendencia se espera de la cruza `AA` × `aa`?
   Respuesta: el `100%` de la descendencia es `Aa`, con fenotipo dominante.
2. Intenta primero: en una cruza de prueba `Aa` × `aa`, ¿qué proporción fenotípica se espera?
   Respuesta: `50%` con fenotipo dominante y `50%` con fenotipo recesivo.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Ninguno de los tres reactivos de ejemplo de la guía oficial para ciencias naturales corresponde a este tema; los tres calibran los temas `5.1.1`, `5.2.5` y `5.6.3`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/ciencias-naturales-experimentales-y-tecnologia.ts`.

## Cierre

Ya puedes construir e interpretar un cuadro de Punnett para predecir la descendencia de una cruza genética. La siguiente lección aborda las teorías evolutivas.
