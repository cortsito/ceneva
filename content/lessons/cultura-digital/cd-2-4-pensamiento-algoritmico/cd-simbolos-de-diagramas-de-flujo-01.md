---
id: cd-simbolos-de-diagramas-de-flujo-01
area-id: cultura-digital
unit-id: cd-2-4-pensamiento-algoritmico
topic-id: cd-2-4-4-simbolos-de-diagramas-de-flujo
title: Símbolos de diagramas de flujo
objective: Interpretar el significado de los símbolos de un diagrama de flujo para el desarrollo de algoritmos.
estimated-minutes: 12
prerequisites:
  - cd-pasos-de-un-algoritmo-01
question-ids:
  - cd-sdf-001
  - cd-sdf-002
  - cd-sdf-003
  - cd-sdf-004
  - cd-sdf-005
source:
  guide: docs/guiaoficial.pdf
  page: 13
  code: 2.4.4
---

# Símbolos de diagramas de flujo

## Objetivo

Interpretar el significado de cada símbolo de un diagrama de flujo y relacionarlo con el paso del algoritmo que representa.

## Explicación

Un diagrama de flujo representa gráficamente los pasos de un algoritmo mediante símbolos con un significado fijo, unidos por flechas que indican el orden en que se ejecutan:

- Óvalo: marca el inicio o el fin del algoritmo.
- Paralelogramo: representa una entrada (leer un dato) o una salida (mostrar un resultado).
- Rectángulo: representa un proceso, es decir, un cálculo o una asignación de valor a una variable.
- Rombo: representa una decisión, es decir, una estructura selectiva que evalúa una condición y continúa por una de dos rutas según el resultado (verdadero o falso).
- Flecha: conecta los símbolos e indica la dirección en que continúa el algoritmo.

Cada símbolo corresponde a un tipo de paso ya estudiado: el paralelogramo a los pasos de entrada y salida, el rectángulo a los pasos de proceso, y el rombo a las estructuras selectivas. Un diagrama de flujo siempre comienza y termina con un óvalo, sin excepción.

## Ejemplo resuelto

Un diagrama de flujo representa un algoritmo que revisa si una persona puede votar: lee su edad, evalúa si es mayor o igual a 18 y, según el resultado, muestra "puede votar" o "no puede votar".

1. El símbolo inicial y el final son óvalos, porque marcan el inicio y el fin del algoritmo.
2. Leer la edad se representa con un paralelogramo, porque es una entrada.
3. Evaluar si la edad es mayor o igual a 18 se representa con un rombo, porque es una decisión con dos rutas posibles.
4. Mostrar "puede votar" o "no puede votar" se representa con un paralelogramo, porque es una salida.

## Error frecuente

No confundas el rombo con el rectángulo: el rombo se usa únicamente cuando el algoritmo evalúa una condición y el flujo puede continuar por dos rutas distintas; el rectángulo se usa para un cálculo o una asignación que siempre continúa por una sola ruta, sin decidir entre alternativas.

## Práctica guiada

1. Intenta primero: en un diagrama de flujo, ¿qué símbolo representa el cálculo del total de una compra a partir del precio y la cantidad ya leídos?
   Respuesta: rectángulo. Representa un proceso, un cálculo que no evalúa ninguna condición.
2. Intenta primero: ¿qué símbolo representa evaluar si un número leído es mayor que cero?
   Respuesta: rombo. Representa una decisión con dos rutas posibles según el resultado de la condición.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Ninguno de los tres reactivos de ejemplo del área 2 (`docs/guiaoficial.pdf`, páginas 29-30) corresponde a este tema. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/cultura-digital.ts`.

## Cierre

Ya puedes interpretar el óvalo, el paralelogramo, el rectángulo, el rombo y la flecha de un diagrama de flujo y relacionarlos con el paso del algoritmo que representan.
