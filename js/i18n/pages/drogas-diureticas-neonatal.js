/* Drogas diuréticas neonatais (files/drogas_diureticas_neonatal.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  /** Linha "rótulo: valor" do texto copiado: rótulo fixo; o valor passa pelo dicionário. */
  function line(pt, en, es) {
    var re = new RegExp('^' + esc(pt) + ':(?:\\s+(.*))?$');
    return [re,
      function (m, v) { return en + ':' + (v ? ' ' + i18n.t(v, 'en') : ''); },
      function (m, v) { return es + ':' + (v ? ' ' + i18n.t(v, 'es') : ''); }];
  }

  function unaccent(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  // Nomes, chaves internas (o texto copiado imprime a chave em "Droga:") e observações.
  // No inglês, a vírgula decimal das observações vira ponto; o espanhol mantém a grafia original.
  var DRUGS = [
    ['bumetanide_ev', 'Bumetanide (E.V.)', 'Bumetanide (IV)', 'Bumetanida (IV)'],
    ['bumetanide_vo', 'Bumetanide (V.O.)', 'Bumetanide (PO)', 'Bumetanida (VO)'],
    ['furosemide_ev', 'Furosemide (E.V.)', 'Furosemide (IV)', 'Furosemida (IV)'],
    ['furosemide_vo', 'Furosemide (V.O.)', 'Furosemide (PO)', 'Furosemida (VO)'],
    ['furosemide_continuo_ev', 'Furosemide contínuo (E.V.)', 'Continuous furosemide (IV)', 'Furosemida continua (IV)'],
    ['hidroclortiazida_vo', 'Hidroclortiazida (V.O.)', 'Hydrochlorothiazide (PO)', 'Hidroclorotiazida (VO)'],
    ['espironolactone_vo', 'Espironolactone (V.O.)', 'Spironolactone (PO)', 'Espironolactona (VO)'],
    ['acetazolamida_vo', 'Acetazolamida (V.O.)', 'Acetazolamide (PO)', 'Acetazolamida (VO)']
  ];

  var D = {
    'MAX. 0.1mg/dia. Ampola 0,25mg/ml': ['MAX. 0.1mg/day. Ampule 0.25mg/ml', 'MÁX. 0.1mg/día. Ampolla 0,25mg/ml'],
    'MAX. 0.1mg/dia. CP 0,5mg, 1mg e 2 mg': ['MAX. 0.1mg/day. Tablets 0.5mg, 1mg and 2 mg', 'MÁX. 0.1mg/día. Comprimidos 0,5mg, 1mg y 2 mg'],
    'Ampola 10mg/ml. MAX. 6mg/kg/dia': ['Ampule 10mg/ml. MAX. 6mg/kg/day', 'Ampolla 10mg/ml. MÁX. 6mg/kg/día'],
    'CP de 20mg, 40mg, 80mg Sol oral 40mg/5ml. MAX. 6mg/kg/dia': ['Tablets 20mg, 40mg, 80mg; oral solution 40mg/5ml. MAX. 6mg/kg/day', 'Comprimidos de 20mg, 40mg, 80mg; solución oral 40mg/5ml. MÁX. 6mg/kg/día'],
    'Ampola 10mg/ml. Para casos graves': ['Ampule 10mg/ml. For severe cases', 'Ampolla 10mg/ml. Para casos graves'],
    'CP de 12,5mg, 25mg, 50mg. MAX. 37.5mg/dia': ['Tablets 12.5mg, 25mg, 50mg. MAX. 37.5mg/day', 'Comprimidos de 12,5mg, 25mg, 50mg. MÁX. 37.5mg/día'],
    'CP 25mg, 50mg, 100mg. MAX. 3.3mg/kg/dia': ['Tablets 25mg, 50mg, 100mg. MAX. 3.3mg/kg/day', 'Comprimidos 25mg, 50mg, 100mg. MÁX. 3.3mg/kg/día'],
    'Pode ser usada em ICC crônica. MAX. 30mg/kg/dia': ['May be used in chronic CHF. MAX. 30mg/kg/day', 'Puede usarse en la ICC crónica. MÁX. 30mg/kg/día'],
    'Informações não disponíveis': ['Information not available', 'Información no disponible'],

    // Cabeçalho e formulário
    'NeoPedCalc — Drogas diuréticas neonatais (educativo)': ['NeoPedCalc — Neonatal diuretic drugs (educational)', 'NeoPedCalc — Fármacos diuréticos neonatales (educativo)'],
    'Drogas diuréticas (neonato)': ['Diuretic drugs (neonate)', 'Fármacos diuréticos (neonato)'],
    'Ferramenta educativa — cálculos a partir de referências embutidas;': ['Educational tool — calculations from built-in references;', 'Herramienta educativa — cálculos a partir de referencias integradas;'],
    'não prescreve': ['does not prescribe', 'no prescribe'],
    '. RN: volume, eletrólitos e função renal mudam rápido — confirme com bulário e equipe.': ['. Newborns: volume, electrolytes and renal function change quickly — confirm with the drug label and the team.', '. RN: el volumen, los electrolitos y la función renal cambian rápido — confirme con el prospecto y el equipo.'],
    'Como usar': ['How to use', 'Cómo usar'],
    'Nome do Paciente:': ['Patient Name:', 'Nombre del paciente:'],
    'Nome do neonato': ['Neonate’s name', 'Nombre del neonato'],
    'Data de Nascimento:': ['Date of Birth:', 'Fecha de nacimiento:'],
    'Peso (kg):': ['Weight (kg):', 'Peso (kg):'],
    'Ex: 1.5': ['e.g., 1.5', 'Ej.: 1.5'],
    'Idade Cronológica:': ['Chronological Age:', 'Edad cronológica:'],
    'Idade Gestacional ao Nascer (semanas):': ['Gestational Age at Birth (weeks):', 'Edad gestacional al nacer (semanas):'],
    'Ex: 32.5': ['e.g., 32.5', 'Ej.: 32.5'],
    'Idade Gestacional Corrigida:': ['Corrected Gestational Age:', 'Edad gestacional corregida:'],
    'Configuracao da Droga': ['Drug Settings', 'Configuración del fármaco'],
    'Selecione a Droga:': ['Select the Drug:', 'Seleccione el fármaco:'],
    'Selecione uma droga...': ['Select a drug...', 'Seleccione un fármaco...'],
    'Dose (mg):': ['Dose (mg):', 'Dosis (mg):'],
    'Ex: 0.5': ['e.g., 0.5', 'Ej.: 0.5'],
    'Unidade da Dose:': ['Dose Unit:', 'Unidad de la dosis:'],
    'mg/kg/dose': ['mg/kg/dose', 'mg/kg/dosis'],
    'mg/kg/dia': ['mg/kg/day', 'mg/kg/día'],
    'mg/kg/hora': ['mg/kg/h', 'mg/kg/hora'],
    'mg/dose': ['mg/dose', 'mg/dosis'],
    'mg/dia': ['mg/day', 'mg/día'],
    'Apresentação:': ['Presentation:', 'Presentación:'],
    'Ex: 40mg/5ml': ['e.g., 40mg/5ml', 'Ej.: 40mg/5ml'],
    'Intervalo entre Doses:': ['Dosing Interval:', 'Intervalo entre dosis:'],
    'horas': ['hours', 'horas'],
    'Contínuo': ['Continuous', 'Continuo'],
    'Observações:': ['Notes:', 'Observaciones:'],
    'Informações adicionais': ['Additional information', 'Información adicional'],
    'Acrescentar cálculo ao texto': ['Add calculation to the text', 'Añadir cálculo al texto'],

    // Resultados
    'Resultados do Calculo': ['Calculation Results', 'Resultados del cálculo'],
    'Nome da Droga': ['Drug Name', 'Nombre del fármaco'],
    'Dosagem Calculada': ['Calculated Dose', 'Dosis calculada'],
    'Dose Total (24h)': ['Total Dose (24h)', 'Dosis total (24h)'],
    'Volume da Droga (ml)': ['Drug Volume (ml)', 'Volumen del fármaco (ml)'],
    'Velocidade de Infusão': ['Infusion Rate', 'Velocidad de infusión'],
    'Dose por Aplicacao': ['Dose per Administration', 'Dosis por administración'],
    'Informações da Droga': ['Drug Information', 'Información del fármaco'],
    'Copiar texto informativo (histórico)': ['Copy informational text (history)', 'Copiar texto informativo (historial)'],

    // Modal "Como usar"
    'Como usar — drogas diuréticas neonatais (educativo)': ['How to use — neonatal diuretic drugs (educational)', 'Cómo usar — fármacos diuréticos neonatales (educativo)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Calcular': ['Calculate', 'Calcular'],
    'valores numéricos': ['numerical values', 'valores numéricos'],
    '(dose, volume, taxa de infusão quando aplicável) com base no peso, na idade gestacional informada e nas regras embutidas no app. Uso': ['(dose, volume, infusion rate when applicable) based on weight, the gestational age entered and the rules built into the app. Use for', '(dosis, volumen, velocidad de infusión cuando corresponda) según el peso, la edad gestacional ingresada y las reglas integradas en la app. Uso'],
    'educativo e de conferência': ['education and cross-checking', 'educativo y de verificación'],
    'nem substitui balanço hídrico, eletrólitos ou decisões da neonatologia.': ['and does not replace fluid balance, electrolytes or neonatology decisions.', 'ni sustituye el balance hídrico, los electrolitos ni las decisiones de neonatología.'],
    'Ideia dos cálculos (resumo)': ['How the calculations work (summary)', 'Idea de los cálculos (resumen)'],
    'Dose por peso e unidade → totais → volume pela': ['Dose by weight and unit → totals → volume from the', 'Dosis por peso y unidad → totales → volumen según la'],
    'apresentação': ['presentation', 'presentación'],
    '; infusão contínua usa volume e tempo para ml/h.': ['; continuous infusion uses volume and time for ml/h.', '; la infusión continua usa volumen y tiempo para ml/h.'],
    'O app pode aplicar': ['The app may apply', 'La app puede aplicar'],
    'fatores internos': ['internal factors', 'factores internos'],
    'ligados à IG — são simplificações para o simulador; a conduta real segue protocolo e monografia.': ['linked to GA — these are simplifications for the simulator; actual management follows the protocol and the drug monograph.', 'vinculados a la EG — son simplificaciones para el simulador; la conducta real sigue el protocolo y la monografía.'],
    'Como usar na tela': ['How to use the screen', 'Cómo usar la pantalla'],
    'Preencha dados do RN, peso e idade gestacional ao nascer (para cálculos/correções internas).': ['Enter the newborn’s data, weight and gestational age at birth (for internal calculations/corrections).', 'Complete los datos del RN, el peso y la edad gestacional al nacer (para cálculos/correcciones internos).'],
    'Selecione a droga e revise dose, apresentação e intervalo.': ['Select the drug and review dose, presentation and interval.', 'Seleccione el fármaco y revise dosis, presentación e intervalo.'],
    'monta o histórico.': ['builds the history.', 'arma el historial.'],
    '— revise antes de arquivar ou compartilhar.': ['— review before filing or sharing.', '— revise antes de archivar o compartir.'],
    'Classes na lista': ['Classes in the list', 'Clases en la lista'],
    'Diuréticos de alça, tiazídicos, poupadores de potássio, inibidor de anidrase carbônica, osmóticos — conforme a base do aplicativo.': ['Loop diuretics, thiazides, potassium-sparing diuretics, carbonic anhydrase inhibitor, osmotic diuretics — according to the app database.', 'Diuréticos de asa, tiazídicos, ahorradores de potasio, inhibidor de la anhidrasa carbónica, osmóticos — según la base de la aplicación.'],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Não modela todos os cenários de doença renal, sepse ou suporte avançado.': ['Does not model every scenario of renal disease, sepsis or advanced support.', 'No modela todos los escenarios de enfermedad renal, sepsis o soporte avanzado.'],
    'Resposta ao diurético e risco eletrolítico variam muito no RN.': ['Diuretic response and electrolyte risk vary widely in newborns.', 'La respuesta al diurético y el riesgo electrolítico varían mucho en el RN.'],
    'Texto copiado é arquivo para revisão, não prescrição.': ['Copied text is a record for review, not a prescription.', 'El texto copiado es un registro para revisión, no una prescripción.'],
    'Referências:': ['References:', 'Referencias:'],

    // Alertas
    'Nenhum calculo no historico. Use "Acrescentar calculo ao texto" pelo menos uma vez antes de copiar.': ['No calculation in the history. Use "Add calculation to the text" at least once before copying.', 'No hay ningún cálculo en el historial. Use "Añadir cálculo al texto" al menos una vez antes de copiar.'],
    'Texto copiado. Revise numeros e contexto antes de usar em registro clinico ou mensagem.': ['Text copied. Review the numbers and context before using it in a clinical record or message.', 'Texto copiado. Revise los números y el contexto antes de usarlo en un registro clínico o mensaje.'],

    // Texto copiado
    'RESUMO INFORMATIVO — Drogas diureticas neonatais (NeoPedCalc, uso educativo)': ['INFORMATIONAL SUMMARY — Neonatal diuretic drugs (NeoPedCalc, educational use)', 'RESUMEN INFORMATIVO — Fármacos diuréticos neonatales (NeoPedCalc, uso educativo)'],
    'DADOS INFORMADOS (primeiro registro do historico)': ['DATA ENTERED (first entry in the history)', 'DATOS INGRESADOS (primer registro del historial)'],
    'HISTORICO DE CALCULOS (revisar)': ['CALCULATION HISTORY (review)', 'HISTORIAL DE CÁLCULOS (revisar)'],
    'DETALHES': ['DETAILS', 'DETALLES'],
    'LEMBRETES EDUCATIVOS': ['EDUCATIONAL REMINDERS', 'RECORDATORIOS EDUCATIVOS'],
    '- RN: diurese, Na, K, volume e perfusao mudam rapidamente — correlacione com exame e protocolo da UTI.': ['- Newborns: urine output, Na, K, volume and perfusion change quickly — correlate with the examination and the NICU protocol.', '- RN: la diuresis, el Na, el K, el volumen y la perfusión cambian rápidamente — correlacione con el examen y el protocolo de la UCI.'],
    '- Fatores por IG neste app sao automatizados; valide com neonatologia e bulário.': ['- GA factors in this app are automated; validate with neonatology and the drug label.', '- Los factores por EG en esta app están automatizados; valide con neonatología y el prospecto.'],
    'NOTA EDUCATIVA: Revise todos os valores. A NeoPedCalc nao substitui julgamento clinico nem protocolos institucionais.': ['EDUCATIONAL NOTE: Review all values. NeoPedCalc does not replace clinical judgment or institutional protocols.', 'NOTA EDUCATIVA: Revise todos los valores. NeoPedCalc no sustituye el juicio clínico ni los protocolos institucionales.'],
    'Paciente': ['Patient', 'Paciente'],
    'semanas': ['weeks', 'semanas'],
    'continuo horas': ['continuous hours', 'continuo horas'],
    'CP': ['Tab', 'Comp.']
  };

  DRUGS.forEach(function (d) {
    D[d[1]] = [d[2], d[3]];
    D[d[0]] = [d[2], d[3]];
  });
  // O texto copiado tira os acentos (removerAcentos): registra também a forma sem acento.
  Object.keys(D).forEach(function (k) {
    var u = unaccent(k);
    if (u !== k && !D[u]) D[u] = D[k];
  });

  i18n.register(D);

  // Idade gestacional corrigida montada pelo app (com ou sem acentos).
  var IG_LABELS = {
    'termo precoce': ['early term', 'término precoz'],
    'pre-termo tardio': ['late preterm', 'pretérmino tardío'],
    'pre-termo moderado': ['moderate preterm', 'pretérmino moderado'],
    'pre-termo extremo': ['extreme preterm', 'pretérmino extremo']
  };
  function igLabel(label, idx) {
    var hit = IG_LABELS[unaccent(label)];
    return hit ? hit[idx] : label;
  }
  var AJUSTE = /^Dose ajustada para IG corrigida: redu[çc][ãa]o de (\d+)% \(IG: (\d+) semanas\)$/;
  function ajuste(idx) {
    return function (m, pct, ig) {
      return idx === 0
        ? 'Dose adjusted for corrected GA: ' + pct + '% reduction (GA: ' + ig + ' weeks)'
        : 'Dosis ajustada por EG corregida: reducción del ' + pct + '% (EG: ' + ig + ' semanas)';
    };
  }
  // "Informações da Droga" na tela: observação + nota de ajuste no mesmo texto.
  function obsMaisAjuste(lang) {
    return function (m, obs, nota) { return i18n.t(obs, lang) + '\n\n' + i18n.t(nota, lang); };
  }

  i18n.registerPatterns([
    [AJUSTE, ajuste(0), ajuste(1)],
    [/^40 semanas \(termo\)$/, '40 weeks (term)', '40 semanas (término)'],
    [/^(\d+) semanas \(p[óo]s-termo \+(\d+) semanas\)$/, '$1 weeks (post-term +$2 weeks)', '$1 semanas (postérmino +$2 semanas)'],
    [/^(\d+) semanas e (\d+) dias(?: \((.+)\))?$/,
      function (m, w, d, l) { return w + ' weeks and ' + d + ' days' + (l ? ' (' + igLabel(l, 0) + ')' : ''); },
      function (m, w, d, l) { return w + ' semanas y ' + d + ' días' + (l ? ' (' + igLabel(l, 1) + ')' : ''); }],
    [/^Calculo (\d+):$/, 'Calculation $1:', 'Cálculo $1:'],
    [/^Valor apos fator interno \(IG\): (.*) \(fator numerico no app: (.*)\)$/,
      function (m, v, f) { return 'Value after internal factor (GA): ' + i18n.t(v, 'en') + ' (numeric factor in the app: ' + f + ')'; },
      function (m, v, f) { return 'Valor tras el factor interno (EG): ' + i18n.t(v, 'es') + ' (factor numérico en la app: ' + f + ')'; }],
    line('Data/Hora', 'Date/Time', 'Fecha/Hora'),
    line('Nome', 'Name', 'Nombre'),
    line('Data de Nascimento', 'Date of Birth', 'Fecha de nacimiento'),
    line('Peso', 'Weight', 'Peso'),
    line('Idade Cronologica', 'Chronological Age', 'Edad cronológica'),
    line('Idade Gestacional ao Nascer', 'Gestational Age at Birth', 'Edad gestacional al nacer'),
    line('Idade Gestacional Corrigida', 'Corrected Gestational Age', 'Edad gestacional corregida'),
    line('Droga', 'Drug', 'Fármaco'),
    line('Dosagem informada na tela', 'Dose entered on screen', 'Dosis ingresada en pantalla'),
    line('Dose por aplicacao', 'Dose per administration', 'Dosis por administración'),
    line('Dose total (24h)', 'Total dose (24h)', 'Dosis total (24h)'),
    line('Volume da droga', 'Drug volume', 'Volumen del fármaco'),
    line('Apresentacao', 'Presentation', 'Presentación'),
    line('Velocidade de infusao', 'Infusion rate', 'Velocidad de infusión'),
    line('Intervalo', 'Interval', 'Intervalo'),
    line('Observacoes (campo do app)', 'Notes (app field)', 'Observaciones (campo de la app)'),
    line('Nota do app sobre ajuste', 'App note on adjustment', 'Nota de la app sobre el ajuste'),
    line('Total de entradas no historico', 'Total entries in the history', 'Total de entradas en el historial'),
    // Por último: as linhas "rótulo: valor" acima têm prioridade.
    [/^(.+?[^:]) (Dose ajustada para IG corrigida: redu[çc][ãa]o de \d+% \(IG: \d+ semanas\))$/, obsMaisAjuste('en'), obsMaisAjuste('es')]
  ]);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
