---
id: pm-medidas-de-tendencia-central-01
area-id: pensamiento-matematico
unit-id: pm-1-1-pensamiento-estadistico
topic-id: pm-1-1-3-medidas-de-tendencia-central
title: media, mediana y moda
objective: calcular e interpretar media, mediana y moda en un conjunto de datos.
estimated-minutes: 12
prerequisites: []
question-ids:
  - pm-mtc-001
  - pm-mtc-002
  - pm-mtc-003
  - pm-mtc-004
  - pm-mtc-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.1.3
---

# media, mediana y moda

## objetivo

calcular e interpretar la media, la mediana y la moda de un conjunto de datos.

## explicación

las medidas de tendencia central resumen un conjunto con un valor representativo.

- la media es la suma de todos los datos dividida entre la cantidad de datos.
- la mediana es el valor central después de ordenar los datos. si hay una cantidad par de datos, es el promedio de los dos valores centrales.
- la moda es el valor que aparece con mayor frecuencia. puede no existir o puede haber más de una.

la media utiliza todos los valores, pero cambia mucho ante un valor extremo. la mediana suele representar mejor el centro cuando hay valores muy alejados del resto. la moda permite identificar el valor o categoría más frecuente.

## ejemplo resuelto

las calificaciones de cinco estudiantes son `4, 6, 7, 7, 11`.

1. para la media, suma los datos: `4 + 6 + 7 + 7 + 11 = 35`. después divide entre cinco: `35 / 5 = 7`.
2. los datos ya están ordenados. el valor central es `7`, por lo que la mediana es `7`.
3. el valor que más se repite es `7`, por lo que la moda es `7`.

en este caso, las tres medidas coinciden, pero no siempre ocurre así.

## error frecuente

no busques la mediana en una lista sin ordenar. primero organiza los datos de menor a mayor; de otro modo, la posición central puede ser incorrecta.

## práctica guiada

1. intenta primero: calcula la mediana de `2, 3, 5, 8`.
   respuesta: `4`. los dos valores centrales son `3` y `5`; su promedio es `4`.
2. intenta primero: los ingresos mensuales de un grupo son parecidos, salvo uno que es mucho mayor. ¿qué medida conviene usar para describir el ingreso típico?
   respuesta: la mediana, porque el valor extremo puede elevar demasiado la media.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes elegir y calcular una medida de tendencia central. antes de resolver, ordena los datos cuando busques la mediana y revisa si existen valores extremos.
