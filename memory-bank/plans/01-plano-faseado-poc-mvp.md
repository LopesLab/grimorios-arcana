# Plano faseado — POC/MVP Forja do Grimório

**Objetivo:** publicar uma primeira versão web de Grimórios de Arcana na qual o usuário cria um personagem, define sua identidade mágica, monta três magias e salva/exporta o grimório.

**Princípio de execução:** entregar um fluxo vertical funcional cedo, mantendo regras experimentais visíveis e evitando construir infraestrutura de VTT antes da validação do criador de personagem.

## Visão geral das fases

| Fase | Foco | Resultado |
|---|---|---|
| 0 | Alinhamento e decisões | Escopo e regras do MVP congelados |
| 1 | Fundamentos do projeto | Angular inicial compilando e tema definido |
| 2 | Catálogos e domínio | Modelos tipados e regras calculáveis |
| 3 | Criação de personagem | Ficha com atributos, PV e Mana |
| 4 | Identidade mágica | Afinidade, Comportamento e grimório |
| 5 | Forja de magias | Editor de três magias com custo calculado |
| 6 | Revisão e persistência | Grimório final, salvar, importar e exportar |
| 7 | Qualidade e publicação | MVP responsivo publicado no GitHub Pages |
| 8 | Validação de produto | Feedback e backlog da próxima versão |

## Fase 0 — Alinhamento e decisões

### Objetivo

Remover ambiguidades que impediriam a implementação do fluxo principal.

### Atividades

- Aprovar o PRD.
- Confirmar três magias iniciais e grimório de três folhas.
- Selecionar o catálogo inicial de Afinidades e Comportamentos.
- Definir propriedades e limitações disponíveis no MVP.
- Confirmar que o Orçamento de Complexidade será experimental.
- Definir a semântica mínima de duração e patamares.
- Classificar cada regra como definida, experimental ou pendente.

### Entregáveis

- PRD aprovado.
- Catálogos iniciais.
- Tabela de regras do MVP.
- Lista de decisões abertas.

### Critério de saída

É possível descrever uma magia completa usando apenas opções presentes nos catálogos e calcular seu custo sem julgamento manual.

### Risco

Tentar resolver todas as regras do sistema antes do POC. O limite desta fase é o que afeta criação, ficha e custo de magia.

## Fase 1 — Fundamentos Angular

### Objetivo

Criar a base técnica e visual do produto.

### Atividades

- Inicializar o projeto Angular.
- Configurar TypeScript, lint e testes.
- Definir estrutura por domínios: shell, character, spellbook e catalog.
- Criar layout responsivo e sistema visual inicial.
- Configurar rotas principais.
- Preparar build de produção.

### Entregáveis

- Aplicação Angular executando localmente.
- Home inicial.
- Shell de navegação.
- Rotas vazias para criação e grimório.

### Critério de saída

O projeto compila, as rotas carregam e a base visual funciona em desktop e mobile.

## Fase 2 — Catálogos e domínio

### Objetivo

Transformar as decisões mecânicas em dados e funções reutilizáveis.

### Atividades

- Criar interfaces `Character`, `Spell`, `Affinity`, `ManaBehavior`, `Function`, `Property` e `Limitation`.
- Cadastrar dados iniciais.
- Implementar cálculo de porcentagem-base.
- Implementar cálculo de PV e Mana.
- Implementar cálculo de custo de complexidade.
- Implementar validações de atributos e magias.
- Criar testes unitários para fórmulas.

### Entregáveis

- Modelo de domínio tipado.
- Catálogos locais.
- Serviço/fachada de regras.
- Testes de cálculo e validação.

### Critério de saída

As fórmulas funcionam sem depender da interface e os casos principais possuem testes automatizados.

## Fase 3 — Criação de personagem

### Objetivo

Permitir distribuir atributos e visualizar a ficha básica.

### Atividades

- Criar etapa de identidade do personagem.
- Implementar distribuição `16, 14, 12, 10, 8`.
- Exibir atributos e porcentagens.
- Calcular PV e Mana em tempo real.
- Mostrar mensagens de validação.
- Permitir voltar e editar sem perder dados.

### Entregáveis

- Fluxo de atributos funcional.
- Ficha básica responsiva.
- Estados vazio, inválido e concluído.

### Critério de saída

O usuário consegue finalizar uma distribuição válida sem exceder ou repetir valores.

## Fase 4 — Identidade mágica e grimório

### Objetivo

Conectar a ficha à fantasia central do sistema.

### Atividades

- Implementar seleção de Afinidade.
- Implementar seleção de Comportamento de Mana.
- Exibir limites e exemplos de cada opção.
- Fixar grimório de três folhas no MVP.
- Criar indicador de três espaços iniciais de magia.
- Exibir resumo da identidade mágica.

### Entregáveis

- Identidade mágica definida.
- Grimório iniciado com três espaços.
- Validação da seleção obrigatória.

### Critério de saída

O personagem possui exatamente uma Afinidade, um Comportamento e três espaços de magia disponíveis.

## Fase 5 — Forja de magias

### Objetivo

Implementar o diferencial do produto: criação guiada de habilidades.

### Atividades

- Criar formulário de magia em etapas.
- Exigir nome, descrição e função principal.
- Permitir função secundária opcional.
- Selecionar potência, alcance, área, velocidade e duração.
- Selecionar propriedades e limitações.
- Calcular custo em tempo real.
- Mostrar composição do custo.
- Calcular custo dos patamares Normal e Fortalecida.
- Exibir alertas de compatibilidade com Afinidade/Comportamento.
- Permitir marcar magia como experimental ou pendente de revisão.

### Entregáveis

- Editor de magia funcional.
- Três magias criáveis e editáveis.
- Calculadora de custo.
- Validações e alertas de design.

### Critério de saída

O usuário cria três magias válidas, entende de onde vem o custo e não consegue ultrapassar as regras estruturais do editor.

### Risco

O editor ficar complexo demais. A primeira versão deve usar poucos componentes e explicar cada escolha em linguagem simples.

## Fase 6 — Revisão, persistência e compartilhamento

### Objetivo

Transformar o processo em um grimório reutilizável.

### Atividades

- Criar tela de revisão final.
- Salvar automaticamente no `localStorage`.
- Criar novo personagem.
- Editar personagem existente.
- Exportar JSON.
- Importar JSON com validação.
- Preparar versão para impressão.
- Exibir claramente regras experimentais.

### Entregáveis

- Grimório final navegável.
- Persistência local.
- Importação/exportação.
- Layout de impressão.

### Critério de saída

Atualizar a página não perde uma ficha válida, e exportar/importar preserva seus dados.

## Fase 7 — Qualidade e publicação

### Objetivo

Garantir que a aplicação seja confiável e acessível publicamente.

### Atividades

- Testar fluxo completo em desktop e mobile.
- Validar teclado e foco.
- Revisar contraste e mensagens de erro.
- Executar testes unitários e build de produção.
- Configurar `base href`.
- Configurar deploy para GitHub Pages.
- Validar rotas e refresh em produção.
- Adicionar página de fallback caso necessário.

### Entregáveis

- MVP publicado.
- Checklist de QA concluído.
- Procedimento de deploy documentado.

### Critério de saída

Uma pessoa externa consegue criar, salvar e recuperar um grimório no endereço público.

## Fase 8 — Validação de produto

### Objetivo

Aprender com uso real antes de expandir para combate e multiplayer.

### Atividades

- Conduzir testes com jogadores e mestres.
- Medir tempo de criação.
- Registrar dúvidas sobre Afinidade e Comportamento.
- Identificar magias amplas ou subprecificadas.
- Coletar sugestões de novos catálogos.
- Priorizar ajustes de regras e UX.

### Entregáveis

- Relatório de feedback.
- Lista de problemas classificados.
- Backlog da versão seguinte.

### Critério de saída

Existem evidências suficientes para decidir se o próximo investimento deve ser em regras, editor, combate solo ou suporte a sessões.

## Dependências críticas

- Fase 0 antes da Fase 2.
- Fase 2 antes da Fase 5.
- Fase 5 antes da Fase 6.
- Fases 6 e 7 antes de convidar usuários externos.

## Priorização MoSCoW

### Must have

- Atributos e derivados.
- Afinidade e Comportamento.
- Três magias.
- Cálculo de custo.
- Validações.
- Visualização da ficha.
- Persistência local.
- Deploy público.

### Should have

- Exportação/importação JSON.
- Impressão.
- Biblioteca de conceitos.
- Alertas de compatibilidade.

### Could have

- Compartilhamento por URL.
- Tema visual alternativo.
- Histórico de versões da ficha.
- Exemplos prontos de personagens.

### Won't have no MVP

- Login.
- Multiplayer.
- Combate em tempo real.
- Mapa tático.
- Backend.
- Grimório de quatro folhas com regra própria.

## Marco de lançamento

O MVP pode ser lançado quando o fluxo abaixo estiver completo e testado:

`Home → Criar personagem → Atributos → Identidade mágica → 3 magias → Revisão → Salvar/Exportar → GitHub Pages`
