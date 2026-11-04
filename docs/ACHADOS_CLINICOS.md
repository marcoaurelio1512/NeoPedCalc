# Achados clínicos e de código nas calculadoras

Levantamento feito durante a tradução para inglês e espanhol (novembro de 2026). A tradução **não alterou** nenhum texto em português nem a lógica de cálculo: estes problemas já existiam no conteúdo original e aparecem nos três idiomas. Cada item precisa de revisão médica antes de qualquer correção.

## Situação das correções

Os itens marcados com ✅ já foram corrigidos no código (e nos dicionários de tradução), com resultado conferido nos três idiomas:

| Página | Correção |
|---|---|
| Drogas (7 páginas com o mesmo leitor de apresentação) | Apresentações volume/massa ("Ampola 10ml/240mg", "Xarope 5ml/1.5mg") e mcg/ml passaram a ser lidas corretamente. Aminofilina 528 mg: 2,2 → 22,0 mL |
| PELD | Fórmula OPTN: 10 × [0,480·ln(bilirrubina) + 1,857·ln(INR) − 0,687·ln(albumina) + 0,436·(idade < 1 ano) + 0,667·(crescimento < −2 DP)], com laboratório < 1,0 considerado 1,0 |
| PELOD-2 | FiO₂ fora de 0,21–1,0 (ex.: "0,6" lido como lista 0 e 6) agora gera aviso e não calcula; a ajuda pede ponto decimal |
| Drogas (9 páginas) | `removerAcentos` aceita números: as drogas respiratórias neonatais voltaram a calcular e copiar o relatório |
| Exsanguineotransfusão | O botão "Gerar Relatório" voltou a funcionar |
| Policitemia | Adicionar linha de entrada não gera mais erro |
| PIM3 | Reimplementado com o modelo publicado (Straney 2013), incluindo base excess, PaO₂/FiO₂, recuperação pós-procedimento e as listas oficiais de diagnóstico |
| PRISM III | Reimplementado com a pontuação publicada (Pollack 1996) e faixas por idade; a equação de mortalidade, proprietária, deixou de ser exibida |
| PELOD-2 | Reimplementado com o modelo publicado (Leteurtre 2013): PAM e creatinina por idade, pupilas, ventilação invasiva, logit −6,61 + 0,47 × escore |
| RCP Neonatal | Atropina 0,02 mg/kg a 0,5 mg/mL em tela, lista e relatório (sem dose mínima de 0,1 mg); adrenalina pelo NRP só a 0,1 mg/mL (IV/IO 0,02 mg/kg, faixa 0,01–0,03; ET 0,1 mg/kg, faixa 0,05–0,1); glicose 10% = 100 mg/mL |
| VancoCalc | O relatório neonatal usa o mesmo clearance por comprimento da tela (Schwartz, mL/min/1,73 m²) |
| 13 páginas de drogas e Neofax | Valores menores que 1 aparecem com 3 algarismos significativos (0,036 em vez de "0.0"); valores ≥ 1 sem mudança |

**Pendentes de decisão clínica:** doses de penicilina na meningite (antibióticos neonatais); classificação da DBP; cortes do SNAPPE-II, do Murray e do Finnegan; arginina no Neofax; na RCP Neonatal, diluição da atropina para < 1 kg, volume do flush de SF, bicarbonato 8,4%, naloxona e cloreto de cálcio; no VancoCalc, k = 0,33 também para o termo (usual 0,45) e Vd pediátrico = 0,7 × clearance; vasopressina rotulada "mg (mcg)" em vez de UI.

## 1. Críticos: cálculo ou dose possivelmente errados

- ✅ **Corrigido.** Drogas respiratórias (criança): AMINOFILINA "Ampola 10ml/240mg" lida como 240 mg/mL → 528 mg = 2,2 mL em vez de 22 mL (erro de 10×)
- ✅ **Corrigido** (fórmula OPTN; colangite deixou de entrar no escore). PELD: FÓRMULA ERRADA — código 0,436·ln(bili)+0,957·ln(INR)−0,687·ln(alb)+0,480·crescimento+0,667·colangite+0,436(<12m), sem ×10; publicada: 10×[0,480·ln(bili)+1,857·ln(INR)−0,687·ln(alb)+0,436(<1a)+0,667(crescimento<−2DP)]; colangite não é variável; resultados −1 a 2, sempre "Score baixo"; modal mostra outra fórmula
- ✅ **Corrigido.** PIM3: coeficientes inventados, não é o PIM3 publicado (Straney 2013) — sem BE, modelo errado; modal lista variáveis não coletadas; cita Slater 2003 (é PIM2)
- ✅ **Corrigido.** PRISM III: não é o PRISM III publicado (sem faixas por idade, variáveis inventadas como "coma profundo", modelo logístico inventado); modal 24 h/0–74 × form 12 h
- ✅ **Corrigido** (modelo Leteurtre 2013 e validação de FiO₂). PELOD-2: limiares e coeficientes (−4,0 + 0,12×escore) ≠ Leteurtre 2013 (−6,61 + 0,47×escore); sem pupilas/ventilação/PAM e creatinina por idade; RISCO: modal manda digitar FiO2 "0,6" mas vírgula é separador de lista → lido como 0 e 6 → usa FiO2 = 6
- ✅ **Corrigido.** Drogas respiratórias neonatais: removerAcentos(dados.intervalo) num número → erro "texto.normalize is not a function" → resultado e relatório falham EM PORTUGUÊS para quase todas as drogas (exceto nirsevimabe/palivizumabe)

## 2. Importantes: resultado, relatório ou fluxo inconsistente

- ✅ **Corrigido.** RCP Neonatal: ATROPINA — relatório divide por 0,1 mg/mL (3,2 kg → 0,64 mL) e tela usa 0,5 mg/mL (0,13–0,20 mL); dose mínima 0,1 mg só na lista
- ✅ **Corrigido.** RCP Neonatal: adrenalina ET usa 1 mg/mL diluída; NRP recomenda só 0,1 mg/mL, 0,05–0,1 mg/kg
- Neofax: ARGININA listada para "Deficiência de arginase" (contraindicada nessa condição)
- ✅ **Corrigido.** Neofax: fentanil bolus 0,001 mg/kg aparece "0.00 mg/dose" (arredondamento 2 casas) — doses pequenas viram zero
- Neofax: didanosina em mg/m²/dose multiplicada por kg
- Balanço hidroeletrolítico: relatório copiado lê "Outras perdas" como 0/1 em vez de ml → TOTAL PERDAS/balanço/status do relatório diferem da tela
- Antropometria: percentis SIMULADOS por fórmula linear (não curvas OMS/CDC reais); relatório usa cortes de IMC de ADULTO (18,5/25/30) em ≥2 anos → criança de 5 a com IMC 15,3 = "Baixo peso"; faixas tela×relatório divergem; "Pubertade"
- Obesidade/PA: IMC com cortes fixos (14/18/25/30) sem idade/sexo (tabela z-score OMS no código não usada); PA com terminologia 2004 (não AAP 2017); referência de PA sem ajuste por altura; idade ignora dia; data do relatório 1 dia antes (UTC)
- Drogas respiratórias/GI/neuro (criança): dosagem arredondada a 1 casa (betametasona 0,017 → "0.0"; salbutamol 0,15 e lorazepam 0,05 → "0.1"); "Gotas 1 gota/10mg" dá volume em mL que na verdade é nº de gotas; infusão contínua sempre 1,0 mL/h; 10 drogas + lactulose com unidades ausentes no select não calculam; intervalos 0,33/0,25/4/3/720 h ausentes → cai em 12 h (palivizumabe 32 kg: "Dose total 24h" 960 mg, droga é mensal); campo sempre "Dose (mg)"; modal cita drogas inexistentes; ranitidina ainda listada
- Murray: cortes de PEEP no código (<5/5–6/7–8/9–11/>11) ≠ Murray 1988 (≤5/6–8/9–11/12–14/≥15, como diz o modal); P/F 0 pts só >300; complacência em mL/cmH2O/kg × modal absoluto; 0,1–2,5 "Moderada"
- Ventilação pediátrica: complacência esperada fixa NEGATIVA (-16,6) e resistência fixa 16,4526; tabela sugere baixar FR com PaO2 baixa e subir FiO2/PEEP com PaCO2 alta
- ✅ **Corrigido o clearance do relatório.** VancoCalc: relatório neonatal calcula clearance (0,34 × peso × 1000)/creat ≠ tela (0,33 × comprimento)/creat → 17,6 vs 1076,7 mL/min no mesmo caso; Vd criança = 0,7 × clearance (unidades); Schwartz rotulado mL/min; AUC aproximada
- Antibióticos neonatais: relatório recalcula com regras diferentes da tela — ≥35 sem sempre bloqueia cópia (chave ">=35_sem_0-7_dias" inexistente); com meningite relatório usa penicilina 100.000 UI/kg 6/6h e tela 50.000 UI/kg 8/8h; linhas "sepse" nunca usadas; "Imipenem/Cilastina"
- ✅ **Corrigido.** Drogas neonatais: arredondamento a 1 casa zera doses pequenas (bumetanida "0.0"; atropina 0,02 mg/kg "0.0" no relatório; alprostadil 0,05 → "0.1")
- Cardiovasculares neonatais: milrinona pré-termo "0,75 mcg/kg" vs 75 mcg/kg termo (provável erro); heparina rotulada "mg" em vez de UI; enoxaparina "manter RNI alargado" (monitorar anti-Xa); "Limpar Dados" quebra (ids inexistentes); data de nascimento 1 dia antes; modal cita drogas ausentes
- Cardiovasculares criança: amiodarona oral "manutenção 400 mg/kg/dia" (provável mg/dia); amiodarona oral, adenosina >50 kg, captopril adolescente, hidralazina VO, sotalol, protamina não calculam (unidade ausente); doses <0,05 → "0.0" (vasopressina, atropina); heparina "mg (mcg)"; data nasc. 1 dia antes
- Índices ventilatórios: Índice Respiratório (MAP×FiO2×100)/(PaO2/FiO2) não padrão; Índice de Ventilação (PIP−PEEP)×FR/1000 ≠ modal ≠ padrão PIP×FR×PaCO2/1000; gradiente A-a normal 2–5 (tela) × <15 (modal); OI ≤10 "SDR leve" × modal <5 normal; fórmula de vapor d'água incomum; Greenspan 1977 (provável 1997)
- Ventilação neonatal: mesma tabela questionável (PaO2 baixa → baixar PIP/FR; PaCO2 alta → subir FiO2/PEEP); complacência/resistência constantes; relatório sem nota padrão
- pSOFA: respiratório chega a 8 (total até 28 vs "0–24"); PAM/creatinina não ajustadas por idade apesar de dizer; cardiovascular usa faixas de VIS
- ✅ **Corrigido só o relatório que quebrava** (const → let). Exsanguineotransfusão: botão "Gerar Relatório" QUEBRA em todos os idiomas (relatorio += em const, linha ~2316: trocar const→let); >3,5 kg tela 5–10 mL/kg × relatório sempre 20 mL; aviso de peso 0,1–20 kg × campo até 10 kg; modal descreve campos inexistentes
- DBP: classificação não segue NIH 2001/Jensen 2019 (O2 → leve, CPAP → moderada, VM → grave, sem suporte → sem DBP; NIH: O2 aos 28 d e ar ambiente às 36 sem = DBP leve); data de nascimento sai 1 dia antes (fuso horário)
- ✅ **Corrigido.** Policitemia: adicionarLinha() usa volumeEntradaPlanejado inexistente → adicionar linha "ENTRADA" gera erro (ReferenceError)
- Drogas respiratórias neonatais: intervalos padrão 30/720 fora do select (alerta em ataques, nirsevimabe, palivizumabe); ipratrópio "mcg/dose" fora do select → dose 0; palivizumabe/Beyfortus volume 0 mL; DART 3+3+4 d (publicado 0,15/0,10/0,05/0,02 em 3/3/2/2); cafeína manutenção "infusão contínua"; Infasurf 135 mg/kg (7,5 mL/kg; bula ~3 mL/kg); aminofilina ">55 sem IPM"; modal "auxiliando na prescrição"
- Drogas GI/neuro neonatais: toFixed(1) — fentanil "0.0 mg", ranitidina 1,2 kg "0.0 mL" (real 0,036); lactulose "ml/kg/dose" fora do select; idade "0.0"; <32 sem "pré-termo extremo"
- SNAPPE-II: PaO2/FiO2 calculado com FiO2 fração (60/0,6 = 100) mas faixas de pontos 0,3–2,5 → com valores reais SEMPRE 0 ponto; peso 750–999 g = 5 pontos (publicado: 10)
- RCP Pediátrica: "Início da RCP (30:2)" (PALS 2 socorristas = 15:2); botão de choque escala 2→4→6→8→10 J/kg × tabela do relatório 2 J/kg e depois 4 J/kg; card do TOT mostra "undefined"; tubo laríngeo "12–16 anos" (37F) para qualquer idade <12; cardioversão 0,5 J/kg sem faixa 0,5–1; alerta README com "\n" literal; README popup sem tradução
- Emergência pediátrica: infusão de amiodarona de manutenção multiplica pelo peso mas mantém unidade mcg/kg/min (deveria ser mcg/min); midazolam sem idade usa máximo ">5 anos: 10 mg" e idade = 5 tratada como >5; enalapril EV 5–10 mcg/kg é enalaprilato; ciproeptadina para "síndrome colinérgica" (provável serotoninérgica); nicardipina "diminui fluxo cerebral e coronariano" (é vasodilatador); solventes "Hepatotoxicidade: hepatotoxicidade" (tratamento ausente); "Cinestesia" (sinestesia); "Sugamadex"; valores a conferir: fenitoína até 30 mg/kg, fenobarbital máx 800 mg, propranolol 1–3 mg/kg/dose, Cardene 5 mg/mL, faixa "Adulto 30–36 kg"; download .txt não traduzido; lista ordenada pelo nome em PT
- NutriPed: relatório para prontuário lê rótulos/valores da tela; após "Aplicar Cálculo" com troca de protocolo, o relatório em PT mostra a necessidade energética ANTIGA (1889 kcal) e EN/ES a atual (2267); o botão 🧮 da tabela de fórmulas sobrescreve #resultado e apaga energia/proteína/volume do relatório; obeso de 9 anos: z-IMC 8,09 e necessidade energética abaixo do GEB (fator desnutrição 0,7)

## 3. Demais: textos de ajuda, rótulos e detalhes

- Finnegan: faixas contraditórias (resultado 8–12 "Leve" × modal 0–7 leve/8–12 moderado × cabeçalho ≥8); "Prurido nasal" deveria ser obstrução nasal; fezes loose/watery
- Anoxia: texto BE > -16 × código < -16; exclui <37 sem × modal ≥36 sem
- Apgar: 4–6 "Depressão leve" × modal "asfixia moderada"
- Ballard: modal cita "Recoil da perna"/"Escápula" (NBS usa ângulo poplíteo/sinal do xale)
- CRIB II: modal descreve fórmula diferente da calculada
- nSOFA: modal descreve 6 sistemas 0–24 (pSOFA); calc usa 3 sistemas 0–3/4–6/≥7
- SNAP II: FiO2 rotulado "%" mas espera fração
- TRIPS II: modal descreve outro escore (pH, convulsões, PAM, 0–28)
- NTISS: busca só em PT; pontos parecem simplificados vs Gray 1992; referência genérica
- Infecções congênitas: Hep B "<34 sem ou <2.000 g" × "<2 kg"; categorias de sífilis próprias do app
- Hérnia diafragmática: "Fígado visível ao nascimento" estranho p/ calculadora pré-natal
- WAT-1: modal descreve outra escala (adulto, 0–30+); cortes 1–9/≥10 (WAT-1 original ≥3); operadores SBS <0/>1 vs ≤0/≥+1; bocejo ">2" vs ≥2; refs só de UTI adulto
- COMFORT-B: 5 itens mas cortes de 6 itens; estímulo MAAS diferente do original
- Datas dos relatórios em DD/MM/AAAA também em EN (pt-BR fixo no código)
- RCP Neonatal: glicose 10% "100 mg/dL" (deveria ser mg/mL); relatório lista adenosina/lidocaína/MgSO4/glucagon ausentes da tela; tamanhos de equipamento diferem tela×relatório; oxímetro "pé ou mão" (NRP: mão/punho direito pré-ductal); "Não informada semanas"; botões reativam após desfecho por contador; README descreve campos inexistentes; README popup sem tradução
- Neofax: infusões de duração fixa mostram "A cada 12 horas"; dopamina calculada sobre 40 mg/mL não diluída; modal descreve campos/drogas/faixas IG inexistentes; gentamicina "<29" aplica <30; ampicilina "≤29"; caixa IG corrigida fica em PT (lida pela lógica)
- Balanço HE: superfície corporal "NaN m²" sem altura (usa variável idade indefinida); erro JS em perdas pancreáticas/biliares (spbCl inexistente); "ml/dia" com período <24h; K 2–3 (modal) × 1–3 (referência/relatório)
- Anemia: IG coletada e não usada; sem corte de Hb <6 meses e ≥60 meses; ".." no resumo
- Glasgow: modal (lactente) contradiz calculadora; total parcial rotulado "Lesão grave"; título "Interpretação Clínica" fica em PT (lógica depende dele)
- Afogamento: é escore de Orlowski (não Szpilman); modal descreve outro escore 7 critérios 0–30; citação JACEP 1979 × JAMA 1987
- Wood-Downes-Ferrés: itens não são os oficiais (sem FC, +consciência, escalas diferentes, FR 30–45); máximo 15 mas rótulo "8–14"; modal contradiz (0–12) e cita botão inexistente
- Fenobarbital pediátrico: modal Vd 0,8 × peso, código 0,7; t1/2 exibida sem ×24; relatório "3.500 kg"
- Alcoolemia: modal β 0,015 g/L/h, código 0,15 g/L/h; frase incompleta
- Enfermagem: placeholder "SF 20%"
- Diuréticos neonatais: "Idade Cronologica" em anos "0.0"; <32 sem tudo "pré-termo extremo"; "continuo horas"
- Antibióticos criança: piperacilina/aztreonam/fosfomicina sem dados ("não encontrado"); ganciclovir rotulado "Antiretroviral"; vancomicina base 3–6 mg/kg 6/6h (baixa?); grafias Efavirez/Gliceofulvina/Fluocitocina/Anrinone/Prazozin; "UTI" ambíguo (UTI × ITU)
- Diuréticos criança: bumetanida 0,015 → "0.0"; "Dosagem Calculada" mostra a dose/kg digitada
- MELD: chamado "MELD Pediátrica"; arredondado e mostrado "18.0"; faixas do modal ≠ código
- Alvarado: febre >37,3 (calc) × >37,5 (modal; original 37,3)
- Trauma pediátrico: faixas modal ≠ calculadora; modal "Respiração" × via aérea
- Sinusite: modal descreve outro escore 0–28; possível duplo toggle ao clicar no rótulo
- Guideline SDR: contexto HP testa SpO2 <93 mas alvo declarado 94–97% (93% "dentro da faixa"); textos de ajuda dos painéis divergentes HTML×JS; relatório remove acentos (normalizador da página)
- Gasometria neonatal: 30–36 sem "Pré-termo tardio" (é 34–36), <30 "Extremo" (usual <28); faixas modal ≠ tabela; pH 7,15 com HCO3 24 → "Primário – Compensado"; Winter sempre aplicado
- Gasometria criança: BE = 0 rejeitado como campo ausente; cita KDIGO (IRA)
- VIS/VVR: VIS ok (Gaies) + fenilefrina; fórmula VVR do modal ≠ código; vasopressina U/kg/h (modal) × U/kg/min (campo); citação VVR provável Miletic 2015
- PA neonatal: calcularIdades sobrescreve IG ao nascer com IG corrigida (recalcular soma dias de novo; relatório rotula como "IG ao Nascer"); valores do modal (24–28 sem PAS 35–45) ≠ tabelas (48–58); modal cita campo Sexo inexistente
- Obstétrica: Math.abs → DUM posterior à data de referência dá IG positiva; mudar data de referência não recalcula; fórmula "IG = CRL + 6,5" duvidosa
- Queimaduras: relatório lista % regional inteiro mesmo com só um lado (total certo); faixas de idade erradas (<4 → "1-4", <9 → "5-9"); braço esquerdo 2,5 × direito 4; critérios de triagem do texto ≠ código; modal Regra dos Nove ≠ Lund-Browder
- LUS: opções sem value (corrigido no núcleo: valor fixado em PT)
- NFCS: form 10 itens "máximo 9" × modal 7 itens 0–7; modal cita NIPS/CRIES/FLACC inexistentes; "Língua aparece" (taut tongue?), "Queixo contraído" (chin quiver?)
- PIPP: cortes de FC e SpO2 ≠ Stevens 1996; "Lágrimas nos olhos" (oficial: eye squeeze)
- Neurointensivismo: "PPC ADEQUADA" ≥50 × modal 50–60 limítrofe; PIC normal em crianças parece alta
- Downes-Raphaely: modal descreve outra escala (FR, gemência, expansão; faixas diferentes) e botão inexistente
- FiO2 halo: fórmulas do modal ≠ código; referências de adulto; "Fraco Inspirada"; "Máscara Reinalante" 80–100% parece não reinalante
- Silverman: o autor é Andersen (página diz "Anderson"); batimento de asa nasal 0 = "Sem retração"
- SIADH/DI/SPSC: "TRP" calculado como 1 − FeNa (TRP = reabsorção tubular de fosfato); osm plasmática divide ureia por 5,6; osm urinária (DU−1000)×30 × páginas renais ×40; mOsm/kg × mOsm/L; "1 anos, 1 meses"
- Função renal criança: k mostrado 1 casa (0,55 → "0.6"); rótulos de DRC de adulto; <6 meses = "prematuro"; pRIFLE compara com normal para idade, não basal, sem diurese; rodapé "Desenvolvido para uso clínico"
- Função renal neonato: modal k=0,45 pré-termo × código 0,33/0,35/0,40/0,45; campos citados inexistentes
- Balanço hídrico neonatal: campos "EV1/EV2/EV3 Dextrose" × relatório "Dextrose 5%/10%/12,5%"; perda insensível sempre 24 h; botão citado com outro nome
- Ballard: relatório copiado sempre "IG Calculada: Não calculada" (procura cor rgb(243,244,246)/#e5e7eb, mas a linha selecionada é #ccccff)
- CRIB II: critérios do relatório (BE −12/−8/−4, faixas de temperatura) ≠ modal
- TRIPS-II e NTISS: total 0 não pode ser copiado (checagem === '0'); TRIPS e-mail via location.href mailto (corpo fica em PT); textarea do relatório TRIPS em PT na tela
- NutriPed: erros JS em PT (removerPreviewMudancas e recalcularTudoAutomaticamente não definidos); relatório quebra (atribuição a const, linha ~11824) quando há item "Fórmula" sem fórmula selecionada; plano mostra Atividade 1,3 após mudar para 1,2; capacidade gástrica "null/nullh (Infinity refeições/dia)"; legenda P0 e P100; janela de impressão sem tradução; gerarPDF() nunca chamado

## Limitações conhecidas da tradução

- Campos de formulário preenchidos pelo código (idade calculada, IG corrigida, apresentação) continuam em português na tela, porque a lógica de algumas páginas lê esses valores. Nos relatórios copiados, eles saem traduzidos.
- As janelas "README" abertas por `document.write` (RCP Neonatal e RCP Pediátrica), a janela de impressão do NutriPed e o download `.txt` da Emergência pediátrica continuam em português.
- O e-mail do TRIPS Score aberto via `location.href = "mailto:…"` sai em português; WhatsApp, `window.open`, `navigator.share` e a área de transferência saem traduzidos.
- Em inglês, as datas dd/mm/aaaa aparecem como aaaa-mm-dd (ISO), para não serem lidas no padrão americano.
