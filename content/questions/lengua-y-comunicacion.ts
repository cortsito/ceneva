import type { question } from './types'

export const lengua_y_comunicacion_questions: question[] = [
  {
    id: 'lc-tte-001',
    topic_id: 'lc-6-1-1-titulo-del-texto-expositivo',
    prompt:
      'Texto: "Las abejas polinizan flores mientras se alimentan de néctar, lo que permite la reproducción de muchas plantas frutales. Sin la polinización que realizan, la producción de frutas y verduras en huertos y campos se reduciría de forma importante. Por eso, cuidar las poblaciones de abejas beneficia directamente la producción de alimentos." ¿Cuál título representa mejor la idea principal de este texto?',
    options: [
      'importancia de las abejas para la producción de alimentos',
      'la reproducción de las plantas frutales',
      'el papel de los insectos en la naturaleza'
    ],
    correct_option_index: 0,
    explanation:
      'Las tres oraciones del texto giran alrededor de un mismo eje: el vínculo entre las abejas y la producción de alimentos, por lo que ese título representa el conjunto completo.',
    common_error:
      'Elegir "la reproducción de las plantas frutales" porque aparece en el texto, sin notar que solo nombra el mecanismo mencionado en una oración, no el argumento completo sobre las abejas y los alimentos.',
    source_reference: 'Guía oficial, página 17, código 6.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-tte-002',
    topic_id: 'lc-6-1-1-titulo-del-texto-expositivo',
    prompt:
      'Un título adecuado para un texto expositivo debe nombrar _______, y no un detalle aislado ni una idea más amplia de lo que el texto llega a desarrollar.',
    options: [
      'la idea principal completa que organiza todas las oraciones del texto',
      'el ejemplo más llamativo mencionado en el texto',
      'cualquier tema relacionado, aunque el texto no lo desarrolle'
    ],
    correct_option_index: 0,
    explanation:
      'El título correcto debe representar la idea que organiza y conecta todas las oraciones, no un dato aislado ni un tema más amplio que el texto no desarrolla.',
    common_error:
      'Suponer que basta con que un título mencione un tema relacionado con el texto, sin verificar si el texto en verdad desarrolla ese tema completo.',
    source_reference: 'Guía oficial, página 17, código 6.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tte-003',
    topic_id: 'lc-6-1-1-titulo-del-texto-expositivo',
    prompt:
      'Texto: "El reciclaje de plástico requiere separar los materiales por tipo antes de procesarlos, ya que cada tipo se derrite a una temperatura distinta. Las plantas de reciclaje muelen el plástico limpio en pequeños fragmentos y lo funden para producir nuevos objetos. Gracias a este proceso, cada tonelada de plástico reciclado evita que se fabrique una tonelada de plástico nuevo a partir de petróleo." ¿Cuál título representa mejor la idea principal de este texto?',
    options: [
      'cómo funciona el proceso de reciclaje de plástico',
      'ahorro de petróleo gracias al reciclaje',
      'el uso del plástico en la industria'
    ],
    correct_option_index: 0,
    explanation:
      'El texto explica, en orden, cómo se separa, muele y funde el plástico; el ahorro de petróleo es solo la consecuencia mencionada en la última oración, no el tema completo.',
    common_error:
      'Elegir "ahorro de petróleo gracias al reciclaje" por tomar la última oración como resumen del texto, cuando en realidad solo nombra una consecuencia final del proceso descrito antes.',
    source_reference: 'Guía oficial, página 17, código 6.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tte-004',
    topic_id: 'lc-6-1-1-titulo-del-texto-expositivo',
    prompt:
      'Texto: "Las bibliotecas públicas ofrecen acceso gratuito a libros, computadoras con internet y salas de estudio silenciosas para cualquier persona de la comunidad, sin importar su nivel de ingresos. Muchas también organizan talleres de lectura y actividades culturales gratuitas para niños y adultos." Un lector propone como título "las salas de estudio en las bibliotecas". ¿Por qué este título no representa bien el texto?',
    options: [
      'porque nombra solo uno de los servicios mencionados, no el conjunto de servicios gratuitos que ofrece la biblioteca',
      'porque las bibliotecas públicas no cuentan realmente con salas de estudio',
      'porque el título es más amplio que el texto, al no limitarse a un solo servicio en concreto'
    ],
    correct_option_index: 0,
    explanation:
      'El texto describe varios servicios gratuitos (libros, computadoras, salas de estudio, talleres); un título que solo nombre las salas de estudio representa un detalle, no el conjunto completo.',
    common_error:
      'Diagnosticar el problema del título al revés, calificándolo de "demasiado amplio" cuando en realidad es demasiado estrecho frente al conjunto de servicios que describe el texto.',
    source_reference: 'Guía oficial, página 17, código 6.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tte-005',
    topic_id: 'lc-6-1-1-titulo-del-texto-expositivo',
    prompt:
      'Texto: "Los mercados sobre ruedas ofrecen frutas y verduras frescas a precios más bajos que los supermercados, porque los vendedores no pagan renta fija por un local. Además, permiten a pequeños productores vender directamente sin intermediarios, lo que aumenta sus ganancias. Por estas razones, muchas familias con ingresos limitados prefieren comprar en estos mercados." Relaciona cada título candidato con lo que representa frente a este texto.\n\n1. Ventajas económicas de los mercados sobre ruedas\n2. Los precios de las frutas y verduras\n3. El comercio en México\n\na. Idea principal completa que organiza el texto\nb. Detalle aislado que aparece en el texto\nc. Idea más amplia que el texto no llega a desarrollar',
    options: ['1a, 2b, 3c', '1b, 2a, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      '"Ventajas económicas de los mercados sobre ruedas" cubre los tres beneficios que organiza el texto (a); "los precios de las frutas y verduras" nombra solo un detalle, el precio (b); "el comercio en México" es un tema más amplio que el texto no desarrolla, ya que solo habla de mercados sobre ruedas (c).',
    common_error:
      'Confundir un título más amplio que el texto no desarrolla con la idea principal completa, solo porque suena más general y "seguro".',
    source_reference: 'Guía oficial, página 17, código 6.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rlo-001',
    topic_id: 'lc-6-1-2-relaciones-logicas-entre-oraciones',
    prompt:
      '"El semáforo del cruce dejó de funcionar durante la tormenta. Varios autos chocaron en ese cruce esa misma tarde." ¿Qué relación lógica existe entre estas dos oraciones?',
    options: [
      'relación causal',
      'relación de ejemplificación',
      'no se puede determinar la relación porque las oraciones no usan conectores explícitos'
    ],
    correct_option_index: 0,
    explanation:
      'La falla del semáforo explica por qué ocurrieron los choques: es una relación causal, aunque ningún conector como "porque" la señale explícitamente.',
    common_error:
      'Pensar que, al no haber un conector explícito, no es posible determinar que la falta del semáforo es la causa de los choques.',
    source_reference: 'Guía oficial, página 17, código 6.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-rlo-002',
    topic_id: 'lc-6-1-2-relaciones-logicas-entre-oraciones',
    prompt:
      '"Varios idiomas europeos comparten raíces latinas en gran parte de su vocabulario. El italiano conserva palabras casi idénticas a sus equivalentes en latín." ¿Qué relación lógica existe entre estas dos oraciones?',
    options: [
      'relación causal',
      'relación de ejemplificación',
      'no se puede determinar la relación porque las oraciones no usan conectores explícitos'
    ],
    correct_option_index: 1,
    explanation:
      'La primera oración plantea una afirmación general sobre varios idiomas; el italiano es un caso particular que la ilustra, sin ser su causa: es una relación de ejemplificación, aunque falte un conector como "por ejemplo".',
    common_error:
      'Descartar la relación de ejemplificación solo porque no aparece la palabra "por ejemplo" u otro conector explícito.',
    source_reference: 'Guía oficial, página 17, código 6.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rlo-003',
    topic_id: 'lc-6-1-2-relaciones-logicas-entre-oraciones',
    prompt:
      'En una relación de ejemplificación, la segunda oración presenta un caso particular que _______ la idea general planteada por la primera, sin ser su causa.',
    options: ['ilustra', 'provoca', 'contradice'],
    correct_option_index: 0,
    explanation:
      'En la ejemplificación, el caso particular solo ilustra la idea general ya afirmada; no la provoca ni la contradice.',
    common_error:
      'Confundir "ilustrar" con "provocar", asumiendo que cualquier caso particular mencionado después de una afirmación general la está causando.',
    source_reference: 'Guía oficial, página 17, código 6.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rlo-004',
    topic_id: 'lc-6-1-2-relaciones-logicas-entre-oraciones',
    prompt:
      '"Algunos reptiles cambian de color para camuflarse de sus depredadores. El camaleón, por ejemplo, ajusta el tono de su piel según la superficie donde se encuentra." ¿Por qué esta relación es de ejemplificación y no causal, aunque menciona un caso específico?',
    options: [
      'porque el comportamiento del camaleón no provoca la afirmación general sobre los reptiles, solo la ilustra',
      'porque el camaleón es el único reptil mencionado en el texto',
      'porque la segunda oración ocurre después de la primera en el tiempo'
    ],
    correct_option_index: 0,
    explanation:
      'Que el camaleón sea un caso particular no significa que provoque el hecho general sobre los reptiles; solo lo ejemplifica, por lo que la relación es de ejemplificación.',
    common_error:
      'Confundir el orden en que aparecen las oraciones con una relación de causa y efecto, cuando en realidad la segunda solo ejemplifica el caso general planteado por la primera.',
    source_reference: 'Guía oficial, página 17, código 6.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rlo-005',
    topic_id: 'lc-6-1-2-relaciones-logicas-entre-oraciones',
    prompt:
      'Relaciona cada par de oraciones con el tipo de relación lógica que ejemplifica.\n\n1. "El puente estuvo cerrado por reparaciones durante una semana. El tráfico en las calles cercanas aumentó considerablemente ese mismo período."\n2. "Varios metales conducen la electricidad con facilidad. El cobre, por ejemplo, se usa en cables eléctricos gracias a esa propiedad."\n3. "La fábrica dejó de tratar sus aguas residuales antes de verterlas al río. La población de peces del río disminuyó de forma notable en los meses siguientes."\n\na. Relación causal\nb. Relación de ejemplificación',
    options: ['1a, 2b, 3a', '1b, 2a, 3b', '1a, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El cierre del puente explica el aumento de tráfico (a); el cobre es un caso particular que ilustra la propiedad general de los metales (b); dejar de tratar las aguas explica la disminución de peces (a).',
    common_error:
      'Clasificar el par de la fábrica y el río como ejemplificación por mencionar un caso concreto, sin notar que en realidad describe una causa y su efecto, no una ilustración de una idea general.',
    source_reference: 'Guía oficial, página 17, código 6.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-jmc-001',
    topic_id: 'lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales',
    prompt:
      'Entre los conceptos "animal", "reptil" e "iguana", ¿cuál es el más general, el que debe ubicarse en el nivel más alto de un mapa conceptual?',
    options: ['animal', 'reptil', 'iguana'],
    correct_option_index: 0,
    explanation:
      '"Animal" incluye a "reptil" como subcategoría, y esta a su vez incluye a "iguana" como caso particular; por eso "animal" ocupa el nivel más general.',
    common_error:
      'Elegir "reptil" como el concepto más general solo porque agrupa a "iguana", sin notar que "reptil" es a su vez una subcategoría de "animal".',
    source_reference: 'Guía oficial, página 17, código 6.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-jmc-002',
    topic_id: 'lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales',
    prompt:
      'Entre los conceptos "vehículo", "automóvil" y "sedán", ¿cuál es el más particular, el que debe ubicarse en el nivel más bajo de un mapa conceptual?',
    options: ['sedán', 'automóvil', 'vehículo'],
    correct_option_index: 0,
    explanation:
      '"Sedán" es un caso concreto de "automóvil", que a su vez es un tipo de "vehículo"; "sedán" ya no agrupa a ningún otro concepto, por lo que es el más particular.',
    common_error:
      'Elegir "automóvil" como el concepto más particular por ser el más específico de los dos primeros mencionados, sin comparar también con "sedán".',
    source_reference: 'Guía oficial, página 17, código 6.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-jmc-003',
    topic_id: 'lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales',
    prompt:
      'Ordena, de lo general a lo particular, los siguientes conceptos.\n\n1. Refrigerador de dos puertas\n2. Electrodoméstico\n3. Refrigerador',
    options: ['2, 3, 1', '1, 3, 2', '3, 2, 1'],
    correct_option_index: 0,
    explanation:
      '"Electrodoméstico" (2) es la categoría más general, que incluye a los refrigeradores y a otros aparatos; "refrigerador" (3) es una subcategoría específica de electrodoméstico; "refrigerador de dos puertas" (1) es el caso más particular, una variante concreta de refrigerador.',
    common_error:
      'Colocar "refrigerador" en el nivel más general solo porque aparece primero en el lenguaje cotidiano, sin verificar que "electrodoméstico" lo incluye como categoría.',
    source_reference: 'Guía oficial, página 17, código 6.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-jmc-004',
    topic_id: 'lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales',
    prompt:
      'Ordena, de lo general a lo particular, los siguientes conceptos.\n\n1. Automóvil\n2. Transporte terrestre\n3. Sedán\n4. Transporte',
    options: ['4, 2, 1, 3', '4, 1, 2, 3', '2, 4, 1, 3'],
    correct_option_index: 0,
    explanation:
      '"Transporte" (4) es la categoría más amplia; "transporte terrestre" (2) es una subcategoría que excluye el transporte aéreo y marítimo; "automóvil" (1) es un tipo específico de transporte terrestre; "sedán" (3) es el caso más particular, una variante concreta de automóvil.',
    common_error:
      'Invertir "transporte terrestre" y "automóvil", tratando el medio específico como si fuera la subcategoría más amplia dentro del transporte terrestre.',
    source_reference: 'Guía oficial, página 17, código 6.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-jmc-005',
    topic_id: 'lc-6-1-3-jerarquia-de-informacion-en-mapas-conceptuales',
    prompt:
      'Relaciona cada concepto con el nivel jerárquico que ocupa dentro de este conjunto: "planta", "árbol", "roble".\n\n1. Roble\n2. Planta\n3. Árbol\n\na. Concepto más general, incluye a los otros dos\nb. Concepto más particular, ya no agrupa a ningún otro\nc. Concepto intermedio, subcategoría del general y categoría del particular',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      '"Roble" es un caso específico de árbol y ya no agrupa a ningún otro concepto (b); "planta" es la categoría más general, que incluye a árbol y a otros tipos de plantas (a); "árbol" es intermedio, subcategoría de planta y categoría de roble (c).',
    common_error:
      'Considerar "árbol" como el concepto más general solo porque agrupa a "roble", sin notar que "árbol" es a su vez una subcategoría de "planta".',
    source_reference: 'Guía oficial, página 17, código 6.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ftc-001',
    topic_id: 'lc-6-1-4-formas-textuales-de-comunicacion',
    prompt:
      '"La novela narra la vida de una mujer que emigra a otra ciudad en busca de trabajo, enfrenta dificultades para adaptarse, encuentra apoyo en una comunidad de vecinos y finalmente logra establecer su propio negocio." ¿Qué forma textual es este texto?',
    options: ['resumen', 'relato simple', 'reseña'],
    correct_option_index: 0,
    explanation:
      'El texto condensa el argumento completo de la novela, de principio a fin, sin emitir ninguna valoración: es un resumen.',
    common_error:
      'Confundirlo con un relato simple por describir una secuencia de sucesos, sin notar que aquí se condensa el conjunto de la obra en unas pocas ideas, en lugar de narrar hechos puntuales uno por uno.',
    source_reference: 'Guía oficial, página 17, código 6.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-ftc-002',
    topic_id: 'lc-6-1-4-formas-textuales-de-comunicacion',
    prompt:
      '"La mujer subió al autobús a las seis de la mañana, llegó a la central dos horas después, preguntó por trabajo en cinco talleres y fue contratada en el último que visitó." ¿Qué forma textual es este texto?',
    options: ['relato simple', 'resumen', 'comentario crítico'],
    correct_option_index: 0,
    explanation:
      'El texto narra una secuencia concreta de hechos en el orden en que ocurrieron, sin condensar una obra completa ni emitir ningún juicio: es un relato simple.',
    common_error:
      'Confundirlo con un resumen por presentar varios sucesos seguidos, sin notar que aquí se narran hechos puntuales uno por uno, sin condensar el conjunto de una obra más amplia.',
    source_reference: 'Guía oficial, página 17, código 6.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ftc-003',
    topic_id: 'lc-6-1-4-formas-textuales-de-comunicacion',
    prompt:
      '"El documental combina buenas entrevistas y una fotografía cuidada, aunque su ritmo es lento en el segundo acto; aun así, vale la pena verlo si te interesa el tema." ¿Qué forma textual es este texto?',
    options: ['reseña', 'comentario crítico', 'resumen'],
    correct_option_index: 0,
    explanation:
      'El texto evalúa el documental en concreto (entrevistas, fotografía, ritmo) para orientar la decisión de verlo o no: es una reseña, limitada a esa obra puntual.',
    common_error:
      'Confundirlo con un comentario crítico solo porque incluye una opinión, sin notar que el texto se limita a valorar la obra en sí misma y no la usa para argumentar sobre una idea más amplia.',
    source_reference: 'Guía oficial, página 17, código 6.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ftc-004',
    topic_id: 'lc-6-1-4-formas-textuales-de-comunicacion',
    prompt:
      '"El documental muestra, sin cuestionarlo, cómo se presenta el ecoturismo como solución automática a la pobreza rural, sin abordar las desigualdades estructurales que enfrentan las comunidades involucradas." ¿Qué forma textual es este texto?',
    options: ['comentario crítico', 'reseña', 'relato simple'],
    correct_option_index: 0,
    explanation:
      'El texto usa el documental como punto de partida para argumentar sobre una idea más amplia —las desigualdades estructurales—, en lugar de solo evaluar su calidad: es un comentario crítico.',
    common_error:
      'Confundirlo con una reseña por hablar de un documental en concreto, sin notar que el texto no evalúa la obra para recomendarla, sino que la usa para sostener una postura sobre un tema más amplio.',
    source_reference: 'Guía oficial, página 17, código 6.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ftc-005',
    topic_id: 'lc-6-1-4-formas-textuales-de-comunicacion',
    prompt:
      'Relaciona cada texto con la forma textual que representa.\n\n1. "La nueva aplicación de finanzas personales tiene una interfaz clara y fácil de usar, aunque las notificaciones a veces llegan tarde; en general, es una buena opción para quien empieza a organizar sus gastos."\n2. "El informe explica cómo se recolectaron los datos, qué método se usó para analizarlos y qué conclusiones se obtuvieron sobre el consumo de agua en la región durante el último año."\n3. "El grupo salió de la terminal a las siete, hizo una parada de veinte minutos a medio camino, llegó al pueblo antes del mediodía y armó el campamento junto al río."\n4. "La promoción de una nueva variedad de fruta importada como opción \'saludable\' en supermercados oculta que su transporte desde otro continente genera una huella de carbono mucho mayor que la de frutas locales de temporada."\n\na. Resumen\nb. Relato simple\nc. Reseña\nd. Comentario crítico',
    options: ['1c, 2a, 3b, 4d', '1d, 2a, 3b, 4c', '1c, 2b, 3a, 4d'],
    correct_option_index: 0,
    explanation:
      'El texto 1 evalúa una aplicación puntual para orientar su uso (reseña, c); el texto 2 condensa el contenido de un informe sin opinión (resumen, a); el texto 3 narra una secuencia de hechos en orden (relato simple, b); el texto 4 usa un caso puntual para argumentar sobre una idea más amplia, la huella de carbono del transporte de alimentos (comentario crítico, d).',
    common_error:
      'Intercambiar reseña y comentario crítico, o resumen y relato simple, por ser los pares que la lección señala como más fáciles de confundir entre sí.',
    source_reference: 'Guía oficial, página 17, código 6.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
