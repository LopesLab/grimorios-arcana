# Decisões Mecânicas Consolidadas

## 1. Fluxo de ataque

Quando um personagem realiza um ataque:

1. O atacante faz o teste de acerto.
2. Se o ataque falhar, a ação termina.
3. Se o ataque acertar, o defensor pode realizar um teste de **Quick Thinking**.
4. Se passar no Quick Thinking, o defensor escolhe entre:

   * esquivar;
   * defender;
   * realizar outra reação permitida.
5. A reação é resolvida.
6. O dano e os efeitos restantes são aplicados.

---

## 2. Quick Thinking

Quick Thinking representa a capacidade de perceber um ataque e reagir antes que ele seja concluído.

O teste utiliza **Destreza**.

### Limite por rodada

Cada personagem pode tentar Quick Thinking no máximo **três vezes por rodada**.

| Tentativa | Penalidade |
| --------- | ---------: |
| Primeira  |       `0%` |
| Segunda   |     `−20%` |
| Terceira  |     `−40%` |

A penalidade é aplicada à Destreza do personagem.

### Exemplo

Um personagem possui `70%` de Destreza.

| Tentativa | Chance final |
| --------- | -----------: |
| Primeira  |        `70%` |
| Segunda   |        `50%` |
| Terceira  |        `30%` |

Falhar em uma tentativa não impede novas tentativas, mas a penalidade continua aumentando normalmente.

---

## 3. Esquiva

Após passar no Quick Thinking, o personagem pode escolher esquivar.

A esquiva:

* não exige um segundo teste;
* anula todo o dano do ataque;
* evita os efeitos diretamente associados ao impacto;
* aplica `−10%` à próxima ação do personagem.

A penalidade representa perda de postura, posicionamento ou tempo.

---

## 4. Defesa

Após passar no Quick Thinking, o personagem pode escolher defender.

A defesa:

* exige uma magia, arma ou manobra apropriada;
* exige um segundo teste;
* não aplica penalidade à próxima ação;
* pode reduzir ou anular o dano;
* é comparada ao grau de sucesso do ataque.

A defesa permite que o personagem mantenha melhor posicionamento e prontidão, mas possui mais risco do que a esquiva.

---

## 5. Atributos usados em defesas

O atributo utilizado depende do método defensivo.

| Método de defesa                              | Atributo   |
| --------------------------------------------- | ---------- |
| Barreiras, escudos e manipulação precisa      | Controle   |
| Aparar, desviar ou redirecionar               | Destreza   |
| Enfrentar força com força                     | Poder      |
| Resistir a ilusões, medo e controle mental    | Vontade    |
| Resistir a veneno, exaustão e efeitos físicos | Vitalidade |

Cada magia ou técnica defensiva deve declarar previamente qual atributo utiliza.

O mestre não escolhe o atributo durante o ataque, salvo situações completamente imprevistas.

---

## 6. Graus de sucesso

Os graus são calculados proporcionalmente ao valor testado.

Considere `H` como a porcentagem final da habilidade.

| Resultado do d100                 | Grau           |
| --------------------------------- | -------------- |
| Igual ou menor que `H ÷ 10`       | Crítico        |
| Igual ou menor que `H ÷ 2`        | Sucesso forte  |
| Igual ou menor que `H`            | Sucesso normal |
| Maior que `H`                     | Falha          |
| `96–100`, quando também for falha | Falha crítica  |

Todos os valores fracionados são arredondados para baixo.

### Exemplo com habilidade 70%

|  Rolagem | Resultado      |
| -------: | -------------- |
|  `01–07` | Crítico        |
|  `08–35` | Sucesso forte  |
|  `36–70` | Sucesso normal |
|  `71–95` | Falha          |
| `96–100` | Falha crítica  |

No d100, `00` representa `100`.

---

## 7. Falha crítica

Um resultado entre `96` e `100` somente é uma falha crítica quando também estiver acima da porcentagem final do teste.

### Exemplo com habilidade 98%

| Rolagem | Resultado      |
| ------: | -------------- |
|    `97` | Sucesso normal |
|    `98` | Sucesso normal |
|    `99` | Falha crítica  |
|   `100` | Falha crítica  |

---

## 8. Limites percentuais

Depois de aplicar todos os bônus e penalidades:

* nenhuma chance pode ficar abaixo de `5%`;
* nenhuma chance pode ficar acima de `95%`.

### Exemplos

* Chance calculada em `−10%` torna-se `5%`.
* Chance calculada em `103%` torna-se `95%`.

---

## 9. Modificadores

Bônus e penalidades utilizam soma direta.

### Exemplo

```text
Controle: 70%
Alvo distante: −15%
Alvo imobilizado: +10%

Chance final: 65%
```

Depois da soma, aplicam-se os limites de `5%` e `95%`.

---

## 10. Comparação entre ataque e defesa

Ataques e defesas são comparados pelos graus de sucesso.

| Diferença da defesa em relação ao ataque | Resultado                                      |
| ---------------------------------------: | ---------------------------------------------- |
|                             `+2` ou mais | Anula todo o dano e todos os efeitos           |
|                                     `+1` | Anula o dano, mas pode restar um efeito mínimo |
|                                      `0` | Reduz grande parte do dano                     |
|                                     `−1` | Reduz uma pequena parte do dano                |
|                            `−2` ou menos | O ataque causa o dano completo                 |
|                  Falha crítica defensiva | Dano completo e complicação                    |

A redução numérica exata para sucessos iguais e defesa um grau abaixo ainda precisa ser definida.

### Graus numéricos

| Grau           | Valor |
| -------------- | ----: |
| Crítico        |   `3` |
| Sucesso forte  |   `2` |
| Sucesso normal |   `1` |
| Falha          |   `0` |
| Falha crítica  |  `−1` |

### Exemplo

* Ataque: sucesso forte, grau `2`.
* Defesa: sucesso normal, grau `1`.
* Diferença da defesa: `−1`.
* A defesa reduz uma pequena parte do dano.

---

## 11. Acerto mágico

Todos os ataques mágicos utilizam **Controle** como porcentagem-base.

```text
Chance de acerto mágico =
Controle + modificadores
```

Não haverá treinamento numérico separado por:

* magia individual;
* categoria de magia;
* escola mágica.

A especialização deverá aparecer por novas capacidades, propriedades e formas de utilização, não apenas por bônus percentuais adicionais.

---

## 12. Ataques corpo a corpo

O atributo de acerto depende da categoria da arma.

| Categoria   | Atributo de acerto |
| ----------- | ------------------ |
| Arma leve   | Destreza           |
| Arma pesada | Poder              |

Cada arma deve possuir uma categoria fixa.

A classificação de armas médias ainda precisa ser confirmada.

---

## 13. Dano corpo a corpo

O dano de uma arma é calculado usando:

```text
Dano = dado da arma + atributo ÷ 10
```

O resultado da divisão é arredondado para baixo.

### Exemplos provisórios

| Categoria   | Dano                  |
| ----------- | --------------------- |
| Arma leve   | `1d6 + Destreza ÷ 10` |
| Arma média  | `1d8 + Poder ÷ 10`    |
| Arma pesada | `1d10 + Poder ÷ 10`   |

Os dados exatos das categorias ainda podem ser alterados durante os testes.

---

## 14. Dano mágico

O dano de uma magia utiliza:

```text
Dano mágico =
dados-base da magia + Poder ÷ 10 + potencialização
```

O modificador de Poder é arredondado para baixo.

### Exemplo

Um personagem possui Poder `64` e utiliza uma magia de dano `2d8`.

```text
2d8 + 6
```

A magia pode ser potencializada com mana adicional.

---

## 15. Patamares de potencialização

Cada magia ofensiva pode possuir até três patamares.

| Patamar     | Mana adicional | Efeito                            |
| ----------- | -------------: | --------------------------------- |
| Normal      |           `+0` | Dano-base                         |
| Fortalecida |           `+2` | Adiciona um dado do mesmo tipo    |
| Máxima      |           `+5` | Adiciona dois dados do mesmo tipo |

### Exemplo

Uma magia possui dano-base de:

```text
2d8 + Poder ÷ 10
```

Seus patamares serão:

| Patamar     | Dano               |
| ----------- | ------------------ |
| Normal      | `2d8 + Poder ÷ 10` |
| Fortalecida | `3d8 + Poder ÷ 10` |
| Máxima      | `4d8 + Poder ÷ 10` |

A mana adicional é somada ao custo-base da magia.

---

## 16. Acesso aos patamares

* O patamar **Normal** está disponível desde o início.
* O patamar **Fortalecida** está disponível desde o início.
* O patamar **Máxima** precisa ser desbloqueado durante a progressão.

A forma exata de desbloqueio ainda será definida.

---

## 17. Custo-base das magias

O custo-base de uma magia será calculado por componentes.

Os componentes previstos incluem:

* dano;
* alcance;
* área;
* velocidade;
* duração;
* mobilidade;
* capacidade defensiva;
* condições aplicadas;
* propriedades adicionais.

A estrutura geral será:

```text
Custo total =
custo dos componentes + potencialização
```

### Exemplo

```text
Custo-base da magia: 4 mana
Patamar Fortalecida: +2 mana
Custo total: 6 mana
```

Ainda precisa ser definida a tabela numérica de cada componente.

---

# Decisões ainda pendentes

1. Valores exatos de redução de dano das defesas.
2. Funcionamento dos efeitos mínimos quando a defesa supera o ataque em um grau.
3. Classificação e atributo das armas médias.
4. Dados definitivos de dano das armas.
5. Tabela de custos dos componentes mágicos.
6. Nível de detalhe da criação de magias.
7. Quantidade total e recuperação de mana.
8. Forma de desbloquear o patamar Máximo.
9. Consequências exatas de uma falha crítica defensiva.
10. Interação entre propriedades como Perfurante, Impacto e Defensiva.
