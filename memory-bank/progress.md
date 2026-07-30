# Progress — Grimórios de Arcana

## Histórico

### 2026-07-29 — Documento-base recebido

- Recebida a versão consolidada “RPG de Combate Mágico — Documento Base”.
- Arquivada integralmente como documento-fonte inicial.
- Mantido o conteúdo como referência provisória até a chegada e análise do arquivo de críticas.

### 2026-07-29 — Diagnóstico crítico recebido

- Recebida análise crítica com 32 problemas, riscos de exploração e ordem recomendada de correção.
- Arquivada a crítica integralmente e registrada uma síntese operacional.
- Reorientado o próximo ciclo: definir procedimentos de combate antes da ficha completa ou da implementação do Angular.

### 2026-07-29 — Decisões mecânicas consolidadas recebidas

- Recebida a primeira versão normativa do fluxo de ataque e das fórmulas-base.
- Arquivado o documento integral e criada uma síntese de status mecânico.
- Atualizado o foco: fechar pendências numéricas e preparar a modelagem da aplicação.

### 2026-07-29 — Ficha de personagem consolidada recebida

- Recebidas as decisões de atributos, distribuição inicial, Mana, PV, Ferimentos Graves e Estado Crítico.
- Arquivado o documento integral e criada a síntese normativa da ficha.
- Próximo bloco recomendado: iniciativa, ações e movimento.

### 2026-07-29 — Estrutura de magia recebida

- Recebida a definição de Afinidade, Comportamento de Mana, Propriedades de Técnica e funções de magia.
- Arquivado o documento integral e criada a síntese normativa para orientar o editor de magias.
- Registradas como pendências a tabela de custos, catálogos iniciais e efeitos mecânicos das propriedades.

### 2026-07-29 — Orçamento de Complexidade recebido

- Recebida proposta de montagem de magias em camadas de efeito, entrega e modificadores.
- Arquivado o documento integral e criada uma síntese marcada como proposta de playtest.
- Registrada a recomendação de equivalência direta entre pontos de complexidade e Mana, ainda não aprovada como regra final.

### 2026-07-29 — PRD inicial do POC/MVP

- Criado o PRD da “Forja do Grimório”.
- Definido o recorte de criação de personagem, grimório e três magias iniciais.
- Registrados escopo, modelo de dados, validações, critérios de aceite, métricas e dependências.

### 2026-07-29 — Plano faseado do POC/MVP

- Criado plano de execução em oito fases, da consolidação de decisões à validação com usuários.
- Definidos critérios de saída, dependências críticas e priorização MoSCoW.

### 2026-07-29 — Baseline operacional do MVP

- Criada baseline provisória para Afinidades, Comportamentos, funções, propriedades, limitações e durações.
- Considerada concluída a preparação mínima da Fase 0 para iniciar a fundação Angular.

### 2026-07-29 — Fundação Angular inicializada

- Criado o projeto Angular standalone na raiz do repositório.
- Configurados roteamento e SCSS.
- Dependências instaladas e `npm run build` executado com sucesso.
- Registradas vulnerabilidades moderadas reportadas pelo npm para revisão posterior.

### 2026-07-29 — Domínio e regras calculáveis implementados

- Criados modelos TypeScript para personagens, magias, catálogos, recursos e custos.
- Adicionados catálogos iniciais de Afinidades, Comportamentos, funções, propriedades e limitações.
- Implementado `GameRulesService` com cálculos de porcentagem, PV, Mana, validação de atributos e custo de magia.
- Adicionados testes unitários; resultado: 6 testes aprovados e build de produção aprovado.

### 2026-07-29 — Tela de criação de personagem implementada

- Substituído o placeholder Angular por uma tela responsiva da Forja do Grimório.
- Implementados nome, conceito, distribuição de atributos, porcentagens, PV, Mana, reset e validações.
- Testes: 6 aprovados. Build: aprovado com aviso de orçamento de tamanho do `app.scss` acima do limite configurado.

### 2026-07-30 — Identidade mágica e grimório implementados

- Implementadas as etapas 2 e 3 do fluxo: Afinidade, Comportamento de Mana e grimório.
- O fluxo foi testado no navegador com Aster Vale, Água + Compressão e três páginas em branco.
- Testes: 6 aprovados. Build: aprovado com aviso de orçamento do `app.scss`.

### 2026-07-30 — Editor de magias iniciado

- Implementado editor guiado para as três páginas do grimório.
- Adicionados parâmetros de função, potência, alcance, área, velocidade, duração, função secundária, propriedades e limitações.
- Custo de Mana e patamares Normal/Fortalecida/Máxima exibidos em tempo real.
- Validado no navegador com “Jato Comprimido” (Água + Compressão): custo 6 Mana, 8 Fortalecida e 11 Máxima.
- Ajustado o orçamento de estilo do Angular para comportar o editor do MVP.
- Build de produção aprovado; testes anteriores permanecem aprovados.

### 2026-07-30 — Persistência e revisão final implementadas

- Implementada revisão final com resumo do personagem, recursos e três magias.
- Adicionado salvamento local no navegador e exportação JSON.
- Validado no navegador com Aster Vale e três técnicas preenchidas; grimório salvo e exportação habilitada.
- Adicionada recuperação automática do último grimório salvo ao recarregar a aplicação.
- Build e 6 testes aprovados.

### 2026-07-30 — Preparação de qualidade e GitHub Pages

- Adicionada dependência `angular-cli-ghpages`.
- Criados scripts `build:pages` e `deploy:pages`.
- Criado workflow `.github/workflows/deploy-pages.yml`.
- Criada documentação `docs/deployment-github-pages.md`.
- Build com `base href=/grimorios-arcana/` validado; 6 testes aprovados.
- Publicação ainda não executada porque o repositório não possui Git remoto configurado.

### 2026-07-30 — Repositório GitHub conectado

- Configurado o remoto `LopesLab/grimorios-arcana`.
- Removida a credencial GitHub incorreta que autenticava como outra conta.
- Push executado com sucesso; `main` acompanha `origin/main` e o conteúdo remoto está atualizado.

### 2026-07-30 — Correção do workflow de Pages

- Diagnóstico recebido: `ng deploy --base-href` falhava com argumento desconhecido.
- Corrigido `deploy:pages` para separar build com `base-href` e publicação via `angular-cli-ghpages`.
- Build local de Pages validado e correção enviada ao GitHub para novo workflow.

### 2026-07-29 — Fundação do projeto

- Repositório inspecionado; não havia estrutura de aplicação identificável.
- Criado o memory bank inicial.
- Registradas visão, proposta de valor, público, MVP preliminar, riscos e decisões técnicas pendentes.

## Próximos marcos

1. Validar visão, público e diferencial do sistema.
2. Definir o fluxo central do MVP e suas telas.
3. Criar/inicializar o projeto Angular.
4. Implementar shell visual e navegação.
5. Implementar dados e fluxo local de personagem.
6. Adicionar compêndio e recursos de sessão priorizados.
7. Configurar build e publicação no GitHub Pages.
8. Fazer revisão de produto, acessibilidade e experiência publicada.

## Definition of Done do próximo ciclo

- O escopo do MVP está aprovado.
- Há um mapa de telas e estados principais.
- O projeto Angular compila localmente.
- A primeira rota navegável está definida.
