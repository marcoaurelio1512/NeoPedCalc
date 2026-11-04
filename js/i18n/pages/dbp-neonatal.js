/* Classificação de DBP — NICHD 2001 e Jensen 2019 (files/dbp_neonatal.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  /** O relatório copiado usa os mesmos textos sem acentos e, nas listas, com o prefixo "- ". */
  function plain(text) {
    return String(text).normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  function withReportVariants(entries) {
    var out = {};
    Object.keys(entries).forEach(function (pt) {
      var value = entries[pt];
      out[pt] = value;
      out[plain(pt)] = value;
      out['- ' + plain(pt)] = ['- ' + value[0], '- ' + value[1]];
    });
    return out;
  }

  // Textos que aparecem na tela e também no relatório (frases, rótulos e classificações).
  i18n.register(withReportVariants({
    // Classificações
    'Sem DBP': ['No BPD', 'Sin DBP'],
    'DBP leve': ['Mild BPD', 'DBP leve'],
    'DBP moderada': ['Moderate BPD', 'DBP moderada'],
    'DBP grave': ['Severe BPD', 'DBP grave'],
    'DBP grau 1': ['Grade 1 BPD', 'DBP grado 1'],
    'DBP grau 2': ['Grade 2 BPD', 'DBP grado 2'],
    'DBP grau 3': ['Grade 3 BPD', 'DBP grado 3'],
    // Critérios NICHD 2001
    'O₂ suplementar por menos de 28 dias: não preenche o critério NICHD 2001 para DBP.': ['Supplemental O₂ for less than 28 days: does not meet the NICHD 2001 criterion for BPD.', 'O₂ suplementario durante menos de 28 días: no cumple el criterio NICHD 2001 de DBP.'],
    'O₂ ≥ 28 dias e pressão positiva (CPAP/NIPPV ou ventilação mecânica) na avaliação.': ['O₂ ≥ 28 days and positive pressure (CPAP/NIPPV or mechanical ventilation) at assessment.', 'O₂ ≥ 28 días y presión positiva (CPAP/NIPPV o ventilación mecánica) en la evaluación.'],
    'O₂ ≥ 28 dias e necessidade de O₂ ≥ 30% na avaliação.': ['O₂ ≥ 28 days and O₂ requirement ≥ 30% at assessment.', 'O₂ ≥ 28 días y necesidad de O₂ ≥ 30% en la evaluación.'],
    'O₂ ≥ 28 dias e necessidade de O₂ < 30% na avaliação.': ['O₂ ≥ 28 days and O₂ requirement < 30% at assessment.', 'O₂ ≥ 28 días y necesidad de O₂ < 30% en la evaluación.'],
    'O₂ ≥ 28 dias e ar ambiente (sem necessidade de O₂) na avaliação.': ['O₂ ≥ 28 days and breathing room air (no O₂ requirement) at assessment.', 'O₂ ≥ 28 días y aire ambiente (sin necesidad de O₂) en la evaluación.'],
    'Momento: 36 semanas de IPM ou alta, o que ocorrer primeiro.': ['Timing: 36 weeks PMA or discharge, whichever comes first.', 'Momento: 36 semanas de EPM o alta, lo que ocurra primero.'],
    'Momento: > 28 e < 56 dias de idade pós-natal ou alta, o que ocorrer primeiro.': ['Timing: > 28 and < 56 days postnatal age or discharge, whichever comes first.', 'Momento: > 28 y < 56 días de edad posnatal o alta, lo que ocurra primero.'],
    // Critérios Jensen 2019
    'Sem suporte respiratório às 36 semanas de IPM.': ['No respiratory support at 36 weeks PMA.', 'Sin soporte respiratorio a las 36 semanas de EPM.'],
    'Ventilação mecânica invasiva.': ['Invasive mechanical ventilation.', 'Ventilación mecánica invasiva.'],
    'Pressão positiva não invasiva (CPAP ou NIPPV).': ['Noninvasive positive pressure (CPAP or NIPPV).', 'Presión positiva no invasiva (CPAP o NIPPV).'],
    'Cânula nasal > 2 L/min.': ['Nasal cannula > 2 L/min.', 'Cánula nasal > 2 L/min.'],
    'Cânula nasal ≤ 2 L/min.': ['Nasal cannula ≤ 2 L/min.', 'Cánula nasal ≤ 2 L/min.'],
    'Avaliação às 36 semanas de IPM, independentemente da duração prévia de O₂. A FiO₂ não reclassifica o grau.': ['Assessed at 36 weeks PMA, regardless of prior O₂ duration. FiO₂ does not reclassify the grade.', 'Evaluación a las 36 semanas de EPM, independientemente de la duración previa de O₂. La FiO₂ no reclasifica el grado.'],
    // Modalidades
    'Ar ambiente (sem suporte respiratório)': ['Room air (no respiratory support)', 'Aire ambiente (sin soporte respiratorio)'],
    'Cânula nasal de baixo fluxo': ['Low-flow nasal cannula', 'Cánula nasal de bajo flujo'],
    'Cânula nasal de alto fluxo': ['High-flow nasal cannula', 'Cánula nasal de alto flujo'],
    'CPAP nasal': ['Nasal CPAP', 'CPAP nasal'],
    'NIPPV (ventilação não invasiva com pressão positiva)': ['NIPPV (noninvasive positive-pressure ventilation)', 'NIPPV (ventilación no invasiva con presión positiva)'],
    'Ventilação mecânica invasiva': ['Invasive mechanical ventilation', 'Ventilación mecánica invasiva'],
    'Não se aplica': ['Not applicable', 'No aplica'],
    'Não se aplica (ar ambiente)': ['Not applicable (room air)', 'No aplica (aire ambiente)'],
    'Não informado': ['Not provided', 'No informado'],
    // Alertas
    'Avaliação fora das 36 semanas de IPM (referência: 36+0 a 36+6): classificação provisória; reavalie às 36 semanas de IPM ou na alta.': ['Assessment not at 36 weeks PMA (reference: 36+0 to 36+6): provisional classification; reassess at 36 weeks PMA or at discharge.', 'Evaluación fuera de las 36 semanas de EPM (referencia: 36+0 a 36+6): clasificación provisional; reevalúe a las 36 semanas de EPM o al alta.'],
    'Avaliação na alta antes de 36 semanas de IPM: aceita pelo NICHD (36 semanas ou alta, o que ocorrer primeiro); Jensen 2019 foi definido às 36 semanas de IPM.': ['Assessment at discharge before 36 weeks PMA: accepted by NICHD (36 weeks or discharge, whichever comes first); Jensen 2019 was defined at 36 weeks PMA.', 'Evaluación al alta antes de las 36 semanas de EPM: aceptada por el NICHD (36 semanas o alta, lo que ocurra primero); Jensen 2019 se definió a las 36 semanas de EPM.'],
    'IG ≥ 32 semanas: o NICHD avalia com > 28 e < 56 dias de idade pós-natal (ou na alta); a data informada está fora dessa janela.': ['GA ≥ 32 weeks: NICHD assesses at > 28 and < 56 days postnatal age (or at discharge); the date entered is outside this window.', 'EG ≥ 32 semanas: el NICHD evalúa con > 28 y < 56 días de edad posnatal (o al alta); la fecha indicada está fuera de esa ventana.'],
    'IG ≥ 32 semanas: Jensen 2019 foi derivado em prematuros < 32 semanas; interprete o grau com cautela.': ['GA ≥ 32 weeks: Jensen 2019 was derived in preterm infants < 32 weeks; interpret the grade with caution.', 'EG ≥ 32 semanas: Jensen 2019 se derivó en prematuros < 32 semanas; interprete el grado con cautela.'],
    'Fora do escopo principal do protocolo (IG < 32 semanas e/ou peso ao nascer < 1.500 g).': ['Outside the main scope of the protocol (GA < 32 weeks and/or birth weight < 1,500 g).', 'Fuera del alcance principal del protocolo (EG < 32 semanas y/o peso al nacer < 1.500 g).'],
    'Fluxo informado incompatível com a modalidade marcada (baixo/alto fluxo); o grau de Jensen segue o fluxo em L/min.': ['The flow entered does not match the selected modality (low/high flow); the Jensen grade follows the flow in L/min.', 'El flujo indicado no concuerda con la modalidad marcada (bajo/alto flujo); el grado de Jensen sigue el flujo en L/min.'],
    'Há necessidade de O₂ na avaliação com menos de 28 dias de O₂ registrados: confira a contagem de dias.': ['There is an O₂ requirement at assessment with fewer than 28 days of O₂ recorded: check the day count.', 'Hay necesidad de O₂ en la evaluación con menos de 28 días de O₂ registrados: verifique el recuento de días.'],
    // Codificação e interpretação
    'CID-10 P27.1 — Displasia broncopulmonar originada no período perinatal': ['ICD-10 P27.1 — Bronchopulmonary dysplasia originating in the perinatal period', 'CIE-10 P27.1 — Displasia broncopulmonar originada en el período perinatal'],
    'O grau de Jensen é uma avaliação clínica/prognóstica, não um código CID adicional.': ['The Jensen grade is a clinical/prognostic assessment, not an additional ICD code.', 'El grado de Jensen es una evaluación clínica/pronóstica, no un código CIE adicional.'],
    'A classificação às 36 semanas é útil para prognóstico e auditoria, mas não substitui a avaliação clínica longitudinal.': ['The 36-week classification is useful for prognosis and audit, but it does not replace longitudinal clinical assessment.', 'La clasificación a las 36 semanas es útil para el pronóstico y la auditoría, pero no sustituye la evaluación clínica longitudinal.'],
    'Um lactente pode ter necessidade modesta de O₂ e ainda assim ter doença vascular pulmonar relevante, dificuldade alimentar ou crescimento insuficiente.': ['An infant may have a modest O₂ requirement and still have significant pulmonary vascular disease, feeding difficulties or poor growth.', 'Un lactante puede tener una necesidad modesta de O₂ y aun así presentar enfermedad vascular pulmonar relevante, dificultad para alimentarse o crecimiento insuficiente.'],
    'Não use a FiO₂ isoladamente para reclassificar os graus de Jensen; documente dispositivos e fluxos.': ['Do not use FiO₂ alone to reclassify Jensen grades; document devices and flows.', 'No use la FiO₂ de forma aislada para reclasificar los grados de Jensen; documente dispositivos y flujos.'],
    'Registre modalidade, fluxo, pressão, FiO₂, gasometria quando indicada e ecocardiograma.': ['Record modality, flow, pressure, FiO₂, blood gas when indicated and echocardiogram.', 'Registre modalidad, flujo, presión, FiO₂, gasometría cuando esté indicada y ecocardiograma.'],
    // Rótulos de campos (tela e relatório)
    'Nome': ['Name', 'Nombre'],
    'Data de nascimento': ['Date of birth', 'Fecha de nacimiento'],
    'Idade gestacional ao nascer': ['Gestational age at birth', 'Edad gestacional al nacer'],
    'Peso ao nascer': ['Birth weight', 'Peso al nacer'],
    'Data da avaliação': ['Assessment date', 'Fecha de la evaluación'],
    'Avaliação na alta hospitalar': ['Assessment at hospital discharge', 'Evaluación al alta hospitalaria'],
    'Dias com O₂ suplementar': ['Days on supplemental O₂', 'Días con O₂ suplementario'],
    'Idade pós-natal na avaliação': ['Postnatal age at assessment', 'Edad posnatal en la evaluación'],
    'IPM na avaliação': ['PMA at assessment', 'EPM en la evaluación'],
    'Modalidade': ['Modality', 'Modalidad'],
    'Fluxo': ['Flow', 'Flujo'],
    'Pressão': ['Pressure', 'Presión'],
    'Gasometria': ['Blood gas', 'Gasometría'],
    'Ecocardiograma': ['Echocardiogram', 'Ecocardiograma'],
    'Comorbidades': ['Comorbidities', 'Comorbilidades'],
    'Sim': ['Yes', 'Sí'],
    'Não': ['No', 'No'],
    'semanas': ['weeks', 'semanas'],
    'dias': ['days', 'días']
  }));

  i18n.register({
    // Cabeçalho
    'Como usar': ['How to use', 'Cómo usar'],
    'NeoPedCalc — Classificação de DBP (NICHD 2001 e Jensen 2019)': ['NeoPedCalc — BPD classification (NICHD 2001 and Jensen 2019)', 'NeoPedCalc — Clasificación de la DBP (NICHD 2001 y Jensen 2019)'],
    'DBP neonatal — NICHD 2001 e Jensen 2019': ['Neonatal BPD — NICHD 2001 and Jensen 2019', 'DBP neonatal — NICHD 2001 y Jensen 2019'],
    'Classificação da displasia broncopulmonar conforme o Protocolo Clínico de Displasia Broncopulmonar da UTI neonatal (versão para validação institucional, out/2026).': ['Bronchopulmonary dysplasia classification according to the NICU Bronchopulmonary Dysplasia Clinical Protocol (version for institutional validation, Oct/2026).', 'Clasificación de la displasia broncopulmonar según el Protocolo Clínico de Displasia Broncopulmonar de la UCI neonatal (versión para validación institucional, oct/2026).'],
    'Não é diagnóstico médico': ['It is not a medical diagnosis', 'No es un diagnóstico médico'],
    '— confirme com a evolução clínica e a equipe assistente.': ['— confirm with the clinical course and the care team.', '— confírmelo con la evolución clínica y el equipo tratante.'],
    // Formulário
    'Nome do Paciente:': ['Patient Name:', 'Nombre del paciente:'],
    'Ex: João Silva': ['E.g.: John Smith', 'Ej.: Juan Pérez'],
    'Data de Nascimento:': ['Date of Birth:', 'Fecha de nacimiento:'],
    'Data da avaliação:': ['Assessment date:', 'Fecha de la evaluación:'],
    'IG ao nascer — semanas:': ['GA at birth — weeks:', 'EG al nacer — semanas:'],
    'IG ao nascer — dias (0 a 6):': ['GA at birth — days (0 to 6):', 'EG al nacer — días (0 a 6):'],
    'Ex: 27': ['E.g.: 27', 'Ej.: 27'],
    'Ex: 3': ['E.g.: 3', 'Ej.: 3'],
    'Ex: 950': ['E.g.: 950', 'Ej.: 950'],
    'Ex: 40': ['E.g.: 40', 'Ej.: 40'],
    'Ex: 1': ['E.g.: 1', 'Ej.: 1'],
    'Ex: 6': ['E.g.: 6', 'Ej.: 6'],
    'Ex: 25 ou 0,25': ['E.g.: 25 or 0.25', 'Ej.: 25 o 0,25'],
    'Peso ao nascer (g, opcional):': ['Birth weight (g, optional):', 'Peso al nacer (g, opcional):'],
    'Total de dias com O₂ suplementar:': ['Total days on supplemental O₂:', 'Total de días con O₂ suplementario:'],
    'Suporte respiratório às 36 semanas de IPM (ou na alta)': ['Respiratory support at 36 weeks PMA (or at discharge)', 'Soporte respiratorio a las 36 semanas de EPM (o al alta)'],
    'Avaliação na alta hospitalar (antes de 36 semanas de IPM)': ['Assessment at hospital discharge (before 36 weeks PMA)', 'Evaluación al alta hospitalaria (antes de las 36 semanas de EPM)'],
    'Modalidade na avaliação:': ['Modality at assessment:', 'Modalidad en la evaluación:'],
    'Fluxo da cânula nasal (L/min):': ['Nasal cannula flow (L/min):', 'Flujo de la cánula nasal (L/min):'],
    'FiO₂ (% ou fração):': ['FiO₂ (% or fraction):', 'FiO₂ (% o fracción):'],
    'Fluxo e FiO₂ são obrigatórios na cânula nasal; na cânula de baixo fluxo, informe a FiO₂ efetiva. Nos suportes com pressão positiva, a FiO₂ é opcional (apenas registro).': ['Flow and FiO₂ are required for nasal cannula; for low-flow cannula, enter the effective FiO₂. For positive-pressure support, FiO₂ is optional (record only).', 'El flujo y la FiO₂ son obligatorios en la cánula nasal; en la cánula de bajo flujo, indique la FiO₂ efectiva. En los soportes con presión positiva, la FiO₂ es opcional (solo registro).'],
    'Registro complementar (opcional)': ['Additional record (optional)', 'Registro complementario (opcional)'],
    'Pressão (cmH₂O — CPAP/PEEP/PIP):': ['Pressure (cmH₂O — CPAP/PEEP/PIP):', 'Presión (cmH₂O — CPAP/PEEP/PIP):'],
    'Gasometria (quando indicada):': ['Blood gas (when indicated):', 'Gasometría (cuando esté indicada):'],
    'Ex: pH 7,35 / pCO₂ 55': ['E.g.: pH 7.35 / pCO₂ 55', 'Ej.: pH 7,35 / pCO₂ 55'],
    'Ecocardiograma:': ['Echocardiogram:', 'Ecocardiograma:'],
    'Ex: sem sinais de hipertensão pulmonar': ['E.g.: no signs of pulmonary hypertension', 'Ej.: sin signos de hipertensión pulmonar'],
    'Comorbidades:': ['Comorbidities:', 'Comorbilidades:'],
    'Ex: PCA, ROP, dificuldade alimentar': ['E.g.: PDA, ROP, feeding difficulty', 'Ej.: PCA, ROP, dificultad para alimentarse'],
    'Classificar DBP': ['Classify BPD', 'Clasificar DBP'],
    // Validação
    'Informe a data de nascimento e a data da avaliação.': ['Enter the date of birth and the assessment date.', 'Indique la fecha de nacimiento y la fecha de la evaluación.'],
    'A data da avaliação não pode ser anterior à data de nascimento.': ['The assessment date cannot be earlier than the date of birth.', 'La fecha de la evaluación no puede ser anterior a la fecha de nacimiento.'],
    'Informe a idade gestacional ao nascer (22 a 42 semanas; dias de 0 a 6).': ['Enter the gestational age at birth (22 to 42 weeks; days 0 to 6).', 'Indique la edad gestacional al nacer (22 a 42 semanas; días de 0 a 6).'],
    'Peso ao nascer fora da faixa (300 a 6.000 g).': ['Birth weight out of range (300 to 6,000 g).', 'Peso al nacer fuera de rango (300 a 6.000 g).'],
    'Informe o total de dias com O₂ suplementar (número inteiro ≥ 0).': ['Enter the total days on supplemental O₂ (whole number ≥ 0).', 'Indique el total de días con O₂ suplementario (número entero ≥ 0).'],
    'Os dias com O₂ suplementar não podem exceder a idade pós-natal na avaliação.': ['Days on supplemental O₂ cannot exceed the postnatal age at assessment.', 'Los días con O₂ suplementario no pueden superar la edad posnatal en la evaluación.'],
    'Selecione o suporte respiratório na avaliação.': ['Select the respiratory support at assessment.', 'Seleccione el soporte respiratorio en la evaluación.'],
    'Informe o fluxo da cânula nasal em L/min (maior que 0 e até 15).': ['Enter the nasal cannula flow in L/min (greater than 0 and up to 15).', 'Indique el flujo de la cánula nasal en L/min (mayor que 0 y hasta 15).'],
    'Informe a FiO₂ da cânula nasal (21 a 100% ou 0,21 a 1,0).': ['Enter the nasal cannula FiO₂ (21 to 100% or 0.21 to 1.0).', 'Indique la FiO₂ de la cánula nasal (21 a 100% o 0,21 a 1,0).'],
    'FiO₂ fora da faixa (21 a 100% ou 0,21 a 1,0).': ['FiO₂ out of range (21 to 100% or 0.21 to 1.0).', 'FiO₂ fuera de rango (21 a 100% o 0,21 a 1,0).'],
    'Pressão fora da faixa (1 a 50 cmH₂O).': ['Pressure out of range (1 to 50 cmH₂O).', 'Presión fuera de rango (1 a 50 cmH₂O).'],
    // Resultados
    'semanas + dias': ['weeks + days', 'semanas + días'],
    'Idade pós-natal': ['Postnatal age', 'Edad posnatal'],
    'Suporte registrado na avaliação': ['Support recorded at assessment', 'Soporte registrado en la evaluación'],
    'NICHD 2001 (Jobe & Bancalari)': ['NICHD 2001 (Jobe & Bancalari)', 'NICHD 2001 (Jobe & Bancalari)'],
    'Comparabilidade histórica': ['Historical comparability', 'Comparabilidad histórica'],
    'Prognóstico': ['Prognosis', 'Pronóstico'],
    'Alertas': ['Alerts', 'Alertas'],
    'IPM calculada:': ['Calculated PMA:', 'EPM calculada:'],
    'Codificação': ['Coding', 'Codificación'],
    'Interpretação': ['Interpretation', 'Interpretación'],
    'Copiar texto informativo': ['Copy informational text', 'Copiar texto informativo'],
    'Texto copiado. Revise integralmente antes de qualquer uso em documentação clínica ou compartilhamento.': ['Text copied. Review it in full before any use in clinical documentation or sharing.', 'Texto copiado. Revíselo íntegramente antes de cualquier uso en documentación clínica o al compartirlo.'],
    'Não foi possível copiar o texto automaticamente.': ['The text could not be copied automatically.', 'No fue posible copiar el texto automáticamente.'],
    // Quadros informativos
    'Escopo:': ['Scope:', 'Alcance:'],
    'prematuros com IG < 32 semanas e/ou peso ao nascer < 1.500 g. Avalie o suporte às 36 semanas de idade pós-menstrual (IPM) ou na alta, quando pertinente, registrando separadamente oxigênio, fluxo, pressão positiva, ventilação invasiva e comorbidades.': ['preterm infants with GA < 32 weeks and/or birth weight < 1,500 g. Assess support at 36 weeks postmenstrual age (PMA) or at discharge when pertinent, recording oxygen, flow, positive pressure, invasive ventilation and comorbidities separately.', 'prematuros con EG < 32 semanas y/o peso al nacer < 1.500 g. Evalúe el soporte a las 36 semanas de edad posmenstrual (EPM) o al alta, cuando corresponda, registrando por separado oxígeno, flujo, presión positiva, ventilación invasiva y comorbilidades.'],
    'Atenção:': ['Caution:', 'Atención:'],
    'as duas classificações são mostradas lado a lado: NICHD 2001 para comparabilidade histórica e Jensen 2019 para prognóstico. Elas não substituem a avaliação clínica longitudinal.': ['both classifications are shown side by side: NICHD 2001 for historical comparability and Jensen 2019 for prognosis. They do not replace longitudinal clinical assessment.', 'las dos clasificaciones se muestran lado a lado: NICHD 2001 para la comparabilidad histórica y Jensen 2019 para el pronóstico. No sustituyen la evaluación clínica longitudinal.'],
    // Modal
    'Como usar — DBP neonatal': ['How to use — Neonatal BPD', 'Cómo usar — DBP neonatal'],
    'Objetivo': ['Purpose', 'Objetivo'],
    'Aplicar o Protocolo Clínico de Displasia Broncopulmonar da UTI neonatal (versão para validação institucional, out/2026): avaliar o suporte respiratório às 36 semanas de idade pós-menstrual (IPM), ou na alta quando pertinente, e mostrar duas classificações lado a lado. Aplica-se principalmente a prematuros com IG < 32 semanas e/ou peso ao nascer < 1.500 g.': ['Apply the NICU Bronchopulmonary Dysplasia Clinical Protocol (version for institutional validation, Oct/2026): assess respiratory support at 36 weeks postmenstrual age (PMA), or at discharge when pertinent, and show two classifications side by side. It applies mainly to preterm infants with GA < 32 weeks and/or birth weight < 1,500 g.', 'Aplicar el Protocolo Clínico de Displasia Broncopulmonar de la UCI neonatal (versión para validación institucional, oct/2026): evaluar el soporte respiratorio a las 36 semanas de edad posmenstrual (EPM), o al alta cuando corresponda, y mostrar dos clasificaciones lado a lado. Se aplica principalmente a prematuros con EG < 32 semanas y/o peso al nacer < 1.500 g.'],
    'NICHD 2001 (Jobe & Bancalari) — comparabilidade histórica': ['NICHD 2001 (Jobe & Bancalari) — historical comparability', 'NICHD 2001 (Jobe & Bancalari) — comparabilidad histórica'],
    'Exige O₂ suplementar por ≥ 28 dias. Com O₂ por menos de 28 dias, não há DBP pelo NICHD.': ['Requires supplemental O₂ for ≥ 28 days. With O₂ for less than 28 days, there is no BPD by NICHD.', 'Exige O₂ suplementario durante ≥ 28 días. Con O₂ durante menos de 28 días, no hay DBP según el NICHD.'],
    'Necessidade na avaliação': ['Requirement at assessment', 'Necesidad en la evaluación'],
    'Classificação NICHD': ['NICHD classification', 'Clasificación NICHD'],
    'Ar ambiente': ['Room air', 'Aire ambiente'],
    'O₂ < 30%': ['O₂ < 30%', 'O₂ < 30%'],
    'O₂ ≥ 30% e/ou pressão positiva (CPAP/NIPPV ou ventilação mecânica)': ['O₂ ≥ 30% and/or positive pressure (CPAP/NIPPV or mechanical ventilation)', 'O₂ ≥ 30% y/o presión positiva (CPAP/NIPPV o ventilación mecánica)'],
    'Momento da avaliação: IG < 32 semanas — 36 semanas de IPM ou alta, o que ocorrer primeiro; IG ≥ 32 semanas — > 28 e < 56 dias de idade pós-natal ou alta, o que ocorrer primeiro.': ['Timing of assessment: GA < 32 weeks — 36 weeks PMA or discharge, whichever comes first; GA ≥ 32 weeks — > 28 and < 56 days postnatal age or discharge, whichever comes first.', 'Momento de la evaluación: EG < 32 semanas — 36 semanas de EPM o alta, lo que ocurra primero; EG ≥ 32 semanas — > 28 y < 56 días de edad posnatal o alta, lo que ocurra primero.'],
    'Jensen 2019 — prognóstico': ['Jensen 2019 — prognosis', 'Jensen 2019 — pronóstico'],
    'Avaliação às 36 semanas de IPM, independentemente da duração prévia de O₂.': ['Assessed at 36 weeks PMA, regardless of prior O₂ duration.', 'Evaluación a las 36 semanas de EPM, independientemente de la duración previa de O₂.'],
    'Suporte às 36 semanas de IPM': ['Support at 36 weeks PMA', 'Soporte a las 36 semanas de EPM'],
    'Grau de Jensen': ['Jensen grade', 'Grado de Jensen'],
    'Sem suporte respiratório': ['No respiratory support', 'Sin soporte respiratorio'],
    'Cânula nasal ≤ 2 L/min': ['Nasal cannula ≤ 2 L/min', 'Cánula nasal ≤ 2 L/min'],
    'Cânula nasal > 2 L/min ou pressão positiva não invasiva (CPAP, NIPPV)': ['Nasal cannula > 2 L/min or noninvasive positive pressure (CPAP, NIPPV)', 'Cánula nasal > 2 L/min o presión positiva no invasiva (CPAP, NIPPV)'],
    'Regras do protocolo': ['Protocol rules', 'Reglas del protocolo'],
    'CID-10 P27.1 — Displasia broncopulmonar originada no período perinatal. O grau de Jensen é uma avaliação clínica/prognóstica, não um código CID adicional.': ['ICD-10 P27.1 — Bronchopulmonary dysplasia originating in the perinatal period. The Jensen grade is a clinical/prognostic assessment, not an additional ICD code.', 'CIE-10 P27.1 — Displasia broncopulmonar originada en el período perinatal. El grado de Jensen es una evaluación clínica/pronóstica, no un código CIE adicional.'],
    'Passos na tela': ['On-screen steps', 'Pasos en la pantalla'],
    'Informe data de nascimento, data da avaliação, IG ao nascer (semanas + dias), peso ao nascer (opcional) e o total de dias com O₂ suplementar.': ['Enter the date of birth, assessment date, GA at birth (weeks + days), birth weight (optional) and total days on supplemental O₂.', 'Indique la fecha de nacimiento, la fecha de la evaluación, la EG al nacer (semanas + días), el peso al nacer (opcional) y el total de días con O₂ suplementario.'],
    'Marque a modalidade de suporte na avaliação; para cânula nasal, informe o fluxo (L/min) e a FiO₂.': ['Select the support modality at assessment; for nasal cannula, enter the flow (L/min) and FiO₂.', 'Marque la modalidad de soporte en la evaluación; para cánula nasal, indique el flujo (L/min) y la FiO₂.'],
    'Clique em': ['Click', 'Haga clic en'],
    ': o app calcula a IPM e a idade pós-natal e avisa se a avaliação não está às 36 semanas de IPM ou se o paciente está fora do escopo principal.': [': the app calculates PMA and postnatal age and warns if the assessment is not at 36 weeks PMA or if the patient is outside the main scope.', ': la app calcula la EPM y la edad posnatal y avisa si la evaluación no está a las 36 semanas de EPM o si el paciente está fuera del alcance principal.'],
    'o app calcula a IPM e a idade pós-natal e avisa se a avaliação não está às 36 semanas de IPM ou se o paciente está fora do escopo principal.': ['the app calculates PMA and postnatal age and warns if the assessment is not at 36 weeks PMA or if the patient is outside the main scope.', 'la app calcula la EPM y la edad posnatal y avisa si la evaluación no está a las 36 semanas de EPM o si el paciente está fuera del alcance principal.'],
    'gera um bloco para colar — revise antes de arquivar.': ['generates a block to paste — review it before filing.', 'genera un bloque para pegar — revíselo antes de archivar.'],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Na cânula nasal, a classificação NICHD usa a FiO₂ informada (para baixo fluxo, a FiO₂ efetiva); o teste de redução de O₂ não é reproduzido aqui.': ['For nasal cannula, the NICHD classification uses the FiO₂ entered (for low flow, the effective FiO₂); the O₂ reduction test is not reproduced here.', 'En la cánula nasal, la clasificación NICHD usa la FiO₂ indicada (para bajo flujo, la FiO₂ efectiva); la prueba de reducción de O₂ no se reproduce aquí.'],
    'Eventos agudos ou suporte por causa não pulmonar podem distorcer a classificação.': ['Acute events or support for non-pulmonary causes may distort the classification.', 'Los eventos agudos o el soporte por causas no pulmonares pueden distorsionar la clasificación.'],
    'Referências:': ['References:', 'Referencias:'],
    // Relatório copiado (cabeçalhos e linhas fixas, sem acentos)
    'RESUMO INFORMATIVO — Classificacao de DBP (NeoPedCalc, protocolo institucional)': ['INFORMATIONAL SUMMARY — BPD classification (NeoPedCalc, institutional protocol)', 'RESUMEN INFORMATIVO — Clasificación de la DBP (NeoPedCalc, protocolo institucional)'],
    'NOTA: Texto gerado por calculadora; nao constitui diagnostico formal nem prescricao. Revise com exame, imagem e criterios institucionais.': ['NOTE: Calculator-generated text; it is not a formal diagnosis or prescription. Review it against the examination, imaging and institutional criteria.', 'NOTA: Texto generado por calculadora; no constituye diagnóstico formal ni prescripción. Revíselo con la exploración, la imagen y los criterios institucionales.'],
    'DADOS INFORMADOS:': ['DATA ENTERED:', 'DATOS INFORMADOS:'],
    'Nao informado': ['Not provided', 'No informado'],
    'Nao': ['No', 'No'],
    'CALCULOS NO APP:': ['APP CALCULATIONS:', 'CÁLCULOS EN LA APP:'],
    'SUPORTE NA AVALIACAO:': ['SUPPORT AT ASSESSMENT:', 'SOPORTE EN LA EVALUACIÓN:'],
    'CLASSIFICACAO NICHD 2001 (Jobe & Bancalari) — comparabilidade historica:': ['NICHD 2001 CLASSIFICATION (Jobe & Bancalari) — historical comparability:', 'CLASIFICACIÓN NICHD 2001 (Jobe & Bancalari) — comparabilidad histórica:'],
    'CLASSIFICACAO JENSEN 2019 — prognostico:': ['JENSEN 2019 CLASSIFICATION — prognosis:', 'CLASIFICACIÓN JENSEN 2019 — pronóstico:'],
    'CODIFICACAO:': ['CODING:', 'CODIFICACIÓN:'],
    'ALERTAS:': ['ALERTS:', 'ALERTAS:'],
    '- Nenhum alerta.': ['- No alerts.', '- Ninguna alerta.'],
    'INTERPRETACAO (protocolo institucional):': ['INTERPRETATION (institutional protocol):', 'INTERPRETACIÓN (protocolo institucional):'],
    'REFERENCIAS:': ['REFERENCES:', 'REFERENCIAS:'],
    'NOTA EDUCATIVA: Revise todos os valores. A NeoPedCalc nao substitui julgamento clinico nem protocolos institucionais.': ['EDUCATIONAL NOTE: Review all values. NeoPedCalc does not replace clinical judgment or institutional protocols.', 'NOTA EDUCATIVA: Revise todos los valores. NeoPedCalc no sustituye el juicio clínico ni los protocolos institucionales.']
  });

  // Números com vírgula decimal: em inglês viram ponto (o app formata fluxo, FiO₂ e pressão com vírgula).
  i18n.registerPatterns([
    [/^(\d+),(\d+) L\/min$/, '$1.$2 L/min', '$1,$2 L/min'],
    [/^- Fluxo: (\d+),(\d+) L\/min$/, '- Flow: $1.$2 L/min', '- Flujo: $1,$2 L/min'],
    [/^- FiO₂: (\d+),(\d+)%$/, '- FiO₂: $1.$2%', '- FiO₂: $1,$2%'],
    [/^- Pressao: (\d+),(\d+) cmH₂O$/, '- Pressure: $1.$2 cmH₂O', '- Presión: $1,$2 cmH₂O']
  ]);
  i18n.markPageTranslated();
})(window.NEOPED_I18N);
