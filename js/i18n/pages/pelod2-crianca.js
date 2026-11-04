/* PELOD-2 — Pediatric Logistic Organ Dysfunction 2 (files/pelod2_crianca.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;
  i18n.register({
    // Título e cabeçalho
    'NeoPedCalc — PELOD-2 (pediatria, uso educativo)': ['NeoPedCalc — PELOD-2 (pediatrics, educational use)', 'NeoPedCalc — PELOD-2 (pediatría, uso educativo)'],
    'PELOD-2 (pediatria)': ['PELOD-2 (pediatrics)', 'PELOD-2 (pediatría)'],
    'Ferramenta educativa — soma de disfunção orgânica segundo parâmetros publicados; o percentual exibido vem de um modelo estatístico de referência, não substitui prognóstico clínico individual': [
      'Educational tool — organ dysfunction sum according to published parameters; the percentage shown comes from a reference statistical model and does not replace individual clinical prognosis',
      'Herramienta educativa — suma de disfunción orgánica según parámetros publicados; el porcentaje mostrado procede de un modelo estadístico de referencia y no sustituye el pronóstico clínico individual'
    ],
    'Como usar': ['How to use', 'Cómo usar'],

    // Dados do paciente
    'Dados do Paciente': ['Patient Data', 'Datos del paciente'],
    'Nome do Paciente': ['Patient Name', 'Nombre del paciente'],
    'Nome completo': ['Full name', 'Nombre completo'],
    'Data de Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Data da Avaliação': ['Assessment Date', 'Fecha de la evaluación'],
    'Hora da Avaliação': ['Assessment Time', 'Hora de la evaluación'],
    'Idade (Calculada)': ['Age (Calculated)', 'Edad (calculada)'],
    'anos, meses e dias': ['years, months and days', 'años, meses y días'],
    'ano': ['year', 'año'],
    'anos': ['years', 'años'],
    'mês': ['month', 'mes'],
    'meses': ['months', 'meses'],
    'mêses': ['months', 'meses'],
    'Observacoes': ['Notes', 'Observaciones'],
    'dia': ['day', 'día'],
    'dias': ['days', 'días'],
    'Dia de UTI': ['ICU Day', 'Día de UCI'],
    'Ex': ['E.g', 'Ej'],
    'ou lista': ['or list', 'o lista'],

    // Formulário PELOD-2
    'Dados PELOD-2 (Piores Valores do Dia)': ['PELOD-2 Data (Worst Values of the Day)', 'Datos PELOD-2 (peores valores del día)'],
    'Informações importantes': ['Important information', 'Información importante'],
    'O PELOD-2 deve ser calculado com base nos': ['PELOD-2 should be calculated from the', 'El PELOD-2 debe calcularse con los'],
    'piores valores do dia': ['worst values of the day', 'peores valores del día'],
    'para cada variável. Para cada parâmetro, use o valor que representa a maior disfunção observada durante as 24 horas. Você pode inserir valores únicos ou listas separadas por vírgula — o sistema seleciona automaticamente o pior valor conforme a regra (mínimo ou máximo, conforme o parâmetro).': [
      'for each variable. For each parameter, use the value that represents the greatest dysfunction observed during the 24 hours. You can enter single values or comma-separated lists — the system automatically selects the worst value according to the rule (minimum or maximum, depending on the parameter).',
      'para cada variable. Para cada parámetro, utilice el valor que represente la mayor disfunción observada durante las 24 horas. Puede introducir valores únicos o listas separadas por comas — el sistema selecciona automáticamente el peor valor según la regla (mínimo o máximo, según el parámetro).'
    ],
    'Uso desta tela:': ['Use of this screen:', 'Uso de esta pantalla:'],
    'apoio ao ensino e registro informativo. O número percentual associado ao total é uma': [
      'teaching support and informational recording. The percentage associated with the total is a',
      'apoyo a la enseñanza y registro informativo. El porcentaje asociado al total es una'
    ],
    'transformação logística do escore': ['logistic transformation of the score', 'transformación logística de la puntuación'],
    'derivada da publicação de referência —': ['derived from the reference publication —', 'derivada de la publicación de referencia —'],
    'não é probabilidade clínica individual': ['it is not an individual clinical probability', 'no es una probabilidad clínica individual'],
    'nem critério isolado de conduta.': ['nor a stand-alone criterion for management.', 'ni un criterio aislado de conducta.'],
    'Neurológico': ['Neurologic', 'Neurológico'],
    'Escala de Coma de Glasgow (GCS)': ['Glasgow Coma Scale (GCS)', 'Escala de coma de Glasgow (GCS)'],
    'pior valor do dia (quanto menor, pior)': ['worst value of the day (lower is worse)', 'peor valor del día (cuanto menor, peor)'],
    'Cardiovascular': ['Cardiovascular', 'Cardiovascular'],
    'Pressão Arterial Média (PAM)': ['Mean Arterial Pressure (MAP)', 'Presión arterial media (PAM)'],
    'mmHg (pior valor do dia)': ['mmHg (worst value of the day)', 'mmHg (peor valor del día)'],
    'Lactato': ['Lactate', 'Lactato'],
    'mmol/L (pior valor do dia)': ['mmol/L (worst value of the day)', 'mmol/L (peor valor del día)'],
    'Respiratório': ['Respiratory', 'Respiratorio'],
    'fração (maior valor do dia)': ['fraction (highest value of the day)', 'fracción (mayor valor del día)'],
    'Renal / Hematológico': ['Renal / Hematologic', 'Renal / Hematológico'],
    'Creatinina': ['Creatinine', 'Creatinina'],
    'mg/dL (pior valor do dia)': ['mg/dL (worst value of the day)', 'mg/dL (peor valor del día)'],
    'Plaquetas': ['Platelets', 'Plaquetas'],
    '10³/µL (pior valor do dia)': ['10³/µL (worst value of the day)', '10³/µL (peor valor del día)'],
    'Leucócitos': ['White blood cells', 'Leucocitos'],
    'Observações': ['Notes', 'Observaciones'],
    'Sedação? Ventilação? Contexto clínico': ['Sedation? Ventilation? Clinical context', '¿Sedación? ¿Ventilación? Contexto clínico'],
    'Calcular PELOD-2': ['Calculate PELOD-2', 'Calcular PELOD-2'],
    'Limpar Dados': ['Clear Data', 'Borrar datos'],

    // Resultados
    'Resultados': ['Results', 'Resultados'],
    'PELOD-2 - Escore Total:': ['PELOD-2 - Total Score:', 'PELOD-2 - Puntuación total:'],
    'Valor do modelo logístico (referência Leteurtre et al., não predição individual):': [
      'Logistic model value (Leteurtre et al. reference, not an individual prediction):',
      'Valor del modelo logístico (referencia Leteurtre et al., no es una predicción individual):'
    ],
    'ponto': ['point', 'punto'],
    'pontos': ['points', 'puntos'],
    'Faixa baixa do total (0–4)': ['Low total range (0–4)', 'Rango bajo del total (0–4)'],
    'Faixa intermediária (5–9)': ['Intermediate range (5–9)', 'Rango intermedio (5–9)'],
    'Faixa alta do total (≥10)': ['High total range (≥10)', 'Rango alto del total (≥10)'],
    'Sistema': ['System', 'Sistema'],
    'Valor (Pior do Dia)': ['Value (Worst of the Day)', 'Valor (peor del día)'],
    'Pontos': ['Points', 'Puntos'],
    'Neurológico - GCS': ['Neurologic - GCS', 'Neurológico - GCS'],
    'Cardiovascular - PAM': ['Cardiovascular - MAP', 'Cardiovascular - PAM'],
    'Cardiovascular - Lactato': ['Cardiovascular - Lactate', 'Cardiovascular - Lactato'],
    'Respiratório - P/F': ['Respiratory - P/F', 'Respiratorio - P/F'],
    'Respiratório - PaCO₂': ['Respiratory - PaCO₂', 'Respiratorio - PaCO₂'],
    'Renal - Creatinina': ['Renal - Creatinine', 'Renal - Creatinina'],
    'Hematológico - Plaquetas': ['Hematologic - Platelets', 'Hematológico - Plaquetas'],
    'Hematológico - Leucócitos': ['Hematologic - White blood cells', 'Hematológico - Leucocitos'],
    'Texto informativo para prontuário eletrônico (revisar)': ['Informational text for the electronic health record (review)', 'Texto informativo para la historia clínica electrónica (revisar)'],
    'Gerar e copiar texto informativo': ['Generate and copy informational text', 'Generar y copiar texto informativo'],
    'NeoPedCalc — uso educacional e informativo. Não prescreve tratamento nem substitui julgamento clínico ou critérios institucionais de gravidade.': [
      'NeoPedCalc — educational and informational use. It does not prescribe treatment or replace clinical judgment or institutional severity criteria.',
      'NeoPedCalc — uso educativo e informativo. No prescribe tratamiento ni sustituye el juicio clínico ni los criterios institucionales de gravedad.'
    ],

    // Modal
    'Como usar (informação)': ['How to use (information)', 'Cómo usar (información)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'O PELOD-2 quantifica': ['PELOD-2 quantifies', 'El PELOD-2 cuantifica la'],
    'disfunção orgânica pediátrica': ['pediatric organ dysfunction', 'disfunción orgánica pediátrica'],
    'a partir de variáveis fisiológicas/laboratoriais. Nesta página ele serve para': [
      'from physiologic/laboratory variables. On this page it is intended for',
      'a partir de variables fisiológicas/de laboratorio. En esta página sirve para'
    ],
    'estudo, treino e registro informativo': ['study, training and informational recording', 'estudio, entrenamiento y registro informativo'],
    '. O percentual mostrado aplica a função logística publicada por Leteurtre et al. ao total calculado — é uma': [
      '. The percentage shown applies the logistic function published by Leteurtre et al. to the calculated total — it is a',
      '. El porcentaje mostrado aplica la función logística publicada por Leteurtre et al. al total calculado — es una'
    ],
    'O percentual mostrado aplica a função logística publicada por Leteurtre et al. ao total calculado — é uma': [
      'The percentage shown applies the logistic function published by Leteurtre et al. to the calculated total — it is a',
      'El porcentaje mostrado aplica la función logística publicada por Leteurtre et al. al total calculado — es una'
    ],
    'curva populacional de referência': ['population reference curve', 'curva poblacional de referencia'],
    ', não uma “chance” individual do paciente.': [', not an individual “chance” for the patient.', ', no una “probabilidad” individual del paciente.'],
    'não uma “chance” individual do paciente.': ['not an individual “chance” for the patient.', 'no una “probabilidad” individual del paciente.'],
    'O que esta implementação soma': ['What this implementation adds up', 'Qué suma esta implementación'],
    'Total = pontos neurológicos + cardiovasculares + respiratórios + renais + hematológicos': [
      'Total = neurologic + cardiovascular + respiratory + renal + hematologic points',
      'Total = puntos neurológicos + cardiovasculares + respiratorios + renales + hematológicos'
    ],
    '(conforme tabelas da publicação, espelhadas nos campos da tela).': ['(according to the publication tables, mirrored in the fields on screen).', '(según las tablas de la publicación, reflejadas en los campos de la pantalla).'],
    'Domínios presentes nesta ferramenta:': ['Domains included in this tool:', 'Dominios presentes en esta herramienta:'],
    '• Neurológico: GCS (pior do dia; quanto menor, mais pontos)': ['• Neurologic: GCS (worst of the day; lower means more points)', '• Neurológico: GCS (peor del día; cuanto menor, más puntos)'],
    '• Cardiovascular: PAM (mmHg) e lactato (mmol/L)': ['• Cardiovascular: MAP (mmHg) and lactate (mmol/L)', '• Cardiovascular: PAM (mmHg) y lactato (mmol/L)'],
    '• Respiratório: razão PaO₂/FiO₂ e PaCO₂': ['• Respiratory: PaO₂/FiO₂ ratio and PaCO₂', '• Respiratorio: cociente PaO₂/FiO₂ y PaCO₂'],
    '• Renal: creatinina (mg/dL)': ['• Renal: creatinine (mg/dL)', '• Renal: creatinina (mg/dL)'],
    '• Hematológico: plaquetas e leucócitos (10³/µL)': ['• Hematologic: platelets and white blood cells (10³/µL)', '• Hematológico: plaquetas y leucocitos (10³/µL)'],
    'Total máximo nesta página:': ['Maximum total on this page:', 'Total máximo en esta página:'],
    'até': ['up to', 'hasta'],
    '21 pontos': ['21 points', '21 puntos'],
    '(soma dos máximos por domínio nesta configuração).': ['(sum of the maximums per domain in this configuration).', '(suma de los máximos por dominio en esta configuración).'],
    'Observação:': ['Note:', 'Observación:'],
    'O PELOD-2 completo no artigo pode incluir outros critérios em contextos específicos; confira sempre a fonte original e o protocolo local.': [
      'The full PELOD-2 in the article may include other criteria in specific contexts; always check the original source and the local protocol.',
      'El PELOD-2 completo del artículo puede incluir otros criterios en contextos específicos; consulte siempre la fuente original y el protocolo local.'
    ],
    'Instruções de uso': ['Instructions for use', 'Instrucciones de uso'],
    'Preencha os piores valores de cada parâmetro nas últimas 24 h (ou janela definida pelo seu serviço)': [
      'Enter the worst values of each parameter over the last 24 h (or the window defined by your unit)',
      'Introduzca los peores valores de cada parámetro en las últimas 24 h (o la ventana definida por su servicio)'
    ],
    'Use vírgula para listar vários valores; o sistema escolhe o pior conforme a regra do parâmetro': [
      'Use commas to list several values; the system picks the worst one according to the parameter rule',
      'Use comas para listar varios valores; el sistema elige el peor según la regla del parámetro'
    ],
    'Informe FiO₂ como fração (ex.: 0,6 para 60%)': ['Enter FiO₂ as a fraction (e.g., 0.6 for 60%)', 'Indique la FiO₂ como fracción (ej.: 0,6 para 60%)'],
    'Clique em': ['Click', 'Haga clic en'],
    'para ver total, tabela de contribuição e valor do modelo logístico': [
      'to see the total, the contribution table and the logistic model value',
      'para ver el total, la tabla de contribución y el valor del modelo logístico'
    ],
    'Use': ['Use', 'Use'],
    'Copiar texto': ['Copy text', 'Copiar texto'],
    'apenas como rascunho educativo — revise antes de arquivar': ['only as an educational draft — review before filing', 'solo como borrador educativo — revise antes de archivar'],
    'Faixas de total (apenas organização visual nesta tela)': ['Total ranges (visual organization on this screen only)', 'Rangos del total (solo organización visual en esta pantalla)'],
    'Esta página colore o resultado em três faixas para facilitar leitura —': [
      'This page colors the result in three ranges for easier reading —',
      'Esta página colorea el resultado en tres rangos para facilitar la lectura —'
    ],
    'não definem prognóstico sozinhas': ['they do not define prognosis on their own', 'no definen el pronóstico por sí solos'],
    'faixa baixa do total calculado aqui': ['low range of the total calculated here', 'rango bajo del total calculado aquí'],
    'faixa intermediária': ['intermediate range', 'rango intermedio'],
    'faixa alta do total — integrar com exame clínico, suporte e diretrizes institucionais': [
      'high range of the total — integrate with clinical examination, support and institutional guidelines',
      'rango alto del total — integrar con la exploración clínica, el soporte y las guías institucionales'
    ],
    'Sobre o percentual exibido': ['About the percentage shown', 'Sobre el porcentaje mostrado'],
    'logit = α + β × escore': ['logit = α + β × score', 'logit = α + β × puntuación'],
    'O valor em % resulta da fórmula': ['The % value results from the formula', 'El valor en % resulta de la fórmula'],
    'com coeficientes da referência embutidos neste código. Interpretação adequada exige contexto epidemiológico e clínico;': [
      'with reference coefficients embedded in this code. Proper interpretation requires epidemiologic and clinical context;',
      'con coeficientes de la referencia incorporados en este código. Una interpretación adecuada exige contexto epidemiológico y clínico;'
    ],
    'não use como único critério de decisão terapêutica.': ['do not use it as the sole criterion for therapeutic decisions.', 'no lo use como único criterio de decisión terapéutica.'],
    'Considerações importantes': ['Important considerations', 'Consideraciones importantes'],
    'Qualidade e sincronia dos exames influenciam o total': ['The quality and timing of tests influence the total', 'La calidad y la sincronía de las pruebas influyen en el total'],
    'Evolução seriada do escore pode ser discutida na literatura; a decisão de frequência de coleta é assistencial': [
      'Serial evolution of the score may be discussed in the literature; the decision on sampling frequency is a clinical-care decision',
      'La evolución seriada de la puntuación puede discutirse en la literatura; la decisión sobre la frecuencia de recogida es asistencial'
    ],
    'Comorbidades e terapias (ex.: sedação) alteram a leitura dos parâmetros — não estão “corrigidas” automaticamente nesta tela': [
      'Comorbidities and therapies (e.g., sedation) alter the reading of the parameters — they are not automatically “corrected” on this screen',
      'Las comorbilidades y las terapias (ej.: sedación) alteran la lectura de los parámetros — no se “corrigen” automáticamente en esta pantalla'
    ],
    'Uso pretendido (informativo)': ['Intended use (informational)', 'Uso previsto (informativo)'],
    'Ensino de definição de disfunção orgânica pediátrica': ['Teaching the definition of pediatric organ dysfunction', 'Enseñanza de la definición de disfunción orgánica pediátrica'],
    'Padronização de registro para estudo ou auditoria interna, com ressalvas explícitas': [
      'Standardized recording for study or internal audit, with explicit caveats',
      'Estandarización del registro para estudio o auditoría interna, con salvedades explícitas'
    ],
    'Comparação com artigos e bases de dados de UTI pediátrica': ['Comparison with pediatric ICU articles and databases', 'Comparación con artículos y bases de datos de UCI pediátrica'],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Não substitui avaliação clínica individual nem escores institucionais obrigatórios': [
      'Does not replace individual clinical assessment or mandatory institutional scores',
      'No sustituye la evaluación clínica individual ni las puntuaciones institucionales obligatorias'
    ],
    'Validação e performance variam por população e cenário assistencial': ['Validation and performance vary by population and care setting', 'La validación y el rendimiento varían según la población y el entorno asistencial'],
    'Depende da disponibilidade e acurácia dos dados inseridos': ['Depends on the availability and accuracy of the data entered', 'Depende de la disponibilidad y la exactitud de los datos introducidos'],
    'Referência principal:': ['Main reference:', 'Referencia principal:'],
    'Contexto histórico:': ['Historical context:', 'Contexto histórico:'],

    // Relatório copiado
    'PELOD-2 (FERRAMENTA EDUCATIVA)': ['PELOD-2 (EDUCATIONAL TOOL)', 'PELOD-2 (HERRAMIENTA EDUCATIVA)'],
    'NOTA: Texto para apoio informativo. Nao substitui avaliacao clinica nem define prognostico individual. O percentual abaixo vem de modelo estatistico de referencia (Leteurtre et al.), nao de predicao isolada do paciente.': [
      'NOTE: Text for informational support. It does not replace clinical assessment or define individual prognosis. The percentage below comes from a reference statistical model (Leteurtre et al.), not from an isolated prediction for the patient.',
      'NOTA: Texto de apoyo informativo. No sustituye la evaluación clínica ni define el pronóstico individual. El porcentaje siguiente procede de un modelo estadístico de referencia (Leteurtre et al.), no de una predicción aislada del paciente.'
    ],
    'IDENTIFICACAO (opcional)': ['IDENTIFICATION (optional)', 'IDENTIFICACIÓN (opcional)'],
    'Nome': ['Name', 'Nombre'],
    '(nao informado)': ['(not provided)', '(no informado)'],
    'Data da avaliacao': ['Assessment date', 'Fecha de la evaluación'],
    'Hora': ['Time', 'Hora'],
    'Data de nascimento': ['Date of birth', 'Fecha de nacimiento'],
    'Idade na data da avaliacao': ['Age on the assessment date', 'Edad en la fecha de la evaluación'],
    'Dia de UTI (campo informativo)': ['ICU day (informational field)', 'Día de UCI (campo informativo)'],
    'VARIAVEIS INSERIDAS (piores valores do dia, conforme tela)': ['VARIABLES ENTERED (worst values of the day, as on screen)', 'VARIABLES INTRODUCIDAS (peores valores del día, según la pantalla)'],
    'PAM': ['MAP', 'PAM'],
    'Leucocitos': ['White blood cells', 'Leucocitos'],
    'RESULTADOS NESTA SESSAO': ['RESULTS IN THIS SESSION', 'RESULTADOS EN ESTA SESIÓN'],
    '- Total PELOD-2 (soma desta implementacao)': ['- PELOD-2 total (sum in this implementation)', '- Total PELOD-2 (suma de esta implementación)'],
    '- Valor do modelo logistico (referencia)': ['- Logistic model value (reference)', '- Valor del modelo logístico (referencia)'],
    'Faixa descritiva na interface': ['Descriptive range in the interface', 'Rango descriptivo en la interfaz'],
    'CONTEXTO EDUCATIVO': ['EDUCATIONAL CONTEXT', 'CONTEXTO EDUCATIVO'],
    'O PELOD-2 quantifica disfuncao organica em criancas criticas segundo criterios publicados. Totais maiores refletem maior pontuacao pelos limiares da tabela; conduta e prognostico clinico dependem do contexto e do protocolo local.': [
      'PELOD-2 quantifies organ dysfunction in critically ill children according to published criteria. Higher totals reflect higher scores by the table thresholds; clinical management and prognosis depend on the context and the local protocol.',
      'El PELOD-2 cuantifica la disfunción orgánica en niños críticos según criterios publicados. Los totales más altos reflejan una mayor puntuación según los umbrales de la tabla; la conducta y el pronóstico clínico dependen del contexto y del protocolo local.'
    ],
    'TABELA DE PONTOS (espelhada neste codigo)': ['POINTS TABLE (mirrored in this code)', 'TABLA DE PUNTOS (reflejada en este código)'],
    'Lactato: ≥4,0=2; 2,5-3,9=1; <2,5=0 mmol/L': ['Lactate: ≥4.0=2; 2.5-3.9=1; <2.5=0 mmol/L', 'Lactato: ≥4,0=2; 2,5-3,9=1; <2,5=0 mmol/L'],
    '- PaCO2: 51-70=1; 71-90=2; >90=3 mmHg (≤50=0 nesta implementacao)': ['- PaCO2: 51-70=1; 71-90=2; >90=3 mmHg (≤50=0 in this implementation)', '- PaCO2: 51-70=1; 71-90=2; >90=3 mmHg (≤50=0 en esta implementación)'],
    'Creatinina: ≥2,0=2; 1,0-1,99=1; <1,0=0 mg/dL': ['Creatinine: ≥2.0=2; 1.0-1.99=1; <1.0=0 mg/dL', 'Creatinina: ≥2,0=2; 1,0-1,99=1; <1,0=0 mg/dL'],
    '- Plaquetas: <50=3; 50-99=2; 100-149=1; ≥150=0 (10³/uL)': ['- Platelets: <50=3; 50-99=2; 100-149=1; ≥150=0 (10³/uL)', '- Plaquetas: <50=3; 50-99=2; 100-149=1; ≥150=0 (10³/uL)'],
    '- Leucocitos: <3=2; >25=1; caso contrario=0 (10³/uL)': ['- White blood cells: <3=2; >25=1; otherwise=0 (10³/uL)', '- Leucocitos: <3=2; >25=1; en caso contrario=0 (10³/uL)'],
    'Referencia': ['Reference', 'Referencia']
  });
  i18n.registerPatterns([
    // "12 pontos (Dia 3)" — escore total com dia de UTI
    [/^(\d+) pontos \(Dia (\d+)\)$/, '$1 points (Day $2)', '$1 puntos (Día $2)']
  ]);
  i18n.markPageTranslated();
})(window.NEOPED_I18N);
