/* Medicamentos neonatais — antimicrobianos (files/antibiotico_neonatal.html) — [inglês, espanhol]. */
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

  // Nomes dos fármacos (seletor) e as chaves internas que o texto copiado imprime em "- Nome:".
  var DRUGS = [
    ['aciclovir', 'Aciclovir', 'Acyclovir', 'Aciclovir'],
    ['ganciclovir', 'Ganciclovir', 'Ganciclovir', 'Ganciclovir'],
    ['lamivudina', 'Lamivudina', 'Lamivudine', 'Lamivudina'],
    ['nevirapina', 'Nevirapina', 'Nevirapine', 'Nevirapina'],
    ['zidovudina', 'Zidovudina (AZT)', 'Zidovudine (AZT)', 'Zidovudina (AZT)'],
    ['ampicilina', 'Ampicilina', 'Ampicillin', 'Ampicilina'],
    ['nafcillina', 'Nafcillina', 'Nafcillin', 'Nafcilina'],
    ['oxacilina', 'Oxacilina', 'Oxacillin', 'Oxacilina'],
    ['penicilina', 'Penicilina G', 'Penicillin G', 'Penicilina G'],
    ['piperacilina', 'Piperacilina', 'Piperacillin', 'Piperacilina'],
    ['piperacilina_tazobactam', 'Piperacilina/Tazobactam', 'Piperacillin/Tazobactam', 'Piperacilina/tazobactam'],
    ['ticarcilina_clavulanato', 'Ticarcilina/Clavulanato', 'Ticarcillin/Clavulanate', 'Ticarcilina/clavulanato'],
    ['amicacina', 'Amicacina', 'Amikacin', 'Amikacina'],
    ['gentamicina', 'Gentamicina', 'Gentamicin', 'Gentamicina'],
    ['netilmicina', 'Netilmicina', 'Netilmicin', 'Netilmicina'],
    ['tobramicina', 'Tobramicina', 'Tobramycin', 'Tobramicina'],
    ['cefazolina', 'Cefazolina', 'Cefazolin', 'Cefazolina'],
    ['cefepime', 'Cefepime', 'Cefepime', 'Cefepima'],
    ['cefotaxima', 'Cefotaxima', 'Cefotaxime', 'Cefotaxima'],
    ['cefoxitina', 'Cefoxitina', 'Cefoxitin', 'Cefoxitina'],
    ['ceftazidima', 'Ceftazidima', 'Ceftazidime', 'Ceftazidima'],
    ['ceftriaxona', 'Ceftriaxona', 'Ceftriaxone', 'Ceftriaxona'],
    ['imipenem', 'Imipenem/Cilastatina', 'Imipenem/Cilastatin', 'Imipenem/cilastatina'],
    ['meropenem', 'Meropenem', 'Meropenem', 'Meropenem'],
    ['azitromicina', 'Azitromicina', 'Azithromycin', 'Azitromicina'],
    ['aztreonam', 'Aztreonam', 'Aztreonam', 'Aztreonam'],
    ['clindamicina', 'Clindamicina', 'Clindamycin', 'Clindamicina'],
    ['cloranfenicol', 'Cloranfenicol', 'Chloramphenicol', 'Cloranfenicol'],
    ['eritromicina', 'Eritromicina', 'Erythromycin', 'Eritromicina'],
    ['linezolida', 'Linezolida', 'Linezolid', 'Linezolid'],
    ['metronidazol', 'Metronidazol', 'Metronidazole', 'Metronidazol'],
    ['quinupristina_dalfopristina', 'Quinupristina/Dalfopristina', 'Quinupristin/Dalfopristin', 'Quinupristina/dalfopristina'],
    ['rifampicina', 'Rifampicina', 'Rifampin', 'Rifampicina'],
    ['vancomicina', 'Vancomicina', 'Vancomycin', 'Vancomicina'],
    ['anfotericina', 'Anfotericina B', 'Amphotericin B', 'Anfotericina B'],
    ['caspofungin', 'Caspofungin', 'Caspofungin', 'Caspofungina'],
    ['fluconazol', 'Fluconazol', 'Fluconazole', 'Fluconazol'],
    ['flucytosina', 'Flucytosina', 'Flucytosine', 'Flucitosina'],
    ['micafungina', 'Micafungina', 'Micafungin', 'Micafungina'],
    ['palivizumab', 'Palivizumab (Synagis)', 'Palivizumab (Synagis)', 'Palivizumab (Synagis)']
  ];

  var D = {
    // Cabeçalho
    'NeoPedCalc — Medicamentos neonatais (educativo)': ['NeoPedCalc — Neonatal drugs (educational)', 'NeoPedCalc — Medicamentos neonatales (educativo)'],
    'Medicamentos neonatais': ['Neonatal drugs', 'Medicamentos neonatales'],
    'Ferramenta educativa — valores a partir de tabelas tipo handbook (IG, dias de vida, peso).': ['Educational tool — values from handbook-style tables (GA, days of life, weight).', 'Herramienta educativa — valores a partir de tablas tipo manual (EG, días de vida, peso).'],
    'Não prescreve': ['Does not prescribe', 'No prescribe'],
    'confirme sempre com bulário, protocolo institucional e equipe': ['always confirm with the drug label, institutional protocol and the team', 'confirme siempre con el prospecto, el protocolo institucional y el equipo'],
    'Como usar': ['How to use', 'Cómo usar'],

    // Formulário
    'Peso (kg):': ['Weight (kg):', 'Peso (kg):'],
    'Idade Gestacional (semanas):': ['Gestational Age (weeks):', 'Edad gestacional (semanas):'],
    'Idade Pós-Natal (dias):': ['Postnatal Age (days):', 'Edad posnatal (días):'],
    'Medicamento:': ['Drug:', 'Medicamento:'],
    'Selecione o medicamento': ['Select the drug', 'Seleccione el medicamento'],
    'Indicação:': ['Indication:', 'Indicación:'],
    'Selecione a indicação': ['Select the indication', 'Seleccione la indicación'],
    'Sepse neonatal': ['Neonatal sepsis', 'Sepsis neonatal'],
    'Meningite': ['Meningitis', 'Meningitis'],
    'Meningoencefalite': ['Meningoencephalitis', 'Meningoencefalitis'],
    'Imunossuprimido': ['Immunocompromised', 'Inmunodeprimido'],
    'Calcular Dosagem': ['Calculate Dose', 'Calcular dosis'],

    // Resultados
    'Dosagem por Dose': ['Dose per Administration', 'Dosis por administración'],
    'Intervalo entre Doses': ['Dosing Interval', 'Intervalo entre dosis'],
    'horas': ['hours', 'horas'],
    'Dosagem Diária Total': ['Total Daily Dose', 'Dosis diaria total'],
    'Dosagem por Peso': ['Dose per Weight', 'Dosis por peso'],
    'mg/dia': ['mg/day', 'mg/día'],
    'mg/kg/dose': ['mg/kg/dose', 'mg/kg/dosis'],
    'UI': ['IU', 'UI'],
    'UI/dia': ['IU/day', 'UI/día'],
    'UI/kg/dose': ['IU/kg/dose', 'UI/kg/dosis'],
    'Copiar texto informativo': ['Copy informational text', 'Copiar texto informativo'],
    'Atenção:': ['Caution:', 'Atención:'],
    'Uso educacional e informativo. Não substitui prescrição, cultura/antibiograma nem decisão da neonatologia/farmácia clínica.': ['Educational and informational use. Does not replace a prescription, culture/susceptibility testing, or the decision of the neonatology/clinical pharmacy team.', 'Uso educativo e informativo. No sustituye la prescripción, el cultivo/antibiograma ni la decisión de neonatología/farmacia clínica.'],
    'Lembretes (contexto clínico real):': ['Reminders (real clinical context):', 'Recordatorios (contexto clínico real):'],
    '• Função renal/hepática e cultura podem exigir ajustes não refletidos aqui': ['• Renal/hepatic function and cultures may require adjustments not reflected here', '• La función renal/hepática y los cultivos pueden requerir ajustes no reflejados aquí'],
    '• Níveis séricos e interações: conforme protocolo institucional': ['• Serum levels and interactions: per institutional protocol', '• Niveles séricos e interacciones: según el protocolo institucional'],
    '• “Copiar texto informativo” gera rascunho — revise antes de qualquer registro': ['• “Copy informational text” creates a draft — review it before any documentation', '• “Copiar texto informativo” genera un borrador — revíselo antes de cualquier registro'],
    'Medicamentos Neonatais': ['Neonatal Drugs', 'Medicamentos neonatales'],

    // Modal "Como usar"
    'Como usar — medicamentos neonatais (educativo)': ['How to use — neonatal drugs (educational)', 'Cómo usar — medicamentos neonatales (educativo)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Exibir': ['Display', 'Mostrar'],
    'números de referência': ['reference numbers', 'números de referencia'],
    '(mg ou UI por kg, dose por aplicação, intervalo) a partir de uma base embutida que combina': ['(mg or IU per kg, dose per administration, interval) from a built-in database that combines', '(mg o UI por kg, dosis por administración, intervalo) a partir de una base integrada que combina'],
    'idade gestacional': ['gestational age', 'edad gestacional'],
    'dias de vida': ['days of life', 'días de vida'],
    'peso': ['weight', 'peso'],
    'É material para': ['It is material for', 'Es material para'],
    'estudo e checagem': ['study and cross-checking', 'estudio y verificación'],
    'não substitui': ['does not replace', 'no sustituye'],
    'prescrição, cultura, ajuste renal ou protocolo da unidade.': ['a prescription, cultures, renal adjustment or the unit protocol.', 'la prescripción, el cultivo, el ajuste renal ni el protocolo de la unidad.'],
    'Lógica resumida': ['Summary of the logic', 'Lógica resumida'],
    'Dose por aplicação ≈ peso (kg) × dose por kg (tabela)': ['Dose per administration ≈ weight (kg) × dose per kg (table)', 'Dosis por administración ≈ peso (kg) × dosis por kg (tabla)'],
    'Intervalo em horas vem da mesma tabela conforme faixa de IG/dias ou indicação escolhida': ['The interval in hours comes from the same table, according to the GA/days band or the chosen indication', 'El intervalo en horas proviene de la misma tabla según el rango de EG/días o la indicación elegida'],
    'Doses/dia ≈ 24 ÷ intervalo; dose diária ≈ dose por aplicação × doses/dia': ['Doses/day ≈ 24 ÷ interval; daily dose ≈ dose per administration × doses/day', 'Dosis/día ≈ 24 ÷ intervalo; dosis diaria ≈ dosis por administración × dosis/día'],
    'Faixas usadas pelo app (simplificado)': ['Bands used by the app (simplified)', 'Rangos usados por la app (simplificado)'],
    'Dose padrão (usada em sepse neonatal): IG ≤29 sem (0–7 vs 8–28 dias), 30–34 sem (0–7 vs ≥8 dias), ≥35 sem. A tela e o texto copiado usam o mesmo cálculo.': ['Standard dose (used for neonatal sepsis): GA ≤29 wk (0–7 vs 8–28 days), 30–34 wk (0–7 vs ≥8 days), ≥35 wk. The screen and the copied text use the same calculation.', 'Dosis estándar (usada en sepsis neonatal): EG ≤29 sem (0–7 vs 8–28 días), 30–34 sem (0–7 vs ≥8 días), ≥35 sem. La pantalla y el texto copiado usan el mismo cálculo.'],
    'Meningite:': ['Meningitis:', 'Meningitis:'],
    'quando o medicamento tem dose específica para meningite na fonte citada, ela substitui a dose padrão; caso contrário, o app usa a dose padrão e informa isso no resultado.': ['when the cited source gives a meningitis-specific dose for the drug, it replaces the standard dose; otherwise the app uses the standard dose and says so in the result.', 'cuando la fuente citada indica una dosis específica para meningitis del medicamento, esta reemplaza la dosis estándar; de lo contrario, la app usa la dosis estándar y lo indica en el resultado.'],
    'Ampicilina (todas as IG): 0–7 dias 100 mg/kg/dose a cada 8 h; 8–28 dias 75 mg/kg/dose a cada 6 h (300 mg/kg/dia).': ['Ampicillin (all GA): 0–7 days 100 mg/kg/dose every 8 h; 8–28 days 75 mg/kg/dose every 6 h (300 mg/kg/day).', 'Ampicilina (todas las EG): 0–7 días 100 mg/kg/dosis cada 8 h; 8–28 días 75 mg/kg/dosis cada 6 h (300 mg/kg/día).'],
    'Penicilina G cristalina (todas as IG): 0–7 dias 150.000 UI/kg/dose a cada 8 h; 8–28 dias 125.000 UI/kg/dose a cada 6 h.': ['Aqueous crystalline penicillin G (all GA): 0–7 days 150,000 IU/kg/dose every 8 h; 8–28 days 125,000 IU/kg/dose every 6 h.', 'Penicilina G cristalina (todas las EG): 0–7 días 150.000 UI/kg/dosis cada 8 h; 8–28 días 125.000 UI/kg/dosis cada 6 h.'],
    'Cefotaxima (idade pós-menstrual ≥37 sem): 0–7 dias 50 mg/kg/dose a cada 8 h; ≥8 dias 50 mg/kg/dose a cada 6 h. Abaixo de 37 sem, usa a dose padrão.': ['Cefotaxime (postmenstrual age ≥37 wk): 0–7 days 50 mg/kg/dose every 8 h; ≥8 days 50 mg/kg/dose every 6 h. Below 37 wk, the standard dose is used.', 'Cefotaxima (edad posmenstrual ≥37 sem): 0–7 días 50 mg/kg/dosis cada 8 h; ≥8 días 50 mg/kg/dosis cada 6 h. Por debajo de 37 sem, se usa la dosis estándar.'],
    'Meropenem: 40 mg/kg/dose a cada 8 h.': ['Meropenem: 40 mg/kg/dose every 8 h.', 'Meropenem: 40 mg/kg/dosis cada 8 h.'],
    'Demais medicamentos (ex.: gentamicina, vancomicina): sem dose específica para meningite na fonte — dose padrão.': ['Other drugs (e.g., gentamicin, vancomycin): no meningitis-specific dose in the source — standard dose.', 'Demás medicamentos (ej.: gentamicina, vancomicina): sin dosis específica para meningitis en la fuente — dosis estándar.'],
    'Meningoencefalite e imunossuprimido usam a linha própria do medicamento quando existe; sem ela, o cálculo é bloqueado.': ['Meningoencephalitis and immunocompromised use the drug’s own row when it exists; without it, the calculation is blocked.', 'Meningoencefalitis e inmunodeprimido usan la fila propia del medicamento cuando existe; sin ella, el cálculo se bloquea.'],
    'Passos na tela': ['On-screen steps', 'Pasos en pantalla'],
    'Preencha peso, IG, dias de vida, medicamento e indicação.': ['Enter weight, GA, days of life, drug and indication.', 'Complete peso, EG, días de vida, medicamento e indicación.'],
    'Use': ['Use', 'Use'],
    'para ver os cartões de resultado.': ['to see the result cards.', 'para ver las tarjetas de resultados.'],
    'cola um resumo — revise cada linha antes de usar em prontuário ou mensagem.': ['copies a summary — review every line before using it in a medical record or message.', 'copia un resumen — revise cada línea antes de usarlo en la historia clínica o en un mensaje.'],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Se não houver linha na tabela para a combinação IG/dias/indicação, o app bloqueia o cálculo — isso não “prova” que não exista outra fonte.': ['If the table has no row for the GA/days/indication combination, the app blocks the calculation — this does not “prove” that no other source exists.', 'Si la tabla no tiene una fila para la combinación EG/días/indicación, la app bloquea el cálculo — esto no “prueba” que no exista otra fuente.'],
    'Não inclui todos os cenários de clearance, diálise ou interações.': ['Does not cover every clearance, dialysis or interaction scenario.', 'No incluye todos los escenarios de aclaramiento, diálisis o interacciones.'],
    'Tipos de fármacos no seletor': ['Drug types in the selector', 'Tipos de fármacos en el selector'],
    'Antibióticos, antifúngicos, antivirais e outros itens neonatais presentes na lista do aplicativo (cada ficha segue a base interna, não este resumo).': ['Antibiotics, antifungals, antivirals and other neonatal items in the app list (each entry follows the internal database, not this summary).', 'Antibióticos, antifúngicos, antivirales y otros elementos neonatales de la lista de la aplicación (cada ficha sigue la base interna, no este resumen).'],
    'Referências:': ['References:', 'Referencias:'],

    // Alertas
    'Medicamento não encontrado!': ['Drug not found!', '¡Medicamento no encontrado!'],
    'Medicamento nao encontrado!': ['Drug not found!', '¡Medicamento no encontrado!'],
    'ALERTA DE SEGURANÇA: Não foi possível calcular a dosagem exata. O cruzamento entre Indicação, Idade Gestacional e Dias de Vida deste paciente não está coberto pelo protocolo estrito do medicamento selecionado. Por segurança, o sistema bloqueou o uso automático. Consulte a bula ou o protocolo institucional.': ['SAFETY ALERT: The exact dose could not be calculated. This patient’s combination of Indication, Gestational Age and Days of Life is not covered by the strict protocol of the selected drug. For safety, the system blocked automatic use. Consult the drug label or the institutional protocol.', 'ALERTA DE SEGURIDAD: No fue posible calcular la dosis exacta. La combinación de indicación, edad gestacional y días de vida de este paciente no está cubierta por el protocolo estricto del medicamento seleccionado. Por seguridad, el sistema bloqueó el uso automático. Consulte el prospecto o el protocolo institucional.'],
    'Dados de dosagem não encontrados para este medicamento!': ['Dosing data not found for this drug!', '¡No se encontraron datos de dosificación para este medicamento!'],
    'Erro: Campos obrigatorios nao encontrados. Execute o calculo primeiro.': ['Error: Required fields not found. Run the calculation first.', 'Error: No se encontraron los campos obligatorios. Realice el cálculo primero.'],
    'Erro: Dados invalidos. Verifique se todos os campos foram preenchidos.': ['Error: Invalid data. Check that all fields have been filled in.', 'Error: Datos no válidos. Verifique que todos los campos estén completos.'],
    'ERRO: Não é possível gerar relatório para pesos superiores a 10kg em ambiente neonatal.': ['ERROR: A report cannot be generated for weights above 10kg in the neonatal setting.', 'ERROR: No es posible generar el informe para pesos superiores a 10kg en el ámbito neonatal.'],
    'ALERTA DE SEGURANÇA: Impressão bloqueada. O cruzamento entre Indicação, Idade Gestacional e Dias de Vida deste paciente não existe nativamente no protocolo do medicamento.': ['SAFETY ALERT: Output blocked. This patient’s combination of Indication, Gestational Age and Days of Life does not exist natively in the drug’s protocol.', 'ALERTA DE SEGURIDAD: Impresión bloqueada. La combinación de indicación, edad gestacional y días de vida de este paciente no existe de forma nativa en el protocolo del medicamento.'],
    'Dados de dosagem nao encontrados!': ['Dosing data not found!', '¡No se encontraron datos de dosificación!'],
    'Texto copiado. Revise numeros e contexto antes de usar em registro clinico ou mensagem.': ['Text copied. Review the numbers and context before using it in a clinical record or message.', 'Texto copiado. Revise los números y el contexto antes de usarlo en un registro clínico o mensaje.'],

    // Texto copiado
    'RESUMO INFORMATIVO — Medicamento neonatal (NeoPedCalc, uso educativo)': ['INFORMATIONAL SUMMARY — Neonatal drug (NeoPedCalc, educational use)', 'RESUMEN INFORMATIVO — Medicamento neonatal (NeoPedCalc, uso educativo)'],
    'NOTA: Texto gerado por calculadora; nao constitui diagnostico formal nem prescricao. Conferir com bulario/protocolo institucional, cultura e funcao renal/hepatica antes de qualquer decisao clinica.': ['NOTE: Text generated by a calculator; it is not a formal diagnosis or prescription. Check against the drug label/institutional protocol, cultures and renal/hepatic function before any clinical decision.', 'NOTA: Texto generado por una calculadora; no constituye un diagnóstico formal ni una prescripción. Verifique con el prospecto/protocolo institucional, cultivos y función renal/hepática antes de cualquier decisión clínica.'],
    'DADOS INFORMADOS:': ['DATA ENTERED:', 'DATOS INGRESADOS:'],
    'MEDICAMENTO (selecao no app):': ['DRUG (selection in the app):', 'MEDICAMENTO (selección en la app):'],
    'VALORES CALCULADOS (aritmeticos a partir da tabela embutida):': ['CALCULATED VALUES (arithmetic from the built-in table):', 'VALORES CALCULADOS (aritméticos a partir de la tabla integrada):'],
    'LEMBRETES EDUCATIVOS:': ['EDUCATIONAL REMINDERS:', 'RECORDATORIOS EDUCATIVOS:'],
    '- Correlacionar com cultura, clearance e protocolo institucional.': ['- Correlate with cultures, clearance and institutional protocol.', '- Correlacionar con cultivos, aclaramiento y protocolo institucional.'],
    '- Prematuridade e dias de vida mudam rapidamente — reavaliacao clinica independe deste texto.': ['- Prematurity and days of life change quickly — clinical reassessment is independent of this text.', '- La prematuridad y los días de vida cambian rápidamente — la reevaluación clínica es independiente de este texto.'],
    'NOTA EDUCATIVA: Revise todos os valores. A NeoPedCalc nao substitui julgamento clinico nem protocolos institucionais.': ['EDUCATIONAL NOTE: Review all values. NeoPedCalc does not replace clinical judgment or institutional protocols.', 'NOTA EDUCATIVA: Revise todos los valores. NeoPedCalc no sustituye el juicio clínico ni los protocolos institucionales.'],
    'semanas': ['weeks', 'semanas'],
    'dias': ['days', 'días'],
    'Prematuro extremo (≤29 semanas)': ['Extremely preterm (≤29 weeks)', 'Prematuro extremo (≤29 semanas)'],
    'Prematuro moderado (30-34 semanas)': ['Moderately preterm (30-34 weeks)', 'Prematuro moderado (30-34 semanas)'],
    'Termo (≥35 semanas)': ['Term (≥35 weeks)', 'Término (≥35 semanas)'],
    // Esquema de dose (tela e texto copiado)
    'Esquema aplicado:': ['Regimen applied:', 'Esquema aplicado:'],
    'Faixa da tabela:': ['Table band:', 'Rango de la tabla:'],
    'Fonte da dose:': ['Dose source:', 'Fuente de la dosis:'],
    'Meningite — dose específica para meningite': ['Meningitis — meningitis-specific dose', 'Meningitis — dosis específica para meningitis'],
    'Padrão por IG e dias de vida (sem dose específica para meningite na fonte)': ['Standard by GA and days of life (no meningitis-specific dose in the source)', 'Estándar por EG y días de vida (sin dosis específica para meningitis en la fuente)'],
    'Padrão por IG e dias de vida': ['Standard by GA and days of life', 'Estándar por EG y días de vida'],
    'Indicação específica: Meningoencefalite': ['Specific indication: Meningoencephalitis', 'Indicación específica: Meningoencefalitis'],
    'Indicação específica: Imunossuprimido': ['Specific indication: Immunocompromised', 'Indicación específica: Inmunodeprimido'],
    'IG ≤29 sem, 0–7 dias de vida': ['GA ≤29 wk, 0–7 days of life', 'EG ≤29 sem, 0–7 días de vida'],
    'IG ≤29 sem, 8–28 dias de vida': ['GA ≤29 wk, 8–28 days of life', 'EG ≤29 sem, 8–28 días de vida'],
    'IG 30–34 sem, 0–7 dias de vida': ['GA 30–34 wk, 0–7 days of life', 'EG 30–34 sem, 0–7 días de vida'],
    'IG 30–34 sem, ≥8 dias de vida': ['GA 30–34 wk, ≥8 days of life', 'EG 30–34 sem, ≥8 días de vida'],
    'IG ≥35 sem, 0–28 dias de vida': ['GA ≥35 wk, 0–28 days of life', 'EG ≥35 sem, 0–28 días de vida'],
    'Todas as IG, 0–7 dias de vida': ['All GA, 0–7 days of life', 'Todas las EG, 0–7 días de vida'],
    'Todas as IG, 8–28 dias de vida': ['All GA, 8–28 days of life', 'Todas las EG, 8–28 días de vida'],
    'Idade pós-menstrual ≥37 sem, 0–7 dias de vida': ['Postmenstrual age ≥37 wk, 0–7 days of life', 'Edad posmenstrual ≥37 sem, 0–7 días de vida'],
    'Idade pós-menstrual ≥37 sem, 8–28 dias de vida': ['Postmenstrual age ≥37 wk, 8–28 days of life', 'Edad posmenstrual ≥37 sem, 8–28 días de vida'],
    'Todas as IG e dias de vida (0–28)': ['All GA and days of life (0–28)', 'Todas las EG y días de vida (0–28)'],
    'Linha da indicação (independe de IG/dias)': ['Indication row (independent of GA/days)', 'Fila de la indicación (independiente de EG/días)'],
    'AAP Red Book 2021–2024, Tabela 4.2 (meningite por SGB)': ['AAP Red Book 2021–2024, Table 4.2 (GBS meningitis)', 'AAP Red Book 2021–2024, Tabla 4.2 (meningitis por EGB)'],
    'NeoMed Consensus Group, monografia Cefotaxima (≥37 sem pós-menstrual)': ['NeoMed Consensus Group, Cefotaxime monograph (≥37 wk postmenstrual)', 'NeoMed Consensus Group, monografía de cefotaxima (≥37 sem posmenstrual)'],
    'Pediamécum (AEP), meropenem — meningite neonatal': ['Pediamécum (AEP), meropenem — neonatal meningitis', 'Pediamécum (AEP), meropenem — meningitis neonatal'],
    'Doses altas de ampicilina associam-se a convulsões; usar com cautela (Lim & Miller, Am J Perinatol 2022).': ['High ampicillin doses are associated with seizures; use with caution (Lim & Miller, Am J Perinatol 2022).', 'Las dosis altas de ampicilina se asocian a convulsiones; usar con precaución (Lim & Miller, Am J Perinatol 2022).'],
    'Erro: Idade gestacional deve estar entre 22 e 42 semanas e idade pós-natal entre 0 e 28 dias.': ['Error: Gestational age must be between 22 and 42 weeks and postnatal age between 0 and 28 days.', 'Error: La edad gestacional debe estar entre 22 y 42 semanas y la edad posnatal entre 0 y 28 días.'],
    'Nao informada': ['Not provided', 'No informada'],

    // Classes (texto copiado, "- Classe:")
    'Antiviral': ['Antiviral', 'Antiviral'],
    'Penicilina': ['Penicillin', 'Penicilina'],
    'Penicilina + Inibidor': ['Penicillin + Inhibitor', 'Penicilina + inhibidor'],
    'Aminoglicosídeo': ['Aminoglycoside', 'Aminoglucósido'],
    'Cefalosporina': ['Cephalosporin', 'Cefalosporina'],
    'Cefamicina': ['Cephamycin', 'Cefamicina'],
    'Carbapenem': ['Carbapenem', 'Carbapenémico'],
    'Macrolídeo': ['Macrolide', 'Macrólido'],
    'Monobactam': ['Monobactam', 'Monobactámico'],
    'Lincosamida': ['Lincosamide', 'Lincosamida'],
    'Fenicol': ['Amphenicol', 'Anfenicol'],
    'Oxazolidinona': ['Oxazolidinone', 'Oxazolidinona'],
    'Nitroimidazol': ['Nitroimidazole', 'Nitroimidazol'],
    'Estreptogramina': ['Streptogramin', 'Estreptogramina'],
    'Rifamicina': ['Rifamycin', 'Rifamicina'],
    'Glicopeptídeo': ['Glycopeptide', 'Glucopéptido'],
    'Antifúngico': ['Antifungal', 'Antifúngico'],
    'Anticorpo Monoclonal': ['Monoclonal Antibody', 'Anticuerpo monoclonal']
  };

  DRUGS.forEach(function (d) {
    D[d[1]] = [d[2], d[3]];
    if (!D[d[0]]) D[d[0]] = [d[2], d[3]];
  });

  i18n.register(D);

  i18n.registerPatterns([
    [/^ERRO DE SEGURANÇA CLÍNICA: O peso informado \((.*) kg\) é inválido para a faixa neonatal\. O peso máximo permitido nesta calculadora específica é 10 kg\. Verifique se você digitou gramas no lugar de quilogramas \(ex: digite 0\.5 em vez de 500\)\.$/,
      'CLINICAL SAFETY ERROR: The entered weight ($1 kg) is invalid for the neonatal range. The maximum weight allowed in this calculator is 10 kg. Check whether you entered grams instead of kilograms (e.g., enter 0.5 instead of 500).',
      'ERROR DE SEGURIDAD CLÍNICA: El peso ingresado ($1 kg) no es válido para el rango neonatal. El peso máximo permitido en esta calculadora es 10 kg. Verifique si ingresó gramos en lugar de kilogramos (ej.: ingrese 0.5 en lugar de 500).'],
    line('- Peso', '- Weight', '- Peso'),
    line('- Idade gestacional', '- Gestational age', '- Edad gestacional'),
    line('- Dias de vida', '- Days of life', '- Días de vida'),
    line('- Categoria (rotulo do app)', '- Category (app label)', '- Categoría (etiqueta de la app)'),
    line('- Nome', '- Name', '- Nombre'),
    line('- Classe', '- Class', '- Clase'),
    line('- Indicacao (campo)', '- Indication (field)', '- Indicación (campo)'),
    line('- Esquema aplicado', '- Regimen applied', '- Esquema aplicado'),
    line('- Faixa da tabela', '- Table band', '- Rango de la tabla'),
    line('- Fonte da dose', '- Dose source', '- Fuente de la dosis'),
    line('- Observacao', '- Note', '- Observación'),
    line('- Dose por peso', '- Dose per weight', '- Dosis por peso'),
    line('- Dose por aplicacao', '- Dose per administration', '- Dosis por administración'),
    line('- Intervalo', '- Interval', '- Intervalo'),
    line('- Doses por dia (24/intervalo)', '- Doses per day (24/interval)', '- Dosis por día (24/intervalo)'),
    line('- Dose diaria total (extrapolacao)', '- Total daily dose (extrapolation)', '- Dosis diaria total (extrapolación)')
  ]);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
