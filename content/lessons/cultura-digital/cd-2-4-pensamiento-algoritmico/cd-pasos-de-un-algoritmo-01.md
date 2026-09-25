---
id: cd-pasos-de-un-algoritmo-01
area-id: cultura-digital
unit-id: cd-2-4-pensamiento-algoritmico
topic-id: cd-2-4-2-pasos-de-un-algoritmo
title: Pasos de un algoritmo
objective: Ordenar los pasos de un algoritmo para resolver un problema planteado.
estimated-minutes: 12
prerequisites:
  - cd-conceptos-del-lenguaje-algoritmico-01
question-ids:
  - cd-pa-001
  - cd-pa-002
  - cd-pa-003
  - cd-pa-004
  - cd-pa-005
source:
  guide: docs/guiaoficial.pdf
  page: 13
  code: 2.4.2
---

# Pasos de un algoritmo

## Objetivo

Ordenar correctamente los pasos de un algoritmo, distinguiendo entrada, proceso y salida.

## Explicación

Resolver un problema con un algoritmo requiere organizar sus pasos en un orden fijo, porque cada paso suele necesitar el resultado del paso anterior. La mayoría de los algoritmos siguen esta secuencia general:

1. Entrada: leer los datos necesarios y guardarlos en variables.
2. Proceso: aplicar operadores aritméticos, relacionales o lógicos sobre esos datos, siguiendo la fórmula o condición que resuelve el problema.
3. Salida: presentar o mostrar el resultado obtenido.

Un paso de proceso no puede ejecutarse antes de que sus datos hayan sido leídos, y un paso de salida no puede ejecutarse antes de que el proceso haya calculado el resultado que se va a mostrar. Cuando un problema requiere varias operaciones, el proceso también sigue un orden interno: primero se calculan los valores intermedios que necesitan otras operaciones, y hasta el final se calcula el resultado que depende de todos ellos.

## Ejemplo resuelto

Se necesita un algoritmo que calcule el área de un rectángulo a partir de su base y su altura, y muestre el resultado.

1. Leer la base y la altura y guardarlas en variables (`base`, `altura`): es un paso de entrada, porque el proceso no puede calcular nada sin estos datos.
2. Multiplicar `base` por `altura` y guardar el resultado en una variable `área`: es un paso de proceso, porque depende de los datos ya leídos.
3. Mostrar el valor de `área`: es un paso de salida, porque depende de que el proceso ya haya calculado ese valor.

El orden correcto es: leer base y altura, calcular el área, mostrar el área.

## Error frecuente

No coloques un paso de salida antes de que el proceso haya calculado lo que se va a mostrar, ni un paso de proceso antes de que sus datos hayan sido leídos. Cuando el proceso tiene varias operaciones encadenadas, tampoco calcules primero el resultado final: primero deben resolverse los valores intermedios de los que ese resultado depende.

## Práctica guiada

1. Intenta primero: un algoritmo debe leer el precio de un producto, calcular su precio con IVA y mostrar el resultado. ¿Cuál es el primer paso?
   Respuesta: leer el precio del producto. Ningún cálculo puede empezar sin ese dato.
2. Intenta primero: en ese mismo algoritmo, ¿qué paso va justo antes de mostrar el resultado?
   Respuesta: calcular el precio con IVA. La salida depende de que ese cálculo ya se haya realizado.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. La guía oficial incluye un reactivo de ejemplo para este tema (`docs/guiaoficial.pdf`, página 30) que pide ordenar los pasos de un algoritmo que calcula el promedio de tres calificaciones (leer los datos, sumarlos, dividir entre tres y presentar el resultado); el banco de preguntas debe incluir al menos un reactivo de jerarquización equivalente, aplicado a un problema distinto con su propia secuencia de entrada, proceso y salida, sin copiar el enunciado de la guía. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/cultura-digital.ts`.

## Cierre

Ya puedes ordenar los pasos de entrada, proceso y salida de un algoritmo para resolver un problema planteado.
