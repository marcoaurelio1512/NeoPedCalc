/* SDR do prematuro — Consenso Europeu 2025 (files/Guideline_europeu_sdr.html) — [inglês, espanhol].
 * Parte 1: textos fixos do HTML (formulário, checklists, painéis, "Como funciona", modal).
 * Parte 2 (guideline-europeu-sdr-2.js): textos montados pelo JS, relatório e padrões. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  i18n.register({
    // Cabeçalho
    'NeoPedCalc — SDR do prematuro (educativo)': ['NeoPedCalc — Preterm RDS (educational)', 'NeoPedCalc — SDR del prematuro (educativo)'],
    'NeoPedCalc — SDR do Prematuro': ['NeoPedCalc — Preterm RDS', 'NeoPedCalc — SDR del Prematuro'],
    'Aplicação prática para apoio informativo na sala de parto e na UTI neonatal, com foco em suporte respiratório inicial, indicação comparativa de surfactante, alvo de saturação, texto técnico e base bibliográfica visível dentro da própria ferramenta.': [
      'Practical tool for informational support in the delivery room and the NICU, focused on initial respiratory support, comparative surfactant indication, saturation targets, technical text and a bibliographic basis visible within the tool itself.',
      'Aplicación práctica de apoyo informativo en la sala de partos y en la UCI neonatal, centrada en el soporte respiratorio inicial, la indicación comparativa de surfactante, el objetivo de saturación, el texto técnico y la base bibliográfica visible dentro de la propia herramienta.'
    ],
    'Carregar exemplo': ['Load example', 'Cargar ejemplo'],
    'Limpar': ['Clear', 'Limpiar'],
    'Como usar': ['How to use', 'Cómo usar'],

    // Dados do paciente
    'Dados do paciente': ['Patient data', 'Datos del paciente'],
    'Identificação do paciente': ['Patient identification', 'Identificación del paciente'],
    'Ex.: RN João / Leito 3': ['E.g., Baby John / Bed 3', 'Ej.: RN Juan / Cama 3'],
    'Idade gestacional ao nascer (semanas)': ['Gestational age at birth (weeks)', 'Edad gestacional al nacer (semanas)'],
    'Ex.: 28.4': ['E.g., 28.4', 'Ej.: 28.4'],
    'Peso atual (g)': ['Current weight (g)', 'Peso actual (g)'],
    'Ex.: 980': ['E.g., 980', 'Ej.: 980'],
    'Idade de vida (horas)': ['Postnatal age (hours)', 'Edad posnatal (horas)'],
    'Ex.: 2': ['E.g., 2', 'Ej.: 2'],
    'Tipo de suporte atual': ['Current support type', 'Tipo de soporte actual'],
    'CPAP': ['CPAP', 'CPAP'],
    'HFNC': ['HFNC', 'HFNC'],
    'NIPPV / ventilação nasal': ['NIPPV / nasal ventilation', 'NIPPV / ventilación nasal'],
    'Ventilação mecânica': ['Mechanical ventilation', 'Ventilación mecánica'],
    'Ar ambiente / sem suporte': ['Room air / no support', 'Aire ambiente / sin soporte'],
    'MAP / CPAP atual (cmH2O)': ['Current MAP / CPAP (cmH2O)', 'MAP / CPAP actual (cmH2O)'],
    'Ex.: 6': ['E.g., 6', 'Ej.: 6'],
    'FiO2 atual': ['Current FiO2', 'FiO2 actual'],
    'Ex.: 0.30': ['E.g., 0.30', 'Ej.: 0.30'],
    'SpO2 atual (%)': ['Current SpO2 (%)', 'SpO2 actual (%)'],
    'Ex.: 91': ['E.g., 91', 'Ej.: 91'],
    'FC atual (bpm)': ['Current HR (bpm)', 'FC actual (bpm)'],
    'Ex.: 148': ['E.g., 148', 'Ej.: 148'],
    'Condição especial (alvos de SpO₂ — protocolo operacional)': ['Special condition (SpO₂ targets — operational protocol)', 'Condición especial (objetivos de SpO₂ — protocolo operativo)'],
    'Nenhuma': ['None', 'Ninguna'],
    'DBP com hipertensão pulmonar': ['BPD with pulmonary hypertension', 'DBP con hipertensión pulmonar'],

    // Medicação antenatal materna
    'Medicação antenatal materna': ['Maternal antenatal medication', 'Medicación prenatal materna'],
    'Checklist de antecedentes maternos alinhado ao Consenso Europeu de SDR 2025/2026 (Sweet DG et al.,': [
      'Maternal history checklist aligned with the 2025/2026 European Consensus Guidelines on RDS (Sweet DG et al.,',
      'Lista de verificación de antecedentes maternos alineada con el Consenso Europeo sobre SDR 2025/2026 (Sweet DG et al.,'
    ],
    'Neonatology': ['Neonatology', 'Neonatology'],
    'Corticosteroides antenatais (ANCS)': ['Antenatal corticosteroids (ANCS)', 'Corticoides prenatales (ANCS)'],
    'Deve ser oferecido': ['Offer', 'Debe ofrecerse'],
    'um curso único': ['a single course', 'un curso único'],
    'a todas as gestantes com risco de parto prematuro da': ['to all pregnant women at risk of preterm birth from', 'a todas las gestantes con riesgo de parto prematuro desde la'],
    'viabilidade até 34 semanas': ['the limit of viability up to 34 weeks', 'viabilidad hasta las 34 semanas'],
    ', idealmente': [', ideally', ', idealmente'],
    'pelo menos 24 horas': ['at least 24 hours', 'al menos 24 horas'],
    'antes do parto. O benefício máximo ocorre entre 24 h e': ['before birth. Maximum benefit occurs between 24 h and', 'antes del parto. El beneficio máximo se produce entre las 24 h y los'],
    '7–10 dias': ['7–10 days', '7–10 días'],
    'após a administração.': ['after administration.', 'tras la administración.'],
    'Dilatação avançada': ['Advanced cervical dilatation', 'La dilatación avanzada'],
    'não deve impedir o tratamento — o efeito benéfico começa nas': ['should not preclude treatment — the beneficial effect begins within the', 'no debe impedir el tratamiento — el efecto beneficioso comienza en las'],
    'primeiras 24 h': ['first 24 h', 'primeras 24 h'],
    'Um único curso de repetição': ['A single repeat course', 'Un único curso de repetición'],
    'pode ser administrado': ['may be given', 'puede administrarse'],
    'antes de 32 semanas': ['before 32 weeks', 'antes de las 32 semanas'],
    'se o primeiro curso foi há': ['if the first course was given', 'si el primer curso se administró hace'],
    'mais de 1–2 semanas': ['more than 1–2 weeks earlier', 'más de 1–2 semanas'],
    'O uso de corticoides': ['Corticosteroid use', 'El uso de corticoides'],
    'após 34 semanas': ['after 34 weeks', 'después de las 34 semanas'],
    'em trabalho de parto espontâneo': ['in spontaneous labor', 'en trabajo de parto espontáneo'],
    'não é aconselhável': ['is not advisable', 'no es aconsejable'],
    '(risco de hipoglicemia neonatal e falta de benefício em mortalidade).': ['(risk of neonatal hypoglycemia and no mortality benefit).', '(riesgo de hipoglucemia neonatal y ausencia de beneficio en mortalidad).'],
    'Curso único de ANCS documentado (risco de PTB até 34s; ideal ≥24 h antes do parto)': [
      'Single ANCS course documented (PTB risk up to 34 wk; ideally ≥24 h before birth)',
      'Curso único de ANCS documentado (riesgo de parto prematuro hasta 34 sem; ideal ≥24 h antes del parto)'
    ],
    'Curso de repetição documentado (antes de 32s; 1º curso há >1–2 semanas)': [
      'Repeat course documented (before 32 wk; 1st course >1–2 weeks earlier)',
      'Curso de repetición documentado (antes de 32 sem; 1.er curso hace >1–2 semanas)'
    ],
    'Não recebeu ANCS / não documentado neste episódio': ['Did not receive ANCS / not documented in this episode', 'No recibió ANCS / no documentado en este episodio'],
    'Neuroproteção — sulfato de magnésio (MgSO₄)': ['Neuroprotection — magnesium sulfate (MgSO₄)', 'Neuroprotección — sulfato de magnesio (MgSO₄)'],
    'O sulfato de magnésio deve ser administrado a gestantes com': ['Magnesium sulfate should be given to pregnant women with', 'El sulfato de magnesio debe administrarse a gestantes con'],
    'parto iminente antes de 32 semanas': ['imminent delivery before 32 weeks', 'parto inminente antes de las 32 semanas'],
    'de gestação para': ['of gestation for', 'de gestación para'],
    'neuroproteção fetal': ['fetal neuroprotection', 'neuroprotección fetal'],
    'MgSO₄ materno para neuroproteção documentado (parto iminente antes de 32s)': [
      'Maternal MgSO₄ for neuroprotection documented (imminent delivery before 32 wk)',
      'MgSO₄ materno para neuroprotección documentado (parto inminente antes de 32 sem)'
    ],
    'Não recebeu MgSO₄ / não aplicável ou não documentado': ['Did not receive MgSO₄ / not applicable or not documented', 'No recibió MgSO₄ / no aplicable o no documentado'],

    // Sala de parto
    'Sala de parto — estabilização': ['Delivery room — stabilization', 'Sala de partos — estabilización'],
    'Recomendações iniciais conforme a idade gestacional informada acima (European Consensus RDS).': [
      'Initial recommendations according to the gestational age entered above (European Consensus RDS).',
      'Recomendaciones iniciales según la edad gestacional informada arriba (European Consensus RDS).'
    ],
    'Informe a IG em “Dados do paciente” para as recomendações.': ['Enter the GA in “Patient data” to see the recommendations.', 'Informe la EG en “Datos del paciente” para ver las recomendaciones.'],
    'Checklist rápido': ['Quick checklist', 'Lista de verificación rápida'],
    'Clampeamento ≥ 60 s': ['Cord clamping ≥ 60 s', 'Pinzamiento del cordón ≥ 60 s'],
    'Saco / gases aquecidos': ['Plastic bag / heated gases', 'Bolsa de polietileno / gases calentados'],
    'Monitorar SpO₂ pré-ductal': ['Monitor preductal SpO₂', 'Monitorizar SpO₂ preductal'],
    'T-piece (PIP ~ 25)': ['T-piece (PIP ~ 25)', 'Pieza en T (PIP ~ 25)'],

    // Achados clínicos — UTI neonatal
    'Achados clínicos — avaliação na UTI neonatal': ['Clinical findings — NICU assessment', 'Hallazgos clínicos — evaluación en la UCI neonatal'],
    'Este checklist refere-se ao exame e à monitorização do recém-nascido': ['This checklist refers to the examination and monitoring of the newborn', 'Esta lista de verificación se refiere a la exploración y la monitorización del recién nacido'],
    'no contexto da UTI neonatal': ['in the NICU setting', 'en el contexto de la UCI neonatal'],
    '(estado respiratório e achados correlatos no momento da avaliação).': ['(respiratory status and related findings at the time of assessment).', '(estado respiratorio y hallazgos relacionados en el momento de la evaluación).'],
    'Achados clínicos na UTI neonatal': ['Clinical findings in the NICU', 'Hallazgos clínicos en la UCI neonatal'],
    'Retrações / aumento do trabalho respiratório': ['Retractions / increased work of breathing', 'Retracciones / aumento del trabajo respiratorio'],
    'Gemência / desconforto respiratório significativo': ['Grunting / significant respiratory distress', 'Quejido / dificultad respiratoria significativa'],
    'Apneia recorrente': ['Recurrent apnea', 'Apnea recurrente'],
    'Bradicardia / instabilidade': ['Bradycardia / instability', 'Bradicardia / inestabilidad'],
    'Ultrassom pulmonar com padrão descrito na literatura como associado a SDR (referência consultiva)': [
      'Lung ultrasound with a pattern described in the literature as associated with RDS (advisory reference)',
      'Ecografía pulmonar con patrón descrito en la literatura como asociado al SDR (referencia consultiva)'
    ],
    'Abrir LUS Score': ['Open LUS Score', 'Abrir LUS Score'],
    'LUS sem retorno ainda.': ['No LUS result yet.', 'Aún sin resultado de LUS.'],
    'Foi intubado para estabilização': ['Was intubated for stabilization', 'Fue intubado para la estabilización'],
    'Contexto de hipertensão pulmonar (suspeita ou registro assistencial) — apenas para ajuste de metas informativas na ferramenta': [
      'Pulmonary hypertension context (suspected or documented in the clinical record) — only to adjust the informational targets in the tool',
      'Contexto de hipertensión pulmonar (sospecha o registro asistencial) — solo para ajustar los objetivos informativos en la herramienta'
    ],
    'Observações clínicas (UTI neonatal)': ['Clinical notes (NICU)', 'Observaciones clínicas (UCI neonatal)'],
    'Ex.: piora progressiva da FiO2 nas últimas 2 horas, RX compatível com SDR, esforço respiratório importante...': [
      'E.g., progressive increase in FiO2 over the last 2 hours, X-ray consistent with RDS, marked respiratory effort...',
      'Ej.: aumento progresivo de la FiO2 en las últimas 2 horas, Rx compatible con SDR, esfuerzo respiratorio importante...'
    ],
    'Gerar resumo informativo': ['Generate informational summary', 'Generar resumen informativo'],
    'Copiar texto informativo': ['Copy informational text', 'Copiar texto informativo'],

    // Resultado da análise
    'Resultado da análise': ['Analysis result', 'Resultado del análisis'],
    'Gere o': ['Generate the', 'Genere el'],
    'resumo informativo': ['informational summary', 'resumen informativo'],
    'para ver aqui a': ['to see here the', 'para ver aquí la'],
    'síntese educacional': ['educational synthesis', 'síntesis educativa'],
    'comparação com critérios da diretriz': ['comparison with the guideline criteria', 'comparación con los criterios de la guía'],
    '(surfactante) e o resumo antenatal/sala. O texto corrido para cópia segue abaixo — interpretação e decisão são do profissional assistente.': [
      '(surfactant) and the antenatal/delivery room summary. The running text for copying follows below — interpretation and decisions belong to the attending clinician.',
      '(surfactante) y el resumen prenatal/sala de partos. El texto continuo para copiar aparece abajo — la interpretación y la decisión corresponden al profesional tratante.'
    ],
    'Preencha os dados e clique em “Gerar resumo informativo”.': ['Fill in the data and click “Generate informational summary”.', 'Complete los datos y haga clic en “Generar resumen informativo”.'],

    // Modal LUS
    'LUS Score Neonatal — Ultrassom de Pulmão': ['Neonatal LUS Score — Lung Ultrasound', 'LUS Score Neonatal — Ecografía Pulmonar'],
    'LUS Score Neonatal': ['Neonatal LUS Score', 'LUS Score Neonatal'],
    'Fechar': ['Close', 'Cerrar'],

    // Dose teórica de surfactante
    'Dose teórica de surfactante': ['Theoretical surfactant dose', 'Dosis teórica de surfactante'],
    'Este cálculo mostra apenas a dose teórica em miligramas com base no peso informado. O volume em mL, a preparação final, a técnica de administração e as redoses devem seguir o produto disponível e o protocolo da sua unidade.': [
      'This calculation shows only the theoretical dose in milligrams based on the weight entered. The volume in mL, final preparation, administration technique and repeat doses must follow the available product and your unit’s protocol.',
      'Este cálculo muestra solo la dosis teórica en miligramos según el peso informado. El volumen en mL, la preparación final, la técnica de administración y las redosis deben seguir el producto disponible y el protocolo de su unidad.'
    ],
    'Informe o peso para calcular.': ['Enter the weight to calculate.', 'Informe el peso para calcular.'],
    'Resumo educativo (diretriz)': ['Educational summary (guideline)', 'Resumen educativo (guía)'],
    'Produto frequentemente citado na diretriz de referência: poractant alfa.': ['Product frequently cited in the reference guideline: poractant alfa.', 'Producto citado con frecuencia en la guía de referencia: poractant alfa.'],
    'Dose usualmente discutida na literatura de referência: 200 mg/kg (conferir produto e protocolo institucional).': [
      'Dose usually discussed in the reference literature: 200 mg/kg (check product and institutional protocol).',
      'Dosis habitualmente discutida en la literatura de referencia: 200 mg/kg (verificar producto y protocolo institucional).'
    ],
    'Vias descritas na diretriz incluem LISA/MIST em contexto de respiração espontânea — aplicabilidade depende de cenário clínico e unidade.': [
      'Routes described in the guideline include LISA/MIST in spontaneously breathing infants — applicability depends on the clinical scenario and the unit.',
      'Las vías descritas en la guía incluyen LISA/MIST en el contexto de respiración espontánea — la aplicabilidad depende del escenario clínico y de la unidad.'
    ],
    'Redoses são debatidas na diretriz quando há persistência de padrão compatível com SDR após exclusão de outras causas — decisão assistencial.': [
      'Repeat doses are discussed in the guideline when a pattern consistent with RDS persists after other causes have been excluded — clinical team decision.',
      'Las redosis se debaten en la guía cuando persiste un patrón compatible con SDR tras excluir otras causas — decisión asistencial.'
    ],

    // Protocolo operacional
    'RDS 2025 · 2026': ['RDS 2025 · 2026', 'RDS 2025 · 2026'],
    'Protocolo operacional SDR': ['RDS operational protocol', 'Protocolo operativo de SDR'],
    'Painéis educativos sobre terapia de reposição, metas usualmente citadas na UTI/VM e trechos de segurança da diretriz. Os critérios numéricos exibidos para surfactante são calculados a partir de FiO₂, MAP/CPAP e do checklist acima — servem para comparação com a literatura, não como prescrição.': [
      'Educational panels on replacement therapy, targets usually cited for the NICU/MV and safety excerpts from the guideline. The numerical surfactant criteria shown are calculated from FiO₂, MAP/CPAP and the checklist above — they are for comparison with the literature, not a prescription.',
      'Paneles educativos sobre terapia de reemplazo, objetivos habitualmente citados en la UCI/VM y fragmentos de seguridad de la guía. Los criterios numéricos mostrados para surfactante se calculan a partir de FiO₂, MAP/CPAP y la lista de verificación anterior — sirven para comparar con la literatura, no como prescripción.'
    ],
    'Os critérios de surfactante': ['The surfactant criteria', 'Los criterios de surfactante'],
    'não são repetidos aqui': ['are not repeated here', 'no se repiten aquí'],
    ': vêm de': [': they come from', ': provienen de'],
    'FiO₂': ['FiO₂', 'FiO₂'],
    'MAP/CPAP': ['MAP/CPAP', 'MAP/CPAP'],
    'USG': ['US', 'ecografía'],
    'esforço respiratório': ['respiratory effort', 'esfuerzo respiratorio'],
    '(achados clínicos na UTI neonatal) nos blocos anteriores. Estes painéis atualizam com IG, peso e condição especial.': [
      '(clinical findings in the NICU) in the previous blocks. These panels update with GA, weight and special condition.',
      '(hallazgos clínicos en la UCI neonatal) en los bloques anteriores. Estos paneles se actualizan con la EG, el peso y la condición especial.'
    ],
    'Terapia de reposição': ['Replacement therapy', 'Terapia de reemplazo'],
    'Informe o peso (g); FiO₂, MAP e achados atualizam a indicação.': ['Enter the weight (g); FiO₂, MAP and findings update the indication.', 'Informe el peso (g); FiO₂, MAP y los hallazgos actualizan la indicación.'],
    'Suporte UTI e VM': ['NICU support and MV', 'Soporte en UCI y VM'],
    'Informe a IG para as metas.': ['Enter the GA to see the targets.', 'Informe la EG para ver los objetivos.'],
    'Cuidados de suporte e segurança': ['Supportive care and safety', 'Cuidados de soporte y seguridad'],
    'Hipotensão:': ['Hypotension:', 'Hipotensión:'],
    'não usar bolus salino de rotina; avaliar perfusão global.': ['do not use routine saline boluses; assess overall perfusion.', 'no usar bolos de solución salina de rutina; evaluar la perfusión global.'],
    'Antibióticos:': ['Antibiotics:', 'Antibióticos:'],
    'suspender em 36–48 h se culturas negativas.': ['stop at 36–48 h if cultures are negative.', 'suspender a las 36–48 h si los cultivos son negativos.'],
    'Nutrição:': ['Nutrition:', 'Nutrición:'],
    'nutrição parenteral precoce + enteral mínima.': ['early parenteral nutrition + minimal enteral feeding.', 'nutrición parenteral precoz + enteral mínima.'],
    'PDA:': ['PDA:', 'DAP:'],
    'tratamento conservador; intervir se sintomático.': ['conservative management; intervene if symptomatic.', 'tratamiento conservador; intervenir si es sintomático.'],

    // Como funciona
    'Como funciona': ['How it works', 'Cómo funciona'],
    'Lógica clínica resumida': ['Summary of the clinical logic', 'Lógica clínica resumida'],
    'A aplicação organiza a avaliação do prematuro com desconforto respiratório com base na diretriz europeia de SDR 2025/2026. O fluxo na tela é:': [
      'The tool organizes the assessment of the preterm infant with respiratory distress based on the 2025/2026 European RDS guideline. The on-screen flow is:',
      'La aplicación organiza la evaluación del prematuro con dificultad respiratoria según la guía europea de SDR 2025/2026. El flujo en pantalla es:'
    ],
    '— IG, peso, idade de vida, tipo de suporte, MAP/CPAP, FiO₂, SpO₂, FC e condição especial (alvos de oxigenação quando há DBP com hipertensão pulmonar).': [
      '— GA, weight, postnatal age, support type, MAP/CPAP, FiO₂, SpO₂, HR and special condition (oxygenation targets when there is BPD with pulmonary hypertension).',
      '— EG, peso, edad posnatal, tipo de soporte, MAP/CPAP, FiO₂, SpO₂, FC y condición especial (objetivos de oxigenación cuando hay DBP con hipertensión pulmonar).'
    ],
    '— checklist de ANCS (corticoides) e sulfato de magnésio para neuroproteção, com texto resumido da diretriz; entra no relatório como antecedente, sem alterar o cálculo automático de surfactante.': [
      '— checklist for ANCS (corticosteroids) and magnesium sulfate for neuroprotection, with a summary of the guideline text; it enters the report as history, without changing the automatic surfactant calculation.',
      '— lista de verificación de ANCS (corticoides) y sulfato de magnesio para neuroprotección, con texto resumido de la guía; entra en el informe como antecedente, sin modificar el cálculo automático de surfactante.'
    ],
    'Sala de parto': ['Delivery room', 'Sala de partos'],
    '— recomendações automáticas pela IG e checklist rápido opcional (não alteram o cálculo dos critérios de surfactante).': [
      '— automatic recommendations by GA and optional quick checklist (they do not change the calculation of the surfactant criteria).',
      '— recomendaciones automáticas según la EG y lista de verificación rápida opcional (no modifican el cálculo de los criterios de surfactante).'
    ],
    '— trabalho respiratório, USG, intubação na estabilização, hipertensão pulmonar e observações livres (avaliação no contexto da UTI NN).': [
      '— work of breathing, US, intubation during stabilization, pulmonary hypertension and free-text notes (assessment in the NICU setting).',
      '— trabajo respiratorio, ecografía, intubación durante la estabilización, hipertensión pulmonar y observaciones libres (evaluación en el contexto de la UCI neonatal).'
    ],
    'Critérios de surfactante': ['Surfactant criteria', 'Criterios de surfactante'],
    '— calculados': ['— calculated', '— calculados'],
    'uma única vez': ['only once', 'una sola vez'],
    'a partir de FiO₂ ≥ 0,30, MAP/CPAP ≥ 6 cmH₂O, USG sugestivo e achados de esforço/apneia/bradicardia. O bloco “Protocolo operacional” reutiliza esses mesmos campos (não há segundo formulário de “gatilhos”).': [
      'from FiO₂ ≥ 0.30, MAP/CPAP ≥ 6 cmH₂O, suggestive US and findings of effort/apnea/bradycardia. The “Operational protocol” block reuses these same fields (there is no second “triggers” form).',
      'a partir de FiO₂ ≥ 0,30, MAP/CPAP ≥ 6 cmH₂O, ecografía sugestiva y hallazgos de esfuerzo/apnea/bradicardia. El bloque “Protocolo operativo” reutiliza estos mismos campos (no hay un segundo formulario de “desencadenantes”).'
    ],
    'Idade de vida, SpO₂ e FC': ['Postnatal age, SpO₂ and HR', 'Edad posnatal, SpO₂ y FC'],
    '— entram no relatório como': ['— enter the report as', '— entran en el informe como'],
    'vigilância': ['monitoring', 'vigilancia'],
    '(interpretação em relação às metas da ferramenta e alertas), não como quarto critério numérico formal de surfactante neste módulo.': [
      '(interpretation relative to the tool’s targets and alerts), not as a fourth formal numerical surfactant criterion in this module.',
      '(interpretación en relación con los objetivos de la herramienta y alertas), no como cuarto criterio numérico formal de surfactante en este módulo.'
    ],
    '7. Prematuros < 32 semanas intubados na estabilização: reforço de surfactante o mais precocemente possível.': [
      '7. Preterm infants < 32 weeks intubated during stabilization: emphasis on surfactant as early as possible.',
      '7. Prematuros < 32 semanas intubados durante la estabilización: refuerzo del surfactante lo más precozmente posible.'
    ],
    '8. Em ventilação mecânica: lembrete de estratégia protetora (VG / volume-targeted) e extubação quando seguro.': [
      '8. On mechanical ventilation: reminder of a lung-protective strategy (VG / volume-targeted) and extubation when safe.',
      '8. En ventilación mecánica: recordatorio de estrategia protectora (VG / volumen objetivo) y extubación cuando sea seguro.'
    ],
    'A ferramenta é apoio de beira-leito; não substitui julgamento clínico, gasometria, imagem, protocolo institucional e experiência da equipe.': [
      'The tool is bedside support; it does not replace clinical judgment, blood gases, imaging, institutional protocol or team experience.',
      'La herramienta es un apoyo a pie de cama; no sustituye el juicio clínico, la gasometría, la imagen, el protocolo institucional ni la experiencia del equipo.'
    ],
    'Base científica utilizada': ['Scientific basis used', 'Base científica utilizada'],
    'Este módulo foi construído com base principalmente na seguinte referência:': ['This module was built mainly on the following reference:', 'Este módulo se construyó principalmente a partir de la siguiente referencia:'],
    'Sweet DG, Carnielli VP, Greisen G, Hallman M, Klebermass-Schrehof K, Lavizzari A, Ozek E, te Pas A, Roehr CC, Saugstad OD, Simeoni U, Vento M, Visser GHA, Speer CP. European Consensus Guidelines on the Management of Respiratory Distress Syndrome – 2025. Neonatology. 2026. DOI: 10.1159/000551062.': [
      'Sweet DG, Carnielli VP, Greisen G, Hallman M, Klebermass-Schrehof K, Lavizzari A, Ozek E, te Pas A, Roehr CC, Saugstad OD, Simeoni U, Vento M, Visser GHA, Speer CP. European Consensus Guidelines on the Management of Respiratory Distress Syndrome – 2025. Neonatology. 2026. DOI: 10.1159/000551062.',
      'Sweet DG, Carnielli VP, Greisen G, Hallman M, Klebermass-Schrehof K, Lavizzari A, Ozek E, te Pas A, Roehr CC, Saugstad OD, Simeoni U, Vento M, Visser GHA, Speer CP. European Consensus Guidelines on the Management of Respiratory Distress Syndrome – 2025. Neonatology. 2026. DOI: 10.1159/000551062.'
    ],
    'Principais pontos incorporados à lógica da aplicação:': ['Main points incorporated into the tool’s logic:', 'Principales puntos incorporados a la lógica de la aplicación:'],
    '- CPAP como suporte inicial do prematuro respirando espontaneamente.': ['- CPAP as initial support for the spontaneously breathing preterm infant.', '- CPAP como soporte inicial del prematuro con respiración espontánea.'],
    '- Uso de blender e titulação criteriosa de oxigênio.': ['- Use of an oxygen blender and careful oxygen titration.', '- Uso de mezclador y titulación cuidadosa del oxígeno.'],
    '- FiO2 de 0,30 como limiar prático frequente para considerar surfactante em bebês em suporte não invasivo.': [
      '- FiO2 of 0.30 as a common practical threshold for considering surfactant in babies on non-invasive support.',
      '- FiO2 de 0,30 como umbral práctico frecuente para considerar surfactante en bebés con soporte no invasivo.'
    ],
    '- Preferência por administração menos invasiva com cateter fino quando viável.': [
      '- Preference for less invasive administration via a thin catheter when feasible.',
      '- Preferencia por la administración menos invasiva con catéter fino cuando sea factible.'
    ],
    '- Preferência por dose inicial de 200 mg/kg de poractant alfa quando esse surfactante estiver disponível.': [
      '- Preference for an initial dose of 200 mg/kg of poractant alfa when this surfactant is available.',
      '- Preferencia por una dosis inicial de 200 mg/kg de poractant alfa cuando este surfactante esté disponible.'
    ],
    '- Meta habitual de saturação em torno de 90–94% para prematuros em oxigênio, com alarmes sugeridos de 89–95%.': [
      '- Usual saturation target around 90–94% for preterm infants on oxygen, with suggested alarm limits of 89–95%.',
      '- Objetivo habitual de saturación en torno al 90–94% para prematuros con oxígeno, con alarmas sugeridas de 89–95%.'
    ],
    '- Em contexto de hipertensão pulmonar (checkbox e/ou opção “DBP com hipertensão pulmonar”), a calculadora propõe faixa mais alta (94–97%) e alarmes distintos, alinhados ao painel “Suporte UTI e VM”.': [
      '- In a pulmonary hypertension context (checkbox and/or the “BPD with pulmonary hypertension” option), the calculator proposes a higher range (94–97%) and different alarm limits, aligned with the “NICU support and MV” panel.',
      '- En contexto de hipertensión pulmonar (casilla y/u opción “DBP con hipertensión pulmonar”), la calculadora propone un rango más alto (94–97%) y alarmas distintas, alineadas con el panel “Soporte en UCI y VM”.'
    ],
    '- O checklist antenatal resume ANCS (curso único até 34s; repetição antes de 32s; cautela após 34s em TPE) e MgSO₄ para neuroproteção antes de 32s, para registro no relatório junto aos dados do RN.': [
      '- The antenatal checklist summarizes ANCS (single course up to 34 wk; repeat course before 32 wk; caution after 34 wk in spontaneous preterm labor) and MgSO₄ for neuroprotection before 32 wk, to be recorded in the report together with the newborn’s data.',
      '- La lista prenatal resume ANCS (curso único hasta 34 sem; repetición antes de 32 sem; precaución después de 34 sem en trabajo de parto espontáneo) y MgSO₄ para neuroprotección antes de 32 sem, para registro en el informe junto con los datos del RN.'
    ],

    // Referências
    'Referências bibliográficas': ['Bibliographic references', 'Referencias bibliográficas'],
    'Lista curta para visualização na tela': ['Short list for on-screen viewing', 'Lista breve para visualización en pantalla'],
    'Como citar no relatório ou prontuário': ['How to cite in the report or medical record', 'Cómo citar en el informe o la historia clínica'],
    'Referência técnica utilizada: Sweet DG et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome – 2025. Neonatology. 2026. DOI: 10.1159/000551062.': [
      'Technical reference used: Sweet DG et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome – 2025. Neonatology. 2026. DOI: 10.1159/000551062.',
      'Referencia técnica utilizada: Sweet DG et al. European Consensus Guidelines on the Management of Respiratory Distress Syndrome – 2025. Neonatology. 2026. DOI: 10.1159/000551062.'
    ],

    // Rodapé
    'NeoPedCalc — ferramenta educacional e informativa. Não prescreve nem automatiza decisão clínica. Valide sempre com protocolo institucional, disponibilidade de medicamentos, estado hemodinâmico, gasometria, imagem e avaliação clínica completa do recém-nascido.': [
      'NeoPedCalc — educational and informational tool. It does not prescribe or automate clinical decisions. Always validate against the institutional protocol, drug availability, hemodynamic status, blood gases, imaging and a complete clinical assessment of the newborn.',
      'NeoPedCalc — herramienta educativa e informativa. No prescribe ni automatiza decisiones clínicas. Valide siempre con el protocolo institucional, la disponibilidad de medicamentos, el estado hemodinámico, la gasometría, la imagen y la evaluación clínica completa del recién nacido.'
    ],
    'Protocolo operacional: European Consensus Guidelines on the Management of RDS — atualização 2025/2026 (referência Sweet DG et al., Neonatology, DOI 10.1159/000551062).': [
      'Operational protocol: European Consensus Guidelines on the Management of RDS — 2025/2026 update (reference Sweet DG et al., Neonatology, DOI 10.1159/000551062).',
      'Protocolo operativo: European Consensus Guidelines on the Management of RDS — actualización 2025/2026 (referencia Sweet DG et al., Neonatology, DOI 10.1159/000551062).'
    ],

    // Modal "Como usar"
    'Como usar — SDR do prematuro': ['How to use — Preterm RDS', 'Cómo usar — SDR del prematuro'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Organizar dados do RN prematuro com desconforto respiratório, checklist antenatal, sala de parto e achados na UTI, e gerar': [
      'To organize data on the preterm newborn with respiratory distress, the antenatal checklist, delivery room and NICU findings, and to generate',
      'Organizar los datos del RN prematuro con dificultad respiratoria, la lista prenatal, la sala de partos y los hallazgos en la UCI, y generar'
    ],
    'texto informativo': ['informational text', 'texto informativo'],
    'alinhado ao Consenso Europeu de SDR (referência Sweet DG et al., 2025/2026), para comparação com a literatura — sem prescrever conduta.': [
      'aligned with the European Consensus Guidelines on RDS (reference Sweet DG et al., 2025/2026), for comparison with the literature — without prescribing management.',
      'alineado con el Consenso Europeo sobre SDR (referencia Sweet DG et al., 2025/2026), para comparar con la literatura — sin prescribir conducta.'
    ],
    'Ordem sugerida na tela': ['Suggested on-screen order', 'Orden sugerido en pantalla'],
    'Dados do paciente:': ['Patient data:', 'Datos del paciente:'],
    'identificação, IG, peso (g), idade de vida (h), tipo de suporte, MAP/CPAP, FiO₂, SpO₂, FC e condição especial (ex.: DBP com hipertensão pulmonar) quando alterar metas de oxigenação.': [
      'identification, GA, weight (g), postnatal age (h), support type, MAP/CPAP, FiO₂, SpO₂, HR and special condition (e.g., BPD with pulmonary hypertension) when it changes oxygenation targets.',
      'identificación, EG, peso (g), edad posnatal (h), tipo de soporte, MAP/CPAP, FiO₂, SpO₂, FC y condición especial (p. ej., DBP con hipertensión pulmonar) cuando modifique los objetivos de oxigenación.'
    ],
    'Medicação antenatal:': ['Antenatal medication:', 'Medicación prenatal:'],
    'marque ANCS e MgSO₄ conforme documentação; entram no relatório.': ['check ANCS and MgSO₄ according to documentation; they are included in the report.', 'marque ANCS y MgSO₄ según la documentación; se incluyen en el informe.'],
    'Sala de parto:': ['Delivery room:', 'Sala de partos:'],
    'leia as recomendações automáticas pela IG e use o checklist rápido se desejar.': ['read the automatic recommendations by GA and use the quick checklist if desired.', 'lea las recomendaciones automáticas según la EG y use la lista de verificación rápida si lo desea.'],
    'Achados na UTI:': ['NICU findings:', 'Hallazgos en la UCI:'],
    'esforço respiratório, LUS (botão abre a calculadora em janela), intubação na estabilização, hipertensão pulmonar e observações livres.': [
      'respiratory effort, LUS (the button opens the calculator in a window), intubation during stabilization, pulmonary hypertension and free-text notes.',
      'esfuerzo respiratorio, LUS (el botón abre la calculadora en una ventana), intubación durante la estabilización, hipertensión pulmonar y observaciones libres.'
    ],
    'Clique em': ['Click', 'Haga clic en'],
    '; em seguida pode': ['; you can then', '; a continuación puede'],
    '. Os painéis de surfactante e protocolo operacional reutilizam os mesmos campos de FiO₂, MAP e checklist (finalidade educativa).': [
      '. The surfactant and operational protocol panels reuse the same FiO₂, MAP and checklist fields (educational purpose).',
      '. Los paneles de surfactante y de protocolo operativo reutilizan los mismos campos de FiO₂, MAP y lista de verificación (finalidad educativa).'
    ],
    'Consulte a dose teórica de surfactante pelo peso e a seção': ['See the theoretical surfactant dose by weight and the', 'Consulte la dosis teórica de surfactante según el peso y la sección'],
    'mais abaixo na página para a lógica detalhada e citações.': ['section further down the page for the detailed logic and citations.', 'más abajo en la página para la lógica detallada y las citas.'],
    'Importante': ['Important', 'Importante'],
    'Ferramenta de apoio; confirme sempre com protocolo local, gasometria, imagem e estado clínico do paciente.': [
      'Support tool; always confirm with the local protocol, blood gases, imaging and the patient’s clinical status.',
      'Herramienta de apoyo; confirme siempre con el protocolo local, la gasometría, la imagen y el estado clínico del paciente.'
    ]
  });
})(window.NEOPED_I18N);
