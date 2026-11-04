/* Emergência Pediátrica (files/Emergencia_pediatrica.html) — [inglês, espanhol].
 * Parte 1: interface, sinais vitais, Glasgow, equipamentos, toxíndromes e antídotos.
 * Parte 2 (emergencia-pediatrica-2.js): drogas, linhas de cálculo e bloco do cálculo rápido.
 * Números, doses e tamanhos não mudam; no inglês, a vírgula decimal dos textos fixos vira ponto. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  i18n.register({
    // Cabeçalho
    'NeoPedCalc — Emergência Pediátrica (educativo)': ['NeoPedCalc — Pediatric Emergency (educational)', 'NeoPedCalc — Emergencia pediátrica (educativo)'],
    'NeoPedCalc — Emergência Pediátrica': ['NeoPedCalc — Pediatric Emergency', 'NeoPedCalc — Emergencia pediátrica'],
    'Ferramenta': ['An', 'Herramienta'],
    'educativa e informativa': ['educational and informational', 'educativa e informativa'],
    'baseada no card de urgência/emergência e no material Emergências Pediátricas 2026 (drogas, infusões, sinais vitais, Glasgow, equipamentos, toxíndromes).': [
      'tool based on the urgent/emergency care reference card and on the Emergências Pediátricas 2026 material (drugs, infusions, vital signs, Glasgow, equipment, toxidromes).',
      'basada en la tarjeta de urgencias/emergencias y en el material Emergências Pediátricas 2026 (fármacos, infusiones, signos vitales, Glasgow, equipos, toxíndromes).'
    ],
    'Não prescreve': ['Does not prescribe', 'No prescribe'],
    '— confirme sempre dose, via e cenário clínico.': ['— always confirm dose, route and clinical scenario.', '— confirme siempre dosis, vía y escenario clínico.'],
    'Carregar exemplo': ['Load example', 'Cargar ejemplo'],
    'Limpar': ['Clear', 'Limpiar'],

    // Dados base
    'Dados base do paciente': ['Patient baseline data', 'Datos básicos del paciente'],
    'Paciente': ['Patient', 'Paciente'],
    'Ex.: Leito 4 / RN / Criança': ['e.g., Bed 4 / Newborn / Child', 'Ej.: Cama 4 / RN / Niño'],
    'Peso (kg)': ['Weight (kg)', 'Peso (kg)'],
    'Ex.: 12': ['e.g., 12', 'Ej.: 12'],
    'Faixa etária do resumo': ['Age group for the summary', 'Grupo etario del resumen'],
    'Idade em anos, se necessária': ['Age in years, if needed', 'Edad en años, si es necesaria'],
    'Ex.: 2.5': ['e.g., 2.5', 'Ej.: 2.5'],
    'Seção do app': ['App section', 'Sección de la aplicación'],
    'Calculadora': ['Calculator', 'Calculadora'],
    'Drogas da emergência': ['Emergency drugs', 'Fármacos de emergencia'],
    'Infusão contínua': ['Continuous infusion', 'Infusión continua'],
    'Sinais vitais e Glasgow': ['Vital signs and Glasgow', 'Signos vitales y Glasgow'],
    'Equipamentos': ['Equipment', 'Equipos'],
    'Toxíndromes e antídotos': ['Toxidromes and antidotes', 'Toxíndromes y antídotos'],

    // Faixas etárias (seletor, tabelas e resumo)
    'Neonato 96h': ['Neonate 96 h', 'Neonato 96 h'],
    'Neonato': ['Neonate', 'Neonato'],
    'Lactente': ['Infant', 'Lactante'],
    'Criança pequena': ['Toddler', 'Niño pequeño'],
    'Pré-escolar': ['Preschooler', 'Preescolar'],
    'Pré escolar': ['Preschooler', 'Preescolar'],
    'Escolar': ['School-age child', 'Escolar'],
    'Pré-adolescente': ['Preadolescent', 'Preadolescente'],
    'Adolescente': ['Adolescent', 'Adolescente'],

    // Rótulo do seletor de droga e mensagens
    'Droga da emergência': ['Emergency drug', 'Fármaco de emergencia'],
    'Droga de infusão contínua': ['Continuous infusion drug', 'Fármaco en infusión continua'],
    'Droga para cálculo rápido': ['Drug for quick calculation', 'Fármaco para cálculo rápido'],
    'Item para cálculo rápido': ['Quick-calculation item', 'Elemento para cálculo rápido'],
    'Sem itens nesta seção': ['No items in this section', 'Sin elementos en esta sección'],
    'selecione um item': ['select an item', 'seleccione un elemento'],
    'Selecione uma seção com drogas para cálculo rápido.': ['Select a section with drugs for quick calculation.', 'Seleccione una sección con fármacos para cálculo rápido.'],
    'Selecione uma droga e informe o peso.': ['Select a drug and enter the weight.', 'Seleccione un fármaco e indique el peso.'],
    'Selecione "Seção do app" e "Item para cálculo rápido" para visualizar o cálculo.': [
      'Select "App section" and "Quick-calculation item" to view the calculation.',
      'Seleccione "Sección de la aplicación" y "Elemento para cálculo rápido" para ver el cálculo.'
    ],
    'Nenhuma droga disponível para esta seção.': ['No drug available for this section.', 'Ningún fármaco disponible para esta sección.'],
    'Informe o peso em kg para calcular.': ['Enter the weight in kg to calculate.', 'Indique el peso en kg para calcular.'],
    'Selecione um item no dropdown "Item para cálculo rápido" para visualizar.': [
      'Select an item in the "Quick-calculation item" dropdown to view it.',
      'Seleccione un elemento en el menú desplegable "Elemento para cálculo rápido" para verlo.'
    ],
    'Item não encontrado nesta seção.': ['Item not found in this section.', 'Elemento no encontrado en esta sección.'],

    // Painel do cálculo rápido
    'Cálculo rápido da droga selecionada': ['Quick calculation for the selected drug', 'Cálculo rápido del fármaco seleccionado'],
    'Copiar trecho (revisar)': ['Copy excerpt (review)', 'Copiar fragmento (revisar)'],
    'Baixar texto .txt informativo': ['Download informational .txt file', 'Descargar texto .txt informativo'],
    'Resumo clínico rápido': ['Quick clinical summary', 'Resumen clínico rápido'],
    'Pressão arterial normal': ['Normal blood pressure', 'Presión arterial normal'],
    'Frequência cardíaca normal': ['Normal heart rate', 'Frecuencia cardíaca normal'],
    'Frequência respiratória normal': ['Normal respiratory rate', 'Frecuencia respiratoria normal'],
    'NeoPedCalc — trecho informativo (cálculo rápido). Não prescreve. Conferir paciente, dose e protocolo local.': [
      'NeoPedCalc — informational excerpt (quick calculation). Does not prescribe. Check patient, dose and local protocol.',
      'NeoPedCalc — fragmento informativo (cálculo rápido). No prescribe. Verifique paciente, dosis y protocolo local.'
    ],

    // Painéis de drogas
    'Drogas utilizadas na emergência': ['Drugs used in emergencies', 'Fármacos utilizados en emergencias'],
    'Conteúdo espelhado do card. Revisar via, máximo, contraindicações e observações antes do uso.': [
      'Content mirrored from the reference card. Review route, maximum, contraindications and notes before use.',
      'Contenido reflejado de la tarjeta. Revise vía, máximo, contraindicaciones y observaciones antes del uso.'
    ],
    'Drogas de infusão contínua': ['Continuous infusion drugs', 'Fármacos en infusión continua'],
    'Apresentação': ['Presentation', 'Presentación'],
    'Dose': ['Dose', 'Dosis'],
    'Sem máximo descrito': ['No maximum described', 'Sin máximo descrito'],

    // Sinais vitais: tabelas
    'Idade': ['Age', 'Edad'],
    'Pressão sistólica (mm Hg)': ['Systolic pressure (mm Hg)', 'Presión sistólica (mm Hg)'],
    'Pressão diastólica (mm Hg)': ['Diastolic pressure (mm Hg)', 'Presión diastólica (mm Hg)'],
    'Pressão arterial média (mm Hg)': ['Mean arterial pressure (mm Hg)', 'Presión arterial media (mm Hg)'],
    'Frequência cardíaca normal e frequência respiratória normal': ['Normal heart rate and normal respiratory rate', 'Frecuencia cardíaca normal y frecuencia respiratoria normal'],
    'Frequência acordado': ['Heart rate (awake)', 'Frecuencia cardíaca (despierto)'],
    'Frequência dormindo': ['Heart rate (asleep)', 'Frecuencia cardíaca (dormido)'],
    'Frequência respiratória': ['Respiratory rate', 'Frecuencia respiratoria'],
    'Nascimento 12h, < 1000g': ['Birth 12 h, < 1000 g', 'Nacimiento 12 h, < 1000 g'],
    'Nascimento 12h, 3kg': ['Birth 12 h, 3 kg', 'Nacimiento 12 h, 3 kg'],
    'Lactente 1 a 12 meses': ['Infant 1 to 12 months', 'Lactante 1 a 12 meses'],
    'Criança pequena 1 a 2 anos': ['Toddler 1 to 2 years', 'Niño pequeño 1 a 2 años'],
    'Pré escolar 3 a 5 anos': ['Preschooler 3 to 5 years', 'Preescolar 3 a 5 años'],
    'Escolar 6 a 9 anos': ['School-age child 6 to 9 years', 'Escolar 6 a 9 años'],
    'Pré adolescente 10 a 12 anos': ['Preadolescent 10 to 12 years', 'Preadolescente 10 a 12 años'],
    'Adolescente 12 a 15 anos': ['Adolescent 12 to 15 years', 'Adolescente 12 a 15 años'],
    'Não separado no quadro de FR do card': ["Not listed separately in the card's RR table", 'No figura por separado en el cuadro de FR de la tarjeta'],
    'Não separado no quadro': ['Not listed separately in the table', 'No figura por separado en el cuadro'],

    // Sinais vitais: resumo (PAS/PAD/PAM)
    'Neonato 96h: PAS 67-84 / PAD 35-53 / PAM 45-60 mmHg': ['Neonate 96 h: SBP 67-84 / DBP 35-53 / MAP 45-60 mmHg', 'Neonato 96 h: PAS 67-84 / PAD 35-53 / PAM 45-60 mmHg'],
    'Lactente 1 a 12 meses: PAS 72-104 / PAD 37-56 / PAM 50-62 mmHg': ['Infant 1 to 12 months: SBP 72-104 / DBP 37-56 / MAP 50-62 mmHg', 'Lactante 1 a 12 meses: PAS 72-104 / PAD 37-56 / PAM 50-62 mmHg'],
    'Criança pequena 1 a 2 anos: PAS 86-106 / PAD 42-63 / PAM 49-62 mmHg': ['Toddler 1 to 2 years: SBP 86-106 / DBP 42-63 / MAP 49-62 mmHg', 'Niño pequeño 1 a 2 años: PAS 86-106 / PAD 42-63 / PAM 49-62 mmHg'],
    'Pré-escolar 3 a 5 anos: PAS 89-112 / PAD 46-72 / PAM 58-69 mmHg': ['Preschooler 3 to 5 years: SBP 89-112 / DBP 46-72 / MAP 58-69 mmHg', 'Preescolar 3 a 5 años: PAS 89-112 / PAD 46-72 / PAM 58-69 mmHg'],
    'Escolar 6 a 9 anos: PAS 97-115 / PAD 57-76 / PAM 66-72 mmHg': ['School-age child 6 to 9 years: SBP 97-115 / DBP 57-76 / MAP 66-72 mmHg', 'Escolar 6 a 9 años: PAS 97-115 / PAD 57-76 / PAM 66-72 mmHg'],
    'Pré-adolescente 10 a 12 anos: PAS 102-120 / PAD 61-80 / PAM 71-79 mmHg': ['Preadolescent 10 to 12 years: SBP 102-120 / DBP 61-80 / MAP 71-79 mmHg', 'Preadolescente 10 a 12 años: PAS 102-120 / PAD 61-80 / PAM 71-79 mmHg'],
    'Adolescente 12 a 15 anos: PAS 110-131 / PAD 64-83 / PAM 73-84 mmHg': ['Adolescent 12 to 15 years: SBP 110-131 / DBP 64-83 / MAP 73-84 mmHg', 'Adolescente 12 a 15 años: PAS 110-131 / PAD 64-83 / PAM 73-84 mmHg'],

    // Glasgow
    'Escala de Coma de Glasgow Modificada para Lactentes e Crianças': ['Glasgow Coma Scale Modified for Infants and Children', 'Escala de Coma de Glasgow modificada para lactantes y niños'],
    'Item': ['Item', 'Ítem'],
    'Criança': ['Child', 'Niño'],
    'Escore': ['Score', 'Puntuación'],
    'Abertura ocular': ['Eye opening', 'Apertura ocular'],
    'Resposta verbal': ['Verbal response', 'Respuesta verbal'],
    'Resposta motora': ['Motor response', 'Respuesta motora'],
    'Espontânea': ['Spontaneous', 'Espontánea'],
    'A estímulo verbal': ['To verbal stimulus', 'Al estímulo verbal'],
    'A estímulo doloroso': ['To painful stimulus', 'Al estímulo doloroso'],
    'Sem resposta': ['No response', 'Sin respuesta'],
    'Orientado, apropriado': ['Oriented, appropriate', 'Orientado, apropiado'],
    'Balbucia e lalação': ['Coos and babbles', 'Balbucea y gorjea'],
    'Confuso': ['Confused', 'Confuso'],
    'Choro irritado': ['Irritable cry', 'Llanto irritable'],
    'Palavras inapropriadas': ['Inappropriate words', 'Palabras inapropiadas'],
    'Choro após estímulo doloroso': ['Cries in response to pain', 'Llora tras estímulo doloroso'],
    'Sons incompreensíveis': ['Incomprehensible sounds', 'Sonidos incomprensibles'],
    'Geme após estímulo doloroso': ['Moans in response to pain', 'Gime tras estímulo doloroso'],
    'Obedece a comandos': ['Obeys commands', 'Obedece órdenes'],
    'Movimentos espontâneos e intencionais': ['Moves spontaneously and purposefully', 'Movimientos espontáneos e intencionales'],
    'Localiza estímulo doloroso': ['Localizes painful stimulus', 'Localiza el estímulo doloroso'],
    'Retirada ao toque': ['Withdraws to touch', 'Retirada al tacto'],
    'Retirada em resposta a dor': ['Withdraws in response to pain', 'Retirada en respuesta al dolor'],
    'Flexão em resposta a dor': ['Flexion in response to pain', 'Flexión en respuesta al dolor'],
    'Postura de flexão anormal a dor': ['Abnormal flexion posture to pain (decorticate)', 'Postura de flexión anormal ante el dolor (decorticación)'],
    'Extensão em resposta a dor': ['Extension in response to pain', 'Extensión en respuesta al dolor'],
    'Postura de extensão anormal a dor': ['Abnormal extension posture to pain (decerebrate)', 'Postura de extensión anormal ante el dolor (descerebración)'],
    'Orientado, apropriado / Balbucia e lalação': ['Oriented, appropriate / Coos and babbles', 'Orientado, apropiado / Balbucea y gorjea'],
    'Confuso / Choro irritado': ['Confused / Irritable cry', 'Confuso / Llanto irritable'],
    'Palavras inapropriadas / Choro após estímulo doloroso': ['Inappropriate words / Cries in response to pain', 'Palabras inapropiadas / Llora tras estímulo doloroso'],
    'Sons incompreensíveis / Geme após estímulo doloroso': ['Incomprehensible sounds / Moans in response to pain', 'Sonidos incomprensibles / Gime tras estímulo doloroso'],
    'Obedece a comandos / Movimentos espontâneos e intencionais': ['Obeys commands / Moves spontaneously and purposefully', 'Obedece órdenes / Movimientos espontáneos e intencionales'],
    'Localiza estímulo doloroso / Retirada ao toque': ['Localizes painful stimulus / Withdraws to touch', 'Localiza el estímulo doloroso / Retirada al tacto'],
    'Flexão em resposta a dor / Postura de flexão anormal a dor': ['Flexion in response to pain / Abnormal flexion posture to pain (decorticate)', 'Flexión en respuesta al dolor / Postura de flexión anormal ante el dolor (decorticación)'],
    'Extensão em resposta a dor / Postura de extensão anormal a dor': ['Extension in response to pain / Abnormal extension posture to pain (decerebrate)', 'Extensión en respuesta al dolor / Postura de extensión anormal ante el dolor (descerebración)'],

    // Equipamentos: títulos e faixas de peso
    'Equipamentos utilizados na emergência': ['Equipment used in emergencies', 'Equipos utilizados en emergencias'],
    'Equipamento / faixa': ['Equipment / range', 'Equipo / rango'],
    'Neonato ou lactente jovem 3-5 kg': ['Neonate or young infant 3-5 kg', 'Neonato o lactante pequeño 3-5 kg'],
    'Lactente jovem 6-7 kg': ['Young infant 6-7 kg', 'Lactante pequeño 6-7 kg'],
    'Lactente 8-9 kg': ['Infant 8-9 kg', 'Lactante 8-9 kg'],
    'Criança pequena 10-11 kg': ['Toddler 10-11 kg', 'Niño pequeño 10-11 kg'],
    'Criança pequena 12-14 kg': ['Toddler 12-14 kg', 'Niño pequeño 12-14 kg'],
    'Criança 15-18 kg': ['Child 15-18 kg', 'Niño 15-18 kg'],
    'Criança 19-23 kg': ['Child 19-23 kg', 'Niño 19-23 kg'],
    'Criança grande 24-29 kg': ['Large child 24-29 kg', 'Niño grande 24-29 kg'],
    'Adulto 30-36 kg': ['Adult 30-36 kg', 'Adulto 30-36 kg'],
    'Informe o peso em kg para sugerir os equipamentos da faixa correspondente.': [
      'Enter the weight in kg to suggest the equipment for the corresponding range.',
      'Indique el peso en kg para sugerir los equipos del rango correspondiente.'
    ],

    // Toxicologia: títulos
    'Síndromes comuns de intoxicações': ['Common poisoning syndromes', 'Síndromes comunes de intoxicación'],
    'Use o dropdown superior "Item para cálculo rápido" para escolher a toxíndrome.': [
      'Use the "Quick-calculation item" dropdown above to choose the toxidrome.',
      'Use el menú desplegable superior "Elemento para cálculo rápido" para elegir el toxíndrome.'
    ],
    'Tóxicos comuns e antídotos': ['Common toxins and antidotes', 'Tóxicos comunes y antídotos'],
    'CIATox UNICAMP (orientação toxicológica 24h)': ['CIATox UNICAMP (24-hour toxicology guidance)', 'CIATox UNICAMP (orientación toxicológica 24 h)'],
    'Clique no número para ligar.': ['Click the number to call.', 'Haga clic en el número para llamar.'],
    'Selecionar tipo de intoxicação': ['Select type of poisoning', 'Seleccionar tipo de intoxicación'],
    'Selecione um tipo de intoxicação': ['Select a type of poisoning', 'Seleccione un tipo de intoxicación'],
    'Selecione um tipo de intoxicação para visualizar o antídoto.': ['Select a type of poisoning to view the antidote.', 'Seleccione un tipo de intoxicación para ver el antídoto.'],
    'Nenhum item encontrado.': ['No item found.', 'No se encontró ningún elemento.'],
    'Estado mental': ['Mental status', 'Estado mental'],
    'Pupilas': ['Pupils', 'Pupilas'],
    'Sinais vitais': ['Vital signs', 'Signos vitales'],
    'Outras manifestações': ['Other findings', 'Otras manifestaciones'],
    'Agentes tóxicos': ['Toxic agents', 'Agentes tóxicos'],
    'Antídoto': ['Antidote', 'Antídoto'],

    // Toxíndromes
    'Simpatomimética': ['Sympathomimetic', 'Simpaticomimético'],
    'Anticolinérgica': ['Anticholinergic', 'Anticolinérgico'],
    'Alucinogênica': ['Hallucinogenic', 'Alucinógeno'],
    'Opioide-narcótica': ['Opioid (narcotic)', 'Opioide (narcótico)'],
    'Sedativo-hipnótica': ['Sedative-hypnotic', 'Sedante-hipnótico'],
    'Colinérgica': ['Cholinergic', 'Colinérgico'],
    'Serotoninérgica': ['Serotonergic', 'Serotoninérgico'],
    'Agitação · Estado hiperalerta · Alucinação · Paranoia': ['Agitation · Hyperalert state · Hallucinations · Paranoia', 'Agitación · Estado de hiperalerta · Alucinaciones · Paranoia'],
    'Midríase': ['Mydriasis', 'Midriasis'],
    'Hipertermia · Taquicardia · Hipertensão · Pressão de pulso alargada · Taquipneia · Hiperpneia': ['Hyperthermia · Tachycardia · Hypertension · Widened pulse pressure · Tachypnea · Hyperpnea', 'Hipertermia · Taquicardia · Hipertensión · Presión de pulso amplia · Taquipnea · Hiperpnea'],
    'Sudorese · Tremor · Hiperreflexia · Convulsões': ['Diaphoresis · Tremor · Hyperreflexia · Seizures', 'Diaforesis · Temblor · Hiperreflexia · Convulsiones'],
    'Cocaína · Anfetamina · Catinona · Efedrina · Pseudoefedrina · Fenilpropanolamina · Teofilina · Salbutamol · Cafeína': ['Cocaine · Amphetamine · Cathinone · Ephedrine · Pseudoephedrine · Phenylpropanolamine · Theophylline · Albuterol (salbutamol) · Caffeine', 'Cocaína · Anfetamina · Catinona · Efedrina · Seudoefedrina · Fenilpropanolamina · Teofilina · Salbutamol · Cafeína'],
    'Hipervigilância · Agitação · Alucinação · Delírio · Fala não articulada · Coma': ['Hypervigilance · Agitation · Hallucinations · Delirium · Slurred speech · Coma', 'Hipervigilancia · Agitación · Alucinaciones · Delirio · Habla mal articulada · Coma'],
    'Midríase (tricíclicos: midríase ou miose)': ['Mydriasis (tricyclics: mydriasis or miosis)', 'Midriasis (tricíclicos: midriasis o miosis)'],
    'Hipertermia · Taquicardia · Hipertensão · Taquipneia': ['Hyperthermia · Tachycardia · Hypertension · Tachypnea', 'Hipertermia · Taquicardia · Hipertensión · Taquipnea'],
    'Pele seca · Mucosas secas · Ruídos abdominais diminuídos · Retenção urinária · Mioclonia · Coreoatetose · Alteração de comportamento · Convulsão (raro)': ['Dry skin · Dry mucous membranes · Decreased bowel sounds · Urinary retention · Myoclonus · Choreoathetosis · Behavioral changes · Seizures (rare)', 'Piel seca · Mucosas secas · Ruidos hidroaéreos disminuidos · Retención urinaria · Mioclonías · Coreoatetosis · Alteración del comportamiento · Convulsiones (raro)'],
    'Anti-histamínicos · Antidepressivos tricíclicos · Ciclobenzaprina · Orfenadrina · Antiparkinsonianos · Antiespasmódicos · Fenotiazina · Atropina · Escopolamina · Beladona · Alcaloides': ['Antihistamines · Tricyclic antidepressants · Cyclobenzaprine · Orphenadrine · Antiparkinsonian agents · Antispasmodics · Phenothiazines · Atropine · Scopolamine · Belladonna · Alkaloids', 'Antihistamínicos · Antidepresivos tricíclicos · Ciclobenzaprina · Orfenadrina · Antiparkinsonianos · Antiespasmódicos · Fenotiazinas · Atropina · Escopolamina · Belladona · Alcaloides'],
    'Alucinação · Percepção distorcida · Despersonalização · Agitação · Cinestesia': ['Hallucinations · Distorted perception · Depersonalization · Agitation · Kinesthesia', 'Alucinaciones · Percepción distorsionada · Despersonalización · Agitación · Cinestesia'],
    'Midríase (usualmente)': ['Mydriasis (usually)', 'Midriasis (habitualmente)'],
    'Nistagmo': ['Nystagmus', 'Nistagmo'],
    'Fenciclidina · LSD · Mescalina · Canabinoide · Psilocibina · Anfetaminas (Ecstasy)': ['Phencyclidine · LSD · Mescaline · Cannabinoids · Psilocybin · Amphetamines (Ecstasy)', 'Fenciclidina · LSD · Mescalina · Cannabinoides · Psilocibina · Anfetaminas (éxtasis)'],
    'Depressão SNC · Coma': ['CNS depression · Coma', 'Depresión del SNC · Coma'],
    'Miose': ['Miosis', 'Miosis'],
    'Bradipneia · Apneia (característica) · Hipotermia · Bradicardia · Hipotensão': ['Bradypnea · Apnea (characteristic) · Hypothermia · Bradycardia · Hypotension', 'Bradipnea · Apnea (característica) · Hipotermia · Bradicardia · Hipotensión'],
    'Hiporreflexia · Edema pulmonar · Marcas de agulha': ['Hyporeflexia · Pulmonary edema · Needle marks', 'Hiporreflexia · Edema pulmonar · Marcas de aguja'],
    'Opioides (heroína, morfina, metadona, oxicodona, hidromorfona) · Difenoxilato · Propoxifeno': ['Opioids (heroin, morphine, methadone, oxycodone, hydromorphone) · Diphenoxylate · Propoxyphene', 'Opioides (heroína, morfina, metadona, oxicodona, hidromorfona) · Difenoxilato · Propoxifeno'],
    'Depressão SNC · Confusão · Estupor · Coma': ['CNS depression · Confusion · Stupor · Coma', 'Depresión del SNC · Confusión · Estupor · Coma'],
    'Variável': ['Variable', 'Variable'],
    'Frequentemente normais · Pode apresentar: Hipotermia · Bradicardia · Hipotensão · Apneia · Bradipneia': ['Often normal · May present: Hypothermia · Bradycardia · Hypotension · Apnea · Bradypnea', 'Frecuentemente normales · Puede presentar: Hipotermia · Bradicardia · Hipotensión · Apnea · Bradipnea'],
    'Hiporreflexia': ['Hyporeflexia', 'Hiporreflexia'],
    'Benzodiazepínicos · Barbitúricos · Anticonvulsivantes · Carisoprodol · Meprobamato · Glutetiomida · Álcool (Etanol) · Zolpidem': ['Benzodiazepines · Barbiturates · Anticonvulsants · Carisoprodol · Meprobamate · Glutethimide · Alcohol (ethanol) · Zolpidem', 'Benzodiacepinas · Barbitúricos · Anticonvulsivos · Carisoprodol · Meprobamato · Glutetimida · Alcohol (etanol) · Zolpidem'],
    'Confusão · Coma': ['Confusion · Coma', 'Confusión · Coma'],
    'Bradicardia · Hipotensão ou hipertensão · Taquipneia ou bradipneia': ['Bradycardia · Hypotension or hypertension · Tachypnea or bradypnea', 'Bradicardia · Hipotensión o hipertensión · Taquipnea o bradipnea'],
    'Salivação · Incontinência fecal · Incontinência urinária · Diarreia · Vômitos · Lacrimejamento · Cólica abdominal · Broncoconstrição · Fasciculação muscular · Fraqueza muscular · Convulsões': ['Salivation · Fecal incontinence · Urinary incontinence · Diarrhea · Vomiting · Lacrimation · Abdominal cramps · Bronchoconstriction · Muscle fasciculations · Muscle weakness · Seizures', 'Salivación · Incontinencia fecal · Incontinencia urinaria · Diarrea · Vómitos · Lagrimeo · Cólico abdominal · Broncoconstricción · Fasciculaciones musculares · Debilidad muscular · Convulsiones'],
    'Inseticidas organofosforados · Inseticidas carbamatos · Nicotina · Pilocarpina · Fisostigmina · Edrofônio · Betanecol': ['Organophosphate insecticides · Carbamate insecticides · Nicotine · Pilocarpine · Physostigmine · Edrophonium · Bethanechol', 'Insecticidas organofosforados · Insecticidas carbamatos · Nicotina · Pilocarpina · Fisostigmina · Edrofonio · Betanecol'],
    'Confusão · Agitação · Coma': ['Confusion · Agitation · Coma', 'Confusión · Agitación · Coma'],
    'Tremor · Mioclonia · Hiperreflexia · Clônus · Sudorese · Rubor · Trismo · Rigidez · Diarreia': ['Tremor · Myoclonus · Hyperreflexia · Clonus · Diaphoresis · Flushing · Trismus · Rigidity · Diarrhea', 'Temblor · Mioclonías · Hiperreflexia · Clonus · Diaforesis · Rubor · Trismo · Rigidez · Diarrea'],
    'Inibidor monoaminoxidase · Meperidina · Dextrometorfano · Antidepressivos tricíclicos · Triptofano': ['Monoamine oxidase inhibitors · Meperidine · Dextromethorphan · Tricyclic antidepressants · Tryptophan', 'Inhibidores de la monoaminooxidasa · Meperidina · Dextrometorfano · Antidepresivos tricíclicos · Triptófano'],

    // Tóxicos e antídotos
    'Anestésico local': ['Local anesthetic', 'Anestésico local'],
    'Emulsão lipídica endovenosa': ['Intravenous lipid emulsion', 'Emulsión lipídica intravenosa'],
    'Anfetamina': ['Amphetamine', 'Anfetamina'],
    'Benzodiazepínicos: convulsão; Ciproeptadina: síndrome colinérgica': ['Benzodiazepines: seizures; Cyproheptadine: cholinergic syndrome', 'Benzodiacepinas: convulsiones; Ciproheptadina: síndrome colinérgico'],
    'Anticolinesterásicos': ['Anticholinesterases', 'Anticolinesterásicos'],
    'Cloreto de pralidoxima + atropina': ['Pralidoxime chloride + atropine', 'Cloruro de pralidoxima + atropina'],
    'Anticonvulsivantes': ['Anticonvulsants', 'Anticonvulsivos'],
    'Bicarbonato de sódio se arritmia ventricular de complexo amplo; Dantrolene; Hemodiálise; Ácido valproico: Carnitina, naloxone': ['Sodium bicarbonate if wide-complex ventricular arrhythmia; Dantrolene; Hemodialysis; Valproic acid: carnitine, naloxone', 'Bicarbonato de sodio si hay arritmia ventricular de complejo ancho; Dantroleno; Hemodiálisis; Ácido valproico: carnitina, naloxona'],
    'Antidepressivos tricíclicos com QRS largo': ['Tricyclic antidepressants with wide QRS', 'Antidepresivos tricíclicos con QRS ancho'],
    'Bicarbonato de sódio; Emulsão lipídica endovenosa.': ['Sodium bicarbonate; Intravenous lipid emulsion.', 'Bicarbonato de sodio; Emulsión lipídica intravenosa.'],
    'Aspirina com QRS largo': ['Aspirin with wide QRS', 'Aspirina con QRS ancho'],
    'Betabloqueador': ['Beta-blocker', 'Betabloqueante'],
    'Insulina + glucagon; Catecolaminas; Emulsão lipídica endovenosa; Inibidores da fosfodiesterase': ['Insulin + glucagon; Catecholamines; Intravenous lipid emulsion; Phosphodiesterase inhibitors', 'Insulina + glucagón; Catecolaminas; Emulsión lipídica intravenosa; Inhibidores de la fosfodiesterasa'],
    'Benzodiazepínicos': ['Benzodiazepines', 'Benzodiacepinas'],
    'Flumazenil *cuidado com precipitação de convulsão': ['Flumazenil *caution: may precipitate seizures', 'Flumazenil *precaución: puede precipitar convulsiones'],
    'Bloqueador de canal de cálcio': ['Calcium channel blocker', 'Bloqueante de los canales de calcio'],
    'Cálcio endovenoso; Insulina + glucagon; Catecolaminas; Atropina; Emulsão lipídica endovenosa; Marcapasso': ['Intravenous calcium; Insulin + glucagon; Catecholamines; Atropine; Intravenous lipid emulsion; Pacemaker', 'Calcio intravenoso; Insulina + glucagón; Catecolaminas; Atropina; Emulsión lipídica intravenosa; Marcapasos'],
    'Chumbo': ['Lead', 'Plomo'],
    'Ácido dimercaptosuccínico': ['Dimercaptosuccinic acid (succimer)', 'Ácido dimercaptosuccínico'],
    'Cianeto': ['Cyanide', 'Cianuro'],
    'Oxigênio a 100% e hidroxicobalamina': ['100% oxygen and hydroxocobalamin', 'Oxígeno al 100% e hidroxocobalamina'],
    'Cocaína': ['Cocaine', 'Cocaína'],
    'Benzodiazepínicos: convulsão; Alfa bloqueador, bloqueadores de canal de cálcio, nitroglicerina: hipertensão': ['Benzodiazepines: seizures; Alpha-blocker, calcium channel blockers, nitroglycerin: hypertension', 'Benzodiacepinas: convulsiones; Alfabloqueante, bloqueantes de los canales de calcio, nitroglicerina: hipertensión'],
    'Digoxina': ['Digoxin', 'Digoxina'],
    'Lidocaína se arritmia ventricular; Digoxina anticorpo Fab imune (Digibind)': ['Lidocaine if ventricular arrhythmia; Digoxin immune Fab (Digibind)', 'Lidocaína si hay arritmia ventricular; Fragmentos Fab antidigoxina (Digibind)'],
    'Etilenoglicol': ['Ethylene glycol', 'Etilenglicol'],
    'Etanol a 100% ou Fomepizole': ['100% ethanol or fomepizole', 'Etanol al 100% o fomepizol'],
    'Ferro': ['Iron', 'Hierro'],
    'Deferoxamina': ['Deferoxamine', 'Deferoxamina'],
    'Heparina': ['Heparin', 'Heparina'],
    'Sulfato de protamina': ['Protamine sulfate', 'Sulfato de protamina'],
    'Piridoxina': ['Pyridoxine', 'Piridoxina'],
    'Hipoglicemiantes orais': ['Oral hypoglycemic agents', 'Hipoglucemiantes orales'],
    'Octreotide': ['Octreotide', 'Octreotida'],
    'Inseticidas organofosforados': ['Organophosphate insecticides', 'Insecticidas organofosforados'],
    'Isoniazida': ['Isoniazid', 'Isoniazida'],
    'Mercúrio': ['Mercury', 'Mercurio'],
    'Metemoglobinemia adquirida': ['Acquired methemoglobinemia', 'Metahemoglobinemia adquirida'],
    'Azul de metileno +/- ácido ascórbico': ['Methylene blue +/- ascorbic acid', 'Azul de metileno +/- ácido ascórbico'],
    'Metais pesados': ['Heavy metals', 'Metales pesados'],
    'Quelantes: EDTA; Dimercaprol; Penicilamina; Ácido dimercaptosuccínico': ['Chelators: EDTA; Dimercaprol; Penicillamine; Dimercaptosuccinic acid', 'Quelantes: EDTA; Dimercaprol; Penicilamina; Ácido dimercaptosuccínico'],
    'Metanol': ['Methanol', 'Metanol'],
    'Metotrexato': ['Methotrexate', 'Metotrexato'],
    'Leucovorin': ['Leucovorin', 'Leucovorina'],
    'Monóxido de carbono': ['Carbon monoxide', 'Monóxido de carbono'],
    'Oxigênio a 100% ou terapia hiperbárica de oxigênio': ['100% oxygen or hyperbaric oxygen therapy', 'Oxígeno al 100% u oxigenoterapia hiperbárica'],
    'Neurolépticos': ['Neuroleptics', 'Neurolépticos'],
    'Bicarbonato de sódio se arritmia ventricular de complexo amplo. Dantrolene: síndrome maligna por neuroléptico. Evitar: Dopamina, Dobutamina e Adrenalina': ['Sodium bicarbonate if wide-complex ventricular arrhythmia. Dantrolene: neuroleptic malignant syndrome. Avoid: dopamine, dobutamine and epinephrine', 'Bicarbonato de sodio si hay arritmia ventricular de complejo ancho. Dantroleno: síndrome neuroléptico maligno. Evitar: dopamina, dobutamina y adrenalina'],
    'Opioides': ['Opioids', 'Opioides'],
    'Naloxone: pode ser repetido a cada 2 a 3 min': ['Naloxone: may be repeated every 2 to 3 min', 'Naloxona: puede repetirse cada 2 a 3 min'],
    'Paracetamol (acetaminofen)': ['Acetaminophen (paracetamol)', 'Paracetamol (acetaminofén)'],
    'N-Acetilcisteína': ['N-acetylcysteine', 'N-acetilcisteína'],
    'Pirimetamina': ['Pyrimethamine', 'Pirimetamina'],
    'Reações extrapiramidais associadas a antipsicóticos': ['Antipsychotic-associated extrapyramidal reactions', 'Reacciones extrapiramidales asociadas a antipsicóticos'],
    'Difenidramina e benztropina': ['Diphenhydramine and benztropine', 'Difenhidramina y benztropina'],
    'Síndrome anticolinérgica': ['Anticholinergic syndrome', 'Síndrome anticolinérgico'],
    'Sulfato de fisostigmina': ['Physostigmine sulfate', 'Sulfato de fisostigmina'],
    'Síndrome colinérgica': ['Cholinergic syndrome', 'Síndrome colinérgico'],
    'Drogas antimuscarínicas (p.e: atropina)': ['Antimuscarinic drugs (e.g., atropine)', 'Fármacos antimuscarínicos (p. ej.: atropina)'],
    'Síndrome serotoninérgica': ['Serotonin syndrome', 'Síndrome serotoninérgico'],
    'Ciproeptadina': ['Cyproheptadine', 'Ciproheptadina'],
    'Solventes orgânicos e hidrocarbonetos halogenados': ['Organic solvents and halogenated hydrocarbons', 'Solventes orgánicos e hidrocarburos halogenados'],
    'Beta bloqueadores: arritmias · Hepatotoxicidade: hepatotoxicidade': ['Beta-blockers: arrhythmias · Hepatotoxicity: hepatotoxicity', 'Betabloqueantes: arritmias · Hepatotoxicidad: hepatotoxicidad'],
    'Teofilina': ['Theophylline', 'Teofilina'],
    'Benzodiazepínicos para convulsão + cloreto de potássio': ['Benzodiazepines for seizures + potassium chloride', 'Benzodiacepinas para convulsiones + cloruro de potasio'],
    'Toxinas orais (várias)': ['Oral toxins (various)', 'Toxinas orales (varias)'],
    'Carvão ativado com sorbitol': ['Activated charcoal with sorbitol', 'Carbón activado con sorbitol'],
    'Trimetoprim': ['Trimethoprim', 'Trimetoprima'],
    'Warfarin': ['Warfarin', 'Warfarina'],
    'Vitamina K': ['Vitamin K', 'Vitamina K'],
    'Sugammadex': ['Sugammadex', 'Sugammadex'],

    // Referências, advertência e rodapé
    'Referências da aplicação': ['Application references', 'Referencias de la aplicación'],
    'Esta aplicação foi estruturada a partir do card de urgência e emergência e do material do evento Emergências Pediátricas 2026.': [
      'This application was built from the urgent and emergency care reference card and the materials of the Emergências Pediátricas 2026 event.',
      'Esta aplicación se estructuró a partir de la tarjeta de urgencias y emergencias y del material del evento Emergências Pediátricas 2026.'
    ],
    'Advertência': ['Warning', 'Advertencia'],
    'As dosagens dos medicamentos descritas no apêndice foram baseadas na literatura disponível no momento em que foi escrito. Para medicações com início de uso recente na Pediatria, ajustes e/ou modificações nas doses podem ser necessários. Para maior segurança, o prescritor deve sempre decidir a dose após cuidadosa avaliação do paciente.': [
      'The drug dosages described in the appendix were based on the literature available at the time of writing. For medications only recently introduced in pediatrics, dose adjustments and/or modifications may be necessary. For greater safety, the prescriber must always decide the dose after careful assessment of the patient.',
      'Las dosis de los medicamentos descritas en el apéndice se basaron en la literatura disponible en el momento de su redacción. Para medicamentos de uso reciente en pediatría, pueden ser necesarios ajustes y/o modificaciones de las dosis. Para mayor seguridad, el prescriptor debe decidir siempre la dosis tras una evaluación cuidadosa del paciente.'
    ],
    'Uso educacional. Não substitui prescrição, bulário institucional nem prontuário oficial.': [
      'Educational use. Does not replace a prescription, the institutional drug formulary or the official medical record.',
      'Uso educativo. No sustituye la prescripción, el vademécum institucional ni la historia clínica oficial.'
    ],

    // Modal "Como usar"
    'Como usar': ['How to use', 'Cómo usar'],
    'Como usar — Emergência Pediátrica': ['How to use — Pediatric Emergency', 'Cómo usar — Emergencia pediátrica'],
    'Fluxo geral': ['General workflow', 'Flujo general'],
    'Preencha': ['Fill in', 'Complete'],
    'paciente': ['patient', 'paciente'],
    'peso (kg)': ['weight (kg)', 'peso (kg)'],
    'faixa etária': ['age group', 'grupo etario'],
    'do resumo e, quando necessário,': ['for the summary and, when needed,', 'del resumen y, cuando sea necesario,'],
    'idade em anos': ['age in years', 'edad en años'],
    'Em': ['In', 'En'],
    'escolha o módulo: calculadora rápida, drogas de emergência, infusão contínua, sinais vitais e Glasgow, equipamentos ou toxíndromes/antídotos': [
      'choose the module: quick calculator, emergency drugs, continuous infusion, vital signs and Glasgow, equipment, or toxidromes/antidotes',
      'elija el módulo: calculadora rápida, fármacos de emergencia, infusión continua, signos vitales y Glasgow, equipos o toxíndromes/antídotos'
    ],
    'No modo calculadora, selecione a': ['In calculator mode, select the', 'En el modo calculadora, seleccione el'],
    'droga': ['drug', 'fármaco'],
    'na lista; o resultado atualiza conforme o peso e a faixa': ['from the list; the result updates according to the weight and range', 'de la lista; el resultado se actualiza según el peso y el rango'],
    'Copiar trecho': ['Copy excerpt', 'Copiar fragmento'],
    'cola só o bloco do cálculo rápido, com aviso educativo': ['copies only the quick-calculation block, with an educational notice', 'copia solo el bloque del cálculo rápido, con aviso educativo'],
    'Baixar texto .txt': ['Download .txt file', 'Descargar texto .txt'],
    'gera arquivo para revisão — confira antes de arquivar em qualquer sistema': ['generates a file for review — check it before filing it in any system', 'genera un archivo para revisión — verifíquelo antes de archivarlo en cualquier sistema'],
    'e': ['and', 'y'],
    'ajudam a testar ou reiniciar o formulário': ['help you test or reset the form', 'ayudan a probar o reiniciar el formulario'],
    'Módulos': ['Modules', 'Módulos'],
    'Drogas da emergência / infusão:': ['Emergency / infusion drugs:', 'Fármacos de emergencia / infusión:'],
    'fichas com dose, máximo e notas do card de referência.': ['cards with dose, maximum and notes from the reference card.', 'fichas con dosis, máximo y notas de la tarjeta de referencia.'],
    'Sinais vitais e Glasgow:': ['Vital signs and Glasgow:', 'Signos vitales y Glasgow:'],
    'tabelas e seletores para escore.': ['tables and selectors for scoring.', 'tablas y selectores para la puntuación.'],
    'Equipamentos:': ['Equipment:', 'Equipos:'],
    'referência por faixa de peso (inspirado em fita tipo Broselow).': ['reference by weight range (inspired by a Broselow-type tape).', 'referencia por rango de peso (inspirada en una cinta tipo Broselow).'],
    'Toxíndromes:': ['Toxidromes:', 'Toxíndromes:'],
    'resumo e antídotos; há contato da CIATox na própria tela.': ['summary and antidotes; the CIATox contact is shown on the screen itself.', 'resumen y antídotos; el contacto del CIATox figura en la propia pantalla.'],
    'As doses seguem o material de referência do evento/card; o profissional deve sempre confirmar dose, via, interações e contraindicações no paciente real. Arquivos exportados ou copiados': [
      'Doses follow the event/card reference material; the clinician must always confirm dose, route, interactions and contraindications in the actual patient. Exported or copied files',
      'Las dosis siguen el material de referencia del evento/tarjeta; el profesional debe confirmar siempre dosis, vía, interacciones y contraindicaciones en el paciente real. Los archivos exportados o copiados'
    ],
    'não são documento oficial': ['are not an official document', 'no son un documento oficial'],
    'de prescrição.': ['for prescribing.', 'de prescripción.']
  });

  // ===== Equipamentos (tabela e bloco "Faixa de peso selecionada")
  var ROW = {
    'Bolsa-valva de ressuscitação': ['Resuscitation bag (bag-valve)', 'Bolsa-válvula de reanimación'],
    'Máscara de O2': ['O2 mask', 'Mascarilla de O2'],
    'Cânula oro-faríngea': ['Oropharyngeal airway', 'Cánula orofaríngea'],
    'Lâmina de laringoscópio': ['Laryngoscope blade', 'Hoja de laringoscopio'],
    'Cânula traqueal (mm)': ['Endotracheal tube (mm)', 'Tubo endotraqueal (mm)'],
    'Comprimento da cânula traqueal (cm do lábio)': ['Endotracheal tube insertion depth (cm at the lip)', 'Profundidad de inserción del tubo endotraqueal (cm en el labio)'],
    'Fio guia (F)': ['Stylet (F)', 'Estilete (F)'],
    'Sonda de aspiração (F)': ['Suction catheter (F)', 'Sonda de aspiración (F)'],
    'Manguito de PA': ['BP cuff', 'Manguito de PA'],
    'Catéter EV (ga)': ['IV catheter (ga)', 'Catéter IV (ga)'],
    'Intra-óssea (ga)': ['Intraosseous (ga)', 'Intraósea (ga)'],
    'Sonda nasogástrica (F)': ['Nasogastric tube (F)', 'Sonda nasogástrica (F)'],
    'Sonda urinária (F)': ['Urinary catheter (F)', 'Sonda urinaria (F)'],
    'Pás de desfibrilação/cardioversão': ['Defibrillation/cardioversion paddles', 'Palas de desfibrilación/cardioversión'],
    'Dreno torácico (F)': ['Chest tube (F)', 'Tubo de tórax (F)'],
    'Máscara laríngea': ['Laryngeal mask airway', 'Mascarilla laríngea']
  };
  // Células com texto (tabela e bloco) e, só no bloco, números com vírgula decimal (inglês com ponto).
  var CELL_TEXT = {
    'Lactente': ['Infant', 'Lactante'],
    'Lactente/criança': ['Infant/child', 'Lactante/niño'],
    'Criança': ['Child', 'Niño'],
    'Criança/adulto': ['Child/adult', 'Niño/adulto'],
    'Adulto': ['Adult', 'Adulto'],
    'Neonatal': ['Neonatal', 'Neonatal'],
    'Pediátrica': ['Pediatric', 'Pediátrica'],
    '3 ou +': ['3 or larger', '3 o mayor'],
    'Reta 0-1': ['Straight 0-1', 'Recta 0-1'],
    'Reta 1': ['Straight 1', 'Recta 1'],
    'Reta 2': ['Straight 2', 'Recta 2'],
    'Reta 2 ou curva': ['Straight 2 or curved', 'Recta 2 o curva'],
    'Reta 2-3 ou curva': ['Straight 2-3 or curved', 'Recta 2-3 o curva'],
    'Reta 3 ou curva': ['Straight 3 or curved', 'Recta 3 o curva'],
    'Prematuro 2,5 / Termo 3,0-3,5 sem cuff': ['Preterm 2.5 / Term 3.0-3.5 uncuffed', 'Prematuro 2,5 / A término 3,0-3,5 sin balón'],
    '3,5 sem cuff / 3,0 com cuff': ['3.5 uncuffed / 3.0 cuffed', '3,5 sin balón / 3,0 con balón'],
    '4,0 sem cuff / 3,5 com cuff': ['4.0 uncuffed / 3.5 cuffed', '4,0 sin balón / 3,5 con balón'],
    '4,5 sem cuff / 4,0 com cuff': ['4.5 uncuffed / 4.0 cuffed', '4,5 sin balón / 4,0 con balón'],
    '5,0 sem cuff / 4,5 com cuff': ['5.0 uncuffed / 4.5 cuffed', '5,0 sin balón / 4,5 con balón'],
    '5,5 sem cuff / 5,0 com cuff': ['5.5 uncuffed / 5.0 cuffed', '5,5 sin balón / 5,0 con balón'],
    '6,0 com cuff': ['6.0 cuffed', '6,0 con balón'],
    '6,5 com cuff': ['6.5 cuffed', '6,5 con balón'],
    '3kg: 9-9,5 / 4kg: 9,5-10 / 5kg:10-10,5': ['3kg: 9-9.5 / 4kg: 9.5-10 / 5kg:10-10.5', '3kg: 9-9,5 / 4kg: 9,5-10 / 5kg:10-10,5'],
    'Neonato/lactente': ['Neonate/infant', 'Neonato/lactante'],
    'Pequeno adulto': ['Small adult', 'Adulto pequeño'],
    'Pás de lactente <1 ano': ['Infant paddles <1 year', 'Palas de lactante <1 año'],
    'Pás de lactente <1 ano ou 10kg': ['Infant paddles <1 year or 10kg', 'Palas de lactante <1 año o 10kg'],
    'Pás de adulto quando ≥1 ano ou ≥10 kg': ['Adult paddles when ≥1 year or ≥10 kg', 'Palas de adulto cuando ≥1 año o ≥10 kg'],
    'Pás de adulto': ['Adult paddles', 'Palas de adulto']
  };
  var CELL_NUMBER_EN = {
    '10,5-11': '10.5-11', '12,5-13,5': '12.5-13.5', '15,5-16,5': '15.5-16.5', '18,5-19,5': '18.5-19.5',
    '1-1,5': '1-1.5', '1,5': '1.5', '2-2,5': '2-2.5', '2,5': '2.5'
  };
  i18n.register(ROW);
  i18n.register(CELL_TEXT);

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function cell(value, i) {
    if (CELL_TEXT[value]) return CELL_TEXT[value][i];
    if (i === 0 && CELL_NUMBER_EN[value]) return CELL_NUMBER_EN[value];
    return value;
  }
  var ROW_ALT = Object.keys(ROW).map(escapeRe).join('|');
  var ROW_SPLIT = new RegExp(' (?=(?:' + ROW_ALT + '): )');
  var ROW_LINE = new RegExp('^(' + ROW_ALT + '): (.*)$');

  // O bloco inteiro é traduzido de uma vez (a página o grava com quebras de linha; o núcleo o recebe normalizado).
  function equipmentBlock(i) {
    var lang = i === 0 ? 'en' : 'es';
    return function (m, range, rest) {
      var lines = rest.split(ROW_SPLIT).map(function (line) {
        var p = line.match(ROW_LINE);
        return p ? ROW[p[1]][i] + ': ' + cell(p[2], i) : i18n.t(line, lang);
      });
      return (i === 0 ? 'Selected weight range: ' : 'Rango de peso seleccionado: ') + i18n.t(range, lang) + '\n\n' + lines.join('\n');
    };
  }

  // ===== Glasgow (bloco de 2 linhas)
  var GCS_INTERP = { 'Leve': ['Mild', 'Leve'], 'Moderado': ['Moderate', 'Moderado'], 'Grave': ['Severe', 'Grave'] };

  // ===== Resumo de FC/FR (valores do card; "ipm" = incursões por minuto)
  function vitalsValue(value, lang) { return /[A-Za-zÀ-ú]/.test(value) ? i18n.t(value, lang) : value; }

  i18n.registerPatterns([
    [new RegExp('^Faixa de peso selecionada: (.+?) ((?:' + escapeRe('Bolsa-valva de ressuscitação') + '): .*)$'), equipmentBlock(0), equipmentBlock(1)],
    [/^Glasgow total: (\d+) Interpretação prática: (Leve|Moderado|Grave)\.$/,
      function (m, total, interp) { return 'Glasgow total: ' + total + '\nPractical interpretation: ' + GCS_INTERP[interp][0] + '.'; },
      function (m, total, interp) { return 'Glasgow total: ' + total + '\nInterpretación práctica: ' + GCS_INTERP[interp][1] + '.'; }],
    [/^(.+) bpm acordado \/ (.+) bpm dormindo$/,
      function (m, a, s) { return vitalsValue(a, 'en') + ' bpm awake / ' + vitalsValue(s, 'en') + ' bpm asleep'; },
      function (m, a, s) { return vitalsValue(a, 'es') + ' lpm despierto / ' + vitalsValue(s, 'es') + ' lpm dormido'; }],
    [/^(.+) ipm$/,
      function (m, v) { return vitalsValue(v, 'en') + ' breaths/min'; },
      function (m, v) { return vitalsValue(v, 'es') + ' rpm'; }]
  ]);
})(window.NEOPED_I18N);
