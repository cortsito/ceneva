---
id: cd-conceptos-del-lenguaje-algoritmico-01
area-id: cultura-digital
unit-id: cd-2-4-pensamiento-algoritmico
topic-id: cd-2-4-1-conceptos-del-lenguaje-algoritmico
title: Conceptos del lenguaje algorítmico
objective: Relacionar dato, variable, constante, expresión, operador aritmético, operador relacional, operador lógico, estructura selectiva y estructura repetitiva con sus definiciones.
estimated-minutes: 14
prerequisites: []
question-ids:
  - cd-cla-001
  - cd-cla-002
  - cd-cla-003
  - cd-cla-004
  - cd-cla-005
source:
  guide: docs/guiaoficial.pdf
  page: 13
  code: 2.4.1
---

# Conceptos del lenguaje algorítmico

## Objetivo

Relacionar cada uno de los nueve conceptos básicos del lenguaje algorítmico con su definición correcta.

## Explicación

Un algoritmo se describe con un conjunto reducido de conceptos que se combinan entre sí:

- Dato: valor concreto con el que trabaja un algoritmo, por ejemplo un número, un nombre o una fecha.
- Variable: espacio con nombre que guarda un dato y cuyo valor puede cambiar durante la ejecución, por ejemplo `edad` o `total`.
- Constante: espacio con nombre que guarda un dato cuyo valor no cambia durante la ejecución, por ejemplo `IVA = 0.16`.
- Expresión: combinación de datos, variables y operadores que produce un valor, por ejemplo `precio * (1 + IVA)`.
- Operador aritmético: realiza una operación matemática entre valores numéricos (`+`, `-`, `*`, `/`).
- Operador relacional: compara dos datos numéricos y su resultado es un valor booleano, verdadero o falso (`>`, `<`, `=`, `≠`).
- Operador lógico: combina dos o más condiciones en una sola expresión, exigiendo que se cumpla una o varias situaciones a la vez (`y`, `o`, `no`).
- Estructura selectiva: decide por cuál alternativa continuará el flujo del algoritmo según el resultado de evaluar una condición, por ejemplo "si la edad es mayor o igual a 18, entonces...".
- Estructura repetitiva: repite un bloque de instrucciones mientras se siga cumpliendo una condición, por ejemplo sumar cada calificación de una lista hasta terminar la lista.

Los operadores relacionales y lógicos suelen confundirse porque ambos participan en condiciones: el relacional compara dos valores concretos y produce un solo resultado booleano (`edad > 18`), mientras que el lógico combina dos o más resultados booleanos ya obtenidos (`edad > 18 y tiene_identificación`).

## Ejemplo resuelto

Un algoritmo calcula si una persona puede votar: guarda la edad capturada en una variable llamada `edad`, la compara contra el valor fijo `18` y, si la comparación es verdadera, repite la impresión de un mensaje de bienvenida una vez por cada elección pendiente en una lista.

1. `edad` guarda un valor que cambia con cada persona: es una variable.
2. `18` es un valor fijo que no cambia entre ejecuciones: es una constante.
3. `edad ≥ 18` compara dos valores y da verdadero o falso: es un operador relacional dentro de una expresión.
4. Decidir si continúa mostrando el mensaje según ese resultado es una estructura selectiva.
5. Repetir la impresión del mensaje una vez por cada elección de la lista es una estructura repetitiva.

## Error frecuente

No confundas variable con constante: ambas guardan un dato con nombre, pero la variable puede cambiar de valor durante la ejecución (como un contador) y la constante no (como una tasa fija). Tampoco confundas operador relacional con operador lógico: el relacional compara dos valores y produce un solo resultado booleano; el lógico combina resultados booleanos ya obtenidos entre sí.

## Práctica guiada

1. Intenta primero: un algoritmo revisa, calificación por calificación, si cada una es mayor o igual a 6 y, en caso afirmativo, aumenta en uno un contador de aprobados. ¿Qué concepto corresponde a revisar cada calificación una por una hasta terminar la lista?
   Respuesta: estructura repetitiva. Repite la revisión mientras queden calificaciones por procesar.
2. Intenta primero: en ese mismo algoritmo, ¿qué concepto corresponde a comparar una calificación contra el valor `6`?
   Respuesta: operador relacional. Compara dos valores numéricos y produce verdadero o falso.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. La guía oficial incluye un reactivo de ejemplo para este tema (`docs/guiaoficial.pdf`, página 29) que relaciona estructuras condicionales, operadores relacionales y operadores lógicos con sus definiciones mediante un ejercicio de relación de elementos; el banco de preguntas debe incluir al menos un reactivo de ese mismo tipo (relación de elementos entre concepto y definición) aplicado a un subconjunto de los nueve conceptos de esta lección, sin copiar el enunciado de la guía. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/cultura-digital.ts`.

## Cierre

Ya puedes relacionar dato, variable, constante, expresión, operador aritmético, operador relacional, operador lógico, estructura selectiva y estructura repetitiva con su definición correspondiente.
