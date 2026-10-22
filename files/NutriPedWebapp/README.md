# 🍎 NutriPed - Avaliação Nutricional Pediátrica

## 📋 Descrição

**NutriPed** é uma aplicação web completa para avaliação nutricional pediátrica, desenvolvida para profissionais de saúde. A aplicação oferece ferramentas avançadas para cálculo de necessidades nutricionais, avaliação de crescimento e geração de relatórios clínicos.

## ✨ Funcionalidades Principais

### 📊 Avaliação Nutricional
- **Cálculo de IMC** e percentis
- **Avaliação de crescimento** (peso/idade, estatura/idade, peso/estatura)
- **Classificação nutricional** baseada em critérios da OMS
- **Gráficos interativos** de crescimento
- **Histórico de avaliações**

### 🥗 Plano de Renutrição
- **Cálculo de necessidades energéticas** (GEB, NEC)
- **Seleção inteligente de fórmulas** baseada em idade e comorbidades
- **Configuração de fatores** (atividade, injúria, térmico, tônus muscular)
- **Geração de planos** personalizados
- **Instruções de administração**

### 🏥 Comorbidades Pediátricas
- **Avaliação STRONGkids** para risco nutricional
- **Identificação de comorbidades** específicas
- **Recomendações nutricionais** personalizadas
- **Fórmulas prioritárias** por condição

### 📄 Relatórios Clínicos
- **Relatório completo** para prontuário
- **Prescrição nutricional** detalhada
- **Controle e monitoramento** da dieta
- **Exportação em PDF**

## 🚀 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Gráficos:** Chart.js (offline)
- **PDF:** jsPDF (offline)
- **Armazenamento:** LocalStorage
- **Responsividade:** CSS Grid e Flexbox

## 📁 Estrutura do Projeto

```
NutriPed/
├── index.html              # Aplicação principal
├── js/
│   ├── chart.min.js        # Chart.js (offline)
│   └── jspdf.min.js        # jsPDF (offline)
├── .gitignore              # Arquivos ignorados pelo Git
└── README.md               # Esta documentação
```

## 🛠️ Instalação e Uso

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado

### Como Usar
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/NUTRIPED.git
   cd NUTRIPED
   ```

2. **Abra a aplicação:**
   - Abra `index.html` no navegador
   - Ou use um servidor local:
     ```bash
     python -m http.server 8000
     # Acesse: http://localhost:8000
     ```

3. **Comece a usar:**
   - Preencha os dados do paciente
   - Realize a avaliação nutricional
   - Configure o plano de renutrição
   - Gere relatórios

## 📊 Funcionalidades Detalhadas

### Avaliação Nutricional
- **Dados do paciente:** Nome, data de nascimento, sexo, peso, altura
- **Cálculos automáticos:** IMC, percentis, classificações
- **Gráficos:** Evolução temporal dos parâmetros
- **Classificação:** Normal, desnutrição leve/moderada/grave, sobrepeso, obesidade

### Plano de Renutrição
- **Fatores de correção:** Desnutrição, atividade, injúria, térmico, tônus
- **Fórmulas comerciais:** Base de dados com 37+ fórmulas
- **Seleção inteligente:** Baseada em idade e comorbidades
- **Instruções:** Volume, frequência, administração

### Comorbidades
- **STRONGkids:** Pontuação e classificação de risco
- **Comorbidades:** Neurológicas, cardíacas, gastrointestinais, etc.
- **Recomendações:** Específicas por condição
- **Fórmulas prioritárias:** Seleção baseada em comorbidades

## 🔧 Configurações

### Fórmulas Comerciais
- **37 fórmulas** pré-cadastradas
- **Categorias:** Lactentes, 1-7 anos, 7-20 anos
- **Tipos:** Poliméricas, semi-elementares, elementares
- **Empresas:** Nestlé, Support, Mead Johnson, Abbott, etc.

### Fatores de Renutrição
- **Fator Atividade:** 1.2-1.3 (acamado a ambulatorial)
- **Fator Injúria:** 0.8-2.0 (doença cardiopulmonar a queimaduras)
- **Fator Térmico:** 1.0-1.4 (afebril a 41°C)
- **Tônus Muscular:** 0.9-1.1 (diminuído a aumentado)

## 📈 Gráficos e Visualizações

- **Gráficos de linha:** Evolução temporal
- **Gráficos de área:** Comparação de períodos
- **Responsivos:** Adaptam-se ao tamanho da tela
- **Interativos:** Zoom, hover, legendas
- **Offline:** Funcionam sem internet

## 📄 Relatórios

### Relatório para Prontuário
- **Dados do paciente** completos
- **Avaliação nutricional** detalhada
- **Plano de renutrição** com cálculos
- **Comorbidades** identificadas
- **Recomendações** específicas

### Prescrição Nutricional
- **Fórmula selecionada** com empresa e tipo
- **Volume diário** calculado
- **Frequência** de administração
- **Controle** e monitoramento
- **Efetividade** da dieta

## 🔒 Segurança e Privacidade

- **Dados locais:** Tudo armazenado no navegador
- **Sem servidor:** Não envia dados para terceiros
- **Offline:** Funciona sem conexão com internet
- **Privacidade:** Dados do paciente ficam no dispositivo

## 🎯 Casos de Uso

### Pediatras
- Avaliação nutricional de rotina
- Identificação de risco nutricional
- Prescrição de fórmulas especializadas
- Acompanhamento de crescimento

### Nutricionistas
- Avaliação detalhada de estado nutricional
- Elaboração de planos personalizados
- Monitoramento de efetividade
- Educação nutricional

### Enfermeiros
- Triagem nutricional
- Controle de administração
- Monitoramento de aceitação
- Registro de evolução

## 🚀 Roadmap

### Versão Atual (1.0)
- ✅ Avaliação nutricional completa
- ✅ Plano de renutrição
- ✅ Comorbidades pediátricas
- ✅ Relatórios clínicos
- ✅ Gráficos interativos
- ✅ Funcionamento offline

### Próximas Versões
- 🔄 Sincronização com prontuário eletrônico
- 🔄 App mobile (PWA)
- 🔄 Base de dados de pacientes
- 🔄 Múltiplos usuários
- 🔄 Backup na nuvem

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request

## 📞 Suporte

Para dúvidas, sugestões ou problemas:

- **Issues:** Use o sistema de issues do GitHub
- **Email:** [seu-email@exemplo.com]
- **Documentação:** Consulte este README

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- **OMS:** Critérios de avaliação nutricional
- **Chart.js:** Biblioteca de gráficos
- **jsPDF:** Geração de PDFs
- **Comunidade médica:** Validação clínica

---

**Desenvolvido com ❤️ para a saúde pediátrica brasileira**
