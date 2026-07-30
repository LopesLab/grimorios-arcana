# Ficha de Personagem — Decisões Consolidadas

## 1. Atributos

A ficha possui cinco atributos:

| Atributo       | Funções principais                                         |
| -------------- | ---------------------------------------------------------- |
| **Poder**      | Dano mágico, armas pesadas e defesas por força bruta       |
| **Controle**   | Acerto mágico, barreiras e manipulação precisa de mana     |
| **Destreza**   | Quick Thinking, armas leves, aparar e redirecionar ataques |
| **Vontade**    | Mana máxima, concentração e resistência mental             |
| **Vitalidade** | Pontos de Vida, resistência física e Estado Crítico        |

Os atributos variam de **1 a 20**.

Quando um atributo for testado com `1d100`:

> **Porcentagem-base = atributo × 5**

### Exemplos

| Atributo | Porcentagem-base |
| -------: | ---------------: |
|        8 |              40% |
|       10 |              50% |
|       12 |              60% |
|       14 |              70% |
|       16 |              80% |

Depois são aplicados os modificadores da situação, respeitando o limite final de `5%` a `95%`.

---

## 2. Distribuição inicial

Cada personagem distribui os seguintes valores entre os cinco atributos:

> **16, 14, 12, 10 e 8**

Isso gera as seguintes porcentagens-base:

> **80%, 70%, 60%, 50% e 40%**

Cada valor só pode ser utilizado uma vez.

---

## 3. Mana máxima

A Mana máxima é calculada por:

> **Mana = 10 + (Vontade × 2)**

### Exemplos

| Vontade | Mana máxima |
| ------: | ----------: |
|       8 |          26 |
|      10 |          30 |
|      12 |          34 |
|      14 |          38 |
|      16 |          42 |

Um descanso completo recupera toda a Mana.

---

## 4. Pontos de Vida

Os Pontos de Vida são calculados por:

> **PV = 10 + (Vitalidade × 2)**

### Exemplos

| Vitalidade | PV máximo |
| ---------: | --------: |
|          8 |        26 |
|         10 |        30 |
|         12 |        34 |
|         14 |        38 |
|         16 |        42 |

---

## 5. Recuperação de PV

Um descanso completo não recupera todos os PV automaticamente.

A recuperação natural é:

> **PV recuperado = Vitalidade ÷ 2**

O resultado é arredondado para baixo.

### Exemplo

Um personagem com Vitalidade `13` recupera `6 PV` após um descanso completo.

Tratamentos, itens e magias de cura podem aumentar essa recuperação.

---

## 6. Ferimentos Graves

Um personagem sofre um **Ferimento Grave** quando ocorre pelo menos uma destas situações:

* recebe um acerto crítico;
* sofre, em um único ataque, dano igual ou superior a `35%` de seu PV máximo.

O limite de dano é arredondado para cima.

### Exemplos

| PV máximo | Dano necessário |
| --------: | --------------: |
|        26 |              10 |
|        30 |              11 |
|        34 |              12 |
|        38 |              14 |
|        42 |              15 |

---

## 7. Ferimentos localizados

Todo Ferimento Grave afeta uma região do corpo e aplica uma condição compatível com:

* região atingida;
* tipo de dano;
* propriedades da arma ou magia.

### Exemplos

| Região | Tipo de dano | Possível condição                             |
| ------ | ------------ | --------------------------------------------- |
| Braço  | Impacto      | Fratura ou dificuldade para utilizar o membro |
| Perna  | Corte        | Sangramento e redução de movimento            |
| Cabeça | Impacto      | Concussão                                     |
| Tronco | Perfuração   | Hemorragia                                    |
| Pele   | Fogo         | Queimadura                                    |
| Olhos  | Luz intensa  | Cegueira temporária                           |

Os efeitos devem afetar ações relacionadas ao ferimento, em vez de aplicar uma penalidade universal a todos os testes.

Ferimentos Graves podem se acumular, mas não causam penalidade acumulativa automática em testes de Vitalidade.

---

## 8. Ataques direcionados

O atacante pode declarar uma região específica antes de realizar o teste de acerto.

| Região escolhida        | Penalidade |
| ----------------------- | ---------: |
| Tronco                  |     `−10%` |
| Braço ou perna          |     `−20%` |
| Cabeça ou ponto pequeno |     `−30%` |

Caso o ataque acerte, mas não cause um Ferimento Grave, ele causa apenas o dano normal.

Caso cause um Ferimento Grave, a condição será aplicada à região declarada.

Sem uma região declarada, a localização do Ferimento Grave deve ser determinada pela descrição do ataque ou por uma tabela de localização ainda não definida.

---

## 9. Zero PV

Ao chegar a `0 PV`, o personagem fica **Incapacitado**.

Enquanto estiver Incapacitado:

* continua inicialmente consciente;
* não pode atacar;
* não pode conjurar normalmente;
* não pode realizar defesas normais;
* pode falar, observar e executar ações mínimas;
* começa a realizar testes de Estado Crítico.

Um personagem não fica Incapacitado apenas por acumular Ferimentos Graves enquanto ainda possui PV.

---

## 10. Estado Crítico

No fim de cada um de seus turnos, o personagem Incapacitado realiza um teste de **Vitalidade**.

Cada rodada consecutiva em Estado Crítico aplica `−10%` ao teste:

|     Teste |                 Penalidade |
| --------: | -------------------------: |
|  Primeiro |                       `0%` |
|   Segundo |                     `−10%` |
|  Terceiro |                     `−20%` |
|    Quarto |                     `−30%` |
| Seguintes | `−10%` adicional por teste |

O limite mínimo de `5%` continua sendo aplicado.

### Contagem

| Resultado               | Consequência         |
| ----------------------- | -------------------- |
| Sucesso normal ou forte | Acumula `1 sucesso`  |
| Sucesso crítico         | Acumula `2 sucessos` |
| Falha normal            | Acumula `1 falha`    |
| Falha crítica           | Acumula `2 falhas`   |

* Ao acumular **3 sucessos**, o personagem fica estabilizado.
* Ao acumular **3 falhas**, o personagem desmaia.
* Sucessos e falhas são registrados separadamente.
* A primeira contagem a alcançar três determina o resultado.

---

## 11. Estabilização

Um personagem estabilizado:

* permanece com `0 PV`;
* não precisa continuar realizando testes de Estado Crítico;
* continua Incapacitado;
* precisa de tratamento para voltar a agir.

A estabilização pode ocorrer por:

* três sucessos nos testes;
* primeiros socorros;
* magia de cura;
* item apropriado;
* outra técnica explicitamente capaz de estabilizar.

As regras e dificuldades para tratamento ainda precisam ser definidas.

---

## 12. Desmaio e risco de morte

Ao acumular três falhas, o personagem desmaia, mas não morre automaticamente.

Enquanto estiver desmaiado com `0 PV`:

* permanece Incapacitado;
* continua correndo risco;
* precisa receber tratamento;
* não realiza ações;
* não pode se estabilizar sozinho.

A consequência exata de permanecer sem tratamento ou receber novos ataques ainda não foi definida.

A morte dos personagens não será resolvida automaticamente apenas pela contagem inicial de sucessos e falhas.

---

## 13. Pendências da ficha

Ainda precisam ser definidos:

1. Iniciativa.
2. Movimento básico.
3. Perícias, caso existam.
4. Concentração e manutenção de magias.
5. Recuperação de Mana durante uma missão.
6. Primeiros socorros e tratamento.
7. Magias de cura.
8. Consequências de receber dano em `0 PV`.
9. Condições para morte de personagem.
10. Duração e tratamento dos Ferimentos Graves.
11. Equipamentos, armaduras e focos mágicos.
12. Espaços para grimório, afinidade e magias.

A próxima parte mais estrutural é **iniciativa, ações e movimento**.
