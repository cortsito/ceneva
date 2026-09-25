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
  },
  {
    id: 'ch-cdi-001',
    topic_id: 'ch-3-2-1-causas-internas-y-externas-de-la-independencia',
    prompt:
      'En 1808, la invasión napoleónica a España provocó las abdicaciones de Bayona, dejando a la Corona sin un gobernante reconocido. ¿Cómo se clasifica esta causa de la independencia de México?',
    options: ['interna y política', 'externa y política', 'externa y económica'],
    correct_option_index: 1,
    explanation:
      'El hecho ocurrió en España, fuera de Nueva España, por lo que es externa; y afecta directamente la legitimidad del gobierno, por lo que es de naturaleza política.',
    common_error:
      'Clasificar como interna una causa que ocurrió en España solo porque afectó a Nueva España, sin distinguir el origen geográfico del hecho de sus efectos.',
    source_reference: 'Guía oficial, página 13, código 3.2.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdi-002',
    topic_id: 'ch-3-2-1-causas-internas-y-externas-de-la-independencia',
    prompt:
      'Los criollos poseían riqueza y educación, pero quedaban excluidos de los cargos de gobierno y eclesiásticos más altos, reservados a los _______, lo que generó una causa interna y política de la independencia.',
    options: ['los peninsulares', 'los mestizos', 'los indígenas'],
    correct_option_index: 0,
    explanation:
      'Los cargos políticos y eclesiásticos de mayor jerarquía estaban reservados a los peninsulares, lo que generaba en los criollos un descontento político que impulsó las aspiraciones de autogobierno.',
    common_error:
      'Atribuir la exclusión de los cargos más altos a un grupo subordinado como los mestizos o los indígenas, en lugar de a los peninsulares.',
    source_reference: 'Guía oficial, página 13, código 3.2.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdi-003',
    topic_id: 'ch-3-2-1-causas-internas-y-externas-de-la-independencia',
    prompt:
      'La restricción del comercio novohispano en favor del comercio con España, que limitaba a los criollos desarrollar manufactura o comerciar libremente con otras naciones, es una causa de la independencia clasificada como...',
    options: ['interna y económica', 'externa y económica', 'interna y social'],
    correct_option_index: 0,
    explanation:
      'La restricción comercial ocurría dentro del propio sistema novohispano y afectaba directamente la actividad económica de los criollos, por lo que es una causa interna y económica.',
    common_error:
      'Clasificar esta causa como externa por tratarse de una relación comercial con España, sin notar que la restricción operaba dentro del propio territorio novohispano.',
    source_reference: 'Guía oficial, página 13, código 3.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdi-004',
    topic_id: 'ch-3-2-1-causas-internas-y-externas-de-la-independencia',
    prompt:
      'El sistema de castas novohispano sujetaba a indígenas, mestizos y esclavos a tributo, trabajo obligatorio y exclusión jurídica. ¿Cómo se clasifica esta causa de la independencia?',
    options: ['interna y social', 'externa y social', 'interna y política'],
    correct_option_index: 0,
    explanation:
      'El sistema de castas operaba dentro de Nueva España y afectaba las relaciones entre grupos sociales, por lo que es una causa interna y social.',
    common_error:
      'Confundir el malestar social generado por el sistema de castas con una causa política, en lugar de reconocerlo como una causa de naturaleza social.',
    source_reference: 'Guía oficial, página 13, código 3.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdi-005',
    topic_id: 'ch-3-2-1-causas-internas-y-externas-de-la-independencia',
    prompt:
      'Relaciona cada causa de la independencia con su clasificación correcta.\n\n1. Invasión napoleónica y abdicaciones de Bayona\n2. Exclusión de los criollos de los cargos de gobierno más altos\n3. Ideas ilustradas y ejemplos de independencia de Estados Unidos y Francia\n\na. Interna y política\nb. Externa y política\nc. Externa e ideológica, con efecto político',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'La invasión napoleónica es externa y política (b); la exclusión de los criollos de los cargos de gobierno es interna y política (a); la difusión de ideas ilustradas y ejemplos extranjeros es externa, con efecto sobre las ideas de gobierno (c).',
    common_error:
      'Intercambiar la clasificación de la invasión napoleónica con la de la exclusión de los criollos, por tratarse ambas de causas políticas de origen distinto.',
    source_reference: 'Guía oficial, página 13, código 3.2.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pde-001',
    topic_id: 'ch-3-2-2-proyectos-de-emancipacion-del-siglo-xix',
    prompt:
      'En 1813, ante el Congreso de Chilpancingo, José María Morelos presentó un documento que rompía con el orden colonial: proponía separar el gobierno en un poder ejecutivo, uno legislativo y uno judicial distintos, sostenía que la autoridad de gobernar provenía del pueblo y no del rey, y ordenaba terminar con la esclavitud en el territorio insurgente. ¿Cómo se conoce este documento?',
    options: ['Plan de Iguala', 'Plan de Ayala', 'Sentimientos de la Nación'],
    correct_option_index: 2,
    explanation:
      'Los Sentimientos de la Nación, presentados por Morelos en 1813, plantearon la división de poderes, la soberanía popular y la abolición de la esclavitud, a diferencia del Plan de Iguala (Ejército Trigarante) y el Plan de Ayala (Revolución mexicana).',
    common_error:
      'Confundir los Sentimientos de la Nación con el Plan de Iguala o el Plan de Ayala, documentos de proyectos emancipadores distintos y de épocas diferentes.',
    source_reference: 'Guía oficial, página 13, código 3.2.2; calibración de profundidad: página 31.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-pde-002',
    topic_id: 'ch-3-2-2-proyectos-de-emancipacion-del-siglo-xix',
    prompt:
      'El Plan de Iguala (1821) sostenía la independencia de México sobre tres garantías: Religión, Independencia y _______.',
    options: ['Unión', 'Igualdad', 'Libertad'],
    correct_option_index: 0,
    explanation:
      'Las Tres Garantías del Plan de Iguala eran Religión, Independencia y Unión, esta última referida a la unión entre insurgentes y realistas, criollos y peninsulares.',
    common_error:
      'Sustituir la garantía de Unión por conceptos generales como Igualdad o Libertad, que no forman parte de las Tres Garantías del Plan de Iguala.',
    source_reference: 'Guía oficial, página 13, código 3.2.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pde-003',
    topic_id: 'ch-3-2-2-proyectos-de-emancipacion-del-siglo-xix',
    prompt:
      'A diferencia del proyecto de Morelos, el proyecto del Ejército Trigarante buscaba la independencia mediante...',
    options: [
      'una ruptura republicana con el orden colonial',
      'una unión negociada entre insurgentes y realistas que preservara el orden social',
      'la abolición inmediata de la esclavitud y los fueros'
    ],
    correct_option_index: 1,
    explanation:
      'El proyecto del Ejército Trigarante buscaba la independencia mediante la unión de insurgentes y realistas, preservando el orden social existente, a diferencia de la ruptura republicana propuesta por Morelos.',
    common_error:
      'Atribuir al Ejército Trigarante la ruptura social y la abolición de privilegios propias del proyecto de Morelos.',
    source_reference: 'Guía oficial, página 13, código 3.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pde-004',
    topic_id: 'ch-3-2-2-proyectos-de-emancipacion-del-siglo-xix',
    prompt:
      '¿Qué elemento distingue de fondo al proyecto de Morelos del proyecto del Ejército Trigarante, más allá de la fecha en que se propusieron?',
    options: [
      'Morelos buscaba una ruptura social y republicana; el Ejército Trigarante buscaba preservar el orden social existente',
      'Morelos buscaba preservar los fueros del clero; el Ejército Trigarante buscaba abolirlos',
      'ambos proyectos coincidían en abolir la esclavitud y dividir los poderes'
    ],
    correct_option_index: 0,
    explanation:
      'La diferencia de fondo es que Morelos proponía una ruptura republicana y social con el orden colonial, mientras que el Ejército Trigarante buscaba la independencia preservando ese orden mediante la unión de las fuerzas antes enfrentadas.',
    common_error:
      'Reducir la diferencia entre ambos proyectos a la fecha en que se propusieron, sin reconocer la diferencia de fondo en su proyecto de nación.',
    source_reference: 'Guía oficial, página 13, código 3.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pde-005',
    topic_id: 'ch-3-2-2-proyectos-de-emancipacion-del-siglo-xix',
    prompt:
      'Relaciona cada elemento con el proyecto emancipador al que pertenece.\n\n1. Sentimientos de la Nación\n2. Plan de Iguala\n3. Ambos proyectos\n\na. Buscan la independencia de México de España\nb. Divide los poderes y declara la soberanía emanada del pueblo\nc. Sostiene la unión entre insurgentes y realistas bajo tres garantías',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Los Sentimientos de la Nación dividen los poderes y declaran la soberanía popular (b); el Plan de Iguala sostiene la unión entre insurgentes y realistas bajo tres garantías (c); ambos proyectos buscan la independencia de México de España (a).',
    common_error:
      'Atribuir la soberanía emanada del pueblo al Plan de Iguala, en lugar de a los Sentimientos de la Nación de Morelos.',
    source_reference: 'Guía oficial, página 13, código 3.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-lbm-001',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt: '¿Cuál de las siguientes es una característica del liberalismo mexicano de mediados del siglo XIX?',
    options: [
      'la defensa de los fueros del clero y el ejército',
      'la separación entre la Iglesia y el Estado',
      'la preservación de la propiedad corporativa de la Iglesia'
    ],
    correct_option_index: 1,
    explanation:
      'El liberalismo mexicano defendía la separación entre la Iglesia y el Estado, en oposición al conservadurismo, que defendía los fueros del clero y la propiedad corporativa.',
    common_error:
      'Atribuir al liberalismo mexicano posturas propias del conservadurismo, como la defensa de los fueros o de la propiedad corporativa.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-lbm-002',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      'El liberalismo mexicano buscaba que las tierras en manos de corporaciones, como la Iglesia y las comunidades indígenas, pasaran a manos de propietarios _______, para volverlas productivas.',
    options: ['individuales', 'eclesiásticos', 'comunales'],
    correct_option_index: 0,
    explanation:
      'El liberalismo consideraba que la propiedad individual, no la corporativa, era la que permitía volver productiva la tierra dentro de una economía de mercado.',
    common_error:
      'Suponer que el liberalismo buscaba fortalecer la propiedad comunal o eclesiástica, cuando en realidad buscaba transferirla a propietarios individuales.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-lbm-003',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      'El conflicto armado entre liberales y conservadores de 1858 a 1861, provocado por las diferencias sobre los fueros y la propiedad corporativa, se conoce como...',
    options: ['la Guerra de Reforma', 'la Guerra de Castas', 'la Guerra de los Pasteles'],
    correct_option_index: 0,
    explanation:
      'La Guerra de Reforma (1858-1861) fue el conflicto armado entre liberales y conservadores derivado de las diferencias sobre los fueros y la propiedad corporativa.',
    common_error:
      'Confundir la Guerra de Reforma con conflictos de otra naturaleza o época, como la Guerra de Castas o la Guerra de los Pasteles.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-lbm-004',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      '¿Qué grupo político se oponía al liberalismo mexicano defendiendo los fueros del clero y el ejército, la propiedad corporativa y, en ocasiones, un gobierno monárquico?',
    options: ['el grupo conservador', 'el grupo convencionista', 'el grupo constitucionalista'],
    correct_option_index: 0,
    explanation:
      'El grupo conservador defendía los fueros del clero y el ejército, la propiedad corporativa y, en algunos casos, un gobierno monárquico, en oposición directa al proyecto liberal.',
    common_error:
      'Confundir al grupo conservador de mediados del siglo XIX con facciones de la Revolución mexicana, como los convencionistas o constitucionalistas, de una época distinta.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-lbm-005',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      'Relaciona cada postura con el grupo político al que pertenece.\n\n1. Liberalismo mexicano\n2. Conservadurismo\n3. Ambos grupos\n\na. Defiende los fueros del clero y el ejército\nb. Busca la propiedad individual sobre la propiedad corporativa\nc. Surgen del debate sobre la organización del Estado mexicano tras la independencia',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El liberalismo busca la propiedad individual sobre la corporativa (b); el conservadurismo defiende los fueros del clero y el ejército (a); ambos grupos surgen del debate sobre la organización del Estado mexicano tras la independencia (c).',
    common_error:
      'Intercambiar la defensa de los fueros con la búsqueda de propiedad individual, atribuyendo cada postura al grupo contrario.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ilb-001',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt: '¿Qué ley de 1855 suprimió los fueros del clero y el ejército en asuntos civiles?',
    options: ['la Ley Lerdo', 'la Ley Iglesias', 'la Ley Juárez'],
    correct_option_index: 2,
    explanation:
      'La Ley Juárez (1855) suprimió los fueros o tribunales especiales del clero y el ejército en asuntos civiles, obligándolos a responder ante los tribunales comunes.',
    common_error:
      'Confundir la Ley Juárez, referida a los fueros, con la Ley Lerdo, referida a la propiedad de la tierra, por ser ambas leyes liberales de la misma época.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-ilb-002',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      'La Ley _______, de 1856, obligó a la Iglesia y a las comunidades indígenas a vender las tierras no destinadas al culto o al uso directo.',
    options: ['Juárez', 'Lerdo', 'Iglesias'],
    correct_option_index: 1,
    explanation:
      'La Ley Lerdo (1856) obligó a vender las tierras corporativas de la Iglesia y las comunidades indígenas no destinadas al culto o al uso directo, conocidas como bienes de manos muertas.',
    common_error:
      'Atribuir la obligación de vender tierras corporativas a la Ley Juárez o a la Ley Iglesias, que regulan asuntos distintos.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ilb-003',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      '¿Qué institución aplicó la separación entre Iglesia y Estado al registrar los nacimientos, matrimonios y defunciones de la población?',
    options: ['el Registro Civil', 'la Ley Iglesias', 'el Congreso Constituyente'],
    correct_option_index: 0,
    explanation:
      'El Registro Civil se creó para que el Estado, y no la Iglesia, registrara los actos civiles de las personas, aplicando la separación entre Iglesia y Estado.',
    common_error:
      'Confundir el Registro Civil, una institución de registro, con la Ley Iglesias, que regula el cobro de derechos parroquiales.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ilb-004',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      '¿Qué documento de 1857 reunió los principios liberales —forma de gobierno republicana y federal, garantías individuales y fin de los fueros— en un solo texto jurídico?',
    options: ['la Constitución de 1857', 'el Plan de Iguala', 'los Sentimientos de la Nación'],
    correct_option_index: 0,
    explanation:
      'La Constitución de 1857 reunió los principios del proyecto liberal en un solo texto jurídico, incluyendo la forma de gobierno republicana y federal y la eliminación formal de los fueros.',
    common_error:
      'Confundir la Constitución de 1857 con documentos de proyectos emancipadores anteriores, como el Plan de Iguala o los Sentimientos de la Nación.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ilb-005',
    topic_id: 'ch-3-2-3-caracteristicas-e-impacto-del-liberalismo-mexicano',
    prompt:
      'Relaciona cada ley o institución con la característica liberal que aplica.\n\n1. Ley Juárez\n2. Ley Lerdo\n3. Registro Civil\n\na. Propiedad individual sobre la propiedad corporativa\nb. Separación entre Iglesia y Estado en actos civiles\nc. Fin de los fueros del clero y el ejército',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'La Ley Juárez aplica el fin de los fueros (c); la Ley Lerdo aplica la propiedad individual sobre la corporativa (a); el Registro Civil aplica la separación entre Iglesia y Estado en actos civiles (b).',
    common_error:
      'Intercambiar la Ley Juárez y la Ley Lerdo, atribuyendo el fin de los fueros a la propiedad de la tierra o viceversa.',
    source_reference: 'Guía oficial, página 13, código 3.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-iex-001',
    topic_id: 'ch-3-2-4-intervenciones-de-francia-y-estados-unidos-en-mexico',
    prompt:
      '¿Qué conflicto de 1838-1839 fue provocado por el reclamo francés de indemnización por daños a comercios franceses, entre ellos una pastelería?',
    options: ['la Guerra México-Estados Unidos', 'la primera intervención francesa', 'la Guerra de Reforma'],
    correct_option_index: 1,
    explanation:
      'La primera intervención francesa, conocida popularmente como la Guerra de los Pasteles, fue provocada por el reclamo de indemnización por daños a comercios franceses.',
    common_error:
      'Confundir la primera intervención francesa con la Guerra México-Estados Unidos, un conflicto distinto de la misma época.',
    source_reference: 'Guía oficial, página 14, código 3.2.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-iex-002',
    topic_id: 'ch-3-2-4-intervenciones-de-francia-y-estados-unidos-en-mexico',
    prompt:
      'El bloqueo del puerto de _______ y el bombardeo del fuerte de San Juan de Ulúa fueron acciones militares francesas durante la llamada Guerra de los Pasteles.',
    options: ['Veracruz', 'Tampico', 'Mazatlán'],
    correct_option_index: 0,
    explanation:
      'Francia bloqueó el puerto de Veracruz y bombardeó el fuerte de San Juan de Ulúa como parte de sus acciones militares durante la Guerra de los Pasteles.',
    common_error:
      'Ubicar el bloqueo francés en un puerto distinto a Veracruz, perdiendo la relación entre el suceso y el lugar donde ocurrió.',
    source_reference: 'Guía oficial, página 14, código 3.2.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-iex-003',
    topic_id: 'ch-3-2-4-intervenciones-de-francia-y-estados-unidos-en-mexico',
    prompt: '¿Qué tratado de 1848 puso fin a la guerra entre México y Estados Unidos, con la cesión de territorio mexicano?',
    options: ['el Tratado de Guadalupe Hidalgo', 'el Plan de Iguala', 'el Plan de Guadalupe'],
    correct_option_index: 0,
    explanation:
      'El Tratado de Guadalupe Hidalgo (1848) puso fin a la guerra entre México y Estados Unidos, con la cesión de los territorios que hoy forman California, Nuevo México y otros estados.',
    common_error:
      'Confundir el Tratado de Guadalupe Hidalgo con documentos de otra época, como el Plan de Iguala o el Plan de Guadalupe de la Revolución mexicana.',
    source_reference: 'Guía oficial, página 14, código 3.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-iex-004',
    topic_id: 'ch-3-2-4-intervenciones-de-francia-y-estados-unidos-en-mexico',
    prompt:
      '¿Qué diferencia central distingue el desenlace de la primera intervención francesa del desenlace de la Guerra México-Estados Unidos?',
    options: [
      'la intervención francesa terminó sin cesión territorial mexicana, mientras que la guerra con Estados Unidos terminó con la mayor cesión de territorio de la historia de México',
      'ambos conflictos terminaron con la misma cesión de territorio mexicano',
      'la intervención francesa terminó con cesión de territorio, mientras que la guerra con Estados Unidos terminó sin cesión alguna'
    ],
    correct_option_index: 0,
    explanation:
      'La primera intervención francesa se resolvió mediante mediación diplomática sin pérdida territorial, mientras que la Guerra México-Estados Unidos terminó con la cesión de gran parte del territorio del norte mexicano.',
    common_error:
      'Invertir el desenlace de ambos conflictos, atribuyendo la cesión territorial a la intervención francesa.',
    source_reference: 'Guía oficial, página 14, código 3.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-iex-005',
    topic_id: 'ch-3-2-4-intervenciones-de-francia-y-estados-unidos-en-mexico',
    prompt:
      'Ordena, de la causa a la consecuencia final, los sucesos de la Guerra México-Estados Unidos.\n\n1. Estados Unidos anexa Texas\n2. Estalla el conflicto militar por la disputa de límites\n3. México es derrotado militarmente\n4. Se firma el Tratado de Guadalupe Hidalgo y México cede territorio',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'La anexión de Texas (1) provoca el conflicto por la disputa de límites (2); México es derrotado militarmente (3); y finalmente se firma el Tratado de Guadalupe Hidalgo, con la cesión de territorio (4).',
    common_error:
      'Colocar el estallido del conflicto militar antes de la anexión de Texas, invirtiendo la relación de causa y efecto.',
    source_reference: 'Guía oficial, página 14, código 3.2.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-msx-001',
    topic_id: 'ch-3-2-5-movimientos-sociales-del-siglo-xix',
    prompt: '¿Qué movimiento obrero de la década de 1810 destruía maquinaria industrial por considerarla responsable del desempleo?',
    options: ['el cartismo', 'el anarquismo', 'el ludismo'],
    correct_option_index: 2,
    explanation:
      'El ludismo, en la Inglaterra de la década de 1810, destruía maquinaria industrial por considerarla responsable de la pérdida de empleos y la baja de salarios.',
    common_error:
      'Confundir el ludismo con el cartismo o el anarquismo, movimientos posteriores con métodos de acción distintos.',
    source_reference: 'Guía oficial, página 14, código 3.2.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-msx-002',
    topic_id: 'ch-3-2-5-movimientos-sociales-del-siglo-xix',
    prompt: 'El cartismo británico organizó una petición formal, la Carta del Pueblo, que exigía el sufragio masculino y el voto _______.',
    options: ['secreto', 'censitario', 'hereditario'],
    correct_option_index: 0,
    explanation:
      'La Carta del Pueblo del cartismo exigía, entre otras reformas, el sufragio masculino y el voto secreto, además del fin de los requisitos de propiedad para ser diputado.',
    common_error:
      'Atribuir al cartismo una exigencia de voto censitario, que es precisamente el requisito de propiedad que el movimiento buscaba eliminar.',
    source_reference: 'Guía oficial, página 14, código 3.2.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-msx-003',
    topic_id: 'ch-3-2-5-movimientos-sociales-del-siglo-xix',
    prompt:
      '¿Qué corriente rechazaba tanto la propiedad privada como la autoridad del Estado, proponiendo comunidades autogestionadas sin gobierno centralizado?',
    options: ['el anarquismo', 'el cartismo', 'el ludismo'],
    correct_option_index: 0,
    explanation:
      'El anarquismo rechazaba tanto la propiedad privada como la autoridad del Estado, proponiendo su abolición mediante comunidades autogestionadas.',
    common_error:
      'Atribuir el rechazo a la autoridad del Estado al cartismo, que buscaba reformas dentro del sistema político, no su eliminación.',
    source_reference: 'Guía oficial, página 14, código 3.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-msx-004',
    topic_id: 'ch-3-2-5-movimientos-sociales-del-siglo-xix',
    prompt: '¿Qué distingue al cartismo del ludismo como métodos de acción frente a la industrialización?',
    options: [
      'el cartismo buscaba reformas político-electorales mediante una petición formal; el ludismo destruía maquinaria de forma directa',
      'el cartismo destruía maquinaria; el ludismo buscaba reformas electorales',
      'ambos movimientos rechazaban la existencia del Estado'
    ],
    correct_option_index: 0,
    explanation:
      'El cartismo buscaba reformas político-electorales mediante una petición formal, mientras que el ludismo actuaba destruyendo directamente la maquinaria industrial.',
    common_error:
      'Invertir los métodos de acción del cartismo y el ludismo, atribuyendo la destrucción de maquinaria al cartismo.',
    source_reference: 'Guía oficial, página 14, código 3.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-msx-005',
    topic_id: 'ch-3-2-5-movimientos-sociales-del-siglo-xix',
    prompt:
      'Relaciona cada movimiento con su rasgo distintivo.\n\n1. Ludismo\n2. Cartismo\n3. Anarquismo\n\na. Rechaza la propiedad privada y la autoridad del Estado\nb. Destruye maquinaria industrial\nc. Exige reformas político-electorales mediante una petición formal',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El ludismo destruye maquinaria industrial (b); el cartismo exige reformas político-electorales mediante una petición formal (c); el anarquismo rechaza la propiedad privada y la autoridad del Estado (a).',
    common_error:
      'Atribuir el rechazo a la propiedad privada y el Estado al cartismo, en lugar de reconocerlo como rasgo distintivo del anarquismo.',
    source_reference: 'Guía oficial, página 14, código 3.2.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ebc-001',
    topic_id: 'ch-3-2-6-consecuencias-de-la-enajenacion-de-bienes-comunales',
    prompt: '¿Cuál fue la consecuencia social principal de la enajenación de bienes comunales ordenada por la Ley Lerdo?',
    options: [
      'el reparto equitativo de tierras entre pequeños propietarios indígenas',
      'el despojo de tierras comunales y su concentración en haciendas',
      'el fortalecimiento de la propiedad corporativa de la Iglesia'
    ],
    correct_option_index: 1,
    explanation:
      'La enajenación de bienes comunales derivó, en la práctica, en el despojo de tierras comunales y su concentración en manos de hacendados, no en un reparto equitativo entre pequeños propietarios.',
    common_error:
      'Suponer que la Ley Lerdo logró el objetivo declarado de crear pequeños propietarios individuales, sin considerar su consecuencia real de despojo y concentración.',
    source_reference: 'Guía oficial, página 14, código 3.2.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-ebc-002',
    topic_id: 'ch-3-2-6-consecuencias-de-la-enajenacion-de-bienes-comunales',
    prompt:
      'Muchas comunidades indígenas no contaban con los recursos legales o económicos para comprar sus propias tierras cuando se pusieron a la venta, por lo que estas terminaron en manos de _______ con más capital.',
    options: ['hacendados y especuladores', 'autoridades eclesiásticas', 'gobiernos extranjeros'],
    correct_option_index: 0,
    explanation:
      'Las tierras comunales enajenadas terminaron, en su mayoría, en manos de hacendados y especuladores con capital suficiente para comprarlas, no de las propias comunidades indígenas.',
    common_error:
      'Atribuir la compra de las tierras enajenadas a la Iglesia o a gobiernos extranjeros, en lugar de a hacendados y especuladores nacionales.',
    source_reference: 'Guía oficial, página 14, código 3.2.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ebc-003',
    topic_id: 'ch-3-2-6-consecuencias-de-la-enajenacion-de-bienes-comunales',
    prompt: '¿Qué consecuencia de largo plazo tuvo el despojo de tierras comunales sobre el campo mexicano?',
    options: [
      'un aumento del descontento rural que alimentó después demandas agrarias como las del zapatismo',
      'la eliminación completa del trabajo asalariado en las haciendas',
      'el fortalecimiento inmediato de la pequeña propiedad indígena'
    ],
    correct_option_index: 0,
    explanation:
      'El despojo de tierras comunales generó un malestar social acumulado en el campo que, décadas después, alimentó demandas agrarias como las del zapatismo durante la Revolución mexicana.',
    common_error:
      'Suponer que el despojo de tierras comunales no tuvo consecuencias de largo plazo sobre el descontento rural mexicano.',
    source_reference: 'Guía oficial, página 14, código 3.2.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ebc-004',
    topic_id: 'ch-3-2-6-consecuencias-de-la-enajenacion-de-bienes-comunales',
    prompt: '¿Por qué se dice que la Ley Lerdo tuvo un resultado contrario a su objetivo declarado?',
    options: [
      'porque buscaba crear pequeños propietarios individuales productivos, pero en la práctica favoreció la concentración de tierras en pocas manos',
      'porque buscaba concentrar la tierra en manos de la Iglesia, pero terminó repartiéndola entre comunidades indígenas',
      'porque no tuvo ningún efecto sobre la propiedad de la tierra en México'
    ],
    correct_option_index: 0,
    explanation:
      'La Ley Lerdo buscaba fomentar la propiedad individual y productiva, pero en la práctica favoreció la concentración de tierras en hacendados y especuladores con capital para comprarlas.',
    common_error:
      'Suponer que el objetivo declarado de una ley coincide siempre con su consecuencia real, sin distinguir ambos aspectos.',
    source_reference: 'Guía oficial, página 14, código 3.2.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ebc-005',
    topic_id: 'ch-3-2-6-consecuencias-de-la-enajenacion-de-bienes-comunales',
    prompt:
      'Ordena, de la causa al efecto final, el proceso de enajenación de bienes comunales.\n\n1. La Ley Lerdo obliga a vender tierras comunales no destinadas al culto o al uso directo\n2. Las comunidades sin recursos para comprar sus propias tierras las pierden ante compradores con más capital\n3. Las tierras se concentran en haciendas y aumenta el descontento rural\n4. Ese descontento alimenta décadas después demandas agrarias como las del zapatismo',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'La Ley Lerdo obliga a vender las tierras comunales (1); las comunidades sin recursos las pierden ante compradores con capital (2); las tierras se concentran en haciendas y aumenta el descontento rural (3); ese descontento alimenta décadas después demandas agrarias como las del zapatismo (4).',
    common_error:
      'Colocar la concentración de tierras en haciendas antes de la pérdida de tierras por las comunidades, invirtiendo la secuencia causal.',
    source_reference: 'Guía oficial, página 14, código 3.2.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdp-001',
    topic_id: 'ch-3-2-7-caracteristicas-del-porfiriato',
    prompt: '¿Qué lema resume el proyecto de gobierno del porfiriato?',
    options: ['«tierra y libertad»', '«sufragio efectivo, no reelección»', '«orden y progreso»'],
    correct_option_index: 2,
    explanation:
      'El porfiriato resumía su proyecto de gobierno en el lema «orden y progreso», que combinaba la modernización material con la estabilidad política bajo un gobierno prolongado.',
    common_error:
      'Confundir el lema del porfiriato con consignas de movimientos que se opusieron a él, como «tierra y libertad» o «sufragio efectivo, no reelección».',
    source_reference: 'Guía oficial, página 14, código 3.2.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdp-002',
    topic_id: 'ch-3-2-7-caracteristicas-del-porfiriato',
    prompt:
      'Durante el porfiriato se construyeron _______ financiados en buena medida con inversión extranjera de Estados Unidos, Gran Bretaña y Francia.',
    options: ['ferrocarriles', 'ejidos', 'templos coloniales'],
    correct_option_index: 0,
    explanation:
      'Los ferrocarriles construidos durante el porfiriato se financiaron en buena medida con inversión extranjera, como parte de la modernización material del régimen.',
    common_error:
      'Atribuir al porfiriato la construcción de ejidos, una institución de reparto agrario posterior, propia de la Revolución mexicana.',
    source_reference: 'Guía oficial, página 14, código 3.2.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdp-003',
    topic_id: 'ch-3-2-7-caracteristicas-del-porfiriato',
    prompt: '¿Qué pintor porfirista representó el ferrocarril como elemento del paisaje mexicano, símbolo de la modernización del régimen?',
    options: ['José María Velasco', 'Diego Rivera', 'José Clemente Orozco'],
    correct_option_index: 0,
    explanation:
      'José María Velasco, pintor paisajista porfirista, incorporó el ferrocarril como elemento del paisaje mexicano, representando así el progreso material del régimen.',
    common_error:
      'Atribuir esta representación pictórica del porfiriato a muralistas posteriores a la Revolución, como Diego Rivera o José Clemente Orozco.',
    source_reference: 'Guía oficial, página 14, código 3.2.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdp-004',
    topic_id: 'ch-3-2-7-caracteristicas-del-porfiriato',
    prompt: 'Además de la modernización material, ¿qué otro rasgo caracterizó al gobierno porfirista?',
    options: [
      'la reelección continua de Díaz y la represión de la oposición política y las huelgas obreras',
      'la alternancia democrática regular del poder ejecutivo',
      'la eliminación completa de la desigualdad social en el campo'
    ],
    correct_option_index: 0,
    explanation:
      'El porfiriato combinó la modernización material con la reelección continua de Porfirio Díaz y la represión de la oposición política y las huelgas obreras.',
    common_error:
      'Reducir el porfiriato únicamente a su modernización material, sin reconocer la represión política y la desigualdad social que lo caracterizaron igualmente.',
    source_reference: 'Guía oficial, página 14, código 3.2.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cdp-005',
    topic_id: 'ch-3-2-7-caracteristicas-del-porfiriato',
    prompt:
      'Relaciona cada elemento con el aspecto del porfiriato que representa.\n\n1. Ferrocarril representado en pintura paisajista\n2. Reelección continua y censura de la prensa\n3. Concentración de tierras en haciendas\n\na. Represión política\nb. Modernización material\nc. Desigualdad social en el campo',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El ferrocarril en pintura paisajista representa la modernización material (b); la reelección continua y la censura representan la represión política (a); la concentración de tierras representa la desigualdad social en el campo (c).',
    common_error:
      'Atribuir la modernización material a la concentración de tierras, en lugar de reconocerla como un rasgo distinto del porfiriato.',
    source_reference: 'Guía oficial, página 14, código 3.2.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oap-001',
    topic_id: 'ch-3-2-8-movimientos-de-oposicion-al-porfiriato',
    prompt:
      '¿Qué corriente ideológica de orientación anarquista, encabezada por Ricardo Flores Magón, difundió sus ideas mediante el periódico «Regeneración»?',
    options: ['el zapatismo', 'el magonismo', 'el constitucionalismo'],
    correct_option_index: 1,
    explanation:
      'El magonismo, encabezado por Ricardo Flores Magón y de orientación anarquista, difundió sus ideas mediante el periódico «Regeneración».',
    common_error:
      'Confundir el magonismo con el zapatismo o el constitucionalismo, movimientos de oposición con liderazgo, base social y método de acción distintos.',
    source_reference: 'Guía oficial, página 14, código 3.2.8.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-oap-002',
    topic_id: 'ch-3-2-8-movimientos-de-oposicion-al-porfiriato',
    prompt:
      'El Partido Liberal Mexicano, fundado en 1906 por los hermanos Flores Magón, publicó un programa con demandas laborales como la jornada de _______ horas.',
    options: ['ocho', 'doce', 'seis'],
    correct_option_index: 0,
    explanation:
      'El Programa del Partido Liberal Mexicano de 1906 incluyó, entre sus demandas laborales, la jornada de ocho horas, más tarde recogida en la Constitución de 1917.',
    common_error:
      'Atribuir al Programa del Partido Liberal Mexicano una jornada laboral distinta de ocho horas.',
    source_reference: 'Guía oficial, página 14, código 3.2.8.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oap-003',
    topic_id: 'ch-3-2-8-movimientos-de-oposicion-al-porfiriato',
    prompt: '¿Cuál es la relación correcta entre el magonismo y el Partido Liberal Mexicano?',
    options: [
      'el magonismo es la corriente ideológica y el Partido Liberal Mexicano es la organización partidaria que le dio forma institucional',
      'son dos movimientos independientes sin relación entre sí',
      'el Partido Liberal Mexicano es anterior al magonismo y lo originó'
    ],
    correct_option_index: 0,
    explanation:
      'El magonismo es la corriente ideológica encabezada por los hermanos Flores Magón, y el Partido Liberal Mexicano es la organización formal que fundaron en 1906 para darle estructura institucional.',
    common_error:
      'Tratar al magonismo y al Partido Liberal Mexicano como movimientos independientes, sin reconocer que el segundo es la organización formal del primero.',
    source_reference: 'Guía oficial, página 14, código 3.2.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oap-004',
    topic_id: 'ch-3-2-8-movimientos-de-oposicion-al-porfiriato',
    prompt: '¿Qué distingue al zapatismo del magonismo y el Partido Liberal Mexicano como movimiento de oposición al porfiriato?',
    options: [
      'el zapatismo tuvo una base campesina regional en Morelos con una demanda agraria específica, mientras que el magonismo y el Partido Liberal Mexicano actuaban mediante la prensa y la organización política de alcance nacional',
      'el zapatismo actuaba únicamente mediante la prensa, igual que el magonismo',
      'el zapatismo y el magonismo son el mismo movimiento bajo dos nombres distintos'
    ],
    correct_option_index: 0,
    explanation:
      'El zapatismo tuvo una base campesina regional concreta en Morelos, con la demanda específica de restitución de tierras, a diferencia del magonismo y el Partido Liberal Mexicano, de alcance nacional y demandas laborales amplias.',
    common_error:
      'Tratar al zapatismo como una variante regional del magonismo, en lugar de un movimiento distinto con una demanda y una base social propias.',
    source_reference: 'Guía oficial, página 14, código 3.2.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oap-005',
    topic_id: 'ch-3-2-8-movimientos-de-oposicion-al-porfiriato',
    prompt:
      'Relaciona cada movimiento de oposición con su rasgo distintivo.\n\n1. Magonismo\n2. Partido Liberal Mexicano\n3. Zapatismo\n\na. Organización partidaria formal fundada en 1906\nb. Demanda agraria de restitución de tierras en Morelos\nc. Corriente ideológica anarquista difundida en «Regeneración»',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'El magonismo es la corriente ideológica difundida en «Regeneración» (c); el Partido Liberal Mexicano es la organización partidaria fundada en 1906 (a); el zapatismo es la demanda agraria de restitución de tierras en Morelos (b).',
    common_error:
      'Atribuir la fundación formal del partido en 1906 al zapatismo, en lugar de al Partido Liberal Mexicano.',
    source_reference: 'Guía oficial, página 14, código 3.2.8.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-frm-001',
    topic_id: 'ch-3-2-9-facciones-de-la-revolucion-mexicana',
    prompt: '¿Qué dos nombres se usan para referirse indistintamente a los seguidores de Venustiano Carranza durante la Revolución mexicana?',
    options: ['zapatistas y convencionistas', 'villistas y zapatistas', 'carrancistas y constitucionalistas'],
    correct_option_index: 2,
    explanation:
      'Los seguidores de Venustiano Carranza se conocen indistintamente como carrancistas y constitucionalistas, este último nombre por defender la restauración del orden constitucional frente al gobierno de Huerta.',
    common_error:
      'Tratar «carrancista» y «constitucionalista» como dos facciones distintas de la Revolución mexicana, en lugar de dos nombres para el mismo grupo.',
    source_reference: 'Guía oficial, página 14, código 3.2.9.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-frm-002',
    topic_id: 'ch-3-2-9-facciones-de-la-revolucion-mexicana',
    prompt: 'La División del Norte, con fuerte presencia en Chihuahua, fue la fuerza militar encabezada por _______.',
    options: ['Francisco «Pancho» Villa', 'Venustiano Carranza', 'Emiliano Zapata'],
    correct_option_index: 0,
    explanation:
      'La División del Norte, con base en Chihuahua y el norte del país, fue la fuerza militar encabezada por Francisco «Pancho» Villa.',
    common_error:
      'Atribuir la División del Norte a Carranza o a Zapata, cuyas bases regionales y liderazgos son distintos a los de Villa.',
    source_reference: 'Guía oficial, página 14, código 3.2.9.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-frm-003',
    topic_id: 'ch-3-2-9-facciones-de-la-revolucion-mexicana',
    prompt:
      'Una facción revolucionaria con fuerza en el sur del país, encabezada por un líder campesino de Morelos, exigió la restitución de tierras a las comunidades despojadas y se unió a la Convención de Aguascalientes frente al gobierno de Carranza. ¿A qué facción corresponde?',
    options: ['villista', 'convencionista', 'carrancista'],
    correct_option_index: 1,
    explanation:
      'La facción zapatista, con base en Morelos y Guerrero, se unió a los villistas en la Convención de Aguascalientes para formar el bloque convencionista frente al gobierno de Carranza.',
    common_error:
      'Clasificar a los zapatistas como villistas o carrancistas, en lugar de reconocer su lugar dentro del bloque convencionista formado en la Convención de Aguascalientes.',
    source_reference: 'Guía oficial, página 14, código 3.2.9; calibración de profundidad: página 32.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-frm-004',
    topic_id: 'ch-3-2-9-facciones-de-la-revolucion-mexicana',
    prompt: '¿Qué documento de 1911 plasmó la exigencia zapatista de restitución de tierras a las comunidades campesinas?',
    options: ['el Plan de Ayala', 'el Plan de Guadalupe', 'la Constitución de 1917'],
    correct_option_index: 0,
    explanation:
      'El Plan de Ayala (1911), proclamado por Emiliano Zapata, plasmó la exigencia de restitución de tierras a las comunidades campesinas despojadas.',
    common_error:
      'Confundir el Plan de Ayala con el Plan de Guadalupe de Carranza o con la Constitución de 1917, documentos de proyectos y facciones distintos.',
    source_reference: 'Guía oficial, página 14, código 3.2.9.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-frm-005',
    topic_id: 'ch-3-2-9-facciones-de-la-revolucion-mexicana',
    prompt:
      'Relaciona cada facción con su rasgo distintivo durante la Revolución mexicana.\n\n1. Constitucionalistas o carrancistas\n2. Villistas\n3. Convencionistas\n\na. Coalición de villistas y zapatistas formada en la Convención de Aguascalientes\nb. Base en la División del Norte, con fuerza en el norte del país\nc. Convocan el Congreso Constituyente que redacta la Constitución de 1917',
    options: ['1c, 2b, 3a', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'Los constitucionalistas o carrancistas convocan el Congreso Constituyente de 1917 (c); los villistas tienen base en la División del Norte (b); los convencionistas son la coalición de villistas y zapatistas formada en la Convención de Aguascalientes (a).',
    common_error:
      'Atribuir la convocatoria del Congreso Constituyente a los convencionistas, en lugar de a los constitucionalistas o carrancistas.',
    source_reference: 'Guía oficial, página 14, código 3.2.9.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-dor-001',
    topic_id: 'ch-3-2-10-impacto-de-la-revolucion-mexicana',
    prompt: '¿Qué artículo de la Constitución de 1917 recoge la demanda zapatista de restitución de tierras a las comunidades campesinas?',
    options: ['el Artículo 3', 'el Artículo 27', 'el Artículo 123'],
    correct_option_index: 1,
    explanation:
      'El Artículo 27 de la Constitución de 1917 estableció la posibilidad de restitución y dotación de tierras a comunidades campesinas mediante ejidos, recogiendo la demanda zapatista.',
    common_error:
      'Confundir el Artículo 27, sobre la propiedad de la tierra, con el Artículo 123, sobre derechos laborales, o el Artículo 3, sobre educación.',
    source_reference: 'Guía oficial, página 14, código 3.2.10.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-dor-002',
    topic_id: 'ch-3-2-10-impacto-de-la-revolucion-mexicana',
    prompt:
      'El Artículo 123 de la Constitución de 1917 estableció la jornada máxima de ocho horas, el salario mínimo y el derecho de _______ para los trabajadores.',
    options: ['huelga', 'veto', 'asilo'],
    correct_option_index: 0,
    explanation:
      'El Artículo 123 estableció, entre otros derechos laborales, la jornada máxima de ocho horas, el salario mínimo y el derecho de huelga y sindicalización.',
    common_error:
      'Confundir el derecho de huelga, laboral, con conceptos de otra naturaleza como el veto o el asilo.',
    source_reference: 'Guía oficial, página 14, código 3.2.10.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-dor-003',
    topic_id: 'ch-3-2-10-impacto-de-la-revolucion-mexicana',
    prompt: '¿Qué artículo constitucional estableció que la educación impartida por el Estado sería laica y gratuita?',
    options: ['el Artículo 3', 'el Artículo 27', 'el Artículo 123'],
    correct_option_index: 0,
    explanation:
      'El Artículo 3 de la Constitución de 1917 estableció que la educación impartida por el Estado sería laica, ajena a cualquier doctrina religiosa, y gratuita.',
    common_error:
      'Atribuir el carácter laico y gratuito de la educación al Artículo 27 o al Artículo 123, que regulan la propiedad de la tierra y los derechos laborales.',
    source_reference: 'Guía oficial, página 14, código 3.2.10.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-dor-004',
    topic_id: 'ch-3-2-10-impacto-de-la-revolucion-mexicana',
    prompt: '¿Qué principio estableció el Artículo 27 respecto a los recursos del subsuelo, como los minerales y el petróleo?',
    options: [
      'que el dominio de esos recursos corresponde originalmente a la nación, no a los particulares que posean la superficie',
      'que esos recursos son propiedad exclusiva de quien posea la superficie del terreno',
      'que esos recursos quedan bajo administración de gobiernos extranjeros inversionistas'
    ],
    correct_option_index: 0,
    explanation:
      'El Artículo 27 estableció que el dominio de los recursos del subsuelo, como los minerales y el petróleo, corresponde originalmente a la nación, sin importar quién posea la superficie del terreno.',
    common_error:
      'Suponer que la propiedad de la superficie de un terreno incluye automáticamente los recursos de su subsuelo, ignorando el principio establecido en el Artículo 27.',
    source_reference: 'Guía oficial, página 14, código 3.2.10.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-dor-005',
    topic_id: 'ch-3-2-10-impacto-de-la-revolucion-mexicana',
    prompt:
      'Relaciona cada derecho constitucional de 1917 con la demanda revolucionaria que recoge.\n\n1. Derecho agrario (Artículo 27)\n2. Derechos laborales (Artículo 123)\n3. Educación laica y gratuita (Artículo 3)\n\na. Demanda del Programa del Partido Liberal Mexicano de 1906\nb. Demanda zapatista de restitución de tierras\nc. Proyecto constitucionalista de reorganización del Estado',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El derecho agrario recoge la demanda zapatista de restitución de tierras (b); los derechos laborales recogen demandas del Programa del Partido Liberal Mexicano de 1906 (a); la educación laica y gratuita forma parte del proyecto constitucionalista de reorganización del Estado (c).',
    common_error:
      'Atribuir la demanda zapatista a los derechos laborales, en lugar de reconocerla como el origen del derecho agrario del Artículo 27.',
    source_reference: 'Guía oficial, página 14, código 3.2.10.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpr-001',
    topic_id: 'ch-3-3-1-factores-de-consolidacion-del-presidencialismo',
    prompt:
      'En 1929, Plutarco Elías Calles fundó un partido único que unificó a las facciones revolucionarias y sustituyó el levantamiento armado por la negociación interna como forma de decidir la sucesión presidencial. ¿Cómo se clasifica este factor de consolidación del presidencialismo?',
    options: ['económico', 'social', 'político'],
    correct_option_index: 2,
    explanation:
      'La fundación de un partido único que organiza la sucesión del poder mediante negociación interna, en lugar del levantamiento armado, es un factor de naturaleza política.',
    common_error:
      'Clasificar la fundación del partido oficial como un factor económico o social, en lugar de reconocer que actúa sobre la organización del poder político.',
    source_reference: 'Guía oficial, página 14, código 3.3.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpr-002',
    topic_id: 'ch-3-3-1-factores-de-consolidacion-del-presidencialismo',
    prompt:
      'La nacionalización de la industria petrolera en 1938, durante el gobierno de Lázaro Cárdenas, es un factor _______ de consolidación del presidencialismo, porque puso un recurso estratégico bajo control directo del Estado.',
    options: ['económico', 'político', 'cultural'],
    correct_option_index: 0,
    explanation:
      'La nacionalización petrolera es un factor económico, porque puso un recurso estratégico bajo control directo del Estado, reforzando la capacidad del presidente para otorgar beneficios y mantener lealtades.',
    common_error:
      'Clasificar la nacionalización petrolera como un factor político, en lugar de reconocer que actúa sobre el control de un recurso económico.',
    source_reference: 'Guía oficial, página 14, código 3.3.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpr-003',
    topic_id: 'ch-3-3-1-factores-de-consolidacion-del-presidencialismo',
    prompt: '¿Qué partido, fundado en 1929, es el antecedente directo del PRI?',
    options: [
      'el Partido Nacional Revolucionario (PNR)',
      'el Partido Liberal Mexicano',
      'el Partido Acción Nacional'
    ],
    correct_option_index: 0,
    explanation:
      'El Partido Nacional Revolucionario (PNR), fundado por Plutarco Elías Calles en 1929, es el antecedente directo del PRI, tras pasar por el PRM en 1938.',
    common_error:
      'Confundir el PNR con el Partido Liberal Mexicano, de la oposición al porfiriato, o con el Partido Acción Nacional, fundado después y de oposición al PRI.',
    source_reference: 'Guía oficial, página 14, código 3.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpr-004',
    topic_id: 'ch-3-3-1-factores-de-consolidacion-del-presidencialismo',
    prompt:
      '¿Qué reparto de tierras, realizado durante el gobierno de Lázaro Cárdenas (1934-1940), reforzó junto con la nacionalización petrolera el control estatal sobre recursos económicos?',
    options: [
      'el reparto agrario mediante ejidos',
      'la privatización de tierras comunales',
      'la venta de tierras a inversionistas extranjeros'
    ],
    correct_option_index: 0,
    explanation:
      'El reparto agrario mediante ejidos durante el gobierno de Cárdenas, junto con la nacionalización petrolera, reforzó el control estatal sobre recursos económicos estratégicos.',
    common_error:
      'Atribuir a Cárdenas una privatización de tierras, cuando su política fue precisamente la contraria: el reparto agrario mediante ejidos.',
    source_reference: 'Guía oficial, página 14, código 3.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpr-005',
    topic_id: 'ch-3-3-1-factores-de-consolidacion-del-presidencialismo',
    prompt:
      'Relaciona cada factor de consolidación del presidencialismo con su clasificación.\n\n1. Fundación del PNR en 1929\n2. Nacionalización petrolera de 1938\n3. Reparto agrario de 1934-1940\n\na. Organiza la sucesión del poder mediante un partido único\nb. Pone bajo control estatal un recurso estratégico\nc. Amplía el control estatal sobre la tierra',
    options: ['1a, 2b, 3c', '1b, 2a, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'La fundación del PNR organiza la sucesión del poder mediante un partido único (a); la nacionalización petrolera pone bajo control estatal un recurso estratégico (b); el reparto agrario amplía el control estatal sobre la tierra (c).',
    common_error:
      'Intercambiar la nacionalización petrolera y el reparto agrario, ambos factores económicos, con la fundación del partido, un factor político.',
    source_reference: 'Guía oficial, página 14, código 3.3.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-mei-001',
    topic_id: 'ch-3-3-2-participacion-de-mexico-en-eventos-internacionales-del-siglo-xx',
    prompt:
      '¿Qué unidad militar mexicana combatió junto a Estados Unidos en el teatro del Pacífico durante la Segunda Guerra Mundial?',
    options: ['la División del Norte', 'el Escuadrón 201', 'el Ejército Trigarante'],
    correct_option_index: 1,
    explanation:
      'El Escuadrón 201, parte de la Fuerza Aérea Expedicionaria Mexicana, combatió junto a Estados Unidos en Filipinas durante la Segunda Guerra Mundial, la única unidad militar mexicana enviada al extranjero en ese conflicto.',
    common_error:
      'Confundir el Escuadrón 201 con unidades de otra época, como la División del Norte (Revolución mexicana) o el Ejército Trigarante (independencia).',
    source_reference: 'Guía oficial, página 14, código 3.3.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-mei-002',
    topic_id: 'ch-3-3-2-participacion-de-mexico-en-eventos-internacionales-del-siglo-xx',
    prompt:
      'México declaró la guerra a las potencias del Eje en 1942 después de que submarinos alemanes hundieran los buques petroleros mexicanos «Potrero del Llano» y «_______».',
    options: ['Faja de Oro', 'Batopilas', 'Águila Azteca'],
    correct_option_index: 0,
    explanation:
      'El hundimiento de los buques petroleros «Potrero del Llano» y «Faja de Oro» por submarinos alemanes en 1942 llevó a México a declarar la guerra a las potencias del Eje.',
    common_error:
      'Inventar o confundir el nombre del segundo buque hundido, que fue específicamente el «Faja de Oro».',
    source_reference: 'Guía oficial, página 14, código 3.3.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-mei-003',
    topic_id: 'ch-3-3-2-participacion-de-mexico-en-eventos-internacionales-del-siglo-xx',
    prompt:
      '¿A qué gobierno español apoyó México con armamento y respaldo diplomático durante la Guerra Civil Española?',
    options: [
      'al gobierno republicano',
      'al gobierno franquista',
      'a ningún gobierno, manteniendo neutralidad estricta'
    ],
    correct_option_index: 0,
    explanation:
      'México, bajo el gobierno de Lázaro Cárdenas, apoyó con armamento y respaldo diplomático al gobierno republicano español, reconociéndolo como el gobierno legítimo.',
    common_error:
      'Suponer que México mantuvo neutralidad o apoyó al bando franquista, cuando en realidad respaldó activamente al gobierno republicano.',
    source_reference: 'Guía oficial, página 14, código 3.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-mei-004',
    topic_id: 'ch-3-3-2-participacion-de-mexico-en-eventos-internacionales-del-siglo-xx',
    prompt:
      '¿Qué recibió México como consecuencia de la derrota del bando que había apoyado en la Guerra Civil Española?',
    options: [
      'una ola de refugiados españoles, entre ellos los «niños de Morelia» e intelectuales exiliados',
      'territorio español en compensación por su apoyo diplomático',
      'el reconocimiento internacional inmediato de su neutralidad'
    ],
    correct_option_index: 0,
    explanation:
      'Tras la derrota republicana, México recibió una ola de refugiados españoles, entre ellos los «niños de Morelia» e intelectuales exiliados, en lugar de una compensación territorial o diplomática.',
    common_error:
      'Suponer que el apoyo de México a la República española tuvo una contrapartida territorial o diplomática, en lugar de reconocer la acogida de refugiados como su consecuencia real.',
    source_reference: 'Guía oficial, página 14, código 3.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-mei-005',
    topic_id: 'ch-3-3-2-participacion-de-mexico-en-eventos-internacionales-del-siglo-xx',
    prompt:
      'Relaciona cada elemento con el conflicto internacional del siglo XX al que corresponde.\n\n1. Envío del Escuadrón 201 al Pacífico\n2. Acogida de refugiados como los «niños de Morelia»\n3. Ambos conflictos\n\na. Segunda Guerra Mundial\nb. Guerra Civil Española\nc. Ocurrieron durante el siglo XX',
    options: ['1a, 2b, 3c', '1b, 2a, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El envío del Escuadrón 201 corresponde a la Segunda Guerra Mundial (a); la acogida de refugiados como los «niños de Morelia» corresponde a la Guerra Civil Española (b); ambos conflictos ocurrieron durante el siglo XX (c).',
    common_error:
      'Intercambiar el Escuadrón 201 y la acogida de refugiados entre ambos conflictos, confundiendo la participación militar con la de apoyo y acogida.',
    source_reference: 'Guía oficial, página 14, código 3.3.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cnl-001',
    topic_id: 'ch-3-3-3-causas-del-neoliberalismo-en-mexico',
    prompt:
      '¿Qué crisis de 1982 forzó a México a buscar apoyo financiero del Fondo Monetario Internacional y el Banco Mundial, condicionado a reformas de ajuste estructural?',
    options: [
      'la crisis del movimiento estudiantil',
      'la crisis del reparto agrario',
      'la crisis de la deuda externa'
    ],
    correct_option_index: 2,
    explanation:
      'La crisis de la deuda externa de 1982, cuando México declaró la imposibilidad de pagarla, forzó la búsqueda de apoyo financiero internacional condicionado a reformas de ajuste estructural.',
    common_error:
      'Confundir la crisis de la deuda de 1982 con procesos de otra naturaleza o época, como el movimiento estudiantil o el reparto agrario.',
    source_reference: 'Guía oficial, página 14, código 3.3.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-cnl-002',
    topic_id: 'ch-3-3-3-causas-del-neoliberalismo-en-mexico',
    prompt:
      'México ingresó al Acuerdo General sobre Aranceles Aduaneros y Comercio (GATT) en _______, como parte de su apertura comercial.',
    options: ['1986', '1994', '1938'],
    correct_option_index: 0,
    explanation:
      'México ingresó al GATT en 1986, durante el gobierno de Miguel de la Madrid, como parte del proceso de apertura comercial que acompañó la adopción del neoliberalismo.',
    common_error:
      'Confundir el ingreso al GATT (1986) con la entrada en vigor del Tratado de Libre Comercio de América del Norte (1994).',
    source_reference: 'Guía oficial, página 14, código 3.3.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cnl-003',
    topic_id: 'ch-3-3-3-causas-del-neoliberalismo-en-mexico',
    prompt:
      '¿Qué tratado, firmado en 1992 y vigente desde 1994, profundizó la apertura comercial de México con Estados Unidos y Canadá?',
    options: ['el Tratado de Libre Comercio de América del Norte', 'el Plan de Iguala', 'el Plan de Ayala'],
    correct_option_index: 0,
    explanation:
      'El Tratado de Libre Comercio de América del Norte, firmado en 1992 y vigente desde 1994, profundizó la apertura comercial de México con Estados Unidos y Canadá.',
    common_error:
      'Confundir el Tratado de Libre Comercio de América del Norte con documentos de otra época, como el Plan de Iguala o el Plan de Ayala.',
    source_reference: 'Guía oficial, página 14, código 3.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cnl-004',
    topic_id: 'ch-3-3-3-causas-del-neoliberalismo-en-mexico',
    prompt:
      '¿Qué modelo económico previo se agotó como consecuencia de la crisis de la deuda de 1982, dando paso a las reformas neoliberales?',
    options: [
      'el modelo de industrialización dirigida por el Estado y sustitución de importaciones',
      'el modelo de libre comercio total sin ningún tipo de regulación estatal',
      'el modelo de reparto agrario colectivo iniciado por Lázaro Cárdenas'
    ],
    correct_option_index: 0,
    explanation:
      'El modelo de industrialización dirigida por el Estado y sustitución de importaciones se agotó tras la crisis de la deuda de 1982, dando paso a las reformas neoliberales de apertura y privatización.',
    common_error:
      'Suponer que el modelo previo ya era de libre comercio, cuando en realidad era de industrialización dirigida por el Estado.',
    source_reference: 'Guía oficial, página 14, código 3.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cnl-005',
    topic_id: 'ch-3-3-3-causas-del-neoliberalismo-en-mexico',
    prompt:
      'Ordena, de la causa a la consecuencia, el proceso que llevó a México a adoptar el neoliberalismo.\n\n1. México declara la imposibilidad de pagar su deuda externa\n2. Recibe apoyo del Fondo Monetario Internacional y el Banco Mundial condicionado a reformas\n3. Se privatizan empresas estatales y se reduce el gasto público\n4. México ingresa al GATT y negocia el Tratado de Libre Comercio de América del Norte',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'La imposibilidad de pago de la deuda (1) lleva a recibir apoyo condicionado del FMI y el Banco Mundial (2); esto resulta en privatizaciones y reducción del gasto público (3); y finalmente en el ingreso al GATT y la negociación del TLCAN (4).',
    common_error:
      'Colocar el ingreso al GATT antes de la crisis de la deuda, invirtiendo la relación de causa y efecto del proceso.',
    source_reference: 'Guía oficial, página 14, código 3.3.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-glo-001',
    topic_id: 'ch-3-3-4-globalizacion-en-la-actualidad',
    prompt:
      'Una persona en México ve, el mismo día de su estreno, una serie producida en otro país a través de un servicio de streaming. ¿Qué ámbito de la globalización ejemplifica esto principalmente?',
    options: ['económico', 'cultural y tecnológico', 'político'],
    correct_option_index: 1,
    explanation:
      'El estreno simultáneo de contenido a través de un servicio de streaming ejemplifica principalmente los ámbitos cultural (consumo compartido de referentes) y tecnológico (distribución instantánea) de la globalización.',
    common_error:
      'Clasificar este ejemplo como puramente económico, sin reconocer que su rasgo principal es la difusión cultural y tecnológica simultánea.',
    source_reference: 'Guía oficial, página 14, código 3.3.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-glo-002',
    topic_id: 'ch-3-3-4-globalizacion-en-la-actualidad',
    prompt:
      'Una persona compra un teléfono ensamblado en otro país con componentes de varios países más; esto ejemplifica la globalización de ámbito _______.',
    options: ['económico', 'cultural', 'tecnológico'],
    correct_option_index: 0,
    explanation:
      'La producción y comercialización de un bien a través de fronteras, como un teléfono ensamblado con componentes de varios países, ejemplifica el ámbito económico de la globalización.',
    common_error:
      'Clasificar la compra de un bien producido internacionalmente como un ejemplo cultural o tecnológico, en lugar de económico.',
    source_reference: 'Guía oficial, página 14, código 3.3.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-glo-003',
    topic_id: 'ch-3-3-4-globalizacion-en-la-actualidad',
    prompt: '¿Qué ejemplo corresponde principalmente al ámbito tecnológico de la globalización?',
    options: [
      'una videollamada instantánea entre personas de países distintos a través de internet',
      'la venta local de un producto fabricado en otro país',
      'el consumo compartido de una tendencia de moda internacional'
    ],
    correct_option_index: 0,
    explanation:
      'La comunicación instantánea entre personas de países distintos a través de internet ejemplifica principalmente el ámbito tecnológico de la globalización.',
    common_error:
      'Confundir un ejemplo tecnológico (comunicación instantánea) con uno económico (venta de un bien) o cultural (tendencia de moda compartida).',
    source_reference: 'Guía oficial, página 14, código 3.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-glo-004',
    topic_id: 'ch-3-3-4-globalizacion-en-la-actualidad',
    prompt: '¿Qué distingue un ejemplo de globalización cultural de uno de globalización económica?',
    options: [
      'la cultural implica referentes de consumo compartidos entre países, mientras que la económica implica bienes, empresas o transacciones a través de fronteras',
      'la cultural implica siempre una transacción comercial, mientras que la económica no',
      'no existe ninguna diferencia entre ambos ámbitos'
    ],
    correct_option_index: 0,
    explanation:
      'La globalización cultural implica referentes de consumo compartidos entre países (música, moda, series), mientras que la económica implica bienes, empresas o transacciones a través de fronteras.',
    common_error:
      'Suponer que todo ejemplo cultural implica necesariamente una transacción comercial, confundiéndolo con un ejemplo económico.',
    source_reference: 'Guía oficial, página 14, código 3.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-glo-005',
    topic_id: 'ch-3-3-4-globalizacion-en-la-actualidad',
    prompt:
      'Relaciona cada situación con el ámbito de globalización que ejemplifica principalmente.\n\n1. Una multinacional opera con presencia local en distintos países\n2. Una tendencia de moda se consume simultáneamente en varios países\n3. Una videollamada conecta a personas de distintos países al instante\n\na. Tecnológico\nb. Económico\nc. Cultural',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Una multinacional con presencia local ejemplifica el ámbito económico (b); una tendencia de moda compartida ejemplifica el ámbito cultural (c); una videollamada instantánea ejemplifica el ámbito tecnológico (a).',
    common_error:
      'Atribuir la operación de una multinacional al ámbito cultural, en lugar de reconocerla como un ejemplo económico.',
    source_reference: 'Guía oficial, página 14, código 3.3.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cap-001',
    topic_id: 'ch-3-3-5-causas-de-la-alternancia-politica',
    prompt:
      '¿Qué partido ganó la presidencia de México en el año 2000, poniendo fin a 71 años de continuidad del partido oficial surgido del PNR?',
    options: [
      'el Partido Revolucionario Institucional',
      'el Partido de la Revolución Democrática',
      'el Partido Acción Nacional'
    ],
    correct_option_index: 2,
    explanation:
      'El Partido Acción Nacional (PAN), con Vicente Fox como candidato, ganó la presidencia en el año 2000, poniendo fin a 71 años de continuidad del partido oficial surgido del PNR.',
    common_error:
      'Confundir el partido que ganó la alternancia de 2000 con el propio partido oficial (PRI) o con otro partido de oposición.',
    source_reference: 'Guía oficial, página 14, código 3.3.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-cap-002',
    topic_id: 'ch-3-3-5-causas-de-la-alternancia-politica',
    prompt:
      'La reforma política de _______ permitió el registro legal de nuevos partidos de oposición, ampliando las condiciones para una competencia electoral real.',
    options: ['1977', '1929', '1938'],
    correct_option_index: 0,
    explanation:
      'La reforma política de 1977 permitió el registro legal de nuevos partidos de oposición, un paso hacia la competencia electoral que después contribuyó a la alternancia de 2000.',
    common_error:
      'Confundir la reforma política de 1977 con hechos de otra época, como la fundación del PNR en 1929 o la nacionalización petrolera de 1938.',
    source_reference: 'Guía oficial, página 14, código 3.3.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cap-003',
    topic_id: 'ch-3-3-5-causas-de-la-alternancia-politica',
    prompt:
      '¿Qué movimiento de 1968 erosionó la legitimidad del sistema político mexicano frente a la población, al evidenciar su carácter autoritario?',
    options: ['el movimiento estudiantil de 1968', 'el movimiento magonista', 'el movimiento cartista'],
    correct_option_index: 0,
    explanation:
      'El movimiento estudiantil de 1968 y su represión erosionaron la legitimidad del sistema político mexicano frente a la población, evidenciando su carácter autoritario.',
    common_error:
      'Confundir el movimiento estudiantil de 1968 con movimientos de otra época o país, como el magonismo o el cartismo.',
    source_reference: 'Guía oficial, página 14, código 3.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cap-004',
    topic_id: 'ch-3-3-5-causas-de-la-alternancia-politica',
    prompt: '¿Qué dos sucesos de 1994 debilitaron la cohesión interna del partido en el gobierno antes de la alternancia de 2000?',
    options: [
      'el levantamiento del Ejército Zapatista de Liberación Nacional y el asesinato del candidato presidencial Luis Donaldo Colosio',
      'la fundación del Partido Nacional Revolucionario y la nacionalización petrolera',
      'la Guerra Civil Española y la Segunda Guerra Mundial'
    ],
    correct_option_index: 0,
    explanation:
      'El levantamiento del Ejército Zapatista de Liberación Nacional y el asesinato del candidato presidencial Luis Donaldo Colosio, ambos en 1994, debilitaron la cohesión interna del partido en el gobierno.',
    common_error:
      'Atribuir a 1994 sucesos de otras décadas, como la fundación del PNR (1929) o la nacionalización petrolera (1938).',
    source_reference: 'Guía oficial, página 14, código 3.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cap-005',
    topic_id: 'ch-3-3-5-causas-de-la-alternancia-politica',
    prompt:
      'Ordena cronológicamente los siguientes acontecimientos que contribuyeron a la alternancia política de 2000.\n\n1. Movimiento estudiantil de 1968\n2. Reforma política que permite el registro de partidos de oposición (1977)\n3. Elección de 1988 y su cuestionada «caída del sistema»\n4. Levantamiento del EZLN y asesinato de Colosio (1994)',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'El orden cronológico es: movimiento estudiantil de 1968 (1), reforma política de 1977 (2), elección de 1988 (3) y los sucesos de 1994 (4), todos previos a la alternancia de 2000.',
    common_error:
      'Colocar la reforma política de 1977 antes del movimiento estudiantil de 1968, invirtiendo el orden cronológico real.',
    source_reference: 'Guía oficial, página 14, código 3.3.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ism-001',
    topic_id: 'ch-3-3-6-impacto-social-de-los-medios-de-comunicacion-en-la-historia',
    prompt:
      '¿Qué medio del siglo XIX satirizaba a gobernantes y condiciones sociales a través de periódicos, pese al riesgo de censura?',
    options: ['la producción televisiva', 'la caricatura política', 'el cine documental'],
    correct_option_index: 1,
    explanation:
      'La caricatura política, publicada en periódicos del siglo XIX, satirizaba a gobernantes y condiciones sociales, formando opinión pública pese al riesgo de censura.',
    common_error:
      'Confundir la caricatura política, el medio más temprano de los tres, con la producción televisiva o el cine documental, ambos posteriores.',
    source_reference: 'Guía oficial, página 14, código 3.3.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-ism-002',
    topic_id: 'ch-3-3-6-impacto-social-de-los-medios-de-comunicacion-en-la-historia',
    prompt:
      'El _______ registró y difundió imágenes de sucesos históricos, como la Revolución mexicana, contribuyendo a construir la memoria colectiva de esos eventos.',
    options: ['cine documental', 'telégrafo', 'ferrocarril'],
    correct_option_index: 0,
    explanation:
      'El cine documental registró y difundió imágenes de sucesos históricos como la Revolución mexicana, contribuyendo a construir la memoria colectiva de esos eventos.',
    common_error:
      'Confundir el cine documental con medios de infraestructura como el telégrafo o el ferrocarril, que no son medios de comunicación de masas.',
    source_reference: 'Guía oficial, página 14, código 3.3.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ism-003',
    topic_id: 'ch-3-3-6-impacto-social-de-los-medios-de-comunicacion-en-la-historia',
    prompt: '¿Qué medio, a partir de mediados del siglo XX, se convirtió en un medio masivo que llegó a la mayoría de los hogares mexicanos?',
    options: ['la producción televisiva', 'la caricatura política', 'el cine documental'],
    correct_option_index: 0,
    explanation:
      'La producción televisiva, a partir de mediados del siglo XX, se convirtió en un medio masivo que llegó a la mayoría de los hogares mexicanos, el más tardío de los tres medios.',
    common_error:
      'Atribuir el alcance masivo cotidiano a la caricatura política o al cine documental, medios más tempranos y de alcance distinto.',
    source_reference: 'Guía oficial, página 14, código 3.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ism-004',
    topic_id: 'ch-3-3-6-impacto-social-de-los-medios-de-comunicacion-en-la-historia',
    prompt: '¿Qué distingue el impacto social del cine documental del impacto social de la televisión?',
    options: [
      'el cine documental contribuyó a construir memoria colectiva sobre sucesos históricos específicos, mientras que la televisión tuvo un alcance masivo cotidiano en la mayoría de los hogares',
      'ambos medios tuvieron exactamente el mismo alcance y el mismo tipo de impacto social',
      'el cine documental tuvo mayor alcance masivo cotidiano que la televisión'
    ],
    correct_option_index: 0,
    explanation:
      'El cine documental contribuyó a construir memoria colectiva sobre sucesos históricos específicos, mientras que la televisión tuvo un alcance masivo cotidiano en la mayoría de los hogares, un impacto social distinto.',
    common_error:
      'Suponer que ambos medios audiovisuales tuvieron el mismo tipo e intensidad de impacto social, sin distinguir su época y su alcance.',
    source_reference: 'Guía oficial, página 14, código 3.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-ism-005',
    topic_id: 'ch-3-3-6-impacto-social-de-los-medios-de-comunicacion-en-la-historia',
    prompt:
      'Relaciona cada medio con su impacto social distintivo.\n\n1. Caricatura política\n2. Cine documental\n3. Producción televisiva\n\na. Alcance masivo cotidiano en la mayoría de los hogares\nb. Formación de opinión pública mediante sátira impresa\nc. Construcción de memoria colectiva sobre sucesos históricos',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'La caricatura política forma opinión pública mediante sátira impresa (b); el cine documental construye memoria colectiva sobre sucesos históricos (c); la producción televisiva tiene alcance masivo cotidiano en la mayoría de los hogares (a).',
    common_error:
      'Atribuir la construcción de memoria colectiva a la producción televisiva, en lugar de reconocerla como rasgo distintivo del cine documental.',
    source_reference: 'Guía oficial, página 14, código 3.3.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
