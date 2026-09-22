---
id: cn-ley-de-coulomb-01
area-id: ciencias-naturales-experimentales-y-tecnologia
unit-id: cn-5-1-materia-y-sus-interacciones
topic-id: cn-5-1-5-ley-de-coulomb
title: Ley de Coulomb
objective: Calcular variables de atracción o repulsión entre cargas eléctricas.
estimated-minutes: 12
prerequisites: []
question-ids:
  - cn-lco-001
  - cn-lco-002
  - cn-lco-003
  - cn-lco-004
  - cn-lco-005
source:
  guide: docs/guiaoficial.pdf
  page: 15
  code: 5.1.5
---

# Ley de Coulomb

## Objetivo

Calcular la fuerza eléctrica entre dos cargas puntuales con la ley de Coulomb, y determinar si esa fuerza es de atracción o de repulsión.

## Explicación

La ley de Coulomb describe la fuerza eléctrica entre dos cargas puntuales:

`f = k × (q₁ × q₂) / r²`

Donde `f` es la fuerza en newtons (N), `k` es la constante de Coulomb (`8.99 × 10⁹ N·m²/C²`), `q₁` y `q₂` son las cargas en coulombs (C), y `r` es la distancia entre las cargas en metros (m).

La magnitud de la fuerza depende de dos cosas: crece con el producto de las cargas, y disminuye con el cuadrado de la distancia entre ellas —al duplicar la distancia, la fuerza no se reduce a la mitad, sino a la cuarta parte, porque `r` está elevada al cuadrado.

El signo de las cargas no afecta la magnitud de la fuerza, sino su dirección: si ambas cargas tienen el mismo signo (las dos positivas o las dos negativas), la fuerza es de repulsión; si tienen signos opuestos, la fuerza es de atracción.

## Ejemplo resuelto

Calcula la fuerza eléctrica entre dos cargas positivas: `q₁ = 2 × 10⁻⁶ C` y `q₂ = 3 × 10⁻⁶ C`, separadas por una distancia `r = 0.5 m`.

1. Fórmula: `f = k × (q₁ × q₂) / r²`
2. Sustitución: `f = (8.99 × 10⁹) × (2 × 10⁻⁶ × 3 × 10⁻⁶) / (0.5)²`
3. Aritmética del numerador: `2 × 10⁻⁶ × 3 × 10⁻⁶ = 6 × 10⁻¹²`; `8.99 × 10⁹ × 6 × 10⁻¹² = 53.94 × 10⁻³ = 0.05394`
4. Aritmética del denominador: `(0.5)² = 0.25`
5. División: `0.05394 ÷ 0.25 = 0.216`
6. Resultado con unidad: `f ≈ 0.216 N`
7. Interpretación del signo: como ambas cargas son positivas (mismo signo), la fuerza es de repulsión.

## Error frecuente

No olvides elevar la distancia al cuadrado: usar `r` en lugar de `r²` en el denominador es el error más común y produce una fuerza mucho mayor a la real. También revisa las unidades de la carga antes de sustituir: si un dato viene en microcoulombs (µC), primero conviértelo a coulombs (multiplicando por `10⁻⁶`) antes de usarlo en la fórmula.

## Práctica guiada

1. Intenta primero: calcula la fuerza eléctrica entre `q₁ = 4 × 10⁻⁶ C` y `q₂ = −2 × 10⁻⁶ C`, separadas por `r = 0.2 m`. ¿La fuerza es de atracción o de repulsión?
   Respuesta: `f = k × (q₁ × q₂) / r² = (8.99 × 10⁹) × (4 × 10⁻⁶ × 2 × 10⁻⁶) / (0.2)²`. Numerador: `4 × 10⁻⁶ × 2 × 10⁻⁶ = 8 × 10⁻¹²`; `8.99 × 10⁹ × 8 × 10⁻¹² = 71.92 × 10⁻³ = 0.07192`. Denominador: `(0.2)² = 0.04`. `f = 0.07192 ÷ 0.04 = 1.798 N ≈ 1.8 N`. Como las cargas tienen signos opuestos, la fuerza es de atracción.
2. Intenta primero: si se duplica la distancia entre dos cargas, manteniendo las cargas constantes, ¿qué ocurre con la fuerza eléctrica?
   Respuesta: la fuerza se reduce a la cuarta parte. Como la ley de Coulomb es inversamente proporcional al cuadrado de la distancia, al duplicar `r`, el valor de `r²` se multiplica por 4, y por lo tanto `f` se divide entre 4.

## Comprobación

Esta lección tiene cinco reactivos reservados en `question-ids`. Sus enunciados, opciones, respuestas y explicaciones están disponibles en `content/questions/ciencias-naturales-experimentales-y-tecnologia.ts`.

## Cierre

Ya puedes calcular la fuerza eléctrica entre dos cargas con la ley de Coulomb, sustituyendo valores paso a paso, y determinar si esa fuerza es de atracción o de repulsión a partir del signo de las cargas.
