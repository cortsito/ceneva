---
id: pm-probabilidad-condicional-01
area-id: pensamiento-matematico
unit-id: pm-1-2-pensamiento-probabilistico
topic-id: pm-1-2-3-probabilidad-condicional
title: probabilidad condicional y teorema de bayes
objective: calcular la probabilidad condicional de un evento usando el teorema de bayes.
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

# probabilidad condicional y teorema de bayes

## objetivo

calcular una probabilidad condicional usando información nueva sobre el resultado.

## explicación

una probabilidad condicional responde qué tan probable es un evento cuando ya se sabe que otro ocurrió. se escribe `p(a | b)` y se lee «probabilidad de a dado b».

para calcularla, restringe el conjunto a los casos donde ocurrió `b` y, dentro de ellos, cuenta los que también cumplen `a`:

`p(a | b) = p(a y b) / p(b)`.

el teorema de bayes permite invertir una condición cuando se conoce la probabilidad de observar una evidencia dentro de cada grupo:

`p(a | b) = p(b | a) × p(a) / p(b)`.

en problemas con cantidades, suele ser más claro construir una tabla: separa los grupos iniciales, calcula cuántos producen la evidencia y después divide los casos favorables entre el total de casos con esa evidencia.

## ejemplo resuelto

de cien estudiantes, veinte asistieron a un curso de preparación y ochenta no. aprobaron `16` de quienes asistieron y `24` de quienes no asistieron. si se elige a una persona que aprobó, calcula la probabilidad de que haya asistido al curso.

1. la condición nueva es «aprobó», por lo que solo cuentan quienes aprobaron: `16 + 24 = 40`.
2. entre esas cuarenta personas, `16` asistieron al curso.
3. divide: `16 / 40 = 2 / 5 = 40 %`.

la probabilidad de que una persona haya asistido al curso, dado que aprobó, es `40 %`.

## error frecuente

no dividas entre el total inicial de estudiantes cuando la condición ya cambió el grupo. en el ejemplo, el denominador no es `100`, sino las `40` personas que aprobaron.

## práctica guiada

1. intenta primero: de cincuenta solicitudes, diez se enviaron en línea. entre las solicitudes aprobadas, seis fueron en línea y catorce fueron presenciales. si una solicitud fue aprobada, ¿cuál es la probabilidad de que se haya enviado en línea?
   respuesta: `6 / (6 + 14) = 6 / 20 = 30 %`. la condición «aprobada» limita el total a veinte solicitudes.
2. intenta primero: de cien mensajes, veinte son fraudulentos. un filtro detecta dieciocho mensajes fraudulentos y marca por error ocho mensajes legítimos. si un mensaje fue marcado por el filtro, ¿cuál es la probabilidad de que sea fraudulento?
   respuesta: `18 / (18 + 8) = 18 / 26 = 9 / 13`, aproximadamente `69.2 %`. bayes actualiza la probabilidad al conocer que el filtro lo marcó.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes calcular probabilidades después de recibir información nueva. identifica primero la condición, limita el conjunto de casos y cuenta dentro de él los resultados favorables.
