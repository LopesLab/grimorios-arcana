## Modelo recomendado: **Orçamento de Complexidade**

Cada magia é montada em três camadas:

1. **Efeito:** o que ela faz.
2. **Entrega:** como o efeito chega ao alvo.
3. **Modificadores:** propriedades e limitações.

A soma dos componentes determina diretamente o **custo-base de Mana**.

---

# 1. Fórmula geral

> **Custo-base = 1 + Função + Potência + Alcance + Área + Velocidade + Duração + Propriedades + Função secundária − Limitações**

O custo mínimo é **1 Mana**.

O valor `1` representa o custo mínimo de transformar mana em uma técnica estruturada.

---

# 2. Função principal

A função define qual tabela de potência será utilizada.

| Função             | Custo adicional |
| ------------------ | --------------: |
| Ataque             |            `+0` |
| Defesa             |            `+0` |
| Movimento          |            `+0` |
| Suporte            |            `+0` |
| Controle           |            `+1` |
| Criação de terreno |            `+1` |
| Cura               |            `+2` |
| Invocação          |            `+2` |

Controle, Cura e Invocação são mais caros porque interferem fortemente na economia de ações ou revertem consequências.

---

# 3. Potência

Todas as funções usam três graus:

| Potência | Custo |
| -------- | ----: |
| Menor    |  `+1` |
| Padrão   |  `+2` |
| Maior    |  `+3` |

O significado depende da função.

| Função    | Menor              | Padrão                 | Maior               |
| --------- | ------------------ | ---------------------- | ------------------- |
| Ataque    | dano leve          | dano médio             | dano elevado        |
| Defesa    | proteção limitada  | defesa comum           | defesa robusta      |
| Movimento | deslocamento curto | deslocamento relevante | grande deslocamento |
| Controle  | inconveniente      | condição relevante     | restrição severa    |
| Suporte   | bônus pequeno      | bônus relevante        | bônus forte         |
| Cura      | recuperação leve   | recuperação média      | recuperação elevada |
| Invocação | criatura menor     | criatura comum         | criatura poderosa   |
| Terreno   | área pequena       | área média             | área ampla          |

Cada função precisará posteriormente de sua própria tabela numérica.

---

# 4. Função secundária

Uma magia pode possuir uma função secundária.

> **Função secundária: `+2 Mana`**

A função secundária deve operar **um grau abaixo** da função principal.

### Exemplo

Uma magia de Movimento Padrão com Controle secundário:

* Movimento: Padrão
* Controle secundário: Menor

Isso impede que uma única magia seja excelente em duas funções simultaneamente.

Uma magia pode não possuir função secundária.

---

# 5. Alcance

| Alcance          | Custo |
| ---------------- | ----: |
| Pessoal ou toque |  `+0` |
| Curto            |  `+1` |
| Médio            |  `+2` |
| Longo            |  `+3` |

As distâncias exatas serão definidas junto das regras de movimento.

---

# 6. Área

| Área         | Custo |
| ------------ | ----: |
| Um alvo      |  `+0` |
| Área pequena |  `+1` |
| Área média   |  `+2` |
| Área grande  |  `+3` |

Uma magia de área não recebe automaticamente dano ou potência menor. Ela simplesmente custa mais.

---

# 7. Velocidade

| Velocidade  | Custo |     Quick Thinking |
| ----------- | ----: | -----------------: |
| Lenta       |  `−1` | `+15%` para reagir |
| Normal      |  `+0` |    sem modificador |
| Rápida      |  `+1` | `−15%` para reagir |
| Instantânea |  `+3` |     regra especial |

**Instantânea** deve ser rara e provavelmente indisponível na criação inicial.

---

# 8. Duração e concentração

| Duração                       | Custo |
| ----------------------------- | ----: |
| Instantânea                   |  `+0` |
| Até o início do próximo turno |  `+1` |
| Mantida por concentração      |  `+1` |
| Três rodadas sem concentração |  `+2` |
| Até o fim da cena             |  `+4` |

## Concentração

* O personagem normalmente mantém apenas **uma magia de concentração**.
* Sofrer um Ferimento Grave exige teste de Vontade.
* Falhar encerra a magia.
* Conjurar outra magia de concentração encerra a anterior.

Talentos futuros podem aumentar esse limite.

---

# 9. Propriedades de Técnica

Cada propriedade possui uma regra objetiva e um custo.

Exemplos iniciais:

| Propriedade  |    Custo | Efeito                                    |
| ------------ | -------: | ----------------------------------------- |
| Impactante   |     `+1` | Sucesso forte pode empurrar ou derrubar   |
| Perfurante   |     `+1` | Defesas inadequadas contam um grau abaixo |
| Guiada       |     `+1` | Pode alterar parcialmente sua trajetória  |
| Persistente  | variável | Continua produzindo efeito                |
| Ocultadora   |     `+1` | Prejudica visão ou percepção              |
| Condutora    |     `+1` | Transmite outro efeito compatível         |
| Interceptora |     `+1` | Pode proteger outro alvo                  |
| Reativa      |     `+2` | Pode ser utilizada como reação apropriada |

A propriedade só deve ser comprada quando produzir uma vantagem mecânica. Descrições puramente visuais não aumentam o custo.

---

# 10. Limitações

Uma limitação válida reduz o custo em `1 Mana`.

Máximo recomendado:

> **Até duas reduções por magia.**

### Limitações válidas

* funciona apenas em linha reta;
* exige uma ação de preparação;
* imobiliza o usuário durante a conjuração;
* necessita de uma fonte externa real;
* deixa o usuário Exposto;
* possui recarga de duas rodadas;
* causa uma penalidade depois do uso;
* exige contato físico;
* pode ser interrompida facilmente.

### Limitações inválidas

* precisa enxergar o alvo em uma magia normalmente visual;
* exige movimentar a mão;
* não funciona em uma situação extremamente rara;
* gasta Mana;
* possui alcance limitado já contabilizado;
* depende de algo que o personagem sempre carrega sem risco de perder.

A limitação precisa alterar decisões reais durante o jogo.

---

# 11. Recarga

**Recarga não deve ser padrão.**

Mana já limita o uso das magias. Colocar recarga em todas elas cria dois controles para o mesmo recurso.

A recarga deve funcionar como:

* limitação voluntária;
* característica de técnicas extremamente fortes;
* consequência de potencialização;
* efeito de uma falha crítica.

Exemplo:

> Recarga de duas rodadas: `−1` no custo-base.

Magias quase idênticas devem compartilhar a mesma recarga para evitar duplicações artificiais.

---

# 12. Patamares

O custo calculado representa o patamar **Normal**.

* **Normal:** custo-base.
* **Fortalecida:** custo-base `+2 Mana`.
* **Máxima:** custo-base `+5 Mana`.

Para ataques:

* Fortalecida adiciona `+1 dado`.
* Máxima adiciona `+2 dados`.

Para outras funções, cada magia deverá registrar antecipadamente o que seus patamares melhoram, como:

* potência;
* área;
* duração;
* quantidade de alvos;
* resistência da defesa.

---

# Exemplo

## Jato Comprimido

**Afinidade:** Água
**Comportamento:** Compressão
**Função:** Ataque
**Potência:** Padrão
**Alcance:** Médio
**Área:** Um alvo
**Velocidade:** Rápida
**Duração:** Instantânea
**Propriedade:** Perfurante
**Limitação:** Linha reta

| Componente      |      Custo |
| --------------- | ---------: |
| Base            |        `1` |
| Ataque          |        `0` |
| Potência Padrão |        `2` |
| Alcance Médio   |        `2` |
| Um alvo         |        `0` |
| Rápida          |        `1` |
| Instantânea     |        `0` |
| Perfurante      |        `1` |
| Linha reta      |       `−1` |
| **Custo total** | **6 Mana** |

* Fortalecida: `8 Mana`
* Máxima: `11 Mana`

## Avaliação

Esse modelo oferece:

* custo previsível;
* liberdade com limites;
* baixa dependência da interpretação do mestre;
* comparação objetiva entre técnicas;
* espaço para expansão;
* controle sobre magias multifuncionais.

O primeiro ponto a fechar é se os **Pontos de Complexidade serão diretamente iguais ao custo de Mana**, como no exemplo, ou se serão convertidos por faixas. Minha recomendação é usar equivalência direta: **1 ponto = 1 Mana**.
