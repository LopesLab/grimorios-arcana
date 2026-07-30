# Status mecânico — Grimórios de Arcana

## Decisões consolidadas

- Ataque: acerto → Quick Thinking do defensor → escolha de esquiva/defesa/outra reação → resolução → dano e efeitos.
- Quick Thinking usa Destreza e permite até três tentativas por rodada, com penalidades cumulativas de 0%, -20% e -40%.
- Esquiva não exige segundo teste, anula dano/efeitos de impacto e impõe -10% à próxima ação.
- Defesa exige método apropriado e segundo teste; o atributo depende do método.
- Graus são comparados numericamente: crítico 3, sucesso forte 2, sucesso normal 1, falha 0, falha crítica -1.
- Testes usam limites finais entre 5% e 95%; `00` representa 100.
- Crítico é proporcional à habilidade final (`H ÷ 10`); falha crítica ocorre entre 96–100 apenas quando o resultado também falha.
- Acerto mágico usa Controle como base.
- Armas leves usam Destreza; armas pesadas usam Poder; armas médias e dados definitivos ainda estão pendentes.
- Dano mágico combina dados-base, Poder ÷ 10 e potencialização.
- Magias ofensivas têm patamares Normal, Fortalecida (+2 mana) e Máxima (+5 mana); o patamar Máximo precisa ser desbloqueado.
- Custo de magia será composto por componentes, ainda sem tabela numérica definitiva.

## Pendências prioritárias

1. Definir redução numérica de dano e efeitos mínimos da defesa.
2. Definir armas médias e dados finais de armas.
3. Criar tabela de custos dos componentes de magia.
4. Definir detalhe e limites da criação de magias.
5. Definir reserva e recuperação de mana.
6. Definir desbloqueio do patamar Máximo.
7. Definir falha crítica defensiva.
8. Definir efeitos mecânicos de Perfurante, Impacto, Defensiva e demais propriedades.

## Impacto no produto digital

O futuro sistema Angular deverá modelar explicitamente: teste percentual, grau de sucesso, tentativas de Quick Thinking por rodada, métodos defensivos, comparação ataque/defesa, dano e patamares de potencialização. A interface deve mostrar quais valores são definitivos e quais estão em playtest.
