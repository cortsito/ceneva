---
id: pm-medidas-de-dispersion-01
area-id: pensamiento-matematico
unit-id: pm-1-1-pensamiento-estadistico
topic-id: pm-1-1-4-medidas-de-dispersion
title: varianza y desviación estándar
objective: calcular varianza y desviación estándar de un conjunto de datos.
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

# varianza y desviación estándar

## objetivo

calcular la varianza y la desviación estándar de un conjunto de datos.

## explicación

las medidas de dispersión indican qué tanto se alejan los datos de su media. dos conjuntos pueden tener la misma media y una dispersión muy distinta.

para calcular la varianza de una población:

1. calcula la media.
2. resta la media a cada dato.
3. eleva al cuadrado cada diferencia.
4. suma los cuadrados y divide entre el número de datos.

la desviación estándar es la raíz cuadrada de la varianza. expresa la dispersión en la misma unidad de los datos. en esta lección se usa la fórmula de población, que divide entre el número total de datos.

## ejemplo resuelto

considera los datos `2, 4, 4, 4, 5, 5, 7, 9`.

1. la media es `40 / 8 = 5`.
2. las diferencias respecto de la media son `-3, -1, -1, -1, 0, 0, 2, 4`.
3. sus cuadrados son `9, 1, 1, 1, 0, 0, 4, 16`. la suma es `32`.
4. la varianza es `32 / 8 = 4`.
5. la desviación estándar es `raíz de 4 = 2`.

el resultado indica que los datos se alejan, en promedio, alrededor de dos unidades de la media.

## error frecuente

no sumes las diferencias sin elevarlas al cuadrado. las diferencias negativas y positivas se cancelarían y ocultarían la dispersión real.

## práctica guiada

1. intenta primero: calcula la varianza y la desviación estándar de `3, 5, 7` con la fórmula de población.
   respuesta: la media es `5`. los cuadrados de las diferencias son `4, 0, 4`; la varianza es `8 / 3`, aproximadamente `2.67`, y la desviación estándar es aproximadamente `1.63`.
2. intenta primero: compara `4, 5, 6` con `2, 5, 8`. ambos conjuntos tienen media `5`. ¿cuál está más disperso?
   respuesta: el segundo, porque sus valores se alejan más de la media.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes medir qué tan concentrados o separados están los datos. calcula primero la media y conserva el orden de los pasos para obtener la varianza y la desviación estándar.
