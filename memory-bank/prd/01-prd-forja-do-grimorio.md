# PRD — Forja do Grimório

**Produto:** Grimórios de Arcana  
**Versão:** 0.1 — MVP web  
**Status:** proposta para refinamento  
**Plataforma:** aplicação Angular estática, publicada no GitHub Pages

## 1. Resumo executivo

Forja do Grimório é o primeiro produto jogável de Grimórios de Arcana: um criador de personagem que permite montar um mago, definir sua identidade mágica e criar três habilidades iniciais com custo de Mana calculado por componentes.

O MVP deve provar que a proposta central do sistema — Afinidade + Comportamento de Mana + construção limitada de magias — é compreensível, divertida e suficientemente objetiva para gerar fichas coerentes.

## 2. Decisões assumidas para o MVP

Estas decisões foram inferidas para permitir avanço sem bloquear o projeto:

- Cada personagem começa com **3 magias iniciais**.
- O MVP utiliza o grimório de três folhas.
- O grimório de quatro folhas não será selecionável no MVP; poderá aparecer como conteúdo futuro ou experimental.
- A criação funciona sem login e sem backend.
- Os dados são persistidos no navegador e podem ser exportados/importados como JSON.
- As tabelas de custo do Orçamento de Complexidade são experimentais até validação em playtest.
- O usuário poderá criar magias usando catálogos controlados, não texto completamente livre.
- A primeira versão será focada em português do Brasil e desktop responsivo.

## 3. Problema

O sistema possui liberdade para criação de magias, mas essa liberdade pode gerar habilidades vagas, desequilibradas e difíceis de comparar. Jogadores precisam de uma forma guiada para transformar uma ideia de personagem em um grimório jogável.

## 4. Objetivos

### Objetivos do produto

- Permitir criar uma ficha completa de personagem em poucos minutos.
- Tornar visível a identidade mágica de cada personagem.
- Transformar componentes de uma magia em custo de Mana compreensível.
- Reduzir a dependência de interpretação informal durante a criação.
- Produzir uma ficha que possa ser salva, compartilhada e revisada.

### Objetivos de negócio/produto

- Validar o principal diferencial do sistema antes de construir uma VTT.
- Observar quais componentes de magia geram dúvidas ou combinações abusivas.
- Criar uma base de dados compatível com futuras sessões, progressão e multiplayer.

## 5. Não objetivos

- Combate online em tempo real.
- Autenticação, contas e sincronização em nuvem.
- Mestre controlando inimigos.
- Mapa tático, iniciativa ou resolução completa de combate.
- Progressão de personagem.
- Grimório de quatro folhas com benefício mecânico.
- Criação livre sem validações.

## 6. Público prioritário

### Jogador

Quer criar um mago com identidade própria e entender rapidamente o que suas magias fazem.

### Mestre

Quer revisar uma ficha e verificar se as magias possuem custos, funções e limitações explícitas.

### Interessado no sistema

Quer experimentar a fantasia de Grimórios de Arcana sem ler o regulamento inteiro.

## 7. Proposta de valor

“Construa seu mago, descubra como sua mana se manifesta e registre um grimório de habilidades pronto para testar em mesa.”

## 8. Jornada principal

1. Usuário acessa a página inicial.
2. Entende rapidamente o conceito do sistema.
3. Inicia a criação de personagem.
4. Define nome, conceito e atributos.
5. Escolhe Afinidade e Comportamento de Mana.
6. Cria três magias iniciais.
7. Recebe cálculo de custo e alertas de coerência.
8. Revisa a ficha completa.
9. Salva localmente ou exporta um arquivo JSON.

## 9. Escopo funcional

### 9.1 Página inicial

- Explicar o conceito de combate mágico tático.
- Apresentar os três pilares: Afinidade, Comportamento e Técnica.
- Exibir CTA “Criar meu grimório”.
- Permitir acessar a biblioteca de conceitos.

### 9.2 Identidade do personagem

- Nome obrigatório.
- Conceito ou descrição curta opcional.
- Campo de origem/organização opcional, sem impacto mecânico no MVP.

### 9.3 Atributos

- Distribuir exatamente `16, 14, 12, 10 e 8` entre Poder, Controle, Destreza, Vontade e Vitalidade.
- Impedir valores repetidos ou pontos extras.
- Mostrar porcentagem-base de cada atributo (`atributo × 5`).
- Calcular Mana máxima e PV máximos automaticamente.

### 9.4 Identidade mágica

- Escolher uma Afinidade de catálogo.
- Escolher um Comportamento de Mana de catálogo.
- Exibir explicação, exemplos e limites de cada opção.
- Bloquear combinações não cadastradas ou marcá-las como experimentais.

### 9.5 Criação de magia

O personagem deve criar exatamente três magias iniciais. Cada magia terá:

- nome;
- descrição narrativa;
- função principal;
- função secundária opcional;
- potência;
- alcance;
- área;
- velocidade;
- duração;
- propriedades;
- limitações;
- custo-base de Mana;
- custo dos patamares Normal e Fortalecida;
- referência à Afinidade e ao Comportamento do personagem.

O editor deve:

- calcular o custo em tempo real;
- mostrar a composição do custo;
- validar no máximo uma função secundária;
- impedir propriedades incompatíveis ou duplicadas;
- alertar quando a magia não demonstrar relação com a identidade mágica;
- diferenciar erro de validação de alerta de playtest.

### 9.6 Revisão do grimório

Exibir uma ficha final com:

- identidade do personagem;
- atributos e porcentagens;
- PV e Mana;
- Afinidade;
- Comportamento de Mana;
- três magias;
- custos e patamares;
- propriedades e limitações;
- status experimental das regras.

### 9.7 Persistência e compartilhamento

- Salvar automaticamente no `localStorage`.
- Criar novo personagem.
- Editar personagem salvo.
- Exportar JSON.
- Importar JSON validado.
- Imprimir ou salvar a ficha usando a impressão do navegador.

## 10. Regras de validação do MVP

- Nome não pode estar vazio.
- Todos os cinco atributos devem receber um valor da distribuição inicial.
- Deve existir exatamente uma Afinidade e um Comportamento.
- Devem existir exatamente três magias.
- Cada magia precisa de uma função principal.
- Cada magia pode ter no máximo uma função secundária.
- O custo mínimo da magia é 1 Mana.
- O custo deve ser recalculado sempre que um componente mudar.
- Uma limitação só reduz custo se estiver registrada no catálogo como limitação mecânica válida.
- Propriedades puramente visuais não alteram o custo.

## 11. Requisitos não funcionais

- Angular com componentes reutilizáveis e modelo tipado em TypeScript.
- Responsivo para desktop e mobile.
- Navegação por teclado nos fluxos principais.
- Contraste e textos legíveis.
- Sem dependência de backend no MVP.
- Build de produção compatível com GitHub Pages.
- Configuração correta de `base href` e navegação publicada.
- Dados exportados não devem conter segredos ou informações externas.

## 12. Modelo de dados inicial

```ts
type Character = {
  id: string;
  name: string;
  concept?: string;
  attributes: {
    power: number;
    control: number;
    dexterity: number;
    will: number;
    vitality: number;
  };
  affinityId: string;
  manaBehaviorId: string;
  grimoireType: 'three-leaf';
  spells: Spell[];
  createdAt: string;
  updatedAt: string;
};

type Spell = {
  id: string;
  name: string;
  description: string;
  primaryFunctionId: string;
  secondaryFunctionId?: string;
  potency: 'minor' | 'standard' | 'major';
  range: 'self-touch' | 'short' | 'medium' | 'long';
  area: 'single' | 'small' | 'medium' | 'large';
  speed: 'slow' | 'normal' | 'fast' | 'instant';
  duration: string;
  propertyIds: string[];
  limitationIds: string[];
  baseManaCost: number;
  status: 'approved' | 'experimental' | 'needs-review';
};
```

## 13. Critérios de aceite

### Criação

- Um usuário consegue finalizar um personagem sem editar JSON ou usar console.
- A distribuição de atributos inválida é bloqueada.
- Mana e PV mudam imediatamente quando Vontade ou Vitalidade mudam.

### Magias

- O usuário consegue criar três magias.
- O custo é explicado componente por componente.
- A função secundária não pode ser adicionada duas vezes.
- O sistema identifica campos obrigatórios ausentes.

### Persistência

- Atualizar a página não perde o personagem salvo.
- Exportar e importar mantém os dados da ficha.
- Um JSON inválido gera mensagem clara sem apagar a ficha atual.

### Publicação

- O fluxo principal funciona no endereço público do GitHub Pages.
- Recarregar a aplicação em uma rota publicada não gera página quebrada.

## 14. Métricas de validação do POC

- Percentual de usuários que concluem a criação.
- Tempo até criar a primeira magia.
- Quantidade média de erros por ficha.
- Componentes de magia que geram mais abandono ou dúvidas.
- Quantidade de magias marcadas como “needs-review”.
- Número de combinações consideradas excessivamente amplas durante o playtest.

## 15. Dependências antes do desenvolvimento

1. Aprovar as cinco Afinidades e cinco Comportamentos iniciais.
2. Aprovar a tabela experimental do Orçamento de Complexidade.
3. Definir a primeira versão dos efeitos das propriedades.
4. Definir os valores e semântica de duração.
5. Confirmar o nome e o comportamento do grimório de três folhas.
6. Definir a estratégia de deploy Angular no GitHub Pages.

## 16. Plano de entrega

### Fase 1 — Fundamentos

- Inicializar Angular.
- Criar tema visual e layout base.
- Definir tipos e catálogos.

### Fase 2 — Criador de personagem

- Implementar atributos e derivados.
- Implementar Afinidade e Comportamento.
- Implementar persistência local.

### Fase 3 — Forja de magia

- Implementar editor de magia.
- Implementar cálculo de custo.
- Implementar validações e alertas.

### Fase 4 — Grimório e publicação

- Implementar revisão final.
- Exportação/importação e impressão.
- Testes de build, responsividade e GitHub Pages.

## 17. Decisões que devem permanecer explícitas

O MVP deve informar visualmente que o sistema está em fase de playtest. Custos, propriedades e algumas interações podem mudar. A aplicação deve evitar apresentar regras experimentais como definitivas.
