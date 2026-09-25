import type { question } from './types'

export const humanidades_questions: question[] = [
  {
    id: 'hu-fmc-001',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'Un profesor explica que las estaciones del año existen porque una diosa recorre la tierra y, donde pisa, hace crecer las plantas; esa explicación se acepta porque siempre se ha contado así en la comunidad. ¿Qué tipo de pensamiento ejemplifica esta explicación?',
    options: ['pensamiento mítico', 'pensamiento filosófico', 'pensamiento científico'],
    correct_option_index: 0,
    explanation:
      'La explicación recurre a un ser sobrenatural y se acepta por tradición, sin argumento racional ni verificación empírica: es pensamiento mítico.',
    common_error:
      'Confundir cualquier relato sobre fenómenos naturales con pensamiento científico solo por describir un fenómeno natural, sin notar que aquí la explicación se sostiene por tradición, no por evidencia.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-002',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'Un pensador sostiene, mediante un razonamiento coherente sobre causa y efecto, que todo lo que cambia en el universo requiere una causa anterior que lo explique, sin recolectar datos ni realizar ningún experimento. Esta explicación corresponde al pensamiento _______.',
    options: ['mítico', 'filosófico', 'científico'],
    correct_option_index: 1,
    explanation:
      'La explicación se sostiene por la coherencia del argumento racional, sin apoyarse en observación sistemática ni verificación empírica: es pensamiento filosófico.',
    common_error:
      'Asumir que cualquier razonamiento sobre causas es automáticamente científico, sin notar que aquí falta la observación y la verificación empírica que distinguen a la ciencia.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-003',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'Una investigadora mide la temperatura y la humedad del aire durante varios días, formula la hipótesis de que la niebla se forma al alcanzar cierto umbral entre ambas, y confirma esa hipótesis repitiendo la observación en distintas condiciones. ¿Qué tipo de pensamiento describe este proceso?',
    options: ['pensamiento científico', 'pensamiento filosófico', 'pensamiento mítico'],
    correct_option_index: 0,
    explanation:
      'El proceso parte de la observación, formula una hipótesis y la verifica empíricamente de forma repetible: es pensamiento científico.',
    common_error:
      'Confundir este proceso con pensamiento filosófico solo porque ambos son racionales, sin notar que aquí la validación depende de la observación y la experimentación repetible, no solo del argumento.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-004',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'Un pensador explica, con lenguaje técnico y una argumentación cuidadosa sobre la naturaleza de la materia, por qué el universo debe tener un origen único, pero no realiza ninguna observación ni experimento para comprobarlo. ¿Por qué esta explicación sigue siendo pensamiento filosófico y no científico?',
    options: [
      'porque se valida por la coherencia del argumento, no por evidencia empírica contrastable',
      'porque usa un lenguaje técnico que no corresponde a ninguna disciplina científica',
      'porque no menciona ningún fenómeno natural relacionado con la ciencia'
    ],
    correct_option_index: 0,
    explanation:
      'Un lenguaje serio o técnico no convierte una explicación en científica; lo que la distingue es si se valida por argumentación lógica (filosófico) o por evidencia empírica contrastable (científico), y aquí falta la segunda.',
    common_error:
      'Creer que basta un lenguaje técnico o una argumentación cuidadosa para calificar una explicación como científica, sin verificar si de verdad hay observación o experimentación.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fmc-005',
    topic_id: 'hu-4-1-1-filosofia-mito-y-ciencia',
    prompt:
      'Relaciona cada explicación con el tipo de pensamiento que ejemplifica.\n\n1. Una explicación se acepta porque un relato sobre seres sobrenaturales se ha transmitido así por generaciones\n2. Una explicación se sostiene por un argumento racional coherente, sin observación ni experimento\n3. Una explicación se acepta o se descarta según datos obtenidos mediante experimentos repetibles\n\na. pensamiento científico\nb. pensamiento mítico\nc. pensamiento filosófico',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'La explicación transmitida por tradición sin argumento ni comprobación es pensamiento mítico (b); la que se sostiene solo por coherencia argumental es pensamiento filosófico (c); la que se valida por datos experimentales repetibles es pensamiento científico (a).',
    common_error:
      'Intercambiar pensamiento filosófico y científico por ser ambos racionales, sin distinguir si la validación depende del argumento o de la evidencia empírica.',
    source_reference: 'guía oficial, página 14, código 4.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-001',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'Antes de compartir una publicación que asegura que cierto producto cura una enfermedad grave, una persona busca si existen estudios verificables que respalden esa afirmación y revisa quién la publicó originalmente. ¿Este comportamiento ejemplifica pensamiento crítico?',
    options: [
      'sí, porque evalúa la evidencia y la fuente antes de aceptar la afirmación',
      'no, porque dudar de una publicación no es pensamiento crítico',
      'sí, porque cualquier persona que investigue algo piensa críticamente'
    ],
    correct_option_index: 0,
    explanation:
      'Evaluar la evidencia disponible y la credibilidad de la fuente antes de aceptar o compartir una afirmación es, precisamente, pensamiento crítico.',
    common_error:
      'Pensar que basta con dudar o investigar algo, sin importar si en verdad se evalúan evidencia y fuente, para que cuente como pensamiento crítico.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-002',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'Antes de aceptar una afirmación, el pensamiento crítico exige identificar la afirmación exacta, revisar la credibilidad de su fuente y buscar _______ que la contradigan, en lugar de aceptarla de inmediato.',
    options: [
      'anécdotas personales que la confirmen',
      'explicaciones alternativas o evidencia',
      'opiniones de la mayoría que la repitan'
    ],
    correct_option_index: 1,
    explanation:
      'El pensamiento crítico exige buscar explicaciones alternativas o evidencia que pueda contradecir la afirmación, no solo confirmarla, antes de aceptarla.',
    common_error:
      'Creer que basta con buscar información que confirme lo que ya se piensa, en lugar de también buscar lo que podría contradecirlo.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-003',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'Alguien rechaza de inmediato cualquier noticia que contradiga sus creencias, sin revisar ninguna fuente ni evidencia disponible. ¿Este comportamiento ejemplifica pensamiento crítico?',
    options: [
      'no, porque rechazar sin evaluar evidencia no es distinto de aceptar sin evaluarla',
      'sí, porque cuestionar información es siempre pensamiento crítico',
      'sí, porque desconfiar de las noticias protege de la desinformación'
    ],
    correct_option_index: 0,
    explanation:
      'Rechazar una afirmación sin revisar su evidencia es tan poco crítico como aceptarla sin revisarla: en ambos casos falta el paso de evaluar.',
    common_error:
      'Confundir el rechazo automático o la desconfianza con pensamiento crítico, sin notar que ambos carecen de una evaluación real de la evidencia.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-004',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'Una persona acepta que cierta afirmación es verdadera únicamente porque la repiten muchas personas en sus redes sociales, sin revisar ninguna evidencia adicional. ¿Este comportamiento ejemplifica pensamiento crítico?',
    options: [
      'no, porque la opinión mayoritaria no sustituye la evaluación de la evidencia',
      'sí, porque una afirmación repetida por muchas personas suele ser confiable',
      'sí, porque seguir la opinión de la mayoría reduce el riesgo de equivocarse'
    ],
    correct_option_index: 0,
    explanation:
      'Aceptar una idea porque la repite la mayoría, sin evaluar la evidencia que esa mayoría realmente ofrece, no es pensamiento crítico.',
    common_error:
      'Suponer que la popularidad de una afirmación equivale a que esté respaldada por evidencia.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pc-005',
    topic_id: 'hu-4-1-2-pensamiento-critico',
    prompt:
      'Relaciona cada actitud con lo que ejemplifica respecto al pensamiento crítico.\n\n1. Revisar la fuente y buscar evidencia adicional antes de aceptar una afirmación\n2. Rechazar una afirmación sin revisar ninguna evidencia, solo porque incomoda\n3. Aceptar una afirmación solo porque la sostiene una persona con autoridad, sin revisar su evidencia\n\na. no es pensamiento crítico, porque falta evaluar la evidencia antes de rechazar\nb. sí es pensamiento crítico\nc. no es pensamiento crítico, porque falta evaluar la evidencia antes de aceptar',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'Revisar la fuente y la evidencia antes de aceptar una afirmación sí es pensamiento crítico (b); rechazar sin evaluar es tan poco crítico como aceptar sin evaluar (a); aceptar solo por autoridad sin revisar evidencia tampoco es pensamiento crítico (c).',
    common_error:
      'Creer que aceptar la opinión de una autoridad sin revisarla es distinto, y más aceptable, que rechazar sin revisar, cuando ambos casos carecen igualmente de evaluación.',
    source_reference: 'guía oficial, página 14, código 4.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-001',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'Alguien enfrenta una decisión difícil sobre su futuro laboral, siente incertidumbre por no saber si acierta, pero elige un camino y asume que las consecuencias de esa elección serán su responsabilidad. ¿Esta postura ejemplifica el pensamiento existencialista?',
    options: [
      'sí, porque asume su libertad para decidir y su responsabilidad sobre el resultado',
      'no, porque sentir incertidumbre significa que la persona no decide realmente',
      'sí, porque cualquier decisión difícil es una postura existencialista'
    ],
    correct_option_index: 0,
    explanation:
      'Asumir la libertad de decidir y la responsabilidad de la consecuencia, incluso con angustia por la incertidumbre, es la postura existencialista.',
    common_error:
      'Pensar que la angustia o la incertidumbre niegan la libertad de decidir, cuando en realidad son parte de asumir esa libertad.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-002',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'El malestar o la incertidumbre genuinos que siente una persona al reconocer que debe decidir por sí misma, sin garantía de que su elección sea la correcta, se conoce como _______.',
    options: ['determinismo', 'angustia existencial', 'doxa'],
    correct_option_index: 1,
    explanation:
      'La angustia existencial es el malestar genuino de enfrentar la propia libertad y responsabilidad al decidir, sin una respuesta ya dada ni garantía de acertar.',
    common_error:
      'Confundir la angustia existencial con conceptos de otras lecciones, como el determinismo o la doxa, que no describen este malestar propio de decidir con libertad.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-003',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'Alguien afirma que su situación económica actual ya estaba determinada desde su nacimiento y que ninguna decisión que tome ahora puede cambiar lo que va a ocurrir. ¿Esta postura ejemplifica el pensamiento existencialista?',
    options: [
      'no, porque niega la libertad de decidir y atribuye el resultado a algo externo a la persona',
      'sí, porque reconoce que hay circunstancias fuera de su control',
      'sí, porque aceptar la propia situación con resignación es una forma de responsabilidad'
    ],
    correct_option_index: 0,
    explanation:
      'Negar la libertad de decidir y atribuir el resultado a un destino ya fijado es una postura fatalista, opuesta al existencialismo, que afirma la libertad y la responsabilidad de decidir.',
    common_error:
      'Confundir el reconocimiento de circunstancias difíciles con negar la libertad de decidir frente a ellas; el existencialismo acepta las circunstancias pero no elimina la libertad de responder ante ellas.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-004',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'Alguien decide romper una promesa importante solo porque en ese momento no tiene ganas de cumplirla, y considera que no debe asumir ninguna consecuencia por esa decisión. ¿Esta postura ejemplifica el pensamiento existencialista?',
    options: [
      'no, porque la libertad existencialista siempre viene acompañada de responsabilidad por lo que se elige',
      'sí, porque decidir libremente sin que nada externo lo impida es la esencia del existencialismo',
      'sí, porque romper una promesa siempre es una decisión libre y por tanto existencialista'
    ],
    correct_option_index: 0,
    explanation:
      'El existencialismo no es hacer lo que se quiera sin consecuencias; la libertad de decidir siempre implica asumir la responsabilidad por el resultado de esa decisión.',
    common_error:
      'Confundir la libertad radical existencialista con actuar sin ninguna responsabilidad por las consecuencias, cuando ambas van siempre unidas en esta postura.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pe-005',
    topic_id: 'hu-4-1-3-pensamiento-existencialista',
    prompt:
      'Relaciona cada situación con el rasgo del pensamiento existencialista que ejemplifica, o con su postura opuesta.\n\n1. Una persona asume que el resultado de su decisión será su responsabilidad, aunque le genere incertidumbre\n2. Una persona afirma que su destino ya estaba escrito y que ninguna decisión suya cambia lo que va a pasar\n3. Una persona reconoce que, pese a circunstancias difíciles, siempre tiene la posibilidad de elegir\n\na. libertad radical\nb. responsabilidad, con la angustia que conlleva\nc. postura fatalista, opuesta al existencialismo',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Asumir la responsabilidad del resultado con incertidumbre ejemplifica la responsabilidad y la angustia existencial (b); atribuir el destino a algo externo es la postura fatalista opuesta (c); reconocer que siempre existe la posibilidad de elegir es la libertad radical (a).',
    common_error:
      'Confundir el reconocimiento de circunstancias difíciles, que no elimina la libertad radical, con la postura fatalista que niega por completo la posibilidad de elegir.',
    source_reference: 'guía oficial, página 14, código 4.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-001',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'Alguien afirma que cierto alimento es saludable porque siempre se ha dicho así en su familia, sin ofrecer ninguna otra razón. ¿Esta creencia corresponde a doxa o a episteme?',
    options: [
      'a doxa, porque se sostiene por costumbre y no por un fundamento verificable',
      'a episteme, porque una creencia familiar transmitida por generaciones ya es un fundamento',
      'a episteme, porque la persona la sostiene con total seguridad'
    ],
    correct_option_index: 0,
    explanation:
      'Sostener una creencia solo por costumbre o tradición, sin un fundamento verificable o un razonamiento justificado, es doxa.',
    common_error:
      'Creer que una creencia transmitida por muchas generaciones ya cuenta como un fundamento justificado, cuando la tradición por sí sola no es evidencia ni razonamiento riguroso.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-002',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'Una creencia sostenida mediante razonamiento riguroso o evidencia verificable, que en principio puede revisarse si aparece evidencia en contra, se llama _______.',
    options: ['doxa', 'episteme', 'pensamiento mítico'],
    correct_option_index: 1,
    explanation:
      'La episteme es la creencia sostenida con fundamento justificado y verificable, y revisable ante nueva evidencia; a diferencia de la doxa, que se sostiene solo por impresión o costumbre.',
    common_error:
      'Confundir episteme con cualquier creencia sostenida con firmeza, sin verificar si en verdad tiene un fundamento justificable.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-003',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'Una afirmación se repite con mucha seguridad en un grupo de personas, y todas coinciden en sostenerla, pero ninguna puede explicar en qué evidencia o razonamiento se basa. ¿Esta creencia corresponde a doxa o a episteme?',
    options: [
      'a doxa, porque la fuerza con la que se sostiene una afirmación no equivale a su justificación',
      'a episteme, porque una afirmación que muchas personas repiten con seguridad ya está validada',
      'a episteme, porque la coincidencia entre varias personas funciona como evidencia'
    ],
    correct_option_index: 0,
    explanation:
      'Una creencia sostenida con mucha convicción, o repetida por mucha gente, sigue siendo doxa si nadie puede justificarla con razonamiento riguroso o evidencia verificable.',
    common_error:
      'Confundir el consenso o la seguridad con la que se afirma algo con una justificación real de esa afirmación.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-004',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'Alguien afirma que cierta hierba cura un malestar solo porque así le pareció una vez que la usó, sin ningún otro razonamiento; resulta que, por razones médicas verificables que esa persona desconoce, la hierba en efecto tiene ese efecto. ¿Por qué esta creencia sigue siendo doxa y no episteme?',
    options: [
      'porque la diferencia entre doxa y episteme no depende de si la creencia resulta verdadera, sino de si está justificada',
      'porque ninguna creencia sobre remedios naturales puede ser episteme',
      'porque la persona debería haber usado la hierba más de una vez para justificar su creencia'
    ],
    correct_option_index: 0,
    explanation:
      'Doxa y episteme se distinguen por si la creencia está justificada, no por si resulta verdadera; una doxa puede ser cierta por casualidad, pero sigue sin tener un fundamento justificado.',
    common_error:
      'Asumir que una creencia que resulta ser verdadera automáticamente cuenta como episteme, sin revisar si en verdad estaba fundamentada cuando se sostuvo.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-de-005',
    topic_id: 'hu-4-1-4-doxa-y-episteme',
    prompt:
      'Relaciona cada creencia con doxa o episteme, según esté o no fundamentada.\n\n1. Una persona sostiene que cierto remedio funciona porque así se ha dicho siempre en su familia\n2. Una persona sostiene que cierto remedio funciona citando estudios clínicos revisables que midieron su efecto\n3. Una persona sostiene con total seguridad que cierto remedio funciona, sin poder explicar en qué se basa\n\na. episteme\nb. doxa, por falta de fundamento verificable\nc. doxa, pese a sostenerse con seguridad',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'Sostener una creencia solo por tradición familiar es doxa por falta de fundamento (b); citar estudios clínicos revisables es episteme (a); sostener algo con seguridad sin poder justificarlo sigue siendo doxa (c).',
    common_error:
      'Confundir la seguridad con la que se sostiene una creencia con la justificación que la respalda, cuando son cosas distintas.',
    source_reference: 'guía oficial, página 14, código 4.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fdl-001',
    topic_id: 'hu-4-2-1-funciones-de-la-lengua',
    prompt:
      'Un texto plantea, con lenguaje formal y sin dirigirse a nadie en particular, lo siguiente: "Actúa siempre buscando el bien común de quienes te rodean, sin excepción." ¿Qué función de la lengua predomina en este enunciado?',
    options: [
      'función informativa, porque describe un principio general',
      'función instrumental, porque su forma es un imperativo que busca guiar la conducta del receptor',
      'función emotiva, porque expresa una convicción personal de quien habla'
    ],
    correct_option_index: 1,
    explanation:
      'Aunque el enunciado suena general y no como una orden cotidiana, su forma gramatical es un imperativo ("actúa") dirigido a producir una reacción en quien lo recibe: guiar su conducta. Eso es función instrumental, sin importar qué tan formal o filosófico suene el enunciado.',
    common_error:
      'Suponer que un enunciado formal o abstracto no puede ser instrumental, y clasificarlo como informativo solo porque no se parece a una orden cotidiana como "cierra la puerta".',
    source_reference: 'guía oficial, página 15, código 4.2.1.',
    difficulty: 'intermediate',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-fdl-002',
    topic_id: 'hu-4-2-1-funciones-de-la-lengua',
    prompt:
      'Una persona escribe en su diario: "Me invade una tristeza profunda cada vez que recuerdo esa despedida." Este enunciado corresponde a la función _______ de la lengua.',
    options: ['instrumental', 'emotiva', 'informativa'],
    correct_option_index: 1,
    explanation:
      'El enunciado expresa el estado de ánimo de quien escribe, sin buscar una acción en quien lo lee ni afirmar un dato verificable: es función emotiva.',
    common_error:
      'Confundir cualquier enunciado que relate una experiencia personal con función informativa, sin notar que aquí el centro es el sentimiento de quien habla, no un dato externo verificable.',
    source_reference: 'guía oficial, página 15, código 4.2.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fdl-003',
    topic_id: 'hu-4-2-1-funciones-de-la-lengua',
    prompt:
      'En un manual de laboratorio se indica: "El punto de ebullición del agua a nivel del mar es de cien grados Celsius." ¿Qué función de la lengua predomina?',
    options: [
      'función informativa, porque transmite un dato verificable sin buscar una reacción ni expresar un sentimiento',
      'función instrumental, porque orienta un procedimiento de laboratorio',
      'función emotiva, porque quien escribe muestra interés por el tema'
    ],
    correct_option_index: 0,
    explanation:
      'El enunciado afirma un dato objetivo y verificable, sin forma imperativa ni expresión de sentimientos: es función informativa.',
    common_error:
      'Asumir que cualquier enunciado dentro de un manual de procedimientos es instrumental, sin verificar si en realidad está dando una orden o solo afirmando un dato.',
    source_reference: 'guía oficial, página 15, código 4.2.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fdl-004',
    topic_id: 'hu-4-2-1-funciones-de-la-lengua',
    prompt:
      'Alguien le dice a un compañero: "Necesito que me ayudes con este pendiente antes de que termine el día." ¿Qué función de la lengua predomina, aunque el tono suene urgente y personal?',
    options: [
      'función emotiva, porque expresa la urgencia que siente quien habla',
      'función informativa, porque describe una tarea pendiente',
      'función instrumental, porque busca que el receptor realice una acción concreta'
    ],
    correct_option_index: 2,
    explanation:
      'Pese al tono urgente y personal, el propósito central del enunciado es que el receptor actúe (ayude antes de que termine el día): es función instrumental. La emoción acompaña al mensaje, pero no define su función.',
    common_error:
      'Clasificar una petición como emotiva solo porque tiene un tono urgente o personal, sin notar que su propósito real es que el receptor haga algo.',
    source_reference: 'guía oficial, página 15, código 4.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-fdl-005',
    topic_id: 'hu-4-2-1-funciones-de-la-lengua',
    prompt:
      'Relaciona cada enunciado con la función de la lengua que ejemplifica.\n\n1. "Guarda silencio mientras dure la ceremonia."\n2. "Qué alivio siento ahora que todo terminó."\n3. "La ceremonia comenzó a las nueve de la mañana."\n\na. función informativa\nb. función instrumental\nc. función emotiva',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El enunciado 1 es una forma imperativa que busca que se cumpla algo: función instrumental (b). El 2 expresa el sentimiento de quien habla: función emotiva (c). El 3 afirma un dato verificable: función informativa (a).',
    common_error:
      'Clasificar el enunciado 1 como informativo solo porque no suena a una orden brusca, sin notar que toda forma imperativa dirigida a guiar una conducta es instrumental, sea cortés o no.',
    source_reference: 'guía oficial, página 15, código 4.2.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pyc-001',
    topic_id: 'hu-4-2-2-premisas-y-conclusion-del-argumento',
    prompt:
      'En el siguiente argumento, identifica la conclusión: "Numerosos estudios muestran que dormir menos de seis horas afecta la concentración, y la falta de concentración incrementa los errores en el trabajo. Por lo tanto, dormir lo suficiente ayuda a reducir los errores laborales."',
    options: [
      '"numerosos estudios muestran que dormir menos de seis horas afecta la concentración", porque es la primera afirmación del texto',
      '"la falta de concentración incrementa los errores en el trabajo", porque ofrece una razón adicional',
      '"dormir lo suficiente ayuda a reducir los errores laborales", porque es la afirmación que las otras dos sostienen, señalada por "por lo tanto"'
    ],
    correct_option_index: 2,
    explanation:
      'La conclusión es la afirmación que las premisas buscan sostener, señalada aquí por "por lo tanto"; las otras dos afirmaciones son las razones que la sostienen.',
    common_error:
      'Identificar la conclusión por su posición en el texto, como si la primera oración siempre lo fuera, en lugar de identificar cuál afirmación depende de las demás para sostenerse.',
    source_reference: 'guía oficial, página 15, código 4.2.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pyc-002',
    topic_id: 'hu-4-2-2-premisas-y-conclusion-del-argumento',
    prompt:
      'En un argumento, la afirmación que las razones ofrecidas pretenden sostener y justificar se llama _______.',
    options: ['premisa', 'conclusión', 'hipótesis'],
    correct_option_index: 1,
    explanation:
      'La conclusión es la afirmación que las premisas de un argumento pretenden sostener y justificar.',
    common_error:
      'Confundir "premisa" y "conclusión" como sinónimos, o pensar que "hipótesis" es el nombre correcto de lo que las premisas de un argumento sostienen.',
    source_reference: 'guía oficial, página 15, código 4.2.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pyc-003',
    topic_id: 'hu-4-2-2-premisas-y-conclusion-del-argumento',
    prompt:
      '"El proyecto debe posponerse, dado que aún faltan permisos por resolver y el presupuesto no se ha confirmado." ¿Cuál es la premisa en este argumento?',
    options: [
      '"el proyecto debe posponerse"',
      'todo el enunciado es una sola premisa sin conclusión',
      '"aún faltan permisos por resolver y el presupuesto no se ha confirmado"'
    ],
    correct_option_index: 2,
    explanation:
      'Señalada por "dado que", esta es la razón que sostiene la conclusión "el proyecto debe posponerse", que aparece primero en el enunciado.',
    common_error:
      'Suponer que la primera parte de un enunciado siempre es la premisa, cuando aquí es en realidad la conclusión, seguida de la razón introducida por "dado que".',
    source_reference: 'guía oficial, página 15, código 4.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pyc-004',
    topic_id: 'hu-4-2-2-premisas-y-conclusion-del-argumento',
    prompt:
      '"El puente muestra grietas visibles en dos de sus soportes principales; los vehículos pesados no deberían cruzarlo hasta que se revise su estructura." Aunque el texto no usa palabras como "porque" o "por lo tanto", ¿cuál enunciado funciona como conclusión?',
    options: [
      '"los vehículos pesados no deberían cruzarlo hasta que se revise su estructura"',
      '"el puente muestra grietas visibles en dos de sus soportes principales"',
      'ninguno, porque sin palabras indicadoras no puede identificarse una conclusión'
    ],
    correct_option_index: 0,
    explanation:
      'Aun sin palabras indicadoras, se identifica cuál afirmación se está sosteniendo: la recomendación de no cruzar con vehículos pesados es lo que la observación de las grietas sostiene.',
    common_error:
      'Creer que se necesitan palabras como "porque" o "por lo tanto" para identificar la estructura de un argumento, cuando identificar premisa y conclusión depende de su papel lógico, no de la presencia de conectores.',
    source_reference: 'guía oficial, página 15, código 4.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pyc-005',
    topic_id: 'hu-4-2-2-premisas-y-conclusion-del-argumento',
    prompt:
      'Relaciona cada fragmento con su papel dentro del argumento: "La biblioteca debe ampliar su horario, ya que la demanda de estudiantes en época de exámenes supera su capacidad actual, y muchos deben esperar largas filas para conseguir un lugar."\n\n1. "la biblioteca debe ampliar su horario"\n2. "la demanda de estudiantes en época de exámenes supera su capacidad actual"\n3. "muchos deben esperar largas filas para conseguir un lugar"\n\na. premisa\nb. conclusión',
    options: ['1b, 2a, 3a', '1a, 2b, 3a', '1a, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El fragmento 1 es la conclusión (b), sostenida por los fragmentos 2 y 3, que son ambos premisas (a) y ofrecen razones distintas para sostenerla.',
    common_error:
      'Suponer que cada fragmento numerado debe corresponder a una etiqueta distinta, sin notar que un argumento puede tener más de una premisa sosteniendo la misma conclusión.',
    source_reference: 'guía oficial, página 15, código 4.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tda-001',
    topic_id: 'hu-4-2-3-argumentos-deductivos-inductivos-y-analogicos',
    prompt:
      '"Todos los anfibios respiran a través de la piel en alguna etapa de su vida. Las salamandras son anfibios. Por lo tanto, las salamandras respiran a través de la piel en alguna etapa de su vida." ¿Qué tipo de argumento es este?',
    options: [
      'inductivo, porque generaliza a partir de casos observados',
      'deductivo, porque la conclusión se sigue con necesidad de las premisas si estas son verdaderas',
      'analógico, porque compara dos casos particulares similares'
    ],
    correct_option_index: 1,
    explanation:
      'Parte de una premisa general aplicada a un caso particular; si las premisas son verdaderas, la conclusión se sigue con necesidad: es un argumento deductivo.',
    common_error:
      'Etiquetar como inductivo cualquier argumento que mencione una categoría (como "anfibios"), sin verificar si la conclusión se sigue con necesidad de las premisas o si solo generaliza a partir de casos.',
    source_reference: 'guía oficial, página 15, código 4.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-tda-002',
    topic_id: 'hu-4-2-3-argumentos-deductivos-inductivos-y-analogicos',
    prompt:
      'Un argumento que concluye una regla general a partir de la observación repetida de varios casos particulares, sin que la conclusión sea necesariamente cierta, se llama argumento _______.',
    options: ['deductivo', 'analógico', 'inductivo'],
    correct_option_index: 2,
    explanation:
      'El argumento inductivo generaliza una regla a partir de casos particulares observados, y su conclusión es solo probable, no necesaria.',
    common_error:
      'Confundir la generalización a partir de casos observados con el argumento deductivo, sin notar que aquí la conclusión no se sigue con necesidad de las premisas.',
    source_reference: 'guía oficial, página 15, código 4.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tda-003',
    topic_id: 'hu-4-2-3-argumentos-deductivos-inductivos-y-analogicos',
    prompt:
      '"El restaurante nuevo del centro tiene un ambiente muy parecido al de aquel que visitamos el año pasado en otra ciudad, donde la comida fue excelente; por eso, es probable que la comida en este también sea buena." ¿Qué tipo de argumento es este?',
    options: [
      'analógico, porque transfiere una conclusión de un caso particular a otro caso particular similar',
      'inductivo, porque generaliza una regla a partir de muchos casos observados',
      'deductivo, porque parte de una regla general aplicada a un caso concreto'
    ],
    correct_option_index: 0,
    explanation:
      'Compara dos casos particulares (este restaurante y aquel otro) por su similitud, sin generalizar una regla a partir de muchas observaciones ni partir de una regla general: es analógico.',
    common_error:
      'Confundir este argumento con uno inductivo solo porque ambos parten de casos particulares, sin notar que aquí se comparan dos casos específicos entre sí, en lugar de generalizar una regla a partir de muchas observaciones.',
    source_reference: 'guía oficial, página 15, código 4.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tda-004',
    topic_id: 'hu-4-2-3-argumentos-deductivos-inductivos-y-analogicos',
    prompt:
      '"Cada una de las quince veces que se ha probado este puente peatonal con cargas máximas, ha resistido sin daños. Por lo tanto, es razonable esperar que resista la carga máxima la próxima vez que se pruebe." ¿Qué tipo de argumento es este, y por qué su conclusión no es absolutamente segura?',
    options: [
      'deductivo, porque parte de una regla general sobre puentes',
      'inductivo, porque generaliza a partir de casos observados, y una nueva prueba podría comportarse distinto',
      'analógico, porque compara este puente con otro puente similar'
    ],
    correct_option_index: 1,
    explanation:
      'Generaliza un patrón a partir de casos repetidos observados hacia una conclusión probable, no segura, sobre un caso futuro: es inductivo, y por eso su conclusión sigue siendo solo probable.',
    common_error:
      'Asumir que un argumento con muchos casos repetidos es automáticamente deductivo por sonar "seguro", sin notar que la conclusión sigue siendo solo probable, no necesaria.',
    source_reference: 'guía oficial, página 15, código 4.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tda-005',
    topic_id: 'hu-4-2-3-argumentos-deductivos-inductivos-y-analogicos',
    prompt:
      'Relaciona cada argumento con su tipo.\n\n1. "Todo número divisible entre cuatro es divisible entre dos; doce es divisible entre cuatro; por lo tanto, doce es divisible entre dos."\n2. "En las últimas diez temporadas, este equipo ha llegado a la final; por lo tanto, es probable que llegue a la final esta temporada también."\n3. "El motor de esta lancha funciona de forma muy parecida al de aquella otra que revisamos, y aquel motor fallaba por falta de mantenimiento; por eso, es razonable pensar que este motor podría fallar por la misma causa."\n\na. inductivo\nb. deductivo\nc. analógico',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'El argumento 1 se sigue con necesidad de una regla matemática general: deductivo (b). El 2 generaliza a partir de temporadas repetidas: inductivo (a). El 3 compara dos motores particulares por su similitud: analógico (c).',
    common_error:
      'Confundir el argumento matemático (1) con uno inductivo solo por incluir números, sin notar que su conclusión se sigue con necesidad de las premisas.',
    source_reference: 'guía oficial, página 15, código 4.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dar-001',
    topic_id: 'hu-4-2-4-tipos-de-discurso-argumentativo',
    prompt:
      'Un grupo de vecinos se reúne para decidir en conjunto, sin posturas fijas de antemano, qué proyecto realizar con el presupuesto participativo del barrio, sopesando juntos las ventajas y desventajas de cada opción. ¿Qué tipo de discurso argumentativo ejemplifica esta reunión?',
    options: [
      'debate, porque varias personas exponen sus posturas frente a otras',
      'mayéutica, porque se guía a los participantes mediante preguntas',
      'deliberación, porque el grupo busca llegar a una decisión conjunta sopesando opciones, sin posturas fijas que defender'
    ],
    correct_option_index: 2,
    explanation:
      'El grupo sopesa opciones en conjunto para llegar a una decisión compartida, sin posturas opuestas que defender frente a otros: es deliberación.',
    common_error:
      'Confundir esta reunión con un debate solo porque hay varias personas discutiendo, sin notar que aquí no hay posturas opuestas que defender, sino una decisión conjunta que tomar.',
    source_reference: 'guía oficial, página 15, código 4.2.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-dar-002',
    topic_id: 'hu-4-2-4-tipos-de-discurso-argumentativo',
    prompt:
      'Un texto escrito en el que una sola persona desarrolla y argumenta de forma sostenida su propia reflexión personal sobre un tema corresponde a un _______.',
    options: ['debate', 'ensayo', 'deliberación'],
    correct_option_index: 1,
    explanation:
      'El ensayo es el texto escrito en el que una sola persona desarrolla, de forma sostenida, su propia reflexión personal sobre un tema.',
    common_error:
      'Confundir el ensayo con el debate o la deliberación, que requieren más de una persona interviniendo, cuando el ensayo es obra de un solo autor.',
    source_reference: 'guía oficial, página 15, código 4.2.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dar-003',
    topic_id: 'hu-4-2-4-tipos-de-discurso-argumentativo',
    prompt:
      'Una persona no afirma directamente que la postura de otra es contradictoria; en su lugar, le hace una serie de preguntas que la llevan, paso a paso, a notar por sí misma esa contradicción. ¿Qué tipo de discurso argumentativo es este?',
    options: [
      'mayéutica, porque conduce a la otra persona a una conclusión mediante preguntas, sin afirmarla directamente',
      'debate, porque hay una confrontación de posturas',
      'ensayo, porque desarrolla una reflexión personal por escrito'
    ],
    correct_option_index: 0,
    explanation:
      'Guiar a alguien hacia una conclusión mediante una secuencia de preguntas, sin afirmar la tesis directamente, es mayéutica.',
    common_error:
      'Confundir esta guía mediante preguntas con un debate solo porque hay dos personas interactuando, sin notar que aquí no hay una confrontación de posturas sino preguntas que conducen a una conclusión.',
    source_reference: 'guía oficial, página 15, código 4.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dar-004',
    topic_id: 'hu-4-2-4-tipos-de-discurso-argumentativo',
    prompt:
      'Dos candidatos exponen públicamente posturas opuestas sobre un mismo tema, cada uno con tiempo para responder a los argumentos del otro frente a una audiencia que los evaluará. ¿Qué tipo de discurso argumentativo es este?',
    options: [
      'deliberación, porque dos personas participan en la discusión',
      'mayéutica, porque cada candidato responde con preguntas',
      'debate, porque dos posturas opuestas se confrontan públicamente buscando persuadir a una audiencia'
    ],
    correct_option_index: 2,
    explanation:
      'Dos posturas opuestas se confrontan públicamente, cada una buscando persuadir a una audiencia que las evalúa: es debate.',
    common_error:
      'Confundir el debate con la deliberación solo porque ambos involucran a más de una persona discutiendo, sin notar que el debate confronta posturas opuestas para persuadir, mientras que la deliberación busca decidir en conjunto.',
    source_reference: 'guía oficial, página 15, código 4.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dar-005',
    topic_id: 'hu-4-2-4-tipos-de-discurso-argumentativo',
    prompt:
      'Relaciona cada situación con el tipo de discurso argumentativo que ejemplifica.\n\n1. Un autor redacta, en solitario, un texto extenso donde argumenta su postura personal sobre la libertad de expresión\n2. Un comité discute en conjunto varias opciones de horario escolar antes de decidir una en común\n3. Dos oradores exponen posturas opuestas sobre un tema frente a un público que los escucha\n\na. debate\nb. ensayo\nc. deliberación',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'La situación 1 es un texto sostenido de un solo autor: ensayo (b). La 2 es un grupo que sopesa opciones para decidir en conjunto: deliberación (c). La 3 es una confrontación pública de posturas opuestas: debate (a).',
    common_error:
      'Confundir la deliberación (2) con un debate solo porque involucra discusión entre varias personas, sin notar que aquí el objetivo es decidir en conjunto, no persuadir a un público con posturas opuestas.',
    source_reference: 'guía oficial, página 15, código 4.2.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pte-001',
    topic_id: 'hu-4-3-1-postulados-de-las-teorias-eticas',
    prompt:
      'Alguien enfrenta una noticia que no puede cambiar y razona que su deber es aceptarla con calma y concentrar su energía únicamente en lo que sí está en su control. ¿Qué teoría ética ejemplifica este razonamiento?',
    options: ['hedonismo', 'utilitarismo', 'estoicismo'],
    correct_option_index: 2,
    explanation:
      'Aceptar con serenidad lo que no depende de uno y actuar solo sobre lo que sí depende es el postulado central del estoicismo.',
    common_error:
      'Confundir la serenidad estoica con la búsqueda de placer propia del hedonismo, cuando el estoicismo no busca placer sino vivir conforme a la razón.',
    source_reference: 'guía oficial, página 15, código 4.3.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pte-002',
    topic_id: 'hu-4-3-1-postulados-de-las-teorias-eticas',
    prompt:
      'El postulado que define el bien supremo como el placer propio y la ausencia de dolor de quien actúa corresponde al _______.',
    options: ['utilitarismo', 'hedonismo', 'estoicismo'],
    correct_option_index: 1,
    explanation:
      'El hedonismo postula que el bien supremo es el placer y la ausencia de dolor de la propia persona que actúa.',
    common_error:
      'Confundir hedonismo con utilitarismo porque ambos mencionan el bienestar, sin notar que el hedonismo mide el placer de quien actúa, no el de todos los afectados.',
    source_reference: 'guía oficial, página 15, código 4.3.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pte-003',
    topic_id: 'hu-4-3-1-postulados-de-las-teorias-eticas',
    prompt:
      'Un líder comunitario decide usar un fondo limitado en la opción que produce el mayor beneficio sumado entre todas las familias afectadas, aunque a él personalmente no le convenga tanto como otra alternativa. ¿Qué teoría ética ejemplifica esta decisión?',
    options: [
      'hedonismo, porque busca el mayor bienestar posible',
      'estoicismo, porque acepta con calma no beneficiarse personalmente',
      'utilitarismo, porque maximiza el bienestar sumado de todos los afectados, no el propio'
    ],
    correct_option_index: 2,
    explanation:
      'El criterio es el bienestar sumado de todas las familias afectadas, no el placer o la conveniencia personal de quien decide: es utilitarismo.',
    common_error:
      'Etiquetar como hedonismo cualquier decisión que busque "bienestar", sin distinguir si el bienestar medido es el propio o el de todos los afectados.',
    source_reference: 'guía oficial, página 15, código 4.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pte-004',
    topic_id: 'hu-4-3-1-postulados-de-las-teorias-eticas',
    prompt:
      'Una persona dedica su tiempo libre a una causa social sintiendo una gran satisfacción personal al hacerlo, y afirma que actúa por hedonismo. ¿Por qué esta clasificación es correcta aunque su acción también beneficie a otras personas?',
    options: [
      'porque clasificar una teoría ética depende del criterio que justifica la decisión; si el criterio es la propia satisfacción, sigue siendo hedonismo aunque otros resulten beneficiados',
      'porque el hedonismo exige que la acción no beneficie a nadie más que a quien la realiza',
      'porque toda acción que beneficia a otras personas es automáticamente utilitarismo'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que define la teoría ética es el criterio que justifica la decisión, no si terceros resultan beneficiados; si el criterio sigue siendo la propia satisfacción, la acción es hedonismo.',
    common_error:
      'Suponer que basta con que una acción beneficie a otras personas para que deje de ser hedonismo y se convierta en utilitarismo.',
    source_reference: 'guía oficial, página 15, código 4.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pte-005',
    topic_id: 'hu-4-3-1-postulados-de-las-teorias-eticas',
    prompt:
      'Relaciona cada postura con la teoría ética que ejemplifica.\n\n1. Una persona actúa buscando el mayor bienestar posible para el mayor número de personas afectadas por su decisión\n2. Una persona actúa buscando su propio placer y evitando su propio dolor\n3. Una persona actúa conforme a la razón, aceptando con serenidad lo que no controla\n\na. estoicismo\nb. hedonismo\nc. utilitarismo',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'Buscar el mayor bienestar sumado entre todos los afectados es utilitarismo (c); buscar el propio placer y evitar el propio dolor es hedonismo (b); actuar conforme a la razón aceptando lo que no se controla es estoicismo (a).',
    common_error:
      'Intercambiar utilitarismo y hedonismo por mencionar ambos el bienestar, sin distinguir si el criterio es el de todos los afectados o solo el propio.',
    source_reference: 'guía oficial, página 15, código 4.3.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-vpc-001',
    topic_id: 'hu-4-3-2-valores-y-su-definicion',
    prompt:
      'Un estudiante decide, sin que nadie se lo imponga, qué carrera universitaria estudiar según su propio criterio. ¿Qué valor ejemplifica principalmente esta situación?',
    options: ['respeto', 'libertad', 'solidaridad'],
    correct_option_index: 1,
    explanation:
      'Decidir por uno mismo, sin depender de una autoridad externa que imponga la decisión, es el foco central del valor de la libertad.',
    common_error:
      'Confundir una decisión autónoma con respeto, cuando el respeto trata de aceptar a otras personas, no de la capacidad de decidir por uno mismo.',
    source_reference: 'guía oficial, página 15, código 4.3.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-vpc-002',
    topic_id: 'hu-4-3-2-valores-y-su-definicion',
    prompt:
      'La disposición a actuar tomando en cuenta el interés de un grupo y de las personas afectadas por una decisión, aunque no se decida en solitario, corresponde al valor de la _______.',
    options: ['justicia', 'solidaridad', 'libertad'],
    correct_option_index: 1,
    explanation:
      'La solidaridad es la disposición a actuar considerando el interés de un grupo y de quienes resultan afectados por esa acción.',
    common_error:
      'Confundir solidaridad con justicia, cuando la justicia consiste en aplicar un mismo criterio a casos semejantes, no en actuar a favor del interés de un grupo.',
    source_reference: 'guía oficial, página 15, código 4.3.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-vpc-003',
    topic_id: 'hu-4-3-2-valores-y-su-definicion',
    prompt:
      'Un profesor aplica exactamente el mismo criterio de calificación a dos estudiantes que cometieron el mismo tipo de error en su examen, sin importar cuál le simpatice más. ¿Qué valor ejemplifica esta acción?',
    options: ['libertad', 'respeto', 'justicia'],
    correct_option_index: 2,
    explanation:
      'Aplicar un mismo criterio a casos semejantes, sin que decida la preferencia personal, es el foco central de la justicia.',
    common_error:
      'Confundir "tratar igual a dos personas" con respeto, cuando aquí lo que se ejemplifica es un criterio evaluativo aplicado por igual, no la aceptación de una forma distinta de pensar o vivir.',
    source_reference: 'guía oficial, página 15, código 4.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-vpc-004',
    topic_id: 'hu-4-3-2-valores-y-su-definicion',
    prompt:
      'Un grupo de compañeros organiza una colecta para ayudar a otro que perdió su material de trabajo, y por separado, otro compañero acepta sin objeciones que uno de ellos decida no participar por una razón personal distinta. ¿Por qué la primera situación ejemplifica solidaridad y la segunda, respeto, y no al revés?',
    options: [
      'porque la primera es una acción a favor del bienestar de alguien afectado, y la segunda es la aceptación de una decisión distinta a la propia, sin que exista una acción de grupo a favor de alguien',
      'porque solidaridad y respeto son el mismo valor aplicado a dos personas distintas',
      'porque la primera situación involucra a más personas que la segunda'
    ],
    correct_option_index: 0,
    explanation:
      'La solidaridad se distingue por ser una acción a favor del interés de alguien afectado; el respeto se distingue por aceptar una postura o decisión distinta a la propia, sin que medie una acción de grupo.',
    common_error:
      'Tratar solidaridad y respeto como intercambiables solo porque ambos involucran a otras personas, sin distinguir si hay una acción a favor de un afectado o solo aceptación de una diferencia.',
    source_reference: 'guía oficial, página 15, código 4.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-vpc-005',
    topic_id: 'hu-4-3-2-valores-y-su-definicion',
    prompt:
      'Relaciona cada valor con su definición correspondiente.\n\nValor\n1. Libertad\n2. Justicia\n3. Solidaridad\n4. Respeto\n\nDefinición\na. Capacidad de decidir y actuar por uno mismo, sin depender de una autoridad externa que imponga la decisión\nb. Disposición a comprender y aceptar a otras personas aunque piensen o vivan distinto, sin imponerles la propia perspectiva\nc. Capacidad de distinguir lo correcto de lo incorrecto aplicando un mismo criterio a cualquier persona en una situación semejante\nd. Disposición a actuar teniendo en cuenta el interés de un grupo y de las personas afectadas por esa acción',
    options: ['1a, 2c, 3d, 4b', '1b, 2a, 3c, 4d', '1c, 2b, 3a, 4d'],
    correct_option_index: 0,
    explanation:
      'La libertad se define como decidir por uno mismo sin autoridad externa (a); la justicia, como aplicar un mismo criterio a casos semejantes (c); la solidaridad, como actuar a favor del interés de un grupo afectado (d); el respeto, como aceptar a otros aunque piensen distinto (b).',
    common_error:
      'Intercambiar las definiciones de solidaridad y respeto (d y b) por mencionar ambas a otras personas, sin notar que una implica una acción a favor de un grupo y la otra, aceptar una diferencia.',
    source_reference: 'guía oficial, página 15, código 4.3.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tdn-001',
    topic_id: 'hu-4-3-3-tipos-de-normas',
    prompt:
      'Una persona evita comer cierto alimento porque su comunidad de fe lo considera impuro, y quebrantar esa restricción se viviría como una falta dentro de esa creencia. ¿Qué tipo de norma ejemplifica esta situación?',
    options: ['norma moral', 'norma jurídica', 'norma religiosa'],
    correct_option_index: 2,
    explanation:
      'La restricción proviene de una doctrina religiosa y su incumplimiento se sanciona dentro de esa comunidad de fe: es una norma religiosa.',
    common_error:
      'Confundir esta restricción con una norma moral solo por ser una decisión personal, sin notar que su origen es una doctrina religiosa compartida, no la conciencia individual.',
    source_reference: 'guía oficial, página 15, código 4.3.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-tdn-002',
    topic_id: 'hu-4-3-3-tipos-de-normas',
    prompt:
      'Una norma que proviene de la propia conciencia individual sobre lo correcto e incorrecto, y cuyo incumplimiento se sanciona con el remordimiento propio en lugar de una sanción externa formal, es una norma _______.',
    options: ['jurídica', 'social', 'moral'],
    correct_option_index: 2,
    explanation:
      'La norma moral proviene de la conciencia individual y su incumplimiento se sanciona con el remordimiento propio, no con una sanción externa formal.',
    common_error:
      'Confundir norma moral con norma social porque ninguna de las dos tiene una sanción formal, sin notar que la moral proviene de la conciencia individual y la social, de una convención de grupo.',
    source_reference: 'guía oficial, página 15, código 4.3.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tdn-003',
    topic_id: 'hu-4-3-3-tipos-de-normas',
    prompt:
      'En una ciudad no existe ninguna ley que obligue a ceder el asiento a una persona mayor en el transporte público, pero quien no lo hace recibe miradas de desaprobación de otros pasajeros; en cambio, exceder el límite de velocidad sí está prohibido por la ley de tránsito y conlleva una multa impuesta por la autoridad. ¿Qué tipo de norma ejemplifica exceder el límite de velocidad?',
    options: ['norma social', 'norma moral', 'norma jurídica'],
    correct_option_index: 2,
    explanation:
      'Exceder el límite de velocidad viola una ley estatal y se sanciona formalmente con una multa impuesta por una autoridad: es una norma jurídica.',
    common_error:
      'Confundir esta norma con una norma social solo porque romperla también provoca una reacción negativa, sin notar que aquí hay una ley estatal y una sanción formal de por medio.',
    source_reference: 'guía oficial, página 15, código 4.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tdn-004',
    topic_id: 'hu-4-3-3-tipos-de-normas',
    prompt:
      'Un vendedor decide no engañar a un cliente sobre el estado real de un producto, aunque ninguna ley se lo exigiría en ese caso y nadie más lo sabría. ¿Por qué esta decisión corresponde a una norma moral y no a una norma jurídica?',
    options: [
      'porque no existe una ley estatal detrás de esa decisión ni una sanción formal impuesta por una autoridad; la decisión depende solo de la propia conciencia del vendedor',
      'porque las normas morales siempre son más estrictas que las normas jurídicas',
      'porque cualquier decisión relacionada con una venta es automáticamente de naturaleza jurídica'
    ],
    correct_option_index: 0,
    explanation:
      'Sin una ley estatal ni una sanción formal impuesta por una autoridad de por medio, la decisión depende solo de la conciencia individual del vendedor: es una norma moral.',
    common_error:
      'Suponer que cualquier decisión relacionada con una transacción comercial debe ser de naturaleza jurídica, sin verificar si en verdad hay una ley y una sanción formal detrás.',
    source_reference: 'guía oficial, página 15, código 4.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-tdn-005',
    topic_id: 'hu-4-3-3-tipos-de-normas',
    prompt:
      'Relaciona cada situación con el tipo de norma que ejemplifica.\n\n1. Una persona no realiza cierta actividad en una fecha marcada por su fe como día de descanso obligatorio\n2. Una persona no denuncia un error propio ante nadie, pero siente remordimiento por no haberlo corregido\n3. Un conductor recibe una multa impuesta por una autoridad de tránsito por exceder el límite de velocidad establecido en la ley\n4. En un grupo de amigos, se espera que quien llega tarde a una reunión avise con anticipación, aunque nadie lo exija formalmente\n\na. norma social\nb. norma religiosa\nc. norma jurídica\nd. norma moral',
    options: ['1b, 2d, 3c, 4a', '1a, 2b, 3d, 4c', '1c, 2a, 3b, 4d'],
    correct_option_index: 0,
    explanation:
      'La primera situación proviene de una doctrina de fe: norma religiosa (b). La segunda se sanciona con remordimiento propio: norma moral (d). La tercera tiene una ley y una sanción formal: norma jurídica (c). La cuarta es una convención de grupo sin sanción formal: norma social (a).',
    common_error:
      'Confundir la norma moral (remordimiento propio) con la norma social (desaprobación de un grupo), sin distinguir si la sanción proviene de la propia conciencia o de un grupo externo.',
    source_reference: 'guía oficial, página 15, código 4.3.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ayh-001',
    topic_id: 'hu-4-4-1-autonomia-y-heteronomia',
    prompt:
      'Un joven decide, tras analizar por sí mismo los pros y contras, seguir una dieta más saludable, sin que nadie se lo exija ni lo presione. ¿Esta decisión ejemplifica autonomía o heteronomía?',
    options: [
      'heteronomía, porque coincide con lo que la mayoría considera saludable',
      'autonomía, porque decide según su propio juicio, sin imposición externa',
      'heteronomía, porque toda decisión sobre la salud responde a una norma externa'
    ],
    correct_option_index: 1,
    explanation:
      'Decide por su propio análisis, sin que una autoridad o presión externa se lo imponga: es autonomía. Que su decisión coincida con lo que otros consideran saludable no la vuelve heterónoma.',
    common_error:
      'Confundir coincidir con una expectativa social, como comer saludable, con heteronomía, sin verificar si la persona llegó a esa conducta por su propio juicio o por imposición externa.',
    source_reference: 'guía oficial, página 15, código 4.4.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-ayh-002',
    topic_id: 'hu-4-4-1-autonomia-y-heteronomia',
    prompt:
      'Una persona sigue una regla de conducta únicamente porque una autoridad se la impone, sin haberla examinado ni adoptado por su propio juicio; esta situación se llama _______.',
    options: ['autonomía', 'heteronomía', 'doxa'],
    correct_option_index: 1,
    explanation:
      'Seguir una regla solo porque una autoridad externa la impone, sin haberla examinado ni adoptado por el propio juicio, es heteronomía.',
    common_error:
      'Confundir heteronomía con doxa, un concepto de otra lección referido a creencias no fundamentadas, no al origen externo de una norma de conducta.',
    source_reference: 'guía oficial, página 15, código 4.4.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ayh-003',
    topic_id: 'hu-4-4-1-autonomia-y-heteronomia',
    prompt:
      'Un ciclista respeta el límite de velocidad en una zona escolar porque, tras pensarlo, concluye que reduce el riesgo de un accidente, incluso en un tramo donde no hay ningún señalamiento que lo obligue. ¿Esta conducta ejemplifica autonomía o heteronomía?',
    options: [
      'autonomía, porque adopta la conducta por su propio juicio, sin una imposición externa presente',
      'heteronomía, porque respetar límites de velocidad siempre responde a una ley externa',
      'heteronomía, porque el ciclista actúa igual que lo que una norma de tránsito exigiría'
    ],
    correct_option_index: 0,
    explanation:
      'Aunque su conducta coincide con lo que una norma de tránsito pediría, aquí no hay una imposición externa presente: adopta la conducta porque la razonó por sí mismo. Es autonomía.',
    common_error:
      'Asumir que coincidir con lo que una ley exigiría en otro contexto convierte la conducta en heterónoma, sin verificar si en este caso responde a una imposición externa real o a un juicio propio.',
    source_reference: 'guía oficial, página 15, código 4.4.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ayh-004',
    topic_id: 'hu-4-4-1-autonomia-y-heteronomia',
    prompt:
      'Una persona obedece una instrucción de su jefe sin estar de acuerdo con ella, únicamente porque teme perder su empleo si se niega. Después, esa misma persona decide, ya en su vida personal, adoptar una rutina de ejercicio porque concluyó por sí misma que le conviene. ¿Por qué la primera situación es heteronomía y la segunda, autonomía?',
    options: [
      'porque en la primera actúa por temor a una consecuencia impuesta por otro, sin adoptar la instrucción por su propio juicio, mientras que en la segunda decide por su propio análisis',
      'porque la primera ocurre en el trabajo y la segunda en la vida personal, y ese contexto define si es autonomía o heteronomía',
      'porque la segunda decisión beneficia más a la persona que la primera'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que distingue autonomía de heteronomía es si la conducta proviene del propio juicio de la persona o de una imposición externa que simplemente se acata por temor a una consecuencia, no el contexto ni qué tan beneficiosa resulte la decisión.',
    common_error:
      'Suponer que el contexto, laboral o personal, determina si una conducta es autónoma o heterónoma, en lugar de examinar si el criterio proviene del propio juicio o de una imposición externa.',
    source_reference: 'guía oficial, página 15, código 4.4.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ayh-005',
    topic_id: 'hu-4-4-1-autonomia-y-heteronomia',
    prompt:
      'Relaciona cada situación con lo que ejemplifica.\n\n1. Una persona decide, tras reflexionarlo por sí misma, reciclar en casa aunque nadie se lo exige\n2. Un estudiante entrega una tarea a tiempo solo porque teme una sanción, sin haber reflexionado si le parece razonable\n3. Una persona apoya una causa después de examinar por sí misma sus razones, aunque esa causa también la promueva una autoridad\n\na. heteronomía\nb. autonomía, pese a coincidir con lo que una autoridad promueve\nc. autonomía',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'Decidir reciclar por reflexión propia, sin imposición externa, es autonomía (c). Entregar una tarea solo por temor a una sanción, sin juicio propio, es heteronomía (a). Apoyar una causa por examen propio, aunque una autoridad también la promueva, sigue siendo autonomía (b), porque importa el origen del criterio, no si coincide con lo que otros promueven.',
    common_error:
      'Suponer que apoyar una causa que también promueve una autoridad la vuelve heterónoma automáticamente, sin verificar si la persona llegó a esa postura por su propio juicio.',
    source_reference: 'guía oficial, página 15, código 4.4.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dp-001',
    topic_id: 'hu-4-4-2-discurso-politico',
    prompt:
      'Un funcionario electo se dirige a los habitantes de su localidad explicando por qué su administración impulsará una reforma al transporte público y los invita a respaldarla en la próxima consulta ciudadana. ¿Este discurso ejemplifica el discurso político?',
    options: [
      'no, porque solo es político si lo pronuncia un candidato en campaña, no un funcionario ya electo',
      'no, porque explicar una reforma es informativo, no persuasivo',
      'sí, porque trata un asunto de gobierno y busca persuadir a la ciudadanía hacia una acción colectiva'
    ],
    correct_option_index: 2,
    explanation:
      'El discurso trata un asunto de gobierno, una reforma al transporte público, y busca persuadir a la ciudadanía para que la respalde: es discurso político, sin importar si quien lo pronuncia está en campaña o ya ocupa un cargo.',
    common_error:
      'Creer que el discurso político depende de si quien habla está en campaña, en lugar de examinar si su contenido trata un asunto de gobierno o vida colectiva y busca persuadir a la ciudadanía.',
    source_reference: 'guía oficial, página 15, código 4.4.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-dp-002',
    topic_id: 'hu-4-4-2-discurso-politico',
    prompt:
      'Un discurso que se dirige a la ciudadanía sobre un asunto de gobierno o de vida colectiva, y que busca persuadirla hacia una postura o una acción común, corresponde al discurso _______.',
    options: ['político', 'mayéutico', 'publicitario'],
    correct_option_index: 0,
    explanation:
      'El discurso político se distingue por dirigirse a la ciudadanía sobre asuntos de gobierno o de vida colectiva, buscando persuadirla hacia una postura o acción común.',
    common_error:
      'Confundir discurso político con discurso publicitario porque ambos son persuasivos, sin notar que el político trata asuntos de gobierno o vida colectiva, y el publicitario, el consumo de un producto o servicio.',
    source_reference: 'guía oficial, página 15, código 4.4.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dp-003',
    topic_id: 'hu-4-4-2-discurso-politico',
    prompt:
      'Una marca de refrescos presenta un anuncio donde invita a la población a consumir su producto durante las fiestas patrias, apelando a símbolos nacionales. ¿Este discurso ejemplifica el discurso político?',
    options: [
      'sí, porque usa símbolos nacionales para dirigirse a la población',
      'no, porque busca persuadir al consumo de un producto, no tratar un asunto de gobierno o de vida colectiva',
      'sí, porque cualquier discurso dirigido a toda la población es político'
    ],
    correct_option_index: 1,
    explanation:
      'Aunque apela a símbolos nacionales y se dirige a la población, su propósito es persuadir al consumo de un producto, no tratar un asunto de gobierno o de vida colectiva: no es discurso político.',
    common_error:
      'Clasificar como político cualquier discurso que use símbolos o temas nacionales, sin verificar si en realidad trata un asunto de gobierno o vida colectiva y busca una acción colectiva relacionada.',
    source_reference: 'guía oficial, página 15, código 4.4.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dp-004',
    topic_id: 'hu-4-4-2-discurso-politico',
    prompt:
      'Un servidor público pronuncia, en un evento oficial, un discurso agradeciendo a su equipo de trabajo por su esfuerzo durante el año, sin mencionar ninguna política pública ni pedir ninguna acción a la ciudadanía. ¿Por qué este discurso no es un discurso político, aunque lo pronuncie una autoridad en un acto oficial?',
    options: [
      'porque no trata un asunto de gobierno o de vida colectiva ni busca persuadir a la ciudadanía hacia una postura o acción, aunque lo pronuncie una autoridad',
      'porque los discursos de agradecimiento nunca pueden ser políticos por su tono',
      'porque solo es político si se pronuncia frente a un público numeroso'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que define al discurso político es su contenido y propósito, tratar un asunto de gobierno o vida colectiva y persuadir a la ciudadanía, no quién lo pronuncia ni el contexto formal en que ocurre; aquí faltan ambos elementos.',
    common_error:
      'Suponer que cualquier discurso de una autoridad en un acto oficial es automáticamente político, sin revisar si su contenido trata un asunto de gobierno o vida colectiva.',
    source_reference: 'guía oficial, página 15, código 4.4.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-dp-005',
    topic_id: 'hu-4-4-2-discurso-politico',
    prompt:
      'Relaciona cada situación con lo que ejemplifica.\n\n1. Una candidata explica su propuesta para reducir la contaminación del río local y pide el respaldo de los vecinos en la votación\n2. Un chef explica en un evento por qué cierta técnica mejora un platillo y anima a los asistentes a probarla\n3. Un dirigente sindical convoca a los trabajadores a participar en una asamblea sobre una nueva ley laboral que los afecta\n\na. no es discurso político, porque no trata un asunto de gobierno o vida colectiva\nb. discurso político\nc. discurso político, aunque quien lo pronuncia no ocupe un cargo público',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'La propuesta de la candidata trata un asunto de gobierno y busca el respaldo ciudadano: discurso político (b). La explicación del chef no trata un asunto de gobierno ni de vida colectiva: no es discurso político (a). La convocatoria del dirigente sindical trata una ley que afecta a la vida colectiva y busca persuadir a la participación, aunque quien habla no ocupe un cargo público: también es discurso político (c).',
    common_error:
      'Suponer que el discurso político solo puede provenir de alguien que ocupa un cargo de gobierno, sin notar que lo que importa es si su contenido trata un asunto de gobierno o de vida colectiva.',
    source_reference: 'guía oficial, página 15, código 4.4.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pb-001',
    topic_id: 'hu-4-5-1-principios-de-bioetica',
    prompt:
      'Un grupo de médicos organiza brigadas gratuitas de revisión visual en comunidades rurales sin acceso a oftalmólogos, buscando mejorar activamente la salud visual de esa población. ¿Qué principio de la bioética ejemplifica esta acción?',
    options: [
      'no maleficencia, porque evita causar un daño a la población',
      'beneficencia, porque aporta activamente un beneficio a una población con una necesidad de salud',
      'justicia, porque reparte un recurso escaso entre distintos grupos según su necesidad'
    ],
    correct_option_index: 1,
    explanation:
      'Las brigadas no se limitan a evitar un daño ni reparten un recurso escaso entre grupos: aportan activamente un beneficio de salud a una población que lo necesita. Es beneficencia.',
    common_error:
      'Confundir cualquier acción positiva hacia una comunidad con justicia, sin verificar si en realidad se trata de repartir un recurso entre grupos o de aportar activamente un beneficio de salud.',
    source_reference: 'guía oficial, página 15, código 4.5.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pb-002',
    topic_id: 'hu-4-5-1-principios-de-bioetica',
    prompt:
      'Distribuir un recurso escaso, como el acceso a un tratamiento, entre distintos pacientes según su necesidad, siguiendo un criterio equitativo, corresponde al principio de _______.',
    options: ['autonomía', 'justicia', 'beneficencia'],
    correct_option_index: 1,
    explanation:
      'Repartir un recurso limitado entre pacientes de forma equitativa según su necesidad es el principio de justicia en bioética.',
    common_error:
      'Confundir justicia con beneficencia porque ambas buscan un bien para el paciente, sin notar que justicia se refiere específicamente a cómo se reparte un recurso entre varias personas.',
    source_reference: 'guía oficial, página 15, código 4.5.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pb-003',
    topic_id: 'hu-4-5-1-principios-de-bioetica',
    prompt:
      'Un cirujano decide cancelar una operación electiva porque, tras revisar los estudios del paciente, concluye que el riesgo de complicaciones supera el beneficio esperado en ese caso particular. ¿Qué principio de la bioética ejemplifica esta decisión?',
    options: [
      'beneficencia, porque cancela la operación para proteger al paciente',
      'no maleficencia, porque se abstiene de una acción que causaría más daño que beneficio',
      'autonomía, porque el paciente es quien decide sobre la operación'
    ],
    correct_option_index: 1,
    explanation:
      'El cirujano no está aportando activamente un beneficio ni respetando una decisión del paciente: se abstiene de una acción que juzga más dañina que benéfica. Es no maleficencia.',
    common_error:
      'Llamar beneficencia a cualquier decisión médica prudente, sin distinguir entre aportar activamente un beneficio y abstenerse de una acción que causaría un daño mayor.',
    source_reference: 'guía oficial, página 15, código 4.5.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pb-004',
    topic_id: 'hu-4-5-1-principios-de-bioetica',
    prompt:
      'Un hospital dona presupuesto a una campaña de vacunación gratuita para comunidades desatendidas, y ese mismo hospital, en otro caso, decide no aplicar un procedimiento experimental porque sus riesgos conocidos superan su beneficio. ¿Por qué la primera acción es beneficencia y la segunda, no maleficencia?',
    options: [
      'porque en la primera aporta activamente un beneficio de salud a una población, y en la segunda se abstiene de una acción que causaría más daño que beneficio',
      'porque la primera ocurre fuera del hospital y la segunda dentro, y ese lugar define el principio aplicable',
      'porque la segunda decisión beneficia más al hospital que la primera'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que distingue beneficencia de no maleficencia es si la acción aporta activamente un bien (beneficencia) o si se abstiene de una acción que causaría un daño mayor que su beneficio (no maleficencia), no el lugar donde ocurre ni la conveniencia para quien decide.',
    common_error:
      'Suponer que el lugar o el contexto de la decisión determina el principio bioético aplicable, en lugar de examinar si la acción aporta activamente un bien o evita un daño.',
    source_reference: 'guía oficial, página 15, código 4.5.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pb-005',
    topic_id: 'hu-4-5-1-principios-de-bioetica',
    prompt:
      'Relaciona cada situación con el principio de bioética que ejemplifica.\n\n1. Un médico informa a un paciente adulto sobre los riesgos y beneficios de dos tratamientos y lo deja decidir libremente cuál seguir\n2. Una clínica reparte un número limitado de vacunas entre las comunidades con mayor riesgo de contagio, según su necesidad\n3. Un laboratorio decide no lanzar un medicamento al mercado porque las pruebas muestran que sus efectos secundarios superarían su beneficio\n\na. justicia\nb. autonomía\nc. no maleficencia',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Dejar que el paciente decida con información suficiente es autonomía (b). Repartir un recurso limitado según la necesidad de cada comunidad es justicia (a). Abstenerse de lanzar un medicamento cuyo riesgo supera su beneficio es no maleficencia (c).',
    common_error:
      'Confundir la decisión de no lanzar un medicamento riesgoso con beneficencia, sin notar que se trata de evitar un daño, no de aportar activamente un beneficio.',
    source_reference: 'guía oficial, página 15, código 4.5.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-es-001',
    topic_id: 'hu-4-5-2-principios-eticos-aplicados-a-la-sustentabilidad',
    prompt:
      'Una comunidad agrícola decide rotar sus cultivos y dejar descansar parte de sus tierras cada temporada, después de calcular que así evita agotar la fertilidad del suelo en los próximos veinte años, aunque eso reduce su cosecha inmediata. ¿Esta decisión se analiza desde una postura ética de sustentabilidad?',
    options: [
      'no, porque reduce la cosecha inmediata y afecta su ingreso',
      'no, porque rotar cultivos es solo una técnica agrícola, sin relación con una postura ética',
      'sí, porque antepone la disponibilidad futura del suelo al beneficio inmediato'
    ],
    correct_option_index: 2,
    explanation:
      'La comunidad sacrifica una ganancia inmediata al considerar el efecto duradero de su decisión sobre la fertilidad del suelo: es una postura ética de sustentabilidad.',
    common_error:
      'Descartar una técnica agrícola como ajena a la ética solo por ser técnica, sin evaluar si la decisión considera el efecto duradero sobre el recurso frente al beneficio inmediato.',
    source_reference: 'guía oficial, página 15, código 4.5.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-es-002',
    topic_id: 'hu-4-5-2-principios-eticos-aplicados-a-la-sustentabilidad',
    prompt:
      'Una decisión que antepone el efecto duradero de una acción sobre el entorno y sobre quienes dependerán de él en el futuro a la ganancia inmediata corresponde a una postura ética de _______.',
    options: ['rentabilidad', 'sustentabilidad', 'eficiencia'],
    correct_option_index: 1,
    explanation:
      'Anteponer el efecto duradero sobre el entorno y sobre quienes dependerán de él a la ganancia inmediata es, precisamente, una postura ética de sustentabilidad.',
    common_error:
      'Confundir sustentabilidad con eficiencia porque ambas buscan un buen uso de los recursos, sin notar que sustentabilidad se centra en el efecto duradero sobre el entorno y sobre generaciones futuras.',
    source_reference: 'guía oficial, página 15, código 4.5.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-es-003',
    topic_id: 'hu-4-5-2-principios-eticos-aplicados-a-la-sustentabilidad',
    prompt:
      'Una fábrica de textiles decide instalar un sistema de tratamiento de aguas residuales, a pesar de que aumenta sus costos de producción, después de determinar que sin ese sistema contaminaría el río del que depende una comunidad cercana. ¿Esta decisión se analiza desde una postura ética de sustentabilidad?',
    options: [
      'no, porque aumentar los costos de producción siempre es una mala decisión empresarial',
      'sí, porque antepone la protección duradera del río y de la comunidad a la reducción de costos',
      'no, porque instalar tecnología de tratamiento es solo una obligación legal, no una postura ética'
    ],
    correct_option_index: 1,
    explanation:
      'La fábrica acepta un costo mayor porque considera el efecto duradero de sus residuos sobre el río y sobre la comunidad que depende de él: es una postura ética de sustentabilidad.',
    common_error:
      'Juzgar cualquier aumento de costos como una mala decisión empresarial, sin considerar si esa decisión protege un efecto duradero sobre el entorno y sobre quienes dependen de él.',
    source_reference: 'guía oficial, página 15, código 4.5.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-es-004',
    topic_id: 'hu-4-5-2-principios-eticos-aplicados-a-la-sustentabilidad',
    prompt:
      'Una empresa invierte en reforestar terrenos degradados calculando su beneficio ambiental dentro de veinte años, mientras otra empresa tala todo un bosque para sembrar de inmediato porque calcula que así maximiza su ganancia este año, sin considerar el efecto sobre el suelo. ¿Por qué la primera decisión se analiza desde una postura ética de sustentabilidad y la segunda no?',
    options: [
      'porque la primera considera el efecto duradero sobre el entorno más allá de la ganancia inmediata, y la segunda prioriza la ganancia inmediata sin considerar ese efecto',
      'porque reforestar es legal y talar un bosque para sembrar siempre es ilegal',
      'porque la primera empresa es más grande y tiene más recursos disponibles'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que distingue a una postura ética de sustentabilidad es si la decisión considera el efecto duradero sobre el entorno frente a la ganancia inmediata, no la legalidad de la acción ni el tamaño de la empresa.',
    common_error:
      'Suponer que la legalidad de una práctica agrícola o forestal determina si la decisión es éticamente sustentable, en lugar de evaluar si considera el efecto duradero sobre el entorno.',
    source_reference: 'guía oficial, página 15, código 4.5.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-es-005',
    topic_id: 'hu-4-5-2-principios-eticos-aplicados-a-la-sustentabilidad',
    prompt:
      'Relaciona cada situación con lo que ejemplifica.\n\n1. Una cooperativa pesquera limita su captura anual por debajo del máximo permitido, considerando el efecto sobre la población de peces en los próximos años\n2. Una minera extrae el máximo permitido por la ley sin evaluar el efecto futuro sobre el acuífero, buscando solo maximizar la ganancia de este año\n3. Un ayuntamiento invierte en un sistema de reciclaje costoso a corto plazo, tras calcular que reducirá la saturación del relleno sanitario en las próximas décadas\n\na. sí, es una postura ética de sustentabilidad, porque antepone el efecto futuro sobre el recurso a la ganancia inmediata\nb. no es una postura ética de sustentabilidad, aunque cumpla con el límite legal, porque prioriza la ganancia inmediata sin considerar el efecto futuro\nc. sí, es una postura ética de sustentabilidad, porque antepone un costo inmediato a un beneficio ambiental duradero',
    options: ['1a, 2b, 3c', '1c, 2a, 3b', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'Limitar la captura considerando el efecto futuro sobre el recurso es una postura ética de sustentabilidad (a). Extraer el máximo legal sin considerar el efecto futuro sobre el acuífero, solo por ganancia inmediata, no lo es (b). Invertir en reciclaje aceptando un costo inmediato por un beneficio ambiental duradero también lo es (c).',
    common_error:
      'Suponer que cumplir con el límite legal máximo de extracción de un recurso basta para considerar una decisión éticamente sustentable, sin evaluar si considera el efecto futuro sobre ese recurso.',
    source_reference: 'guía oficial, página 15, código 4.5.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pg-001',
    topic_id: 'hu-4-5-3-perspectiva-de-genero',
    prompt:
      'Una revista publica un reportaje que atribuye el ascenso profesional de una diseñadora exclusivamente a su apariencia física, mientras describe el ascenso de un diseñador varón en el mismo puesto como resultado de su talento y esfuerzo. ¿Qué ejemplifica esta situación?',
    options: [
      'patriarcado, porque refleja un sistema completo de desigualdad institucional',
      'micromachismo, porque es una conducta cotidiana y sutil que resta valor al logro de la diseñadora por su género',
      'rol de género, porque describe una tarea esperada de cada sexo'
    ],
    correct_option_index: 1,
    explanation:
      'La situación no describe una estructura institucional completa ni una tarea asignada por sexo: es una conducta puntual y sutil que resta valor al logro profesional de una mujer solo por su género. Es un micromachismo.',
    common_error:
      'Llamar patriarcado a cualquier conducta machista puntual, sin distinguir entre una estructura social general y una conducta cotidiana y sutil que la reproduce a pequeña escala.',
    source_reference: 'guía oficial, página 15, código 4.5.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-pg-002',
    topic_id: 'hu-4-5-3-perspectiva-de-genero',
    prompt:
      'El sistema social en que la autoridad, el poder de decisión y los recursos se concentran principalmente en los hombres, y se sostiene como norma en las instituciones y en las costumbres, se llama _______.',
    options: ['micromachismo', 'patriarcado', 'rol de género'],
    correct_option_index: 1,
    explanation:
      'Un sistema social que concentra la autoridad y los recursos en los hombres, sostenido como norma institucional, es el patriarcado.',
    common_error:
      'Confundir patriarcado con micromachismo, sin notar que el patriarcado es la estructura social general y el micromachismo es una conducta cotidiana puntual que la reproduce.',
    source_reference: 'guía oficial, página 15, código 4.5.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pg-003',
    topic_id: 'hu-4-5-3-perspectiva-de-genero',
    prompt:
      'En una familia se espera que el hijo varón trabaje fuera de casa para sostener económicamente al hogar, mientras se espera que la hija se encargue del cuidado de los abuelos, sin que nadie lo cuestione. ¿Qué ejemplifica esta situación?',
    options: [
      'micromachismo, porque es una conducta puntual dentro de una reunión',
      'rol de género, porque asigna tareas distintas a cada persona solo por su sexo, esperadas como norma familiar',
      'patriarcado, porque describe una institución completa dedicada al poder político'
    ],
    correct_option_index: 1,
    explanation:
      'La familia asigna tareas distintas a los hijos solo por su sexo y las espera como norma: es un rol de género, no una conducta puntual ni una institución de poder.',
    common_error:
      'Confundir un rol de género con el patriarcado, sin notar que el rol de género es una expectativa de tareas por sexo, mientras que el patriarcado es la estructura general de poder que sostiene esas expectativas.',
    source_reference: 'guía oficial, página 15, código 4.5.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pg-004',
    topic_id: 'hu-4-5-3-perspectiva-de-genero',
    prompt:
      'En una empresa, ningún puesto directivo ha sido ocupado nunca por una mujer y sus políticas dan por hecho que el cuidado familiar es responsabilidad exclusiva de las empleadas; en una reunión de esa misma empresa, un gerente interrumpe sistemáticamente a sus colegas mujeres cada vez que intentan opinar. ¿Por qué la primera situación ejemplifica el patriarcado y la segunda un micromachismo?',
    options: [
      'porque la primera es una norma institucional sostenida sobre quién concentra el poder, y la segunda es una conducta cotidiana y puntual que reproduce esa desigualdad a menor escala',
      'porque la primera ocurre en la dirección de la empresa y la segunda en una reunión de menor rango, y ese nivel jerárquico define el concepto',
      'porque la segunda situación afecta a más personas que la primera'
    ],
    correct_option_index: 0,
    explanation:
      'El patriarcado describe una estructura institucional general que concentra el poder en los hombres; el micromachismo es una conducta cotidiana y puntual que reproduce esa desigualdad a menor escala, no el nivel jerárquico ni el número de personas afectadas.',
    common_error:
      'Suponer que el nivel jerárquico donde ocurre una conducta determina si es patriarcado o micromachismo, en lugar de distinguir entre una estructura institucional y una conducta puntual.',
    source_reference: 'guía oficial, página 15, código 4.5.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-pg-005',
    topic_id: 'hu-4-5-3-perspectiva-de-genero',
    prompt:
      'Relaciona cada situación con lo que ejemplifica.\n\n1. Una empresa nunca ha tenido una mujer en su consejo directivo y sus políticas dan por hecho que los cuidados familiares son responsabilidad exclusiva de las empleadas\n2. En una reunión, un compañero interrumpe sistemáticamente a sus colegas mujeres cada vez que intentan opinar, sin que nadie lo señale\n3. Una familia espera que la hija adolescente aprenda a cocinar mientras al hijo se le anima a estudiar una ingeniería, "porque así les conviene a cada uno"\n\na. rol de género\nb. patriarcado\nc. micromachismo',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'La estructura institucional que concentra el poder y da por hecho el reparto de cuidados es patriarcado (b). La interrupción sistemática y no señalada es un micromachismo (c). La expectativa familiar de tareas distintas por sexo es un rol de género (a).',
    common_error:
      'Confundir la expectativa familiar de tareas por sexo con un micromachismo, sin notar que un rol de género es una expectativa de tareas y el micromachismo es una conducta cotidiana que resta valor o espacio a alguien por su género.',
    source_reference: 'guía oficial, página 15, código 4.5.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ra-001',
    topic_id: 'hu-4-5-4-reconocimiento-de-la-alteridad',
    prompt:
      'Un centro de trabajo permite que sus empleados practiquen sus creencias religiosas ajustando los horarios de descanso para quienes lo requieren, en lugar de exigirles que sigan el horario general sin excepción. ¿Qué ejemplifica esta política?',
    options: [
      'tolerancia pasiva, porque solo permite que los empleados existan sin exigirles nada',
      'asimilación, porque exige que los empleados adopten el horario general',
      'reconocimiento de la alteridad, porque adapta el horario para incluir su diferencia religiosa'
    ],
    correct_option_index: 2,
    explanation:
      'El centro de trabajo no exige que los empleados abandonen su práctica religiosa ni se limita a permitirles existir sin más: adapta activamente el horario para incluir su diferencia. Es reconocimiento de la alteridad.',
    common_error:
      'Confundir cualquier permiso otorgado a un grupo distinto con tolerancia pasiva, sin verificar si además hubo una adaptación activa del entorno para incluir su diferencia.',
    source_reference: 'guía oficial, página 15, código 4.5.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-ra-002',
    topic_id: 'hu-4-5-4-reconocimiento-de-la-alteridad',
    prompt:
      'Aceptar activamente a una persona o a un grupo con su diferencia, adaptando el trato o el entorno para incluirlo sin exigirle que deje de ser quien es, corresponde al _______.',
    options: ['asimilación', 'reconocimiento de la alteridad', 'patriarcado'],
    correct_option_index: 1,
    explanation:
      'Adaptar activamente el trato o el entorno para incluir a alguien distinto sin exigirle que abandone su diferencia es, precisamente, el reconocimiento de la alteridad.',
    common_error:
      'Confundir el reconocimiento de la alteridad con la asimilación, sin notar que la asimilación exige abandonar la diferencia, mientras que el reconocimiento de la alteridad la acepta y se adapta a ella.',
    source_reference: 'guía oficial, página 15, código 4.5.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ra-003',
    topic_id: 'hu-4-5-4-reconocimiento-de-la-alteridad',
    prompt:
      'Una universidad acepta a estudiantes extranjeros solo si aprueban un curso que les exige abandonar el uso de su lengua materna dentro del campus. ¿Qué ejemplifica esta política?',
    options: [
      'reconocimiento de la alteridad, porque de todas formas los acepta dentro del campus',
      'asimilación, porque exige que abandonen su diferencia lingüística para ser aceptados',
      'tolerancia pasiva, porque no les exige ninguna otra condición'
    ],
    correct_option_index: 1,
    explanation:
      'La universidad condiciona la aceptación a que los estudiantes abandonen su lengua materna: exige que dejen de ser distintos para ser incluidos. Es asimilación, no reconocimiento de la alteridad.',
    common_error:
      'Confundir cualquier forma de aceptación institucional con reconocimiento de la alteridad, sin verificar si esa aceptación exige abandonar la diferencia.',
    source_reference: 'guía oficial, página 15, código 4.5.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ra-004',
    topic_id: 'hu-4-5-4-reconocimiento-de-la-alteridad',
    prompt:
      'Una biblioteca pública añade una sección de libros en lenguas indígenas y capacita a su personal para atender a esas comunidades en su propio idioma; otra biblioteca permite el ingreso de visitantes indígenas, pero no ofrece ningún material ni atención en su idioma. ¿Por qué la primera ejemplifica el reconocimiento de la alteridad y la segunda solo tolerancia pasiva?',
    options: [
      'porque la primera adapta activamente sus materiales y su personal para incluir la diferencia lingüística, y la segunda solo permite el ingreso sin ninguna adaptación',
      'porque la primera biblioteca es más grande y tiene más presupuesto que la segunda',
      'porque la segunda biblioteca no permite el ingreso de visitantes indígenas'
    ],
    correct_option_index: 0,
    explanation:
      'El reconocimiento de la alteridad implica una adaptación activa del entorno para incluir la diferencia, no solo permitir la presencia de alguien sin cambiar nada; el tamaño o el presupuesto de la institución no es lo que distingue ambos casos.',
    common_error:
      'Suponer que el tamaño o los recursos de una institución determinan si reconoce la alteridad o solo tolera pasivamente, en lugar de evaluar si adaptó activamente su entorno.',
    source_reference: 'guía oficial, página 15, código 4.5.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ra-005',
    topic_id: 'hu-4-5-4-reconocimiento-de-la-alteridad',
    prompt:
      'Relaciona cada situación con lo que ejemplifica.\n\n1. Una escuela exige que los estudiantes migrantes dejen de hablar su lengua materna dentro del salón para "integrarse mejor"\n2. Un museo permite la entrada de visitantes con discapacidad visual, pero no ofrece ningún recorrido táctil ni audioguía\n3. Un ayuntamiento traduce sus trámites administrativos a la lengua de una comunidad indígena local y capacita a su personal para atenderla en su idioma\n\na. tolerancia pasiva\nb. asimilación\nc. reconocimiento de la alteridad',
    options: ['1b, 2a, 3c', '1c, 2b, 3a', '1a, 2c, 3b'],
    correct_option_index: 0,
    explanation:
      'Exigir que se abandone la lengua materna para "integrarse" es asimilación (b). Permitir el ingreso sin ninguna adaptación es tolerancia pasiva (a). Adaptar los trámites y capacitar al personal en la lengua de la comunidad es reconocimiento de la alteridad (c).',
    common_error:
      'Confundir permitir el ingreso de una persona con discapacidad sin ninguna adaptación con reconocimiento de la alteridad, sin notar que falta una adaptación activa del entorno.',
    source_reference: 'guía oficial, página 15, código 4.5.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-hosv-001',
    topic_id: 'hu-4-5-5-relacion-entre-humanos-y-otros-seres-vivos',
    prompt:
      'Ante la decisión de usar un terreno natural para ampliar un hospital pediátrico, alguien argumenta que debe priorizarse la salud de los niños porque la vida humana, por su capacidad racional y su dignidad, tiene un valor moral superior al del ecosistema afectado. ¿Qué postura ejemplifica este argumento?',
    options: [
      'postura biocéntrica, porque considera a todos los seres vivos por igual',
      'postura humanista, porque justifica priorizar a los seres humanos apelando a una cualidad distintiva suya',
      'postura utilitarista del sufrimiento, porque busca reducir el dolor de cualquier ser afectado'
    ],
    correct_option_index: 1,
    explanation:
      'El argumento prioriza explícitamente el bienestar humano sobre el del ecosistema y justifica esa prioridad apelando a la razón y la dignidad humanas: es una postura humanista.',
    common_error:
      'Clasificar como biocéntrico cualquier argumento sobre un dilema ambiental, sin verificar si en realidad otorga una prioridad moral a los seres humanos frente a otras formas de vida.',
    source_reference: 'guía oficial, página 15, código 4.5.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-hosv-002',
    topic_id: 'hu-4-5-5-relacion-entre-humanos-y-otros-seres-vivos',
    prompt:
      'Una postura que prioriza el bienestar de los seres humanos sobre el de otras especies, justificando esa prioridad en una cualidad distintiva del ser humano como la razón o la dignidad, se llama postura _______.',
    options: ['biocéntrica', 'humanista', 'utilitarista'],
    correct_option_index: 1,
    explanation:
      'Justificar una prioridad moral a favor de los seres humanos apelando a una cualidad distintiva suya, como la razón o la dignidad, define a la postura humanista.',
    common_error:
      'Confundir postura humanista con postura utilitarista, sin notar que la humanista justifica una prioridad a favor del ser humano, mientras que la utilitarista del sufrimiento no otorga esa prioridad por especie.',
    source_reference: 'guía oficial, página 15, código 4.5.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-hosv-003',
    topic_id: 'hu-4-5-5-relacion-entre-humanos-y-otros-seres-vivos',
    prompt:
      'Ante el mismo dilema del hospital pediátrico, otra persona argumenta que la vida de cualquier ser vivo merece la misma consideración moral, sin que la especie humana tenga automáticamente prioridad sobre el ecosistema afectado. ¿Qué postura ejemplifica este argumento?',
    options: [
      'postura humanista, porque de todas formas protege indirectamente a los seres humanos',
      'postura biocéntrica, porque no otorga una prioridad moral automática a los seres humanos',
      'postura humanista, porque cualquier argumento sobre un dilema ambiental lo es'
    ],
    correct_option_index: 1,
    explanation:
      'El argumento rechaza explícitamente que los seres humanos tengan una prioridad moral automática y sostiene una consideración igual para todo ser vivo: es una postura biocéntrica, no humanista.',
    common_error:
      'Suponer que cualquier argumento relacionado con un dilema ambiental es humanista por tratar sobre humanos y naturaleza, sin verificar si en realidad otorga una prioridad moral a los seres humanos.',
    source_reference: 'guía oficial, página 15, código 4.5.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-hosv-004',
    topic_id: 'hu-4-5-5-relacion-entre-humanos-y-otros-seres-vivos',
    prompt:
      'Ante el dilema de permitir experimentación con animales para desarrollar una vacuna, una persona argumenta que debe autorizarse porque la dignidad y la razón humanas justifican priorizar la salud de las personas; otra argumenta que debe evitarse porque el sufrimiento animal merece la misma consideración que el humano, sin importar la especie. ¿Por qué la primera postura es humanista y la segunda no?',
    options: [
      'porque la primera justifica priorizar a los humanos apelando a una cualidad distintiva suya, y la segunda otorga la misma consideración al sufrimiento sin importar la especie',
      'porque la primera está a favor de la vacuna y la segunda en contra, y esa postura sobre el resultado define si es humanista',
      'porque la segunda persona conoce mejor el tema de la experimentación animal'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que define a una postura como humanista es que justifique una prioridad moral a favor de los seres humanos apelando a una cualidad distintiva suya, no si está a favor o en contra de una acción concreta ni el conocimiento de quien argumenta.',
    common_error:
      'Suponer que estar a favor de una acción que beneficia a los humanos hace que una postura sea automáticamente humanista, sin verificar si justifica esa prioridad apelando a una cualidad distintiva del ser humano.',
    source_reference: 'guía oficial, página 15, código 4.5.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-hosv-005',
    topic_id: 'hu-4-5-5-relacion-entre-humanos-y-otros-seres-vivos',
    prompt:
      'Relaciona cada argumento con la postura que ejemplifica ante el dilema de talar un bosque para construir viviendas.\n\n1. Debe autorizarse la tala porque la necesidad humana de vivienda tiene un valor moral superior al de los ecosistemas afectados\n2. No debe autorizarse la tala porque cualquier ser vivo afectado merece la misma consideración moral, sin una jerarquía a favor de los humanos\n3. Debe evitarse la tala principalmente porque provocaría un sufrimiento evitable en los animales del bosque, sin importar si son humanos o no\n\na. postura biocéntrica\nb. postura utilitarista del sufrimiento\nc. postura humanista',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'Priorizar la necesidad humana por un valor moral superior es una postura humanista (c). Sostener la misma consideración moral para todo ser vivo, sin jerarquía a favor de los humanos, es una postura biocéntrica (a). Centrarse en evitar el sufrimiento sin importar la especie es una postura utilitarista del sufrimiento (b).',
    common_error:
      'Confundir la postura centrada en evitar el sufrimiento animal con la postura biocéntrica, sin notar que la primera se enfoca en el sufrimiento y la segunda en la consideración moral igualitaria entre todo ser vivo.',
    source_reference: 'guía oficial, página 15, código 4.5.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ce-001',
    topic_id: 'hu-4-6-1-categorias-esteticas',
    prompt:
      'En una novela, el protagonista, un joven admirado por su comunidad por su valentía, muere defendiendo su pueblo de una inundación que no logra detener, dejando a su familia y vecinos sumidos en el duelo. ¿Qué categoría estética ejemplifica esta escena?',
    options: [
      'lo cómico, porque el desenlace resulta inesperado',
      'lo trágico, porque presenta la pérdida irreversible de alguien valioso y provoca compasión',
      'lo sublime, porque la inundación es un fenómeno de gran magnitud'
    ],
    correct_option_index: 1,
    explanation:
      'La escena narra la pérdida irreversible de un personaje valioso y provoca compasión ante ese destino: es lo trágico. No es lo sublime, porque el foco no está en la magnitud de la inundación como fuente de fascinación, sino en la pérdida concreta del protagonista.',
    common_error:
      'Clasificar como sublime cualquier escena con un fenómeno natural de gran magnitud, sin distinguir si el foco está en una pérdida concreta (trágico) o en la fascinación ante la inmensidad (sublime).',
    source_reference: 'guía oficial, página 15, código 4.6.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-ce-002',
    topic_id: 'hu-4-6-1-categorias-esteticas',
    prompt:
      'Una categoría estética que deforma la realidad de manera exagerada, mezclando rasgos repulsivos con rasgos cómicos y provocando a la vez incomodidad y risa, se llama lo _______.',
    options: ['bello', 'grotesco', 'sublime'],
    correct_option_index: 1,
    explanation:
      'Mezclar una deformidad exagerada y repulsiva con un efecto de risa, provocando a la vez incomodidad y risa, define a lo grotesco.',
    common_error:
      'Confundir lo grotesco con lo cómico simple, sin notar que lo grotesco añade una deformidad o un rasgo repulsivo que lo cómico por sí solo no tiene.',
    source_reference: 'guía oficial, página 15, código 4.6.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ce-003',
    topic_id: 'hu-4-6-1-categorias-esteticas',
    prompt:
      'En una caricatura, un político aparece con un cuerpo desproporcionado y rasgos de animal, en una imagen que resulta repulsiva y a la vez arranca risa a quien la observa. ¿Por qué esta imagen ejemplifica lo grotesco y no solo lo cómico?',
    options: [
      'porque combina una deformidad exagerada y repulsiva con el efecto de risa, más allá de un simple contraste',
      'porque cualquier caricatura política es automáticamente grotesca',
      'porque el personaje representado es una figura pública conocida'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que hace grotesca a la imagen no es que sea una caricatura política ni quién esté representado, sino que combina una deformidad repulsiva con un efecto de risa, algo que va más allá del contraste leve propio de lo cómico.',
    common_error:
      'Suponer que cualquier caricatura o exageración humorística es automáticamente grotesca, sin verificar si de verdad combina deformidad repulsiva con risa.',
    source_reference: 'guía oficial, página 15, código 4.6.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ce-004',
    topic_id: 'hu-4-6-1-categorias-esteticas',
    prompt:
      'Un grupo de excursionistas se detiene ante un cañón cuya profundidad y extensión no pueden abarcar con la vista, y sienten una mezcla de fascinación y pequeñez frente a esa inmensidad. ¿Qué categoría estética ejemplifica esta experiencia?',
    options: [
      'lo bello, porque el paisaje resulta agradable a la vista',
      'lo trágico, porque la escena es imponente',
      'lo sublime, porque la magnitud del paisaje supera su capacidad de comprensión y produce fascinación junto con pequeñez'
    ],
    correct_option_index: 2,
    explanation:
      'La experiencia combina fascinación y una sensación de pequeñez ante una magnitud que supera la capacidad ordinaria de comprensión: es lo sublime, no solo lo bello, que implicaría únicamente agrado armonioso sin esa sensación de pequeñez.',
    common_error:
      'Clasificar como bello cualquier paisaje impresionante, sin notar que lo sublime añade una sensación de pequeñez frente a una magnitud que abruma, ausente en la contemplación tranquila de lo bello.',
    source_reference: 'guía oficial, página 15, código 4.6.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-ce-005',
    topic_id: 'hu-4-6-1-categorias-esteticas',
    prompt:
      'Relaciona cada situación con la categoría estética que ejemplifica.\n\n1. Una fachada de piedra conserva una proporción y una simetría que producen una sensación de armonía agradable al observarla\n2. Un cómico repite un gesto exagerado de sorpresa cada vez que se le cae un objeto, sin causarle ningún daño, lo que provoca risa en el público\n3. Una ilustración mezcla el rostro de un hombre con rasgos de insecto en una imagen deforme que resulta repulsiva y, a la vez, arranca una risa incómoda\n\na. lo grotesco\nb. lo cómico\nc. lo bello',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'La fachada armoniosa y agradable ejemplifica lo bello (c). El gesto exagerado que provoca risa sin daño ni deformidad ejemplifica lo cómico (b). La imagen deforme y repulsiva que a la vez provoca risa ejemplifica lo grotesco (a).',
    common_error:
      'Confundir el gesto cómico exagerado con lo grotesco, sin notar que falta el rasgo deforme o repulsivo que distingue a lo grotesco de un contraste cómico simple.',
    source_reference: 'guía oficial, página 15, código 4.6.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-he-001',
    topic_id: 'hu-4-6-2-definicion-de-hermeneutica',
    prompt:
      'Un investigador formula un conjunto de principios generales para interpretar correctamente el sentido de cualquier texto antiguo, considerando el contexto histórico de quien lo escribió y el horizonte cultural de quien lo lee hoy. ¿Qué disciplina ejemplifica este trabajo?',
    options: [
      'la exégesis, porque interpreta un texto en particular',
      'la semiótica, porque estudia los signos como sistema',
      'la hermenéutica, porque formula los principios generales que hacen posible interpretar correctamente un sentido'
    ],
    correct_option_index: 2,
    explanation:
      'Proponer reglas generales aplicables a cualquier texto, y no interpretar un texto particular ni estudiar los signos como sistema, es lo que define a la hermenéutica.',
    common_error:
      'Llamar exégesis a cualquier reflexión sobre la interpretación, sin notar que aquí se formulan principios generales aplicables a distintos textos, no una interpretación puntual.',
    source_reference: 'guía oficial, página 15, código 4.6.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'hu-he-002',
    topic_id: 'hu-4-6-2-definicion-de-hermeneutica',
    prompt:
      'La disciplina que estudia los principios y métodos que hacen posible interpretar correctamente el sentido de un texto, un símbolo o una acción se llama _______.',
    options: ['exégesis', 'hermenéutica', 'semiótica'],
    correct_option_index: 1,
    explanation:
      'Estudiar los principios y métodos generales que hacen posible una interpretación correcta del sentido define a la hermenéutica.',
    common_error:
      'Confundir hermenéutica con exégesis, sin notar que la exégesis es la aplicación puntual de esos principios a un texto concreto, no su formulación general.',
    source_reference: 'guía oficial, página 15, código 4.6.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-he-003',
    topic_id: 'hu-4-6-2-definicion-de-hermeneutica',
    prompt:
      'Un especialista analiza un capítulo concreto de un texto legal y, aplicando ciertos criterios de interpretación ya establecidos, concluye cuál es su significado correcto en ese caso particular. ¿Por qué este trabajo es un ejemplo de exégesis y no de hermenéutica?',
    options: [
      'porque aplica principios de interpretación ya formulados a un texto particular, en vez de formular esos principios en general',
      'porque un texto legal nunca puede interpretarse con principios hermenéuticos',
      'porque la exégesis y la hermenéutica son exactamente lo mismo'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que distingue a la exégesis de la hermenéutica no es el tipo de texto ni que sean lo mismo, sino que la exégesis aplica principios de interpretación ya existentes a un caso particular, mientras que la hermenéutica formula esos principios en general.',
    common_error:
      'Suponer que exégesis y hermenéutica son intercambiables, sin distinguir la aplicación puntual de principios de interpretación (exégesis) de la formulación general de esos principios (hermenéutica).',
    source_reference: 'guía oficial, página 15, código 4.6.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-he-004',
    topic_id: 'hu-4-6-2-definicion-de-hermeneutica',
    prompt:
      'Una lingüista estudia por qué una señal de tránsito, una palabra y una fotografía pueden funcionar como signos, y qué reglas generales rigen la relación entre un signo y aquello que representa, sin centrarse en interpretar el sentido de un texto en su contexto. ¿Qué disciplina ejemplifica este trabajo?',
    options: [
      'la semiótica, porque estudia los signos y los sistemas de significación en general',
      'la hermenéutica, porque cualquier estudio sobre el significado es hermenéutica',
      'la exégesis, porque interpreta un texto religioso concreto'
    ],
    correct_option_index: 0,
    explanation:
      'Estudiar qué hace que algo funcione como signo y qué reglas rigen esa relación en general, sin centrarse en interpretar el sentido de un texto en su contexto, es semiótica, no hermenéutica.',
    common_error:
      'Llamar hermenéutica a cualquier estudio relacionado con el significado, sin distinguir el estudio de los signos como sistema (semiótica) de los principios para interpretar el sentido de un texto en contexto (hermenéutica).',
    source_reference: 'guía oficial, página 15, código 4.6.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'hu-he-005',
    topic_id: 'hu-4-6-2-definicion-de-hermeneutica',
    prompt:
      'Relaciona cada situación con la disciplina que ejemplifica.\n\n1. Un teólogo interpreta un pasaje bíblico concreto aplicando criterios de interpretación ya establecidos por su tradición\n2. Un filósofo formula principios generales sobre cómo debe interpretarse correctamente el sentido de cualquier texto, considerando su contexto\n3. Un semiólogo analiza qué hace que un color, un sonido o una imagen funcionen como signos dentro de un sistema de significación\n\na. semiótica\nb. exégesis\nc. hermenéutica',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Interpretar un pasaje concreto aplicando criterios ya establecidos es exégesis (b). Formular principios generales sobre cómo interpretar correctamente el sentido de cualquier texto es hermenéutica (c). Estudiar los signos como sistema de significación es semiótica (a).',
    common_error:
      'Confundir la formulación general de principios de interpretación (hermenéutica) con su aplicación puntual a un texto concreto (exégesis).',
    source_reference: 'guía oficial, página 15, código 4.6.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
