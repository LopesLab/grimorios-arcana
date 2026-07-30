import {
  Affinity,
  MagicFunction,
  ManaBehavior,
  SpellLimitation,
  TechniqueProperty
} from '../models/game.models';

export const AFFINITIES: Affinity[] = [
  { id: 'water', name: 'Água', description: 'Fluxo, pressão, defesa e adaptação.', fantasy: 'Manipulação fluida e versátil.' },
  { id: 'fire', name: 'Fogo', description: 'Calor, combustão e intensidade.', fantasy: 'Poder ofensivo e transformação térmica.' },
  { id: 'wind', name: 'Vento', description: 'Deslocamento, corte e dispersão.', fantasy: 'Velocidade e controle do espaço.' },
  { id: 'earth', name: 'Terra', description: 'Massa, proteção e impacto.', fantasy: 'Resistência e domínio do terreno.' },
  { id: 'electricity', name: 'Eletricidade', description: 'Condução, velocidade e descarga.', fantasy: 'Descargas rápidas e interações condutoras.' }
];

export const MANA_BEHAVIORS: ManaBehavior[] = [
  { id: 'compression', name: 'Compressão', description: 'Densificar, concentrar e disparar.', limitation: 'Não cria efeitos sem relação com pressão ou densidade.' },
  { id: 'rotation', name: 'Rotação', description: 'Girar, desviar, puxar e circular.', limitation: 'Precisa de movimento circular ou trajetória rotacional.' },
  { id: 'expansion', name: 'Expansão', description: 'Ampliar volume, área e alcance físico.', limitation: 'Não pode reduzir ou concentrar a manifestação.' },
  { id: 'adhesion', name: 'Aderência', description: 'Fixar, prender, revestir e criar armadilhas.', limitation: 'A técnica precisa estabelecer contato ou superfície de fixação.' },
  { id: 'absorption', name: 'Absorção', description: 'Consumir, armazenar e redirecionar energia compatível.', limitation: 'Só absorve fontes compatíveis e precisa de capacidade de armazenamento.' }
];

export const MAGIC_FUNCTIONS: MagicFunction[] = [
  { id: 'attack', name: 'Ataque', description: 'Causa dano ou ameaça diretamente um alvo.', cost: 0 },
  { id: 'defense', name: 'Defesa', description: 'Reduz, anula ou intercepta uma ameaça.', cost: 0 },
  { id: 'movement', name: 'Movimento', description: 'Altera a posição do usuário ou de um alvo.', cost: 0 },
  { id: 'support', name: 'Suporte', description: 'Concede um benefício relevante a um aliado ou ao usuário.', cost: 0 },
  { id: 'control', name: 'Controle', description: 'Impõe uma restrição ou modifica a ação de um alvo.', cost: 1 },
  { id: 'terrain', name: 'Criação de terreno', description: 'Altera uma área do cenário.', cost: 1 },
  { id: 'healing', name: 'Cura', description: 'Recupera recursos ou remove consequências.', cost: 2 },
  { id: 'summoning', name: 'Invocação', description: 'Cria uma entidade ou agente persistente.', cost: 2 }
];

export const TECHNIQUE_PROPERTIES: TechniqueProperty[] = [
  { id: 'impactful', name: 'Impactante', description: 'Força física adicional.', cost: 1, effect: 'Sucesso forte pode empurrar ou derrubar.' },
  { id: 'piercing', name: 'Perfurante', description: 'Supera defesas inadequadas.', cost: 1, effect: 'A defesa inadequada conta um grau abaixo.' },
  { id: 'guided', name: 'Guiada', description: 'Corrige parcialmente a trajetória.', cost: 1, effect: 'Pode alterar parcialmente sua trajetória.' },
  { id: 'defensive', name: 'Defensiva', description: 'Foi criada para proteger.', cost: 1, effect: 'Pode ser usada como método defensivo declarado.' },
  { id: 'concealing', name: 'Ocultadora', description: 'Prejudica percepção ou visão.', cost: 1, effect: 'Prejudica visão ou percepção na área afetada.' },
  { id: 'reactive', name: 'Reativa', description: 'Pode responder a uma ameaça.', cost: 2, effect: 'Pode ser usada como reação apropriada.' }
];

export const SPELL_LIMITATIONS: SpellLimitation[] = [
  { id: 'straight-line', name: 'Linha reta', description: 'A técnica segue uma direção fixa.', reduction: 1, mechanicalImpact: 'Não pode mudar sua direção durante a execução.' },
  { id: 'preparation', name: 'Preparação obrigatória', description: 'Exige uma ação de preparação.', reduction: 1, mechanicalImpact: 'O efeito não acontece imediatamente.' },
  { id: 'exposed', name: 'Usuário Exposto', description: 'O usuário fica vulnerável durante a conjuração.', reduction: 1, mechanicalImpact: 'O usuário fica Exposto enquanto prepara a técnica.' },
  { id: 'physical-contact', name: 'Contato físico', description: 'Precisa tocar o alvo ou a origem.', reduction: 1, mechanicalImpact: 'O alcance efetivo fica limitado ao contato.' },
  { id: 'cooldown', name: 'Recarga de duas rodadas', description: 'A técnica não pode ser repetida imediatamente.', reduction: 1, mechanicalImpact: 'A mesma técnica fica indisponível por duas rodadas.' },
  { id: 'post-use-penalty', name: 'Penalidade após o uso', description: 'O uso deixa uma consequência previsível.', reduction: 1, mechanicalImpact: 'O usuário sofre uma penalidade definida pela técnica.' }
];
