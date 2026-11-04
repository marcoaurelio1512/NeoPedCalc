/* Infecções Congênitas (files/infeccoes_congenitas.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  // ===== Cabeçalho, dados gerais e seletor de infecção
  i18n.register({
    'NeoPedCalc — Hub: Infecções congênitas (educativo)': ['NeoPedCalc — Hub: Congenital Infections (educational)', 'NeoPedCalc — Hub: Infecciones congénitas (educativo)'],
    'NeoPedCalc — Hub Neonatal: Infecções Congênitas (classificação + prescrição guiada)': ['NeoPedCalc — Neonatal Hub: Congenital Infections (classification + guided prescription)', 'NeoPedCalc — Hub neonatal: Infecciones congénitas (clasificación + prescripción guiada)'],
    'Como usar': ['How to use', 'Cómo usar'],
    'Peso do RN (kg)': ['Newborn weight (kg)', 'Peso del RN (kg)'],
    'Idade gestacional ao nascer (semanas)': ['Gestational age at birth (weeks)', 'Edad gestacional al nacer (semanas)'],
    'Idade pós-natal (dias)': ['Postnatal age (days)', 'Edad posnatal (días)'],
    'Ex.: 3,00': ['e.g., 3.00', 'Ej.: 3,00'],
    'Ex.: 39': ['e.g., 39', 'Ej.: 39'],
    'Ex.: 2': ['e.g., 2', 'Ej.: 2'],
    'Escolha a infecção': ['Choose the infection', 'Elija la infección'],
    'Sífilis Congênita': ['Congenital Syphilis', 'Sífilis congénita'],
    'Toxoplasmose Congênita': ['Congenital Toxoplasmosis', 'Toxoplasmosis congénita'],
    'Citomegalovírus (CMV) Congênito': ['Congenital Cytomegalovirus (CMV)', 'Citomegalovirus (CMV) congénito'],
    'Rubéola Congênita (SRC)': ['Congenital Rubella (CRS)', 'Rubéola congénita (SRC)'],
    'RN Exposto ao HIV (profilaxia)': ['HIV-Exposed Newborn (prophylaxis)', 'RN expuesto al VIH (profilaxis)'],
    'Hepatite B (profilaxia ao nascer)': ['Hepatitis B (prophylaxis at birth)', 'Hepatitis B (profilaxis al nacer)'],
    'Nota': ['Note', 'Nota'],
    ': módulo operacional. Ajuste final é clínico e pode variar por protocolo local.': [
      ': operational module. Final adjustment is clinical and may vary according to local protocol.',
      ': módulo operativo. El ajuste final es clínico y puede variar según el protocolo local.'
    ],
    'Erro no app': ['App error', 'Error en la aplicación'],

    // Respostas comuns dos campos
    'Não': ['No', 'No'],
    'Sim': ['Yes', 'Sí'],
    'Não sei': ['Unknown', 'No se sabe'],
    'Não realizado': ['Not performed', 'No realizado'],
    'Não reagente': ['Nonreactive', 'No reactivo'],
    'Reagente': ['Reactive', 'Reactivo'],
    'Negativo': ['Negative', 'Negativo'],
    'Positivo': ['Positive', 'Positivo'],
    'Alta': ['High', 'Alta'],
    'Baixa': ['Low', 'Baja'],
    'Intermediária': ['Intermediate', 'Intermedia']
  });

  // ===== Formulários por infecção
  i18n.register({
    // Sífilis
    'RN sintomático?': ['Symptomatic newborn?', '¿RN sintomático?'],
    'VDRL materno no parto': ['Maternal VDRL at delivery', 'VDRL materno en el parto'],
    'VDRL do RN': ['Newborn VDRL', 'VDRL del RN'],
    'Tratamento materno adequado?': ['Adequate maternal treatment?', '¿Tratamiento materno adecuado?'],
    'Tratamento concluído >30 dias antes do parto?': ['Treatment completed >30 days before delivery?', '¿Tratamiento concluido >30 días antes del parto?'],
    'Queda documentada do VDRL?': ['Documented decline in VDRL titer?', '¿Descenso documentado del VDRL?'],
    'Parceiro tratado?': ['Partner treated?', '¿Pareja tratada?'],
    'Imunoglobulina M treponêmica do recém-nascido': ['Newborn treponemal immunoglobulin M', 'Inmunoglobulina M treponémica del recién nacido'],

    // Toxoplasmose
    'Avidez do IgG (materna)': ['IgG avidity (maternal)', 'Avidez de IgG (materna)'],
    ': “Alta” sugere infecção antiga (em geral >4 meses) e reduz probabilidade de infecção na gestação. “Baixa” sugere infecção recente e aumenta risco fetal.': [
      ': “High” suggests past infection (generally >4 months) and lowers the probability of infection during pregnancy. “Low” suggests recent infection and increases fetal risk.',
      ': “Alta” sugiere infección antigua (en general >4 meses) y reduce la probabilidad de infección durante la gestación. “Baja” sugiere infección reciente y aumenta el riesgo fetal.'
    ],
    'Ultrassonografia/neuroimagem alterada?': ['Abnormal ultrasound/neuroimaging?', '¿Ecografía/neuroimagen alterada?'],
    'Fundo de olho alterado?': ['Abnormal fundus examination?', '¿Fondo de ojo alterado?'],
    'Imunoglobulina M anti-Toxoplasma do recém-nascido': ['Newborn anti-Toxoplasma immunoglobulin M', 'Inmunoglobulina M anti-Toxoplasma del recién nacido'],
    'Imunoglobulina A anti-Toxoplasma do recém-nascido': ['Newborn anti-Toxoplasma immunoglobulin A', 'Inmunoglobulina A anti-Toxoplasma del recién nacido'],
    'Reação em cadeia da polimerase para Toxoplasma': ['Polymerase chain reaction for Toxoplasma', 'Reacción en cadena de la polimerasa para Toxoplasma'],
    'Infecção materna na gestação?': ['Maternal infection during pregnancy?', '¿Infección materna durante la gestación?'],
    'Avidez do IgG materno': ['Maternal IgG avidity', 'Avidez de IgG materna'],
    'Seguimento garantido?': ['Follow-up ensured?', '¿Seguimiento garantizado?'],

    // CMV
    'CMV Congênito': ['Congenital CMV', 'CMV congénito'],
    'Janela diagnóstica': ['Diagnostic window', 'Ventana diagnóstica'],
    ': após': [': after', ': después de'],
    '21 dias': ['21 days', '21 días'],
    ', Reação em cadeia da polimerase positiva não diferencia congênito versus pós-natal.': [
      ', a positive polymerase chain reaction does not distinguish congenital from postnatal infection.',
      ', una reacción en cadena de la polimerasa positiva no diferencia la infección congénita de la posnatal.'
    ],
    'Reação em cadeia da polimerase para citomegalovírus': ['Polymerase chain reaction for cytomegalovirus', 'Reacción en cadena de la polimerasa para citomegalovirus'],
    'Coleta até 21 dias?': ['Sample collected within 21 days?', '¿Muestra recolectada hasta los 21 días?'],
    'Sistema nervoso central alterado?': ['Central nervous system abnormality?', '¿Sistema nervioso central alterado?'],
    'Perda auditiva?': ['Hearing loss?', '¿Pérdida auditiva?'],
    'Sinais sistêmicos?': ['Systemic signs?', '¿Signos sistémicos?'],
    'Consegue via oral?': ['Able to take oral medication?', '¿Tolera la vía oral?'],
    'Observação clínica': ['Clinical note', 'Observación clínica'],
    'Ex.: microcefalia, petéquias, RCIU, etc.': ['e.g., microcephaly, petechiae, IUGR, etc.', 'Ej.: microcefalia, petequias, RCIU, etc.'],

    // Rubéola
    'Rubéola na mãe na gestação?': ['Maternal rubella during pregnancy?', '¿Rubéola materna durante la gestación?'],
    'RN com sinais compatíveis?': ['Newborn with compatible signs?', '¿RN con signos compatibles?'],
    'Imunoglobulina M para rubéola no recém-nascido': ['Rubella immunoglobulin M in the newborn', 'Inmunoglobulina M para rubéola en el recién nacido'],
    'Reação em cadeia da polimerase para rubéola': ['Polymerase chain reaction for rubella', 'Reacción en cadena de la polimerasa para rubéola'],

    // HIV
    'RN Exposto ao HIV — Profilaxia': ['HIV-Exposed Newborn — Prophylaxis', 'RN expuesto al VIH — Profilaxis'],
    'Risco': ['Risk', 'Riesgo'],
    'Baixo risco': ['Low risk', 'Bajo riesgo'],
    'Alto risco': ['High risk', 'Alto riesgo'],
    'Mãe usou raltegravir 2–24h antes do parto?': ['Mother received raltegravir 2–24h before delivery?', '¿La madre usó raltegravir 2–24h antes del parto?'],
    'Observação': ['Note', 'Observación'],
    'Ex.: sem aleitamento, profilaxia iniciada na sala de parto, etc.': ['e.g., no breastfeeding, prophylaxis started in the delivery room, etc.', 'Ej.: sin lactancia materna, profilaxis iniciada en la sala de partos, etc.'],

    // Hepatite B
    'Hepatite B — Profilaxia ao nascer': ['Hepatitis B — Prophylaxis at birth', 'Hepatitis B — Profilaxis al nacer'],
    'HBsAg materno': ['Maternal HBsAg', 'HBsAg materno'],
    'Reagente/positivo': ['Reactive/positive', 'Reactivo/positivo'],
    'Não reagente/negativo': ['Nonreactive/negative', 'No reactivo/negativo'],
    'Desconhecido': ['Unknown', 'Desconocido'],
    'Prematuro <34 semanas ou <2.000 g?': ['Preterm <34 weeks or <2,000 g?', '¿Prematuro <34 semanas o <2.000 g?'],

    // Botões e títulos da saída
    'Classificar & Gerar Condutas': ['Classify & Generate Management', 'Clasificar y generar conductas'],
    'Copiar texto para prontuário': ['Copy text to medical record', 'Copiar texto a la historia clínica'],
    'Imprimir / PDF': ['Print / PDF', 'Imprimir / PDF'],
    'Limpar': ['Clear', 'Limpiar'],
    'Campos vazios assumem 0 (como antes).': ['Empty fields are treated as 0 (as before).', 'Los campos vacíos se consideran 0 (como antes).'],
    'Conduta': ['Management', 'Conducta'],
    'Prescrição guiada': ['Guided prescription', 'Prescripción guiada'],
    'Checklist de Alta': ['Discharge checklist', 'Lista de verificación para el alta'],
    'Texto pronto (copiar no prontuário)': ['Ready-to-use text (copy into the medical record)', 'Texto listo (copiar en la historia clínica)']
  });

  // ===== Referências (descrição dos documentos brasileiros de referência)
  i18n.register({
    'Referências (MS / SBP)': ['References (Brazilian Ministry of Health / Brazilian Society of Pediatrics)', 'Referencias (Ministerio de Salud de Brasil / Sociedad Brasileña de Pediatría)'],
    'Sífilis congênita': ['Congenital syphilis', 'Sífilis congénita'],
    '— Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas de Infecções Sexualmente Transmissíveis (manejo na gestação e conduta neonatal).': [
      '— Brazilian Ministry of Health. Clinical Protocol and Therapeutic Guidelines for Sexually Transmitted Infections (management during pregnancy and neonatal care).',
      '— Ministerio de Salud de Brasil. Protocolo Clínico y Directrices Terapéuticas de Infecciones de Transmisión Sexual (manejo en la gestación y conducta neonatal).'
    ],
    'Toxoplasmose congênita': ['Congenital toxoplasmosis', 'Toxoplasmosis congénita'],
    '— Sociedade Brasileira de Pediatria. Manual/Documento de Toxoplasmose Congênita e diretrizes nacionais.': [
      '— Brazilian Society of Pediatrics. Congenital Toxoplasmosis manual/position document and national guidelines.',
      '— Sociedad Brasileña de Pediatría. Manual/documento de toxoplasmosis congénita y directrices nacionales.'
    ],
    'Citomegalovírus congênito': ['Congenital cytomegalovirus', 'Citomegalovirus congénito'],
    '— confirmação por reação em cadeia da polimerase até 21 dias; tratamento focado em sintomáticos (sistema nervoso central) e monitorização.': [
      '— confirmation by polymerase chain reaction within 21 days; treatment focused on symptomatic infants (central nervous system) and monitoring.',
      '— confirmación por reacción en cadena de la polimerasa hasta los 21 días; tratamiento enfocado en los sintomáticos (sistema nervioso central) y monitorización.'
    ],
    'Rubéola congênita': ['Congenital rubella', 'Rubéola congénita'],
    '— Ministério da Saúde. Síndrome da rubéola congênita e vigilância epidemiológica.': [
      '— Brazilian Ministry of Health. Congenital rubella syndrome and epidemiological surveillance.',
      '— Ministerio de Salud de Brasil. Síndrome de rubéola congénita y vigilancia epidemiológica.'
    ],
    'HIV': ['HIV', 'VIH'],
    '— Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas para manejo da infecção pelo HIV em crianças expostas e profilaxia neonatal.': [
      '— Brazilian Ministry of Health. Clinical Protocol and Therapeutic Guidelines for the management of HIV infection in exposed children and neonatal prophylaxis.',
      '— Ministerio de Salud de Brasil. Protocolo Clínico y Directrices Terapéuticas para el manejo de la infección por VIH en niños expuestos y profilaxis neonatal.'
    ],
    'Hepatite B': ['Hepatitis B', 'Hepatitis B'],
    '— Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas da Hepatite B e recomendações de imunização ao nascer.': [
      '— Brazilian Ministry of Health. Clinical Protocol and Therapeutic Guidelines for Hepatitis B and recommendations for immunization at birth.',
      '— Ministerio de Salud de Brasil. Protocolo Clínico y Directrices Terapéuticas de la hepatitis B y recomendaciones de inmunización al nacer.'
    ]
  });

  // ===== Modal "Como usar"
  i18n.register({
    'Como usar — Infecções congênitas (educativo)': ['How to use — Congenital infections (educational)', 'Cómo usar — Infecciones congénitas (educativo)'],
    'Como Usar Esta Calculadora': ['How to Use This Calculator', 'Cómo usar esta calculadora'],
    'Preencha os Dados do Paciente:': ['Enter the Patient Data:', 'Complete los datos del paciente:'],
    'Informe o peso do recém-nascido (em kg), a idade gestacional ao nascer (em semanas) e a idade pós-natal (em dias).': [
      'Enter the newborn’s weight (in kg), gestational age at birth (in weeks) and postnatal age (in days).',
      'Indique el peso del recién nacido (en kg), la edad gestacional al nacer (en semanas) y la edad posnatal (en días).'
    ],
    'Selecione a Infecção:': ['Select the Infection:', 'Seleccione la infección:'],
    'Escolha no menu suspenso qual infecção congênita deseja avaliar:': ['Choose from the drop-down menu which congenital infection you want to assess:', 'Elija en el menú desplegable qué infección congénita desea evaluar:'],
    'Preencha os Dados Específicos:': ['Enter the Specific Data:', 'Complete los datos específicos:'],
    'Para cada tipo de infecção, preencha os campos específicos que aparecerão na tela, como resultados de exames, sintomas do recém-nascido, histórico materno, etc.': [
      'For each type of infection, fill in the specific fields shown on the screen, such as test results, newborn symptoms, maternal history, etc.',
      'Para cada tipo de infección, complete los campos específicos que aparecerán en la pantalla, como resultados de exámenes, síntomas del recién nacido, antecedentes maternos, etc.'
    ],
    'Calcule:': ['Calculate:', 'Calcule:'],
    'Clique no botão "Calcular" para obter a classificação da infecção e a prescrição guiada.': [
      'Click the "Classify & Generate Management" button to obtain the infection classification and the guided prescription.',
      'Haga clic en el botón "Clasificar y generar conductas" para obtener la clasificación de la infección y la prescripción guiada.'
    ],
    'Visualize os Resultados:': ['View the Results:', 'Visualice los resultados:'],
    'Os resultados incluirão a classificação (definida, provável, possível, etc.), a conduta recomendada, a prescrição sugerida e orientações para alta.': [
      'The results will include the classification (definite, probable, possible, etc.), the recommended management, the suggested prescription and discharge guidance.',
      'Los resultados incluirán la clasificación (definida, probable, posible, etc.), la conducta recomendada, la prescripción sugerida y orientaciones para el alta.'
    ],
    'Copie ou Imprima:': ['Copy or Print:', 'Copie o imprima:'],
    'Use os botões "Copiar" ou "Imprimir" para salvar o relatório no prontuário eletrônico.': [
      'Use the "Copy" or "Print" buttons to save the report to the electronic medical record.',
      'Use los botones "Copiar" o "Imprimir" para guardar el informe en la historia clínica electrónica.'
    ],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Esta calculadora auxilia na classificação e prescrição guiada para infecções congênitas em recém-nascidos, baseada em protocolos clínicos estabelecidos. Ela ajuda na tomada de decisão clínica, fornecendo orientações sobre diagnóstico, tratamento e seguimento.': [
      'This calculator assists with the classification and guided prescription for congenital infections in newborns, based on established clinical protocols. It supports clinical decision-making by providing guidance on diagnosis, treatment and follow-up.',
      'Esta calculadora ayuda en la clasificación y la prescripción guiada de las infecciones congénitas en recién nacidos, basada en protocolos clínicos establecidos. Apoya la toma de decisiones clínicas, brindando orientación sobre diagnóstico, tratamiento y seguimiento.'
    ],
    'Infecções Disponíveis': ['Available Infections', 'Infecciones disponibles'],
    'Sífilis Congênita:': ['Congenital Syphilis:', 'Sífilis congénita:'],
    'Classificação baseada em sintomas do RN, VDRL materno e do RN, tratamento materno, e exames complementares.': [
      'Classification based on newborn symptoms, maternal and newborn VDRL, maternal treatment and additional tests.',
      'Clasificación basada en los síntomas del RN, el VDRL materno y del RN, el tratamiento materno y los exámenes complementarios.'
    ],
    'Toxoplasmose Congênita:': ['Congenital Toxoplasmosis:', 'Toxoplasmosis congénita:'],
    'Avaliação considerando sintomas, exames de imagem, fundo de olho, sorologia e avidez do IgG materno.': [
      'Assessment considering symptoms, imaging, fundus examination, serology and maternal IgG avidity.',
      'Evaluación que considera síntomas, estudios de imagen, fondo de ojo, serología y avidez de IgG materna.'
    ],
    'CMV Congênito:': ['Congenital CMV:', 'CMV congénito:'],
    'Classificação baseada em PCR, janela diagnóstica (até 21 dias), sintomas e comprometimento de sistemas.': [
      'Classification based on PCR, diagnostic window (up to 21 days), symptoms and organ-system involvement.',
      'Clasificación basada en PCR, ventana diagnóstica (hasta 21 días), síntomas y compromiso de sistemas.'
    ],
    'Rubéola Congênita:': ['Congenital Rubella:', 'Rubéola congénita:'],
    'Avaliação considerando infecção materna na gestação, sinais no RN e exames sorológicos.': [
      'Assessment considering maternal infection during pregnancy, signs in the newborn and serologic tests.',
      'Evaluación que considera la infección materna durante la gestación, los signos en el RN y los exámenes serológicos.'
    ],
    'HIV:': ['HIV:', 'VIH:'],
    'Protocolo de profilaxia para recém-nascidos expostos ao HIV.': ['Prophylaxis protocol for HIV-exposed newborns.', 'Protocolo de profilaxis para recién nacidos expuestos al VIH.'],
    'Hepatite B:': ['Hepatitis B:', 'Hepatitis B:'],
    'Protocolo de profilaxia ao nascer para prevenção de transmissão vertical.': ['Prophylaxis protocol at birth to prevent vertical transmission.', 'Protocolo de profilaxis al nacer para la prevención de la transmisión vertical.'],
    'Dados Necessários': ['Required Data', 'Datos necesarios'],
    'Dados Gerais (obrigatórios):': ['General Data (required):', 'Datos generales (obligatorios):'],
    '• Peso do recém-nascido (kg)': ['• Newborn weight (kg)', '• Peso del recién nacido (kg)'],
    '• Idade gestacional ao nascer (semanas)': ['• Gestational age at birth (weeks)', '• Edad gestacional al nacer (semanas)'],
    '• Idade pós-natal (dias)': ['• Postnatal age (days)', '• Edad posnatal (días)'],
    'Dados Específicos:': ['Specific Data:', 'Datos específicos:'],
    'Variam conforme o tipo de infecção selecionada. Preencha todos os campos disponíveis para obter uma classificação mais precisa.': [
      'These vary according to the selected type of infection. Fill in all available fields to obtain a more accurate classification.',
      'Varían según el tipo de infección seleccionada. Complete todos los campos disponibles para obtener una clasificación más precisa.'
    ],
    'Interpretação dos Resultados': ['Interpreting the Results', 'Interpretación de los resultados'],
    'Classificação:': ['Classification:', 'Clasificación:'],
    'A calculadora fornece uma classificação da infecção (definida, provável, possível, etc.) baseada nos critérios clínicos e laboratoriais informados.': [
      'The calculator provides a classification of the infection (definite, probable, possible, etc.) based on the clinical and laboratory criteria entered.',
      'La calculadora ofrece una clasificación de la infección (definida, probable, posible, etc.) basada en los criterios clínicos y de laboratorio informados.'
    ],
    'Conduta:': ['Management:', 'Conducta:'],
    'Orientações sobre a conduta recomendada para o caso.': ['Guidance on the recommended management for the case.', 'Orientaciones sobre la conducta recomendada para el caso.'],
    'Prescrição:': ['Prescription:', 'Prescripción:'],
    'Sugestão de prescrição medicamentosa baseada no peso e idade do paciente.': ['Suggested drug prescription based on the patient’s weight and age.', 'Sugerencia de prescripción farmacológica basada en el peso y la edad del paciente.'],
    'Alta:': ['Discharge:', 'Alta:'],
    'Critérios e orientações para alta hospitalar quando aplicável.': ['Criteria and guidance for hospital discharge, when applicable.', 'Criterios y orientaciones para el alta hospitalaria, cuando corresponda.'],
    'Considerações Importantes': ['Important Considerations', 'Consideraciones importantes'],
    'Esta é uma ferramenta de apoio à decisão clínica e não substitui o julgamento médico.': ['This is a clinical decision-support tool and does not replace medical judgment.', 'Esta es una herramienta de apoyo a la decisión clínica y no sustituye el juicio médico.'],
    'O ajuste final da prescrição deve ser feito pelo médico responsável, considerando o protocolo local e as particularidades de cada caso.': [
      'The final adjustment of the prescription must be made by the attending physician, considering the local protocol and the particulars of each case.',
      'El ajuste final de la prescripción debe realizarlo el médico responsable, considerando el protocolo local y las particularidades de cada caso.'
    ],
    'Alguns exames podem não estar disponíveis imediatamente; a calculadora considera essa situação.': [
      'Some tests may not be available immediately; the calculator takes this into account.',
      'Algunos exámenes pueden no estar disponibles de inmediato; la calculadora considera esta situación.'
    ],
    'Para CMV, é fundamental respeitar a janela diagnóstica de 21 dias para diferenciação entre infecção congênita e pós-natal.': [
      'For CMV, it is essential to respect the 21-day diagnostic window to differentiate congenital from postnatal infection.',
      'Para el CMV, es fundamental respetar la ventana diagnóstica de 21 días para diferenciar la infección congénita de la posnatal.'
    ],
    'Para toxoplasmose, a avidez do IgG materno é um parâmetro importante para avaliar o risco de infecção na gestação.': [
      'For toxoplasmosis, maternal IgG avidity is an important parameter for assessing the risk of infection during pregnancy.',
      'Para la toxoplasmosis, la avidez de IgG materna es un parámetro importante para evaluar el riesgo de infección durante la gestación.'
    ],
    'Sempre consulte os protocolos locais e atualizações das diretrizes clínicas.': ['Always consult local protocols and updates to clinical guidelines.', 'Consulte siempre los protocolos locales y las actualizaciones de las guías clínicas.'],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Baseada em protocolos gerais; pode não refletir variações regionais ou protocolos específicos de cada instituição.': [
      'Based on general protocols; may not reflect regional variations or institution-specific protocols.',
      'Basada en protocolos generales; puede no reflejar variaciones regionales ni protocolos específicos de cada institución.'
    ],
    'Requer interpretação clínica e ajuste individualizado.': ['Requires clinical interpretation and individualized adjustment.', 'Requiere interpretación clínica y ajuste individualizado.'],
    'Não substitui a avaliação clínica completa e o acompanhamento multidisciplinar.': ['Does not replace a complete clinical assessment and multidisciplinary follow-up.', 'No sustituye la evaluación clínica completa ni el seguimiento multidisciplinario.'],
    'Alguns casos complexos podem necessitar de avaliação especializada adicional.': ['Some complex cases may require additional specialist evaluation.', 'Algunos casos complejos pueden requerir una evaluación especializada adicional.'],
    'Nota:': ['Note:', 'Nota:'],
    'Esta calculadora é um módulo operacional. O ajuste final é clínico e pode variar por protocolo local. Sempre consulte as diretrizes atualizadas e os protocolos da sua instituição.': [
      'This calculator is an operational module. Final adjustment is clinical and may vary according to local protocol. Always consult current guidelines and your institution’s protocols.',
      'Esta calculadora es un módulo operativo. El ajuste final es clínico y puede variar según el protocolo local. Consulte siempre las guías actualizadas y los protocolos de su institución.'
    ]
  });

  // ===== Resultado: classificações (selo/pílula e linha "Classificação" do relatório)
  i18n.register({
    'ALTO RISCO / TRATAR': ['HIGH RISK / TREAT', 'ALTO RIESGO / TRATAR'],
    'POSSÍVEL / CONDUTA CONSERVADORA': ['POSSIBLE / CONSERVATIVE MANAGEMENT', 'POSIBLE / CONDUCTA CONSERVADORA'],
    'BAIXO RISCO / SEGUIMENTO': ['LOW RISK / FOLLOW-UP', 'BAJO RIESGO / SEGUIMIENTO'],
    'CONFIRMADA — TRATAR 12 MESES': ['CONFIRMED — TREAT FOR 12 MONTHS', 'CONFIRMADA — TRATAR 12 MESES'],
    'PROVÁVEL — TRATAR 12 MESES': ['PROBABLE — TREAT FOR 12 MONTHS', 'PROBABLE — TRATAR 12 MESES'],
    'PROVÁVEL (conservador) — considerar tratar': ['PROBABLE (conservative) — consider treatment', 'PROBABLE (conservador) — considerar tratar'],
    'EXPOSIÇÃO SEM EVIDÊNCIA — acompanhar': ['EXPOSURE WITHOUT EVIDENCE — follow up', 'EXPOSICIÓN SIN EVIDENCIA — seguimiento'],
    'SEM CONFIRMAÇÃO — investigar ou descartar': ['NOT CONFIRMED — investigate or rule out', 'SIN CONFIRMACIÓN — investigar o descartar'],
    'CITOMEGALOVÍRUS CONGÊNITO SINTOMÁTICO (SISTEMA NERVOSO CENTRAL POSITIVO) — considerar tratar': ['SYMPTOMATIC CONGENITAL CYTOMEGALOVIRUS (CENTRAL NERVOUS SYSTEM INVOLVEMENT) — consider treatment', 'CITOMEGALOVIRUS CONGÉNITO SINTOMÁTICO (SISTEMA NERVIOSO CENTRAL POSITIVO) — considerar tratar'],
    'CITOMEGALOVÍRUS CONGÊNITO SINTOMÁTICO — avaliar tratar': ['SYMPTOMATIC CONGENITAL CYTOMEGALOVIRUS — evaluate for treatment', 'CITOMEGALOVIRUS CONGÉNITO SINTOMÁTICO — evaluar tratar'],
    'CITOMEGALOVÍRUS CONGÊNITO ASSINTOMÁTICO — seguimento': ['ASYMPTOMATIC CONGENITAL CYTOMEGALOVIRUS — follow-up', 'CITOMEGALOVIRUS CONGÉNITO ASINTOMÁTICO — seguimiento'],
    'REAÇÃO EM CADEIA DA POLIMERASE POSITIVA FORA DA JANELA (ATÉ 21 DIAS) — NÃO CONFIRMA CONGÊNITO': ['POSITIVE POLYMERASE CHAIN REACTION OUTSIDE THE WINDOW (UP TO 21 DAYS) — DOES NOT CONFIRM CONGENITAL INFECTION', 'REACCIÓN EN CADENA DE LA POLIMERASA POSITIVA FUERA DE LA VENTANA (HASTA 21 DÍAS) — NO CONFIRMA INFECCIÓN CONGÉNITA'],
    'REAÇÃO EM CADEIA DA POLIMERASE NEGATIVA — citomegalovírus congênito improvável': ['NEGATIVE POLYMERASE CHAIN REACTION — congenital cytomegalovirus unlikely', 'REACCIÓN EN CADENA DE LA POLIMERASA NEGATIVA — citomegalovirus congénito improbable'],
    'RUBÉOLA CONGÊNITA CONFIRMADA — notificar e rastrear': ['CONFIRMED CONGENITAL RUBELLA — report and screen', 'RUBÉOLA CONGÉNITA CONFIRMADA — notificar y tamizar'],
    'SUSPEITA FORTE — investigar e notificar': ['STRONG SUSPICION — investigate and report', 'SOSPECHA FUERTE — investigar y notificar'],
    'EXPOSIÇÃO — investigar': ['EXPOSURE — investigate', 'EXPOSICIÓN — investigar'],
    'BAIXA PROBABILIDADE': ['LOW PROBABILITY', 'BAJA PROBABILIDAD'],
    'BAIXO RISCO — zidovudina por 28 dias': ['LOW RISK — zidovudine for 28 days', 'BAJO RIESGO — zidovudina durante 28 días'],
    'ALTO RISCO (idade gestacional menor que 34 semanas) — zidovudina por 28 dias (operacional)': ['HIGH RISK (gestational age less than 34 weeks) — zidovudine for 28 days (operational)', 'ALTO RIESGO (edad gestacional menor de 34 semanas) — zidovudina durante 28 días (operativo)'],
    'ALTO RISCO — zidovudina + lamivudina + raltegravir por 28 dias': ['HIGH RISK — zidovudine + lamivudine + raltegravir for 28 days', 'ALTO RIESGO — zidovudina + lamivudina + raltegravir durante 28 días'],
    'ALTO RISCO — zidovudina + lamivudina + nevirapina por 28 dias': ['HIGH RISK — zidovudine + lamivudine + nevirapine for 28 days', 'ALTO RIESGO — zidovudina + lamivudina + nevirapina durante 28 días'],
    'PROFILAXIA COMPLETA — vacina + imunoglobulina específica': ['FULL PROPHYLAXIS — vaccine + hepatitis B immune globulin', 'PROFILAXIS COMPLETA — vacuna + inmunoglobulina específica'],
    'HBsAg desconhecido — vacina imediata + considerar imunoglobulina específica': ['HBsAg unknown — immediate vaccine + consider hepatitis B immune globulin', 'HBsAg desconocido — vacuna inmediata + considerar inmunoglobulina específica'],
    'PROFILAXIA DE ROTINA — vacina ao nascer': ['ROUTINE PROPHYLAXIS — vaccine at birth', 'PROFILAXIS DE RUTINA — vacuna al nacer']
  });

  // ===== Resultado: conduta e checklist de alta (trechos entre as tags)
  i18n.register({
    'Investigar': ['Investigate', 'Investigar'],
    'conforme protocolo local.': ['according to local protocol.', 'según el protocolo local.'],
    'Tratar': ['Treat', 'Tratar'],
    ': penicilina cristalina por 10 dias.': [': aqueous crystalline penicillin G for 10 days.', ': penicilina G cristalina durante 10 días.'],
    'Estratégia segura': ['Safe strategy', 'Estrategia segura'],
    ': tratar como possível ou penicilina benzatina dose única (serviço/seguimento).': [
      ': treat as possible, or benzathine penicillin G single dose (depending on service/follow-up).',
      ': tratar como posible o penicilina G benzatínica en dosis única (según servicio/seguimiento).'
    ],
    'Sem tratamento': ['No treatment', 'Sin tratamiento'],
    'agora. Seguimento com VDRL seriado.': ['now. Follow-up with serial VDRL.', 'por ahora. Seguimiento con VDRL seriado.'],
    'Concluir 10 dias': ['Complete 10 days', 'Completar 10 días'],
    'de penicilina.': ['of penicillin.', 'de penicilina.'],
    'VDRL seriado': ['Serial VDRL', 'VDRL seriado'],
    ': 1, 3, 6 e 12 meses.': [': 1, 3, 6 and 12 months.', ': 1, 3, 6 y 12 meses.'],
    '(baixo risco).': ['(low risk).', '(bajo riesgo).'],
    'Estadiar': ['Staging workup', 'Estadificar'],
    ': hemograma e função hepática, neuroimagem/ultrassonografia, fundo de olho.': [': complete blood count and liver function, neuroimaging/ultrasound, fundus examination.', ': hemograma y función hepática, neuroimagen/ecografía, fondo de ojo.'],
    'Avidez do IgG materno alta': ['High maternal IgG avidity', 'Avidez de IgG materna alta'],
    'Avidez do IgG materno baixa': ['Low maternal IgG avidity', 'Avidez de IgG materna baja'],
    'Avidez do IgG materno intermediária': ['Intermediate maternal IgG avidity', 'Avidez de IgG materna intermedia'],
    ': sugere infecção antiga; reduz probabilidade de infecção durante a gestação.': [': suggests past infection; lowers the probability of infection during pregnancy.', ': sugiere infección antigua; reduce la probabilidad de infección durante la gestación.'],
    ': aumenta suspeita de infecção recente na gestação (interpretar com o contexto clínico).': [': raises suspicion of recent infection during pregnancy (interpret in the clinical context).', ': aumenta la sospecha de infección reciente durante la gestación (interpretar según el contexto clínico).'],
    ': não realizada.': [': not performed.', ': no realizada.'],
    'se sem evidência. Seguir imunoglobulina G seriada.': ['if there is no evidence. Follow serial immunoglobulin G.', 'si no hay evidencia. Seguir con inmunoglobulina G seriada.'],
    'Plano 12 meses': ['12-month plan', 'Plan de 12 meses'],
    'com pirimetamina + sulfadiazina + leucovorina.': ['with pyrimethamine + sulfadiazine + leucovorin (folinic acid).', 'con pirimetamina + sulfadiazina + leucovorina (ácido folínico).'],
    'Hemograma': ['Complete blood count', 'Hemograma'],
    'seriado (neutrófilos).': ['serially (neutrophils).', 'seriado (neutrófilos).'],
    'Imunoglobulina G seriada': ['Serial immunoglobulin G', 'Inmunoglobulina G seriada'],
    'até negativar (até 12 meses).': ['until negative (up to 12 months).', 'hasta su negativización (hasta 12 meses).'],
    ': hemograma, transaminases, neuroimagem, audiologia e oftalmologia.': [': complete blood count, transaminases, neuroimaging, audiology and ophthalmology.', ': hemograma, transaminasas, neuroimagen, audiología y oftalmología.'],
    'Atenção': ['Caution', 'Atención'],
    ': reação em cadeia da polimerase fora da janela não confirma congênito.': [': a polymerase chain reaction outside the window does not confirm congenital infection.', ': una reacción en cadena de la polimerasa fuera de la ventana no confirma infección congénita.'],
    'Monitorizar': ['Monitor', 'Monitorizar'],
    'hemograma e transaminases.': ['complete blood count and transaminases.', 'hemograma y transaminasas.'],
    'Audiologia': ['Audiology', 'Audiología'],
    'seriada.': ['(serial).', 'seriada.'],
    'Sem antiviral específico': ['No specific antiviral', 'Sin antiviral específico'],
    '. Rastrear cardiologia, oftalmologia e audição.': ['. Screen with cardiology, ophthalmology and hearing evaluations.', '. Tamizaje en cardiología, oftalmología y audición.'],
    'Notificar': ['Report', 'Notificar'],
    'e rastrear cardiologia, oftalmologia e audição.': ['to public health and screen with cardiology, ophthalmology and hearing evaluations.', 'y tamizar en cardiología, oftalmología y audición.'],
    'Reavaliar se surgirem sinais compatíveis.': ['Reassess if compatible signs appear.', 'Reevaluar si aparecen signos compatibles.'],
    'Completar 28 dias': ['Complete 28 days', 'Completar 28 días'],
    'de profilaxia.': ['of prophylaxis.', 'de profilaxis.'],
    'Risco:': ['Risk:', 'Riesgo:'],
    'BAIXO': ['LOW', 'BAJO'],
    'ALTO': ['HIGH', 'ALTO'],
    'Vacina Hepatite B': ['Hepatitis B vaccine', 'Vacuna contra la hepatitis B'],
    'ao nascer (ideal até 12 horas).': ['at birth (ideally within 12 hours).', 'al nacer (idealmente hasta las 12 horas).'],
    'Imunoglobulina específica anti-hepatite B 0,5 mL': ['Hepatitis B immune globulin (HBIG) 0.5 mL', 'Inmunoglobulina específica contra la hepatitis B 0,5 mL'],
    'intramuscular em sítio diferente.': ['intramuscularly at a different site.', 'intramuscular en un sitio diferente.'],
    'Prematuro com menos de 2 kg: pode exigir esquema diferenciado conforme serviço.': ['Preterm infant weighing less than 2 kg: may require a different schedule according to the service.', 'Prematuro con menos de 2 kg: puede requerir un esquema diferenciado según el servicio.'],
    'Vacina Hepatite B (monovalente) intramuscular: 0,5 mL ao nascer (ideal até 12 horas).': ['Hepatitis B vaccine (monovalent) intramuscular: 0.5 mL at birth (ideally within 12 hours).', 'Vacuna contra la hepatitis B (monovalente) intramuscular: 0,5 mL al nacer (idealmente hasta las 12 horas).'],
    'Imunoglobulina específica anti-hepatite B intramuscular: 0,5 mL, em sítio diferente (ideal até 12–24 horas).': ['Hepatitis B immune globulin (HBIG) intramuscular: 0.5 mL, at a different site (ideally within 12–24 hours).', 'Inmunoglobulina específica contra la hepatitis B intramuscular: 0,5 mL, en un sitio diferente (idealmente hasta las 12–24 horas).'],
    'Sem prescrição neste cenário.': ['No prescription in this scenario.', 'Sin prescripción en este escenario.'],
    'Sem prescrição automática neste cenário.': ['No automatic prescription in this scenario.', 'Sin prescripción automática en este escenario.'],
    'Sem prescrição antiviral específica.': ['No specific antiviral prescription.', 'Sin prescripción antiviral específica.']
  });

  // ===== Prescrição e texto pronto (<pre>): o núcleo traduz linha a linha, em trechos (": ", " | ", " - "...)
  i18n.register({
    'SÍFILIS CONGÊNITA — AVALIAÇÃO E CONDUTA': ['CONGENITAL SYPHILIS — ASSESSMENT AND MANAGEMENT', 'SÍFILIS CONGÉNITA — EVALUACIÓN Y CONDUCTA'],
    'TOXOPLASMOSE CONGÊNITA — AVALIAÇÃO E CONDUTA': ['CONGENITAL TOXOPLASMOSIS — ASSESSMENT AND MANAGEMENT', 'TOXOPLASMOSIS CONGÉNITA — EVALUACIÓN Y CONDUCTA'],
    'CITOMEGALOVÍRUS — AVALIAÇÃO E CONDUTA': ['CYTOMEGALOVIRUS — ASSESSMENT AND MANAGEMENT', 'CITOMEGALOVIRUS — EVALUACIÓN Y CONDUCTA'],
    'RUBÉOLA CONGÊNITA — AVALIAÇÃO E CONDUTA': ['CONGENITAL RUBELLA — ASSESSMENT AND MANAGEMENT', 'RUBÉOLA CONGÉNITA — EVALUACIÓN Y CONDUCTA'],
    'RECÉM-NASCIDO EXPOSTO AO HIV — PROFILAXIA': ['HIV-EXPOSED NEWBORN — PROPHYLAXIS', 'RECIÉN NACIDO EXPUESTO AL VIH — PROFILAXIS'],
    'HEPATITE B — PROFILAXIA AO NASCER': ['HEPATITIS B — PROPHYLAXIS AT BIRTH', 'HEPATITIS B — PROFILAXIS AL NACER'],
    'PRESCRIÇÃO GUIADA': ['GUIDED PRESCRIPTION', 'PRESCRIPCIÓN GUIADA'],
    'CHECKLIST DE ALTA': ['DISCHARGE CHECKLIST', 'LISTA DE VERIFICACIÓN PARA EL ALTA'],
    'REFERÊNCIAS (MS/SBP)': ['REFERENCES (Brazilian Ministry of Health/Brazilian Society of Pediatrics)', 'REFERENCIAS (Ministerio de Salud de Brasil/Sociedad Brasileña de Pediatría)'],
    '(não aplicável)': ['(not applicable)', '(no aplica)'],
    'Classificação': ['Classification', 'Clasificación'],
    'Peso do recém-nascido': ['Newborn weight', 'Peso del recién nacido'],
    'Idade gestacional': ['Gestational age', 'Edad gestacional'],
    'Idade pós-natal': ['Postnatal age', 'Edad posnatal'],
    'semanas': ['weeks', 'semanas'],
    'dias': ['days', 'días'],
    'meses': ['months', 'meses'],
    'VDRL do recém-nascido': ['Newborn VDRL', 'VDRL del recién nacido'],
    'Diferença em diluições': ['Difference in dilutions', 'Diferencia en diluciones'],
    'Recém-nascido sintomático': ['Symptomatic newborn', 'Recién nacido sintomático'],
    'Tratamento materno adequado': ['Adequate maternal treatment', 'Tratamiento materno adecuado'],
    'Concluído há mais de 30 dias': ['Completed more than 30 days before', 'Concluido hace más de 30 días'],
    'Queda documentada do VDRL': ['Documented decline in VDRL titer', 'Descenso documentado del VDRL'],
    'Parceiro tratado': ['Partner treated', 'Pareja tratada'],
    'Ultrassonografia/neuroimagem': ['Ultrasound/neuroimaging', 'Ecografía/neuroimagen'],
    'Fundo de olho': ['Fundus examination', 'Fondo de ojo'],
    'Infecção materna na gestação': ['Maternal infection during pregnancy', 'Infección materna durante la gestación'],
    'Seguimento garantido': ['Follow-up ensured', 'Seguimiento garantizado'],
    'Coleta até 21 dias': ['Sample collected within 21 days', 'Muestra recolectada hasta los 21 días'],
    'Janela diagnóstica adequada': ['Adequate diagnostic window', 'Ventana diagnóstica adecuada'],
    'Sistema nervoso central': ['Central nervous system', 'Sistema nervioso central'],
    'Perda auditiva': ['Hearing loss', 'Pérdida auditiva'],
    'Sinais sistêmicos': ['Systemic signs', 'Signos sistémicos'],
    'Rubéola materna na gestação': ['Maternal rubella during pregnancy', 'Rubéola materna durante la gestación'],
    'Sinais compatíveis no recém-nascido': ['Compatible signs in the newborn', 'Signos compatibles en el recién nacido'],
    'Consegue via oral': ['Able to take oral medication', 'Tolera la vía oral'],
    'Uso materno de raltegravir 2–24 horas antes do parto': ['Maternal raltegravir use 2–24 hours before delivery', 'Uso materno de raltegravir 2–24 horas antes del parto'],
    'Prematuro com menos de 34 semanas ou menos de 2.000 g': ['Preterm less than 34 weeks or less than 2,000 g', 'Prematuro de menos de 34 semanas o menos de 2.000 g'],
    'Sem tratamento (baixo risco).': ['No treatment (low risk).', 'Sin tratamiento (bajo riesgo).'],
    '1, 3, 6 e 12 meses.': ['1, 3, 6 and 12 months.', '1, 3, 6 y 12 meses.'],
    'Concluir 10 dias de penicilina.': ['Complete 10 days of penicillin.', 'Completar 10 días de penicilina.'],
    'Plano 12 meses com pirimetamina + sulfadiazina + leucovorina.': ['12-month plan with pyrimethamine + sulfadiazine + leucovorin (folinic acid).', 'Plan de 12 meses con pirimetamina + sulfadiazina + leucovorina (ácido folínico).'],
    'Hemograma seriado (neutrófilos).': ['Serial complete blood count (neutrophils).', 'Hemograma seriado (neutrófilos).'],
    'Imunoglobulina G seriada até negativar (até 12 meses).': ['Serial immunoglobulin G until negative (up to 12 months).', 'Inmunoglobulina G seriada hasta su negativización (hasta 12 meses).'],
    'Monitorizar hemograma e transaminases.Audiologia seriada.': ['Monitor complete blood count and transaminases. Serial audiology assessments.', 'Monitorizar hemograma y transaminasas. Audiología seriada.'],
    'reação em cadeia da polimerase fora da janela não confirma congênito.Audiologia seriada.': ['a polymerase chain reaction outside the window does not confirm congenital infection. Serial audiology assessments.', 'una reacción en cadena de la polimerasa fuera de la ventana no confirma infección congénita. Audiología seriada.'],
    'Audiologia seriada.': ['Serial audiology assessments.', 'Audiología seriada.'],
    'Notificar e rastrear cardiologia, oftalmologia e audição.': ['Report to public health and screen with cardiology, ophthalmology and hearing evaluations.', 'Notificar y tamizar en cardiología, oftalmología y audición.'],
    'Completar 28 dias de profilaxia.': ['Complete 28 days of prophylaxis.', 'Completar 28 días de profilaxis.'],
    'Vacina Hepatite B ao nascer (ideal até 12 horas).': ['Hepatitis B vaccine at birth (ideally within 12 hours).', 'Vacuna contra la hepatitis B al nacer (idealmente hasta las 12 horas).'],
    'Imunoglobulina específica anti-hepatite B 0,5 mL intramuscular em sítio diferente.': ['Hepatitis B immune globulin (HBIG) 0.5 mL intramuscularly at a different site.', 'Inmunoglobulina específica contra la hepatitis B 0,5 mL intramuscular en un sitio diferente.'],
    'Prematuro com menos de 2 kg': ['Preterm infant weighing less than 2 kg', 'Prematuro con menos de 2 kg'],
    'pode exigir esquema diferenciado conforme serviço.': ['may require a different schedule according to the service.', 'puede requerir un esquema diferenciado según el servicio.'],

    // Linhas da prescrição
    'Menos de 7 dias': ['Less than 7 days of age', 'Menos de 7 días de vida'],
    'A partir de 7 dias': ['7 days of age or older', 'A partir de 7 días de vida'],
    'a cada 12 horas': ['every 12 hours', 'cada 12 horas'],
    'a cada 8 horas': ['every 8 hours', 'cada 8 horas'],
    'Duração': ['Duration', 'Duración'],
    'Opção padrão': ['Standard option', 'Opción estándar'],
    'Alternativa': ['Alternative', 'Alternativa'],
    'Penicilina benzatina 50.000 UI/kg intramuscular, dose única.': ['Benzathine penicillin G 50,000 IU/kg intramuscular, single dose.', 'Penicilina G benzatínica 50.000 UI/kg intramuscular, dosis única.'],
    'Sulfadiazina': ['Sulfadiazine', 'Sulfadiazina'],
    'Pirimetamina': ['Pyrimethamine', 'Pirimetamina'],
    '- Ataque (2 dias)': ['- Loading dose (2 days)', '- Dosis de carga (2 días)'],
    '- Manutenção': ['- Maintenance', '- Mantenimiento'],
    'Leucovorina': ['Leucovorin (folinic acid)', 'Leucovorina (ácido folínico)'],
    'Se via oral': ['If oral route', 'Si vía oral'],
    'Se via intravenosa': ['If intravenous route', 'Si vía intravenosa'],
    'Zidovudina via oral': ['Zidovudine orally', 'Zidovudina por vía oral'],
    'Lamivudina via oral': ['Lamivudine orally', 'Lamivudina por vía oral'],
    'Raltegravir via oral': ['Raltegravir orally', 'Raltegravir por vía oral'],
    'Nevirapina via oral': ['Nevirapine orally', 'Nevirapina por vía oral'],
    '- 0–14 dias': ['- 0–14 days', '- 0–14 días'],
    '- 15–28 dias': ['- 15–28 days', '- 15–28 días'],
    '- 1ª semana': ['- Week 1', '- 1.ª semana'],
    '- 2ª–4ª semana': ['- Weeks 2–4', '- 2.ª–4.ª semana'],
    'Vacina Hepatite B (monovalente) intramuscular': ['Hepatitis B vaccine (monovalent) intramuscular', 'Vacuna contra la hepatitis B (monovalente) intramuscular'],
    '0,5 mL ao nascer (ideal até 12 horas).': ['0.5 mL at birth (ideally within 12 hours).', '0,5 mL al nacer (idealmente hasta las 12 horas).'],
    'Imunoglobulina específica anti-hepatite B intramuscular': ['Hepatitis B immune globulin (HBIG) intramuscular', 'Inmunoglobulina específica contra la hepatitis B intramuscular'],
    '0,5 mL, em sítio diferente (ideal até 12–24 horas).': ['0.5 mL, at a different site (ideally within 12–24 hours).', '0,5 mL, en un sitio diferente (idealmente hasta las 12–24 horas).'],
  });

  // ===== Trechos com valores calculados (doses): os números são mantidos; no inglês, "." de milhar vira ","
  var YES_NO = { 'Sim': ['Yes', 'Sí'], 'Não': ['No', 'No'], 'Não sei': ['Unknown', 'No se sabe'] };
  function answer(value, index) { return YES_NO[value] ? YES_NO[value][index] : value; }
  function usThousands(value) { return value.replace(/\./g, ','); }

  i18n.registerPatterns([
    [/^Penicilina G cristalina 50\.000 UI\/kg\/dose IV \(≈ ([\d.]+) UI por dose\)( por 10 dias\.)?$/,
      function (m, ui, days) { return 'Aqueous crystalline penicillin G 50,000 IU/kg/dose IV (≈ ' + usThousands(ui) + ' IU per dose)' + (days ? ' for 10 days.' : ''); },
      function (m, ui, days) { return 'Penicilina G cristalina (acuosa) 50.000 UI/kg/dosis IV (≈ ' + ui + ' UI por dosis)' + (days ? ' durante 10 días.' : ''); }],
    [/^50 mg\/kg\/dose via oral a cada 12 horas → (\d+) mg por dose$/,
      '50 mg/kg/dose orally every 12 hours → $1 mg per dose', '50 mg/kg/dosis por vía oral cada 12 horas → $1 mg por dosis'],
    [/^2 mg\/kg\/dia dividido a cada 12 horas → (\d+) mg a cada 12 horas por 2 dias$/,
      '2 mg/kg/day divided every 12 hours → $1 mg every 12 hours for 2 days', '2 mg/kg/día dividido cada 12 horas → $1 mg cada 12 horas durante 2 días'],
    [/^1 mg\/kg\/dia → (\d+) mg uma vez ao dia$/,
      '1 mg/kg/day → $1 mg once daily', '1 mg/kg/día → $1 mg una vez al día'],
    [/^(\d+) mg via oral, três vezes por semana$/,
      '$1 mg orally, three times a week', '$1 mg por vía oral, tres veces por semana'],
    [/^Valganciclovir 16 mg\/kg\/dose via oral a cada 12 horas → (\d+) mg por dose$/,
      'Valganciclovir 16 mg/kg/dose orally every 12 hours → $1 mg per dose', 'Valganciclovir 16 mg/kg/dosis por vía oral cada 12 horas → $1 mg por dosis'],
    [/^Ganciclovir 6 mg\/kg\/dose intravenoso a cada 12 horas → (\d+) mg por dose$/,
      'Ganciclovir 6 mg/kg/dose intravenously every 12 hours → $1 mg per dose', 'Ganciclovir 6 mg/kg/dosis intravenoso cada 12 horas → $1 mg por dosis'],
    [/^2 mg\/kg\/dose a cada 12 horas → (\d+) mg por dose \(usar se idade gestacional igual ou maior que 34 semanas\)$/,
      '2 mg/kg/dose every 12 hours → $1 mg per dose (use if gestational age is 34 weeks or more)', '2 mg/kg/dosis cada 12 horas → $1 mg por dosis (usar si la edad gestacional es igual o mayor de 34 semanas)'],
    [/^(\d+) mg\/kg\/dose a cada 12 horas → (\d+) mg por dose$/,
      '$1 mg/kg/dose every 12 hours → $2 mg per dose', '$1 mg/kg/dosis cada 12 horas → $2 mg por dosis'],
    [/^4–6 mg\/kg\/dose a cada 12 horas → (\d+) a (\d+) mg por dose$/,
      '4–6 mg/kg/dose every 12 hours → $1 to $2 mg per dose', '4–6 mg/kg/dosis cada 12 horas → $1 a $2 mg por dosis'],
    [/^1,5 mg\/kg\/dose uma vez ao dia → (\d+) mg por dia$/,
      '1.5 mg/kg/dose once daily → $1 mg per day', '1,5 mg/kg/dosis una vez al día → $1 mg por día'],
    // Linhas inteiras do HTML (fora do <pre>) com respostas Sim/Não
    [/^Consegue via oral: (Sim|Não) \| Uso materno de raltegravir 2–24 horas antes do parto: (Sim|Não|Não sei)$/,
      function (m, a, b) { return 'Able to take oral medication: ' + answer(a, 0) + ' | Maternal raltegravir use 2–24 hours before delivery: ' + answer(b, 0); },
      function (m, a, b) { return 'Tolera la vía oral: ' + answer(a, 1) + ' | Uso materno de raltegravir 2–24 horas antes del parto: ' + answer(b, 1); }],
    [/^Prematuro com menos de 34 semanas ou menos de 2\.000 g: (Sim|Não)$/,
      function (m, a) { return 'Preterm less than 34 weeks or less than 2,000 g: ' + answer(a, 0); },
      function (m, a) { return 'Prematuro de menos de 34 semanas o menos de 2.000 g: ' + answer(a, 1); }]
  ]);

  // Os <pre> da prescrição (#rx) e do texto pronto (#texto) são traduzidos linha a linha pelo núcleo.
  // Linhas "rótulo: valor" cujo rótulo tem números ou cujo valor contém " — ": o núcleo partiria a linha
  // nos números/travessões antes do ":"; aqui rótulo e valor são traduzidos inteiros, separadamente.
  var WHOLE_LABELS = ['Classificação', 'Conduta', 'Sulfadiazina', 'Leucovorina', 'Zidovudina via oral', 'Lamivudina via oral', 'Nevirapina via oral', '- Ataque (2 dias)', '- Manutenção', '- 0–14 dias', '- 15–28 dias', '- 1ª semana', '- 2ª–4ª semana'];
  var escapeRe = function (text) { return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); };
  var labelRule = new RegExp('^(' + WHOLE_LABELS.map(escapeRe).join('|') + '): (.+)$');
  var byLabel = function (target) {
    return function (m, label, value) { return i18n.t(label, target) + ': ' + i18n.t(value, target); };
  };
  i18n.registerPatterns([[labelRule, byLabel('en'), byLabel('es')]]);
  i18n.register({
    'VDRL seriado: 1, 3, 6 e 12 meses.': ['Serial VDRL: 1, 3, 6 and 12 months.', 'VDRL seriado: 1, 3, 6 y 12 meses.']
  });

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
