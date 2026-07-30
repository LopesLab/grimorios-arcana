# Baseline de regras e catálogos do MVP

**Status:** proposta operacional para iniciar o desenvolvimento. Deve ser validada em playtest.

## Decisões do recorte

- Grimório inicial: três folhas.
- Magias iniciais: exatamente três.
- Uma Afinidade por personagem.
- Um Comportamento de Mana por personagem.
- Uma função principal e, opcionalmente, uma função secundária por magia.
- O custo de complexidade é tratado como custo direto de Mana no MVP experimental.

## Afinidades iniciais

| ID | Afinidade | Fantasia principal |
|---|---|---|
| `water` | Água | fluxo, pressão, defesa e adaptação |
| `fire` | Fogo | calor, combustão e intensidade |
| `wind` | Vento | deslocamento, corte e dispersão |
| `earth` | Terra | massa, proteção e impacto |
| `electricity` | Eletricidade | condução, velocidade e descarga |

## Comportamentos de Mana iniciais

| ID | Comportamento | Limite temático |
|---|---|---|
| `compression` | Compressão | densificar, concentrar e disparar |
| `rotation` | Rotação | girar, desviar, puxar e circular |
| `expansion` | Expansão | ampliar volume, área e alcance físico |
| `adhesion` | Aderência | fixar, prender, revestir e criar armadilhas |
| `absorption` | Absorção | consumir, armazenar e redirecionar energia compatível |

## Funções disponíveis

- Ataque
- Defesa
- Movimento
- Controle
- Suporte
- Cura
- Invocação
- Criação de terreno

Para a primeira versão do editor, Cura e Invocação podem permanecer disponíveis apenas como opções experimentais, pois exigem tabelas de potência mais específicas.

## Propriedades iniciais

| ID | Propriedade | Efeito experimental |
|---|---|---|
| `impactful` | Impactante | sucesso forte pode empurrar ou derrubar |
| `piercing` | Perfurante | defesa inadequada conta um grau abaixo |
| `guided` | Guiada | altera parcialmente a trajetória |
| `defensive` | Defensiva | pode ser usada como método defensivo declarado |
| `concealing` | Ocultadora | prejudica visão ou percepção |
| `reactive` | Reativa | pode ser usada como reação apropriada |

## Limitações iniciais

- Linha reta.
- Preparação obrigatória.
- Usuário fica Exposto durante a conjuração.
- Exige contato físico.
- Recarga de duas rodadas.
- Penalidade após o uso.

Cada limitação válida reduz 1 Mana, com no máximo duas reduções por magia.

## Convenções de duração

- Instantânea: resolve no momento da conjuração.
- Próximo turno: permanece até o início do próximo turno do usuário.
- Concentração: permanece enquanto o usuário mantiver concentração; apenas uma por personagem.
- Três rodadas: permanece por três rodadas sem concentração.
- Cena: permanece até o fim da cena, sujeita a revisão do mestre.

## Saída esperada da Fase 0

Com esta baseline, já é possível implementar o modelo de dados, o fluxo de atributos, a seleção de identidade mágica e o editor inicial de magias. O próximo passo técnico é inicializar o projeto Angular e transformar esses catálogos em dados tipados.
