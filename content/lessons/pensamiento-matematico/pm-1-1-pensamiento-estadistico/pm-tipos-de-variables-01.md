---
id: pm-tipos-de-variables-01
area-id: pensamiento-matematico
unit-id: pm-1-1-pensamiento-estadistico
topic-id: pm-1-1-1-tipos-de-variables
title: Variables estadísticas
objective: Clasificar variables cuantitativas, cualitativas y categóricas.
estimated-minutes: 10
prerequisites: []
question-ids:
  - pm-tv-001
  - pm-tv-002
  - pm-tv-003
  - pm-tv-004
  - pm-tv-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.1.1
---

# Variables estadísticas

## Objetivo

Clasificar una variable como cuantitativa discreta, cuantitativa continua, cualitativa o categórica, a partir de la información que representa.

## Explicación

Una variable es una característica que puede tomar distintos valores entre las personas, objetos o situaciones estudiadas.

- Una variable cuantitativa expresa una cantidad que puede contarse o medirse, y admite operaciones aritméticas con sentido (sumar, promediar). Se divide en dos tipos:
  - discreta: solo toma valores enteros, resultado de un conteo. Por ejemplo: número de personas por vivienda, número de hijos, número de errores en un examen.
  - continua: puede tomar cualquier valor dentro de un intervalo, resultado de una medición. Por ejemplo: estatura, peso, tiempo de traslado.
- Una variable cualitativa describe una característica mediante una etiqueta que expresa una cualidad u opinión. Por ejemplo: nivel de satisfacción, estado civil.
- Una variable categórica asigna cada observación a un grupo definido, sin orden ni cantidad implícita. Por ejemplo: tipo de transporte, grupo sanguíneo, código postal.

Para distinguir discreta de continua, pregunta cómo se obtuvo el dato: si viene de contar unidades completas, es discreta; si viene de medir con un instrumento que admite fracciones, es continua. Las variables cualitativas y categóricas, en cambio, usan etiquetas, no cantidades: si un valor parece numérico pero no tiene sentido sumarlo o promediarlo (como un código postal), sigue siendo categórico.

## Ejemplo resuelto

En un censo se registran estas variables: número de personas por vivienda, estatura de cada persona y tipo de vivienda (casa, departamento o cuarto).

1. El número de personas por vivienda es cuantitativo discreto porque resulta de contar personas completas; no existen "2.5 personas".
2. La estatura es cuantitativa continua porque resulta de medir y puede tomar cualquier valor dentro de un rango, incluidas fracciones.
3. El tipo de vivienda es categórico porque cada vivienda pertenece a un grupo definido, sin relación de cantidad entre ellos.

## Error frecuente

No clasifiques una variable solo por la forma de su dato. Que un valor use cifras no basta para que sea cuantitativo: un código postal contiene números, pero sigue siendo categórico porque no tiene sentido sumarlo o promediarlo. Y dentro de las cuantitativas, no asumas que un número entero es automáticamente discreto: una estatura redondeada a metros enteros (por ejemplo, "2 metros") sigue siendo continua, porque el instrumento de medición podría registrar fracciones aunque el dato mostrado esté redondeado.

## Práctica guiada

1. Intenta primero: una fábrica registra dos variables: el número de piezas defectuosas por lote y el peso en gramos de cada pieza. Clasifica ambas.
   Respuesta: el número de piezas defectuosas es cuantitativa discreta, porque se cuenta en unidades completas. El peso en gramos es cuantitativa continua, porque se mide y admite fracciones.
2. Intenta primero: una escuela registra el código postal de cada estudiante. Clasifícalo.
   Respuesta: categórica. Aunque contiene dígitos, el código postal solo identifica una zona; no tiene sentido sumarlo o promediarlo.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. El banco de preguntas incluye una que evalúa específicamente la distinción entre cuantitativa discreta y cuantitativa continua, ya que la guía oficial la usa como ejemplo de reactivo para este tema (`docs/guiaoficial.pdf`, página 27). Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes decidir si un dato es cuantitativo discreto, cuantitativo continuo, cualitativo o categórico. Usa esa distinción antes de elegir cómo resumir o analizar un conjunto de datos.
