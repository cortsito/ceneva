---
id: pm-medidas-de-dispersion-01
area-id: pensamiento-matematico
unit-id: pm-1-1-pensamiento-estadistico
topic-id: pm-1-1-4-medidas-de-dispersion
title: Varianza y desviación estándar
objective: Calcular varianza y desviación estándar de un conjunto de datos.
estimated-minutes: 12
prerequisites:
  - pm-medidas-de-tendencia-central-01
question-ids:
  - pm-md-001
  - pm-md-002
  - pm-md-003
  - pm-md-004
  - pm-md-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.1.4
---

# Varianza y desviación estándar

## Objetivo

Calcular la varianza y la desviación estándar de un conjunto de datos.

## Explicación

Las medidas de dispersión indican qué tanto se alejan los datos de su media. Dos conjuntos pueden tener la misma media y una dispersión muy distinta.

Para calcular la varianza de una población:

1. Calcula la media.
2. Resta la media a cada dato.
3. Eleva al cuadrado cada diferencia.
4. Suma los cuadrados y divide entre el número de datos.

La desviación estándar es la raíz cuadrada de la varianza. Expresa la dispersión en la misma unidad de los datos. En esta lección se usa la fórmula de población, que divide entre el número total de datos.

## Ejemplo resuelto

Considera los datos `2, 4, 4, 4, 5, 5, 7, 9`.

1. La media es `40 / 8 = 5`.
2. Las diferencias respecto de la media son `-3, -1, -1, -1, 0, 0, 2, 4`.
3. Sus cuadrados son `9, 1, 1, 1, 0, 0, 4, 16`. La suma es `32`.
4. La varianza es `32 / 8 = 4`.
5. La desviación estándar es `raíz de 4 = 2`.

El resultado indica que los datos se alejan, en promedio, alrededor de dos unidades de la media.

## Error frecuente

No sumes las diferencias sin elevarlas al cuadrado. Las diferencias negativas y positivas se cancelarían y ocultarían la dispersión real.

## Práctica guiada

1. Intenta primero: calcula la varianza y la desviación estándar de `3, 5, 7` con la fórmula de población.
   Respuesta: la media es `5`. Los cuadrados de las diferencias son `4, 0, 4`; la varianza es `8 / 3`, aproximadamente `2.67`, y la desviación estándar es aproximadamente `1.63`.
2. Intenta primero: compara `4, 5, 6` con `2, 5, 8`. Ambos conjuntos tienen media `5`. ¿Cuál está más disperso?
   Respuesta: el segundo, porque sus valores se alejan más de la media.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes medir qué tan concentrados o separados están los datos. Calcula primero la media y conserva el orden de los pasos para obtener la varianza y la desviación estándar.
