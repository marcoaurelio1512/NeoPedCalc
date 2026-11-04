/* LUS Score Neonatal (files/LUS_Score_Neonatal_modal.html) — [inglês, espanhol]. */
(function (i18n) {
  'use strict';
  if (!i18n) return;

  var T_MOD = ['Há perda de aeração em múltiplas zonas. Reforçar monitorização e revisar resposta ao suporte respiratório.',
    'There is loss of aeration in multiple zones. Intensify monitoring and review the response to respiratory support.',
    'Hay pérdida de aireación en múltiples zonas. Reforzar la monitorización y revisar la respuesta al soporte respiratorio.'];
  var T_IMP = ['Comprometimento ultrassonográfico significativo. Em RN com SDR e maior necessidade de oxigênio, pode reforçar a discussão sobre surfactante.',
    'Significant ultrasound involvement. In newborns with RDS and higher oxygen requirement, this may support the discussion about surfactant.',
    'Compromiso ecográfico significativo. En RN con SDR y mayor necesidad de oxígeno, puede reforzar la discusión sobre el surfactante.'];
  var T_GRV = ['Padrão de maior gravidade, com perda importante de aeração e/ou consolidações em várias zonas. Exige reavaliação imediata do suporte e da estratégia terapêutica.',
    'Higher-severity pattern, with marked loss of aeration and/or consolidations in several zones. Requires immediate reassessment of support and therapeutic strategy.',
    'Patrón de mayor gravedad, con pérdida importante de aireación y/o consolidaciones en varias zonas. Exige la reevaluación inmediata del soporte y de la estrategia terapéutica.'];
  var T_CPAP = [' Nesta combinação de CPAP, FiO₂ elevada e LUS elevado, o achado aumenta a relevância clínica da avaliação precoce para surfactante conforme protocolo local.',
    ' With this combination of CPAP, elevated FiO₂ and elevated LUS, the finding increases the clinical relevance of early assessment for surfactant according to local protocol.',
    ' En esta combinación de CPAP, FiO₂ elevada y LUS elevado, el hallazgo aumenta la relevancia clínica de la evaluación precoz para surfactante según el protocolo local.'];

  var dict = {
    'Como usar': ['How to use', 'Cómo usar'],
    // Cabeçalho
    'NeoPedCalc — LUS Score neonatal (educativo)': ['NeoPedCalc — Neonatal LUS Score (educational)', 'NeoPedCalc — LUS Score neonatal (educativo)'],
    'NeoPedCalc - LUS Score Neonatal': ['NeoPedCalc - Neonatal LUS Score', 'NeoPedCalc - LUS Score neonatal'],
    'Calculadora clínica responsiva do escore de ultrassom pulmonar neonatal com 6 zonas, interpretação automática, relatório para prontuário, imagens esquemáticas de exemplo, créditos e referências bibliográficas.': [
      'Responsive clinical calculator for the 6-zone neonatal lung ultrasound score, with automatic interpretation, medical record report, example schematic images, credits and bibliographic references.',
      'Calculadora clínica adaptable del puntaje de ecografía pulmonar neonatal de 6 zonas, con interpretación automática, informe para la historia clínica, imágenes esquemáticas de ejemplo, créditos y referencias bibliográficas.'],

    // 1. Dados clínicos
    '1. Dados clínicos': ['1. Clinical data', '1. Datos clínicos'],
    'Paciente': ['Patient', 'Paciente'],
    'Idade gestacional': ['Gestational age', 'Edad gestacional'],
    'Peso atual': ['Current weight', 'Peso actual'],
    'Data / hora': ['Date / time', 'Fecha / hora'],
    'Data/hora': ['Date/time', 'Fecha/hora'],
    'Nome ou identificação': ['Name or identification', 'Nombre o identificación'],
    'Ex.: 29s 4d': ['E.g.: 29w 4d', 'Ej.: 29s 4d'],
    'Ex.: 1280 g': ['E.g.: 1280 g', 'Ej.: 1280 g'],
    'Ex.: 01/04/2026 20:30': ['E.g.: 01/04/2026 20:30', 'Ej.: 01/04/2026 20:30'],

    // 2. Mapa
    '2. Mapa das 6 zonas': ['2. Map of the 6 zones', '2. Mapa de las 6 zonas'],
    'Mapa das seis zonas pulmonares neonatais': ['Map of the six neonatal lung zones', 'Mapa de las seis zonas pulmonares neonatales'],
    'Divisão esquemática em 6 zonas': ['Schematic division into 6 zones', 'División esquemática en 6 zonas'],
    'R1 anterior superior direita': ['R1 right upper anterior', 'R1 anterior superior derecha'],
    'R2 anterior inferior direita': ['R2 right lower anterior', 'R2 anterior inferior derecha'],
    'R3 lateral direita': ['R3 right lateral', 'R3 lateral derecha'],
    'L1 anterior superior esquerda': ['L1 left upper anterior', 'L1 anterior superior izquierda'],
    'L2 anterior inferior esquerda': ['L2 left lower anterior', 'L2 anterior inferior izquierda'],
    'L3 lateral esquerda': ['L3 left lateral', 'L3 lateral izquierda'],
    'Legenda rápida das zonas': ['Quick zone legend', 'Leyenda rápida de las zonas'],
    'anterior superior direita': ['right upper anterior', 'anterior superior derecha'],
    'anterior inferior direita': ['right lower anterior', 'anterior inferior derecha'],
    'lateral direita': ['right lateral', 'lateral derecha'],
    'anterior superior esquerda': ['left upper anterior', 'anterior superior izquierda'],
    'anterior inferior esquerda': ['left lower anterior', 'anterior inferior izquierda'],
    'lateral esquerda': ['left lateral', 'lateral izquierda'],

    // 3. Seleção por zona
    '3. Seleção por zona': ['3. Selection by zone', '3. Selección por zona'],
    'A-lines / boa aeração': ['A-lines / good aeration', 'Líneas A / buena aireación'],
    'B-lines separadas': ['Separate B-lines', 'Líneas B separadas'],
    'B-lines coalescentes / white lung': ['Coalescent B-lines / white lung', 'Líneas B coalescentes / pulmón blanco'],
    'Consolidação': ['Consolidation', 'Consolidación'],

    // 4. Apoio clínico
    '4. Apoio clínico': ['4. Clinical support', '4. Apoyo clínico'],
    'FiO₂ atual': ['Current FiO₂', 'FiO₂ actual'],
    'Suporte respiratório': ['Respiratory support', 'Soporte respiratorio'],
    'Ar ambiente': ['Room air', 'Aire ambiente'],
    'Cateter / O₂': ['Nasal cannula / O₂', 'Cánula / O₂'],
    'Ventilação invasiva': ['Invasive ventilation', 'Ventilación invasiva'],
    'Observações clínicas': ['Clinical notes', 'Observaciones clínicas'],
    'Ex.: desconforto respiratório, tiragens, Silverman, gasometria, surfactante prévio, evolução clínica...': [
      'E.g.: respiratory distress, retractions, Silverman, blood gas, prior surfactant, clinical course...',
      'Ej.: dificultad respiratoria, tiraje, Silverman, gasometría, surfactante previo, evolución clínica...'],
    'Score total': ['Total score', 'Puntaje total'],
    'Gravidade': ['Severity', 'Gravedad'],
    'Faixa operacional': ['Operational range', 'Rango operativo'],
    'Leve': ['Mild', 'Leve'],
    'Moderado': ['Moderate', 'Moderado'],
    'Importante': ['Significant', 'Importante'],
    'Grave': ['Severe', 'Grave'],
    'Baixo comprometimento ultrassonográfico': ['Low ultrasound involvement', 'Bajo compromiso ecográfico'],
    'Comprometimento moderado': ['Moderate involvement', 'Compromiso moderado'],
    'Doença pulmonar significativa': ['Significant lung disease', 'Enfermedad pulmonar significativa'],
    'Comprometimento grave': ['Severe involvement', 'Compromiso grave'],
    'Sem sinais de maior comprometimento ultrassonográfico. Correlacionar sempre com a clínica e a evolução.': [
      'No signs of greater ultrasound involvement. Always correlate with the clinical picture and course.',
      'Sin signos de mayor compromiso ecográfico. Correlacionar siempre con la clínica y la evolución.'],
    'Padrão de baixo comprometimento ultrassonográfico. Manter correlação clínica e reavaliação conforme evolução.': [
      'Low ultrasound involvement pattern. Maintain clinical correlation and reassess according to the course.',
      'Patrón de bajo compromiso ecográfico. Mantener la correlación clínica y reevaluar según la evolución.'],
    'Padrão compatível com boa aeração ou comprometimento leve. Em geral, manter observação clínica e reavaliar conforme necessidade.': [
      'Pattern consistent with good aeration or mild involvement. In general, maintain clinical observation and reassess as needed.',
      'Patrón compatible con buena aireación o compromiso leve. En general, mantener la observación clínica y reevaluar según necesidad.'],
    'Gerar relatório': ['Generate report', 'Generar informe'],
    'Copiar relatório': ['Copy report', 'Copiar informe'],
    'Imprimir / PDF': ['Print / PDF', 'Imprimir / PDF'],
    'Limpar': ['Clear', 'Limpiar'],

    // 5. Imagens
    '5. Imagens esquemáticas dos padrões': ['5. Schematic images of the patterns', '5. Imágenes esquemáticas de los patrones'],
    'As imagens abaixo são exemplos esquemáticos didáticos para documentação, ensino e apoio visual no uso do score.': [
      'The images below are didactic schematic examples for documentation, teaching and visual support when using the score.',
      'Las imágenes a continuación son ejemplos esquemáticos didácticos para documentación, enseñanza y apoyo visual en el uso del puntaje.'],
    'Score': ['Score', 'Puntaje'],
    'Pleura regular e artefatos horizontais. Representa boa aeração pulmonar.': [
      'Regular pleura and horizontal artifacts. Represents good lung aeration.',
      'Pleura regular y artefactos horizontales. Representa buena aireación pulmonar.'],
    'Linhas B distintas, não confluentes. Sugere perda leve de aeração.': [
      'Distinct, non-confluent B-lines. Suggests mild loss of aeration.',
      'Líneas B distintas, no confluentes. Sugiere pérdida leve de aireación.'],
    'B-lines numerosas e confluentes, compatíveis com importante perda de aeração.': [
      'Numerous, confluent B-lines, consistent with marked loss of aeration.',
      'Líneas B numerosas y confluentes, compatibles con pérdida importante de aireación.'],
    'Padrão tecidual subpleural com possível broncograma aéreo. Indica maior gravidade.': [
      'Subpleural tissue-like pattern with possible air bronchogram. Indicates greater severity.',
      'Patrón tisular subpleural con posible broncograma aéreo. Indica mayor gravedad.'],

    // 6. Tabela
    '6. Tabela resumida': ['6. Summary table', '6. Tabla resumida'],
    'Padrão': ['Pattern', 'Patrón'],
    'Resumo ultrassonográfico': ['Ultrasound summary', 'Resumen ecográfico'],
    'Leitura clínica': ['Clinical reading', 'Lectura clínica'],
    'A-lines': ['A-lines', 'Líneas A'],
    'White lung': ['White lung', 'Pulmón blanco'],
    'Pleura regular, boa aeração, artefatos horizontais': ['Regular pleura, good aeration, horizontal artifacts', 'Pleura regular, buena aireación, artefactos horizontales'],
    'Comprometimento ausente ou mínimo': ['Absent or minimal involvement', 'Compromiso ausente o mínimo'],
    'Linhas verticais isoladas': ['Isolated vertical lines', 'Líneas verticales aisladas'],
    'Perda leve de aeração': ['Mild loss of aeration', 'Pérdida leve de aireación'],
    'B-lines numerosas ou confluentes': ['Numerous or confluent B-lines', 'Líneas B numerosas o confluentes'],
    'Perda importante de aeração': ['Marked loss of aeration', 'Pérdida importante de aireación'],
    'Padrão tecidual subpleural': ['Subpleural tissue-like pattern', 'Patrón tisular subpleural'],
    'Comprometimento avançado': ['Advanced involvement', 'Compromiso avanzado'],
    'Faixas operacionais sugeridas neste modelo: 0-4 leve, 5-8 moderado, 9-12 importante, 13-18 grave.': [
      'Operational ranges suggested in this model: 0-4 mild, 5-8 moderate, 9-12 significant, 13-18 severe.',
      'Rangos operativos sugeridos en este modelo: 0-4 leve, 5-8 moderado, 9-12 importante, 13-18 grave.'],

    // 7. Relatório
    '7. Relatório para prontuário': ['7. Medical record report', '7. Informe para la historia clínica'],
    'Clique em': ['Click', 'Haga clic en'],
    'para criar automaticamente um texto pronto para copiar no prontuário eletrônico.': [
      'to automatically create a text ready to copy into the electronic medical record.',
      'para crear automáticamente un texto listo para copiar en la historia clínica electrónica.'],
    'O relatório será gerado aqui.': ['The report will be generated here.', 'El informe se generará aquí.'],

    // 8. Créditos
    '8. Créditos e referências bibliográficas': ['8. Credits and bibliographic references', '8. Créditos y referencias bibliográficas'],
    'Créditos': ['Credits', 'Créditos'],
    'Aplicação:': ['Application:', 'Aplicación:'],
    'modelo educacional e operacional NeoPedCalc - LUS Score Neonatal.': [
      'NeoPedCalc educational and operational model - Neonatal LUS Score.',
      'modelo educativo y operativo NeoPedCalc - LUS Score neonatal.'],
    'Estrutura:': ['Structure:', 'Estructura:'],
    'calculadora clínica responsiva em HTML, CSS e JavaScript.': ['responsive clinical calculator in HTML, CSS and JavaScript.', 'calculadora clínica adaptable en HTML, CSS y JavaScript.'],
    'Imagens:': ['Images:', 'Imágenes:'],
    'ilustrações esquemáticas originais em SVG incorporadas ao próprio arquivo para uso offline e educacional.': [
      'original schematic SVG illustrations embedded in the file itself for offline and educational use.',
      'ilustraciones esquemáticas originales en SVG incorporadas al propio archivo para uso sin conexión y educativo.'],
    'Finalidade:': ['Purpose:', 'Finalidad:'],
    'apoio à documentação, ensino e raciocínio clínico. Não substitui avaliação médica nem protocolo institucional.': [
      'support for documentation, teaching and clinical reasoning. Does not replace medical assessment or institutional protocol.',
      'apoyo a la documentación, la enseñanza y el razonamiento clínico. No sustituye la evaluación médica ni el protocolo institucional.'],
    'Sugestão: adaptar os limiares automáticos de conduta ao protocolo da sua UTI neonatal e à estratégia local de surfactante.': [
      'Suggestion: adapt the automatic management thresholds to your NICU protocol and local surfactant strategy.',
      'Sugerencia: adaptar los umbrales automáticos de conducta al protocolo de su UCI neonatal y a la estrategia local de surfactante.'],

    // Relatório copiado
    'NEOPEDCALC - LUS SCORE NEONATAL': ['NEOPEDCALC - NEONATAL LUS SCORE', 'NEOPEDCALC - LUS SCORE NEONATAL'],
    'ULTRASSOM PULMONAR - AVALIAÇÃO POR 6 ZONAS': ['LUNG ULTRASOUND - 6-ZONE ASSESSMENT', 'ECOGRAFÍA PULMONAR - EVALUACIÓN POR 6 ZONAS'],
    'Interpretação automática': ['Automatic interpretation', 'Interpretación automática'],
    'Observação': ['Note', 'Observación'],
    'Sem observações adicionais.': ['No additional notes.', 'Sin observaciones adicionales.'],
    'Ferramenta de apoio ao raciocínio clínico. Interpretar sempre em conjunto com exame clínico, gasometria, necessidade de oxigênio, idade gestacional e protocolo institucional.': [
      'Clinical reasoning support tool. Always interpret together with clinical examination, blood gas, oxygen requirement, gestational age and institutional protocol.',
      'Herramienta de apoyo al razonamiento clínico. Interpretar siempre junto con el examen clínico, la gasometría, la necesidad de oxígeno, la edad gestacional y el protocolo institucional.'],
    'Créditos:': ['Credits:', 'Créditos:'],
    'NeoPedCalc - LUS Score Neonatal': ['NeoPedCalc - Neonatal LUS Score', 'NeoPedCalc - LUS Score neonatal'],
    'Imagens esquemáticas embutidas no aplicativo para uso educacional.': [
      'Schematic images embedded in the application for educational use.',
      'Imágenes esquemáticas incorporadas en la aplicación para uso educativo.']
  };

  // Interpretações (com e sem o complemento de CPAP + FiO₂ elevada)
  [T_MOD, T_IMP, T_GRV].forEach(function (t) {
    dict[t[0]] = [t[1], t[2]];
    dict[t[0] + T_CPAP[0]] = [t[1] + T_CPAP[1], t[2] + T_CPAP[2]];
  });

  i18n.register(dict);
  i18n.markPageTranslated();
})(window.NEOPED_I18N);
