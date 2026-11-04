/* RCP Pediátrica PALS 2025 (files/rcp-pediatrica-pals2025.html) — [inglês, espanhol].
 * Parte 1: nomes (ritmos, drogas, procedimentos) e padrões das linhas montadas pelo JS
 * (cartões, alertas, linha do tempo e relatório copiado).
 * Inglês: decimais fixos do texto ("0,01 mg/kg") e o peso formatado em pt-BR ("12,50 kg") saem com ponto;
 * doses, volumes e energias calculados já usam toFixed (ponto) e não são tocados.
 * Espanhol: mantém a formatação brasileira da página.
 * Partes 2 e 3: rcp-pediatrica-pals2025-2.js (interface) e -3.js (relatório e alertas). */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  function esc(text) {
    return text.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  }

  // ARRITMIAS_CONFIG[].nome
  var RHYTHMS = {
    'Fibrilação Ventricular / Taquicardia Ventricular sem Pulso': ['Ventricular Fibrillation / Pulseless Ventricular Tachycardia', 'Fibrilación ventricular / Taquicardia ventricular sin pulso'],
    'Assistolia': ['Asystole', 'Asistolia'],
    'Atividade Elétrica sem Pulso (AESP/PEA)': ['Pulseless Electrical Activity (PEA)', 'Actividad eléctrica sin pulso (AESP)'],
    'Bradicardia Sintomática': ['Symptomatic Bradycardia', 'Bradicardia sintomática'],
    'Taquicardia Supraventricular com Pulso': ['Supraventricular Tachycardia with a Pulse', 'Taquicardia supraventricular con pulso'],
    'Taquicardia Ventricular com Pulso': ['Ventricular Tachycardia with a Pulse', 'Taquicardia ventricular con pulso'],
    'Torsades de Pointes': ['Torsades de Pointes', 'Torsades de pointes']
  };

  // calcularDrogaIndicada().nome (cartões de droga do ritmo, linha do tempo e histórico de drogas)
  var DRUGS = {
    'EPINEFRINA IV/IO': ['EPINEPHRINE IV/IO', 'ADRENALINA IV/IO'],
    'EPINEFRINA ETT': ['EPINEPHRINE ETT', 'ADRENALINA ET'],
    'AMIODARONA': ['AMIODARONE', 'AMIODARONA'],
    'LIDOCAÍNA': ['LIDOCAINE', 'LIDOCAÍNA'],
    'ATROPINA': ['ATROPINE', 'ATROPINA'],
    'ADENOSINA': ['ADENOSINE', 'ADENOSINA'],
    'MAGNÉSIO SULFATO': ['MAGNESIUM SULFATE', 'SULFATO DE MAGNESIO']
  };

  // PROCEDIMENTOS[].nome (interface, linha do tempo e "PROCEDIMENTOS REALIZADOS" do relatório)
  var PROCEDURES = {
    'Avaliação Inicial (ABC)': ['Initial Assessment (ABC)', 'Evaluación inicial (ABC)'],
    'Chamada de Socorro/Equipe': ['Call for Help/Team', 'Pedir ayuda/activar al equipo'],
    'Início da RCP (30:2)': ['Start CPR (30:2)', 'Inicio de la RCP (30:2)'],
    'Conectar DEA/Desfibrilador': ['Attach AED/Defibrillator', 'Conectar DEA/desfibrilador'],
    'Estabelecer Acesso Vascular (IV/IO)': ['Establish Vascular Access (IV/IO)', 'Establecer acceso vascular (IV/IO)'],
    'Intubação Endotraqueal': ['Endotracheal Intubation', 'Intubación endotraqueal'],
    'Confirmação da ETT (ausculta/CO2)': ['ETT Confirmation (auscultation/CO2)', 'Confirmación del TET (auscultación/CO2)'],
    'Ventilação Mecânica': ['Mechanical Ventilation', 'Ventilación mecánica'],
    'Monitorização Contínua': ['Continuous Monitoring', 'Monitorización continua'],
    'Gasometria Arterial': ['Arterial Blood Gas', 'Gasometría arterial'],
    'Epinefrina 1ª dose (0,01 mg/kg)': ['Epinephrine 1st dose (0.01 mg/kg)', 'Adrenalina 1.ª dosis (0,01 mg/kg)'],
    'Epinefrina 2ª dose (0,01 mg/kg)': ['Epinephrine 2nd dose (0.01 mg/kg)', 'Adrenalina 2.ª dosis (0,01 mg/kg)'],
    'Epinefrina 3ª dose (0,01 mg/kg)': ['Epinephrine 3rd dose (0.01 mg/kg)', 'Adrenalina 3.ª dosis (0,01 mg/kg)'],
    'Amiodarona 1ª dose (5 mg/kg)': ['Amiodarone 1st dose (5 mg/kg)', 'Amiodarona 1.ª dosis (5 mg/kg)'],
    'Amiodarona 2ª dose (5 mg/kg)': ['Amiodarone 2nd dose (5 mg/kg)', 'Amiodarona 2.ª dosis (5 mg/kg)'],
    'Amiodarona 3ª dose (5 mg/kg)': ['Amiodarone 3rd dose (5 mg/kg)', 'Amiodarona 3.ª dosis (5 mg/kg)'],
    'Atropina (0,02 mg/kg)': ['Atropine (0.02 mg/kg)', 'Atropina (0,02 mg/kg)'],
    'Atropina 2ª dose (0,02 mg/kg)': ['Atropine 2nd dose (0.02 mg/kg)', 'Atropina 2.ª dosis (0,02 mg/kg)'],
    '1º Choque': ['1st Shock', '1.er choque'],
    '2º Choque': ['2nd Shock', '2.º choque'],
    '3º Choque': ['3rd Shock', '3.er choque'],
    '4º Choque': ['4th Shock', '4.º choque'],
    'Cardioversão Sincronizada': ['Synchronized Cardioversion', 'Cardioversión sincronizada'],
    'Toracocentese/Toracostomia': ['Thoracentesis/Thoracostomy', 'Toracocentesis/toracostomía'],
    'Pericardiocentese': ['Pericardiocentesis', 'Pericardiocentesis'],
    'Massagem Cardíaca Aberta': ['Open-Chest Cardiac Massage', 'Masaje cardíaco a tórax abierto'],
    'ECMO/ECLS': ['ECMO/ECLS', 'ECMO/ECLS']
  };

  // Tipos da linha do tempo (relatório): "001. [hh:mm:ss] TIPO: descrição".
  var EVENT_TYPES = {
    'INÍCIO RCP': ['CPR START', 'INICIO RCP'],
    'PAUSA': ['PAUSE', 'PAUSA'],
    'RETOMADA': ['RESUMED', 'REANUDACIÓN'],
    'MUDANÇA DE RITMO': ['RHYTHM CHANGE', 'CAMBIO DE RITMO'],
    'ADMINISTRAÇÃO DE DROGA': ['DRUG ADMINISTRATION', 'ADMINISTRACIÓN DE FÁRMACO'],
    'PROCEDIMENTO': ['PROCEDURE', 'PROCEDIMIENTO'],
    'CHOQUE': ['SHOCK', 'DESCARGA'],
    'DESFECHO': ['OUTCOME', 'DESENLACE']
  };

  var OUTCOMES = {
    'RECUPERAÇÃO': ['RECOVERY (ROSC)', 'RECUPERACIÓN (RCE)'],
    'ÓBITO': ['DEATH', 'FALLECIMIENTO']
  };

  var entries = {};
  var patterns = [];
  function add(map) { Object.keys(map).forEach(function (k) { entries[k] = map[k]; }); }
  function pat(re, en, es) { patterns.push([re, en, es]); }

  add(RHYTHMS);
  add(DRUGS);
  add(PROCEDURES);
  add(EVENT_TYPES);
  add(OUTCOMES);

  var TIMELINE = '^(\\d{3}\\. \\[[^\\]]+\\] )';
  var rhythmKeys = Object.keys(RHYTHMS);

  rhythmKeys.forEach(function (pt) {
    var tr = RHYTHMS[pt];
    var r = esc(pt);
    // Cartão "⚡ CHOQUES APLICADOS (ritmo)"
    pat(new RegExp('^⚡ CHOQUES APLICADOS \\(' + r + '\\)$'), '⚡ SHOCKS DELIVERED (' + tr[0] + ')', '⚡ DESCARGAS APLICADAS (' + tr[1] + ')');
    // Alerta do choque: "CHOQUE n (ritmo) aplicado:"
    pat(new RegExp('^CHOQUE (\\d+) \\(' + r + '\\) aplicado:$'), 'SHOCK $1 (' + tr[0] + ') delivered:', 'DESCARGA $1 (' + tr[1] + ') aplicada:');
    // Linha do tempo: mudança de ritmo e choque
    pat(new RegExp(TIMELINE + 'MUDANÇA DE RITMO: Mudança de ritmo: ' + r + '$'), '$1RHYTHM CHANGE: Rhythm change: ' + tr[0], '$1CAMBIO DE RITMO: Cambio de ritmo: ' + tr[1]);
    pat(new RegExp(TIMELINE + 'CHOQUE: DESFIBRILAÇÃO - CHOQUE (\\d+) \\(' + r + '\\) – (.+)$'), '$1SHOCK: DEFIBRILLATION - SHOCK $2 (' + tr[0] + ') – $3', '$1DESCARGA: DESFIBRILACIÓN - DESCARGA $2 (' + tr[1] + ') – $3');
    // Histórico de ritmos: "n. [hh:mm:ss] ritmo"
    pat(new RegExp('^(\\d+\\. \\[[^\\]]+\\] )' + r + '$'), '$1' + tr[0], '$1' + tr[1]);
    // Choques aplicados: "- Choque n (ritmo): x J (y J/kg) – hh:mm:ss"
    pat(new RegExp('^- Choque (\\d+) \\(' + r + '\\): (.+)$'), '- Shock $1 (' + tr[0] + '): $2', '- Descarga $1 (' + tr[1] + '): $2');
  });
  pat(/^- Choque (\S+) \(Ritmo chocável\): (.+)$/, '- Shock $1 (Shockable rhythm): $2', '- Descarga $1 (Ritmo desfibrilable): $2');

  // Drogas do ritmo na linha do tempo e no histórico de drogas.
  Object.keys(DRUGS).forEach(function (pt) {
    var tr = DRUGS[pt];
    var d = esc(pt);
    pat(new RegExp(TIMELINE + 'ADMINISTRAÇÃO DE DROGA: ' + d + ': (.+)$'), '$1DRUG ADMINISTRATION: ' + tr[0] + ': $2', '$1ADMINISTRACIÓN DE FÁRMACO: ' + tr[1] + ': $2');
    rhythmKeys.forEach(function (rpt) {
      var rtr = RHYTHMS[rpt];
      pat(new RegExp('^(\\d+\\. \\[[^\\]]+\\] )' + d + ': ([\\d.]+) mL \\(Ritmo: ' + esc(rpt) + '\\)$'), '$1' + tr[0] + ': $2 mL (Rhythm: ' + rtr[0] + ')', '$1' + tr[1] + ': $2 mL (Ritmo: ' + rtr[1] + ')');
    });
    pat(new RegExp('^(\\d+\\. \\[[^\\]]+\\] )' + d + ': ([\\d.]+) mL \\(Ritmo: N/A\\)$'), '$1' + tr[0] + ': $2 mL (Rhythm: N/A)', '$1' + tr[1] + ': $2 mL (Ritmo: N/A)');
  });

  // Procedimentos na linha do tempo e na lista "✓ nome - Horários: ...".
  Object.keys(PROCEDURES).forEach(function (pt) {
    var tr = PROCEDURES[pt];
    var p = esc(pt);
    pat(new RegExp(TIMELINE + 'PROCEDIMENTO: ' + p + '$'), '$1PROCEDURE: ' + tr[0], '$1PROCEDIMIENTO: ' + tr[1]);
    pat(new RegExp('^✓ ' + p + ' - Horários: (.+)$'), '✓ ' + tr[0] + ' - Times: $1', '✓ ' + tr[1] + ' - Horarios: $1');
    entries['✓ ' + pt] = ['✓ ' + tr[0], '✓ ' + tr[1]];
  });

  // Outros eventos da linha do tempo.
  pat(new RegExp(TIMELINE + 'INÍCIO RCP: Início da RCP - Cronômetro iniciado$'), '$1CPR START: CPR started - Timer started', '$1INICIO RCP: Inicio de la RCP - Cronómetro iniciado');
  pat(new RegExp(TIMELINE + 'DESFECHO: RECUPERAÇÃO$'), '$1OUTCOME: RECOVERY (ROSC)', '$1DESENLACE: RECUPERACIÓN (RCE)');
  pat(new RegExp(TIMELINE + 'DESFECHO: ÓBITO$'), '$1OUTCOME: DEATH', '$1DESENLACE: FALLECIMIENTO');
  pat(new RegExp(TIMELINE + 'CHOQUE: Cardioversão Sincronizada: (\\d+) J \\(0,5 J/kg\\)$'), '$1SHOCK: Synchronized Cardioversion: $2 J (0.5 J/kg)', '$1DESCARGA: Cardioversión sincronizada: $2 J (0,5 J/kg)');

  // Idade do relatório (texto do campo "Idade Calculada", sempre em português): "2 anos, 3 meses, 5 dias".
  // Atenção: calcularIdade() escreve o plural de mês como "mêses" (grafia do código); aceitamos as duas formas.
  // Gera as 26 combinações possíveis de ano/mês/dia (singular e plural) + "Recém-nascido".
  var AGE_UNITS = [
    { one: 'ano', many: 'anos', en: ['year', 'years'], es: ['año', 'años'] },
    { one: 'mês', many: '(?:mêses|meses)', en: ['month', 'months'], es: ['mes', 'meses'] },
    { one: 'dia', many: 'dias', en: ['day', 'days'], es: ['día', 'días'] }
  ];
  var AGE_FORMS = [{ re: 'Recém-nascido', en: 'Newborn', es: 'Recién nacido', groups: 0 }];
  (function build(index, parts) {
    if (index === AGE_UNITS.length) {
      if (!parts.length) return;
      var g = 0;
      var re = [], en = [], es = [];
      parts.forEach(function (part) {
        g++;
        var u = AGE_UNITS[part.unit];
        if (part.plural) {
          re.push('(\\d+) ' + u.many); en.push('${g} ' + u.en[1]); es.push('${g} ' + u.es[1]);
        } else {
          re.push('(1) ' + u.one); en.push('${g} ' + u.en[0]); es.push('${g} ' + u.es[0]);
        }
      });
      AGE_FORMS.push({ re: re.join(', '), en: en.join(', '), es: es.join(', '), groups: g });
      return;
    }
    build(index + 1, parts);
    build(index + 1, parts.concat([{ unit: index, plural: false }]));
    build(index + 1, parts.concat([{ unit: index, plural: true }]));
  })(0, []);

  function shift(template, offset) {
    return template.replace(/\$\{g\}/g, function () { return '\u0000'; })
      .split('\u0000').reduce(function (acc, piece, i) { return i === 0 ? piece : acc + '$' + (offset + i) + piece; }, '');
  }

  AGE_FORMS.forEach(function (form) {
    var en = shift(form.en, 0);
    var es = shift(form.es, 0);
    pat(new RegExp('^- Idade: ' + form.re + '$'), '- Age: ' + en, '- Edad: ' + es);
    // Cabeçalho dos equipamentos com peso formatado em pt-BR (grupos 1-2) e idade (grupos 3+).
    pat(new RegExp('^EQUIPAMENTOS DE VIA AÉREA \\(Baseado no peso (\\d+),(\\d+) kg e idade ' + form.re + '\\):$'),
      'AIRWAY EQUIPMENT (Based on weight $1.$2 kg and age ' + shift(form.en, 2) + '):',
      'EQUIPAMIENTO DE VÍA AÉREA (Según el peso $1,$2 kg y la edad ' + shift(form.es, 2) + '):');
    pat(new RegExp('^EQUIPAMENTOS DE VIA AÉREA \\(Baseado no peso Peso não informado e idade ' + form.re + '\\):$'),
      'AIRWAY EQUIPMENT (Based on weight Weight not provided and age ' + en + '):',
      'EQUIPAMIENTO DE VÍA AÉREA (Según el peso Peso no informado y la edad ' + es + '):');
  });
  pat(/^EQUIPAMENTOS DE VIA AÉREA \(Baseado no peso (\d+),(\d+) kg e idade Idade não informada\):$/, 'AIRWAY EQUIPMENT (Based on weight $1.$2 kg and age Age not provided):', 'EQUIPAMIENTO DE VÍA AÉREA (Según el peso $1,$2 kg y la edad Edad no informada):');
  pat(/^EQUIPAMENTOS DE VIA AÉREA \(Baseado no peso Peso não informado e idade Idade não informada\):$/, 'AIRWAY EQUIPMENT (Based on weight Weight not provided and age Age not provided):', 'EQUIPAMIENTO DE VÍA AÉREA (Según el peso Peso no informado y la edad Edad no informada):');

  i18n.register(entries);
  i18n.registerPatterns(patterns);
})(window.NEOPED_I18N);
