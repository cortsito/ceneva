import type { question } from './types'

export const conciencia_historica_questions: question[] = [
  {
    id: 'ch-cpo-001',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'Un pueblo mesoamericano con gobierno centralizado, encabezado por el cazonci Tangaxoan II, se rinde en 1522 sin un enfrentamiento militar mayor, pero su gobernante es ejecutado en 1530 durante una campaña de represión. ¿A qué pueblo corresponde este proceso de conquista?',
    options: ['a los purépechas', 'a los chichimecas', 'a los tzotziles'],
    correct_option_index: 0,
    explanation:
      'Los purépechas, con un gobierno centralizado bajo el cazonci, se rindieron ante las fuerzas españolas en 1522; la sumisión inicial no evitó que Nuño de Guzmán ejecutara al cazonci en 1530.',
    common_error:
      'Asumir que toda rendición temprana significa el fin del conflicto, sin considerar que la represión posterior formó parte del mismo proceso de conquista.',
    source_reference: 'Guía oficial, página 13, código 3.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-002',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'Los _______ eran un pueblo seminómada de Aridoamérica, sin una capital fija que tomar; su resistencia, conocida como Guerra Chichimeca, se resolvió mediante regalos, evangelización y alianzas con los tlaxcaltecas, no mediante una batalla decisiva.',
    options: ['tzotziles', 'seris', 'chichimecas'],
    correct_option_index: 2,
    explanation:
      'La Guerra Chichimeca (c. 1550-1590) fue una guerra de guerrillas prolongada que terminó con una política de pacificación, no con la rendición de una capital, porque los chichimecas no tenían un centro de poder fijo.',
    common_error:
      'Confundir la pacificación negociada de los chichimecas con la rendición de una capital, propia de sociedades sedentarias con gobierno centralizado.',
    source_reference: 'Guía oficial, página 13, código 3.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-003',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'Un pueblo nómada del desierto de Sonora nunca fue sometido mediante una sola campaña militar decisiva; su resistencia se extendió de manera intermitente entre los siglos XVI y XIX. ¿A qué pueblo corresponde?',
    options: ['a los seris', 'a los purépechas', 'a los tzotziles'],
    correct_option_index: 0,
    explanation:
      'Los seris eran un pueblo nómada del desierto de Sonora sin una capital fija ni un gobierno centralizado, por lo que su resistencia se prolongó de forma intermitente durante siglos en lugar de resolverse en una campaña única.',
    common_error:
      'Atribuir a un pueblo nómada un desenlace de rendición o sometimiento único, como si tuviera un centro de poder que pudiera capturarse.',
    source_reference: 'Guía oficial, página 13, código 3.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-004',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'La conquista de un pueblo maya de los Altos de Chiapas se prolongó durante buena parte del siglo XVI, más tarde que la caída de Tenochtitlan, debido al terreno montañoso de la región y a su resistencia armada. ¿A qué pueblo corresponde?',
    options: ['a los tzotziles', 'a los purépechas', 'a los seris'],
    correct_option_index: 0,
    explanation:
      'Los tzotziles, pueblo maya de los Altos de Chiapas, tuvieron una conquista tardía respecto al centro de México, prolongada por la dificultad del terreno montañoso y la resistencia armada de los pueblos mayas de la región.',
    common_error:
      'Suponer que todos los pueblos mesoamericanos fueron sometidos con la misma rapidez que Tenochtitlan, sin considerar cómo el terreno o la resistencia local prolongaron algunos procesos.',
    source_reference: 'Guía oficial, página 13, código 3.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-005',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'Relaciona cada pueblo con el rasgo que distingue su proceso de conquista.\n\n1. Purépechas\n2. Chichimecas\n3. Seris\n\na. Resistencia intermitente de un pueblo nómada, sin someterse en una sola campaña\nb. Rendición pacífica de un gobierno centralizado, seguida de la ejecución de su gobernante\nc. Guerra de guerrillas prolongada, resuelta mediante pacificación y no por una rendición',
    options: ['1a, 2b, 3c', '1b, 2c, 3a', '1c, 2a, 3b'],
    correct_option_index: 1,
    explanation:
      'Los purépechas se rindieron pacíficamente pero su cazonci fue ejecutado después (b); los chichimecas sostuvieron una guerra de guerrillas resuelta por pacificación (c); los seris resistieron de forma intermitente sin someterse en una sola campaña, por ser un pueblo nómada (a).',
    common_error:
      'Atribuir la pacificación negociada a un pueblo nómada como los seris, en lugar de reconocer que esa fue la resolución específica de la Guerra Chichimeca.',
    source_reference: 'Guía oficial, página 13, código 3.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-001',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'Una rebelión de comunidades mayas en Yucatán (1847-1901), motivada por el despojo de tierras comunales y la explotación en haciendas henequeneras, se organiza en torno al culto de la «Cruz Parlante» y funda un centro de resistencia propio. ¿A qué movimiento corresponde?',
    options: ['a la Guerra de Castas', 'a la resistencia yaqui', 'a la Guerra Chichimeca'],
    correct_option_index: 0,
    explanation:
      'La Guerra de Castas (Yucatán, 1847-1901) fue la rebelión maya organizada en torno al culto de la «Cruz Parlante», con su centro de resistencia en Chan Santa Cruz, motivada por el despojo de tierras comunales y la explotación henequenera.',
    common_error:
      'Confundir la Guerra de Castas con otro movimiento de resistencia indígena de una región o siglo distinto, por compartir la causa general del despojo de tierras.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-002',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'La deportación forzada de miles de integrantes de un pueblo hacia plantaciones de Yucatán y el Valle Nacional en Oaxaca fue la respuesta porfirista a la defensa armada de las tierras del río _______, encabezada por líderes como Cajeme.',
    options: ['Bravo', 'Usumacinta', 'Yaqui'],
    correct_option_index: 2,
    explanation:
      'El pueblo yaqui defendió el territorio del río Yaqui, en Sonora, frente al despojo impulsado durante el porfiriato; la respuesta gubernamental incluyó la deportación forzada de miles de yaquis a plantaciones distantes.',
    common_error:
      'Ubicar la resistencia yaqui en un río o región distinta a Sonora, perdiendo la relación entre el nombre del pueblo y el territorio que defendía.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-003',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      '¿Qué causa de fondo comparten la Guerra de Castas y la resistencia yaqui, a pesar de ocurrir en regiones distintas y tener desenlaces diferentes?',
    options: [
      'el despojo de tierras',
      'una disputa por la sucesión de un gobernante indígena',
      'un conflicto religioso entre facciones católicas'
    ],
    correct_option_index: 0,
    explanation:
      'Ambos movimientos surgen como respuesta al despojo de tierras: comunales en el caso maya de Yucatán, y del territorio del río Yaqui en el caso sonorense, aunque su región, época central y desenlace difieren.',
    common_error:
      'Buscar una causa distinta para cada movimiento sin notar que ambos responden, en el fondo, al mismo problema de despojo territorial.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-004',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'Relaciona cada elemento con el movimiento de resistencia que describe.\n\n1. Guerra de Castas\n2. Resistencia yaqui\n3. Ambos movimientos\n\na. Tienen como causa de fondo el despojo de tierras\nb. Termina cuando el ejército federal ocupa su centro de resistencia religioso-político\nc. Es respondida con la deportación forzada de su población a plantaciones distantes',
    options: ['1b, 2c, 3a', '1c, 2b, 3a', '1a, 2c, 3b'],
    correct_option_index: 0,
    explanation:
      'La Guerra de Castas termina con la ocupación federal de Chan Santa Cruz (b); la resistencia yaqui es respondida con la deportación masiva a plantaciones distantes (c); ambos movimientos comparten como causa de fondo el despojo de tierras (a).',
    common_error:
      'Intercambiar el desenlace de cada movimiento, atribuyendo la deportación a la Guerra de Castas o la ocupación militar de un centro propio a la resistencia yaqui.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-005',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'Ordena, de la causa a la consecuencia final, los sucesos de la resistencia yaqui frente al porfiriato.\n\n1. El gobierno responde con campañas militares contra la resistencia armada\n2. La colonización agrícola porfirista despoja tierras del territorio del río Yaqui\n3. Cajeme encabeza campañas armadas en defensa del territorio\n4. Miles de yaquis son deportados a plantaciones de Yucatán y del Valle Nacional',
    options: ['2, 3, 1, 4', '3, 2, 1, 4', '2, 1, 3, 4'],
    correct_option_index: 0,
    explanation:
      'El despojo de tierras por la colonización porfirista (2) provoca la defensa armada encabezada por Cajeme (3); el gobierno responde con campañas militares (1); y finalmente ejecuta la deportación forzada de miles de yaquis (4).',
    common_error:
      'Colocar la respuesta militar del gobierno antes de la defensa armada yaqui, invirtiendo la relación de causa y efecto del conflicto.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-001',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      '¿Qué ciudad actual de Quintana Roo tiene su origen en Chan Santa Cruz, el antiguo centro de resistencia maya de la Guerra de Castas?',
    options: ['Felipe Carrillo Puerto', 'Valladolid', 'Chetumal'],
    correct_option_index: 0,
    explanation:
      'Chan Santa Cruz, sede del culto a la «Cruz Parlante» durante la Guerra de Castas, es el origen de la actual ciudad de Felipe Carrillo Puerto, en Quintana Roo.',
    common_error:
      'Ubicar el legado de la Guerra de Castas en otra ciudad de la península de Yucatán que no fue el centro histórico del movimiento.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-002',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      '¿Cuál de las siguientes opciones es una manifestación cultural vigente hoy asociada al pueblo yaqui, y no un hecho histórico ya concluido de su resistencia?',
    options: ['la deportación de yaquis a plantaciones de Yucatán', 'la Danza del Venado', 'la Guerra de Castas'],
    correct_option_index: 1,
    explanation:
      'La Danza del Venado es una práctica cultural que se sigue realizando hoy como expresión viva de la identidad yaqui; la deportación y la Guerra de Castas son sucesos históricos ya concluidos, no manifestaciones actuales.',
    common_error:
      'Responder con un hecho histórico concluido cuando la pregunta pide una manifestación cultural vigente en el presente.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-003',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'En Sonora, la Danza del Venado y las celebraciones de _______ son manifestaciones vivas reconocidas de la identidad del pueblo yaqui.',
    options: ['la Independencia de México', 'la Cuaresma y Semana Santa yaqui', 'el Día de Muertos'],
    correct_option_index: 1,
    explanation:
      'La Cuaresma y Semana Santa yaqui, junto con la Danza del Venado, son celebraciones vigentes reconocidas como manifestaciones vivas de la identidad del pueblo yaqui en Sonora.',
    common_error:
      'Atribuir al pueblo yaqui una festividad de otro origen cultural, como el Día de Muertos, en lugar de sus propias celebraciones vigentes.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-004',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'Además de sus tradiciones religiosas y danzas, ¿qué otra forma contemporánea de reivindicación yaqui continúa hoy, ligada a la misma causa que motivó su resistencia histórica?',
    options: [
      'la organización comunal en defensa de su territorio y sus recursos',
      'la fundación de un nuevo centro político-religioso propio',
      'el reconocimiento de un gobierno yaqui autónomo por otros países'
    ],
    correct_option_index: 0,
    explanation:
      'El pueblo yaqui continúa hoy su organización comunal en defensa de su territorio y sus recursos, una forma contemporánea de la misma reivindicación territorial que motivó la resistencia histórica frente al porfiriato.',
    common_error:
      'Limitar el legado yaqui actual a sus expresiones religiosas o dancísticas, sin reconocer que la defensa organizada del territorio también continúa hoy.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-005',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'Relaciona cada manifestación actual con su descripción correcta.\n\n1. Felipe Carrillo Puerto\n2. Danza del Venado\n3. Organización comunal yaqui por el territorio\n\na. Reivindicación vigente con la misma causa que la resistencia histórica\nb. Ciudad que hereda el nombre y el culto religioso de un centro de resistencia maya\nc. Expresión cultural viva reconocida del pueblo yaqui',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Felipe Carrillo Puerto hereda el nombre y el culto de Chan Santa Cruz (b); la Danza del Venado es una expresión cultural viva del pueblo yaqui (c); la organización comunal yaqui por el territorio es una reivindicación vigente con la misma causa histórica (a).',
    common_error:
      'Atribuir la herencia religiosa de Chan Santa Cruz a una manifestación yaqui, mezclando el legado de un movimiento con el del otro.',
    source_reference: 'Guía oficial, página 13, código 3.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-001',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'Una persona nacida en territorio americano de padres españoles posee tierras y un negocio próspero, pero no puede ocupar los cargos eclesiásticos de mayor jerarquía del virreinato, reservados a quienes nacieron en España. ¿A qué grupo social pertenece?',
    options: ['a los peninsulares', 'a los criollos', 'a los mestizos'],
    correct_option_index: 1,
    explanation:
      'Los criollos eran hijos de españoles nacidos en América; podían poseer tierras y negocios, pero quedaban excluidos de los cargos políticos y eclesiásticos de mayor rango, reservados a los peninsulares.',
    common_error:
      'Confundir a los criollos con los peninsulares por compartir el origen español, sin distinguir que solo el lugar de nacimiento determinaba el acceso a los cargos más altos.',
    source_reference: 'Guía oficial, página 13, código 3.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-002',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'Los _______ estaban agrupados jurídicamente en «Repúblicas de Indios» y sujetos al pago de tributo a la Corona y al trabajo obligatorio en encomiendas o repartimientos.',
    options: ['mestizos', 'indígenas', 'esclavos'],
    correct_option_index: 1,
    explanation:
      'Los indígenas estaban organizados jurídicamente en Repúblicas de Indios, con autoridades propias limitadas, y sujetos al tributo y al trabajo obligatorio en encomiendas y repartimientos.',
    common_error:
      'Atribuir la obligación de tributo y trabajo forzado a los mestizos, en lugar de a los indígenas, por confundir posiciones sociales subordinadas distintas.',
    source_reference: 'Guía oficial, página 13, código 3.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-003',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'Una persona de origen africano trabaja sin salario en un ingenio azucarero novohispano y carece de derechos políticos por ser considerada jurídicamente propiedad de otra persona. ¿A qué grupo social pertenece?',
    options: ['a los mestizos', 'a los esclavos', 'a los indígenas'],
    correct_option_index: 1,
    explanation:
      'Los esclavos, en su mayoría de origen africano traídos mediante la trata transatlántica, eran jurídicamente considerados propiedad, sin derechos políticos, y se destinaban sobre todo a minas, ingenios azucareros y servicio doméstico.',
    common_error:
      'Equiparar la condición de los esclavos con la de los mestizos u otros grupos subordinados libres, sin distinguir que los esclavos eran jurídicamente propiedad de otra persona.',
    source_reference: 'Guía oficial, página 13, código 3.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-004',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'Una persona descendiente de españoles e indígenas se dedica al comercio en una ciudad novohispana, sin pertenecer formalmente a la república de indios ni a la élite española. ¿Qué rasgo define su posición social como mestizo?',
    options: [
      'una posición intermedia y ambigua, sin encajar en ninguna de las dos Repúblicas jurídicas',
      'una posición equivalente a la de un esclavo, por no encajar en ninguna categoría oficial',
      'una posición equivalente a la de un criollo, por descender parcialmente de españoles'
    ],
    correct_option_index: 0,
    explanation:
      'Los mestizos ocupaban una posición social intermedia y ambigua: no encajaban de forma clara ni en la República de Indios ni en la sociedad española, con ocupaciones diversas como el comercio.',
    common_error:
      'Asimilar la posición ambigua del mestizo a la de un grupo definido (esclavo o criollo), en lugar de reconocerla como una categoría social propia e intermedia.',
    source_reference: 'Guía oficial, página 13, código 3.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-005',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'Relaciona cada grupo social con la característica que lo distingue en la sociedad novohispana.\n\n1. Indígenas\n2. Criollos\n3. Esclavos\n\na. Excluidos de los cargos políticos y eclesiásticos más altos pese a su riqueza\nb. Sujetos a tributo y trabajo obligatorio dentro de Repúblicas de Indios\nc. Considerados jurídicamente propiedad, sin derechos políticos',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'Los indígenas estaban sujetos a tributo y trabajo obligatorio en Repúblicas de Indios (b); los criollos quedaban excluidos de los cargos más altos pese a su riqueza (a); los esclavos eran jurídicamente propiedad, sin derechos políticos (c).',
    common_error:
      'Intercambiar la exclusión política de los criollos con la sujeción a tributo de los indígenas, por tratarse ambos de formas de subordinación dentro del sistema novohispano.',
    source_reference: 'Guía oficial, página 13, código 3.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-001',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'El edificio actual del Palacio Nacional se construyó sobre el sitio que antes ocupó el palacio de Moctezuma y hoy es sede del Poder Ejecutivo Federal. ¿Cuál es el origen del edificio, tal como se conoce hoy?',
    options: [
      'prehispánico, porque el sitio ya tenía un palacio antes de la conquista',
      'virreinal, porque se construyó durante la colonia como sede del poder virreinal',
      'moderno, porque hoy es sede del gobierno federal'
    ],
    correct_option_index: 1,
    explanation:
      'El Palacio Nacional se construyó durante el virreinato como sede del principal poder político de la Nueva España; que su terreno tenga un antecedente prehispánico o que hoy sea sede del Poder Ejecutivo Federal no cambia su origen como construcción virreinal.',
    common_error:
      'Confundir el origen de un edificio con el antecedente prehispánico de su sitio o con el uso que tiene en la actualidad.',
    source_reference: 'Guía oficial, página 13, código 3.1.4; calibración de profundidad: página 31.',
    difficulty: 'intermediate',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-002',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'El Día de Muertos se sincretizó durante la colonia con las festividades católicas de Todos los Santos y Fieles Difuntos. ¿Cuál es su origen?',
    options: [
      'virreinal, porque el sincretismo con festividades católicas ocurrió durante la colonia',
      'prehispánico, porque proviene del culto a los muertos de pueblos mesoamericanos',
      'moderno, porque se consolidó como fiesta reconocida durante el siglo XX'
    ],
    correct_option_index: 1,
    explanation:
      'El Día de Muertos tiene origen prehispánico, en el culto a los muertos de pueblos mesoamericanos; el sincretismo con fiestas católicas ocurrió después, durante la colonia, pero no define su origen.',
    common_error:
      'Confundir el momento del sincretismo o la popularización de una tradición con el periodo en que realmente se originó.',
    source_reference: 'Guía oficial, página 13, código 3.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-003',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Los tapetes de Huamantla forman parte de una festividad católica en honor a la Virgen de la Caridad; su origen es _______, porque esa tradición religiosa se estableció durante la colonia.',
    options: ['prehispánico', 'moderno', 'virreinal'],
    correct_option_index: 2,
    explanation:
      'Los tapetes de Huamantla tienen origen virreinal, porque forman parte de una festividad católica cuya tradición se remonta a la época colonial.',
    common_error:
      'Atribuir origen prehispánico a cualquier tradición mexicana con fuerte arraigo popular, sin verificar el periodo en que realmente comenzó.',
    source_reference: 'Guía oficial, página 13, código 3.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-004',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Un elemento del patrimonio puede tener un antecedente prehispánico en el sitio donde se ubica y, además, un uso actual distinto al de su origen. ¿Qué determina realmente el origen de ese elemento?',
    options: [
      'el periodo en que la expresión, tal como se conoce, comenzó a existir',
      'el uso que tiene en la actualidad',
      'el antecedente del sitio donde se encuentra'
    ],
    correct_option_index: 0,
    explanation:
      'El origen de un elemento patrimonial es el periodo en que comenzó a existir tal como se conoce, sin importar qué había antes en el sitio ni para qué se usa hoy.',
    common_error:
      'Definir el origen de un elemento patrimonial a partir de su uso actual o del antecedente del sitio, en lugar del periodo en que la expresión misma comenzó a existir.',
    source_reference: 'Guía oficial, página 13, código 3.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-005',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Relaciona cada expresión del patrimonio con su origen correcto.\n\n1. Día de Muertos\n2. Tapetes de Huamantla\n3. Palacio Nacional\n\na. Origen virreinal, construido sobre un sitio con antecedente prehispánico\nb. Origen prehispánico, sincretizado después con festividades católicas\nc. Origen virreinal, como parte de una festividad católica colonial',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El Día de Muertos tiene origen prehispánico, sincretizado después con fiestas católicas (b); los tapetes de Huamantla tienen origen virreinal, como festividad católica colonial (c); el Palacio Nacional tiene origen virreinal, construido sobre un sitio con antecedente prehispánico (a).',
    common_error:
      'Invertir el origen del Palacio Nacional y el Día de Muertos, atribuyendo un antecedente prehispánico de sitio al origen mismo de la expresión.',
    source_reference: 'Guía oficial, página 13, código 3.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-001',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Una comunidad enseña a las nuevas generaciones una lengua indígena heredada de sus antepasados, para que se siga hablando. ¿Qué tipo de acción de preservación del patrimonio es esta?',
    options: ['documentación y registro', 'transmisión comunitaria', 'protección legal'],
    correct_option_index: 1,
    explanation:
      'Enseñar y mantener viva una lengua dentro de una comunidad, para que se siga transmitiendo, es transmisión comunitaria: una de las formas centrales de preservación del patrimonio inmaterial.',
    common_error:
      'Clasificar la enseñanza activa de una tradición como documentación, en lugar de reconocerla como transmisión comunitaria viva.',
    source_reference: 'Guía oficial, página 13, código 3.1.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-002',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Un sitio arqueológico recibe miles de visitantes al año y genera ingresos importantes para la localidad, pero no cuenta con ningún programa de mantenimiento ni restricciones de acceso a sus estructuras más frágiles. ¿Esto constituye una acción de preservación del patrimonio?',
    options: [
      'sí, porque la afluencia turística garantiza que el sitio se mantenga',
      'no, porque generar ingresos o recibir visitas no equivale a mantener o proteger el sitio',
      'sí, porque la difusión del sitio evita su deterioro'
    ],
    correct_option_index: 1,
    explanation:
      'La explotación turística sin medidas de conservación no es, por sí sola, una acción de preservación: puede dar visibilidad o beneficio económico, pero no garantiza que el sitio se mantenga.',
    common_error:
      'Confundir la popularidad o el aprovechamiento económico de un sitio con acciones reales que lo preserven.',
    source_reference: 'Guía oficial, página 13, código 3.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-003',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Declarar una zona arqueológica como monumento protegido, aplicando normas que restringen intervenciones dañinas, es un ejemplo de _______.',
    options: ['documentación y registro', 'transmisión comunitaria', 'protección legal'],
    correct_option_index: 2,
    explanation:
      'Una declaratoria que restringe intervenciones dañinas mediante una norma, como la Ley Federal sobre Monumentos y Zonas Arqueológicos, Artísticos e Históricos, es protección legal.',
    common_error:
      'Confundir una declaratoria legal con un simple registro o catalogación del elemento patrimonial.',
    source_reference: 'Guía oficial, página 13, código 3.1.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-004',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Un equipo especializado del INAH realiza trabajos técnicos de limpieza, consolidación estructural y reparación en un edificio histórico dañado por el tiempo. ¿Qué tipo de acción de preservación describe esto?',
    options: ['restauración y conservación material', 'documentación y registro', 'transmisión comunitaria'],
    correct_option_index: 0,
    explanation:
      'Los trabajos técnicos de mantenimiento y reparación de un sitio o edificio, a cargo de instituciones especializadas como el INAH, son restauración y conservación material.',
    common_error:
      'Clasificar un trabajo técnico de reparación física como documentación, en lugar de reconocerlo como restauración y conservación material.',
    source_reference: 'Guía oficial, página 13, código 3.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-005',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'Relaciona cada acción con el tipo de preservación del patrimonio que representa.\n\n1. Restauración y conservación material\n2. Protección legal\n3. Documentación y registro\n\na. Declarar una zona protegida mediante una norma\nb. Catalogar y fotografiar un elemento para conservar su información\nc. Reparar y mantener técnicamente un sitio o edificio',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'La restauración y conservación material repara y mantiene técnicamente un sitio (c); la protección legal declara una zona protegida mediante una norma (a); la documentación y registro cataloga y fotografía un elemento para conservar su información (b).',
    common_error:
      'Confundir la protección legal, que es normativa, con la restauración, que es un trabajo técnico directo sobre el elemento.',
    source_reference: 'Guía oficial, página 13, código 3.1.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
