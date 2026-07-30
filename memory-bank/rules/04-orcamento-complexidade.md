# Orçamento de Complexidade — proposta de balanceamento

## Status

Proposta recomendada, ainda dependente de validação em playtest. Não substituirá as decisões normativas até que os custos e efeitos sejam testados.

## Modelo

Cada magia é montada por três camadas:

1. **Efeito:** função e potência.
2. **Entrega:** alcance, área, velocidade e duração.
3. **Modificadores:** propriedades, função secundária e limitações.

Fórmula proposta:

`Custo-base = 1 + Função + Potência + Alcance + Área + Velocidade + Duração + Propriedades + Função secundária - Limitações`

O custo mínimo é 1 Mana. A recomendação é que 1 ponto de complexidade equivalha diretamente a 1 Mana.

## Regras propostas relevantes

- Potência tem três graus: Menor (+1), Padrão (+2) e Maior (+3).
- Função secundária custa +2 Mana e opera um grau abaixo da principal.
- Alcance e área variam de +0 a +3.
- Velocidade Lenta reduz 1, Normal não modifica, Rápida custa +1 e Instantânea +3.
- Duração e concentração possuem custos próprios.
- Propriedades devem produzir efeitos mecânicos objetivos e ter custo explícito.
- Limitações reais reduzem 1 Mana, com máximo recomendado de duas reduções por magia.
- Recarga não é padrão; deve ser voluntária ou reservada para técnicas muito fortes, potencialização ou falha crítica.
- Patamares: Normal = custo-base, Fortalecida = +2 Mana, Máxima = +5 Mana.

## Exemplo de referência

Jato Comprimido, com Ataque Padrão, alcance médio, velocidade rápida, propriedade Perfurante e limitação Linha reta, chega a 6 Mana no modelo proposto.

## Pendências de validação

- Confirmar equivalência direta entre complexidade e Mana.
- Criar tabelas numéricas específicas para potência por função.
- Fechar custos e efeitos de todas as propriedades.
- Definir como patamares melhoram funções não ofensivas.
- Testar o piso de custo e o limite de duas limitações.
