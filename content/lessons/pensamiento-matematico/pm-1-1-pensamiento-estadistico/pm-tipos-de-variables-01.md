---
id: pm-tipos-de-variables-01
area-id: pensamiento-matematico
unit-id: pm-1-1-pensamiento-estadistico
topic-id: pm-1-1-1-tipos-de-variables
title: variables estadísticas
objective: clasificar variables cuantitativas, cualitativas y categóricas.
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

# variables estadísticas

## objetivo

clasificar una variable como cuantitativa discreta, cuantitativa continua, cualitativa o categórica, a partir de la información que representa.

## explicación

una variable es una característica que puede tomar distintos valores entre las personas, objetos o situaciones estudiadas.

- una variable cuantitativa expresa una cantidad que puede contarse o medirse, y admite operaciones aritméticas con sentido (sumar, promediar). se divide en dos tipos:
  - discreta: solo toma valores enteros, resultado de un conteo. por ejemplo: número de personas por vivienda, número de hijos, número de errores en un examen.
  - continua: puede tomar cualquier valor dentro de un intervalo, resultado de una medición. por ejemplo: estatura, peso, tiempo de traslado.
- una variable cualitativa describe una característica mediante una etiqueta que expresa una cualidad u opinión. por ejemplo: nivel de satisfacción, estado civil.
- una variable categórica asigna cada observación a un grupo definido, sin orden ni cantidad implícita. por ejemplo: tipo de transporte, grupo sanguíneo, código postal.

para distinguir discreta de continua, pregunta cómo se obtuvo el dato: si viene de contar unidades completas, es discreta; si viene de medir con un instrumento que admite fracciones, es continua. las variables cualitativas y categóricas, en cambio, usan etiquetas, no cantidades: si un valor parece numérico pero no tiene sentido sumarlo o promediarlo (como un código postal), sigue siendo categórico.

## ejemplo resuelto

en un censo se registran estas variables: número de personas por vivienda, estatura de cada persona y tipo de vivienda (casa, departamento o cuarto).

1. el número de personas por vivienda es cuantitativo discreto porque resulta de contar personas completas; no existen "2.5 personas".
2. la estatura es cuantitativa continua porque resulta de medir y puede tomar cualquier valor dentro de un rango, incluidas fracciones.
3. el tipo de vivienda es categórico porque cada vivienda pertenece a un grupo definido, sin relación de cantidad entre ellos.

## error frecuente

no clasifiques una variable solo por la forma de su dato. que un valor use cifras no basta para que sea cuantitativo: un código postal contiene números, pero sigue siendo categórico porque no tiene sentido sumarlo o promediarlo. y dentro de las cuantitativas, no asumas que un número entero es automáticamente discreto: una estatura redondeada a metros enteros (por ejemplo, "2 metros") sigue siendo continua, porque el instrumento de medición podría registrar fracciones aunque el dato mostrado esté redondeado.

## práctica guiada

1. intenta primero: una fábrica registra dos variables: el número de piezas defectuosas por lote y el peso en gramos de cada pieza. clasifica ambas.
   respuesta: el número de piezas defectuosas es cuantitativa discreta, porque se cuenta en unidades completas. el peso en gramos es cuantitativa continua, porque se mide y admite fracciones.
2. intenta primero: una escuela registra el código postal de cada estudiante. clasifícalo.
   respuesta: categórica. aunque contiene dígitos, el código postal solo identifica una zona; no tiene sentido sumarlo o promediarlo.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. el banco de preguntas incluye una que evalúa específicamente la distinción entre cuantitativa discreta y cuantitativa continua, ya que la guía oficial la usa como ejemplo de reactivo para este tema (`docs/guiaoficial.pdf`, página 27). sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes decidir si un dato es cuantitativo discreto, cuantitativo continuo, cualitativo o categórico. usa esa distinción antes de elegir cómo resumir o analizar un conjunto de datos.
