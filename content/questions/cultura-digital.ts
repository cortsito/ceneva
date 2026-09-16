import type { question } from './types'

export const cultura_digital_questions: question[] = [
  {
    id: 'cd-id-001',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: '¿cuál de las siguientes opciones es un elemento de la identidad digital de una persona?',
    options: [
      'la contraseña que usa para iniciar sesión en sus cuentas',
      'su historial de comentarios, reacciones y publicaciones en distintos servicios en línea',
      'el número de serie del dispositivo desde el que se conecta'
    ],
    correct_option_index: 1,
    explanation: 'la identidad digital reúne datos de perfil, contenido publicado e interacciones asociadas a una persona; la contraseña es información de seguridad y el número de serie identifica al dispositivo, no a la persona.',
    common_error: 'confundir datos de seguridad o del dispositivo con los elementos que conforman la identidad digital de una persona.',
    source_reference: 'guía oficial, página 12, código 2.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-002',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'un usuario etiqueta a un compañero en una fotografía pública sin que él la haya publicado. esa etiqueta _______ parte de la identidad digital del compañero.',
    options: [
      'no forma, porque solo aplica a lo que la persona escribe en su propio perfil',
      'no forma, porque él no la publicó',
      'sí forma'
    ],
    correct_option_index: 2,
    explanation: 'la información publicada por otras personas también puede quedar vinculada con alguien y afectar su reputación digital, aunque esa persona no haya creado el contenido.',
    common_error: 'creer que solo lo publicado directamente por una persona forma parte de su identidad digital, ignorando lo que otros publican sobre ella.',
    source_reference: 'guía oficial, página 12, código 2.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-003',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'un jugador usa el mismo seudónimo en una plataforma de videojuegos y en un foro de discusión, donde deja comentarios frecuentes sin revelar su nombre real. ¿esos comentarios forman parte de su identidad digital?',
    options: [
      'sí, porque pueden asociarse con su actividad en línea aunque no use su nombre real',
      'no, porque un seudónimo no identifica a una persona real',
      'no, porque solo los datos del perfil oficial cuentan como identidad digital'
    ],
    correct_option_index: 0,
    explanation: 'el alias y los comentarios pueden asociarse de forma consistente con la actividad de una persona en línea; el nombre real no es un requisito para que exista identidad digital.',
    common_error: 'asumir que un seudónimo elimina cualquier vínculo entre la actividad en línea y la persona que la realiza.',
    source_reference: 'guía oficial, página 12, código 2.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-004',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'una aplicación de mensajería muestra, junto a cada publicación de un usuario, la hora exacta y la ciudad desde la que se conectó. ¿a qué elemento de la identidad digital corresponde esa información?',
    options: [
      'contenido publicado por la persona',
      'reputación digital construida por otros usuarios',
      'actividad y metadatos asociados a la persona'
    ],
    correct_option_index: 2,
    explanation: 'la hora de conexión y la ubicación son metadatos de actividad: datos que se generan al usar un servicio y que quedan vinculados con la persona, distintos del contenido que ella redacta o comparte.',
    common_error: 'clasificar cualquier dato visible en una publicación como contenido, sin distinguir el contenido redactado de los metadatos generados por la actividad.',
    source_reference: 'guía oficial, página 12, código 2.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-005',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'relaciona cada situación con el elemento de la identidad digital que representa.\n\n1. una biografía y foto de perfil en una cuenta\n2. un comentario dejado en un foro\n3. la opinión que otros usuarios forman de una persona a partir de sus publicaciones\n\na. reputación digital\nb. dato de perfil\nc. interacción',
    options: ['1a, 2b, 3c', '1c, 2a, 3b', '1b, 2c, 3a'],
    correct_option_index: 2,
    explanation: 'la biografía y la foto son datos de perfil (b); un comentario en un foro es una interacción pública (c); la opinión que otros forman a partir de lo publicado es la reputación digital (a).',
    common_error: 'confundir la reputación digital, que depende de la interpretación de otros, con los datos de perfil que la persona controla directamente.',
    source_reference: 'guía oficial, página 12, código 2.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-001',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'un programa puede descargarse y usarse sin costo, pero su empresa no publica ni permite modificar el código fuente. ¿qué tipo de licenciamiento describe mejor este caso?',
    options: ['shareware', 'software de código abierto', 'freeware'],
    correct_option_index: 2,
    explanation: 'el uso es gratuito, pero no hay acceso al código fuente; esa combinación corresponde a freeware.',
    common_error: 'clasificar como código abierto cualquier programa gratuito, sin verificar si permite consultar o modificar su código fuente.',
    source_reference: 'guía oficial, página 12, código 2.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-002',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'un editor de video permite usar todas sus funciones durante quince días; al terminar ese periodo, pide comprar una licencia para seguir guardando proyectos. este programa es _______.',
    options: ['freeware', 'shareware', 'software de código abierto'],
    correct_option_index: 1,
    explanation: 'el acceso completo está limitado a un periodo de prueba, después del cual se requiere pago para continuar usándolo; esa condición corresponde a shareware.',
    common_error: 'confundir un periodo de prueba temporal con un programa gratuito de forma permanente.',
    source_reference: 'guía oficial, página 12, código 2.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-003',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'una comunidad de desarrolladores publica el código de un programa y permite que cualquier persona lo estudie, lo modifique y lo redistribuya conforme a su licencia. ¿qué tipo de software describe este caso?',
    options: ['freeware', 'shareware', 'software de código abierto'],
    correct_option_index: 2,
    explanation: 'el acceso al código fuente y el permiso de modificación y redistribución son las condiciones que definen al software de código abierto, sin importar si tiene o no costo.',
    common_error: 'creer que el software de código abierto siempre es gratuito, y que es la gratuidad, no el acceso al código, lo que lo define.',
    source_reference: 'guía oficial, página 12, código 2.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-004',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'una empresa distribuye un programa cuyo código puede consultarse y modificarse libremente, aunque cobra por brindar soporte técnico y actualizaciones empaquetadas. ¿este software deja de ser de código abierto por cobrar soporte?',
    options: [
      'sí, porque el código abierto siempre debe ser completamente gratuito',
      'no, porque el código abierto se define por el acceso al código, no por la ausencia total de costos',
      'sí, porque cobrar por soporte equivale a vender una licencia cerrada'
    ],
    correct_option_index: 1,
    explanation: 'el software de código abierto puede tener costos asociados a soporte o distribución; lo que lo distingue es el acceso al código fuente y los permisos para modificarlo y redistribuirlo.',
    common_error: 'asumir que cualquier cobro relacionado con un programa descarta que sea de código abierto.',
    source_reference: 'guía oficial, página 12, código 2.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-005',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'relaciona cada tipo de licenciamiento con su condición principal.\n\n1. freeware\n2. shareware\n3. software de código abierto\n\na. permite consultar y modificar el código fuente conforme a su licencia\nb. se usa sin costo pero sin acceso al código fuente\nc. ofrece un periodo de prueba o funciones limitadas antes de requerir pago',
    options: ['1a, 2b, 3c', '1c, 2a, 3b', '1b, 2c, 3a'],
    correct_option_index: 2,
    explanation: 'freeware es de uso gratuito sin acceso al código (b); shareware ofrece prueba limitada antes de pedir pago (c); el software de código abierto permite consultar y modificar el código fuente (a).',
    common_error: 'intercambiar shareware y freeware por fijarse solo en que ambos permiten usar el programa sin pagar de inmediato.',
    source_reference: 'guía oficial, página 12, código 2.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-001',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'un equipo de trabajo necesita editar un mismo documento desde distintas ubicaciones y que todos vean siempre la versión más reciente sin reenviarlo por correo. ¿qué tipo de servicio digital resuelve mejor esta necesidad?',
    options: ['comercio electrónico', 'almacenamiento en la nube', 'red social'],
    correct_option_index: 1,
    explanation: 'la necesidad principal es guardar y sincronizar un archivo compartido entre varios dispositivos y personas, lo cual corresponde a un servicio de almacenamiento en la nube.',
    common_error: 'elegir una red social por permitir compartir archivos, sin distinguir que su función principal es la interacción social y no la sincronización de documentos de trabajo.',
    source_reference: 'guía oficial, página 12, código 2.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-002',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'un artesano publica sus productos en una plataforma donde los clientes pueden pagar en línea y coordinar el envío. este tipo de servicio se clasifica como _______.',
    options: ['servicio educativo', 'almacenamiento en la nube', 'comercio electrónico'],
    correct_option_index: 2,
    explanation: 'la actividad central es vender, comprar y pagar productos en línea, lo cual corresponde a comercio electrónico.',
    common_error: 'clasificar cualquier plataforma con pagos en línea como servicio de almacenamiento, ignorando que el propósito central es la compraventa.',
    source_reference: 'guía oficial, página 12, código 2.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-003',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'una plataforma permite a los estudiantes inscribirse a cursos, consultar materiales, entregar tareas y comunicarse con sus docentes. ¿qué tipo de servicio digital es?',
    options: ['servicio educativo', 'red social', 'comercio electrónico'],
    correct_option_index: 0,
    explanation: 'organizar cursos, materiales, actividades y comunicación entre estudiantes y docentes es la función central de un servicio educativo.',
    common_error: 'clasificar como red social cualquier plataforma que permita comunicarse, sin distinguir que su propósito principal es organizar el aprendizaje.',
    source_reference: 'guía oficial, página 12, código 2.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-004',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'una red social permite a sus usuarios publicar contenido, pero también incluye anuncios de productos que se pueden comprar sin salir de la aplicación. una persona busca específicamente un lugar para comprar y pagar un producto con envío a domicilio. ¿qué tipo de servicio necesita según esa necesidad principal?',
    options: ['red social', 'comercio electrónico', 'servicio educativo'],
    correct_option_index: 1,
    explanation: 'aunque la plataforma tenga varias funciones, la necesidad central descrita es comprar y pagar un producto con envío, lo cual corresponde a comercio electrónico y no a la función social de publicar contenido.',
    common_error: 'elegir el servicio según la plataforma completa en lugar de identificar la función principal que resuelve la necesidad descrita en el caso.',
    source_reference: 'guía oficial, página 12, código 2.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-005',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'relaciona cada necesidad con el tipo de servicio digital que la resuelve principalmente.\n\n1. guardar y sincronizar archivos entre dispositivos\n2. comprar un producto con pago y envío\n3. publicar contenido e interactuar con una red de contactos\n\na. red social\nb. comercio electrónico\nc. almacenamiento en la nube',
    options: ['1a, 2c, 3b', '1c, 2a, 3b', '1c, 2b, 3a'],
    correct_option_index: 2,
    explanation: 'guardar y sincronizar archivos corresponde a almacenamiento en la nube (c); comprar con pago y envío corresponde a comercio electrónico (b); publicar e interactuar con contactos corresponde a una red social (a).',
    common_error: 'asociar el comercio electrónico con la interacción social en lugar de con la actividad de compra y pago.',
    source_reference: 'guía oficial, página 12, código 2.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-001',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'llega un mensaje que imita el diseño de un banco y pide ingresar usuario y contraseña en un enlace urgente. ¿qué amenaza describe esta situación?',
    options: ['malware', 'grooming', 'phishing'],
    correct_option_index: 2,
    explanation: 'el mensaje suplanta a una entidad confiable para engañar a la persona y obtener sus datos, lo cual es la definición de phishing.',
    common_error: 'confundir phishing con malware, sin notar que el engaño para obtener datos ocurre antes de que se ejecute cualquier programa.',
    source_reference: 'guía oficial, página 12, código 2.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-002',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'una persona descarga un archivo desde un sitio desconocido; después, sus documentos quedan cifrados y aparece un mensaje que exige un pago para recuperarlos. esta situación es un caso de _______.',
    options: ['phishing', 'ransomware', 'grooming'],
    correct_option_index: 1,
    explanation: 'el cifrado de archivos junto con la exigencia de pago para recuperarlos es la característica definitoria del ransomware, un tipo de malware.',
    common_error: 'llamar phishing a cualquier incidente que involucre una descarga, sin distinguir el engaño para obtener datos del daño causado por un programa malicioso.',
    source_reference: 'guía oficial, página 12, código 2.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-003',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'una persona adulta desconocida contacta a un adolescente en un juego en línea, gana su confianza poco a poco y después le pide fotografías privadas y proponer un encuentro sin avisar a su familia. ¿qué amenaza describe este caso?',
    options: ['grooming', 'phishing', 'malware'],
    correct_option_index: 0,
    explanation: 'el acercamiento gradual de una persona adulta hacia una persona menor de edad para obtener control, información íntima o un encuentro es la definición de grooming.',
    common_error: 'clasificar cualquier contacto no solicitado como phishing, sin distinguir que el grooming busca manipulación personal y no solo obtener datos.',
    source_reference: 'guía oficial, página 12, código 2.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-004',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'un dispositivo empieza a funcionar más lento, muestra ventanas emergentes inesperadas y permite que alguien acceda a él sin autorización, después de que su usuario instaló un programa descargado de un anuncio. ¿qué tipo de amenaza describe mejor esta situación?',
    options: ['phishing', 'malware', 'grooming'],
    correct_option_index: 1,
    explanation: 'un programa malicioso instalado que afecta el funcionamiento del dispositivo y permite acceso no autorizado corresponde a malware; no hubo un mensaje que suplantara a una entidad confiable ni una manipulación personal.',
    common_error: 'llamar phishing a cualquier problema causado por una descarga, sin verificar si hubo un engaño mediante suplantación o directamente la ejecución de un programa dañino.',
    source_reference: 'guía oficial, página 12, código 2.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-005',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'relaciona cada amenaza con la conducta que la describe mejor.\n\n1. phishing\n2. grooming\n3. ransomware\n\na. bloquea o cifra archivos y exige un pago para recuperarlos\nb. suplanta a una entidad confiable para obtener información mediante engaño\nc. manipula a una persona menor de edad para obtener control o un encuentro',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 2,
    explanation: 'phishing suplanta a una entidad confiable para engañar (b); grooming manipula a una persona menor de edad (c); ransomware bloquea archivos y exige pago (a).',
    common_error: 'confundir ransomware con phishing por asumir que cualquier amenaza que involucre pagos o datos personales es la misma.',
    source_reference: 'guía oficial, página 12, código 2.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-001',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'una persona recibe una notificación de que su cuenta de correo inició sesión desde un dispositivo que no reconoce, después de haberla usado en una computadora pública. ¿qué debe hacer para recuperar el control de la cuenta?',
    options: [
      'eliminar la cuenta y desinstalar la aplicación de su dispositivo',
      'cambiar su contraseña por una nueva y única, y habilitar la autenticación en dos factores',
      'cerrar la sesión de su dispositivo y borrar la caché de la aplicación'
    ],
    correct_option_index: 1,
    explanation: 'cambiar la contraseña impide que la sesión detectada pueda volver a iniciarse con la contraseña anterior, y la autenticación en dos factores exige una segunda verificación que solo la persona conoce; ninguna de las otras dos acciones invalida la contraseña comprometida.',
    common_error: 'creer que cerrar una sesión propia o borrar la caché del dispositivo elimina el acceso no autorizado, sin cambiar la contraseña comprometida.',
    source_reference: 'guía oficial, página 12, código 2.1.5; calibración de profundidad: página 29.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-002',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'mantener copias de la información importante en un lugar separado del dispositivo principal es una medida que reduce sobre todo el impacto de _______.',
    options: [
      'un mensaje de phishing',
      'una pérdida de información o un ataque de ransomware',
      'un acceso a una red social pública'
    ],
    correct_option_index: 1,
    explanation: 'los respaldos permiten recuperar archivos sin depender del dispositivo afectado, lo cual reduce el daño de perder información o de que un ransomware cifre los archivos originales.',
    common_error: 'pensar que los respaldos previenen el engaño de un mensaje de phishing en lugar de reducir el impacto de perder archivos.',
    source_reference: 'guía oficial, página 12, código 2.1.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-003',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'antes de ingresar datos personales en un enlace recibido por correo que pide actualizar una cuenta, ¿qué medida de seguridad se debe aplicar primero?',
    options: [
      'verificar el remitente y la dirección web, o entrar directamente al sitio oficial en caso de duda',
      'cambiar de inmediato la contraseña de la cuenta antes de revisar el mensaje',
      'reenviar el mensaje a otros contactos para confirmar si también lo recibieron'
    ],
    correct_option_index: 0,
    explanation: 'verificar el remitente y la dirección, o acceder directamente al sitio oficial, evita proporcionar datos en un enlace fraudulento antes de que ocurra cualquier daño.',
    common_error: 'actuar sobre la cuenta después de haber ingresado datos, en lugar de verificar el mensaje antes de proporcionar cualquier información.',
    source_reference: 'guía oficial, página 12, código 2.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-004',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'una persona usa una contraseña larga y única para su cuenta, pero no ha activado ninguna verificación adicional al iniciar sesión. ¿qué medida reforzaría más su protección frente a un inicio de sesión no autorizado, aunque alguien obtenga su contraseña?',
    options: [
      'usar la misma contraseña en todas sus cuentas para recordarla mejor',
      'habilitar la autenticación en dos factores',
      'compartir la contraseña únicamente con contactos de confianza'
    ],
    correct_option_index: 1,
    explanation: 'la autenticación en dos factores exige una segunda verificación además de la contraseña, por lo que protege la cuenta incluso si la contraseña queda expuesta.',
    common_error: 'asumir que una contraseña fuerte es suficiente sin agregar una segunda verificación que resista el caso en que la contraseña se filtre.',
    source_reference: 'guía oficial, página 12, código 2.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-005',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'ordena las acciones que debe seguir una persona al detectar un inicio de sesión no autorizado en su cuenta, de la primera a la última.\n\n1. habilitar la autenticación en dos factores\n2. cambiar la contraseña por una nueva y única\n3. cerrar las sesiones activas que no reconoce\n4. detectar el aviso de un inicio de sesión desconocido',
    options: ['4, 3, 2, 1', '2, 4, 3, 1', '4, 2, 3, 1'],
    correct_option_index: 2,
    explanation: 'primero se detecta el aviso (4); después se cambia la contraseña para invalidar el acceso comprometido (2); luego se cierran las sesiones que no se reconocen (3); y finalmente se habilita la autenticación en dos factores para prevenir un nuevo acceso (1).',
    common_error: 'habilitar la autenticación en dos factores antes de cambiar la contraseña comprometida, dejando la cuenta expuesta mientras tanto.',
    source_reference: 'guía oficial, página 12, código 2.1.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
