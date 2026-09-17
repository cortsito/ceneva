import type { question } from './types'

export const humanidades_questions: question[] = [
  {
    id: 'hu-fmc-001',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'un profesor explica que las estaciones del año existen porque una diosa recorre la tierra y, donde pisa, hace crecer las plantas; esa explicación se acepta porque siempre se ha contado así en la comunidad. ¿qué tipo de pensamiento ejemplifica esta explicación?',
    options: ['pensamiento mítico', 'pensamiento filosófico', 'pensamiento científico'],
    correct_option_index: 0,
    explanation:
      'la explicación recurre a un ser sobrenatural y se acepta por tradición, sin argumento racional ni verificación empírica: es pensamiento mítico.',
    common_error:
      'confundir cualquier relato sobre fenómenos naturales con pensamiento científico solo por describir un fenómeno natural, sin notar que aquí la explicación se sostiene por tradición, no por evidencia.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-002',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'un pensador sostiene, mediante un razonamiento coherente sobre causa y efecto, que todo lo que cambia en el universo requiere una causa anterior que lo explique, sin recolectar datos ni realizar ningún experimento. esta explicación corresponde al pensamiento _______.',
    options: ['mítico', 'filosófico', 'científico'],
    correct_option_index: 1,
    explanation:
      'la explicación se sostiene por la coherencia del argumento racional, sin apoyarse en observación sistemática ni verificación empírica: es pensamiento filosófico.',
    common_error:
      'asumir que cualquier razonamiento sobre causas es automáticamente científico, sin notar que aquí falta la observación y la verificación empírica que distinguen a la ciencia.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-003',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'una investigadora mide la temperatura y la humedad del aire durante varios días, formula la hipótesis de que la niebla se forma al alcanzar cierto umbral entre ambas, y confirma esa hipótesis repitiendo la observación en distintas condiciones. ¿qué tipo de pensamiento describe este proceso?',
    options: ['pensamiento científico', 'pensamiento filosófico', 'pensamiento mítico'],
    correct_option_index: 0,
    explanation:
      'el proceso parte de la observación, formula una hipótesis y la verifica empíricamente de forma repetible: es pensamiento científico.',
    common_error:
      'confundir este proceso con pensamiento filosófico solo porque ambos son racionales, sin notar que aquí la validación depende de la observación y la experimentación repetible, no solo del argumento.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-004',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'un pensador explica, con lenguaje técnico y una argumentación cuidadosa sobre la naturaleza de la materia, por qué el universo debe tener un origen único, pero no realiza ninguna observación ni experimento para comprobarlo. ¿por qué esta explicación sigue siendo pensamiento filosófico y no científico?',
    options: [
      'porque se valida por la coherencia del argumento, no por evidencia empírica contrastable',
      'porque usa un lenguaje técnico que no corresponde a ninguna disciplina científica',
      'porque no menciona ningún fenómeno natural relacionado con la ciencia'
    ],
    correct_option_index: 0,
    explanation:
      'un lenguaje serio o técnico no convierte una explicación en científica; lo que la distingue es si se valida por argumentación lógica (filosófico) o por evidencia empírica contrastable (científico), y aquí falta la segunda.',
    common_error:
      'creer que basta un lenguaje técnico o una argumentación cuidadosa para calificar una explicación como científica, sin verificar si de verdad hay observación o experimentación.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-005',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'relaciona cada explicación con el tipo de pensamiento que ejemplifica.\n\n1. una explicación se acepta porque un relato sobre seres sobrenaturales se ha transmitido así por generaciones\n2. una explicación se sostiene por un argumento racional coherente, sin observación ni experimento\n3. una explicación se acepta o se descarta según datos obtenidos mediante experimentos repetibles\n\na. pensamiento científico\nb. pensamiento mítico\nc. pensamiento filosófico',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'la explicación transmitida por tradición sin argumento ni comprobación es pensamiento mítico (b); la que se sostiene solo por coherencia argumental es pensamiento filosófico (c); la que se valida por datos experimentales repetibles es pensamiento científico (a).',
    common_error:
      'intercambiar pensamiento filosófico y científico por ser ambos racionales, sin distinguir si la validación depende del argumento o de la evidencia empírica.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-001',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'antes de compartir una publicación que asegura que cierto producto cura una enfermedad grave, una persona busca si existen estudios verificables que respalden esa afirmación y revisa quién la publicó originalmente. ¿este comportamiento ejemplifica pensamiento crítico?',
    options: [
      'sí, porque evalúa la evidencia y la fuente antes de aceptar la afirmación',
      'no, porque dudar de una publicación no es pensamiento crítico',
      'sí, porque cualquier persona que investigue algo piensa críticamente'
    ],
    correct_option_index: 0,
    explanation:
      'evaluar la evidencia disponible y la credibilidad de la fuente antes de aceptar o compartir una afirmación es, precisamente, pensamiento crítico.',
    common_error:
      'pensar que basta con dudar o investigar algo, sin importar si en verdad se evalúan evidencia y fuente, para que cuente como pensamiento crítico.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-002',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'antes de aceptar una afirmación, el pensamiento crítico exige identificar la afirmación exacta, revisar la credibilidad de su fuente y buscar _______ que la contradigan, en lugar de aceptarla de inmediato.',
    options: [
      'anécdotas personales que la confirmen',
      'explicaciones alternativas o evidencia',
      'opiniones de la mayoría que la repitan'
    ],
    correct_option_index: 1,
    explanation:
      'el pensamiento crítico exige buscar explicaciones alternativas o evidencia que pueda contradecir la afirmación, no solo confirmarla, antes de aceptarla.',
    common_error:
      'creer que basta con buscar información que confirme lo que ya se piensa, en lugar de también buscar lo que podría contradecirlo.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-003',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'alguien rechaza de inmediato cualquier noticia que contradiga sus creencias, sin revisar ninguna fuente ni evidencia disponible. ¿este comportamiento ejemplifica pensamiento crítico?',
    options: [
      'no, porque rechazar sin evaluar evidencia no es distinto de aceptar sin evaluarla',
      'sí, porque cuestionar información es siempre pensamiento crítico',
      'sí, porque desconfiar de las noticias protege de la desinformación'
    ],
    correct_option_index: 0,
    explanation:
      'rechazar una afirmación sin revisar su evidencia es tan poco crítico como aceptarla sin revisarla: en ambos casos falta el paso de evaluar.',
    common_error:
      'confundir el rechazo automático o la desconfianza con pensamiento crítico, sin notar que ambos carecen de una evaluación real de la evidencia.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-004',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'una persona acepta que cierta afirmación es verdadera únicamente porque la repiten muchas personas en sus redes sociales, sin revisar ninguna evidencia adicional. ¿este comportamiento ejemplifica pensamiento crítico?',
    options: [
      'no, porque la opinión mayoritaria no sustituye la evaluación de la evidencia',
      'sí, porque una afirmación repetida por muchas personas suele ser confiable',
      'sí, porque seguir la opinión de la mayoría reduce el riesgo de equivocarse'
    ],
    correct_option_index: 0,
    explanation:
      'aceptar una idea porque la repite la mayoría, sin evaluar la evidencia que esa mayoría realmente ofrece, no es pensamiento crítico.',
    common_error:
      'suponer que la popularidad de una afirmación equivale a que esté respaldada por evidencia.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-005',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'relaciona cada actitud con lo que ejemplifica respecto al pensamiento crítico.\n\n1. revisar la fuente y buscar evidencia adicional antes de aceptar una afirmación\n2. rechazar una afirmación sin revisar ninguna evidencia, solo porque incomoda\n3. aceptar una afirmación solo porque la sostiene una persona con autoridad, sin revisar su evidencia\n\na. no es pensamiento crítico, porque falta evaluar la evidencia antes de rechazar\nb. sí es pensamiento crítico\nc. no es pensamiento crítico, porque falta evaluar la evidencia antes de aceptar',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'revisar la fuente y la evidencia antes de aceptar una afirmación sí es pensamiento crítico (b); rechazar sin evaluar es tan poco crítico como aceptar sin evaluar (a); aceptar solo por autoridad sin revisar evidencia tampoco es pensamiento crítico (c).',
    common_error:
      'creer que aceptar la opinión de una autoridad sin revisarla es distinto, y más aceptable, que rechazar sin revisar, cuando ambos casos carecen igualmente de evaluación.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-001',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'alguien enfrenta una decisión difícil sobre su futuro laboral, siente incertidumbre por no saber si acierta, pero elige un camino y asume que las consecuencias de esa elección serán su responsabilidad. ¿esta postura ejemplifica el pensamiento existencialista?',
    options: [
      'sí, porque asume su libertad para decidir y su responsabilidad sobre el resultado',
      'no, porque sentir incertidumbre significa que la persona no decide realmente',
      'sí, porque cualquier decisión difícil es una postura existencialista'
    ],
    correct_option_index: 0,
    explanation:
      'asumir la libertad de decidir y la responsabilidad de la consecuencia, incluso con angustia por la incertidumbre, es la postura existencialista.',
    common_error:
      'pensar que la angustia o la incertidumbre niegan la libertad de decidir, cuando en realidad son parte de asumir esa libertad.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-002',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'el malestar o la incertidumbre genuinos que siente una persona al reconocer que debe decidir por sí misma, sin garantía de que su elección sea la correcta, se conoce como _______.',
    options: ['determinismo', 'angustia existencial', 'doxa'],
    correct_option_index: 1,
    explanation:
      'la angustia existencial es el malestar genuino de enfrentar la propia libertad y responsabilidad al decidir, sin una respuesta ya dada ni garantía de acertar.',
    common_error:
      'confundir la angustia existencial con conceptos de otras lecciones, como el determinismo o la doxa, que no describen este malestar propio de decidir con libertad.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-003',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'alguien afirma que su situación económica actual ya estaba determinada desde su nacimiento y que ninguna decisión que tome ahora puede cambiar lo que va a ocurrir. ¿esta postura ejemplifica el pensamiento existencialista?',
    options: [
      'no, porque niega la libertad de decidir y atribuye el resultado a algo externo a la persona',
      'sí, porque reconoce que hay circunstancias fuera de su control',
      'sí, porque aceptar la propia situación con resignación es una forma de responsabilidad'
    ],
    correct_option_index: 0,
    explanation:
      'negar la libertad de decidir y atribuir el resultado a un destino ya fijado es una postura fatalista, opuesta al existencialismo, que afirma la libertad y la responsabilidad de decidir.',
    common_error:
      'confundir el reconocimiento de circunstancias difíciles con negar la libertad de decidir frente a ellas; el existencialismo acepta las circunstancias pero no elimina la libertad de responder ante ellas.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-004',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'alguien decide romper una promesa importante solo porque en ese momento no tiene ganas de cumplirla, y considera que no debe asumir ninguna consecuencia por esa decisión. ¿esta postura ejemplifica el pensamiento existencialista?',
    options: [
      'no, porque la libertad existencialista siempre viene acompañada de responsabilidad por lo que se elige',
      'sí, porque decidir libremente sin que nada externo lo impida es la esencia del existencialismo',
      'sí, porque romper una promesa siempre es una decisión libre y por tanto existencialista'
    ],
    correct_option_index: 0,
    explanation:
      'el existencialismo no es hacer lo que se quiera sin consecuencias; la libertad de decidir siempre implica asumir la responsabilidad por el resultado de esa decisión.',
    common_error:
      'confundir la libertad radical existencialista con actuar sin ninguna responsabilidad por las consecuencias, cuando ambas van siempre unidas en esta postura.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-005',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'relaciona cada situación con el rasgo del pensamiento existencialista que ejemplifica, o con su postura opuesta.\n\n1. una persona asume que el resultado de su decisión será su responsabilidad, aunque le genere incertidumbre\n2. una persona afirma que su destino ya estaba escrito y que ninguna decisión suya cambia lo que va a pasar\n3. una persona reconoce que, pese a circunstancias difíciles, siempre tiene la posibilidad de elegir\n\na. libertad radical\nb. responsabilidad, con la angustia que conlleva\nc. postura fatalista, opuesta al existencialismo',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'asumir la responsabilidad del resultado con incertidumbre ejemplifica la responsabilidad y la angustia existencial (b); atribuir el destino a algo externo es la postura fatalista opuesta (c); reconocer que siempre existe la posibilidad de elegir es la libertad radical (a).',
    common_error:
      'confundir el reconocimiento de circunstancias difíciles, que no elimina la libertad radical, con la postura fatalista que niega por completo la posibilidad de elegir.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-001',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'alguien afirma que cierto alimento es saludable porque siempre se ha dicho así en su familia, sin ofrecer ninguna otra razón. ¿esta creencia corresponde a doxa o a episteme?',
    options: [
      'a doxa, porque se sostiene por costumbre y no por un fundamento verificable',
      'a episteme, porque una creencia familiar transmitida por generaciones ya es un fundamento',
      'a episteme, porque la persona la sostiene con total seguridad'
    ],
    correct_option_index: 0,
    explanation:
      'sostener una creencia solo por costumbre o tradición, sin un fundamento verificable o un razonamiento justificado, es doxa.',
    common_error:
      'creer que una creencia transmitida por muchas generaciones ya cuenta como un fundamento justificado, cuando la tradición por sí sola no es evidencia ni razonamiento riguroso.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-002',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'una creencia sostenida mediante razonamiento riguroso o evidencia verificable, que en principio puede revisarse si aparece evidencia en contra, se llama _______.',
    options: ['doxa', 'episteme', 'pensamiento mítico'],
    correct_option_index: 1,
    explanation:
      'la episteme es la creencia sostenida con fundamento justificado y verificable, y revisable ante nueva evidencia; a diferencia de la doxa, que se sostiene solo por impresión o costumbre.',
    common_error:
      'confundir episteme con cualquier creencia sostenida con firmeza, sin verificar si en verdad tiene un fundamento justificable.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-003',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'una afirmación se repite con mucha seguridad en un grupo de personas, y todas coinciden en sostenerla, pero ninguna puede explicar en qué evidencia o razonamiento se basa. ¿esta creencia corresponde a doxa o a episteme?',
    options: [
      'a doxa, porque la fuerza con la que se sostiene una afirmación no equivale a su justificación',
      'a episteme, porque una afirmación que muchas personas repiten con seguridad ya está validada',
      'a episteme, porque la coincidencia entre varias personas funciona como evidencia'
    ],
    correct_option_index: 0,
    explanation:
      'una creencia sostenida con mucha convicción, o repetida por mucha gente, sigue siendo doxa si nadie puede justificarla con razonamiento riguroso o evidencia verificable.',
    common_error:
      'confundir el consenso o la seguridad con la que se afirma algo con una justificación real de esa afirmación.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-004',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'alguien afirma que cierta hierba cura un malestar solo porque así le pareció una vez que la usó, sin ningún otro razonamiento; resulta que, por razones médicas verificables que esa persona desconoce, la hierba en efecto tiene ese efecto. ¿por qué esta creencia sigue siendo doxa y no episteme?',
    options: [
      'porque la diferencia entre doxa y episteme no depende de si la creencia resulta verdadera, sino de si está justificada',
      'porque ninguna creencia sobre remedios naturales puede ser episteme',
      'porque la persona debería haber usado la hierba más de una vez para justificar su creencia'
    ],
    correct_option_index: 0,
    explanation:
      'doxa y episteme se distinguen por si la creencia está justificada, no por si resulta verdadera; una doxa puede ser cierta por casualidad, pero sigue sin tener un fundamento justificado.',
    common_error:
      'asumir que una creencia que resulta ser verdadera automáticamente cuenta como episteme, sin revisar si en verdad estaba fundamentada cuando se sostuvo.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-005',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'relaciona cada creencia con doxa o episteme, según esté o no fundamentada.\n\n1. una persona sostiene que cierto remedio funciona porque así se ha dicho siempre en su familia\n2. una persona sostiene que cierto remedio funciona citando estudios clínicos revisables que midieron su efecto\n3. una persona sostiene con total seguridad que cierto remedio funciona, sin poder explicar en qué se basa\n\na. episteme\nb. doxa, por falta de fundamento verificable\nc. doxa, pese a sostenerse con seguridad',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'sostener una creencia solo por tradición familiar es doxa por falta de fundamento (b); citar estudios clínicos revisables es episteme (a); sostener algo con seguridad sin poder justificarlo sigue siendo doxa (c).',
    common_error:
      'confundir la seguridad con la que se sostiene una creencia con la justificación que la respalda, cuando son cosas distintas.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
