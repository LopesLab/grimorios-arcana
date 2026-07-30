# Status da ficha de personagem — Grimórios de Arcana

## Decisões consolidadas

- A ficha possui cinco atributos: Poder, Controle, Destreza, Vontade e Vitalidade.
- Atributos variam de 1 a 20 e testes usam atributo × 5 como porcentagem-base.
- Distribuição inicial: 16, 14, 12, 10 e 8, cada valor uma vez.
- Mana máxima: `10 + (Vontade × 2)`.
- PV máximos: `10 + (Vitalidade × 2)`.
- Descanso completo recupera toda a Mana, mas PV recuperam `Vitalidade ÷ 2`, arredondado para baixo.
- Ferimento Grave ocorre por acerto crítico ou dano único igual/superior a 35% dos PV máximos.
- Ferimentos Graves são localizados e devem afetar ações relacionadas à região, sem penalidade universal automática.
- Ataques direcionados aplicam penalidades de -10%, -20% ou -30%, conforme a região.
- Em 0 PV, o personagem fica Incapacitado e inicia testes de Estado Crítico ao fim dos próprios turnos.
- Estado Crítico usa Vitalidade, com penalidade cumulativa de -10% por rodada consecutiva.
- Três sucessos estabilizam; três falhas causam desmaio. A primeira contagem a chegar a três decide.
- Desmaio não causa morte automática.

## Pendências da ficha

1. Iniciativa, movimento e ações.
2. Perícias, concentração e manutenção.
3. Recuperação de Mana durante missão.
4. Primeiros socorros, cura e tratamento.
5. Dano recebido em 0 PV e condições de morte.
6. Duração/tratamento dos Ferimentos Graves.
7. Equipamentos, armaduras, focos, grimório, afinidade e espaços de magias.

## Impacto no produto digital

O modelo da ficha deverá suportar atributos, recursos derivados, ferimentos localizados, condições, contadores separados de sucessos/falhas e status de Incapacitado/Estabilizado/Desmaiado. O editor de personagem deve impedir distribuições inválidas e calcular os derivados em tempo real.
