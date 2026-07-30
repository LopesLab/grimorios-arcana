# Active Context — Grimórios de Arcana

## Estado atual

- Repositório sem arquivos de aplicação identificados.
- Git ainda não inicializado neste diretório.
- Memory bank inicial criado como primeira entrega do projeto.
- Nenhum requisito detalhado de regras, telas ou identidade visual foi confirmado.
- Documento-base do sistema recebido e arquivado em `source-documents/01-documento-base-rpg-combate-magico.md`.
- O documento-base é referência inicial; ainda não foi validado após análise crítica.
- Diagnóstico crítico recebido e arquivado em `source-documents/02-diagnostico-geral-documento-base.md`.
- O diagnóstico aponta que o principal bloqueio é a falta de procedimentos objetivos, não a falta de ideias.
- Decisões mecânicas consolidadas recebidas e arquivadas em `rules/01-decisoes-mecanicas-consolidadas-full.md`.
- O fluxo de ataque, Quick Thinking, graus do d100, acerto mágico e bases de dano já possuem uma primeira definição normativa.
- Decisões da ficha de personagem recebidas e arquivadas em `rules/02-ficha-de-personagem-full.md`.
- A ficha agora tem cinco atributos, recursos derivados de Vontade/Vitalidade e um fluxo inicial de Incapacitação/Estado Crítico.
- Estrutura de magia recebida e arquivada em `rules/03-estrutura-magia-full.md`.
- A identidade mágica agora está separada em Afinidade, Comportamento de Mana e Propriedades de Técnica.
- Proposta de Orçamento de Complexidade recebida e arquivada em `rules/04-orcamento-complexidade-full.md`.
- A proposta oferece a primeira estrutura objetiva para calcular custos de magia, mas ainda está em validação e não é regra definitiva.

## Foco atual

Estabelecer a visão do MVP e transformar as perguntas de negócio em requisitos priorizados antes de gerar a aplicação Angular.

O próximo foco é fechar iniciativa, ações e movimento; em paralelo, validar o Orçamento de Complexidade e preparar os catálogos necessários ao editor digital.

O PRD inicial do POC/MVP foi criado em `prd/01-prd-forja-do-grimorio.md`. A hipótese operacional é começar com três magias iniciais e grimório de três folhas.

O plano executável está em `plans/01-plano-faseado-poc-mvp.md`, com oito fases, critérios de saída, dependências e priorização MoSCoW.

A baseline operacional da Fase 0 está em `rules/05-baseline-mvp.md`. Com ela, o projeto pode avançar para a inicialização do Angular e a modelagem tipada dos catálogos.

O projeto Angular foi inicializado na raiz com standalone components, roteamento e SCSS. Dependências instaladas e build inicial validado com sucesso.

Fase 2 implementada: modelos tipados, catálogos iniciais, `GameRulesService` e testes das fórmulas de atributos, PV, Mana e custo de magia.

Fase 3 implementada: primeira tela responsiva da Forja do Grimório com identidade, distribuição de atributos, resumo de recursos e validações. O botão de continuação permanece preparado para a próxima etapa.

Fase 4 implementada: fluxo de seleção de Afinidade e Comportamento de Mana, resumo da identidade e grimório de três folhas com três espaços iniciais.

Fase 5 em andamento: editor de magia funcional para três páginas, com parâmetros, propriedades, limitações e custo de Mana em tempo real. Persistência e botão de salvar ficam para a próxima fase.

Fase 6 implementada: revisão final do grimório, salvamento em `localStorage`, exportação JSON e estado de ficha salva.

Fase 7 preparada: dependência `angular-cli-ghpages`, scripts de build/deploy com base href, workflow do GitHub Actions e documentação de publicação adicionados. O repositório ainda não possui Git remoto, então a publicação real aguarda conexão com o GitHub.

Repositório remoto configurado em `LopesLab/grimorios-arcana`. A credencial antiga foi removida, a autenticação correta funcionou e a branch local `main` está acompanhando `origin/main`.

## Próxima decisão recomendada

Definir o recorte da experiência central do MVP. Recomendação inicial: landing/entrada + criação de personagem local + ficha jogável + compêndio básico.

## Riscos imediatos

- iniciar o desenvolvimento visual antes de conhecer as mecânicas do sistema;
- tentar construir uma VTT completa no primeiro ciclo;
- depender de backend antes de validar o fluxo principal;
- publicar no GitHub Pages sem tratar corretamente base href, roteamento e refresh de rotas.

## Contexto de execução

Este documento deve ser atualizado sempre que o foco do ciclo ou uma decisão importante mudar.
