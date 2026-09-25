---
id: cn-energia-cinetica-y-potencial-01
area-id: ciencias-naturales-experimentales-y-tecnologia
unit-id: cn-5-2-conservacion-de-la-energia-y-sus-interacciones
topic-id: cn-5-2-4-energia-cinetica-y-potencial
title: Energía cinética y potencial
objective: Calcular variables relacionadas con energía cinética y potencial.
estimated-minutes: 14
prerequisites:
  - cn-tipos-de-energia-01
question-ids:
  - cn-ecp-001
  - cn-ecp-002
  - cn-ecp-003
  - cn-ecp-004
  - cn-ecp-005
source:
  guide: docs/guiaoficial.pdf
  page: 16
  code: 5.2.4
---

# Energía cinética y potencial

## Objetivo

Calcular la energía cinética o la energía potencial gravitatoria de un objeto, y reconocer cómo cambian al variar sus magnitudes.

## Explicación

Estas dos formas de energía mecánica se calculan con fórmulas distintas:

- **Energía cinética** (`Ec`): energía asociada al movimiento de un objeto.

`Ec = (1/2) × m × v²`

Donde `m` es la masa en kilogramos (kg) y `v` es la rapidez en metros por segundo (m/s); el resultado `Ec` se expresa en joules (J).

- **Energía potencial gravitatoria** (`Ep`): energía asociada a la posición de un objeto respecto a una altura de referencia.

`Ep = m × g × h`

Donde `m` es la masa en kilogramos (kg), `g` es la aceleración de la gravedad (aproximadamente `9.8 m/s²` en la superficie terrestre) y `h` es la altura en metros (m); el resultado `Ep` también se expresa en joules (J).

Un punto importante sobre la energía cinética: como la rapidez está elevada al cuadrado, duplicar la rapidez de un objeto no duplica su energía cinética, sino que la cuadruplica.

## Ejemplo resuelto

Calcula la energía cinética de un objeto de masa `5 kg` que se mueve a una rapidez de `4 m/s`.

1. Fórmula: `Ec = (1/2) × m × v²`.
2. Elevar la rapidez al cuadrado: `4² = 16`.
3. Sustitución: `Ec = (1/2) × 5 × 16`.
4. Aritmética: `5 × 16 = 80`; `80 × (1/2) = 40`.
5. Resultado con unidad: `Ec = 40 J`.

## Error frecuente

No olvides el factor `1/2` en la fórmula de energía cinética: multiplicar solo `m × v²` sin dividir entre 2 duplica el resultado correcto. Tampoco olvides elevar la rapidez al cuadrado: usar `v` en lugar de `v²` produce un resultado mucho menor al real.

## Práctica guiada

1. Intenta primero: calcula la energía potencial gravitatoria de un objeto de masa `2 kg` situado a una altura de `8 m`, con `g = 9.8 m/s²`.
   Respuesta: `Ep = m × g × h = 2 × 9.8 × 8 = 156.8 J`.
2. Intenta primero: si la rapidez de un objeto se reduce a la mitad, manteniendo su masa constante, ¿qué ocurre con su energía cinética?
   Respuesta: se reduce a la cuarta parte, porque la energía cinética depende del cuadrado de la rapidez.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Ninguno de los tres reactivos de ejemplo de la guía oficial para ciencias naturales corresponde a este tema; calibran `cn-5-1-1`, `cn-5-2-5` y una unidad posterior. Cada resultado numérico de esta lección y de su banco de preguntas fue verificado de forma independiente, sustituyendo los valores en la fórmula y repitiendo la aritmética paso a paso. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/ciencias-naturales-experimentales-y-tecnologia.ts`.

## Cierre

Ya puedes calcular la energía cinética y la energía potencial gravitatoria de un objeto, y predecir cómo cambia la energía cinética al variar la rapidez. La siguiente y última lección de esta unidad aborda las leyes de la termodinámica.
