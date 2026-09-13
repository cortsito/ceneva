---
id: pm-derivadas-de-funciones-trascendentes-02
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-5-derivadas-de-funciones-algebraicas-y-trascendentes
title: derivadas de funciones trascendentes
objective: calcular la derivada de una función trascendente.
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

# derivadas de funciones trascendentes

## objetivo

calcular derivadas básicas de funciones exponenciales, logarítmicas y trigonométricas.

## explicación

las funciones trascendentes no se forman solo con operaciones algebraicas. algunas derivadas básicas son:

- `d/dx de eˣ = eˣ`.
- `d/dx de ln x = 1 / x`.
- `d/dx de sen x = cos x`.
- `d/dx de cos x = -sen x`.

si una función tiene un coeficiente, conserva el coeficiente al derivar. las derivadas de `sen x` y `cos x` se interpretan con `x` medido en radianes. identifica primero la familia de la función antes de aplicar una regla.

## ejemplo resuelto

deriva `f(x) = 2eˣ + ln x`.

1. la derivada de `2eˣ` es `2eˣ`.
2. la derivada de `ln x` es `1 / x`.

por lo tanto, `f'(x) = 2eˣ + 1 / x`.

## error frecuente

no uses la regla de potencia en una función exponencial. la derivada de `eˣ` es `eˣ`, no `xeˣ`; la variable está en el exponente, no como una potencia de `x`.

## práctica guiada

1. intenta primero: deriva `g(x) = sen x + 3x`.
   respuesta: `g'(x) = cos x + 3`. la derivada de `sen x` es `cos x` y la de `3x` es `3`.
2. intenta primero: deriva `h(x) = cos x`.
   respuesta: `h'(x) = -sen x`. el signo negativo es parte de la regla de derivación del coseno.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes derivar funciones trascendentes básicas. reconoce su tipo antes de aplicar la regla y conserva coeficientes y signos en el resultado.
