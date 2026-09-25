---
id: cd-caracteristicas-del-pensamiento-algoritmico-01
area-id: cultura-digital
unit-id: cd-2-4-pensamiento-algoritmico
topic-id: cd-2-4-3-caracteristicas-del-pensamiento-algoritmico
title: Características del pensamiento algorítmico
objective: Reconocer si un algoritmo cumple las características de ser definido, preciso y finito.
estimated-minutes: 10
prerequisites:
  - cd-conceptos-del-lenguaje-algoritmico-01
question-ids:
  - cd-cpa-001
  - cd-cpa-002
  - cd-cpa-003
  - cd-cpa-004
  - cd-cpa-005
source:
  guide: docs/guiaoficial.pdf
  page: 13
  code: 2.4.3
---

# Características del pensamiento algorítmico

## Objetivo

Reconocer, en un algoritmo descrito, si cumple o incumple cada una de sus tres características: definido, preciso y finito.

## Explicación

Un algoritmo bien construido debe cumplir tres características:

- Definido: cada paso tiene un único resultado posible; no deja lugar a que dos personas lo entiendan o lo ejecuten de forma distinta. Un paso como "agrega un poco de agua" no es definido, porque "un poco" no tiene un valor único.
- Preciso: los pasos siguen un orden exacto y sin ambigüedad sobre cuál va primero; no basta con enunciar las acciones, también debe quedar claro en qué secuencia se ejecutan.
- Finito: el algoritmo termina después de un número determinado de pasos; no puede quedar repitiéndose para siempre sin una condición que lo detenga.

Estas tres características son independientes entre sí: un algoritmo puede tener pasos exactos en su orden (preciso) pero usar instrucciones ambiguas (no definido), o puede tener instrucciones exactas y ordenadas pero carecer de una condición de fin (no finito).

## Ejemplo resuelto

Un algoritmo para preparar café indica: "1. Hierve agua. 2. Agrega café molido a gusto. 3. Sirve cuando esté listo."

1. El paso 2 usa "a gusto", que no tiene un único valor posible para toda persona que lo ejecute: el algoritmo no es definido.
2. El paso 3 usa "cuando esté listo" sin indicar una condición exacta ni un número de pasos para llegar ahí: el algoritmo tampoco es finito de forma verificable.
3. Los pasos sí están numerados en un orden claro (primero hervir, luego agregar, luego servir): en ese sentido, sí es preciso.

Para que el algoritmo cumpliera las tres características, tendría que especificar una cantidad exacta de café y un tiempo o condición exacta para saber cuándo detenerse.

## Error frecuente

No confundas preciso con definido: preciso se refiere al orden exacto de los pasos (que no haya duda de cuál va antes o después), mientras que definido se refiere a que cada paso tenga un único resultado posible (que no haya duda de qué hacer exactamente en ese paso). Un algoritmo puede tener sus pasos en el orden correcto y aun así usar instrucciones ambiguas.

## Práctica guiada

1. Intenta primero: un algoritmo dice "repite sumar 1 al contador mientras el usuario quiera seguir jugando", sin definir cuándo el usuario deja de querer seguir. ¿Qué característica incumple con mayor claridad?
   Respuesta: finito. No hay una condición exacta ni verificable que garantice que el algoritmo termine.
2. Intenta primero: un algoritmo indica "1. Lee el número. 2. Multiplícalo por 2. 3. Muestra el resultado." ¿Cumple con ser definido, preciso y finito?
   Respuesta: sí. Cada paso tiene un único resultado posible, sigue un orden exacto y termina después de tres pasos.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Ninguno de los tres reactivos de ejemplo del área 2 (`docs/guiaoficial.pdf`, páginas 29-30) corresponde a este tema. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/cultura-digital.ts`.

## Cierre

Ya puedes reconocer si un algoritmo cumple o incumple ser definido, preciso y finito.
