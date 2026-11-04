/* Drogas neurológicas pediátricas (files/drogas_neurologicas_crianca.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;
  var D = {
    // Cabeçalho
    'NeoPedCalc — Drogas neurológicas pediátricas (educativo)': ['NeoPedCalc — Pediatric neurological drugs (educational)', 'NeoPedCalc — Fármacos neurológicos pediátricos (educativo)'],
    'Drogas neurológicas (criança)': ['Neurological drugs (child)', 'Fármacos neurológicos (niño)'],
    'Ferramenta educativa — cálculos a partir de referências embutidas;': ['Educational tool — calculations based on built-in references;', 'Herramienta educativa — cálculos a partir de referencias integradas;'],
    'não prescreve': ['does not prescribe', 'no prescribe'],
    'Confirme dose, via, diluição e bulário antes de qualquer uso clínico.': ['Confirm dose, route, dilution and drug label before any clinical use.', 'Confirme dosis, vía, dilución y prospecto antes de cualquier uso clínico.'],
    'Como usar': ['How to use', 'Cómo usar'],

    // Formulário
    'Nome do Paciente:': ['Patient Name:', 'Nombre del paciente:'],
    'Nome da crianca': ['Child\'s name', 'Nombre del niño'],
    'Data de Nascimento:': ['Date of Birth:', 'Fecha de nacimiento:'],
    'Peso (kg):': ['Weight (kg):', 'Peso (kg):'],
    'Ex: 15.500': ['e.g., 15.500', 'Ej.: 15.500'],
    'Idade Calculada:': ['Calculated Age:', 'Edad calculada:'],
    'Configuracao da Droga': ['Drug Settings', 'Configuración del fármaco'],
    'Selecione a Droga:': ['Select Drug:', 'Seleccione el fármaco:'],
    'Selecione uma droga...': ['Select a drug...', 'Seleccione un fármaco...'],
    'Dose (mg):': ['Dose (mg):', 'Dosis (mg):'],
    'Ex: 0.5': ['e.g., 0.5', 'Ej.: 0.5'],
    'Unidade da Dose:': ['Dose Unit:', 'Unidad de dosis:'],
    'mg/kg/dose': ['mg/kg/dose', 'mg/kg/dosis'],
    'mg/kg/dia': ['mg/kg/day', 'mg/kg/día'],
    'mg/kg/hora': ['mg/kg/hour', 'mg/kg/hora'],
    'mg/dose': ['mg/dose', 'mg/dosis'],
    'mg/dia': ['mg/day', 'mg/día'],
    'Apresentação:': ['Formulation:', 'Presentación:'],
    'Ex: 40mg/5ml': ['e.g., 40mg/5ml', 'Ej.: 40mg/5ml'],
    'Intervalo entre Doses:': ['Dosing Interval:', 'Intervalo entre dosis:'],
    '6 horas': ['6 hours', '6 horas'],
    '8 horas': ['8 hours', '8 horas'],
    '12 horas': ['12 hours', '12 horas'],
    '24 horas': ['24 hours', '24 horas'],
    'horas': ['hours', 'horas'],
    'Contínuo': ['Continuous', 'Continuo'],
    'Observações:': ['Notes:', 'Observaciones:'],
    'Informações adicionais': ['Additional information', 'Información adicional'],
    'Acrescentar cálculo ao texto': ['Add calculation to text', 'Agregar cálculo al texto'],

    // Resultados
    'Resultados do Calculo': ['Calculation Results', 'Resultados del cálculo'],
    'Nome da Droga': ['Drug Name', 'Nombre del fármaco'],
    'Dosagem Calculada': ['Calculated Dosage', 'Dosificación calculada'],
    'Dose Total (24h)': ['Total Dose (24h)', 'Dosis total (24 h)'],
    'Volume da Droga (ml)': ['Drug Volume (ml)', 'Volumen del fármaco (ml)'],
    'Velocidade de Infusão': ['Infusion Rate', 'Velocidad de infusión'],
    'Dose por Aplicacao': ['Dose per Administration', 'Dosis por administración'],
    'Informações da Droga': ['Drug Information', 'Información del fármaco'],
    'Informações não disponíveis': ['Information not available', 'Información no disponible'],
    'Copiar texto informativo (histórico)': ['Copy informational text (history)', 'Copiar texto informativo (historial)'],

    // Nomes das drogas (lista)
    'Fenobarbital (E.V.)': ['Phenobarbital (IV)', 'Fenobarbital (IV)'],
    'Fenobarbital (V.O.)': ['Phenobarbital (PO)', 'Fenobarbital (VO)'],
    'Fenitoína (E.V.)': ['Phenytoin (IV)', 'Fenitoína (IV)'],
    'Fenitoína (V.O.)': ['Phenytoin (PO)', 'Fenitoína (VO)'],
    'Carbamazepina (V.O.)': ['Carbamazepine (PO)', 'Carbamazepina (VO)'],
    'Valproato de Sódio (E.V.)': ['Sodium Valproate (IV)', 'Valproato sódico (IV)'],
    'Valproato de Sódio (V.O.)': ['Sodium Valproate (PO)', 'Valproato sódico (VO)'],
    'Levetiracetam (E.V.)': ['Levetiracetam (IV)', 'Levetiracetam (IV)'],
    'Levetiracetam (V.O.)': ['Levetiracetam (PO)', 'Levetiracetam (VO)'],
    'Midazolam (E.V.)': ['Midazolam (IV)', 'Midazolam (IV)'],
    'Midazolam (Contínuo)': ['Midazolam (Continuous infusion)', 'Midazolam (Infusión continua)'],
    'Diazepam (E.V.)': ['Diazepam (IV)', 'Diazepam (IV)'],
    'Lorazepam (E.V.)': ['Lorazepam (IV)', 'Lorazepam (IV)'],
    'Clonazepam (V.O.)': ['Clonazepam (PO)', 'Clonazepam (VO)'],
    'Haloperidol (E.V.)': ['Haloperidol (IV)', 'Haloperidol (IV)'],
    'Haloperidol (V.O.)': ['Haloperidol (PO)', 'Haloperidol (VO)'],
    'Risperidona (V.O.)': ['Risperidone (PO)', 'Risperidona (VO)'],
    'Metilfenidato (V.O.)': ['Methylphenidate (PO)', 'Metilfenidato (VO)'],

    // Apresentações (relatório: "Apresentacao: CP 100 mg")
    'CP': ['Tab', 'Comp.'],

    // Observações de cada droga (painel "Informações da Droga" e relatório)
    'Ampola 200mg/2ml. MAX. 20mg/kg/dia': ['Ampule 200mg/2ml. MAX. 20mg/kg/day', 'Ampolla 200mg/2ml. MÁX. 20mg/kg/día'],
    'Gardenal 4% 40mg/ml/40gotas. 1 gota = 1mg. MAX. 20mg/kg/dia': ['Gardenal 4% 40mg/ml/40 drops. 1 drop = 1mg. MAX. 20mg/kg/day', 'Gardenal 4% 40mg/ml/40 gotas. 1 gota = 1mg. MÁX. 20mg/kg/día'],
    'Ampola 250mg/5ml. MAX. 20mg/kg/dia': ['Ampule 250mg/5ml. MAX. 20mg/kg/day', 'Ampolla 250mg/5ml. MÁX. 20mg/kg/día'],
    'CP 100mg. MAX. 8mg/kg/dia': ['Tab 100mg. MAX. 8mg/kg/day', 'Comp. 100mg. MÁX. 8mg/kg/día'],
    'CP 200mg. MAX. 20mg/kg/dia': ['Tab 200mg. MAX. 20mg/kg/day', 'Comp. 200mg. MÁX. 20mg/kg/día'],
    'Ampola 400mg/4ml. MAX. 60mg/kg/dia': ['Ampule 400mg/4ml. MAX. 60mg/kg/day', 'Ampolla 400mg/4ml. MÁX. 60mg/kg/día'],
    'CP 200mg. MAX. 60mg/kg/dia': ['Tab 200mg. MAX. 60mg/kg/day', 'Comp. 200mg. MÁX. 60mg/kg/día'],
    'Ampola 500mg/5ml. MAX. 60mg/kg/dia': ['Ampule 500mg/5ml. MAX. 60mg/kg/day', 'Ampolla 500mg/5ml. MÁX. 60mg/kg/día'],
    'CP 250mg. MAX. 60mg/kg/dia': ['Tab 250mg. MAX. 60mg/kg/day', 'Comp. 250mg. MÁX. 60mg/kg/día'],
    'Ampola 5mg/ml. MAX. 0.5mg/kg/dia': ['Ampule 5mg/ml. MAX. 0.5mg/kg/day', 'Ampolla 5mg/ml. MÁX. 0.5mg/kg/día'],
    'Ampola 5mg/ml. MAX. 2.4mg/kg/dia': ['Ampule 5mg/ml. MAX. 2.4mg/kg/day', 'Ampolla 5mg/ml. MÁX. 2.4mg/kg/día'],
    'Ampola 10mg/2ml. MAX. 1mg/kg/dia': ['Ampule 10mg/2ml. MAX. 1mg/kg/day', 'Ampolla 10mg/2ml. MÁX. 1mg/kg/día'],
    'Ampola 2mg/ml. MAX. 0.2mg/kg/dia': ['Ampule 2mg/ml. MAX. 0.2mg/kg/day', 'Ampolla 2mg/ml. MÁX. 0.2mg/kg/día'],
    'CP 0.5mg. MAX. 0.2mg/kg/dia': ['Tab 0.5mg. MAX. 0.2mg/kg/day', 'Comp. 0.5mg. MÁX. 0.2mg/kg/día'],
    'Ampola 5mg/ml. MAX. 0.2mg/kg/dia': ['Ampule 5mg/ml. MAX. 0.2mg/kg/day', 'Ampolla 5mg/ml. MÁX. 0.2mg/kg/día'],
    'CP 2mg. MAX. 0.2mg/kg/dia': ['Tab 2mg. MAX. 0.2mg/kg/day', 'Comp. 2mg. MÁX. 0.2mg/kg/día'],
    'CP 1mg. MAX. 0.1mg/kg/dia': ['Tab 1mg. MAX. 0.1mg/kg/day', 'Comp. 1mg. MÁX. 0.1mg/kg/día'],
    'CP 10mg. MAX. 2mg/kg/dia': ['Tab 10mg. MAX. 2mg/kg/day', 'Comp. 10mg. MÁX. 2mg/kg/día'],

    // Modal "Como usar"
    'Como usar — drogas neurológicas pediátricas (educativo)': ['How to use — pediatric neurological drugs (educational)', 'Cómo usar — fármacos neurológicos pediátricos (educativo)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Calcular': ['Calculate', 'Calcular'],
    'valores numéricos': ['numerical values', 'valores numéricos'],
    '(dose, volume, infusão) a partir do peso, da droga e dos parâmetros que você informa, com base em tabelas embutidas. Destina-se a': ['(dose, volume, infusion) from the weight, drug and parameters you enter, based on built-in tables. Intended for', '(dosis, volumen, infusión) a partir del peso, el fármaco y los parámetros que usted ingresa, con base en tablas integradas. Destinado a'],
    'estudo e conferência': ['study and double-checking', 'estudio y verificación'],
    'não é prescrição': ['it is not a prescription', 'no es una prescripción'],
    'nem substitui neurologista pediátrico, farmácia clínica ou bulário.': ['and does not replace the pediatric neurologist, clinical pharmacy or the drug label.', 'ni sustituye al neurólogo pediátrico, a la farmacia clínica ni al prospecto.'],
    'Ideia dos cálculos (resumo)': ['How the calculations work (summary)', 'Idea de los cálculos (resumen)'],
    'Dose por peso e unidade → totais → volume conforme': ['Dose by weight and unit → totals → volume according to the', 'Dosis por peso y unidad → totales → volumen según la'],
    'apresentação': ['formulation', 'presentación'],
    '; em esquema contínuo, derivam-se taxas (ml/h) a partir de volume e tempo.': ['; in a continuous regimen, rates (ml/h) are derived from volume and time.', '; en esquema continuo, las tasas (ml/h) se derivan del volumen y del tiempo.'],
    'em esquema contínuo, derivam-se taxas (ml/h) a partir de volume e tempo.': ['in a continuous regimen, rates (ml/h) are derived from volume and time.', 'en esquema continuo, las tasas (ml/h) se derivan del volumen y del tiempo.'],
    'Farmacocinética e indicação variam por idade, comorbidades e formulação — valide sempre com fonte oficial.': ['Pharmacokinetics and indication vary by age, comorbidities and formulation — always validate with an official source.', 'La farmacocinética y la indicación varían según la edad, las comorbilidades y la formulación — valide siempre con una fuente oficial.'],
    'Como usar na tela': ['How to use the screen', 'Cómo usar la pantalla'],
    'Preencha identificação (opcional), data de nascimento e peso.': ['Fill in identification (optional), date of birth and weight.', 'Complete la identificación (opcional), la fecha de nacimiento y el peso.'],
    'Selecione a droga e ajuste dose, apresentação e intervalo.': ['Select the drug and adjust dose, formulation and interval.', 'Seleccione el fármaco y ajuste dosis, presentación e intervalo.'],
    'Use': ['Use', 'Use'],
    'para o histórico.': ['for the history.', 'para el historial.'],
    'e revise antes de arquivar ou compartilhar.': ['and review before filing or sharing.', 'y revise antes de archivar o compartir.'],
    'Fármacos na lista (visão geral)': ['Drugs in the list (overview)', 'Fármacos de la lista (visión general)'],
    'Anticonvulsivantes clássicos e modernos, benzodiazepínicos e outros neurológicos presentes na base do app — detalhes e limites nos campos de observação de cada item.': ['Classic and newer anticonvulsants, benzodiazepines and other neurological drugs in the app database — details and limits in each item\'s notes field.', 'Anticonvulsivantes clásicos y modernos, benzodiazepinas y otros fármacos neurológicos de la base de la aplicación — detalles y límites en los campos de observación de cada ítem.'],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Não cobre todas as interações, ajustes renais/hepáticos nem monitorização terapêutica.': ['Does not cover all interactions, renal/hepatic adjustments or therapeutic drug monitoring.', 'No cubre todas las interacciones, los ajustes renales/hepáticos ni la monitorización terapéutica.'],
    'Erros de digitação ou apresentação incorreta alteram o resultado.': ['Typing errors or an incorrect formulation change the result.', 'Los errores de digitación o una presentación incorrecta alteran el resultado.'],
    'Conduta clínica e titulação ficam com a equipe assistencial.': ['Clinical management and titration remain with the care team.', 'La conducta clínica y la titulación quedan a cargo del equipo asistencial.'],
    'Referências:': ['References:', 'Referencias:'],

    // Alertas e mensagens
    'Nenhum calculo no historico. Use "Acrescentar calculo ao texto" pelo menos uma vez antes de copiar.': ['No calculations in the history. Use "Add calculation to text" at least once before copying.', 'No hay cálculos en el historial. Use "Agregar cálculo al texto" al menos una vez antes de copiar.'],

    // Relatório copiado (rótulos sem acento, como no código)
    'RESUMO INFORMATIVO — Drogas neurologicas pediatricas (NeoPedCalc, uso educativo)': ['INFORMATIONAL SUMMARY — Pediatric neurological drugs (NeoPedCalc, educational use)', 'RESUMEN INFORMATIVO — Fármacos neurológicos pediátricos (NeoPedCalc, uso educativo)'],
    'DADOS INFORMADOS (primeiro registro do historico)': ['DATA ENTERED (first entry in the history)', 'DATOS INGRESADOS (primer registro del historial)'],
    'Data/Hora': ['Date/Time', 'Fecha/hora'],
    'Nome': ['Name', 'Nombre'],
    'Paciente': ['Patient', 'Paciente'],
    'Data de Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Peso': ['Weight', 'Peso'],
    'Idade': ['Age', 'Edad'],
    'HISTORICO DE CALCULOS (revisar)': ['CALCULATION HISTORY (review)', 'HISTORIAL DE CÁLCULOS (revisar)'],
    'Calculo': ['Calculation', 'Cálculo'],
    'Droga': ['Drug', 'Fármaco'],
    'Dosagem': ['Dosage', 'Dosificación'],
    'Dose por aplicacao': ['Dose per administration', 'Dosis por administración'],
    'Dose total (24h)': ['Total dose (24h)', 'Dosis total (24 h)'],
    'Volume da droga': ['Drug volume', 'Volumen del fármaco'],
    'Apresentacao': ['Formulation', 'Presentación'],
    'Velocidade de infusao': ['Infusion rate', 'Velocidad de infusión'],
    'Intervalo': ['Interval', 'Intervalo'],
    'Observacoes (campo do app)': ['Notes (app field)', 'Observaciones (campo de la aplicación)'],
    'DETALHES': ['DETAILS', 'DETALLES'],
    'Total de entradas no historico': ['Total entries in the history', 'Total de entradas en el historial'],
    'LEMBRETES EDUCATIVOS': ['EDUCATIONAL REMINDERS', 'RECORDATORIOS EDUCATIVOS'],
    'Conferir apresentacao real do frasco e compatibilidade em bolsa/seringa.': ['Check the actual vial/product strength and bag/syringe compatibility.', 'Verificar la presentación real del frasco y la compatibilidad en bolsa/jeringa.'],
    'Anticonvulsivantes e benzodiazepínicos: decisoes de titulacao e monitorizacao com equipe e protocolos locais.': ['Anticonvulsants and benzodiazepines: titration and monitoring decisions with the team and local protocols.', 'Anticonvulsivantes y benzodiazepinas: decisiones de titulación y monitorización con el equipo y los protocolos locales.'],
    'NOTA EDUCATIVA: Revise todos os valores. A NeoPedCalc nao substitui julgamento clinico nem protocolos institucionais.': ['EDUCATIONAL NOTE: Review all values. NeoPedCalc does not replace clinical judgment or institutional protocols.', 'NOTA EDUCATIVA: Revise todos los valores. NeoPedCalc no sustituye el juicio clínico ni los protocolos institucionales.'],
  };
  i18n.register(D);

  // Linhas do relatório "Rótulo: <observação ou apresentação>" (texto sem acentos, como removerAcentos):
  // registradas inteiras porque a tradução por trechos numéricos não alcança o rótulo.
  var LABELS = {
    'Observacoes (campo do app)': ['Notes (app field)', 'Observaciones (campo de la aplicación)'],
    'Apresentacao': ['Formulation', 'Presentación'],
  };
  var strip = function (s) { return s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); };
  var lines = {};
  Object.keys(D).forEach(function (k) {
    // Linhas "- texto." do relatório: o núcleo remove a pontuação final antes de procurar.
    if (/[.:]$/.test(k)) lines[k.slice(0, -1)] = [D[k][0].replace(/[.:]$/, ""), D[k][1].replace(/[.:]$/, "")];
    if (!/\d/.test(k) || !/[A-Za-zÀ-ú]/.test(k)) return;
    Object.keys(LABELS).forEach(function (label) {
      lines[label + ": " + strip(k)] = [LABELS[label][0] + ": " + D[k][0], LABELS[label][1] + ": " + D[k][1]];
    });
  });
  i18n.register(lines);
  i18n.markPageTranslated();
})(window.NEOPED_I18N);
