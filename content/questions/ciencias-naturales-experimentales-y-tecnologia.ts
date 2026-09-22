import type { question } from './types'

export const ciencias_naturales_experimentales_y_tecnologia_questions: question[] = [
  {
    id: 'cn-enl-001',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'El cloruro de calcio (CaCl₂) combina calcio (metal) y cloro (no metal). ¿Qué tipo de enlace forma este compuesto?',
    options: ['covalente', 'iónico', 'metálico'],
    correct_option_index: 1,
    explanation:
      'El calcio es un metal y el cloro es un no metal: el metal cede electrones al no metal, formando un enlace iónico por la atracción entre el catión y el anión resultantes.',
    common_error:
      'Pensar que, al ser el cloro un no metal muy reactivo, el compuesto debe compartir electrones en lugar de recibirlos, sin considerar que la combinación metal–no metal siempre transfiere electrones y forma un enlace iónico.',
    source_reference: 'Guía oficial, página 15, código 5.1.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-002',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'El amoniaco (NH₃) combina nitrógeno e hidrógeno, dos elementos no metales. Por eso, el enlace que forma este compuesto es ___.',
    options: ['metálico', 'iónico', 'covalente'],
    correct_option_index: 2,
    explanation:
      'No metal más no metal implica compartición de electrones, no transferencia hacia un catión ni una nube de electrones deslocalizados: el enlace es covalente.',
    common_error:
      'Asumir que la presencia de hidrógeno, un elemento frecuente en compuestos con metales, implica automáticamente un enlace iónico, sin verificar que aquí el otro elemento (nitrógeno) también es no metal.',
    source_reference: 'Guía oficial, página 15, código 5.1.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-003',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'Una aleación combina hierro y níquel, dos elementos metálicos. ¿Qué tipo de enlace forma esta aleación?',
    options: ['iónico', 'metálico', 'covalente'],
    correct_option_index: 1,
    explanation:
      'Al ser dos metales, no hay transferencia de electrones hacia un no metal ni compartición localizada entre no metales: los electrones de valencia se deslocalizan alrededor de ambos tipos de átomos, formando un enlace metálico.',
    common_error:
      'Clasificar como iónico cualquier compuesto que contenga al menos un metal, sin comprobar que el segundo elemento también es un metal — en ese caso el enlace es metálico, no iónico.',
    source_reference: 'Guía oficial, página 15, código 5.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-004',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'El óxido de magnesio (MgO) combina magnesio (metal) y oxígeno (no metal). ¿Por qué este compuesto forma un enlace iónico y no covalente?',
    options: [
      'porque comparte pares de electrones entre ambos átomos, igual que cualquier compuesto con oxígeno',
      'porque el magnesio, al ser metal, cede electrones al oxígeno, que los recibe al ser no metal',
      'porque ambos elementos son suficientemente reactivos como para formar cualquier tipo de enlace'
    ],
    correct_option_index: 1,
    explanation:
      'El criterio para clasificar el enlace no es la reactividad ni la presencia de oxígeno, sino si los elementos son metal y no metal (transferencia de electrones → iónico) o dos no metales (compartición → covalente); aquí el magnesio cede electrones al oxígeno.',
    common_error:
      'Creer que cualquier compuesto con oxígeno forma un enlace covalente por comparación con el agua, sin revisar si el otro elemento es metal (lo que da un enlace iónico) o no metal (lo que sí daría covalente).',
    source_reference: 'Guía oficial, página 15, código 5.1.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-enl-005',
    topic_id: 'cn-5-1-1-tipos-de-enlaces',
    prompt:
      'Relaciona cada compuesto con su tipo de enlace, según los elementos que lo forman.\n\n1. Bromuro de potasio (KBr)\n2. Metano (CH₄)\n3. Aleación de plata y oro (Ag-Au)\n\na. covalente\nb. metálico\nc. iónico',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'El bromuro de potasio combina un metal (potasio) y un no metal (bromo): iónico (c). El metano combina carbono e hidrógeno, ambos no metales: covalente (a). La aleación de plata y oro combina dos metales: metálico (b).',
    common_error:
      'Confundir el enlace metálico con el iónico al ver dos elementos de apariencia «noble» en la fórmula, sin verificar que ambos son metales y que, por lo tanto, no hay transferencia de electrones hacia un no metal.',
    source_reference: 'Guía oficial, página 15, código 5.1.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-001',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'El aceite vertido en una botella toma la forma de esa botella, pero su cantidad no cambia si se pasa a un frasco de forma distinta. ¿En qué estado de agregación se encuentra?',
    options: ['sólido', 'gaseoso', 'líquido'],
    correct_option_index: 2,
    explanation:
      'Toma la forma del recipiente (no tiene forma propia) pero conserva su volumen al cambiar de envase: esas dos características corresponden al estado líquido.',
    common_error:
      'Confundir «no tener forma propia» con ser un gas, sin distinguir que el líquido, a diferencia del gas, sí conserva su volumen al cambiar de recipiente.',
    source_reference: 'Guía oficial, página 15, código 5.1.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-002',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'Un gas dentro de un globo parece tener una forma redonda definida, pero esa forma la impone el globo, no el gas; si el globo se revienta, el gas se expande y ocupa ___.',
    options: [
      'la misma forma redonda que tenía',
      'un volumen fijo, menor al del globo',
      'todo el espacio disponible'
    ],
    correct_option_index: 2,
    explanation:
      'Un gas no tiene forma ni volumen propios: sin el recipiente que lo contenga, se expande libremente hasta ocupar todo el espacio disponible.',
    common_error:
      'Confundir la forma visible que impone un recipiente, como un globo, con una forma propia del gas.',
    source_reference: 'Guía oficial, página 15, código 5.1.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-003',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'Una barra de hierro no cambia su longitud ni su forma al colocarla sobre distintas superficies, y no se comprime al presionarla con las manos. ¿Qué estado de agregación tiene, y por qué?',
    options: [
      'líquido, porque mantiene su volumen aunque cambie de superficie',
      'sólido, porque sus partículas están fijas en una estructura ordenada, sin espacio libre entre ellas',
      'gaseoso, porque no se deforma con facilidad'
    ],
    correct_option_index: 1,
    explanation:
      'Mantener forma y volumen propios sin poder comprimirse corresponde al estado sólido, porque sus partículas están fijas en una estructura ordenada y no dejan espacio libre entre sí.',
    common_error:
      'Asociar la incompresibilidad únicamente con la dureza percibida del material, sin conectar esa propiedad con la ausencia de espacio libre entre partículas.',
    source_reference: 'Guía oficial, página 15, código 5.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-004',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'Un gas introducido en un recipiente de 1 litro lo llena por completo; al trasladarlo a un recipiente de 3 litros, vuelve a llenarlo por completo. ¿Qué característica de los gases explica este comportamiento?',
    options: [
      'que tienen volumen propio pero no forma propia, igual que un líquido',
      'que son incompresibles porque sus partículas están muy juntas',
      'que no tienen forma ni volumen propios, porque sus partículas se mueven libremente y se separan hasta ocupar el espacio disponible'
    ],
    correct_option_index: 2,
    explanation:
      'Expandirse para llenar cualquier recipiente muestra que el gas no tiene forma ni volumen propios: sus partículas, con fuerzas de atracción casi nulas entre sí, se mueven libremente y se separan hasta ocupar todo el espacio disponible.',
    common_error:
      'Confundir el comportamiento del gas, sin volumen propio, con el del líquido, que sí tiene volumen propio aunque no tenga forma propia, ya que ambos «toman la forma del recipiente».',
    source_reference: 'Guía oficial, página 15, código 5.1.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-eam-005',
    topic_id: 'cn-5-1-2-estados-de-agregacion-de-la-materia',
    prompt:
      'Relaciona cada sustancia con su estado de agregación, según el comportamiento descrito.\n\n1. Un bloque mantiene su forma y su volumen sin importar la superficie, y no se comprime\n2. Una sustancia llena la parte inferior de cualquier recipiente y conserva su cantidad exacta al cambiar de envase\n3. Una sustancia se expande hasta llenar cualquier recipiente y se comprime con facilidad\n\na. gaseoso\nb. sólido\nc. líquido',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'Mantener forma y volumen propios sin comprimirse corresponde al sólido (b); mantener el volumen pero no la forma corresponde al líquido (c); expandirse y comprimirse con facilidad corresponde al gas (a).',
    common_error:
      'Invertir sólido y gas al juzgar solo por la «firmeza» aparente de la sustancia, sin revisar en conjunto sus tres características: forma, volumen y compresibilidad.',
    source_reference: 'Guía oficial, página 15, código 5.1.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-001',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt: 'Verifica si la ecuación `CaCO₃ → CaO + CO₂` cumple la ley de conservación de la materia.',
    options: [
      'no, porque los productos tienen dos fórmulas distintas y los reactivos solo una',
      'sí, porque cada elemento tiene el mismo número de átomos en ambos lados: 1 calcio, 1 carbono y 3 oxígenos',
      'no, porque el carbono aparece en un compuesto distinto al del calcio en los productos'
    ],
    correct_option_index: 1,
    explanation:
      'Reactivos: `CaCO₃` aporta 1 átomo de calcio, 1 de carbono y 3 de oxígeno. Productos: `CaO` aporta 1 calcio y 1 oxígeno; `CO₂` aporta 1 carbono y 2 oxígenos; en total, 1 calcio, 1 carbono y 3 oxígenos. El conteo coincide en los tres elementos, así que la ecuación cumple la ley.',
    common_error:
      'Pensar que una ecuación no está balanceada solo porque los productos se reparten en más de una fórmula que los reactivos, en lugar de contar los átomos de cada elemento en ambos lados.',
    source_reference: 'Guía oficial, página 15, código 5.1.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-002',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'En la ecuación `2H₂O₂ → 2H₂O + O₂`, los reactivos aportan 2 × 2 = 4 átomos de hidrógeno y 2 × 2 = 4 átomos de oxígeno; los productos aportan 2 × 2 = 4 átomos de hidrógeno y (2 × 1) + 2 = 4 átomos de oxígeno. Como el conteo coincide en ambos elementos, esta ecuación ___.',
    options: [
      'no cumple la ley, porque el oxígeno aparece en dos compuestos distintos en los productos',
      'no puede evaluarse sin conocer las masas moleculares de cada sustancia',
      'cumple la ley de conservación de la materia'
    ],
    correct_option_index: 2,
    explanation:
      'Con 4 átomos de hidrógeno y 4 átomos de oxígeno en ambos lados, la ecuación cumple la ley de conservación de la materia.',
    common_error:
      'Exigir que un elemento aparezca en el mismo número de compuestos en ambos lados para considerar la ecuación balanceada, en lugar de comparar únicamente el conteo total de átomos de cada elemento.',
    source_reference: 'Guía oficial, página 15, código 5.1.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-003',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'Verifica si la ecuación `CH₄ + O₂ → CO₂ + H₂O` (sin balancear) cumple la ley de conservación de la materia.',
    options: [
      'sí, porque el carbono tiene 1 átomo en los reactivos y 1 átomo en los productos',
      'no, porque hay 4 átomos de hidrógeno en los reactivos pero solo 2 en los productos',
      'no, porque el metano (CH₄) tiene más átomos en su fórmula que el oxígeno (O₂)'
    ],
    correct_option_index: 1,
    explanation:
      'Reactivos: `CH₄` aporta 1 carbono y 4 hidrógenos; `O₂` aporta 2 oxígenos. Productos: `CO₂` aporta 1 carbono y 2 oxígenos; `H₂O` aporta 2 hidrógenos y 1 oxígeno; en total, 1 carbono, 2 hidrógenos y 3 oxígenos. El hidrógeno no coincide (4 en reactivos contra 2 en productos), así que la ecuación, tal como está escrita, no cumple la ley.',
    common_error:
      'Revisar un solo elemento que sí coincide (como el carbono) y concluir que toda la ecuación está balanceada, sin revisar también el hidrógeno y el oxígeno.',
    source_reference: 'Guía oficial, página 15, código 5.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-004',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'En la ecuación `2Na + Cl₂ → 2NaCl`, ¿cuántos átomos de cloro hay en los reactivos y en los productos, respectivamente?',
    options: [
      '1 en reactivos y 2 en productos',
      '2 en reactivos y 1 en productos',
      '2 en reactivos y 2 en productos'
    ],
    correct_option_index: 2,
    explanation:
      '`Cl₂` aporta 2 átomos de cloro en los reactivos (subíndice 2 con coeficiente 1); `2NaCl` aporta 2 × 1 = 2 átomos de cloro en los productos (coeficiente 2 multiplicado por el subíndice 1 del cloro dentro de esa fórmula). Ambos lados tienen 2 átomos de cloro.',
    common_error:
      'Contar `Cl₂` como si aportara solo 1 átomo de cloro, ignorando su subíndice, o no multiplicar el coeficiente 2 de `NaCl` por el subíndice del cloro dentro de esa fórmula.',
    source_reference: 'Guía oficial, página 15, código 5.1.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cm-005',
    topic_id: 'cn-5-1-3-ley-de-conservacion-de-la-materia',
    prompt:
      'Ordena los pasos para comprobar si la ecuación `Mg + O₂ → MgO` cumple la ley de conservación de la materia.\n\n1. Contar los átomos de magnesio y de oxígeno en los reactivos\n2. Contar los átomos de magnesio y de oxígeno en los productos, multiplicando cada coeficiente por su subíndice\n3. Comparar el conteo de cada elemento entre reactivos y productos\n4. Concluir que la ecuación no está balanceada, porque el oxígeno no coincide (2 en reactivos, 1 en productos)',
    options: ['1, 2, 3, 4', '3, 1, 2, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'Primero se cuentan los átomos en los reactivos (1 magnesio, 2 oxígenos), luego en los productos (1 magnesio, 1 oxígeno), después se comparan elemento por elemento, y solo entonces se concluye: el oxígeno no coincide (2 contra 1), así que la ecuación, tal como está escrita, no cumple la ley.',
    common_error:
      'Comparar los conteos antes de terminar de contar los átomos en ambos lados, lo que lleva a concluir apresuradamente sin haber revisado todos los elementos.',
    source_reference: 'Guía oficial, página 15, código 5.1.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-001',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt: 'Convierte 20 °C a Fahrenheit, mostrando fórmula, sustitución y aritmética.',
    options: ['52 °F', '36 °F', '68 °F'],
    correct_option_index: 2,
    explanation:
      'Fórmula: `°F = (°C × 9/5) + 32`. Sustitución: `(20 × 9/5) + 32`. Aritmética: 20 × 9 = 180; 180 ÷ 5 = 36; 36 + 32 = 68. Resultado: 20 °C equivalen a 68 °F.',
    common_error:
      'Multiplicar 20 por 9/5 pero olvidar sumar 32 al final, reportando 36 °F como si esa cifra ya fuera el resultado final.',
    source_reference: 'Guía oficial, página 15, código 5.1.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-002',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt:
      'Convierte 50 °F a Celsius aplicando `°C = (°F − 32) × 5/9`. Sustituyendo: `(50 − 32) × 5/9`; la resta da 18, y 18 × 5 ÷ 9 = ___.',
    options: ['122 °C', '18 °C', '10 °C'],
    correct_option_index: 2,
    explanation: '18 × 5 = 90; 90 ÷ 9 = 10. Entonces, 50 °F equivalen a 10 °C.',
    common_error:
      'Detenerse después de la resta (50 − 32 = 18) y reportar 18 °C como resultado final, sin aplicar todavía el factor 5/9.',
    source_reference: 'Guía oficial, página 15, código 5.1.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-003',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt: 'Convierte −10 °C a Fahrenheit, mostrando fórmula, sustitución y aritmética.',
    options: ['50 °F', '−18 °F', '14 °F'],
    correct_option_index: 2,
    explanation:
      'Fórmula: `°F = (°C × 9/5) + 32`. Sustitución: `(−10 × 9/5) + 32`. Aritmética: −10 × 9 = −90; −90 ÷ 5 = −18; −18 + 32 = 14. Resultado: −10 °C equivalen a 14 °F.',
    common_error:
      'Ignorar el signo negativo del dato y calcular como si la temperatura fuera 10 °C en lugar de −10 °C, obteniendo 50 °F en lugar de 14 °F.',
    source_reference: 'Guía oficial, página 15, código 5.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-004',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt: 'Convierte 95 °F a Celsius, mostrando fórmula, sustitución y aritmética.',
    options: ['203 °C', '63 °C', '35 °C'],
    correct_option_index: 2,
    explanation:
      'Fórmula: `°C = (°F − 32) × 5/9`. Sustitución: `(95 − 32) × 5/9`. Aritmética: 95 − 32 = 63; 63 × 5 = 315; 315 ÷ 9 = 35. Resultado: 95 °F equivalen a 35 °C.',
    common_error:
      'Detenerse después de la resta (95 − 32 = 63) y reportar 63 °C como si ya fuera el resultado final, sin aplicar el factor 5/9.',
    source_reference: 'Guía oficial, página 15, código 5.1.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ct-005',
    topic_id: 'cn-5-1-4-conversion-de-escalas-termometricas',
    prompt:
      'Ordena los pasos para convertir 30 °C a Fahrenheit.\n\n1. Identificar la fórmula `°F = (°C × 9/5) + 32`\n2. Sustituir el valor: `(30 × 9/5) + 32`\n3. Resolver la multiplicación: 30 × 9 = 270; 270 ÷ 5 = 54\n4. Sumar 32 al resultado: 54 + 32 = 86 °F',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 4, 2'],
    correct_option_index: 0,
    explanation:
      'Primero se identifica la fórmula, luego se sustituye el valor conocido, después se resuelve la multiplicación y, solo al final, se suma 32 para obtener el resultado con su unidad: 30 °C equivalen a 86 °F.',
    common_error:
      'Sumar 32 antes de completar la multiplicación por 9/5, mezclando el orden de las operaciones y obteniendo un resultado distinto al correcto.',
    source_reference: 'Guía oficial, página 15, código 5.1.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-001',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'Calcula la fuerza eléctrica entre dos cargas de `q₁ = 2 × 10⁻⁶ C` y `q₂ = 2 × 10⁻⁶ C`, separadas por `r = 2 m`.',
    options: ['0.01798 N', '8.99 × 10⁻¹² N', '0.00899 N'],
    correct_option_index: 2,
    explanation:
      'Fórmula: `f = k × (q₁ × q₂) / r²`. Sustitución: `f = (8.99 × 10⁹) × (2 × 10⁻⁶ × 2 × 10⁻⁶) / (2)²`. Numerador: `2 × 10⁻⁶ × 2 × 10⁻⁶ = 4 × 10⁻¹²`; `8.99 × 10⁹ × 4 × 10⁻¹² = 35.96 × 10⁻³`. Denominador: `(2)² = 4`. `f = 35.96 × 10⁻³ ÷ 4 = 8.99 × 10⁻³ N`.',
    common_error:
      'No elevar la distancia al cuadrado y dividir el numerador solo entre `r` (entre 2 en lugar de entre 4), lo que produce 0.01798 N en lugar de 0.00899 N.',
    source_reference: 'Guía oficial, página 15, código 5.1.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-002',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'Dos cargas de `5 µC` y `1 µC` están separadas por `r = 1 m`. Antes de sustituir en `f = k × (q₁ × q₂) / r²`, ambas cargas deben convertirse a coulombs: `5 µC = 5 × 10⁻⁶ C` y `1 µC = ___`.',
    options: ['1 × 10⁻³ C', '1 × 10⁻⁹ C', '1 × 10⁻⁶ C'],
    correct_option_index: 2,
    explanation:
      'El prefijo «micro» equivale a `10⁻⁶`, así que `1 µC = 1 × 10⁻⁶ C`. Sustituyendo ambas cargas ya convertidas: `f = (8.99 × 10⁹) × (5 × 10⁻⁶ × 1 × 10⁻⁶) / (1)² = (8.99 × 10⁹) × (5 × 10⁻¹²) = 0.04495 N`.',
    common_error:
      'Usar `1 × 10⁻³ C` para el prefijo micro, confundiéndolo con el prefijo «mili» (`10⁻³`), lo que altera el resultado en varios órdenes de magnitud.',
    source_reference: 'Guía oficial, página 15, código 5.1.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-003',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'Calcula la fuerza eléctrica entre `q₁ = +3 × 10⁻⁶ C` y `q₂ = −1 × 10⁻⁶ C`, separadas por `r = 0.3 m`, e indica si es de atracción o de repulsión.',
    options: ['≈0.09 N, de atracción', '≈0.30 N, de repulsión', '≈0.30 N, de atracción'],
    correct_option_index: 2,
    explanation:
      'Fórmula: `f = k × (q₁ × q₂) / r²`. Numerador: `3 × 10⁻⁶ × 1 × 10⁻⁶ = 3 × 10⁻¹²`; `8.99 × 10⁹ × 3 × 10⁻¹² = 26.97 × 10⁻³`. Denominador: `(0.3)² = 0.09`. `f = 26.97 × 10⁻³ ÷ 0.09 ≈ 0.30 N`. Como las cargas tienen signos opuestos, la fuerza es de atracción.',
    common_error:
      'Calcular bien la magnitud pero asignar la dirección incorrecta, olvidando que cargas de signos opuestos se atraen y cargas del mismo signo se repelen.',
    source_reference: 'Guía oficial, página 15, código 5.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-004',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'Si la distancia entre dos cargas se reduce a la mitad, manteniendo las cargas constantes, ¿qué ocurre con la fuerza eléctrica entre ellas?',
    options: ['se duplica', 'se reduce a la mitad', 'se cuadruplica'],
    correct_option_index: 2,
    explanation:
      'La ley de Coulomb es inversamente proporcional al cuadrado de la distancia. Si `r` se reduce a la mitad, `r²` se reduce a un cuarto de su valor original, y como la fuerza se divide entre `r²`, dividir entre un cuarto equivale a multiplicar por 4: la fuerza se cuadruplica.',
    common_error:
      'Asumir una relación lineal entre distancia y fuerza (si la distancia se reduce a la mitad, la fuerza solo se duplica), sin considerar que la relación es inversamente proporcional al cuadrado de la distancia.',
    source_reference: 'Guía oficial, página 15, código 5.1.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lco-005',
    topic_id: 'cn-5-1-5-ley-de-coulomb',
    prompt:
      'Ordena los pasos para calcular la fuerza eléctrica entre `q₁ = 6 × 10⁻⁶ C` y `q₂ = 2 × 10⁻⁶ C`, separadas por `r = 0.3 m`.\n\n1. Calcular el producto de las cargas: `6 × 10⁻⁶ × 2 × 10⁻⁶ = 12 × 10⁻¹²`\n2. Elevar la distancia al cuadrado: `(0.3)² = 0.09`\n3. Multiplicar el producto de las cargas por la constante k: `8.99 × 10⁹ × 12 × 10⁻¹² = 0.10788`\n4. Dividir ese resultado entre la distancia al cuadrado: `0.10788 ÷ 0.09 ≈ 1.199 N`',
    options: ['1, 2, 3, 4', '3, 4, 1, 2', '2, 1, 4, 3'],
    correct_option_index: 0,
    explanation:
      'Primero se calcula el producto de las cargas, luego se eleva la distancia al cuadrado, después se multiplica ese producto por la constante k, y solo al final se divide entre la distancia al cuadrado para obtener la fuerza: `f ≈ 1.199 N`, de repulsión, porque ambas cargas son positivas.',
    common_error:
      'Multiplicar por la constante k antes de tener listos tanto el producto de las cargas como el cuadrado de la distancia, lo que genera confusión sobre qué número corresponde a cada variable en la fórmula.',
    source_reference: 'Guía oficial, página 15, código 5.1.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
