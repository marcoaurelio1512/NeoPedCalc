/* Emergência Pediátrica (files/Emergencia_pediatrica.html) — [inglês, espanhol].
 * Parte 2: drogas (nome, apresentação, dose, máximo, observações), linhas calculadas e bloco do cálculo rápido.
 * Números, doses e concentrações não mudam. No inglês, a vírgula decimal dos textos fixos vira ponto
 * (ex.: "0,1mg/kg" → "0.1mg/kg"; "1:10.000" → "1:10,000"); os valores calculados já saem com ponto (toFixed). */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  // ===== Nomes das drogas (seletor, cartões e bloco do cálculo)
  i18n.register({
    'Adenosina': ['Adenosine', 'Adenosina'],
    'Amiodarona': ['Amiodarone', 'Amiodarona'],
    'Amlodipina (uso oral)': ['Amlodipine (oral)', 'Amlodipino (vía oral)'],
    'Atenolol (uso oral)': ['Atenolol (oral)', 'Atenolol (vía oral)'],
    'Atropina': ['Atropine', 'Atropina'],
    'Bicarbonato de sódio': ['Sodium bicarbonate', 'Bicarbonato de sodio'],
    'Brometo de ipratrópio (uso inalatório)': ['Ipratropium bromide (inhaled)', 'Bromuro de ipratropio (vía inhalatoria)'],
    'Carvão ativado (uso oral)': ['Activated charcoal (oral)', 'Carbón activado (vía oral)'],
    'Cetoprofeno': ['Ketoprofen', 'Ketoprofeno'],
    'Cetorolaco': ['Ketorolac', 'Ketorolaco'],
    'Choque - Cardioversão': ['Shock - Cardioversion', 'Descarga - Cardioversión'],
    'Choque - Desfibrilação': ['Shock - Defibrillation', 'Descarga - Desfibrilación'],
    'Clonidina': ['Clonidine', 'Clonidina'],
    'Cloreto de cálcio': ['Calcium chloride', 'Cloruro de calcio'],
    'Codeína (uso oral)': ['Codeine (oral)', 'Codeína (vía oral)'],
    'Dexametasona': ['Dexamethasone', 'Dexametasona'],
    'Dexmedetomidina': ['Dexmedetomidine', 'Dexmedetomidina'],
    'Diazepam': ['Diazepam', 'Diazepam'],
    'Difenidramina': ['Diphenhydramine', 'Difenhidramina'],
    'Dipirona': ['Metamizole (dipyrone)', 'Metamizol (dipirona)'],
    'Enalapril': ['Enalapril', 'Enalapril'],
    'Epinefrina': ['Epinephrine', 'Epinefrina (adrenalina)'],
    'Etomidato': ['Etomidate', 'Etomidato'],
    'Fenitoína': ['Phenytoin', 'Fenitoína'],
    'Fenobarbital sódico': ['Phenobarbital sodium', 'Fenobarbital sódico'],
    'Fentanila': ['Fentanyl', 'Fentanilo'],
    // 'Flumazenil' não é registrado: igual nas três línguas e é o fim da observação do midazolam.
    'Furosemida': ['Furosemide', 'Furosemida'],
    'Glicose': ['Glucose (dextrose)', 'Glucosa'],
    'Gluconato de cálcio': ['Calcium gluconate', 'Gluconato de calcio'],
    'Haloperidol (intramuscular)': ['Haloperidol (intramuscular)', 'Haloperidol (intramuscular)'],
    'Hidralazina': ['Hydralazine', 'Hidralazina'],
    'Hidrato de cloral (uso oral ou retal)': ['Chloral hydrate (oral or rectal)', 'Hidrato de cloral (vía oral o rectal)'],
    'Hidrocortisona': ['Hydrocortisone', 'Hidrocortisona'],
    'Ketamina': ['Ketamine', 'Ketamina'],
    'Lidocaína': ['Lidocaine', 'Lidocaína'],
    'Manitol': ['Mannitol', 'Manitol'],
    'Metilprednisolona': ['Methylprednisolone', 'Metilprednisolona'],
    'Midazolam': ['Midazolam', 'Midazolam'],
    'Morfina': ['Morphine', 'Morfina'],
    'Morfina (uso oral)': ['Morphine (oral)', 'Morfina (vía oral)'],
    'Naloxona': ['Naloxone', 'Naloxona'],
    'Oxicodona (uso oral)': ['Oxycodone (oral)', 'Oxicodona (vía oral)'],
    'Propofol': ['Propofol', 'Propofol'],
    'Propranolol (uso oral)': ['Propranolol (oral)', 'Propranolol (vía oral)'],
    'Rocurônio': ['Rocuronium', 'Rocuronio'],
    'Salbutamol (uso inalatório)': ['Albuterol (salbutamol), inhaled', 'Salbutamol (vía inhalatoria)'],
    'Succinilcolina': ['Succinylcholine', 'Succinilcolina'],
    'Sugamadex': ['Sugammadex', 'Sugammadex'],
    'Sulfato de magnésio': ['Magnesium sulfate', 'Sulfato de magnesio'],
    'Terbutalina': ['Terbutaline', 'Terbutalina'],
    'Tiopental': ['Thiopental', 'Tiopental'],
    'Tramadol': ['Tramadol', 'Tramadol'],
    'Amiodarona infusão': ['Amiodarone infusion', 'Amiodarona en infusión'],
    'Amrinona': ['Amrinone (inamrinone)', 'Amrinona'],
    'Clonidina infusão': ['Clonidine infusion', 'Clonidina en infusión'],
    'Dexmedetomidina infusão': ['Dexmedetomidine infusion', 'Dexmedetomidina en infusión'],
    'Dobutamina': ['Dobutamine', 'Dobutamina'],
    'Dopamina': ['Dopamine', 'Dopamina'],
    'Epinefrina infusão': ['Epinephrine infusion', 'Epinefrina (adrenalina) en infusión'],
    'Fentanila infusão': ['Fentanyl infusion', 'Fentanilo en infusión'],
    'Fenoldopan': ['Fenoldopam', 'Fenoldopam'],
    'Ketamina infusão': ['Ketamine infusion', 'Ketamina en infusión'],
    'Labetalol': ['Labetalol', 'Labetalol'],
    'Levosimendan': ['Levosimendan', 'Levosimendán'],
    'Lidocaína infusão': ['Lidocaine infusion', 'Lidocaína en infusión'],
    'Midazolam infusão': ['Midazolam infusion', 'Midazolam en infusión'],
    'Milrinona': ['Milrinone', 'Milrinona'],
    'Morfina infusão': ['Morphine infusion', 'Morfina en infusión'],
    'Nicardipina': ['Nicardipine', 'Nicardipino'],
    'Nitroglicerina': ['Nitroglycerin', 'Nitroglicerina'],
    'Nitroprussiato de sódio': ['Sodium nitroprusside', 'Nitroprusiato de sodio'],
    'Norepinefrina': ['Norepinephrine', 'Norepinefrina (noradrenalina)'],
    'Octeotride': ['Octreotide', 'Octreotida'],
    'Propofol infusão': ['Propofol infusion', 'Propofol en infusión'],
    'Rocurônio infusão': ['Rocuronium infusion', 'Rocuronio en infusión'],
    'Prostaglandina E1': ['Prostaglandin E1 (alprostadil)', 'Prostaglandina E1'],
    'Salbutamol infusão': ['Albuterol (salbutamol) infusion', 'Salbutamol en infusión'],
    'Somatostatina': ['Somatostatin', 'Somatostatina'],
    'Terbutalina infusão': ['Terbutaline infusion', 'Terbutalina en infusión'],
    'Tiopental infusão': ['Thiopental infusion', 'Tiopental en infusión'],
    'Vasopressina': ['Vasopressin', 'Vasopresina']
  });

  // ===== Apresentações (só as que têm texto a traduzir ou vírgula decimal)
  i18n.register({
    'Norvasc® · Comp 5mg e 10mg': ['Norvasc® · 5mg and 10mg tablets', 'Norvasc® · Comp. 5mg y 10mg'],
    'Atenol® · Comp 25mg, 50mg e 100mg': ['Atenol® · 25mg, 50mg and 100mg tablets', 'Atenol® · Comp. 25mg, 50mg y 100mg'],
    'Pasmodex® · 0,25mg/ml': ['Pasmodex® · 0.25mg/ml', 'Pasmodex® · 0,25mg/ml'],
    'Bicarbonato sódio 8,4% · 1mEq/ml': ['Sodium bicarbonate 8.4% · 1mEq/ml', 'Bicarbonato de sodio 8,4% · 1mEq/ml'],
    'Atrovent® · Sol. nebulização 250mcg/ml': ['Atrovent® · Nebulizer solution 250mcg/ml', 'Atrovent® · Sol. para nebulización 250mcg/ml'],
    'De manipulação': ['Compounded', 'Fórmula magistral'],
    'Cardioversão': ['Cardioversion', 'Cardioversión'],
    'Desfibrilação': ['Defibrillation', 'Desfibrilación'],
    'Cloreto cálcio 10% · 100mg/ml': ['Calcium chloride 10% · 100mg/ml', 'Cloruro de calcio 10% · 100mg/ml'],
    'Codein® · Solução oral 3mg/ml · Comp 30 e 60mg': ['Codein® · Oral solution 3mg/ml · 30 and 60mg tablets', 'Codein® · Solución oral 3mg/ml · Comp. 30 y 60mg'],
    'Decadron® · 4mg/2,5ml · 2mg/ml': ['Decadron® · 4mg/2.5ml · 2mg/ml', 'Decadron® · 4mg/2,5ml · 2mg/ml'],
    'Lanexat® · 0,1mg/ml': ['Lanexat® · 0.1mg/ml', 'Lanexat® · 0,1mg/ml'],
    '10%: 1ml: 0,10 g · 25%: 1 ml: 0,25 g': ['10%: 1ml: 0.10 g · 25%: 1 ml: 0.25 g', '10%: 1ml: 0,10 g · 25%: 1 ml: 0,25 g'],
    'Gluconato cálcio 10% · 100mg/ml': ['Calcium gluconate 10% · 100mg/ml', 'Gluconato de calcio 10% · 100mg/ml'],
    'Xarope a 10% · 500mg/5ml': ['10% syrup · 500mg/5ml', 'Jarabe al 10% · 500mg/5ml'],
    'Xylestesin® 2% (sem vasoconstritor) · 20mg/ml': ['Xylestesin® 2% (without vasoconstrictor) · 20mg/ml', 'Xylestesin® 2% (sin vasoconstrictor) · 20mg/ml'],
    '20% · 0,2g/ml · Solução injetável': ['20% · 0.2g/ml · Solution for injection', '20% · 0,2g/ml · Solución inyectable'],
    'Dimorf® · Comp 10mg e 30mg': ['Dimorf® · 10mg and 30mg tablets', 'Dimorf® · Comp. 10mg y 30mg'],
    'Narcan® · 0,4mg/ml': ['Narcan® · 0.4mg/ml', 'Narcan® · 0,4mg/ml'],
    'Oxycontin® · 10, 20 e 40mg Comp': ['Oxycontin® · 10, 20 and 40mg tablets', 'Oxycontin® · Comp. 10, 20 y 40mg'],
    'Inderal® · Comp 10mg, 40mg e 80mg': ['Inderal® · 10mg, 40mg and 80mg tablets', 'Inderal® · Comp. 10mg, 40mg y 80mg'],
    'Aerolin® · Spray: 100mcg · Sol. nebulização: 5mg/ml · Nebules: 2,5mg/flaconete': ['Aerolin® · Inhaler: 100mcg · Nebulizer solution: 5mg/ml · Nebules: 2.5mg/vial', 'Aerolin® · Aerosol: 100mcg · Sol. para nebulización: 5mg/ml · Nebules: 2,5mg/vial'],
    'Sulfato Magnésio 50% · 500 mg/ml': ['Magnesium sulfate 50% · 500 mg/ml', 'Sulfato de magnesio 50% · 500 mg/ml'],
    'Terbutil® · 0,5mg/ml': ['Terbutil® · 0.5mg/ml', 'Terbutil® · 0,5mg/ml'],
    'Thiopentax® · 1,0g pó para diluição': ['Thiopentax® · 1.0g powder for reconstitution', 'Thiopentax® · 1,0g polvo para dilución'],
    'Dobutrex® · 12,5mg/ml': ['Dobutrex® · 12.5mg/ml', 'Dobutrex® · 12,5mg/ml'],
    'Simdax® · 2,5mg/ml': ['Simdax® · 2.5mg/ml', 'Simdax® · 2,5mg/ml'],
    'Sandostatin® · Ampolas: 0,05mg, 0,1mg, 0,5mg': ['Sandostatin® · Ampoules: 0.05mg, 0.1mg, 0.5mg', 'Sandostatin® · Ampollas: 0,05mg, 0,1mg, 0,5mg'],
    'Thionembutal® · Frascos: 0,5 e 1,0g': ['Thionembutal® · Vials: 0.5 and 1.0g', 'Thionembutal® · Frascos: 0,5 y 1,0g']
  });

  // ===== Doses do card
  i18n.register({
    '0,1mg/kg e depois 0,2 mg/kg s/n': ['0.1mg/kg, then 0.2 mg/kg PRN', '0,1mg/kg y después 0,2 mg/kg si es necesario'],
    '0,1 a 0,3mg/kg · 6-17 anos: 2,5 a 5 mg/dia': ['0.1 to 0.3mg/kg · 6-17 years: 2.5 to 5 mg/day', '0,1 a 0,3mg/kg · 6-17 años: 2,5 a 5 mg/día'],
    '1 a 2mg/kg': ['1 to 2mg/kg', '1 a 2mg/kg'],
    '0,02 mg/kg': ['0.02 mg/kg', '0,02 mg/kg'],
    'Nebulização 250 a 500 mcg a cada 20 minutos, 3 vezes': ['Nebulization 250 to 500 mcg every 20 minutes, 3 times', 'Nebulización 250 a 500 mcg cada 20 minutos, 3 veces'],
    '1,0 g/kg/dose VO ou SNG': ['1.0 g/kg/dose PO or via NG tube', '1,0 g/kg/dosis VO o por SNG'],
    '1 mg/kg/dose EV ou VO': ['1 mg/kg/dose IV or PO', '1 mg/kg/dosis IV o VO'],
    '0,2 a 1 mg/kg': ['0.2 to 1 mg/kg', '0,2 a 1 mg/kg'],
    '0,5 a 2 J/kg': ['0.5 to 2 J/kg', '0,5 a 2 J/kg'],
    '2 a 10J/kg (subir de 2 em 2 J/kg)': ['2 to 10J/kg (increase in 2 J/kg steps)', '2 a 10J/kg (aumentar de 2 en 2 J/kg)'],
    '2 a 5 mcg/kg/dose': ['2 to 5 mcg/kg/dose', '2 a 5 mcg/kg/dosis'],
    '0,5-1,0 mg/kg/dose': ['0.5-1.0 mg/kg/dose', '0,5-1,0 mg/kg/dosis'],
    'Laringite aguda · 0,6mg/kg/dia IM ou EV': ['Acute laryngitis (croup) · 0.6mg/kg/day IM or IV', 'Laringitis aguda · 0,6mg/kg/día IM o IV'],
    '0,2 a 1mcg/kg em 10 min · IN: 1-3 mcg/kg': ['0.2 to 1mcg/kg over 10 min · IN: 1-3 mcg/kg', '0,2 a 1mcg/kg en 10 min · IN: 1-3 mcg/kg'],
    '0,2 a 0,5 mg/kg': ['0.2 to 0.5 mg/kg', '0,2 a 0,5 mg/kg'],
    '1 a 2 mg/kg': ['1 to 2 mg/kg', '1 a 2 mg/kg'],
    '10 a 25mg/kg/dose': ['10 to 25mg/kg/dose', '10 a 25mg/kg/dosis'],
    'Em bolus 5 a 10 mcg/kg/dose · Dose oral 0,1 a 0,5mg/kg/dia': ['Bolus 5 to 10 mcg/kg/dose · Oral dose 0.1 to 0.5mg/kg/day', 'En bolo 5 a 10 mcg/kg/dosis · Dosis oral 0,1 a 0,5mg/kg/día'],
    'EV/IO 0,01mg/kg (0,1ml/kg 1:10.000) · Endotraqueal 0,1mg/kg · Anafilaxia IM 0,01mg/kg': ['IV/IO 0.01mg/kg (0.1ml/kg 1:10,000) · Endotracheal 0.1mg/kg · Anaphylaxis IM 0.01mg/kg', 'IV/IO 0,01mg/kg (0,1ml/kg 1:10.000) · Endotraqueal 0,1mg/kg · Anafilaxia IM 0,01mg/kg'],
    '0,2 a 0,4mg/kg': ['0.2 to 0.4mg/kg', '0,2 a 0,4mg/kg'],
    '15 a 30mg/kg': ['15 to 30mg/kg', '15 a 30mg/kg'],
    '15 a 20 mg/kg': ['15 to 20 mg/kg', '15 a 20 mg/kg'],
    '1 a 4 mcg/kg': ['1 to 4 mcg/kg', '1 a 4 mcg/kg'],
    '0,01 a 0,05 mg/kg': ['0.01 to 0.05 mg/kg', '0,01 a 0,05 mg/kg'],
    '0,5 a 6mg/kg/dose': ['0.5 to 6mg/kg/dose', '0,5 a 6mg/kg/dosis'],
    '0,5 a 1,0 g/kg': ['0.5 to 1.0 g/kg', '0,5 a 1,0 g/kg'],
    '60 a 100 mg/kg': ['60 to 100 mg/kg', '60 a 100 mg/kg'],
    '6 a 12 anos: 1 a 3mg/dose · >12 anos: 5mg/dose': ['6 to 12 years: 1 to 3mg/dose · >12 years: 5mg/dose', '6 a 12 años: 1 a 3mg/dosis · >12 años: 5mg/dosis'],
    '0,2 a 1,0mg/kg/dia · Em 2 a 4 doses/dia': ['0.2 to 1.0mg/kg/day · In 2 to 4 doses/day', '0,2 a 1,0mg/kg/día · En 2 a 4 dosis/día'],
    '25 a 100 mg/kg': ['25 to 100 mg/kg', '25 a 100 mg/kg'],
    '4 a 10 mg/kg': ['4 to 10 mg/kg', '4 a 10 mg/kg'],
    '0,5 a 2 mg/kg (EV/IO) · 2-4 mg/kg IM': ['0.5 to 2 mg/kg (IV/IO) · 2-4 mg/kg IM', '0,5 a 2 mg/kg (IV/IO) · 2-4 mg/kg IM'],
    '0,5 a 1 mg/kg': ['0.5 to 1 mg/kg', '0,5 a 1 mg/kg'],
    '0,1 a 0,4 mg/kg · IN: 0,3-0,5 mg/kg/dose': ['0.1 to 0.4 mg/kg · IN: 0.3-0.5 mg/kg/dose', '0,1 a 0,4 mg/kg · IN: 0,3-0,5 mg/kg/dosis'],
    '0,1 a 0,2 mg/kg': ['0.1 to 0.2 mg/kg', '0,1 a 0,2 mg/kg'],
    '3 a 6 meses: 0,1mg/kg/dose · > 6 meses: 0,2 – 0,5mg/kg/dose': ['3 to 6 months: 0.1mg/kg/dose · > 6 months: 0.2 – 0.5mg/kg/dose', '3 a 6 meses: 0,1mg/kg/dosis · > 6 meses: 0,2 – 0,5mg/kg/dosis'],
    '0,01 mg/kg/dose cd 3 min · Antídoto: 0,1 mg/kg/dose cd 5 min': ['0.01 mg/kg/dose every 3 min · Antidote: 0.1 mg/kg/dose every 5 min', '0,01 mg/kg/dosis cada 3 min · Antídoto: 0,1 mg/kg/dosis cada 5 min'],
    '0,05 a 0,15 mg/kg': ['0.05 to 0.15 mg/kg', '0,05 a 0,15 mg/kg'],
    '1 a 3 mg/kg · Pode repetir 0,5 mg/kg a cada 3-5 min': ['1 to 3 mg/kg · May repeat 0.5 mg/kg every 3-5 min', '1 a 3 mg/kg · Puede repetirse 0,5 mg/kg cada 3-5 min'],
    '1 a 3 mg/kg/dose': ['1 to 3 mg/kg/dose', '1 a 3 mg/kg/dosis'],
    '0,6 a 1,2 mg/kg': ['0.6 to 1.2 mg/kg', '0,6 a 1,2 mg/kg'],
    'Nebulização 0,15 mg/kg (mínimo: 2,5mg) a cada 20 minutos, 3 vezes · Aerossol 4 a 10 borrifadas (mínimo de 4)': ['Nebulization 0.15 mg/kg (minimum: 2.5mg) every 20 minutes, 3 times · MDI 4 to 10 puffs (minimum of 4)', 'Nebulización 0,15 mg/kg (mínimo: 2,5mg) cada 20 minutos, 3 veces · Aerosol 4 a 10 inhalaciones (mínimo de 4)'],
    '1 a 2 mg/kg EV/IO. IM: 2 a 4 mg/kg': ['1 to 2 mg/kg IV/IO. IM: 2 to 4 mg/kg', '1 a 2 mg/kg IV/IO. IM: 2 a 4 mg/kg'],
    '3 a 5 mg/kg': ['3 to 5 mg/kg', '3 a 5 mg/kg'],
    // Infusão contínua
    'Ataque: 5mg/kg · Manutenção: 5 a 10mcg/kg/min': ['Loading dose: 5mg/kg · Maintenance: 5 to 10mcg/kg/min', 'Dosis de carga: 5mg/kg · Mantenimiento: 5 a 10mcg/kg/min'],
    'Ataque: 0,75 a 1mg/kg · Manutenção 5 a 10mcg/kg/min': ['Loading dose: 0.75 to 1mg/kg · Maintenance 5 to 10mcg/kg/min', 'Dosis de carga: 0,75 a 1mg/kg · Mantenimiento 5 a 10mcg/kg/min'],
    '0,1 a 3 microgramas/kg/h': ['0.1 to 3 micrograms/kg/h', '0,1 a 3 microgramos/kg/h'],
    '0,2 a 1,0 microgramas/kg/h': ['0.2 to 1.0 micrograms/kg/h', '0,2 a 1,0 microgramos/kg/h'],
    '2 a 20 mcg/kg/min': ['2 to 20 mcg/kg/min', '2 a 20 mcg/kg/min'],
    '5 a 10 mcg/kg/min': ['5 to 10 mcg/kg/min', '5 a 10 mcg/kg/min'],
    '0,1 a 0,3 mcg/kg/min': ['0.1 to 0.3 mcg/kg/min', '0,1 a 0,3 mcg/kg/min'],
    'Ataque: 2 a 7mcg/kg · Manutenção: 1 a 10mcg/kg/hora': ['Loading dose: 2 to 7mcg/kg · Maintenance: 1 to 10mcg/kg/hour', 'Dosis de carga: 2 a 7mcg/kg · Mantenimiento: 1 a 10mcg/kg/hora'],
    '0,1 a 0,8mcg/kg/min': ['0.1 to 0.8mcg/kg/min', '0,1 a 0,8mcg/kg/min'],
    'Ataque: 1 a 4mg/kg · Manutenção: 5 a 30 mcg/kg/min': ['Loading dose: 1 to 4mg/kg · Maintenance: 5 to 30 mcg/kg/min', 'Dosis de carga: 1 a 4mg/kg · Mantenimiento: 5 a 30 mcg/kg/min'],
    'Ataque: 0,2 a 1mg/kg · Manutenção: 0,25 a 3mg/kg/hora': ['Loading dose: 0.2 to 1mg/kg · Maintenance: 0.25 to 3mg/kg/hour', 'Dosis de carga: 0,2 a 1mg/kg · Mantenimiento: 0,25 a 3mg/kg/hora'],
    'Ataque: 6 a 12mcg/kg em 10 min · Manutenção: 0,05 a 0,2mcg/kg/min': ['Loading dose: 6 to 12mcg/kg over 10 min · Maintenance: 0.05 to 0.2mcg/kg/min', 'Dosis de carga: 6 a 12mcg/kg en 10 min · Mantenimiento: 0,05 a 0,2mcg/kg/min'],
    'Ataque: 1mg/kg/dose · Manutenção: 20 a 50mcg/kg/min': ['Loading dose: 1mg/kg/dose · Maintenance: 20 to 50mcg/kg/min', 'Dosis de carga: 1mg/kg/dosis · Mantenimiento: 20 a 50mcg/kg/min'],
    'Ataque: 0,2 a 0,4mg/kg · Sedação: 0,1 a 0,6 mg/kg/hora · Mal convulsivo 1 a 18 mcg/Kg/min': ['Loading dose: 0.2 to 0.4mg/kg · Sedation: 0.1 to 0.6 mg/kg/hour · Status epilepticus 1 to 18 mcg/Kg/min', 'Dosis de carga: 0,2 a 0,4mg/kg · Sedación: 0,1 a 0,6 mg/kg/hora · Estado epiléptico 1 a 18 mcg/Kg/min'],
    'Ataque: 50 a 75mcg/kg em até 1 hora · Manutenção: 0,25 a 0,75mcg/kg/min': ['Loading dose: 50 to 75mcg/kg over up to 1 hour · Maintenance: 0.25 to 0.75mcg/kg/min', 'Dosis de carga: 50 a 75mcg/kg en hasta 1 hora · Mantenimiento: 0,25 a 0,75mcg/kg/min'],
    'Ataque: 0,1 a 0,2mg/kg · Manutenção: 10-60 mcg/kg/hora': ['Loading dose: 0.1 to 0.2mg/kg · Maintenance: 10-60 mcg/kg/hour', 'Dosis de carga: 0,1 a 0,2mg/kg · Mantenimiento: 10-60 mcg/kg/hora'],
    '0,5 a 3mcg/kg/min': ['0.5 to 3mcg/kg/min', '0,5 a 3mcg/kg/min'],
    '0,3 a 1mcg/kg/min · Até 5mcg/kg/min': ['0.3 to 1mcg/kg/min · Up to 5mcg/kg/min', '0,3 a 1mcg/kg/min · Hasta 5mcg/kg/min'],
    '0,5 a 1 mcg/kg/min · Até 8mcg/kg/min IV/IO': ['0.5 to 1 mcg/kg/min · Up to 8mcg/kg/min IV/IO', '0,5 a 1 mcg/kg/min · Hasta 8mcg/kg/min IV/IO'],
    '0,1 a 2,0 mcg/kg/min': ['0.1 to 2.0 mcg/kg/min', '0,1 a 2,0 mcg/kg/min'],
    'Ataque: 1mcg/kg · Máx: 50 mcg/h · Manutenção: 1 a 2mcg/kg/hora': ['Loading dose: 1mcg/kg · Max: 50 mcg/h · Maintenance: 1 to 2mcg/kg/hour', 'Dosis de carga: 1mcg/kg · Máx.: 50 mcg/h · Mantenimiento: 1 a 2mcg/kg/hora'],
    'Ataque 1 a 2mg/kg · Manutenção 25 a 300 mcg/kg/min · 0,6 a 4 mg/kg/hora': ['Loading dose 1 to 2mg/kg · Maintenance 25 to 300 mcg/kg/min · 0.6 to 4 mg/kg/hour', 'Dosis de carga 1 a 2mg/kg · Mantenimiento 25 a 300 mcg/kg/min · 0,6 a 4 mg/kg/hora'],
    'Ataque: 0,6 a 1,2mg/kg · Manutenção: 6 a 10 mcg/kg/min': ['Loading dose: 0.6 to 1.2mg/kg · Maintenance: 6 to 10 mcg/kg/min', 'Dosis de carga: 0,6 a 1,2mg/kg · Mantenimiento: 6 a 10 mcg/kg/min'],
    '0,01 a 0,1mcg/kg/min': ['0.01 to 0.1mcg/kg/min', '0,01 a 0,1mcg/kg/min'],
    'Ataque: 15mcg/kg (até 500mcg) (Infundir em 10min) · Manutenção: 0,5-15 mcg/kg/min': ['Loading dose: 15mcg/kg (up to 500mcg) (Infuse over 10min) · Maintenance: 0.5-15 mcg/kg/min', 'Dosis de carga: 15mcg/kg (hasta 500mcg) (Infundir en 10min) · Mantenimiento: 0,5-15 mcg/kg/min'],
    'Ataque: 1 a 5mcg/kg · Manutenção: 3 a 10 mcg/kg/hora': ['Loading dose: 1 to 5mcg/kg · Maintenance: 3 to 10 mcg/kg/hour', 'Dosis de carga: 1 a 5mcg/kg · Mantenimiento: 3 a 10 mcg/kg/hora'],
    'Ataque: 10mcg/kg (Infundir em 10 min) · Manutenção: 0,1 a 10 mcg/kg/min': ['Loading dose: 10mcg/kg (Infuse over 10 min) · Maintenance: 0.1 to 10 mcg/kg/min', 'Dosis de carga: 10mcg/kg (Infundir en 10 min) · Mantenimiento: 0,1 a 10 mcg/kg/min'],
    'Ataque 2 a 5mg/kg · Manutenção 10 a 100mcg/kg/min · 1 a 5 mg/kg/h': ['Loading dose 2 to 5mg/kg · Maintenance 10 to 100mcg/kg/min · 1 to 5 mg/kg/h', 'Dosis de carga 2 a 5mg/kg · Mantenimiento 10 a 100mcg/kg/min · 1 a 5 mg/kg/h'],
    'Ataque: 0,4 a 1U/kg · Manutenção: 0,00002 a 0,002U/kg/min': ['Loading dose: 0.4 to 1U/kg · Maintenance: 0.00002 to 0.002U/kg/min', 'Dosis de carga: 0,4 a 1U/kg · Mantenimiento: 0,00002 a 0,002U/kg/min']
  });

  // ===== Máximos (todos listados: também servem para separar o bloco do cálculo)
  var MAXES = {
    'Max: 12mg': ['Max: 12mg', 'Máx.: 12mg'],
    'Máx: 300mg': ['Max: 300mg', 'Máx.: 300mg'],
    'Máx: 200mg/dia': ['Max: 200mg/day', 'Máx.: 200mg/día'],
    'Máx criança: 0,5mg · Máx adolescente: 1,0 mg': ['Max child: 0.5mg · Max adolescent: 1.0 mg', 'Máx. niño: 0,5mg · Máx. adolescente: 1,0 mg'],
    'Veloc máx: 1mEq/kg/h': ['Max rate: 1mEq/kg/h', 'Velocidad máx.: 1mEq/kg/h'],
    'Máx: 100g/dose': ['Max: 100g/dose', 'Máx.: 100g/dosis'],
    'Máx: 300mg/dia': ['Max: 300mg/day', 'Máx.: 300mg/día'],
    'Máx: 120mg/dia': ['Max: 120mg/day', 'Máx.: 120mg/día'],
    'Máx: 1g': ['Max: 1g', 'Máx.: 1g'],
    'Máximo: 60mg': ['Maximum: 60mg', 'Máximo: 60mg'],
    'Max: 16mg': ['Max: 16mg', 'Máx.: 16mg'],
    'Máx: 0,6mg/kg': ['Max: 0.6mg/kg', 'Máx.: 0,6mg/kg'],
    'Máx: 50mg/dose': ['Max: 50mg/dose', 'Máx.: 50mg/dosis'],
    'Máx: 1g/dose': ['Max: 1g/dose', 'Máx.: 1g/dosis'],
    'Máx (HA): 5 mg/dia · Máx (ICC): 40mg/dia': ['Max (HTN): 5 mg/day · Max (CHF): 40mg/day', 'Máx. (HTA): 5 mg/día · Máx. (ICC): 40mg/día'],
    'Máx EV/IO: 1mg · Máx ET: 2,5mg · Máx IM: 0,5mg': ['Max IV/IO: 1mg · Max ET: 2.5mg · Max IM: 0.5mg', 'Máx. IV/IO: 1mg · Máx. ET: 2,5mg · Máx. IM: 0,5mg'],
    'Max: 1500mg · Vel máx: 1mg/kg/min': ['Max: 1500mg · Max rate: 1mg/kg/min', 'Máx.: 1500mg · Velocidad máx.: 1mg/kg/min'],
    'Máx: 800mg': ['Max: 800mg', 'Máx.: 800mg'],
    'Máx: 100mcg': ['Max: 100mcg', 'Máx.: 100mcg'],
    'Máx: 0,2mg dose': ['Max: 0.2mg per dose', 'Máx.: 0,2mg por dosis'],
    'Vel máx: 100mg/min': ['Max rate: 100mg/min', 'Velocidad máx.: 100mg/min'],
    'Máx: 0,15mg/kg/dia': ['Max: 0.15mg/kg/day', 'Máx.: 0,15mg/kg/día'],
    'Máx: 25mg/dose': ['Max: 25mg/dose', 'Máx.: 25mg/dosis'],
    'Máx: 2g/dose': ['Max: 2g/dose', 'Máx.: 2g/dosis'],
    'Máx: 500mg/dose (ataque) · Máx: 300 mg outras doses - 6/6 hs': ['Max: 500mg/dose (loading) · Max: 300 mg other doses - every 6 h', 'Máx.: 500mg/dosis (carga) · Máx.: 300 mg otras dosis - cada 6 h'],
    'Max: 4mg/kg ou 50mg': ['Max: 4mg/kg or 50mg', 'Máx.: 4mg/kg o 50mg'],
    'Máx: 100mg': ['Max: 100mg', 'Máx.: 100mg'],
    'Infusão lenta: 20 a 30min': ['Slow infusion: 20 to 30min', 'Infusión lenta: 20 a 30min'],
    'Máx: 125 mg/dose': ['Max: 125 mg/dose', 'Máx.: 125 mg/dosis'],
    'Max: <5 anos: 5mg · >5 anos: 10 mg': ['Max: <5 years: 5mg · >5 years: 10 mg', 'Máx.: <5 años: 5mg · >5 años: 10 mg'],
    'Máx: 15mg/dose': ['Max: 15mg/dose', 'Máx.: 15mg/dosis'],
    'Max: 15-20mg': ['Max: 15-20mg', 'Máx.: 15-20mg'],
    'Max: 0,2mg · Antídoto max: 2 mg': ['Max: 0.2mg · Antidote max: 2 mg', 'Máx.: 0,2mg · Antídoto máx.: 2 mg'],
    'Máx: 60mg/dia': ['Max: 60mg/day', 'Máx.: 60mg/día'],
    'Máx: 150mg/dose': ['Max: 150mg/dose', 'Máx.: 150mg/dosis'],
    'Máx: 500mcg': ['Max: 500mcg', 'Máx.: 500mcg'],
    'Máx:100 mg': ['Max:100 mg', 'Máx.:100 mg'],
    'Dose máx bolus: 40U': ['Max bolus dose: 40U', 'Dosis máx. en bolo: 40U']
  };
  i18n.register(MAXES);

  // ===== Observações (só aparecem no bloco do cálculo, depois de "Observações: ")
  var NOTES = {
    'Infundir bolo rápido de 3 a 5ml de SF após a droga': ['Follow with a rapid 3 to 5ml NS flush after the drug', 'Administrar un bolo rápido de 3 a 5ml de SF después del fármaco'],
    'Diluir em SG5%, na concentração máx 2mg/ml': ['Dilute in D5W, max concentration 2mg/ml', 'Diluir en SG 5%, a una concentración máx. de 2mg/ml'],
    'Efeitos colaterais relacionados a dosagem': ['Dose-related adverse effects', 'Efectos adversos relacionados con la dosis'],
    'Contraindicado em edema pulmonar e choque cardiogênico': ['Contraindicated in pulmonary edema and cardiogenic shock', 'Contraindicado en edema pulmonar y shock cardiogénico'],
    'Pode ser feito IO': ['May be given IO', 'Puede administrarse IO'],
    'RN usar 4,2% · Lactente e crianças 8,4%': ['Newborns: use 4.2% · Infants and children: 8.4%', 'RN: usar 4,2% · Lactantes y niños: 8,4%'],
    'Deve ser usado como medicação de resgate e não de manutenção': ['Should be used as rescue medication, not as maintenance', 'Debe usarse como medicación de rescate y no de mantenimiento'],
    'Diluição 1:10 · Em doses repetidas associar laxativo': ['Dilution 1:10 · With repeated doses, add a laxative', 'Dilución 1:10 · En dosis repetidas asociar un laxante'],
    'Hemorragia digestiva · Nefrotoxicidade': ['Gastrointestinal bleeding · Nephrotoxicity', 'Hemorragia digestiva · Nefrotoxicidad'],
    'Iniciar 0,5 a 1J/kg': ['Start with 0.5 to 1J/kg', 'Iniciar con 0,5 a 1J/kg'],
    'Primeira: 2J/kg e seguintes: acrescentar 2 J/kg': ['First: 2J/kg; subsequent: add 2 J/kg', 'Primera: 2J/kg y siguientes: añadir 2 J/kg'],
    'Observar hipotensão e bradicardia': ['Monitor for hypotension and bradycardia', 'Vigilar hipotensión y bradicardia'],
    'Não usar IM ou SC · Extravasamento pode causar necrose': ['Do not give IM or SC · Extravasation may cause necrosis', 'No usar IM ni SC · La extravasación puede causar necrosis'],
    'Hipotensão e depressão respiratória': ['Hypotension and respiratory depression', 'Hipotensión y depresión respiratoria'],
    'Pode ser usado na mesma dose por via oral': ['May be given orally at the same dose', 'Puede usarse por vía oral a la misma dosis'],
    'Pode ser usado por via intranasal': ['May be given intranasally', 'Puede usarse por vía intranasal'],
    'Pode ser EV, IO ou VR · Pode causar hipotensão e depressão respiratória': ['May be given IV, IO or PR · May cause hypotension and respiratory depression', 'Puede administrarse IV, IO o VR · Puede causar hipotensión y depresión respiratoria'],
    'Contraindicado uso em crise asmática aguda · Pode causar excitação paradoxal': ['Contraindicated in acute asthma attacks · May cause paradoxical excitation', 'Contraindicado en crisis asmática aguda · Puede causar excitación paradójica'],
    'Pode ser feita a mesma dose por via oral ou intramuscular': ['The same dose may be given orally or intramuscularly', 'Puede administrarse la misma dosis por vía oral o intramuscular'],
    'Laringite: inalatório 3 a 5 ampolas (1:1000)': ['Laryngitis (croup): inhaled, 3 to 5 ampoules (1:1000)', 'Laringitis: inhalada, 3 a 5 ampollas (1:1000)'],
    'Indicado na IOT em politrauma · Não utilizar em choque séptico': ['Indicated for intubation in polytrauma · Do not use in septic shock', 'Indicado en la IOT en politraumatismo · No utilizar en shock séptico'],
    'Não diluir em glicose · Utilizar 25 a 50ml de SF para 100mg de fenitoína': ['Do not dilute in dextrose · Use 25 to 50ml of NS per 100mg of phenytoin', 'No diluir en glucosa · Utilizar 25 a 50ml de SF por cada 100mg de fenitoína'],
    'Evitar administração > 30mg/min em criança': ['Avoid administration > 30mg/min in children', 'Evitar administración > 30mg/min en niños'],
    'Risco rigidez torácica: infundir lentamente, iniciar com dose intermediária': ['Risk of chest wall rigidity: infuse slowly, start with an intermediate dose', 'Riesgo de rigidez torácica: infundir lentamente, iniciar con una dosis intermedia'],
    'Não reverte efeito de narcóticos · Pode precipitar convulsões': ['Does not reverse opioid (narcotic) effects · May precipitate seizures', 'No revierte el efecto de los narcóticos · Puede precipitar convulsiones'],
    'Pode causar hipocalemia e alcalose metabólica': ['May cause hypokalemia and metabolic alkalosis', 'Puede causar hipopotasemia y alcalosis metabólica'],
    '10%: 5 a 10ml/kg · 25%: 2 a 4 ml/kg': ['10%: 5 to 10ml/kg · 25%: 2 to 4 ml/kg', '10%: 5 a 10ml/kg · 25%: 2 a 4 ml/kg'],
    'Não administrar IM ou SC · Evitar veias periféricas e escalpes': ['Do not give IM or SC · Avoid peripheral veins and scalp-vein (butterfly) needles', 'No administrar IM ni SC · Evitar venas periféricas y agujas tipo mariposa (scalp)'],
    'Pode ser repetido a cada 4 a 8 horas · Não usar por via endovenosa': ['May be repeated every 4 to 8 hours · Do not give intravenously', 'Puede repetirse cada 4 a 8 horas · No usar por vía intravenosa'],
    'Taquicardia reflexa · Uso com cuidado em pacientes com doença renal ou cardíaca grave': ['Reflex tachycardia · Use with caution in patients with severe renal or cardiac disease', 'Taquicardia refleja · Usar con precaución en pacientes con enfermedad renal o cardíaca grave'],
    'Depressão de SNC · Contraindicado em pacientes com doença renal ou hepática': ['CNS depression · Contraindicated in patients with renal or hepatic disease', 'Depresión del SNC · Contraindicado en pacientes con enfermedad renal o hepática'],
    'Crise adrenal · Ataque: 50 mg/m2': ['Adrenal crisis · Loading dose: 50 mg/m2', 'Crisis suprarrenal · Dosis de carga: 50 mg/m2'],
    'Associar atropina e midazolam · Vel máx: 0,5mg/kg/min · Conc máx: 2mg/ml': ['Combine with atropine and midazolam · Max rate: 0.5mg/kg/min · Max conc: 2mg/ml', 'Asociar atropina y midazolam · Velocidad máx.: 0,5mg/kg/min · Conc. máx.: 2mg/ml'],
    'Indicação: IOT em pacientes com risco de aumento PIC': ['Indication: intubation in patients at risk of increased ICP', 'Indicación: IOT en pacientes con riesgo de aumento de la PIC'],
    'Contraindicado em desidratação e doença renal grave': ['Contraindicated in dehydration and severe renal disease', 'Contraindicado en deshidratación y enfermedad renal grave'],
    'Asma · Dose ataque: 2 mg/kg': ['Asthma · Loading dose: 2 mg/kg', 'Asma · Dosis de carga: 2 mg/kg'],
    'Também IM ou intranasal · Contraindicado em choque e glaucoma. Antídoto: Flumazenil': ['Also IM or intranasal · Contraindicated in shock and glaucoma. Antidote: flumazenil', 'También IM o intranasal · Contraindicado en shock y glaucoma. Antídoto: flumazenil'],
    'Depressão respiratória e SNC · Secreção histamina. Antídoto: Naloxone': ['Respiratory and CNS depression · Histamine release. Antidote: naloxone', 'Depresión respiratoria y del SNC · Liberación de histamina. Antídoto: naloxona'],
    'Intervalo de doses 3/3 ou 4/4 horas': ['Dosing interval every 3 or 4 hours', 'Intervalo entre dosis cada 3 o 4 horas'],
    'Pode ser usado EV, SC, IM, ET': ['May be given IV, SC, IM, ET', 'Puede usarse IV, SC, IM, ET'],
    'Devem ser deglutidos inteiros · Não podem ser fracionados ou triturados': ['Must be swallowed whole · Must not be split or crushed', 'Deben deglutirse enteros · No pueden fraccionarse ni triturarse'],
    'Insolúvel em água · Não usar com hipotensão ou choque · Cuidado com síndrome da infusão do propofol': ['Insoluble in water · Do not use in hypotension or shock · Beware of propofol infusion syndrome', 'Insoluble en agua · No usar en hipotensión o shock · Precaución con el síndrome de infusión de propofol'],
    'Contraindicado em asma, ICC e bloqueio cardíaco': ['Contraindicated in asthma, CHF and heart block', 'Contraindicado en asma, ICC y bloqueo cardíaco'],
    'Associar sedação · Pode causar hipotensão ou hipertensão, arritmia e broncoespasmo': ['Give with sedation · May cause hypotension or hypertension, arrhythmia and bronchospasm', 'Asociar sedación · Puede causar hipotensión o hipertensión, arritmia y broncoespasmo'],
    'A cada 20 minutos, 3 vezes': ['Every 20 minutes, 3 times', 'Cada 20 minutos, 3 veces'],
    'Realizar pré tratamento com atropina · Aumento PIC · Não utilizar em politrauma, queimadura e distrofia muscular': ['Pretreat with atropine · Increases ICP · Do not use in polytrauma, burns or muscular dystrophy', 'Realizar pretratamiento con atropina · Aumento de la PIC · No utilizar en politraumatismo, quemaduras ni distrofia muscular'],
    'Reversor do Rocurônio': ['Reverses rocuronium', 'Revierte el rocuronio'],
    'Risco bloqueio cardíaco completo, hipotensão e depressão respiratória · Antídoto: gluconato cálcio': ['Risk of complete heart block, hypotension and respiratory depression · Antidote: calcium gluconate', 'Riesgo de bloqueo cardíaco completo, hipotensión y depresión respiratoria · Antídoto: gluconato de calcio'],
    'Infusão: 10 min · Pode causar agitação, arritmias e palpitação': ['Infusion: over 10 min · May cause agitation, arrhythmias and palpitations', 'Infusión: 10 min · Puede causar agitación, arritmias y palpitaciones'],
    'Instabilidade hemodinâmica e respiratória': ['Hemodynamic and respiratory instability', 'Inestabilidad hemodinámica y respiratoria'],
    'Boa tolerância hemodinâmica e respiratória': ['Good hemodynamic and respiratory tolerance', 'Buena tolerancia hemodinámica y respiratoria'],
    'Diluir em SG5%, na concentração máx 2mg/ml · Meia vida longa: 40 a 55 dias': ['Dilute in D5W, max concentration 2mg/ml · Long half-life: 40 to 55 days', 'Diluir en SG 5%, a una concentración máx. de 2mg/ml · Vida media larga: 40 a 55 días'],
    'Inodilatador · Pode ser feito IO · Não diluir em solução glicosada': ['Inodilator · May be given IO · Do not dilute in dextrose solutions', 'Inodilatador · Puede administrarse IO · No diluir en solución glucosada'],
    'Náuseas e vômitos · Depressão respiratória e hipotensão': ['Nausea and vomiting · Respiratory depression and hypotension', 'Náuseas y vómitos · Depresión respiratoria e hipotensión'],
    'Inotrópico; vasodilatador · Evitar usar em pacientes hipotensos · Pode ser feito IO': ['Inotrope; vasodilator · Avoid in hypotensive patients · May be given IO', 'Inotrópico; vasodilatador · Evitar en pacientes hipotensos · Puede administrarse IO'],
    'Inotrópico; vasodilatador renal e esplâncnico em doses baixas e em doses altas vasopressor · Pode ser feito IO': ['Inotrope; renal and splanchnic vasodilator at low doses and vasopressor at high doses · May be given IO', 'Inotrópico; vasodilatador renal y esplácnico en dosis bajas y vasopresor en dosis altas · Puede administrarse IO'],
    'Inotrópico; vasodilatador em baixas doses e em doses altas cronotrópico e vasopressor · Pode ser feito IO': ['Inotrope; vasodilator at low doses and chronotrope and vasopressor at high doses · May be given IO', 'Inotrópico; vasodilatador en dosis bajas y cronotrópico y vasopresor en dosis altas · Puede administrarse IO'],
    'Pode causar rigidez torácica. Se isso ocorrer usar bloqueador neuromuscular': ['May cause chest wall rigidity. If this occurs, use a neuromuscular blocker', 'Puede causar rigidez torácica. Si ocurre, usar un bloqueante neuromuscular'],
    'Vasodilatador renal · Aumenta PIC e pressão intraocular': ['Renal vasodilator · Increases ICP and intraocular pressure', 'Vasodilatador renal · Aumenta la PIC y la presión intraocular'],
    'Associar midazolam': ['Combine with midazolam', 'Asociar midazolam'],
    'Contraindicado em asma, DPOC, choque cardiogênico': ['Contraindicated in asthma, COPD, cardiogenic shock', 'Contraindicado en asma, EPOC, shock cardiogénico'],
    'Inodilatador · Contraindicado na insuficiência renal': ['Inodilator · Contraindicated in renal failure', 'Inodilatador · Contraindicado en la insuficiencia renal'],
    'Efeitos colaterais incluem hipotensão, assistolia, convulsões e parada respiratória': ['Adverse effects include hypotension, asystole, seizures and respiratory arrest', 'Los efectos adversos incluyen hipotensión, asistolia, convulsiones y paro respiratorio'],
    'Inodilatador': ['Inodilator', 'Inodilatador'],
    'Bloqueador de canal de cálcio · Diminui fluxo cerebral e coronariano': ['Calcium channel blocker · Decreases cerebral and coronary blood flow', 'Bloqueante de los canales de calcio · Disminuye el flujo cerebral y coronario'],
    'Pode causar hipotensão': ['May cause hypotension', 'Puede causar hipotensión'],
    'Diluir em solução glicosada · Necessita fotoproteção · Risco de intoxicação em insuficiência renal ou hepática': ['Dilute in dextrose solution · Requires protection from light · Risk of toxicity in renal or hepatic failure', 'Diluir en solución glucosada · Requiere fotoprotección · Riesgo de intoxicación en insuficiencia renal o hepática'],
    'Vasopressora · Não é recomendada a diluição em SF.': ['Vasopressor · Dilution in NS is not recommended.', 'Vasopresor · No se recomienda la dilución en SF.'],
    'Monitorizar glicemia e PA': ['Monitor blood glucose and BP', 'Monitorizar glucemia y PA'],
    'Insolúvel em água': ['Insoluble in water', 'Insoluble en agua'],
    'Associar sedação': ['Give with sedation', 'Asociar sedación'],
    'Monitorizar apneia, hipotensão e hipoglicemia': ['Monitor for apnea, hypotension and hypoglycemia', 'Monitorizar apnea, hipotensión e hipoglucemia'],
    'Monitorizar ritmo cardíaco, potássio sérico e glicemia': ['Monitor heart rhythm, serum potassium and blood glucose', 'Monitorizar ritmo cardíaco, potasio sérico y glucemia'],
    'Monitorização hemodinâmica e de glicemia': ['Hemodynamic and blood glucose monitoring', 'Monitorización hemodinámica y de la glucemia'],
    'Monitorizar ritmo cardíaco, potássio sérico e glicemia. A diluição com SF pode aumentar o risco de edema pulmonar.': ['Monitor heart rhythm, serum potassium and blood glucose. Dilution with NS may increase the risk of pulmonary edema.', 'Monitorizar ritmo cardíaco, potasio sérico y glucemia. La dilución con SF puede aumentar el riesgo de edema pulmonar.'],
    'Monitorização hemodinâmica': ['Hemodynamic monitoring', 'Monitorización hemodinámica'],
    'Uso em PCR e hipotensão resistente às catecolaminas': ['Use in cardiac arrest and catecholamine-resistant hypotension', 'Uso en paro cardiorrespiratorio (RCP) y en hipotensión resistente a catecolaminas']
  };

  // ===== Linhas fixas do cálculo (texto sem número variável)
  i18n.register({
    'Faixa 6-17 anos: 2,5 a 5 mg/dia': ['Ages 6-17 years: 2.5 to 5 mg/day', 'Rango 6-17 años: 2,5 a 5 mg/día'],
    'Dose por nebulização: 250 a 500 mcg (1 a 2 ml)': ['Dose per nebulization: 250 to 500 mcg (1 to 2 ml)', 'Dosis por nebulización: 250 a 500 mcg (1 a 2 ml)'],
    'Informe a idade para definir a faixa correta': ['Enter the age to determine the correct range', 'Indique la edad para definir el rango correcto'],
    'O card não traz dose para menores de 6 anos': ['The card gives no dose for children under 6 years', 'La tarjeta no indica dosis para menores de 6 años'],
    'Dose usual: 1 a 3mg/dose': ['Usual dose: 1 to 3mg/dose', 'Dosis habitual: 1 a 3mg/dosis'],
    'Dose usual: 5mg/dose': ['Usual dose: 5mg/dose', 'Dosis habitual: 5mg/dosis'],
    'Informe a idade para aplicar fielmente o card': ['Enter the age to apply the reference card accurately', 'Indique la edad para aplicar fielmente la tarjeta'],
    'O card não especifica dose para menores de 3 meses': ['The card does not specify a dose for infants under 3 months', 'La tarjeta no especifica dosis para menores de 3 meses'],
    'Máximo etário: 5mg': ['Age-based maximum: 5mg', 'Máximo según la edad: 5mg'],
    'Máximo etário: >5 anos: 10 mg': ['Age-based maximum: >5 years: 10 mg', 'Máximo según la edad: >5 años: 10 mg'],
    'Aerossol: 4 a 10 borrifadas': ['MDI: 4 to 10 puffs', 'Aerosol: 4 a 10 inhalaciones']
  });

  // ===== Linhas calculadas: "<rótulo>: <valor>" com valores do toFixed (ponto decimal, igual em pt/en/es).
  // Só o texto muda ("a" → "to", "por dose" → "per dose"...); os números são copiados como estão.
  var CALC_LABELS = {
    '1ª dose': ['1st dose', '1.ª dosis'],
    '2ª dose': ['2nd dose', '2.ª dosis'],
    'EV/IO': ['IV/IO', 'IV/IO'],
    'ET': ['ET', 'ET'],
    'IM anafilaxia': ['IM anaphylaxis', 'IM anafilaxia'],
    'EV': ['IV', 'IV'],
    'IV': ['IV', 'IV'],
    'IN': ['IN', 'IN'],
    'IM': ['IM', 'IM'],
    'Bolus': ['Bolus', 'Bolo'],
    'VO/dia': ['PO/day', 'VO/día'],
    'Primeira': ['First', 'Primera'],
    'Usual': ['Usual', 'Habitual'],
    'Ataque asma': ['Asthma loading dose', 'Dosis de carga en asma'],
    'Ataque': ['Loading dose', 'Dosis de carga'],
    'Manutenção': ['Maintenance', 'Mantenimiento'],
    'Sedação': ['Sedation', 'Sedación'],
    'Mal convulsivo': ['Status epilepticus', 'Estado epiléptico'],
    'Repetição': ['Repeat dose', 'Repetición'],
    'Dose usual': ['Usual dose', 'Dosis habitual'],
    'Antídoto': ['Antidote', 'Antídoto'],
    'Nebulização': ['Nebulization', 'Nebulización'],
    'Total diário': ['Total daily', 'Total diario'],
    '10%': ['10%', '10%'],
    '25%': ['25%', '25%']
  };
  var PREFIX_WORDS = { 'Até': ['Up to', 'Hasta'], 'Ou': ['Or', 'O'] };
  // Rótulos que iniciam uma nova linha dentro do cálculo (para remontar as quebras do bloco).
  var LINE_STARTS = Object.keys(CALC_LABELS).concat(['Faixa 6-17 anos', 'Máximo etário', 'Aerossol']);

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function byLength(a, b) { return b.length - a.length; }
  function alt(list) { return list.slice().sort(byLength).map(escapeRe).join('|'); }

  var N = '\\d+(?:\\.\\d+)?';
  var UNIT = '(?:mcg\\/kg\\/min|mcg\\/min|mcg\\/h|mg\\/h|mg\\/dia|U\\/min|mEq|mcg|mg|ml|g|J|U)';
  var AMOUNT = N + '(?: a ' + N + ')? ' + UNIT;
  var VALUE = AMOUNT + '(?: \\(' + AMOUNT + '(?: se solução 50mg\\/ml)?\\)| = ' + N + ' ml da 1:10\\.000| = ' + N + ' ml da 1:1000| ≈ ' + N + ' ml| por dose)?';

  function value(v, i) {
    if (i === 0) {
      return v.replace(/(\d) a (\d)/g, '$1 to $2')
        .replace(/ mg\/dia$/, ' mg/day')
        .replace(' se solução 50mg/ml', ' if 50mg/ml solution')
        .replace(' ml da 1:10.000', ' ml of 1:10,000')
        .replace(' ml da 1:1000', ' ml of 1:1000')
        .replace(/ por dose$/, ' per dose');
    }
    return v.replace(/ mg\/dia$/, ' mg/día')
      .replace(' se solução 50mg/ml', ' si solución de 50mg/ml')
      .replace(' ml da 1:', ' ml de la 1:')
      .replace(/ por dose$/, ' por dosis');
  }
  function labeled(i) { return function (m, label, v) { return CALC_LABELS[label][i] + ': ' + value(v, i); }; }
  function prefixed(i) { return function (m, word, v) { return PREFIX_WORDS[word][i] + ' ' + value(v, i); }; }
  function bare(i) { return function (m, v) { return value(v, i); }; }

  // ===== Bloco do cálculo rápido (calcDrug): a página grava várias linhas num só texto;
  // o núcleo o recebe normalizado, então o bloco é remontado aqui com as quebras de linha originais.
  var BLOCK = /^Droga: (.+?) Apresentação: (.+?) Dose do card: (.+?) Cálculo para (\d+(?:\.\d+)?) kg: (.+)$/;
  var BLOCK_LABELS = {
    'Droga': ['Drug', 'Fármaco'],
    'Apresentação': ['Presentation', 'Presentación'],
    'Dose do card': ['Reference card dose', 'Dosis de la tarjeta'],
    'Cálculo para': ['Calculation for', 'Cálculo para'],
    'Observações': ['Notes', 'Observaciones']
  };
  var MAX_LIST = Object.keys(MAXES).sort(byLength);
  var LINE_SPLIT = new RegExp(' (?=(?:' + alt(LINE_STARTS) + '): |(?:Até|Ou) \\d)');

  function calcBlock(i) {
    var lang = i === 0 ? 'en' : 'es';
    function T(s) { return i18n.t(s, lang); }
    function L(k) { return BLOCK_LABELS[k][i]; }
    return function (m, name, pres, dose, weight, tail) {
      var notes = null;
      var k = tail.lastIndexOf(' Observações: ');
      if (k !== -1) { notes = tail.slice(k + ' Observações: '.length); tail = tail.slice(0, k); }
      var max = null;
      for (var j = 0; j < MAX_LIST.length && max === null; j++) {
        var suffix = ' ' + MAX_LIST[j];
        if (tail.length > suffix.length && tail.slice(-suffix.length) === suffix) { max = MAX_LIST[j]; tail = tail.slice(0, -suffix.length); }
      }
      var lines = [L('Droga') + ': ' + T(name), L('Apresentação') + ': ' + T(pres), L('Dose do card') + ': ' + T(dose), '',
        L('Cálculo para') + ' ' + weight + ' kg:'].concat(tail.split(LINE_SPLIT).map(T));
      if (max !== null) lines.push('', T(max));
      if (notes !== null) lines.push('', L('Observações') + ': ' + (NOTES[notes] ? NOTES[notes][i] : T(notes)));
      return lines.join('\n');
    };
  }

  i18n.registerPatterns([
    [BLOCK, calcBlock(0), calcBlock(1)],
    [new RegExp('^(' + alt(Object.keys(CALC_LABELS)) + '): (' + VALUE + ')$'), labeled(0), labeled(1)],
    [new RegExp('^(Até|Ou) (' + VALUE + ')$'), prefixed(0), prefixed(1)],
    [new RegExp('^(' + VALUE + ')$'), bare(0), bare(1)],
    [/^Cálculo para (\d+(?:\.\d+)?) kg:$/, 'Calculation for $1 kg:', 'Cálculo para $1 kg:']
  ]);

  i18n.markPageTranslated();
})(window.NEOPED_I18N);
