---
id: pm-derivadas-de-funciones-algebraicas-01
area-id: pensamiento-matematico
unit-id: pm-1-6-pensamiento-variacional
topic-id: pm-1-6-5-derivadas-de-funciones-algebraicas-y-trascendentes
title: derivadas de funciones algebraicas
objective: calcular la derivada de una función algebraica no polinomial.
estimated-minutes: 12
prerequisites:
  - pm-derivadas-de-funciones-polinomiales-01
question-ids:
  - pm-dfa-001
  - pm-dfa-002
  - pm-dfa-003
  - pm-dfa-004
  - pm-dfa-005
source:
  guide: docs/guiaoficial.pdf
  page: 12
  code: 1.6.5
---

# derivadas de funciones algebraicas

## objetivo

calcular derivadas de funciones con raíces o variables en el denominador.

## explicación

algunas funciones algebraicas no son polinomios porque contienen raíces o variables en el denominador. para derivarlas, primero reescríbelas con exponentes:

- `raíz de x = x¹ᐟ²`.
- `1 / x = x⁻¹`.

después aplica la misma regla de potencia: multiplica por el exponente y resta uno. así, la derivada de `raíz de x` es `1 / (2 raíz de x)` y la de `1 / x` es `-1 / x²`.

reescribir antes de derivar evita errores de signo y permite usar una sola regla.

## ejemplo resuelto

deriva `f(x) = 2 / x + raíz de x`.

1. reescribe: `f(x) = 2x⁻¹ + x¹ᐟ²`.
2. deriva el primer término: `-2x⁻² = -2 / x²`.
3. deriva el segundo: `(1 / 2)x⁻¹ᐟ² = 1 / (2 raíz de x)`.

por lo tanto, `f'(x) = -2 / x² + 1 / (2 raíz de x)`.

## error frecuente

no olvides el signo negativo de un exponente negativo. la derivada de `1 / x` no es `1 / x²`; al derivar `x⁻¹`, el coeficiente es `-1`.

## práctica guiada

1. intenta primero: deriva `g(x) = 1 / x`.
   respuesta: `g'(x) = -1 / x²`, porque `1 / x = x⁻¹`.
2. intenta primero: deriva `h(x) = raíz de x`.
   respuesta: `h'(x) = 1 / (2 raíz de x)`, porque `raíz de x = x¹ᐟ²`.

## comprobación

esta lección tiene cinco reactivos en `question-ids`. sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/pensamiento-matematico.ts`.

## cierre

ya puedes derivar funciones algebraicas no polinomiales al reescribir raíces y cocientes como potencias. revisa en especial el signo de los exponentes negativos.
