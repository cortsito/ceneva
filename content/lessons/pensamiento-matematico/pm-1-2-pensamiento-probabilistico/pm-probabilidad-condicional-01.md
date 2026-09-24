---
id: pm-probabilidad-condicional-01
area-id: pensamiento-matematico
unit-id: pm-1-2-pensamiento-probabilistico
topic-id: pm-1-2-3-probabilidad-condicional
title: Probabilidad condicional y teorema de Bayes
objective: Calcular la probabilidad condicional de un evento usando el teorema de Bayes.
estimated-minutes: 14
prerequisites:
  - pm-probabilidad-simple-01
question-ids:
  - pm-pc-001
  - pm-pc-002
  - pm-pc-003
  - pm-pc-004
  - pm-pc-005
source:
  guide: docs/guiaoficial.pdf
  page: 11
  code: 1.2.3
---

# Probabilidad condicional y teorema de Bayes

## Objetivo

Calcular una probabilidad condicional usando información nueva sobre el resultado.

## Explicación

Una probabilidad condicional responde qué tan probable es un evento cuando ya se sabe que otro ocurrió. Se escribe `p(a | b)` y se lee «probabilidad de a dado b».

Para calcularla, restringe el conjunto a los casos donde ocurrió `b` y, dentro de ellos, cuenta los que también cumplen `a`:

`p(a | b) = p(a y b) / p(b)`.

El teorema de Bayes permite invertir una condición cuando se conoce la probabilidad de observar una evidencia dentro de cada grupo:

`p(a | b) = p(b | a) × p(a) / p(b)`.

En problemas con cantidades, suele ser más claro construir una tabla: separa los grupos iniciales, calcula cuántos producen la evidencia y después divide los casos favorables entre el total de casos con esa evidencia.

## Ejemplo resuelto

De cien estudiantes, veinte asistieron a un curso de preparación y ochenta no. Aprobaron `16` de quienes asistieron y `24` de quienes no asistieron. Si se elige a una persona que aprobó, calcula la probabilidad de que haya asistido al curso.

1. La condición nueva es «aprobó», por lo que solo cuentan quienes aprobaron: `16 + 24 = 40`.
2. Entre esas cuarenta personas, `16` asistieron al curso.
3. Divide: `16 / 40 = 2 / 5 = 40 %`.

La probabilidad de que una persona haya asistido al curso, dado que aprobó, es `40 %`.

## Error frecuente

No dividas entre el total inicial de estudiantes cuando la condición ya cambió el grupo. En el ejemplo, el denominador no es `100`, sino las `40` personas que aprobaron.

## Práctica guiada

1. Intenta primero: de cincuenta solicitudes, diez se enviaron en línea. Entre las solicitudes aprobadas, seis fueron en línea y catorce fueron presenciales. Si una solicitud fue aprobada, ¿cuál es la probabilidad de que se haya enviado en línea?
   Respuesta: `6 / (6 + 14) = 6 / 20 = 30 %`. La condición «aprobada» limita el total a veinte solicitudes.
2. Intenta primero: de cien mensajes, veinte son fraudulentos. Un filtro detecta dieciocho mensajes fraudulentos y marca por error ocho mensajes legítimos. Si un mensaje fue marcado por el filtro, ¿cuál es la probabilidad de que sea fraudulento?
   Respuesta: `18 / (18 + 8) = 18 / 26 = 9 / 13`, aproximadamente `69.2 %`. Bayes actualiza la probabilidad al conocer que el filtro lo marcó.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes calcular probabilidades después de recibir información nueva. Identifica primero la condición, limita el conjunto de casos y cuenta dentro de él los resultados favorables.
