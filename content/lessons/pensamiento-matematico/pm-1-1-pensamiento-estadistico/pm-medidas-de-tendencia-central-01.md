---
id: pm-medidas-de-tendencia-central-01
area-id: pensamiento-matematico
unit-id: pm-1-1-pensamiento-estadistico
topic-id: pm-1-1-3-medidas-de-tendencia-central
title: Media, mediana y moda
objective: Calcular e interpretar media, mediana y moda en un conjunto de datos.
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

# Media, mediana y moda

## Objetivo

Calcular e interpretar la media, la mediana y la moda de un conjunto de datos.

## Explicación

Las medidas de tendencia central resumen un conjunto con un valor representativo.

- La media es la suma de todos los datos dividida entre la cantidad de datos.
- La mediana es el valor central después de ordenar los datos. Si hay una cantidad par de datos, es el promedio de los dos valores centrales.
- La moda es el valor que aparece con mayor frecuencia. Puede no existir o puede haber más de una.

La media utiliza todos los valores, pero cambia mucho ante un valor extremo. La mediana suele representar mejor el centro cuando hay valores muy alejados del resto. La moda permite identificar el valor o categoría más frecuente.

## Ejemplo resuelto

Las calificaciones de cinco estudiantes son `4, 6, 7, 7, 11`.

1. Para la media, suma los datos: `4 + 6 + 7 + 7 + 11 = 35`. Después divide entre cinco: `35 / 5 = 7`.
2. Los datos ya están ordenados. El valor central es `7`, por lo que la mediana es `7`.
3. El valor que más se repite es `7`, por lo que la moda es `7`.

En este caso, las tres medidas coinciden, pero no siempre ocurre así.

## Error frecuente

No busques la mediana en una lista sin ordenar. Primero organiza los datos de menor a mayor; de otro modo, la posición central puede ser incorrecta.

## Práctica guiada

1. Intenta primero: calcula la mediana de `2, 3, 5, 8`.
   Respuesta: `4`. Los dos valores centrales son `3` y `5`; su promedio es `4`.
2. Intenta primero: los ingresos mensuales de un grupo son parecidos, salvo uno que es mucho mayor. ¿Qué medida conviene usar para describir el ingreso típico?
   Respuesta: la mediana, porque el valor extremo puede elevar demasiado la media.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes elegir y calcular una medida de tendencia central. Antes de resolver, ordena los datos cuando busques la mediana y revisa si existen valores extremos.
