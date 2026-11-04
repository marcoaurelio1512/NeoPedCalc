/* Escala de sedação tipo Ramsay 1–5 (files/ramsay-score_de_sedacao.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;
  i18n.register({
    'Como usar': ['How to use', 'Cómo usar'],
    'NeoPedCalc — Escala tipo Ramsay (1–5, educativo)': ['NeoPedCalc — Ramsay-type Scale (1–5, educational)', 'NeoPedCalc — Escala tipo Ramsay (1–5, educativo)'],
    'Escala de sedação (adaptação 1–5)': ['Sedation scale (1–5 adaptation)', 'Escala de sedación (adaptación 1–5)'],
    'Ferramenta educativa inspirada no conceito de Ramsay —': ['Educational tool inspired by the Ramsay concept —', 'Herramienta educativa inspirada en el concepto de Ramsay —'],
    'não prescreve': ['does not prescribe', 'no prescribe'],
    'sedação nem titulação de fármacos': ['sedation or drug titration', 'sedación ni titulación de fármacos'],

    // Dados do paciente
    'Dados do Paciente': ['Patient Data', 'Datos del paciente'],
    'Nome do Paciente': ['Patient Name', 'Nombre del paciente'],
    'Nome completo': ['Full name', 'Nombre completo'],
    'Data de Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Data da Avaliação': ['Assessment Date', 'Fecha de la evaluación'],
    'Hora da Avaliação': ['Assessment Time', 'Hora de la evaluación'],
    'Idade (Calculada)': ['Age (Calculated)', 'Edad (calculada)'],
    'anos, meses e dias': ['years, months and days', 'años, meses y días'],
    'Peso': ['Weight', 'Peso'],
    'Ex.: 12.500': ['e.g., 12.500', 'Ej.: 12.500'],

    // Avaliação
    'Avaliação Ramsay Score': ['Ramsay Score Assessment', 'Evaluación de la escala de Ramsay'],
    'Informações Importantes': ['Important Information', 'Información importante'],
    'Selecione o estado que melhor descreve a resposta ao estímulo padronizado (ex.: estímulo tátil moderado nos ombros, conforme protocolo local). Nesta interface, os níveis': ['Select the state that best describes the response to a standardized stimulus (e.g., moderate tactile stimulus on the shoulders, per local protocol). In this interface, levels', 'Seleccione el estado que mejor describa la respuesta al estímulo estandarizado (p. ej., estímulo táctil moderado en los hombros, según el protocolo local). En esta interfaz, los niveles'],
    '2 e 3': ['2 and 3', '2 y 3'],
    'são apenas': ['are only', 'son solo'],
    'rótulos educativos de faixa intermediária': ['educational labels for the intermediate range', 'etiquetas educativas de rango intermedio'],
    '— o alvo terapêutico é definido pelo prescritor e pela UTI.': ['— the therapeutic target is set by the prescriber and the ICU.', '— el objetivo terapéutico lo define el prescriptor y la UCI.'],
    'Estado Clínico (Resposta ao Estímulo)': ['Clinical State (Response to Stimulus)', 'Estado clínico (respuesta al estímulo)'],
    'Comatoso - não responde ao estímulo': ['Comatose - no response to stimulus', 'Comatoso - no responde al estímulo'],
    'Adormecido - desperta com estímulo': ['Asleep - awakens with stimulus', 'Dormido - despierta con el estímulo'],
    'Calmo - cateteres sem risco': ['Calm - catheters not at risk', 'Tranquilo - catéteres sin riesgo'],
    'Agitado - cateteres em risco': ['Agitated - catheters at risk', 'Agitado - catéteres en riesgo'],
    'Agitação extrema - incontrolável, debatendo-se': ['Extreme agitation - uncontrollable, thrashing', 'Agitación extrema - incontrolable, forcejeando'],
    'Observações': ['Notes', 'Observaciones'],
    'Medicações sedativas, contexto clínico, etc.': ['Sedative medications, clinical context, etc.', 'Medicamentos sedantes, contexto clínico, etc.'],
    'Calcular': ['Calculate', 'Calcular'],
    'Limpar dados': ['Clear data', 'Borrar datos'],

    // Resultados
    'Resultados': ['Results', 'Resultados'],
    'Ramsay Score:': ['Ramsay Score:', 'Puntuación de Ramsay:'],
    'Nível 1 — sem resposta ao estímulo nesta escala; integrar com suporte ventilatório e prescrição (educativo, sem ajuste automático).': ['Level 1 — no response to stimulus on this scale; integrate with ventilatory support and prescription (educational, no automatic adjustment).', 'Nivel 1 — sin respuesta al estímulo en esta escala; integrar con el soporte ventilatorio y la prescripción (educativo, sin ajuste automático).'],
    'Níveis 2–3 — faixa intermediária; rótulo educativo “alvo usual” na convenção desta página — meta terapêutica é decisão clínica.': ['Levels 2–3 — intermediate range; educational label “usual target” by this page\'s convention — the therapeutic goal is a clinical decision.', 'Niveles 2–3 — rango intermedio; etiqueta educativa “objetivo habitual” según la convención de esta página — la meta terapéutica es una decisión clínica.'],
    'Níveis 4–5 — agitação observacional; correlacionar com dor, causa e protocolo — não indica dose de sedativo.': ['Levels 4–5 — observed agitation; correlate with pain, cause and protocol — does not indicate a sedative dose.', 'Niveles 4–5 — agitación observada; correlacionar con dolor, causa y protocolo — no indica dosis de sedante.'],
    'Selecione um nível válido (1 a 5).': ['Select a valid level (1 to 5).', 'Seleccione un nivel válido (1 a 5).'],
    'Variável': ['Variable', 'Variable'],
    'Descrição': ['Description', 'Descripción'],
    'Pontos': ['Points', 'Puntos'],
    'Estado Clínico': ['Clinical State', 'Estado clínico'],
    'Desconhecido': ['Unknown', 'Desconocido'],
    'Texto informativo para prontuário eletrônico (revisar)': ['Informational text for the electronic health record (review)', 'Texto informativo para la historia clínica electrónica (revisar)'],
    'Gerar e copiar texto informativo': ['Generate and copy informational text', 'Generar y copiar texto informativo'],
    'Uso educacional. Não substitui escala institucional obrigatória nem decisão de dose de sedativo ou analgésico.': ['Educational use. Does not replace a mandatory institutional scale or decisions on sedative or analgesic dosing.', 'Uso educativo. No sustituye la escala institucional obligatoria ni la decisión de dosis de sedantes o analgésicos.'],

    // Modal
    'Como usar (informação)': ['How to use (information)', 'Cómo usar (información)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Esta página usa uma': ['This page uses a', 'Esta página utiliza una'],
    'escala de 1 a 5 níveis': ['1-to-5-level scale', 'escala de 1 a 5 niveles'],
    'de resposta clínica ao estímulo, inspirada no trabalho de Ramsay e em adaptações de UTI. Serve para': ['of clinical response to stimulus, inspired by Ramsay\'s work and ICU adaptations. It is intended for', 'de respuesta clínica al estímulo, inspirada en el trabajo de Ramsay y en adaptaciones de UCI. Sirve para'],
    'treino e registro informativo': ['training and informational recording', 'entrenamiento y registro informativo'],
    'não titula sedação': ['it does not titrate sedation', 'no titula la sedación'],
    'nem substitui a escala oficial do seu hospital.': ['nor replace your hospital\'s official scale.', 'ni sustituye la escala oficial de su hospital.'],
    'Níveis (implementação desta tela)': ['Levels (as implemented on this screen)', 'Niveles (implementación de esta pantalla)'],
    'Pontuação = um único nível escolhido (1 a 5)': ['Score = a single selected level (1 to 5)', 'Puntuación = un único nivel elegido (1 a 5)'],
    'Comatoso — não responde ao estímulo': ['Comatose — no response to stimulus', 'Comatoso — no responde al estímulo'],
    'Adormecido — desperta com estímulo': ['Asleep — awakens with stimulus', 'Dormido — despierta con el estímulo'],
    'Calmo — cateteres sem risco (descrição da tela)': ['Calm — catheters not at risk (screen description)', 'Tranquilo — catéteres sin riesgo (descripción de la pantalla)'],
    'Agitado — cateteres em risco (descrição da tela)': ['Agitated — catheters at risk (screen description)', 'Agitado — catéteres en riesgo (descripción de la pantalla)'],
    'Agitação extrema — incontrolável (descrição da tela)': ['Extreme agitation — uncontrollable (screen description)', 'Agitación extrema — incontrolable (descripción de la pantalla)'],
    'Importante:': ['Important:', 'Importante:'],
    'A Ramsay original descreve': ['The original Ramsay scale describes', 'La escala de Ramsay original describe'],
    '6 níveis': ['6 levels', '6 niveles'],
    'com significados diferentes dos desta interface. Para decisões clínicas, use a versão validada e o protocolo local.': ['with meanings different from those in this interface. For clinical decisions, use the validated version and local protocol.', 'con significados distintos de los de esta interfaz. Para decisiones clínicas, utilice la versión validada y el protocolo local.'],
    'Instruções': ['Instructions', 'Instrucciones'],
    'Aplique o estímulo e observe a resposta conforme padrão da sua instituição': ['Apply the stimulus and observe the response according to your institution\'s standard', 'Aplique el estímulo y observe la respuesta según el estándar de su institución'],
    'Marque o nível que melhor corresponde ao comportamento observado': ['Select the level that best matches the observed behavior', 'Marque el nivel que mejor corresponda al comportamiento observado'],
    'Clique em': ['Click', 'Haga clic en'],
    'para ver o rótulo educativo da faixa': ['to see the educational label for the range', 'para ver la etiqueta educativa del rango'],
    'Use': ['Use', 'Utilice'],
    'Copiar texto': ['Copy text', 'Copiar texto'],
    'só após revisar o conteúdo': ['only after reviewing the content', 'solo después de revisar el contenido'],
    'Faixas (rótulos desta ferramenta)': ['Ranges (labels used by this tool)', 'Rangos (etiquetas de esta herramienta)'],
    'extremo de ausência de resposta na escala simplificada — integrar com ventilação e prescrição (sem orientação automática aqui)': ['extreme of no response on the simplified scale — integrate with ventilation and prescription (no automatic guidance here)', 'extremo de ausencia de respuesta en la escala simplificada — integrar con la ventilación y la prescripción (sin orientación automática aquí)'],
    'faixa intermediária; nesta página rotulada como “alvo educativo” comum em textos de sedação em UTI': ['intermediate range; labeled on this page as the “educational target” common in ICU sedation texts', 'rango intermedio; en esta página etiquetado como “objetivo educativo” habitual en textos de sedación en UCI'],
    'maior agitação observacional — correlacionar com dor, delirio, causa base e protocolo': ['greater observed agitation — correlate with pain, delirium, underlying cause and protocol', 'mayor agitación observada — correlacionar con dolor, delirio, causa de base y protocolo'],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Subjetividade entre avaliadores': ['Inter-rater subjectivity', 'Subjetividad entre evaluadores'],
    'Não substitui RASS, SAS, CAM-ICU, dor escalada, etc., quando indicados': ['Does not replace RASS, SAS, CAM-ICU, pain scales, etc., when indicated', 'No sustituye RASS, SAS, CAM-ICU, escalas de dolor, etc., cuando estén indicadas'],
    'Pacientes neurológicos podem não se encaixar nas descrições': ['Neurological patients may not fit the descriptions', 'Los pacientes neurológicos pueden no ajustarse a las descripciones'],
    'Medicações alteram a performance na escala': ['Medications affect performance on the scale', 'Los medicamentos alteran el desempeño en la escala'],
    'Referência clássica:': ['Classic reference:', 'Referencia clásica:'],
    'Nota:': ['Note:', 'Nota:'],
    'Outras escalas (RASS, SAS) são citadas na literatura de UTI adulta; compare com o que sua UTI pediátrica adota.': ['Other scales (RASS, SAS) are cited in the adult ICU literature; compare with what your PICU uses.', 'Otras escalas (RASS, SAS) se citan en la literatura de UCI de adultos; compare con lo que adopta su UCI pediátrica.'],

    // Referência bibliográfica (mantida no idioma original)
    'Ramsay MA, Savege TM, Simpson BR, Goodwin R. Controlled sedation with alphaxalone-alphadolone.': ['Ramsay MA, Savege TM, Simpson BR, Goodwin R. Controlled sedation with alphaxalone-alphadolone.', 'Ramsay MA, Savege TM, Simpson BR, Goodwin R. Controlled sedation with alphaxalone-alphadolone.'],
    'Br Med J': ['Br Med J', 'Br Med J']
  });
  i18n.registerPatterns([
    [/^(\d+) pontos$/, '$1 points', '$1 puntos']
  ]);
  i18n.markPageTranslated();
})(window.NEOPED_I18N);
