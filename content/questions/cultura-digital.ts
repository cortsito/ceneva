import type { question } from './types'

export const cultura_digital_questions: question[] = [
  {
    id: 'cd-id-001',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: '¿Cuál de las siguientes opciones es un elemento de la identidad digital de una persona?',
    options: [
      'la contraseña que usa para iniciar sesión en sus cuentas',
      'su historial de comentarios, reacciones y publicaciones en distintos servicios en línea',
      'el número de serie del dispositivo desde el que se conecta'
    ],
    correct_option_index: 1,
    explanation: 'La identidad digital reúne datos de perfil, contenido publicado e interacciones asociadas a una persona; la contraseña es información de seguridad y el número de serie identifica al dispositivo, no a la persona.',
    common_error: 'Confundir datos de seguridad o del dispositivo con los elementos que conforman la identidad digital de una persona.',
    source_reference: 'Guía oficial, página 12, código 2.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-002',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'Un usuario etiqueta a un compañero en una fotografía pública sin que él la haya publicado. Esa etiqueta _______ parte de la identidad digital del compañero.',
    options: [
      'no forma, porque solo aplica a lo que la persona escribe en su propio perfil',
      'no forma, porque él no la publicó',
      'sí forma'
    ],
    correct_option_index: 2,
    explanation: 'La información publicada por otras personas también puede quedar vinculada con alguien y afectar su reputación digital, aunque esa persona no haya creado el contenido.',
    common_error: 'Creer que solo lo publicado directamente por una persona forma parte de su identidad digital, ignorando lo que otros publican sobre ella.',
    source_reference: 'Guía oficial, página 12, código 2.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-003',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'Un jugador usa el mismo seudónimo en una plataforma de videojuegos y en un foro de discusión, donde deja comentarios frecuentes sin revelar su nombre real. ¿Esos comentarios forman parte de su identidad digital?',
    options: [
      'sí, porque pueden asociarse con su actividad en línea aunque no use su nombre real',
      'no, porque un seudónimo no identifica a una persona real',
      'no, porque solo los datos del perfil oficial cuentan como identidad digital'
    ],
    correct_option_index: 0,
    explanation: 'El alias y los comentarios pueden asociarse de forma consistente con la actividad de una persona en línea; el nombre real no es un requisito para que exista identidad digital.',
    common_error: 'Asumir que un seudónimo elimina cualquier vínculo entre la actividad en línea y la persona que la realiza.',
    source_reference: 'Guía oficial, página 12, código 2.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-004',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'Una aplicación de mensajería muestra, junto a cada publicación de un usuario, la hora exacta y la ciudad desde la que se conectó. ¿A qué elemento de la identidad digital corresponde esa información?',
    options: [
      'contenido publicado por la persona',
      'reputación digital construida por otros usuarios',
      'actividad y metadatos asociados a la persona'
    ],
    correct_option_index: 2,
    explanation: 'La hora de conexión y la ubicación son metadatos de actividad: datos que se generan al usar un servicio y que quedan vinculados con la persona, distintos del contenido que ella redacta o comparte.',
    common_error: 'Clasificar cualquier dato visible en una publicación como contenido, sin distinguir el contenido redactado de los metadatos generados por la actividad.',
    source_reference: 'Guía oficial, página 12, código 2.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-id-005',
    topic_id: 'cd-2-1-1-elementos-de-la-identidad-digital',
    prompt: 'Relaciona cada situación con el elemento de la identidad digital que representa.\n\n1. Una biografía y foto de perfil en una cuenta\n2. Un comentario dejado en un foro\n3. La opinión que otros usuarios forman de una persona a partir de sus publicaciones\n\na. reputación digital\nb. dato de perfil\nc. interacción',
    options: ['1a, 2b, 3c', '1c, 2a, 3b', '1b, 2c, 3a'],
    correct_option_index: 2,
    explanation: 'La biografía y la foto son datos de perfil (b); un comentario en un foro es una interacción pública (c); la opinión que otros forman a partir de lo publicado es la reputación digital (a).',
    common_error: 'Confundir la reputación digital, que depende de la interpretación de otros, con los datos de perfil que la persona controla directamente.',
    source_reference: 'Guía oficial, página 12, código 2.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-001',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'Un programa puede descargarse y usarse sin costo, pero su empresa no publica ni permite modificar el código fuente. ¿Qué tipo de licenciamiento describe mejor este caso?',
    options: ['shareware', 'software de código abierto', 'freeware'],
    correct_option_index: 2,
    explanation: 'El uso es gratuito, pero no hay acceso al código fuente; esa combinación corresponde a freeware.',
    common_error: 'Clasificar como código abierto cualquier programa gratuito, sin verificar si permite consultar o modificar su código fuente.',
    source_reference: 'Guía oficial, página 12, código 2.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-002',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'Un editor de video permite usar todas sus funciones durante quince días; al terminar ese periodo, pide comprar una licencia para seguir guardando proyectos. Este programa es _______.',
    options: ['freeware', 'shareware', 'software de código abierto'],
    correct_option_index: 1,
    explanation: 'El acceso completo está limitado a un periodo de prueba, después del cual se requiere pago para continuar usándolo; esa condición corresponde a shareware.',
    common_error: 'Confundir un periodo de prueba temporal con un programa gratuito de forma permanente.',
    source_reference: 'Guía oficial, página 12, código 2.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-003',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'Una comunidad de desarrolladores publica el código de un programa y permite que cualquier persona lo estudie, lo modifique y lo redistribuya conforme a su licencia. ¿Qué tipo de software describe este caso?',
    options: ['freeware', 'shareware', 'software de código abierto'],
    correct_option_index: 2,
    explanation: 'El acceso al código fuente y el permiso de modificación y redistribución son las condiciones que definen al software de código abierto, sin importar si tiene o no costo.',
    common_error: 'Creer que el software de código abierto siempre es gratuito, y que es la gratuidad, no el acceso al código, lo que lo define.',
    source_reference: 'Guía oficial, página 12, código 2.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-004',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'Una empresa distribuye un programa cuyo código puede consultarse y modificarse libremente, aunque cobra por brindar soporte técnico y actualizaciones empaquetadas. ¿Este software deja de ser de código abierto por cobrar soporte?',
    options: [
      'sí, porque el código abierto siempre debe ser completamente gratuito',
      'no, porque el código abierto se define por el acceso al código, no por la ausencia total de costos',
      'sí, porque cobrar por soporte equivale a vender una licencia cerrada'
    ],
    correct_option_index: 1,
    explanation: 'El software de código abierto puede tener costos asociados a soporte o distribución; lo que lo distingue es el acceso al código fuente y los permisos para modificarlo y redistribuirlo.',
    common_error: 'Asumir que cualquier cobro relacionado con un programa descarta que sea de código abierto.',
    source_reference: 'Guía oficial, página 12, código 2.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ls-005',
    topic_id: 'cd-2-1-2-tipos-de-licenciamiento-de-software',
    prompt: 'Relaciona cada tipo de licenciamiento con su condición principal.\n\n1. freeware\n2. shareware\n3. software de código abierto\n\na. permite consultar y modificar el código fuente conforme a su licencia\nb. se usa sin costo pero sin acceso al código fuente\nc. ofrece un periodo de prueba o funciones limitadas antes de requerir pago',
    options: ['1a, 2b, 3c', '1c, 2a, 3b', '1b, 2c, 3a'],
    correct_option_index: 2,
    explanation: 'Freeware es de uso gratuito sin acceso al código (b); shareware ofrece prueba limitada antes de pedir pago (c); el software de código abierto permite consultar y modificar el código fuente (a).',
    common_error: 'Intercambiar shareware y freeware por fijarse solo en que ambos permiten usar el programa sin pagar de inmediato.',
    source_reference: 'Guía oficial, página 12, código 2.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-001',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'Un equipo de trabajo necesita editar un mismo documento desde distintas ubicaciones y que todos vean siempre la versión más reciente sin reenviarlo por correo. ¿Qué tipo de servicio digital resuelve mejor esta necesidad?',
    options: ['comercio electrónico', 'almacenamiento en la nube', 'red social'],
    correct_option_index: 1,
    explanation: 'La necesidad principal es guardar y sincronizar un archivo compartido entre varios dispositivos y personas, lo cual corresponde a un servicio de almacenamiento en la nube.',
    common_error: 'Elegir una red social por permitir compartir archivos, sin distinguir que su función principal es la interacción social y no la sincronización de documentos de trabajo.',
    source_reference: 'Guía oficial, página 12, código 2.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-002',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'Un artesano publica sus productos en una plataforma donde los clientes pueden pagar en línea y coordinar el envío. Este tipo de servicio se clasifica como _______.',
    options: ['servicio educativo', 'almacenamiento en la nube', 'comercio electrónico'],
    correct_option_index: 2,
    explanation: 'La actividad central es vender, comprar y pagar productos en línea, lo cual corresponde a comercio electrónico.',
    common_error: 'Clasificar cualquier plataforma con pagos en línea como servicio de almacenamiento, ignorando que el propósito central es la compraventa.',
    source_reference: 'Guía oficial, página 12, código 2.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-003',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'Una plataforma permite a los estudiantes inscribirse a cursos, consultar materiales, entregar tareas y comunicarse con sus docentes. ¿Qué tipo de servicio digital es?',
    options: ['servicio educativo', 'red social', 'comercio electrónico'],
    correct_option_index: 0,
    explanation: 'Organizar cursos, materiales, actividades y comunicación entre estudiantes y docentes es la función central de un servicio educativo.',
    common_error: 'Clasificar como red social cualquier plataforma que permita comunicarse, sin distinguir que su propósito principal es organizar el aprendizaje.',
    source_reference: 'Guía oficial, página 12, código 2.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-004',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'Una red social permite a sus usuarios publicar contenido, pero también incluye anuncios de productos que se pueden comprar sin salir de la aplicación. Una persona busca específicamente un lugar para comprar y pagar un producto con envío a domicilio. ¿Qué tipo de servicio necesita según esa necesidad principal?',
    options: ['red social', 'comercio electrónico', 'servicio educativo'],
    correct_option_index: 1,
    explanation: 'Aunque la plataforma tenga varias funciones, la necesidad central descrita es comprar y pagar un producto con envío, lo cual corresponde a comercio electrónico y no a la función social de publicar contenido.',
    common_error: 'Elegir el servicio según la plataforma completa en lugar de identificar la función principal que resuelve la necesidad descrita en el caso.',
    source_reference: 'Guía oficial, página 12, código 2.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-sd-005',
    topic_id: 'cd-2-1-3-tipos-de-servicios-digitales',
    prompt: 'Relaciona cada necesidad con el tipo de servicio digital que la resuelve principalmente.\n\n1. Guardar y sincronizar archivos entre dispositivos\n2. Comprar un producto con pago y envío\n3. Publicar contenido e interactuar con una red de contactos\n\na. red social\nb. comercio electrónico\nc. almacenamiento en la nube',
    options: ['1a, 2c, 3b', '1c, 2a, 3b', '1c, 2b, 3a'],
    correct_option_index: 2,
    explanation: 'Guardar y sincronizar archivos corresponde a almacenamiento en la nube (c); comprar con pago y envío corresponde a comercio electrónico (b); publicar e interactuar con contactos corresponde a una red social (a).',
    common_error: 'Asociar el comercio electrónico con la interacción social en lugar de con la actividad de compra y pago.',
    source_reference: 'Guía oficial, página 12, código 2.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-001',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'Llega un mensaje que imita el diseño de un banco y pide ingresar usuario y contraseña en un enlace urgente. ¿Qué amenaza describe esta situación?',
    options: ['malware', 'grooming', 'phishing'],
    correct_option_index: 2,
    explanation: 'El mensaje suplanta a una entidad confiable para engañar a la persona y obtener sus datos, lo cual es la definición de phishing.',
    common_error: 'Confundir phishing con malware, sin notar que el engaño para obtener datos ocurre antes de que se ejecute cualquier programa.',
    source_reference: 'Guía oficial, página 12, código 2.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-002',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'Una persona descarga un archivo desde un sitio desconocido; después, sus documentos quedan cifrados y aparece un mensaje que exige un pago para recuperarlos. Esta situación es un caso de _______.',
    options: ['phishing', 'ransomware', 'grooming'],
    correct_option_index: 1,
    explanation: 'El cifrado de archivos junto con la exigencia de pago para recuperarlos es la característica definitoria del ransomware, un tipo de malware.',
    common_error: 'Llamar phishing a cualquier incidente que involucre una descarga, sin distinguir el engaño para obtener datos del daño causado por un programa malicioso.',
    source_reference: 'Guía oficial, página 12, código 2.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-003',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'Una persona adulta desconocida contacta a un adolescente en un juego en línea, gana su confianza poco a poco y después le pide fotografías privadas y proponer un encuentro sin avisar a su familia. ¿Qué amenaza describe este caso?',
    options: ['grooming', 'phishing', 'malware'],
    correct_option_index: 0,
    explanation: 'El acercamiento gradual de una persona adulta hacia una persona menor de edad para obtener control, información íntima o un encuentro es la definición de grooming.',
    common_error: 'Clasificar cualquier contacto no solicitado como phishing, sin distinguir que el grooming busca manipulación personal y no solo obtener datos.',
    source_reference: 'Guía oficial, página 12, código 2.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-004',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'Un dispositivo empieza a funcionar más lento, muestra ventanas emergentes inesperadas y permite que alguien acceda a él sin autorización, después de que su usuario instaló un programa descargado de un anuncio. ¿Qué tipo de amenaza describe mejor esta situación?',
    options: ['phishing', 'malware', 'grooming'],
    correct_option_index: 1,
    explanation: 'Un programa malicioso instalado que afecta el funcionamiento del dispositivo y permite acceso no autorizado corresponde a malware; no hubo un mensaje que suplantara a una entidad confiable ni una manipulación personal.',
    common_error: 'Llamar phishing a cualquier problema causado por una descarga, sin verificar si hubo un engaño mediante suplantación o directamente la ejecución de un programa dañino.',
    source_reference: 'Guía oficial, página 12, código 2.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-asd-005',
    topic_id: 'cd-2-1-4-tipos-de-amenazas-de-seguridad-digital',
    prompt: 'Relaciona cada amenaza con la conducta que la describe mejor.\n\n1. phishing\n2. grooming\n3. ransomware\n\na. bloquea o cifra archivos y exige un pago para recuperarlos\nb. suplanta a una entidad confiable para obtener información mediante engaño\nc. manipula a una persona menor de edad para obtener control o un encuentro',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 2,
    explanation: 'Phishing suplanta a una entidad confiable para engañar (b); grooming manipula a una persona menor de edad (c); ransomware bloquea archivos y exige pago (a).',
    common_error: 'Confundir ransomware con phishing por asumir que cualquier amenaza que involucre pagos o datos personales es la misma.',
    source_reference: 'Guía oficial, página 12, código 2.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-001',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'Una persona recibe una notificación de que su cuenta de correo inició sesión desde un dispositivo que no reconoce, después de haberla usado en una computadora pública. ¿Qué debe hacer para recuperar el control de la cuenta?',
    options: [
      'eliminar la cuenta y desinstalar la aplicación de su dispositivo',
      'cambiar su contraseña por una nueva y única, y habilitar la autenticación en dos factores',
      'cerrar la sesión de su dispositivo y borrar la caché de la aplicación'
    ],
    correct_option_index: 1,
    explanation: 'Cambiar la contraseña impide que la sesión detectada pueda volver a iniciarse con la contraseña anterior, y la autenticación en dos factores exige una segunda verificación que solo la persona conoce; ninguna de las otras dos acciones invalida la contraseña comprometida.',
    common_error: 'Creer que cerrar una sesión propia o borrar la caché del dispositivo elimina el acceso no autorizado, sin cambiar la contraseña comprometida.',
    source_reference: 'Guía oficial, página 12, código 2.1.5; calibración de profundidad: página 29.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-002',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'Mantener copias de la información importante en un lugar separado del dispositivo principal es una medida que reduce sobre todo el impacto de _______.',
    options: [
      'un mensaje de phishing',
      'una pérdida de información o un ataque de ransomware',
      'un acceso a una red social pública'
    ],
    correct_option_index: 1,
    explanation: 'Los respaldos permiten recuperar archivos sin depender del dispositivo afectado, lo cual reduce el daño de perder información o de que un ransomware cifre los archivos originales.',
    common_error: 'Pensar que los respaldos previenen el engaño de un mensaje de phishing en lugar de reducir el impacto de perder archivos.',
    source_reference: 'Guía oficial, página 12, código 2.1.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-003',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'Antes de ingresar datos personales en un enlace recibido por correo que pide actualizar una cuenta, ¿qué medida de seguridad se debe aplicar primero?',
    options: [
      'verificar el remitente y la dirección web, o entrar directamente al sitio oficial en caso de duda',
      'cambiar de inmediato la contraseña de la cuenta antes de revisar el mensaje',
      'reenviar el mensaje a otros contactos para confirmar si también lo recibieron'
    ],
    correct_option_index: 0,
    explanation: 'Verificar el remitente y la dirección, o acceder directamente al sitio oficial, evita proporcionar datos en un enlace fraudulento antes de que ocurra cualquier daño.',
    common_error: 'Actuar sobre la cuenta después de haber ingresado datos, en lugar de verificar el mensaje antes de proporcionar cualquier información.',
    source_reference: 'Guía oficial, página 12, código 2.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-004',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'Una persona usa una contraseña larga y única para su cuenta, pero no ha activado ninguna verificación adicional al iniciar sesión. ¿Qué medida reforzaría más su protección frente a un inicio de sesión no autorizado, aunque alguien obtenga su contraseña?',
    options: [
      'usar la misma contraseña en todas sus cuentas para recordarla mejor',
      'habilitar la autenticación en dos factores',
      'compartir la contraseña únicamente con contactos de confianza'
    ],
    correct_option_index: 1,
    explanation: 'La autenticación en dos factores exige una segunda verificación además de la contraseña, por lo que protege la cuenta incluso si la contraseña queda expuesta.',
    common_error: 'Asumir que una contraseña fuerte es suficiente sin agregar una segunda verificación que resista el caso en que la contraseña se filtre.',
    source_reference: 'Guía oficial, página 12, código 2.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ms-005',
    topic_id: 'cd-2-1-5-medidas-de-seguridad-digital',
    prompt: 'Ordena las acciones que debe seguir una persona al detectar un inicio de sesión no autorizado en su cuenta, de la primera a la última.\n\n1. Habilitar la autenticación en dos factores\n2. Cambiar la contraseña por una nueva y única\n3. Cerrar las sesiones activas que no reconoce\n4. Detectar el aviso de un inicio de sesión desconocido',
    options: ['4, 3, 2, 1', '2, 4, 3, 1', '4, 2, 3, 1'],
    correct_option_index: 2,
    explanation: 'Primero se detecta el aviso (4); después se cambia la contraseña para invalidar el acceso comprometido (2); luego se cierran las sesiones que no se reconocen (3); y finalmente se habilita la autenticación en dos factores para prevenir un nuevo acceso (1).',
    common_error: 'Habilitar la autenticación en dos factores antes de cambiar la contraseña comprometida, dejando la cuenta expuesta mientras tanto.',
    source_reference: 'Guía oficial, página 12, código 2.1.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ce-001',
    topic_id: 'cd-2-2-1-definicion-del-ciberespacio',
    prompt: '¿Cuál de las siguientes opciones describe mejor el ciberespacio?',
    options: [
      'el conjunto de cables, servidores y protocolos que forman la red de internet',
      'el entorno virtual que surge de la interconexión de redes y dispositivos digitales, donde ocurren la comunicación y el intercambio de información',
      'una aplicación específica donde las personas comparten contenido y se comunican'
    ],
    correct_option_index: 1,
    explanation: 'El ciberespacio es el entorno de interacción que genera la interconexión digital; los cables, servidores y protocolos son la infraestructura de internet, y una aplicación específica es solo una manifestación del ciberespacio, no su definición.',
    common_error: 'Confundir el ciberespacio con la infraestructura técnica de internet o con una plataforma específica.',
    source_reference: 'Guía oficial, página 12, código 2.2.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-ce-002',
    topic_id: 'cd-2-2-1-definicion-del-ciberespacio',
    prompt: 'El ciberespacio es el entorno _______ que se genera cuando los dispositivos y las redes digitales se interconectan, sin depender de un lugar físico determinado.',
    options: ['físico', 'virtual', 'comercial'],
    correct_option_index: 1,
    explanation: 'El ciberespacio es un entorno virtual de interacción, no un lugar físico ni una categoría comercial.',
    common_error: 'Pensar que el ciberespacio ocupa un lugar físico concreto en lugar de ser un entorno virtual de interacción.',
    source_reference: 'Guía oficial, página 12, código 2.2.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ce-003',
    topic_id: 'cd-2-2-1-definicion-del-ciberespacio',
    prompt: 'Una persona afirma que "internet" y "ciberespacio" significan exactamente lo mismo. ¿Por qué esa afirmación es incorrecta?',
    options: [
      'porque internet es la infraestructura de redes y protocolos, y el ciberespacio es el entorno de interacción que esa infraestructura permite',
      'porque el ciberespacio existe sin necesidad de ninguna red o dispositivo conectado',
      'porque internet solo sirve para navegar sitios web, mientras que el ciberespacio incluye videojuegos y aplicaciones'
    ],
    correct_option_index: 0,
    explanation: 'Internet es la infraestructura técnica; el ciberespacio es el entorno de interacción que esa infraestructura hace posible. Ambos están relacionados, pero no son sinónimos ni se definen por el tipo de servicio que ofrecen.',
    common_error: 'Distinguir ambos términos solo por el tipo de actividad que permiten, en lugar de por la diferencia entre infraestructura y entorno de interacción.',
    source_reference: 'Guía oficial, página 12, código 2.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ce-004',
    topic_id: 'cd-2-2-1-definicion-del-ciberespacio',
    prompt: 'Dos personas juegan un videojuego en línea desde países distintos, sin conocerse en persona ni compartir un espacio físico. ¿En qué entorno ocurre esa interacción?',
    options: [
      'en una red social, porque cualquier interacción entre desconocidos ocurre ahí',
      'en el ciberespacio, el entorno virtual generado por la interconexión de sus dispositivos',
      'en el servidor del videojuego únicamente, ya que ahí se procesa la información'
    ],
    correct_option_index: 1,
    explanation: 'La interacción ocurre en el ciberespacio: el entorno virtual que surge de la interconexión, sin depender de que las personas compartan un espacio físico. Un servidor es solo parte de la infraestructura técnica involucrada, y no se trata necesariamente de una red social.',
    common_error: 'Reducir el ciberespacio a una plataforma o pieza de infraestructura concreta en lugar de reconocerlo como el entorno general de interacción.',
    source_reference: 'Guía oficial, página 12, código 2.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ce-005',
    topic_id: 'cd-2-2-1-definicion-del-ciberespacio',
    prompt: 'Relaciona cada elemento con lo que representa.\n\n1. Ciberespacio\n2. Internet\n3. Una videollamada entre dos personas\n\na. una manifestación concreta de interacción dentro del ciberespacio\nb. la infraestructura de redes y protocolos que conecta dispositivos\nc. el entorno virtual de interacción que surge de esa interconexión',
    options: ['1a, 2b, 3c', '1c, 2b, 3a', '1b, 2c, 3a'],
    correct_option_index: 1,
    explanation: 'El ciberespacio es el entorno virtual de interacción (c); internet es la infraestructura de redes y protocolos (b); una videollamada es una manifestación concreta de interacción dentro de ese entorno (a).',
    common_error: 'Invertir ciberespacio e internet, tratando la infraestructura como si fuera el entorno de interacción.',
    source_reference: 'Guía oficial, página 12, código 2.2.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-tc-001',
    topic_id: 'cd-2-2-2-definicion-de-ticcad',
    prompt: '¿Qué significan las siglas TICCAD?',
    options: [
      'tecnologías de internet, comunicación, control y almacenamiento de datos',
      'tecnologías de información, comercio, conectividad y aprendizaje digital',
      'tecnologías de la información, comunicación, conocimiento y aprendizaje digital'
    ],
    correct_option_index: 2,
    explanation: 'TICCAD corresponde a tecnologías de la información, comunicación, conocimiento y aprendizaje digital; las otras dos opciones alteran alguno de los cuatro componentes reales del término.',
    common_error: 'Confundir alguno de los cuatro componentes del término (información, comunicación, conocimiento, aprendizaje digital) con otro concepto similar.',
    source_reference: 'Guía oficial, página 12, código 2.2.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-tc-002',
    topic_id: 'cd-2-2-2-definicion-de-ticcad',
    prompt: 'A diferencia de TIC, el término TICCAD agrega explícitamente las funciones de _______ y aprendizaje digital.',
    options: ['comunicación', 'conocimiento', 'almacenamiento'],
    correct_option_index: 1,
    explanation: 'TIC ya cubre información y comunicación; TICCAD agrega explícitamente conocimiento, su construcción y gestión colaborativa, y aprendizaje digital.',
    common_error: 'Creer que TICCAD agrega la comunicación, cuando ese componente ya forma parte de TIC.',
    source_reference: 'Guía oficial, página 12, código 2.2.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-tc-003',
    topic_id: 'cd-2-2-2-definicion-de-ticcad',
    prompt: 'Una aplicación permite únicamente enviar mensajes de texto entre dos personas, sin más funciones. ¿Por qué no es, por sí sola, un ejemplo completo de TICCAD?',
    options: [
      'porque solo cubre la función de comunicación, sin acceso a información, construcción de conocimiento ni aprendizaje digital',
      'porque TICCAD excluye cualquier aplicación de mensajería',
      'porque para ser TICCAD una herramienta debe ser gratuita'
    ],
    correct_option_index: 0,
    explanation: 'TICCAD reúne cuatro funciones: información, comunicación, conocimiento y aprendizaje digital. Una aplicación que solo permite comunicación cubre apenas una de esas funciones.',
    common_error: 'Evaluar una herramienta como TICCAD o no TICCAD por su costo o por excluir un tipo de aplicación en particular, en lugar de por las funciones que cubre.',
    source_reference: 'Guía oficial, página 12, código 2.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-tc-004',
    topic_id: 'cd-2-2-2-definicion-de-ticcad',
    prompt: 'Una escuela usa una plataforma donde el alumnado consulta materiales, participa en foros y construye documentos colaborativos con sus conclusiones. ¿Qué función de TICCAD representa la construcción de esos documentos colaborativos?',
    options: ['acceso a la información', 'comunicación', 'construcción de conocimiento'],
    correct_option_index: 2,
    explanation: 'Construir un documento con conclusiones propias, de forma colaborativa, corresponde a la función de generación y construcción de conocimiento, distinta de solo consultar materiales (información) o participar en foros (comunicación).',
    common_error: 'Clasificar cualquier actividad colaborativa como comunicación, sin distinguir la construcción de conocimiento como una función propia.',
    source_reference: 'Guía oficial, página 12, código 2.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-tc-005',
    topic_id: 'cd-2-2-2-definicion-de-ticcad',
    prompt: 'Relaciona cada actividad con la función de TICCAD que representa.\n\n1. Consultar materiales de un curso en línea\n2. Participar en un foro de discusión con compañeros\n3. Construir, entre varias personas, un documento con conclusiones propias\n\na. comunicación\nb. información\nc. conocimiento',
    options: ['1b, 2a, 3c', '1a, 2c, 3b', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation: 'Consultar materiales corresponde a información (b); participar en un foro corresponde a comunicación (a); construir un documento con conclusiones propias corresponde a conocimiento (c).',
    common_error: 'Confundir la función de conocimiento con la de comunicación cuando ambas ocurren en un espacio colaborativo.',
    source_reference: 'Guía oficial, página 12, código 2.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-fh-001',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Un equipo necesita comunicarse en tiempo real por audio y video, con integrantes en distintas ciudades. ¿Qué función de herramienta digital resuelve esa necesidad?',
    options: [
      'procesamiento y almacenamiento colaborativo de documentos',
      'videoconferencia',
      'evaluación gamificada'
    ],
    correct_option_index: 1,
    explanation: 'La necesidad de comunicación en tiempo real con audio y video corresponde a la función de videoconferencia.',
    common_error: 'Elegir una función de colaboración documental cuando la necesidad real es de comunicación en tiempo real.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-fh-002',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Una herramienta que permite construir páginas web sencillas sin necesidad de programar cumple la función de _______.',
    options: ['diseño gráfico', 'creación de sitios web', 'evaluación gamificada'],
    correct_option_index: 1,
    explanation: 'Construir páginas web sin programar corresponde a la función de creación de sitios web, distinta del diseño gráfico o de la evaluación gamificada.',
    common_error: 'Confundir la creación de sitios web con el diseño gráfico solo porque ambas implican elementos visuales.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-fh-003',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Un docente quiere aplicar un cuestionario donde el grupo compita en tiempo real por puntos, viendo los resultados al instante. ¿Qué función necesita?',
    options: [
      'evaluación gamificada',
      'presentación interactiva',
      'procesamiento y almacenamiento colaborativo de documentos'
    ],
    correct_option_index: 0,
    explanation: 'Aplicar cuestionarios con mecánicas de juego y resultados en tiempo real corresponde a la función de evaluación gamificada.',
    common_error: 'Confundir la evaluación gamificada con una presentación interactiva solo porque ambas pueden mostrarse en pantalla durante una clase.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-fh-004',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Varias personas necesitan editar, al mismo tiempo y desde distintos dispositivos, un mismo documento de texto con un reporte compartido. Un compañero sugiere resolverlo con una herramienta de videoconferencia. ¿Por qué esa sugerencia no resuelve la necesidad principal?',
    options: [
      'porque la videoconferencia permite comunicarse en tiempo real, pero no editar de forma simultánea un documento compartido',
      'porque la videoconferencia solo funciona con dos personas conectadas al mismo tiempo',
      'porque la videoconferencia no permite que las personas se vean entre sí durante la edición'
    ],
    correct_option_index: 0,
    explanation: 'La necesidad central es editar un documento de forma colaborativa y simultánea, lo cual corresponde a la función de procesamiento y almacenamiento colaborativo de documentos, no a la comunicación en tiempo real que ofrece la videoconferencia.',
    common_error: 'Elegir una herramienta por permitir "trabajar en equipo a distancia" en general, sin distinguir la función específica que la necesidad requiere.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-fh-005',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Relaciona cada necesidad con la función de herramienta digital que la resuelve.\n\n1. Mostrar contenido visual con navegación no lineal entre secciones\n2. Editar un documento de texto de forma simultánea entre varias personas\n3. Aplicar un cuestionario con mecánicas de juego y resultados en tiempo real\n\na. evaluación gamificada\nb. presentación interactiva\nc. procesamiento y almacenamiento colaborativo de documentos',
    options: ['1b, 2c, 3a', '1c, 2a, 3b', '1a, 2b, 3c'],
    correct_option_index: 0,
    explanation: 'Mostrar contenido con navegación no lineal corresponde a presentación interactiva (b); editar un documento simultáneamente corresponde a procesamiento y almacenamiento colaborativo (c); aplicar un cuestionario con mecánicas de juego corresponde a evaluación gamificada (a).',
    common_error: 'Confundir la presentación interactiva con la evaluación gamificada porque ambas pueden usarse frente a un grupo en tiempo real.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-uh-001',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Un equipo necesita almacenar y organizar archivos en la nube para que cualquier integrante los consulte desde distintos dispositivos. ¿Cuál de las siguientes herramientas cumple mejor esa necesidad?',
    options: ['Kahoot', 'Meet', 'Drive'],
    correct_option_index: 2,
    explanation: 'Drive es la herramienta orientada al almacenamiento en la nube y la organización de archivos; Kahoot es para evaluación gamificada y Meet para videoconferencia.',
    common_error: 'Elegir una herramienta de videoconferencia o evaluación cuando la necesidad es almacenar y organizar archivos.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-uh-002',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Una presentación con navegación de acercamiento entre secciones, en lugar de diapositivas lineales, corresponde a la herramienta _______.',
    options: ['Sites', 'Prezi', 'Canva'],
    correct_option_index: 1,
    explanation: 'Prezi se distingue por su navegación no lineal con acercamiento entre secciones; Sites sirve para crear sitios web y Canva para diseño gráfico.',
    common_error: 'Confundir Prezi con cualquier otra herramienta de presentaciones, sin distinguir su característica particular de navegación por acercamiento.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-uh-003',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Un equipo necesita editar, al mismo tiempo y desde distintos dispositivos, un documento de texto con el reporte final de un proyecto. ¿Qué herramienta, entre las nueve mencionadas, es más adecuada?',
    options: ['Drive', 'Docs', 'Sites'],
    correct_option_index: 1,
    explanation: 'Docs permite la edición colaborativa de un documento de texto en línea entre varias personas de forma simultánea; Drive almacena y organiza archivos, pero no está orientado a la edición simultánea de texto, y Sites sirve para crear sitios web.',
    common_error: 'Confundir Drive con Docs porque ambas herramientas suelen usarse juntas para archivos compartidos.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-uh-004',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Un equipo necesita crear una infografía animada con elementos interactivos que el público pueda explorar haciendo clic. ¿Qué herramienta, entre las nueve mencionadas, es más adecuada?',
    options: ['Canva', 'Genially', 'Zoom'],
    correct_option_index: 1,
    explanation: 'Genially está orientada a contenido interactivo animado, como infografías o presentaciones con elementos explorables; Canva se enfoca en diseño gráfico estático y Zoom es una herramienta de videoconferencia.',
    common_error: 'Confundir Genially con Canva por ser ambas herramientas visuales, sin distinguir que Genially está orientada a la interactividad y la animación.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-uh-005',
    topic_id: 'cd-2-2-3-funcion-y-uso-de-herramientas-digitales',
    prompt: 'Relaciona cada herramienta con su función principal.\n\n1. Kahoot\n2. Sites\n3. Meet\n\na. videoconferencia\nb. evaluación gamificada\nc. creación de sitios web',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation: 'Kahoot cumple la función de evaluación gamificada (b); Sites permite crear sitios web sencillos (c); Meet es una herramienta de videoconferencia (a).',
    common_error: 'Confundir Meet con una herramienta de evaluación por asociarse también a sesiones grupales en tiempo real.',
    source_reference: 'Guía oficial, página 12, código 2.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-mi-001',
    topic_id: 'cd-2-2-4-metodos-de-investigacion-digital',
    prompt: 'Un investigador observa, durante varios meses, las publicaciones y normas de comportamiento de una comunidad de aficionados a un videojuego dentro de un foro en línea, sin intervenir. ¿Qué método de investigación digital describe mejor esta situación?',
    options: ['grupo de enfoque online', 'ciberetnografía', 'análisis de redes sociales'],
    correct_option_index: 1,
    explanation: 'Observar de forma prolongada las prácticas y normas culturales de una comunidad digital corresponde a la ciberetnografía; el grupo de enfoque implica una discusión guiada, y el análisis de redes sociales mide la estructura de conexiones, no el significado cultural de las prácticas.',
    common_error: 'Confundir la observación prolongada de prácticas culturales con el análisis de la estructura de conexiones entre usuarios.',
    source_reference: 'Guía oficial, página 12, código 2.2.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-mi-002',
    topic_id: 'cd-2-2-4-metodos-de-investigacion-digital',
    prompt: 'Contar cuántas veces cada usuario de un foro responde a otros usuarios, para identificar quién ocupa el centro de la conversación, es un ejemplo de _______.',
    options: [
      'grupo de enfoque online',
      'análisis de redes sociales',
      'análisis de contenido en línea'
    ],
    correct_option_index: 1,
    explanation: 'Medir la frecuencia y estructura de las interacciones entre usuarios corresponde al análisis de redes sociales, distinto de examinar el contenido de las publicaciones o de reunir a un grupo en una discusión guiada.',
    common_error: 'Confundir el análisis de redes sociales con el análisis de contenido en línea por trabajar ambos con publicaciones de un foro.',
    source_reference: 'Guía oficial, página 12, código 2.2.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-mi-003',
    topic_id: 'cd-2-2-4-metodos-de-investigacion-digital',
    prompt: 'Una empresa reúne a ocho usuarios en una videollamada para conversar de forma guiada sobre su experiencia con una aplicación, permitiendo que discutan entre ellos. ¿Por qué esto no es lo mismo que aplicar una encuesta en línea?',
    options: [
      'porque la encuesta también requiere una videollamada',
      'porque el grupo de enfoque es una discusión guiada y conversacional entre participantes, mientras que la encuesta recopila respuestas individuales y cerradas sin discusión entre ellos',
      'porque el grupo de enfoque no permite conocer la opinión de las personas participantes'
    ],
    correct_option_index: 1,
    explanation: 'El grupo de enfoque online es una discusión guiada entre participantes que interactúan entre sí, mientras que una encuesta recopila respuestas individuales sin que las personas dialoguen entre ellas.',
    common_error: 'Tratar cualquier recolección de opiniones en línea como equivalente, sin distinguir la discusión conversacional del grupo de enfoque frente a las respuestas cerradas de una encuesta.',
    source_reference: 'Guía oficial, página 12, código 2.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-mi-004',
    topic_id: 'cd-2-2-4-metodos-de-investigacion-digital',
    prompt: 'Un investigador revisa sistemáticamente miles de comentarios publicados en una red social para identificar qué temas se repiten con más frecuencia. ¿Qué método de investigación digital está aplicando?',
    options: ['análisis de contenido en línea', 'grupo de enfoque online', 'ciberetnografía'],
    correct_option_index: 0,
    explanation: 'Examinar sistemáticamente publicaciones o comentarios para identificar patrones y temas recurrentes corresponde al análisis de contenido en línea, distinto de reunir a un grupo en discusión guiada o de observar prolongadamente las prácticas de una comunidad.',
    common_error: 'Confundir el análisis sistemático de publicaciones con la observación prolongada de prácticas culturales propia de la ciberetnografía.',
    source_reference: 'Guía oficial, página 12, código 2.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-mi-005',
    topic_id: 'cd-2-2-4-metodos-de-investigacion-digital',
    prompt: 'Relaciona cada situación con el método de investigación digital que describe.\n\n1. Observar durante meses las prácticas culturales de una comunidad en un foro\n2. Reunir a un grupo de participantes en una discusión guiada a distancia\n3. Medir la estructura de conexiones entre los integrantes de una red\n\na. grupo de enfoque online\nb. análisis de redes sociales\nc. ciberetnografía',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation: 'Observar prolongadamente las prácticas de una comunidad corresponde a la ciberetnografía (c); reunir a un grupo en discusión guiada corresponde al grupo de enfoque online (a); medir la estructura de conexiones corresponde al análisis de redes sociales (b).',
    common_error: 'Confundir la ciberetnografía con el análisis de redes sociales por estudiar ambas comunidades digitales, sin distinguir el enfoque cultural del estructural.',
    source_reference: 'Guía oficial, página 12, código 2.2.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-hc-001',
    topic_id: 'cd-2-3-1-herramientas-de-hoja-de-calculo',
    prompt: 'Una hoja de cálculo tiene, en las celdas A1 a A5, los gastos diarios de una semana. ¿Qué fórmula obtiene el gasto total de esos días?',
    options: ['=PROMEDIO(A1:A5)', '=SUMA(A1:A5)', '=CONTAR(A1:A5)'],
    correct_option_index: 1,
    explanation: '=SUMA(A1:A5) suma todos los valores del rango indicado, dando el gasto total. =PROMEDIO calcula la media de esos valores, no su total, y =CONTAR solo cuenta cuántas celdas del rango tienen un valor numérico.',
    common_error: 'Confundir la suma total de un rango con su promedio, usando =PROMEDIO cuando se pide un total.',
    source_reference: 'Guía oficial, página 13, código 2.3.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-hc-002',
    topic_id: 'cd-2-3-1-herramientas-de-hoja-de-calculo',
    prompt: 'En el rango de celdas B1:B12 se registran las temperaturas máximas de cada mes del año. Para saber cuál fue la temperatura más alta registrada, se debe usar la fórmula _______.',
    options: ['=MIN(B1:B12)', '=CONTAR(B1:B12)', '=MAX(B1:B12)'],
    correct_option_index: 2,
    explanation: '=MAX(rango) devuelve el valor más alto del rango indicado. =MIN devolvería el valor más bajo, y =CONTAR solo indicaría cuántas celdas tienen un valor numérico, no cuál es el mayor.',
    common_error: 'Confundir =MAX con =MIN al buscar el valor más alto de un rango.',
    source_reference: 'Guía oficial, página 13, código 2.3.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-hc-003',
    topic_id: 'cd-2-3-1-herramientas-de-hoja-de-calculo',
    prompt: 'Una fórmula en la celda C2 usa la referencia $A$1 para multiplicar un precio por un impuesto fijo. Al copiar esa fórmula hacia las celdas C3 y C4, ¿qué ocurre con la referencia $A$1?',
    options: [
      'cambia automáticamente a $A$2 y $A$3, siguiendo la fila de cada copia',
      'permanece igual en cada copia, sin cambiar de celda',
      'se elimina de la fórmula al copiarla'
    ],
    correct_option_index: 1,
    explanation: 'El signo $ fija la fila y la columna de una referencia; al copiar la fórmula, $A$1 permanece igual en cada copia, a diferencia de una referencia sin $, que sí cambia según la nueva posición.',
    common_error: 'Asumir que todas las referencias cambian al copiar una fórmula, sin distinguir las referencias fijadas con $.',
    source_reference: 'Guía oficial, página 13, código 2.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-hc-004',
    topic_id: 'cd-2-3-1-herramientas-de-hoja-de-calculo',
    prompt: 'Relaciona cada operación con la fórmula que la realiza.\n\n1. Contar celdas con valor numérico\n2. Calcular el valor más bajo de un rango\n3. Calcular la media aritmética de un rango\n\na. =PROMEDIO(rango)\nb. =CONTAR(rango)\nc. =MIN(rango)',
    options: ['1a, 2b, 3c', '1b, 2c, 3a', '1c, 2a, 3b'],
    correct_option_index: 1,
    explanation: 'Contar celdas con valor numérico corresponde a =CONTAR (b); calcular el valor más bajo corresponde a =MIN (c); calcular la media aritmética corresponde a =PROMEDIO (a).',
    common_error: 'Confundir =CONTAR, que cuenta celdas con valor numérico, con =SUMA o =PROMEDIO, que operan sobre esos valores.',
    source_reference: 'Guía oficial, página 13, código 2.3.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-hc-005',
    topic_id: 'cd-2-3-1-herramientas-de-hoja-de-calculo',
    prompt: 'Una hoja de cálculo tiene, en el rango D1:D8, las calificaciones de ocho estudiantes en un examen. Un profesor quiere saber cuántos estudiantes fueron evaluados, sin importar la calificación obtenida. ¿Qué fórmula usarías?',
    options: ['=CONTAR(D1:D8)', '=SUMA(D1:D8)', '=PROMEDIO(D1:D8)'],
    correct_option_index: 0,
    explanation: '=CONTAR(rango) cuenta cuántas celdas del rango tienen un valor numérico capturado, sin importar cuál sea ese valor, a diferencia de =SUMA o =PROMEDIO, que operan sobre las calificaciones mismas.',
    common_error: 'Usar =SUMA o =PROMEDIO cuando lo que se pide es solo el número de valores capturados, no una operación sobre ellos.',
    source_reference: 'Guía oficial, página 13, código 2.3.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pt-001',
    topic_id: 'cd-2-3-2-herramientas-de-procesamiento-de-texto',
    prompt: 'Un documento necesita una cuadrícula de cuatro columnas y seis filas para comparar las características de cuatro productos. ¿Qué herramienta del procesador de texto usarías?',
    options: ['ajustar márgenes', 'dividir texto en columnas', 'insertar tabla'],
    correct_option_index: 2,
    explanation: 'Insertar tabla crea una cuadrícula de filas y columnas para organizar y comparar datos, a diferencia de ajustar márgenes (que cambia el espacio alrededor del texto) o dividir texto en columnas (que reparte el flujo del texto, no crea celdas).',
    common_error: 'Confundir insertar una tabla con dividir el texto en columnas, cuando lo que se necesita es comparar datos en celdas, no repartir un párrafo.',
    source_reference: 'Guía oficial, página 13, código 2.3.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-pt-002',
    topic_id: 'cd-2-3-2-herramientas-de-procesamiento-de-texto',
    prompt: 'Antes de imprimir un documento para engargolarlo, se necesita dejar más espacio en blanco en el borde izquierdo de cada hoja. Para lograrlo, se deben ajustar los _______ del documento.',
    options: ['columnas', 'márgenes', 'tablas'],
    correct_option_index: 1,
    explanation: 'Los márgenes definen el espacio en blanco entre el borde de la hoja y el texto en cada lado de la página; ajustarlos deja más espacio en el borde indicado sin cambiar el tamaño del texto.',
    common_error: 'Confundir el ajuste de márgenes con dividir el texto en columnas, que reparte el flujo del texto en lugar de cambiar el espacio alrededor de la página.',
    source_reference: 'Guía oficial, página 13, código 2.3.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pt-003',
    topic_id: 'cd-2-3-2-herramientas-de-procesamiento-de-texto',
    prompt: 'Un boletín de una sola página necesita que el texto se lea en dos franjas verticales, como en un periódico, sin usar tablas ni cuadros de texto. ¿Qué herramienta usarías?',
    options: ['insertar tabla', 'ajustar márgenes', 'dividir texto en columnas'],
    correct_option_index: 2,
    explanation: 'Dividir texto en columnas reparte el flujo del texto de una sección en dos o más franjas verticales, como en un periódico, sin necesidad de crear una tabla ni cambiar los márgenes de la página.',
    common_error: 'Intentar lograr columnas de texto insertando una tabla, en lugar de usar la herramienta de columnas que reparte el flujo del texto.',
    source_reference: 'Guía oficial, página 13, código 2.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pt-004',
    topic_id: 'cd-2-3-2-herramientas-de-procesamiento-de-texto',
    prompt: 'Un documento ya está dividido en dos columnas de texto. El autor también quiere reducir el espacio en blanco alrededor de todo el texto de la página para que quepa más contenido. ¿Qué debe ajustar, además de las columnas ya aplicadas?',
    options: ['los márgenes de la página', 'una nueva tabla', 'el número de columnas'],
    correct_option_index: 0,
    explanation: 'Reducir el espacio en blanco alrededor de todo el texto de la página corresponde a ajustar los márgenes; cambiar el número de columnas solo modificaría cómo se reparte el texto, no el espacio alrededor de la página completa.',
    common_error: 'Asumir que cambiar el número de columnas también reduce el espacio en blanco alrededor de la página completa.',
    source_reference: 'Guía oficial, página 13, código 2.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pt-005',
    topic_id: 'cd-2-3-2-herramientas-de-procesamiento-de-texto',
    prompt: 'Relaciona cada necesidad con la herramienta del procesador de texto que la resuelve.\n\n1. Comparar precios de tres proveedores en filas y columnas\n2. Dejar más espacio en blanco en el borde de la hoja\n3. Leer un texto en dos franjas verticales, como un periódico\n\na. columnas\nb. márgenes\nc. tabla',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation: 'Comparar precios en filas y columnas corresponde a una tabla (c); dejar más espacio en el borde de la hoja corresponde a los márgenes (b); leer el texto en franjas verticales corresponde a columnas (a).',
    common_error: 'Confundir dividir texto en columnas con insertar una tabla, ya que ambas organizan contenido en varias franjas o celdas.',
    source_reference: 'Guía oficial, página 13, código 2.3.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pe-001',
    topic_id: 'cd-2-3-3-herramientas-de-presentaciones-electronicas',
    prompt: 'Una presentación de ventas trimestrales necesita mostrar visualmente cómo cambiaron las ventas mes a mes, sin listar cada cifra exacta. ¿Qué herramienta usarías?',
    options: ['insertar una tabla', 'insertar un gráfico', 'insertar un cuestionario'],
    correct_option_index: 1,
    explanation: 'Un gráfico representa visualmente una tendencia o comparación entre datos, útil para mostrar cómo cambian las ventas a lo largo del tiempo, sin necesidad de listar cada cifra exacta como haría una tabla.',
    common_error: 'Usar una tabla cuando lo que se necesita es mostrar visualmente una tendencia, no exhibir cada valor exacto.',
    source_reference: 'Guía oficial, página 13, código 2.3.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-pe-002',
    topic_id: 'cd-2-3-3-herramientas-de-presentaciones-electronicas',
    prompt: 'Al final de una presentación, el ponente quiere preguntar a la audiencia en vivo cuál fue su tema favorito y ver los resultados de inmediato en pantalla. Para lograrlo debe insertar un _______.',
    options: ['gráfico', 'cuestionario', 'WordArt'],
    correct_option_index: 1,
    explanation: 'Un cuestionario inserta una pregunta interactiva dentro de la presentación, para que la audiencia responda en el momento y ver los resultados en vivo, a diferencia de un gráfico o un WordArt, que no recogen respuestas.',
    common_error: 'Confundir un cuestionario interactivo con un gráfico, cuando lo que se necesita es recoger respuestas de la audiencia en vivo, no representar datos ya existentes.',
    source_reference: 'Guía oficial, página 13, código 2.3.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pe-003',
    topic_id: 'cd-2-3-3-herramientas-de-presentaciones-electronicas',
    prompt: 'La diapositiva de portada de una presentación necesita un título corto con un estilo visual llamativo, con color, contorno y sombra. ¿Qué herramienta usarías?',
    options: ['insertar una tabla', 'insertar un gráfico', 'insertar una imagen de WordArt'],
    correct_option_index: 2,
    explanation: 'Una imagen de WordArt aplica estilos visuales llamativos, como color, contorno o sombra, a un texto corto usado como elemento decorativo o de título, no para organizar datos como una tabla o un gráfico.',
    common_error: 'Intentar lograr un título decorativo con una tabla o un gráfico, herramientas pensadas para organizar o representar datos, no para decorar texto.',
    source_reference: 'Guía oficial, página 13, código 2.3.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pe-004',
    topic_id: 'cd-2-3-3-herramientas-de-presentaciones-electronicas',
    prompt: 'Una diapositiva debe mostrar los precios exactos de cinco productos, sin destacar ninguna tendencia. ¿Qué herramienta es más adecuada, entre insertar un gráfico y insertar una tabla?',
    options: [
      'insertar un gráfico, porque siempre es más visual que una tabla',
      'insertar una tabla, porque exhibe los valores exactos organizados en filas y columnas',
      'insertar un cuestionario, porque permite capturar los precios en vivo'
    ],
    correct_option_index: 1,
    explanation: 'Una tabla exhibe los valores exactos organizados en filas y columnas, adecuada cuando se necesita mostrar cifras precisas y no una tendencia visual, que es lo que representa mejor un gráfico.',
    common_error: 'Asumir que un gráfico siempre es preferible a una tabla, sin considerar que se pidan valores exactos en lugar de una tendencia.',
    source_reference: 'Guía oficial, página 13, código 2.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-pe-005',
    topic_id: 'cd-2-3-3-herramientas-de-presentaciones-electronicas',
    prompt: 'Relaciona cada necesidad con la herramienta de presentaciones que la resuelve.\n\n1. Mostrar una tendencia de ventas a lo largo del año\n2. Recoger la opinión de la audiencia en vivo\n3. Decorar un título corto con un estilo visual llamativo\n\na. cuestionario\nb. WordArt\nc. gráfico',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation: 'Mostrar una tendencia corresponde a un gráfico (c); recoger la opinión de la audiencia en vivo corresponde a un cuestionario (a); decorar un título corto corresponde a una imagen de WordArt (b).',
    common_error: 'Confundir un gráfico con un cuestionario cuando ambos aparecen dentro de una misma diapositiva interactiva.',
    source_reference: 'Guía oficial, página 13, código 2.3.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ma-001',
    topic_id: 'cd-2-3-4-fases-del-metodo-addie',
    prompt: 'Un docente aplica una encuesta a sus estudiantes para identificar qué temas de un curso en línea les resultan más difíciles, antes de producir cualquier material. ¿A qué fase del método ADDIE corresponde esa acción?',
    options: ['diseñar', 'evaluar', 'analizar'],
    correct_option_index: 2,
    explanation: 'Analizar identifica la necesidad, la audiencia y los objetivos de aprendizaje antes de crear el contenido; aplicar una encuesta previa para saber qué temas dominan menos los estudiantes corresponde a esta primera fase.',
    common_error: 'Confundir analizar con diseñar, cuando la acción todavía busca identificar la necesidad y no plantea aún la estructura del contenido.',
    source_reference: 'Guía oficial, página 13, código 2.3.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-ma-002',
    topic_id: 'cd-2-3-4-fases-del-metodo-addie',
    prompt: 'Un equipo escribe el guion y el storyboard de un video educativo antes de grabarlo. Esa acción corresponde a la fase de _______.',
    options: ['desarrollar', 'diseñar', 'implementar'],
    correct_option_index: 1,
    explanation: 'Diseñar planea la estructura del contenido, como el guion o el storyboard, antes de producir cualquier material; escribir el guion antes de grabar corresponde a esta fase.',
    common_error: 'Confundir diseñar con desarrollar, adelantando la fase de producción antes de que el contenido esté planeado.',
    source_reference: 'Guía oficial, página 13, código 2.3.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ma-003',
    topic_id: 'cd-2-3-4-fases-del-metodo-addie',
    prompt: 'Un equipo graba y edita el video educativo que ya había planeado en un guion. ¿A qué fase corresponde grabar y editar el video?',
    options: ['diseñar', 'desarrollar', 'implementar'],
    correct_option_index: 1,
    explanation: 'Desarrollar produce el material planeado en la fase de diseño: graba el video, escribe el texto o programa la actividad. Grabar y editar el video, ya con el guion listo, corresponde a esta fase.',
    common_error: 'Confundir desarrollar (producir el material ya planeado) con implementar (ponerlo en marcha con la audiencia real).',
    source_reference: 'Guía oficial, página 13, código 2.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ma-004',
    topic_id: 'cd-2-3-4-fases-del-metodo-addie',
    prompt: 'Después de aplicar un curso en línea con estudiantes reales, el equipo recoge sus calificaciones finales para saber si el curso funcionó. ¿A qué fase corresponde recoger esos resultados?',
    options: ['implementar', 'evaluar', 'analizar'],
    correct_option_index: 1,
    explanation: 'Evaluar mide si el contenido logró su objetivo, recogiendo retroalimentación o resultados de aprendizaje una vez aplicado; recoger las calificaciones finales corresponde a esta última fase.',
    common_error: 'Confundir evaluar con implementar, cuando la acción descrita ya ocurre después de que el curso se aplicó con estudiantes reales.',
    source_reference: 'Guía oficial, página 13, código 2.3.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ma-005',
    topic_id: 'cd-2-3-4-fases-del-metodo-addie',
    prompt: 'Ordene las fases del método ADDIE en la secuencia correcta para crear un contenido digital.\n\n1. Diseñar\n2. Desarrollar\n3. Analizar\n4. Evaluar\n5. Implementar',
    options: ['3, 1, 2, 5, 4', '1, 3, 2, 4, 5', '3, 2, 1, 5, 4'],
    correct_option_index: 0,
    explanation: 'El orden correcto es analizar (3), diseñar (1), desarrollar (2), implementar (5) y evaluar (4): cada fase depende de que la anterior ya se haya completado, desde identificar la necesidad hasta medir el resultado final.',
    common_error: 'Invertir diseñar y desarrollar, o colocar evaluar antes de implementar, sin respetar que cada fase depende de la anterior.',
    source_reference: 'Guía oficial, página 13, código 2.3.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ca-001',
    topic_id: 'cd-2-3-5-campos-de-aplicacion-de-herramientas-tecnologicas',
    prompt: 'Un refrigerador doméstico avisa al celular de su dueño, a través de internet, cuando detecta que la leche se está por terminar. ¿A qué campo de aplicación tecnológica corresponde ese comportamiento?',
    options: ['ciencia de datos', 'internet de las cosas', 'inteligencia artificial'],
    correct_option_index: 1,
    explanation: 'El internet de las cosas conecta objetos físicos cotidianos a internet para que envíen o reciban datos y actúen de forma automática; un refrigerador que avisa por internet cuando falta un producto es un ejemplo de esta conexión.',
    common_error: 'Confundir el internet de las cosas con la inteligencia artificial cuando un objeto físico conectado solo envía información, sin razonar sobre ella.',
    source_reference: 'Guía oficial, página 13, código 2.3.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cd-ca-002',
    topic_id: 'cd-2-3-5-campos-de-aplicacion-de-herramientas-tecnologicas',
    prompt: 'Una aplicación de streaming recomienda series a una persona según lo que ha visto antes, imitando un razonamiento sobre sus gustos. Ese comportamiento corresponde al campo de la _______.',
    options: ['inteligencia artificial', 'ciencia de datos', 'internet de las cosas'],
    correct_option_index: 0,
    explanation: 'La inteligencia artificial realiza tareas que normalmente requieren razonamiento humano, como recomendar contenido según el comportamiento de una persona; la recomendación imitando ese razonamiento corresponde a este campo.',
    common_error: 'Confundir una recomendación basada en razonamiento sobre el comportamiento de una persona con un simple análisis de datos históricos.',
    source_reference: 'Guía oficial, página 13, código 2.3.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ca-003',
    topic_id: 'cd-2-3-5-campos-de-aplicacion-de-herramientas-tecnologicas',
    prompt: 'Una cadena de tiendas analiza tres años de ventas históricas para predecir cuánto inventario necesitará el próximo mes. ¿A qué campo corresponde ese análisis?',
    options: ['internet de las cosas', 'inteligencia artificial', 'ciencia de datos'],
    correct_option_index: 2,
    explanation: 'La ciencia de datos analiza grandes volúmenes de datos ya existentes para encontrar patrones y apoyar decisiones; predecir el inventario necesario a partir de ventas históricas corresponde a este campo.',
    common_error: 'Confundir el análisis de un gran volumen de datos históricos con la inteligencia artificial, sin que exista un sistema que razone o perciba en tiempo real.',
    source_reference: 'Guía oficial, página 13, código 2.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ca-004',
    topic_id: 'cd-2-3-5-campos-de-aplicacion-de-herramientas-tecnologicas',
    prompt: 'Una pulsera conectada a internet registra automáticamente los pasos caminados y la frecuencia cardiaca de quien la usa, sin razonar sobre esos datos. ¿A qué campo corresponde ese objeto conectado?',
    options: ['inteligencia artificial', 'internet de las cosas', 'ciencia de datos'],
    correct_option_index: 1,
    explanation: 'El internet de las cosas describe objetos físicos cotidianos conectados a la red que envían o reciben datos; una pulsera que registra y transmite información sin razonar sobre ella corresponde a este campo.',
    common_error: 'Asumir que cualquier dispositivo conectado que registra datos personales es inteligencia artificial, sin que exista un razonamiento sobre esos datos.',
    source_reference: 'Guía oficial, página 13, código 2.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cd-ca-005',
    topic_id: 'cd-2-3-5-campos-de-aplicacion-de-herramientas-tecnologicas',
    prompt: 'Relaciona cada ejemplo con el campo de aplicación tecnológica que representa.\n\n1. Un termostato que ajusta la temperatura de una casa de forma automática\n2. Un chatbot que responde preguntas imitando una conversación humana\n3. Un análisis de ventas históricas para predecir la demanda futura\n\na. ciencia de datos\nb. internet de las cosas\nc. inteligencia artificial',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation: 'Un termostato automático corresponde al internet de las cosas (b); un chatbot que imita una conversación corresponde a la inteligencia artificial (c); predecir la demanda a partir de ventas históricas corresponde a la ciencia de datos (a).',
    common_error: 'Confundir el internet de las cosas con la inteligencia artificial cuando un objeto conectado actúa de forma automática sin razonar sobre los datos que recibe.',
    source_reference: 'Guía oficial, página 13, código 2.3.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
