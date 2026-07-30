# Diagnóstico geral

O documento funciona como **visão inicial do jogo**, mas ainda não funciona como regulamento.

Hoje, duas mesas usando esse texto provavelmente jogariam sistemas diferentes, porque quase todas as decisões importantes dependem do mestre. A proposta é boa, mas existe excesso de arbitragem, termos sem definição mecânica e várias brechas evidentes de balanceamento.

## Falhas críticas

### 1. Destreza é um atributo dominante demais

Destreza atualmente influencia:

* iniciativa;
* esquiva;
* Quick Thinking;
* magias rápidas;
* combate corpo a corpo;
* reposicionamento;
* possibilidade de realizar combos.

Isso transforma Destreza em um **atributo obrigatório**. Um personagem com Destreza alta age primeiro, reage mais, evita ataques e potencialmente realiza ações adicionais.

Enquanto isso, Intelecto e Vontade possuem funções vagas e pouco impacto direto.

**Problema provável:** todos os jogadores investirão pesadamente em Destreza.

**Correção necessária:** limitar o Quick Thinking a uma reação por rodada, separar iniciativa de reação ou fazer outras capacidades dependerem de atributos diferentes.

---

### 2. Quick Thinking pode destruir a economia de ações

O documento não estabelece:

* quantas vezes alguém pode testar Quick Thinking por rodada;
* se uma pessoa pode reagir a vários ataques;
* se uma reação pode provocar outra reação;
* se aliados podem reagir;
* se alguém pode reagir depois de já ter agido;
* se falhar no teste impede novas tentativas;
* quando exatamente a janela de reação começa e termina.

Sem limite, um personagem pode tentar reagir a cada ameaça.

Também existe o risco de sequências como:

1. Personagem A ataca.
2. Personagem B reage.
3. Personagem A tenta responder.
4. Personagem C protege B.
5. Personagem B tenta contra-atacar.

Isso produz combate lento e discussões sobre ordem de resolução.

**Correção necessária:** criar uma regra rígida de janela de reação e um limite, provavelmente uma reação por rodada.

---

### 3. O atacante não poder reagir é uma regra artificial

A justificativa é que o atacante está comprometido com sua ação. Isso parece razoável narrativamente, mas não está operacionalizado.

Não está claro:

* quando o comprometimento começa;
* quando termina;
* se ele pode reagir a um terceiro personagem;
* se uma magia defensiva usada durante o ataque é permitida;
* se atacar rapidamente reduz o comprometimento;
* se o atacante pode se defender depois que sua ação termina.

A regra também pode gerar comportamento estranho: atacar primeiro pode ser uma desvantagem, porque o personagem perde sua capacidade defensiva.

**Correção necessária:** não proibir reações com base em “estar atacando”. Usar uma condição objetiva, como **Exposto**, aplicada por determinadas ações.

---

### 4. O grimório de quatro folhas é uma escolha obviamente superior

O grimório de quatro folhas concede uma magia adicional e não apresenta desvantagem.

Se o jogador pode escolher livremente entre três e quatro folhas, não existe decisão real. Todos escolherão quatro folhas.

Além disso, há uma contradição:

* na ambientação, quatro folhas são concedidas a raros abençoados pela mana;
* na criação, o jogador escolhe o tipo de grimório.

**Correção necessária:** decidir se quatro folhas é:

* uma vantagem comprada com pontos;
* uma recompensa narrativa;
* um resultado aleatório;
* uma opção com desvantagens;
* ou apenas um elemento de NPCs e personagens específicos.

A pior solução seria permitir que alguns jogadores começassem estritamente superiores sem qualquer compensação.

---

### 5. As regras do d100 possuem conflitos

O documento estabelece:

* `01–05`: sucesso crítico;
* `96–100`: falha crítica;
* igual ou abaixo da habilidade: sucesso.

Isso produz conflitos.

#### Exemplo 1

Um personagem possui `3%` de chance.

Ele tira `04`.

O resultado está na faixa de crítico, mas está acima da habilidade. É crítico ou falha?

#### Exemplo 2

Um personagem possui `98%` de chance.

Ele tira `97`.

O resultado está abaixo da habilidade, mas também na faixa de falha crítica.

#### Exemplo 3

Uma habilidade de `100%` ainda falharia em `96–100`, então ela não seria realmente uma chance de 100%.

Também não está definido se `00` representa zero ou cem.

**Correção necessária:** estabelecer precedência e limites. Uma solução melhor seria fazer críticos dependerem da própria habilidade, em vez de usar faixas fixas.

---

### 6. Modificadores percentuais não possuem limites

Quick Thinking pode receber `+20%`, `−40%` e outros modificadores, mas o documento não define:

* valor mínimo;
* valor máximo;
* acumulação de modificadores;
* diferença entre bônus de habilidade e bônus no dado.

Um personagem com Destreza 90 e bônus de 20 teria 110%. Um personagem com 30 e penalidade de 40 teria −10%.

**Correção necessária:** estabelecer um piso e um teto, como `5%` e `95%`, ou definir sucessos e falhas automáticos.

---

### 7. Não existe fórmula de acerto

O documento diz que as magias possuem porcentagem de sucesso, mas não explica de onde essa porcentagem vem.

Possibilidades não resolvidas:

* cada magia possui uma perícia própria;
* todas usam Controle;
* ataques corpo a corpo usam Destreza;
* Poder modifica acerto;
* alcance aplica penalidade;
* velocidade aumenta precisão;
* o alvo possui defesa passiva.

Sem isso, o sistema central ainda não existe.

---

### 8. O combate usa rolagens redundantes

A sequência parece ser:

1. Atacante testa acerto.
2. Defensor testa Quick Thinking.
3. Em caso de sucesso, defensor recebe uma reação.
4. A reação é resolvida com outro teste.

Um único ataque pode exigir três rolagens.

Em um combate com vários personagens, isso ficará lento, especialmente porque toda magia também exige interpretação de propriedades, alcance, velocidade e interação elemental.

**Correção necessária:** escolher entre:

* ataque contra defesa;
* ataque seguido por reação;
* teste oposto;
* ou defesa automática após Quick Thinking.

Usar todos ao mesmo tempo gera excesso de resolução.

---

### 9. A criação livre de magias não possui um orçamento mecânico

O documento afirma que o jogador descreve uma magia e o mestre determina seus números. Isso transfere o balanceamento inteiro para o mestre.

Não existe custo objetivo para:

* aumentar alcance;
* adicionar área;
* aumentar velocidade;
* adicionar perfuração;
* combinar movimento e dano;
* aplicar condição;
* permitir redirecionamento;
* reduzir recarga.

Dois mestres podem avaliar a mesma magia de formas completamente diferentes.

Também existe um problema entre afinidades:

* “Água” é extremamente ampla.
* “Vapor” é mais restrita.
* “Perfuração” é uma propriedade, não necessariamente uma afinidade.
* “Gravidade” pode fazer quase qualquer coisa se não houver limites.

**Correção necessária:** criar um sistema de construção por componentes ou, pelo menos, tabelas de referência.

---

### 10. Magias híbridas não possuem custo adicional claro

Uma magia pode ter várias funções:

* movimento;
* dano;
* defesa;
* controle;
* criação de terreno.

O documento diz que isso deve influenciar o custo, mas não determina quanto.

A Onda de Deslocamento, por exemplo, pode:

* mover o usuário;
* empurrar inimigos;
* derrubar;
* controlar terreno;
* redirecionar ataques.

Isso pode valer mais do que várias magias separadas.

**Brecha provável:** jogadores criarão magias com descrição ampla para justificar aplicações ilimitadas.

---

### 11. As interações mágicas dependem excessivamente do mestre

O documento tenta evitar arbitrariedade dizendo que o mestre deve considerar sete fatores, mas não fornece um procedimento para transformar esses fatores em uma decisão.

“Água vence fogo” pode significar:

* anulação automática;
* bônus de acerto;
* redução de dano;
* vantagem em teste oposto;
* apenas efeito narrativo.

Cada interpretação muda completamente o combate.

Além disso, algumas interações são discutíveis:

* água absorve eletricidade;
* água conduz eletricidade;
* vento dispersa água;
* água pesada pode atravessar vento;
* fogo pode evaporar água;
* água pode apagar fogo.

Sem uma regra objetiva, a mesa acabará discutindo física real aplicada seletivamente à magia.

---

### 12. As propriedades não têm efeitos mecânicos definidos

Termos como:

* Perfurante;
* Impacto;
* Rápida;
* Guiada;
* Defensiva;
* Condutora;
* Incendiária;

são apresentados como propriedades, mas funcionam apenas como descrições.

“Perfurante é eficiente contra defesas amplas” não informa:

* quanto de defesa ignora;
* se atravessa completamente;
* se recebe bônus;
* se reduz dano;
* quais defesas são amplas;
* o que acontece contra armadura física.

Enquanto as propriedades não possuírem efeitos específicos, elas são apenas argumentos para convencer o mestre.

---

### 13. Mana e recarga podem punir a mesma magia duas vezes

Uma magia forte pode possuir:

* alto custo de mana;
* recarga longa;
* baixa precisão;
* preparação;
* risco;
* penalidade de Quick Thinking.

Usar muitos limitadores simultaneamente pode fazer as magias mais interessantes serem frustrantes.

Também não está definido por que o sistema precisa de mana **e** recarga. Os dois recursos podem cumprir funções semelhantes.

A recarga ainda cria uma brecha simples:

* Jato Comprimido I entra em recarga.
* O jogador usa Jato Comprimido II.
* Depois usa Lança de Água Comprimida.
* Todas são essencialmente a mesma técnica com nomes diferentes.

**Correção necessária:** definir recargas compartilhadas por categoria ou decidir se a mana já é suficiente como limitador.

---

### 14. Armas corpo a corpo ainda não são realmente úteis

O documento afirma que armas serão úteis porque:

* não gastam mana;
* interrompem conjurações;
* funcionam durante recarga.

Porém nenhuma dessas vantagens possui regra concreta.

Não existe:

* dano de armas;
* chance de interrupção;
* alcance ameaçado;
* ataque de oportunidade;
* penalidade para conjurar em combate próximo;
* diferença entre arma e magia corpo a corpo.

Sem essas regras, a magia continuará sendo superior sempre que puder reproduzir o efeito da arma.

---

### 15. Pontos vitais podem causar eliminações arbitrárias

O documento permite atingir pontos vitais em situações como:

* crítico;
* surpresa;
* alvo imobilizado;
* mira preparada;
* penalidade no teste.

Mas não define o efeito.

Um ponto vital causa:

* dano dobrado;
* sangramento;
* incapacidade;
* morte instantânea;
* redução de atributo?

Se causar dano extremo, magias rápidas e perfurantes serão dominantes. Se causar pouco, a regra será irrelevante.

A frase “pelo menos uma destas condições” também é permissiva demais. Um alvo imobilizado poderia ser atingido repetidamente em pontos vitais sem dificuldade adicional.

---

## Falhas de estrutura do combate

### 16. Turno e rodada não estão diferenciados

Isso afeta diretamente:

* recarga;
* duração;
* condições;
* Quick Thinking;
* regeneração de mana;
* efeitos contínuos.

“Dois turnos” pode significar:

* dois turnos do usuário;
* dois personagens agindo;
* duas rodadas completas.

A terminologia precisa ser fixa.

---

### 17. Não existe regra de iniciativa

Destreza “pode influenciar” iniciativa, mas nenhuma regra é definida.

Também não está claro:

* se a ordem é fixa;
* se é rolada a cada rodada;
* como empates são resolvidos;
* se magias lentas mudam a ordem;
* se preparar uma ação altera a iniciativa.

---

### 18. Distâncias são abstratas demais

Os alcances são:

* pessoal;
* corpo a corpo;
* curto;
* médio;
* longo.

Mas não existe escala.

Isso impede determinar:

* movimento;
* mapas;
* áreas;
* perseguições;
* cobertura;
* diferença entre onda e jato;
* quanto uma propulsão realmente desloca.

Se o jogo for teatro da mente, ainda será necessário definir relações como “mesma zona”, “zona adjacente” e “zona distante”.

---

### 19. Não existe regra de linha de visão ou cobertura

Magias de longa distância precisam responder:

* podem atravessar aliados?
* precisam enxergar o alvo?
* paredes impedem conjuração?
* fumaça e vapor aplicam qual penalidade?
* cobertura reduz acerto ou dano?
* magias guiadas ignoram cobertura?

Sem isso, terreno tático tem pouco significado.

---

### 20. Não existe defesa básica

Se o personagem falhar no Quick Thinking, aparentemente recebe o ataque por completo.

Ainda não existem:

* armadura;
* resistência mágica;
* redução de dano;
* defesa passiva;
* resistência elemental;
* bloqueio sem magia;
* teste para suportar condições.

Isso torna Quick Thinking ainda mais obrigatório.

---

## Problemas de ambientação

### 21. A hierarquia ainda é decorativa

Capitão, Tenente, líderes, veteranos e novatos não possuem funções mecânicas.

Não está definido:

* quem concede missões;
* quantos magos formam uma equipe;
* como alguém é promovido;
* quais poderes cada patente concede;
* se patentes representam força ou autoridade;
* por que existem exatamente três líderes;
* se todas as regiões possuem a mesma estrutura.

Hoje, a hierarquia é uma lista de nomes, não um sistema organizacional.

---

### 22. “Veteranos possuem mais magias” pode gerar progressão horizontal descontrolada

Mais magias significam mais respostas para qualquer situação.

Um veterano pode não causar muito mais dano, mas terá:

* defesa adequada contra mais ameaças;
* mobilidade;
* controle;
* suporte;
* opções de reação;
* formas de ignorar recarga.

Isso pode fazer personagens experientes ficarem muito mais versáteis do que os novatos, tornando encontros difíceis de equilibrar.

É necessário limitar:

* quantidade de magias equipadas;
* magias preparadas;
* páginas acessíveis do grimório;
* ou quantidade de técnicas utilizáveis por missão.

---

### 23. O aparecimento do grimório não possui critério

O grimório surge quando o personagem está “pronto”, mas o conceito não possui definição.

Isso gera perguntas:

* crianças podem receber grimórios?
* alguém pode nunca receber?
* o grimório surge em perigo?
* ele reflete personalidade ou afinidade?
* é possível perder um grimório?
* alguém pode roubá-lo?
* ele pode ser destruído?
* magias permanecem sem ele?

Essas respostas afetam diretamente o cenário e o combate.

---

### 24. A origem das magias não está clara

O texto diz que o grimório concede magias, mas a criação permite ao jogador inventá-las.

Não está claro se:

* o grimório cria magias espontaneamente;
* o mago escreve novas magias;
* o grimório prevê o potencial do usuário;
* novas páginas aparecem após evolução;
* magias podem ser ensinadas;
* duas pessoas podem possuir a mesma magia.

Isso precisa ser definido porque determina como funciona a progressão.

---

### 25. A proposta é muito próxima de uma referência específica

Trevos de três e quatro folhas, grimórios que concedem magias, pessoas abençoadas pela mana e uma organização de magos comandada por capitães produzem uma identidade muito reconhecível.

Mesmo sem considerar publicação, isso pode fazer o projeto parecer uma adaptação, não um universo próprio.

Para ganhar identidade, seria necessário alterar pelo menos parte destes pilares:

* símbolo e categorias dos grimórios;
* forma de manifestação;
* estrutura das organizações;
* significado da raridade;
* relação entre mana e magia.

---

## Falhas menores do documento

### 26. Regras definitivas e sugestões estão misturadas

O texto alterna entre:

* “o personagem realiza”;
* “pode influenciar”;
* “custo sugerido”;
* “uma possível exceção”;
* “deve ser testada”.

Isso dificulta saber o que já é regra.

O documento deveria marcar cada elemento como:

* **Definido**
* **Provisório**
* **Em teste**
* **Não definido**

---

### 27. Exemplos aparecem antes das bases matemáticas

Há exemplos de magias com:

* dano moderado;
* custo elevado;
* alcance longo;
* alta velocidade.

Nenhum desses conceitos possui escala.

Os exemplos parecem concretos, mas ainda não podem ser avaliados ou utilizados.

---

### 28. Termos diferentes podem representar a mesma coisa

O texto usa:

* magia;
* técnica;
* habilidade;
* feitiço;
* ação;
* ação principal;
* Ação Rápida;
* reação;
* Quick Thinking.

É necessário definir se esses termos são sinônimos ou categorias diferentes.

---

### 29. “Instantânea” pode ser uma propriedade perigosa

Se uma magia instantânea não oferece janela de reação, ela será naturalmente superior.

Se oferece reação com penalidade, ela não é literalmente instantânea.

O termo deveria representar uma regra precisa, não apenas velocidade extrema.

---

### 30. O bloco da ficha contém um identificador acidental

O trecho:

````text
```text id="rilpax"
````

contém um identificador interno que não pertence ao documento. Deve ser removido.

---

### 31. A hierarquia dos títulos está inconsistente

Dentro da seção 16, “Mago de água” aparece com o mesmo nível visual de seções principais. O correto seria usar subtítulos menores.

Não é um problema mecânico, mas prejudica leitura e organização.

---

### 32. O documento repete várias ideias

Exemplos:

* funções de magia são explicadas em mais de uma seção;
* movimento mágico aparece em diferentes partes;
* interações são repetidas nos exemplos;
* limitações são citadas na criação, na ficha e no balanceamento.

Isso aumenta o tamanho sem aumentar a precisão.

---

# Explorações prováveis em playtest

## Construção de Destreza máxima

O jogador maximiza Destreza e obtém:

* iniciativa alta;
* maior esquiva;
* mais Quick Thinking;
* melhores combos;
* melhor combate próximo.

Provavelmente será a construção dominante.

## Grimório de quatro folhas obrigatório

Sem custo ou desvantagem, todos tentarão escolher quatro folhas.

## Magias duplicadas para ignorar recarga

O jogador cria três variações quase idênticas do mesmo ataque e alterna entre elas.

## Magia excessivamente ampla

Exemplo:

> “Controlo água ao meu redor para atacar, defender, movimentar, prender, apagar fogo e redirecionar projéteis.”

Sem custo por função, uma única magia resolve quase tudo.

## Ataque rápido e perfurante

Velocidade reduz a chance de Quick Thinking. Perfuração enfraquece defesas. Ataques a distância evitam armas corpo a corpo.

Essa combinação tende a ser claramente superior, especialmente se também puder atingir pontos vitais.

## Defesa universal disfarçada

Uma barreira pode ser descrita para:

* apagar fogo;
* absorver impacto;
* conduzir eletricidade;
* desviar projéteis;
* bloquear visão.

Sem limites mecânicos, uma magia defensiva pode neutralizar muitas categorias.

## Limitações falsas

Jogadores podem adicionar limitações pouco relevantes para justificar poderes maiores.

Exemplos:

* “Só funciona quando consigo ver o alvo.”
* “Preciso mover a mão.”
* “Não funciona debaixo d’água”, para um cenário quase sempre terrestre.

O sistema precisa diferenciar limitações reais de limitações cosméticas.

---

# Principais riscos para a experiência

O sistema promete combate dinâmico, mas a estrutura atual tende a produzir:

* muitas interrupções;
* excesso de rolagens;
* discussões sobre física;
* consultas constantes ao mestre;
* personagens desequilibrados;
* Destreza obrigatória;
* lentidão causada por reações;
* dificuldade de preparar inimigos;
* inconsistência entre sessões.

# Ordem recomendada de correção

Antes de criar a ficha completa, os bloqueios principais são:

1. Definir o procedimento exato de um ataque.
2. Definir limite e janela do Quick Thinking.
3. Corrigir o sistema de críticos do d100.
4. Reduzir a dominância de Destreza.
5. Criar uma estrutura objetiva para construir magias.
6. Definir propriedades com efeitos mecânicos.
7. Resolver a função do grimório de quatro folhas.
8. Escolher como interações mágicas produzem bônus ou penalidades.
9. Decidir se o jogo usa mana, recarga ou ambos.
10. Separar regras definitivas de ideias provisórias.

**Conclusão:** o conceito tem potencial, mas o documento atual depende demais do julgamento do mestre. O maior problema não é falta de conteúdo; é falta de procedimentos objetivos para transformar as descrições em resultados consistentes.
