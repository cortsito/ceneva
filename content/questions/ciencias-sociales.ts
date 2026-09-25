import type { question } from './types'

export const ciencias_sociales_questions: question[] = [
  {
    id: 'cs-nmv-001',
    topic_id: 'cs-7-1-1-necesidades-materiales-vitales-y-no-vitales',
    prompt:
      'Un excursionista se pierde varios días en una zona montañosa fría. Le preocupa no tener agua potable ni ropa de abrigo suficiente, mientras que apenas piensa en que dejó su reproductor de música en casa. ¿Por qué el agua potable y la ropa de abrigo son necesidades vitales en esta situación?',
    options: [
      'porque su ausencia prolongada pone en riesgo su supervivencia',
      'porque son los objetos que más valora el excursionista en ese momento',
      'porque cuestan más reponer que un reproductor de música'
    ],
    correct_option_index: 0,
    explanation:
      'Una necesidad es vital cuando su ausencia arriesga la supervivencia biológica de la persona; el frío sin abrigo y la falta de agua potable ponen en riesgo la vida del excursionista, a diferencia del reproductor de música.',
    common_error:
      'Clasificar como vital lo que la persona más valora o extraña en el momento, en vez de evaluar si su ausencia realmente arriesga la supervivencia.',
    source_reference: 'Guía oficial, página 19, código 7.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-nmv-002',
    topic_id: 'cs-7-1-1-necesidades-materiales-vitales-y-no-vitales',
    prompt:
      'Una necesidad material cuya ausencia mejora o reduce el bienestar y la comodidad de una persona, sin poner en riesgo su supervivencia biológica, se clasifica como necesidad _______.',
    options: ['vital', 'no vital', 'colectiva'],
    correct_option_index: 1,
    explanation:
      'Una necesidad no vital afecta el bienestar o la comodidad, pero su ausencia no arriesga la supervivencia de la persona, a diferencia de una necesidad vital.',
    common_error:
      'Suponer que "no vital" equivale a "sin ningún valor", cuando en realidad describe únicamente que su ausencia no pone en riesgo la vida.',
    source_reference: 'Guía oficial, página 19, código 7.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-nmv-003',
    topic_id: 'cs-7-1-1-necesidades-materiales-vitales-y-no-vitales',
    prompt:
      'Un joven ahorra durante meses para comprar el modelo más reciente de un teléfono celular, muy costoso, mientras sigue usando sin problema su teléfono anterior, que funciona bien. ¿El teléfono nuevo es una necesidad vital o no vital?',
    options: [
      'no vital, porque su ausencia no pone en riesgo la supervivencia del joven, aunque sea costoso y muy deseado',
      'vital, porque su alto costo indica que se trata de un bien indispensable',
      'vital, porque comunicarse por teléfono es indispensable para la vida moderna'
    ],
    correct_option_index: 0,
    explanation:
      'El criterio para clasificar una necesidad no es su precio ni cuánto se desea, sino si su ausencia arriesga la supervivencia; el joven ya tiene un teléfono funcional, así que el nuevo modelo no es vital.',
    common_error:
      'Confundir el costo elevado de un bien con que sea vital, sin verificar si su ausencia realmente pone en riesgo la supervivencia de la persona.',
    source_reference: 'Guía oficial, página 19, código 7.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-nmv-004',
    topic_id: 'cs-7-1-1-necesidades-materiales-vitales-y-no-vitales',
    prompt:
      'Una persona con una alergia alimentaria grave debe evitar por completo cierto ingrediente, porque consumirlo por accidente podría provocarle una reacción capaz de poner en riesgo su vida; esa misma persona pospone, sin ninguna urgencia, la remodelación estética de su cocina. ¿Por qué evitar el ingrediente es una necesidad vital y remodelar la cocina no lo es?',
    options: [
      'porque evitar el ingrediente previene un riesgo directo a la supervivencia, mientras que la remodelación estética no afecta la supervivencia de nadie',
      'porque remodelar una cocina siempre cuesta más dinero que evitar un ingrediente',
      'porque las alergias son más frecuentes que los proyectos de remodelación'
    ],
    correct_option_index: 0,
    explanation:
      'El criterio de clasificación es el riesgo a la supervivencia: evitar un ingrediente que puede provocar una reacción grave protege la vida de la persona, mientras que una remodelación estética solo afecta la comodidad o apariencia del espacio.',
    common_error:
      'Evaluar la necesidad por su costo o frecuencia en vez de por si su ausencia realmente arriesga la supervivencia biológica de la persona.',
    source_reference: 'Guía oficial, página 19, código 7.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-nmv-005',
    topic_id: 'cs-7-1-1-necesidades-materiales-vitales-y-no-vitales',
    prompt:
      'Relaciona cada situación con el tipo de necesidad material que representa.\n\n1. Una persona hospitalizada requiere con urgencia una transfusión de sangre para sobrevivir a una hemorragia\n2. Una familia sustituye su refrigerador porque el modelo actual no combina con el resto de su cocina, aunque el anterior funciona bien\n3. Un grupo de senderistas atrapados por una tormenta de nieve necesita conseguir refugio antes de que baje más la temperatura\n4. Un aficionado al cine compra una pantalla más grande para mejorar su experiencia al ver películas en casa\n\na. Necesidad no vital\nb. Necesidad vital',
    options: ['1b, 2a, 3b, 4a', '1a, 2b, 3a, 4b', '1b, 2b, 3a, 4a'],
    correct_option_index: 0,
    explanation:
      'La transfusión de sangre y el refugio ante una tormenta de nieve responden a un riesgo directo de supervivencia, así que son necesidades vitales (b); sustituir un refrigerador funcional por estética y comprar una pantalla más grande solo afectan el bienestar o la comodidad, sin poner en riesgo la vida, así que son necesidades no vitales (a).',
    common_error:
      'Clasificar como vital cualquier bien costoso o deseado, como el refrigerador nuevo o la pantalla grande, sin verificar si su ausencia realmente arriesga la supervivencia de alguien.',
    source_reference: 'Guía oficial, página 19, código 7.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-fpp-001',
    topic_id: 'cs-7-1-2-factores-de-procesos-de-produccion',
    prompt:
      'En una granja avícola, el terreno donde se ubican los galpones, el agua que reciben las aves y el alimento vegetal sin procesar que se les da provienen directamente de recursos naturales. ¿A qué factor de producción corresponden estos elementos?',
    options: ['tierra', 'capital', 'organización'],
    correct_option_index: 0,
    explanation:
      'Los recursos naturales usados como materia prima o espacio de producción, sin procesar, corresponden al factor tierra.',
    common_error:
      'Clasificar el terreno y los insumos naturales como capital solo por tratarse de bienes usados en la producción, sin notar que capital son bienes ya producidos, no recursos naturales sin procesar.',
    source_reference: 'Guía oficial, página 19, código 7.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-fpp-002',
    topic_id: 'cs-7-1-2-factores-de-procesos-de-produccion',
    prompt:
      'Los bienes ya producidos, como maquinaria, herramientas o vehículos, que se utilizan dentro de un proceso para producir otros bienes o servicios, corresponden al factor de producción llamado _______.',
    options: ['trabajo', 'capital', 'tierra'],
    correct_option_index: 1,
    explanation:
      'El capital son los bienes ya producidos —maquinaria, herramientas, vehículos— que se emplean para producir otros bienes o servicios, y no debe confundirse con el dinero ahorrado sin invertir.',
    common_error:
      'Confundir el capital con el dinero disponible de una empresa, en vez de reconocerlo como el bien productivo concreto comprado con ese dinero.',
    source_reference: 'Guía oficial, página 19, código 7.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-fpp-003',
    topic_id: 'cs-7-1-2-factores-de-procesos-de-produccion',
    prompt:
      'El dueño de una imprenta guarda en una cuenta bancaria el dinero que ha ahorrado durante años, sin haberlo usado todavía para comprar ninguna máquina ni herramienta. ¿Ese dinero ahorrado es, por sí solo, el factor de producción capital?',
    options: [
      'no, porque el dinero se vuelve capital solo cuando se convierte en un bien productivo usado en el proceso, no mientras permanece ahorrado',
      'sí, porque cualquier recurso financiero disponible para una empresa es capital',
      'sí, porque el dinero ahorrado puede usarse en cualquier momento para producir'
    ],
    correct_option_index: 0,
    explanation:
      'El capital como factor de producción es el bien productivo ya adquirido —una máquina, una herramienta—, no el dinero en sí; mientras el dinero permanezca ahorrado sin invertirse en un bien productivo, no funciona como capital dentro del proceso.',
    common_error:
      'Tratar cualquier suma de dinero disponible como si ya fuera el factor capital, sin distinguir entre el dinero ahorrado y el bien productivo en el que ese dinero podría convertirse.',
    source_reference: 'Guía oficial, página 19, código 7.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-fpp-004',
    topic_id: 'cs-7-1-2-factores-de-procesos-de-produccion',
    prompt:
      'En un taller de costura, una persona corta y cose las telas durante toda la jornada, mientras otra persona decide qué prendas fabricar cada temporada, contrata a quienes cosen y asume la pérdida si las prendas no se venden. ¿Qué factores de producción aporta cada una?',
    options: [
      'quien cose aporta trabajo; quien decide y asume el riesgo aporta organización',
      'ambas aportan trabajo, porque las dos participan activamente en el taller',
      'quien cose aporta organización; quien decide aporta trabajo, porque dirige la actividad'
    ],
    correct_option_index: 0,
    explanation:
      'El esfuerzo humano aplicado directamente a coser es trabajo; combinar los demás factores en un plan de producción y asumir el riesgo del resultado es organización, aunque ambas personas participen activamente en el taller.',
    common_error:
      'Confundir organización con trabajo solo porque la persona que organiza también participa activamente, sin distinguir que organización implica además decidir y asumir el riesgo del resultado.',
    source_reference: 'Guía oficial, página 19, código 7.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-fpp-005',
    topic_id: 'cs-7-1-2-factores-de-procesos-de-produccion',
    prompt:
      'Relaciona cada elemento de una fábrica de zapatos con el factor de producción que representa.\n\n1. El cuero sin procesar que llega de un proveedor\n2. La máquina cosedora industrial usada para unir las piezas\n3. El esfuerzo del operario que arma cada zapato\n4. La decisión de cuántos zapatos fabricar y el riesgo de que no se vendan\n\na. Trabajo\nb. Tierra\nc. Organización\nd. Capital',
    options: ['1b, 2d, 3a, 4c', '1d, 2b, 3c, 4a', '1a, 2c, 3d, 4b'],
    correct_option_index: 0,
    explanation:
      'El cuero sin procesar es un recurso natural, así que corresponde a tierra (b); la máquina cosedora es un bien ya producido usado para producir, así que es capital (d); el esfuerzo del operario es trabajo (a); decidir y asumir el riesgo del resultado es organización (c).',
    common_error:
      'Asignar capital al esfuerzo humano solo porque interviene una máquina en el proceso, sin distinguir entre el bien productivo (la máquina) y quien lo opera (trabajo).',
    source_reference: 'Guía oficial, página 19, código 7.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tsp-001',
    topic_id: 'cs-7-1-3-tipos-de-sectores-productivos',
    prompt:
      'Una cooperativa extrae sal directamente de salinas naturales, sin transformarla en ningún otro producto antes de venderla a granel. ¿A qué sector productivo pertenece esta actividad?',
    options: ['sector primario', 'sector secundario', 'sector terciario'],
    correct_option_index: 0,
    explanation:
      'Obtener un recurso natural directamente, sin transformarlo, corresponde al sector primario, sin importar que después se venda.',
    common_error:
      'Clasificar la extracción de sal como sector terciario por incluir su venta, sin notar que la actividad descrita es la obtención directa del recurso, no un servicio de comercialización aparte.',
    source_reference: 'Guía oficial, página 19, código 7.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-tsp-002',
    topic_id: 'cs-7-1-3-tipos-de-sectores-productivos',
    prompt:
      'Una actividad económica que transforma una materia prima o un recurso natural en un producto manufacturado distinto pertenece al sector productivo _______.',
    options: ['primario', 'secundario', 'terciario'],
    correct_option_index: 1,
    explanation:
      'Transformar una materia prima en un producto manufacturado distinto es la actividad propia del sector secundario.',
    common_error:
      'Confundir cualquier actividad que use maquinaria con sector secundario, cuando el criterio real es si transforma la materia prima en un producto distinto, no qué herramientas usa.',
    source_reference: 'Guía oficial, página 19, código 7.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tsp-003',
    topic_id: 'cs-7-1-3-tipos-de-sectores-productivos',
    prompt:
      'Una empresa de reparto lleva paquetes de una ciudad a otra utilizando una flotilla de camiones que posee y opera directamente. Alguien argumenta que esta actividad pertenece al sector secundario porque usa maquinaria pesada como factor de producción. ¿Por qué ese argumento es incorrecto?',
    options: [
      'porque el sector se clasifica por el tipo de actividad realizada, no por el factor de producción que utiliza, y transportar paquetes es un servicio, propio del sector terciario',
      'porque solo las fábricas pueden pertenecer al sector secundario, sin importar qué actividad realicen',
      'porque los camiones no se consideran capital dentro del proceso de reparto'
    ],
    correct_option_index: 0,
    explanation:
      'El sector productivo se determina por el tipo de actividad —obtención directa, transformación o servicio—, no por qué factor de producción emplea; transportar paquetes es un servicio, así que pertenece al sector terciario aunque use maquinaria como capital.',
    common_error:
      'Confundir el factor de producción capital, presente en casi cualquier actividad, con el criterio real de clasificación por sector, que depende del tipo de actividad realizada.',
    source_reference: 'Guía oficial, página 19, código 7.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tsp-004',
    topic_id: 'cs-7-1-3-tipos-de-sectores-productivos',
    prompt:
      'Una planta procesadora recibe leche cruda directamente de establos cercanos y la convierte en queso y yogur envasados para su venta. ¿A qué sector productivo pertenece esta actividad, y por qué no pertenece al sector donde se ordeña la leche?',
    options: [
      'al sector secundario, porque transforma la leche cruda en productos distintos, a diferencia de ordeñar, que obtiene el recurso sin transformarlo',
      'al sector primario, porque sigue trabajando con un producto de origen animal',
      'al sector terciario, porque el queso y el yogur se venden después a los consumidores'
    ],
    correct_option_index: 0,
    explanation:
      'Transformar la leche cruda en queso y yogur es una actividad de manufactura, propia del sector secundario; ordeñar la leche, en cambio, obtiene el recurso sin transformarlo, por lo que pertenece al sector primario.',
    common_error:
      'Clasificar toda la cadena de un producto de origen animal en el mismo sector, sin distinguir entre obtener el recurso sin transformarlo y transformarlo después en un producto distinto.',
    source_reference: 'Guía oficial, página 19, código 7.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tsp-005',
    topic_id: 'cs-7-1-3-tipos-de-sectores-productivos',
    prompt:
      'Relaciona cada actividad de una cadena de producción de zapatos con su sector productivo.\n\n1. Una empresa cría ganado bovino y obtiene el cuero sin procesarlo\n2. Una curtiduría transforma el cuero crudo en cuero curtido listo para fabricar zapatos\n3. Una tienda vende los zapatos ya fabricados a sus clientes\n4. Un taller corta y cose el cuero curtido para ensamblar los zapatos\n\na. Sector secundario\nb. Sector primario\nc. Sector terciario',
    options: ['1b, 2a, 3c, 4a', '1a, 2b, 3a, 4c', '1c, 2a, 3b, 4a'],
    correct_option_index: 0,
    explanation:
      'Criar ganado y obtener cuero sin procesarlo es sector primario (b); curtir el cuero y ensamblar los zapatos son transformaciones, así que son sector secundario (a); vender los zapatos ya fabricados es un servicio de comercialización, sector terciario (c).',
    common_error:
      'Agrupar todas las etapas de una misma cadena productiva en un solo sector, sin distinguir la obtención directa, la transformación y el servicio final de venta.',
    source_reference: 'Guía oficial, página 19, código 7.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mdr-001',
    topic_id: 'cs-7-1-4-mecanismos-de-distribucion-de-la-riqueza',
    prompt:
      'Una persona presta su bodega vacía a un negocio de logística a cambio de un pago mensual fijo, sin participar en las operaciones del negocio. ¿Qué mecanismo de distribución recibe por aportar ese espacio?',
    options: ['renta', 'salario', 'interés'],
    correct_option_index: 0,
    explanation:
      'Quien aporta un espacio o recurso natural como una bodega recibe renta, el mecanismo asociado al factor tierra.',
    common_error:
      'Confundir la renta por el uso de un espacio productivo con el salario, cuando el salario corresponde específicamente al esfuerzo de trabajo, no al uso de un bien inmueble.',
    source_reference: 'Guía oficial, página 19, código 7.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-mdr-002',
    topic_id: 'cs-7-1-4-mecanismos-de-distribucion-de-la-riqueza',
    prompt:
      'El mecanismo de distribución que recibe quien organiza un proceso productivo, combinando los demás factores y asumiendo el riesgo de que el negocio resulte o no rentable, se llama _______.',
    options: ['interés', 'ganancia', 'salario'],
    correct_option_index: 1,
    explanation:
      'La ganancia es lo que recibe quien organiza el proceso productivo y asume el riesgo del resultado; es lo que queda después de pagar salario, renta e interés.',
    common_error:
      'Confundir la ganancia con el interés, que corresponde al pago por aportar capital, no por organizar el proceso y asumir su riesgo.',
    source_reference: 'Guía oficial, página 19, código 7.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mdr-003',
    topic_id: 'cs-7-1-4-mecanismos-de-distribucion-de-la-riqueza',
    prompt:
      'La dueña de un restaurante también cocina algunos platillos durante el turno más ocupado, además de decidir el menú, contratar al personal y asumir la pérdida si el negocio no genera suficientes ventas en el mes. ¿Por qué lo que recibe por decidir y asumir ese riesgo es ganancia y no salario, aunque también cocine?',
    options: [
      'porque el salario paga el esfuerzo de trabajo, mientras que la ganancia recompensa el riesgo de organizar el proceso y solo existe si el negocio resulta rentable',
      'porque una misma persona no puede recibir dos mecanismos de distribución distintos en el mismo negocio',
      'porque cocinar durante el turno ocupado ya se considera parte de organizar el negocio'
    ],
    correct_option_index: 0,
    explanation:
      'El salario retribuye el esfuerzo de trabajo, como cocinar; la ganancia retribuye específicamente la función de organizar los demás factores y asumir el riesgo de rentabilidad, y una misma persona puede recibir ambos si realiza ambas funciones.',
    common_error:
      'Asumir que una persona solo puede recibir un mecanismo de distribución, sin reconocer que puede recibir salario por su trabajo directo y ganancia por su función de organización al mismo tiempo.',
    source_reference: 'Guía oficial, página 19, código 7.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mdr-004',
    topic_id: 'cs-7-1-4-mecanismos-de-distribucion-de-la-riqueza',
    prompt:
      'Un inversionista aporta el dinero necesario para comprar la maquinaria de una fábrica de cerámica, sin participar en las decisiones diarias del negocio, y recibe un pago periódico a cambio de ese financiamiento. ¿Qué mecanismo de distribución recibe, y por qué no es renta?',
    options: [
      'interés, porque el pago corresponde al capital invertido en la maquinaria, no al uso de tierra o un recurso natural',
      'renta, porque cualquier pago periódico por aportar un recurso a un negocio se llama renta',
      'ganancia, porque cualquier inversionista asume el riesgo del negocio en el que invierte'
    ],
    correct_option_index: 0,
    explanation:
      'El interés es el pago por aportar capital, como el financiamiento de maquinaria; la renta corresponde específicamente al factor tierra, no a cualquier pago periódico por un recurso aportado.',
    common_error:
      'Llamar renta a cualquier pago periódico recibido por aportar un recurso a un proceso productivo, sin distinguir de qué factor de producción proviene ese pago.',
    source_reference: 'Guía oficial, página 19, código 7.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mdr-005',
    topic_id: 'cs-7-1-4-mecanismos-de-distribucion-de-la-riqueza',
    prompt:
      'Relaciona cada agente de una granja avícola con el mecanismo de distribución que recibe.\n\n1. Quien renta el terreno donde están los galpones, sin participar en la operación\n2. Quien alimenta y cuida a las aves todos los días\n3. Quien prestó el dinero para comprar la incubadora industrial\n4. Quien decide cuántas aves criar, contrata al personal y asume la pérdida si no se venden\n\na. Interés\nb. Renta\nc. Ganancia\nd. Salario',
    options: ['1b, 2d, 3a, 4c', '1d, 2b, 3c, 4a', '1a, 2c, 3d, 4b'],
    correct_option_index: 0,
    explanation:
      'Quien aporta tierra recibe renta (b); quien aporta trabajo recibe salario (d); quien aporta capital mediante financiamiento recibe interés (a); quien organiza el proceso y asume el riesgo recibe ganancia (c).',
    common_error:
      'Asignar salario a quien financia la incubadora, confundiendo el aporte de capital con el esfuerzo directo de trabajo.',
    source_reference: 'Guía oficial, página 19, código 7.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-efi-001',
    topic_id: 'cs-7-1-5-empleo-formal-e-informal',
    prompt:
      'Un plomero atiende reparaciones a domicilio, cobra en efectivo, no entrega recibos ni factura, y no está inscrito en ningún régimen de seguridad social, aunque gana un ingreso considerable por su experiencia. ¿Su empleo es formal o informal?',
    options: [
      'informal, porque no está registrado ante las instituciones correspondientes, sin importar cuánto gane',
      'formal, porque su ingreso considerable indica que su trabajo está bien establecido',
      'formal, porque su experiencia y habilidad son reconocidas por sus clientes'
    ],
    correct_option_index: 0,
    explanation:
      'El criterio para clasificar el empleo es si está registrado —contrato, seguridad social, declaración de impuestos—, no el nivel de ingreso ni la habilidad de quien lo realiza.',
    common_error:
      'Suponer que un ingreso alto o una habilidad reconocida convierten un empleo en formal, sin verificar si existe registro ante las instituciones correspondientes.',
    source_reference: 'Guía oficial, página 19, código 7.1.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-efi-002',
    topic_id: 'cs-7-1-5-empleo-formal-e-informal',
    prompt:
      'Un empleo en el que existe un contrato escrito, la persona está inscrita en un régimen de seguridad social y se declaran impuestos sobre su ingreso se clasifica como empleo _______.',
    options: ['informal', 'formal', 'independiente'],
    correct_option_index: 1,
    explanation:
      'El empleo formal es aquel registrado ante las instituciones correspondientes: contrato, seguridad social y declaración de impuestos.',
    common_error:
      'Confundir "formal" con "empleo asalariado en una oficina", cuando el criterio real es el registro observable, sin importar el tipo de actividad o lugar de trabajo.',
    source_reference: 'Guía oficial, página 19, código 7.1.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-efi-003',
    topic_id: 'cs-7-1-5-empleo-formal-e-informal',
    prompt:
      'Una diseñadora gráfica trabaja de forma independiente para varios clientes, emite factura por cada proyecto, declara sus ingresos ante la autoridad fiscal y está inscrita por su cuenta en un régimen de seguridad social. ¿Por qué su empleo es formal, aunque no tenga un patrón fijo ni un contrato laboral tradicional?',
    options: [
      'porque cumple el registro observable ante las instituciones correspondientes, aunque trabaje de forma independiente',
      'porque solo se considera informal a quien trabaja en la calle sin un espacio fijo',
      'porque emitir factura por cada proyecto ya la clasifica automáticamente como empleada formal de sus clientes'
    ],
    correct_option_index: 0,
    explanation:
      'El criterio de formalidad es el registro ante las instituciones correspondientes —declaración de impuestos, inscripción a seguridad social—, y no depende de tener un patrón fijo ni un contrato laboral tradicional.',
    common_error:
      'Asumir que la formalidad requiere un patrón fijo o un contrato laboral tradicional, sin reconocer que alguien independiente también puede cumplir el registro correspondiente.',
    source_reference: 'Guía oficial, página 19, código 7.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-efi-004',
    topic_id: 'cs-7-1-5-empleo-formal-e-informal',
    prompt:
      'Un empleado de una tienda tiene un salario bajo, sin muchas posibilidades de ascenso, pero cuenta con contrato escrito, está inscrito en un régimen de seguridad social y su empleador retiene impuestos sobre su sueldo. ¿Por qué este empleo se clasifica como formal, a pesar de sus condiciones poco favorables?',
    options: [
      'porque cumple el registro observable —contrato, seguridad social, retención de impuestos—, que es el único criterio de clasificación, sin importar si el trabajo es o no atractivo',
      'porque todo empleo dentro de una tienda establecida se considera automáticamente formal',
      'porque un salario bajo siempre corresponde a empleos formales, y uno alto a empleos informales'
    ],
    correct_option_index: 0,
    explanation:
      'La clasificación de un empleo como formal o informal depende exclusivamente del registro observable ante las instituciones correspondientes, no de si el salario es alto, bajo o si el trabajo ofrece buenas condiciones.',
    common_error:
      'Asociar la formalidad con la calidad o el atractivo del empleo, en vez de verificar si existe registro observable ante las instituciones correspondientes.',
    source_reference: 'Guía oficial, página 19, código 7.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-efi-005',
    topic_id: 'cs-7-1-5-empleo-formal-e-informal',
    prompt:
      'Relaciona cada situación laboral con su clasificación correspondiente.\n\n1. Una persona vende comida en un puesto ambulante, sin contrato ni inscripción a seguridad social\n2. Un contador trabaja en una empresa con contrato escrito, seguridad social y retenciones de impuestos\n3. Un joven repara bicicletas en su cochera, cobra en efectivo y no está registrado ante ninguna institución\n4. Una recepcionista de un consultorio tiene contrato firmado y está inscrita en un régimen de seguridad social\n\na. Empleo formal\nb. Empleo informal',
    options: ['1b, 2a, 3b, 4a', '1a, 2b, 3a, 4b', '1b, 2b, 3a, 4a'],
    correct_option_index: 0,
    explanation:
      'Vender comida ambulante y reparar bicicletas sin registro son empleos informales (b), porque carecen de contrato y seguridad social; el contador y la recepcionista tienen contrato y seguridad social, así que son empleos formales (a).',
    common_error:
      'Clasificar como informal cualquier trabajo realizado en la calle o en casa, sin verificar primero si existe o no un registro observable ante las instituciones correspondientes.',
    source_reference: 'Guía oficial, página 19, código 7.1.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mer-001',
    topic_id: 'cs-7-1-6-mecanismos-estatales-de-redistribucion-de-la-riqueza',
    prompt:
      'Un gobierno cobra un porcentaje mayor de impuesto a las personas con ingresos más altos, y usa esa recaudación adicional para financiar becas de estudio para jóvenes de bajos ingresos. ¿Este conjunto de acciones es un mecanismo de redistribución de la riqueza?',
    options: [
      'sí, porque traslada recursos de un grupo de mayor ingreso hacia otro de menor ingreso para reducir una desigualdad',
      'no, porque cobrar impuestos nunca beneficia directamente a quien los paga',
      'sí, porque cualquier programa educativo del estado redistribuye riqueza'
    ],
    correct_option_index: 0,
    explanation:
      'Un mecanismo de redistribución traslada recursos entre grupos de distinto ingreso para reducir la desigualdad; el impuesto progresivo que financia becas para jóvenes de bajos ingresos cumple exactamente ese criterio.',
    common_error:
      'Suponer que cualquier programa del estado con fines sociales redistribuye riqueza, sin verificar si en verdad traslada recursos de un grupo de ingreso a otro.',
    source_reference: 'Guía oficial, página 19, código 7.1.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-mer-002',
    topic_id: 'cs-7-1-6-mecanismos-estatales-de-redistribucion-de-la-riqueza',
    prompt:
      'Una acción del estado que traslada recursos recaudados de una parte de la población hacia otra parte, con el fin de reducir la desigualdad de ingreso entre ellas, se conoce como _______.',
    options: ['distribución', 'redistribución', 'privatización'],
    correct_option_index: 1,
    explanation:
      'La redistribución es el traslado de recursos entre grupos de la población, realizado por el estado después de que ocurrió la distribución original entre los agentes de un proceso productivo.',
    common_error:
      'Confundir redistribución con distribución, sin notar que la distribución ocurre directamente entre los agentes de un proceso productivo, mientras que la redistribución la realiza el estado después, entre grupos de la población.',
    source_reference: 'Guía oficial, página 19, código 7.1.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mer-003',
    topic_id: 'cs-7-1-6-mecanismos-estatales-de-redistribucion-de-la-riqueza',
    prompt:
      'Un municipio construye una nueva avenida de acceso público, disponible para cualquier persona sin distinción de ingreso. Alguien afirma que esta obra es un mecanismo de redistribución de la riqueza porque el estado la pagó con impuestos. ¿Por qué ese argumento es incorrecto?',
    options: [
      'porque la avenida beneficia por igual a toda la población, sin trasladar recursos de un grupo de ingreso hacia otro para reducir una desigualdad',
      'porque las obras de infraestructura nunca se pagan con recursos públicos',
      'porque solo los programas de transferencia directa de dinero cuentan como acciones del estado'
    ],
    correct_option_index: 0,
    explanation:
      'Que una acción se financie con impuestos no la convierte automáticamente en redistribución; el criterio es si traslada recursos entre grupos de distinto ingreso para reducir su desigualdad, y una obra de acceso igual para todos no cumple ese criterio.',
    common_error:
      'Clasificar como redistribución cualquier gasto público financiado con impuestos, sin verificar si en verdad traslada recursos de un grupo de la población hacia otro.',
    source_reference: 'Guía oficial, página 19, código 7.1.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mer-004',
    topic_id: 'cs-7-1-6-mecanismos-estatales-de-redistribucion-de-la-riqueza',
    prompt:
      'Un gobierno reduce el precio de la tarifa eléctrica únicamente para hogares de bajos ingresos, cubriendo esa diferencia con recursos recaudados del conjunto de la población. ¿Qué mecanismo de redistribución ejemplifica esta acción?',
    options: ['un subsidio', 'una transferencia directa', 'una provisión pública universal'],
    correct_option_index: 0,
    explanation:
      'Reducir el precio de un bien o servicio para quienes lo necesitan, cubriendo el estado la diferencia, es exactamente un subsidio, distinto de entregar dinero directamente (transferencia) o de ofrecer un servicio igual para toda la población (provisión universal).',
    common_error:
      'Confundir un subsidio dirigido a un grupo específico con una transferencia directa de dinero, cuando el subsidio reduce el precio de un bien o servicio en lugar de entregar efectivo.',
    source_reference: 'Guía oficial, página 19, código 7.1.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mer-005',
    topic_id: 'cs-7-1-6-mecanismos-estatales-de-redistribucion-de-la-riqueza',
    prompt:
      'Relaciona cada acción del estado con si es o no un mecanismo de redistribución de la riqueza.\n\n1. Entregar dinero mensual a familias en condición de pobreza extrema, financiado con impuestos generales\n2. Publicar en línea, disponible para cualquiera, el trámite para registrar una nueva empresa\n3. Cobrar una tasa de impuesto mayor a ingresos altos para financiar comedores comunitarios en zonas de bajos ingresos\n4. Instalar semáforos nuevos en una avenida usada por toda la población por igual\n\na. No es redistribución\nb. Sí es redistribución',
    options: ['1b, 2a, 3b, 4a', '1a, 2b, 3a, 4b', '1b, 2b, 3a, 4a'],
    correct_option_index: 0,
    explanation:
      'Entregar dinero a familias en pobreza extrema y financiar comedores comunitarios con impuestos progresivos trasladan recursos entre grupos de distinto ingreso, así que son redistribución (b); publicar un trámite y poner semáforos benefician a toda la población por igual, sin trasladar recursos entre grupos, así que no son redistribución (a).',
    common_error:
      'Clasificar cualquier acción pública financiada con impuestos como redistribución, sin distinguir si en verdad traslada recursos hacia un grupo específico o beneficia a toda la población por igual.',
    source_reference: 'Guía oficial, página 19, código 7.1.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ceb-001',
    topic_id: 'cs-7-1-7-caracteristicas-del-estado-de-bienestar',
    prompt:
      'Un país financia con impuestos un sistema de pensiones disponible para toda persona que haya cotizado, sin importar su nivel de ingreso, y mantiene ese sistema de forma permanente. ¿Esta política es una característica del estado de bienestar?',
    options: [
      'sí, porque es un sistema de seguridad social universal y sostenido con gasto público',
      'no, porque las pensiones dependen de lo que cada persona cotizó, así que no son universales',
      'sí, porque cualquier sistema de pensiones es una característica del estado de bienestar, sin importar su alcance'
    ],
    correct_option_index: 0,
    explanation:
      'Un sistema de pensiones disponible para toda persona que cumple el requisito de cotización, financiado y sostenido con gasto público, corresponde a un sistema amplio de seguridad social, característica del estado de bienestar.',
    common_error:
      'Creer que un requisito de acceso, como haber cotizado, elimina la universalidad de un servicio, cuando la universalidad se refiere a que esté disponible por igual para todos quienes cumplen ese requisito, no condicionado a la capacidad de pago.',
    source_reference: 'Guía oficial, página 19, código 7.1.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-ceb-002',
    topic_id: 'cs-7-1-7-caracteristicas-del-estado-de-bienestar',
    prompt:
      'Un modelo en el que el estado asume un papel activo y sostenido para garantizar a toda la población el acceso a servicios básicos, financiado con un gasto público elevado, se conoce como _______.',
    options: ['modelo neoliberal', 'estado de bienestar', 'sector informal'],
    correct_option_index: 1,
    explanation:
      'El estado de bienestar es el modelo en que el estado garantiza de forma universal y sostenida el acceso a servicios básicos, con un gasto público elevado y un papel activo en la economía.',
    common_error:
      'Confundir el estado de bienestar con cualquier política social puntual, sin verificar si forma parte de un sistema universal y sostenido de provisión, y no de una acción aislada.',
    source_reference: 'Guía oficial, página 19, código 7.1.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ceb-003',
    topic_id: 'cs-7-1-7-caracteristicas-del-estado-de-bienestar',
    prompt:
      'Después de un terremoto, un gobierno entrega una sola vez despensas y colchones a las familias damnificadas de una zona específica. ¿Esta acción es una característica del estado de bienestar?',
    options: [
      'no, porque es una ayuda puntual ante una emergencia, no un servicio universal ni una estructura sostenida',
      'sí, porque cualquier ayuda del estado a la población forma parte del estado de bienestar',
      'sí, porque entregar bienes materiales gratuitos siempre indica un papel activo del estado'
    ],
    correct_option_index: 0,
    explanation:
      'El estado de bienestar se caracteriza por la provisión universal y sostenida de servicios, no por una ayuda ocasional ante una emergencia específica, aunque esa ayuda provenga del estado.',
    common_error:
      'Clasificar cualquier apoyo estatal, incluso uno temporal y focalizado en una emergencia, como característica del estado de bienestar, sin verificar si forma parte de una estructura universal y permanente.',
    source_reference: 'Guía oficial, página 19, código 7.1.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ceb-004',
    topic_id: 'cs-7-1-7-caracteristicas-del-estado-de-bienestar',
    prompt:
      'Un país establece por ley un seguro de desempleo financiado colectivamente mediante contribuciones obligatorias, disponible para cualquier trabajador que pierda su empleo formal, de forma permanente. ¿Por qué esta política corresponde al estado de bienestar y no a una simple ayuda social ocasional?',
    options: [
      'porque es un sistema estructural y sostenido, disponible de forma universal para quienes cumplen la condición legal, no una acción aislada',
      'porque cualquier seguro relacionado con el empleo pertenece automáticamente al estado de bienestar',
      'porque las contribuciones obligatorias siempre indican un modelo neoliberal'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que distingue al estado de bienestar de una ayuda ocasional es que el servicio esté establecido de forma estructural, sostenida y universal para quienes cumplen la condición legal, como en este seguro de desempleo permanente.',
    common_error:
      'Evaluar si una política pertenece al estado de bienestar solo por el tema que trata —empleo, salud, educación—, sin verificar si en verdad es estructural, sostenida y universal.',
    source_reference: 'Guía oficial, página 19, código 7.1.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ceb-005',
    topic_id: 'cs-7-1-7-caracteristicas-del-estado-de-bienestar',
    prompt:
      'Relaciona cada política con si corresponde o no a una característica del estado de bienestar.\n\n1. Un sistema de salud pública gratuito para toda la población, financiado de forma sostenida con impuestos\n2. Una entrega única de cobijas a familias afectadas por una helada reciente\n3. Una ley que regula las condiciones mínimas de contratación laboral en todas las empresas del país\n4. Un descuento temporal en el transporte público solo durante un evento deportivo puntual\n\na. No es característica del estado de bienestar\nb. Sí es característica del estado de bienestar',
    options: ['1b, 2a, 3b, 4a', '1a, 2b, 3a, 4b', '1b, 2b, 3a, 4a'],
    correct_option_index: 0,
    explanation:
      'El sistema de salud pública universal y sostenido, y la regulación permanente de condiciones laborales, son estructuras universales y sostenidas, así que sí corresponden al estado de bienestar (b); la entrega única de cobijas y el descuento temporal por un evento puntual son acciones aisladas, no estructuras universales sostenidas, así que no corresponden (a).',
    common_error:
      'Confundir cualquier beneficio temporal otorgado por el estado con una característica del estado de bienestar, sin verificar si forma parte de una estructura permanente y universal.',
    source_reference: 'Guía oficial, página 19, código 7.1.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cmen-001',
    topic_id: 'cs-7-1-8-caracteristicas-del-modelo-economico-neoliberal',
    prompt:
      'Un país vende a inversionistas privados una empresa de energía eléctrica que antes administraba directamente el estado. ¿Qué característica del modelo económico neoliberal ejemplifica esta acción?',
    options: ['privatización', 'apertura comercial', 'gasto público elevado'],
    correct_option_index: 0,
    explanation:
      'Transferir a manos privadas una empresa antes administrada por el estado es exactamente un caso de privatización.',
    common_error:
      'Confundir la privatización con la apertura comercial, cuando privatizar implica transferir la propiedad de una empresa estatal, no reducir barreras al comercio internacional.',
    source_reference: 'Guía oficial, página 19, código 7.1.8.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-cmen-002',
    topic_id: 'cs-7-1-8-caracteristicas-del-modelo-economico-neoliberal',
    prompt:
      'La reducción de normas que el estado impone sobre la actividad de las empresas privadas, dejando más decisiones a la competencia del mercado, se conoce como _______.',
    options: ['desregulación', 'redistribución', 'universalidad'],
    correct_option_index: 0,
    explanation:
      'La desregulación es la reducción de normas estatales sobre la actividad de las empresas privadas, una de las características del modelo neoliberal.',
    common_error:
      'Confundir desregulación con redistribución, dos conceptos que no se relacionan: una reduce normas sobre las empresas, la otra traslada recursos entre grupos de la población.',
    source_reference: 'Guía oficial, página 19, código 7.1.8.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cmen-003',
    topic_id: 'cs-7-1-8-caracteristicas-del-modelo-economico-neoliberal',
    prompt:
      'Un país elimina la mayoría de los aranceles que cobraba a productos importados de otros países y firma acuerdos que facilitan la entrada de bienes extranjeros a su mercado. ¿Qué característica del modelo neoliberal ejemplifica esta acción, y por qué no es privatización?',
    options: [
      'apertura comercial, porque reduce barreras al comercio con otros países, mientras que privatización implica transferir una empresa estatal a manos privadas',
      'privatización, porque cualquier acuerdo comercial internacional transfiere control económico a manos privadas',
      'desregulación, porque reducir aranceles siempre significa reducir normas sobre las empresas privadas'
    ],
    correct_option_index: 0,
    explanation:
      'Reducir aranceles y facilitar el comercio internacional es apertura comercial; privatización se refiere específicamente a transferir a manos privadas una empresa que antes administraba el estado, algo distinto de una política arancelaria.',
    common_error:
      'Confundir cualquier política relacionada con el comercio internacional con privatización, sin distinguir que privatizar implica transferir la propiedad de una empresa estatal específica.',
    source_reference: 'Guía oficial, página 19, código 7.1.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cmen-004',
    topic_id: 'cs-7-1-8-caracteristicas-del-modelo-economico-neoliberal',
    prompt:
      'Un país reduce de forma sostenida su gasto en programas sociales y transfiere a empresas privadas la administración de varios servicios que antes ofrecía directamente. Alguien afirma que estas medidas significan que el estado desaparece por completo de la economía. ¿Por qué esa afirmación es incorrecta?',
    options: [
      'porque el modelo neoliberal reduce el papel del estado en ciertas funciones económicas, pero no lo elimina por completo',
      'porque reducir el gasto público siempre significa que el estado deja de existir como institución',
      'porque transferir servicios a empresas privadas es una característica del estado de bienestar, no del modelo neoliberal'
    ],
    correct_option_index: 0,
    explanation:
      'El modelo neoliberal describe una reducción del papel del estado en gasto, propiedad de empresas y regulación, pero no implica la eliminación total del estado, que sigue existiendo con funciones más acotadas.',
    common_error:
      'Interpretar la reducción del papel del estado como su desaparición completa, en vez de entenderla como una reducción de ciertas funciones económicas específicas.',
    source_reference: 'Guía oficial, página 19, código 7.1.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cmen-005',
    topic_id: 'cs-7-1-8-caracteristicas-del-modelo-economico-neoliberal',
    prompt:
      'Relaciona cada acción de un gobierno con la característica del modelo neoliberal que representa.\n\n1. Vender a particulares una empresa de ferrocarriles que antes administraba el estado\n2. Eliminar el requisito de permiso previo para abrir ciertos tipos de negocios\n3. Reducir aranceles a la importación de maquinaria agrícola extranjera\n4. Disminuir de forma sostenida el presupuesto destinado a programas sociales\n\na. Apertura comercial\nb. Privatización\nc. Reducción del gasto público\nd. Desregulación',
    options: ['1b, 2d, 3a, 4c', '1d, 2b, 3c, 4a', '1a, 2c, 3d, 4b'],
    correct_option_index: 0,
    explanation:
      'Vender una empresa estatal a particulares es privatización (b); eliminar un requisito regulatorio es desregulación (d); reducir aranceles es apertura comercial (a); disminuir el presupuesto social es reducción del gasto público (c).',
    common_error:
      'Confundir la reducción del gasto público con la desregulación, cuando una se refiere al presupuesto destinado a programas y la otra a las normas que rigen la actividad de las empresas.',
    source_reference: 'Guía oficial, página 19, código 7.1.8.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dap-001',
    topic_id: 'cs-7-1-9-degradacion-ambiental-por-formas-de-produccion',
    prompt:
      'Una empresa minera extrae mineral usando explosivos y remueve grandes cantidades de tierra, dejando el suelo expuesto sin ninguna restauración posterior; la lluvia arrastra ese suelo suelto hacia un río cercano. ¿Qué práctica productiva y qué impacto ambiental corresponden a esta situación?',
    options: [
      'la práctica es la remoción de suelo sin restauración posterior, y el impacto es la erosión y la sedimentación del río cercano',
      'la práctica es la minería en general, y el impacto es la contaminación del aire por explosivos',
      'la práctica es el uso de explosivos, y el impacto es el ruido excesivo en la zona'
    ],
    correct_option_index: 0,
    explanation:
      'El impacto ambiental proviene de la práctica específica de remover suelo sin restaurarlo, que expone el terreno a la erosión y permite que la lluvia arrastre sedimento hacia el río, no de la minería como actividad general ni del ruido de los explosivos.',
    common_error:
      'Atribuir el impacto ambiental a la actividad completa ("la minería contamina") en vez de identificar la práctica exacta —remover suelo sin restauración— y el efecto concreto que produce.',
    source_reference: 'Guía oficial, página 19, código 7.1.9.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-dap-002',
    topic_id: 'cs-7-1-9-degradacion-ambiental-por-formas-de-produccion',
    prompt:
      'La práctica de extraer peces de un cuerpo de agua a un ritmo superior a su capacidad natural de reproducción, lo que reduce las poblaciones de esas especies, se llama _______.',
    options: [
      'sobreexplotación pesquera',
      'contaminación por agroquímicos',
      'deforestación'
    ],
    correct_option_index: 0,
    explanation:
      'Extraer peces por encima de su capacidad de reproducción, reduciendo las poblaciones de esas especies, es exactamente sobreexplotación pesquera.',
    common_error:
      'Confundir la sobreexplotación pesquera con la contaminación del agua, cuando el impacto descrito es la reducción de poblaciones por exceso de captura, no la introducción de sustancias contaminantes.',
    source_reference: 'Guía oficial, página 19, código 7.1.9.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dap-003',
    topic_id: 'cs-7-1-9-degradacion-ambiental-por-formas-de-produccion',
    prompt:
      'Dentro del sector primario, una parcela cultiva hortalizas con riego controlado y sin agroquímicos, mientras que la parcela vecina, del mismo sector, aplica grandes cantidades de plaguicidas cada temporada sobre un monocultivo. Alguien afirma que ambas parcelas degradan el ambiente por igual, "porque pertenecen al mismo sector". ¿Por qué ese argumento es incorrecto?',
    options: [
      'porque el impacto ambiental depende de la práctica productiva específica, y el uso excesivo de agroquímicos en un monocultivo contamina el suelo, mientras que el cultivo controlado sin agroquímicos no lo hace de la misma forma',
      'porque toda actividad agrícola contamina el suelo en la misma medida, sin importar cómo se realice',
      'porque solo las actividades del sector secundario pueden causar degradación ambiental'
    ],
    correct_option_index: 0,
    explanation:
      'No toda actividad de un sector causa el mismo impacto: el uso excesivo de agroquímicos en un monocultivo contamina el suelo y las aguas subterráneas, mientras que un cultivo con riego controlado y sin agroquímicos no genera ese mismo efecto, aunque ambas parcelas pertenezcan al sector primario.',
    common_error:
      'Atribuir la degradación ambiental a un sector productivo completo, sin distinguir que dentro de un mismo sector unas prácticas específicas la causan y otras no.',
    source_reference: 'Guía oficial, página 19, código 7.1.9.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dap-004',
    topic_id: 'cs-7-1-9-degradacion-ambiental-por-formas-de-produccion',
    prompt:
      'Una curtiduría de cuero descarga directamente a un arroyo cercano el agua utilizada en su proceso de teñido, sin darle ningún tratamiento previo; semanas después, la vegetación de la orilla comienza a secarse y varias familias que usaban esa agua para regar sus cultivos reportan pérdidas. ¿Qué práctica productiva y qué impacto ambiental corresponden a esta situación?',
    options: [
      'la práctica es la descarga de residuos industriales sin tratar en un cuerpo de agua, y el impacto es la contaminación del agua que afecta la vegetación y los cultivos que dependen de ella',
      'la práctica es la curtiduría en general, y el impacto es la pérdida de biodiversidad en toda la región',
      'la práctica es el teñido del cuero, y el impacto es únicamente estético, por el cambio de color del agua'
    ],
    correct_option_index: 0,
    explanation:
      'El impacto ambiental concreto proviene de descargar el agua residual sin tratamiento antes de devolverla al cuerpo de agua, lo que contamina el agua y afecta a quienes dependen de ella, no de la curtiduría como actividad completa ni de un efecto meramente estético.',
    common_error:
      'Reducir el impacto ambiental a un efecto superficial o estético, sin reconocer la contaminación real del agua y su consecuencia sobre la vegetación y los cultivos que dependen de ella.',
    source_reference: 'Guía oficial, página 19, código 7.1.9.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dap-005',
    topic_id: 'cs-7-1-9-degradacion-ambiental-por-formas-de-produccion',
    prompt:
      'Relaciona cada práctica productiva con el impacto ambiental que le corresponde.\n\n1. Talar un bosque para ampliar un área de pastoreo de ganado\n2. Capturar camarón muy por encima de su capacidad natural de reproducción\n3. Descargar sin tratamiento el agua usada para lavar maquinaria industrial en un río\n4. Aplicar grandes cantidades de fertilizante cada temporada en un monocultivo\n\na. Reducción de las poblaciones de la especie capturada\nb. Pérdida de cobertura vegetal y erosión del suelo\nc. Contaminación del suelo y de las aguas subterráneas cercanas\nd. Contaminación del agua que afecta a la fauna acuática',
    options: ['1b, 2a, 3d, 4c', '1a, 2b, 3c, 4d', '1c, 2d, 3a, 4b'],
    correct_option_index: 0,
    explanation:
      'Talar bosque para pastoreo causa pérdida de cobertura vegetal y erosión (b); la sobrepesca de camarón reduce las poblaciones de esa especie (a); descargar agua sin tratar contamina el agua y afecta la fauna acuática (d); el exceso de fertilizante en un monocultivo contamina el suelo y las aguas subterráneas (c).',
    common_error:
      'Intercambiar los impactos de contaminación del agua superficial con los de contaminación del suelo y aguas subterráneas, sin distinguir el mecanismo específico de cada práctica productiva.',
    source_reference: 'Guía oficial, página 19, código 7.1.9.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-toe-001',
    topic_id: 'cs-7-2-1-teorias-sobre-el-origen-del-estado',
    prompt:
      "Un enunciado describe: 'antes de la existencia del estado, los seres humanos viven en un conflicto permanente motivado por su propio interés y el miedo a morir a manos de otro; solo un poder absoluto puede imponerles el orden.' ¿A qué autor corresponde esta descripción del estado de naturaleza?",
    options: [
      'Rousseau, porque también describe el origen del estado mediante un pacto social',
      'Hobbes, porque describe el estado de naturaleza como una guerra permanente que solo un poder absoluto puede resolver',
      'ninguno de los dos, porque ambos describen un estado de naturaleza originalmente pacífico'
    ],
    correct_option_index: 1,
    explanation:
      'Hobbes describe el estado de naturaleza como una guerra de todos contra todos motivada por el interés propio y el miedo a una muerte violenta, y concluye que solo un soberano absoluto puede garantizar la paz mediante la concentración del poder.',
    common_error:
      'Suponer que, como ambos autores proponen un pacto social, cualquier descripción del estado de naturaleza podría corresponder a cualquiera de los dos, sin distinguir que Hobbes describe una guerra permanente desde el inicio.',
    source_reference: 'Guía oficial, página 19, código 7.2.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-toe-002',
    topic_id: 'cs-7-2-1-teorias-sobre-el-origen-del-estado',
    prompt:
      'Para Rousseau, el pacto social no entrega la soberanía a un gobernante absoluto; en cambio, cada persona somete su voluntad individual a la _______, de modo que la soberanía permanece en el conjunto del pueblo.',
    options: ['voluntad general', 'voluntad del soberano', 'voluntad de la mayoría simple'],
    correct_option_index: 0,
    explanation:
      'En la teoría de Rousseau, la voluntad general es aquello a lo que cada persona somete su voluntad individual mediante el pacto social, de modo que la soberanía queda en el conjunto del pueblo y no en un solo gobernante.',
    common_error:
      'Confundir la voluntad general con la voluntad de la mayoría simple, cuando la voluntad general representa el bien común del conjunto del pueblo, no solo el resultado de contar votos individuales.',
    source_reference: 'Guía oficial, página 19, código 7.2.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-toe-003',
    topic_id: 'cs-7-2-1-teorias-sobre-el-origen-del-estado',
    prompt:
      "Alguien afirma que 'como Hobbes y Rousseau proponen un pacto social para salir del estado de naturaleza, sus teorías son básicamente la misma idea con otro nombre.' ¿Por qué esta afirmación es incorrecta?",
    options: [
      'porque describen un estado de naturaleza distinto (guerra permanente frente a paz alterada por la desigualdad) y el pacto tiene un destino distinto para la soberanía (un soberano absoluto frente a la voluntad general del pueblo)',
      'porque solo Rousseau propone realmente un pacto social; Hobbes propone la imposición directa de un gobernante sin ningún acuerdo previo',
      'porque Hobbes y Rousseau escribieron en siglos distintos, así que sus teorías no pueden compararse'
    ],
    correct_option_index: 0,
    explanation:
      'La coincidencia en proponer un pacto social no vuelve idénticas a ambas teorías: Hobbes describe una guerra permanente desde el inicio y un soberano absoluto como resultado, mientras que Rousseau describe una paz alterada por la desigualdad y la voluntad general como resultado.',
    common_error:
      'Juzgar la similitud de dos teorías solo porque ambas mencionan un "pacto social", sin verificar si describen el mismo estado de naturaleza y el mismo destino para la soberanía.',
    source_reference: 'Guía oficial, página 19, código 7.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-toe-004',
    topic_id: 'cs-7-2-1-teorias-sobre-el-origen-del-estado',
    prompt:
      'Un enunciado describe que, antes de la existencia del estado, los seres humanos vivían de forma relativamente libre e igualitaria, y que la aparición de la propiedad privada generó las primeras desigualdades y conflictos entre ellos. ¿Por qué esta descripción corresponde a Rousseau y no a Hobbes?',
    options: [
      'porque atribuye el conflicto a la desigualdad surgida de la propiedad privada, y no a un estado de guerra permanente presente desde el inicio, como propone Hobbes',
      'porque Hobbes nunca menciona la propiedad privada en ninguna parte de su teoría',
      'porque Rousseau escribió después que Hobbes, así que su teoría siempre corrige a la anterior'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que distingue a Rousseau es que el conflicto surge después, por la desigualdad que trae la propiedad privada, y no que exista antes de cualquier tipo de sociedad, como en la guerra permanente que describe Hobbes.',
    common_error:
      'Asumir que basta con mencionar un origen del conflicto para atribuir el enunciado a cualquiera de los dos autores, sin verificar si el conflicto se describe como permanente desde el inicio o como resultado posterior de la desigualdad.',
    source_reference: 'Guía oficial, página 19, código 7.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-toe-005',
    topic_id: 'cs-7-2-1-teorias-sobre-el-origen-del-estado',
    prompt:
      'Relaciona cada afirmación con el autor —Hobbes o Rousseau— cuya teoría representa.\n\n1. El estado de naturaleza es una guerra de todos contra todos motivada por el interés propio y el miedo\n2. La soberanía permanece en el conjunto del pueblo mediante la voluntad general\n3. El pacto social cede casi toda la libertad individual a un soberano absoluto para garantizar la paz\n4. La desigualdad surgida de la propiedad privada corrompe un estado de naturaleza originalmente pacífico\n\na. Hobbes\nb. Rousseau',
    options: ['1a, 2b, 3a, 4b', '1b, 2a, 3b, 4a', '1a, 2a, 3b, 4b'],
    correct_option_index: 0,
    explanation:
      'Hobbes describe la guerra permanente y el soberano absoluto (1a, 3a); Rousseau describe la voluntad general como destino de la soberanía y la desigualdad de la propiedad privada como origen del conflicto (2b, 4b).',
    common_error:
      'Invertir a los autores porque ambos "proponen un pacto", sin distinguir cuál asocia la soberanía a un solo gobernante y cuál la conserva en el pueblo mediante la voluntad general.',
    source_reference: 'Guía oficial, página 19, código 7.2.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dem-001',
    topic_id: 'cs-7-2-2-caracteristicas-de-la-democracia-electoral',
    prompt:
      "Un país celebra una votación cada seis años, en la que solo puede participar el partido en el poder, y quien resulta 'electo' es siempre la misma persona sin importar el resultado. ¿Este sistema es una democracia electoral?",
    options: [
      'sí, porque celebra una votación de forma periódica cada seis años',
      'sí, porque toda la población puede participar en la votación sin restricción de edad',
      'no, porque falta la competencia real entre opciones y la posibilidad de alternancia según el resultado, aunque exista una votación periódica'
    ],
    correct_option_index: 2,
    explanation:
      'La democracia electoral exige, además de elecciones periódicas, competencia real entre opciones y la posibilidad de que el poder cambie según el resultado; una votación sin otra candidatura posible y sin alternancia no cumple esas características, aunque se repita periódicamente.',
    common_error:
      'Concluir que un sistema es una democracia electoral solo porque celebra votaciones periódicas, sin verificar si existe competencia real y si el resultado puede cambiar el poder.',
    source_reference: 'Guía oficial, página 19, código 7.2.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-dem-002',
    topic_id: 'cs-7-2-2-caracteristicas-de-la-democracia-electoral',
    prompt:
      'El elemento de la democracia electoral que garantiza que toda persona que cumple los requisitos legales puede votar, sin distinción arbitraria, se llama _______.',
    options: ['sufragio universal', 'voto calificado', 'representación proporcional'],
    correct_option_index: 0,
    explanation:
      'El sufragio universal es el elemento que garantiza que toda persona que cumple los requisitos legales generales puede votar, sin excluir arbitrariamente a un grupo de la población.',
    common_error:
      'Confundir el sufragio universal con la representación proporcional, dos conceptos distintos: uno se refiere a quién puede votar, el otro a cómo se traducen los votos en cargos.',
    source_reference: 'Guía oficial, página 19, código 7.2.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dem-003',
    topic_id: 'cs-7-2-2-caracteristicas-de-la-democracia-electoral',
    prompt:
      'En un país, varios partidos compiten libremente y el voto es secreto, pero cuando el partido en el poder pierde la elección, se niega a entregar el gobierno y anula el resultado. ¿Por qué este sistema no es una democracia electoral, a pesar de la competencia real entre partidos?',
    options: [
      'porque falta la alternancia pacífica según el resultado; una elección competitiva cuyo resultado no se respeta no cumple todas las características necesarias',
      'porque ningún sistema con más de dos partidos puede ser considerado una democracia electoral',
      'porque el voto secreto por sí solo ya descalifica a un sistema como democracia electoral'
    ],
    correct_option_index: 0,
    explanation:
      'La democracia electoral exige que el poder se transfiera de forma pacífica conforme al resultado; una elección con competencia real y voto secreto, pero cuyo resultado no se respeta, no cumple esa característica.',
    common_error:
      'Evaluar la democracia electoral únicamente por la existencia de competencia y voto secreto, sin verificar si el resultado efectivamente se respeta y se traduce en alternancia cuando corresponde.',
    source_reference: 'Guía oficial, página 19, código 7.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dem-004',
    topic_id: 'cs-7-2-2-caracteristicas-de-la-democracia-electoral',
    prompt:
      'En un país, solo las personas con cierto nivel de ingreso pueden votar, aunque varios partidos compitan libremente y el resultado se respete siempre. ¿Por qué este sistema no cumple las características de la democracia electoral?',
    options: [
      'porque falta el sufragio universal: restringir el voto según el ingreso excluye a personas que deberían poder votar según los requisitos legales generales',
      'porque ningún sistema con restricciones de cualquier tipo puede considerarse una elección',
      'porque la democracia electoral exige que gane siempre el mismo partido para garantizar estabilidad'
    ],
    correct_option_index: 0,
    explanation:
      'Restringir el voto a un grupo definido por su ingreso, en vez de a los requisitos legales generales de edad y ciudadanía, viola el sufragio universal, una de las características necesarias de la democracia electoral.',
    common_error:
      'Suponer que cualquier requisito legal para votar (como la edad) es igual a una restricción arbitraria como el ingreso, sin distinguir entre un requisito general aplicado a todos y una exclusión de un grupo específico.',
    source_reference: 'Guía oficial, página 19, código 7.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dem-005',
    topic_id: 'cs-7-2-2-caracteristicas-de-la-democracia-electoral',
    prompt:
      'Ordena las etapas de un proceso electoral en el orden en que ocurren, de la primera a la última.\n\n1. Convocatoria y organización del proceso electoral\n2. Registro de candidaturas y campañas\n3. Jornada electoral (votación)\n4. Cómputo y calificación de resultados\n5. Toma de posesión de quien resultó electo',
    options: ['1, 2, 3, 4, 5', '2, 1, 4, 3, 5', '1, 3, 2, 5, 4'],
    correct_option_index: 0,
    explanation:
      'El proceso electoral inicia con la convocatoria y organización (1), sigue con el registro de candidaturas y las campañas (2), continúa con la jornada de votación (3), después el cómputo y calificación de resultados (4), y concluye con la toma de posesión de quien resultó electo (5).',
    common_error:
      'Colocar el registro de candidaturas antes de la convocatoria, o la toma de posesión antes del cómputo de resultados, sin seguir la secuencia real en que ocurre cada etapa.',
    source_reference: 'Guía oficial, página 19, código 7.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ciu-001',
    topic_id: 'cs-7-2-3-requisitos-para-obtener-ciudadania-mexicana',
    prompt:
      'Un adolescente de 15 años nació en territorio mexicano. ¿Es ciudadano mexicano según el artículo 34 constitucional?',
    options: [
      'sí, porque nació en México y por lo tanto tiene automáticamente la ciudadanía desde su nacimiento',
      'no todavía, porque tiene la nacionalidad mexicana desde su nacimiento, pero le falta cumplir el requisito de edad para ser considerado ciudadano',
      'no, porque solo las personas naturalizadas pueden llegar a ser ciudadanas mexicanas'
    ],
    correct_option_index: 1,
    explanation:
      'El artículo 34 exige, además de la calidad de mexicano, haber cumplido 18 años y tener un modo honesto de vivir; un adolescente de 15 años tiene la nacionalidad mexicana desde su nacimiento, pero no cumple el requisito de edad para ser ciudadano.',
    common_error:
      'Confundir la nacionalidad mexicana, que puede tenerse desde el nacimiento, con la ciudadanía, que además exige cumplir 18 años y tener un modo honesto de vivir.',
    source_reference: 'Guía oficial, página 19, código 7.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-ciu-002',
    topic_id: 'cs-7-2-3-requisitos-para-obtener-ciudadania-mexicana',
    prompt:
      'Además de tener la calidad de mexicano, el artículo 34 constitucional exige haber cumplido 18 años y tener un _______ para ser considerado ciudadano de la República.',
    options: ['modo honesto de vivir', 'empleo formal', 'domicilio fijo'],
    correct_option_index: 0,
    explanation:
      'El artículo 34 constitucional exige, junto con la calidad de mexicano y haber cumplido 18 años, tener un modo honesto de vivir para ser considerado ciudadano de la República.',
    common_error:
      'Suponer que tener un empleo formal o un domicilio fijo son requisitos constitucionales de ciudadanía, cuando el requisito adicional que exige el artículo 34 es tener un modo honesto de vivir.',
    source_reference: 'Guía oficial, página 19, código 7.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ciu-003',
    topic_id: 'cs-7-2-3-requisitos-para-obtener-ciudadania-mexicana',
    prompt:
      'Una persona se naturaliza mexicana a los 25 años y cumple con un modo honesto de vivir. ¿Es ciudadana mexicana?',
    options: [
      'sí, porque tiene la calidad de mexicana por naturalización y cumple los dos requisitos adicionales del artículo 34: haber cumplido 18 años y tener un modo honesto de vivir',
      'no, porque solo quienes son mexicanos por nacimiento pueden ser ciudadanos, nunca quienes se naturalizan',
      'no, porque la ciudadanía exige haber nacido y vivido siempre en territorio mexicano'
    ],
    correct_option_index: 0,
    explanation:
      'El artículo 34 no distingue entre mexicanos por nacimiento o por naturalización para efectos de ciudadanía: basta con tener la calidad de mexicano, por cualquiera de las dos vías, y cumplir los requisitos de edad y modo honesto de vivir.',
    common_error:
      'Suponer que la naturalización excluye a una persona de la ciudadanía, sin reconocer que el artículo 34 admite la calidad de mexicano tanto por nacimiento como por naturalización.',
    source_reference: 'Guía oficial, página 19, código 7.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ciu-004',
    topic_id: 'cs-7-2-3-requisitos-para-obtener-ciudadania-mexicana',
    prompt:
      "Alguien afirma que 'toda persona mexicana, sin importar su edad, es automáticamente ciudadana mexicana desde su nacimiento.' ¿Por qué esta afirmación es incorrecta?",
    options: [
      'porque la ciudadanía exige, además de la calidad de mexicano, cumplir 18 años y tener un modo honesto de vivir; un menor de edad tiene nacionalidad, pero no ciudadanía',
      'porque en realidad ningún mexicano por nacimiento puede llegar a ser ciudadano, solo quienes se naturalizan',
      'porque la ciudadanía se pierde automáticamente al cumplir 18 años, en vez de obtenerse con ellos'
    ],
    correct_option_index: 0,
    explanation:
      'La nacionalidad mexicana puede tenerse desde el nacimiento, pero la ciudadanía es un estatus adicional que exige cumplir 18 años y tener un modo honesto de vivir; un menor de edad no cumple todavía ese requisito.',
    common_error:
      'Tratar "ser mexicano" y "ser ciudadano mexicano" como sinónimos exactos, sin distinguir que la ciudadanía exige requisitos adicionales de edad y conducta.',
    source_reference: 'Guía oficial, página 19, código 7.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ciu-005',
    topic_id: 'cs-7-2-3-requisitos-para-obtener-ciudadania-mexicana',
    prompt:
      'Relaciona cada persona con si es o no ciudadana mexicana según el artículo 34 constitucional.\n\n1. Una persona de 20 años, nacida en México, con un modo honesto de vivir\n2. Un niño de 8 años, nacido en México\n3. Una persona de 30 años, naturalizada mexicana, con un modo honesto de vivir\n4. Una persona de 16 años, nacida en México\n\na. Sí es ciudadana mexicana\nb. No es ciudadana mexicana todavía',
    options: ['1a, 2b, 3a, 4b', '1b, 2a, 3b, 4a', '1a, 2a, 3b, 4b'],
    correct_option_index: 0,
    explanation:
      'Las personas de 20 y 30 años cumplen la calidad de mexicanas, la edad y, en este caso, el modo honesto de vivir, así que sí son ciudadanas (1a, 3a); el niño de 8 años y la persona de 16 años tienen nacionalidad mexicana, pero aún no cumplen el requisito de edad, así que todavía no son ciudadanos (2b, 4b).',
    common_error:
      'Clasificar como ciudadana a cualquier persona nacida en México sin verificar si ya cumplió 18 años, el requisito de edad que exige el artículo 34.',
    source_reference: 'Guía oficial, página 19, código 7.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-iem-001',
    topic_id: 'cs-7-2-4-funcion-de-instituciones-del-estado-mexicano',
    prompt:
      'Una colonia de reciente crecimiento urbano tiene un conflicto por la tenencia irregular de los terrenos donde se han construido las viviendas, sin que exista una planeación clara del uso del suelo. ¿Qué institución del estado mexicano atiende esta problemática?',
    options: [
      'la SEP, porque cualquier problemática dentro de una comunidad se relaciona con la educación de sus habitantes',
      'el CONADIS, porque cualquier problemática de vivienda afecta la inclusión de la población',
      'la SEDATU, porque el ordenamiento territorial, la tenencia de la tierra y el desarrollo urbano son parte de su mandato específico'
    ],
    correct_option_index: 2,
    explanation:
      'La SEDATU (Secretaría de Desarrollo Agrario, Territorial y Urbano) atiende específicamente el ordenamiento territorial, el desarrollo urbano y la tenencia de la tierra, el ámbito exacto de esta problemática.',
    common_error:
      'Asignar la institución por una asociación superficial de palabras (por ejemplo, "es un problema de vivienda, así que debe ser el CONADIS") en vez de ubicar el ámbito exacto de la problemática.',
    source_reference: 'Guía oficial, página 19, código 7.2.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-iem-002',
    topic_id: 'cs-7-2-4-funcion-de-instituciones-del-estado-mexicano',
    prompt:
      'La institución del estado mexicano encargada de atender problemáticas relacionadas con la inclusión y los derechos de las personas con discapacidad es el _______.',
    options: ['CONADIS', 'INAES', 'SEDATU'],
    correct_option_index: 0,
    explanation:
      'El CONADIS (Consejo Nacional para el Desarrollo y la Inclusión de las Personas con Discapacidad) es la institución encargada de atender la inclusión y los derechos de las personas con discapacidad.',
    common_error:
      'Confundir al CONADIS con el INAES, que atiende un ámbito distinto: el fomento de organizaciones de la economía social, no la inclusión de personas con discapacidad.',
    source_reference: 'Guía oficial, página 19, código 7.2.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-iem-003',
    topic_id: 'cs-7-2-4-funcion-de-instituciones-del-estado-mexicano',
    prompt:
      'Un grupo de artesanos decide organizarse en una cooperativa para producir y vender en conjunto, y busca apoyo institucional para formalizar esa organización. ¿Por qué esta problemática corresponde al INAES y no a la SEP?',
    options: [
      'porque se trata de fomentar una organización de la economía social, como una cooperativa, que es el ámbito específico del INAES, y no de un asunto educativo, ámbito de la SEP',
      'porque cualquier grupo de personas que se organiza corresponde automáticamente a la SEP',
      'porque el INAES y la SEP atienden exactamente el mismo ámbito, así que cualquiera de las dos sería correcta'
    ],
    correct_option_index: 0,
    explanation:
      'El INAES (Instituto Nacional de la Economía Social) atiende específicamente el fomento y desarrollo de organizaciones de la economía social, como las cooperativas, un ámbito distinto al educativo de la SEP.',
    common_error:
      'Asumir que cualquier grupo de personas organizándose corresponde a la SEP por tratarse de una "organización", sin identificar que el ámbito específico es la economía social.',
    source_reference: 'Guía oficial, página 19, código 7.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-iem-004',
    topic_id: 'cs-7-2-4-funcion-de-instituciones-del-estado-mexicano',
    prompt:
      "Una escuela pública reporta que sus planes de estudio no se han actualizado y solicita apoyo institucional para resolverlo. Alguien sugiere que debería atenderlo el INAES, 'porque cualquier institución educativa puede acudir a cualquier instancia del estado.' ¿Por qué esa sugerencia es incorrecta?",
    options: [
      'porque el ámbito de esta problemática es la educación pública, que corresponde específicamente a la SEP, y no al INAES, cuyo mandato es la economía social',
      'porque las escuelas públicas no pueden solicitar apoyo a ninguna institución del estado',
      'porque el INAES es la institución encargada de aprobar los planes de estudio en todo el país'
    ],
    correct_option_index: 0,
    explanation:
      'La actualización de planes de estudio de la educación pública corresponde al ámbito específico de la SEP, no al del INAES, cuyo mandato es el fomento de la economía social.',
    common_error:
      'Suponer que cualquier institución del estado puede atender cualquier problemática, sin verificar si el asunto corresponde al ámbito específico de su mandato.',
    source_reference: 'Guía oficial, página 19, código 7.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-iem-005',
    topic_id: 'cs-7-2-4-funcion-de-instituciones-del-estado-mexicano',
    prompt:
      'Relaciona cada problemática con la institución del estado mexicano que la atiende.\n\n1. Actualización de los planes de estudio de la educación pública\n2. Falta de accesibilidad en espacios públicos para personas con discapacidad\n3. Conflicto por la tenencia irregular de terrenos en una zona urbana\n4. Formalización de una cooperativa de producción\n\na. SEDATU\nb. SEP\nc. INAES\nd. CONADIS',
    options: ['1b, 2d, 3a, 4c', '1d, 2b, 3c, 4a', '1a, 2c, 3d, 4b'],
    correct_option_index: 0,
    explanation:
      'La actualización de planes de estudio corresponde a la SEP (b); la accesibilidad para personas con discapacidad, al CONADIS (d); la tenencia de la tierra en una zona urbana, a la SEDATU (a); y la formalización de una cooperativa, al INAES (c).',
    common_error:
      'Intercambiar el CONADIS y la SEDATU por su relación superficial con "problemas urbanos", sin distinguir que uno atiende la inclusión de personas con discapacidad y el otro el ordenamiento territorial.',
    source_reference: 'Guía oficial, página 19, código 7.2.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-pfa-001',
    topic_id: 'cs-7-2-5-poderes-facticos',
    prompt:
      'Un consorcio de medios de comunicación, sin ocupar ningún cargo público, decide qué temas cubrir y cómo presentarlos, y con ello logra influir de forma notable en la opinión pública sobre un asunto en discusión. ¿Este consorcio ejerce un poder fáctico?',
    options: [
      'no, porque solo las instituciones públicas pueden ejercer algún tipo de poder sobre la opinión pública',
      'sí, porque influye en un asunto de interés público sin tener una autoridad reconocida formalmente por la constitución o la ley',
      'no, porque los medios de comunicación privados no tienen ningún tipo de influencia real sobre la sociedad'
    ],
    correct_option_index: 1,
    explanation:
      'Un consorcio de medios que influye en la opinión pública sin ocupar ningún cargo público ni tener una autoridad reconocida formalmente es un ejemplo de poder fáctico: su influencia proviene del control que ejerce sobre la información.',
    common_error:
      'Suponer que solo las instituciones públicas pueden ejercer poder, sin reconocer que un actor privado puede influir de forma real en decisiones o percepciones de interés público sin tener autoridad formal.',
    source_reference: 'Guía oficial, página 19, código 7.2.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-pfa-002',
    topic_id: 'cs-7-2-5-poderes-facticos',
    prompt:
      'Un actor o grupo con capacidad real de influir en decisiones políticas o económicas, sin ocupar un cargo público ni contar con una autoridad reconocida formalmente por la constitución o la ley, se llama _______.',
    options: ['poder fáctico', 'poder formal', 'poder constituyente'],
    correct_option_index: 0,
    explanation:
      'El poder fáctico es precisamente el que ejerce un actor con capacidad real de influencia sin ocupar un cargo público ni tener una autoridad reconocida formalmente por la constitución o la ley.',
    common_error:
      'Confundir poder fáctico con poder formal, cuando el poder formal es exactamente el que sí proviene de un mandato reconocido por la constitución o la ley.',
    source_reference: 'Guía oficial, página 19, código 7.2.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-pfa-003',
    topic_id: 'cs-7-2-5-poderes-facticos',
    prompt:
      'Una persona que ocupa un cargo legislativo obtenido mediante elección tiene una influencia real sobre las decisiones del país. ¿Por qué esta persona no ejerce un poder fáctico, a pesar de su influencia?',
    options: [
      'porque su influencia proviene de un mandato formalmente reconocido por la constitución, y el poder fáctico se define precisamente por la ausencia de ese reconocimiento formal',
      'porque los cargos legislativos nunca tienen ninguna influencia real sobre las decisiones del país',
      'porque solo puede considerarse poder fáctico a quien ocupa un cargo público de forma temporal'
    ],
    correct_option_index: 0,
    explanation:
      'Lo que define al poder fáctico no es la magnitud de la influencia, sino que esa influencia se ejerza sin un mandato reconocido formalmente; un cargo obtenido por elección sí tiene ese reconocimiento formal.',
    common_error:
      'Confundir "tiene mucha influencia" con "es un poder fáctico", sin distinguir si esa influencia proviene o no de una autoridad formalmente reconocida.',
    source_reference: 'Guía oficial, página 19, código 7.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-pfa-004',
    topic_id: 'cs-7-2-5-poderes-facticos',
    prompt:
      "Una cámara empresarial, sin ocupar ningún cargo público, logra que se modifique una propuesta de ley mediante presión directa sobre quienes la discuten. Alguien afirma que esto no puede ser un poder fáctico 'porque los grupos empresariales no tienen ningún papel en la política.' ¿Por qué esa afirmación es incorrecta?",
    options: [
      'porque un actor puede influir en una decisión política sin ocupar un cargo público ni tener autoridad formal, que es exactamente la definición de poder fáctico, sin importar que se trate de un grupo empresarial',
      'porque las cámaras empresariales en realidad sí ocupan cargos públicos de forma automática',
      'porque ninguna presión externa puede modificar una propuesta de ley bajo ninguna circunstancia'
    ],
    correct_option_index: 0,
    explanation:
      'El origen del actor —empresarial, mediático, sindical o religioso— no determina si ejerce o no un poder fáctico; lo que lo determina es si influye en una decisión sin tener una autoridad formalmente reconocida.',
    common_error:
      'Suponer que un poder fáctico solo puede provenir de cierto tipo de actor, en vez de identificar el criterio real: influencia real sin autoridad formalmente reconocida.',
    source_reference: 'Guía oficial, página 19, código 7.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-pfa-005',
    topic_id: 'cs-7-2-5-poderes-facticos',
    prompt:
      'Relaciona cada actor con si ejerce o no un poder fáctico.\n\n1. Un sindicato que, sin cargo público, moviliza a un sector amplio de trabajadores para presionar una decisión económica\n2. Una secretaría de estado que, dentro de sus facultades legales, modifica una regulación mediante un decreto\n3. Una organización religiosa que, sin cargo público, influye ampliamente en la conducta de la población\n4. Una persona con un cargo de elección popular que aprueba una ley dentro de sus facultades constitucionales\n\na. Sí ejerce un poder fáctico\nb. No ejerce un poder fáctico',
    options: ['1a, 2b, 3a, 4b', '1b, 2a, 3b, 4a', '1a, 2a, 3b, 4b'],
    correct_option_index: 0,
    explanation:
      'El sindicato y la organización religiosa influyen sin tener una autoridad formalmente reconocida, así que ejercen poder fáctico (1a, 3a); la secretaría de estado y la persona con cargo de elección popular actúan dentro de facultades formalmente reconocidas, así que no ejercen poder fáctico (2b, 4b).',
    common_error:
      'Clasificar como poder fáctico a cualquier actor influyente, incluyendo instituciones y cargos con facultades formalmente reconocidas, sin verificar el origen de su autoridad.',
    source_reference: 'Guía oficial, página 19, código 7.2.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ppe-001',
    topic_id: 'cs-7-2-6-principios-de-politica-exterior',
    prompt:
      'El país A decide, por su propia decisión interna, adoptar un sistema económico distinto al que tenía antes, sin que ningún otro país participe en esa decisión. ¿Qué principio de política exterior ejemplifica esta situación?',
    options: [
      'la solución pacífica de controversias, porque cualquier cambio económico interno debe resolverse mediante negociación internacional',
      'la no intervención, porque ningún otro país intenta impedir la decisión del país A',
      'la autodeterminación de los pueblos, porque el país A decide por sí mismo su propio sistema, sin que otro estado se lo imponga'
    ],
    correct_option_index: 2,
    explanation:
      'La autodeterminación de los pueblos es el derecho de un pueblo a decidir por sí mismo su propio sistema político, económico y social, exactamente lo que describe la decisión interna del país A.',
    common_error:
      'Confundir la autodeterminación, que describe el derecho de quien decide, con la no intervención, que describe la obligación de los demás estados de no interferir en esa decisión.',
    source_reference: 'Guía oficial, página 19, código 7.2.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-ppe-002',
    topic_id: 'cs-7-2-6-principios-de-politica-exterior',
    prompt:
      'El principio constitucional según el cual los conflictos entre estados deben resolverse mediante negociación, mediación o el derecho internacional, y no mediante el uso de la fuerza, se llama _______.',
    options: ['solución pacífica de controversias', 'autodeterminación de los pueblos', 'no intervención'],
    correct_option_index: 0,
    explanation:
      'La solución pacífica de controversias es el principio que exige resolver los conflictos entre estados mediante negociación, mediación o el derecho internacional, en vez de la fuerza.',
    common_error:
      'Confundir la solución pacífica de controversias con la no intervención, cuando la primera se refiere a cómo resolver un conflicto ya existente, y la segunda a no interferir en asuntos internos ajenos.',
    source_reference: 'Guía oficial, página 19, código 7.2.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ppe-003',
    topic_id: 'cs-7-2-6-principios-de-politica-exterior',
    prompt:
      'El país B, en desacuerdo con una decisión interna del país C, se abstiene de interferir en sus asuntos internos y no intenta imponerle un cambio. ¿Por qué esta situación ejemplifica la no intervención y no la autodeterminación de los pueblos?',
    options: [
      'porque describe la conducta del país B, que se abstiene de interferir en asuntos ajenos, mientras que la autodeterminación describiría, desde la perspectiva del país C, su propio derecho a decidir su sistema',
      'porque la no intervención y la autodeterminación de los pueblos significan exactamente lo mismo, así que cualquiera de las dos sería correcta',
      'porque solo puede hablarse de no intervención cuando dos países tienen un conflicto militar activo'
    ],
    correct_option_index: 0,
    explanation:
      'La no intervención describe la conducta de quien se abstiene de interferir en asuntos ajenos (el país B), mientras que la autodeterminación describe el derecho de quien decide su propio sistema (el país C); ambos principios se relacionan, pero nombran lados distintos de la situación.',
    common_error:
      'Tratar la autodeterminación de los pueblos y la no intervención como sinónimos, sin distinguir que cada una describe la perspectiva de un actor distinto dentro de la misma situación.',
    source_reference: 'Guía oficial, página 19, código 7.2.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ppe-004',
    topic_id: 'cs-7-2-6-principios-de-politica-exterior',
    prompt:
      'Dos países en desacuerdo sobre el trazo de una frontera aceptan resolver el conflicto mediante un tribunal internacional en vez de recurrir a la fuerza militar. ¿Por qué esta situación ejemplifica la solución pacífica de controversias y no la autodeterminación de los pueblos?',
    options: [
      'porque se trata de resolver un conflicto ya existente entre dos estados mediante una vía distinta a la fuerza, mientras que la autodeterminación se refiere al derecho de un pueblo a decidir su propio sistema, no a cómo resolver un conflicto entre estados',
      'porque la autodeterminación de los pueblos solo aplica cuando participa un tribunal internacional',
      'porque ambos principios describen exactamente la misma situación, sin ninguna diferencia real'
    ],
    correct_option_index: 0,
    explanation:
      'La solución pacífica de controversias se aplica específicamente a cómo resolver un conflicto ya existente entre estados, mientras que la autodeterminación se refiere al derecho de un pueblo a decidir su propio sistema, un asunto distinto.',
    common_error:
      'Aplicar el principio de autodeterminación a cualquier situación entre dos países, sin verificar si en realidad se trata de resolver un conflicto ya existente, que es el ámbito de la solución pacífica de controversias.',
    source_reference: 'Guía oficial, página 19, código 7.2.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-ppe-005',
    topic_id: 'cs-7-2-6-principios-de-politica-exterior',
    prompt:
      'Relaciona cada situación con el principio de política exterior que ejemplifica.\n\n1. Un país decide, sin presión externa, mantener su propio sistema político aunque otros países lo critiquen\n2. Un país se abstiene de interferir en una decisión interna de otro país, aunque esté en desacuerdo con ella\n3. Dos países en conflicto aceptan resolverlo mediante mediación internacional en vez de la fuerza\n\na. Autodeterminación de los pueblos\nb. No intervención\nc. Solución pacífica de controversias',
    options: ['1a, 2b, 3c', '1b, 2c, 3a', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Decidir el propio sistema sin presión externa es autodeterminación (1a); abstenerse de interferir en asuntos ajenos es no intervención (2b); resolver un conflicto mediante mediación en vez de la fuerza es solución pacífica de controversias (3c).',
    common_error:
      'Confundir la autodeterminación con la no intervención por describir situaciones relacionadas, sin distinguir si el enunciado describe el derecho de quien decide o la conducta de quien se abstiene de interferir.',
    source_reference: 'Guía oficial, página 19, código 7.2.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-oin-001',
    topic_id: 'cs-7-2-7-organismos-internacionales',
    prompt:
      'Un país solicita apoyo internacional para declarar y preservar un sitio arqueológico como parte del patrimonio cultural de la humanidad. ¿Qué organismo internacional atiende esta problemática?',
    options: [
      'la FAO, porque cualquier patrimonio de un país se relaciona con sus recursos naturales',
      'la UNESCO, porque la preservación del patrimonio cultural es parte de su mandato en educación, ciencia y cultura',
      'la OIT, porque preservar un sitio arqueológico requiere trabajadores calificados'
    ],
    correct_option_index: 1,
    explanation:
      'La UNESCO atiende específicamente la cooperación internacional en educación, ciencia y cultura, incluyendo la preservación del patrimonio cultural, el ámbito exacto de esta problemática.',
    common_error:
      'Asignar el organismo por una asociación superficial (por ejemplo, "un sitio arqueológico usa recursos naturales, así que es la FAO"), sin identificar el ámbito específico de patrimonio cultural.',
    source_reference: 'Guía oficial, página 19, código 7.2.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-oin-002',
    topic_id: 'cs-7-2-7-organismos-internacionales',
    prompt:
      'El organismo internacional encargado de establecer normas laborales internacionales y promover el trabajo digno y los derechos laborales es la _______.',
    options: ['OIT', 'FAO', 'UNESCO'],
    correct_option_index: 0,
    explanation:
      'La OIT (Organización Internacional del Trabajo) es el organismo encargado de establecer normas laborales internacionales y promover el trabajo digno y los derechos laborales.',
    common_error:
      'Confundir la OIT con la FAO o la UNESCO, cuyos mandatos son la alimentación/agricultura y la educación/ciencia/cultura, respectivamente, no las condiciones laborales.',
    source_reference: 'Guía oficial, página 19, código 7.2.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-oin-003',
    topic_id: 'cs-7-2-7-organismos-internacionales',
    prompt:
      'Una región enfrenta una crisis de desnutrición infantil y busca cooperación internacional para mejorar la producción agrícola local y la seguridad alimentaria. ¿Por qué esta problemática corresponde a la FAO y no a la UNESCO?',
    options: [
      'porque se trata de un asunto de alimentación y agricultura, que es el ámbito específico de la FAO, y no de educación, ciencia o cultura, ámbito de la UNESCO',
      'porque la UNESCO y la FAO atienden exactamente el mismo ámbito, así que cualquiera de las dos sería correcta',
      'porque solo la UNESCO puede intervenir en asuntos relacionados con la infancia'
    ],
    correct_option_index: 0,
    explanation:
      'La FAO atiende específicamente la seguridad alimentaria y el desarrollo agrícola, el ámbito exacto de esta problemática, mientras que la UNESCO atiende educación, ciencia y cultura, un ámbito distinto.',
    common_error:
      'Asignar el organismo por la presencia de un grupo poblacional mencionado (como la infancia), en vez de identificar el ámbito real de la problemática: alimentación y agricultura.',
    source_reference: 'Guía oficial, página 19, código 7.2.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-oin-004',
    topic_id: 'cs-7-2-7-organismos-internacionales',
    prompt:
      "Trabajadores de un sector reportan jornadas excesivas sin condiciones mínimas de seguridad, y se solicita el establecimiento de normas internacionales para regularlas. Alguien sugiere que debería atenderlo la FAO, 'porque cualquier organismo internacional puede atender cualquier tema laboral.' ¿Por qué esa sugerencia es incorrecta?",
    options: [
      'porque el ámbito de esta problemática son las condiciones laborales, que corresponde específicamente a la OIT, y no a la FAO, cuyo mandato es la alimentación y la agricultura',
      'porque ningún organismo internacional puede establecer normas laborales bajo ninguna circunstancia',
      'porque la FAO es el organismo encargado de aprobar las leyes laborales de cada país'
    ],
    correct_option_index: 0,
    explanation:
      'Las condiciones laborales y las normas del trabajo corresponden específicamente al mandato de la OIT, no al de la FAO, que atiende alimentación y agricultura.',
    common_error:
      'Suponer que cualquier organismo internacional puede atender cualquier tema, sin verificar si el asunto corresponde al mandato específico de ese organismo.',
    source_reference: 'Guía oficial, página 19, código 7.2.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-oin-005',
    topic_id: 'cs-7-2-7-organismos-internacionales',
    prompt:
      'Relaciona cada problemática con el organismo internacional que la atiende.\n\n1. Preservación de un sitio arqueológico como patrimonio cultural\n2. Mejora de la seguridad alimentaria mediante desarrollo agrícola sostenible\n3. Establecimiento de normas internacionales sobre condiciones laborales\n\na. OIT\nb. UNESCO\nc. FAO',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'La preservación del patrimonio cultural corresponde a la UNESCO (b); la seguridad alimentaria y el desarrollo agrícola, a la FAO (c); y las normas laborales internacionales, a la OIT (a).',
    common_error:
      'Intercambiar la UNESCO y la FAO por asociarlas ambas con "desarrollo", sin distinguir que una atiende cultura/educación y la otra alimentación/agricultura.',
    source_reference: 'Guía oficial, página 19, código 7.2.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-asm-001',
    topic_id: 'cs-7-2-8-areas-en-el-sistema-mundo',
    prompt:
      'Una región se dedica principalmente a extraer un mineral sin procesarlo, depende de tecnología importada de otras regiones para hacerlo, y exporta ese mineral en bruto para que se transforme en otro lugar. ¿Cómo se clasifica esta región según la teoría del sistema-mundo?',
    options: [
      'como área central, porque exporta un recurso valioso a otras regiones',
      'como arena exterior, porque no participa en ningún intercambio comercial con otras regiones',
      'como área periférica, porque se especializa en la extracción de materia prima sin procesar y depende tecnológicamente de otras regiones'
    ],
    correct_option_index: 2,
    explanation:
      'El área periférica se especializa en la extracción de materias primas y actividades de bajo valor agregado, con dependencia tecnológica de las áreas centrales, exactamente lo que describe esta región.',
    common_error:
      'Clasificar como área central a cualquier región que exporta un recurso, sin verificar si lo hace sin procesarlo y con dependencia tecnológica, características del área periférica.',
    source_reference: 'Guía oficial, página 19, código 7.2.8.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-asm-002',
    topic_id: 'cs-7-2-8-areas-en-el-sistema-mundo',
    prompt:
      'El área del sistema-mundo que concentra actividades económicas de alto valor agregado, tecnología avanzada y mayor poder económico y político dentro del sistema se llama área _______.',
    options: ['central', 'periférica', 'exterior'],
    correct_option_index: 0,
    explanation:
      'El área central es la que concentra actividades de alto valor agregado, tecnología avanzada y mayor poder económico y político dentro del sistema-mundo.',
    common_error:
      'Confundir el área central con el área periférica, cuando esta última se especializa en actividades de bajo valor agregado y depende tecnológicamente del área central.',
    source_reference: 'Guía oficial, página 19, código 7.2.8.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-asm-003',
    topic_id: 'cs-7-2-8-areas-en-el-sistema-mundo',
    prompt:
      'Una región realiza tanto manufactura compleja de algunos productos como extracción de materias primas para exportarlas sin procesar, y funciona como puente comercial entre otras dos regiones. ¿Por qué se clasifica como área semiperiférica y no como área central o periférica?',
    options: [
      'porque combina características de ambas —manufactura compleja del área central y extracción sin procesar del área periférica— y funciona como intermediaria entre ellas',
      'porque cualquier región que exporte algún producto se clasifica automáticamente como área central',
      'porque el área semiperiférica se define únicamente por su ubicación geográfica entre dos países'
    ],
    correct_option_index: 0,
    explanation:
      'El área semiperiférica combina rasgos del área central (manufactura compleja) y del área periférica (extracción sin procesar), y funciona como intermediaria entre ambas, sin encajar por completo en ninguna de las dos.',
    common_error:
      'Clasificar el área semiperiférica solo por su posición geográfica intermedia, sin verificar si en realidad combina actividades económicas propias de ambos tipos de área.',
    source_reference: 'Guía oficial, página 19, código 7.2.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-asm-004',
    topic_id: 'cs-7-2-8-areas-en-el-sistema-mundo',
    prompt:
      "Alguien afirma que 'una región se clasifica como área central o periférica según qué tan grande sea su territorio, no según sus actividades económicas.' ¿Por qué esta afirmación es incorrecta?",
    options: [
      'porque la clasificación depende de las características económicas de la región —el tipo de actividad que realiza y su grado de dependencia tecnológica—, no del tamaño de su territorio',
      'porque en realidad todas las regiones con mayor territorio son siempre áreas centrales, sin excepción',
      'porque el tamaño del territorio es el único criterio que usa la teoría del sistema-mundo'
    ],
    correct_option_index: 0,
    explanation:
      'La teoría del sistema-mundo clasifica a las regiones según sus características económicas —tipo de actividad, valor agregado y dependencia tecnológica—, no según el tamaño de su territorio.',
    common_error:
      'Sustituir el criterio económico real de la clasificación por un criterio no relacionado, como el tamaño del territorio, sin verificar qué actividad económica realiza la región.',
    source_reference: 'Guía oficial, página 19, código 7.2.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-asm-005',
    topic_id: 'cs-7-2-8-areas-en-el-sistema-mundo',
    prompt:
      'Relaciona cada descripción con el área del sistema-mundo que representa.\n\n1. Concentra tecnología avanzada, actividades de alto valor agregado y mayor poder dentro del sistema\n2. Se especializa en extraer materia prima sin procesarla, con dependencia tecnológica de otras regiones\n3. Combina manufactura compleja y extracción de recursos, funcionando como intermediaria\n4. Permaneció, durante un periodo histórico, fuera de la red de intercambio del sistema-mundo\n\na. Área periférica\nb. Área central\nc. Arena exterior\nd. Área semiperiférica',
    options: ['1b, 2a, 3d, 4c', '1a, 2b, 3c, 4d', '1c, 2d, 3a, 4b'],
    correct_option_index: 0,
    explanation:
      'La concentración de tecnología avanzada y mayor poder corresponde al área central (b); la extracción de materia prima con dependencia tecnológica, al área periférica (a); combinar rasgos de ambas y funcionar como intermediaria, al área semiperiférica (d); y permanecer fuera de la red de intercambio, a la arena exterior (c).',
    common_error:
      'Confundir el área periférica con la arena exterior, sin distinguir que la primera sí participa en el sistema-mundo (extrayendo materia prima) mientras que la segunda permanece fuera de su red de intercambio.',
    source_reference: 'Guía oficial, página 19, código 7.2.8.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tos-001',
    topic_id: 'cs-7-3-1-tipos-de-organizacion-social',
    prompt:
      'Los integrantes de un club de ajedrez se reúnen cada semana, se conocen entre sí y coordinan juntos sus actividades. ¿A qué forma de organización social corresponde este club?',
    options: [
      'a una comunidad, porque todos comparten el mismo interés por el ajedrez',
      'a un grupo social, porque interactúan de manera estable entre sí y comparten un objetivo común',
      'a una clase social, porque todos ocupan una posición similar en la estructura económica'
    ],
    correct_option_index: 1,
    explanation:
      'Un grupo social se define por una interacción relativamente estable entre sus integrantes y un objetivo común, exactamente lo que describe este club de ajedrez.',
    common_error:
      'Confundir grupo social con comunidad por el simple hecho de compartir un interés, sin verificar si existe una interacción directa y estable entre sus integrantes.',
    source_reference: 'Guía oficial, página 20, código 7.3.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-tos-002',
    topic_id: 'cs-7-3-1-tipos-de-organizacion-social',
    prompt:
      'Un conjunto estable y socialmente reconocido de normas, roles y prácticas que regula un ámbito de la vida social, como la escuela o el matrimonio, se llama _______.',
    options: ['institución', 'grupo social', 'comunidad'],
    correct_option_index: 0,
    explanation:
      'Una institución es un conjunto estable y socialmente reconocido de normas, roles y prácticas que regula un ámbito de la vida social, como la escuela o el matrimonio.',
    common_error:
      'Confundir institución con grupo social, cuando la institución es un conjunto de normas y roles reconocidos socialmente, no un conjunto de personas que interactúan directamente entre sí.',
    source_reference: 'Guía oficial, página 20, código 7.3.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tos-003',
    topic_id: 'cs-7-3-1-tipos-de-organizacion-social',
    prompt:
      'Dos personas que trabajan en empresas distintas, sin conocerse ni haber interactuado nunca, tienen un nivel de ingreso y acceso a recursos similar. ¿Por qué esto no las convierte en un grupo social, aunque compartan una clase social?',
    options: [
      'porque un grupo social exige una interacción relativamente estable entre sus integrantes, y compartir una posición económica no implica esa interacción',
      'porque en realidad dos personas con el mismo ingreso siempre pertenecen al mismo grupo social',
      'porque la clase social y el grupo social son exactamente el mismo concepto con otro nombre'
    ],
    correct_option_index: 0,
    explanation:
      'Compartir una clase social significa ocupar una posición económica similar, sin que eso implique ninguna interacción directa; un grupo social, en cambio, exige esa interacción relativamente estable entre sus integrantes.',
    common_error:
      'Suponer que compartir una característica común, como el ingreso, basta para formar un grupo social, sin verificar si existe una interacción directa entre las personas.',
    source_reference: 'Guía oficial, página 20, código 7.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tos-004',
    topic_id: 'cs-7-3-1-tipos-de-organizacion-social',
    prompt:
      'Los habitantes de un pueblo comparten el mismo idioma, las mismas costumbres y normas de convivencia, aunque no todos se conozcan entre sí personalmente. ¿Por qué esto corresponde a una comunidad y no a un grupo social?',
    options: [
      'porque una comunidad se define por compartir territorio, costumbres y forma de comunicarse, sin exigir que todos sus integrantes interactúen directamente entre sí, a diferencia de un grupo social',
      'porque un pueblo nunca puede considerarse una comunidad si tiene más de cierto número de habitantes',
      'porque comunidad y grupo social son sinónimos exactos en cualquier contexto'
    ],
    correct_option_index: 0,
    explanation:
      'Una comunidad comparte territorio, costumbres y forma de comunicarse sin que se exija una interacción directa entre todos sus integrantes, mientras que un grupo social sí exige esa interacción relativamente estable.',
    common_error:
      'Tratar comunidad y grupo social como sinónimos, sin distinguir que la comunidad no exige interacción directa entre todos sus integrantes.',
    source_reference: 'Guía oficial, página 20, código 7.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-tos-005',
    topic_id: 'cs-7-3-1-tipos-de-organizacion-social',
    prompt:
      'Relaciona cada situación con la forma de organización social que representa.\n\n1. Un equipo de trabajo que se reúne a diario y coordina directamente sus tareas\n2. Los habitantes de una colonia que comparten costumbres y forma de comunicarse, sin conocerse todos entre sí\n3. Un conjunto de personas con un nivel de ingreso similar, sin interactuar entre sí\n4. El conjunto de normas y roles reconocidos socialmente que regula la vida escolar\n\na. Clase social\nb. Grupo social\nc. Institución\nd. Comunidad',
    options: ['1b, 2d, 3a, 4c', '1d, 2b, 3c, 4a', '1a, 2c, 3d, 4b'],
    correct_option_index: 0,
    explanation:
      'El equipo de trabajo con interacción directa es un grupo social (b); los habitantes de la colonia que comparten costumbres son una comunidad (d); las personas con ingreso similar sin interactuar son una clase social (a); las normas que regulan la vida escolar son una institución (c).',
    common_error:
      'Confundir comunidad con grupo social al no distinguir si la situación exige o no una interacción directa entre todos sus integrantes.',
    source_reference: 'Guía oficial, página 20, código 7.3.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idc-001',
    topic_id: 'cs-7-3-2-indicadores-de-desarrollo-comunitario',
    prompt:
      'Un estudio mide qué porcentaje de las viviendas de una localidad cuenta con conexión a la red de agua potable. ¿Este estudio mide un indicador de bienestar o de desarrollo comunitario?',
    options: [
      'de bienestar, porque el agua potable es una necesidad vital para cualquier persona',
      'de bienestar, porque describe la situación de cada persona de forma individual',
      'de desarrollo comunitario, porque describe una condición de infraestructura disponible para toda la localidad, no la situación de una persona u hogar particular'
    ],
    correct_option_index: 2,
    explanation:
      'Medir la cobertura de agua potable de toda una localidad describe una condición colectiva de infraestructura, propia de un indicador de desarrollo comunitario, y no la situación particular de una persona u hogar.',
    common_error:
      'Clasificar un indicador según el tema del que trata (como el agua potable) en vez de según la unidad que mide: una localidad completa o una persona/hogar particular.',
    source_reference: 'Guía oficial, página 20, código 7.3.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-idc-002',
    topic_id: 'cs-7-3-2-indicadores-de-desarrollo-comunitario',
    prompt:
      'Un indicador que mide condiciones colectivas de infraestructura y acceso a servicios disponibles para toda una localidad, sin describir la situación particular de una persona u hogar, es un indicador de _______.',
    options: ['desarrollo comunitario', 'bienestar', 'clase social'],
    correct_option_index: 0,
    explanation:
      'Un indicador de desarrollo comunitario mide condiciones colectivas de infraestructura disponibles para toda una localidad, sin describir la situación particular de una persona u hogar.',
    common_error:
      'Confundir desarrollo comunitario con bienestar, cuando este último mide la situación de una persona u hogar particular, no la infraestructura colectiva de una localidad.',
    source_reference: 'Guía oficial, página 20, código 7.3.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idc-003',
    topic_id: 'cs-7-3-2-indicadores-de-desarrollo-comunitario',
    prompt:
      "Un estudio mide si una vivienda específica cuenta con conexión a la red eléctrica. Alguien afirma que esto es un indicador de desarrollo comunitario 'porque trata sobre infraestructura'. ¿Por qué esa afirmación es incorrecta?",
    options: [
      'porque describe la situación de una vivienda particular, no una condición colectiva de toda la localidad, así que es un indicador de bienestar, no de desarrollo comunitario',
      'porque la electricidad nunca se considera parte de ningún tipo de indicador social',
      'porque un indicador de desarrollo comunitario solo puede referirse a escuelas, nunca a servicios básicos'
    ],
    correct_option_index: 0,
    explanation:
      'El criterio de clasificación es la unidad que se mide, no el tema del indicador; medir una vivienda particular describe una situación de bienestar, aunque el tema (electricidad) también pueda medirse a nivel de infraestructura colectiva.',
    common_error:
      'Clasificar un indicador únicamente por el tema del que trata (infraestructura, servicios), sin verificar si describe una localidad completa o una persona/hogar particular.',
    source_reference: 'Guía oficial, página 20, código 7.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idc-004',
    topic_id: 'cs-7-3-2-indicadores-de-desarrollo-comunitario',
    prompt:
      '¿Por qué medir qué porcentaje de las localidades de una región cuenta con al menos una escuela primaria cercana es un indicador de desarrollo comunitario y no de bienestar?',
    options: [
      'porque describe una condición de infraestructura disponible para localidades completas, no la situación educativa de una persona particular',
      'porque cualquier indicador relacionado con la educación es automáticamente de desarrollo comunitario',
      'porque el bienestar nunca puede relacionarse con el acceso a la educación'
    ],
    correct_option_index: 0,
    explanation:
      'Medir la disponibilidad de escuelas cercanas para localidades completas describe una condición colectiva de infraestructura, propia del desarrollo comunitario, y no la situación educativa de una persona particular.',
    common_error:
      'Suponer que el tema del indicador (educación) determina su tipo, en vez de verificar si describe una localidad completa o a una persona particular.',
    source_reference: 'Guía oficial, página 20, código 7.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idc-005',
    topic_id: 'cs-7-3-2-indicadores-de-desarrollo-comunitario',
    prompt:
      'Relaciona cada indicador con el tipo al que corresponde.\n\n1. Porcentaje de calles pavimentadas en una localidad\n2. Ingreso mensual de un hogar específico\n3. Cobertura de drenaje en una localidad\n4. Años de escolaridad de una persona particular\n\na. Indicador de bienestar\nb. Indicador de desarrollo comunitario',
    options: ['1b, 2a, 3b, 4a', '1a, 2b, 3a, 4b', '1b, 2b, 3a, 4a'],
    correct_option_index: 0,
    explanation:
      'Las calles pavimentadas y el drenaje son condiciones de infraestructura de toda la localidad, así que son indicadores de desarrollo comunitario (b); el ingreso de un hogar y la escolaridad de una persona describen situaciones particulares, así que son indicadores de bienestar (a).',
    common_error:
      'Clasificar por el tema del indicador en vez de por la unidad que mide: una localidad completa o una persona/hogar particular.',
    source_reference: 'Guía oficial, página 20, código 7.3.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idb-001',
    topic_id: 'cs-7-3-3-indicadores-de-bienestar',
    prompt:
      'Un estudio mide si el ingreso de un hogar específico alcanza para cubrir una canasta básica de alimentos. ¿Este estudio mide un indicador de bienestar o de desarrollo comunitario?',
    options: [
      'de desarrollo comunitario, porque el ingreso siempre se mide a nivel de toda una localidad',
      'de bienestar, porque describe la situación económica de un hogar particular',
      'de desarrollo comunitario, porque la alimentación es una necesidad vital para toda la población'
    ],
    correct_option_index: 1,
    explanation:
      'Medir el ingreso de un hogar específico describe la situación económica de una unidad particular, propia de un indicador de bienestar, y no una condición colectiva de infraestructura de toda una localidad.',
    common_error:
      'Suponer que un indicador relacionado con una necesidad básica es automáticamente de desarrollo comunitario, sin verificar si describe a una persona/hogar particular o a una localidad completa.',
    source_reference: 'Guía oficial, página 20, código 7.3.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-idb-002',
    topic_id: 'cs-7-3-3-indicadores-de-bienestar',
    prompt:
      'Un indicador que mide las condiciones de vida de una persona o un hogar particular —su ingreso, su alimentación, su nivel educativo— es un indicador de _______.',
    options: ['bienestar', 'desarrollo comunitario', 'organización social'],
    correct_option_index: 0,
    explanation:
      'Un indicador de bienestar mide las condiciones de vida de una persona o un hogar particular, como su ingreso, alimentación o nivel educativo.',
    common_error:
      'Confundir bienestar con desarrollo comunitario, cuando este último mide condiciones colectivas de infraestructura de toda una localidad, no la situación de una persona u hogar particular.',
    source_reference: 'Guía oficial, página 20, código 7.3.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idb-003',
    topic_id: 'cs-7-3-3-indicadores-de-bienestar',
    prompt:
      "Un estudio mide qué porcentaje de las escuelas de una localidad cuenta con suministro eléctrico. Alguien afirma que esto es un indicador de bienestar 'porque se relaciona con la educación'. ¿Por qué esa afirmación es incorrecta?",
    options: [
      'porque describe una condición de infraestructura de toda la localidad, no la situación particular de una persona u hogar, así que es un indicador de desarrollo comunitario, no de bienestar',
      'porque la electricidad nunca puede relacionarse con ningún indicador social',
      'porque el bienestar solo puede medirse a través del ingreso, nunca de la educación'
    ],
    correct_option_index: 0,
    explanation:
      'El criterio de clasificación es la unidad que se mide, no el tema; medir la infraestructura eléctrica de las escuelas de toda una localidad es un indicador de desarrollo comunitario, no de bienestar.',
    common_error:
      'Clasificar un indicador únicamente por el tema del que trata (educación), sin verificar si describe una localidad completa o una persona/hogar particular.',
    source_reference: 'Guía oficial, página 20, código 7.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idb-004',
    topic_id: 'cs-7-3-3-indicadores-de-bienestar',
    prompt:
      '¿Por qué medir cuántos años de escolaridad completó, en promedio, cada integrante adulto de un hogar específico es un indicador de bienestar y no de desarrollo comunitario?',
    options: [
      'porque describe una condición de las personas de un hogar particular, no la infraestructura educativa disponible para toda la localidad',
      'porque cualquier indicador relacionado con la escolaridad es automáticamente de desarrollo comunitario',
      'porque el desarrollo comunitario nunca puede relacionarse con la educación'
    ],
    correct_option_index: 0,
    explanation:
      'Medir la escolaridad de las personas de un hogar particular describe una condición de bienestar, mientras que medir la disponibilidad de escuelas para toda una localidad sería un indicador de desarrollo comunitario.',
    common_error:
      'Suponer que el tema del indicador (escolaridad) determina su tipo, en vez de verificar si describe a un hogar particular o a una localidad completa.',
    source_reference: 'Guía oficial, página 20, código 7.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-idb-005',
    topic_id: 'cs-7-3-3-indicadores-de-bienestar',
    prompt:
      'Relaciona cada indicador con el tipo al que corresponde.\n\n1. Nivel de ingreso de un hogar específico\n2. Porcentaje de escuelas de una localidad con acceso a internet\n3. Acceso individual de una persona a servicios de salud\n4. Cobertura de agua potable en una localidad\n\na. Indicador de desarrollo comunitario\nb. Indicador de bienestar',
    options: ['1b, 2a, 3b, 4a', '1a, 2b, 3a, 4b', '1b, 2b, 3a, 4a'],
    correct_option_index: 0,
    explanation:
      'El ingreso de un hogar y el acceso individual a servicios de salud describen situaciones particulares, así que son indicadores de bienestar (b); las escuelas con internet y la cobertura de agua potable son condiciones de infraestructura de toda la localidad, así que son indicadores de desarrollo comunitario (a).',
    common_error:
      'Clasificar por el tema del indicador en vez de por la unidad que mide: una persona/hogar particular o una localidad completa.',
    source_reference: 'Guía oficial, página 20, código 7.3.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-seg-001',
    topic_id: 'cs-7-3-4-factores-que-propician-la-segregacion-social',
    prompt:
      'Una empresa rechaza automáticamente las solicitudes de empleo de personas mayores de cierta edad, basándose en la creencia de que no pueden aprender cosas nuevas. ¿Esto es un estereotipo, una discriminación o una exclusión?',
    options: [
      'un estereotipo, porque solo describe una creencia generalizada, sin ninguna acción concreta',
      'una exclusión, porque describe el apartamiento sostenido del acceso a un espacio durante años',
      'una discriminación, porque describe un trato desigual concreto que niega una oportunidad, basado en un estereotipo'
    ],
    correct_option_index: 2,
    explanation:
      'Rechazar automáticamente solicitudes de empleo por edad es un trato desigual concreto que niega una oportunidad, basado en un estereotipo: exactamente la definición de discriminación.',
    common_error:
      'Confundir un acto concreto de trato desigual con solo una creencia (estereotipo), sin notar que aquí ya se describe una acción específica que niega una oportunidad.',
    source_reference: 'Guía oficial, página 20, código 7.3.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-seg-002',
    topic_id: 'cs-7-3-4-factores-que-propician-la-segregacion-social',
    prompt:
      'Una creencia generalizada y simplificada sobre las características de un grupo de personas, sin considerar la diversidad real dentro de ese grupo, se llama _______.',
    options: ['estereotipo', 'discriminación', 'exclusión'],
    correct_option_index: 0,
    explanation:
      'Un estereotipo es una creencia generalizada y simplificada sobre las características de un grupo de personas, sin considerar la diversidad real dentro de ese grupo.',
    common_error:
      'Confundir estereotipo con discriminación, cuando el estereotipo es solo la creencia y la discriminación es el trato desigual concreto basado en ella.',
    source_reference: 'Guía oficial, página 20, código 7.3.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-seg-003',
    topic_id: 'cs-7-3-4-factores-que-propician-la-segregacion-social',
    prompt:
      'Alguien sostiene, sin conocerlas, que todas las personas de cierto origen son iguales entre sí en su forma de ser. Sin embargo, esa persona nunca ha negado una oportunidad concreta a nadie por ese motivo. ¿Por qué esta situación es un estereotipo y no todavía una discriminación?',
    options: [
      'porque la discriminación exige un trato desigual concreto que niegue una oportunidad, y aquí solo se describe una creencia generalizada, sin esa acción concreta',
      'porque un estereotipo y una discriminación son exactamente lo mismo, así que cualquiera de las dos sería correcta',
      'porque solo puede haber discriminación si intervienen instituciones públicas'
    ],
    correct_option_index: 0,
    explanation:
      'Mientras la creencia generalizada no se traduzca en un trato desigual concreto que niegue una oportunidad, se trata solo de un estereotipo, no todavía de una discriminación.',
    common_error:
      'Tratar estereotipo y discriminación como sinónimos, sin verificar si la creencia ya se tradujo en un trato desigual concreto.',
    source_reference: 'Guía oficial, página 20, código 7.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-seg-004',
    topic_id: 'cs-7-3-4-factores-que-propician-la-segregacion-social',
    prompt:
      'Durante años, un grupo de personas de cierto origen no puede acceder a ciertos espacios recreativos de una ciudad porque se les ha negado sistemáticamente el ingreso. ¿Por qué esto corresponde a una exclusión y no solo a un acto aislado de discriminación?',
    options: [
      'porque describe un apartamiento sostenido en el tiempo del acceso a un espacio, resultado de la discriminación repetida, y no un solo acto aislado',
      'porque exclusión y discriminación son exactamente el mismo concepto con otro nombre',
      'porque solo puede haber exclusión si el espacio negado es un espacio público del estado'
    ],
    correct_option_index: 0,
    explanation:
      'La exclusión describe un apartamiento sostenido en el tiempo del acceso a espacios o recursos, resultado de la discriminación repetida, a diferencia de un acto aislado de discriminación.',
    common_error:
      'Confundir un acto aislado de discriminación con la exclusión, sin notar que esta última implica un apartamiento sostenido y repetido en el tiempo.',
    source_reference: 'Guía oficial, página 20, código 7.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-seg-005',
    topic_id: 'cs-7-3-4-factores-que-propician-la-segregacion-social',
    prompt:
      'Ordena la secuencia conceptual típica que describe cómo se propicia la segregación social, de la primera etapa a la última.\n\n1. Estereotipo (creencia generalizada sobre un grupo)\n2. Discriminación (trato desigual concreto basado en esa creencia)\n3. Exclusión (apartamiento sostenido del acceso a espacios o recursos)',
    options: ['1, 2, 3', '2, 1, 3', '3, 1, 2'],
    correct_option_index: 0,
    explanation:
      'La secuencia típica inicia con el estereotipo (la creencia), continúa con la discriminación (el trato desigual concreto basado en esa creencia) y termina en la exclusión (el apartamiento sostenido resultado de la discriminación repetida).',
    common_error:
      'Colocar la exclusión antes que la discriminación, sin reconocer que la exclusión es el resultado sostenido de la discriminación repetida, no su punto de partida.',
    source_reference: 'Guía oficial, página 20, código 7.3.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dnna-001',
    topic_id: 'cs-7-3-5-derechos-de-ninas-ninos-y-adolescentes',
    prompt:
      'Un niño de diez años trabaja jornadas largas en un taller en vez de asistir a la escuela, para contribuir al ingreso de su familia. ¿Qué derecho se vulnera principalmente en esta situación?',
    options: [
      'el derecho a la identidad, porque no cuenta con un nombre reconocido legalmente',
      'el derecho a la protección contra la explotación, porque se le somete a trabajo que pone en riesgo su desarrollo y le impide asistir a la escuela',
      'el derecho a la salud, porque no recibe atención médica'
    ],
    correct_option_index: 1,
    explanation:
      'Someter a un niño a trabajo que pone en riesgo su desarrollo y le impide asistir a la escuela vulnera específicamente el derecho a la protección contra la explotación.',
    common_error:
      'Identificar un derecho genérico ("algo está mal") en vez de ubicar exactamente cuál de los derechos reconocidos se vulnera en la situación descrita.',
    source_reference: 'Guía oficial, página 20, código 7.3.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-dnna-002',
    topic_id: 'cs-7-3-5-derechos-de-ninas-ninos-y-adolescentes',
    prompt:
      'El derecho que garantiza que una niña, niño o adolescente cuente con un nombre, una nacionalidad y el reconocimiento de su filiación familiar es el derecho a la _______.',
    options: ['identidad', 'educación', 'protección contra la violencia'],
    correct_option_index: 0,
    explanation:
      'El derecho a la identidad garantiza que una niña, niño o adolescente cuente con un nombre, una nacionalidad y el reconocimiento de su filiación familiar.',
    common_error:
      'Confundir el derecho a la identidad con el derecho a la educación, dos derechos distintos que protegen aspectos diferentes del desarrollo de niñas, niños y adolescentes.',
    source_reference: 'Guía oficial, página 20, código 7.3.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dnna-003',
    topic_id: 'cs-7-3-5-derechos-de-ninas-ninos-y-adolescentes',
    prompt:
      'Un bebé no es registrado ante ninguna autoridad, por lo que no cuenta con un acta de nacimiento ni un nombre reconocido legalmente. Alguien afirma que esto vulnera el derecho a la educación. ¿Por qué esa afirmación es incorrecta?',
    options: [
      'porque la situación describe la falta de un nombre y un registro legal, que corresponde específicamente al derecho a la identidad, no al derecho a la educación',
      'porque no registrar a un bebé nunca vulnera ningún derecho',
      'porque el derecho a la educación y el derecho a la identidad son exactamente el mismo derecho'
    ],
    correct_option_index: 0,
    explanation:
      'La falta de un nombre y un registro legal corresponde específicamente al derecho a la identidad, un derecho distinto del derecho a la educación.',
    common_error:
      'Asignar cualquier derecho a una situación sin verificar cuál de ellos se vulnera exactamente según lo que se describe.',
    source_reference: 'Guía oficial, página 20, código 7.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dnna-004',
    topic_id: 'cs-7-3-5-derechos-de-ninas-ninos-y-adolescentes',
    prompt:
      'Un niño sufre golpes frecuentes por parte de un adulto responsable de su cuidado. ¿Por qué esto vulnera específicamente el derecho a la protección contra la violencia, y no el derecho a la protección contra la explotación?',
    options: [
      'porque la protección contra la explotación se refiere a no ser sometido a trabajo que ponga en riesgo el desarrollo, mientras que aquí se describe maltrato físico directo, que corresponde a la protección contra la violencia',
      'porque ambos derechos son exactamente el mismo, así que cualquiera de los dos sería correcto',
      'porque solo se vulnera un derecho cuando interviene una institución del estado'
    ],
    correct_option_index: 0,
    explanation:
      'El maltrato físico directo corresponde al derecho a la protección contra la violencia, distinto del derecho a la protección contra la explotación, que se refiere específicamente al trabajo que pone en riesgo el desarrollo.',
    common_error:
      'Confundir la protección contra la violencia con la protección contra la explotación, sin distinguir maltrato físico directo de trabajo que pone en riesgo el desarrollo.',
    source_reference: 'Guía oficial, página 20, código 7.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-dnna-005',
    topic_id: 'cs-7-3-5-derechos-de-ninas-ninos-y-adolescentes',
    prompt:
      'Relaciona cada situación con el derecho de niñas, niños o adolescentes que vulnera.\n\n1. Un adolescente sufre maltrato físico por parte de quien lo cuida\n2. Un niño trabaja en condiciones que ponen en riesgo su desarrollo, en vez de asistir a la escuela\n3. Una niña no recibe atención médica cuando la necesita\n4. Un adolescente no cuenta con un nombre ni una nacionalidad reconocidos legalmente\n\na. Derecho a la salud\nb. Derecho a la protección contra la violencia\nc. Derecho a la identidad\nd. Derecho a la protección contra la explotación',
    options: ['1b, 2d, 3a, 4c', '1d, 2b, 3c, 4a', '1a, 2c, 3d, 4b'],
    correct_option_index: 0,
    explanation:
      'El maltrato físico vulnera el derecho a la protección contra la violencia (b); el trabajo riesgoso vulnera el derecho a la protección contra la explotación (d); la falta de atención médica vulnera el derecho a la salud (a); la falta de nombre y nacionalidad vulnera el derecho a la identidad (c).',
    common_error:
      'Confundir la protección contra la violencia con la protección contra la explotación al no distinguir maltrato físico directo de trabajo riesgoso.',
    source_reference: 'Guía oficial, página 20, código 7.3.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cse-001',
    topic_id: 'cs-7-3-6-consecuencias-de-crisis-sociales-economicas-y-ambientales',
    prompt:
      'Un texto describe que, en 1982, una fuerte devaluación de la moneda y una crisis de deuda externa provocaron que gran parte de la población perdiera poder adquisitivo de forma generalizada. ¿A qué suceso corresponde este texto?',
    options: [
      'al movimiento estudiantil de 1968',
      'al levantamiento del EZLN',
      'a la crisis económica de 1982, cuya consecuencia reconocida es esa pérdida generalizada del poder adquisitivo'
    ],
    correct_option_index: 2,
    explanation:
      'La crisis económica de 1982, marcada por la devaluación de la moneda y la deuda externa, tuvo como consecuencia reconocida una pérdida generalizada del poder adquisitivo de la población.',
    common_error:
      'Confundir la crisis económica de 1982 con otros sucesos históricos del mismo periodo, sin identificar el tipo específico de consecuencia (económica) que la distingue.',
    source_reference: 'Guía oficial, página 20, código 7.3.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-cse-002',
    topic_id: 'cs-7-3-6-consecuencias-de-crisis-sociales-economicas-y-ambientales',
    prompt:
      'El llamado a la insurrección armada contra la reelección del gobierno en turno a inicios del siglo XX, que catalizó el inicio de un movimiento armado de alcance nacional, se conoce como _______.',
    options: ['Plan de San Luis', 'levantamiento del EZLN', 'movimiento estudiantil de 1968'],
    correct_option_index: 0,
    explanation:
      'El Plan de San Luis fue el llamado a la insurrección armada contra la reelección del gobierno en turno a inicios del siglo XX, y catalizó el inicio de un movimiento armado de alcance nacional.',
    common_error:
      'Confundir el Plan de San Luis con el levantamiento del EZLN, dos sucesos armados de distinta época y con consecuencias reconocidas distintas.',
    source_reference: 'Guía oficial, página 20, código 7.3.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cse-003',
    topic_id: 'cs-7-3-6-consecuencias-de-crisis-sociales-economicas-y-ambientales',
    prompt:
      'Un texto describe que, en 1994, un movimiento indígena armado en el sur del país exigió el reconocimiento de derechos y autonomía para los pueblos originarios. Alguien afirma que esto corresponde al movimiento estudiantil de 1968. ¿Por qué esa afirmación es incorrecta?',
    options: [
      'porque el movimiento estudiantil de 1968 tuvo como consecuencia un cuestionamiento al autoritarismo del sistema político, mientras que la descripción corresponde al levantamiento del EZLN, cuya consecuencia fue visibilizar las demandas de autonomía de los pueblos indígenas',
      'porque el movimiento estudiantil de 1968 y el levantamiento del EZLN ocurrieron exactamente en el mismo año',
      'porque ambos sucesos tuvieron exactamente la misma consecuencia social'
    ],
    correct_option_index: 0,
    explanation:
      'El movimiento estudiantil de 1968 y el levantamiento del EZLN tuvieron consecuencias reconocidas distintas: un cuestionamiento al autoritarismo político el primero, y la visibilización de las demandas indígenas de autonomía el segundo.',
    common_error:
      'Confundir sucesos históricos distintos por pertenecer ambos a la historia reciente de México, sin verificar el tipo específico de consecuencia que cada uno tuvo.',
    source_reference: 'Guía oficial, página 20, código 7.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cse-004',
    topic_id: 'cs-7-3-6-consecuencias-de-crisis-sociales-economicas-y-ambientales',
    prompt:
      'Un texto describe que una movilización estudiantil que exigía mayores libertades democráticas terminó en una represión violenta, generando un cuestionamiento duradero al autoritarismo del sistema político de la época. ¿Por qué esto corresponde al movimiento estudiantil de 1968 y no a la crisis económica de 1982?',
    options: [
      'porque la consecuencia descrita es un cuestionamiento al sistema político, propia del movimiento estudiantil de 1968, mientras que la crisis de 1982 tuvo como consecuencia reconocida una pérdida de poder adquisitivo, no un cuestionamiento político',
      'porque la crisis económica de 1982 y el movimiento estudiantil de 1968 tuvieron exactamente la misma consecuencia',
      'porque solo puede haber represión violenta en un movimiento estudiantil, nunca en una crisis económica'
    ],
    correct_option_index: 0,
    explanation:
      'El cuestionamiento al autoritarismo del sistema político es la consecuencia reconocida del movimiento estudiantil de 1968, distinta de la pérdida de poder adquisitivo que caracteriza a la crisis económica de 1982.',
    common_error:
      'Agrupar distintos sucesos bajo una misma consecuencia genérica, sin distinguir si el efecto reconocido es político, económico o de otro tipo.',
    source_reference: 'Guía oficial, página 20, código 7.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-cse-005',
    topic_id: 'cs-7-3-6-consecuencias-de-crisis-sociales-economicas-y-ambientales',
    prompt:
      'Relaciona cada suceso con su consecuencia social reconocida.\n\n1. Plan de San Luis\n2. Crisis económica de 1982\n3. Movimiento estudiantil de 1968\n4. Levantamiento del EZLN\n\na. Cuestionamiento duradero al autoritarismo del sistema político\nb. Catalizó un movimiento armado de alcance nacional\nc. Visibilizó las demandas de autonomía de los pueblos indígenas\nd. Pérdida generalizada del poder adquisitivo de la población',
    options: ['1b, 2d, 3a, 4c', '1d, 2b, 3c, 4a', '1a, 2c, 3d, 4b'],
    correct_option_index: 0,
    explanation:
      'El Plan de San Luis catalizó un movimiento armado nacional (b); la crisis de 1982 produjo una pérdida de poder adquisitivo (d); el movimiento estudiantil de 1968 generó un cuestionamiento al autoritarismo político (a); el levantamiento del EZLN visibilizó las demandas indígenas de autonomía (c).',
    common_error:
      'Intercambiar las consecuencias de sucesos distintos por pertenecer todos a la historia reciente de México, sin verificar el tipo específico de efecto reconocido de cada uno.',
    source_reference: 'Guía oficial, página 20, código 7.3.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mig-001',
    topic_id: 'cs-7-3-7-tipos-de-migraciones',
    prompt:
      'Un grupo de familias abandona su comunidad de forma repentina debido a un desastre natural que destruyó sus viviendas, sin haber decidido mudarse por voluntad propia. ¿Qué tipo de migración es?',
    options: [
      'una migración estatal, porque necesariamente cambiaron de entidad federativa',
      'un desplazamiento forzado, porque el criterio decisivo es la ausencia de una decisión voluntaria',
      'una migración rural-urbana, porque cualquier desastre natural implica mudarse a una ciudad'
    ],
    correct_option_index: 1,
    explanation:
      'El criterio decisivo del desplazamiento forzado es la ausencia de una decisión voluntaria, motivada por una situación de violencia, conflicto o desastre, exactamente lo que describe esta situación.',
    common_error:
      'Clasificar la migración por el destino al que se dirigen las personas en vez de por si la decisión de migrar fue voluntaria o no.',
    source_reference: 'Guía oficial, página 20, código 7.3.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-mig-002',
    topic_id: 'cs-7-3-7-tipos-de-migraciones',
    prompt:
      'El desplazamiento de personas desde zonas rurales hacia zonas urbanas, generalmente en busca de mejores oportunidades económicas o de acceso a servicios, se llama migración _______.',
    options: ['rural-urbana', 'estatal', 'forzada'],
    correct_option_index: 0,
    explanation:
      'La migración rural-urbana es el desplazamiento de personas desde zonas rurales hacia zonas urbanas, generalmente en busca de mejores oportunidades económicas o de acceso a servicios.',
    common_error:
      'Confundir la migración rural-urbana con la migración estatal, cuando la primera se clasifica por el tipo de zona y la segunda por el cambio de entidad federativa.',
    source_reference: 'Guía oficial, página 20, código 7.3.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mig-003',
    topic_id: 'cs-7-3-7-tipos-de-migraciones',
    prompt:
      "Una persona se muda de una zona rural a una ciudad grande dentro del mismo estado, buscando mejores oportunidades de empleo, por decisión propia. Alguien afirma que esto es una migración estatal 'porque se mudó a una ciudad importante'. ¿Por qué esa afirmación es incorrecta?",
    options: [
      'porque el criterio de la migración estatal es el cambio de entidad federativa, y en este caso no cambió de entidad, así que es una migración rural-urbana',
      'porque nunca puede considerarse migración si la persona permanece en el mismo estado',
      'porque migración estatal y migración rural-urbana son exactamente el mismo concepto'
    ],
    correct_option_index: 0,
    explanation:
      'El criterio de la migración estatal es el cambio de entidad federativa; como en este caso no hubo ese cambio, la migración se clasifica por el cambio de tipo de zona, es decir, como rural-urbana.',
    common_error:
      'Suponer que mudarse a una ciudad importante siempre implica un cambio de entidad federativa, sin verificar si la persona permaneció en el mismo estado.',
    source_reference: 'Guía oficial, página 20, código 7.3.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mig-004',
    topic_id: 'cs-7-3-7-tipos-de-migraciones',
    prompt:
      'Una persona se muda de su estado natal a otro estado del mismo país para tomar un nuevo empleo, por decisión propia, sin que exista ninguna situación de violencia o desastre de por medio. ¿Por qué esto es una migración estatal y no un desplazamiento forzado?',
    options: [
      'porque el criterio del desplazamiento forzado es la ausencia de una decisión voluntaria, y en este caso la persona decidió mudarse libremente por motivos laborales, cambiando de entidad federativa',
      'porque cualquier migración entre estados es automáticamente un desplazamiento forzado',
      'porque migración estatal y desplazamiento forzado son exactamente lo mismo'
    ],
    correct_option_index: 0,
    explanation:
      'El desplazamiento forzado exige la ausencia de una decisión voluntaria; como aquí la persona decidió libremente mudarse por motivos laborales y cambió de entidad federativa, se trata de una migración estatal.',
    common_error:
      'Clasificar como desplazamiento forzado cualquier migración entre estados, sin verificar si la decisión de migrar fue voluntaria o no.',
    source_reference: 'Guía oficial, página 20, código 7.3.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-mig-005',
    topic_id: 'cs-7-3-7-tipos-de-migraciones',
    prompt:
      'Relaciona cada situación con el tipo de migración que representa.\n\n1. Una familia huye de un conflicto violento que pone en riesgo su vida\n2. Una persona se muda a otro estado del país por un nuevo empleo, por decisión propia\n3. Una persona se muda de una zona rural a una ciudad dentro del mismo estado, buscando mejores oportunidades\n\na. Migración estatal\nb. Migración rural-urbana\nc. Desplazamiento forzado',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'Huir de un conflicto violento sin decisión voluntaria es un desplazamiento forzado (c); mudarse a otro estado por decisión propia es una migración estatal (a); mudarse de zona rural a urbana dentro del mismo estado es una migración rural-urbana (b).',
    common_error:
      'Confundir migración estatal con migración rural-urbana al no distinguir si el criterio de clasificación es el cambio de entidad o el cambio de tipo de zona.',
    source_reference: 'Guía oficial, página 20, código 7.3.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-msa-001',
    topic_id: 'cs-7-3-8-movimientos-sociales-antisistema',
    prompt:
      'Un texto describe un movimiento que cuestiona las normas sociales que asignan roles distintos a hombres y mujeres, exigiendo las mismas oportunidades para ambos géneros. ¿A qué movimiento corresponde?',
    options: [
      'al movimiento antiglobalización',
      'al movimiento hippie',
      'al movimiento feminista, porque su enfoque es cuestionar la desigualdad de género y exigir las mismas oportunidades'
    ],
    correct_option_index: 2,
    explanation:
      'El movimiento feminista busca la igualdad de derechos y oportunidades entre géneros, cuestionando las estructuras y normas sociales que producen desigualdad por razón de género.',
    common_error:
      'Confundir el movimiento feminista con otros movimientos antisistema por tratarse todos de movimientos que cuestionan el orden social, sin identificar el aspecto específico que cada uno cuestiona.',
    source_reference: 'Guía oficial, página 20, código 7.3.8.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cs-msa-002',
    topic_id: 'cs-7-3-8-movimientos-sociales-antisistema',
    prompt:
      'El movimiento que, durante las décadas de 1960 y 1970, promovió el rechazo al consumismo y al conformismo social de su época, la vida comunitaria y la experimentación cultural, se conoce como movimiento _______.',
    options: ['hippie', 'feminista', 'antiglobalización'],
    correct_option_index: 0,
    explanation:
      'El movimiento hippie, en las décadas de 1960 y 1970, promovió el rechazo al consumismo y al conformismo social de su época, la vida comunitaria y la experimentación cultural.',
    common_error:
      'Confundir el movimiento hippie con el movimiento antiglobalización, dos movimientos de épocas y enfoques distintos.',
    source_reference: 'Guía oficial, página 20, código 7.3.8.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-msa-003',
    topic_id: 'cs-7-3-8-movimientos-sociales-antisistema',
    prompt:
      'Un texto describe un movimiento que cuestiona que las grandes corporaciones concentren cada vez más poder económico como resultado del libre comercio internacional sin regulación. Alguien afirma que esto corresponde al movimiento feminista. ¿Por qué esa afirmación es incorrecta?',
    options: [
      'porque el movimiento feminista cuestiona la desigualdad de género, mientras que la descripción corresponde al movimiento antiglobalización, que cuestiona los efectos de la integración económica mundial',
      'porque el movimiento feminista y el movimiento antiglobalización son exactamente el mismo movimiento',
      'porque solo el movimiento feminista puede cuestionar el poder de las corporaciones'
    ],
    correct_option_index: 0,
    explanation:
      'Cuestionar la concentración de poder de las grandes corporaciones y los efectos del libre comercio internacional corresponde específicamente al movimiento antiglobalización, no al movimiento feminista.',
    common_error:
      'Agrupar cualquier movimiento que cuestione "al sistema" bajo un mismo nombre, sin identificar el aspecto específico que cuestiona cada uno.',
    source_reference: 'Guía oficial, página 20, código 7.3.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-msa-004',
    topic_id: 'cs-7-3-8-movimientos-sociales-antisistema',
    prompt:
      'Un texto describe un movimiento de las décadas de 1960 y 1970 que promovía vivir en comunidades alejadas del consumismo, con normas de convivencia distintas a las convencionales de la época. ¿Por qué esto corresponde al movimiento hippie y no al movimiento antiglobalización?',
    options: [
      'porque el enfoque descrito es el rechazo al consumismo y al conformismo cultural de una época específica (los años sesenta y setenta), mientras que el movimiento antiglobalización cuestiona específicamente los efectos de la integración económica mundial',
      'porque el movimiento hippie y el movimiento antiglobalización son exactamente el mismo movimiento con otro nombre',
      'porque solo el movimiento antiglobalización pudo haber existido en esas décadas'
    ],
    correct_option_index: 0,
    explanation:
      'El rechazo al consumismo y al conformismo cultural de una época específica corresponde al movimiento hippie, distinto del movimiento antiglobalización, que cuestiona los efectos de la integración económica mundial.',
    common_error:
      'Confundir movimientos de épocas y enfoques distintos por compartir un rechazo general al orden social establecido.',
    source_reference: 'Guía oficial, página 20, código 7.3.8.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cs-msa-005',
    topic_id: 'cs-7-3-8-movimientos-sociales-antisistema',
    prompt:
      'Relaciona cada característica con el movimiento social que representa.\n\n1. Cuestiona la desigualdad de género y busca las mismas oportunidades para ambos géneros\n2. Cuestiona los efectos de la integración económica mundial y el poder de las grandes corporaciones\n3. Promueve el rechazo al consumismo y la vida comunitaria en las décadas de 1960 y 1970\n\na. Movimiento hippie\nb. Movimiento antiglobalización\nc. Movimiento feminista',
    options: ['1c, 2b, 3a', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'Cuestionar la desigualdad de género corresponde al movimiento feminista (c); cuestionar la integración económica mundial corresponde al movimiento antiglobalización (b); el rechazo al consumismo en los años sesenta y setenta corresponde al movimiento hippie (a).',
    common_error:
      'Confundir el movimiento antiglobalización con el movimiento hippie al no distinguir si el enfoque es económico o cultural/generacional.',
    source_reference: 'Guía oficial, página 20, código 7.3.8.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
