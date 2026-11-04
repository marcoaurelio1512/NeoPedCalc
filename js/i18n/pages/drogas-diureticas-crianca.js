/* Drogas diuréticas — criança (files/drogas_diureticas_crianca.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  // O texto copiado usa a chave interna da droga e remove acentos das observações (removerAcentos).
  function plain(text) { return text.normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  // [chave interna, nome exibido, inglês, espanhol]
  var DRUGS = [
    ['bumetanide_ev', 'Bumetanide (E.V.)', 'Bumetanide (IV)', 'Bumetanida (IV)'],
    ['bumetanide_vo', 'Bumetanide (V.O.)', 'Bumetanide (PO)', 'Bumetanida (VO)'],
    ['hidroclortiazida_edema_vo', 'Hidroclortiazida (edema) - V.O.', 'Hydrochlorothiazide (edema) - PO', 'Hidroclorotiazida (edema) - VO'],
    ['hidroclortiazida_hipertensao_vo', 'Hidroclortiazida (hipertensão) - V.O.', 'Hydrochlorothiazide (hypertension) - PO', 'Hidroclorotiazida (hipertensión) - VO'],
    ['furosemide_ev', 'Furosemide (E.V.)', 'Furosemide (IV)', 'Furosemida (IV)'],
    ['furosemide_vo', 'Furosemide (V.O.)', 'Furosemide (PO)', 'Furosemida (VO)'],
    ['furosemide_continuo_ev', 'Furosemide contínuo (E.V.)', 'Continuous furosemide (IV)', 'Furosemida continua (IV)'],
    ['acetazolamida_vo', 'Acetazolamida (V.O.)', 'Acetazolamide (PO)', 'Acetazolamida (VO)'],
    ['espironolactone_vo', 'Espironolactone (V.O.)', 'Spironolactone (PO)', 'Espironolactona (VO)']
  ];
  var drugEntries = {};
  DRUGS.forEach(function (d) {
    drugEntries[d[0]] = [d[2], d[3]];
    drugEntries[d[1]] = [d[2], d[3]];
  });
  i18n.register(drugEntries);

  var NOTES = {
    'MAX. 10mg/dia. Ampola 0,25mg/ml': ['MAX 10mg/day. Ampule 0.25mg/ml', 'MÁX. 10mg/día. Ampolla 0,25mg/ml'],
    'MAX. 10mg/dia. CP 0,5mg, 1mg e 2 mg': ['MAX 10mg/day. Tablets 0.5mg, 1mg and 2 mg', 'MÁX. 10mg/día. Comp. 0,5mg, 1mg y 2 mg'],
    'CP de 12,5mg, 25mg, 50mg': ['Tablets of 12.5mg, 25mg, 50mg', 'Comp. de 12,5mg, 25mg, 50mg'],
    'Ampola 10mg/ml': ['Ampule 10mg/ml', 'Ampolla 10mg/ml'],
    'CP de 20mg, 40mg, 80mg Sol oral 40mg/5ml': ['Tablets of 20mg, 40mg, 80mg; oral solution 40mg/5ml', 'Comp. de 20mg, 40mg, 80mg; sol. oral 40mg/5ml'],
    'Pode ser usada em ICC crônica': ['May be used in chronic CHF', 'Puede usarse en la ICC crónica'],
    'CP 25mg, 50mg, 100mg. MAX 100mg/dia': ['Tablets 25mg, 50mg, 100mg. MAX 100mg/day', 'Comp. 25mg, 50mg, 100mg. MÁX. 100mg/día'],
    'Informações não disponíveis': ['Information not available', 'Información no disponible']
  };
  var noteEntries = {};
  Object.keys(NOTES).forEach(function (pt) {
    noteEntries[pt] = NOTES[pt];
    noteEntries[plain(pt)] = NOTES[pt];
  });
  i18n.register(noteEntries);

  i18n.register({
    // Cabeçalho e formulário
    'NeoPedCalc — Drogas diuréticas pediátricas (educativo)': ['NeoPedCalc — Pediatric Diuretics (educational)', 'NeoPedCalc — Diuréticos pediátricos (educativo)'],
    'NeoPedCalc — Drogas diuréticas (educativo)': ['NeoPedCalc — Diuretics (educational)', 'NeoPedCalc — Diuréticos (educativo)'],
    'Drogas diuréticas (criança)': ['Diuretics (children)', 'Diuréticos (niños)'],
    'Ferramenta educativa — cálculos a partir de referências embutidas;': ['Educational tool — calculations based on built-in references;', 'Herramienta educativa — cálculos basados en referencias incorporadas;'],
    'não prescreve': ['does not prescribe', 'no prescribe'],
    '. Diuréticos exigem vigilância de volume e eletrólitos — confirme com bulário e equipe.': ['. Diuretics require monitoring of volume status and electrolytes — confirm with the formulary and the team.', '. Los diuréticos exigen vigilancia del volumen y de los electrolitos — confirme con el prospecto y el equipo.'],
    'Como usar': ['How to use', 'Cómo usar'],
    'Nome do Paciente:': ['Patient Name:', 'Nombre del paciente:'],
    'Nome da crianca': ["Child's name", 'Nombre del niño'],
    'Data de Nascimento:': ['Date of Birth:', 'Fecha de nacimiento:'],
    'Peso (kg):': ['Weight (kg):', 'Peso (kg):'],
    'Ex: 15.500': ['e.g., 15.500', 'Ej.: 15.500'],
    'Idade Calculada:': ['Calculated Age:', 'Edad calculada:'],
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
    'Apresentação:': ['Formulation:', 'Presentación:'],
    'Ex: 40mg/5ml': ['e.g., 40mg/5ml', 'Ej.: 40mg/5ml'],
    'Intervalo entre Doses:': ['Dosing Interval:', 'Intervalo entre dosis:'],
    'horas': ['hours', 'horas'],
    'Contínuo': ['Continuous', 'Continuo'],
    'Observações:': ['Notes:', 'Observaciones:'],
    'Informações adicionais': ['Additional information', 'Información adicional'],
    'Acrescentar cálculo ao texto': ['Add calculation to text', 'Añadir cálculo al texto'],

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
    'Como usar — drogas diuréticas pediátricas (educativo)': ['How to use — pediatric diuretics (educational)', 'Cómo usar — diuréticos pediátricos (educativo)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Calcular': ['Calculate', 'Calcular'],
    'valores numéricos': ['numerical values', 'valores numéricos'],
    '(dose, volume, taxa de infusão quando aplicável) a partir do peso e dos parâmetros que você informa. Uso': ['(dose, volume, infusion rate when applicable) from the weight and the parameters you enter. For', '(dosis, volumen, velocidad de infusión cuando corresponda) a partir del peso y de los parámetros que usted ingresa. Uso'],
    'educativo e de conferência': ['educational and double-checking use', 'educativo y de verificación'],
    '—': ['—', '—'],
    'nem substitui acompanhamento de balanço hídrico, eletrólitos ou função renal na assistência real.': ['nor does it replace monitoring of fluid balance, electrolytes or renal function in real care.', 'ni sustituye el seguimiento del balance hídrico, los electrolitos o la función renal en la atención real.'],
    'Ideia dos cálculos (resumo)': ['How the calculations work (summary)', 'Idea de los cálculos (resumen)'],
    'Em geral: dose por peso e unidade escolhida → totais → volume a partir da': ['In general: weight-based dose and chosen unit → totals → volume from the', 'En general: dosis por peso y unidad elegida → totales → volumen a partir de la'],
    'apresentação': ['formulation', 'presentación'],
    '; em infusão contínua, ml/h dependem de volume e tempo.': ['; for continuous infusion, ml/h depends on volume and time.', '; en infusión continua, los ml/h dependen del volumen y del tiempo.'],
    'Diuréticos têm perfis e riscos distintos (alça, tiazídico, poupador de K, osmótico, etc.). A conduta e a titulação cabem ao prescritor e ao protocolo local.': [
      'Diuretics have different profiles and risks (loop, thiazide, potassium-sparing, osmotic, etc.). Management and titration are the responsibility of the prescriber and the local protocol.',
      'Los diuréticos tienen perfiles y riesgos distintos (de asa, tiazídico, ahorrador de K, osmótico, etc.). La conducta y la titulación corresponden al prescriptor y al protocolo local.'
    ],
    'Como usar na tela': ['Using the screen', 'Cómo usar la pantalla'],
    'Preencha identificação (opcional), data de nascimento e peso.': ['Fill in identification (optional), date of birth and weight.', 'Complete la identificación (opcional), la fecha de nacimiento y el peso.'],
    'Selecione a droga e ajuste dose, apresentação e intervalo.': ['Select the drug and adjust the dose, formulation and interval.', 'Seleccione el fármaco y ajuste la dosis, la presentación y el intervalo.'],
    'Use': ['Use', 'Use'],
    'para o histórico.': ['to add it to the history.', 'para el historial.'],
    'e revise antes de arquivar ou compartilhar.': ['and review before filing or sharing.', 'y revise antes de archivar o compartir.'],
    'Classes na lista (visão geral)': ['Classes on the list (overview)', 'Clases de la lista (visión general)'],
    'Diuréticos de alça, tiazídicos, poupadores de potássio, inibidor de anidrase carbônica, osmóticos — conforme entradas da base de dados do app.': [
      'Loop diuretics, thiazides, potassium-sparing diuretics, carbonic anhydrase inhibitor, osmotic diuretics — according to the entries in the app database.',
      'Diuréticos de asa, tiazídicos, ahorradores de potasio, inhibidor de la anhidrasa carbónica, osmóticos — según las entradas de la base de datos de la app.'
    ],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Não incorpora todos os cenários de disfunção renal/hepática nem interações.': ['It does not include every renal/hepatic dysfunction scenario or interaction.', 'No incorpora todos los escenarios de disfunción renal/hepática ni las interacciones.'],
    'Números dependem da exatidão do peso e da formulação digitada.': ['Numbers depend on the accuracy of the weight and of the formulation entered.', 'Los números dependen de la exactitud del peso y de la formulación ingresada.'],
    'Vigilância clínica e laboratorial na assistência: responsabilidade da equipe.': ['Clinical and laboratory monitoring in patient care: the responsibility of the team.', 'Vigilancia clínica y de laboratorio en la atención: responsabilidad del equipo.'],
    'Referências:': ['References:', 'Referencias:'],

    // Alertas
    'Nenhum calculo no historico. Use "Acrescentar calculo ao texto" pelo menos uma vez antes de copiar.': [
      'No calculations in the history. Use "Add calculation to text" at least once before copying.',
      'No hay cálculos en el historial. Use "Añadir cálculo al texto" al menos una vez antes de copiar.'
    ],

    // Texto copiado
    'RESUMO INFORMATIVO — Drogas diureticas pediatricas (NeoPedCalc, uso educativo)': ['INFORMATIONAL SUMMARY — Pediatric diuretics (NeoPedCalc, educational use)', 'RESUMEN INFORMATIVO — Diuréticos pediátricos (NeoPedCalc, uso educativo)'],
    'DADOS INFORMADOS (primeiro registro do historico)': ['DATA ENTERED (first history record)', 'DATOS INGRESADOS (primer registro del historial)'],
    'Data/Hora': ['Date/Time', 'Fecha/Hora'],
    'Nome': ['Name', 'Nombre'],
    'Paciente': ['Patient', 'Paciente'],
    'Data de Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Peso': ['Weight', 'Peso'],
    'Idade': ['Age (years)', 'Edad (años)'],
    'HISTORICO DE CALCULOS (revisar)': ['CALCULATION HISTORY (review)', 'HISTORIAL DE CÁLCULOS (revisar)'],
    'Calculo': ['Calculation', 'Cálculo'],
    'Droga': ['Drug', 'Fármaco'],
    'Dosagem': ['Dose', 'Dosis'],
    'Dose por aplicacao': ['Dose per administration', 'Dosis por administración'],
    'Dose total (24h)': ['Total dose (24h)', 'Dosis total (24h)'],
    'Volume da droga': ['Drug volume', 'Volumen del fármaco'],
    'Apresentacao': ['Formulation', 'Presentación'],
    'CP': ['Tab', 'Comp.'],
    'Velocidade de infusao': ['Infusion rate', 'Velocidad de infusión'],
    'Intervalo': ['Interval', 'Intervalo'],
    'continuo horas': ['continuous', 'continuo'],
    'Observacoes (campo do app)': ['Notes (app field)', 'Observaciones (campo de la app)'],
    'DETALHES': ['DETAILS', 'DETALLES'],
    'Total de entradas no historico': ['Total history entries', 'Total de entradas en el historial'],
    'LEMBRETES EDUCATIVOS': ['EDUCATIONAL REMINDERS', 'RECORDATORIOS EDUCATIVOS'],
    '- Diureticos: atencao a volume, PA, Na, K, Mg e funcao renal na pratica clinica.': ['- Diuretics: watch volume status, BP, Na, K, Mg and renal function in clinical practice.', '- Diuréticos: atención al volumen, PA, Na, K, Mg y función renal en la práctica clínica.'],
    '- Conferir apresentacao e limites maximos com monografia institucional.': ['- Check the formulation and maximum limits against the institutional monograph.', '- Verificar la presentación y los límites máximos con la monografía institucional.'],
    'Diureticos: atencao a volume, PA, Na, K, Mg e funcao renal na pratica clinica.': [
      'Diuretics: watch volume status, BP, Na, K, Mg and renal function in clinical practice.',
      'Diuréticos: atención al volumen, PA, Na, K, Mg y función renal en la práctica clínica.'
    ],
    'Conferir apresentacao e limites maximos com monografia institucional.': ['Check the formulation and maximum limits against the institutional monograph.', 'Verificar la presentación y los límites máximos con la monografía institucional.'],
    'NOTA EDUCATIVA: Revise todos os valores. A NeoPedCalc nao substitui julgamento clinico nem protocolos institucionais.': [
      'EDUCATIONAL NOTE: Review all values. NeoPedCalc does not replace clinical judgment or institutional protocols.',
      'NOTA EDUCATIVA: Revise todos los valores. NeoPedCalc no sustituye el juicio clínico ni los protocolos institucionales.'
    ]
  });

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
