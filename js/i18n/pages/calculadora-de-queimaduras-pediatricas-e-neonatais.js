/* Calculadora de Queimaduras Pediátricas e Neonatais (files/Calculadora_de_Queimaduras_Pediatricas_e_Neonatais.html) — [inglês, espanhol].
 * Siglas: SCQ → TBSA (en) / SCQ (es). O texto copiado passa por normalize('NFD') na página (sem acentos),
 * por isso cada chave acentuada também é registrada sem acentos. Continua em ...-2.js (modal "Como usar"). */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  function strip(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  var dict = {
    'Como usar': ['How to use', 'Cómo usar'],
    // Cabeçalho
    'NeoPedCalc — Queimaduras pediátricas e neonatais (educativo)': ['NeoPedCalc — Pediatric and neonatal burns (educational)', 'NeoPedCalc — Quemaduras pediátricas y neonatales (educativo)'],
    'Calculadora de Queimaduras Pediátricas e Neonatais': ['Pediatric and Neonatal Burn Calculator', 'Calculadora de quemaduras pediátricas y neonatales'],
    'Avaliação de Área Queimada e Reposição Volêmica': ['Burned Area Assessment and Fluid Resuscitation', 'Evaluación del área quemada y reposición de volumen'],

    // Classificação
    'Classificação das Queimaduras': ['Burn Classification', 'Clasificación de las quemaduras'],
    'I Grau (1º):': ['First Degree (1st):', 'Primer grado (1.º):'],
    'Hiperemia, dor, sem vesículas. Atinge epiderme.': ['Hyperemia, pain, no blisters. Involves the epidermis.', 'Hiperemia, dolor, sin vesículas. Afecta la epidermis.'],
    'II Grau (2º):': ['Second Degree (2nd):', 'Segundo grado (2.º):'],
    'Muita dor, vesículas, bolhas e hiperemia. Atinge epiderme e derme.': ['Severe pain, vesicles, blisters and hyperemia. Involves the epidermis and dermis.', 'Mucho dolor, vesículas, ampollas e hiperemia. Afecta la epidermis y la dermis.'],
    'III Grau (3º):': ['Third Degree (3rd):', 'Tercer grado (3.º):'],
    'Sem dor (destruição de terminações nervosas), branco anacarado. Atinge derme, epiderme e tecidos profundos.': [
      'Painless (destruction of nerve endings), pearly white. Involves the dermis, epidermis and deep tissues.',
      'Sin dolor (destrucción de terminaciones nerviosas), blanco nacarado. Afecta la dermis, la epidermis y los tejidos profundos.'],

    // Dados do paciente
    'Dados do Paciente': ['Patient Data', 'Datos del paciente'],
    'Nome:': ['Name:', 'Nombre:'],
    'Digite o nome': ['Enter the name', 'Ingrese el nombre'],
    'Data/Hora da Avaliação:': ['Date/Time of Assessment:', 'Fecha/hora de la evaluación:'],
    'Data de Nascimento (opcional):': ['Date of Birth (optional):', 'Fecha de nacimiento (opcional):'],
    'Idade:': ['Age:', 'Edad:'],
    'Anos, meses e dias': ['Years, months and days', 'Años, meses y días'],
    'Digite em anos': ['Enter in years', 'Ingrese en años'],
    'Peso Real (kg):': ['Actual Weight (kg):', 'Peso real (kg):'],
    'Altura Real (cm):': ['Actual Height (cm):', 'Talla real (cm):'],
    'Deixe vazio se usar estimado': ['Leave empty if using the estimate', 'Deje vacío si usa el estimado'],
    'OU use Peso/Altura Estimados (se não puder medir):': ['OR use Estimated Weight/Height (if it cannot be measured):', 'O use peso/talla estimados (si no puede medir):'],
    'Selecione a idade...': ['Select the age...', 'Seleccione la edad...'],
    'BSA (m²):': ['BSA (m²):', 'SC (m²):'],

    // Área queimada
    'Área Queimada (2º e 3º Grau) - Regra de Lund-Browder': ['Burned Area (2nd and 3rd Degree) - Lund-Browder Chart', 'Área quemada (2.º y 3.er grado) - Regla de Lund-Browder'],
    'Região Corporal': ['Body Region', 'Región corporal'],
    'Anterior': ['Anterior', 'Anterior'],
    'Posterior': ['Posterior', 'Posterior'],
    'ano': ['year', 'año'],
    'anos': ['years', 'años'],
    'ÁREA TOTAL QUEIMADA': ['TOTAL BURNED AREA', 'ÁREA TOTAL QUEMADA'],
    'Por favor, informe a IDADE da criança': ['Please enter the child\'s AGE', 'Por favor, indique la EDAD del niño'],
    '(digitando ou selecionando peso/altura estimados) para visualizar e preencher a tabela de áreas queimadas.': [
      '(by typing it or selecting the estimated weight/height) to view and fill in the burned area table.',
      '(escribiéndola o seleccionando el peso/talla estimados) para ver y completar la tabla de áreas quemadas.'],

    // Triagem (montada em JS)
    'Triagem e Encaminhamento': ['Triage and Referral', 'Triaje y derivación'],
    'UTQ (Unidade de Tratamento de Queimados)': ['BURN CENTER (specialized burn treatment unit)', 'UTQ (Unidad de Tratamiento de Quemados)'],
    'Criterios para UTQ:': ['Criteria for burn center:', 'Criterios para UTQ:'],
    'SCQ > 20% em pacientes entre 10-50 anos': ['TBSA > 20% in patients aged 10-50 years', 'SCQ > 20% en pacientes de 10-50 años'],
    'SCQ > 20% em outras faixas etárias': ['TBSA > 20% in other age groups', 'SCQ > 20% en otros grupos de edad'],
    'Queimaduras de 3o grau > 5% SCQ em qualquer idade': ['3rd-degree burns > 5% TBSA at any age', 'Quemaduras de 3.er grado > 5% SCQ a cualquier edad'],
    'Queimaduras de 2o ou 3o grau com envolvimento de maos, face, pes ou perineo ("Preferir")': ['2nd- or 3rd-degree burns involving hands, face, feet or perineum ("Preferred")', 'Quemaduras de 2.º o 3.er grado con afectación de manos, cara, pies o periné ("Preferir")'],
    'Queimaduras elétricas ("Preferir")': ['Electrical burns ("Preferred")', 'Quemaduras eléctricas ("Preferir")'],
    'Queimaduras químicas ("Preferir")': ['Chemical burns ("Preferred")', 'Quemaduras químicas ("Preferir")'],
    'Congelamento ("Preferir")': ['Frostbite ("Preferred")', 'Congelación ("Preferir")'],
    'Associacao com patologias previas ("Preferir")': ['Associated pre-existing conditions ("Preferred")', 'Asociación con patologías previas ("Preferir")'],
    'Associado a fraturas e politrauma ("Preferir")': ['Associated fractures and multiple trauma ("Preferred")', 'Asociado a fracturas y politraumatismo ("Preferir")'],
    'ENCAMINHAMENTO PRIORITARIO PARA CENTRO ESPECIALIZADO': ['PRIORITY REFERRAL TO A SPECIALIZED CENTER', 'DERIVACIÓN PRIORITARIA A CENTRO ESPECIALIZADO'],
    'HOSPITAL GERAL': ['GENERAL HOSPITAL', 'HOSPITAL GENERAL'],
    'Criterios para Hospital Geral:': ['Criteria for general hospital:', 'Criterios para hospital general:'],
    'SCQ entre 10-20% em pacientes entre 10-50 anos': ['TBSA 10-20% in patients aged 10-50 years', 'SCQ entre 10-20% en pacientes de 10-50 años'],
    'SCQ entre 10-20% em outras faixas etárias': ['TBSA 10-20% in other age groups', 'SCQ entre 10-20% en otros grupos de edad'],
    'Queimaduras de 3o grau < 5% SCQ': ['3rd-degree burns < 5% TBSA', 'Quemaduras de 3.er grado < 5% SCQ'],
    'Queimaduras de 2o ou 3o grau com envolvimento de maos, face, pes ou perineo ("Evitar")': ['2nd- or 3rd-degree burns involving hands, face, feet or perineum ("Avoid")', 'Quemaduras de 2.º o 3.er grado con afectación de manos, cara, pies o periné ("Evitar")'],
    'Queimaduras elétricas ("Evitar")': ['Electrical burns ("Avoid")', 'Quemaduras eléctricas ("Evitar")'],
    'Queimaduras químicas ("Evitar")': ['Chemical burns ("Avoid")', 'Quemaduras químicas ("Evitar")'],
    'Congelamento ("Evitar")': ['Frostbite ("Avoid")', 'Congelación ("Evitar")'],
    'Associacao com patologias previas ("Evitar")': ['Associated pre-existing conditions ("Avoid")', 'Asociación con patologías previas ("Evitar")'],
    'Associado a fraturas e politrauma ("Evitar")': ['Associated fractures and multiple trauma ("Avoid")', 'Asociado a fracturas y politraumatismo ("Evitar")'],
    'INTERNACAO EM HOSPITAL GERAL COM AVALIACAO PARA POSSIVEL TRANSFERENCIA': ['ADMISSION TO A GENERAL HOSPITAL WITH ASSESSMENT FOR POSSIBLE TRANSFER', 'INTERNACIÓN EN HOSPITAL GENERAL CON EVALUACIÓN PARA POSIBLE TRASLADO'],
    'AMBULATORIO': ['OUTPATIENT CARE', 'AMBULATORIO'],
    'Criterios para Ambulatorio:': ['Criteria for outpatient care:', 'Criterios para ambulatorio:'],
    'SCQ entre 5-10% em pacientes entre 10-50 anos': ['TBSA 5-10% in patients aged 10-50 years', 'SCQ entre 5-10% en pacientes de 10-50 años'],
    'SCQ entre 5-10% em outras faixas etárias': ['TBSA 5-10% in other age groups', 'SCQ entre 5-10% en otros grupos de edad'],
    'Queimaduras de 3o grau: "Evitar" tratamento ambulatorial': ['3rd-degree burns: "Avoid" outpatient treatment', 'Quemaduras de 3.er grado: "Evitar" el tratamiento ambulatorio'],
    'Queimaduras de 2o ou 3o grau com envolvimento de maos, face, pes ou perineo: "Nunca" tratamento ambulatorial': ['2nd- or 3rd-degree burns involving hands, face, feet or perineum: "Never" outpatient treatment', 'Quemaduras de 2.º o 3.er grado con afectación de manos, cara, pies o periné: "Nunca" tratamiento ambulatorio'],
    'Queimaduras elétricas: "Nunca"': ['Electrical burns: "Never"', 'Quemaduras eléctricas: "Nunca"'],
    'Queimaduras químicas: "Nunca"': ['Chemical burns: "Never"', 'Quemaduras químicas: "Nunca"'],
    'Congelamento: "Nunca"': ['Frostbite: "Never"', 'Congelación: "Nunca"'],
    'Associacao com patologias previas: "Nunca"': ['Associated pre-existing conditions: "Never"', 'Asociación con patologías previas: "Nunca"'],
    'Associado a fraturas e politrauma: "Nunca"': ['Associated fractures and multiple trauma: "Never"', 'Asociado a fracturas y politraumatismo: "Nunca"'],
    'TRATAMENTO AMBULATORIAL COM REAVALIACAO FREQUENTE': ['OUTPATIENT TREATMENT WITH FREQUENT REASSESSMENT', 'TRATAMIENTO AMBULATORIO CON REEVALUACIÓN FRECUENTE'],
    'TRIAGEM / CUIDADOS INICIAIS': ['TRIAGE / INITIAL CARE', 'TRIAJE / CUIDADOS INICIALES'],
    'Criterios para Triagem:': ['Criteria for triage:', 'Criterios para triaje:'],
    'SCQ < 10% em pacientes entre 10-50 anos': ['TBSA < 10% in patients aged 10-50 years', 'SCQ < 10% en pacientes de 10-50 años'],
    'SCQ < 5% em outras faixas etárias': ['TBSA < 5% in other age groups', 'SCQ < 5% en otros grupos de edad'],
    'Avaliar criterios adicionais:': ['Assess additional criteria:', 'Evaluar criterios adicionales:'],
    'Queimaduras de 3o grau: "Evitar" tratamento em triagem': ['3rd-degree burns: "Avoid" treatment at triage', 'Quemaduras de 3.er grado: "Evitar" el tratamiento en triaje'],
    'Areas criticas (maos, face, pes, perineo): Considerar encaminhamento': ['Critical areas (hands, face, feet, perineum): Consider referral', 'Áreas críticas (manos, cara, pies, periné): Considerar derivación'],
    'Queimaduras especiais (eletricas, quimicas): "Nunca" em triagem': ['Special burns (electrical, chemical): "Never" at triage', 'Quemaduras especiales (eléctricas, químicas): "Nunca" en triaje'],
    'TRATAMENTO INICIAL COM ORIENTACOES E ACOMPANHAMENTO': ['INITIAL TREATMENT WITH GUIDANCE AND FOLLOW-UP', 'TRATAMIENTO INICIAL CON ORIENTACIONES Y SEGUIMIENTO'],

    // Resultados
    'Fórmula de Parkland': ['Parkland Formula', 'Fórmula de Parkland'],
    '24 horas:': ['24 hours:', '24 horas:'],
    'Primeiras 8h:': ['First 8 h:', 'Primeras 8 h:'],
    'Primeiras 8h (mL/h):': ['First 8 h (mL/h):', 'Primeras 8 h (mL/h):'],
    '16h restantes:': ['Remaining 16 h:', '16 h restantes:'],
    '16h restantes (mL/h):': ['Remaining 16 h (mL/h):', '16 h restantes (mL/h):'],
    'Fórmula de Carvajal Modificada': ['Modified Carvajal Formula', 'Fórmula de Carvajal modificada'],
    'Dia 1 - 24 horas:': ['Day 1 - 24 hours:', 'Día 1 - 24 horas:'],
    'Dia 1 - Primeiras 8h:': ['Day 1 - First 8 h:', 'Día 1 - Primeras 8 h:'],
    'Dia 1 - Primeiras 8h (mL/h):': ['Day 1 - First 8 h (mL/h):', 'Día 1 - Primeras 8 h (mL/h):'],
    'Dia 1 - 16h restantes:': ['Day 1 - Remaining 16 h:', 'Día 1 - 16 h restantes:'],
    'Dia 1 - 16h restantes (mL/h):': ['Day 1 - Remaining 16 h (mL/h):', 'Día 1 - 16 h restantes (mL/h):'],
    'Dia 2 - 24 horas:': ['Day 2 - 24 hours:', 'Día 2 - 24 horas:'],
    'Dia 2 - (mL/h):': ['Day 2 - (mL/h):', 'Día 2 - (mL/h):'],
    'Calcular BSA': ['Calculate BSA', 'Calcular SC'],
    'Copiar texto informativo': ['Copy informational text', 'Copiar texto informativo'],

    // Referências
    'Referências Bibliográficas': ['Bibliographic References', 'Referencias bibliográficas'],
    'OBS:': ['NOTE:', 'OBS.:'],
    'No cálculo de reposição, excetuando-se queimaduras elétricas e lesões inalatórias graves, considera-se SCQ máxima de 50%, para evitar hiperhidratação.': [
      'For fluid replacement calculations, except for electrical burns and severe inhalation injuries, a maximum TBSA of 50% is used to avoid fluid overload.',
      'En el cálculo de reposición, salvo en quemaduras eléctricas y lesiones inhalatorias graves, se considera una SCQ máxima del 50%, para evitar la sobrehidratación.'],

    // Texto copiado (já sem acentos)
    'RESUMO INFORMATIVO — CALCULADORA DE QUEIMADURAS PEDIATRICAS E NEONATAIS (EDUCATIVO)': ['INFORMATIONAL SUMMARY — PEDIATRIC AND NEONATAL BURN CALCULATOR (EDUCATIONAL)', 'RESUMEN INFORMATIVO — CALCULADORA DE QUEMADURAS PEDIÁTRICAS Y NEONATALES (EDUCATIVO)'],
    'DADOS DO PACIENTE': ['PATIENT DATA', 'DATOS DEL PACIENTE'],
    'Nome': ['Name', 'Nombre'],
    'Nao informado': ['Not provided', 'No informado'],
    'Nao informada': ['Not provided', 'No informada'],
    'Idade': ['Age', 'Edad'],
    'Idade: RN': ['Age: Newborn', 'Edad: RN'],
    'mes) (estimada': ['month) (estimated', 'mes) (estimada'],
    'meses (estimada': ['months (estimated', 'meses (estimada'],
    'anos (estimada': ['years (estimated', 'años (estimada'],
    'Peso': ['Weight', 'Peso'],
    'kg (ESTIMADO': ['kg (ESTIMATED', 'kg (ESTIMADO'],
    'Altura': ['Height', 'Talla'],
    'cm (ESTIMADO': ['cm (ESTIMATED', 'cm (ESTIMADO'],
    'BSA (Area de Superficie Corporal': ['BSA (Body Surface Area', 'SC (superficie corporal'],
    'AREA QUEIMADA (2o e 3o GRAU)': ['BURNED AREA (2nd and 3rd DEGREE)', 'ÁREA QUEMADA (2.º y 3.er GRADO)'],
    'Nenhuma area selecionada': ['No area selected', 'Ningún área seleccionada'],
    'TRIAGEM E ENCAMINHAMENTO': ['TRIAGE AND REFERRAL', 'TRIAJE Y DERIVACIÓN'],
    'CRITERIOS APLICADOS:': ['CRITERIA APPLIED:', 'CRITERIOS APLICADOS:'],
    'FORMULA DE PARKLAND': ['PARKLAND FORMULA', 'FÓRMULA DE PARKLAND'],
    'Volume total em': ['Total volume in', 'Volumen total en'],
    'horas': ['hours', 'horas'],
    'Primeiras': ['First', 'Primeras'],
    'horas restantes': ['remaining hours', 'horas restantes'],
    'Taxa horaria': ['Hourly rate', 'Velocidad horaria'],
    'FORMULA DE CARVAJAL MODIFICADA (JUANG)': ['MODIFIED CARVAJAL FORMULA (JUANG)', 'FÓRMULA DE CARVAJAL MODIFICADA (JUANG)'],
    'DIA': ['DAY', 'DÍA'],
    'OBSERVACOES IMPORTANTES': ['IMPORTANT NOTES', 'OBSERVACIONES IMPORTANTES'],
    '- SCQ maxima considerada: 50% (exceto queimaduras eletricas e inalatorias graves)': ['- Maximum TBSA considered: 50% (except electrical burns and severe inhalation injuries)', '- SCQ máxima considerada: 50% (excepto quemaduras eléctricas e inhalatorias graves)'],
    // Em inglês, separador decimal com ponto (texto fixo verificado no código)
    '- Monitorar diurese: 0,5-1 ml/kg/h em criancas': ['- Monitor urine output: 0.5-1 mL/kg/h in children', '- Monitorizar la diuresis: 0,5-1 ml/kg/h en niños'],
    '- Ajustar infusao conforme resposta clinica': ['- Adjust the infusion according to clinical response', '- Ajustar la infusión según la respuesta clínica'],
    '- Avaliar necessidade de albumina se hipoproteinemia': ['- Assess the need for albumin if hypoproteinemia is present', '- Evaluar la necesidad de albúmina si hay hipoproteinemia'],
    '- Considerar cateter vesical se SCQ > 20%': ['- Consider a urinary catheter if TBSA > 20%', '- Considerar sonda vesical si SCQ > 20%'],
    '- Reavaliar frequentemente e ajustar reposicao': ['- Reassess frequently and adjust fluid replacement', '- Reevaluar con frecuencia y ajustar la reposición'],
    'CLASSIFICACAO DAS QUEIMADURAS': ['BURN CLASSIFICATION', 'CLASIFICACIÓN DE LAS QUEMADURAS'],
    'I Grau (1o): Hiperemia, dor, sem vesiculas. Atinge epiderme.': ['First Degree (1st): Hyperemia, pain, no blisters. Involves the epidermis.', 'Primer grado (1.º): Hiperemia, dolor, sin vesículas. Afecta la epidermis.'],
    'II Grau (2o): Muita dor, vesiculas, bolhas. Atinge epiderme e derme.': ['Second Degree (2nd): Severe pain, vesicles, blisters. Involves the epidermis and dermis.', 'Segundo grado (2.º): Mucho dolor, vesículas, ampollas. Afecta la epidermis y la dermis.'],
    'III Grau (3o): Sem dor, branco anacarado. Atinge derme, epiderme e tecidos profundos.': ['Third Degree (3rd): Painless, pearly white. Involves the dermis, epidermis and deep tissues.', 'Tercer grado (3.º): Sin dolor, blanco nacarado. Afecta la dermis, la epidermis y los tejidos profundos.'],
    'CRITERIOS DE INTERNACAO': ['ADMISSION CRITERIA', 'CRITERIOS DE INTERNACIÓN'],
    '- SCQ > 10% em criancas': ['- TBSA > 10% in children', '- SCQ > 10% en niños'],
    '- Queimaduras de 2o grau em face, maos, pes, genitalia, perineo, articulacoes': ['- 2nd-degree burns of the face, hands, feet, genitalia, perineum or joints', '- Quemaduras de 2.º grado en cara, manos, pies, genitales, periné, articulaciones'],
    '- Queimaduras de 3o grau': ['- 3rd-degree burns', '- Quemaduras de 3.er grado'],
    '- Queimaduras eletricas': ['- Electrical burns', '- Quemaduras eléctricas'],
    '- Queimaduras quimicas': ['- Chemical burns', '- Quemaduras químicas'],
    '- Lesao inalatoria': ['- Inhalation injury', '- Lesión inhalatoria'],
    '- Queimaduras circunferenciais': ['- Circumferential burns', '- Quemaduras circunferenciales'],
    '- Comorbidades associadas': ['- Associated comorbidities', '- Comorbilidades asociadas'],
    'REFERENCIAS': ['REFERENCES', 'REFERENCIAS']
  };

  // Regiões de Lund-Browder (tabela e linhas "Regiao (Anterior + Posterior): x%" do texto copiado)
  var AREAS = {
    'Cabeça': ['Head', 'Cabeza'], 'Pescoço': ['Neck', 'Cuello'],
    'Tronco anterior': ['Anterior trunk', 'Tronco anterior'], 'Tronco posterior': ['Posterior trunk', 'Tronco posterior'],
    'Nádega direita': ['Right buttock', 'Glúteo derecho'], 'Nádega esquerda': ['Left buttock', 'Glúteo izquierdo'],
    'Genitália': ['Genitalia', 'Genitales'],
    'Braço direito': ['Right upper arm', 'Brazo derecho'], 'Braço esquerdo': ['Left upper arm', 'Brazo izquierdo'],
    'Antebraço direito': ['Right forearm', 'Antebrazo derecho'], 'Antebraço esquerdo': ['Left forearm', 'Antebrazo izquierdo'],
    'Mão direita': ['Right hand', 'Mano derecha'], 'Mão esquerda': ['Left hand', 'Mano izquierda'],
    'Coxa direita': ['Right thigh', 'Muslo derecho'], 'Coxa esquerda': ['Left thigh', 'Muslo izquierdo'],
    'Perna direita': ['Right lower leg', 'Pierna derecha'], 'Perna esquerda': ['Left lower leg', 'Pierna izquierda'],
    'Pé direito': ['Right foot', 'Pie derecho'], 'Pé esquerdo': ['Left foot', 'Pie izquierdo']
  };
  var SIDES = ['Anterior', 'Posterior', 'Anterior + Posterior'];
  Object.keys(AREAS).forEach(function (pt) {
    var tr = AREAS[pt];
    dict[pt] = tr;
    // A busca ignora o ")" final: a chave termina no lado queimado.
    SIDES.forEach(function (side) { dict[pt + ' (' + side] = [tr[0] + ' (' + side, tr[1] + ' (' + side]; });
  });

  // Opções de peso/altura estimados: "<idade> - <peso> kg / <altura> cm"
  [['RN (0-1 mês)', 'Newborn (0-1 month)', 'RN (0-1 mes)', '3.5', '50'],
    ['2 meses', '2 months', '2 meses', '4.5', '55'], ['3 meses', '3 months', '3 meses', '5.5', '58'],
    ['4 meses', '4 months', '4 meses', '6.5', '61'], ['5 meses', '5 months', '5 meses', '7.0', '64'],
    ['6 meses', '6 months', '6 meses', '7.5', '66'], ['7-8 meses', '7-8 months', '7-8 meses', '8.0', '68'],
    ['9-10 meses', '9-10 months', '9-10 meses', '8.5', '70'], ['11-12 meses', '11-12 months', '11-12 meses', '9.0', '72'],
    ['15 meses', '15 months', '15 meses', '10', '77'], ['18 meses', '18 months', '18 meses', '11', '81'],
    ['2 anos', '2 years', '2 años', '12', '85'], ['3 anos', '3 years', '3 años', '14', '95'],
    ['4 anos', '4 years', '4 años', '16', '103'], ['5 anos', '5 years', '5 años', '18', '110'],
    ['6 anos', '6 years', '6 años', '20', '116'], ['7 anos', '7 years', '7 años', '22', '122'],
    ['8 anos', '8 years', '8 años', '25', '128'], ['9 anos', '9 years', '9 años', '28', '133'],
    ['10 anos', '10 years', '10 años', '31', '138'], ['11 anos', '11 years', '11 años', '35', '143'],
    ['12 anos', '12 years', '12 años', '40', '149'], ['13 anos', '13 years', '13 años', '45', '156'],
    ['14 anos', '14 years', '14 años', '50', '163'], ['15 anos', '15 years', '15 años', '55', '169']
  ].forEach(function (o) {
    var tail = ' - ' + o[3] + ' kg / ' + o[4] + ' cm';
    dict[o[0] + tail] = [o[1] + tail, o[2] + tail];
  });

  // Idade calculada no texto copiado: "3 anos, 2 meses e 5 dias (calculada automaticamente)"
  [['ano', 'year', 'año'], ['anos', 'years', 'años'], ['mes', 'month', 'mes'], ['meses', 'months', 'meses'],
    ['dia', 'day', 'día'], ['dias', 'days', 'días']].forEach(function (u) {
    dict[u[0]] = [u[1], u[2]];
    dict[u[0] + ' e'] = [u[1] + ' and', u[2] + ' y'];
    dict[u[0] + ' (calculada automaticamente'] = [u[1] + ' (calculated automatically', u[2] + ' (calculada automáticamente'];
  });

  // Rodapé legal comum, que a página copia sem acentos
  var FOOTER = 'NeoPedCalc · Uso exclusivamente educacional e informativo. Não realiza diagnóstico nem prescreve tratamento. Interpretação e decisão clínica: responsabilidade do profissional de saúde. Gerado em';
  var footEn = i18n.t(FOOTER, 'en');
  var footEs = i18n.t(FOOTER, 'es');
  if (footEn !== FOOTER) dict[strip(FOOTER)] = [footEn, footEs];

  // Variantes sem acentos de todas as chaves (texto copiado passa por normalize('NFD'))
  Object.keys(dict).forEach(function (pt) {
    var plain = strip(pt);
    if (plain !== pt && !dict[plain]) dict[plain] = dict[pt];
  });

  i18n.register(dict);

  i18n.registerPatterns([
    // Datas do texto copiado (toLocaleString('pt-BR') = dd/mm/aaaa): em inglês, formato ISO sem ambiguidade.
    [/^Data\/Hora da Avaliacao: (\d{2})\/(\d{2})\/(\d{4}),? (\d{2}:\d{2})$/, 'Date/Time of Assessment: $3-$2-$1 $4', 'Fecha/hora de la evaluación: $1/$2/$3 $4'],
    [/^Data de Nascimento: (\d{2})\/(\d{2})\/(\d{4})$/, 'Date of Birth: $3-$2-$1', 'Fecha de nacimiento: $1/$2/$3'],
    [/^Data de Geracao: (\d{2})\/(\d{2})\/(\d{4}),? (\d{2}:\d{2}:\d{2})$/, 'Generated on: $3-$2-$1 $4', 'Fecha de generación: $1/$2/$3 $4']
  ]);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
