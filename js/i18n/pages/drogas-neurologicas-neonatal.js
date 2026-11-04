/* Drogas neurológicas neonatais (files/drogas_neurologicas_neonatal.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  /** Mesmo tratamento que a página aplica (removerAcentos) antes de copiar o texto. */
  function semAcento(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  var entries = {
    // Título e cabeçalho
    'NeoPedCalc — Drogas neurológicas neonatais (educativo)': ['NeoPedCalc — Neonatal neurologic drugs (educational)', 'NeoPedCalc — Fármacos neurológicos neonatales (educativo)'],
    'Drogas neurológicas (neonato)': ['Neurologic drugs (neonate)', 'Fármacos neurológicos (neonato)'],
    'Ferramenta educativa — cálculos a partir de referências embutidas;': ['Educational tool — calculations based on built-in references;', 'Herramienta educativa — cálculos a partir de referencias integradas;'],
    'não prescreve': ['it does not prescribe', 'no prescribe'],
    '. Confirme dose, via, diluição e bulário antes de qualquer uso clínico.': ['. Confirm dose, route, dilution and drug label before any clinical use.', '. Confirme dosis, vía, dilución y prospecto antes de cualquier uso clínico.'],
    'Como usar': ['How to use', 'Cómo usar'],

    // Formulário
    'Nome do Paciente:': ['Patient Name:', 'Nombre del paciente:'],
    'Nome do neonato': ['Newborn name', 'Nombre del neonato'],
    'Data de Nascimento:': ['Date of Birth:', 'Fecha de nacimiento:'],
    'Peso (kg):': ['Weight (kg):', 'Peso (kg):'],
    'Ex: 1.5': ['E.g.: 1.5', 'Ej.: 1.5'],
    'Ex: 32.5': ['E.g.: 32.5', 'Ej.: 32.5'],
    'Ex: 0.5': ['E.g.: 0.5', 'Ej.: 0.5'],
    'Ex: 40mg/5ml': ['E.g.: 40mg/5ml', 'Ej.: 40mg/5ml'],
    'Idade Cronológica:': ['Chronological Age:', 'Edad cronológica:'],
    'Idade Gestacional ao Nascer (semanas):': ['Gestational Age at Birth (weeks):', 'Edad gestacional al nacer (semanas):'],
    'Idade Gestacional Corrigida:': ['Corrected Gestational Age:', 'Edad gestacional corregida:'],
    'Configuracao da Droga': ['Drug Setup', 'Configuración del fármaco'],
    'Selecione a Droga:': ['Select the Drug:', 'Seleccione el fármaco:'],
    'Selecione uma droga...': ['Select a drug...', 'Seleccione un fármaco...'],
    'Dose (mg):': ['Dose (mg):', 'Dosis (mg):'],
    'Unidade da Dose:': ['Dose Unit:', 'Unidad de la dosis:'],
    'mg/kg/dose': ['mg/kg/dose', 'mg/kg/dosis'],
    'mg/kg/dia': ['mg/kg/day', 'mg/kg/día'],
    'mg/kg/hora': ['mg/kg/hour', 'mg/kg/hora'],
    'mg/dose': ['mg/dose', 'mg/dosis'],
    'mg/dia': ['mg/day', 'mg/día'],
    'Apresentação:': ['Formulation:', 'Presentación:'],
    'Intervalo entre Doses:': ['Dosing Interval:', 'Intervalo entre dosis:'],
    '6 horas': ['6 hours', '6 horas'],
    '8 horas': ['8 hours', '8 horas'],
    '12 horas': ['12 hours', '12 horas'],
    '24 horas': ['24 hours', '24 horas'],
    'Contínuo': ['Continuous', 'Continuo'],
    'Observações:': ['Notes:', 'Observaciones:'],
    'Informações adicionais': ['Additional information', 'Información adicional'],
    'Acrescentar cálculo ao texto': ['Add calculation to the text', 'Añadir cálculo al texto'],

    // Resultados
    'Resultados do Calculo': ['Calculation Results', 'Resultados del cálculo'],
    'Nome da Droga': ['Drug Name', 'Nombre del fármaco'],
    'Dosagem Calculada': ['Calculated Dosage', 'Dosificación calculada'],
    'Dose Total (24h)': ['Total Dose (24h)', 'Dosis total (24h)'],
    'Volume da Droga (ml)': ['Drug Volume (ml)', 'Volumen del fármaco (ml)'],
    'Velocidade de Infusão': ['Infusion Rate', 'Velocidad de infusión'],
    'Dose por Aplicacao': ['Dose per Administration', 'Dosis por administración'],
    'Informações da Droga': ['Drug Information', 'Información del fármaco'],
    'Copiar texto informativo (histórico)': ['Copy informational text (history)', 'Copiar texto informativo (historial)'],
    'Informações não disponíveis': ['Information not available', 'Información no disponible'],

    // Modal "Como usar"
    'Como usar — drogas neurológicas neonatais (educativo)': ['How to use — neonatal neurologic drugs (educational)', 'Cómo usar — fármacos neurológicos neonatales (educativo)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Esta página calcula': ['This page calculates', 'Esta página calcula'],
    'valores numéricos': ['numerical values', 'valores numéricos'],
    '(dose, volume, infusão) a partir dos dados que você informa e de tabelas de referência embutidas. Destina-se a': [
      '(dose, volume, infusion) from the data you enter and from built-in reference tables. It is intended for',
      '(dosis, volumen, infusión) a partir de los datos que usted ingresa y de tablas de referencia integradas. Está destinada al'
    ],
    'estudo e conferência': ['study and double-checking', 'estudio y la verificación'],
    'não é prescrição': ['it is not a prescription', 'no es una prescripción'],
    'e não substitui neonatologista, farmácia clínica nem protocolo da UTI.': ['and does not replace the neonatologist, clinical pharmacy or the NICU protocol.', 'y no sustituye al neonatólogo, a la farmacia clínica ni al protocolo de la UCIN.'],
    'Ideia dos cálculos (resumo)': ['How the calculations work (summary)', 'Idea de los cálculos (resumen)'],
    'Em geral: dose relacionada ao': ['In general: dose related to', 'En general: dosis relacionada con el'],
    'peso': ['weight', 'peso'],
    'e à unidade escolhida (por dose, dia ou hora) → conversão para volume conforme a': ['and to the chosen unit (per dose, day or hour) → conversion to volume according to the', 'y con la unidad elegida (por dosis, día u hora) → conversión a volumen según la'],
    'apresentação': ['formulation', 'presentación'],
    'informada; em infusão contínua, derivam-se taxas (ex.: ml/h) a partir do volume e do tempo.': ['entered; for continuous infusion, rates (e.g., ml/h) are derived from volume and time.', 'informada; en infusión continua, las tasas (p. ej., ml/h) se derivan del volumen y del tiempo.'],
    // Nó de texto isolado antes de <strong>idade gestacional</strong> (só ocorre neste ponto da página).
    'A': ['The', 'La'],
    'idade gestacional': ['gestational age', 'edad gestacional'],
    'pode influenciar sugestões internas (ex.: alguns esquemas por faixa de IG). Sempre valide com monografia e normas locais.': [
      'may influence internal suggestions (e.g., some regimens by GA range). Always validate against the drug monograph and local standards.',
      'puede influir en sugerencias internas (p. ej., algunos esquemas por rango de EG). Valide siempre con la monografía y las normas locales.'
    ],
    'Como usar na tela': ['How to use the screen', 'Cómo usar la pantalla'],
    'Preencha dados opcionais do RN, peso e, quando aplicável, idade gestacional ao nascer (para correções internas).': [
      'Fill in optional newborn data, weight and, when applicable, gestational age at birth (for internal corrections).',
      'Complete los datos opcionales del RN, el peso y, cuando corresponda, la edad gestacional al nacer (para correcciones internas).'
    ],
    'Selecione a droga e ajuste dose, apresentação e intervalo conforme o cenário que está estudando.': [
      'Select the drug and adjust dose, formulation and interval according to the scenario you are studying.',
      'Seleccione el fármaco y ajuste la dosis, la presentación y el intervalo según el escenario que está estudiando.'
    ],
    'Use': ['Use', 'Use'],
    'para ir montando o histórico.': ['to build up the history.', 'para ir armando el historial.'],
    'e revise cada linha antes de arquivar ou compartilhar.': ['and review each line before filing or sharing.', 'y revise cada línea antes de archivar o compartir.'],
    'Fármacos na lista (visão geral)': ['Drugs in the list (overview)', 'Fármacos de la lista (visión general)'],
    'Inclui anticonvulsivantes (ex.: fenobarbital, fenitoína, levetiracetam), benzodiazepínicos, outros neurológicos e itens como paracetamol quando presentes na base — cada um com ressalvas de via, diluição e limites que constam nos campos de observação do app.': [
      'Includes anticonvulsants (e.g., phenobarbital, phenytoin, levetiracetam), benzodiazepines, other neurologic drugs and items such as acetaminophen when present in the database — each with route, dilution and limit caveats listed in the app\'s notes fields.',
      'Incluye anticonvulsivantes (p. ej., fenobarbital, fenitoína, levetiracetam), benzodiacepinas, otros fármacos neurológicos y elementos como paracetamol cuando están presentes en la base — cada uno con advertencias de vía, dilución y límites que figuran en los campos de observaciones de la aplicación.'
    ],
    'Limitações': ['Limitations', 'Limitaciones'],
    'Erros de digitação ou apresentação errada alteram o resultado.': ['Typing errors or a wrong formulation change the result.', 'Los errores de digitación o una presentación errónea alteran el resultado.'],
    'Não cobre todas as interações, ajustes renais/hepáticos nem estabilidade em mistura.': ['It does not cover all interactions, renal/hepatic adjustments or stability in admixtures.', 'No cubre todas las interacciones, los ajustes renales/hepáticos ni la estabilidad en mezcla.'],
    'Conduta e monitorização dependem da equipe e do contexto clínico.': ['Management and monitoring depend on the team and the clinical context.', 'La conducta y la monitorización dependen del equipo y del contexto clínico.'],
    'Referências:': ['References:', 'Referencias:'],

    // Texto copiado (sem acentos, como a página gera)
    'RESUMO INFORMATIVO — Drogas neurologicas neonatais (NeoPedCalc, uso educativo)': ['INFORMATIONAL SUMMARY — Neonatal neurologic drugs (NeoPedCalc, educational use)', 'RESUMEN INFORMATIVO — Fármacos neurológicos neonatales (NeoPedCalc, uso educativo)'],
    'DADOS INFORMADOS (primeiro registro do historico)': ['DATA ENTERED (first history entry)', 'DATOS INGRESADOS (primer registro del historial)'],
    'Data/Hora': ['Date/Time', 'Fecha/Hora'],
    'Nome': ['Name', 'Nombre'],
    'Paciente': ['Patient', 'Paciente'],
    'Data de Nascimento': ['Date of Birth', 'Fecha de nacimiento'],
    'Peso': ['Weight', 'Peso'],
    'Idade Cronologica': ['Chronological Age', 'Edad cronológica'],
    'Idade Gestacional ao Nascer': ['Gestational Age at Birth', 'Edad gestacional al nacer'],
    'Idade Gestacional Corrigida': ['Corrected Gestational Age', 'Edad gestacional corregida'],
    'semanas': ['weeks', 'semanas'],
    'HISTORICO DE CALCULOS (revisar)': ['CALCULATION HISTORY (review)', 'HISTORIAL DE CÁLCULOS (revisar)'],
    'Calculo': ['Calculation', 'Cálculo'],
    'Droga': ['Drug', 'Fármaco'],
    'Dosagem': ['Dosage', 'Dosificación'],
    'Dose por aplicacao': ['Dose per administration', 'Dosis por administración'],
    'Dose total (24h)': ['Total dose (24h)', 'Dosis total (24h)'],
    'Volume da droga': ['Drug volume', 'Volumen del fármaco'],
    'Apresentacao': ['Formulation', 'Presentación'],
    'Velocidade de infusao': ['Infusion rate', 'Velocidad de infusión'],
    'Intervalo': ['Interval', 'Intervalo'],
    'horas': ['hours', 'horas'],
    'Observacoes (campo do app)': ['Notes (app field)', 'Observaciones (campo de la aplicación)'],
    'DETALHES': ['DETAILS', 'DETALLES'],
    'Total de entradas no historico': ['Total history entries', 'Total de entradas en el historial'],
    'LEMBRETES EDUCATIVOS': ['EDUCATIONAL REMINDERS', 'RECORDATORIOS EDUCATIVOS'],
    '- Conferir apresentacao real do frasco e compatibilidade em bolsa/seringa.': ['- Check the actual vial formulation and bag/syringe compatibility.', '- Verificar la presentación real del frasco y la compatibilidad en bolsa/jeringa.'],
    '- Neonatos: farmacocinetica variavel — decisoes clinicas e titulacao ficam com a equipe e protocolos locais.': ['- Neonates: variable pharmacokinetics — clinical decisions and titration rest with the team and local protocols.', '- Neonatos: farmacocinética variable — las decisiones clínicas y la titulación corresponden al equipo y a los protocolos locales.'],
    '- Para paracetamol/acetaminofen e outros com faixas por IG ou dia de vida, use monografia institucional (este app pode refletir apenas parte das regras embutidas).': [
      '- For acetaminophen/paracetamol and others with ranges by GA or day of life, use the institutional monograph (this app may reflect only part of the built-in rules).',
      '- Para paracetamol/acetaminofén y otros con rangos por EG o día de vida, use la monografía institucional (esta aplicación puede reflejar solo parte de las reglas integradas).'
    ],
    'NOTA EDUCATIVA: Revise todos os valores. A NeoPedCalc nao substitui julgamento clinico nem protocolos institucionais.': [
      'EDUCATIONAL NOTE: Review all values. NeoPedCalc does not replace clinical judgment or institutional protocols.',
      'NOTA EDUCATIVA: Revise todos los valores. NeoPedCalc no sustituye el juicio clínico ni los protocolos institucionales.'
    ],
    'NOTA: Texto gerado por calculadora; nao constitui diagnostico formal nem prescricao. Conferir dose, via, diluicao e bulario antes de qualquer decisao clinica.': [
      'NOTE: Text generated by a calculator; it is not a formal diagnosis or prescription. Check dose, route, dilution and the drug label before any clinical decision.',
      'NOTA: Texto generado por una calculadora; no constituye un diagnóstico formal ni una prescripción. Verifique dosis, vía, dilución y prospecto antes de cualquier decisión clínica.'
    ],

    // Idade gestacional corrigida no texto copiado ("33 semanas e 2 dias (pre-termo moderado)")
    'semanas e': ['weeks and', 'semanas y'],
    'dias': ['days', 'días'],
    'semanas (termo)': ['weeks (term)', 'semanas (a término)'],
    'semanas (pos-termo +': ['weeks (post-term +', 'semanas (postérmino +'],
    'semanas)': ['weeks)', 'semanas)'],
    'dias (termo precoce)': ['days (early term)', 'días (término temprano)'],
    'dias (pre-termo tardio)': ['days (late preterm)', 'días (pretérmino tardío)'],
    'dias (pre-termo moderado)': ['days (moderate preterm)', 'días (pretérmino moderado)'],
    'dias (pre-termo extremo)': ['days (extremely preterm)', 'días (pretérmino extremo)'],
    'semanas (pós-termo +': ['weeks (post-term +', 'semanas (postérmino +'],
    'dias (pré-termo tardio)': ['days (late preterm)', 'días (pretérmino tardío)'],
    'dias (pré-termo moderado)': ['days (moderate preterm)', 'días (pretérmino moderado)'],
    'dias (pré-termo extremo)': ['days (extremely preterm)', 'días (pretérmino extremo)'],
    'Texto copiado. Revise numeros e contexto antes de usar em registro clinico ou mensagem.': ['Text copied. Review numbers and context before using it in a clinical record or message.', 'Texto copiado. Revise los números y el contexto antes de usarlo en un registro clínico o mensaje.'],

    // Alertas
    'Nenhum calculo no historico. Use "Acrescentar calculo ao texto" pelo menos uma vez antes de copiar.': [
      'No calculation in the history. Use "Add calculation to the text" at least once before copying.',
      'No hay cálculos en el historial. Use "Añadir cálculo al texto" al menos una vez antes de copiar.'
    ]
  };

  // Nomes das drogas: lista e resultado.
  [
    ['Fenobarbital (E.V.)', 'Phenobarbital (IV)', 'Fenobarbital (E.V.)'],
    ['Fenobarbital (V.O.)', 'Phenobarbital (PO)', 'Fenobarbital (V.O.)'],
    ['Fenitoína (E.V.)', 'Phenytoin (IV)', 'Fenitoína (E.V.)'],
    ['Valproato de Sódio (E.V.)', 'Valproate Sodium (IV)', 'Valproato de sodio (E.V.)'],
    ['Levetiracetam (E.V.)', 'Levetiracetam (IV)', 'Levetiracetam (E.V.)'],
    ['Midazolam (E.V.)', 'Midazolam (IV)', 'Midazolam (E.V.)'],
    ['Midazolam (Contínuo)', 'Midazolam (Continuous)', 'Midazolam (continuo)'],
    ['Diazepam (E.V.)', 'Diazepam (IV)', 'Diazepam (E.V.)'],
    ['Lorazepam (E.V.)', 'Lorazepam (IV)', 'Lorazepam (E.V.)'],
    ['Acetaminofen (E.V.)', 'Acetaminophen (IV)', 'Paracetamol (E.V.)'],
    ['Acetaminofen (V.O.)', 'Acetaminophen (PO)', 'Paracetamol (V.O.)'],
    ['Morfina (E.V.)', 'Morphine (IV)', 'Morfina (E.V.)'],
    ['Morfina (Contínuo)', 'Morphine (Continuous)', 'Morfina (continuo)'],
    ['Fentanil (E.V.)', 'Fentanyl (IV)', 'Fentanilo (E.V.)'],
    ['Fentanil (Contínuo)', 'Fentanyl (Continuous)', 'Fentanilo (continuo)']
  ].forEach(function (d) { entries[d[0]] = [d[1], d[2]]; });

  // Observações padrão: exibidas no resultado e copiadas sem acentos ("Observacoes (campo do app): ...").
  [
    ['Ampola 200mg/2ml. MAX. 20mg/kg/dia', 'Ampule 200mg/2ml. MAX. 20mg/kg/day', 'Ampolla 200mg/2ml. MÁX. 20mg/kg/día'],
    ['Gardenal 4% 40mg/ml/40gotas. 1 gota = 1mg. MAX. 20mg/kg/dia', 'Gardenal 4% 40mg/ml/40 drops. 1 drop = 1mg. MAX. 20mg/kg/day', 'Gardenal 4% 40mg/ml/40 gotas. 1 gota = 1mg. MÁX. 20mg/kg/día'],
    ['Ampola 250mg/5ml. MAX. 20mg/kg/dia', 'Ampule 250mg/5ml. MAX. 20mg/kg/day', 'Ampolla 250mg/5ml. MÁX. 20mg/kg/día'],
    ['Ampola 400mg/4ml. MAX. 60mg/kg/dia', 'Ampule 400mg/4ml. MAX. 60mg/kg/day', 'Ampolla 400mg/4ml. MÁX. 60mg/kg/día'],
    ['Ampola 500mg/5ml. MAX. 60mg/kg/dia', 'Ampule 500mg/5ml. MAX. 60mg/kg/day', 'Ampolla 500mg/5ml. MÁX. 60mg/kg/día'],
    ['Ampola 5mg/ml. MAX. 0.5mg/kg/dia', 'Ampule 5mg/ml. MAX. 0.5mg/kg/day', 'Ampolla 5mg/ml. MÁX. 0.5mg/kg/día'],
    ['Ampola 5mg/ml. MAX. 2.4mg/kg/dia', 'Ampule 5mg/ml. MAX. 2.4mg/kg/day', 'Ampolla 5mg/ml. MÁX. 2.4mg/kg/día'],
    ['Ampola 10mg/2ml. MAX. 1mg/kg/dia', 'Ampule 10mg/2ml. MAX. 1mg/kg/day', 'Ampolla 10mg/2ml. MÁX. 1mg/kg/día'],
    ['Ampola 2mg/ml. MAX. 0.2mg/kg/dia', 'Ampule 2mg/ml. MAX. 0.2mg/kg/day', 'Ampolla 2mg/ml. MÁX. 0.2mg/kg/día'],
    ['Ampola 10mg/ml. Dose varia conforme IG corrigida', 'Ampule 10mg/ml. Dose varies according to corrected GA', 'Ampolla 10mg/ml. La dosis varía según la EG corregida'],
    ['Solução oral 200mg/5ml. Dose varia conforme IG corrigida', 'Oral solution 200mg/5ml. Dose varies according to corrected GA', 'Solución oral 200mg/5ml. La dosis varía según la EG corregida'],
    ['Ampola 10mg/ml. MAX. 0.3mg/kg/dia', 'Ampule 10mg/ml. MAX. 0.3mg/kg/day', 'Ampolla 10mg/ml. MÁX. 0.3mg/kg/día'],
    ['Ampola 10mg/ml. MAX. 0.24mg/kg/dia', 'Ampule 10mg/ml. MAX. 0.24mg/kg/day', 'Ampolla 10mg/ml. MÁX. 0.24mg/kg/día'],
    ['Ampola 0.05mg/ml. MAX. 0.01mg/kg/dia', 'Ampule 0.05mg/ml. MAX. 0.01mg/kg/day', 'Ampolla 0.05mg/ml. MÁX. 0.01mg/kg/día'],
    ['Ampola 0.05mg/ml. MAX. 0.012mg/kg/dia', 'Ampule 0.05mg/ml. MAX. 0.012mg/kg/day', 'Ampolla 0.05mg/ml. MÁX. 0.012mg/kg/día']
  ].forEach(function (o) {
    entries[o[0]] = [o[1], o[2]];
    entries[semAcento(o[0])] = [o[1], o[2]];
    entries['Observacoes (campo do app): ' + semAcento(o[0])] = ['Notes (app field): ' + o[1], 'Observaciones (campo de la aplicación): ' + o[2]];
  });

  i18n.register(entries);
  i18n.markPageTranslated();
})(window.NEOPED_I18N);
