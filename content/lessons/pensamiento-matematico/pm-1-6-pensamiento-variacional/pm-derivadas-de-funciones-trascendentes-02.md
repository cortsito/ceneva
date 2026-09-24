---
id: pm-derivadas-de-funciones-trascendentes-02
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-5-derivadas-de-funciones-algebraicas-y-trascendentes
title: Derivadas de funciones trascendentes
objective: Calcular la derivada de una función trascendente.
estimated-minutes: 12
prerequisites:
  - pm-derivadas-de-funciones-algebraicas-01
question-ids:
  - pm-dft-001
  - pm-dft-002
  - pm-dft-003
  - pm-dft-004
  - pm-dft-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 1.6.5
---

# Derivadas de funciones trascendentes

## Objetivo

Calcular derivadas básicas de funciones exponenciales, logarítmicas y trigonométricas.

## Explicación

Las funciones trascendentes no se forman solo con operaciones algebraicas. Algunas derivadas básicas son:

- `d/dx de eˣ = eˣ`.
- `d/dx de ln x = 1 / x`.
- `d/dx de sen x = cos x`.
- `d/dx de cos x = -sen x`.

Si una función tiene un coeficiente, conserva el coeficiente al derivar. Las derivadas de `sen x` y `cos x` se interpretan con `x` medido en radianes. Identifica primero la familia de la función antes de aplicar una regla.

## Ejemplo resuelto

Deriva `f(x) = 2eˣ + ln x`.

1. La derivada de `2eˣ` es `2eˣ`.
2. La derivada de `ln x` es `1 / x`.

Por lo tanto, `f'(x) = 2eˣ + 1 / x`.

## Error frecuente

No uses la regla de potencia en una función exponencial. La derivada de `eˣ` es `eˣ`, no `xeˣ`; la variable está en el exponente, no como una potencia de `x`.

## Práctica guiada

1. Intenta primero: deriva `g(x) = sen x + 3x`.
   Respuesta: `g'(x) = cos x + 3`. La derivada de `sen x` es `cos x` y la de `3x` es `3`.
2. Intenta primero: deriva `h(x) = cos x`.
   Respuesta: `h'(x) = -sen x`. El signo negativo es parte de la regla de derivación del coseno.

## Comprobación

Esta lección tiene cinco reactivos en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## Cierre

Ya puedes derivar funciones trascendentes básicas. Reconoce su tipo antes de aplicar la regla y conserva coeficientes y signos en el resultado.
