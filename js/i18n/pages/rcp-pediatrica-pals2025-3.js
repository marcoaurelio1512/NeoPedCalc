/* RCP Pediátrica PALS 2025 (files/rcp-pediatrica-pals2025.html) — [inglês, espanhol].
 * Parte 3: relatório copiado (gerarECopiarRelatorio), alertas e confirmações.
 * Os rótulos do relatório são registrados como estão no código. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  i18n.register({
    // Cabeçalho e dados do paciente
    'RESUMO INFORMATIVO — REANIMACAO CARDIO PULMONAR PEDIATRICA (EDUCATIVO)': ['INFORMATIONAL SUMMARY — PEDIATRIC CARDIOPULMONARY RESUSCITATION (EDUCATIONAL)', 'RESUMEN INFORMATIVO — REANIMACIÓN CARDIOPULMONAR PEDIÁTRICA (EDUCATIVO)'],
    'Baseado nas Diretrizes PALS 2025': ['Based on the PALS 2025 Guidelines', 'Basado en las Guías PALS 2025'],
    'DADOS DO PACIENTE': ['PATIENT DATA', 'DATOS DEL PACIENTE'],
    'Idade': ['Age', 'Edad'],
    'Data da Reanimação': ['Resuscitation Date', 'Fecha de la reanimación'],
    'Hora de Início': ['Start Time', 'Hora de inicio'],
    'Paciente não identificado': ['Unidentified patient', 'Paciente no identificado'],
    'Idade não informada': ['Age not provided', 'Edad no informada'],
    'Hora não informada': ['Time not provided', 'Hora no informada'],

    // Procedimentos realizados
    'PROCEDIMENTOS REALIZADOS': ['PROCEDURES PERFORMED', 'PROCEDIMIENTOS REALIZADOS'],
    'AVALIAÇÃO INICIAL E RCP BÁSICA': ['INITIAL ASSESSMENT AND BASIC CPR', 'EVALUACIÓN INICIAL Y RCP BÁSICA'],
    'SUPORTE AVANÇADO DE VIDA': ['ADVANCED LIFE SUPPORT', 'SOPORTE VITAL AVANZADO'],
    'MEDICAMENTOS E DROGAS VASOATIVAS': ['MEDICATIONS AND VASOACTIVE DRUGS', 'MEDICAMENTOS Y FÁRMACOS VASOACTIVOS'],
    'DESFIBRILAÇÃO E CARDIOVERSÃO': ['DEFIBRILLATION AND CARDIOVERSION', 'DESFIBRILACIÓN Y CARDIOVERSIÓN'],
    'PROCEDIMENTOS ESPECIAIS': ['SPECIAL PROCEDURES', 'PROCEDIMIENTOS ESPECIALES'],

    // Cabeçalhos que terminam em "):" (registrados com os dois-pontos; sem eles o ")" final seria descartado)
    'DROGAS DE EMERGÊNCIA ADMINISTRADAS (PALS):': ['EMERGENCY DRUGS ADMINISTERED (PALS):', 'FÁRMACOS DE EMERGENCIA ADMINISTRADOS (PALS):'],
    'CHOQUES APLICADOS (DESFIBRILAÇÃO):': ['SHOCKS DELIVERED (DEFIBRILLATION):', 'DESCARGAS APLICADAS (DESFIBRILACIÓN):'],
    'LINHA DO TEMPO DE EVENTOS (ORDEM CRONOLÓGICA):': ['EVENT TIMELINE (CHRONOLOGICAL ORDER):', 'CRONOLOGÍA DE EVENTOS (ORDEN CRONOLÓGICO):'],
    'CÁLCULO DE DROGAS (Baseado no peso Peso não informado):': ['DRUG CALCULATION (Based on weight Weight not provided):', 'CÁLCULO DE FÁRMACOS (Según el peso Peso no informado):'],
    'ENERGIAS DE DESFIBRILAÇÃO E CARDIOVERSÃO (Baseado no peso Peso não informado):': ['DEFIBRILLATION AND CARDIOVERSION ENERGIES (Based on weight Weight not provided):', 'ENERGÍAS DE DESFIBRILACIÓN Y CARDIOVERSIÓN (Según el peso Peso no informado):'],

    // Cálculos sem peso
    'CÁLCULO DE DROGAS (Baseado no peso Peso não informado)': ['DRUG CALCULATION (Based on weight Weight not provided)', 'CÁLCULO DE FÁRMACOS (Según el peso Peso no informado)'],
    '- Peso não informado - não foi possível calcular as doses': ['- Weight not provided - doses could not be calculated', '- Peso no informado - no fue posible calcular las dosis'],
    '- Idade não calculada adequadamente para equipamentos': ['- Age not calculated adequately for equipment', '- Edad no calculada adecuadamente para el equipamiento'],
    '- Peso ou idade não informados - não foi possível calcular equipamentos': ['- Weight or age not provided - equipment could not be calculated', '- Peso o edad no informados - no fue posible calcular el equipamiento'],
    'ENERGIAS DE DESFIBRILAÇÃO E CARDIOVERSÃO (Baseado no peso Peso não informado)': ['DEFIBRILLATION AND CARDIOVERSION ENERGIES (Based on weight Weight not provided)', 'ENERGÍAS DE DESFIBRILACIÓN Y CARDIOVERSIÓN (Según el peso Peso no informado)'],
    '- Peso não informado - não foi possível calcular as energias': ['- Weight not provided - energies could not be calculated', '- Peso no informado - no fue posible calcular las energías'],
    '- Pás Desfibrilador: Pediatric': ['- Defibrillator Pads/Paddles: Pediatric', '- Palas del desfibrilador: pediátricas'],
    '- Pás Desfibrilador: Adulto': ['- Defibrillator Pads/Paddles: Adult', '- Palas del desfibrilador: de adulto'],
    '- Pás Desfibrilador: N/A': ['- Defibrillator Pads/Paddles: N/A', '- Palas del desfibrilador: N/A'],

    // Desfecho
    'DESFECHO DA PCR': ['CARDIAC ARREST OUTCOME', 'DESENLACE DEL PARO CARDIORRESPIRATORIO'],
    'Desfecho': ['Outcome', 'Desenlace'],
    'Horário do Desfecho': ['Outcome Time', 'Hora del desenlace'],
    'Data': ['Date', 'Fecha'],
    'Não registrado': ['Not recorded', 'No registrado'],

    // Drogas registradas
    'DROGAS DE EMERGÊNCIA ADMINISTRADAS (PALS)': ['EMERGENCY DRUGS ADMINISTERED (PALS)', 'FÁRMACOS DE EMERGENCIA ADMINISTRADOS (PALS)'],
    'DROGAS AUXILIARES FORA DO PROTOCOLO PALS': ['ADJUNCT DRUGS OUTSIDE THE PALS PROTOCOL', 'FÁRMACOS AUXILIARES FUERA DEL PROTOCOLO PALS'],

    // Linha do tempo e históricos
    'LINHA DO TEMPO DE EVENTOS (ORDEM CRONOLÓGICA)': ['EVENT TIMELINE (CHRONOLOGICAL ORDER)', 'CRONOLOGÍA DE EVENTOS (ORDEN CRONOLÓGICO)'],
    'Nenhum evento registrado na linha do tempo': ['No events recorded in the timeline', 'Ningún evento registrado en la cronología'],
    'HISTÓRICO DE RITMOS CARDÍACOS': ['CARDIAC RHYTHM HISTORY', 'HISTORIAL DE RITMOS CARDÍACOS'],
    'CHOQUES APLICADOS (DESFIBRILAÇÃO)': ['SHOCKS DELIVERED (DEFIBRILLATION)', 'DESCARGAS APLICADAS (DESFIBRILACIÓN)'],
    'CARDIOVERSÕES SINCRONIZADAS': ['SYNCHRONIZED CARDIOVERSIONS', 'CARDIOVERSIONES SINCRONIZADAS'],
    'HISTÓRICO DE DROGAS ADMINISTRADAS': ['ADMINISTERED DRUG HISTORY', 'HISTORIAL DE FÁRMACOS ADMINISTRADOS'],

    // Resumo
    'RESUMO': ['SUMMARY', 'RESUMEN'],
    'Total de Procedimentos Realizados': ['Total Procedures Performed', 'Total de procedimientos realizados'],
    'Total de Drogas Administradas': ['Total Drugs Administered', 'Total de fármacos administrados'],
    'Total de Choques (Desfibrilação)': ['Total Shocks (Defibrillation)', 'Total de descargas (desfibrilación)'],
    'Total de Cardioversões Sincronizadas': ['Total Synchronized Cardioversions', 'Total de cardioversiones sincronizadas'],
    'Mudanças de Ritmo': ['Rhythm Changes', 'Cambios de ritmo'],
    'OBSERVAÇÕES': ['NOTES', 'OBSERVACIONES'],
    '- Protocolo baseado nas Diretrizes PALS 2025': ['- Protocol based on the PALS 2025 Guidelines', '- Protocolo basado en las Guías PALS 2025'],
    '- Confirme sempre com protocolos institucionais atualizados': ['- Always confirm with up-to-date institutional protocols', '- Confirme siempre con los protocolos institucionales actualizados'],
    '- Este relatório é gerado automaticamente para fins de documentação': ['- This report is generated automatically for documentation purposes', '- Este informe se genera automáticamente con fines de documentación'],
    '- Linha do tempo inclui todos os eventos registrados durante a reanimação': ['- The timeline includes all events recorded during the resuscitation', '- La cronología incluye todos los eventos registrados durante la reanimación'],
    'Data/Hora da Geração do Relatório': ['Report Generation Date/Time', 'Fecha/hora de generación del informe'],

    // Palavras da idade calculada (texto do campo, em português), usadas nos trechos do relatório.
    'ano': ['year', 'año'],
    'anos': ['years', 'años'],
    'mês': ['month', 'mes'],
    'meses': ['months', 'meses'],
    'mêses': ['months', 'meses'],
    'dia': ['day', 'día'],
    'dias': ['days', 'días'],

    // Alertas e confirmações
    'Informe um peso válido do paciente.': ['Enter a valid patient weight.', 'Ingrese un peso válido del paciente.'],
    'Ritmo atual não é chocável. Verifique o monitor.': ['The current rhythm is not shockable. Check the monitor.', 'El ritmo actual no es desfibrilable. Verifique el monitor.'],
    'Informe o peso do paciente antes de administrar a droga': ["Enter the patient's weight before administering the drug", 'Ingrese el peso del paciente antes de administrar el fármaco'],
    "Selecione um paciente no campo 'Nome do Paciente' antes de iniciar o tempo de parada.": ["Select a patient in the 'Patient Name' field before starting the arrest timer.", "Seleccione un paciente en el campo 'Nombre del paciente' antes de iniciar el tiempo de paro."],
    'Erro ao salvar pacientes. Verifique se há espaço suficiente no navegador.': ['Error saving patients. Check that there is enough space in the browser.', 'Error al guardar los pacientes. Verifique que haya espacio suficiente en el navegador.'],
    'Gostaria de resetar esses dados para atender uma nova PCR desse mesmo paciente?': ['Would you like to reset this data to manage a new cardiac arrest for this same patient?', '¿Desea reiniciar estos datos para atender un nuevo paro cardiorrespiratorio de este mismo paciente?'],
    'Não há registro de PCR anterior para este paciente.': ['There is no record of a previous cardiac arrest for this patient.', 'No hay registro de un paro cardiorrespiratorio previo para este paciente.'],
    'Deseja iniciar uma nova PCR e resetar todos os dados deste atendimento?': ['Do you want to start a new cardiac arrest record and reset all data for this resuscitation?', '¿Desea iniciar un nuevo registro de paro cardiorrespiratorio y reiniciar todos los datos de esta atención?'],
    'Informe um peso válido do paciente (use vírgula ou ponto para casas decimais).': ['Enter a valid patient weight (use a comma or a period for decimals).', 'Ingrese un peso válido del paciente (use coma o punto para los decimales).'],
    'Paciente salvo com sucesso!': ['Patient saved successfully!', '¡Paciente guardado correctamente!'],
    'Paciente não encontrado.': ['Patient not found.', 'Paciente no encontrado.'],
    'Por favor, preencha pelo menos o nome do paciente.': ["Please fill in at least the patient's name.", 'Por favor, complete al menos el nombre del paciente.'],
    'Não há paciente carregado. Deseja limpar todos os dados da interface atual?': ['No patient is loaded. Do you want to clear all data from the current screen?', 'No hay ningún paciente cargado. ¿Desea borrar todos los datos de la interfaz actual?'],
    'Tem certeza que deseja apagar este paciente do banco de dados? Esta ação não pode ser desfeita.': ['Are you sure you want to delete this patient from the database? This action cannot be undone.', '¿Está seguro de que desea borrar este paciente de la base de datos? Esta acción no se puede deshacer.'],
    'Paciente removido do banco de dados. Interface limpa.': ['Patient removed from the database. Screen cleared.', 'Paciente eliminado de la base de datos. Interfaz borrada.'],
    'Tem certeza que deseja apagar este paciente? Esta ação não pode ser desfeita.': ['Are you sure you want to delete this patient? This action cannot be undone.', '¿Está seguro de que desea borrar este paciente? Esta acción no se puede deshacer.'],
    'Paciente apagado com sucesso.': ['Patient deleted successfully.', 'Paciente borrado correctamente.'],
    'Aviso Clínico: O peso inserido parece estar fora dos limites pediátricos recomendados ou é inseguro. Por favor, insira um peso válido (entre 0.1 kg e 200 kg).': ['Clinical Warning: The weight entered appears to be outside recommended pediatric limits or is unsafe. Please enter a valid weight (between 0.1 kg and 200 kg).', 'Aviso clínico: El peso ingresado parece estar fuera de los límites pediátricos recomendados o no es seguro. Por favor, ingrese un peso válido (entre 0.1 kg y 200 kg).'],

    // Alerta usado quando o navegador bloqueia a janela do README (o código usa "\\n" literal: uma única linha).
    'README - Como Usar a Calculadora RCP Pediátrica\\n\\n1️⃣ CADASTRO: Preencha nome, data nascimento, peso (vírgula ou ponto), leito, prontuário, diagnóstico\\n2️⃣ DROGAS PALS: Aparecem automaticamente ao selecionar ritmo - clique para marcar administração\\n3️⃣ DROGAS AUXILIARES: Modal dedicado para Bicarbonato, Naloxona, Glucagon, Glicose 10%\\n4️⃣ PROCEDIMENTOS: Marque conforme realizado - cronômetros automáticos\\n5️⃣ CARDIOVERSÃO: Pode repetir múltiplas vezes - cada evento registra horário\\n6️⃣ EQUIPAMENTOS: Tamanhos calculados por idade/peso\\n7️⃣ RELATÓRIO: Gere e copie para prontuário (inclui todos os dados e eventos)\\n\\n⚠️ Baseado nas Diretrizes PALS 2025\\n📱 Otimizado para smartphone, tablet e desktop\\n📖 README completo disponível no botão README': [
      'README - How to Use the Pediatric CPR Calculator\\n\\n1️⃣ REGISTRATION: Fill in name, date of birth, weight (comma or period), bed, MRN, diagnosis\\n2️⃣ PALS DRUGS: Appear automatically when a rhythm is selected - click to mark administration\\n3️⃣ ADJUNCT DRUGS: Dedicated window for Sodium Bicarbonate, Naloxone, Glucagon, Dextrose 10%\\n4️⃣ PROCEDURES: Mark as performed - automatic timers\\n5️⃣ CARDIOVERSION: May be repeated multiple times - each event records the time\\n6️⃣ EQUIPMENT: Sizes calculated by age/weight\\n7️⃣ REPORT: Generate and copy to the health record (includes all data and events)\\n\\n⚠️ Based on the PALS 2025 Guidelines\\n📱 Optimized for smartphone, tablet and desktop\\n📖 Full README available from the README button',
      'README - Cómo usar la calculadora de RCP pediátrica\\n\\n1️⃣ REGISTRO: Complete nombre, fecha de nacimiento, peso (coma o punto), cama, historia clínica, diagnóstico\\n2️⃣ FÁRMACOS PALS: Aparecen automáticamente al seleccionar el ritmo - haga clic para marcar la administración\\n3️⃣ FÁRMACOS AUXILIARES: Ventana dedicada para bicarbonato, naloxona, glucagón, glucosa 10%\\n4️⃣ PROCEDIMIENTOS: Márquelos a medida que se realicen - cronómetros automáticos\\n5️⃣ CARDIOVERSIÓN: Puede repetirse varias veces - cada evento registra la hora\\n6️⃣ EQUIPAMIENTO: Tamaños calculados por edad/peso\\n7️⃣ INFORME: Genere y copie para la historia clínica (incluye todos los datos y eventos)\\n\\n⚠️ Basado en las Guías PALS 2025\\n📱 Optimizado para smartphone, tablet y computadora\\n📖 README completo disponible en el botón README'
    ]
  });

  var DOSE_NAMES = {
    'Epinefrina (1ª dose)': ['Epinephrine (1st dose)', 'Adrenalina (1.ª dosis)'],
    'Epinefrina (2ª dose)': ['Epinephrine (2nd dose)', 'Adrenalina (2.ª dosis)'],
    'Epinefrina (3ª dose)': ['Epinephrine (3rd dose)', 'Adrenalina (3.ª dosis)'],
    'Amiodarona (1ª dose)': ['Amiodarone (1st dose)', 'Amiodarona (1.ª dosis)'],
    'Amiodarona (2ª dose)': ['Amiodarone (2nd dose)', 'Amiodarona (2.ª dosis)'],
    'Amiodarona (3ª dose)': ['Amiodarone (3rd dose)', 'Amiodarona (3.ª dosis)'],
    'Atropina': ['Atropine', 'Atropina'],
    'Atropina (2ª dose)': ['Atropine (2nd dose)', 'Atropina (2.ª dosis)'],
    'Adenosina (1ª dose)': ['Adenosine (1st dose)', 'Adenosina (1.ª dosis)'],
    'Adenosina (2ª dose)': ['Adenosine (2nd dose)', 'Adenosina (2.ª dosis)'],
    'Magnésio Sulfato': ['Magnesium Sulfate', 'Sulfato de magnesio'],
    'Naloxona': ['Naloxone', 'Naloxona'],
    'Glucagon': ['Glucagon', 'Glucagón'],
    'Glicose 10%': ['Dextrose 10%', 'Glucosa al 10%'],
    'Lidocaína': ['Lidocaine', 'Lidocaína'],
    'Cloreto de Cálcio': ['Calcium Chloride', 'Cloruro de calcio'],
    'Bicarbonato de Sódio': ['Sodium Bicarbonate', 'Bicarbonato de sodio']
  };

  function esc(text) {
    return text.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&');
  }

  var patterns = [];
  // "- Nome: ..." (cálculo de drogas, drogas de emergência com horários) e "- Nome (dose = volume): horários".
  Object.keys(DOSE_NAMES).forEach(function (pt) {
    var tr = DOSE_NAMES[pt];
    patterns.push([new RegExp('^- ' + esc(pt) + '( \\([\\d.]+ (?:mEq|mg) = [\\d.]+ mL\\)| \\([\\d.]+ mL\\))?: (.+)$'), '- ' + tr[0] + '$1: $2', '- ' + tr[1] + '$1: $2']);
  });

  patterns.push(
    // Peso formatado em pt-BR (formatarPesoParaExibicao).
    [/^- Peso: (\d+),(\d+) kg$/, '- Weight: $1.$2 kg', '- Peso: $1,$2 kg'],
    [/^CÁLCULO DE DROGAS \(Baseado no peso (\d+),(\d+) kg\):$/, 'DRUG CALCULATION (Based on weight $1.$2 kg):', 'CÁLCULO DE FÁRMACOS (Según el peso $1,$2 kg):'],
    [/^ENERGIAS DE DESFIBRILAÇÃO E CARDIOVERSÃO \(Baseado no peso (\d+),(\d+) kg\):$/, 'DEFIBRILLATION AND CARDIOVERSION ENERGIES (Based on weight $1.$2 kg):', 'ENERGÍAS DE DESFIBRILACIÓN Y CARDIOVERSIÓN (Según el peso $1,$2 kg):'],

    // Equipamentos de via aérea
    [/^- Tubo Endotraqueal: Tamanho (\S+), Profundidade (\S+) cm$/, '- Endotracheal Tube: Size $1, Depth $2 cm', '- Tubo endotraqueal: Tamaño $1, Profundidad $2 cm'],
    [/^- Lâmina Laringoscópio: (.+)$/, '- Laryngoscope Blade: $1', '- Hoja de laringoscopio: $1'],
    [/^- Máscara Facial: Tamanho (\S+)$/, '- Face Mask: Size $1', '- Mascarilla facial: Tamaño $1'],
    [/^- Cateter de Aspiração: (\S+)$/, '- Suction Catheter: $1', '- Sonda de aspiración: $1'],
    [/^- Energia Desfibrilação: 1º choque (\d+) J, 2º\+ choques (\d+) J, máximo (\d+) J$/, '- Defibrillation Energy: 1st shock $1 J, 2nd+ shocks $2 J, maximum $3 J', '- Energía de desfibrilación: 1.ª descarga $1 J, 2.ª+ descargas $2 J, máximo $3 J'],

    // Energias
    [/^- 1º Choque: (\d+) J \(2 J\/kg\)$/, '- 1st Shock: $1 J (2 J/kg)', '- 1.ª descarga: $1 J (2 J/kg)'],
    [/^- 2º Choque: (\d+) J \(4 J\/kg\)$/, '- 2nd Shock: $1 J (4 J/kg)', '- 2.ª descarga: $1 J (4 J/kg)'],
    [/^- 3º Choque: (\d+) J \(4 J\/kg\)$/, '- 3rd Shock: $1 J (4 J/kg)', '- 3.ª descarga: $1 J (4 J/kg)'],
    [/^- 4º Choque: (\d+) J \(4 J\/kg\)$/, '- 4th Shock: $1 J (4 J/kg)', '- 4.ª descarga: $1 J (4 J/kg)'],
    [/^- Cardioversão Sincronizada: (\d+) J \(0,5 J\/kg inicial\)$/, '- Synchronized Cardioversion: $1 J (0.5 J/kg initial)', '- Cardioversión sincronizada: $1 J (0,5 J/kg inicial)'],
    [/^- Energia Máxima: (\d+) J \(10 J\/kg ou dose adulta\)$/, '- Maximum Energy: $1 J (10 J/kg or adult dose)', '- Energía máxima: $1 J (10 J/kg o dosis de adulto)'],

    [/^- Total de Choques \(Desfibrilação\): (\d+)$/, '- Total Shocks (Defibrillation): $1', '- Total de descargas (desfibrilación): $1'],

    // Cardioversões registradas e duração
    [/^- Cardioversão (\d+): (.+)$/, '- Cardioversion $1: $2', '- Cardioversión $1: $2'],
    [/^- Duração Estimada: De (\S+) a (\S+)$/, '- Estimated Duration: From $1 to $2', '- Duración estimada: De $1 a $2'],
    [/^- Duração Estimada: Não iniciado$/, '- Estimated Duration: Not started', '- Duración estimada: No iniciado'],

    // Alertas com valores
    [/^Recuperação registrada às (\S+)\. Todos os cronômetros foram parados\.$/, 'Recovery (ROSC) recorded at $1. All timers have been stopped.', 'Recuperación (RCE) registrada a las $1. Todos los cronómetros se detuvieron.'],
    [/^Óbito registrado às (\S+)\. Todos os cronômetros foram parados\.$/, 'Death recorded at $1. All timers have been stopped.', 'Fallecimiento registrado a las $1. Todos los cronómetros se detuvieron.'],
    [/^Cardioversão de (\d+) J registrada às (\S+)$/, 'Cardioversion of $1 J recorded at $2', 'Cardioversión de $1 J registrada a las $2'],
    [/^Aguarde (\d+:\d{2}) antes da próxima dose$/, 'Wait $1 before the next dose', 'Espere $1 antes de la próxima dosis'],
    [/^Horário: (\S+)$/, 'Time: $1', 'Hora: $1'],
    [/^A última PCR desse paciente foi em (\d{2}\/\d{2}\/\d{4}) às (\d{2}:\d{2})\.$/, "This patient's last cardiac arrest was on $1 at $2.", 'El último paro cardiorrespiratorio de este paciente fue el $1 a las $2.'],
    [/^Novo episódio de PCR iniciado para "(.*)"!$/, 'New cardiac arrest episode started for "$1"!', '¡Nuevo episodio de paro cardiorrespiratorio iniciado para "$1"!'],
    [/^Paciente "(.*)" carregado com sucesso!$/, 'Patient "$1" loaded successfully!', '¡Paciente "$1" cargado correctamente!']
  );
  i18n.registerPatterns(patterns);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
