import type { question } from './types'

export const lengua_y_comunicacion_questions: question[] = [
  {
    id: 'lc-tte-001',
    topic_id: 'lc-6-1-1-titulo-del-texto-expositivo',
    stimulus:
      'Las abejas polinizan flores mientras se alimentan de néctar, lo que permite la reproducción de muchas plantas frutales. Sin la polinización que realizan, la producción de frutas y verduras en huertos y campos se reduciría de forma importante. Por eso, cuidar las poblaciones de abejas beneficia directamente la producción de alimentos.',
    prompt: '¿Cuál título representa mejor la idea principal de este texto?',
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
    stimulus:
      'El reciclaje de plástico requiere separar los materiales por tipo antes de procesarlos, ya que cada tipo se derrite a una temperatura distinta. Las plantas de reciclaje muelen el plástico limpio en pequeños fragmentos y lo funden para producir nuevos objetos. Gracias a este proceso, cada tonelada de plástico reciclado evita que se fabrique una tonelada de plástico nuevo a partir de petróleo.',
    prompt: '¿Cuál título representa mejor la idea principal de este texto?',
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
    stimulus:
      'Las bibliotecas públicas ofrecen acceso gratuito a libros, computadoras con internet y salas de estudio silenciosas para cualquier persona de la comunidad, sin importar su nivel de ingresos. Muchas también organizan talleres de lectura y actividades culturales gratuitas para niños y adultos.',
    prompt:
      'Un lector propone como título "las salas de estudio en las bibliotecas". ¿Por qué este título no representa bien el texto?',
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
    stimulus:
      'Los mercados sobre ruedas ofrecen frutas y verduras frescas a precios más bajos que los supermercados, porque los vendedores no pagan renta fija por un local. Además, permiten a pequeños productores vender directamente sin intermediarios, lo que aumenta sus ganancias. Por estas razones, muchas familias con ingresos limitados prefieren comprar en estos mercados.',
    prompt:
      'Relaciona cada título candidato con lo que representa frente a este texto.\n\n1. Ventajas económicas de los mercados sobre ruedas\n2. Los precios de las frutas y verduras\n3. El comercio en México\n\na. Idea principal completa que organiza el texto\nb. Detalle aislado que aparece en el texto\nc. Idea más amplia que el texto no llega a desarrollar',
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
  },
  {
    id: 'lc-tcn-001',
    topic_id: 'lc-6-2-2-tema-central-del-texto-literario-narrativo',
    stimulus:
      'Desde niño, Ernesto ahorró cada moneda que caía en sus manos, convencido de que algún día tendría suficiente para sentirse seguro. A los setenta años, con una fortuna considerable, seguía revisando sus cuentas cada noche, incapaz de disfrutar ni un solo gasto sin culpa.',
    prompt: '¿Cuál es el tema central de este texto?',
    options: [
      'ahorró dinero desde que era niño',
      'el miedo a la escasez puede convertirse en una prisión, incluso con abundancia',
      'la importancia de tener una cuenta bancaria'
    ],
    correct_option_index: 1,
    explanation:
      'El tema central no es el hecho de que ahorró dinero (eso es la trama), sino la idea general que ese hábito ilustra: el miedo a la escasez puede convertirse en una prisión, incluso cuando ya se tiene abundancia.',
    common_error:
      'Confundir el tema central con un hecho concreto de la trama ("ahorró dinero desde que era niño"), en lugar de identificar la idea general que ese hecho ilustra.',
    source_reference: 'Guía oficial, página 17, código 6.2.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-tcn-002',
    topic_id: 'lc-6-2-2-tema-central-del-texto-literario-narrativo',
    stimulus:
      'Marisol dejó su ciudad natal para estudiar en el extranjero. Cada vez que regresaba de visita, notaba que sus amigos hablaban de cosas que ya no entendía, y que su cuarto de la infancia, sin cambios, ya no se sentía suyo.',
    prompt: '¿Cuál es el tema central de este texto?',
    options: [
      'el distanciamiento que provoca el paso del tiempo y la distancia',
      'estudió en el extranjero',
      'decoró su cuarto de la infancia'
    ],
    correct_option_index: 0,
    explanation:
      'El texto ilustra, a través de los detalles del reencuentro con sus amigos y su cuarto, el distanciamiento que provocan el tiempo y la distancia entre quien se va y el lugar que deja atrás.',
    common_error:
      'Elegir "estudió en el extranjero" por ser el hecho más mencionado en el texto, sin notar que es solo la causa del distanciamiento, no el tema en sí.',
    source_reference: 'Guía oficial, página 17, código 6.2.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tcn-003',
    topic_id: 'lc-6-2-2-tema-central-del-texto-literario-narrativo',
    prompt:
      'El tema central de un texto narrativo es ___, mientras que la trama es ___.',
    options: [
      'la idea general que atraviesa la historia - la secuencia de hechos concretos que ocurren',
      'la secuencia de hechos concretos que ocurren - la idea general que atraviesa la historia',
      'el lugar donde ocurre la historia - los personajes que participan en ella'
    ],
    correct_option_index: 0,
    explanation:
      'El tema central es la idea general que atraviesa toda la historia; la trama es la secuencia de hechos concretos que ocurren y que ilustran esa idea.',
    common_error:
      'Invertir ambos conceptos, asumiendo que el tema central es la secuencia de hechos y la trama la idea general, cuando es al revés.',
    source_reference: 'Guía oficial, página 17, código 6.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tcn-004',
    topic_id: 'lc-6-2-2-tema-central-del-texto-literario-narrativo',
    stimulus:
      'Los hermanos Ruiz no se hablaban desde la muerte de su madre, ambos convencidos de que el otro tenía la culpa del reparto injusto de la herencia. Diez años después, al enterarse de que Joaquín estaba gravemente enfermo, Beatriz tomó un autobús de doce horas para verlo por última vez.',
    prompt: '¿Cuál es el tema central de este texto?',
    options: [
      'la herencia que dejó la madre',
      'el perdón y la reconciliación familiar por encima de un conflicto antiguo',
      'viajó doce horas en autobús'
    ],
    correct_option_index: 1,
    explanation:
      'El viaje de Beatriz para ver a Joaquín, a pesar de diez años de distancia, ilustra el perdón y la reconciliación familiar por encima de un conflicto antiguo; la herencia y el viaje en autobús son solo hechos de la trama.',
    common_error:
      'Elegir "la herencia que dejó la madre" por ser la causa original del conflicto, sin notar que el texto se centra en su resolución, no en su origen.',
    source_reference: 'Guía oficial, página 17, código 6.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tcn-005',
    topic_id: 'lc-6-2-2-tema-central-del-texto-literario-narrativo',
    prompt:
      'Relaciona cada texto con su tema central.\n\n1. "Cada verano, don Aurelio pintaba la fachada de su casa del mismo azul que eligió su esposa antes de morir, aunque ya nadie más lo notara."\n2. "Valentina practicó violín seis horas diarias durante quince años, rechazando invitaciones y celebraciones, hasta ganar el concurso que había soñado desde niña."\n3. "El pueblo entero salió a reconstruir el puente después de la tormenta, cada familia aportando lo que tenía, sin que nadie llevara la cuenta de quién dio más."\n\na. La solidaridad colectiva frente a una adversidad compartida\nb. La memoria y la fidelidad a un ser querido ausente\nc. El sacrificio personal como precio de una meta ambiciosa',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El texto 1 ilustra la memoria y fidelidad a un ser querido ausente (1b); el texto 2, el sacrificio personal como precio de una meta ambiciosa (2c); el texto 3, la solidaridad colectiva frente a una adversidad compartida (3a).',
    common_error:
      'Confundir el texto 2 con solidaridad colectiva por tratarse de un logro admirable, sin notar que describe un esfuerzo individual y aislado, no una acción compartida por un grupo.',
    source_reference: 'Guía oficial, página 17, código 6.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-trn-001',
    topic_id: 'lc-6-2-3-trama-del-texto-literario-narrativo',
    stimulus:
      'Un joven ingeniero acepta su primer empleo en una planta remota. Durante su primera semana, descubre que los reportes de seguridad han sido falsificados durante años para ocultar fallas graves. Decide entonces investigar en secreto y reunir pruebas antes de denunciar.',
    prompt: '¿Cuál es el nudo de este texto?',
    options: [
      'aceptó su primer empleo en una planta remota',
      'decidió investigar en secreto y reunir pruebas',
      'el descubrimiento de que los reportes de seguridad fueron falsificados durante años'
    ],
    correct_option_index: 2,
    explanation:
      'El nudo es el momento en que surge el conflicto que rompe el equilibrio inicial: el descubrimiento de que los reportes de seguridad fueron falsificados. Aceptar el empleo es el planteamiento; investigar en secreto ya pertenece al desenlace.',
    common_error:
      'Confundir el nudo con la reacción del personaje ("decidió investigar en secreto"), que en realidad es la respuesta al conflicto, no el conflicto mismo.',
    source_reference: 'Guía oficial, página 17, código 6.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-trn-002',
    topic_id: 'lc-6-2-3-trama-del-texto-literario-narrativo',
    stimulus:
      'Una pareja organiza con meses de anticipación su boda en la playa. Dos días antes del evento, un huracán obliga a cancelar todos los vuelos de los invitados. Al final, deciden casarse solo con quienes ya habían llegado, en una ceremonia improvisada.',
    prompt: '¿Cuál es el nudo de este texto?',
    options: [
      'un huracán obliga a cancelar los vuelos de los invitados dos días antes de la boda',
      'organizaron con meses de anticipación su boda en la playa',
      'decidieron casarse solo con quienes ya habían llegado'
    ],
    correct_option_index: 0,
    explanation:
      'El nudo es el huracán que cancela los vuelos de los invitados, el conflicto que rompe el plan inicial. Organizar la boda es el planteamiento; casarse con quienes llegaron es el desenlace.',
    common_error:
      'Elegir el desenlace ("decidieron casarse solo con quienes ya habían llegado") como si fuera el nudo, sin notar que es la resolución del conflicto, no su origen.',
    source_reference: 'Guía oficial, página 17, código 6.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-trn-003',
    topic_id: 'lc-6-2-3-trama-del-texto-literario-narrativo',
    prompt:
      'El nudo de un texto narrativo es ___, a diferencia del planteamiento, que es ___.',
    options: [
      'el conflicto que rompe el equilibrio inicial - la situación inicial antes de que exista un problema',
      'la situación inicial antes de que exista un problema - el conflicto que rompe el equilibrio inicial',
      'la forma en que se resuelve el conflicto - el conflicto que lo origina'
    ],
    correct_option_index: 0,
    explanation:
      'El nudo es el conflicto que rompe el equilibrio inicial; el planteamiento es la situación de partida, antes de que exista ese problema.',
    common_error:
      'Invertir ambos conceptos, asumiendo que el planteamiento es el conflicto y el nudo la situación inicial.',
    source_reference: 'Guía oficial, página 17, código 6.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-trn-004',
    topic_id: 'lc-6-2-3-trama-del-texto-literario-narrativo',
    stimulus:
      'Un equipo de científicos lleva años desarrollando una vacuna experimental. Cuando por fin está lista para probarse, un brote de la enfermedad estalla antes de lo previsto en una ciudad cercana al laboratorio. El equipo decide acelerar las pruebas y ofrecer la vacuna de emergencia a la población afectada.',
    prompt: '¿Cuál de las siguientes opciones corresponde al desenlace de este texto, y no al nudo?',
    options: [
      'el equipo decide acelerar las pruebas y ofrecer la vacuna de emergencia',
      'un brote de la enfermedad estalla antes de lo previsto',
      'el equipo lleva años desarrollando una vacuna'
    ],
    correct_option_index: 0,
    explanation:
      'El desenlace es la reacción del equipo ante el conflicto: acelerar las pruebas y ofrecer la vacuna. El brote de la enfermedad es el nudo; desarrollar la vacuna durante años es el planteamiento.',
    common_error:
      'Confundir el desenlace con el nudo, eligiendo "un brote de la enfermedad estalla" sin notar que la pregunta pide la reacción posterior al conflicto, no el conflicto mismo.',
    source_reference: 'Guía oficial, página 17, código 6.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-trn-005',
    topic_id: 'lc-6-2-3-trama-del-texto-literario-narrativo',
    prompt:
      'Relaciona cada fragmento con la parte de la trama que representa.\n\n1. "Los vecinos vivían en paz, sin conocer aún la noticia que cambiaría todo."\n2. "El pueblo entero se enteró esa mañana de que la fábrica, su única fuente de empleo, cerraría en un mes."\n3. "Después de semanas de protestas, el gobierno estatal acordó instalar un nuevo parque industrial en su lugar."\n\na. Desenlace\nb. Planteamiento\nc. Nudo',
    options: ['1b, 2c, 3a', '1c, 2a, 3b', '1a, 2b, 3c'],
    correct_option_index: 0,
    explanation:
      'El fragmento 1 describe la situación inicial sin conflicto (planteamiento, 1b); el fragmento 2, el conflicto que rompe ese equilibrio (nudo, 2c); el fragmento 3, la resolución del conflicto (desenlace, 3a).',
    common_error:
      'Confundir el planteamiento con el nudo, asumiendo que "vivían en paz" ya anticipa el conflicto, cuando en realidad describe la situación previa a él.',
    source_reference: 'Guía oficial, página 17, código 6.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pnj-001',
    topic_id: 'lc-6-2-4-caracteristicas-y-acciones-de-personajes',
    stimulus:
      'Durante la cena, Renata escuchó atentamente cada palabra de su abuela, aunque ya conocía de memoria esa misma historia contada cien veces antes.',
    prompt: '¿Qué tipo de caracterización usa el texto para mostrar la paciencia y el cariño de Renata?',
    options: [
      'caracterización directa, porque el texto dice explícitamente que Renata es paciente',
      'caracterización indirecta, porque se infiere de su acción de escuchar con atención una historia repetida',
      'no hay caracterización, porque el texto no describe ningún rasgo de Renata'
    ],
    correct_option_index: 1,
    explanation:
      'El texto nunca dice directamente que Renata es paciente o cariñosa; ese rasgo se infiere de su acción de escuchar con atención una historia que ya conocía: es caracterización indirecta.',
    common_error:
      'Asumir que no hay caracterización porque el texto no nombra el rasgo directamente, sin notar que la acción descrita sí revela un rasgo de forma indirecta.',
    source_reference: 'Guía oficial, página 17, código 6.2.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-pnj-002',
    topic_id: 'lc-6-2-4-caracteristicas-y-acciones-de-personajes',
    stimulus:
      'En la historia, un explorador busca un templo perdido en la selva; un cazatesoros rival intenta llegar primero, saboteando su equipo durante la noche.',
    prompt: '¿Quién es el antagonista de esta historia?',
    options: [
      'el cazatesoros rival, porque se opone al objetivo del explorador',
      'el explorador, porque busca el templo perdido',
      'el templo perdido, porque es el objetivo de ambos personajes'
    ],
    correct_option_index: 0,
    explanation:
      'El antagonista es el personaje que se opone al objetivo del protagonista; aquí, el cazatesoros rival sabotea al explorador para impedir que logre su meta.',
    common_error:
      'Confundir un objeto o lugar (el templo perdido) con un personaje; el antagonista siempre es un personaje u obstáculo que actúa en contra del protagonista.',
    source_reference: 'Guía oficial, página 17, código 6.2.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pnj-003',
    topic_id: 'lc-6-2-4-caracteristicas-y-acciones-de-personajes',
    prompt:
      'La caracterización directa consiste en ___, mientras que la caracterización indirecta consiste en ___.',
    options: [
      'describir explícitamente un rasgo del personaje - inferir un rasgo a partir de sus acciones o palabras',
      'inferir un rasgo a partir de sus acciones o palabras - describir explícitamente un rasgo del personaje',
      'nombrar al protagonista - nombrar al antagonista'
    ],
    correct_option_index: 0,
    explanation:
      'La caracterización directa describe explícitamente un rasgo del personaje; la indirecta lo infiere a partir de sus acciones, palabras o decisiones, sin nombrarlo de forma directa.',
    common_error:
      'Invertir ambos conceptos, asumiendo que la caracterización directa es la que se infiere de las acciones.',
    source_reference: 'Guía oficial, página 17, código 6.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pnj-004',
    topic_id: 'lc-6-2-4-caracteristicas-y-acciones-de-personajes',
    stimulus:
      'Aunque el texto nunca lo dice, cada vez que alguien menciona el nombre de su antiguo socio, Fernando cambia de tema y sale de la habitación.',
    prompt: '¿Qué tipo de caracterización usa el texto, y qué podría revelar sobre Fernando?',
    options: [
      'caracterización indirecta; podría revelar un conflicto no resuelto o incomodidad con ese tema',
      'caracterización directa; el texto afirma que Fernando tiene un conflicto no resuelto',
      'no hay caracterización, porque el texto no menciona ningún rasgo de personalidad'
    ],
    correct_option_index: 0,
    explanation:
      'El texto nunca afirma que Fernando tiene un conflicto no resuelto; ese rasgo se infiere de su reacción evasiva cada vez que se menciona a su antiguo socio, lo cual es caracterización indirecta.',
    common_error:
      'Elegir "caracterización directa" solo porque la inferencia parece obvia, sin notar que el texto nunca lo afirma explícitamente.',
    source_reference: 'Guía oficial, página 17, código 6.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pnj-005',
    topic_id: 'lc-6-2-4-caracteristicas-y-acciones-de-personajes',
    prompt:
      'Relaciona cada acción de un personaje con el rasgo que revela de forma indirecta.\n\n1. Recoge cada moneda que encuentra en la calle y las guarda en un frasco sin gastarlas nunca.\n2. Cede su asiento en el autobús a cualquier persona mayor, incluso cuando está agotado.\n3. Revisa tres veces que la puerta esté cerrada antes de poder dormir.\n\na. Generosidad\nb. Ansiedad o desconfianza\nc. Avaricia o apego al dinero',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'Guardar cada moneda sin gastarla revela avaricia o apego al dinero (1c); ceder el asiento incluso agotado revela generosidad (2a); revisar la puerta repetidamente revela ansiedad o desconfianza (3b).',
    common_error:
      'Confundir la acción 3 con generosidad por ser un hábito cuidadoso, sin notar que revisar compulsivamente algo revela ansiedad, no una virtud hacia otros.',
    source_reference: 'Guía oficial, página 17, código 6.2.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-nar-001',
    topic_id: 'lc-6-2-5-caracteristicas-del-narrador',
    stimulus:
      'Caminé hasta la orilla del río, sintiendo el peso de cada decisión que había tomado ese año, sin saber todavía si había hecho lo correcto.',
    prompt: '¿Qué tipo de narrador tiene este texto?',
    options: [
      'narrador testigo, porque narra en primera persona lo que le pasa a otro personaje',
      'narrador omnisciente, porque conoce los pensamientos de todos los personajes',
      'narrador protagonista, porque narra en primera persona los hechos que él mismo vive'
    ],
    correct_option_index: 2,
    explanation:
      'El texto usa "caminé" y "sentí" en primera persona, y el propio narrador es quien vive los hechos y toma las decisiones que describe: es un narrador protagonista.',
    common_error:
      'Confundir el narrador protagonista con el testigo solo por usar primera persona, sin notar que aquí el "yo" es el centro de la acción narrada, no un observador de otro personaje.',
    source_reference: 'Guía oficial, página 17, código 6.2.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-nar-002',
    topic_id: 'lc-6-2-5-caracteristicas-del-narrador',
    stimulus:
      'Ella entró a la sala sin saber que, minutos antes, su esposo había decidido en secreto renunciar a su trabajo y no se atrevía a decírselo.',
    prompt: '¿Qué tipo de narrador tiene este texto?',
    options: [
      'narrador omnisciente, porque conoce el pensamiento secreto del esposo que ningún personaje presente conoce',
      'narrador protagonista, porque cuenta la historia en primera persona',
      'narrador observador, porque solo describe lo que puede verse desde fuera'
    ],
    correct_option_index: 0,
    explanation:
      'El narrador conoce una decisión secreta del esposo que ni siquiera ella conoce, y lo cuenta en tercera persona: es un narrador omnisciente, con acceso a los pensamientos internos de los personajes.',
    common_error:
      'Elegir "narrador observador" al ver la tercera persona, sin notar que un narrador observador no podría conocer una decisión secreta no expresada de ningún modo visible.',
    source_reference: 'Guía oficial, página 17, código 6.2.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-nar-003',
    topic_id: 'lc-6-2-5-caracteristicas-del-narrador',
    prompt:
      'El narrador testigo cuenta la historia en ___ persona, mientras que el narrador omnisciente lo hace en ___ persona.',
    options: ['primera - tercera', 'tercera - primera', 'primera - primera'],
    correct_option_index: 0,
    explanation:
      'El narrador testigo usa primera persona, porque es un personaje de la historia que observa los hechos; el narrador omnisciente usa tercera persona, y conoce los pensamientos de todos los personajes.',
    common_error:
      'Invertir ambas personas gramaticales, asumiendo que el narrador testigo usa tercera persona.',
    source_reference: 'Guía oficial, página 17, código 6.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-nar-004',
    topic_id: 'lc-6-2-5-caracteristicas-del-narrador',
    stimulus:
      'Mi hermana entró al cuarto, se sentó junto a la ventana y se quedó mirando el jardín durante casi una hora, sin decir una sola palabra.',
    prompt:
      '¿Qué tipo de narrador tiene este texto, considerando que solo describe lo que puede observar de su hermana, sin conocer sus pensamientos?',
    options: [
      'narrador testigo, porque narra en primera persona lo que observa de otro personaje',
      'narrador protagonista, porque es el centro de la acción narrada',
      'narrador omnisciente, porque conoce los pensamientos de su hermana'
    ],
    correct_option_index: 0,
    explanation:
      'El narrador usa primera persona ("mi hermana") pero no es el centro de la acción: solo observa a su hermana desde fuera, sin conocer sus pensamientos. Es un narrador testigo.',
    common_error:
      'Elegir "narrador omnisciente" al asumir que cualquier narración detallada implica conocer los pensamientos del personaje, cuando aquí solo se describe lo observable.',
    source_reference: 'Guía oficial, página 17, código 6.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-nar-005',
    topic_id: 'lc-6-2-5-caracteristicas-del-narrador',
    prompt:
      'Relaciona cada fragmento con el tipo de narrador que lo caracteriza.\n\n1. "Sentí que el aire me faltaba mientras corría hacia la estación, sabiendo que el tren no me esperaría."\n2. "Ambos se despidieron en la puerta; ninguno de los dos imaginaba lo que el otro pensaba en ese momento."\n3. "Vi a mi vecina regar sus plantas cada mañana, sin saber todavía por qué había dejado de saludarme."\n\na. Narrador testigo\nb. Narrador protagonista\nc. Narrador omnisciente',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El fragmento 1 narra en primera persona los hechos que el propio narrador vive (protagonista, 1b); el fragmento 2 conoce los pensamientos de ambos personajes desde fuera (omnisciente, 2c); el fragmento 3 narra en primera persona lo que observa de otro personaje (testigo, 3a).',
    common_error:
      'Confundir el fragmento 2 con un narrador testigo por estar en tercera persona, sin notar que conoce los pensamientos internos de los personajes, algo que un testigo no podría saber.',
    source_reference: 'Guía oficial, página 17, código 6.2.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-amb-001',
    topic_id: 'lc-6-2-6-ambito-de-la-narracion',
    stimulus:
      'La historia ocurre en un pequeño puerto pesquero de la costa, en los años previos a la llegada de la electricidad, cuando las familias de pescadores y las de comerciantes apenas se relacionaban entre sí.',
    prompt: '¿Qué componente del ámbito describe la frase "en los años previos a la llegada de la electricidad"?',
    options: [
      'el ámbito espacial, porque describe un lugar físico',
      'el ámbito temporal, porque sitúa la historia en una época',
      'el ámbito social, porque describe una relación entre grupos'
    ],
    correct_option_index: 1,
    explanation:
      'La frase sitúa la historia en un momento histórico (antes de la electricidad), lo cual corresponde al ámbito temporal, distinto del lugar físico (ámbito espacial) o las relaciones entre grupos (ámbito social).',
    common_error:
      'Confundir el ámbito temporal con el espacial, asumiendo que cualquier detalle de contexto describe el lugar físico de la historia.',
    source_reference: 'Guía oficial, página 17, código 6.2.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-amb-002',
    topic_id: 'lc-6-2-6-ambito-de-la-narracion',
    stimulus:
      'En el internado, los estudiantes de familias adineradas comían en un comedor aparte del resto, una costumbre que nadie cuestionaba abiertamente.',
    prompt: '¿Qué componente del ámbito describe este fragmento?',
    options: [
      'el ámbito social, porque describe una relación entre clases o grupos',
      'el ámbito temporal, porque sitúa la historia en una época',
      'el ámbito espacial, porque describe un lugar físico'
    ],
    correct_option_index: 0,
    explanation:
      'El fragmento describe una relación de clase entre los estudiantes adinerados y el resto, una costumbre social aceptada sin cuestionamiento: es el ámbito social.',
    common_error:
      'Elegir el ámbito espacial por mencionarse un comedor, sin notar que el dato relevante es la relación de clase entre los grupos de estudiantes, no el lugar en sí.',
    source_reference: 'Guía oficial, página 17, código 6.2.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-amb-003',
    topic_id: 'lc-6-2-6-ambito-de-la-narracion',
    prompt:
      'El ámbito espacial de una narración describe ___, mientras que el ámbito temporal describe ___.',
    options: [
      'el lugar físico donde ocurren los hechos - la época o momento histórico en que transcurre la historia',
      'la época o momento histórico en que transcurre la historia - el lugar físico donde ocurren los hechos',
      'las costumbres de los personajes - el lugar físico donde ocurren los hechos'
    ],
    correct_option_index: 0,
    explanation:
      'El ámbito espacial describe el lugar físico donde ocurren los hechos; el ámbito temporal describe la época o momento histórico en que transcurre la historia.',
    common_error:
      'Invertir ambos componentes, asumiendo que el ámbito espacial describe la época de la historia.',
    source_reference: 'Guía oficial, página 17, código 6.2.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-amb-004',
    topic_id: 'lc-6-2-6-ambito-de-la-narracion',
    stimulus:
      'La acción transcurre en un campamento militar improvisado en medio del desierto, durante los meses más intensos de un conflicto armado que ya llevaba tres años.',
    prompt: '¿Qué dos componentes del ámbito identifica principalmente este fragmento?',
    options: [
      'el ámbito espacial (el desierto) y el ámbito temporal (los meses de un conflicto de tres años)',
      'el ámbito social (la jerarquía militar) y el ámbito espacial (el desierto)',
      'solo el ámbito temporal, porque no se menciona ningún lugar concreto'
    ],
    correct_option_index: 0,
    explanation:
      'El fragmento describe un lugar físico concreto (el desierto, ámbito espacial) y sitúa la historia en un momento avanzado de un conflicto de tres años (ámbito temporal); no describe relaciones entre clases o grupos.',
    common_error:
      'Elegir el ámbito social al asumir que "campamento militar" implica jerarquía, sin que el fragmento describa ninguna relación concreta entre grupos.',
    source_reference: 'Guía oficial, página 17, código 6.2.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-amb-005',
    topic_id: 'lc-6-2-6-ambito-de-la-narracion',
    prompt:
      'Relaciona cada fragmento con el componente del ámbito que describe principalmente.\n\n1. "La acción ocurre en una hacienda azucarera del Caribe, a orillas de un río caudaloso."\n2. "Corría el año 1910, poco antes de que estallara la Revolución mexicana."\n3. "Los capataces comían aparte de los trabajadores del campo, en una mesa reservada solo para ellos."\n\na. Ámbito social\nb. Ámbito temporal\nc. Ámbito espacial',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'El fragmento 1 describe un lugar físico (ámbito espacial, 1c); el fragmento 2 sitúa la historia en un momento histórico (ámbito temporal, 2b); el fragmento 3 describe una relación de clase entre grupos (ámbito social, 3a).',
    common_error:
      'Confundir el fragmento 1 con el ámbito temporal por mencionar una hacienda histórica, sin notar que el dato central es el lugar físico, no una época.',
    source_reference: 'Guía oficial, página 17, código 6.2.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpn-001',
    topic_id: 'lc-6-2-7-tipos-de-tiempo-narrativo',
    stimulus:
      'Rodrigo se despertó, desayunó en silencio, tomó el autobús hacia la oficina y, ya en su escritorio, comenzó a revisar los pendientes del día.',
    prompt: '¿Qué tipo de tiempo narrativo usa este texto?',
    options: [
      'tiempo retrospectivo, porque el texto retrocede a un hecho anterior',
      'no tiene tiempo narrativo definido, porque no se puede determinar el orden de los hechos',
      'tiempo lineal, porque los hechos se narran en el mismo orden en que ocurrieron'
    ],
    correct_option_index: 2,
    explanation:
      'Los hechos se presentan en el mismo orden en que ocurrieron —despertar, desayunar, tomar el autobús, llegar a la oficina—, sin ningún retroceso: es tiempo lineal.',
    common_error:
      'Buscar un retroceso temporal donde no lo hay, clasificando como retrospectivo un texto que en realidad avanza siempre hacia adelante.',
    source_reference: 'Guía oficial, página 17, código 6.2.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpn-002',
    topic_id: 'lc-6-2-7-tipos-de-tiempo-narrativo',
    stimulus:
      'Sentada en la sala de espera del hospital, Camila recordó la tarde en que, tres años atrás, había conocido a Diego en esa misma cafetería que ahora estaba cerrada.',
    prompt: '¿Qué tipo de tiempo narrativo usa este texto?',
    options: [
      'tiempo retrospectivo, porque el texto comienza en un momento y retrocede a un hecho anterior',
      'tiempo lineal, porque los hechos avanzan siempre hacia adelante',
      'no tiene tiempo narrativo definido, porque el texto no menciona ninguna fecha'
    ],
    correct_option_index: 0,
    explanation:
      'El texto comienza con Camila en la sala de espera y retrocede tres años a un hecho anterior, el día en que conoció a Diego: es tiempo retrospectivo.',
    common_error:
      'Elegir "tiempo lineal" solo porque la historia recordada se cuenta en orden, sin notar que el texto completo retrocede desde el presente hacia ese recuerdo.',
    source_reference: 'Guía oficial, página 17, código 6.2.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpn-003',
    topic_id: 'lc-6-2-7-tipos-de-tiempo-narrativo',
    prompt:
      'El tiempo lineal narra los hechos ___, mientras que el tiempo retrospectivo comienza en un punto avanzado de la historia y luego ___.',
    options: [
      'en el mismo orden en que ocurrieron - retrocede para narrar hechos anteriores',
      'retrocediendo a hechos anteriores - avanza hacia el final de la historia',
      'sin ningún orden reconocible - se detiene por completo'
    ],
    correct_option_index: 0,
    explanation:
      'El tiempo lineal narra los hechos en el mismo orden en que ocurrieron; el tiempo retrospectivo comienza en un punto avanzado y luego retrocede para narrar hechos anteriores.',
    common_error:
      'Invertir ambas definiciones, asumiendo que el tiempo lineal es el que retrocede a hechos anteriores.',
    source_reference: 'Guía oficial, página 17, código 6.2.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpn-004',
    topic_id: 'lc-6-2-7-tipos-de-tiempo-narrativo',
    stimulus:
      'El texto narra, en este orden: el nacimiento de un pueblo minero, su crecimiento durante décadas de bonanza, y finalmente su abandono cuando se agotó el mineral.',
    prompt: '¿Qué tipo de tiempo narrativo usa este texto?',
    options: [
      'tiempo lineal, porque los hechos se presentan en el orden cronológico en que ocurrieron',
      'tiempo retrospectivo, porque comienza por el abandono del pueblo y luego retrocede',
      'no es posible determinarlo con la información dada'
    ],
    correct_option_index: 0,
    explanation:
      'Los hechos se presentan en el orden cronológico real —nacimiento, crecimiento, abandono—, sin ningún retroceso: es tiempo lineal.',
    common_error:
      'Suponer que cualquier narración sobre un proceso histórico largo debe ser retrospectiva, sin verificar si el texto realmente retrocede en algún punto.',
    source_reference: 'Guía oficial, página 17, código 6.2.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpn-005',
    topic_id: 'lc-6-2-7-tipos-de-tiempo-narrativo',
    prompt:
      'Relaciona cada fragmento con el tipo de tiempo narrativo que usa.\n\n1. "Plantó el árbol de niño; lo vio crecer durante su juventud; a sus ochenta años, todavía se sentaba bajo su sombra cada tarde."\n2. "De pie frente al espejo, con el vestido de novia ya puesto, recordó la primera cita, torpe y nerviosa, de la que nunca pensó que llegaría hasta aquí."\n3. "Compró el terreno, construyó la casa, sembró el jardín y, años después, recibió ahí a sus nietos por primera vez."\n\na. Tiempo lineal\nb. Tiempo retrospectivo',
    options: ['1a, 2b, 3a', '1b, 2a, 3a', '1a, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Los fragmentos 1 y 3 narran los hechos en el orden en que ocurrieron (tiempo lineal, 1a y 3a); el fragmento 2 comienza en un momento avanzado (frente al espejo, ya con el vestido puesto) y retrocede a la primera cita (tiempo retrospectivo, 2b).',
    common_error:
      'Clasificar el fragmento 2 como lineal por narrar el recuerdo en un solo momento, sin notar que el texto retrocede desde el presente (frente al espejo) hacia un hecho anterior (la primera cita).',
    source_reference: 'Guía oficial, página 17, código 6.2.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cde-001',
    topic_id: 'lc-6-3-1-etapas-para-la-composicion-de-un-ensayo',
    prompt:
      'Antes de escribir una sola línea de su ensayo, un estudiante hace una lista con los libros y artículos que va a revisar sobre su tema. ¿En qué etapa de composición del ensayo se encuentra?',
    options: ['organización de las ideas', 'consulta de fuentes', 'redacción del texto'],
    correct_option_index: 1,
    explanation:
      'Buscar y revisar información relacionada con el tema, antes de organizarla o redactar, corresponde a la etapa de consulta de fuentes.',
    common_error:
      'Confundir la consulta de fuentes con la organización de las ideas, sin notar que el estudiante todavía no ha empezado a ordenar ninguna información, solo la está reuniendo.',
    source_reference: 'Guía oficial, página 17, código 6.3.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-cde-002',
    topic_id: 'lc-6-3-1-etapas-para-la-composicion-de-un-ensayo',
    prompt:
      'Un estudiante decide que su ensayo buscará persuadir al lector de adoptar una postura, antes de reunir cualquier información sobre el tema. ¿En qué etapa se encuentra?',
    options: ['establecimiento del propósito', 'consulta de fuentes', 'redacción del texto'],
    correct_option_index: 0,
    explanation:
      'Definir qué se busca lograr con el texto —en este caso, persuadir— corresponde al establecimiento del propósito, una etapa previa a reunir información.',
    common_error:
      'Asumir que definir un propósito persuasivo ya implica haber consultado fuentes, cuando ambas etapas son independientes y el propósito puede definirse antes.',
    source_reference: 'Guía oficial, página 17, código 6.3.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cde-003',
    topic_id: 'lc-6-3-1-etapas-para-la-composicion-de-un-ensayo',
    prompt:
      'La etapa de organización de las ideas ocurre después de ___ y antes de ___.',
    options: [
      'la consulta de fuentes - la definición de la estructura',
      'la definición de la estructura - la consulta de fuentes',
      'la redacción del texto - la selección del tema'
    ],
    correct_option_index: 0,
    explanation:
      'La organización de las ideas ocurre después de reunir información en la consulta de fuentes, y antes de decidir cómo se dividirá el texto en la definición de la estructura.',
    common_error:
      'Invertir el orden, asumiendo que la organización de las ideas ocurre después de definir la estructura del texto.',
    source_reference: 'Guía oficial, página 17, código 6.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cde-004',
    topic_id: 'lc-6-3-1-etapas-para-la-composicion-de-un-ensayo',
    prompt:
      'Un estudiante ya reunió toda su información y ahora arma un esquema con los puntos principales que desarrollará, antes de decidir en qué orden aparecerán en el texto final. ¿En qué etapa está?',
    options: [
      'organización de las ideas',
      'consulta de fuentes',
      'definición de la estructura'
    ],
    correct_option_index: 0,
    explanation:
      'Armar un esquema con los puntos principales, a partir de información ya reunida, corresponde a la organización de las ideas, previa a decidir la estructura final del texto.',
    common_error:
      'Confundir esta etapa con la definición de la estructura, sin notar que el estudiante todavía no decide cómo se dividirá el texto (introducción, desarrollo, conclusión), solo ordena sus ideas.',
    source_reference: 'Guía oficial, página 17, código 6.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cde-005',
    topic_id: 'lc-6-3-1-etapas-para-la-composicion-de-un-ensayo',
    prompt:
      'Ordena las etapas de composición de un ensayo, desde la primera hasta la última.\n\n1. Selección del tema\n2. Establecimiento del propósito\n3. Consulta de fuentes\n4. Organización de las ideas\n5. Definición de la estructura\n6. Redacción del texto',
    options: ['1, 2, 3, 4, 5, 6', '2, 1, 3, 4, 5, 6', '1, 3, 2, 4, 5, 6'],
    correct_option_index: 0,
    explanation:
      'El orden correcto es selección del tema (1), establecimiento del propósito (2), consulta de fuentes (3), organización de las ideas (4), definición de la estructura (5) y redacción del texto (6).',
    common_error:
      'Invertir la selección del tema con el establecimiento del propósito, sin notar que primero se elige sobre qué se escribirá antes de definir qué se busca lograr con ese tema.',
    source_reference: 'Guía oficial, página 17, código 6.3.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfi-001',
    topic_id: 'lc-6-3-2-tipos-de-fuentes-de-informacion',
    prompt:
      'Un investigador transcribe, sin ninguna edición, una carta manuscrita escrita por un soldado durante una guerra. ¿Qué tipo de fuente es esta transcripción?',
    options: ['fuente secundaria', 'fuente terciaria', 'fuente primaria'],
    correct_option_index: 2,
    explanation:
      'La transcripción sin edición de un documento original es un dato de primera mano, sin reelaborar: es fuente primaria.',
    common_error:
      'Clasificarla como fuente secundaria por tratarse de una transcripción, sin notar que transcribir sin editar ni sintetizar no reelabora la información original.',
    source_reference: 'Guía oficial, página 17, código 6.3.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfi-002',
    topic_id: 'lc-6-3-2-tipos-de-fuentes-de-informacion',
    prompt:
      'Un artículo resume y reorganiza la información de varias entrevistas originales realizadas a sobrevivientes de un terremoto. ¿Qué tipo de fuente es este artículo?',
    options: ['fuente secundaria', 'fuente primaria', 'fuente terciaria'],
    correct_option_index: 0,
    explanation:
      'El artículo presenta información primaria (las entrevistas originales) de manera sintetizada y reorganizada: es fuente secundaria.',
    common_error:
      'Confundirlo con fuente primaria por basarse en entrevistas originales, sin notar que el artículo mismo reelabora y sintetiza esa información, en lugar de presentarla sin cambios.',
    source_reference: 'Guía oficial, página 17, código 6.3.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfi-003',
    topic_id: 'lc-6-3-2-tipos-de-fuentes-de-informacion',
    prompt: 'Una fuente terciaria se distingue de una secundaria porque ___.',
    options: [
      'además de sintetizar información primaria y secundaria, la analiza e interpreta',
      'presenta únicamente datos de primera mano sin ninguna reelaboración',
      'nunca hace referencia a fuentes primarias'
    ],
    correct_option_index: 0,
    explanation:
      'La fuente terciaria no solo sintetiza información primaria y secundaria, como la secundaria, sino que además la analiza e interpreta.',
    common_error:
      'Confundir la fuente terciaria con la primaria, asumiendo que "datos de primera mano sin reelaboración" describe a la terciaria, cuando en realidad describe a la primaria.',
    source_reference: 'Guía oficial, página 17, código 6.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfi-004',
    topic_id: 'lc-6-3-2-tipos-de-fuentes-de-informacion',
    prompt:
      'Una bibliografía comentada que evalúa y compara la confiabilidad de varios estudios y reseñas sobre un tema. ¿Qué tipo de fuente es?',
    options: ['fuente terciaria', 'fuente primaria', 'fuente secundaria'],
    correct_option_index: 0,
    explanation:
      'Evaluar y comparar estudios y reseñas (fuentes secundarias) es un análisis e interpretación de ese material: es fuente terciaria.',
    common_error:
      'Clasificarla como fuente secundaria por basarse en reseñas y estudios, sin notar que la bibliografía comentada añade un nivel de análisis e interpretación propio de las fuentes terciarias.',
    source_reference: 'Guía oficial, página 17, código 6.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfi-005',
    topic_id: 'lc-6-3-2-tipos-de-fuentes-de-informacion',
    prompt:
      'Relaciona cada texto con el tipo de fuente de información que representa.\n\n1. El registro de temperaturas diarias tomado directamente por una estación meteorológica.\n2. Un reporte que resume y organiza los registros de varias estaciones meteorológicas de una región.\n3. Un estudio que compara e interpreta ese reporte junto con otros análisis climáticos previos.\n\na. Fuente secundaria\nb. Fuente terciaria\nc. Fuente primaria',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'El registro directo de temperaturas es fuente primaria (1c); el reporte que resume varios registros es fuente secundaria (2a); el estudio que compara e interpreta ese reporte es fuente terciaria (3b).',
    common_error:
      'Confundir el reporte regional (2) con fuente primaria, sin notar que ya reorganiza y sintetiza los registros originales de varias estaciones.',
    source_reference: 'Guía oficial, página 17, código 6.3.2; calibración de profundidad: página 37.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rac-001',
    topic_id: 'lc-6-3-3-reglas-de-acentuacion',
    prompt:
      "La palabra \"compás\" se pronuncia con fuerza en su última sílaba y termina en \"s\". ¿Cómo se clasifica y lleva tilde?",
    options: ['es grave y no lleva tilde', 'es aguda y lleva tilde', 'es esdrújula y lleva tilde'],
    correct_option_index: 1,
    explanation:
      'El acento en la última sílaba clasifica a la palabra como aguda; como termina en "s", debe llevar tilde.',
    common_error:
      'Aplicar la regla de las palabras graves (que llevan tilde cuando NO terminan en "n", "s" o vocal) a una palabra aguda, cuya regla es la opuesta.',
    source_reference: 'Guía oficial, página 17, código 6.3.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-rac-002',
    topic_id: 'lc-6-3-3-reglas-de-acentuacion',
    prompt:
      "La palabra \"examen\" se pronuncia con fuerza en su penúltima sílaba y termina en \"n\". ¿Lleva tilde?",
    options: [
      "no, porque es grave y termina en \"n\"",
      "sí, porque es aguda y termina en \"n\"",
      'sí, porque es esdrújula'
    ],
    correct_option_index: 0,
    explanation:
      'El acento en la penúltima sílaba clasifica a la palabra como grave; las palabras graves llevan tilde cuando NO terminan en "n", "s" o vocal, así que "examen" no la lleva.',
    common_error:
      'Aplicar la regla de las agudas (llevan tilde si terminan en "n", "s" o vocal) a una palabra grave, cuya regla es la opuesta.',
    source_reference: 'Guía oficial, página 17, código 6.3.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rac-003',
    topic_id: 'lc-6-3-3-reglas-de-acentuacion',
    prompt:
      'Las palabras esdrújulas y sobresdrújulas ___ tilde, sin importar en qué letra terminen.',
    options: ['siempre llevan', 'nunca llevan', 'llevan solo si terminan en vocal'],
    correct_option_index: 0,
    explanation:
      'A diferencia de las agudas y las graves, cuya tilde depende de en qué letra terminan, las esdrújulas y sobresdrújulas siempre llevan tilde.',
    common_error:
      'Aplicar a las esdrújulas la misma condición de "terminar en cierta letra" que rige a las agudas y graves, cuando en realidad siempre llevan tilde.',
    source_reference: 'Guía oficial, página 17, código 6.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rac-004',
    topic_id: 'lc-6-3-3-reglas-de-acentuacion',
    prompt:
      "La palabra \"cómpramelo\" se pronuncia con fuerza antes de su antepenúltima sílaba. ¿Cómo se clasifica?",
    options: ['sobresdrújula', 'esdrújula', 'grave'],
    correct_option_index: 0,
    explanation:
      'Cuando el acento recae antes de la antepenúltima sílaba, la palabra se clasifica como sobresdrújula, y siempre lleva tilde.',
    common_error:
      'Confundir la sobresdrújula con la esdrújula, sin contar correctamente que el acento cae una sílaba antes de la antepenúltima.',
    source_reference: 'Guía oficial, página 17, código 6.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rac-005',
    topic_id: 'lc-6-3-3-reglas-de-acentuacion',
    prompt:
      'Relaciona cada palabra con su clasificación según la sílaba donde recae el acento.\n\n1. Médico (acento en la antepenúltima sílaba)\n2. Ciudad (acento en la última sílaba)\n3. Lápiz (acento en la penúltima sílaba)\n\na. Aguda\nb. Esdrújula\nc. Grave',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      '"Médico" tiene el acento en la antepenúltima sílaba: esdrújula (1b). "Ciudad" tiene el acento en la última: aguda (2a). "Lápiz" tiene el acento en la penúltima: grave (3c).',
    common_error:
      'Confundir "ciudad" con una palabra grave por su terminación en consonante, sin notar que su acento recae en la última sílaba, lo que la hace aguda.',
    source_reference: 'Guía oficial, página 17, código 6.3.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rpu-001',
    topic_id: 'lc-6-3-4-reglas-de-puntuacion',
    prompt:
      '"El tren llegó con dos horas de retraso___ Los pasajeros estaban furiosos." ¿Qué signo falta en el espacio?',
    options: ['dos puntos', 'coma', 'punto'],
    correct_option_index: 2,
    explanation:
      'El espacio separa dos enunciados independientes y completos en sí mismos: necesita un punto.',
    common_error:
      'Colocar dos puntos, pensando que lo que sigue es una cita textual o una enumeración, cuando en realidad es un enunciado completamente independiente.',
    source_reference: 'Guía oficial, página 18, código 6.3.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-rpu-002',
    topic_id: 'lc-6-3-4-reglas-de-puntuacion',
    prompt:
      '"La receta lleva los siguientes ingredientes___ harina, huevo, azúcar y mantequilla." ¿Qué signo falta en el espacio?',
    options: ['punto', 'coma', 'dos puntos'],
    correct_option_index: 2,
    explanation:
      'El espacio anuncia una enumeración de ingredientes: necesita dos puntos.',
    common_error:
      'Colocar una coma, sin notar que la función de anunciar una enumeración completa corresponde a los dos puntos, no a la coma.',
    source_reference: 'Guía oficial, página 18, código 6.3.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rpu-003',
    topic_id: 'lc-6-3-4-reglas-de-puntuacion',
    prompt: 'Los dos puntos se usan para anunciar ___, mientras que el punto separa ___.',
    options: [
      'una cita textual o una enumeración - dos enunciados independientes',
      'dos enunciados independientes - una cita textual o una enumeración',
      'una pregunta directa - una exclamación'
    ],
    correct_option_index: 0,
    explanation:
      'Los dos puntos anuncian una cita textual, una enumeración o una explicación; el punto separa dos enunciados independientes.',
    common_error:
      'Invertir ambas funciones, asumiendo que el punto es el que anuncia una enumeración.',
    source_reference: 'Guía oficial, página 18, código 6.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rpu-004',
    topic_id: 'lc-6-3-4-reglas-de-puntuacion',
    prompt:
      'Relaciona cada situación con el signo de puntuación que necesita.\n\n1. Separar dos enunciados completos e independientes.\n2. Anunciar una cita textual o una enumeración.\n3. Separar elementos dentro de una enumeración.\n\na. Coma\nb. Dos puntos\nc. Punto',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'Separar dos enunciados independientes requiere un punto (1c); anunciar una cita textual o enumeración requiere dos puntos (2b); separar elementos de una enumeración requiere una coma (3a).',
    common_error:
      'Confundir el punto con los dos puntos, sin notar que el punto separa enunciados completos e independientes, mientras que los dos puntos anuncian lo que sigue.',
    source_reference: 'Guía oficial, página 18, código 6.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rpu-005',
    topic_id: 'lc-6-3-4-reglas-de-puntuacion',
    prompt:
      '"La entrenadora llegó temprano al gimnasio___ Los atletas ya estaban calentando. Ella preguntó___ ¿Están listos para la competencia___". Selecciona los signos de puntuación faltantes que le dan sentido al texto, en orden.',
    options: [
      'punto - dos puntos - cierre de interrogación',
      'coma - punto - apertura de interrogación',
      'dos puntos - coma - cierre de exclamación'
    ],
    correct_option_index: 0,
    explanation:
      'El primer espacio separa dos enunciados independientes: punto. El segundo anuncia la pregunta textual de la entrenadora: dos puntos. El tercero cierra la pregunta que ya abre con "¿": cierre de interrogación.',
    common_error:
      'Colocar una coma en el primer espacio, sin notar que separa dos enunciados completos e independientes, función que corresponde al punto, no a la coma.',
    source_reference: 'Guía oficial, página 18, código 6.3.4; calibración de profundidad: página 38.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-uds-001',
    topic_id: 'lc-6-3-5-funcion-de-unidades-sintacticas',
    prompt: 'En la oración "El carpintero construyó una mesa", ¿cuál es el complemento directo?',
    options: ['el carpintero', 'una mesa', 'construyó'],
    correct_option_index: 1,
    explanation:
      '"Una mesa" recibe directamente la acción del verbo "construyó": es el complemento directo.',
    common_error:
      'Confundir el complemento directo con el sujeto, eligiendo "el carpintero" en lugar de identificar qué elemento recibe la acción del verbo.',
    source_reference: 'Guía oficial, página 18, código 6.3.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-uds-002',
    topic_id: 'lc-6-3-5-funcion-de-unidades-sintacticas',
    prompt:
      'En la oración "Los abuelos contaron historias a sus nietos toda la tarde", ¿cuál es el complemento indirecto?',
    options: ['historias', 'toda la tarde', 'a sus nietos'],
    correct_option_index: 2,
    explanation:
      '"A sus nietos" es quien recibe el beneficio de la acción de contar: es el complemento indirecto.',
    common_error:
      'Confundir el complemento indirecto con el directo, eligiendo "historias" en lugar del destinatario introducido por "a".',
    source_reference: 'Guía oficial, página 18, código 6.3.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-uds-003',
    topic_id: 'lc-6-3-5-funcion-de-unidades-sintacticas',
    prompt: 'El sujeto de una oración es ___, mientras que el predicado es ___.',
    options: [
      'quien realiza la acción - lo que se dice del sujeto, y siempre contiene el verbo',
      'lo que se dice del sujeto - quien realiza la acción',
      'el verbo de la oración - el complemento directo'
    ],
    correct_option_index: 0,
    explanation:
      'El sujeto es quien realiza la acción o de quien se dice algo; el predicado es lo que se dice del sujeto y siempre contiene el verbo.',
    common_error:
      'Invertir ambas definiciones, asumiendo que el predicado es quien realiza la acción.',
    source_reference: 'Guía oficial, página 18, código 6.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-uds-004',
    topic_id: 'lc-6-3-5-funcion-de-unidades-sintacticas',
    prompt:
      'En la oración "El equipo celebró la victoria en el estadio", ¿cuál es el complemento circunstancial?',
    options: ['la victoria', 'en el estadio', 'el equipo'],
    correct_option_index: 1,
    explanation:
      '"En el estadio" indica el lugar donde ocurre la acción: es el complemento circunstancial.',
    common_error:
      'Confundir el complemento circunstancial con el directo, eligiendo "la victoria" en lugar del elemento que indica una circunstancia de lugar.',
    source_reference: 'Guía oficial, página 18, código 6.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-uds-005',
    topic_id: 'lc-6-3-5-funcion-de-unidades-sintacticas',
    prompt:
      'Relaciona cada fragmento con la unidad sintáctica que representa en la oración "La bibliotecaria le prestó un libro a la estudiante durante el fin de semana".\n\n1. "Prestó"\n2. "Un libro"\n3. "A la estudiante"\n\na. Complemento indirecto\nb. Complemento directo\nc. Núcleo del predicado (verbo)',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      '"Prestó" es el verbo que funciona como núcleo del predicado (1c). "Un libro" recibe la acción del verbo: complemento directo (2b). "A la estudiante" es la beneficiaria de la acción: complemento indirecto (3a). El predicado completo incluye el núcleo y sus complementos.',
    common_error:
      'Confundir el complemento directo con el indirecto, sin notar que "un libro" es la cosa prestada y "a la estudiante" es quien la recibe.',
    source_reference: 'Guía oficial, página 18, código 6.3.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cht-001',
    topic_id: 'lc-6-3-6-coherencia-de-un-texto',
    prompt:
      'En una secuencia de enunciados desordenados, ¿qué tipo de enunciado normalmente debe ir primero?',
    options: [
      'el que describe una consecuencia de un hecho anterior',
      'el que presenta el tema o la idea central',
      'el que cierra o concluye la secuencia'
    ],
    correct_option_index: 1,
    explanation:
      'El enunciado que presenta el tema o la idea central debe ir primero, porque introduce de qué tratará el resto del texto.',
    common_error:
      'Colocar primero un enunciado que describe una consecuencia, sin notar que el lector todavía no conoce el hecho que la provoca.',
    source_reference: 'Guía oficial, página 18, código 6.3.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-cht-002',
    topic_id: 'lc-6-3-6-coherencia-de-un-texto',
    prompt:
      'Un enunciado describe una reacción a un hecho que todavía no se ha mencionado en la secuencia. ¿Dónde debe colocarse ese enunciado?',
    options: [
      'antes del hecho que provoca la reacción',
      'después del hecho que provoca la reacción',
      'al inicio de la secuencia, sin importar el hecho'
    ],
    correct_option_index: 1,
    explanation:
      'Una reacción debe colocarse después del hecho que la provoca, para que el lector entienda a qué está reaccionando.',
    common_error:
      'Colocar la reacción antes del hecho que la provoca, generando un texto que menciona algo que el lector todavía no conoce.',
    source_reference: 'Guía oficial, página 18, código 6.3.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cht-003',
    topic_id: 'lc-6-3-6-coherencia-de-un-texto',
    prompt: 'Un texto es coherente cuando ___.',
    options: [
      'sus ideas siguen un orden lógico que permite entenderlo sin confusión',
      'usa el mayor número posible de palabras técnicas',
      'menciona el mayor número de ejemplos posible'
    ],
    correct_option_index: 0,
    explanation:
      'La coherencia de un texto depende de que sus ideas sigan un orden lógico, no de la cantidad de vocabulario técnico o de ejemplos que use.',
    common_error:
      'Asociar la coherencia con la cantidad de información o vocabulario, en lugar de con el orden lógico de las ideas.',
    source_reference: 'Guía oficial, página 18, código 6.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cht-004',
    topic_id: 'lc-6-3-6-coherencia-de-un-texto',
    prompt:
      'Ordena los enunciados para que formen un texto coherente.\n\n1. El volcán hizo erupción sin previo aviso.\n2. Los científicos habían instalado sensores meses atrás para monitorear su actividad.\n3. Miles de personas fueron evacuadas de inmediato.\n4. Los sensores registraron un aumento de actividad sísmica en las semanas previas.',
    options: ['2, 4, 1, 3', '1, 2, 4, 3', '4, 2, 1, 3'],
    correct_option_index: 0,
    explanation:
      'El orden coherente es: instalar los sensores (2), su registro de actividad sísmica (4), la erupción (1) y la evacuación consecuente (3).',
    common_error:
      'Colocar la erupción (1) antes de la instalación de los sensores (2), sin notar que los sensores debieron instalarse antes de poder registrar cualquier actividad.',
    source_reference: 'Guía oficial, página 18, código 6.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cht-005',
    topic_id: 'lc-6-3-6-coherencia-de-un-texto',
    prompt:
      'Ordena los enunciados de manera que formen un párrafo coherente.\n\n1. Cada colonia se organiza en torno a una única reina que pone todos los huevos.\n2. Las abejas obreras salen a recolectar néctar y polen de las flores cercanas.\n3. Una colmena silvestre puede albergar miles de abejas trabajando en conjunto.\n4. Ese alimento se almacena después en panales para alimentar a toda la colonia durante el invierno.',
    options: ['3, 1, 2, 4', '1, 3, 2, 4', '4, 2, 1, 3'],
    correct_option_index: 0,
    explanation:
      'El orden coherente es: presentar la colmena y su organización general (3), describir su estructura jerárquica (1), el trabajo de recolección de las obreras (2) y finalmente el almacenamiento de ese alimento (4).',
    common_error:
      'Colocar el almacenamiento del alimento (4) antes de mencionar que las obreras lo recolectan (2), sin notar que la recolección debe ocurrir antes de poder almacenar nada.',
    source_reference: 'Guía oficial, página 18, código 6.3.6; calibración de profundidad: página 38.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-adt-001',
    topic_id: 'lc-6-3-7-adecuacion-de-un-texto',
    prompt: 'En un mensaje de texto entre amigos, ¿cuál expresión es más adecuada?',
    options: [
      'por medio de la presente, le informo que llegué',
      'oye, ya llegué, te veo en un rato',
      'hago de su conocimiento mi arribo'
    ],
    correct_option_index: 1,
    explanation:
      'Entre amigos y en un mensaje de texto, el contexto es informal, por lo que una expresión coloquial y cercana es la más adecuada.',
    common_error:
      'Elegir una expresión formal por considerarla "más correcta", sin notar que el contexto informal exige un registro distinto, no necesariamente el más formal.',
    source_reference: 'Guía oficial, página 18, código 6.3.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-adt-002',
    topic_id: 'lc-6-3-7-adecuacion-de-un-texto',
    prompt: 'En una carta formal dirigida a una autoridad escolar, ¿cuál expresión es más adecuada?',
    options: [
      'oye, necesito que me des una constancia',
      'me dirijo a usted para solicitar una constancia de estudios',
      'pásame la constancia cuando puedas'
    ],
    correct_option_index: 1,
    explanation:
      'Una carta dirigida a una autoridad exige un registro formal, sin coloquialismos ni expresiones familiares.',
    common_error:
      'Elegir una expresión coloquial por ser más directa, sin notar que el contexto formal exige evitar ese registro.',
    source_reference: 'Guía oficial, página 18, código 6.3.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-adt-003',
    topic_id: 'lc-6-3-7-adecuacion-de-un-texto',
    prompt:
      'El tono formal de un texto se caracteriza por ___, mientras que el tono informal admite ___.',
    options: [
      'un vocabulario preciso sin coloquialismos - expresiones cotidianas y cercanas',
      'expresiones cotidianas y cercanas - un vocabulario preciso sin coloquialismos',
      'el uso exclusivo de abreviaturas - un vocabulario técnico'
    ],
    correct_option_index: 0,
    explanation:
      'El tono formal usa vocabulario preciso y evita coloquialismos; el tono informal admite expresiones cotidianas y un vocabulario más cercano.',
    common_error:
      'Invertir ambas caracterizaciones, asumiendo que el tono formal admite expresiones cotidianas.',
    source_reference: 'Guía oficial, página 18, código 6.3.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-adt-004',
    topic_id: 'lc-6-3-7-adecuacion-de-un-texto',
    prompt:
      'En un reporte de trabajo dirigido a un gerente, ¿cuál expresión es más adecuada para describir buenos resultados?',
    options: [
      'los resultados estuvieron buenísimos',
      'los resultados fueron favorables',
      'los resultados salieron súper bien'
    ],
    correct_option_index: 1,
    explanation:
      'Un reporte de trabajo dirigido a un gerente exige un registro formal; "favorables" mantiene ese tono, a diferencia de las expresiones coloquiales.',
    common_error:
      'Elegir una expresión coloquial por considerarla más expresiva, sin notar que el contexto laboral formal exige un vocabulario más preciso.',
    source_reference: 'Guía oficial, página 18, código 6.3.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-adt-005',
    topic_id: 'lc-6-3-7-adecuacion-de-un-texto',
    prompt:
      'Relaciona cada expresión con el tono al que corresponde.\n\n1. "Por medio de la presente, solicito una prórroga para la entrega del proyecto."\n2. "Oye, ¿me das unos días más para el proyecto?"\n3. "Le informo que el proyecto se entregará con una semana de retraso, debido a causas imprevistas."\n\na. Tono informal\nb. Tono formal',
    options: ['1b, 2a, 3b', '1a, 2b, 3a', '1a, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Las expresiones 1 y 3 usan un registro formal, sin coloquialismos (1b, 3b); la expresión 2 usa un registro informal y cercano (2a).',
    common_error:
      'Confundir la expresión 3 con un tono informal por ser más breve que la 1, sin notar que ambas evitan coloquialismos y mantienen un registro formal.',
    source_reference: 'Guía oficial, página 18, código 6.3.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-eeo-001',
    topic_id: 'lc-6-4-1-elementos-de-la-exposicion-oral',
    prompt:
      'Un estudiante organiza, antes de su presentación sobre el cambio climático, un guion con introducción, tres puntos principales y una conclusión. ¿Qué elemento de la exposición oral describe esto?',
    options: ['manejo del tiempo', 'planeación', 'apoyos gráficos'],
    correct_option_index: 1,
    explanation:
      'Organizar con anticipación qué se va a decir y en qué orden, antes de presentar, es la planeación; el manejo del tiempo y los apoyos gráficos intervienen durante la exposición misma, no antes.',
    common_error:
      'Confundir la planeación con el manejo del tiempo, sin notar que la planeación ocurre antes de exponer, mientras que el manejo del tiempo se ejerce durante la presentación.',
    source_reference: 'Guía oficial, página 18, código 6.4.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-eeo-002',
    topic_id: 'lc-6-4-1-elementos-de-la-exposicion-oral',
    prompt:
      'Un estudiante prepara diapositivas con gráficas para acompañar su explicación sobre el reciclaje. ¿Qué elemento de la exposición oral describe esto?',
    options: ['apoyos gráficos', 'manejo de voz', 'planeación'],
    correct_option_index: 0,
    explanation:
      'Las diapositivas y gráficas son materiales visuales que refuerzan el mensaje hablado, por lo que corresponden a los apoyos gráficos.',
    common_error:
      'Confundir los apoyos gráficos con la planeación, sin notar que los apoyos gráficos son el material visual en sí, no la organización previa del contenido.',
    source_reference: 'Guía oficial, página 18, código 6.4.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-eeo-003',
    topic_id: 'lc-6-4-1-elementos-de-la-exposicion-oral',
    prompt:
      'El manejo del espacio en una exposición oral se refiere a _______, mientras que el manejo del tiempo se refiere a _______.',
    options: [
      'el uso del cuerpo y el desplazamiento frente al público - ajustar el contenido a la duración disponible',
      'ajustar el contenido a la duración disponible - el uso del cuerpo y el desplazamiento frente al público',
      'el volumen y la entonación de la voz - los materiales visuales usados durante la exposición'
    ],
    correct_option_index: 0,
    explanation:
      'El manejo del espacio es el uso del cuerpo y el desplazamiento frente al público, mientras que el manejo del tiempo consiste en ajustar el contenido a la duración disponible.',
    common_error:
      'Intercambiar las definiciones de manejo del espacio y manejo del tiempo, al no distinguir que una se refiere al cuerpo y la otra a la duración.',
    source_reference: 'Guía oficial, página 18, código 6.4.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-eeo-004',
    topic_id: 'lc-6-4-1-elementos-de-la-exposicion-oral',
    prompt:
      'Un expositor nota que solo le quedan dos minutos y decide resumir rápidamente sus últimos dos puntos para terminar a tiempo. ¿Qué elemento de la exposición oral describe esto?',
    options: ['manejo del tiempo', 'manejo del espacio', 'apoyos gráficos'],
    correct_option_index: 0,
    explanation:
      'Ajustar la cantidad de contenido restante a la duración disponible, para terminar a tiempo, es el manejo del tiempo.',
    common_error:
      'Confundir el manejo del tiempo con la planeación, sin notar que aquí el ajuste ocurre durante la exposición, en respuesta al tiempo restante, no antes de presentar.',
    source_reference: 'Guía oficial, página 18, código 6.4.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-eeo-005',
    topic_id: 'lc-6-4-1-elementos-de-la-exposicion-oral',
    prompt:
      'Relaciona cada acción del expositor con el elemento de la exposición oral que representa.\n\n1. Organiza sus ideas en un guion antes de presentar.\n2. Camina lentamente frente al público para enfatizar un punto clave.\n3. Baja el volumen de su voz al mencionar un dato importante.\n\na. Manejo de voz\nb. Planeación\nc. Manejo del espacio',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Organizar el guion antes de presentar es planeación (1b); caminar frente al público es manejo del espacio (2c); bajar el volumen de la voz es manejo de voz (3a).',
    common_error:
      'Asignar el desplazamiento frente al público al manejo de voz en lugar del manejo del espacio, al no distinguir entre lo que se refiere al cuerpo y lo que se refiere al sonido de la voz.',
    source_reference: 'Guía oficial, página 18, código 6.4.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cdi-001',
    topic_id: 'lc-6-4-2-caracteristicas-del-dialogo',
    prompt:
      '"¿Qué piensas sobre mudarnos a otra ciudad?" es la primera intervención de una conversación entre dos amigos. ¿Qué elemento del diálogo es?',
    options: ['intercambio de información', 'turnos de palabra', 'pregunta detonadora'],
    correct_option_index: 2,
    explanation:
      'Una pregunta que abre o impulsa el tema de la conversación, para que el otro participante responda, es una pregunta detonadora.',
    common_error:
      'Confundir la pregunta detonadora con el intercambio de información, sin notar que la pregunta detonadora es la que abre el tema, no la que comparte datos u opiniones ya dentro de la conversación.',
    source_reference: 'Guía oficial, página 18, código 6.4.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-cdi-002',
    topic_id: 'lc-6-4-2-caracteristicas-del-dialogo',
    prompt:
      'Durante una conversación, un amigo espera a que el otro termine de hablar antes de responder, sin interrumpir. ¿Qué elemento del diálogo describe esto?',
    options: ['turnos de palabra', 'pregunta detonadora', 'intercambio de información'],
    correct_option_index: 0,
    explanation:
      'Respetar el orden en que cada participante habla, sin interrumpir, describe los turnos de palabra.',
    common_error:
      'Confundir los turnos de palabra con el intercambio de información, sin notar que los turnos de palabra describen el orden de las intervenciones, no su contenido.',
    source_reference: 'Guía oficial, página 18, código 6.4.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cdi-003',
    topic_id: 'lc-6-4-2-caracteristicas-del-dialogo',
    prompt:
      'Una pregunta detonadora _______, mientras que el intercambio de información _______.',
    options: [
      'abre o impulsa el tema de la conversación - ocurre después, cuando los participantes comparten datos u opiniones',
      'ocurre después, cuando los participantes comparten datos u opiniones - abre o impulsa el tema de la conversación',
      'describe el orden en que hablan los participantes - abre o impulsa el tema de la conversación'
    ],
    correct_option_index: 0,
    explanation:
      'La pregunta detonadora abre o impulsa el tema; el intercambio de información es lo que ocurre después, cuando los participantes comparten datos u opiniones sobre ese tema.',
    common_error:
      'Intercambiar las definiciones de pregunta detonadora e intercambio de información, al no distinguir cuál abre el tema y cuál ocurre después.',
    source_reference: 'Guía oficial, página 18, código 6.4.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cdi-004',
    topic_id: 'lc-6-4-2-caracteristicas-del-dialogo',
    prompt:
      'Dos compañeros comparten sus opiniones sobre una película que acaban de ver, turnándose para hablar. ¿Qué elemento del diálogo describe el hecho de compartir sus opiniones?',
    options: ['intercambio de información', 'pregunta detonadora', 'turnos de palabra'],
    correct_option_index: 0,
    explanation:
      'Compartir opiniones sobre el tema, una vez iniciada la conversación, es el intercambio de información.',
    common_error:
      'Confundir el intercambio de información con los turnos de palabra, sin notar que aquí la pregunta pide identificar el contenido compartido, no el orden en que se habla.',
    source_reference: 'Guía oficial, página 18, código 6.4.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cdi-005',
    topic_id: 'lc-6-4-2-caracteristicas-del-dialogo',
    prompt:
      'Relaciona cada intervención con el elemento del diálogo que representa.\n\n1. "¿Ya decidiste qué vas a estudiar?"\n2. Después de que Marta termina de hablar, Luis toma la palabra sin interrumpirla.\n3. Marta comparte su opinión sobre las carreras universitarias disponibles.\n\na. Intercambio de información\nb. Turnos de palabra\nc. Pregunta detonadora',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'La pregunta inicial es una pregunta detonadora (1c); tomar la palabra sin interrumpir es turnos de palabra (2b); compartir una opinión es intercambio de información (3a).',
    common_error:
      'Asignar la pregunta inicial al intercambio de información en lugar de a la pregunta detonadora, al no notar que su función es abrir el tema, no compartir datos ya dentro de la conversación.',
    source_reference: 'Guía oficial, página 18, código 6.4.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-edb-001',
    topic_id: 'lc-6-4-3-elementos-del-debate',
    prompt:
      '"Los uniformes escolares reducen la desigualdad visible entre estudiantes" es una razón que sostiene una postura a favor de los uniformes. ¿Qué elemento del debate es?',
    options: ['postura', 'argumento', 'contraposición de ideas'],
    correct_option_index: 1,
    explanation:
      'Una razón concreta que sostiene una postura es un argumento; la postura misma sería "los uniformes deberían usarse", no la razón que la respalda.',
    common_error:
      'Confundir el argumento con la postura, sin notar que la postura es la posición general defendida y el argumento es la razón concreta que la sostiene.',
    source_reference: 'Guía oficial, página 18, código 6.4.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-edb-002',
    topic_id: 'lc-6-4-3-elementos-del-debate',
    prompt:
      'En un debate, un participante responde directamente a la idea de otro, señalando una debilidad en su razonamiento. ¿Qué elemento del debate describe esto?',
    options: ['contraposición de ideas', 'postura', 'argumento'],
    correct_option_index: 0,
    explanation:
      'Responder directamente a la idea de otro participante, para oponerse a ella, es la contraposición de ideas.',
    common_error:
      'Confundir la contraposición de ideas con un nuevo argumento, sin notar que la contraposición responde de forma directa a lo dicho por otro participante.',
    source_reference: 'Guía oficial, página 18, código 6.4.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-edb-003',
    topic_id: 'lc-6-4-3-elementos-del-debate',
    prompt: 'Una postura es _______, mientras que un argumento es _______.',
    options: [
      'la posición general que se defiende sobre un tema - la razón concreta que sostiene esa posición',
      'la razón concreta que sostiene una posición - la posición general que se defiende sobre un tema',
      'la respuesta directa a la idea de otro participante - la posición general que se defiende sobre un tema'
    ],
    correct_option_index: 0,
    explanation:
      'La postura es la posición general defendida; el argumento es la razón concreta que la sostiene.',
    common_error:
      'Intercambiar las definiciones de postura y argumento, al no distinguir la posición general de la razón concreta que la respalda.',
    source_reference: 'Guía oficial, página 18, código 6.4.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-edb-004',
    topic_id: 'lc-6-4-3-elementos-del-debate',
    prompt:
      'En un debate sobre el uso del celular en la escuela, un participante afirma que "debería permitirse porque facilita la comunicación con los padres". ¿Qué elementos del debate identifica este enunciado?',
    options: [
      'una postura (permitirlo) sostenida por un argumento (la comunicación con los padres)',
      'una contraposición de ideas sin ninguna postura asociada',
      'un argumento sin ninguna postura asociada'
    ],
    correct_option_index: 0,
    explanation:
      'El enunciado establece una postura ("debería permitirse") y la sostiene con un argumento (facilita la comunicación con los padres).',
    common_error:
      'Identificar solo el argumento sin notar que el enunciado también establece la postura general que ese argumento sostiene.',
    source_reference: 'Guía oficial, página 18, código 6.4.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-edb-005',
    topic_id: 'lc-6-4-3-elementos-del-debate',
    prompt:
      'Relaciona cada intervención de un debate sobre la tarea escolar los fines de semana con el elemento que representa.\n\n1. "La tarea los fines de semana debería eliminarse."\n2. "Sin embargo, eliminar la tarea reduciría el tiempo de práctica de lo aprendido."\n3. "Los estudiantes necesitan tiempo de descanso para su bienestar."\n\na. Argumento\nb. Contraposición de ideas\nc. Postura',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'La primera intervención establece una postura (1c); la segunda responde de forma directa oponiéndose, una contraposición de ideas (2b); la tercera sostiene la postura inicial con una razón, un argumento (3a).',
    common_error:
      'Clasificar la segunda intervención como un nuevo argumento en lugar de una contraposición de ideas, al no notar que responde directamente a la postura anterior para oponerse a ella.',
    source_reference: 'Guía oficial, página 18, código 6.4.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-fdd-001',
    topic_id: 'lc-6-4-4-funciones-de-formas-orales',
    prompt:
      'Dos vecinos conversan para ponerse de acuerdo sobre el horario de riego del jardín compartido. ¿Qué función oral describe esta situación?',
    options: ['función del debate', 'ninguna de las dos formas orales aplica', 'función del diálogo'],
    correct_option_index: 2,
    explanation:
      'Compartir ideas de forma cooperativa hasta ponerse de acuerdo, sin confrontar posturas opuestas, es la función del diálogo.',
    common_error:
      'Clasificar cualquier conversación entre dos personas como debate, sin notar que aquí no hay posturas opuestas que se confronten para persuadir a nadie.',
    source_reference: 'Guía oficial, página 18, código 6.4.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-fdd-002',
    topic_id: 'lc-6-4-4-funciones-de-formas-orales',
    prompt:
      'Dos estudiantes discuten si debería o no permitirse el uso de calculadora en los exámenes, cada uno defendiendo una postura distinta frente al resto del grupo. ¿Qué función oral describe esta situación?',
    options: ['función del debate', 'función del diálogo', 'ninguna de las dos formas orales aplica'],
    correct_option_index: 0,
    explanation:
      'Confrontar posturas opuestas frente a una audiencia, con el propósito de persuadir o decidir cuál tiene mejor sustento, es la función del debate.',
    common_error:
      'Clasificar la situación como diálogo por tratarse de una discusión entre dos personas, sin notar que aquí sí hay posturas opuestas confrontadas frente a una audiencia.',
    source_reference: 'Guía oficial, página 18, código 6.4.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-fdd-003',
    topic_id: 'lc-6-4-4-funciones-de-formas-orales',
    prompt: 'La función del diálogo es _______, mientras que la función del debate es _______.',
    options: [
      'intercambiar información o resolver dudas de forma cooperativa - confrontar posturas opuestas para persuadir o decidir cuál tiene mejor sustento',
      'confrontar posturas opuestas para persuadir a una audiencia - intercambiar información de forma cooperativa',
      'informar a una audiencia sobre un tema - entretener a una audiencia con un relato'
    ],
    correct_option_index: 0,
    explanation:
      'El diálogo intercambia información o resuelve dudas de forma cooperativa; el debate confronta posturas opuestas para persuadir o decidir cuál tiene mejor sustento.',
    common_error:
      'Intercambiar las definiciones de función del diálogo y función del debate, al no distinguir la cooperación de la confrontación de posturas.',
    source_reference: 'Guía oficial, página 18, código 6.4.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-fdd-004',
    topic_id: 'lc-6-4-4-funciones-de-formas-orales',
    prompt:
      'Un grupo de amigos conversa para decidir juntos a qué restaurante ir, compartiendo sus preferencias sin defender posturas opuestas frente a una audiencia. ¿Qué función oral describe esta situación?',
    options: ['función del diálogo', 'función del debate', 'ninguna de las dos formas orales aplica'],
    correct_option_index: 0,
    explanation:
      'Compartir preferencias de forma cooperativa para llegar a una decisión conjunta, sin confrontar posturas frente a una audiencia, es la función del diálogo.',
    common_error:
      'Clasificar la situación como debate por tratarse de una decisión grupal, sin notar que no hay posturas opuestas confrontadas para persuadir a una audiencia.',
    source_reference: 'Guía oficial, página 18, código 6.4.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-fdd-005',
    topic_id: 'lc-6-4-4-funciones-de-formas-orales',
    prompt:
      'Relaciona cada situación con la función oral que representa.\n\n1. Dos legisladores confrontan posturas opuestas sobre una nueva ley, frente a una audiencia que evaluará sus argumentos.\n2. Dos colegas conversan para resolver juntos una duda técnica sobre un proyecto.\n3. Dos candidatos exponen posturas contrarias sobre economía en un foro público, buscando persuadir a los votantes.\n\na. Función del diálogo\nb. Función del debate',
    options: ['1b, 2a, 3b', '1a, 2b, 3a', '1b, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'La primera y la tercera situación confrontan posturas opuestas frente a una audiencia para persuadir, función del debate (1b, 3b); la segunda resuelve una duda de forma cooperativa, función del diálogo (2a).',
    common_error:
      'Clasificar la segunda situación como debate por involucrar una duda técnica, sin notar que se resuelve de forma cooperativa, sin posturas opuestas confrontadas.',
    source_reference: 'Guía oficial, página 18, código 6.4.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpi-001',
    topic_id: 'lc-6-5-1-tiempo-presente',
    prompt:
      '¿Cuál oración usa correctamente el presente simple para describir un hábito?',
    options: [
      'She is walking to school every day.',
      'She walks to school every day.',
      'She walk to school every day.'
    ],
    correct_option_index: 1,
    explanation:
      'El presente simple describe hábitos y rutinas; se usa el verbo base con "-s" en tercera persona del singular, sin el auxiliar "is".',
    common_error:
      'Combinar el auxiliar "is" con el verbo base sin "-ing", como en "is walking" para un hábito, cuando esa forma corresponde al presente continuo, no al presente simple.',
    source_reference: 'Guía oficial, página 18, código 6.5.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpi-002',
    topic_id: 'lc-6-5-1-tiempo-presente',
    prompt:
      '¿Cuál oración usa correctamente el presente continuo para describir una acción en curso en este momento?',
    options: [
      'He is reading a book right now.',
      'He reads a book right now.',
      'He read a book right now.'
    ],
    correct_option_index: 0,
    explanation:
      'El presente continuo usa "is/are/am" más el verbo con "-ing" para describir una acción que ocurre en el momento de hablar.',
    common_error:
      'Usar el presente simple ("reads") para una acción que ocurre justo en este momento, en lugar del presente continuo.',
    source_reference: 'Guía oficial, página 18, código 6.5.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpi-003',
    topic_id: 'lc-6-5-1-tiempo-presente',
    prompt:
      'El presente simple se usa para _______, mientras que el presente continuo se usa para _______.',
    options: [
      'hábitos y hechos generales - acciones que ocurren en el momento de hablar',
      'acciones que ocurren en el momento de hablar - hábitos y hechos generales',
      'acciones terminadas en el pasado - acciones futuras planeadas'
    ],
    correct_option_index: 0,
    explanation:
      'El presente simple describe hábitos y hechos generales; el presente continuo describe una acción en curso en el momento de hablar.',
    common_error:
      'Intercambiar los usos del presente simple y el presente continuo, al no distinguir un hábito general de una acción en curso.',
    source_reference: 'Guía oficial, página 18, código 6.5.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpi-004',
    topic_id: 'lc-6-5-1-tiempo-presente',
    prompt: '¿Cuál oración expresa correctamente un hecho general, no una acción en curso?',
    options: [
      'Water boils at 100 degrees Celsius.',
      'Water is boiling at 100 degrees Celsius.',
      'Water boiled at 100 degrees Celsius.'
    ],
    correct_option_index: 0,
    explanation:
      'Un hecho general, como la temperatura de ebullición del agua, se expresa con el presente simple, no con el presente continuo ni con el pasado.',
    common_error:
      'Usar el presente continuo para un hecho general permanente, en lugar del presente simple.',
    source_reference: 'Guía oficial, página 18, código 6.5.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpi-005',
    topic_id: 'lc-6-5-1-tiempo-presente',
    prompt:
      'Relaciona cada oración con el tiempo verbal que usa.\n\n1. She works at a hospital.\n2. She is working at a hospital right now.\n3. She worked at a hospital last year.\n\na. Presente continuo\nb. Pasado simple\nc. Presente simple',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      '"Works" es presente simple (1c); "is working" es presente continuo (2a); "worked" es pasado simple (3b).',
    common_error:
      'Confundir "works" (presente simple, un hábito) con una acción en curso, al no notar que la primera oración no tiene "is" ni "-ing".',
    source_reference: 'Guía oficial, página 18, código 6.5.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpa-001',
    topic_id: 'lc-6-5-2-tiempo-pasado',
    prompt:
      '¿Cuál oración usa correctamente el pasado simple para una acción terminada en un momento específico?',
    options: [
      'She was visiting her grandmother last weekend.',
      'She is visiting her grandmother last weekend.',
      'She visited her grandmother last weekend.'
    ],
    correct_option_index: 2,
    explanation:
      'El pasado simple describe una acción completa y terminada en un momento específico del pasado, como "last weekend".',
    common_error:
      'Usar el pasado continuo ("was visiting") para una acción ya terminada y completa, en lugar del pasado simple.',
    source_reference: 'Guía oficial, página 18, código 6.5.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpa-002',
    topic_id: 'lc-6-5-2-tiempo-pasado',
    prompt:
      '¿Cuál oración usa correctamente el pasado continuo para una acción interrumpida por otra?',
    options: [
      'I was cooking dinner when the phone rang.',
      'I cooked dinner when the phone was ringing.',
      'I cook dinner when the phone rang.'
    ],
    correct_option_index: 0,
    explanation:
      'La acción en curso e interrumpida (cocinar) usa el pasado continuo; la acción que interrumpe (sonó el teléfono) usa el pasado simple.',
    common_error:
      'Invertir cuál acción va en pasado continuo y cuál en pasado simple, poniendo la acción interrumpida en pasado simple y la interrupción en pasado continuo.',
    source_reference: 'Guía oficial, página 18, código 6.5.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpa-003',
    topic_id: 'lc-6-5-2-tiempo-pasado',
    prompt:
      'El pasado simple se usa para _______, mientras que el pasado continuo se usa para _______.',
    options: [
      'una acción terminada en un momento específico - una acción en curso en el pasado, a menudo interrumpida por otra',
      'una acción en curso en el pasado - una acción terminada en un momento específico',
      'una acción futura - un hábito presente'
    ],
    correct_option_index: 0,
    explanation:
      'El pasado simple describe una acción terminada en un momento específico; el pasado continuo describe una acción en curso en el pasado.',
    common_error:
      'Intercambiar los usos del pasado simple y el pasado continuo, sin distinguir una acción terminada de una en curso.',
    source_reference: 'Guía oficial, página 18, código 6.5.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpa-004',
    topic_id: 'lc-6-5-2-tiempo-pasado',
    prompt: '¿Cuál oración describe correctamente dos acciones simultáneas en el pasado?',
    options: [
      'While I was studying, my brother was watching TV.',
      'While I studied, my brother was watching TV.',
      'While I was studying, my brother watches TV.'
    ],
    correct_option_index: 0,
    explanation:
      'Dos acciones que ocurren al mismo tiempo en el pasado usan ambas el pasado continuo.',
    common_error:
      'Poner solo una de las dos acciones simultáneas en pasado continuo, dejando la otra en un tiempo distinto.',
    source_reference: 'Guía oficial, página 18, código 6.5.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tpa-005',
    topic_id: 'lc-6-5-2-tiempo-pasado',
    prompt:
      'Relaciona cada oración con el tiempo verbal que usa.\n\n1. I watched a movie last night.\n2. I was watching a movie when she called.\n3. She called me at nine.\n\na. Presente perfecto\nb. Pasado simple (acción terminada)\nc. Pasado continuo',
    options: ['1b, 2c, 3b', '1c, 2b, 3a', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      '"Watched" describe una acción terminada, pasado simple (1b); "was watching" es pasado continuo (2c); "called" también es pasado simple, la acción que interrumpe (3b).',
    common_error:
      'Clasificar "was watching" como presente perfecto en lugar de pasado continuo, al confundir el auxiliar "was" con "has/have".',
    source_reference: 'Guía oficial, página 18, código 6.5.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfu-001',
    topic_id: 'lc-6-5-3-tiempo-futuro',
    prompt: '¿Cuál oración expresa correctamente una decisión espontánea tomada en el momento?',
    options: [
      'I am going to help you with that.',
      'I will help you with that.',
      'I help you with that.'
    ],
    correct_option_index: 1,
    explanation:
      '"Will" expresa una decisión espontánea, tomada en el momento de hablar, a diferencia de "going to", que expresa un plan ya decidido.',
    common_error:
      'Usar "going to" para una decisión espontánea, cuando esa construcción corresponde a planes ya decididos con anticipación.',
    source_reference: 'Guía oficial, página 18, código 6.5.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfu-002',
    topic_id: 'lc-6-5-3-tiempo-futuro',
    prompt: '¿Cuál oración expresa correctamente un plan ya decidido con anticipación?',
    options: [
      'She is going to study medicine next year.',
      'She will study medicine next year.',
      'She studies medicine next year.'
    ],
    correct_option_index: 0,
    explanation:
      '"Going to" expresa un plan ya decidido con anticipación, a diferencia de "will", que expresa una decisión espontánea o una predicción.',
    common_error:
      'Usar "will" para un plan que la persona ya decidió con anticipación, en lugar de "going to".',
    source_reference: 'Guía oficial, página 18, código 6.5.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfu-003',
    topic_id: 'lc-6-5-3-tiempo-futuro',
    prompt: "'Will' se usa para _______, mientras que 'going to' se usa para _______.",
    options: [
      'decisiones espontáneas y predicciones - planes ya decididos con anticipación',
      'planes ya decididos con anticipación - decisiones espontáneas y predicciones',
      'acciones terminadas - acciones en curso'
    ],
    correct_option_index: 0,
    explanation:
      '"Will" expresa decisiones espontáneas y predicciones; "going to" expresa planes ya decididos con anticipación.',
    common_error:
      'Intercambiar los usos de "will" y "going to", sin distinguir una decisión espontánea de un plan ya decidido.',
    source_reference: 'Guía oficial, página 18, código 6.5.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfu-004',
    topic_id: 'lc-6-5-3-tiempo-futuro',
    prompt: '¿Cuál oración está correctamente construida?',
    options: [
      'They will arrives tomorrow.',
      'They will arrive tomorrow.',
      'They will to arrive tomorrow.'
    ],
    correct_option_index: 1,
    explanation:
      'Después de "will", el verbo principal se mantiene en su forma base, sin conjugar y sin "to": "will arrive", no "will arrives" ni "will to arrive".',
    common_error:
      'Conjugar el verbo después de "will" o agregarle "to", en lugar de dejarlo en su forma base.',
    source_reference: 'Guía oficial, página 18, código 6.5.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-tfu-005',
    topic_id: 'lc-6-5-3-tiempo-futuro',
    prompt:
      'Relaciona cada oración con la construcción de futuro que usa.\n\n1. I will call you later.\n2. She is going to study medicine next year.\n3. It will probably rain tomorrow.\n\na. Going to (plan decidido)\nb. Will (predicción)\nc. Will (decisión espontánea)',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      '"I will call you later" es una decisión espontánea (1c); "is going to study" es un plan ya decidido (2a); "will probably rain" es una predicción (3b).',
    common_error:
      'Confundir una predicción con "will" con una decisión espontánea, al no notar la diferencia de matiz entre ambas.',
    source_reference: 'Guía oficial, página 18, código 6.5.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ppf-001',
    topic_id: 'lc-6-5-4-presente-perfecto',
    prompt:
      '¿Cuál oración expresa correctamente que alguien ya terminó su tarea, sin especificar cuándo?',
    options: [
      'I finished my homework.',
      'I am finishing my homework.',
      'I have finished my homework.'
    ],
    correct_option_index: 2,
    explanation:
      'El presente perfecto ("have finished") expresa una acción completada sin momento específico, cuyo resultado importa en el presente.',
    common_error:
      'Usar el pasado simple ("finished") cuando no se menciona ningún momento específico, en lugar del presente perfecto.',
    source_reference: 'Guía oficial, página 18, código 6.5.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-ppf-002',
    topic_id: 'lc-6-5-4-presente-perfecto',
    prompt: '¿Cuál oración usa correctamente el presente perfecto para una experiencia sin momento específico?',
    options: ['I have visited Paris.', 'I visited Paris.', 'I am visiting Paris.'],
    correct_option_index: 0,
    explanation:
      'El presente perfecto expresa una experiencia de vida sin decir cuándo ocurrió.',
    common_error:
      'Usar el pasado simple para una experiencia sin momento específico, en lugar del presente perfecto.',
    source_reference: 'Guía oficial, página 18, código 6.5.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ppf-003',
    topic_id: 'lc-6-5-4-presente-perfecto',
    prompt:
      'El presente perfecto se usa para _______, mientras que el pasado simple se usa para _______.',
    options: [
      'experiencias o acciones sin un momento específico - acciones terminadas en un momento específico del pasado',
      'acciones terminadas en un momento específico - experiencias sin momento específico',
      'acciones futuras - hábitos presentes'
    ],
    correct_option_index: 0,
    explanation:
      'El presente perfecto no lleva un marcador de tiempo específico; el pasado simple sí lo requiere.',
    common_error:
      'Intercambiar los usos del presente perfecto y el pasado simple, sin notar si la oración menciona un momento específico.',
    source_reference: 'Guía oficial, página 18, código 6.5.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ppf-004',
    topic_id: 'lc-6-5-4-presente-perfecto',
    prompt:
      '¿Cuál oración está correctamente construida para expresar una acción que empezó en el pasado y continúa?',
    options: [
      'She has worked here in 2020.',
      'She has worked here for three years.',
      'She worked here for three years.'
    ],
    correct_option_index: 1,
    explanation:
      '"For three years" indica una duración que continúa hasta ahora, apropiada para el presente perfecto; "in 2020" exige pasado simple, no presente perfecto.',
    common_error:
      'Combinar el presente perfecto con un marcador de tiempo específico como "in 2020", en lugar de usarlo con una duración continua como "for three years".',
    source_reference: 'Guía oficial, página 18, código 6.5.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-ppf-005',
    topic_id: 'lc-6-5-4-presente-perfecto',
    prompt:
      'Relaciona cada oración con el tiempo verbal correcto según su marcador de tiempo.\n\n1. I visited Paris in 2019.\n2. I have visited Paris.\n3. She has lived here for five years.\n\na. Presente perfecto (duración continua)\nb. Pasado simple (momento específico)\nc. Presente perfecto (experiencia sin momento específico)',
    options: ['1b, 2c, 3a', '1c, 2b, 3a', '1a, 2c, 3b'],
    correct_option_index: 0,
    explanation:
      '"In 2019" exige pasado simple (1b); "I have visited Paris" es una experiencia sin momento específico (2c); "for five years" indica una duración continua (3a).',
    common_error:
      'Usar presente perfecto con "in 2019", al no notar que ese marcador de tiempo específico exige pasado simple.',
    source_reference: 'Guía oficial, página 18, código 6.5.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-psp-001',
    topic_id: 'lc-6-5-5-pasado-perfecto',
    prompt:
      '¿Cuál oración expresa correctamente que el tren ya había salido cuando alguien llegó a la estación?',
    options: [
      'The train left when I arrived at the station.',
      'The train had left when I arrived at the station.',
      'The train has left when I arrived at the station.'
    ],
    correct_option_index: 1,
    explanation:
      'El pasado perfecto ("had left") señala que salir el tren ocurrió antes de llegar a la estación (pasado simple, "arrived").',
    common_error:
      'Usar el mismo tiempo verbal para ambas acciones, sin distinguir cuál ocurrió primero mediante el pasado perfecto.',
    source_reference: 'Guía oficial, página 18, código 6.5.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-psp-002',
    topic_id: 'lc-6-5-5-pasado-perfecto',
    prompt: '¿Cuál oración usa correctamente el pasado perfecto para la acción que ocurrió primero?',
    options: [
      'She had eaten before her friends arrived.',
      'She ate before her friends had arrived.',
      'She has eaten before her friends arrived.'
    ],
    correct_option_index: 0,
    explanation:
      'La acción que ocurrió primero (comer) usa el pasado perfecto; la acción posterior (la llegada de sus amigos) usa el pasado simple.',
    common_error:
      'Poner el pasado perfecto en la acción posterior en lugar de la anterior, invirtiendo el orden real de los sucesos.',
    source_reference: 'Guía oficial, página 18, código 6.5.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-psp-003',
    topic_id: 'lc-6-5-5-pasado-perfecto',
    prompt:
      'El pasado perfecto se usa para _______, mientras que el pasado simple se usa para _______ en la misma oración.',
    options: [
      'la acción que ocurrió primero - la acción posterior',
      'la acción posterior - la acción que ocurrió primero',
      'una acción futura - una acción presente'
    ],
    correct_option_index: 0,
    explanation:
      'El pasado perfecto marca la acción anterior; el pasado simple marca la acción posterior, cuando se describen dos acciones pasadas.',
    common_error:
      'Intercambiar los usos del pasado perfecto y el pasado simple, sin identificar cuál acción ocurrió primero.',
    source_reference: 'Guía oficial, página 18, código 6.5.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-psp-004',
    topic_id: 'lc-6-5-5-pasado-perfecto',
    prompt: '¿Cuál oración está correctamente construida?',
    options: [
      'He had never travel abroad before that trip.',
      'He had never traveled abroad before that trip.',
      'He has never traveled abroad before that trip.'
    ],
    correct_option_index: 1,
    explanation:
      'El pasado perfecto usa "had" más el participio pasado ("traveled"), no el verbo base ni el presente perfecto.',
    common_error:
      'Usar el verbo base después de "had" en lugar del participio pasado, o confundir el pasado perfecto con el presente perfecto.',
    source_reference: 'Guía oficial, página 18, código 6.5.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-psp-005',
    topic_id: 'lc-6-5-5-pasado-perfecto',
    prompt:
      'Relaciona cada oración con el orden de las acciones que describe.\n\n1. She had finished her homework before her mom arrived.\n2. Her mom arrived at six.\n3. She had already left when he called.\n\na. Acción posterior (pasado simple)\nb. Acción anterior (pasado perfecto)\nc. Acción anterior (pasado perfecto)',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      '"Had finished" es la acción anterior (1b); "arrived at six" es la acción posterior en pasado simple (2a); "had already left" también es una acción anterior en pasado perfecto (3c).',
    common_error:
      'Clasificar "arrived at six" como una acción anterior, al no notar que está en pasado simple, no en pasado perfecto.',
    source_reference: 'Guía oficial, página 18, código 6.5.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pwh-001',
    topic_id: 'lc-6-5-6-preguntas-wh',
    prompt: '¿Cuál pregunta usa correctamente la palabra interrogativa para preguntar por posesión?',
    options: ['Who is this backpack?', 'What is this backpack?', 'Whose backpack is this?'],
    correct_option_index: 2,
    explanation:
      '"Whose" pregunta por posesión, a quién pertenece algo; "who" pregunta por una persona y "what" por una cosa o acción.',
    common_error:
      'Usar "who" o "what" para preguntar por posesión, en lugar de "whose".',
    source_reference: 'Guía oficial, página 18, código 6.5.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-pwh-002',
    topic_id: 'lc-6-5-6-preguntas-wh',
    prompt: '¿Cuál pregunta usa correctamente la palabra interrogativa para preguntar por un lugar?',
    options: ['Where do you live?', 'What do you live?', 'Who do you live?'],
    correct_option_index: 0,
    explanation:
      '"Where" pregunta por un lugar; "what" pregunta por una cosa y "who" por una persona.',
    common_error:
      'Usar "what" para preguntar por un lugar, en lugar de "where".',
    source_reference: 'Guía oficial, página 18, código 6.5.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pwh-003',
    topic_id: 'lc-6-5-6-preguntas-wh',
    prompt: "'Who' pregunta por _______, mientras que 'what' pregunta por _______.",
    options: [
      'una persona - una cosa o una acción',
      'una cosa o una acción - una persona',
      'un lugar - una posesión'
    ],
    correct_option_index: 0,
    explanation: '"Who" pregunta por una persona; "what" pregunta por una cosa, una acción o una idea.',
    common_error:
      'Intercambiar los usos de "who" y "what", sin distinguir una persona de una cosa o acción.',
    source_reference: 'Guía oficial, página 18, código 6.5.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pwh-004',
    topic_id: 'lc-6-5-6-preguntas-wh',
    prompt:
      "¿Cuál pregunta está correctamente construida cuando 'who' pregunta directamente por el sujeto?",
    options: [
      'Who did write this letter?',
      'Who wrote this letter?',
      'Who writes this letter yesterday?'
    ],
    correct_option_index: 1,
    explanation:
      'Cuando "who" es el sujeto de la pregunta, no se necesita el auxiliar "did"; el verbo va directamente en pasado: "Who wrote this letter?".',
    common_error:
      'Agregar el auxiliar "did" innecesariamente cuando "who" ya es el sujeto de la pregunta.',
    source_reference: 'Guía oficial, página 18, código 6.5.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-pwh-005',
    topic_id: 'lc-6-5-6-preguntas-wh',
    prompt:
      'Relaciona cada pregunta con la palabra interrogativa que le corresponde.\n\n1. ___ is your teacher?\n2. ___ do you want?\n3. ___ book is this?\n\na. What\nb. Whose\nc. Who',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      '"___ is your teacher?" pregunta por una persona, "who" (1c); "___ do you want?" pregunta por una cosa, "what" (2a); "___ book is this?" pregunta por posesión, "whose" (3b).',
    common_error:
      'Usar "who" para preguntar por posesión en "___ book is this?", en lugar de "whose".',
    source_reference: 'Guía oficial, página 18, código 6.5.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rdc-001',
    topic_id: 'lc-6-5-7-relaciones-de-comparacion',
    prompt:
      '¿Cuál oración compara correctamente dos ciudades, donde una es más grande que la otra?',
    options: [
      'This city is the biggest than that one.',
      'This city is bigger than that one.',
      'This city is big than that one.'
    ],
    correct_option_index: 1,
    explanation:
      'Para comparar dos elementos se usa el comparativo ("bigger... than"), no el superlativo ("the biggest") ni el adjetivo sin comparar.',
    common_error:
      'Combinar el superlativo con "than", cuando "than" siempre acompaña al comparativo, nunca al superlativo.',
    source_reference: 'Guía oficial, página 18, código 6.5.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-rdc-002',
    topic_id: 'lc-6-5-7-relaciones-de-comparacion',
    prompt: '¿Cuál oración usa correctamente el superlativo para comparar contra todo un grupo?',
    options: [
      'She is smarter student in her class.',
      'She is the smartest student in her class.',
      'She is more smart student in her class.'
    ],
    correct_option_index: 1,
    explanation:
      'Comparar un elemento contra todo un grupo (su clase) requiere el superlativo con "the": "the smartest".',
    common_error:
      'Usar el comparativo ("smarter") para comparar contra un grupo entero, en lugar del superlativo.',
    source_reference: 'Guía oficial, página 18, código 6.5.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rdc-003',
    topic_id: 'lc-6-5-7-relaciones-de-comparacion',
    prompt:
      'El comparativo se usa para comparar _______, mientras que el superlativo se usa para comparar _______.',
    options: [
      'dos elementos - un elemento contra todos los demás de un grupo',
      'un elemento contra un grupo - dos elementos',
      'acciones pasadas - acciones futuras'
    ],
    correct_option_index: 0,
    explanation:
      'El comparativo compara dos elementos; el superlativo compara un elemento contra todos los demás de un grupo de tres o más.',
    common_error:
      'Intercambiar los usos del comparativo y el superlativo, sin contar cuántos elementos se están comparando.',
    source_reference: 'Guía oficial, página 18, código 6.5.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rdc-004',
    topic_id: 'lc-6-5-7-relaciones-de-comparacion',
    prompt: "¿Cuál oración usa correctamente el comparativo irregular de 'good'?",
    options: [
      'This restaurant is gooder than the other one.',
      'This restaurant is better than the other one.',
      'This restaurant is more good than the other one.'
    ],
    correct_option_index: 1,
    explanation:
      '"Good" tiene una forma comparativa irregular, "better", no "gooder" ni "more good".',
    common_error:
      'Aplicar la regla regular ("-er" o "more") a un adjetivo irregular como "good", en lugar de usar su forma irregular "better".',
    source_reference: 'Guía oficial, página 18, código 6.5.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-rdc-005',
    topic_id: 'lc-6-5-7-relaciones-de-comparacion',
    prompt:
      'Relaciona cada adjetivo con su forma comparativa correcta.\n\n1. Tall\n2. Interesting\n3. Good\n\na. More interesting\nb. Better\nc. Taller',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      '"Tall" (una sílaba) forma su comparativo con "-er": "taller" (1c); "interesting" (varias sílabas) usa "more" (2a); "good" es irregular: "better" (3b).',
    common_error:
      'Formar el comparativo de "interesting" con "-er" en lugar de "more", al no aplicar la regla de los adjetivos largos.',
    source_reference: 'Guía oficial, página 18, código 6.5.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vbm-001',
    topic_id: 'lc-6-5-8-verbos-modales',
    prompt: '¿Cuál oración expresa correctamente un consejo para alguien que se siente mal?',
    options: ['You must see a doctor.', 'You can see a doctor.', 'You should see a doctor.'],
    correct_option_index: 2,
    explanation:
      '"Should" expresa una recomendación o consejo; "must" expresa una obligación más fuerte y "can" expresa habilidad o permiso.',
    common_error:
      'Usar "must" para dar un simple consejo, cuando esa palabra expresa una obligación más fuerte que un consejo.',
    source_reference: 'Guía oficial, página 18, código 6.5.8.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-vbm-002',
    topic_id: 'lc-6-5-8-verbos-modales',
    prompt: '¿Cuál oración expresa correctamente una posibilidad, no una certeza?',
    options: ['It must snow tomorrow.', 'It might snow tomorrow.', 'It should snow tomorrow.'],
    correct_option_index: 1,
    explanation:
      '"Might" expresa una posibilidad, no una certeza; "must" expresa una obligación o certeza casi segura.',
    common_error:
      'Usar "must" para expresar una simple posibilidad, cuando esa palabra expresa una certeza casi segura o una obligación.',
    source_reference: 'Guía oficial, página 18, código 6.5.8.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vbm-003',
    topic_id: 'lc-6-5-8-verbos-modales',
    prompt: "'Can' expresa _______, mientras que 'must' expresa _______.",
    options: [
      'habilidad o permiso - obligación fuerte o certeza casi segura',
      'obligación fuerte - habilidad o permiso',
      'posibilidad - consejo'
    ],
    correct_option_index: 0,
    explanation: '"Can" expresa habilidad o permiso; "must" expresa una obligación fuerte o una certeza casi segura.',
    common_error:
      'Intercambiar los usos de "can" y "must", sin distinguir habilidad de obligación.',
    source_reference: 'Guía oficial, página 18, código 6.5.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vbm-004',
    topic_id: 'lc-6-5-8-verbos-modales',
    prompt: '¿Cuál oración está correctamente construida?',
    options: [
      'He must to finish the report today.',
      'He must finish the report today.',
      'He musts finish the report today.'
    ],
    correct_option_index: 1,
    explanation:
      'Después de un verbo modal como "must", el verbo principal va en su forma base, sin "to" y sin conjugar.',
    common_error:
      'Agregar "to" al verbo principal después de un modal, o conjugar el propio verbo modal, cuando ninguno de los dos cambia de forma.',
    source_reference: 'Guía oficial, página 18, código 6.5.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vbm-005',
    topic_id: 'lc-6-5-8-verbos-modales',
    prompt:
      'Relaciona cada oración con el matiz del verbo modal que usa.\n\n1. She can speak French.\n2. You should study more.\n3. I must finish this today.\n\na. Obligación\nb. Habilidad\nc. Consejo',
    options: ['1b, 2c, 3a', '1c, 2b, 3a', '1a, 2c, 3b'],
    correct_option_index: 0,
    explanation:
      '"Can speak" expresa habilidad (1b); "should study" expresa consejo (2c); "must finish" expresa obligación (3a).',
    common_error:
      'Confundir el consejo de "should" con la obligación de "must", al no notar que "should" es más suave que "must".',
    source_reference: 'Guía oficial, página 18, código 6.5.8.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cnd-001',
    topic_id: 'lc-6-5-9-estructuras-condicionales',
    prompt:
      '¿Cuál oración expresa correctamente qué haría una persona si pudiera volar, una situación hipotética?',
    options: [
      'If I can fly, I will travel everywhere.',
      'If I could fly, I would travel everywhere.',
      'If I fly, I would travel everywhere.'
    ],
    correct_option_index: 1,
    explanation:
      'Una situación hipotética e improbable, como poder volar, se expresa con el segundo condicional: "if" + pasado simple, "would" + verbo base.',
    common_error:
      'Usar el primer condicional ("if I can fly, I will travel") para una situación claramente hipotética, en lugar del segundo condicional.',
    source_reference: 'Guía oficial, página 18, código 6.5.9.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-cnd-002',
    topic_id: 'lc-6-5-9-estructuras-condicionales',
    prompt: '¿Cuál oración usa correctamente el primer condicional para una situación real y posible?',
    options: [
      'If it rains, I will stay home.',
      'If it rained, I will stay home.',
      'If it rains, I would stay home.'
    ],
    correct_option_index: 0,
    explanation:
      'El primer condicional usa "if" + presente simple, "will" + verbo base, para una situación real y posible en el futuro.',
    common_error:
      'Mezclar el pasado simple o "would" con el primer condicional, en lugar de mantener presente simple con "will".',
    source_reference: 'Guía oficial, página 18, código 6.5.9.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cnd-003',
    topic_id: 'lc-6-5-9-estructuras-condicionales',
    prompt:
      'El primer condicional se usa para situaciones _______, mientras que el segundo condicional se usa para situaciones _______.',
    options: [
      'reales o posibles en el futuro - hipotéticas o poco probables',
      'hipotéticas - reales y seguras',
      'pasadas - futuras'
    ],
    correct_option_index: 0,
    explanation:
      'El primer condicional describe situaciones reales o posibles; el segundo condicional describe situaciones hipotéticas o poco probables.',
    common_error:
      'Intercambiar los usos del primer y el segundo condicional, sin distinguir una situación posible de una hipotética.',
    source_reference: 'Guía oficial, página 18, código 6.5.9.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cnd-004',
    topic_id: 'lc-6-5-9-estructuras-condicionales',
    prompt: '¿Cuál oración usa correctamente el segundo condicional?',
    options: [
      'If I have more time, I would learn a new language.',
      'If I had more time, I would learn a new language.',
      'If I had more time, I will learn a new language.'
    ],
    correct_option_index: 1,
    explanation:
      'El segundo condicional usa "if" + pasado simple, "would" + verbo base: "if I had more time, I would learn".',
    common_error:
      'Mezclar el presente simple o "will" con el segundo condicional, en lugar de mantener pasado simple con "would".',
    source_reference: 'Guía oficial, página 18, código 6.5.9.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-cnd-005',
    topic_id: 'lc-6-5-9-estructuras-condicionales',
    prompt:
      'Relaciona cada oración condicional con el tipo de condicional que usa.\n\n1. If she studies, she will pass the exam.\n2. If I won the lottery, I would travel the world.\n3. If it rains, I will stay home.\n\na. Segundo condicional\nb. Primer condicional',
    options: ['1b, 2a, 3b', '1a, 2b, 3a', '1b, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      '"If she studies, she will pass" y "if it rains, I will stay home" usan el primer condicional (1b, 3b); "if I won the lottery, I would travel" usa el segundo condicional, una situación hipotética (2a).',
    common_error:
      'Clasificar "if I won the lottery" como primer condicional, sin notar que ganar la lotería es una situación hipotética y poco probable.',
    source_reference: 'Guía oficial, página 18, código 6.5.9.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vzp-001',
    topic_id: 'lc-6-5-10-voz-pasiva',
    prompt:
      '¿Cuál oración expresa correctamente en voz pasiva que un edificio fue construido en 1990?',
    options: [
      'The building built in 1990.',
      'The building has built in 1990.',
      'The building was built in 1990.'
    ],
    correct_option_index: 2,
    explanation:
      'La voz pasiva en pasado usa "was/were" más el participio pasado: "was built", no el verbo principal solo ni el presente perfecto.',
    common_error:
      'Omitir el verbo "be" en la voz pasiva, dejando solo el participio pasado sin el auxiliar que la construcción requiere.',
    source_reference: 'Guía oficial, página 18, código 6.5.10.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'lc-vzp-002',
    topic_id: 'lc-6-5-10-voz-pasiva',
    prompt: '¿Cuál oración usa correctamente la voz pasiva en presente?',
    options: [
      'The house cleans every week.',
      'The house is cleaned every week.',
      'The house cleaned every week.'
    ],
    correct_option_index: 1,
    explanation:
      'La voz pasiva en presente usa "is/are" más el participio pasado: "is cleaned".',
    common_error:
      'Usar la voz activa ("cleans") cuando el enunciado pide expresar quién recibe la acción, no quién la realiza.',
    source_reference: 'Guía oficial, página 18, código 6.5.10.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vzp-003',
    topic_id: 'lc-6-5-10-voz-pasiva',
    prompt:
      "La voz pasiva se forma con _______ conjugado en el tiempo correspondiente, seguido de _______.",
    options: [
      "el verbo 'be' - el participio pasado",
      "el verbo principal - el verbo 'be'",
      "el participio pasado - el verbo 'be'"
    ],
    correct_option_index: 0,
    explanation:
      'La voz pasiva se forma con el verbo "be" conjugado en el tiempo correspondiente, seguido del participio pasado del verbo principal.',
    common_error:
      'Invertir el orden, poniendo el participio pasado antes del verbo "be", en lugar de después.',
    source_reference: 'Guía oficial, página 18, código 6.5.10.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vzp-004',
    topic_id: 'lc-6-5-10-voz-pasiva',
    prompt: '¿Cuál oración usa correctamente la voz pasiva en pasado?',
    options: [
      'The cake baked by my mother.',
      'The cake was baked by my mother.',
      'The cake bakes by my mother.'
    ],
    correct_option_index: 1,
    explanation:
      'La voz pasiva en pasado usa "was/were" más el participio pasado: "was baked".',
    common_error:
      'Omitir "was" y dejar solo el participio pasado, o usar el presente simple en lugar del pasado.',
    source_reference: 'Guía oficial, página 18, código 6.5.10.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'lc-vzp-005',
    topic_id: 'lc-6-5-10-voz-pasiva',
    prompt:
      'Relaciona cada oración activa con su versión correcta en voz pasiva.\n\n1. The chef cooks the meal.\n2. John wrote the letter.\n3. They will finish the project.\n\na. The letter was written by John.\nb. The project will be finished by them.\nc. The meal is cooked by the chef.',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      '"The chef cooks the meal" pasa a "the meal is cooked by the chef" (1c); "John wrote the letter" pasa a "the letter was written by John" (2a); "they will finish the project" pasa a "the project will be finished by them" (3b).',
    common_error:
      'Mantener el verbo principal en su forma activa dentro de la oración pasiva, en lugar de convertirlo al participio pasado junto con "be".',
    source_reference: 'Guía oficial, página 18, código 6.5.10.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
