import type { question } from './types'

export const conciencia_historica_questions: question[] = [
  {
    id: 'ch-cpo-001',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'un pueblo mesoamericano con gobierno centralizado, encabezado por el cazonci tangaxoan ii, se rinde en 1522 sin un enfrentamiento militar mayor, pero su gobernante es ejecutado en 1530 durante una campaña de represión. ¿a qué pueblo corresponde este proceso de conquista?',
    options: ['a los purépechas', 'a los chichimecas', 'a los tzotziles'],
    correct_option_index: 0,
    explanation:
      'los purépechas, con un gobierno centralizado bajo el cazonci, se rindieron ante las fuerzas españolas en 1522; la sumisión inicial no evitó que nuño de guzmán ejecutara al cazonci en 1530.',
    common_error:
      'asumir que toda rendición temprana significa el fin del conflicto, sin considerar que la represión posterior formó parte del mismo proceso de conquista.',
    source_reference: 'guía oficial, página 13, código 3.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-002',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'los _______ eran un pueblo seminómada de aridoamérica, sin una capital fija que tomar; su resistencia, conocida como guerra chichimeca, se resolvió mediante regalos, evangelización y alianzas con los tlaxcaltecas, no mediante una batalla decisiva.',
    options: ['tzotziles', 'seris', 'chichimecas'],
    correct_option_index: 2,
    explanation:
      'la guerra chichimeca (c. 1550-1590) fue una guerra de guerrillas prolongada que terminó con una política de pacificación, no con la rendición de una capital, porque los chichimecas no tenían un centro de poder fijo.',
    common_error:
      'confundir la pacificación negociada de los chichimecas con la rendición de una capital, propia de sociedades sedentarias con gobierno centralizado.',
    source_reference: 'guía oficial, página 13, código 3.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-003',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'un pueblo nómada del desierto de sonora nunca fue sometido mediante una sola campaña militar decisiva; su resistencia se extendió de manera intermitente entre los siglos xvi y xix. ¿a qué pueblo corresponde?',
    options: ['a los seris', 'a los purépechas', 'a los tzotziles'],
    correct_option_index: 0,
    explanation:
      'los seris eran un pueblo nómada del desierto de sonora sin una capital fija ni un gobierno centralizado, por lo que su resistencia se prolongó de forma intermitente durante siglos en lugar de resolverse en una campaña única.',
    common_error:
      'atribuir a un pueblo nómada un desenlace de rendición o sometimiento único, como si tuviera un centro de poder que pudiera capturarse.',
    source_reference: 'guía oficial, página 13, código 3.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-004',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'la conquista de un pueblo maya de los altos de chiapas se prolongó durante buena parte del siglo xvi, más tarde que la caída de tenochtitlan, debido al terreno montañoso de la región y a su resistencia armada. ¿a qué pueblo corresponde?',
    options: ['a los tzotziles', 'a los purépechas', 'a los seris'],
    correct_option_index: 0,
    explanation:
      'los tzotziles, pueblo maya de los altos de chiapas, tuvieron una conquista tardía respecto al centro de méxico, prolongada por la dificultad del terreno montañoso y la resistencia armada de los pueblos mayas de la región.',
    common_error:
      'suponer que todos los pueblos mesoamericanos fueron sometidos con la misma rapidez que tenochtitlan, sin considerar cómo el terreno o la resistencia local prolongaron algunos procesos.',
    source_reference: 'guía oficial, página 13, código 3.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-cpo-005',
    topic_id: 'ch-3-1-1-conquista-de-pueblos-mesoamericanos-o-aridoamericanos',
    prompt:
      'relaciona cada pueblo con el rasgo que distingue su proceso de conquista.\n\n1. purépechas\n2. chichimecas\n3. seris\n\na. resistencia intermitente de un pueblo nómada, sin someterse en una sola campaña\nb. rendición pacífica de un gobierno centralizado, seguida de la ejecución de su gobernante\nc. guerra de guerrillas prolongada, resuelta mediante pacificación y no por una rendición',
    options: ['1a, 2b, 3c', '1b, 2c, 3a', '1c, 2a, 3b'],
    correct_option_index: 1,
    explanation:
      'los purépechas se rindieron pacíficamente pero su cazonci fue ejecutado después (b); los chichimecas sostuvieron una guerra de guerrillas resuelta por pacificación (c); los seris resistieron de forma intermitente sin someterse en una sola campaña, por ser un pueblo nómada (a).',
    common_error:
      'atribuir la pacificación negociada a un pueblo nómada como los seris, en lugar de reconocer que esa fue la resolución específica de la guerra chichimeca.',
    source_reference: 'guía oficial, página 13, código 3.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-001',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'una rebelión de comunidades mayas en yucatán (1847-1901), motivada por el despojo de tierras comunales y la explotación en haciendas henequeneras, se organiza en torno al culto de la «cruz parlante» y funda un centro de resistencia propio. ¿a qué movimiento corresponde?',
    options: ['a la guerra de castas', 'a la resistencia yaqui', 'a la guerra chichimeca'],
    correct_option_index: 0,
    explanation:
      'la guerra de castas (yucatán, 1847-1901) fue la rebelión maya organizada en torno al culto de la «cruz parlante», con su centro de resistencia en chan santa cruz, motivada por el despojo de tierras comunales y la explotación henequenera.',
    common_error:
      'confundir la guerra de castas con otro movimiento de resistencia indígena de una región o siglo distinto, por compartir la causa general del despojo de tierras.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-002',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'la deportación forzada de miles de integrantes de un pueblo hacia plantaciones de yucatán y el valle nacional en oaxaca fue la respuesta porfirista a la defensa armada de las tierras del río _______, encabezada por líderes como cajeme.',
    options: ['bravo', 'usumacinta', 'yaqui'],
    correct_option_index: 2,
    explanation:
      'el pueblo yaqui defendió el territorio del río yaqui, en sonora, frente al despojo impulsado durante el porfiriato; la respuesta gubernamental incluyó la deportación forzada de miles de yaquis a plantaciones distantes.',
    common_error:
      'ubicar la resistencia yaqui en un río o región distinta a sonora, perdiendo la relación entre el nombre del pueblo y el territorio que defendía.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-003',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      '¿qué causa de fondo comparten la guerra de castas y la resistencia yaqui, a pesar de ocurrir en regiones distintas y tener desenlaces diferentes?',
    options: [
      'el despojo de tierras',
      'una disputa por la sucesión de un gobernante indígena',
      'un conflicto religioso entre facciones católicas'
    ],
    correct_option_index: 0,
    explanation:
      'ambos movimientos surgen como respuesta al despojo de tierras: comunales en el caso maya de yucatán, y del territorio del río yaqui en el caso sonorense, aunque su región, época central y desenlace difieren.',
    common_error:
      'buscar una causa distinta para cada movimiento sin notar que ambos responden, en el fondo, al mismo problema de despojo territorial.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-004',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'relaciona cada elemento con el movimiento de resistencia que describe.\n\n1. guerra de castas\n2. resistencia yaqui\n3. ambos movimientos\n\na. tienen como causa de fondo el despojo de tierras\nb. termina cuando el ejército federal ocupa su centro de resistencia religioso-político\nc. es respondida con la deportación forzada de su población a plantaciones distantes',
    options: ['1b, 2c, 3a', '1c, 2b, 3a', '1a, 2c, 3b'],
    correct_option_index: 0,
    explanation:
      'la guerra de castas termina con la ocupación federal de chan santa cruz (b); la resistencia yaqui es respondida con la deportación masiva a plantaciones distantes (c); ambos movimientos comparten como causa de fondo el despojo de tierras (a).',
    common_error:
      'intercambiar el desenlace de cada movimiento, atribuyendo la deportación a la guerra de castas o la ocupación militar de un centro propio a la resistencia yaqui.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-rpo-005',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'ordena, de la causa a la consecuencia final, los sucesos de la resistencia yaqui frente al porfiriato.\n\n1. el gobierno responde con campañas militares contra la resistencia armada\n2. la colonización agrícola porfirista despoja tierras del territorio del río yaqui\n3. cajeme encabeza campañas armadas en defensa del territorio\n4. miles de yaquis son deportados a plantaciones de yucatán y del valle nacional',
    options: ['2, 3, 1, 4', '3, 2, 1, 4', '2, 1, 3, 4'],
    correct_option_index: 0,
    explanation:
      'el despojo de tierras por la colonización porfirista (2) provoca la defensa armada encabezada por cajeme (3); el gobierno responde con campañas militares (1); y finalmente ejecuta la deportación forzada de miles de yaquis (4).',
    common_error:
      'colocar la respuesta militar del gobierno antes de la defensa armada yaqui, invirtiendo la relación de causa y efecto del conflicto.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-001',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      '¿qué ciudad actual de quintana roo tiene su origen en chan santa cruz, el antiguo centro de resistencia maya de la guerra de castas?',
    options: ['felipe carrillo puerto', 'valladolid', 'chetumal'],
    correct_option_index: 0,
    explanation:
      'chan santa cruz, sede del culto a la «cruz parlante» durante la guerra de castas, es el origen de la actual ciudad de felipe carrillo puerto, en quintana roo.',
    common_error:
      'ubicar el legado de la guerra de castas en otra ciudad de la península de yucatán que no fue el centro histórico del movimiento.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-002',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      '¿cuál de las siguientes opciones es una manifestación cultural vigente hoy asociada al pueblo yaqui, y no un hecho histórico ya concluido de su resistencia?',
    options: ['la deportación de yaquis a plantaciones de yucatán', 'la danza del venado', 'la guerra de castas'],
    correct_option_index: 1,
    explanation:
      'la danza del venado es una práctica cultural que se sigue realizando hoy como expresión viva de la identidad yaqui; la deportación y la guerra de castas son sucesos históricos ya concluidos, no manifestaciones actuales.',
    common_error:
      'responder con un hecho histórico concluido cuando la pregunta pide una manifestación cultural vigente en el presente.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-003',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'en sonora, la danza del venado y las celebraciones de _______ son manifestaciones vivas reconocidas de la identidad del pueblo yaqui.',
    options: ['la independencia de méxico', 'la cuaresma y semana santa yaqui', 'el día de muertos'],
    correct_option_index: 1,
    explanation:
      'la cuaresma y semana santa yaqui, junto con la danza del venado, son celebraciones vigentes reconocidas como manifestaciones vivas de la identidad del pueblo yaqui en sonora.',
    common_error:
      'atribuir al pueblo yaqui una festividad de otro origen cultural, como el día de muertos, en lugar de sus propias celebraciones vigentes.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-004',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'además de sus tradiciones religiosas y danzas, ¿qué otra forma contemporánea de reivindicación yaqui continúa hoy, ligada a la misma causa que motivó su resistencia histórica?',
    options: [
      'la organización comunal en defensa de su territorio y sus recursos',
      'la fundación de un nuevo centro político-religioso propio',
      'el reconocimiento de un gobierno yaqui autónomo por otros países'
    ],
    correct_option_index: 0,
    explanation:
      'el pueblo yaqui continúa hoy su organización comunal en defensa de su territorio y sus recursos, una forma contemporánea de la misma reivindicación territorial que motivó la resistencia histórica frente al porfiriato.',
    common_error:
      'limitar el legado yaqui actual a sus expresiones religiosas o dancísticas, sin reconocer que la defensa organizada del territorio también continúa hoy.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-icr-005',
    topic_id: 'ch-3-1-2-movimientos-de-resistencia-de-pueblos-originarios',
    prompt:
      'relaciona cada manifestación actual con su descripción correcta.\n\n1. felipe carrillo puerto\n2. danza del venado\n3. organización comunal yaqui por el territorio\n\na. reivindicación vigente con la misma causa que la resistencia histórica\nb. ciudad que hereda el nombre y el culto religioso de un centro de resistencia maya\nc. expresión cultural viva reconocida del pueblo yaqui',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'felipe carrillo puerto hereda el nombre y el culto de chan santa cruz (b); la danza del venado es una expresión cultural viva del pueblo yaqui (c); la organización comunal yaqui por el territorio es una reivindicación vigente con la misma causa histórica (a).',
    common_error:
      'atribuir la herencia religiosa de chan santa cruz a una manifestación yaqui, mezclando el legado de un movimiento con el del otro.',
    source_reference: 'guía oficial, página 13, código 3.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-001',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'una persona nacida en territorio americano de padres españoles posee tierras y un negocio próspero, pero no puede ocupar los cargos eclesiásticos de mayor jerarquía del virreinato, reservados a quienes nacieron en españa. ¿a qué grupo social pertenece?',
    options: ['a los peninsulares', 'a los criollos', 'a los mestizos'],
    correct_option_index: 1,
    explanation:
      'los criollos eran hijos de españoles nacidos en américa; podían poseer tierras y negocios, pero quedaban excluidos de los cargos políticos y eclesiásticos de mayor rango, reservados a los peninsulares.',
    common_error:
      'confundir a los criollos con los peninsulares por compartir el origen español, sin distinguir que solo el lugar de nacimiento determinaba el acceso a los cargos más altos.',
    source_reference: 'guía oficial, página 13, código 3.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-002',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'los _______ estaban agrupados jurídicamente en «repúblicas de indios» y sujetos al pago de tributo a la corona y al trabajo obligatorio en encomiendas o repartimientos.',
    options: ['mestizos', 'indígenas', 'esclavos'],
    correct_option_index: 1,
    explanation:
      'los indígenas estaban organizados jurídicamente en repúblicas de indios, con autoridades propias limitadas, y sujetos al tributo y al trabajo obligatorio en encomiendas y repartimientos.',
    common_error:
      'atribuir la obligación de tributo y trabajo forzado a los mestizos, en lugar de a los indígenas, por confundir posiciones sociales subordinadas distintas.',
    source_reference: 'guía oficial, página 13, código 3.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-003',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'una persona de origen africano trabaja sin salario en un ingenio azucarero novohispano y carece de derechos políticos por ser considerada jurídicamente propiedad de otra persona. ¿a qué grupo social pertenece?',
    options: ['a los mestizos', 'a los esclavos', 'a los indígenas'],
    correct_option_index: 1,
    explanation:
      'los esclavos, en su mayoría de origen africano traídos mediante la trata transatlántica, eran jurídicamente considerados propiedad, sin derechos políticos, y se destinaban sobre todo a minas, ingenios azucareros y servicio doméstico.',
    common_error:
      'equiparar la condición de los esclavos con la de los mestizos u otros grupos subordinados libres, sin distinguir que los esclavos eran jurídicamente propiedad de otra persona.',
    source_reference: 'guía oficial, página 13, código 3.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-004',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'una persona descendiente de españoles e indígenas se dedica al comercio en una ciudad novohispana, sin pertenecer formalmente a la república de indios ni a la élite española. ¿qué rasgo define su posición social como mestizo?',
    options: [
      'una posición intermedia y ambigua, sin encajar en ninguna de las dos repúblicas jurídicas',
      'una posición equivalente a la de un esclavo, por no encajar en ninguna categoría oficial',
      'una posición equivalente a la de un criollo, por descender parcialmente de españoles'
    ],
    correct_option_index: 0,
    explanation:
      'los mestizos ocupaban una posición social intermedia y ambigua: no encajaban de forma clara ni en la república de indios ni en la sociedad española, con ocupaciones diversas como el comercio.',
    common_error:
      'asimilar la posición ambigua del mestizo a la de un grupo definido (esclavo o criollo), en lugar de reconocerla como una categoría social propia e intermedia.',
    source_reference: 'guía oficial, página 13, código 3.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-gsn-005',
    topic_id: 'ch-3-1-3-grupos-sociales-de-la-nueva-espana',
    prompt:
      'relaciona cada grupo social con la característica que lo distingue en la sociedad novohispana.\n\n1. indígenas\n2. criollos\n3. esclavos\n\na. excluidos de los cargos políticos y eclesiásticos más altos pese a su riqueza\nb. sujetos a tributo y trabajo obligatorio dentro de repúblicas de indios\nc. considerados jurídicamente propiedad, sin derechos políticos',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'los indígenas estaban sujetos a tributo y trabajo obligatorio en repúblicas de indios (b); los criollos quedaban excluidos de los cargos más altos pese a su riqueza (a); los esclavos eran jurídicamente propiedad, sin derechos políticos (c).',
    common_error:
      'intercambiar la exclusión política de los criollos con la sujeción a tributo de los indígenas, por tratarse ambos de formas de subordinación dentro del sistema novohispano.',
    source_reference: 'guía oficial, página 13, código 3.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-001',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'el edificio actual del palacio nacional se construyó sobre el sitio que antes ocupó el palacio de moctezuma y hoy es sede del poder ejecutivo federal. ¿cuál es el origen del edificio, tal como se conoce hoy?',
    options: [
      'prehispánico, porque el sitio ya tenía un palacio antes de la conquista',
      'virreinal, porque se construyó durante la colonia como sede del poder virreinal',
      'moderno, porque hoy es sede del gobierno federal'
    ],
    correct_option_index: 1,
    explanation:
      'el palacio nacional se construyó durante el virreinato como sede del principal poder político de la nueva españa; que su terreno tenga un antecedente prehispánico o que hoy sea sede del poder ejecutivo federal no cambia su origen como construcción virreinal.',
    common_error:
      'confundir el origen de un edificio con el antecedente prehispánico de su sitio o con el uso que tiene en la actualidad.',
    source_reference: 'guía oficial, página 13, código 3.1.4; calibración de profundidad: página 31.',
    difficulty: 'intermediate',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-002',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'el día de muertos se sincretizó durante la colonia con las festividades católicas de todos los santos y fieles difuntos. ¿cuál es su origen?',
    options: [
      'virreinal, porque el sincretismo con festividades católicas ocurrió durante la colonia',
      'prehispánico, porque proviene del culto a los muertos de pueblos mesoamericanos',
      'moderno, porque se consolidó como fiesta reconocida durante el siglo xx'
    ],
    correct_option_index: 1,
    explanation:
      'el día de muertos tiene origen prehispánico, en el culto a los muertos de pueblos mesoamericanos; el sincretismo con fiestas católicas ocurrió después, durante la colonia, pero no define su origen.',
    common_error:
      'confundir el momento del sincretismo o la popularización de una tradición con el periodo en que realmente se originó.',
    source_reference: 'guía oficial, página 13, código 3.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-003',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'los tapetes de huamantla forman parte de una festividad católica en honor a la virgen de la caridad; su origen es _______, porque esa tradición religiosa se estableció durante la colonia.',
    options: ['prehispánico', 'moderno', 'virreinal'],
    correct_option_index: 2,
    explanation:
      'los tapetes de huamantla tienen origen virreinal, porque forman parte de una festividad católica cuya tradición se remonta a la época colonial.',
    common_error:
      'atribuir origen prehispánico a cualquier tradición mexicana con fuerte arraigo popular, sin verificar el periodo en que realmente comenzó.',
    source_reference: 'guía oficial, página 13, código 3.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-004',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'un elemento del patrimonio puede tener un antecedente prehispánico en el sitio donde se ubica y, además, un uso actual distinto al de su origen. ¿qué determina realmente el origen de ese elemento?',
    options: [
      'el periodo en que la expresión, tal como se conoce, comenzó a existir',
      'el uso que tiene en la actualidad',
      'el antecedente del sitio donde se encuentra'
    ],
    correct_option_index: 0,
    explanation:
      'el origen de un elemento patrimonial es el periodo en que comenzó a existir tal como se conoce, sin importar qué había antes en el sitio ni para qué se usa hoy.',
    common_error:
      'definir el origen de un elemento patrimonial a partir de su uso actual o del antecedente del sitio, en lugar del periodo en que la expresión misma comenzó a existir.',
    source_reference: 'guía oficial, página 13, código 3.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-oph-005',
    topic_id: 'ch-3-1-4-origen-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'relaciona cada expresión del patrimonio con su origen correcto.\n\n1. día de muertos\n2. tapetes de huamantla\n3. palacio nacional\n\na. origen virreinal, construido sobre un sitio con antecedente prehispánico\nb. origen prehispánico, sincretizado después con festividades católicas\nc. origen virreinal, como parte de una festividad católica colonial',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'el día de muertos tiene origen prehispánico, sincretizado después con fiestas católicas (b); los tapetes de huamantla tienen origen virreinal, como festividad católica colonial (c); el palacio nacional tiene origen virreinal, construido sobre un sitio con antecedente prehispánico (a).',
    common_error:
      'invertir el origen del palacio nacional y el día de muertos, atribuyendo un antecedente prehispánico de sitio al origen mismo de la expresión.',
    source_reference: 'guía oficial, página 13, código 3.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-001',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'una comunidad enseña a las nuevas generaciones una lengua indígena heredada de sus antepasados, para que se siga hablando. ¿qué tipo de acción de preservación del patrimonio es esta?',
    options: ['documentación y registro', 'transmisión comunitaria', 'protección legal'],
    correct_option_index: 1,
    explanation:
      'enseñar y mantener viva una lengua dentro de una comunidad, para que se siga transmitiendo, es transmisión comunitaria: una de las formas centrales de preservación del patrimonio inmaterial.',
    common_error:
      'clasificar la enseñanza activa de una tradición como documentación, en lugar de reconocerla como transmisión comunitaria viva.',
    source_reference: 'guía oficial, página 13, código 3.1.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-002',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'un sitio arqueológico recibe miles de visitantes al año y genera ingresos importantes para la localidad, pero no cuenta con ningún programa de mantenimiento ni restricciones de acceso a sus estructuras más frágiles. ¿esto constituye una acción de preservación del patrimonio?',
    options: [
      'sí, porque la afluencia turística garantiza que el sitio se mantenga',
      'no, porque generar ingresos o recibir visitas no equivale a mantener o proteger el sitio',
      'sí, porque la difusión del sitio evita su deterioro'
    ],
    correct_option_index: 1,
    explanation:
      'la explotación turística sin medidas de conservación no es, por sí sola, una acción de preservación: puede dar visibilidad o beneficio económico, pero no garantiza que el sitio se mantenga.',
    common_error:
      'confundir la popularidad o el aprovechamiento económico de un sitio con acciones reales que lo preserven.',
    source_reference: 'guía oficial, página 13, código 3.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-003',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'declarar una zona arqueológica como monumento protegido, aplicando normas que restringen intervenciones dañinas, es un ejemplo de _______.',
    options: ['documentación y registro', 'transmisión comunitaria', 'protección legal'],
    correct_option_index: 2,
    explanation:
      'una declaratoria que restringe intervenciones dañinas mediante una norma, como la ley federal sobre monumentos y zonas arqueológicos, artísticos e históricos, es protección legal.',
    common_error:
      'confundir una declaratoria legal con un simple registro o catalogación del elemento patrimonial.',
    source_reference: 'guía oficial, página 13, código 3.1.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-004',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'un equipo especializado del inah realiza trabajos técnicos de limpieza, consolidación estructural y reparación en un edificio histórico dañado por el tiempo. ¿qué tipo de acción de preservación describe esto?',
    options: ['restauración y conservación material', 'documentación y registro', 'transmisión comunitaria'],
    correct_option_index: 0,
    explanation:
      'los trabajos técnicos de mantenimiento y reparación de un sitio o edificio, a cargo de instituciones especializadas como el inah, son restauración y conservación material.',
    common_error:
      'clasificar un trabajo técnico de reparación física como documentación, en lugar de reconocerlo como restauración y conservación material.',
    source_reference: 'guía oficial, página 13, código 3.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'ch-pph-005',
    topic_id: 'ch-3-1-5-preservacion-del-patrimonio-prehispanico-y-virreinal',
    prompt:
      'relaciona cada acción con el tipo de preservación del patrimonio que representa.\n\n1. restauración y conservación material\n2. protección legal\n3. documentación y registro\n\na. declarar una zona protegida mediante una norma\nb. catalogar y fotografiar un elemento para conservar su información\nc. reparar y mantener técnicamente un sitio o edificio',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'la restauración y conservación material repara y mantiene técnicamente un sitio (c); la protección legal declara una zona protegida mediante una norma (a); la documentación y registro cataloga y fotografía un elemento para conservar su información (b).',
    common_error:
      'confundir la protección legal, que es normativa, con la restauración, que es un trabajo técnico directo sobre el elemento.',
    source_reference: 'guía oficial, página 13, código 3.1.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
