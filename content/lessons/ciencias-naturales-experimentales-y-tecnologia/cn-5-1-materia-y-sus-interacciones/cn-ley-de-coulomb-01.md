---
id: cn-ley-de-coulomb-01
area-id: ciencias-naturales-experimentales-y-tecnologia
unit-id: cn-5-1-materia-y-sus-interacciones
topic-id: cn-5-1-5-ley-de-coulomb
title: ley de coulomb
objective: calcular variables de atracción o repulsión entre cargas eléctricas.
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

# ley de coulomb

## objetivo

calcular la fuerza eléctrica entre dos cargas puntuales con la ley de coulomb, y determinar si esa fuerza es de atracción o de repulsión.

## explicación

la ley de coulomb describe la fuerza eléctrica entre dos cargas puntuales:

`f = k × (q₁ × q₂) / r²`

donde `f` es la fuerza en newtons (n), `k` es la constante de coulomb (`8.99 × 10⁹ n·m²/c²`), `q₁` y `q₂` son las cargas en coulombs (c), y `r` es la distancia entre las cargas en metros (m).

la magnitud de la fuerza depende de dos cosas: crece con el producto de las cargas, y disminuye con el cuadrado de la distancia entre ellas —al duplicar la distancia, la fuerza no se reduce a la mitad, sino a la cuarta parte, porque `r` está elevada al cuadrado.

el signo de las cargas no afecta la magnitud de la fuerza, sino su dirección: si ambas cargas tienen el mismo signo (las dos positivas o las dos negativas), la fuerza es de repulsión; si tienen signos opuestos, la fuerza es de atracción.

## ejemplo resuelto

calcula la fuerza eléctrica entre dos cargas positivas: `q₁ = 2 × 10⁻⁶ c` y `q₂ = 3 × 10⁻⁶ c`, separadas por una distancia `r = 0.5 m`.

1. fórmula: `f = k × (q₁ × q₂) / r²`
2. sustitución: `f = (8.99 × 10⁹) × (2 × 10⁻⁶ × 3 × 10⁻⁶) / (0.5)²`
3. aritmética del numerador: `2 × 10⁻⁶ × 3 × 10⁻⁶ = 6 × 10⁻¹²`; `8.99 × 10⁹ × 6 × 10⁻¹² = 53.94 × 10⁻³ = 0.05394`
4. aritmética del denominador: `(0.5)² = 0.25`
5. división: `0.05394 ÷ 0.25 = 0.216`
6. resultado con unidad: `f ≈ 0.216 n`
7. interpretación del signo: como ambas cargas son positivas (mismo signo), la fuerza es de repulsión.

## error frecuente

no olvides elevar la distancia al cuadrado: usar `r` en lugar de `r²` en el denominador es el error más común y produce una fuerza mucho mayor a la real. también revisa las unidades de la carga antes de sustituir: si un dato viene en microcoulombs (µc), primero conviértelo a coulombs (multiplicando por `10⁻⁶`) antes de usarlo en la fórmula.

## práctica guiada

1. intenta primero: calcula la fuerza eléctrica entre `q₁ = 4 × 10⁻⁶ c` y `q₂ = −2 × 10⁻⁶ c`, separadas por `r = 0.2 m`. ¿la fuerza es de atracción o de repulsión?
   respuesta: `f = k × (q₁ × q₂) / r² = (8.99 × 10⁹) × (4 × 10⁻⁶ × 2 × 10⁻⁶) / (0.2)²`. numerador: `4 × 10⁻⁶ × 2 × 10⁻⁶ = 8 × 10⁻¹²`; `8.99 × 10⁹ × 8 × 10⁻¹² = 71.92 × 10⁻³ = 0.07192`. denominador: `(0.2)² = 0.04`. `f = 0.07192 ÷ 0.04 = 1.798 n ≈ 1.8 n`. como las cargas tienen signos opuestos, la fuerza es de atracción.
2. intenta primero: si se duplica la distancia entre dos cargas, manteniendo las cargas constantes, ¿qué ocurre con la fuerza eléctrica?
   respuesta: la fuerza se reduce a la cuarta parte. como la ley de coulomb es inversamente proporcional al cuadrado de la distancia, al duplicar `r`, el valor de `r²` se multiplica por 4, y por lo tanto `f` se divide entre 4.

## comprobación

esta lección tiene cinco reactivos reservados en `question-ids`. sus enunciados, opciones, respuestas y explicaciones se incorporarán al banco tipado en el paso 4.

## cierre

ya puedes calcular la fuerza eléctrica entre dos cargas con la ley de coulomb, sustituyendo valores paso a paso, y determinar si esa fuerza es de atracción o de repulsión a partir del signo de las cargas.
