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
  }
]
