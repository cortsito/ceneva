import type { question } from './types'

export const ciencias_naturales_experimentales_y_tecnologia_questions: question[] = [
  {
    id: 'cn-enl-001',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'el cloruro de calcio (cacl₂) combina calcio (metal) y cloro (no metal). ¿qué tipo de enlace forma este compuesto?',
    options: ['covalente', 'iónico', 'metálico'],
    correct_option_index: 1,
    explanation:
      'el calcio es un metal y el cloro es un no metal: el metal cede electrones al no metal, formando un enlace iónico por la atracción entre el catión y el anión resultantes.',
    common_error:
      'pensar que, al ser el cloro un no metal muy reactivo, el compuesto debe compartir electrones en lugar de recibirlos, sin considerar que la combinación metal–no metal siempre transfiere electrones y forma un enlace iónico.',
    source_reference: 'guía oficial, página 15, código 5.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-002',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'el amoniaco (nh₃) combina nitrógeno e hidrógeno, dos elementos no metales. por eso, el enlace que forma este compuesto es ___.',
    options: ['metálico', 'iónico', 'covalente'],
    correct_option_index: 2,
    explanation:
      'no metal más no metal implica compartición de electrones, no transferencia hacia un catión ni una nube de electrones deslocalizados: el enlace es covalente.',
    common_error:
      'asumir que la presencia de hidrógeno, un elemento frecuente en compuestos con metales, implica automáticamente un enlace iónico, sin verificar que aquí el otro elemento (nitrógeno) también es no metal.',
    source_reference: 'guía oficial, página 15, código 5.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-003',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'una aleación combina hierro y níquel, dos elementos metálicos. ¿qué tipo de enlace forma esta aleación?',
    options: ['iónico', 'metálico', 'covalente'],
    correct_option_index: 1,
    explanation:
      'al ser dos metales, no hay transferencia de electrones hacia un no metal ni compartición localizada entre no metales: los electrones de valencia se deslocalizan alrededor de ambos tipos de átomos, formando un enlace metálico.',
    common_error:
      'clasificar como iónico cualquier compuesto que contenga al menos un metal, sin comprobar que el segundo elemento también es un metal — en ese caso el enlace es metálico, no iónico.',
    source_reference: 'guía oficial, página 15, código 5.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-004',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'el óxido de magnesio (mgo) combina magnesio (metal) y oxígeno (no metal). ¿por qué este compuesto forma un enlace iónico y no covalente?',
    options: [
      'porque comparte pares de electrones entre ambos átomos, igual que cualquier compuesto con oxígeno',
      'porque el magnesio, al ser metal, cede electrones al oxígeno, que los recibe al ser no metal',
      'porque ambos elementos son suficientemente reactivos como para formar cualquier tipo de enlace'
    ],
    correct_option_index: 1,
    explanation:
      'el criterio para clasificar el enlace no es la reactividad ni la presencia de oxígeno, sino si los elementos son metal y no metal (transferencia de electrones → iónico) o dos no metales (compartición → covalente); aquí el magnesio cede electrones al oxígeno.',
    common_error:
      'creer que cualquier compuesto con oxígeno forma un enlace covalente por comparación con el agua, sin revisar si el otro elemento es metal (lo que da un enlace iónico) o no metal (lo que sí daría covalente).',
    source_reference: 'guía oficial, página 15, código 5.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-005',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'relaciona cada compuesto con su tipo de enlace, según los elementos que lo forman.\n\n1. bromuro de potasio (kbr)\n2. metano (ch₄)\n3. aleación de plata y oro (ag-au)\n\na. covalente\nb. metálico\nc. iónico',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'el bromuro de potasio combina un metal (potasio) y un no metal (bromo): iónico (c). el metano combina carbono e hidrógeno, ambos no metales: covalente (a). la aleación de plata y oro combina dos metales: metálico (b).',
    common_error:
      'confundir el enlace metálico con el iónico al ver dos elementos de apariencia "noble" en la fórmula, sin verificar que ambos son metales y que, por lo tanto, no hay transferencia de electrones hacia un no metal.',
    source_reference: 'guía oficial, página 15, código 5.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-001',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'el aceite vertido en una botella toma la forma de esa botella, pero su cantidad no cambia si se pasa a un frasco de forma distinta. ¿en qué estado de agregación se encuentra?',
    options: ['sólido', 'gaseoso', 'líquido'],
    correct_option_index: 2,
    explanation:
      'toma la forma del recipiente (no tiene forma propia) pero conserva su volumen al cambiar de envase: esas dos características corresponden al estado líquido.',
    common_error:
      'confundir "no tener forma propia" con ser un gas, sin distinguir que el líquido, a diferencia del gas, sí conserva su volumen al cambiar de recipiente.',
    source_reference: 'guía oficial, página 15, código 5.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-002',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'un gas dentro de un globo parece tener una forma redonda definida, pero esa forma la impone el globo, no el gas; si el globo se revienta, el gas se expande y ocupa ___.',
    options: [
      'la misma forma redonda que tenía',
      'un volumen fijo, menor al del globo',
      'todo el espacio disponible'
    ],
    correct_option_index: 2,
    explanation:
      'un gas no tiene forma ni volumen propios: sin el recipiente que lo contenga, se expande libremente hasta ocupar todo el espacio disponible.',
    common_error:
      'confundir la forma visible que impone un recipiente, como un globo, con una forma propia del gas.',
    source_reference: 'guía oficial, página 15, código 5.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-003',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'una barra de hierro no cambia su longitud ni su forma al colocarla sobre distintas superficies, y no se comprime al presionarla con las manos. ¿qué estado de agregación tiene, y por qué?',
    options: [
      'líquido, porque mantiene su volumen aunque cambie de superficie',
      'sólido, porque sus partículas están fijas en una estructura ordenada, sin espacio libre entre ellas',
      'gaseoso, porque no se deforma con facilidad'
    ],
    correct_option_index: 1,
    explanation:
      'mantener forma y volumen propios sin poder comprimirse corresponde al estado sólido, porque sus partículas están fijas en una estructura ordenada y no dejan espacio libre entre sí.',
    common_error:
      'asociar la incompresibilidad únicamente con la dureza percibida del material, sin conectar esa propiedad con la ausencia de espacio libre entre partículas.',
    source_reference: 'guía oficial, página 15, código 5.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-004',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'un gas introducido en un recipiente de 1 litro lo llena por completo; al trasladarlo a un recipiente de 3 litros, vuelve a llenarlo por completo. ¿qué característica de los gases explica este comportamiento?',
    options: [
      'que tienen volumen propio pero no forma propia, igual que un líquido',
      'que son incompresibles porque sus partículas están muy juntas',
      'que no tienen forma ni volumen propios, porque sus partículas se mueven libremente y se separan hasta ocupar el espacio disponible'
    ],
    correct_option_index: 2,
    explanation:
      'expandirse para llenar cualquier recipiente muestra que el gas no tiene forma ni volumen propios: sus partículas, con fuerzas de atracción casi nulas entre sí, se mueven libremente y se separan hasta ocupar todo el espacio disponible.',
    common_error:
      'confundir el comportamiento del gas, sin volumen propio, con el del líquido, que sí tiene volumen propio aunque no tenga forma propia, ya que ambos "toman la forma del recipiente".',
    source_reference: 'guía oficial, página 15, código 5.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-005',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'relaciona cada sustancia con su estado de agregación, según el comportamiento descrito.\n\n1. un bloque mantiene su forma y su volumen sin importar la superficie, y no se comprime\n2. una sustancia llena la parte inferior de cualquier recipiente y conserva su cantidad exacta al cambiar de envase\n3. una sustancia se expande hasta llenar cualquier recipiente y se comprime con facilidad\n\na. gaseoso\nb. sólido\nc. líquido',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'mantener forma y volumen propios sin comprimirse corresponde al sólido (b); mantener el volumen pero no la forma corresponde al líquido (c); expandirse y comprimirse con facilidad corresponde al gas (a).',
    common_error:
      'invertir sólido y gas al juzgar solo por la "firmeza" aparente de la sustancia, sin revisar en conjunto sus tres características: forma, volumen y compresibilidad.',
    source_reference: 'guía oficial, página 15, código 5.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-001',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt: 'verifica si la ecuación `caco₃ → cao + co₂` cumple la ley de conservación de la materia.',
    options: [
      'no, porque los productos tienen dos fórmulas distintas y los reactivos solo una',
      'sí, porque cada elemento tiene el mismo número de átomos en ambos lados: 1 calcio, 1 carbono y 3 oxígenos',
      'no, porque el carbono aparece en un compuesto distinto al del calcio en los productos'
    ],
    correct_option_index: 1,
    explanation:
      'reactivos: `caco₃` aporta 1 átomo de calcio, 1 de carbono y 3 de oxígeno. productos: `cao` aporta 1 calcio y 1 oxígeno; `co₂` aporta 1 carbono y 2 oxígenos; en total, 1 calcio, 1 carbono y 3 oxígenos. el conteo coincide en los tres elementos, así que la ecuación cumple la ley.',
    common_error:
      'pensar que una ecuación no está balanceada solo porque los productos se reparten en más de una fórmula que los reactivos, en lugar de contar los átomos de cada elemento en ambos lados.',
    source_reference: 'guía oficial, página 15, código 5.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-002',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'en la ecuación `2h₂o₂ → 2h₂o + o₂`, los reactivos aportan 2 × 2 = 4 átomos de hidrógeno y 2 × 2 = 4 átomos de oxígeno; los productos aportan 2 × 2 = 4 átomos de hidrógeno y (2 × 1) + 2 = 4 átomos de oxígeno. como el conteo coincide en ambos elementos, esta ecuación ___.',
    options: [
      'no cumple la ley, porque el oxígeno aparece en dos compuestos distintos en los productos',
      'no puede evaluarse sin conocer las masas moleculares de cada sustancia',
      'cumple la ley de conservación de la materia'
    ],
    correct_option_index: 2,
    explanation:
      'con 4 átomos de hidrógeno y 4 átomos de oxígeno en ambos lados, la ecuación cumple la ley de conservación de la materia.',
    common_error:
      'exigir que un elemento aparezca en el mismo número de compuestos en ambos lados para considerar la ecuación balanceada, en lugar de comparar únicamente el conteo total de átomos de cada elemento.',
    source_reference: 'guía oficial, página 15, código 5.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-003',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'verifica si la ecuación `ch₄ + o₂ → co₂ + h₂o` (sin balancear) cumple la ley de conservación de la materia.',
    options: [
      'sí, porque el carbono tiene 1 átomo en los reactivos y 1 átomo en los productos',
      'no, porque hay 4 átomos de hidrógeno en los reactivos pero solo 2 en los productos',
      'no, porque el metano (ch₄) tiene más átomos en su fórmula que el oxígeno (o₂)'
    ],
    correct_option_index: 1,
    explanation:
      'reactivos: `ch₄` aporta 1 carbono y 4 hidrógenos; `o₂` aporta 2 oxígenos. productos: `co₂` aporta 1 carbono y 2 oxígenos; `h₂o` aporta 2 hidrógenos y 1 oxígeno; en total, 1 carbono, 2 hidrógenos y 3 oxígenos. el hidrógeno no coincide (4 en reactivos contra 2 en productos), así que la ecuación, tal como está escrita, no cumple la ley.',
    common_error:
      'revisar un solo elemento que sí coincide (como el carbono) y concluir que toda la ecuación está balanceada, sin revisar también el hidrógeno y el oxígeno.',
    source_reference: 'guía oficial, página 15, código 5.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-004',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'en la ecuación `2na + cl₂ → 2nacl`, ¿cuántos átomos de cloro hay en los reactivos y en los productos, respectivamente?',
    options: [
      '1 en reactivos y 2 en productos',
      '2 en reactivos y 1 en productos',
      '2 en reactivos y 2 en productos'
    ],
    correct_option_index: 2,
    explanation:
      '`cl₂` aporta 2 átomos de cloro en los reactivos (subíndice 2 con coeficiente 1); `2nacl` aporta 2 × 1 = 2 átomos de cloro en los productos (coeficiente 2 multiplicado por el subíndice 1 del cloro dentro de esa fórmula). ambos lados tienen 2 átomos de cloro.',
    common_error:
      'contar `cl₂` como si aportara solo 1 átomo de cloro, ignorando su subíndice, o no multiplicar el coeficiente 2 de `nacl` por el subíndice del cloro dentro de esa fórmula.',
    source_reference: 'guía oficial, página 15, código 5.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-005',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'ordena los pasos para comprobar si la ecuación `mg + o₂ → mgo` cumple la ley de conservación de la materia.\n\n1. contar los átomos de magnesio y de oxígeno en los reactivos\n2. contar los átomos de magnesio y de oxígeno en los productos, multiplicando cada coeficiente por su subíndice\n3. comparar el conteo de cada elemento entre reactivos y productos\n4. concluir que la ecuación no está balanceada, porque el oxígeno no coincide (2 en reactivos, 1 en productos)',
    options: ['1, 2, 3, 4', '3, 1, 2, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'primero se cuentan los átomos en los reactivos (1 magnesio, 2 oxígenos), luego en los productos (1 magnesio, 1 oxígeno), después se comparan elemento por elemento, y solo entonces se concluye: el oxígeno no coincide (2 contra 1), así que la ecuación, tal como está escrita, no cumple la ley.',
    common_error:
      'comparar los conteos antes de terminar de contar los átomos en ambos lados, lo que lleva a concluir apresuradamente sin haber revisado todos los elementos.',
    source_reference: 'guía oficial, página 15, código 5.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-001',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt: 'convierte 20 °c a fahrenheit, mostrando fórmula, sustitución y aritmética.',
    options: ['52 °f', '36 °f', '68 °f'],
    correct_option_index: 2,
    explanation:
      'fórmula: `°f = (°c × 9/5) + 32`. sustitución: `(20 × 9/5) + 32`. aritmética: 20 × 9 = 180; 180 ÷ 5 = 36; 36 + 32 = 68. resultado: 20 °c equivalen a 68 °f.',
    common_error:
      'multiplicar 20 por 9/5 pero olvidar sumar 32 al final, reportando 36 °f como si esa cifra ya fuera el resultado final.',
    source_reference: 'guía oficial, página 15, código 5.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-002',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt:
      'convierte 50 °f a celsius aplicando `°c = (°f − 32) × 5/9`. sustituyendo: `(50 − 32) × 5/9`; la resta da 18, y 18 × 5 ÷ 9 = ___.',
    options: ['122 °c', '18 °c', '10 °c'],
    correct_option_index: 2,
    explanation: '18 × 5 = 90; 90 ÷ 9 = 10. entonces, 50 °f equivalen a 10 °c.',
    common_error:
      'detenerse después de la resta (50 − 32 = 18) y reportar 18 °c como resultado final, sin aplicar todavía el factor 5/9.',
    source_reference: 'guía oficial, página 15, código 5.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-003',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt: 'convierte −10 °c a fahrenheit, mostrando fórmula, sustitución y aritmética.',
    options: ['50 °f', '−18 °f', '14 °f'],
    correct_option_index: 2,
    explanation:
      'fórmula: `°f = (°c × 9/5) + 32`. sustitución: `(−10 × 9/5) + 32`. aritmética: −10 × 9 = −90; −90 ÷ 5 = −18; −18 + 32 = 14. resultado: −10 °c equivalen a 14 °f.',
    common_error:
      'ignorar el signo negativo del dato y calcular como si la temperatura fuera 10 °c en lugar de −10 °c, obteniendo 50 °f en lugar de 14 °f.',
    source_reference: 'guía oficial, página 15, código 5.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-004',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt: 'convierte 95 °f a celsius, mostrando fórmula, sustitución y aritmética.',
    options: ['203 °c', '63 °c', '35 °c'],
    correct_option_index: 2,
    explanation:
      'fórmula: `°c = (°f − 32) × 5/9`. sustitución: `(95 − 32) × 5/9`. aritmética: 95 − 32 = 63; 63 × 5 = 315; 315 ÷ 9 = 35. resultado: 95 °f equivalen a 35 °c.',
    common_error:
      'detenerse después de la resta (95 − 32 = 63) y reportar 63 °c como si ya fuera el resultado final, sin aplicar el factor 5/9.',
    source_reference: 'guía oficial, página 15, código 5.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-005',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt:
      'ordena los pasos para convertir 30 °c a fahrenheit.\n\n1. identificar la fórmula `°f = (°c × 9/5) + 32`\n2. sustituir el valor: `(30 × 9/5) + 32`\n3. resolver la multiplicación: 30 × 9 = 270; 270 ÷ 5 = 54\n4. sumar 32 al resultado: 54 + 32 = 86 °f',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 4, 2'],
    correct_option_index: 0,
    explanation:
      'primero se identifica la fórmula, luego se sustituye el valor conocido, después se resuelve la multiplicación y, solo al final, se suma 32 para obtener el resultado con su unidad: 30 °c equivalen a 86 °f.',
    common_error:
      'sumar 32 antes de completar la multiplicación por 9/5, mezclando el orden de las operaciones y obteniendo un resultado distinto al correcto.',
    source_reference: 'guía oficial, página 15, código 5.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-001',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'calcula la fuerza eléctrica entre dos cargas de `q₁ = 2 × 10⁻⁶ c` y `q₂ = 2 × 10⁻⁶ c`, separadas por `r = 2 m`.',
    options: ['0.01798 n', '8.99 × 10⁻¹² n', '0.00899 n'],
    correct_option_index: 2,
    explanation:
      'fórmula: `f = k × (q₁ × q₂) / r²`. sustitución: `f = (8.99 × 10⁹) × (2 × 10⁻⁶ × 2 × 10⁻⁶) / (2)²`. numerador: `2 × 10⁻⁶ × 2 × 10⁻⁶ = 4 × 10⁻¹²`; `8.99 × 10⁹ × 4 × 10⁻¹² = 35.96 × 10⁻³`. denominador: `(2)² = 4`. `f = 35.96 × 10⁻³ ÷ 4 = 8.99 × 10⁻³ n`.',
    common_error:
      'no elevar la distancia al cuadrado y dividir el numerador solo entre `r` (entre 2 en lugar de entre 4), lo que produce 0.01798 n en lugar de 0.00899 n.',
    source_reference: 'guía oficial, página 15, código 5.1.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-002',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'dos cargas de `5 µc` y `1 µc` están separadas por `r = 1 m`. antes de sustituir en `f = k × (q₁ × q₂) / r²`, ambas cargas deben convertirse a coulombs: `5 µc = 5 × 10⁻⁶ c` y `1 µc = ___`.',
    options: ['1 × 10⁻³ c', '1 × 10⁻⁹ c', '1 × 10⁻⁶ c'],
    correct_option_index: 2,
    explanation:
      'el prefijo "micro" equivale a `10⁻⁶`, así que `1 µc = 1 × 10⁻⁶ c`. sustituyendo ambas cargas ya convertidas: `f = (8.99 × 10⁹) × (5 × 10⁻⁶ × 1 × 10⁻⁶) / (1)² = (8.99 × 10⁹) × (5 × 10⁻¹²) = 0.04495 n`.',
    common_error:
      'usar `1 × 10⁻³ c` para el prefijo micro, confundiéndolo con el prefijo "mili" (`10⁻³`), lo que altera el resultado en varios órdenes de magnitud.',
    source_reference: 'guía oficial, página 15, código 5.1.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-003',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'calcula la fuerza eléctrica entre `q₁ = +3 × 10⁻⁶ c` y `q₂ = −1 × 10⁻⁶ c`, separadas por `r = 0.3 m`, e indica si es de atracción o de repulsión.',
    options: ['≈0.09 n, de atracción', '≈0.30 n, de repulsión', '≈0.30 n, de atracción'],
    correct_option_index: 2,
    explanation:
      'fórmula: `f = k × (q₁ × q₂) / r²`. numerador: `3 × 10⁻⁶ × 1 × 10⁻⁶ = 3 × 10⁻¹²`; `8.99 × 10⁹ × 3 × 10⁻¹² = 26.97 × 10⁻³`. denominador: `(0.3)² = 0.09`. `f = 26.97 × 10⁻³ ÷ 0.09 ≈ 0.30 n`. como las cargas tienen signos opuestos, la fuerza es de atracción.',
    common_error:
      'calcular bien la magnitud pero asignar la dirección incorrecta, olvidando que cargas de signos opuestos se atraen y cargas del mismo signo se repelen.',
    source_reference: 'guía oficial, página 15, código 5.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-004',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'si la distancia entre dos cargas se reduce a la mitad, manteniendo las cargas constantes, ¿qué ocurre con la fuerza eléctrica entre ellas?',
    options: ['se duplica', 'se reduce a la mitad', 'se cuadruplica'],
    correct_option_index: 2,
    explanation:
      'la ley de coulomb es inversamente proporcional al cuadrado de la distancia. si `r` se reduce a la mitad, `r²` se reduce a un cuarto de su valor original, y como la fuerza se divide entre `r²`, dividir entre un cuarto equivale a multiplicar por 4: la fuerza se cuadruplica.',
    common_error:
      'asumir una relación lineal entre distancia y fuerza (si la distancia se reduce a la mitad, la fuerza solo se duplica), sin considerar que la relación es inversamente proporcional al cuadrado de la distancia.',
    source_reference: 'guía oficial, página 15, código 5.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-005',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'ordena los pasos para calcular la fuerza eléctrica entre `q₁ = 6 × 10⁻⁶ c` y `q₂ = 2 × 10⁻⁶ c`, separadas por `r = 0.3 m`.\n\n1. calcular el producto de las cargas: `6 × 10⁻⁶ × 2 × 10⁻⁶ = 12 × 10⁻¹²`\n2. elevar la distancia al cuadrado: `(0.3)² = 0.09`\n3. multiplicar el producto de las cargas por la constante k: `8.99 × 10⁹ × 12 × 10⁻¹² = 0.10788`\n4. dividir ese resultado entre la distancia al cuadrado: `0.10788 ÷ 0.09 ≈ 1.199 n`',
    options: ['1, 2, 3, 4', '3, 4, 1, 2', '2, 1, 4, 3'],
    correct_option_index: 0,
    explanation:
      'primero se calcula el producto de las cargas, luego se eleva la distancia al cuadrado, después se multiplica ese producto por la constante k, y solo al final se divide entre la distancia al cuadrado para obtener la fuerza: `f ≈ 1.199 n`, de repulsión, porque ambas cargas son positivas.',
    common_error:
      'multiplicar por la constante k antes de tener listos tanto el producto de las cargas como el cuadrado de la distancia, lo que genera confusión sobre qué número corresponde a cada variable en la fórmula.',
    source_reference: 'guía oficial, página 15, código 5.1.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
