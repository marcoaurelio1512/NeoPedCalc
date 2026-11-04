/* RCP Neonatal 2025 (files/rcp-neonatal-2025.html) — [inglês, espanhol].
 * Inglês: decimais fixos do texto ("0,01 mg/kg") saem com ponto; doses calculadas já usam toFixed (ponto).
 * Espanhol: mantém a formatação brasileira da página. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  var CLOCK = '⏱️ ';
  var PREFIXES = [CLOCK, '🔄 ', '✅ ', '- '];

  function escapeRegExp(text) {
    return text.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  }

  // Nomes dos procedimentos (PROCEDIMENTOS[].nome): aparecem com ícone, no botão "✅ ..." e no relatório "- nome: horários".
  var PROCEDURE_NAMES = {
    'Avaliação Inicial (ABC)': ['Initial Assessment (ABC)', 'Evaluación inicial (ABC)'],
    'Aquecimento e Posicionamento': ['Warming and Positioning', 'Calentamiento y posicionamiento'],
    'Desobstrução das Vias Aéreas': ['Airway Clearance', 'Permeabilización de la vía aérea'],
    'Ventilação com Pressão Positiva': ['Positive-Pressure Ventilation (PPV)', 'Ventilación con presión positiva (VPP)'],
    'Compressões Torácicas': ['Chest Compressions', 'Compresiones torácicas'],
    'Epinefrina IV/IO': ['Epinephrine IV/IO', 'Adrenalina IV/IO'],
    'Epinefrina 2ª dose': ['Epinephrine 2nd dose', 'Adrenalina 2.ª dosis'],
    'Epinefrina 3ª dose': ['Epinephrine 3rd dose', 'Adrenalina 3.ª dosis'],
    'Epinefrina 4ª dose': ['Epinephrine 4th dose', 'Adrenalina 4.ª dosis'],
    'Epinefrina 5ª dose': ['Epinephrine 5th dose', 'Adrenalina 5.ª dosis'],
    'Epinefrina 6ª dose': ['Epinephrine 6th dose', 'Adrenalina 6.ª dosis'],
    'Epinefrina 7ª dose': ['Epinephrine 7th dose', 'Adrenalina 7.ª dosis'],
    'Epinefrina 8ª dose': ['Epinephrine 8th dose', 'Adrenalina 8.ª dosis'],
    'Epinefrina 9ª dose': ['Epinephrine 9th dose', 'Adrenalina 9.ª dosis'],
    'Epinefrina 10ª dose': ['Epinephrine 10th dose', 'Adrenalina 10.ª dosis'],
    'Atropina': ['Atropine', 'Atropina'],
    'Bicarbonato de Sódio': ['Sodium Bicarbonate', 'Bicarbonato de sodio'],
    'Naloxona': ['Naloxone', 'Naloxona'],
    'Glicose 10%': ['Dextrose 10%', 'Glucosa al 10%'],
    'Glicose 10% 2ª dose': ['Dextrose 10% 2nd dose', 'Glucosa al 10% 2.ª dosis'],
    'Glicose 10% 3ª dose': ['Dextrose 10% 3rd dose', 'Glucosa al 10% 3.ª dosis'],
    'Cloreto de Cálcio': ['Calcium Chloride', 'Cloruro de calcio']
  };

  var entries = {};
  var procedurePatterns = [];
  Object.keys(PROCEDURE_NAMES).forEach(function (pt) {
    var tr = PROCEDURE_NAMES[pt];
    entries[pt] = tr;
    PREFIXES.forEach(function (prefix) { entries[prefix + pt] = [prefix + tr[0], prefix + tr[1]]; });
    procedurePatterns.push([new RegExp('^- ' + escapeRegExp(pt) + ': (.*)$'), '- ' + tr[0] + ': $1', '- ' + tr[1] + ': $1']);
  });

  // Cartão "Drogas de emergência" (oculto na interface) — linhas com ícone de relógio.
  entries[CLOCK + 'Repetir a cada 3-5 min'] = [CLOCK + 'Repeat every 3-5 min', CLOCK + 'Repetir cada 3-5 min'];
  entries[CLOCK + 'Reversão de opioides'] = [CLOCK + 'Opioid reversal', CLOCK + 'Reversión de opioides'];
  entries[CLOCK + 'Acidose grave'] = [CLOCK + 'Severe acidosis', CLOCK + 'Acidosis grave'];
  entries[CLOCK + 'Hipoglicemia'] = [CLOCK + 'Hypoglycemia', CLOCK + 'Hipoglucemia'];
  entries[CLOCK + 'Hipocalcemia/Hipercalemia'] = [CLOCK + 'Hypocalcemia/Hyperkalemia', CLOCK + 'Hipocalcemia/Hiperpotasemia'];
  entries[CLOCK + 'Tempo de Parada'] = [CLOCK + 'Arrest Time', CLOCK + 'Tiempo de paro'];
  entries[CLOCK + 'Avaliação Inicial (ABC)'] = [CLOCK + 'Initial Assessment (ABC)', CLOCK + 'Evaluación inicial (ABC)'];

  i18n.register(entries);

  i18n.register({
    // Cabeçalho
    'NeoPedCalc — RCP Neonatal 2025 (educativo)': ['NeoPedCalc — Neonatal Resuscitation 2025 (educational)', 'NeoPedCalc — Reanimación neonatal 2025 (educativo)'],
    '🩺 RCP Neonatal 2025': ['🩺 Neonatal Resuscitation 2025', '🩺 Reanimación neonatal 2025'],
    'Calculadora de Emergência para Recém-Nascidos': ['Newborn Emergency Calculator', 'Calculadora de emergencia para recién nacidos'],

    // Dados do recém-nascido
    'Dados do Recém-Nascido': ['Newborn Data', 'Datos del recién nacido'],
    'Nome do RN': ["Newborn's Name", 'Nombre del RN'],
    'Peso (kg)': ['Weight (kg)', 'Peso (kg)'],
    'IG (semanas)': ['GA (weeks)', 'EG (semanas)'],
    'Data Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Hora Início RCP': ['CPR Start Time', 'Hora de inicio de la RCP'],
    '⚡ Preenchido automaticamente ao marcar "Avaliação Inicial"': ['⚡ Filled in automatically when "Initial Assessment" is marked', '⚡ Se completa automáticamente al marcar "Evaluación inicial"'],
    '⚡ Inicia automaticamente ao marcar "Avaliação Inicial"': ['⚡ Starts automatically when "Initial Assessment" is marked', '⚡ Se inicia automáticamente al marcar "Evaluación inicial"'],
    'Tempo de Parada': ['Arrest Time', 'Tiempo de paro'],
    'Hora da Avaliação': ['Assessment Time', 'Hora de la evaluación'],
    'Registra automaticamente o horário': ['Records the time automatically', 'Registra la hora automáticamente'],
    'Ex: RN João Silva': ['e.g., NB João Silva', 'Ej.: RN João Silva'],
    'Ex: 3,200 ou 3.200': ['e.g., 3.200 or 3,200 (kg)', 'Ej.: 3,200 o 3.200'],
    'Ex: 38': ['e.g., 38', 'Ej.: 38'],
    'Não iniciada': ['Not started', 'No iniciada'],

    // Seções
    'DROGAS DE EMERGÊNCIA - NEONATAL': ['EMERGENCY DRUGS - NEONATAL', 'FÁRMACOS DE EMERGENCIA - NEONATAL'],
    'Procedimentos e Medicamentos': ['Procedures and Medications', 'Procedimientos y medicamentos'],
    'Avaliação Inicial': ['Initial Assessment', 'Evaluación inicial'],
    'Suporte Básico': ['Basic Support', 'Soporte básico'],
    'Vias Aéreas': ['Airway', 'Vía aérea'],
    'Ventilação e Suporte Respiratório': ['Ventilation and Respiratory Support', 'Ventilación y soporte respiratorio'],
    'Compressões e Circulação': ['Compressions and Circulation', 'Compresiones y circulación'],
    'Medicamentos': ['Medications', 'Medicamentos'],

    // Descrições dos procedimentos
    'Respiração, Frequência Cardíaca, Tônus': ['Breathing, Heart Rate, Tone', 'Respiración, frecuencia cardíaca, tono'],
    'Manter temperatura corporal adequada': ['Maintain adequate body temperature', 'Mantener una temperatura corporal adecuada'],
    'Aspiração suave se necessário': ['Gentle suctioning if needed', 'Aspiración suave si es necesario'],
    'VPP com máscara ou TET': ['PPV with face mask or ETT', 'VPP con mascarilla o TET'],
    'FC < 60 bpm após VPP eficaz': ['HR < 60 bpm after effective PPV', 'FC < 60 lpm tras VPP eficaz'],
    'IV/IO 0,02 mg/kg · ETT 0,1 mg/kg (0,1 mg/mL)': ['IV/IO 0.02 mg/kg · ET 0.1 mg/kg (0.1 mg/mL)', 'IV/IO 0,02 mg/kg · ET 0,1 mg/kg (0,1 mg/mL)'],
    'Repetir a cada 3-5 min': ['Repeat every 3-5 min', 'Repetir cada 3-5 min'],
    '0,02 mg/kg (0,5 mg/mL)': ['0.02 mg/kg (0.5 mg/mL)', '0,02 mg/kg (0,5 mg/mL)'],
    '0,1 mg/kg (0,4 mg/mL)': ['0.1 mg/kg (0.4 mg/mL)', '0,1 mg/kg (0,4 mg/mL)'],
    '1 mEq/kg (1 mEq/mL)': ['1 mEq/kg (1 mEq/mL)', '1 mEq/kg (1 mEq/mL)'],
    '2 mL/kg (100 mg/mL)': ['2 mL/kg (100 mg/mL)', '2 mL/kg (100 mg/mL)'],
    '20 mg/kg (100 mg/mL)': ['20 mg/kg (100 mg/mL)', '20 mg/kg (100 mg/mL)'],
    'Repetir se necessário': ['Repeat if needed', 'Repetir si es necesario'],
    'Marcar Realizado': ['Mark as done', 'Marcar como realizado'],
    'Aguardando': ['Waiting', 'Esperando'],
    'Informe o peso para calcular a dose': ['Enter the weight to calculate the dose', 'Introduzca el peso para calcular la dosis'],
    'Medicação não padronizada nos protocolos de REANIMAÇÃO NEONATAL. Usar somente com critério clínico e se extremamente necessário.': [
      'Medication not standardized in NEONATAL RESUSCITATION protocols. Use only with clinical judgment and if absolutely necessary.',
      'Medicación no estandarizada en los protocolos de REANIMACIÓN NEONATAL. Usar solo con criterio clínico y si es estrictamente necesario.'
    ],

    // Cartão de drogas (oculto na interface, mas gerado no DOM)
    'Informe o peso do recém-nascido para calcular as doses': ["Enter the newborn's weight to calculate the doses", 'Introduzca el peso del recién nacido para calcular las dosis'],
    'Peso mínimo: 0.2 kg (200g)': ['Minimum weight: 0.2 kg (200g)', 'Peso mínimo: 0.2 kg (200g)'],
    'EPINEFRINA IV/IO': ['EPINEPHRINE IV/IO', 'ADRENALINA IV/IO'],
    'EPINEFRINA ETT': ['EPINEPHRINE ETT', 'ADRENALINA ET'],
    'ATROPINA': ['ATROPINE', 'ATROPINA'],
    'NALOXONA': ['NALOXONE', 'NALOXONA'],
    'BICARBONATO DE SÓDIO': ['SODIUM BICARBONATE', 'BICARBONATO DE SODIO'],
    'GLICOSE': ['DEXTROSE', 'GLUCOSA'],
    'CLORETO DE CÁLCIO': ['CALCIUM CHLORIDE', 'CLORURO DE CALCIO'],
    'Via: IV/IO - Conc: 0,1 mg/mL (1:10.000)': ['Route: IV/IO - Conc: 0.1 mg/mL (1:10,000)', 'Vía: IV/IO - Conc.: 0,1 mg/mL (1:10.000)'],
    'Via: ETT - Conc: 0,1 mg/mL (1:10.000)': ['Route: ET - Conc: 0.1 mg/mL (1:10,000)', 'Vía: ET - Conc.: 0,1 mg/mL (1:10.000)'],
    'Usar a mesma solução 0,1 mg/mL da via IV/IO (não usar 1 mg/mL)': ['Use the same 0.1 mg/mL solution as for IV/IO (do not use 1 mg/mL)', 'Usar la misma solución de 0,1 mg/mL de la vía IV/IO (no usar 1 mg/mL)'],
    'Após cada dose IV/IO: flush de SF': ['After each IV/IO dose: normal saline flush', 'Después de cada dosis IV/IO: bolo de SF'],
    'Alternativa quando IV/IO não disponível': ['Alternative when IV/IO access is not available', 'Alternativa cuando no hay acceso IV/IO'],
    'Indicação: Bradicardia - Conc: 0,5 mg/mL': ['Indication: Bradycardia - Conc: 0.5 mg/mL', 'Indicación: Bradicardia - Conc.: 0,5 mg/mL'],
    'Indicação: Depressão respiratória - Conc: 0,4 mg/mL': ['Indication: Respiratory depression - Conc: 0.4 mg/mL', 'Indicación: Depresión respiratoria - Conc.: 0,4 mg/mL'],
    'Indicação: Acidose metabólica - Conc: 1 mEq/mL': ['Indication: Metabolic acidosis - Conc: 1 mEq/mL', 'Indicación: Acidosis metabólica - Conc.: 1 mEq/mL'],
    'Indicação: Glicemia < 45 mg/dL - Conc: 100 mg/mL': ['Indication: Blood glucose < 45 mg/dL - Conc: 100 mg/mL', 'Indicación: Glucemia < 45 mg/dL - Conc.: 100 mg/mL'],
    'Indicação: Calcemia < 7 mg/dL - Conc: 100 mg/mL': ['Indication: Serum calcium < 7 mg/dL - Conc: 100 mg/mL', 'Indicación: Calcemia < 7 mg/dL - Conc.: 100 mg/mL'],

    // Equipamentos
    'Equipamentos para Vias Aéreas': ['Airway Equipment', 'Equipos para la vía aérea'],
    'Equipamentos para Compressões': ['Compression Equipment', 'Equipos para compresiones'],
    'Equipamentos para Medicamentos': ['Medication Equipment', 'Equipos para medicamentos'],
    'Tubo Endotraqueal': ['Endotracheal Tube', 'Tubo endotraqueal'],
    'Tamanho': ['Size', 'Tamaño'],
    'Profundidade': ['Insertion depth', 'Profundidad de inserción'],
    'Lâmina Laringoscópio': ['Laryngoscope Blade', 'Hoja de laringoscopio'],
    'Miller 1 ou 2': ['Miller 1 or 2', 'Miller 1 o 2'],
    'Prematuro extremo': ['Extremely preterm', 'Prematuro extremo'],
    'Prematuro': ['Preterm', 'Prematuro'],
    'Prematuro tardio': ['Late preterm', 'Prematuro tardío'],
    'RN termo baixo peso': ['Term newborn, low birth weight', 'RN a término de bajo peso'],
    'RN termo': ['Term newborn', 'RN a término'],
    'RN termo grande': ['Large term newborn', 'RN a término grande'],
    'Baseado no peso': ['Based on weight', 'Según el peso'],
    'Máscara Facial': ['Face Mask', 'Mascarilla facial'],
    'Neonatal': ['Neonatal', 'Neonatal'],
    'Sonda de Aspiração': ['Suction Catheter', 'Sonda de aspiración'],
    'Suave': ['Gentle', 'Suave'],
    'Monitor Cardíaco': ['Cardiac Monitor', 'Monitor cardíaco'],
    'Eletrodos Neonatais': ['Neonatal Electrodes', 'Electrodos neonatales'],
    '3 derivações': ['3 leads', '3 derivaciones'],
    'Oxímetro de Pulso': ['Pulse Oximeter', 'Pulsioxímetro'],
    'Sensor Neonatal': ['Neonatal Sensor', 'Sensor neonatal'],
    'Pé ou mão': ['Foot or hand', 'Pie o mano'],
    'Estetoscópio': ['Stethoscope', 'Estetoscopio'],
    'Diafragma pequeno': ['Small diaphragm', 'Diafragma pequeño'],
    'Cânula Umbilical': ['Umbilical Catheter', 'Catéter umbilical'],
    'Umbilical': ['Umbilical', 'Umbilical'],
    'Cateter IV': ['IV Catheter', 'Catéter IV'],
    'Periférico': ['Peripheral', 'Periférico'],
    'Seringas': ['Syringes', 'Jeringas'],
    'Precisão': ['Precision', 'Precisión'],
    'Agulhas': ['Needles', 'Agujas'],
    'Fino calibre': ['Fine gauge', 'Calibre fino'],
    'Balança Neonatal': ['Neonatal Scale', 'Balanza neonatal'],
    'Peso': ['Weight', 'Peso'],

    // Desfecho
    'DESFECHO DA PCR': ['CARDIAC ARREST OUTCOME', 'DESENLACE DE LA PCR'],
    'Registre o desfecho da Reanimação Cardio Pulmonar:': ['Record the outcome of the cardiopulmonary resuscitation:', 'Registre el desenlace de la reanimación cardiopulmonar:'],
    'RECUPERAÇÃO': ['RECOVERY', 'RECUPERACIÓN'],
    'ÓBITO': ['DEATH', 'FALLECIMIENTO'],
    'Desfecho registrado com sucesso!': ['Outcome recorded successfully!', '¡Desenlace registrado correctamente!'],
    'Data': ['Date', 'Fecha'],
    'Horário': ['Time', 'Hora'],

    // Rodapé e botões
    'Versão 2025 - NRP Guidelines': ['Version 2025 - NRP Guidelines', 'Versión 2025 - Guías NRP'],
    'Como usar': ['How to use', 'Cómo usar'],
    'Salvar Paciente': ['Save Patient', 'Guardar paciente'],
    'Carregar Paciente': ['Load Patient', 'Cargar paciente'],
    'Copiar texto informativo': ['Copy informational text', 'Copiar texto informativo'],
    'Limpar Tudo': ['Clear All', 'Borrar todo'],

    // Alertas e confirmações
    'Nenhum paciente salvo encontrado.': ['No saved patient found.', 'No se encontró ningún paciente guardado.'],
    'Paciente carregado com sucesso! Todos os procedimentos, horários e timers foram restaurados.': [
      'Patient loaded successfully! All procedures, times and timers have been restored.',
      '¡Paciente cargado correctamente! Se restauraron todos los procedimientos, horarios y temporizadores.'
    ],
    'Paciente salvo com sucesso!': ['Patient saved successfully!', '¡Paciente guardado correctamente!'],
    'Tem certeza que deseja limpar todos os dados? Esta ação não pode ser desfeita.': [
      'Are you sure you want to clear all data? This action cannot be undone.',
      '¿Está seguro de que desea borrar todos los datos? Esta acción no se puede deshacer.'
    ],
    'Todos os dados foram limpos. Interface reiniciada.': ['All data have been cleared. Interface reset.', 'Se borraron todos los datos. Interfaz reiniciada.'],
    'Popup bloqueado. Por favor, permita popups para visualizar o README.': [
      'Pop-up blocked. Please allow pop-ups to view the README.',
      'Ventana emergente bloqueada. Permita las ventanas emergentes para ver el README.'
    ],
    'DADOS DE PACIENTE ANTERIOR ENCONTRADOS': ['PREVIOUS PATIENT DATA FOUND', 'SE ENCONTRARON DATOS DE UN PACIENTE ANTERIOR'],
    'Nome': ['Name', 'Nombre'],
    'Paciente sem nome': ['Unnamed patient', 'Paciente sin nombre'],
    'Peso não informado': ['Weight not provided', 'Peso no informado'],
    'O que deseja fazer': ['What would you like to do', '¿Qué desea hacer'],
    'OK = Recarregar paciente anterior': ['OK = Reload previous patient', 'Aceptar = Recargar paciente anterior'],
    'Cancelar = Começar do zero': ['Cancel = Start from scratch', 'Cancelar = Empezar de cero'],

    // Relatório copiado
    'RESUMO INFORMATIVO — REANIMACAO NEONATAL 2025 (EDUCATIVO)': ['INFORMATIONAL SUMMARY — NEONATAL RESUSCITATION 2025 (EDUCATIONAL)', 'RESUMEN INFORMATIVO — REANIMACIÓN NEONATAL 2025 (EDUCATIVO)'],
    'DADOS DO RECÉM-NASCIDO': ['NEWBORN DATA', 'DATOS DEL RECIÉN NACIDO'],
    'Recém-Nascido': ['Newborn', 'Recién nacido'],
    'Idade Gestacional': ['Gestational Age', 'Edad gestacional'],
    'semanas': ['weeks', 'semanas'],
    'Não informada semanas': ['Not provided (weeks)', 'No informada (semanas)'],
    'Não informada': ['Not provided', 'No informada'],
    'Não informado': ['Not provided', 'No informado'],
    'Data de Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Hora de Início da RCP': ['CPR Start Time', 'Hora de inicio de la RCP'],
    'Hora da Avaliação Inicial': ['Initial Assessment Time', 'Hora de la evaluación inicial'],
    'DROGAS DE EMERGÊNCIA CALCULADAS': ['CALCULATED EMERGENCY DRUGS', 'FÁRMACOS DE EMERGENCIA CALCULADOS'],
    'OBSERVACAO: Medicacao nao padronizada nos protocolos de REANIMACAO NEONATAL. Usar somente com criterio clinico e se extremamente necessario.': [
      'NOTE: Medication not standardized in NEONATAL RESUSCITATION protocols. Use only with clinical judgment and if absolutely necessary.',
      'OBSERVACIÓN: Medicación no estandarizada en los protocolos de REANIMACIÓN NEONATAL. Usar solo con criterio clínico y si es estrictamente necesario.'
    ],
    'Peso muito baixo - não é possível calcular doses seguras': ['Weight too low - safe doses cannot be calculated', 'Peso demasiado bajo - no es posible calcular dosis seguras'],
    'Peso não informado - não é possível calcular doses': ['Weight not provided - doses cannot be calculated', 'Peso no informado - no es posible calcular las dosis'],
    'PROCEDIMENTOS REALIZADOS': ['PROCEDURES PERFORMED', 'PROCEDIMIENTOS REALIZADOS'],
    'AVALIACAO INICIAL': ['INITIAL ASSESSMENT', 'EVALUACIÓN INICIAL'],
    'SUPORTE BASICO': ['BASIC SUPPORT', 'SOPORTE BÁSICO'],
    'VIAS AEREAS': ['AIRWAY', 'VÍA AÉREA'],
    'VENTILACAO E SUPORTE RESPIRATORIO': ['VENTILATION AND RESPIRATORY SUPPORT', 'VENTILACIÓN Y SOPORTE RESPIRATORIO'],
    'COMPRESSOES E CIRCULACAO': ['COMPRESSIONS AND CIRCULATION', 'COMPRESIONES Y CIRCULACIÓN'],
    'MEDICAMENTOS': ['MEDICATIONS', 'MEDICAMENTOS'],
    'Nenhum procedimento realizado.': ['No procedures performed.', 'Ningún procedimiento realizado.'],
    'EQUIPAMENTOS NECESSÁRIOS': ['REQUIRED EQUIPMENT', 'EQUIPOS NECESARIOS'],
    'Laringoscópio': ['Laryngoscope', 'Laringoscopio'],
    'Máscara Laríngea': ['Laryngeal Mask', 'Mascarilla laríngea'],
    'Peso muito baixo - equipamentos específicos não calculados.': ['Weight too low - specific equipment not calculated.', 'Peso demasiado bajo - no se calcularon equipos específicos.'],
    'Peso e/ou idade gestacional não informados - não é possível calcular equipamentos específicos.': [
      'Weight and/or gestational age not provided - specific equipment cannot be calculated.',
      'Peso y/o edad gestacional no informados - no es posible calcular equipos específicos.'
    ],
    'DESFECHO DA PCR:': ['CARDIAC ARREST OUTCOME:', 'DESENLACE DE LA PCR:'],
    'Desfecho': ['Outcome', 'Desenlace'],
    'Desfecho: Não registrado': ['Outcome: Not recorded', 'Desenlace: No registrado'],
    'CRONÔMETROS ATIVOS': ['ACTIVE TIMERS', 'CRONÓMETROS ACTIVOS'],
    'restantes': ['remaining', 'restantes'],
    'Nenhum cronômetro ativo.': ['No active timers.', 'Ningún cronómetro activo.'],
    'RESUMO ESTATÍSTICO': ['STATISTICAL SUMMARY', 'RESUMEN ESTADÍSTICO'],
    'Total de Drogas de Emergência Administradas': ['Total Emergency Drugs Administered', 'Total de fármacos de emergencia administrados'],
    'Total de Procedimentos Realizados': ['Total Procedures Performed', 'Total de procedimientos realizados'],
    'Tempo Total de RCP': ['Total CPR Time', 'Tiempo total de RCP'],
    'Peso do Recém-Nascido': ["Newborn's Weight", 'Peso del recién nacido'],
    'INFORMAÇÕES TÉCNICAS': ['TECHNICAL INFORMATION', 'INFORMACIÓN TÉCNICA'],
    'Protocolo: NRP 2025 - Neonatal Resuscitation Program': ['Protocol: NRP 2025 - Neonatal Resuscitation Program', 'Protocolo: NRP 2025 - Neonatal Resuscitation Program'],
    'Versão: 2025 Guidelines': ['Version: 2025 Guidelines', 'Versión: Guías 2025'],
    'Data/Hora do Relatório': ['Report Date/Time', 'Fecha/hora del informe'],
    'Gerado por: Sistema RCP Neonatal 2025': ['Generated by: Neonatal Resuscitation 2025 System', 'Generado por: Sistema de Reanimación Neonatal 2025']
  });

  i18n.registerPatterns([
    // Doses calculadas (toFixed: já com ponto) + concentrações fixas do código.
    [/^Dose: ([\d.]+) mg = ([\d.]+) mL \(0,(\d) mg\/mL\)$/, 'Dose: $1 mg = $2 mL (0.$3 mg/mL)', 'Dosis: $1 mg = $2 mL (0,$3 mg/mL)'],
    [/^Dose: ([\d.]+) (mg|mEq|mL) = ([\d.]+) mL \((1 mEq\/mL|10%|100 mg\/mL)\)$/, 'Dose: $1 $2 = $3 mL ($4)', 'Dosis: $1 $2 = $3 mL ($4)'],
    [/^([\d.]+) mg \(0,(\d+) mg\/kg\)$/, '$1 mg (0.$2 mg/kg)', '$1 mg (0,$2 mg/kg)'],
    [/^IG: (\d+|\?) sem$/, 'GA: $1 wk', 'EG: $1 sem'],

    // Epinefrina/atropina: helpers textoDosePonto/textoDoseFaixa (card, lista e relatório; números já com ponto).
    [/^Faixa: ([\d.]+)–([\d.]+) mg = ([\d.]+)–([\d.]+) mL \(0,(\d+)–0,(\d+) mg\/kg\)$/, 'Range: $1–$2 mg = $3–$4 mL (0.$5–0.$6 mg/kg)', 'Rango: $1–$2 mg = $3–$4 mL (0,$5–0,$6 mg/kg)'],
    [/^IV\/IO: ([\d.]+) mg \(0,(\d+) mg\/kg\) = ([\d.]+) mL$/, 'IV/IO: $1 mg (0.$2 mg/kg) = $3 mL', 'IV/IO: $1 mg (0,$2 mg/kg) = $3 mL'],
    [/^ETT: ([\d.]+) mg \(0,(\d+) mg\/kg\) = ([\d.]+) mL$/, 'ET: $1 mg (0.$2 mg/kg) = $3 mL', 'ET: $1 mg (0,$2 mg/kg) = $3 mL'],

    // Peso formatado em pt-BR (toLocaleString, 2-3 casas): "3,20 kg".
    [/^Peso: (\d+),(\d+) kg$/, 'Weight: $1.$2 kg', 'Peso: $1,$2 kg'],
    [/^Peso do Recém-Nascido: (\d+),(\d+) kg$/, "Newborn's Weight: $1.$2 kg", 'Peso del recién nacido: $1,$2 kg'],

    // Linhas de drogas do relatório copiado.
    [/^- Epinefrina IV\/IO \(0,1 mg\/mL\): ([\d.]+) mg \(0,02 mg\/kg\) = ([\d.]+) mL$/, '- Epinephrine IV/IO (0.1 mg/mL): $1 mg (0.02 mg/kg) = $2 mL', '- Adrenalina IV/IO (0,1 mg/mL): $1 mg (0,02 mg/kg) = $2 mL'],
    [/^- Epinefrina ETT \(0,1 mg\/mL\): ([\d.]+) mg \(0,1 mg\/kg\) = ([\d.]+) mL$/, '- Epinephrine ET (0.1 mg/mL): $1 mg (0.1 mg/kg) = $2 mL', '- Adrenalina ET (0,1 mg/mL): $1 mg (0,1 mg/kg) = $2 mL'],
    [/^- Atropina \(0,5 mg\/mL\): ([\d.]+) mg \(0,02 mg\/kg\) = ([\d.]+) mL$/, '- Atropine (0.5 mg/mL): $1 mg (0.02 mg/kg) = $2 mL', '- Atropina (0,5 mg/mL): $1 mg (0,02 mg/kg) = $2 mL'],
    [/^- Naloxona: ([\d.]+) mg \(0,1 mg\/kg\) = ([\d.]+) mL$/, '- Naloxone: $1 mg (0.1 mg/kg) = $2 mL', '- Naloxona: $1 mg (0,1 mg/kg) = $2 mL'],
    [/^- Bicarbonato de Sódio: ([\d.]+) mEq \(1 mEq\/kg\) = ([\d.]+) mL$/, '- Sodium Bicarbonate: $1 mEq (1 mEq/kg) = $2 mL', '- Bicarbonato de sodio: $1 mEq (1 mEq/kg) = $2 mL'],
    [/^- Glicose 10%: ([\d.]+) mL \(2 mL\/kg\)$/, '- Dextrose 10%: $1 mL (2 mL/kg)', '- Glucosa al 10%: $1 mL (2 mL/kg)'],
    [/^- Cloreto de Cálcio: ([\d.]+) mg \(20 mg\/kg\) = ([\d.]+) mL$/, '- Calcium Chloride: $1 mg (20 mg/kg) = $2 mL', '- Cloruro de calcio: $1 mg (20 mg/kg) = $2 mL'],
    [/^- Adenosina 1ª dose: ([\d.]+) mg \(0,1 mg\/kg\) = ([\d.]+) mL$/, '- Adenosine 1st dose: $1 mg (0.1 mg/kg) = $2 mL', '- Adenosina 1.ª dosis: $1 mg (0,1 mg/kg) = $2 mL'],
    [/^- Adenosina 2ª dose: ([\d.]+) mg \(0,2 mg\/kg\) = ([\d.]+) mL$/, '- Adenosine 2nd dose: $1 mg (0.2 mg/kg) = $2 mL', '- Adenosina 2.ª dosis: $1 mg (0,2 mg/kg) = $2 mL'],
    [/^- Lidocaína: ([\d.]+) mg \(1 mg\/kg\) = ([\d.]+) mL$/, '- Lidocaine: $1 mg (1 mg/kg) = $2 mL', '- Lidocaína: $1 mg (1 mg/kg) = $2 mL'],
    [/^- Magnésio Sulfato: ([\d.]+) mg \(25 mg\/kg\) = ([\d.]+) mL$/, '- Magnesium Sulfate: $1 mg (25 mg/kg) = $2 mL', '- Sulfato de magnesio: $1 mg (25 mg/kg) = $2 mL'],
    [/^- Glucagon: ([\d.]+) mg \(0,03 mg\/kg\) = ([\d.]+) mL$/, '- Glucagon: $1 mg (0.03 mg/kg) = $2 mL', '- Glucagón: $1 mg (0,03 mg/kg) = $2 mL'],

    // Cronômetros ativos no relatório: "- epinefrina_2: 2:45 restantes".
    [/^- epinefrina_(\d+): (\d+:\d{2}) restantes$/, '- Epinephrine dose $1: $2 remaining', '- Adrenalina, dosis $1: $2 restantes'],
    [/^- glicose_(\d+): (\d+:\d{2}) restantes$/, '- Dextrose 10% dose $1: $2 remaining', '- Glucosa al 10%, dosis $1: $2 restantes'],

    // Confirmação do desfecho.
    [/^✅ Desfecho "RECUPERAÇÃO" registrado com sucesso!$/, '✅ Outcome "RECOVERY" recorded successfully!', '✅ ¡Desenlace "RECUPERACIÓN" registrado correctamente!'],
    [/^✅ Desfecho "ÓBITO" registrado com sucesso!$/, '✅ Outcome "DEATH" recorded successfully!', '✅ ¡Desenlace "FALLECIMIENTO" registrado correctamente!'],
    [/^✅ Desfecho "RECUPERAÇÃO" já registrado$/, '✅ Outcome "RECOVERY" already recorded', '✅ Desenlace "RECUPERACIÓN" ya registrado'],
    [/^✅ Desfecho "ÓBITO" já registrado$/, '✅ Outcome "DEATH" already recorded', '✅ Desenlace "FALLECIMIENTO" ya registrado']
  ].concat(procedurePatterns));

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
