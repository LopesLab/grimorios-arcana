import { GameRulesService } from './game-rules.service';
import { AttributeSet, Spell } from '../models/game.models';

describe('GameRulesService', () => {
  const service = new GameRulesService();

  it('converts attributes to bounded percentage chances', () => {
    expect(service.attributePercentage(1)).toBe(5);
    expect(service.attributePercentage(16)).toBe(80);
    expect(service.attributePercentage(20)).toBe(95);
  });

  it('derives Mana and hit points from Will and Vitality', () => {
    const attributes: AttributeSet = { power: 16, control: 14, dexterity: 12, will: 10, vitality: 8 };

    expect(service.deriveResources(attributes)).toEqual({
      manaMaximum: 30,
      hitPointsMaximum: 26,
      attributePercentages: { power: 80, control: 70, dexterity: 60, will: 50, vitality: 40 }
    });
  });

  it('accepts only the starting attribute distribution', () => {
    expect(service.isValidAttributeDistribution({ power: 16, control: 14, dexterity: 12, will: 10, vitality: 8 })).toBe(true);
    expect(service.isValidAttributeDistribution({ power: 16, control: 16, dexterity: 12, will: 10, vitality: 8 })).toBe(false);
  });

  it('calculates the proposed cost and enforces the minimum Mana cost', () => {
    const spell: Pick<Spell, 'primaryFunctionId' | 'secondaryFunctionId' | 'potency' | 'range' | 'area' | 'speed' | 'duration' | 'propertyIds' | 'limitationIds'> = {
      primaryFunctionId: 'attack',
      potency: 'standard',
      range: 'medium',
      area: 'single',
      speed: 'fast',
      duration: 'instant',
      propertyIds: ['piercing'],
      limitationIds: ['straight-line']
    };

    const breakdown = service.spellCost(spell);
    expect(breakdown.total).toBe(6);
    expect(service.spellCost({ ...spell, potency: 'minor', range: 'self-touch', speed: 'slow', propertyIds: [], limitationIds: ['straight-line', 'preparation'] }).total).toBe(1);
  });
});
