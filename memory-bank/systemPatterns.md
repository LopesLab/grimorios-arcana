# System Patterns — Grimórios de Arcana

## Padrões de produto

- Começar pelo fluxo de maior valor para uma sessão, não pelo catálogo completo de funcionalidades.
- Modelar regras e conteúdo como dados sempre que possível, separando-os da apresentação.
- Usar componentes reutilizáveis para ficha, atributos, recursos, rolagens e cards de referência.
- Tratar estados de carregamento, vazio, erro e confirmação como parte do design.

## Padrões de arquitetura desejados

- Angular organizado por domínios/feature areas, evitando uma pasta única de componentes.
- Componentes de apresentação com responsabilidades pequenas.
- Serviços/fachadas para estado e regras de interação.
- Tipos/interfaces para personagens, atributos, perícias, itens, efeitos e sessões.
- Persistência local no MVP, com uma camada substituível caso um backend seja adicionado.

## Diretrizes de navegação

- Rotas orientadas às tarefas do usuário.
- Home/entrada para descoberta.
- Área de personagem para criação e jogo.
- Compêndio para consulta.
- Rota de sessão apenas quando o fluxo estiver definido.

## Decisões ainda não tomadas

- Angular standalone ou NgModules.
- Biblioteca de componentes e estratégia de tema.
- Estado com signals, serviço próprio ou biblioteca externa.
- Necessidade de SSR/SSG.
- Estratégia para rotas no GitHub Pages.
