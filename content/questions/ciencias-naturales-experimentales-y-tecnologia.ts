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
  },
  {
    id: 'cn-lv-001',
    topic_id: 'cn-5-2-1-caracteristicas-de-la-luz-visible',
    prompt: '¿Qué rango aproximado de longitud de onda corresponde a la luz visible?',
    options: ['10 nm a 400 nm', '400 nm a 700 nm', '700 nm a 1 mm'],
    correct_option_index: 1,
    explanation:
      'La luz visible corresponde aproximadamente al rango de 400 a 700 nanómetros de longitud de onda, desde el violeta hasta el rojo.',
    common_error:
      'Confundir el rango de la luz visible con el de otras regiones del espectro electromagnético, como el ultravioleta (longitudes más cortas) o el infrarrojo (longitudes más largas).',
    source_reference: 'Guía oficial, página 16, código 5.2.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-lv-002',
    topic_id: 'cn-5-2-1-caracteristicas-de-la-luz-visible',
    prompt:
      'La luz visible es una onda electromagnética que, a diferencia del sonido, puede propagarse en el vacío porque no necesita un medio material para transmitirse; su rapidez en el vacío es aproximadamente ___.',
    options: ['3 × 10⁸ m/s', '3 × 10⁵ m/s', '3 × 10³ m/s'],
    correct_option_index: 0,
    explanation:
      'La rapidez de la luz visible en el vacío es aproximadamente `3 × 10⁸ m/s`, la misma que la de cualquier onda electromagnética en el vacío.',
    common_error:
      'Reducir el orden de magnitud de la rapidez de la luz por un factor de mil o de cien mil, confundiendo la potencia de diez correcta.',
    source_reference: 'Guía oficial, página 16, código 5.2.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lv-003',
    topic_id: 'cn-5-2-1-caracteristicas-de-la-luz-visible',
    prompt: 'Al descomponer luz blanca con un prisma, ¿qué color del espectro visible tiene la longitud de onda más larga?',
    options: ['el violeta', 'el rojo', 'el verde'],
    correct_option_index: 1,
    explanation:
      'El rojo tiene la longitud de onda más larga del espectro visible; el violeta tiene la más corta.',
    common_error:
      'Invertir los extremos del espectro visible, atribuyendo la longitud de onda más larga al violeta en lugar de al rojo.',
    source_reference: 'Guía oficial, página 16, código 5.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lv-004',
    topic_id: 'cn-5-2-1-caracteristicas-de-la-luz-visible',
    prompt:
      'Si dos colores de luz visible viajan a la misma rapidez en el vacío, y uno tiene mayor longitud de onda que el otro, ¿qué relación existe entre su longitud de onda y su frecuencia?',
    options: [
      'a mayor longitud de onda, menor frecuencia, porque ambas son inversamente proporcionales cuando la rapidez es constante',
      'a mayor longitud de onda, mayor frecuencia, porque ambas aumentan juntas',
      'la longitud de onda y la frecuencia no tienen relación entre sí'
    ],
    correct_option_index: 0,
    explanation:
      'Cuando la rapidez de propagación es constante, la longitud de onda y la frecuencia son inversamente proporcionales: a mayor longitud de onda, menor frecuencia.',
    common_error:
      'Suponer que longitud de onda y frecuencia aumentan juntas, en lugar de reconocer su relación inversamente proporcional a rapidez constante.',
    source_reference: 'Guía oficial, página 16, código 5.2.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lv-005',
    topic_id: 'cn-5-2-1-caracteristicas-de-la-luz-visible',
    prompt:
      'Relaciona cada color del espectro visible con su posición relativa de longitud de onda.\n\n1. Rojo\n2. Verde\n3. Violeta\n\na. Longitud de onda intermedia\nb. Longitud de onda más corta\nc. Longitud de onda más larga',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'El rojo tiene la longitud de onda más larga del espectro visible (c); el verde tiene una longitud de onda intermedia (a); el violeta tiene la longitud de onda más corta (b).',
    common_error:
      'Invertir la posición del rojo y el violeta, atribuyendo la longitud de onda más corta al rojo en lugar de al violeta.',
    source_reference: 'Guía oficial, página 16, código 5.2.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ce-001',
    topic_id: 'cn-5-2-2-calor-especifico',
    prompt:
      'Calcula el calor necesario para elevar la temperatura de 200 g de agua (`c = 1 cal/(g·°C)`) de 20 °C a 80 °C.',
    options: ['16,000 cal', '60 cal', '12,000 cal'],
    correct_option_index: 2,
    explanation:
      'Fórmula: `Q = m × c × ΔT`. `ΔT = 80 − 20 = 60 °C`. Sustitución: `Q = 200 × 1 × 60 = 12,000 cal`.',
    common_error:
      'Usar la temperatura final (80 °C) directamente como `ΔT`, en lugar de restar la temperatura inicial, lo que da 16,000 cal en lugar de 12,000 cal.',
    source_reference: 'Guía oficial, página 16, código 5.2.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-ce-002',
    topic_id: 'cn-5-2-2-calor-especifico',
    prompt:
      'Si `Q = m × c × ΔT`, y se conocen `Q = 500 cal`, `m = 50 g` y `c = 1 cal/(g·°C)`, entonces `ΔT = ___`.',
    options: ['500 °C', '5 °C', '10 °C'],
    correct_option_index: 2,
    explanation:
      'Despejando: `ΔT = Q / (m × c) = 500 / (50 × 1) = 10 °C`.',
    common_error:
      'Dividir `Q` solo entre `c`, olvidando dividir también entre la masa, lo que da 500 °C en lugar de 10 °C.',
    source_reference: 'Guía oficial, página 16, código 5.2.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ce-003',
    topic_id: 'cn-5-2-2-calor-especifico',
    prompt:
      'Se calienta una sustancia de 100 g desde 25 °C hasta 45 °C, absorbiendo 800 cal. ¿Cuál es su calor específico?',
    options: ['0.4 cal/(g·°C)', '4 cal/(g·°C)', '40 cal/(g·°C)'],
    correct_option_index: 0,
    explanation:
      '`ΔT = 45 − 25 = 20 °C`. Despejando: `c = Q / (m × ΔT) = 800 / (100 × 20) = 0.4 cal/(g·°C)`.',
    common_error:
      'Olvidar el punto decimal al dividir, obteniendo 4 o 40 cal/(g·°C) en lugar de 0.4 cal/(g·°C).',
    source_reference: 'Guía oficial, página 16, código 5.2.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ce-004',
    topic_id: 'cn-5-2-2-calor-especifico',
    prompt:
      'Una sustancia de 150 g, con calor específico `c = 0.5 cal/(g·°C)`, se calienta desde 50 °F hasta 122 °F. Primero convierte ambas temperaturas a Celsius, calcula `ΔT`, y después calcula `Q`.',
    options: ['5,400 cal', '1,500 cal', '3,000 cal'],
    correct_option_index: 2,
    explanation:
      'Conversión: `50 °F = (50 − 32) × 5/9 = 10 °C`; `122 °F = (122 − 32) × 5/9 = 50 °C`. `ΔT = 50 − 10 = 40 °C`. `Q = 150 × 0.5 × 40 = 3,000 cal`.',
    common_error:
      'Usar la diferencia de las temperaturas en Fahrenheit (122 − 50 = 72) directamente como `ΔT` en la fórmula, sin convertir primero a Celsius, lo que da 5,400 cal en lugar de 3,000 cal.',
    source_reference: 'Guía oficial, página 16, código 5.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ce-005',
    topic_id: 'cn-5-2-2-calor-especifico',
    prompt:
      'Ordena los pasos para calcular el calor necesario al calentar una sustancia cuya temperatura inicial y final se dan en Fahrenheit.\n\n1. Convertir ambas temperaturas de Fahrenheit a Celsius\n2. Calcular `ΔT` restando la temperatura inicial de la final, ya en Celsius\n3. Sustituir `m`, `c` y `ΔT` en la fórmula `Q = m × c × ΔT`\n4. Resolver la multiplicación para obtener `Q` en calorías',
    options: ['1, 2, 3, 4', '3, 4, 1, 2', '2, 1, 3, 4'],
    correct_option_index: 0,
    explanation:
      'Primero se convierten ambas temperaturas a Celsius (1), luego se calcula `ΔT` (2), después se sustituyen los valores en la fórmula (3), y finalmente se resuelve la multiplicación para obtener `Q` (4).',
    common_error:
      'Sustituir en la fórmula antes de convertir las temperaturas a Celsius, mezclando grados Fahrenheit con una fórmula que requiere grados Celsius.',
    source_reference: 'Guía oficial, página 16, código 5.2.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-te-001',
    topic_id: 'cn-5-2-3-caracteristicas-de-los-tipos-de-energia',
    prompt: 'Un aerogenerador convierte el movimiento del aire en electricidad. ¿Qué tipo de energía aprovecha directamente?',
    options: ['nuclear', 'eólica', 'radiante'],
    correct_option_index: 1,
    explanation:
      'Un aerogenerador aprovecha la energía eólica, la energía cinética del aire en movimiento, para generar electricidad.',
    common_error:
      'Confundir la energía eólica con la energía radiante, ambas presentes en fuentes de generación eléctrica «limpias», sin distinguir su mecanismo de origen.',
    source_reference: 'Guía oficial, página 16, código 5.2.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-te-002',
    topic_id: 'cn-5-2-3-caracteristicas-de-los-tipos-de-energia',
    prompt:
      'La energía nuclear se libera mediante reacciones que ocurren en el núcleo de los átomos, ya sea al dividir núcleos pesados (fisión) o al combinar núcleos ligeros (___), como ocurre en el Sol.',
    options: ['fusión', 'radiación', 'conducción'],
    correct_option_index: 0,
    explanation:
      'La fusión nuclear combina núcleos ligeros para liberar energía, el proceso que ocurre en el interior del Sol.',
    common_error:
      'Confundir la fusión nuclear, un proceso que ocurre en el núcleo atómico, con la radiación o la conducción, mecanismos de transferencia de energía, no de liberación nuclear.',
    source_reference: 'Guía oficial, página 16, código 5.2.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-te-003',
    topic_id: 'cn-5-2-3-caracteristicas-de-los-tipos-de-energia',
    prompt:
      '¿Qué tipo de energía se transmite mediante ondas electromagnéticas y puede viajar a través del vacío, sin necesitar un medio material?',
    options: ['radiante', 'térmica', 'eólica'],
    correct_option_index: 0,
    explanation:
      'La energía radiante se transmite mediante ondas electromagnéticas, como la luz visible, y puede viajar a través del vacío sin necesitar un medio material.',
    common_error:
      'Confundir la energía radiante con la térmica, ambas relacionadas con la sensación de «calor», sin distinguir que la térmica requiere un medio o contacto para transferirse.',
    source_reference: 'Guía oficial, página 16, código 5.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-te-004',
    topic_id: 'cn-5-2-3-caracteristicas-de-los-tipos-de-energia',
    prompt: '¿Qué distingue a la energía térmica de la energía radiante?',
    options: [
      'la térmica está asociada al movimiento interno de las partículas de una sustancia, mientras que la radiante se transmite mediante ondas electromagnéticas, incluso en el vacío',
      'ambas son exactamente la misma forma de energía, solo con nombres distintos',
      'la térmica se transmite en el vacío, mientras que la radiante necesita un medio material'
    ],
    correct_option_index: 0,
    explanation:
      'La energía térmica está asociada al movimiento interno de las partículas de una sustancia, mientras que la radiante se transmite mediante ondas electromagnéticas, incluso a través del vacío.',
    common_error:
      'Invertir la característica de cada tipo de energía, atribuyendo a la térmica la capacidad de transmitirse en el vacío.',
    source_reference: 'Guía oficial, página 16, código 5.2.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-te-005',
    topic_id: 'cn-5-2-3-caracteristicas-de-los-tipos-de-energia',
    prompt:
      'Relaciona cada tipo de energía con su fuente o mecanismo.\n\n1. Energía térmica\n2. Energía eólica\n3. Energía nuclear\n\na. Reacciones en el núcleo de los átomos\nb. Movimiento del aire\nc. Movimiento interno de las partículas de una sustancia',
    options: ['1c, 2b, 3a', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'La energía térmica proviene del movimiento interno de las partículas de una sustancia (c); la eólica, del movimiento del aire (b); la nuclear, de reacciones en el núcleo de los átomos (a).',
    common_error:
      'Atribuir el movimiento interno de partículas a la energía nuclear, en lugar de reconocerlo como el mecanismo de la energía térmica.',
    source_reference: 'Guía oficial, página 16, código 5.2.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ecp-001',
    topic_id: 'cn-5-2-4-energia-cinetica-y-potencial',
    prompt: 'Calcula la energía cinética de un objeto de masa 4 kg que se mueve a una rapidez de 5 m/s.',
    options: ['100 J', '10 J', '50 J'],
    correct_option_index: 2,
    explanation:
      'Fórmula: `Ec = (1/2) × m × v²`. Sustitución: `Ec = (1/2) × 4 × 5² = (1/2) × 4 × 25 = 50 J`.',
    common_error:
      'Olvidar el factor `1/2` de la fórmula (obteniendo 100 J), o usar `v` en lugar de `v²` (obteniendo 10 J).',
    source_reference: 'Guía oficial, página 16, código 5.2.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-ecp-002',
    topic_id: 'cn-5-2-4-energia-cinetica-y-potencial',
    prompt:
      'La energía potencial gravitatoria se calcula con `Ep = m × g × h`, donde `g` es la aceleración de la gravedad, aproximadamente ___ en la superficie terrestre.',
    options: ['9.8 m/s²', '3.8 m/s²', '98 m/s²'],
    correct_option_index: 0,
    explanation:
      'La aceleración de la gravedad en la superficie terrestre es aproximadamente `9.8 m/s²`.',
    common_error:
      'Confundir el valor de `g` en la Tierra con el de otro planeta, o desplazar el punto decimal y obtener `98 m/s²`.',
    source_reference: 'Guía oficial, página 16, código 5.2.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ecp-003',
    topic_id: 'cn-5-2-4-energia-cinetica-y-potencial',
    prompt:
      'Calcula la energía potencial gravitatoria de un objeto de 3 kg situado a una altura de 10 m, usando `g = 9.8 m/s²`.',
    options: ['294 J', '29.4 J', '2,940 J'],
    correct_option_index: 0,
    explanation:
      'Fórmula: `Ep = m × g × h`. Sustitución: `Ep = 3 × 9.8 × 10 = 294 J`.',
    common_error:
      'Cometer un error en el orden de magnitud al multiplicar, obteniendo 29.4 J o 2,940 J en lugar de 294 J.',
    source_reference: 'Guía oficial, página 16, código 5.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ecp-004',
    topic_id: 'cn-5-2-4-energia-cinetica-y-potencial',
    prompt: 'Si la rapidez de un objeto se duplica, manteniendo su masa constante, ¿qué ocurre con su energía cinética?',
    options: ['se duplica', 'se cuadruplica', 'se reduce a la mitad'],
    correct_option_index: 1,
    explanation:
      'Como la energía cinética depende del cuadrado de la rapidez, al duplicar `v`, el valor de `v²` se multiplica por 4, y por lo tanto `Ec` se cuadruplica.',
    common_error:
      'Asumir una relación lineal entre rapidez y energía cinética (si la rapidez se duplica, la energía solo se duplica), sin considerar que la relación depende del cuadrado de la rapidez.',
    source_reference: 'Guía oficial, página 16, código 5.2.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-ecp-005',
    topic_id: 'cn-5-2-4-energia-cinetica-y-potencial',
    prompt:
      'Ordena los pasos para calcular la energía cinética de un objeto de masa 6 kg que se mueve a 4 m/s.\n\n1. Identificar la fórmula `Ec = (1/2) × m × v²`\n2. Elevar la rapidez al cuadrado: `4² = 16`\n3. Multiplicar la masa por el cuadrado de la rapidez: `6 × 16 = 96`\n4. Multiplicar por 1/2 para obtener el resultado: `96 × 0.5 = 48 J`',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'Primero se identifica la fórmula (1), luego se eleva la rapidez al cuadrado (2), después se multiplica la masa por ese resultado (3), y finalmente se multiplica por 1/2 para obtener `Ec = 48 J` (4).',
    common_error:
      'Multiplicar por 1/2 antes de tener listo el producto de la masa por el cuadrado de la rapidez, alterando el orden de las operaciones.',
    source_reference: 'Guía oficial, página 16, código 5.2.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lt-001',
    topic_id: 'cn-5-2-5-leyes-de-la-termodinamica',
    prompt:
      'Dos tazas de café han permanecido varias horas en la misma habitación, ambas a la temperatura ambiente, sin intercambiar calor entre sí en ningún momento. ¿Qué ley de la termodinámica ejemplifica esta situación?',
    options: ['la primera ley', 'la ley cero', 'la segunda ley'],
    correct_option_index: 1,
    explanation:
      'Dos objetos a la misma temperatura, sin intercambio de calor entre ellos, están en equilibrio térmico: esa es la ley cero de la termodinámica.',
    common_error:
      'Confundir esta situación de equilibrio térmico, sin intercambio de calor, con la segunda ley, que describe la dirección del flujo de calor cuando sí existe una diferencia de temperatura.',
    source_reference: 'Guía oficial, página 16, código 5.2.5; calibración de profundidad: página 35.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-lt-002',
    topic_id: 'cn-5-2-5-leyes-de-la-termodinamica',
    prompt: 'La primera ley de la termodinámica establece que la energía no se crea ni se destruye, solo se ___.',
    options: ['transforma', 'multiplica', 'elimina'],
    correct_option_index: 0,
    explanation:
      'La primera ley de la termodinámica establece que la energía se transforma de una forma a otra, sin crearse ni destruirse.',
    common_error:
      'Confundir «transformarse» con «eliminarse», contradiciendo el principio de conservación de la energía que establece esta ley.',
    source_reference: 'Guía oficial, página 16, código 5.2.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lt-003',
    topic_id: 'cn-5-2-5-leyes-de-la-termodinamica',
    prompt:
      'Una taza de café caliente se enfría gradualmente en una habitación fría, pero la habitación nunca se enfría espontáneamente para calentar la taza. ¿Qué ley de la termodinámica ejemplifica esta dirección del flujo de calor?',
    options: ['la segunda ley', 'la ley cero', 'la tercera ley'],
    correct_option_index: 0,
    explanation:
      'La segunda ley de la termodinámica establece que el calor fluye espontáneamente de un cuerpo caliente a uno frío, y nunca al revés sin un trabajo externo.',
    common_error:
      'Confundir la dirección espontánea del flujo de calor (segunda ley) con el equilibrio térmico sin intercambio de calor (ley cero).',
    source_reference: 'Guía oficial, página 16, código 5.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lt-004',
    topic_id: 'cn-5-2-5-leyes-de-la-termodinamica',
    prompt:
      'Conforme la temperatura de un cristal perfecto se acerca al cero absoluto (0 K), su entropía se aproxima a un valor mínimo. ¿Qué ley de la termodinámica describe este comportamiento?',
    options: ['la tercera ley', 'la primera ley', 'la segunda ley'],
    correct_option_index: 0,
    explanation:
      'La tercera ley de la termodinámica describe que la entropía de un cristal perfecto se aproxima a un valor mínimo conforme su temperatura se acerca al cero absoluto.',
    common_error:
      'Confundir el comportamiento de la entropía cerca del cero absoluto (tercera ley) con la conservación de la energía (primera ley).',
    source_reference: 'Guía oficial, página 16, código 5.2.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-lt-005',
    topic_id: 'cn-5-2-5-leyes-de-la-termodinamica',
    prompt:
      'Relaciona cada situación con la ley de la termodinámica que ejemplifica.\n\n1. Dos objetos en contacto dejan de intercambiar calor porque alcanzan la misma temperatura\n2. El calor fluye espontáneamente de un cuerpo caliente a uno frío, y nunca al revés\n3. Toda la energía eléctrica que consume una plancha se transforma en calor, sin perderse\n\na. Primera ley\nb. Ley cero\nc. Segunda ley',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El equilibrio térmico sin intercambio de calor corresponde a la ley cero (b); el flujo espontáneo de calor de caliente a frío corresponde a la segunda ley (c); la transformación de energía sin pérdidas corresponde a la primera ley (a).',
    common_error:
      'Atribuir el equilibrio térmico a la segunda ley, en lugar de reconocerlo como el caso que describe específicamente la ley cero.',
    source_reference: 'Guía oficial, página 16, código 5.2.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-fts-001',
    topic_id: 'cn-5-3-1-productos-y-reactivos-en-la-fotosintesis',
    prompt: '¿Cuál de las siguientes sustancias es un reactivo de la fotosíntesis?',
    options: ['glucosa', 'dióxido de carbono', 'oxígeno'],
    correct_option_index: 1,
    explanation:
      'La ecuación de la fotosíntesis (`6 CO₂ + 6 H₂O + luz solar → C₆H₁₂O₆ + 6 O₂`) tiene al dióxido de carbono antes de la flecha, junto con el agua y la luz solar: es uno de sus reactivos.',
    common_error:
      'Confundir el dióxido de carbono con el oxígeno por asociarlos ambos con «gases del aire», sin distinguir que uno se consume (reactivo) y el otro se libera (producto).',
    source_reference: 'Guía oficial, página 16, código 5.3.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-fts-002',
    topic_id: 'cn-5-3-1-productos-y-reactivos-en-la-fotosintesis',
    prompt: '¿Qué producto de la fotosíntesis se libera a la atmósfera?',
    options: ['oxígeno', 'dióxido de carbono', 'agua'],
    correct_option_index: 0,
    explanation:
      'La ecuación de la fotosíntesis produce glucosa y oxígeno; la glucosa queda almacenada en la planta, mientras que el oxígeno se libera al ambiente.',
    common_error:
      'Pensar que el dióxido de carbono es lo que se libera, invirtiendo su papel: el dióxido de carbono es un reactivo que se consume, no un producto que se libera.',
    source_reference: 'Guía oficial, página 16, código 5.3.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-fts-003',
    topic_id: 'cn-5-3-1-productos-y-reactivos-en-la-fotosintesis',
    prompt: '¿En qué molécula queda almacenada la energía producida por la fotosíntesis?',
    options: ['glucosa', 'dióxido de carbono', 'oxígeno'],
    correct_option_index: 0,
    explanation:
      'La glucosa (`C₆H₁₂O₆`) es el producto orgánico de la fotosíntesis donde queda almacenada la energía capturada de la luz solar.',
    common_error:
      'Atribuir el almacenamiento de energía al oxígeno, un subproducto que se libera al ambiente sin función de almacenamiento energético.',
    source_reference: 'Guía oficial, página 16, código 5.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-fts-004',
    topic_id: 'cn-5-3-1-productos-y-reactivos-en-la-fotosintesis',
    prompt:
      'La ecuación general de la fotosíntesis es `6 CO₂ + 6 H₂O + luz solar → C₆H₁₂O₆ + ___`.',
    options: ['6 O₂', '6 CO₂', '6 H₂O'],
    correct_option_index: 0,
    explanation:
      'El segundo producto de la fotosíntesis, junto con la glucosa, es el oxígeno (`6 O₂`), liberado a la atmósfera.',
    common_error:
      'Repetir uno de los reactivos (`CO₂` o `H₂O`) del lado de los productos, sin notar que esas sustancias se consumen, no se generan.',
    source_reference: 'Guía oficial, página 16, código 5.3.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-fts-005',
    topic_id: 'cn-5-3-1-productos-y-reactivos-en-la-fotosintesis',
    prompt:
      'Relaciona cada sustancia con su papel en la fotosíntesis.\n\n1. Dióxido de carbono\n2. Glucosa\n3. Oxígeno\n\na. Reactivo tomado del aire\nb. Producto liberado a la atmósfera\nc. Producto donde se almacena energía',
    options: ['1a, 2c, 3b', '1b, 2a, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'El dióxido de carbono es un reactivo tomado del aire (a); la glucosa es el producto donde se almacena la energía (c); el oxígeno es el producto liberado a la atmósfera (b).',
    common_error:
      'Invertir los papeles de la glucosa y el oxígeno, atribuyendo el almacenamiento de energía al oxígeno en lugar de a la glucosa.',
    source_reference: 'Guía oficial, página 16, código 5.3.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-bio-001',
    topic_id: 'cn-5-3-2-caracteristicas-de-los-biomas',
    prompt:
      '¿Qué bioma tiene una estación seca y otra lluviosa bien marcadas, con pastizales y árboles dispersos?',
    options: ['tundra', 'selva tropical', 'sabana'],
    correct_option_index: 2,
    explanation:
      'La sabana tiene un clima cálido con una estación seca y otra lluviosa bien diferenciadas, y su vegetación característica son los pastizales con árboles dispersos.',
    common_error:
      'Confundir la sabana con la selva tropical por ser ambas cálidas, sin notar que la selva es húmeda todo el año y tiene vegetación densa, mientras que la sabana tiene una estación seca marcada.',
    source_reference: 'Guía oficial, página 16, código 5.3.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-bio-002',
    topic_id: 'cn-5-3-2-caracteristicas-de-los-biomas',
    prompt: '¿Qué bioma tiene un subsuelo permanentemente congelado (permafrost)?',
    options: ['tundra', 'bosque templado', 'selva tropical'],
    correct_option_index: 0,
    explanation:
      'La tundra tiene un clima muy frío la mayor parte del año, con un subsuelo permanentemente congelado (permafrost) y vegetación baja sin árboles.',
    common_error:
      'Atribuir el permafrost al bosque templado, un bioma con estaciones marcadas pero sin subsuelo permanentemente congelado.',
    source_reference: 'Guía oficial, página 16, código 5.3.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-bio-003',
    topic_id: 'cn-5-3-2-caracteristicas-de-los-biomas',
    prompt: '¿Qué bioma tiene el mayor nivel de biodiversidad terrestre?',
    options: ['selva tropical', 'tundra', 'sabana'],
    correct_option_index: 0,
    explanation:
      'La selva tropical, con su clima cálido y húmedo todo el año y su vegetación densa y estratificada, es el bioma terrestre con mayor biodiversidad.',
    common_error:
      'Atribuir la mayor biodiversidad a la sabana por su extensión, sin considerar que su estación seca marcada limita la diversidad en comparación con la selva tropical.',
    source_reference: 'Guía oficial, página 16, código 5.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-bio-004',
    topic_id: 'cn-5-3-2-caracteristicas-de-los-biomas',
    prompt:
      'El bosque templado se caracteriza por árboles ___ que pierden sus hojas en otoño.',
    options: ['caducifolios', 'perennifolios', 'suculentos'],
    correct_option_index: 0,
    explanation:
      'Los árboles caducifolios pierden sus hojas en otoño como adaptación a las cuatro estaciones marcadas del bosque templado.',
    common_error:
      'Confundir «caducifolio» con «perennifolio», que describe árboles que mantienen su follaje todo el año, lo opuesto a la característica del bosque templado.',
    source_reference: 'Guía oficial, página 16, código 5.3.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-bio-005',
    topic_id: 'cn-5-3-2-caracteristicas-de-los-biomas',
    prompt:
      'Relaciona cada bioma con su característica principal.\n\n1. Sabana\n2. Tundra\n3. Bosque templado\n\na. Vegetación baja sin árboles y permafrost\nb. Árboles caducifolios y cuatro estaciones\nc. Pastizales con estación seca marcada',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'La sabana se caracteriza por pastizales con estación seca marcada (c); la tundra, por vegetación baja sin árboles y permafrost (a); el bosque templado, por árboles caducifolios y cuatro estaciones (b).',
    common_error:
      'Intercambiar las características de la sabana y el bosque templado, ambos con estacionalidad, sin distinguir que la estacionalidad de la sabana es de lluvia y la del bosque templado es de temperatura.',
    source_reference: 'Guía oficial, página 16, código 5.3.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rtr-001',
    topic_id: 'cn-5-3-3-niveles-de-las-redes-troficas',
    prompt:
      'En una red trófica, el pasto es comido por un conejo, y el conejo es comido por un zorro. ¿Qué nivel trófico ocupa el conejo?',
    options: ['productor', 'consumidor primario', 'consumidor secundario'],
    correct_option_index: 1,
    explanation:
      'El conejo se alimenta directamente del pasto, que es el productor: por eso el conejo es un consumidor primario.',
    common_error:
      'Clasificar al conejo como productor por ser un herbívoro «cercano a las plantas», sin notar que un productor es el organismo que realiza la fotosíntesis, no el que se alimenta de él.',
    source_reference: 'Guía oficial, página 16, código 5.3.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-rtr-002',
    topic_id: 'cn-5-3-3-niveles-de-las-redes-troficas',
    prompt: '¿Qué nivel trófico produce su propio alimento mediante fotosíntesis?',
    options: ['productor', 'consumidor primario', 'consumidor secundario'],
    correct_option_index: 0,
    explanation:
      'Los productores (autótrofos), como las plantas y las algas, producen su propio alimento mediante la fotosíntesis y son la base de toda red trófica.',
    common_error:
      'Confundir al productor con el consumidor primario, que se alimenta del productor pero no fabrica su propio alimento.',
    source_reference: 'Guía oficial, página 16, código 5.3.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rtr-003',
    topic_id: 'cn-5-3-3-niveles-de-las-redes-troficas',
    prompt:
      'En la misma red trófica (pasto → conejo → zorro), ¿qué nivel trófico ocupa el zorro?',
    options: ['consumidor secundario', 'consumidor primario', 'productor'],
    correct_option_index: 0,
    explanation:
      'El zorro se alimenta del conejo, un consumidor primario: por eso el zorro ocupa el nivel de consumidor secundario.',
    common_error:
      'Clasificar al zorro como consumidor primario por ser el primer depredador mencionado, sin contar correctamente los eslabones que lo separan del productor.',
    source_reference: 'Guía oficial, página 16, código 5.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rtr-004',
    topic_id: 'cn-5-3-3-niveles-de-las-redes-troficas',
    prompt: 'Un organismo que se alimenta directamente de un productor es un consumidor ___.',
    options: ['primario', 'secundario', 'terciario'],
    correct_option_index: 0,
    explanation:
      'El consumidor primario es, por definición, el que se alimenta directamente de un productor.',
    common_error:
      'Confundir «primario» con «terciario», invirtiendo el orden en que se numeran los niveles de consumidores a partir del productor.',
    source_reference: 'Guía oficial, página 16, código 5.3.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rtr-005',
    topic_id: 'cn-5-3-3-niveles-de-las-redes-troficas',
    prompt:
      'Ordena, de la base a la cima, los niveles tróficos de una red donde el fitoplancton es comido por un pez pequeño, el pez pequeño por un pez mediano, y el pez mediano por un tiburón.\n\n1. Productor\n2. Consumidor primario\n3. Consumidor secundario\n4. Consumidor terciario',
    options: ['1, 2, 3, 4', '4, 3, 2, 1', '2, 1, 3, 4'],
    correct_option_index: 0,
    explanation:
      'El fitoplancton es el productor (1); el pez pequeño, al alimentarse de él, es consumidor primario (2); el pez mediano, consumidor secundario (3); y el tiburón, consumidor terciario (4).',
    common_error:
      'Ordenar la red de la cima a la base sin invertir la numeración, colocando al tiburón primero por ser el depredador más grande.',
    source_reference: 'Guía oficial, página 16, código 5.3.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cbg-001',
    topic_id: 'cn-5-3-4-sustancias-en-ciclos-biogeoquimicos',
    prompt: '¿Qué sustancia libera un volcán en erupción, propia del ciclo del azufre?',
    options: ['sulfato', 'sulfuro de hidrógeno', 'dióxido de azufre'],
    correct_option_index: 2,
    explanation:
      'La actividad volcánica libera azufre a la atmósfera en forma de dióxido de azufre (`SO₂`), la forma gaseosa atmosférica del ciclo del azufre.',
    common_error:
      'Confundir el dióxido de azufre con el sulfato, que es la forma que las plantas absorben del suelo, no la que se libera directamente a la atmósfera por un volcán.',
    source_reference: 'Guía oficial, página 16, código 5.3.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-cbg-002',
    topic_id: 'cn-5-3-4-sustancias-en-ciclos-biogeoquimicos',
    prompt:
      '¿En qué proceso se fija el dióxido de carbono atmosférico dentro del ciclo del carbono?',
    options: ['fotosíntesis', 'respiración', 'combustión'],
    correct_option_index: 0,
    explanation:
      'La fotosíntesis fija el dióxido de carbono atmosférico, incorporándolo a la materia orgánica de los productores.',
    common_error:
      'Confundir la fijación del carbono con la respiración, un proceso que libera dióxido de carbono a la atmósfera en lugar de fijarlo.',
    source_reference: 'Guía oficial, página 16, código 5.3.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cbg-003',
    topic_id: 'cn-5-3-4-sustancias-en-ciclos-biogeoquimicos',
    prompt: '¿Qué sustancia del ciclo del azufre absorben las plantas del suelo?',
    options: ['sulfato', 'dióxido de azufre', 'sulfuro de hidrógeno'],
    correct_option_index: 0,
    explanation:
      'En el suelo y el agua, el dióxido de azufre se oxida a sulfatos (`SO₄²⁻`), la forma que las plantas absorben.',
    common_error:
      'Atribuir la absorción vegetal al dióxido de azufre directamente, sin considerar el paso intermedio de oxidación a sulfato.',
    source_reference: 'Guía oficial, página 16, código 5.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cbg-004',
    topic_id: 'cn-5-3-4-sustancias-en-ciclos-biogeoquimicos',
    prompt:
      'El carbono fijado por la fotosíntesis regresa a la atmósfera como dióxido de carbono mediante la ___ de los seres vivos o la combustión.',
    options: ['respiración', 'fotosíntesis', 'polinización'],
    correct_option_index: 0,
    explanation:
      'La respiración de los seres vivos, junto con la combustión de materia orgánica, libera de vuelta a la atmósfera el dióxido de carbono que la fotosíntesis había fijado.',
    common_error:
      'Repetir «fotosíntesis» como la respuesta, confundiendo el proceso que fija el carbono con el que lo libera de vuelta.',
    source_reference: 'Guía oficial, página 16, código 5.3.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cbg-005',
    topic_id: 'cn-5-3-4-sustancias-en-ciclos-biogeoquimicos',
    prompt:
      'Relaciona cada sustancia con el ciclo biogeoquímico al que pertenece y su papel.\n\n1. Dióxido de carbono\n2. Sulfuro de hidrógeno\n3. Glucosa\n\na. Ciclo del carbono, producto de la fotosíntesis\nb. Ciclo del carbono, forma atmosférica\nc. Ciclo del azufre, liberado por descomposición',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El dióxido de carbono es la forma atmosférica del ciclo del carbono (b); el sulfuro de hidrógeno se libera en el ciclo del azufre por descomposición bacteriana (c); la glucosa es el producto de la fotosíntesis dentro del ciclo del carbono (a).',
    common_error:
      'Ubicar el sulfuro de hidrógeno en el ciclo del carbono por asociarlo genéricamente con la descomposición, sin notar que contiene azufre, no carbono.',
    source_reference: 'Guía oficial, página 16, código 5.3.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-pec-001',
    topic_id: 'cn-5-3-5-tipos-de-productividad-en-un-ecosistema',
    prompt:
      'Si la productividad primaria bruta de un ecosistema es 800 unidades de energía y los productores usan 200 unidades en su propia respiración, ¿cuál es la productividad primaria neta?',
    options: ['1,000 unidades', '600 unidades', '800 unidades'],
    correct_option_index: 1,
    explanation:
      'Fórmula: `PPN = PPB − energía usada en respiración`. Sustitución: `PPN = 800 − 200 = 600` unidades.',
    common_error:
      'Sumar en lugar de restar la energía de respiración (obteniendo 1,000), o repetir la productividad primaria bruta como si fuera la neta.',
    source_reference: 'Guía oficial, página 16, código 5.3.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-pec-002',
    topic_id: 'cn-5-3-5-tipos-de-productividad-en-un-ecosistema',
    prompt:
      '¿Qué tipo de productividad mide la energía total fijada por los productores, antes de descontar su propia respiración?',
    options: [
      'productividad primaria bruta',
      'productividad primaria neta',
      'productividad secundaria'
    ],
    correct_option_index: 0,
    explanation:
      'La productividad primaria bruta es la energía total que los productores fijan mediante fotosíntesis, sin descontar nada todavía.',
    common_error:
      'Confundir la productividad bruta con la neta, que sí descuenta la energía usada en la respiración del propio productor.',
    source_reference: 'Guía oficial, página 16, código 5.3.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-pec-003',
    topic_id: 'cn-5-3-5-tipos-de-productividad-en-un-ecosistema',
    prompt:
      'La productividad primaria bruta de un pastizal es 1,200 unidades de energía, y los productores consumen 450 unidades en su propia respiración. ¿Cuál es la productividad primaria neta?',
    options: ['750 unidades', '1,650 unidades', '450 unidades'],
    correct_option_index: 0,
    explanation:
      'Fórmula: `PPN = PPB − energía usada en respiración`. Sustitución: `PPN = 1,200 − 450 = 750` unidades.',
    common_error:
      'Sumar la energía de respiración a la productividad bruta (obteniendo 1,650) en lugar de restarla.',
    source_reference: 'Guía oficial, página 16, código 5.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-pec-004',
    topic_id: 'cn-5-3-5-tipos-de-productividad-en-un-ecosistema',
    prompt:
      'La productividad ___ describe la velocidad a la que los consumidores transforman la energía obtenida de su alimento en su propia biomasa.',
    options: ['secundaria', 'primaria bruta', 'primaria neta'],
    correct_option_index: 0,
    explanation:
      'La productividad secundaria describe la transformación de la energía consumida por los consumidores en su propia biomasa, a diferencia de la primaria, que corresponde a los productores.',
    common_error:
      'Confundir «secundaria» con «primaria neta», sin notar que la primaria neta describe a los productores, no a los consumidores.',
    source_reference: 'Guía oficial, página 16, código 5.3.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-pec-005',
    topic_id: 'cn-5-3-5-tipos-de-productividad-en-un-ecosistema',
    prompt:
      'Ordena los pasos para calcular la productividad primaria neta de un ecosistema a partir de datos de campo.\n\n1. Medir la energía total fijada por los productores mediante fotosíntesis (productividad primaria bruta)\n2. Medir la energía que los productores consumen en su propia respiración\n3. Restar la energía de respiración a la productividad primaria bruta\n4. Obtener la productividad primaria neta',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'Primero se mide la productividad primaria bruta (1), luego la energía de respiración (2), después se resta una de la otra (3), obteniendo así la productividad primaria neta (4).',
    common_error:
      'Restar la energía de respiración antes de haberla medido, invirtiendo el orden lógico de recolección de datos y cálculo.',
    source_reference: 'Guía oficial, página 16, código 5.3.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-sam-001',
    topic_id: 'cn-5-3-6-tipos-de-servicios-ambientales',
    prompt: '¿Qué tipo de servicio ambiental es el agua potable que se obtiene directamente de un río?',
    options: ['servicio de apoyo', 'servicio cultural', 'servicio de aprovisionamiento'],
    correct_option_index: 2,
    explanation:
      'El agua potable es un bien material que se obtiene directamente del ecosistema: un servicio de aprovisionamiento.',
    common_error:
      'Clasificar el agua potable como servicio de apoyo, un tipo que describe procesos que sostienen al ecosistema, no bienes de uso directo.',
    source_reference: 'Guía oficial, página 16, código 5.3.6.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-sam-002',
    topic_id: 'cn-5-3-6-tipos-de-servicios-ambientales',
    prompt:
      '¿Qué tipo de servicio ambiental es la polinización, un proceso que sostiene el funcionamiento del ecosistema?',
    options: ['servicio de apoyo', 'servicio de aprovisionamiento', 'servicio cultural'],
    correct_option_index: 0,
    explanation:
      'La polinización es un servicio de apoyo: un proceso que sostiene el funcionamiento del ecosistema y hace posibles otros servicios.',
    common_error:
      'Confundir la polinización con un servicio de aprovisionamiento, ya que no es un bien material de uso directo, sino un proceso ecológico de soporte.',
    source_reference: 'Guía oficial, página 16, código 5.3.6.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-sam-003',
    topic_id: 'cn-5-3-6-tipos-de-servicios-ambientales',
    prompt: '¿Qué tipo de servicio ambiental es el turismo de naturaleza en una reserva ecológica?',
    options: ['servicio cultural', 'servicio de aprovisionamiento', 'servicio de apoyo'],
    correct_option_index: 0,
    explanation:
      'El turismo de naturaleza es un beneficio no material relacionado con la recreación: un servicio cultural.',
    common_error:
      'Clasificar el turismo como servicio de aprovisionamiento por generar ingresos económicos, sin distinguir que el beneficio en sí (recreación) no es un bien material extraído del ecosistema.',
    source_reference: 'Guía oficial, página 16, código 5.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-sam-004',
    topic_id: 'cn-5-3-6-tipos-de-servicios-ambientales',
    prompt:
      'La formación de suelo fértil por la descomposición de materia orgánica es un servicio ambiental de ___.',
    options: ['apoyo', 'aprovisionamiento', 'cultural'],
    correct_option_index: 0,
    explanation:
      'La formación de suelo es un proceso que sostiene el funcionamiento del ecosistema: un servicio de apoyo.',
    common_error:
      'Confundir la formación de suelo con un servicio de aprovisionamiento, ya que no es un bien de uso directo, sino un proceso de soporte ecológico.',
    source_reference: 'Guía oficial, página 16, código 5.3.6.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-sam-005',
    topic_id: 'cn-5-3-6-tipos-de-servicios-ambientales',
    prompt:
      'Relaciona cada beneficio con el tipo de servicio ambiental que representa.\n\n1. Madera para construir muebles\n2. Ciclo de nutrientes en el suelo\n3. Valor espiritual de un bosque sagrado\n\na. Servicio de apoyo\nb. Servicio de aprovisionamiento\nc. Servicio cultural',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'La madera es un bien material de uso directo: servicio de aprovisionamiento (b); el ciclo de nutrientes sostiene al ecosistema: servicio de apoyo (a); el valor espiritual es un beneficio no material: servicio cultural (c).',
    common_error:
      'Clasificar el ciclo de nutrientes como servicio de aprovisionamiento por confundirlo con un recurso extraíble, en lugar de un proceso de soporte.',
    source_reference: 'Guía oficial, página 16, código 5.3.6.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-deq-001',
    topic_id: 'cn-5-3-7-consecuencias-del-desequilibrio-ecologico',
    prompt:
      '¿Qué consecuencia del desequilibrio ecológico describe la pérdida de vegetación y de la capacidad del suelo para sostener vida?',
    options: ['pérdida de biodiversidad', 'desertificación', 'proliferación de plagas'],
    correct_option_index: 1,
    explanation:
      'La desertificación describe la pérdida de vegetación y de la capacidad del suelo para sostener vida, típica de la deforestación o el sobrepastoreo.',
    common_error:
      'Confundir la desertificación con la pérdida de biodiversidad en general, sin notar que la desertificación describe específicamente el deterioro del suelo y la vegetación.',
    source_reference: 'Guía oficial, página 16, código 5.3.7.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-deq-002',
    topic_id: 'cn-5-3-7-consecuencias-del-desequilibrio-ecologico',
    prompt:
      '¿Qué consecuencia del desequilibrio ecológico ocurre cuando el desplazamiento de depredadores naturales permite que una especie se multiplique sin control?',
    options: [
      'proliferación de especies invasoras o plagas',
      'desertificación',
      'pérdida de biodiversidad'
    ],
    correct_option_index: 0,
    explanation:
      'Cuando una especie pierde a sus depredadores o competidores naturales, puede multiplicarse sin control: esto es la proliferación de especies invasoras o plagas.',
    common_error:
      'Confundir la proliferación de una especie con la pérdida de biodiversidad, cuando en realidad describe el efecto opuesto: el crecimiento descontrolado de una sola especie.',
    source_reference: 'Guía oficial, página 16, código 5.3.7.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-deq-003',
    topic_id: 'cn-5-3-7-consecuencias-del-desequilibrio-ecologico',
    prompt:
      'Un ecosistema pierde su depredador tope y la población de herbívoros crece sin control hasta agotar la vegetación disponible. ¿Qué consecuencia del desequilibrio ecológico describe esto?',
    options: [
      'interrupción de la red trófica',
      'formación de un nuevo bioma',
      'aumento de la productividad primaria neta'
    ],
    correct_option_index: 0,
    explanation:
      'La eliminación de un nivel trófico (el depredador tope) afecta a los organismos que dependen de él en la cadena, en este caso permitiendo el crecimiento descontrolado de los herbívoros: una interrupción de la red trófica.',
    common_error:
      'Pensar que el crecimiento de herbívoros aumenta la productividad primaria neta, sin notar que el agotamiento de la vegetación reduce, no aumenta, la energía disponible de los productores.',
    source_reference: 'Guía oficial, página 16, código 5.3.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-deq-004',
    topic_id: 'cn-5-3-7-consecuencias-del-desequilibrio-ecologico',
    prompt:
      'Cuando un cambio en un ecosistema provoca la desaparición o reducción de especies que no logran adaptarse, ocurre una ___.',
    options: ['pérdida de biodiversidad', 'productividad secundaria', 'fotosíntesis excesiva'],
    correct_option_index: 0,
    explanation:
      'La pérdida de biodiversidad es la desaparición o reducción de especies que no logran adaptarse a un cambio en el ecosistema.',
    common_error:
      'Confundir la pérdida de biodiversidad con la productividad secundaria, un concepto sin relación con la desaparición de especies.',
    source_reference: 'Guía oficial, página 16, código 5.3.7.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-deq-005',
    topic_id: 'cn-5-3-7-consecuencias-del-desequilibrio-ecologico',
    prompt:
      'Relaciona cada situación con la consecuencia de desequilibrio ecológico que representa.\n\n1. Deforestación que deja el suelo sin vegetación ni capacidad de sostener vida\n2. Una especie sin depredadores naturales se multiplica sin control\n3. La eliminación de un nivel trófico afecta a los organismos que dependen de él\n\na. Interrupción de la red trófica\nb. Desertificación\nc. Proliferación de especies invasoras o plagas',
    options: ['1b, 2c, 3a', '1a, 2b, 3c', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'La deforestación que deja el suelo sin vegetación es desertificación (b); una especie sin depredadores que se multiplica sin control es proliferación de plagas (c); la eliminación de un nivel trófico que afecta a otros organismos es interrupción de la red trófica (a).',
    common_error:
      'Intercambiar la desertificación con la interrupción de la red trófica, ambas relacionadas con la pérdida de vegetación, sin distinguir que la primera es sobre el suelo y la segunda sobre las relaciones alimentarias.',
    source_reference: 'Guía oficial, página 16, código 5.3.7.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mm-001',
    topic_id: 'cn-5-4-1-masa-molar-de-compuestos-quimicos',
    prompt: '¿Cuál es la masa molar del agua (`H₂O`), con H = 1 y O = 16?',
    options: ['16 g/mol', '18 g/mol', '20 g/mol'],
    correct_option_index: 1,
    explanation:
      'La fórmula tiene 2 átomos de hidrógeno y 1 de oxígeno: `(2 × 1) + (1 × 16) = 2 + 16 = 18 g/mol`.',
    common_error:
      'Contar la masa atómica del oxígeno una sola vez sin sumar la de los dos hidrógenos, obteniendo 16 g/mol en lugar de 18.',
    source_reference: 'Guía oficial, página 16, código 5.4.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-mm-002',
    topic_id: 'cn-5-4-1-masa-molar-de-compuestos-quimicos',
    prompt: '¿Cuál es la masa molar del dióxido de carbono (`CO₂`), con C = 12 y O = 16?',
    options: ['44 g/mol', '32 g/mol', '28 g/mol'],
    correct_option_index: 0,
    explanation:
      'La fórmula tiene 1 átomo de carbono y 2 de oxígeno: `12 + (2 × 16) = 12 + 32 = 44 g/mol`.',
    common_error:
      'Sumar solo las masas de los dos oxígenos sin incluir el carbono, obteniendo 32 g/mol en lugar de 44.',
    source_reference: 'Guía oficial, página 16, código 5.4.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mm-003',
    topic_id: 'cn-5-4-1-masa-molar-de-compuestos-quimicos',
    prompt: '¿Cuál es la masa molar del cloruro de sodio (`NaCl`), con Na = 23 y Cl = 35.5?',
    options: ['58.5 g/mol', '35.5 g/mol', '23 g/mol'],
    correct_option_index: 0,
    explanation:
      'La fórmula tiene 1 átomo de sodio y 1 de cloro: `23 + 35.5 = 58.5 g/mol`.',
    common_error:
      'Reportar solo la masa atómica de uno de los dos elementos (sodio o cloro) en lugar de sumar ambas.',
    source_reference: 'Guía oficial, página 16, código 5.4.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mm-004',
    topic_id: 'cn-5-4-1-masa-molar-de-compuestos-quimicos',
    prompt:
      'La masa molar de un compuesto se calcula sumando las masas atómicas de todos los átomos presentes en su ___.',
    options: ['fórmula química', 'estado de agregación', 'enlace químico'],
    correct_option_index: 0,
    explanation:
      'La fórmula química indica qué elementos y cuántos átomos de cada uno forman el compuesto; de ahí se toman las masas atómicas a sumar.',
    common_error:
      'Confundir la fórmula química con el estado de agregación del compuesto, un dato que no interviene en el cálculo de la masa molar.',
    source_reference: 'Guía oficial, página 16, código 5.4.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mm-005',
    topic_id: 'cn-5-4-1-masa-molar-de-compuestos-quimicos',
    prompt:
      'Ordena los pasos para calcular la masa molar del carbonato de calcio (`CaCO₃`), con Ca = 40, C = 12 y O = 16.\n\n1. Identificar los átomos y su cantidad en la fórmula: 1 Ca, 1 C, 3 O\n2. Multiplicar cada masa atómica por su cantidad de átomos: 40, 12, 48\n3. Sumar los resultados: 40 + 12 + 48\n4. Obtener la masa molar total: 100 g/mol',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'Primero se identifican los átomos y su cantidad (1), luego se multiplica cada masa atómica por esa cantidad (2), después se suman los resultados (3), obteniendo la masa molar total de 100 g/mol (4).',
    common_error:
      'Sumar las masas atómicas antes de multiplicarlas por la cantidad de átomos de cada elemento, ignorando que el oxígeno aparece tres veces en la fórmula.',
    source_reference: 'Guía oficial, página 16, código 5.4.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-trq-001',
    topic_id: 'cn-5-4-2-tipos-de-reacciones-quimicas',
    prompt:
      '¿Qué tipo de reacción química ocurre cuando dos o más sustancias se combinan para formar un compuesto (`A + B → AB`)?',
    options: ['descomposición', 'reducción', 'síntesis'],
    correct_option_index: 2,
    explanation:
      'Cuando dos o más sustancias se combinan para formar un compuesto, la reacción es de síntesis (combinación), como en `2 H₂ + O₂ → 2 H₂O`.',
    common_error:
      'Confundir la síntesis con la descomposición, que describe el proceso opuesto: un compuesto que se separa en sustancias más simples.',
    source_reference: 'Guía oficial, página 16, código 5.4.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-trq-002',
    topic_id: 'cn-5-4-2-tipos-de-reacciones-quimicas',
    prompt:
      '¿Qué tipo de reacción química ocurre cuando un compuesto se rompe en dos o más sustancias más simples (`AB → A + B`)?',
    options: ['descomposición', 'síntesis', 'reducción'],
    correct_option_index: 0,
    explanation:
      'Cuando un compuesto se rompe en sustancias más simples, la reacción es de descomposición, como en `CaCO₃ → CaO + CO₂`.',
    common_error:
      'Confundir la descomposición con la reducción, que describe la pérdida de oxígeno de un elemento, no la fragmentación de un compuesto en varias sustancias.',
    source_reference: 'Guía oficial, página 16, código 5.4.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-trq-003',
    topic_id: 'cn-5-4-2-tipos-de-reacciones-quimicas',
    prompt:
      'En la ecuación `Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂`, el hierro pierde el oxígeno que tenía combinado al formar hierro metálico. ¿Qué tipo de reacción experimenta el hierro?',
    options: ['reducción', 'síntesis', 'descomposición'],
    correct_option_index: 0,
    explanation:
      'La pérdida de oxígeno de un elemento en una reacción es una reducción: el hierro se reduce al pasar de `Fe₂O₃` a `Fe` metálico.',
    common_error:
      'Clasificar la reacción del hierro como descomposición por notar que el compuesto `Fe₂O₃` se transforma, sin distinguir que la reducción describe específicamente la pérdida de oxígeno de un elemento.',
    source_reference: 'Guía oficial, página 16, código 5.4.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-trq-004',
    topic_id: 'cn-5-4-2-tipos-de-reacciones-quimicas',
    prompt:
      'La ecuación `2 H₂O → 2 H₂ + O₂` (electrólisis del agua) es un ejemplo de una reacción de ___.',
    options: ['descomposición', 'síntesis', 'reducción'],
    correct_option_index: 0,
    explanation:
      'Un solo compuesto (`H₂O`) se separa en dos sustancias más simples (`H₂` y `O₂`): esto es una reacción de descomposición.',
    common_error:
      'Confundir esta ecuación con una síntesis por reconocer las mismas sustancias (`H₂` y `O₂`) de la reacción inversa, sin notar que aquí el compuesto se separa en lugar de formarse.',
    source_reference: 'Guía oficial, página 16, código 5.4.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-trq-005',
    topic_id: 'cn-5-4-2-tipos-de-reacciones-quimicas',
    prompt:
      'Relaciona cada ecuación con el tipo de reacción química que representa.\n\n1. `2 H₂ + O₂ → 2 H₂O`\n2. `CaCO₃ → CaO + CO₂`\n3. `Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂`\n\na. Descomposición\nb. Síntesis\nc. Reducción',
    options: ['1b, 2a, 3c', '1a, 2b, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'La primera ecuación combina dos sustancias en un compuesto: síntesis (b); la segunda separa un compuesto en dos sustancias: descomposición (a); la tercera reduce el hierro al quitarle el oxígeno: reducción (c).',
    common_error:
      'Intercambiar la síntesis con la descomposición, confundiendo cuál ecuación combina sustancias y cuál las separa.',
    source_reference: 'Guía oficial, página 16, código 5.4.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rnu-001',
    topic_id: 'cn-5-4-3-tipos-de-reacciones-nucleares',
    prompt:
      '¿Qué tipo de reacción nuclear ocurre cuando se divide un núcleo pesado en núcleos más ligeros, como en un reactor nuclear?',
    options: ['fusión', 'fisión', 'desintegración simple'],
    correct_option_index: 1,
    explanation:
      'La división de un núcleo pesado en núcleos más ligeros es la fisión nuclear, el proceso usado en los reactores nucleares.',
    common_error:
      'Confundir la fisión con la fusión, el proceso opuesto que combina núcleos ligeros en uno más pesado.',
    source_reference: 'Guía oficial, página 16, código 5.4.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-rnu-002',
    topic_id: 'cn-5-4-3-tipos-de-reacciones-nucleares',
    prompt:
      '¿Qué tipo de reacción nuclear ocurre en el interior del Sol, al combinar núcleos de hidrógeno para formar helio?',
    options: ['fusión', 'fisión', 'descomposición'],
    correct_option_index: 0,
    explanation:
      'La combinación de núcleos ligeros (hidrógeno) para formar un núcleo más pesado (helio) es la fusión nuclear.',
    common_error:
      'Confundir la fusión con la fisión, sin distinguir que la fisión divide núcleos pesados en lugar de combinar núcleos ligeros.',
    source_reference: 'Guía oficial, página 16, código 5.4.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rnu-003',
    topic_id: 'cn-5-4-3-tipos-de-reacciones-nucleares',
    prompt: '¿Qué elemento se usa comúnmente como combustible en la fisión nuclear de los reactores?',
    options: ['uranio-235', 'hidrógeno', 'helio'],
    correct_option_index: 0,
    explanation:
      'El uranio-235 es el combustible comúnmente usado en la fisión nuclear de los reactores, por la facilidad con la que su núcleo se divide.',
    common_error:
      'Confundir el uranio-235, usado en fisión, con el hidrógeno, el elemento típico de la fusión nuclear que ocurre en el Sol.',
    source_reference: 'Guía oficial, página 16, código 5.4.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rnu-004',
    topic_id: 'cn-5-4-3-tipos-de-reacciones-nucleares',
    prompt:
      'La combinación de dos núcleos ligeros para formar un núcleo más pesado, liberando energía, se llama ___ nuclear.',
    options: ['fusión', 'fisión', 'oxidación'],
    correct_option_index: 0,
    explanation:
      'La fusión nuclear es la combinación de dos núcleos ligeros para formar uno más pesado, liberando energía en el proceso.',
    common_error:
      'Confundir «fusión» con «fisión» por su ortografía similar, invirtiendo la definición de ambos procesos.',
    source_reference: 'Guía oficial, página 16, código 5.4.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rnu-005',
    topic_id: 'cn-5-4-3-tipos-de-reacciones-nucleares',
    prompt:
      'Relaciona cada ejemplo con el tipo de proceso que representa.\n\n1. La combinación de núcleos de hidrógeno en el interior del Sol\n2. La división del núcleo de uranio-235 en un reactor nuclear\n3. La combinación de un ácido y una base en una reacción de neutralización\n\na. Fusión nuclear\nb. Fisión nuclear\nc. No es una reacción nuclear',
    options: ['1a, 2b, 3c', '1b, 2a, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'La combinación de núcleos de hidrógeno en el Sol es fusión nuclear (a); la división del uranio-235 es fisión nuclear (b); la neutralización ácido-base es una reacción química ordinaria, no nuclear (c).',
    common_error:
      'Clasificar la neutralización ácido-base como una reacción nuclear por tratarse de una reacción química, sin distinguir que las reacciones nucleares ocurren específicamente en el núcleo de los átomos.',
    source_reference: 'Guía oficial, página 16, código 5.4.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-choq-001',
    topic_id: 'cn-5-5-1-tipos-de-choques',
    prompt:
      'En un choque, la energía cinética total del sistema se conserva por completo. ¿Qué tipo de choque es?',
    options: ['inelástico', 'elástico', 'perfectamente inelástico'],
    correct_option_index: 1,
    explanation:
      'Un choque elástico conserva tanto el momento lineal como la energía cinética total del sistema, sin transformarla en calor, sonido o deformación.',
    common_error:
      'Confundir el choque elástico con el inelástico, que sí conserva el momento lineal pero no la energía cinética total.',
    source_reference: 'Guía oficial, página 16, código 5.5.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-choq-002',
    topic_id: 'cn-5-5-1-tipos-de-choques',
    prompt:
      'En un choque inelástico, ¿qué cantidad física se conserva siempre, incluso si la energía cinética no se conserva?',
    options: [
      'el momento lineal',
      'la energía térmica',
      'la velocidad de cada objeto por separado'
    ],
    correct_option_index: 0,
    explanation:
      'El momento lineal del sistema se conserva en todo tipo de choque, sea elástico o inelástico; lo que puede no conservarse es la energía cinética total.',
    common_error:
      'Pensar que, si la energía cinética no se conserva, tampoco se conserva el momento lineal, sin distinguir que son dos cantidades físicas independientes.',
    source_reference: 'Guía oficial, página 16, código 5.5.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-choq-003',
    topic_id: 'cn-5-5-1-tipos-de-choques',
    prompt:
      'Dos autos chocan y quedan enganchados, moviéndose juntos a la misma velocidad después del impacto. ¿Qué tipo de choque es?',
    options: [
      'perfectamente inelástico',
      'elástico',
      'ninguno de los dos, porque no se conserva el momento lineal'
    ],
    correct_option_index: 0,
    explanation:
      'Cuando los objetos quedan unidos después del choque y se mueven con la misma velocidad, se trata de un choque perfectamente inelástico.',
    common_error:
      'Pensar que, como los autos se abollan y pierden energía cinética, no se conserva el momento lineal, sin notar que el momento lineal sí se conserva en todo choque.',
    source_reference: 'Guía oficial, página 16, código 5.5.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-choq-004',
    topic_id: 'cn-5-5-1-tipos-de-choques',
    prompt:
      'En un choque ___, parte de la energía cinética se transforma en calor, sonido o deformación.',
    options: ['inelástico', 'elástico', 'sin fricción'],
    correct_option_index: 0,
    explanation:
      'En un choque inelástico, parte de la energía cinética se transforma en otras formas de energía, como calor, sonido o deformación del material.',
    common_error:
      'Confundir «inelástico» con «elástico», invirtiendo cuál de los dos tipos de choque conserva la energía cinética total.',
    source_reference: 'Guía oficial, página 16, código 5.5.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-choq-005',
    topic_id: 'cn-5-5-1-tipos-de-choques',
    prompt:
      'Relaciona cada situación con el tipo de choque que representa.\n\n1. Dos bolas de billar que rebotan sin perder energía cinética\n2. Una bola de plastilina que se pega a una pared y se detiene con ella\n3. Dos autos que se abollan en un choque y siguen moviéndose por separado, a menor velocidad\n\na. Elástico\nb. Inelástico\nc. Perfectamente inelástico',
    options: ['1a, 2c, 3b', '1b, 2a, 3c', '1c, 2b, 3a'],
    correct_option_index: 0,
    explanation:
      'Las bolas de billar que rebotan sin perder energía cinética representan un choque elástico (a); la plastilina que se pega y se detiene junto con la pared es un choque perfectamente inelástico (c); los autos que se abollan y siguen moviéndose por separado representan un choque inelástico (b).',
    common_error:
      'Confundir el choque perfectamente inelástico con el inelástico simple, sin notar que en el primero los objetos quedan unidos, mientras que en el segundo continúan moviéndose por separado.',
    source_reference: 'Guía oficial, página 16, código 5.5.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mli-001',
    topic_id: 'cn-5-5-2-momento-lineal',
    prompt: 'Calcula el momento lineal de un objeto de masa 5 kg que se mueve a una rapidez de 4 m/s.',
    options: ['9 kg·m/s', '1.25 kg·m/s', '20 kg·m/s'],
    correct_option_index: 2,
    explanation: 'Fórmula: `p = m × v`. Sustitución: `p = 5 × 4 = 20 kg·m/s`.',
    common_error:
      'Sumar la masa y la rapidez en lugar de multiplicarlas (obteniendo 9), o dividirlas (obteniendo 1.25), en lugar de aplicar la fórmula correcta.',
    source_reference: 'Guía oficial, página 16, código 5.5.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-mli-002',
    topic_id: 'cn-5-5-2-momento-lineal',
    prompt:
      'La fórmula del momento lineal es `p = m × v`. Si un objeto tiene una masa de 3 kg y un momento lineal de 15 kg·m/s, ¿cuál es su rapidez?',
    options: ['5 m/s', '45 m/s', '12 m/s'],
    correct_option_index: 0,
    explanation: 'Despejando: `v = p / m = 15 / 3 = 5 m/s`.',
    common_error:
      'Multiplicar en lugar de dividir para despejar la rapidez, obteniendo 45 m/s en lugar de 5 m/s.',
    source_reference: 'Guía oficial, página 16, código 5.5.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mli-003',
    topic_id: 'cn-5-5-2-momento-lineal',
    prompt:
      'Un carrito de 2 kg se mueve a 6 m/s y choca con otro carrito de 4 kg en reposo, quedando unidos después del choque. Si el momento lineal se conserva, ¿cuál es el momento lineal del sistema después del choque?',
    options: ['12 kg·m/s', '24 kg·m/s', '6 kg·m/s'],
    correct_option_index: 0,
    explanation:
      'El momento lineal antes del choque es `(2 × 6) + (4 × 0) = 12 kg·m/s`. Por la conservación del momento lineal, después del choque sigue siendo `12 kg·m/s`.',
    common_error:
      'Recalcular el momento lineal usando la masa combinada de ambos carritos multiplicada por la rapidez inicial del primero, en lugar de aplicar directamente la conservación del momento lineal total.',
    source_reference: 'Guía oficial, página 16, código 5.5.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mli-004',
    topic_id: 'cn-5-5-2-momento-lineal',
    prompt:
      'El momento lineal total de un sistema aislado antes de un choque es ___ al momento lineal total después del choque.',
    options: ['igual', 'mayor', 'menor'],
    correct_option_index: 0,
    explanation:
      'La ley de conservación del momento lineal establece que el momento lineal total de un sistema aislado antes de un choque es igual al momento lineal total después del choque.',
    common_error:
      'Pensar que el momento lineal disminuye en un choque inelástico porque la energía cinética disminuye, sin distinguir que son dos cantidades físicas distintas.',
    source_reference: 'Guía oficial, página 16, código 5.5.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-mli-005',
    topic_id: 'cn-5-5-2-momento-lineal',
    prompt:
      'Ordena los pasos para calcular la rapidez de un carrito de 2 kg cuyo momento lineal es 16 kg·m/s.\n\n1. Identificar la fórmula `p = m × v`\n2. Despejar la rapidez: `v = p / m`\n3. Sustituir los valores: `v = 16 / 2`\n4. Resolver la división para obtener `v = 8 m/s`',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'Primero se identifica la fórmula (1), luego se despeja la rapidez (2), después se sustituyen los valores (3), y finalmente se resuelve la división para obtener `v = 8 m/s` (4).',
    common_error:
      'Sustituir los valores antes de despejar la rapidez, intentando dividir `m` entre `p` en lugar de `p` entre `m`.',
    source_reference: 'Guía oficial, página 16, código 5.5.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-oem-001',
    topic_id: 'cn-5-5-3-ondas-electromagneticas-en-dispositivos-cotidianos',
    prompt: '¿Qué tipo de onda electromagnética utiliza un horno de microondas para calentar los alimentos?',
    options: ['ondas de radio', 'microondas', 'rayos X'],
    correct_option_index: 1,
    explanation:
      'El horno de microondas utiliza microondas, una región del espectro electromagnético capaz de agitar las moléculas de agua de los alimentos y generar calor.',
    common_error:
      'Confundir las microondas con las ondas de radio, ambas usadas en comunicación inalámbrica, sin distinguir que el horno de microondas usa específicamente microondas.',
    source_reference: 'Guía oficial, página 16, código 5.5.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-oem-002',
    topic_id: 'cn-5-5-3-ondas-electromagneticas-en-dispositivos-cotidianos',
    prompt: '¿Qué tipo de onda electromagnética utiliza un control remoto para comunicarse con un televisor?',
    options: ['infrarrojo', 'rayos ultravioleta', 'rayos gamma'],
    correct_option_index: 0,
    explanation:
      'Los controles remotos utilizan luz infrarroja, invisible al ojo humano, para enviar señales a corta distancia hacia el televisor u otro aparato.',
    common_error:
      'Confundir el infrarrojo con el ultravioleta por asociar ambos con «luz invisible», sin distinguir que son regiones distintas del espectro electromagnético.',
    source_reference: 'Guía oficial, página 16, código 5.5.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-oem-003',
    topic_id: 'cn-5-5-3-ondas-electromagneticas-en-dispositivos-cotidianos',
    prompt:
      '¿Qué tipo de onda electromagnética se utiliza en una radiografía médica para obtener imágenes del interior del cuerpo?',
    options: ['rayos X', 'microondas', 'ondas de radio'],
    correct_option_index: 0,
    explanation:
      'Las radiografías médicas utilizan rayos X, capaces de atravesar los tejidos blandos del cuerpo y generar una imagen de estructuras más densas, como los huesos.',
    common_error:
      'Confundir los rayos X con las microondas por asociar ambos con «radiación», sin distinguir que los rayos X son la región del espectro usada específicamente en imagenología médica.',
    source_reference: 'Guía oficial, página 16, código 5.5.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-oem-004',
    topic_id: 'cn-5-5-3-ondas-electromagneticas-en-dispositivos-cotidianos',
    prompt: 'Un radio de automóvil recibe señales transmitidas mediante ___.',
    options: ['ondas de radio', 'rayos X', 'luz ultravioleta'],
    correct_option_index: 0,
    explanation:
      'Los radios de automóvil reciben señales de audio transmitidas mediante ondas de radio, la región del espectro electromagnético usada en radiodifusión.',
    common_error:
      'Confundir las ondas de radio con los rayos X, una región del espectro sin relación con la transmisión de audio.',
    source_reference: 'Guía oficial, página 16, código 5.5.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-oem-005',
    topic_id: 'cn-5-5-3-ondas-electromagneticas-en-dispositivos-cotidianos',
    prompt:
      'Relaciona cada dispositivo cotidiano con el tipo de onda electromagnética que utiliza.\n\n1. Horno de microondas\n2. Control remoto\n3. Radiografía médica\n\na. Rayos X\nb. Infrarrojo\nc. Microondas',
    options: ['1c, 2b, 3a', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'El horno de microondas utiliza microondas (c); el control remoto utiliza infrarrojo (b); la radiografía médica utiliza rayos X (a).',
    common_error:
      'Intercambiar el infrarrojo con las microondas, asignando el control remoto a las microondas en lugar del horno.',
    source_reference: 'Guía oficial, página 16, código 5.5.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cli-001',
    topic_id: 'cn-5-5-4-caida-libre',
    prompt:
      'Calcula la velocidad de un objeto en caída libre después de 3 segundos, partiendo del reposo y usando `g = 9.8 m/s²`.',
    options: ['9.8 m/s', '19.6 m/s', '29.4 m/s'],
    correct_option_index: 2,
    explanation: 'Fórmula: `v = g × t`. Sustitución: `v = 9.8 × 3 = 29.4 m/s`.',
    common_error:
      'Reportar el valor de `g` sin multiplicarlo por el tiempo (obteniendo 9.8 m/s), o multiplicarlo solo por 2 segundos en lugar de 3 (obteniendo 19.6 m/s).',
    source_reference: 'Guía oficial, página 16, código 5.5.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-cli-002',
    topic_id: 'cn-5-5-4-caida-libre',
    prompt:
      '¿Cuál es la fórmula para calcular la velocidad de un objeto en caída libre después de un tiempo `t`, partiendo del reposo?',
    options: ['v = g × t', 'v = g / t', 'v = g + t'],
    correct_option_index: 0,
    explanation:
      'La velocidad de un objeto en caída libre, partiendo del reposo, se calcula multiplicando la aceleración de la gravedad por el tiempo transcurrido: `v = g × t`.',
    common_error:
      'Confundir la multiplicación con la división al recordar la fórmula, invirtiendo la relación entre `g` y `t`.',
    source_reference: 'Guía oficial, página 16, código 5.5.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cli-003',
    topic_id: 'cn-5-5-4-caida-libre',
    prompt:
      'Calcula la distancia que cae un objeto en caída libre después de 2 segundos, partiendo del reposo y usando `h = (1/2) × g × t²` con `g = 9.8 m/s²`.',
    options: ['19.6 m', '9.8 m', '39.2 m'],
    correct_option_index: 0,
    explanation:
      'Fórmula: `h = (1/2) × g × t²`. Sustitución: `h = (1/2) × 9.8 × 2² = (1/2) × 9.8 × 4 = 19.6 m`.',
    common_error:
      'Olvidar elevar el tiempo al cuadrado antes de multiplicar, usando `t = 2` directamente y obteniendo 9.8 m en lugar de 19.6 m.',
    source_reference: 'Guía oficial, página 16, código 5.5.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cli-004',
    topic_id: 'cn-5-5-4-caida-libre',
    prompt:
      'En caída libre, partiendo del reposo, la distancia recorrida se calcula con la fórmula `h = ___`.',
    options: ['(1/2) × g × t²', 'g × t', 'g / t²'],
    correct_option_index: 0,
    explanation:
      'La distancia recorrida en caída libre, partiendo del reposo, se calcula con `h = (1/2) × g × t²`, donde el tiempo se eleva al cuadrado.',
    common_error:
      'Confundir la fórmula de la distancia con la de la velocidad (`v = g × t`), que no eleva el tiempo al cuadrado ni incluye el factor `1/2`.',
    source_reference: 'Guía oficial, página 16, código 5.5.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cli-005',
    topic_id: 'cn-5-5-4-caida-libre',
    prompt:
      'Ordena los pasos para calcular la distancia que cae un objeto en caída libre durante 4 segundos, con `g = 9.8 m/s²`.\n\n1. Identificar la fórmula `h = (1/2) × g × t²`\n2. Elevar el tiempo al cuadrado: `4² = 16`\n3. Multiplicar `g` por el tiempo al cuadrado: `9.8 × 16 = 156.8`\n4. Multiplicar por 1/2 para obtener `h = 78.4 m`',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'Primero se identifica la fórmula (1), luego se eleva el tiempo al cuadrado (2), después se multiplica por `g` (3), y finalmente se multiplica por 1/2 para obtener `h = 78.4 m` (4).',
    common_error:
      'Multiplicar por 1/2 antes de tener listo el producto de `g` por el tiempo al cuadrado, alterando el orden de las operaciones.',
    source_reference: 'Guía oficial, página 16, código 5.5.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-org-001',
    topic_id: 'cn-5-6-1-organelos-celulares',
    prompt:
      '¿Qué organelo es responsable de la fotosíntesis y está presente únicamente en células vegetales, no en células animales?',
    options: ['mitocondria', 'cloroplasto', 'núcleo'],
    correct_option_index: 1,
    explanation:
      'El cloroplasto realiza la fotosíntesis y está presente únicamente en células vegetales (y algas), no en células animales.',
    common_error:
      'Confundir el cloroplasto con la mitocondria, ambos organelos productores de energía, sin distinguir que la mitocondria realiza la respiración celular y está presente en toda célula eucariota.',
    source_reference: 'Guía oficial, página 16, código 5.6.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-org-002',
    topic_id: 'cn-5-6-1-organelos-celulares',
    prompt: '¿Qué organelo contiene el material genético de la célula y está ausente en células procariotas?',
    options: ['núcleo', 'ribosoma', 'pared celular'],
    correct_option_index: 0,
    explanation:
      'El núcleo contiene el material genético (ADN) de la célula; está presente en células eucariotas y ausente en procariotas, cuyo material genético está disperso en el citoplasma.',
    common_error:
      'Confundir el núcleo con el ribosoma, un organelo presente tanto en eucariotas como en procariotas, sin relación directa con el almacenamiento del material genético.',
    source_reference: 'Guía oficial, página 16, código 5.6.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-org-003',
    topic_id: 'cn-5-6-1-organelos-celulares',
    prompt:
      '¿Qué estructura está presente tanto en células vegetales como en células procariotas (bacterias), aunque compuesta de materiales distintos en cada caso?',
    options: ['la pared celular', 'el cloroplasto', 'el núcleo'],
    correct_option_index: 0,
    explanation:
      'La pared celular está presente en células vegetales (compuesta de celulosa) y en procariotas (compuesta de peptidoglicano), dando rigidez y protección en ambos casos.',
    common_error:
      'Atribuir esta característica compartida al cloroplasto, un organelo exclusivo de las células vegetales, ausente en toda célula procariota.',
    source_reference: 'Guía oficial, página 16, código 5.6.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-org-004',
    topic_id: 'cn-5-6-1-organelos-celulares',
    prompt:
      'La mitocondria es el organelo responsable de llevar a cabo la ___, el proceso que produce la mayor parte de la energía (ATP) de la célula.',
    options: ['respiración celular', 'fotosíntesis', 'división celular'],
    correct_option_index: 0,
    explanation:
      'La mitocondria realiza la respiración celular, el proceso que produce la mayor parte del ATP de la célula.',
    common_error:
      'Confundir la respiración celular con la fotosíntesis, un proceso distinto que ocurre en el cloroplasto, no en la mitocondria.',
    source_reference: 'Guía oficial, página 16, código 5.6.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-org-005',
    topic_id: 'cn-5-6-1-organelos-celulares',
    prompt:
      'Relaciona cada organelo con la característica que lo distingue.\n\n1. Cloroplasto\n2. Mitocondria\n3. Pared celular\n\na. Realiza la respiración celular y produce ATP\nb. Da rigidez y protección; presente en vegetales y procariotas, ausente en animales\nc. Realiza la fotosíntesis; presente solo en células vegetales',
    options: ['1c, 2a, 3b', '1a, 2c, 3b', '1b, 2a, 3c'],
    correct_option_index: 0,
    explanation:
      'El cloroplasto realiza la fotosíntesis (c); la mitocondria realiza la respiración celular (a); la pared celular da rigidez y protección, presente en vegetales y procariotas (b).',
    common_error:
      'Intercambiar las funciones del cloroplasto y la mitocondria, ambos organelos productores de energía asociados a procesos metabólicos distintos.',
    source_reference: 'Guía oficial, página 16, código 5.6.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-nob-001',
    topic_id: 'cn-5-6-2-niveles-de-organizacion-biologica',
    prompt: '¿Cuál es el nivel de organización biológica inmediatamente superior a la célula?',
    options: ['órgano', 'sistema de órganos', 'tejido'],
    correct_option_index: 2,
    explanation:
      'El tejido, un grupo de células similares que realizan una función en conjunto, es el nivel de organización inmediatamente superior a la célula.',
    common_error:
      'Saltar directamente al órgano, sin considerar que el tejido es el nivel intermedio entre la célula y el órgano.',
    source_reference: 'Guía oficial, página 16, código 5.6.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-nob-002',
    topic_id: 'cn-5-6-2-niveles-de-organizacion-biologica',
    prompt: 'Un grupo de individuos de la misma especie que habitan la misma área se llama ___.',
    options: ['población', 'comunidad', 'ecosistema'],
    correct_option_index: 0,
    explanation:
      'Una población es un grupo de individuos de la misma especie que habitan la misma área geográfica.',
    common_error:
      'Confundir la población con la comunidad, que incluye poblaciones de especies distintas interactuando entre sí, no una sola especie.',
    source_reference: 'Guía oficial, página 16, código 5.6.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-nob-003',
    topic_id: 'cn-5-6-2-niveles-de-organizacion-biologica',
    prompt:
      '¿Qué nivel de organización biológica incluye a todas las poblaciones de diferentes especies que interactúan en una misma área?',
    options: ['comunidad', 'ecosistema', 'bioma'],
    correct_option_index: 0,
    explanation:
      'Una comunidad incluye todas las poblaciones de diferentes especies que interactúan en una misma área.',
    common_error:
      'Confundir la comunidad con el ecosistema, que además de las poblaciones incluye los factores no vivos (agua, suelo, clima) del entorno.',
    source_reference: 'Guía oficial, página 16, código 5.6.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-nob-004',
    topic_id: 'cn-5-6-2-niveles-de-organizacion-biologica',
    prompt: 'Un conjunto de tejidos que trabajan juntos para realizar una función específica forma un ___.',
    options: ['órgano', 'sistema de órganos', 'organismo'],
    correct_option_index: 0,
    explanation:
      'Un órgano es un conjunto de tejidos que trabajan juntos para realizar una función específica, como el corazón o el estómago.',
    common_error:
      'Confundir el órgano con el sistema de órganos, un nivel más amplio formado por varios órganos que colaboran en una función conjunta.',
    source_reference: 'Guía oficial, página 16, código 5.6.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-nob-005',
    topic_id: 'cn-5-6-2-niveles-de-organizacion-biologica',
    prompt:
      'Ordena, de menor a mayor complejidad, los siguientes niveles de organización biológica.\n\n1. Célula\n2. Tejido\n3. Órgano\n4. Organismo',
    options: ['1, 2, 3, 4', '4, 3, 2, 1', '2, 1, 3, 4'],
    correct_option_index: 0,
    explanation:
      'De menor a mayor complejidad, el orden es célula (1), tejido (2), órgano (3) y organismo (4).',
    common_error:
      'Ordenar de mayor a menor complejidad en lugar de menor a mayor, invirtiendo la secuencia completa.',
    source_reference: 'Guía oficial, página 16, código 5.6.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rec-001',
    topic_id: 'cn-5-6-3-etapas-de-la-respiracion-celular',
    prompt: '¿En qué parte de la célula ocurre la glucólisis, la primera etapa de la respiración celular?',
    options: ['la mitocondria', 'el citoplasma', 'el núcleo'],
    correct_option_index: 1,
    explanation:
      'La glucólisis ocurre en el citoplasma de la célula, antes de que el piruvato producido entre a la mitocondria para las etapas siguientes.',
    common_error:
      'Ubicar la glucólisis dentro de la mitocondria, confundiéndola con las etapas posteriores (formación de acetil-CoA, ciclo de Krebs y cadena de transporte de electrones), que sí ocurren allí.',
    source_reference: 'Guía oficial, página 16, código 5.6.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-rec-002',
    topic_id: 'cn-5-6-3-etapas-de-la-respiracion-celular',
    prompt: '¿En qué etapa de la respiración celular se produce la mayor parte del ATP total?',
    options: [
      'la cadena de transporte de electrones',
      'la glucólisis',
      'el paso de piruvato a acetil-CoA'
    ],
    correct_option_index: 0,
    explanation:
      'La cadena de transporte de electrones, donde el NADH y el FADH₂ donan sus electrones y el oxígeno actúa como aceptor final, produce la mayor parte del ATP total de la respiración celular.',
    common_error:
      'Atribuir la mayor producción de ATP a la glucólisis, que en realidad solo produce una pequeña cantidad de ATP en comparación con la cadena de transporte de electrones.',
    source_reference: 'Guía oficial, página 16, código 5.6.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rec-003',
    topic_id: 'cn-5-6-3-etapas-de-la-respiracion-celular',
    prompt:
      'Antes de entrar al ciclo de Krebs, cada molécula de piruvato se transforma en un compuesto de dos carbonos, liberando dióxido de carbono en el proceso. ¿Qué compuesto se forma?',
    options: ['acetil-CoA', 'glucosa', 'ATP'],
    correct_option_index: 0,
    explanation:
      'En el paso de transición previo al ciclo de Krebs, cada piruvato pierde un carbono como `CO₂` y se transforma en acetil-CoA, un compuesto de dos carbonos.',
    common_error:
      'Confundir esta transformación con la glucólisis, donde la glucosa se rompe en piruvato sin liberar dióxido de carbono, a diferencia de este paso de transición.',
    source_reference: 'Guía oficial, página 16, código 5.6.3; calibración de profundidad: página 36.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rec-004',
    topic_id: 'cn-5-6-3-etapas-de-la-respiracion-celular',
    prompt:
      'En el ciclo de Krebs, el acetil-CoA se oxida completamente, liberando dióxido de carbono y produciendo NADH, FADH₂ y ___.',
    options: ['ATP', 'glucosa', 'oxígeno'],
    correct_option_index: 0,
    explanation:
      'El ciclo de Krebs produce NADH, FADH₂ y ATP (en forma de GTP), además de liberar dióxido de carbono al oxidar completamente el acetil-CoA.',
    common_error:
      'Confundir el ATP producido en el ciclo de Krebs con la glucosa, una sustancia que ya fue consumida en etapas anteriores de la respiración celular.',
    source_reference: 'Guía oficial, página 16, código 5.6.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rec-005',
    topic_id: 'cn-5-6-3-etapas-de-la-respiracion-celular',
    prompt:
      'Ordena las etapas de la respiración celular, desde la primera hasta la última.\n\n1. Glucólisis\n2. Formación de acetil-CoA a partir del piruvato\n3. Ciclo de Krebs\n4. Cadena de transporte de electrones',
    options: ['1, 2, 3, 4', '2, 1, 3, 4', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'La secuencia correcta es glucólisis (1), formación de acetil-CoA (2), ciclo de Krebs (3) y cadena de transporte de electrones (4).',
    common_error:
      'Colocar el ciclo de Krebs antes de la formación de acetil-CoA, sin notar que el acetil-CoA es el sustrato que entra al ciclo de Krebs.',
    source_reference: 'Guía oficial, página 16, código 5.6.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rsa-001',
    topic_id: 'cn-5-7-1-reproduccion-sexual-y-asexual',
    prompt:
      '¿Cuál de las siguientes opciones describe una característica de la reproducción sexual, a diferencia de la asexual?',
    options: [
      'produce descendencia genéticamente idéntica al progenitor',
      'combina el material genético de dos progenitores mediante gametos',
      'ocurre siempre por mitosis, sin fusión de células'
    ],
    correct_option_index: 1,
    explanation:
      'La reproducción sexual combina el material genético de dos progenitores a través de gametos formados por meiosis, produciendo descendencia genéticamente variable.',
    common_error:
      'Atribuir la combinación de material genético de dos progenitores a la reproducción asexual, que en realidad involucra un solo progenitor y produce clones.',
    source_reference: 'Guía oficial, página 17, código 5.7.1.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-rsa-002',
    topic_id: 'cn-5-7-1-reproduccion-sexual-y-asexual',
    prompt:
      'Un organismo hace crecer un pequeño bulto en su cuerpo que después se separa como un nuevo individuo genéticamente idéntico. ¿Qué tipo de reproducción asexual describe esto?',
    options: ['gemación', 'fragmentación', 'esporulación'],
    correct_option_index: 0,
    explanation:
      'La gemación es el mecanismo de reproducción asexual en el que crece una yema o brote en el organismo, la cual se separa eventualmente como un nuevo individuo idéntico al original.',
    common_error:
      'Confundir la gemación con la fragmentación, donde un fragmento ya existente del organismo se separa, en lugar de crecer una yema nueva.',
    source_reference: 'Guía oficial, página 17, código 5.7.1.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rsa-003',
    topic_id: 'cn-5-7-1-reproduccion-sexual-y-asexual',
    prompt:
      'Una bacteria se divide en dos células hijas de tamaño y contenido genético idénticos entre sí y a la célula original. ¿Qué tipo de reproducción asexual es?',
    options: ['fisión binaria', 'reproducción vegetativa', 'fragmentación'],
    correct_option_index: 0,
    explanation:
      'La fisión binaria es el mecanismo típico de bacterias, en el que el organismo se divide en dos partes iguales, genéticamente idénticas entre sí y al organismo original.',
    common_error:
      'Confundir la fisión binaria con la reproducción vegetativa, que ocurre en plantas a partir de estructuras como estolones, tubérculos o bulbos, no por división directa de una célula.',
    source_reference: 'Guía oficial, página 17, código 5.7.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rsa-004',
    topic_id: 'cn-5-7-1-reproduccion-sexual-y-asexual',
    prompt:
      'Relaciona cada mecanismo de reproducción asexual con su ejemplo.\n\n1. Fragmentación\n2. Esporulación\n3. Reproducción vegetativa\n\na. Un hongo produce estructuras resistentes que germinan en nuevos individuos.\nb. Una planta genera nuevos individuos a partir de tubérculos.\nc. Una estrella de mar regenera un individuo completo a partir de un brazo separado.',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'La fragmentación corresponde a la estrella de mar que regenera un individuo a partir de un brazo (1c); la esporulación, al hongo que produce esporas (2a); la reproducción vegetativa, a la planta que se reproduce por tubérculos (3b).',
    common_error:
      'Confundir la esporulación con la reproducción vegetativa, asumiendo que ambas ocurren únicamente en plantas, cuando la esporulación es típica de hongos.',
    source_reference: 'Guía oficial, página 17, código 5.7.1.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-rsa-005',
    topic_id: 'cn-5-7-1-reproduccion-sexual-y-asexual',
    prompt:
      'La reproducción sexual requiere gametos formados por ___, mientras que la reproducción asexual se basa en ___.',
    options: [
      'meiosis - mitosis',
      'mitosis - meiosis',
      'fisión binaria - esporulación'
    ],
    correct_option_index: 0,
    explanation:
      'Los gametos de la reproducción sexual se forman por meiosis, mientras que la reproducción asexual se basa en la mitosis, sin fusión de células.',
    common_error:
      'Invertir los procesos, asumiendo que la reproducción sexual se basa en mitosis y la asexual en meiosis.',
    source_reference: 'Guía oficial, página 17, código 5.7.1.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-toc-001',
    topic_id: 'cn-5-7-2-tipos-de-cromosomas',
    prompt:
      '¿Cómo se llama el cromosoma cuyo centrómero está ubicado exactamente en el centro, con dos brazos de longitud igual?',
    options: ['acrocéntrico', 'submetacéntrico', 'metacéntrico'],
    correct_option_index: 2,
    explanation:
      'El cromosoma metacéntrico tiene el centrómero en el centro, con dos brazos de longitud igual o casi igual.',
    common_error:
      'Confundir el metacéntrico con el submetacéntrico, donde el centrómero está desplazado del centro y los brazos son de longitud desigual, aunque ambos visibles.',
    source_reference: 'Guía oficial, página 17, código 5.7.2.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-toc-002',
    topic_id: 'cn-5-7-2-tipos-de-cromosomas',
    prompt: '¿Qué tipo de cromosoma tiene el centrómero en el extremo mismo, sin un brazo corto visible?',
    options: ['telocéntrico', 'metacéntrico', 'submetacéntrico'],
    correct_option_index: 0,
    explanation:
      'El cromosoma telocéntrico tiene el centrómero en el extremo, por lo que en la práctica tiene un solo brazo visible.',
    common_error:
      'Confundir el telocéntrico con el acrocéntrico, que sí tiene un brazo corto, aunque muy pequeño, a diferencia del telocéntrico, que no tiene brazo corto visible.',
    source_reference: 'Guía oficial, página 17, código 5.7.2.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-toc-003',
    topic_id: 'cn-5-7-2-tipos-de-cromosomas',
    prompt: '¿Cómo se llaman los cromosomas que no determinan el sexo del organismo?',
    options: ['autosomas', 'cromosomas sexuales', 'cromosomas homólogos'],
    correct_option_index: 0,
    explanation:
      'Los autosomas son los cromosomas que no determinan el sexo del organismo; en el ser humano son 44 de los 46 cromosomas.',
    common_error:
      'Confundir los autosomas con los cromosomas homólogos, un concepto distinto que se refiere a los pares de cromosomas equivalentes (uno de cada progenitor), sin relación directa con la función de determinar el sexo.',
    source_reference: 'Guía oficial, página 17, código 5.7.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-toc-004',
    topic_id: 'cn-5-7-2-tipos-de-cromosomas',
    prompt:
      'Relaciona cada tipo de cromosoma con la descripción de sus brazos.\n\n1. Acrocéntrico\n2. Submetacéntrico\n3. Metacéntrico\n\na. Un brazo muy corto y otro muy largo.\nb. Brazos desiguales, pero ambos visibles.\nc. Brazos de longitud igual.',
    options: ['1a, 2b, 3c', '1b, 2c, 3a', '1c, 2a, 3b'],
    correct_option_index: 0,
    explanation:
      'El acrocéntrico tiene un brazo muy corto y otro muy largo (1a); el submetacéntrico tiene brazos desiguales pero ambos visibles (2b); el metacéntrico tiene brazos de longitud igual (3c).',
    common_error:
      'Confundir el acrocéntrico con el submetacéntrico, sin notar que en el acrocéntrico el brazo corto es casi inexistente, mientras que en el submetacéntrico ambos brazos son claramente visibles.',
    source_reference: 'Guía oficial, página 17, código 5.7.2.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-toc-005',
    topic_id: 'cn-5-7-2-tipos-de-cromosomas',
    prompt:
      'Ordena los tipos de cromosomas según la posición del centrómero, del más centrado al más desplazado hacia el extremo.\n\n1. Metacéntrico\n2. Submetacéntrico\n3. Acrocéntrico\n4. Telocéntrico',
    options: ['1, 2, 3, 4', '2, 1, 4, 3', '1, 3, 2, 4'],
    correct_option_index: 0,
    explanation:
      'El orden correcto, del centrómero más centrado al más desplazado hacia el extremo, es metacéntrico (1), submetacéntrico (2), acrocéntrico (3) y telocéntrico (4).',
    common_error:
      'Invertir el submetacéntrico y el acrocéntrico, sin notar que el submetacéntrico conserva brazos más parecidos entre sí que el acrocéntrico.',
    source_reference: 'Guía oficial, página 17, código 5.7.2.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cdp-001',
    topic_id: 'cn-5-7-3-cuadros-de-punnett',
    prompt: 'En una cruza `Aa` × `Aa`, con dominancia completa, ¿qué proporción fenotípica se espera en la descendencia?',
    options: ['1 : 1', '3 : 1', '1 : 2 : 1'],
    correct_option_index: 1,
    explanation:
      'La cruza `Aa` × `Aa` produce una proporción genotípica `1 AA : 2 Aa : 1 aa`, que con dominancia completa se traduce en una proporción fenotípica `3 : 1` (dominante : recesivo).',
    common_error:
      'Confundir la proporción fenotípica `3 : 1` con la proporción genotípica `1 : 2 : 1`, que distingue tres genotipos en lugar de dos fenotipos.',
    source_reference: 'Guía oficial, página 17, código 5.7.3.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-cdp-002',
    topic_id: 'cn-5-7-3-cuadros-de-punnett',
    prompt: '¿Qué proporción de descendencia con fenotipo dominante se espera de la cruza `AA` × `aa`?',
    options: ['100%', '75%', '50%'],
    correct_option_index: 0,
    explanation:
      'La cruza `AA` × `aa` produce únicamente descendencia `Aa`, por lo que el `100%` de la descendencia tiene fenotipo dominante.',
    common_error:
      'Asumir que la cruza `AA` × `aa` produce una mezcla de genotipos, sin notar que un progenitor homocigoto dominante solo puede aportar el alelo `A`.',
    source_reference: 'Guía oficial, página 17, código 5.7.3.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cdp-003',
    topic_id: 'cn-5-7-3-cuadros-de-punnett',
    prompt: 'En una cruza de prueba `Aa` × `aa`, ¿qué proporción genotípica se espera en la descendencia?',
    options: ['1 Aa : 1 aa', '1 AA : 2 Aa : 1 aa', '1 AA : 1 aa'],
    correct_option_index: 0,
    explanation:
      'La cruza de prueba `Aa` × `aa` produce una proporción genotípica `1 Aa : 1 aa`, es decir, la mitad de la descendencia con fenotipo dominante y la mitad con fenotipo recesivo.',
    common_error:
      'Aplicar la proporción `1 AA : 2 Aa : 1 aa`, correspondiente a la cruza `Aa` × `Aa`, en lugar de la cruza de prueba `Aa` × `aa`.',
    source_reference: 'Guía oficial, página 17, código 5.7.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cdp-004',
    topic_id: 'cn-5-7-3-cuadros-de-punnett',
    prompt: 'Al construir un cuadro de Punnett para la cruza `Aa` × `Aa`, la proporción genotípica resultante es ___.',
    options: ['1 AA : 2 Aa : 1 aa', '1 AA : 1 aa', '3 AA : 1 aa'],
    correct_option_index: 0,
    explanation:
      'Al combinar los alelos de ambos progenitores heterocigotos en el cuadro de Punnett, resultan las combinaciones `AA`, `Aa`, `Aa` y `aa`, es decir, la proporción `1 AA : 2 Aa : 1 aa`.',
    common_error:
      'Omitir que hay dos combinaciones distintas que producen `Aa` (una por cada orden de los alelos de los progenitores), reduciendo incorrectamente la proporción a `1 AA : 1 aa`.',
    source_reference: 'Guía oficial, página 17, código 5.7.3.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cdp-005',
    topic_id: 'cn-5-7-3-cuadros-de-punnett',
    prompt:
      'Dos progenitores heterocigotos (`Aa`) para un rasgo recesivo tienen un hijo. ¿Cuál es la probabilidad de que el hijo tenga el fenotipo recesivo?',
    options: ['25%', '50%', '75%'],
    correct_option_index: 0,
    explanation:
      'De las cuatro combinaciones posibles en el cuadro de Punnett (`AA`, `Aa`, `Aa`, `aa`), solo una es `aa`, por lo que la probabilidad de fenotipo recesivo es `25%`.',
    common_error:
      'Confundir la probabilidad del fenotipo recesivo (`25%`, correspondiente solo a `aa`) con la del heterocigoto `Aa` (`50%`).',
    source_reference: 'Guía oficial, página 17, código 5.7.3.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-tev-001',
    topic_id: 'cn-5-7-4-teorias-evolutivas',
    prompt:
      '¿Qué teoría evolutiva propone que la variación favorable ya existe en una población antes de que el ambiente la favorezca mediante supervivencia y reproducción diferencial?',
    options: ['transformismo de Lamarck', 'teoría celular', 'selección natural'],
    correct_option_index: 2,
    explanation:
      'La selección natural propone que la variación heredable ya existe en la población antes de que el ambiente favorezca, mediante supervivencia y reproducción diferencial, a los individuos con la variación más adecuada.',
    common_error:
      'Confundir la selección natural con el transformismo de Lamarck, que propone que la variación se adquiere durante la vida del organismo y se hereda directamente.',
    source_reference: 'Guía oficial, página 17, código 5.7.4.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-tev-002',
    topic_id: 'cn-5-7-4-teorias-evolutivas',
    prompt:
      '¿Qué principio propone Lamarck para explicar que las características adquiridas durante la vida de un organismo se hereden a su descendencia?',
    options: ['ley del uso y desuso', 'selección natural', 'deriva génica'],
    correct_option_index: 0,
    explanation:
      'La ley del uso y desuso de Lamarck propone que una estructura se desarrolla con el uso frecuente o se atrofia con el desuso durante la vida del organismo, y que ese cambio se hereda a la descendencia.',
    common_error:
      'Confundir la ley del uso y desuso con la selección natural, que no requiere que el organismo desarrolle la característica durante su vida, sino que la variación ya exista por azar.',
    source_reference: 'Guía oficial, página 17, código 5.7.4.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-tev-003',
    topic_id: 'cn-5-7-4-teorias-evolutivas',
    prompt:
      'Un enunciado describe una jirafa que estira su cuello durante su vida para alcanzar hojas altas y transmite ese cuello más largo a sus crías. ¿Qué teoría evolutiva describe este ejemplo?',
    options: ['transformismo de Lamarck', 'selección natural', 'evolución divergente'],
    correct_option_index: 0,
    explanation:
      'El ejemplo describe una característica adquirida durante la vida del organismo (estirar el cuello) que se transmite directamente a la descendencia, lo cual corresponde al transformismo de Lamarck.',
    common_error:
      'Clasificar este ejemplo como selección natural, sin notar que describe un esfuerzo individual del organismo durante su vida, no una variación que ya existía en la población.',
    source_reference: 'Guía oficial, página 17, código 5.7.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-tev-004',
    topic_id: 'cn-5-7-4-teorias-evolutivas',
    prompt:
      'Una población de escarabajos con distintos colores de caparazón enfrenta un nuevo depredador; los escarabajos con color más parecido al del entorno sobreviven y se reproducen más, aumentando la frecuencia de ese color en las siguientes generaciones. ¿Qué teoría evolutiva describe este ejemplo?',
    options: ['selección natural', 'transformismo de Lamarck', 'convergencia molecular'],
    correct_option_index: 0,
    explanation:
      'La variación de color ya existía en la población antes de la aparición del depredador; el ambiente favoreció la supervivencia y reproducción diferencial de los individuos mejor adaptados, lo cual es selección natural.',
    common_error:
      'Clasificar este ejemplo como transformismo de Lamarck, sin notar que ningún escarabajo modificó su color durante su vida; la variación ya existía en la población.',
    source_reference: 'Guía oficial, página 17, código 5.7.4.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-tev-005',
    topic_id: 'cn-5-7-4-teorias-evolutivas',
    prompt: 'Antes de que actúe la selección natural sobre una población, la variación genética favorable debe ___.',
    options: [
      'ya existir en la población por azar',
      'ser generada por el uso de una estructura durante la vida del organismo',
      'aparecer solo después de que cambia el ambiente'
    ],
    correct_option_index: 0,
    explanation:
      'La selección natural actúa sobre variación genética que ya existe en la población por azar; el ambiente no genera la variación, solo favorece la supervivencia y reproducción de quienes ya la poseen.',
    common_error:
      'Asumir que la variación aparece como respuesta al cambio ambiental, un razonamiento propio del transformismo de Lamarck, no de la selección natural.',
    source_reference: 'Guía oficial, página 17, código 5.7.4.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cev-001',
    topic_id: 'cn-5-7-5-consecuencias-de-la-evolucion',
    prompt:
      'Los pinzones de las islas Galápagos, que a partir de un ancestro común desarrollaron distintas formas de pico según su alimento, son un ejemplo de ___.',
    options: ['adaptación morfológica', 'evolución divergente', 'convergencia molecular'],
    correct_option_index: 1,
    explanation:
      'La evolución divergente ocurre cuando una especie ancestral común da origen a especies con características distintas, como los pinzones de Galápagos con formas de pico diferentes.',
    common_error:
      'Confundir la evolución divergente con la adaptación morfológica, sin notar que el ejemplo involucra un ancestro común que se diversifica en varias especies, no solo un cambio estructural aislado.',
    source_reference: 'Guía oficial, página 17, código 5.7.5.',
    difficulty: 'basic',
    use_cases: ['diagnostic', 'practice', 'review', 'simulator']
  },
  {
    id: 'cn-cev-002',
    topic_id: 'cn-5-7-5-consecuencias-de-la-evolucion',
    prompt:
      'Las espinas de un cactus, hojas modificadas que reducen la pérdida de agua en un ambiente árido, son un ejemplo de ___.',
    options: ['adaptación morfológica', 'evolución divergente', 'convergencia molecular'],
    correct_option_index: 0,
    explanation:
      'Las espinas del cactus son un cambio estructural que mejora el ajuste del organismo a su ambiente árido, lo cual es una adaptación morfológica.',
    common_error:
      'Confundir la adaptación morfológica con la evolución divergente, sin notar que el ejemplo no menciona un ancestro común que se diversifique en varias especies.',
    source_reference: 'Guía oficial, página 17, código 5.7.5.',
    difficulty: 'basic',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cev-003',
    topic_id: 'cn-5-7-5-consecuencias-de-la-evolucion',
    prompt:
      'Dos especies de peces sin un ancestro reciente en común, que viven en aguas heladas de polos opuestos, desarrollan de forma independiente una proteína anticongelante muy similar. ¿Qué consecuencia de la evolución describe esto?',
    options: ['convergencia molecular', 'evolución divergente', 'adaptación morfológica'],
    correct_option_index: 0,
    explanation:
      'La convergencia molecular ocurre cuando especies sin ancestro reciente en común desarrollan, de forma independiente, una similitud a nivel molecular, como la proteína anticongelante de este ejemplo.',
    common_error:
      'Clasificar este ejemplo como evolución divergente, sin notar que las dos especies no comparten un ancestro reciente, lo cual descarta la divergencia.',
    source_reference: 'Guía oficial, página 17, código 5.7.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cev-004',
    topic_id: 'cn-5-7-5-consecuencias-de-la-evolucion',
    prompt:
      'Relaciona cada consecuencia de la evolución con su definición.\n\n1. Evolución divergente\n2. Adaptación morfológica\n3. Convergencia molecular\n\na. Cambio estructural que mejora el ajuste de un organismo a su ambiente.\nb. Especies sin ancestro reciente en común desarrollan una similitud a nivel molecular.\nc. Un ancestro común da origen a especies con características distintas.',
    options: ['1c, 2a, 3b', '1a, 2b, 3c', '1b, 2c, 3a'],
    correct_option_index: 0,
    explanation:
      'La evolución divergente corresponde a un ancestro común que se diversifica (1c); la adaptación morfológica, a un cambio estructural que mejora el ajuste ambiental (2a); la convergencia molecular, a una similitud molecular entre especies sin ancestro reciente (3b).',
    common_error:
      'Confundir la convergencia molecular con la evolución divergente, sin notar que la convergencia ocurre entre especies sin ancestro reciente en común, mientras que la divergencia parte de un ancestro compartido.',
    source_reference: 'Guía oficial, página 17, código 5.7.5.',
    difficulty: 'intermediate',
    use_cases: ['practice', 'review', 'simulator']
  },
  {
    id: 'cn-cev-005',
    topic_id: 'cn-5-7-5-consecuencias-de-la-evolucion',
    prompt:
      'Las alas de las aves y de los insectos, estructuras físicas similares que evolucionaron de forma independiente, son un ejemplo de convergencia morfológica. ¿Por qué la convergencia molecular es distinta de este ejemplo?',
    options: [
      'porque la similitud ocurre a nivel de moléculas, no de estructuras físicas visibles',
      'porque involucra especies con un ancestro común reciente',
      'porque solo ocurre en plantas, no en animales'
    ],
    correct_option_index: 0,
    explanation:
      'La convergencia molecular ocurre a nivel de proteínas o rutas bioquímicas, no de estructuras físicas visibles como las alas; ambas formas de convergencia comparten que ocurren entre especies sin ancestro reciente en común.',
    common_error:
      'Asumir que la convergencia molecular requiere un ancestro común reciente, cuando en realidad, igual que la convergencia morfológica, ocurre entre especies no emparentadas recientemente.',
    source_reference: 'Guía oficial, página 17, código 5.7.5.',
    difficulty: 'advanced',
    use_cases: ['practice', 'review', 'simulator']
  }
]
