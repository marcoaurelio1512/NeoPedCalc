# 🍼 RCP Neonatal 2025 – Aplicação de Suporte Avançado e Registro Automatizado

Aplicação web projetada para auxiliar profissionais de saúde em cenários de reanimação neonatal, seguindo princípios atualizados das diretrizes modernas de RCP.

O objetivo é padronizar cálculos, reduzir erros, registrar procedimentos em tempo real e gerar relatórios completos automaticamente.

---

## ⚡ Principais Funcionalidades

### 1. Cálculo Automático Baseado no Peso

- Aceita peso digitado com vírgula ou ponto (ex.: 3,250, 3.250 ou 3.25).
- O sistema converte automaticamente para o formato interno correto antes dos cálculos.
- Validação completa garantindo valores reais e utilizáveis.

---

### 2. Cálculo Automático de Drogas

Inclui doses e volumes precisos para:

- Epinefrina IV/IO
- Epinefrina ETT
- Atropina
- Naloxona
- Bicarbonato de Sódio
- Glicose 10%
- Cloreto de Cálcio

Cada droga exibe:

- Volume (mL)
- Dose (mg ou mEq)
- Intervalo de repetição
- Indicações clínicas
- Concentrações

🔕 O modal de visualização de "Drogas de Emergência – Neonatal" foi removido da interface, mas as funções internas permanecem preservadas para cálculos e relatórios.

---

### 3. Registro de Horários

- Botões específicos permitem registrar automaticamente o horário exato da administração de cada medicação.
- Todo o histórico é incluído no relatório final.

---

### 4. Responsividade Total

O app foi otimizado para:

- Smartphones (modo retrato e paisagem, com ajuste automático)
- Tablets (iOS e Android)
- Desktops

Todos os componentes foram centralizados e otimizados:

- Tabelas agora rolam horizontalmente em telas pequenas.
- Modais (como cadastro de paciente) foram refinados para caber na tela de celulares.

---

### 5. Dados do Recém-Nascido

O app armazena e exibe:

- Nome
- Data de nascimento
- Idade calculada
- Peso
- Leito
- Nº do prontuário
- Diagnóstico
- Data/Hora de admissão
- Observações (com destaque maior e cor vermelha)

Todos os campos são salvos localmente no navegador.

---

### 6. Relatório Final Automático

Geração automática do relatório contendo:

- Todos os dados do recém-nascido
- Peso formatado corretamente (sem duplicar "kg")
- Procedimentos realizados com horários
- Medicações administradas
- Observações
- Data e hora da reanimação

O relatório pode ser facilmente copiado ou exportado.

---

### 7. Persistência e Segurança dos Dados

- Todos os dados permanecem salvos mesmo se a página for fechada ou houver queda de energia.
- Ao reiniciar o app, os dados anteriores são restaurados automaticamente.

---

### 8. Otimização do Processo de Trabalho

- Removido o botão "Pausar/Retomar" do cronômetro de tempo de parada.
- Corrigido o erro que mostrava valores aleatórios ao retomar após queda de energia.
- Cronômetro só inicia após seleção de um paciente.

---

## 🛠️ Mudanças Técnicas Recentes

### ✔ Aceitação universal de vírgula ou ponto no peso

Transformação automática para formato numérico interno.

### ✔ Remoção visual do modal "Drogas de Emergência – Neonatal"

Manutenção integral das funções internas.

### ✔ Modais 100% responsivos para mobile

Uso otimizado tanto em retrato quanto paisagem.

### ✔ Observações destacadas em vermelho e fonte ampliada

Melhor identificação de informações críticas.

### ✔ Correção do relatório duplicando "kg"

Formato agora correto e padronizado.

### ✔ Persistência confiável do estado mesmo após reiniciar o navegador

---

## 🚀 Próximos passos sugeridos

- Implementar trilha auditável completa (log de eventos).
- Exportação direta em PDF com assinatura digital.
- Integração com sistemas hospitalares via FHIR.

---

## 📄 Licença

Projeto para uso profissional clínico. Requer validação institucional antes de implementação em ambiente real.

---

## 👨‍⚕️ Autor

Aplicação desenvolvida com suporte de IA e refinamentos contínuos para uso em cenários neonatais críticos.

---

