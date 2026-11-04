/* SDR do prematuro — Consenso Europeu 2025 (files/Guideline_europeu_sdr.html) — [inglês, espanhol].
 * Parte 2: textos montados pelo JS (dose, painéis, selos, síntese, relatório #resultado) e padrões.
 * O relatório #resultado passa por normalizarTextoRelatorio() na página (sem acentos, ₂→2, ≥→>=, –→-,
 * ▶/•/⚠→-, «»/·/→ removidos), por isso cada texto do relatório é registrado também nessa forma "plana". */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  /** Mesma normalização de símbolos da página, mantendo acentos (usada nas traduções em espanhol). */
  function symbols(s) {
    return String(s)
      .replace(/[▶⚠•]/g, '-')
      .replace(/≤/g, '<=')
      .replace(/≥/g, '>=')
      .replace(/≈/g, '~')
      .replace(/₂/g, '2')
      .replace(/₄/g, '4')
      .replace(/ª/g, 'a')
      .replace(/º/g, 'o')
      .replace(/[–—]/g, '-')
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/[«»·→]/g, '');
  }

  /** Cópia exata de normalizarTextoRelatorio() (sem trim), para gerar as chaves do relatório. */
  function plain(s) {
    return symbols(s).normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '');
  }

  /** Registra cada entrada na forma original e na forma plana do relatório. */
  function registerWithPlain(entries) {
    var out = {};
    Object.keys(entries).forEach(function (pt) {
      var v = entries[pt];
      out[pt] = v;
      var p = plain(pt);
      if (p !== pt && !(p in entries)) out[p] = [plain(v[0]), symbols(v[1])];
    });
    i18n.register(out);
  }

  var LANG = ['en', 'es'];
  function tr(s, lang) { return i18n.t(s, lang); }
  function pick(lang, en, es) { return lang === 'en' ? en : es; }

  /** Converte um literal pt em regex que aceita a forma acentuada e a forma plana. {N} = número. */
  function fuzzy(pt) {
    var src = '';
    for (var i = 0; i < pt.length; i++) {
      if (pt.substr(i, 3) === '{N}') { src += '([\\d.]+)'; i += 2; continue; }
      var ch = pt[i];
      var p = plain(ch);
      if (ch === '≥') src += '(?:≥|>=)';
      else if (ch === '≤') src += '(?:≤|<=)';
      else if (ch === '≈') src += '(?:≈|~)';
      else if (ch === '·' || ch === '«' || ch === '»' || ch === '→') src += ch + '?';
      else if (p !== ch && p.length === 1) src += '[' + ch + p.replace(/[\]\\^-]/g, '\\$&') + ']';
      else src += ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    return src;
  }

  /** Ajusta a saída à forma do texto de entrada (plana no relatório, acentuada na tela). */
  function shape(input, out, lang) {
    if (plain(input) !== input) return out;
    return lang === 'en' ? plain(out) : symbols(out);
  }

  /** Frases conhecidas substituídas dentro de linhas compostas (listas unidas por " · " ou espaço). */
  var PHRASES = [];
  function phrase(pt, en, es) { PHRASES.push([pt, en, es]); }
  var compiled = null;
  function compilePhrases() {
    compiled = PHRASES.slice()
      .sort(function (a, b) { return b[0].length - a[0].length; })
      .map(function (p) { return [new RegExp(fuzzy(p[0]), 'g'), p[1], p[2]]; });
  }
  function replacePhrases(text, lang) {
    if (!compiled) compilePhrases();
    var out = text;
    compiled.forEach(function (p) {
      out = out.replace(p[0], function () {
        var args = arguments;
        var rep = (lang === 'en' ? p[1] : p[2]).replace(/\$(\d)/g, function (_, n) { return args[Number(n)]; });
        return shape(args[0], rep, lang);
      });
    });
    return out;
  }

  /** Padrão cuja tradução é montada por função (en, es). */
  function rule(re, build) {
    return [re].concat(LANG.map(function (lang) {
      return function () { return build(Array.prototype.slice.call(arguments), lang); };
    }));
  }

  // ---------------------------------------------------------------------------
  // Itens de checklist que entram nas listas da síntese e do relatório
  var ITEMS = {
    'ANCS: curso único documentado (risco de PTB até 34s; ideal ≥24 h antes do parto)': [
      'ANCS: single course documented (PTB risk up to 34 wk; ideally ≥24 h before birth)',
      'ANCS: curso único documentado (riesgo de parto prematuro hasta 34 sem; ideal ≥24 h antes del parto)'
    ],
    'ANCS: curso de repetição documentado (antes de 32s; 1º curso há >1–2 semanas)': [
      'ANCS: repeat course documented (before 32 wk; 1st course >1–2 weeks earlier)',
      'ANCS: curso de repetición documentado (antes de 32 sem; 1.er curso hace >1–2 semanas)'
    ],
    'ANCS: não recebido ou não documentado neste episódio': ['ANCS: not received or not documented in this episode', 'ANCS: no recibido o no documentado en este episodio'],
    'MgSO₄: neuroproteção fetal documentada (parto iminente antes de 32s)': [
      'MgSO₄: fetal neuroprotection documented (imminent delivery before 32 wk)',
      'MgSO₄: neuroprotección fetal documentada (parto inminente antes de 32 sem)'
    ],
    'MgSO₄: não recebido, não aplicável ou não documentado': ['MgSO₄: not received, not applicable or not documented', 'MgSO₄: no recibido, no aplicable o no documentado'],
    'Clampeamento ≥ 60 s': ['Cord clamping ≥ 60 s', 'Pinzamiento del cordón ≥ 60 s'],
    'Saco / gases aquecidos': ['Plastic bag / heated gases', 'Bolsa de polietileno / gases calentados'],
    'Monitorar SpO₂ pré-ductal': ['Monitor preductal SpO₂', 'Monitorizar SpO₂ preductal'],
    'T-piece (PIP ~ 25)': ['T-piece (PIP ~ 25)', 'Pieza en T (PIP ~ 25)'],
    'Retrações / aumento do trabalho respiratório': ['Retractions / increased work of breathing', 'Retracciones / aumento del trabajo respiratorio'],
    'Gemência / desconforto respiratório significativo': ['Grunting / significant respiratory distress', 'Quejido / dificultad respiratoria significativa'],
    'Apneia recorrente': ['Recurrent apnea', 'Apnea recurrente'],
    'Bradicardia / instabilidade': ['Bradycardia / instability', 'Bradicardia / inestabilidad'],
    'Ultrassom pulmonar com padrão associado a SDR na literatura de referência (consultivo)': [
      'Lung ultrasound with a pattern associated with RDS in the reference literature (advisory)',
      'Ecografía pulmonar con patrón asociado al SDR en la literatura de referencia (consultivo)'
    ],
    'Intubado para estabilização (registro informado)': ['Intubated for stabilization (as recorded)', 'Intubado para la estabilización (registro informado)'],
    'Contexto de hipertensão pulmonar assinalado (metas informativas ajustadas na ferramenta)': [
      'Pulmonary hypertension context checked (informational targets adjusted in the tool)',
      'Contexto de hipertensión pulmonar marcado (objetivos informativos ajustados en la herramienta)'
    ],
    'não assinalado — completar se aplicável.': ['not checked — complete if applicable.', 'no marcado — completar si corresponde.'],
    'não assinalado': ['not checked', 'no marcado'],
    'nenhum item': ['no items', 'ningún elemento'],
    'nenhum': ['none', 'ninguno']
  };
  Object.keys(ITEMS).forEach(function (pt) { phrase(pt, ITEMS[pt][0], ITEMS[pt][1]); });

  // Parâmetros de sala de parto por IG (linha "IG → parâmetros iniciais..." do relatório)
  phrase('FiO₂ inicial sugerida: 0,{N}.', 'Suggested initial FiO₂: 0.$1.', 'FiO₂ inicial sugerida: 0,$1.');
  phrase('CPAP: iniciar ≥ 6 cmH₂O se respirando espontaneamente.', 'CPAP: start at ≥ 6 cmH₂O if breathing spontaneously.', 'CPAP: iniciar con ≥ 6 cmH₂O si respira espontáneamente.');
  phrase('VPP: iniciar se apneia ou respiração ineficaz por 30–60 s.', 'PPV: start if apnea or ineffective breathing for 30–60 s.', 'VPP: iniciar si hay apnea o respiración ineficaz durante 30–60 s.');
  phrase('Meta aos 5 min: SpO₂ > 80% e FC > 100 bpm.', 'Target at 5 min: SpO₂ > 80% and HR > 100 bpm.', 'Objetivo a los 5 min: SpO₂ > 80% y FC > 100 bpm.');
  phrase('Nota: considerar intubação e surfactante ultra-precoce.', 'Note: consider intubation and very early surfactant.', 'Nota: considerar intubación y surfactante ultraprecoz.');

  // Interpretação de vigilância (idade de vida, SpO₂, FC)
  phrase('Idade de vida ≤ 1 h: fase de transição — vigilância contínua.', 'Postnatal age ≤ 1 h: transition phase — continuous monitoring.', 'Edad posnatal ≤ 1 h: fase de transición — vigilancia continua.');
  phrase('Com IG < 28 sem, a diretriz discute surfactante seletivo precoce em cenários com sinais de SDR — correlacionar clinicamente.',
    'With GA < 28 wk, the guideline discusses early selective surfactant in scenarios with signs of RDS — correlate clinically.',
    'Con EG < 28 sem, la guía discute el surfactante selectivo precoz en escenarios con signos de SDR — correlacionar clínicamente.');
  phrase('Idade de vida {N} h: quadro evolutivo; na prática costuma-se rever critérios e resposta ao suporte — frequência assistencial.',
    'Postnatal age $1 h: evolving picture; in practice, criteria and response to support are usually reviewed — frequency per clinical team.',
    'Edad posnatal $1 h: cuadro en evolución; en la práctica se suelen revisar los criterios y la respuesta al soporte — frecuencia según el equipo asistencial.');
  phrase('Idade de vida {N} h: integrar evolução recente (oxigênio, esforço, exames complementares).',
    'Postnatal age $1 h: integrate the recent course (oxygen, effort, ancillary tests).',
    'Edad posnatal $1 h: integrar la evolución reciente (oxígeno, esfuerzo, exámenes complementarios).');
  phrase('abaixo do alvo sugerido nesta ferramenta para contexto com hipertensão pulmonar (94–97%).',
    'below the target suggested in this tool for a pulmonary hypertension context (94–97%).',
    'por debajo del objetivo sugerido en esta herramienta para el contexto con hipertensión pulmonar (94–97%).');
  phrase('dentro da faixa sugerida para HP (94–97%).', 'within the range suggested for PH (94–97%).', 'dentro del rango sugerido para HP (94–97%).');
  phrase('próximo ao limite superior (alarme máx. sugerido 98%).', 'close to the upper limit (suggested max. alarm 98%).', 'cerca del límite superior (alarma máx. sugerida 98%).');
  phrase('acima do limite de alarme sugerido nesta ferramenta (98%) — correlacionar oxigenoterapia e alvo com a equipe assistencial.',
    'above the alarm limit suggested in this tool (98%) — correlate oxygen therapy and target with the clinical team.',
    'por encima del límite de alarma sugerido en esta herramienta (98%) — correlacionar la oxigenoterapia y el objetivo con el equipo asistencial.');
  phrase('abaixo do alvo habitual sugerido (90–94%).', 'below the usual suggested target (90–94%).', 'por debajo del objetivo habitual sugerido (90–94%).');
  phrase('dentro do alvo habitual (90–94%).', 'within the usual target (90–94%).', 'dentro del objetivo habitual (90–94%).');
  phrase('no limite alto em relação ao alvo; alarmes sugeridos nesta ferramenta até 95% — titulação de FiO₂ conforme avaliação clínica.',
    'at the high end of the target; alarms suggested in this tool up to 95% — FiO₂ titration according to clinical assessment.',
    'en el límite alto respecto al objetivo; alarmas sugeridas en esta herramienta hasta 95% — titulación de FiO₂ según la evaluación clínica.');
  phrase('acima do limite superior de alarme sugerido nesta ferramenta (95%) — correlacionar com risco de hiperóxia e titulação de oxigênio conforme julgamento clínico.',
    'above the upper alarm limit suggested in this tool (95%) — correlate with the risk of hyperoxia and titrate oxygen according to clinical judgment.',
    'por encima del límite superior de alarma sugerido en esta herramienta (95%) — correlacionar con el riesgo de hiperoxia y titular el oxígeno según el juicio clínico.');
  phrase('FC {N} bpm: bradicardia relativa no RN — correlacionar com ventilação, perfusão e causas extra-respiratórias (avaliação clínica).',
    'HR $1 bpm: relative bradycardia in the newborn — correlate with ventilation, perfusion and non-respiratory causes (clinical assessment).',
    'FC $1 bpm: bradicardia relativa en el RN — correlacionar con la ventilación, la perfusión y causas extrarrespiratorias (evaluación clínica).');
  phrase('FC {N} bpm: frequentemente compatível com estabilidade; manter correlação clínica.',
    'HR $1 bpm: often consistent with stability; maintain clinical correlation.',
    'FC $1 bpm: frecuentemente compatible con estabilidad; mantener la correlación clínica.');
  phrase('FC {N} bpm: sem critério isolado na calculadora; correlacionar com esforço respiratório, dor e sedação.',
    'HR $1 bpm: no isolated criterion in the calculator; correlate with respiratory effort, pain and sedation.',
    'FC $1 bpm: sin criterio aislado en la calculadora; correlacionar con el esfuerzo respiratorio, el dolor y la sedación.');

  // ---------------------------------------------------------------------------
  // Textos exatos (tela e relatório)
  registerWithPlain(ITEMS);
  registerWithPlain({
    // Dose teórica
    'Sugestão principal da diretriz: usar dose inicial de 200 mg/kg quando poractant alfa estiver disponível.': [
      'Main guideline suggestion: use an initial dose of 200 mg/kg when poractant alfa is available.',
      'Sugerencia principal de la guía: usar una dosis inicial de 200 mg/kg cuando poractant alfa esté disponible.'
    ],

    // Painel sala de parto (#out_parto, texto em pedaços por <b>)
    'FiO₂ inicial sugerida:': ['Suggested initial FiO₂:', 'FiO₂ inicial sugerida:'],
    'iniciar ≥ 6 cmH₂O se respirando espontaneamente.': ['start at ≥ 6 cmH₂O if breathing spontaneously.', 'iniciar con ≥ 6 cmH₂O si respira espontáneamente.'],
    'VPP:': ['PPV:', 'VPP:'],
    'iniciar se apneia ou respiração ineficaz por': ['start if apnea or ineffective breathing for', 'iniciar si hay apnea o respiración ineficaz durante'],
    'Meta aos 5 min:': ['Target at 5 min:', 'Objetivo a los 5 min:'],
    'SpO₂ > 80% e FC > 100 bpm.': ['SpO₂ > 80% and HR > 100 bpm.', 'SpO₂ > 80% y FC > 100 bpm.'],
    'Nota:': ['Note:', 'Nota:'],
    'considerar intubação e surfactante ultra-precoce.': ['consider intubation and very early surfactant.', 'considerar intubación y surfactante ultraprecoz.'],
    '(Informar idade gestacional.)': ['(Enter gestational age.)', '(Informar la edad gestacional.)'],
    'Informe a IG para exibir parâmetros iniciais descritos na diretriz (finalidade educativa).': [
      'Enter the GA to display the initial parameters described in the guideline (educational purpose).',
      'Informe la EG para mostrar los parámetros iniciales descritos en la guía (finalidad educativa).'
    ],
    'Informe a IG para parâmetros educativos da diretriz.': ['Enter the GA to see the guideline’s educational parameters.', 'Informe la EG para ver los parámetros educativos de la guía.'],

    // Painel terapia de reposição (#out_surf)
    'Critérios numéricos da ferramenta coincidem com cenário em que a diretriz discute surfactante': [
      'The tool’s numerical criteria match the scenario in which the guideline discusses surfactant',
      'Los criterios numéricos de la herramienta coinciden con el escenario en que la guía discute el surfactante'
    ],
    '(técnicas como LISA/MIST são citadas quando há suporte não invasivo adequado).': [
      '(techniques such as LISA/MIST are cited when there is adequate non-invasive support).',
      '(técnicas como LISA/MIST se citan cuando hay soporte no invasivo adecuado).'
    ],
    'Cálculo educativo (200 mg/kg):': ['Educational calculation (200 mg/kg):', 'Cálculo educativo (200 mg/kg):'],
    'de poractant alfa a': ['of poractant alfa at', 'de poractant alfa a'],
    'mg/ml — conferir apresentação local).': ['mg/mL — check the local presentation).', 'mg/ml — verificar la presentación local).'],
    'Redoses:': ['Repeat doses:', 'Redosis:'],
    'na diretriz há discussão de novas doses se persistirem achados compatíveis com SDR e FiO₂ elevada — decisão clínica.': [
      'the guideline discusses further doses if findings consistent with RDS and a high FiO₂ persist — clinical decision.',
      'en la guía se discuten nuevas dosis si persisten hallazgos compatibles con SDR y FiO₂ elevada — decisión clínica.'
    ],
    'Extremo prematuro:': ['Extremely preterm:', 'Prematuro extremo:'],
    'a diretriz discute abordagem seletiva na 1ª hora na presença de sinais precoces — correlacionar com o caso real.': [
      'the guideline discusses a selective approach in the 1st hour when early signs are present — correlate with the actual case.',
      'la guía discute un abordaje selectivo en la primera hora ante signos precoces — correlacionar con el caso real.'
    ],
    'Critérios numéricos atuais não reproduzem o cenário automatizado de surfactante; manter acompanhamento conforme protocolo e parâmetros clínicos/FiO₂ descritos na literatura.': [
      'Current numerical criteria do not reproduce the automated surfactant scenario; continue follow-up according to protocol and the clinical/FiO₂ parameters described in the literature.',
      'Los criterios numéricos actuales no reproducen el escenario automatizado de surfactante; mantener el seguimiento según el protocolo y los parámetros clínicos/FiO₂ descritos en la literatura.'
    ],
    'Informe o peso (g); FiO₂, MAP/CPAP e achados alimentam a comparação educativa com a diretriz.': [
      'Enter the weight (g); FiO₂, MAP/CPAP and findings feed the educational comparison with the guideline.',
      'Informe el peso (g); FiO₂, MAP/CPAP y los hallazgos alimentan la comparación educativa con la guía.'
    ],
    'Informe o peso (g); FiO₂, MAP e achados alimentam a comparação com a diretriz.': [
      'Enter the weight (g); FiO₂, MAP and findings feed the comparison with the guideline.',
      'Informe el peso (g); FiO₂, MAP y los hallazgos alimentan la comparación con la guía.'
    ],

    // Painel UTI/VM (#out_uti)
    'Metas de SpO₂ usualmente citadas na diretriz (informativas):': ['SpO₂ targets usually cited in the guideline (informational):', 'Objetivos de SpO₂ habitualmente citados en la guía (informativos):'],
    '90–94% (faixas de alarme sugeridas nesta ferramenta: mín. 89% / máx. 95%).': [
      '90–94% (alarm limits suggested in this tool: min. 89% / max. 95%).',
      '90–94% (rangos de alarma sugeridos en esta herramienta: mín. 89% / máx. 95%).'
    ],
    '94–97% (faixas de alarme sugeridas nesta ferramenta: mín. 93% / máx. 98%).': [
      '94–97% (alarm limits suggested in this tool: min. 93% / max. 98%).',
      '94–97% (rangos de alarma sugeridos en esta herramienta: mín. 93% / máx. 98%).'
    ],
    'VM:': ['MV:', 'VM:'],
    'a diretriz discute ventilação protetora com': ['the guideline discusses lung-protective ventilation with', 'la guía discute la ventilación protectora con'],
    'volume garantido (VG)': ['volume guarantee (VG)', 'volumen garantizado (VG)'],
    '/ volume-targeted ventilation quando clinicamente indicada.': ['/ volume-targeted ventilation when clinically indicated.', '/ ventilación con volumen objetivo cuando esté clínicamente indicada.'],
    'Pós-extubação:': ['Post-extubation:', 'Posextubación:'],
    'a literatura compara modalidades (ex.: NIPPV vs CPAP) conforme cenário — aplicabilidade local e decisão assistencial.': [
      'the literature compares modalities (e.g., NIPPV vs CPAP) according to the scenario — local applicability and clinical team decision.',
      'la literatura compara modalidades (p. ej., NIPPV vs CPAP) según el escenario — aplicabilidad local y decisión asistencial.'
    ],
    'Informe a IG para exibir metas de oxigenação citadas na diretriz (finalidade educativa).': [
      'Enter the GA to display the oxygenation targets cited in the guideline (educational purpose).',
      'Informe la EG para mostrar los objetivos de oxigenación citados en la guía (finalidad educativa).'
    ],
    'Informe a IG para metas informativas citadas na diretriz.': ['Enter the GA to see the informational targets cited in the guideline.', 'Informe la EG para ver los objetivos informativos citados en la guía.'],

    // Selos
    'Extremamente prematuro': ['Extremely preterm', 'Extremadamente prematuro'],
    'Prematuro <32 semanas': ['Preterm <32 weeks', 'Prematuro <32 semanas'],
    '≥32 semanas': ['≥32 weeks', '≥32 semanas'],
    'FiO2 elevada': ['High FiO2', 'FiO2 elevada'],
    'MAP/CPAP no intervalo usado pela lógica educativa desta ferramenta': ['MAP/CPAP within the range used by this tool’s educational logic', 'MAP/CPAP en el intervalo usado por la lógica educativa de esta herramienta'],
    'Ultrassom sugestivo': ['Suggestive ultrasound', 'Ecografía sugestiva'],
    'Intubado na estabilização': ['Intubated during stabilization', 'Intubado en la estabilización'],
    'Em ventilação mecânica': ['On mechanical ventilation', 'En ventilación mecánica'],
    'ANCS curso único': ['ANCS single course', 'ANCS curso único'],
    'ANCS repetição': ['ANCS repeat course', 'ANCS repetición'],
    'ANCS não documentado': ['ANCS not documented', 'ANCS no documentado'],
    'MgSO₄ neuroproteção': ['MgSO₄ neuroprotection', 'MgSO₄ neuroprotección'],
    'MgSO₄ não doc. / N/A': ['MgSO₄ not doc. / N/A', 'MgSO₄ no doc. / N/A'],

    // Síntese (#resumoAntenatal)
    'Síntese educacional — dados e literatura': ['Educational synthesis — data and literature', 'Síntesis educativa — datos y literatura'],
    'Conteúdo informativo (ordem didática)': ['Informational content (teaching order)', 'Contenido informativo (orden didáctico)'],
    'Surfactante — comparação com critérios desta ferramenta': ['Surfactant — comparison with this tool’s criteria', 'Surfactante — comparación con los criterios de esta herramienta'],
    'Os critérios numéricos deste módulo coincidem com o cenário em que a diretriz discute surfactante — confira dose no texto abaixo e valide clinicamente.': [
      'This module’s numerical criteria match the scenario in which the guideline discusses surfactant — check the dose in the text below and validate clinically.',
      'Los criterios numéricos de este módulo coinciden con el escenario en que la guía discute el surfactante — verifique la dosis en el texto de abajo y valide clínicamente.'
    ],
    'Os critérios numéricos deste módulo não estão preenchidos neste instante — isso não exclui necessidade assistencial.': [
      'This module’s numerical criteria are not met at this moment — this does not rule out clinical need.',
      'Los criterios numéricos de este módulo no se cumplen en este momento — esto no excluye la necesidad asistencial.'
    ],
    'Antenatal + sala de parto': ['Antenatal + delivery room', 'Prenatal + sala de partos'],
    'Abaixo: texto corrido para cópia — linguagem informativa; interpretação e conduta são do profissional assistente.': [
      'Below: running text for copying — informational language; interpretation and management belong to the attending clinician.',
      'Abajo: texto continuo para copiar — lenguaje informativo; la interpretación y la conducta corresponden al profesional tratante.'
    ],
    'para ver aqui a síntese educacional, a comparação com critérios da diretriz (surfactante) e o resumo antenatal/sala.': [
      'to see here the educational synthesis, the comparison with the guideline criteria (surfactant) and the antenatal/delivery room summary.',
      'para ver aquí la síntesis educativa, la comparación con los criterios de la guía (surfactante) y el resumen prenatal/sala de partos.'
    ],

    // Passos da síntese (também numerados no relatório)
    'Paciente sem identificação': ['Unidentified patient', 'Paciente sin identificación'],
    'Contexto informado: suporte não invasivo; correlacionar esforço, FiO₂, USG e eventual mudança de modalidade com protocolo institucional.': [
      'Context entered: non-invasive support; correlate effort, FiO₂, US and any change of modality with the institutional protocol.',
      'Contexto informado: soporte no invasivo; correlacionar esfuerzo, FiO₂, ecografía y un eventual cambio de modalidad con el protocolo institucional.'
    ],
    'Nota educativa (CPAP): a diretriz discute interface, vazamento e pressão — aplicar conforme prescrição e unidade.': [
      'Educational note (CPAP): the guideline discusses interface, leak and pressure — apply according to prescription and unit.',
      'Nota educativa (CPAP): la guía discute interfaz, fuga y presión — aplicar según la prescripción y la unidad.'
    ],
    'Nota educativa (NIPPV): indicações e ajustes constam em protocolos locais e na literatura — não prescritas por esta ferramenta.': [
      'Educational note (NIPPV): indications and settings are found in local protocols and the literature — not prescribed by this tool.',
      'Nota educativa (NIPPV): las indicaciones y los ajustes constan en los protocolos locales y en la literatura — no los prescribe esta herramienta.'
    ],
    'Nota educativa (HFNC): a literatura correlaciona piora com discussão de CPAP/NIPPV em determinados cenários.': [
      'Educational note (HFNC): the literature links deterioration with considering CPAP/NIPPV in certain scenarios.',
      'Nota educativa (HFNC): la literatura relaciona el empeoramiento con la discusión de CPAP/NIPPV en determinados escenarios.'
    ],
    'Nota educativa (VM): diretriz enfatiza estratégia protetora e metas — implementação depende de avaliação clínica.': [
      'Educational note (MV): the guideline emphasizes a lung-protective strategy and targets — implementation depends on clinical assessment.',
      'Nota educativa (VM): la guía enfatiza la estrategia protectora y los objetivos — la implementación depende de la evaluación clínica.'
    ],
    'SpO₂ abaixo da faixa usualmente citada na diretriz — correlacionar com oxigenoterapia, interface e gravidade do quadro.': [
      'SpO₂ below the range usually cited in the guideline — correlate with oxygen therapy, interface and severity.',
      'SpO₂ por debajo del rango habitualmente citado en la guía — correlacionar con la oxigenoterapia, la interfaz y la gravedad del cuadro.'
    ],
    'SpO₂ acima da meta usual na diretriz para contexto sem HP selecionada — correlacionar risco de hiperóxia.': [
      'SpO₂ above the usual guideline target for a context without PH selected — correlate the risk of hyperoxia.',
      'SpO₂ por encima del objetivo habitual de la guía para un contexto sin HP seleccionada — correlacionar el riesgo de hiperoxia.'
    ],
    'SpO₂ muito elevada no contexto de HP assinalado — metas devem ser individualizadas pela equipe.': [
      'SpO₂ very high in the checked PH context — targets must be individualized by the team.',
      'SpO₂ muy elevada en el contexto de HP marcado — los objetivos deben ser individualizados por el equipo.'
    ],
    'FC baixa para o contexto — correlacionar com ventilação, perfusão e causas não respiratórias.': [
      'Low HR for the context — correlate with ventilation, perfusion and non-respiratory causes.',
      'FC baja para el contexto — correlacionar con la ventilación, la perfusión y causas no respiratorias.'
    ],
    'Apneias assinaladas — na literatura discute-se correlação com falha de suporte não invasivo; decisão assistencial.': [
      'Apneas checked — the literature discusses an association with non-invasive support failure; clinical team decision.',
      'Apneas marcadas — en la literatura se discute la relación con el fracaso del soporte no invasivo; decisión asistencial.'
    ],
    'Prematuro extremo na 1ª hora com sinais assinalados: a diretriz discute surfactante seletivo precoce em cenários semelhantes — não é determinação automatizada.': [
      'Extremely preterm infant in the 1st hour with signs checked: the guideline discusses early selective surfactant in similar scenarios — not an automated determination.',
      'Prematuro extremo en la primera hora con signos marcados: la guía discute el surfactante selectivo precoz en escenarios similares — no es una determinación automatizada.'
    ],
    'Critérios numéricos não preenchidos neste instante; a diretriz discute vigilância na 1ª hora e disponibilidade de surfactante se piora — planejamento institucional.': [
      'Numerical criteria not met at this moment; the guideline discusses monitoring in the 1st hour and surfactant availability if deterioration occurs — institutional planning.',
      'Criterios numéricos no cumplidos en este momento; la guía discute la vigilancia en la primera hora y la disponibilidad de surfactante si hay empeoramiento — planificación institucional.'
    ],
    'Critérios numéricos não preenchidos; na diretriz discute-se surfactante com FiO₂ elevada ou piora clínica — acompanhamento assistencial.': [
      'Numerical criteria not met; the guideline discusses surfactant with high FiO₂ or clinical deterioration — clinical follow-up.',
      'Criterios numéricos no cumplidos; en la guía se discute el surfactante con FiO₂ elevada o empeoramiento clínico — seguimiento asistencial.'
    ],
    'Metas de SpO₂ citadas na diretriz (apoio informativo): 90–94% | faixa de alarmes sugerida nesta ferramenta: 89–95% — ajustar ao paciente e à unidade.': [
      'SpO₂ targets cited in the guideline (informational support): 90–94% | alarm range suggested in this tool: 89–95% — adjust to the patient and the unit.',
      'Objetivos de SpO₂ citados en la guía (apoyo informativo): 90–94% | rango de alarmas sugerido en esta herramienta: 89–95% — ajustar al paciente y a la unidad.'
    ],
    'Metas de SpO₂ citadas na diretriz (apoio informativo): 94–97% | faixa de alarmes sugerida nesta ferramenta: mín. 93% / máx. 98% — ajustar ao paciente e à unidade.': [
      'SpO₂ targets cited in the guideline (informational support): 94–97% | alarm range suggested in this tool: min. 93% / max. 98% — adjust to the patient and the unit.',
      'Objetivos de SpO₂ citados en la guía (apoyo informativo): 94–97% | rango de alarmas sugerido en esta herramienta: mín. 93% / máx. 98% — ajustar al paciente y a la unidad.'
    ],
    'Reavaliação clínica periódica: trabalho respiratório, FiO₂, interface, USG/gasometria quando disponíveis.': [
      'Periodic clinical reassessment: work of breathing, FiO₂, interface, US/blood gases when available.',
      'Reevaluación clínica periódica: trabajo respiratorio, FiO₂, interfaz, ecografía/gasometría cuando estén disponibles.'
    ],

    // Relatório (#resultado)
    'SDR — RESUMO INFORMATIVO (EDUCACIONAL)': ['RDS — INFORMATIONAL SUMMARY (EDUCATIONAL)', 'SDR — RESUMEN INFORMATIVO (EDUCATIVO)'],
    'USG PULMONAR (texto importado do LUS Score — referência consultiva)': ['LUNG ULTRASOUND (text imported from the LUS Score — advisory reference)', 'ECOGRAFÍA PULMONAR (texto importado del LUS Score — referencia consultiva)'],
    'SÍNTESE CORRELACIONADA À DIRETRIZ (não prescreve nem substitui julgamento clínico)': [
      'SYNTHESIS CORRELATED WITH THE GUIDELINE (does not prescribe or replace clinical judgment)',
      'SÍNTESIS CORRELACIONADA CON LA GUÍA (no prescribe ni sustituye el juicio clínico)'
    ],
    'SURFACTANTE — CRITÉRIOS NUMÉRICOS DESTA FERRAMENTA': ['SURFACTANT — THIS TOOL’S NUMERICAL CRITERIA', 'SURFACTANTE — CRITERIOS NUMÉRICOS DE ESTA HERRAMIENTA'],
    'Produto frequentemente citado na diretriz de referência: poractant alfa (conferir protocolo e apresentação locais).': [
      'Product frequently cited in the reference guideline: poractant alfa (check local protocol and presentation).',
      'Producto citado con frecuencia en la guía de referencia: poractant alfa (verificar el protocolo y la presentación locales).'
    ],
    'Oxigenação / condição especial assinalada': ['Oxygenation / special condition checked', 'Oxigenación / condición especial marcada'],
    'DBP com hipertensão pulmonar (campo condição especial)': ['BPD with pulmonary hypertension (special condition field)', 'DBP con hipertensión pulmonar (campo condición especial)'],
    'Hipertensão pulmonar assinalada nos achados da UTI neonatal': ['Pulmonary hypertension checked in the NICU findings', 'Hipertensión pulmonar marcada en los hallazgos de la UCI neonatal'],
    'DBP com HP (condição especial) e hipertensão pulmonar nos achados da UTI neonatal': ['BPD with PH (special condition) and pulmonary hypertension in the NICU findings', 'DBP con HP (condición especial) e hipertensión pulmonar en los hallazgos de la UCI neonatal'],
    'Nenhuma': ['None', 'Ninguna'],
    'CONTEXTO (antecedentes e UTI) — resumo informativo': ['CONTEXT (history and NICU) — informational summary', 'CONTEXTO (antecedentes y UCI) — resumen informativo'],
    'TRECHOS MENCIONADOS NA DIRETRIZ (leitura — não substituem protocolo)': ['EXCERPTS MENTIONED IN THE GUIDELINE (reading — they do not replace protocol)', 'FRAGMENTOS MENCIONADOS EN LA GUÍA (lectura — no sustituyen el protocolo)'],
    'Hipotensão: diretriz discute evitar bolus salino de rotina.': ['Hypotension: the guideline discusses avoiding routine saline boluses.', 'Hipotensión: la guía discute evitar bolos de solución salina de rutina.'],
    'Antibióticos: diretriz discute suspensão com culturas negativas em 36–48 h.': ['Antibiotics: the guideline discusses stopping them when cultures are negative at 36–48 h.', 'Antibióticos: la guía discute suspenderlos con cultivos negativos a las 36–48 h.'],
    'Nutrição: diretriz menciona NPT + enteral mínima em contextos descritos no texto-fonte.': ['Nutrition: the guideline mentions PN + minimal enteral feeding in the contexts described in the source text.', 'Nutrición: la guía menciona NP + enteral mínima en los contextos descritos en el texto fuente.'],
    'PDA: diretriz favorece conduta conservadora; intervenção se sintomático (assistencial).': ['PDA: the guideline favors conservative management; intervention if symptomatic (clinical team).', 'DAP: la guía favorece la conducta conservadora; intervención si es sintomático (asistencial).'],
    'Ref.: Sweet DG et al. European Consensus RDS 2025. Neonatology 2026. DOI 10.1159/000551062.': ['Ref.: Sweet DG et al. European Consensus RDS 2025. Neonatology 2026. DOI 10.1159/000551062.', 'Ref.: Sweet DG et al. European Consensus RDS 2025. Neonatology 2026. DOI 10.1159/000551062.'],
    '(Texto ampliado ANCS/MgSO₄ permanece no bloco «Medicação antenatal materna» — finalidade educativa.)': [
      '(The extended ANCS/MgSO₄ text remains in the «Maternal antenatal medication» block — educational purpose.)',
      '(El texto ampliado de ANCS/MgSO₄ permanece en el bloque «Medicación prenatal materna» — finalidad educativa.)'
    ],
    'OBSERVAÇÕES (UTI)': ['NOTES (NICU)', 'OBSERVACIONES (UCI)'],

    // Rótulos de suporte usados no relatório
    'NIPPV / ventilação nasal': ['NIPPV / nasal ventilation', 'NIPPV / ventilación nasal'],
    'Ventilação mecânica': ['Mechanical ventilation', 'Ventilación mecánica'],
    'Ar ambiente / sem suporte': ['Room air / no support', 'Aire ambiente / sin soporte'],

    // Dados recebidos do LUS Score (valores fixos daquela página)
    'Leve': ['Mild', 'Leve'],
    'Moderado': ['Moderate', 'Moderado'],
    'Importante': ['Significant', 'Importante'],
    'Grave': ['Severe', 'Grave'],
    'Padrão compatível com boa aeração ou comprometimento leve. Em geral, manter observação clínica e reavaliar conforme necessidade.': [
      'Pattern consistent with good aeration or mild involvement. In general, maintain clinical observation and reassess as needed.',
      'Patrón compatible con buena aireación o compromiso leve. En general, mantener la observación clínica y reevaluar según necesidad.'
    ],
    'Há perda de aeração em múltiplas zonas. Reforçar monitorização e revisar resposta ao suporte respiratório.': [
      'There is loss of aeration in multiple zones. Step up monitoring and review the response to respiratory support.',
      'Hay pérdida de aireación en múltiples zonas. Reforzar la monitorización y revisar la respuesta al soporte respiratorio.'
    ],
    'Comprometimento ultrassonográfico significativo. Em RN com SDR e maior necessidade de oxigênio, pode reforçar a discussão sobre surfactante.': [
      'Significant ultrasound involvement. In a newborn with RDS and higher oxygen requirement, it may support the discussion about surfactant.',
      'Compromiso ecográfico significativo. En un RN con SDR y mayor necesidad de oxígeno, puede reforzar la discusión sobre el surfactante.'
    ],
    'Padrão de maior gravidade, com perda importante de aeração e/ou consolidações em várias zonas. Exige reavaliação imediata do suporte e da estratégia terapêutica.': [
      'More severe pattern, with marked loss of aeration and/or consolidations in several zones. Requires immediate reassessment of support and therapeutic strategy.',
      'Patrón de mayor gravedad, con pérdida importante de aireación y/o consolidaciones en varias zonas. Exige reevaluación inmediata del soporte y de la estrategia terapéutica.'
    ],

    // Mensagens de cópia (fallback sem neopedCopySuccess)
    'Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.': [
      'Text copied. Review it in full before any use in clinical documentation or sharing.',
      'Texto copiado. Revíselo íntegramente antes de cualquier uso en documentación clínica o de compartirlo.'
    ],
    'Nao foi possivel copiar automaticamente. Revise o texto e copie manualmente para uso informativo.': [
      'Could not copy automatically. Review the text and copy it manually for informational use.',
      'No fue posible copiar automáticamente. Revise el texto y cópielo manualmente para uso informativo.'
    ],
    'Preencha pelo menos idade gestacional, peso e FiO2.': ['Fill in at least gestational age, weight and FiO2.', 'Complete al menos la edad gestacional, el peso y la FiO2.']
  });

  // ---------------------------------------------------------------------------
  // Padrões para linhas montadas com valores
  var SIM = { sim: ['yes', 'sí'], 'não': ['no', 'no'], nao: ['no', 'no'] };
  function yesNo(v, lang) { return (SIM[v] || [v, v])[lang === 'en' ? 0 : 1]; }

  i18n.registerPatterns([
    // Prefixo numerado ("3. ") e/ou marcador ("- ", "• ", "▶ ", "⚠ ") do relatório: traduz o restante.
    rule(/^(\d+\. (?:[-•▶⚠] )?|[-•▶⚠] )(.+)$/, function (a, lang) {
      return a[1] + tr(a[2], lang);
    }),

    // Peso no bloco de dose teórica
    rule(/^Peso: (\d+) g \(([\d.]+) kg\)$/, function (a, lang) {
      return pick(lang, 'Weight: ', 'Peso: ') + a[1] + ' g (' + a[2] + ' kg)';
    }),

    // Dados para conferência
    rule(new RegExp('^' + fuzzy('Dados informados para conferência: ') + '(.*?) \\| IG ([\\d.]+) sem \\| (\\d+) g \\| (.*?)((?: \\| MAP/CPAP [\\d.]+ cmH[₂2]O)?) \\| (FiO[₂2]) ([\\d.]+)((?: \\| SpO[₂2] \\d+%)?)(?: \\| FC (\\d+))?$'), function (a, lang) {
      var out = pick(lang, 'Data entered for verification: ', 'Datos informados para verificación: ') + tr(a[1], lang) +
        ' | ' + pick(lang, 'GA ', 'EG ') + a[2] + pick(lang, ' wk', ' sem') + ' | ' + a[3] + ' g | ' + tr(a[4], lang) + a[5] +
        ' | ' + a[6] + ' ' + a[7] + a[8] + (a[9] ? ' | ' + pick(lang, 'HR ', 'FC ') + a[9] : '');
      return shape(a[0], out, lang);
    }),

    // Ponto a correlacionar (alertas)
    rule(new RegExp('^' + fuzzy('Ponto a correlacionar clinicamente: ') + '(.+)$'), function (a, lang) {
      return shape(a[0], pick(lang, 'Point to correlate clinically: ', 'Punto a correlacionar clínicamente: '), lang) + tr(a[1], lang);
    }),

    // Comparação: RN < 32 s intubado (dose calculada)
    rule(new RegExp('^' + fuzzy('Comparação com diretriz: RN <32s intubado na estabilização — literatura enfatiza discussão precoce de surfactante. Dose frequentemente citada: 200 mg/kg = {N} mg (≈ {N} mL se preparação 80 mg/mL — conferir produto). Decisão e via: assistencial.') + '$'), function (a, lang) {
      return shape(a[0], pick(lang,
        'Guideline comparison: newborn <32 wk intubated during stabilization — the literature emphasizes early consideration of surfactant. Frequently cited dose: 200 mg/kg = ' + a[1] + ' mg (≈ ' + a[2] + ' mL if 80 mg/mL preparation — check product). Decision and route: clinical team.',
        'Comparación con la guía: RN <32 sem intubado en la estabilización — la literatura enfatiza la discusión precoz del surfactante. Dosis citada con frecuencia: 200 mg/kg = ' + a[1] + ' mg (≈ ' + a[2] + ' mL si preparación de 80 mg/mL — verificar producto). Decisión y vía: asistencial.'), lang);
    }),

    // Critérios coincidem (dose calculada)
    rule(new RegExp('^' + fuzzy('Critérios numéricos desta ferramenta coincidem com cenário em que a diretriz discute surfactante. Dose usualmente citada: 200 mg/kg = {N} mg (≈ {N} mL se 80 mg/mL). Via/técnica (incl. LISA/MIST): protocolo e juízo clínico.') + '$'), function (a, lang) {
      return shape(a[0], pick(lang,
        'This tool’s numerical criteria match the scenario in which the guideline discusses surfactant. Usually cited dose: 200 mg/kg = ' + a[1] + ' mg (≈ ' + a[2] + ' mL if 80 mg/mL). Route/technique (incl. LISA/MIST): protocol and clinical judgment.',
        'Los criterios numéricos de esta herramienta coinciden con el escenario en que la guía discute el surfactante. Dosis habitualmente citada: 200 mg/kg = ' + a[1] + ' mg (≈ ' + a[2] + ' mL si 80 mg/mL). Vía/técnica (incl. LISA/MIST): protocolo y juicio clínico.'), lang);
    }),

    // Linha de critérios sim/não do relatório
    rule(new RegExp('^' + fuzzy('Critérios reproduzidos pelo módulo preenchidos agora: ') + '(sim \\(' + fuzzy('cenário frequentemente discutido na diretriz') + '\\)|n[aã]o) \\| (FiO[₂2])(?:≥|>=)0,30: (sim|n[aã]o) \\| MAP(?:≥|>=)6: (sim|n[aã]o) \\| USG\\+: (sim|n[aã]o) \\| ' + fuzzy('Esforço/apneia/BC: ') + '(sim|n[aã]o)$'), function (a, lang) {
      var met = /^sim/.test(a[1]) ? pick(lang, 'yes (scenario frequently discussed in the guideline)', 'sí (escenario discutido con frecuencia en la guía)') : yesNo(plain(a[1]), lang);
      var ge = a[0].indexOf('≥') !== -1 ? '≥' : '>=';
      var out = pick(lang, 'Criteria reproduced by the module currently met: ', 'Criterios reproducidos por el módulo cumplidos ahora: ') + met +
        '  |  ' + a[2] + ge + pick(lang, '0.30', '0,30') + ': ' + yesNo(plain(a[3]), lang) +
        '  |  MAP' + ge + '6: ' + yesNo(plain(a[4]), lang) +
        '  |  ' + pick(lang, 'US+: ', 'Eco+: ') + yesNo(plain(a[5]), lang) +
        '  |  ' + pick(lang, 'Effort/apnea/brady: ', 'Esfuerzo/apnea/BC: ') + yesNo(plain(a[6]), lang);
      return shape(a[0], out, lang);
    }),

    // Listas rotuladas (síntese e relatório)
    rule(/^(Antenatal|Sala|Sala de parto \(checklist\)|UTI (?:—|-) achados assinalados): (.*)$/, function (a, lang) {
      var labels = {
        'Antenatal': ['Antenatal', 'Prenatal'],
        'Sala': ['Delivery room', 'Sala de partos'],
        'Sala de parto (checklist)': ['Delivery room (checklist)', 'Sala de partos (lista de verificación)']
      };
      var key = a[1];
      var label = labels[key] ? pick(lang, labels[key][0], labels[key][1]) : shape(a[0], pick(lang, 'NICU — findings checked', 'UCI — hallazgos marcados'), lang);
      return label + ': ' + replacePhrases(a[2], lang);
    }),
    rule(new RegExp('^IG (?:→ )?' + fuzzy('parâmetros iniciais descritos na diretriz (educativo): ') + '(.*)$'), function (a, lang) {
      var label = shape(a[0], pick(lang, 'GA → initial parameters described in the guideline (educational): ', 'EG → parámetros iniciales descritos en la guía (educativo): '), lang);
      return label.replace(/ {2,}/g, ' ') + replacePhrases(a[1], lang);
    }),
    rule(new RegExp('^' + fuzzy('Parâmetros idade/SpO₂/FC (interpretação consultiva): ') + '(.*)$'), function (a, lang) {
      return shape(a[0], pick(lang, 'Age/SpO₂/HR parameters (advisory interpretation): ', 'Parámetros edad/SpO₂/FC (interpretación consultiva): '), lang) + replacePhrases(a[1], lang);
    }),

    // Bloco importado do LUS Score e retorno do LUS na tela
    rule(/^Score: (\d+)\/18(.*)$/, function (a, lang) {
      return 'Score: ' + a[1] + '/18' + a[2].replace(/ \| (Gravidade|Faixa): (.*?)(?= \| |$)/g, function (_, k, val) {
        var lab = k === 'Gravidade' ? pick(lang, 'Severity', 'Gravedad') : pick(lang, 'Range', 'Rango');
        return ' | ' + lab + ': ' + tr(val.trim(), lang);
      });
    }),
    rule(new RegExp('^' + fuzzy('Interpretação: ') + '(.+)$'), function (a, lang) {
      return shape(a[0], pick(lang, 'Interpretation: ', 'Interpretación: '), lang) + tr(a[1], lang);
    }),
    rule(/^LUS: (\d+)\/18(.*)$/, function (a, lang) {
      var parts = a[2].split(' | ').slice(1).map(function (p) {
        var m = p.match(/^faixa (.*)$/);
        if (m) return pick(lang, 'range ', 'rango ') + m[1];
        m = p.match(/^sugestão USG: (positiva|não sugestiva)$/);
        if (m) return pick(lang, 'US suggestion: ', 'sugerencia ecográfica: ') + (m[1] === 'positiva' ? pick(lang, 'positive', 'positiva') : pick(lang, 'not suggestive', 'no sugestiva'));
        return tr(p, lang);
      });
      return 'LUS: ' + a[1] + '/18' + (parts.length ? ' | ' + parts.join(' | ') : '');
    })
  ]);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
