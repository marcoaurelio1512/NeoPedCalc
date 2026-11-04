/* NutriPed (files/NutriPedWebapp/index.html) — parte 4: fórmulas, administração, capacidade gástrica,
 * relatório para prontuário (rótulos sem acento, como no código), padrões e textos dos gráficos — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;
  i18n.register({
    // Categorias e dados das fórmulas
    '< 1 ano Polimérica': ['< 1 year Polymeric', '< 1 año Polimérica'],
    '< 1 ano Polimérica s/ lactose': ['< 1 year Polymeric, lactose-free', '< 1 año Polimérica sin lactosa'],
    '< 1 ano Semi elementares': ['< 1 year Semi-elemental', '< 1 año Semielementales'],
    '< 1 ano Elementares': ['< 1 year Elemental', '< 1 año Elementales'],
    'Leite materno colostro': ['Breast milk - colostrum', 'Leche materna - calostro'],
    'Leite materno maduro': ['Breast milk - mature', 'Leche materna madura'],
    '1a7 anos Polim. ped. Padrão': ['1-7 years Polym. ped. standard', '1-7 años Polim. ped. estándar'],
    '1a7 anos Polim. ped. c/ fibras': ['1-7 years Polym. ped. with fiber', '1-7 años Polim. ped. con fibra'],
    '1a7 anos Polim. ped. Hipercal.': ['1-7 years Polym. ped. high-calorie', '1-7 años Polim. ped. hipercal.'],
    '1a7 anos Semi elementares': ['1-7 years Semi-elemental', '1-7 años Semielementales'],
    '1a7 anos Elementares': ['1-7 years Elemental', '1-7 años Elementales'],
    '7a20 anos Poliméricas Padrão': ['7-20 years Polymeric standard', '7-20 años Poliméricas estándar'],
    '< 1 ano': ['< 1 year', '< 1 año'],
    '1a7 anos': ['1-7 years', '1-7 años'],
    '7a20 anos': ['7-20 years', '7-20 años'],
    'Fórmula Padrão': ['Standard Formula', 'Fórmula estándar'],
    'Polimérica': ['Polymeric', 'Polimérica'],
    'Genérica': ['Generic', 'Genérica'],
    'Colostro': ['Colostrum', 'Calostro'],
    'Leite Materno': ['Breast Milk', 'Leche materna'],
    'liquido': ['liquid', 'líquido'],
    'HUMANO': ['HUMAN', 'HUMANO'],
    'Lata': ['Can', 'Lata'],
    'Frasco': ['Bottle', 'Frasco'],
    'Envelope': ['Sachet', 'Sobre'],
    'env/': ['sachet/', 'sobre/'],
    '(Sugerida pelo sistema)': ['(Suggested by the system)', '(Sugerida por el sistema)'],

    // Escolha de fórmula e controle da dieta
    'Fórmula Aplicada:': ['Formula Applied:', 'Fórmula aplicada:'],
    'Fórmula Escolhida': ['Chosen Formula', 'Fórmula elegida'],
    'Volume Diário': ['Daily Volume', 'Volumen diario'],
    'Volume Diário:': ['Daily Volume:', 'Volumen diario:'],
    'Proteína Fornecida:': ['Protein Provided:', 'Proteína aportada:'],
    'Fórmula Aplicada com Sucesso!': ['Formula Applied Successfully!', '¡Fórmula aplicada correctamente!'],
    '✅ Todos os cálculos foram atualizados automaticamente!': ['✅ All calculations were updated automatically!', '✅ ¡Todos los cálculos se actualizaron automáticamente!'],
    'Fórmula Atual em Uso': ['Formula Currently in Use', 'Fórmula actualmente en uso'],
    'Fórmula Atual em Uso:': ['Formula Currently in Use:', 'Fórmula actualmente en uso:'],
    'Nenhuma fórmula aplicada ainda. Escolha uma fórmula acima.': ['No formula applied yet. Choose a formula above.', 'Todavía no se ha aplicado ninguna fórmula. Elija una fórmula arriba.'],
    '📋 Controle e Monitoramento da Dieta': ['📋 Feeding Control and Monitoring', '📋 Control y monitorización de la dieta'],
    '✅ Aguardando escolha da fórmula': ['✅ Waiting for formula selection', '✅ A la espera de la elección de la fórmula'],
    'Escolha uma fórmula acima para ver os detalhes': ['Choose a formula above to see the details', 'Elija una fórmula arriba para ver los detalles'],
    'Aviso sobre osmolaridade da dieta:': ['Feed osmolarity notice:', 'Aviso sobre la osmolaridad de la dieta:'],
    'OSMOLARIDADE ADEQUADA': ['APPROPRIATE OSMOLARITY', 'OSMOLARIDAD ADECUADA'],
    '✓ Fórmula selecionada possui osmolaridade adequada para administração enteral': ['✓ The selected formula has an appropriate osmolarity for enteral administration', '✓ La fórmula seleccionada tiene una osmolaridad adecuada para la administración enteral'],
    'Volume diário necessário para obter recuperação nutricional:': ['Daily volume required for nutritional recovery:', 'Volumen diario necesario para lograr la recuperación nutricional:'],
    'Porcentagem de calorias fornecidas pela fórmula escolhida em relação à necessidade calórica (NEC):': ['Percentage of calories provided by the chosen formula relative to the caloric requirement (TER):', 'Porcentaje de calorías aportadas por la fórmula elegida respecto a la necesidad calórica (NET):'],
    'Porcentagem de proteínas fornecidas pela dieta em relação às proteínas propostas para renutrição:': ['Percentage of protein provided by the feed relative to the protein proposed for nutritional rehabilitation:', 'Porcentaje de proteínas aportadas por la dieta respecto a las proteínas propuestas para la renutrición:'],
    'Intervalo entre dietas (24h):': ['Interval between feeds (24 h):', 'Intervalo entre tomas (24 h):'],
    '2/2 horas (12 refeições/dia)': ['Every 2 hours (12 feeds/day)', 'Cada 2 horas (12 tomas/día)'],
    '3/3 horas (8 refeições/dia)': ['Every 3 hours (8 feeds/day)', 'Cada 3 horas (8 tomas/día)'],
    '4/4 horas (6 refeições/dia)': ['Every 4 hours (6 feeds/day)', 'Cada 4 horas (6 tomas/día)'],
    '6/6 horas (4 refeições/dia)': ['Every 6 hours (4 feeds/day)', 'Cada 6 horas (4 tomas/día)'],
    '8/8 horas (3 refeições/dia)': ['Every 8 hours (3 feeds/day)', 'Cada 8 horas (3 tomas/día)'],
    '12/12 horas (2 refeições/dia)': ['Every 12 hours (2 feeds/day)', 'Cada 12 horas (2 tomas/día)'],
    'ml por refeição': ['ml per feed', 'ml por toma'],
    'ml por refeição (': ['ml per feed (', 'ml por toma ('],
    'refeições/dia)': ['feeds/day)', 'tomas/día)'],
    'refeicoes/dia)': ['feeds/day)', 'tomas/día)'],
    '💡 Clique para ver sugestão baseada na capacidade gástrica': ['💡 Click to see a suggestion based on gastric capacity', '💡 Haga clic para ver una sugerencia basada en la capacidad gástrica'],
    'Capacidade gástrica calculada:': ['Calculated gastric capacity:', 'Capacidad gástrica calculada:'],
    'Capacidade gástrica calculada': ['Calculated gastric capacity', 'Capacidad gástrica calculada'],
    'Capacidade gástrica': ['Gastric capacity', 'Capacidad gástrica'],
    'Capacidade gástrica:': ['Gastric capacity:', 'Capacidad gástrica:'],
    'Ajustes:': ['Adjustments:', 'Ajustes:'],
    'Volume total diário que foi administrado nas últimas 24 horas:': ['Total daily volume given in the last 24 hours:', 'Volumen total diario administrado en las últimas 24 horas:'],
    'Relação entre as calorias necessárias e as efetivamente administradas (%):': ['Ratio of calories actually given to calories required (%):', 'Relación entre las calorías necesarias y las efectivamente administradas (%):'],
    'Relação entre as proteínas necessárias e as efetivamente administradas (%):': ['Ratio of protein actually given to protein required (%):', 'Relación entre las proteínas necesarias y las efectivamente administradas (%):'],
    '📊 Observações sobre os cálculos:': ['📊 Notes on the calculations:', '📊 Observaciones sobre los cálculos:'],
    'Verificada automaticamente para adequação enteral': ['Automatically checked for enteral suitability', 'Verificada automáticamente para su adecuación enteral'],
    'Volume diário:': ['Daily volume:', 'Volumen diario:'],
    'Calculado baseado nas NEC e densidade calórica da fórmula': ['Calculated from the TER and the caloric density of the formula', 'Calculado a partir de la NET y la densidad calórica de la fórmula'],
    'Calculada por faixa etária e comorbidades (Holliday-Segar/Kliegman)': ['Calculated by age group and comorbidities (Holliday-Segar/Kliegman)', 'Calculada por grupo de edad y comorbilidades (Holliday-Segar/Kliegman)'],
    'Frequência:': ['Frequency:', 'Frecuencia:'],
    'Ajustada conforme grau de desnutrição e tolerância': ['Adjusted to the degree of malnutrition and tolerance', 'Ajustada según el grado de desnutrición y la tolerancia'],
    'Registre o volume administrado para acompanhar a efetividade': ['Record the volume given to track effectiveness', 'Registre el volumen administrado para seguir la efectividad'],
    'GERAR RELATORIO PARA PRONTUARIO': ['GENERATE REPORT FOR THE MEDICAL RECORD', 'GENERAR INFORME PARA LA HISTORIA CLÍNICA'],
    'Volume (ml) necessário para ser administrado a cada:': ['Volume (ml) to be given every:', 'Volumen (ml) necesario a administrar cada:'],
    'horário dieta': ['feeding schedule', 'horario de la dieta'],
    'Adequado': ['Adequate', 'Adecuado'],
    'Próximo ao limite': ['Close to the limit', 'Cerca del límite'],
    '💡 Sugestão Otimizada:': ['💡 Optimized Suggestion:', '💡 Sugerencia optimizada:'],
    '% da capacidade gástrica) -': ['% of gastric capacity) -', '% de la capacidad gástrica) -'],
    'da capacidade gástrica': ['of gastric capacity', 'de la capacidad gástrica'],
    '✅ Volume adequado (': ['✅ Adequate volume (', '✅ Volumen adecuado ('],
    'Volume adequado': ['Adequate volume', 'Volumen adecuado'],
    'Volume próximo ao limite': ['Volume close to the limit', 'Volumen cerca del límite'],
    'Volume excede capacidade gástrica': ['Volume exceeds gastric capacity', 'El volumen supera la capacidad gástrica'],
    'Selecione uma fórmula primeiro': ['Select a formula first', 'Seleccione primero una fórmula'],
    'Aguardando seleção da fórmula': ['Waiting for formula selection', 'A la espera de la selección de la fórmula'],
    'Fórmula para < 6 meses: 7 ml/kg': ['Formula for < 6 months: 7 ml/kg', 'Fórmula para < 6 meses: 7 ml/kg'],
    'Fórmula para 6-12 meses: 9 ml/kg': ['Formula for 6-12 months: 9 ml/kg', 'Fórmula para 6-12 meses: 9 ml/kg'],
    'Fórmula para 1-3 anos: 11 ml/kg': ['Formula for 1-3 years: 11 ml/kg', 'Fórmula para 1-3 años: 11 ml/kg'],
    'Fórmula para 3-6 anos: 13 ml/kg': ['Formula for 3-6 years: 13 ml/kg', 'Fórmula para 3-6 años: 13 ml/kg'],
    'Fórmula para > 6 anos: 15 ml/kg': ['Formula for > 6 years: 15 ml/kg', 'Fórmula para > 6 años: 15 ml/kg'],
    'Desnutrição grave/Prematuridade: -20%': ['Severe malnutrition/Prematurity: -20%', 'Desnutrición grave/Prematuridad: -20%'],
    'Doença neurológica: -10%': ['Neurological disease: -10%', 'Enfermedad neurológica: -10%'],
    'Doença gastrointestinal: -30%': ['Gastrointestinal disease: -30%', 'Enfermedad gastrointestinal: -30%'],
    'Síndrome genética: -15%': ['Genetic syndrome: -15%', 'Síndrome genético: -15%'],
    'Desnutrição grave/Prematuridade': ['Severe malnutrition/Prematurity', 'Desnutrición grave/Prematuridad'],
    'Doença neurológica': ['Neurological disease', 'Enfermedad neurológica'],
    'Doença gastrointestinal': ['Gastrointestinal disease', 'Enfermedad gastrointestinal'],
    'Síndrome genética': ['Genetic syndrome', 'Síndrome genético'],
    'Ajustes: Doença neurológica': ['Adjustments: Neurological disease', 'Ajustes: Enfermedad neurológica'],
    'Ajustes: Desnutrição grave/Prematuridade': ['Adjustments: Severe malnutrition/Prematurity', 'Ajustes: Desnutrición grave/Prematuridad'],
    'Ajustes: Doença gastrointestinal': ['Adjustments: Gastrointestinal disease', 'Ajustes: Enfermedad gastrointestinal'],
    'Ajustes: Síndrome genética': ['Adjustments: Genetic syndrome', 'Ajustes: Síndrome genético'],
    'kg ×': ['kg ×', 'kg ×'],

    // Plano de administração
    '📋 Plano de Administração:': ['📋 Administration Plan:', '📋 Plan de administración:'],
    '📋 Plano de Administração': ['📋 Administration Plan', '📋 Plan de administración'],
    'Plano de Administração': ['Administration Plan', 'Plan de administración'],
    'Plano de Administração:': ['Administration Plan:', 'Plan de administración:'],
    'Volume total diário': ['Total daily volume', 'Volumen total diario'],
    'Número de refeições': ['Number of feeds', 'Número de tomas'],
    'Volume por refeição': ['Volume per feed', 'Volumen por toma'],
    'Frequência': ['Frequency', 'Frecuencia'],
    'por dia': ['per day', 'por día'],
    'A cada': ['Every', 'Cada'],
    'horas': ['hours', 'horas'],
    'Frequência: A cada': ['Frequency: Every', 'Frecuencia: Cada'],
    '🔧 Reconstituição:': ['🔧 Reconstitution:', '🔧 Reconstitución:'],
    '• Seguir rigorosamente as instruções do fabricante': ['• Strictly follow the manufacturer\'s instructions', '• Seguir rigurosamente las instrucciones del fabricante'],
    '• Manter higiene adequada na preparação': ['• Maintain proper hygiene during preparation', '• Mantener una higiene adecuada en la preparación'],
    '⚠️ Cuidados Especiais:': ['⚠️ Special Care:', '⚠️ Cuidados especiales:'],
    'Cuidados Especiais:': ['Special Care:', 'Cuidados especiales:'],
    '• Monitorar tolerância a cada refeição': ['• Monitor tolerance at each feed', '• Monitorizar la tolerancia en cada toma'],
    '• Suspender se houver intolerância': ['• Stop if there is intolerance', '• Suspender si hay intolerancia'],
    'Seguir rigorosamente as instruções do fabricante': ['Strictly follow the manufacturer\'s instructions', 'Seguir rigurosamente las instrucciones del fabricante'],
    'Manter higiene adequada na preparação': ['Maintain proper hygiene during preparation', 'Mantener una higiene adecuada en la preparación'],
    'Monitorar tolerância a cada refeição': ['Monitor tolerance at each feed', 'Monitorizar la tolerancia en cada toma'],
    'Suspender se houver intolerância': ['Stop if there is intolerance', 'Suspender si hay intolerancia'],

    // Cálculo com fórmula (banco de fórmulas)
    '🧮 Cálculo com Fórmula:': ['🧮 Calculation with Formula:', '🧮 Cálculo con fórmula:'],
    'Dados da Fórmula': ['Formula Data', 'Datos de la fórmula'],
    'Cálculos para o Paciente': ['Calculations for the Patient', 'Cálculos para el paciente'],
    'Peso do Paciente': ['Patient Weight', 'Peso del paciente'],
    'Volume Necessário': ['Required Volume', 'Volumen necesario'],
    '• Volume diário:': ['• Daily volume:', '• Volumen diario:'],
    '• Dividir em 6-8 refeições por dia': ['• Divide into 6-8 feeds per day', '• Dividir en 6-8 tomas al día'],
    '• Monitorar tolerância e ganho ponderal': ['• Monitor tolerance and weight gain', '• Monitorizar la tolerancia y la ganancia ponderal'],
    '• Ajustar conforme resposta clínica': ['• Adjust according to clinical response', '• Ajustar según la respuesta clínica'],

    // Relatório para prontuário (texto sem acentos, como gerado pelo código)
    'Relatório de Avaliação Nutricional': ['Nutritional Assessment Report', 'Informe de evaluación nutricional'],
    'Relatório Nutricional Pediátrico': ['Pediatric Nutrition Report', 'Informe nutricional pediátrico'],
    'RELATÓRIO NUTRICIONAL PEDIÁTRICO': ['PEDIATRIC NUTRITION REPORT', 'INFORME NUTRICIONAL PEDIÁTRICO'],
    'RELATORIO NUTRICIONAL PEDIATRICO': ['PEDIATRIC NUTRITION REPORT', 'INFORME NUTRICIONAL PEDIÁTRICO'],
    'RELATORIO PARA PRONTUARIO': ['REPORT FOR THE MEDICAL RECORD', 'INFORME PARA LA HISTORIA CLÍNICA'],
    'COPIAR RELATORIO': ['COPY REPORT', 'COPIAR INFORME'],
    'IMPRIMIR': ['PRINT', 'IMPRIMIR'],
    'INSTRUCOES:': ['INSTRUCTIONS:', 'INSTRUCCIONES:'],
    '- Clique em "COPIAR RELATORIO" para copiar todo o conteudo': ['- Click "COPY REPORT" to copy all the content', '- Haga clic en "COPIAR INFORME" para copiar todo el contenido'],
    '- Cole diretamente no prontuario eletronico': ['- Paste it directly into the electronic medical record', '- Péguelo directamente en la historia clínica electrónica'],
    '- O formato e compativel com a maioria dos sistemas': ['- The format is compatible with most systems', '- El formato es compatible con la mayoría de los sistemas'],
    'Relatorio copiado para a area de transferencia!': ['Report copied to the clipboard!', '¡Informe copiado al portapapeles!'],
    'Dados do Paciente': ['Patient Data', 'Datos del paciente'],
    'Resultados da Avaliação': ['Assessment Results', 'Resultados de la evaluación'],
    'DADOS ANTROPOMETRICOS': ['ANTHROPOMETRIC DATA', 'DATOS ANTROPOMÉTRICOS'],
    'Peso Atual': ['Current Weight', 'Peso actual'],
    'Peso': ['Weight', 'Peso'],
    'Altura': ['Length/height', 'Talla'],
    'Perimetro Cefalico': ['Head circumference', 'Perímetro cefálico'],
    'RESULTADOS DA AVALIACAO NUTRICIONAL': ['NUTRITIONAL ASSESSMENT RESULTS', 'RESULTADOS DE LA EVALUACIÓN NUTRICIONAL'],
    'Grau de Desnutricao': ['Degree of malnutrition', 'Grado de desnutrición'],
    'Fase da Renutricao': ['Nutritional rehabilitation phase', 'Fase de la renutrición'],
    'Percentuais (%):': ['Percentages (%):', 'Porcentajes (%):'],
    'Classificacoes:': ['Classifications:', 'Clasificaciones:'],
    'Z-scores:': ['Z-scores:', 'Puntuaciones Z:'],
    '- Peso/Idade': ['- Weight-for-age', '- Peso para la edad'],
    '- Estatura/Idade': ['- Length/height-for-age', '- Talla para la edad'],
    '- Peso/Estatura': ['- Weight-for-length/height', '- Peso para la talla'],
    '- IMC/Idade': ['- BMI-for-age', '- IMC para la edad'],
    '- IMC': ['- BMI', '- IMC'],
    '- Percentil IMC': ['- BMI percentile', '- Percentil del IMC'],
    'AVALIACAO DE RISCO NUTRICIONAL (STRONGkids)': ['NUTRITIONAL RISK ASSESSMENT (STRONGkids)', 'EVALUACIÓN DEL RIESGO NUTRICIONAL (STRONGkids)'],
    'Pontuacao': ['Score', 'Puntuación'],
    'Classificacao': ['Classification', 'Clasificación'],
    'Data da Avaliacao': ['Assessment date', 'Fecha de la evaluación'],
    'Nao informada': ['Not provided', 'No informada'],
    'Criterios Avaliados:': ['Criteria assessed:', 'Criterios evaluados:'],
    '- Doenca de base com risco nutricional': ['- Underlying illness with nutritional risk', '- Enfermedad de base con riesgo nutricional'],
    '- Alteracoes no estado nutricional': ['- Changes in nutritional status', '- Alteraciones del estado nutricional'],
    '- Reducao na ingestao alimentar': ['- Reduced food intake', '- Reducción de la ingesta alimentaria'],
    '- Impressao clinica subjetiva de desnutricao': ['- Subjective clinical impression of malnutrition', '- Impresión clínica subjetiva de desnutrición'],
    'Recomendacoes:': ['Recommendations:', 'Recomendaciones:'],
    'Nao avaliado': ['Not assessed', 'No evaluado'],
    'Nao disponivel': ['Not available', 'No disponible'],
    'CALCULOS ENERGETICOS': ['ENERGY CALCULATIONS', 'CÁLCULOS ENERGÉTICOS'],
    'Gasto Energetico Basal (GEB)': ['Basal energy expenditure (BEE)', 'Gasto energético basal (GEB)'],
    'Necessidade Energetica Total (NEC)': ['Total energy requirement (TER)', 'Necesidad energética total (NET)'],
    'Necessidade Proteica': ['Protein requirement', 'Necesidad proteica'],
    'Fatores de Correcao:': ['Correction factors:', 'Factores de corrección:'],
    'Nao calculado': ['Not calculated', 'No calculado'],
    '- Fator Desnutricao': ['- Malnutrition factor', '- Factor de desnutrición'],
    '- Fator Atividade': ['- Activity factor', '- Factor de actividad'],
    '- Fator Injuria': ['- Injury factor', '- Factor de estrés'],
    '- Fator Termico': ['- Thermal factor', '- Factor térmico'],
    '- Tonus Muscular': ['- Muscle tone', '- Tono muscular'],
    '- Fator Total': ['- Total factor', '- Factor total'],
    'FORMULA RECOMENDADA': ['RECOMMENDED FORMULA', 'FÓRMULA RECOMENDADA'],
    'Formula Selecionada': ['Selected formula', 'Fórmula seleccionada'],
    'Nao selecionada': ['Not selected', 'No seleccionada'],
    'Proteina': ['Protein', 'Proteína'],
    'Volume diario sugerido em 24horas': ['Suggested daily volume over 24 hours', 'Volumen diario sugerido en 24 horas'],
    'que ira fornecer:': ['which will provide:', 'que aportará:'],
    'ml/dia que ira fornecer': ['ml/day, which will provide', 'ml/día, que aportará'],
    '- Porcentagem de calorias': ['- Percentage of calories', '- Porcentaje de calorías'],
    '- Porcentagem de proteinas': ['- Percentage of protein', '- Porcentaje de proteínas'],
    'fornecidas pela formula escolhida em relacao a necessidade calorica (NEC)': ['provided by the chosen formula relative to the caloric requirement (TER)', 'aportadas por la fórmula elegida respecto a la necesidad calórica (NET)'],
    'fornecidas pela formula escolhida em relacao a necessidade proteica': ['provided by the chosen formula relative to the protein requirement', 'aportadas por la fórmula elegida respecto a la necesidad proteica'],
    'PRESCRICAO NUTRICIONAL SUGERIDA': ['SUGGESTED NUTRITIONAL PRESCRIPTION', 'PRESCRIPCIÓN NUTRICIONAL SUGERIDA'],
    'Formula Sugerida': ['Suggested formula', 'Fórmula sugerida'],
    '- Volume total diário': ['- Total daily volume', '- Volumen total diario'],
    '- Número de refeições': ['- Number of feeds', '- Número de tomas'],
    '- Volume por refeição': ['- Volume per feed', '- Volumen por toma'],
    '- Frequência': ['- Frequency', '- Frecuencia'],
    '- Frequência: A cada': ['- Frequency: Every', '- Frecuencia: Cada'],
    '- Seguir rigorosamente as instruções do fabricante': ['- Strictly follow the manufacturer\'s instructions', '- Seguir rigurosamente las instrucciones del fabricante'],
    '- Manter higiene adequada na preparação': ['- Maintain proper hygiene during preparation', '- Mantener una higiene adecuada en la preparación'],
    '- Monitorar tolerância a cada refeição': ['- Monitor tolerance at each feed', '- Monitorizar la tolerancia en cada toma'],
    '- Suspender se houver intolerância': ['- Stop if there is intolerance', '- Suspender si hay intolerancia'],
    '- liquido': ['- liquid', '- líquido'],
    'Nao disponivel - necessario calcular renutricao primeiro': ['Not available - nutritional rehabilitation must be calculated first', 'No disponible - primero es necesario calcular la renutrición'],
    'DISTRIBUICAO DE MACRONUTRIENTES': ['MACRONUTRIENT DISTRIBUTION', 'DISTRIBUCIÓN DE MACRONUTRIENTES'],
    'Proteinas': ['Protein', 'Proteínas'],
    'Lipideos': ['Lipids', 'Lípidos'],
    'CONTROLE E MONITORAMENTO DA DIETA': ['FEEDING CONTROL AND MONITORING', 'CONTROL Y MONITORIZACIÓN DE LA DIETA'],
    'Volume Administrado (24h)': ['Volume given (24 h)', 'Volumen administrado (24 h)'],
    'Capacidade Gastrica': ['Gastric capacity', 'Capacidad gástrica'],
    'Frequencia de Administracao': ['Feeding frequency', 'Frecuencia de administración'],
    'Frequencia de Administracao: A cada': ['Feeding frequency: Every', 'Frecuencia de administración: Cada'],
    'Nao definida': ['Not defined', 'No definida'],
    'EFETIVIDADE DA DIETA (ULTIMAS 24H)': ['FEEDING EFFECTIVENESS (LAST 24 H)', 'EFECTIVIDAD DE LA DIETA (ÚLTIMAS 24 H)'],
    'O que mostra: Percentual do que foi efetivamente administrado em relacao ao volume proposto': ['What it shows: percentage of what was actually given relative to the proposed volume', 'Qué muestra: porcentaje de lo efectivamente administrado respecto al volumen propuesto'],
    'Exemplo: Se a dieta propos 1000ml mas so foi administrado 420ml, a efetividade e 42%': ['Example: if the feed plan was 1000 ml but only 420 ml was given, effectiveness is 42%', 'Ejemplo: si la dieta propuesta era de 1000 ml pero solo se administraron 420 ml, la efectividad es del 42%'],
    '- Calorias': ['- Calories', '- Calorías'],
    '- Proteinas': ['- Protein', '- Proteínas'],
    'Percentual do que foi efetivamente administrado em relacao ao volume proposto': ['Percentage of what was actually given relative to the proposed volume', 'Porcentaje de lo efectivamente administrado respecto al volumen propuesto'],
    'COMORBIDADES IDENTIFICADAS': ['IDENTIFIED COMORBIDITIES', 'COMORBILIDADES IDENTIFICADAS'],
    'Nenhuma comorbidade identificada': ['No comorbidity identified', 'Ninguna comorbilidad identificada'],
    'RECOMENDACOES ESPECIFICAS': ['SPECIFIC RECOMMENDATIONS', 'RECOMENDACIONES ESPECÍFICAS'],
    'Recomendacoes gerais aplicadas': ['General recommendations applied', 'Recomendaciones generales aplicadas'],
    'OBSERVACOES': ['NOTES', 'OBSERVACIONES'],
    '- Avaliacao baseada nas curvas OMS': ['- Assessment based on the WHO curves', '- Evaluación basada en las curvas de la OMS'],
    '- Calculos seguem diretrizes internacionais (OMS, ESPGHAN)': ['- Calculations follow international guidelines (WHO, ESPGHAN)', '- Los cálculos siguen directrices internacionales (OMS, ESPGHAN)'],
    '- Monitoramento continuo recomendado': ['- Continuous monitoring recommended', '- Se recomienda monitorización continua'],
    '- Reavaliacao em 7-14 dias conforme evolucao': ['- Reassess in 7-14 days according to progress', '- Reevaluación en 7-14 días según la evolución'],
    'Data do Relatorio': ['Report date', 'Fecha del informe'],
    'Desnutricao Grave': ['Severe malnutrition', 'Desnutrición grave'],
    'Desnutricao Moderada': ['Moderate malnutrition', 'Desnutrición moderada'],
    'Desnutricao Leve': ['Mild malnutrition', 'Desnutrición leve'],
    'Risco de Desnutricao': ['Risk of malnutrition', 'Riesgo de desnutrición'],
    'Referência: WHO Child Growth Standards': ['Reference: WHO Child Growth Standards', 'Referencia: WHO Child Growth Standards'],
    'Data do relatório:': ['Report date:', 'Fecha del informe:'],
    'NeoPedCalc - Calculadora de Avaliação Nutricional Pediátrica': ['NeoPedCalc - Pediatric Nutritional Assessment Calculator', 'NeoPedCalc - Calculadora de Evaluación Nutricional Pediátrica'],
    'Observações: Monitorar glicemia, eletrólitos e função hepática': ['Notes: monitor blood glucose, electrolytes and liver function', 'Observaciones: monitorizar glucemia, electrolitos y función hepática'],
    'Iniciar com 50% das NEC e progredir gradualmente': ['Start with 50% of the TER and advance gradually', 'Iniciar con el 50% de la NET y progresar gradualmente'],
    'Suplementar micronutrientes: Zn, Fe, Vit A, complexo B': ['Supplement micronutrients: Zn, Fe, vitamin A, B complex', 'Suplementar micronutrientes: Zn, Fe, vit. A, complejo B'],
    // Recomendações do STRONGkids no relatório (HTML sem quebras de linha)
    'Baixo risco nutricional- O paciente apresenta baixo risco de desnutrição- Manter acompanhamento nutricional de rotina- Reavaliar em 3-6 meses ou se houver mudanças clínicas': [
      'Low nutritional risk - The patient has a low risk of malnutrition - Continue routine nutritional follow-up - Reassess in 3-6 months or if there are clinical changes',
      'Riesgo nutricional bajo - El paciente presenta un riesgo bajo de desnutrición - Mantener el seguimiento nutricional de rutina - Reevaluar en 3-6 meses o si hay cambios clínicos'
    ],
    'Risco nutricional médio- O paciente apresenta risco moderado de desnutrição- Implementar intervenção nutricional precoce- Considerar suplementação oral- Reavaliar em 1-2 semanas': [
      'Medium nutritional risk - The patient has a moderate risk of malnutrition - Start early nutritional intervention - Consider oral supplementation - Reassess in 1-2 weeks',
      'Riesgo nutricional medio - El paciente presenta un riesgo moderado de desnutrición - Implementar una intervención nutricional precoz - Considerar suplementación oral - Reevaluar en 1-2 semanas'
    ],
    'Alto risco nutricional- O paciente apresenta alto risco de desnutrição- Implementar intervenção nutricional imediata- Considerar nutrição enteral se necessário- Reavaliar em 3-7 dias- Monitoramento intensivo': [
      'High nutritional risk - The patient has a high risk of malnutrition - Start immediate nutritional intervention - Consider enteral nutrition if needed - Reassess in 3-7 days - Intensive monitoring',
      'Riesgo nutricional alto - El paciente presenta un riesgo alto de desnutrición - Implementar una intervención nutricional inmediata - Considerar nutrición enteral si es necesario - Reevaluar en 3-7 días - Monitorización intensiva'
    ],
    '- O paciente apresenta baixo risco de desnutrição': ['- The patient has a low risk of malnutrition', '- El paciente presenta un riesgo bajo de desnutrición'],
    '- Manter acompanhamento nutricional de rotina': ['- Continue routine nutritional follow-up', '- Mantener el seguimiento nutricional de rutina'],
    '- Reavaliar em 3-6 meses ou se houver mudanças clínicas': ['- Reassess in 3-6 months or if there are clinical changes', '- Reevaluar en 3-6 meses o si hay cambios clínicos'],
    '- O paciente apresenta risco moderado de desnutrição': ['- The patient has a moderate risk of malnutrition', '- El paciente presenta un riesgo moderado de desnutrición'],
    '- Implementar intervenção nutricional precoce': ['- Start early nutritional intervention', '- Implementar una intervención nutricional precoz'],
    '- Considerar suplementação oral': ['- Consider oral supplementation', '- Considerar suplementación oral'],
    '- Reavaliar em 1-2 semanas': ['- Reassess in 1-2 weeks', '- Reevaluar en 1-2 semanas'],
    '- O paciente apresenta alto risco de desnutrição': ['- The patient has a high risk of malnutrition', '- El paciente presenta un riesgo alto de desnutrición'],
    '- Implementar intervenção nutricional imediata': ['- Start immediate nutritional intervention', '- Implementar una intervención nutricional inmediata'],
    '- Considerar nutrição enteral se necessário': ['- Consider enteral nutrition if needed', '- Considerar nutrición enteral si es necesario'],
    '- Reavaliar em 3-7 dias': ['- Reassess in 3-7 days', '- Reevaluar en 3-7 días'],
    '- Monitoramento intensivo': ['- Intensive monitoring', '- Monitorización intensiva'],
    'Tipo de cálculo aplicado': ['Calculation type applied', 'Tipo de cálculo aplicado'],
    'Porcentagem de calorias': ['Percentage of calories', 'Porcentaje de calorías'],
    'Porcentagem de proteinas': ['Percentage of protein', 'Porcentaje de proteínas']
  });

  /* Traduz cada parte com o motor (entradas, trechos numéricos e segmentos). */
  function every(parts, lang) {
    return parts.map(function (part) { return i18n.t(part.trim(), lang); });
  }
  /* Padrão com substituição por função: compõe a tradução a partir de entradas existentes. */
  function compose(lang, fn) {
    return function () {
      var whole = arguments[0];
      var result = fn.apply(null, [lang].concat(Array.prototype.slice.call(arguments, 1, -2)));
      return result == null ? whole : result;
    };
  }
  function listLine(lang, label, items) {
    return '- ' + every([label], lang)[0] + ': ' + every(items.split(','), lang).join('; ');
  }
  function nameCategory(lang, prefix, name, cat) {
    var parts = every([name, cat], lang);
    return (prefix || '') + parts[0] + ' (' + parts[1] + ')';
  }
  /* Linhas "Rótulo: valor" do relatório: cada lado com todas as alternativas do motor. */
  function labelValue(lang, label, value) {
    var parts = every([label, value], lang);
    return parts[0] + ': ' + parts[1];
  }
  var CURVE = {
    en: { 'IMC': 'BMI', 'Altura': 'Length/Height', 'Peso': 'Weight', 'Perímetro Cefálico': 'Head Circumference', 'Idade': 'Age', 'Meses': 'Age in Months', 'Z-Score': 'Z-score', 'Percentil': 'Percentile' },
    es: { 'IMC': 'IMC', 'Altura': 'longitud/talla', 'Peso': 'peso', 'Perímetro Cefálico': 'perímetro cefálico', 'Idade': 'edad', 'Meses': 'meses', 'Z-Score': 'puntuación Z', 'Percentil': 'percentil' }
  };
  function curveTitle(lang, what, by, kind) {
    var d = CURVE[lang];
    return lang === 'en' ? d[what] + '-for-' + (by === 'Meses' ? 'Age (months)' : 'Age') + ' Curve (' + d[kind] + ')'
      : 'Curva de ' + d[what] + ' para la edad' + (by === 'Meses' ? ' (meses)' : '') + ' (' + d[kind] + ')';
  }
  var TIP = { en: { 'IMC': 'BMI', 'Altura': 'Length/height', 'Peso': 'Weight', 'PC': 'HC', 'Percentil': 'Percentile', 'Z-Score': 'Z-score' }, es: { 'IMC': 'IMC', 'Altura': 'Talla', 'Peso': 'Peso', 'PC': 'PC', 'Percentil': 'Percentil', 'Z-Score': 'Puntuación Z' } };
  function tooltip(lang, what, rest, kind, tail) {
    var d = TIP[lang];
    return (lang === 'en' ? 'Patient: ' : 'Paciente: ') + d[what] + ' = ' + rest + (kind ? ' | ' + d[kind] + ' = ' + tail : '');
  }
  // Reconstituição dos dados das fórmulas: "4,6g/30ml" (vírgula decimal) → "4.6 g/30 ml" em inglês.
  function scoop(lang, a, b, vol) { return lang === 'en' ? a + '.' + b + ' g/' + vol + ' ml' : a + ',' + b + ' g/' + vol + ' ml'; }

  var RX_LIST = /^- ([^:,]+): ((?:[^,]+,)+[^,]+)$/;
  var RX_NAMECAT = /^(- )?([^:]+) \(([^():]+)\)$/;
  var RX_LABEL = /^((?:- )?[A-ZÀ-Ú][^:]{1,60}): (.+)$/;
  var RX_CURVE = /^Curva de (IMC|Altura|Peso|Perímetro Cefálico) por (Idade|Meses) \((Z-Score|Percentil)\)$/;
  var RX_TIP = /^Paciente: (IMC|Altura|Peso|PC) = ([\d.]+ (?:kg\/m²|cm|kg))(?: \| (Z-Score|Percentil) = (-?[\d.]+%?))?$/;
  var RX_SCOOP = /^(\d+),(\d+)g\/(\d+)ml$/;
  i18n.registerPatterns([
    [RX_CURVE, compose('en', curveTitle), compose('es', curveTitle)],
    [RX_TIP, compose('en', tooltip), compose('es', tooltip)],
    [RX_SCOOP, compose('en', scoop), compose('es', scoop)],
    [/^Envelope (\d+),(\d+)g$/, 'Sachet $1.$2 g', 'Sobre $1,$2 g'],
    [/^- (\d+),(\d+)g\/(\d+)ml$/, '- $1.$2 g/$3 ml', '- $1,$2 g/$3 ml'],
    [/^• (\d+),(\d+)g\/(\d+)ml$/, '• $1.$2 g/$3 ml', '• $1,$2 g/$3 ml'],
    [/^Volume diario sugerido em 24horas: (.+?) ml\/dia que ira fornecer:$/, 'Suggested daily volume over 24 hours: $1 ml/day, which will provide:', 'Volumen diario sugerido en 24 horas: $1 ml/día, que aportará:'],
    [/^- Porcentagem de calorias: (.+?) fornecidas pela formula escolhida em relacao a necessidade calorica \(NEC\)$/, '- Percentage of calories: $1 provided by the chosen formula relative to the caloric requirement (TER)', '- Porcentaje de calorías: $1 aportadas por la fórmula elegida respecto a la necesidad calórica (NET)'],
    [/^- Porcentagem de proteinas: (.+?) fornecidas pela formula escolhida em relacao a necessidade proteica$/, '- Percentage of protein: $1 provided by the chosen formula relative to the protein requirement', '- Porcentaje de proteínas: $1 aportadas por la fórmula elegida respecto a la necesidad proteica'],
    [RX_LIST, compose('en', listLine), compose('es', listLine)],
    [RX_NAMECAT, compose('en', nameCategory), compose('es', nameCategory)],
    [RX_LABEL, compose('en', labelValue), compose('es', labelValue)],
    [/^(-?[\d.]+%) fornecidas pela formula escolhida em relacao a necessidade calorica \(NEC\)$/, '$1 provided by the chosen formula relative to the caloric requirement (TER)', '$1 aportadas por la fórmula elegida respecto a la necesidad calórica (NET)'],
    [/^(-?[\d.]+%) fornecidas pela formula escolhida em relacao a necessidade proteica$/, '$1 provided by the chosen formula relative to the protein requirement', '$1 aportadas por la fórmula elegida respecto a la necesidad proteica'],
    [/^(-?[\d.]+%) - Percentual do que foi efetivamente administrado em relacao ao volume proposto$/, '$1 - Percentage of what was actually given relative to the proposed volume', '$1 - Porcentaje de lo efectivamente administrado respecto al volumen propuesto'],
    [/^A cada ([\d.]+) horas$/, 'Every $1 hours', 'Cada $1 horas'],
    [/^A cada (\d+) horas \((\d+) refeicoes\/dia\)$/, 'Every $1 hours ($2 feeds/day)', 'Cada $1 horas ($2 tomas/día)']
  ]);

  /* Textos desenhados no canvas pelo Chart.js (títulos, eixos, legenda e tooltip) não passam pelo DOM.
   * Este plugin só traduz o que é exibido: não altera dataset.label (o código compara label === 'Paciente'). */
  function tr(text) { return typeof text === 'string' ? i18n.t(text) : text; }
  var source = new WeakMap();
  function translateOptions(chart) {
    var o = chart.options || {};
    var saved = source.get(chart) || {};
    var title = o.plugins && o.plugins.title;
    if (title && typeof title.text === 'string') {
      if (saved.title == null || title.text !== saved.titleOut) saved.title = title.text;
      title.text = saved.titleOut = tr(saved.title);
    }
    ['x', 'y'].forEach(function (axis) {
      var t = o.scales && o.scales[axis] && o.scales[axis].title;
      if (!t || typeof t.text !== 'string') return;
      var key = axis + 'Src', outKey = axis + 'Out';
      if (saved[key] == null || t.text !== saved[outKey]) saved[key] = t.text;
      t.text = saved[outKey] = tr(saved[key]);
    });
    source.set(chart, saved);
  }
  function wrapTooltip(chart) {
    var cb = chart.options && chart.options.plugins && chart.options.plugins.tooltip && chart.options.plugins.tooltip.callbacks;
    if (!cb || typeof cb.label !== 'function' || cb.label.__neoped) return;
    var original = cb.label;
    cb.label = function () { return tr(original.apply(this, arguments)); };
    cb.label.__neoped = true;
  }
  if (window.Chart && typeof window.Chart.register === 'function') {
    window.Chart.register({
      id: 'neopedI18n',
      beforeInit: function (chart) { wrapTooltip(chart); translateOptions(chart); },
      beforeUpdate: function (chart) { wrapTooltip(chart); translateOptions(chart); },
      afterUpdate: function (chart) {
        var legend = chart.legend;
        if (legend && legend.legendItems) legend.legendItems.forEach(function (item) { item.text = tr(item.text); });
      }
    });
    document.addEventListener('neoped:langchange', function () {
      var instances = window.Chart.instances || {};
      Object.keys(instances).forEach(function (k) { try { instances[k].update(); } catch (e) { /* gráfico já destruído */ } });
    });
  }
})(window.NEOPED_I18N);
