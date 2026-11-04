/* Drogas cardiovasculares — pediatria (files/drogas_cardiovasculares.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  // O texto copiado remove acentos (removerAcentos) e prefixa as observações com "informacoes da droga: ".
  function plain(text) { return text.normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function withPlain(entries, reportLabel) {
    var out = {};
    Object.keys(entries).forEach(function (pt) {
      var v = entries[pt];
      out[pt] = v;
      out[plain(pt)] = v;
      if (reportLabel) out[reportLabel[0] + ': ' + plain(pt)] = [reportLabel[1] + ': ' + v[0], reportLabel[2] + ': ' + v[1]];
    });
    return out;
  }

  // Nomes das drogas (opções do menu, card de resultado e texto copiado).
  i18n.register(withPlain({
    'Alprostadil (PGE1)': ['Alprostadil (PGE1)', 'Alprostadil (PGE1)'],
    'Alteplase': ['Alteplase', 'Alteplasa'],
    'Dopamina': ['Dopamine', 'Dopamina'],
    'Dobutamina': ['Dobutamine', 'Dobutamina'],
    'Noradrenalina': ['Norepinephrine', 'Noradrenalina'],
    'Adrenalina': ['Epinephrine', 'Adrenalina'],
    'Nitroprussiato': ['Nitroprusside', 'Nitroprusiato'],
    'Nitroglicerina': ['Nitroglycerin', 'Nitroglicerina'],
    'Anrinone (Bolus)': ['Amrinone (Bolus)', 'Amrinona (bolo)'],
    'Anrinone (Manutenção)': ['Amrinone (Maintenance)', 'Amrinona (mantenimiento)'],
    'Fenilefrina (Bolus)': ['Phenylephrine (Bolus)', 'Fenilefrina (bolo)'],
    'Fenilefrina (Manutenção)': ['Phenylephrine (Maintenance)', 'Fenilefrina (mantenimiento)'],
    'Vasopressina': ['Vasopressin', 'Vasopresina'],
    'Isoproterenol': ['Isoproterenol', 'Isoproterenol'],
    'Amiodarona (Ataque)': ['Amiodarone (Loading)', 'Amiodarona (carga)'],
    'Amiodarona (Manutenção)': ['Amiodarone (Maintenance)', 'Amiodarona (mantenimiento)'],
    'Amiodarona (Oral)': ['Amiodarone (Oral)', 'Amiodarona (oral)'],
    'Esmolol': ['Esmolol', 'Esmolol'],
    'Flecainide': ['Flecainide', 'Flecainida'],
    'Adenosina (< 50kg)': ['Adenosine (< 50kg)', 'Adenosina (< 50kg)'],
    'Adenosina (> 50kg)': ['Adenosine (> 50kg)', 'Adenosina (> 50kg)'],
    'Lidocaína (Ataque)': ['Lidocaine (Loading)', 'Lidocaína (carga)'],
    'Lidocaína (Manutenção)': ['Lidocaine (Maintenance)', 'Lidocaína (mantenimiento)'],
    'Procainamida (Ataque)': ['Procainamide (Loading)', 'Procainamida (carga)'],
    'Procainamida (Manutenção)': ['Procainamide (Maintenance)', 'Procainamida (mantenimiento)'],
    'Sotalol': ['Sotalol', 'Sotalol'],
    'Heparina (Ataque)': ['Heparin (Loading)', 'Heparina (carga)'],
    'Heparina (Manutenção)': ['Heparin (Maintenance)', 'Heparina (mantenimiento)'],
    'Enoxaparina (> 2 meses)': ['Enoxaparin (> 2 months)', 'Enoxaparina (> 2 meses)'],
    'Hidralazina EV': ['Hydralazine IV', 'Hidralazina IV'],
    'Hidralazina VO': ['Hydralazine PO', 'Hidralazina VO'],
    'Nicardipina': ['Nicardipine', 'Nicardipino'],
    'Nifedipina': ['Nifedipine', 'Nifedipino'],
    'Prazozin': ['Prazosin', 'Prazosina'],
    'Captopril (Lactente)': ['Captopril (Infant)', 'Captopril (lactante)'],
    'Captopril (2-10 anos)': ['Captopril (2-10 years)', 'Captopril (2-10 años)'],
    'Captopril (> 10 anos)': ['Captopril (> 10 years)', 'Captopril (> 10 años)'],
    'Captopril (Adolescente)': ['Captopril (Adolescent)', 'Captopril (adolescente)'],
    'Atropina EV': ['Atropine IV', 'Atropina IV'],
    'Atropina ET': ['Atropine ET', 'Atropina ET'],
    'Atropina VO': ['Atropine PO', 'Atropina VO'],
    'Sildenafil': ['Sildenafil', 'Sildenafil'],
    'Protamina (Sulfato)': ['Protamine (Sulfate)', 'Protamina (sulfato)']
  }, ['nome da droga', 'drug name', 'nombre del fármaco']));

  // Observações de cada droga (card "Informações da Droga" e texto copiado).
  i18n.register(withPlain({
    '0,05 a 0,1 mcg/kg/min. Ampola usualmente com 500 mcg/ml': ['0.05 to 0.1 mcg/kg/min. Ampule usually 500 mcg/ml', '0,05 a 0,1 mcg/kg/min. Ampolla habitualmente de 500 mcg/ml'],
    'TROMBOLÍTICO. Duração da terapia 6 a 48 hs. Dose 0,1mg/kg/hora. Sol 1mg/ml': ['THROMBOLYTIC. Duration of therapy 6 to 48 h. Dose 0.1mg/kg/hour. Sol 1mg/ml', 'TROMBOLÍTICO. Duración del tratamiento 6 a 48 h. Dosis 0,1mg/kg/hora. Sol. 1mg/ml'],
    'Ataque correr em 30 a 60 minutos': ['Infuse loading dose over 30 to 60 minutes', 'Infundir la dosis de carga en 30 a 60 minutos'],
    '5 a 15 mcg/kg/min. Iniciar com 5 mcg/kg/min e ir titulando. Ampola 50mg/ml': ['5 to 15 mcg/kg/min. Start at 5 mcg/kg/min and titrate. Ampule 50mg/ml', '5 a 15 mcg/kg/min. Iniciar con 5 mcg/kg/min e ir titulando. Ampolla 50mg/ml'],
    'Dose pode ser repetida a cada 10 a 15 minutos até total de 0,04 mg/kg': ['Dose may be repeated every 10 to 15 minutes up to a total of 0.04 mg/kg', 'La dosis puede repetirse cada 10 a 15 minutos hasta un total de 0,04 mg/kg'],
    'Dose 2 a 20 mcg/kg/min': ['Dose 2 to 20 mcg/kg/min', 'Dosis 2 a 20 mcg/kg/min'],
    'Dose 2 a 25 mcg/kg/min': ['Dose 2 to 25 mcg/kg/min', 'Dosis 2 a 25 mcg/kg/min'],
    'Dose 0,05 a 1,0 mcg/kg/min - vasopressor': ['Dose 0.05 to 1.0 mcg/kg/min - vasopressor', 'Dosis 0,05 a 1,0 mcg/kg/min - vasopresor'],
    'Dose 0,05 a 1,0 mcg/kg/min (0,05-0,3 dose inotrópica, acima 0,3-vasopressor)': ['Dose 0.05 to 1.0 mcg/kg/min (0.05-0.3 inotropic dose, above 0.3-vasopressor)', 'Dosis 0,05 a 1,0 mcg/kg/min (0,05-0,3 dosis inotrópica, por encima de 0,3-vasopresora)'],
    'Dose 0,25 a 0,5 mcg/kg/min': ['Dose 0.25 to 0.5 mcg/kg/min', 'Dosis 0,25 a 0,5 mcg/kg/min'],
    'Tratamento de trombose': ['Treatment of thrombosis', 'Tratamiento de la trombosis'],
    'Tratamento de trombose. Calculado na apresentação de 1000UI/ml': ['Treatment of thrombosis. Calculated for the 1000IU/ml concentration', 'Tratamiento de la trombosis. Calculado con la presentación de 1000UI/ml'],
    'Repetir após 5 minutos na dose de 0,5 a 1,0mg/kg/dose se demorar>15min para a inf.contínua. Dose máxima 100mg/dose': [
      'Repeat after 5 minutes at 0.5 to 1.0mg/kg/dose if continuous infusion will take >15min to start. Maximum dose 100mg/dose',
      'Repetir a los 5 minutos con 0,5 a 1,0mg/kg/dosis si la infusión continua demora >15min. Dosis máxima 100mg/dosis'
    ],
    'Dose 20 a 50 mcg/kg/min. Solução 10 e 20mg/ml (1 e 2%)': ['Dose 20 to 50 mcg/kg/min. Solution 10 and 20mg/ml (1 and 2%)', 'Dosis 20 a 50 mcg/kg/min. Solución 10 y 20mg/ml (1 y 2%)'],
    '600-1600mg dividido em 2 doses por 1 a 3 semanas, 600 a 800mg dividido em 2 doses por 1 mês e manutenção de 400mg/kg/dia': [
      '600-1600mg divided into 2 doses for 1 to 3 weeks, 600 to 800mg divided into 2 doses for 1 month, and maintenance of 400mg/kg/day',
      '600-1600mg divididos en 2 dosis durante 1 a 3 semanas, 600 a 800mg divididos en 2 dosis durante 1 mes y mantenimiento de 400mg/kg/día'
    ],
    'Após colocar a dose na COT, instilar sobre a mesma 1 ml de SF0,9%': ['After giving the dose via the ETT, flush with 1 ml of NS 0.9%', 'Tras administrar la dosis por el TET, instilar a continuación 1 ml de SF 0,9%'],
    'Iniciar com 0,02 e aumentar gradualmente até 0,09 mg/kg/dose de 6/6 hs': ['Start at 0.02 and increase gradually up to 0.09 mg/kg/dose every 6 h', 'Iniciar con 0,02 y aumentar gradualmente hasta 0,09 mg/kg/dosis cada 6 h'],
    'Criança > 2 meses e < 18 anos - profilaxia 0,5 mg/kg/dose e tratamento 1,0 mg/kg/dose de 12/12 hs': [
      'Child > 2 months and < 18 years - prophylaxis 0.5 mg/kg/dose and treatment 1.0 mg/kg/dose every 12 h',
      'Niño > 2 meses y < 18 años - profilaxis 0,5 mg/kg/dosis y tratamiento 1,0 mg/kg/dosis cada 12 h'
    ],
    'TSV dose 100 mcg/kg/dose em 1 minuto. Crise hipertensiva no PO 50 a 250mcg/kg/min. 1ml/20mg': [
      'SVT dose 100 mcg/kg/dose over 1 minute. Postoperative hypertensive crisis 50 to 250mcg/kg/min. 1ml/20mg',
      'TSV dosis 100 mcg/kg/dosis en 1 minuto. Crisis hipertensiva en el posoperatorio 50 a 250mcg/kg/min. 1ml/20mg'
    ],
    'Arritmias Ventriculares. Dose pode ser ajustada até 6mg/kg/dia. Efeito ótimo pós 2 a 3 dias. Dose oral a cada 8 hs': [
      'Ventricular arrhythmias. Dose may be adjusted up to 6mg/kg/day. Optimal effect after 2 to 3 days. Oral dose every 8 h',
      'Arritmias ventriculares. La dosis puede ajustarse hasta 6mg/kg/día. Efecto óptimo tras 2 a 3 días. Dosis oral cada 8 h'
    ],
    'Dose pode ser aumentada até controle da PA até 2mg/kg/dose de 6/6 hs. Dose máxima 20 mg': [
      'Dose may be increased until BP is controlled, up to 2mg/kg/dose every 6 h. Maximum dose 20 mg',
      'La dosis puede aumentarse hasta controlar la PA, hasta 2mg/kg/dosis cada 6 h. Dosis máxima 20 mg'
    ],
    'Dividido a cada 6 ou 8 hs': ['Divided every 6 or 8 h', 'Dividida cada 6 u 8 h'],
    'Dose 0,25 a 5 mcg/kg/min (<1mcg- dil. coronariano >1 mcg vasod. Renal > 3mcg vasodilat sistêmico). Ampola 5mg/ml': [
      'Dose 0.25 to 5 mcg/kg/min (<1mcg- coronary dilation >1 mcg renal vasodilation > 3mcg systemic vasodilation). Ampule 5mg/ml',
      'Dosis 0,25 a 5 mcg/kg/min (<1mcg- dilatación coronaria >1 mcg vasodilatación renal > 3mcg vasodilatación sistémica). Ampolla 5mg/ml'
    ],
    'Dose 0,75 mg/kg EV em bolus em 3 minutos. Se necessário repetir em 30 minutos. Ampola 5mg/ml': [
      'Dose 0.75 mg/kg IV bolus over 3 minutes. Repeat in 30 minutes if needed. Ampule 5mg/ml',
      'Dosis 0,75 mg/kg IV en bolo en 3 minutos. Si es necesario, repetir a los 30 minutos. Ampolla 5mg/ml'
    ],
    'Dose 5 a 10 mcg/kg/min. Ampola 5 mg/ml': ['Dose 5 to 10 mcg/kg/min. Ampule 5 mg/ml', 'Dosis 5 a 10 mcg/kg/min. Ampolla 5 mg/ml'],
    'Dose 5 a 20 mcg/kg EV em bolus em 10 a 15 minutos. Ampola 10mg/ml': [
      'Dose 5 to 20 mcg/kg IV bolus over 10 to 15 minutes. Ampule 10mg/ml',
      'Dosis 5 a 20 mcg/kg IV en bolo en 10 a 15 minutos. Ampolla 10mg/ml'
    ],
    'Dose 0,1 a 0,5 mcg/kg/min. Ampola 10mg/ml': ['Dose 0.1 to 0.5 mcg/kg/min. Ampule 10mg/ml', 'Dosis 0,1 a 0,5 mcg/kg/min. Ampolla 10mg/ml'],
    'Dose 0,00025 UI/kg/min (0,015 UI/kg/hora). Faixa 0,0002 a 0,002 UI/kg/min (0,012 a 0,12 UI/kg/hora). Ampola 20 UI/ml': [
      'Dose 0.00025 IU/kg/min (0.015 IU/kg/hour). Range 0.0002 to 0.002 IU/kg/min (0.012 to 0.12 IU/kg/hour). Ampule 20 IU/ml',
      'Dosis 0,00025 UI/kg/min (0,015 UI/kg/hora). Rango 0,0002 a 0,002 UI/kg/min (0,012 a 0,12 UI/kg/hora). Ampolla 20 UI/ml'
    ],
    'Dose 5 a 25 mcg/kg/dose. Máximo 15 mg ou 400mcg/kg/dia. Cápsulas de 1mg,2mg ou 5mg de 8/8 ou 12/12 hs': [
      'Dose 5 to 25 mcg/kg/dose. Maximum 15 mg or 400mcg/kg/day. Capsules of 1mg, 2mg or 5mg every 8 or 12 h',
      'Dosis 5 a 25 mcg/kg/dosis. Máximo 15 mg o 400mcg/kg/día. Cápsulas de 1mg, 2mg o 5mg cada 8 o 12 h'
    ],
    'Crise hipertensiva 0,25-0,5mg/kg/dose MAX.2mg/kg/dia. Hipertensão crônica 0,25-0,5mg/kg/dia de 12/12 hs. MAX.120mg/dia': [
      'Hypertensive crisis 0.25-0.5mg/kg/dose MAX 2mg/kg/day. Chronic hypertension 0.25-0.5mg/kg/day every 12 h. MAX 120mg/day',
      'Crisis hipertensiva 0,25-0,5mg/kg/dosis MÁX. 2mg/kg/día. Hipertensión crónica 0,25-0,5mg/kg/día cada 12 h. MÁX. 120mg/día'
    ],
    'Dose inicial 0,15 mg/kg/dose de 8/8 hs': ['Initial dose 0.15 mg/kg/dose every 8 h', 'Dosis inicial 0,15 mg/kg/dosis cada 8 h'],
    'Dose inicial 0,3 mg/kg/dose de 8/8 hs': ['Initial dose 0.3 mg/kg/dose every 8 h', 'Dosis inicial 0,3 mg/kg/dosis cada 8 h'],
    'Dose inicial 6,25 mg/dose de 8/8 hs': ['Initial dose 6.25 mg/dose every 8 h', 'Dosis inicial 6,25 mg/dosis cada 8 h'],
    'Dose 0,05 mg/kg. Fazer rápido em 1 min. Ampola 3mg/ml': ['Dose 0.05 mg/kg. Give as rapid push over 1 min. Ampule 3mg/ml', 'Dosis 0,05 mg/kg. Administrar rápido en 1 min. Ampolla 3mg/ml'],
    'Dose 6,0 mg. Pode aumentar a dose para 12mg. Fazer rápido em 1 min. Ampola 3mg/ml': [
      'Dose 6.0 mg. May increase dose to 12mg. Give as rapid push over 1 min. Ampule 3mg/ml',
      'Dosis 6,0 mg. Puede aumentarse la dosis a 12mg. Administrar rápido en 1 min. Ampolla 3mg/ml'
    ],
    'Dose 0,05 a 2 mcg/kg/min. Dose máxima 2mcg/kg/min. Solução 0,2mg/ml': ['Dose 0.05 to 2 mcg/kg/min. Maximum dose 2mcg/kg/min. Solution 0.2mg/ml', 'Dosis 0,05 a 2 mcg/kg/min. Dosis máxima 2mcg/kg/min. Solución 0,2mg/ml'],
    'Tratamento de Hipertensão severa. Dose 0,5 a 2,0 mcg/kg/min. Solução 2,5mg/ml': ['Treatment of severe hypertension. Dose 0.5 to 2.0 mcg/kg/min. Solution 2.5mg/ml', 'Tratamiento de la hipertensión grave. Dosis 0,5 a 2,0 mcg/kg/min. Solución 2,5mg/ml'],
    'Em 5 minutos. Não exceder 100mg/dose': ['Over 5 minutes. Do not exceed 100mg/dose', 'En 5 minutos. No superar 100mg/dosis'],
    'TSV e TV quando falha a ADENOSINA. Dose 20 a 80 mcg/kg/min. Ampola 100 ou 500mg/ml': [
      'SVT and VT when ADENOSINE fails. Dose 20 to 80 mcg/kg/min. Ampule 100 or 500mg/ml',
      'TSV y TV cuando falla la ADENOSINA. Dosis 20 a 80 mcg/kg/min. Ampolla 100 o 500mg/ml'
    ],
    'Aumentar até no máximo 2 mg/kg/dose a cada 4 ou 8 hs, se bem tolerado. Comprimido 20 e 50 mg': [
      'Increase up to a maximum of 2 mg/kg/dose every 4 or 8 h, if well tolerated. Tablets 20 and 50 mg',
      'Aumentar hasta un máximo de 2 mg/kg/dosis cada 4 u 8 h, si se tolera bien. Comprimidos de 20 y 50 mg'
    ],
    'Neonato - 4mg/kg/dia, 1m a 6 anos - 6mg/kg/dia, >6anos - 4mg/kg/dia a cada 8 hs': [
      'Neonate - 4mg/kg/day, 1mo to 6 years - 6mg/kg/day, >6 years - 4mg/kg/day every 8 h',
      'Neonato - 4mg/kg/día, 1m a 6 años - 6mg/kg/día, >6 años - 4mg/kg/día cada 8 h'
    ],
    'Dose de Protamina(mg) para neutralizar 100 UI de Heparina. Tempo decorrido desde a última dose de heparina(min)': [
      'Protamine dose (mg) to neutralize 100 IU of heparin. Time elapsed since the last heparin dose (min)',
      'Dosis de protamina (mg) para neutralizar 100 UI de heparina. Tiempo transcurrido desde la última dosis de heparina (min)'
    ],
    'Informações não disponíveis': ['Information not available', 'Información no disponible']
  }, ['informacoes da droga', 'drug information', 'información del fármaco']));

  i18n.register({
    // Cabeçalho e formulário
    'NeoPedCalc — Drogas cardiovasculares (educativo)': ['NeoPedCalc — Cardiovascular Drugs (educational)', 'NeoPedCalc — Fármacos cardiovasculares (educativo)'],
    'Drogas cardiovasculares (pediatria)': ['Cardiovascular Drugs (pediatrics)', 'Fármacos cardiovasculares (pediatría)'],
    'Ferramenta educativa — cálculos a partir de referências tipo handbook;': ['Educational tool — calculations based on handbook-type references;', 'Herramienta educativa — cálculos basados en referencias tipo manual (handbook);'],
    'não prescreve': ['does not prescribe', 'no prescribe'],
    '. Crianças > 2 meses. Confirme sempre dose, via e bulário institucional.': ['. Children > 2 months. Always confirm dose, route and the institutional formulary.', '. Niños > 2 meses. Confirme siempre dosis, vía y el formulario institucional.'],
    'Como usar': ['How to use', 'Cómo usar'],
    'Nome do Paciente:': ['Patient Name:', 'Nombre del paciente:'],
    'Ex: João Silva': ['e.g., John Smith', 'Ej.: Juan Pérez'],
    'Data de Nascimento:': ['Date of Birth:', 'Fecha de nacimiento:'],
    'Peso (kg):': ['Weight (kg):', 'Peso (kg):'],
    'Ex: 15.500': ['e.g., 15.500', 'Ej.: 15.500'],
    'Idade (calculada automaticamente em anos):': ['Age (calculated automatically, in years):', 'Edad (calculada automáticamente en años):'],
    'Selecione a Droga Cardiovascular': ['Select the Cardiovascular Drug', 'Seleccione el fármaco cardiovascular'],
    'Droga:': ['Drug:', 'Fármaco:'],
    'Selecione uma droga...': ['Select a drug...', 'Seleccione un fármaco...'],
    'Drogas Vasoativas': ['Vasoactive Drugs', 'Fármacos vasoactivos'],
    'Antiarrítmicos': ['Antiarrhythmics', 'Antiarrítmicos'],
    'Anticoagulantes': ['Anticoagulants', 'Anticoagulantes'],
    'Antihipertensivos': ['Antihypertensives', 'Antihipertensivos'],
    'Outros': ['Others', 'Otros'],
    'Configuração da Droga': ['Drug Settings', 'Configuración del fármaco'],
    'Dose (por kg):': ['Dose (per kg):', 'Dosis (por kg):'],
    'Ex: 0.05': ['e.g., 0.05', 'Ej.: 0.05'],
    'Unidade da Dose:': ['Dose Unit:', 'Unidad de la dosis:'],
    'mcg/kg/hora': ['mcg/kg/h', 'mcg/kg/hora'],
    'mg/kg/hora': ['mg/kg/h', 'mg/kg/hora'],
    'mg/kg/dose': ['mg/kg/dose', 'mg/kg/dosis'],
    'UI/kg/hora': ['IU/kg/h', 'UI/kg/hora'],
    'UI/kg': ['IU/kg', 'UI/kg'],
    'UI/ml': ['IU/ml', 'UI/ml'],
    'UI/kg/bolus': ['IU/kg/bolus', 'UI/kg/bolo'],
    // Vasopressina em unidades (dose total em UI; concentração final da solução)
    'UI': ['IU', 'UI'],
    'Solução final': ['Final solution', 'Solución final'],
    'concentracao final da solucao': ['final solution concentration', 'concentración final de la solución'],
    'mg/kg/dia': ['mg/kg/day', 'mg/kg/día'],
    'mg/dose': ['mg/dose', 'mg/dosis'],
    'Apresentação da Droga:': ['Drug Concentration:', 'Presentación del fármaco:'],
    'Ex: 500 mcg/ml': ['e.g., 500 mcg/ml', 'Ej.: 500 mcg/ml'],
    'Tempo de Infusão:': ['Infusion Time:', 'Tiempo de infusión:'],
    'horas': ['hours', 'horas'],
    'hora': ['hour', 'hora'],
    'Volume de Diluição (ml):': ['Dilution Volume (ml):', 'Volumen de dilución (ml):'],
    'Ex: 24': ['e.g., 24', 'Ej.: 24'],
    'Velocidade de Infusão (ml/h):': ['Infusion Rate (ml/h):', 'Velocidad de infusión (ml/h):'],
    'Observações:': ['Notes:', 'Observaciones:'],
    'Observações específicas da droga...': ['Drug-specific notes...', 'Observaciones específicas del fármaco...'],
    'Acrescentar cálculo ao texto': ['Add calculation to text', 'Añadir cálculo al texto'],
    'Limpar Dados': ['Clear Data', 'Borrar datos'],
    'Limpar Historico': ['Clear History', 'Borrar historial'],

    // Resultados
    'Nome da Droga': ['Drug Name', 'Nombre del fármaco'],
    'Dosagem Escolhida': ['Selected Dose', 'Dosis elegida'],
    'Dose Total no Tempo Escolhido': ['Total Dose Over Selected Time', 'Dosis total en el tiempo elegido'],
    'Volume da Droga (ml)': ['Drug Volume (ml)', 'Volumen del fármaco (ml)'],
    'Velocidade de Infusão': ['Infusion Rate', 'Velocidad de infusión'],
    'Informações da Droga': ['Drug Information', 'Información del fármaco'],
    'Copiar texto informativo (histórico)': ['Copy informational text (history)', 'Copiar texto informativo (historial)'],
    'Drogas cardiovasculares — crianças > 2 meses (uso educativo):': ['Cardiovascular drugs — children > 2 months (educational use):', 'Fármacos cardiovasculares — niños > 2 meses (uso educativo):'],
    '• Base de referência: Pediatric Dosage Handbook 2009 (entre outras fontes embutidas no app)': ['• Reference basis: Pediatric Dosage Handbook 2009 (among other sources built into the app)', '• Referencia base: Pediatric Dosage Handbook 2009 (entre otras fuentes incorporadas en la app)'],
    'Base de referência: Pediatric Dosage Handbook 2009 (entre outras fontes embutidas no app)': ['Reference basis: Pediatric Dosage Handbook 2009 (among other sources built into the app)', 'Referencia base: Pediatric Dosage Handbook 2009 (entre otras fuentes incorporadas en la app)'],
    'Ajuste por peso/idade conforme campos; infusão conforme parâmetros informados': ['Adjustment by weight/age per the fields; infusion per the parameters entered', 'Ajuste por peso/edad según los campos; infusión según los parámetros ingresados'],
    'Não substitui': ['Does not replace', 'No sustituye'],
    'prescrição, farmácia clínica nem protocolo da UTI': ['prescription, clinical pharmacy or ICU protocol', 'la prescripción, la farmacia clínica ni el protocolo de la UCI'],
    'Verificar compatibilidade, estabilidade, interações e apresentação real do lote': ['Check compatibility, stability, interactions and the actual product concentration of the lot', 'Verificar compatibilidad, estabilidad, interacciones y la presentación real del lote'],
    'Use': ['Use', 'Use'],
    'Copiar texto informativo': ['Copy informational text', 'Copiar texto informativo'],
    'só após revisar números e contexto clínico': ['only after reviewing the numbers and clinical context', 'solo después de revisar los números y el contexto clínico'],

    // Modal "Como usar"
    'Como usar — drogas cardiovasculares (educativo)': ['How to use — cardiovascular drugs (educational)', 'Cómo usar — fármacos cardiovasculares (educativo)'],
    'Objetivo (educativo)': ['Purpose (educational)', 'Objetivo (educativo)'],
    'Esta página reproduz': ['This page reproduces', 'Esta página reproduce'],
    'cálculos numéricos': ['numerical calculations', 'cálculos numéricos'],
    'a partir de referências pediátricas embutidas (ex.: handbook de dosagens). Serve para': ['based on built-in pediatric references (e.g., a dosage handbook). It is meant for', 'a partir de referencias pediátricas incorporadas (p. ej.: manual de dosificación). Sirve para'],
    'estudo e conferência': ['study and double-checking', 'estudio y verificación'],
    'de números —': ['of numbers —', 'de números —'],
    'não é prescrição': ['it is not a prescription', 'no es una prescripción'],
    ', nem substitui bulário, farmácia clínica ou protocolo da instituição.': [', nor does it replace the formulary, clinical pharmacy or institutional protocol.', ', ni sustituye el prospecto, la farmacia clínica ni el protocolo de la institución.'],
    'Ideia dos cálculos (resumo)': ['How the calculations work (summary)', 'Idea de los cálculos (resumen)'],
    'Relação geral:': ['General relationship:', 'Relación general:'],
    'dose por peso → dose total → volume da ampola/solução → velocidade (ml/h) conforme volume e tempo informados.': ['weight-based dose → total dose → ampule/solution volume → rate (ml/h) according to the volume and time entered.', 'dosis por peso → dosis total → volumen de la ampolla/solución → velocidad (ml/h) según el volumen y el tiempo ingresados.'],
    'Os parâmetros exatos dependem da droga e dos campos que você preenche.': ['The exact parameters depend on the drug and the fields you fill in.', 'Los parámetros exactos dependen del fármaco y de los campos que usted complete.'],
    'Valide sempre': ['Always validate', 'Valide siempre'],
    'concentração do frasco, diluição, via e estabilidade com fonte oficial.': ['vial concentration, dilution, route and stability against an official source.', 'la concentración del vial, la dilución, la vía y la estabilidad con una fuente oficial.'],
    'Como usar na tela': ['Using the screen', 'Cómo usar la pantalla'],
    'Preencha identificação (opcional) e peso; confira idade (esta calculadora é pensada para crianças': ['Fill in identification (optional) and weight; check the age (this calculator is designed for children', 'Complete la identificación (opcional) y el peso; verifique la edad (esta calculadora está pensada para niños'],
    '> 2 meses': ['> 2 months', '> 2 meses'],
    'Selecione a droga, indicação/dose de referência e volume/tempo de infusão conforme o cenário que você está estudando.': ['Select the drug, the reference indication/dose and the infusion volume/time for the scenario you are studying.', 'Seleccione el fármaco, la indicación/dosis de referencia y el volumen/tiempo de infusión según el escenario que está estudiando.'],
    'para ir montando um histórico de entradas.': ['to build up a history of entries.', 'para ir armando un historial de entradas.'],
    'para colar em outro lugar — e revise cada linha antes de qualquer uso clínico.': ['to paste elsewhere — and review every line before any clinical use.', 'para pegarlo en otro lugar — y revise cada línea antes de cualquier uso clínico.'],
    'Medicamentos na lista (referência rápida)': ['Drugs on the list (quick reference)', 'Medicamentos de la lista (referencia rápida)'],
    'Dobutamina, dopamina, adrenalina, noradrenalina, milrinona': ['Dobutamine, dopamine, epinephrine, norepinephrine, milrinone', 'Dobutamina, dopamina, adrenalina, noradrenalina, milrinona'],
    '— suporte hemodinâmico (classes e efeitos dependem de dose/contexto).': ['— hemodynamic support (classes and effects depend on dose/context).', '— soporte hemodinámico (las clases y los efectos dependen de la dosis/contexto).'],
    'Digoxina': ['Digoxin', 'Digoxina'],
    '— digital; estreita margem terapêutica.': ['— digitalis glycoside; narrow therapeutic index.', '— digitálico; estrecho margen terapéutico.'],
    'Propranolol, metoprolol, esmolol, labetalol': ['Propranolol, metoprolol, esmolol, labetalol', 'Propranolol, metoprolol, esmolol, labetalol'],
    '— betabloqueadores / mistos conforme o fármaco.': ['— beta-blockers / mixed, depending on the drug.', '— betabloqueantes / mixtos según el fármaco.'],
    'Hidralazina, nitroprussiato': ['Hydralazine, nitroprusside', 'Hidralazina, nitroprusiato'],
    '— vasodilatação (cuidados com titulação e estabilidade da solução).': ['— vasodilation (care with titration and solution stability).', '— vasodilatación (cuidado con la titulación y la estabilidad de la solución).'],
    'Captopril, enalapril': ['Captopril, enalapril', 'Captopril, enalapril'],
    '— IECA (ajuste e vigilância conforme guias locais).': ['— ACE inhibitors (adjustment and monitoring per local guidelines).', '— IECA (ajuste y vigilancia según las guías locales).'],
    'Limitações e responsabilidade': ['Limitations and responsibility', 'Limitaciones y responsabilidad'],
    'Não cobre todas as apresentações comerciais nem interações individuais.': ['It does not cover every commercial product or individual interaction.', 'No cubre todas las presentaciones comerciales ni las interacciones individuales.'],
    'Erros de digitação ou escolha de concentração alteram o resultado — confira os números.': ['Typing errors or the choice of concentration change the result — check the numbers.', 'Los errores de digitación o la elección de la concentración alteran el resultado — verifique los números.'],
    'Conduta clínica, monitorização e via de administração ficam a cargo da equipe e das normas da UTI/enfermaria.': ['Clinical management, monitoring and route of administration are the responsibility of the team and of ICU/ward policies.', 'La conducta clínica, la monitorización y la vía de administración quedan a cargo del equipo y de las normas de la UCI/sala.'],
    'Referências:': ['References:', 'Referencias:'],

    // Alertas
    'Por favor, preencha a dose e unidade da droga.': ['Please enter the drug dose and unit.', 'Por favor, complete la dosis y la unidad del fármaco.'],
    'Dados limpos! Pronto para novo calculo.': ['Data cleared! Ready for a new calculation.', '¡Datos borrados! Listo para un nuevo cálculo.'],
    'Historico de calculos limpo!': ['Calculation history cleared!', '¡Historial de cálculos borrado!'],
    'Nenhum calculo no historico. Use "Acrescentar calculo ao texto" pelo menos uma vez antes de copiar.': [
      'No calculations in the history. Use "Add calculation to text" at least once before copying.',
      'No hay cálculos en el historial. Use "Añadir cálculo al texto" al menos una vez antes de copiar.'
    ],
    'Aviso Clínico: O peso inserido parece estar fora dos limites clínicos pediátricos esperados. Por favor, insira um peso válido (entre 0.1 kg e 200 kg).': [
      'Clinical Warning: The weight entered appears to be outside the expected pediatric clinical limits. Please enter a valid weight (between 0.1 kg and 200 kg).',
      'Aviso clínico: El peso ingresado parece estar fuera de los límites clínicos pediátricos esperados. Por favor, ingrese un peso válido (entre 0.1 kg y 200 kg).'
    ],

    // Texto copiado
    'RESUMO INFORMATIVO — drogas cardiovasculares (NeoPedCalc, uso educativo)': ['INFORMATIONAL SUMMARY — cardiovascular drugs (NeoPedCalc, educational use)', 'RESUMEN INFORMATIVO — fármacos cardiovasculares (NeoPedCalc, uso educativo)'],
    'Historico de calculos (revisar):': ['Calculation history (review):', 'Historial de cálculos (revisar):'],
    'calculo': ['calculation', 'cálculo'],
    'data/hora': ['date/time', 'fecha/hora'],
    'nome': ['name', 'nombre'],
    'Paciente': ['Patient', 'Paciente'],
    'data de nascimento': ['date of birth', 'fecha de nacimiento'],
    'peso': ['weight', 'peso'],
    'idade': ['age', 'edad'],
    'anos': ['years', 'años'],
    'droga utilizada:': ['drug used:', 'fármaco utilizado:'],
    'nome da droga': ['drug name', 'nombre del fármaco'],
    'dosagem escolhida': ['selected dose', 'dosis elegida'],
    'dose total no tempo escolhido': ['total dose over selected time', 'dosis total en el tiempo elegido'],
    'volume da droga': ['drug volume', 'volumen del fármaco'],
    'velocidade de infusao': ['infusion rate', 'velocidad de infusión'],
    'informacoes da droga': ['drug information', 'información del fármaco'],
    'detalhes tecnicos:': ['technical details:', 'detalles técnicos:'],
    'apresentacao': ['concentration', 'presentación'],
    'volume de infusao': ['infusion volume', 'volumen de infusión'],
    'tempo de infusao': ['infusion time', 'tiempo de infusión'],
    'NOTA EDUCATIVA: Revise todos os valores. A NeoPedCalc nao substitui julgamento clinico nem protocolos institucionais.': [
      'EDUCATIONAL NOTE: Review all values. NeoPedCalc does not replace clinical judgment or institutional protocols.',
      'NOTA EDUCATIVA: Revise todos los valores. NeoPedCalc no sustituye el juicio clínico ni los protocolos institucionales.'
    ],
    '(Rodape legal NeoPedCalc indisponivel neste contexto.)': ['(NeoPedCalc legal footer unavailable in this context.)', '(Pie legal de NeoPedCalc no disponible en este contexto.)']
  });

  i18n.registerPatterns([
    // Vasopressina (valores de formatarNumeroClinico, já com ponto decimal).
    [/^(\d+(?:\.\d+)?) UI$/, '$1 IU', '$1 UI'],
    [/^Solução final: (\d+(?:\.\d+)?) UI\/ml$/, 'Final solution: $1 IU/ml', 'Solución final: $1 UI/ml'],
    [/^Aviso Clínico: Você selecionou uma dosagem de Neonato\/Lactente menor para um paciente de aproximadamente (\d+(?:\.\d+)?) anos\. Avalie as preparações alternativas para faixas etárias maiores\.$/,
      'Clinical Warning: You selected a Neonate/younger Infant dose for a patient of approximately $1 years. Consider the alternative preparations for older age groups.',
      'Aviso clínico: Seleccionó una dosis de neonato/lactante menor para un paciente de aproximadamente $1 años. Evalúe las preparaciones alternativas para grupos de edad mayores.']
  ]);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
