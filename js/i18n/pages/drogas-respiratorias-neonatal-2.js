/* Drogas respiratórias neonatais (files/drogas_respiratorias_neonatal.html) — [inglês, espanhol].
   Parte 2: nomes das drogas, observações padrão, informações específicas e texto copiado. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  /** Mesmo tratamento que a página aplica (removerAcentos) antes de copiar o texto. */
  function semAcento(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  var entries = {
    // Texto copiado (sem acentos, como a página gera)
    'RELATORIO DE DROGAS RESPIRATORIAS NEONATAIS': ['NEONATAL RESPIRATORY DRUGS REPORT', 'INFORME DE FÁRMACOS RESPIRATORIOS NEONATALES'],
    'DADOS DO PACIENTE': ['PATIENT DATA', 'DATOS DEL PACIENTE'],
    'Data/Hora': ['Date/Time', 'Fecha/Hora'],
    'Nome': ['Name', 'Nombre'],
    'Paciente': ['Patient', 'Paciente'],
    'Data de Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Idade Cronologica': ['Chronological Age', 'Edad cronológica'],
    'Idade Gestacional ao Nascer': ['Gestational Age at Birth', 'Edad gestacional al nacer'],
    'Idade Gestacional Corrigida': ['Corrected Gestational Age', 'Edad gestacional corregida'],
    'DROGA': ['DRUG', 'FÁRMACO'],
    'CALCULO': ['CALCULATION', 'CÁLCULO'],
    'Dosagem': ['Dosage', 'Dosificación'],
    'Dose por Aplicacao': ['Dose per Administration', 'Dosis por administración'],
    'Dose Total (24h)': ['Total Dose (24h)', 'Dosis total (24h)'],
    'Volume da Droga': ['Drug Volume', 'Volumen del fármaco'],
    'Apresentacao': ['Formulation', 'Presentación'],
    'Velocidade de Infusao': ['Infusion Rate', 'Velocidad de infusión'],
    'Observacoes': ['Notes', 'Observaciones'],
    'INFORMACOES ESPECIFICAS': ['SPECIFIC INFORMATION', 'INFORMACIÓN ESPECÍFICA'],
    'DETALHES TECNICOS': ['TECHNICAL DETAILS', 'DETALLES TÉCNICOS'],
    'Total de Drogas': ['Total Drugs', 'Total de fármacos'],
    'Total de Calculos': ['Total Calculations', 'Total de cálculos'],
    'Data de Geracao': ['Generated on', 'Fecha de generación'],
    'OBSERVACOES IMPORTANTES': ['IMPORTANT NOTES', 'OBSERVACIONES IMPORTANTES'],
    '- Verificar sempre a apresentacao da droga antes da administracao': ['- Always check the drug formulation before administration', '- Verificar siempre la presentación del fármaco antes de la administración'],
    '- Confirmar calculos com farmaceutico quando necessario': ['- Confirm calculations with a pharmacist when necessary', '- Confirmar los cálculos con el farmacéutico cuando sea necesario'],
    '- Monitorar resposta terapeutica e efeitos adversos': ['- Monitor therapeutic response and adverse effects', '- Monitorizar la respuesta terapéutica y los efectos adversos'],
    '- Ajustar dose conforme resposta clinica': ['- Adjust the dose according to clinical response', '- Ajustar la dosis según la respuesta clínica'],
    '- Atencao especial para neonatos: monitorar funcao hepatica e renal': ['- Special attention for neonates: monitor liver and renal function', '- Atención especial en neonatos: monitorizar la función hepática y renal'],
    '- Verificar limites maximos diarios para cada droga': ['- Check the maximum daily limits for each drug', '- Verificar los límites máximos diarios de cada fármaco'],
    // Nome isolado quando "DROGA 1: Nirsevimabe - < 5kg" é traduzido por trechos.
    'Nirsevimabe': ['Nirsevimab', 'Nirsevimab'],
    'ª Temporada': ['nd Season', '.ª temporada'],

    // Informações específicas por droga (texto copiado, com acentos)
    'AMINOFILINA:': ['AMINOPHYLLINE:', 'AMINOFILINA:'],
    '- Ajustar dose conforme IG corrigida': ['- Adjust the dose according to corrected GA', '- Ajustar la dosis según la EG corregida'],
    '- Monitorar teofilina sérica (nível terapêutico: 5-15 mcg/ml)': ['- Monitor serum theophylline (therapeutic level: 5-15 mcg/ml)', '- Monitorizar teofilina sérica (nivel terapéutico: 5-15 mcg/ml)'],
    '- Efeitos adversos: taquicardia, irritabilidade, convulsões': ['- Adverse effects: tachycardia, irritability, seizures', '- Efectos adversos: taquicardia, irritabilidad, convulsiones'],
    '- Interações: cimetidina, eritromicina, ciprofloxacino': ['- Interactions: cimetidine, erythromycin, ciprofloxacin', '- Interacciones: cimetidina, eritromicina, ciprofloxacino'],
    '- Contraindicações: hipersensibilidade à teofilina': ['- Contraindications: hypersensitivity to theophylline', '- Contraindicaciones: hipersensibilidad a la teofilina'],
    'CAFEÍNA ENTERAL:': ['ENTERAL CAFFEINE:', 'CAFEÍNA ENTERAL:'],
    '- Uso quando aceitando dieta adequadamente': ['- Use when tolerating feeds adequately', '- Uso cuando tolera adecuadamente la dieta'],
    '- Mais barata que apresentação E.V.': ['- Cheaper than the IV formulation', '- Más barata que la presentación E.V.'],
    '- Transição da E.V. quando possível': ['- Transition from IV when possible', '- Transición desde la E.V. cuando sea posible'],
    '- Efeitos adversos: irritabilidade, taquicardia, vômitos': ['- Adverse effects: irritability, tachycardia, vomiting', '- Efectos adversos: irritabilidad, taquicardia, vómitos'],
    '- Monitorar: sinais de toxicidade (convulsões, arritmias)': ['- Monitor: signs of toxicity (seizures, arrhythmias)', '- Monitorizar: signos de toxicidad (convulsiones, arritmias)'],
    'CITRATO DE CAFEÍNA E.V.:': ['CAFFEINE CITRATE IV:', 'CITRATO DE CAFEÍNA E.V.:'],
    '- Para prematuros em jejum': ['- For preterm infants who are NPO', '- Para prematuros en ayuno'],
    '- Permite prescrição precoce': ['- Allows early prescribing', '- Permite la prescripción precoz'],
    '- Descontar dose de ataque na manutenção': ['- Account for the loading dose in the maintenance', '- Descontar la dosis de carga en el mantenimiento'],
    'DEXAMETASONA - PROTOCOLO DART (DBP) - ELIXIR:': ['DEXAMETHASONE - DART PROTOCOL (BPD) - ELIXIR:', 'DEXAMETASONA - PROTOCOLO DART (DBP) - ELIXIR:'],
    'DEXAMETASONA - PROTOCOLO DART (DBP) - E.V.:': ['DEXAMETHASONE - DART PROTOCOL (BPD) - IV:', 'DEXAMETASONA - PROTOCOLO DART (DBP) - E.V.:'],
    '- Dose inicial: 0.15 mg/kg/dia por 3 dias': ['- Initial dose: 0.15 mg/kg/day for 3 days', '- Dosis inicial: 0.15 mg/kg/día por 3 días'],
    '- Dose intermediária: 0.1 mg/kg/dia por 3 dias': ['- Intermediate dose: 0.1 mg/kg/day for 3 days', '- Dosis intermedia: 0.1 mg/kg/día por 3 días'],
    '- Dose final: 0.05 mg/kg/dia por 4 dias': ['- Final dose: 0.05 mg/kg/day for 4 days', '- Dosis final: 0.05 mg/kg/día por 4 días'],
    '- Total: 10 dias de tratamento': ['- Total: 10 days of treatment', '- Total: 10 días de tratamiento'],
    '- Via oral: elixir 0.1mg/ml': ['- Oral route: elixir 0.1mg/ml', '- Vía oral: elixir 0.1mg/ml'],
    '- Usar conta-gotas calibrado': ['- Use a calibrated dropper', '- Usar gotero calibrado'],
    '- Pode misturar com alimentos líquidos': ['- May be mixed with liquid foods', '- Puede mezclarse con alimentos líquidos'],
    '- Monitorar: hipertensão, hiperglicemia, infecções': ['- Monitor: hypertension, hyperglycemia, infections', '- Monitorizar: hipertensión, hiperglucemia, infecciones'],
    '- Reservado para DBP moderada a grave': ['- Reserved for moderate to severe BPD', '- Reservado para DBP moderada a grave'],
    '- Considerar riscos vs benefícios': ['- Weigh risks vs benefits', '- Considerar riesgos frente a beneficios'],
    '- Efeitos adversos: hiperglicemia, hipertensão, infecções, alterações neurológicas': ['- Adverse effects: hyperglycemia, hypertension, infections, neurologic changes', '- Efectos adversos: hiperglucemia, hipertensión, infecciones, alteraciones neurológicas'],
    '- Via endovenosa': ['- Intravenous route', '- Vía endovenosa'],
    'DEXAMETASONA - ELIXIR:': ['DEXAMETHASONE - ELIXIR:', 'DEXAMETASONA - ELIXIR:'],
    'DEXAMETASONA:': ['DEXAMETHASONE:', 'DEXAMETASONA:'],
    '- Reposição fisiológica: 0.022-0.045 mg/kg/dia': ['- Physiologic replacement: 0.022-0.045 mg/kg/day', '- Reposición fisiológica: 0.022-0.045 mg/kg/día'],
    '- Dose stress: 0.07-0.15 mg/kg/dia': ['- Stress dose: 0.07-0.15 mg/kg/day', '- Dosis de estrés: 0.07-0.15 mg/kg/día'],
    '- Dividir em 2-3 doses diárias': ['- Divide into 2-3 daily doses', '- Dividir en 2-3 dosis diarias'],
    '- Efeitos adversos: hiperglicemia, hipertensão, supressão adrenal': ['- Adverse effects: hyperglycemia, hypertension, adrenal suppression', '- Efectos adversos: hiperglucemia, hipertensión, supresión suprarrenal'],
    '- Monitorar: glicemia, pressão arterial, sinais de infecção': ['- Monitor: blood glucose, blood pressure, signs of infection', '- Monitorizar: glucemia, presión arterial, signos de infección'],
    '- Via oral, dividir em 2-3 doses': ['- Oral route, divide into 2-3 doses', '- Vía oral, dividir en 2-3 dosis'],
    'ALBUTEROL:': ['ALBUTEROL:', 'SALBUTAMOL:'],
    '- Nebulização: 0.1-0.5 mg/kg/dose a cada 6-8h': ['- Nebulization: 0.1-0.5 mg/kg/dose every 6-8h', '- Nebulización: 0.1-0.5 mg/kg/dosis cada 6-8h'],
    '- Diluir com SF até 3ml': ['- Dilute with NS to 3ml', '- Diluir con SF hasta 3ml'],
    '- Monitorar frequência cardíaca': ['- Monitor heart rate', '- Monitorizar la frecuencia cardíaca'],
    '- Efeitos adversos: taquicardia, tremores, hipocalemia': ['- Adverse effects: tachycardia, tremors, hypokalemia', '- Efectos adversos: taquicardia, temblores, hipopotasemia'],
    '- Contraindicações: hipersensibilidade, arritmias cardíacas': ['- Contraindications: hypersensitivity, cardiac arrhythmias', '- Contraindicaciones: hipersensibilidad, arritmias cardíacas'],
    'SURVANTA (BERACTANTO):': ['SURVANTA (BERACTANT):', 'SURVANTA (BERACTANT):'],
    '- Surfactante bovino': ['- Bovine surfactant', '- Surfactante bovino'],
    '- Usar antes de 48h de vida': ['- Use before 48h of life', '- Usar antes de las 48h de vida'],
    '- 100 mg/kg/dose (4 ml/kg)': ['- 100 mg/kg/dose (4 ml/kg)', '- 100 mg/kg/dosis (4 ml/kg)'],
    '- Pode ser repetida até 4 doses com intervalo de 6h': ['- May be repeated up to 4 doses at 6h intervals', '- Puede repetirse hasta 4 dosis con intervalo de 6h'],
    '- Administrar via endotraqueal': ['- Administer endotracheally', '- Administrar por vía endotraqueal'],
    '- Efeitos adversos: bradicardia, hipotensão, hemorragia pulmonar': ['- Adverse effects: bradycardia, hypotension, pulmonary hemorrhage', '- Efectos adversos: bradicardia, hipotensión, hemorragia pulmonar'],
    'CUROSURF (PORACTANTO ALFA):': ['CUROSURF (PORACTANT ALFA):', 'CUROSURF (PORACTANT ALFA):'],
    '- Surfactante porcino': ['- Porcine surfactant', '- Surfactante porcino'],
    '- Usar dose inicial dividida em 2 alíquotas': ['- Give the initial dose divided into 2 aliquots', '- Administrar la dosis inicial dividida en 2 alícuotas'],
    '- 200 mg/kg/dose (2.5 ml/kg)': ['- 200 mg/kg/dose (2.5 ml/kg)', '- 200 mg/kg/dosis (2.5 ml/kg)'],
    '- Pode ser repetido 2 doses de 100 mg/kg com intervalo de 12h': ['- May be repeated as 2 doses of 100 mg/kg at 12h intervals', '- Puede repetirse 2 dosis de 100 mg/kg con intervalo de 12h'],
    'INFASURF (CALFACTANTO):': ['INFASURF (CALFACTANT):', 'INFASURF (CALFACTANT):'],
    '- 135 mg/kg/dose (7.5 ml/kg)': ['- 135 mg/kg/dose (7.5 ml/kg)', '- 135 mg/kg/dosis (7.5 ml/kg)'],
    '- Pode ser repetido até 3 doses com intervalo de 12h': ['- May be repeated up to 3 doses at 12h intervals', '- Puede repetirse hasta 3 dosis con intervalo de 12h'],
    'EXOSURF (COLFOSCERIL PALMITATO):': ['EXOSURF (COLFOSCERIL PALMITATE):', 'EXOSURF (PALMITATO DE COLFOSCERILO):'],
    '- Surfactante sintético': ['- Synthetic surfactant', '- Surfactante sintético'],
    '- Usar em neonatos < 29 sem': ['- Use in neonates < 29 wk', '- Usar en neonatos < 29 sem'],
    '- 67.5 mg/kg/dose (5 ml/kg)': ['- 67.5 mg/kg/dose (5 ml/kg)', '- 67.5 mg/kg/dosis (5 ml/kg)'],
    '- Pode ser repetido até 2 doses com intervalo de 12h': ['- May be repeated up to 2 doses at 12h intervals', '- Puede repetirse hasta 2 dosis con intervalo de 12h'],
    'IPRATRÓPIO:': ['IPRATROPIUM:', 'IPRATROPIO:'],
    '- Dose independente do peso: 36-72 mcg/inalação': ['- Weight-independent dose: 36-72 mcg/inhalation', '- Dosis independiente del peso: 36-72 mcg/inhalación'],
    '- Pode ser combinado com albuterol': ['- May be combined with albuterol', '- Puede combinarse con salbutamol'],
    '- Efeitos adversos: boca seca, taquicardia, tremores': ['- Adverse effects: dry mouth, tachycardia, tremors', '- Efectos adversos: boca seca, taquicardia, temblores'],
    '- Contraindicações: hipersensibilidade à atropina': ['- Contraindications: hypersensitivity to atropine', '- Contraindicaciones: hipersensibilidad a la atropina'],
    'PALIVIZUMAB (SYNAGIS):': ['PALIVIZUMAB (SYNAGIS):', 'PALIVIZUMAB (SYNAGIS):'],
    '- Dose mensal durante temporada epidêmica de VRS': ['- Monthly dose during the RSV epidemic season', '- Dosis mensual durante la temporada epidémica de VSR'],
    '- 15 mg/kg/dose': ['- 15 mg/kg/dose', '- 15 mg/kg/dosis'],
    '- Administrar I.M. durante temporada VSR (maio-setembro)': ['- Administer IM during the RSV season (May-September)', '- Administrar I.M. durante la temporada de VSR (mayo-septiembre)'],
    '- Máximo 5 doses por temporada': ['- Maximum 5 doses per season', '- Máximo 5 dosis por temporada'],
    '- Efeitos adversos: reações locais, febre, irritabilidade': ['- Adverse effects: local reactions, fever, irritability', '- Efectos adversos: reacciones locales, fiebre, irritabilidad'],
    '- Contraindicações: hipersensibilidade grave': ['- Contraindications: severe hypersensitivity', '- Contraindicaciones: hipersensibilidad grave'],
    'NIRSEVIMABE (BEYFORTUS):': ['NIRSEVIMAB (BEYFORTUS):', 'NIRSEVIMAB (BEYFORTUS):'],
    '- Prevenção VSR, dose única I.M.': ['- RSV prevention, single IM dose', '- Prevención de VSR, dosis única I.M.'],
    '- Primeira temporada VSR: Dose única por temporada (não mensal)': ['- First RSV season: Single dose per season (not monthly)', '- Primera temporada de VSR: Dosis única por temporada (no mensual)'],
    '- < 5kg: 50mg I.M. única (Beyfortus 50mg/0.5ml)': ['- < 5kg: 50mg IM single dose (Beyfortus 50mg/0.5ml)', '- < 5kg: 50mg I.M. dosis única (Beyfortus 50mg/0.5ml)'],
    '- ≥ 5kg: 100mg I.M. única (Beyfortus 100mg/1ml)': ['- ≥ 5kg: 100mg IM single dose (Beyfortus 100mg/1ml)', '- ≥ 5kg: 100mg I.M. dosis única (Beyfortus 100mg/1ml)'],
    '- Segunda temporada: 200mg I.M. (2 injeções de 100mg) para crianças até 24 meses com risco aumentado': ['- Second season: 200mg IM (2 injections of 100mg) for children up to 24 months at increased risk', '- Segunda temporada: 200mg I.M. (2 inyecciones de 100mg) para niños de hasta 24 meses con riesgo aumentado'],
    '- Intervalo: 30 dias entre temporadas (não entre doses)': ['- Interval: 30 days between seasons (not between doses)', '- Intervalo: 30 días entre temporadas (no entre dosis)'],
    '- Administração: Face anterolateral da coxa (I.M.)': ['- Administration: Anterolateral thigh (IM)', '- Administración: Cara anterolateral del muslo (I.M.)'],
    '- Vantagem: Dose única por temporada vs Palivizumab (dose mensal)': ['- Advantage: Single dose per season vs Palivizumab (monthly dose)', '- Ventaja: Dosis única por temporada frente a palivizumab (dosis mensual)']
  };

  // Nomes das drogas: lista, resultado e "DROGA n: ..." no texto copiado (sem acentos).
  [
    ['Aminofilina - Ataque', 'Aminophylline - Loading', 'Aminofilina - Carga'],
    ['Aminofilina - Manutenção', 'Aminophylline - Maintenance', 'Aminofilina - Mantenimiento'],
    ['Cafeína (Enteral) - Ataque', 'Caffeine (Enteral) - Loading', 'Cafeína (enteral) - Carga'],
    ['Cafeína (Enteral) - Manutenção', 'Caffeine (Enteral) - Maintenance', 'Cafeína (enteral) - Mantenimiento'],
    ['Citrato de Cafeína (E.V.) - Ataque', 'Caffeine Citrate (IV) - Loading', 'Citrato de cafeína (E.V.) - Carga'],
    ['Citrato de Cafeína (E.V.) - Manutenção', 'Caffeine Citrate (IV) - Maintenance', 'Citrato de cafeína (E.V.) - Mantenimiento'],
    ['Albuterol - Nebulização', 'Albuterol - Nebulization', 'Salbutamol - Nebulización'],
    ['Dexametasona - Reposição (Elixir)', 'Dexamethasone - Replacement (Elixir)', 'Dexametasona - Reposición (elixir)'],
    ['Dexametasona - Stress (Elixir)', 'Dexamethasone - Stress (Elixir)', 'Dexametasona - Estrés (elixir)'],
    ['Dexametasona - DBP DART (Elixir)', 'Dexamethasone - BPD DART (Elixir)', 'Dexametasona - DBP DART (elixir)'],
    ['Dexametasona - DBP DART (E.V.)', 'Dexamethasone - BPD DART (IV)', 'Dexametasona - DBP DART (E.V.)'],
    ['Survanta (Beractanto)', 'Survanta (Beractant)', 'Survanta (beractant)'],
    ['Curosurf (Poractanto alfa)', 'Curosurf (Poractant alfa)', 'Curosurf (poractant alfa)'],
    ['Infasurf (Calfactanto)', 'Infasurf (Calfactant)', 'Infasurf (calfactant)'],
    ['Exosurf (Colfosceril palmitato)', 'Exosurf (Colfosceril palmitate)', 'Exosurf (palmitato de colfoscerilo)'],
    ['Ipratrópio', 'Ipratropium', 'Ipratropio'],
    ['Palivizumab (Synagis)', 'Palivizumab (Synagis)', 'Palivizumab (Synagis)'],
    ['Nirsevimabe - < 5kg', 'Nirsevimab - < 5kg', 'Nirsevimab - < 5kg'],
    ['Nirsevimabe - ≥ 5kg', 'Nirsevimab - ≥ 5kg', 'Nirsevimab - ≥ 5kg'],
    ['Nirsevimabe - 2ª Temporada', 'Nirsevimab - 2nd Season', 'Nirsevimab - 2.ª temporada']
  ].forEach(function (d) {
    entries[d[0]] = [d[1], d[2]];
    entries[semAcento(d[0])] = [d[1], d[2]];
  });

  // Observações padrão: exibidas como "Observações: ..." e copiadas sem acentos ("Observacoes: ...").
  [
    ['Ataque: 5-8 mg/kg em 30 min. Diluir 1ml (25mg) + 4ml SF = 5mg/ml. Infundir em 30 min',
      'Loading: 5-8 mg/kg over 30 min. Dilute 1ml (25mg) + 4ml NS = 5mg/ml. Infuse over 30 min',
      'Carga: 5-8 mg/kg en 30 min. Diluir 1ml (25mg) + 4ml SF = 5mg/ml. Infundir en 30 min'],
    ['Manutenção: 2-4 mg/kg/dose a cada 12h. > 55 sem IPM pode necessitar dose maior. Monitorar teofilina sérica',
      'Maintenance: 2-4 mg/kg/dose every 12h. > 55 wk PMA may require a higher dose. Monitor serum theophylline',
      'Mantenimiento: 2-4 mg/kg/dosis cada 12h. > 55 sem de EPM puede requerir una dosis mayor. Monitorizar teofilina sérica'],
    ['Ataque: 5 mg/kg (Cafeína enteral). Uso quando aceitando dieta adequadamente. Mais barata que EV. Dose única',
      'Loading: 5 mg/kg (enteral caffeine). Use when tolerating feeds adequately. Cheaper than IV. Single dose',
      'Carga: 5 mg/kg (cafeína enteral). Uso cuando tolera adecuadamente la dieta. Más barata que la EV. Dosis única'],
    ['Manutenção: 2.5 mg/kg/dia (Cafeína enteral). Transição da EV quando aceitando dieta. Dividir em 2 doses',
      'Maintenance: 2.5 mg/kg/day (enteral caffeine). Transition from IV when tolerating feeds. Divide into 2 doses',
      'Mantenimiento: 2.5 mg/kg/día (cafeína enteral). Transición desde la EV cuando tolera la dieta. Dividir en 2 dosis'],
    ['Ataque: 10-20 mg/kg (Citrato de Cafeína E.V.). Para prematuros em jejum. Dose única de ataque. Infundir em 30 min',
      'Loading: 10-20 mg/kg (caffeine citrate IV). For preterm infants who are NPO. Single loading dose. Infuse over 30 min',
      'Carga: 10-20 mg/kg (citrato de cafeína E.V.). Para prematuros en ayuno. Dosis única de carga. Infundir en 30 min'],
    ['Manutenção: 5 mg/kg/dia (Citrato de Cafeína E.V.). Iniciar 24h após dose de ataque. Infusão contínua',
      'Maintenance: 5 mg/kg/day (caffeine citrate IV). Start 24h after the loading dose. Continuous infusion',
      'Mantenimiento: 5 mg/kg/día (citrato de cafeína E.V.). Iniciar 24h después de la dosis de carga. Infusión continua'],
    ['Nebulização. 0.1 a 0.5 mg/kg/dose a cada 6-8h. Diluir com SF até 3ml. Monitorar FC',
      'Nebulization. 0.1 to 0.5 mg/kg/dose every 6-8h. Dilute with NS to 3ml. Monitor HR',
      'Nebulización. 0.1 a 0.5 mg/kg/dosis cada 6-8h. Diluir con SF hasta 3ml. Monitorizar FC'],
    ['Reposição fisiológica. 0.022 a 0.045 mg/kg/dia. Via oral. Dividir em 2-3 doses. Usar conta-gotas calibrado. Pode misturar com alimentos líquidos',
      'Physiologic replacement. 0.022 to 0.045 mg/kg/day. Oral route. Divide into 2-3 doses. Use a calibrated dropper. May be mixed with liquid foods',
      'Reposición fisiológica. 0.022 a 0.045 mg/kg/día. Vía oral. Dividir en 2-3 dosis. Usar gotero calibrado. Puede mezclarse con alimentos líquidos'],
    ['Dose STRESS. 0.07 a 0.15 mg/kg/dia. Via oral. Dividir em 2-3 doses. Usar conta-gotas calibrado. Pode misturar com alimentos líquidos',
      'STRESS dose. 0.07 to 0.15 mg/kg/day. Oral route. Divide into 2-3 doses. Use a calibrated dropper. May be mixed with liquid foods',
      'Dosis de ESTRÉS. 0.07 a 0.15 mg/kg/día. Vía oral. Dividir en 2-3 dosis. Usar gotero calibrado. Puede mezclarse con alimentos líquidos'],
    ['Protocolo DART para DBP. Dose inicial 0.15 mg/kg/dia por 3 dias, depois 0.1 mg/kg/dia por 3 dias, depois 0.05 mg/kg/dia por 4 dias. Total 10 dias. Via oral. Usar conta-gotas calibrado',
      'DART protocol for BPD. Initial dose 0.15 mg/kg/day for 3 days, then 0.1 mg/kg/day for 3 days, then 0.05 mg/kg/day for 4 days. Total 10 days. Oral route. Use a calibrated dropper',
      'Protocolo DART para DBP. Dosis inicial 0.15 mg/kg/día por 3 días, luego 0.1 mg/kg/día por 3 días, luego 0.05 mg/kg/día por 4 días. Total 10 días. Vía oral. Usar gotero calibrado'],
    ['Protocolo DART para DBP. Dose inicial 0.15 mg/kg/dia por 3 dias, depois 0.1 mg/kg/dia por 3 dias, depois 0.05 mg/kg/dia por 4 dias. Total 10 dias. Via endovenosa',
      'DART protocol for BPD. Initial dose 0.15 mg/kg/day for 3 days, then 0.1 mg/kg/day for 3 days, then 0.05 mg/kg/day for 4 days. Total 10 days. Intravenous route',
      'Protocolo DART para DBP. Dosis inicial 0.15 mg/kg/día por 3 días, luego 0.1 mg/kg/día por 3 días, luego 0.05 mg/kg/día por 4 días. Total 10 días. Vía endovenosa'],
    ['Surfactante bovino. Usar antes de 48h de vida. 100 mg/kg/dose (4 ml/kg). Pode ser repetida até 4 doses com intervalo de 6h. Administrar via endotraqueal',
      'Bovine surfactant. Use before 48h of life. 100 mg/kg/dose (4 ml/kg). May be repeated up to 4 doses at 6h intervals. Administer endotracheally',
      'Surfactante bovino. Usar antes de las 48h de vida. 100 mg/kg/dosis (4 ml/kg). Puede repetirse hasta 4 dosis con intervalo de 6h. Administrar por vía endotraqueal'],
    ['Surfactante porcino. Usar dose inicial dividida em 2 alíquotas. 200 mg/kg/dose (2.5 ml/kg). Pode ser repetido 2 doses de 100 mg/kg com intervalo de 12h. Administrar via endotraqueal',
      'Porcine surfactant. Give the initial dose divided into 2 aliquots. 200 mg/kg/dose (2.5 ml/kg). May be repeated as 2 doses of 100 mg/kg at 12h intervals. Administer endotracheally',
      'Surfactante porcino. Administrar la dosis inicial dividida en 2 alícuotas. 200 mg/kg/dosis (2.5 ml/kg). Puede repetirse 2 dosis de 100 mg/kg con intervalo de 12h. Administrar por vía endotraqueal'],
    ['Surfactante bovino. Usar dose inicial dividida em 2 alíquotas. 135 mg/kg/dose (7.5 ml/kg). Pode ser repetido até 3 doses com intervalo de 12h. Administrar via endotraqueal',
      'Bovine surfactant. Give the initial dose divided into 2 aliquots. 135 mg/kg/dose (7.5 ml/kg). May be repeated up to 3 doses at 12h intervals. Administer endotracheally',
      'Surfactante bovino. Administrar la dosis inicial dividida en 2 alícuotas. 135 mg/kg/dosis (7.5 ml/kg). Puede repetirse hasta 3 dosis con intervalo de 12h. Administrar por vía endotraqueal'],
    ['Surfactante sintético. Usar em neonatos < 29 sem. 67.5 mg/kg/dose (5 ml/kg). Pode ser repetido até 2 doses com intervalo de 12h. Administrar via endotraqueal',
      'Synthetic surfactant. Use in neonates < 29 wk. 67.5 mg/kg/dose (5 ml/kg). May be repeated up to 2 doses at 12h intervals. Administer endotracheally',
      'Surfactante sintético. Usar en neonatos < 29 sem. 67.5 mg/kg/dosis (5 ml/kg). Puede repetirse hasta 2 dosis con intervalo de 12h. Administrar por vía endotraqueal'],
    ['Nebulização. Dose independe do peso. 36 a 72 mcg/inalação. Diluir com SF até 3ml. Pode ser combinado com albuterol',
      'Nebulization. Dose is weight-independent. 36 to 72 mcg/inhalation. Dilute with NS to 3ml. May be combined with albuterol',
      'Nebulización. La dosis no depende del peso. 36 a 72 mcg/inhalación. Diluir con SF hasta 3ml. Puede combinarse con salbutamol'],
    ['Dose mensal (em estação epidêmica de VRS). 15 mg/kg/dose. Administrar I.M. durante temporada VSR (maio-setembro). Máximo 5 doses',
      'Monthly dose (during the RSV epidemic season). 15 mg/kg/dose. Administer IM during the RSV season (May-September). Maximum 5 doses',
      'Dosis mensual (en la temporada epidémica de VSR). 15 mg/kg/dosis. Administrar I.M. durante la temporada de VSR (mayo-septiembre). Máximo 5 dosis'],
    ['Prevenção VSR. 50mg I.M. única. Peso < 5kg. Primeira temporada VSR. Intervalo: 30 dias. Administrar I.M. no vasto lateral da coxa',
      'RSV prevention. 50mg IM single dose. Weight < 5kg. First RSV season. Interval: 30 days. Administer IM in the vastus lateralis of the thigh',
      'Prevención de VSR. 50mg I.M. dosis única. Peso < 5kg. Primera temporada de VSR. Intervalo: 30 días. Administrar I.M. en el vasto lateral del muslo'],
    ['Prevenção VSR. 100mg I.M. única. Peso ≥ 5kg. Primeira temporada VSR. Intervalo: 30 dias. Administrar I.M. no vasto lateral da coxa',
      'RSV prevention. 100mg IM single dose. Weight ≥ 5kg. First RSV season. Interval: 30 days. Administer IM in the vastus lateralis of the thigh',
      'Prevención de VSR. 100mg I.M. dosis única. Peso ≥ 5kg. Primera temporada de VSR. Intervalo: 30 días. Administrar I.M. en el vasto lateral del muslo'],
    ['Prevenção VSR. 200mg I.M. (2 injeções de 100mg). Crianças até 24 meses com risco aumentado. Segunda temporada VSR. Intervalo: 30 dias. Administrar I.M. em locais diferentes',
      'RSV prevention. 200mg IM (2 injections of 100mg). Children up to 24 months at increased risk. Second RSV season. Interval: 30 days. Administer IM at different sites',
      'Prevención de VSR. 200mg I.M. (2 inyecciones de 100mg). Niños de hasta 24 meses con riesgo aumentado. Segunda temporada de VSR. Intervalo: 30 días. Administrar I.M. en sitios diferentes']
  ].forEach(function (o) {
    entries[o[0]] = [o[1], o[2]];
    entries[semAcento(o[0])] = [o[1], o[2]];
    entries['Observações: ' + o[0]] = ['Notes: ' + o[1], 'Observaciones: ' + o[2]];
    entries['Observacoes: ' + semAcento(o[0])] = ['Notes: ' + o[1], 'Observaciones: ' + o[2]];
  });

  i18n.register(entries);

  /* Bloco "Informações da Droga": a página grava várias linhas num único nó de texto
     ("Peso: ...\nIdade: ...\nIG Corrigida: ...\nIntervalo: ...\nObservações: ...") e o CSS as exibe
     numa só linha. Sem esta regra o núcleo traduz só o primeiro rótulo do bloco; aqui cada parte é
     traduzida pelo próprio dicionário, sem tocar em nenhum número. */
  var INFO_BLOCK = /^Peso: (\S+) kg(?: Idade: (.*?))?(?: IG Corrigida: (.*?))? Intervalo: (\S+) (horas|dias)(?: Observações:(?: (.*))?)?$/;
  function infoBlock(lang) {
    return function (match, peso, idade, ig, intervalo, unidade, obs) {
      var tr = function (s) { return i18n.t(s, lang); };
      var parts = [tr('Peso') + ': ' + peso + ' kg'];
      if (idade) parts.push(tr('Idade') + ': ' + tr(idade));
      if (ig) parts.push(tr('IG Corrigida') + ': ' + tr(ig));
      parts.push(tr('Intervalo') + ': ' + intervalo + ' ' + tr(unidade));
      if (match.indexOf(' Observações:') !== -1) parts.push(tr('Observações') + ':' + (obs ? ' ' + tr(obs) : ''));
      return parts.join(' ');
    };
  }
  i18n.registerPatterns([[INFO_BLOCK, infoBlock('en'), infoBlock('es')]]);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
