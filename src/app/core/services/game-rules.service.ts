import { Injectable } from '@angular/core';
import {
  AttributeName,
  AttributeSet,
  DerivedResources,
  Spell,
  SpellCostBreakdown
} from '../models/game.models';
import {
  MAGIC_FUNCTIONS,
  SPELL_LIMITATIONS,
  TECHNIQUE_PROPERTIES
} from '../data/catalogs';

const ATTRIBUTE_NAMES: AttributeName[] = ['power', 'control', 'dexterity', 'will', 'vitality'];
const STARTING_ATTRIBUTE_VALUES = [16, 14, 12, 10, 8];

@Injectable({ providedIn: 'root' })
export class GameRulesService {
  readonly startingAttributeValues = STARTING_ATTRIBUTE_VALUES;

  attributePercentage(attribute: number): number {
    return this.clampChance(attribute * 5);
  }

  deriveResources(attributes: AttributeSet): DerivedResources {
    return {
      manaMaximum: 10 + attributes.will * 2,
      hitPointsMaximum: 10 + attributes.vitality * 2,
      attributePercentages: this.mapAttributes(attributes, (value) => this.attributePercentage(value))
    };
  }

  isValidAttributeDistribution(attributes: AttributeSet): boolean {
    const values = ATTRIBUTE_NAMES.map((name) => attributes[name]);
    return values.length === 5
      && values.every((value) => STARTING_ATTRIBUTE_VALUES.includes(value))
      && new Set(values).size === STARTING_ATTRIBUTE_VALUES.length;
  }

  spellCost(spell: Pick<Spell, 'primaryFunctionId' | 'secondaryFunctionId' | 'potency' | 'range' | 'area' | 'speed' | 'duration' | 'propertyIds' | 'limitationIds'>): SpellCostBreakdown {
    const functionCost = MAGIC_FUNCTIONS.find((entry) => entry.id === spell.primaryFunctionId)?.cost ?? 0;
    const secondaryFunction = spell.secondaryFunctionId ? 2 : 0;
    const potency = { minor: 1, standard: 2, major: 3 }[spell.potency];
    const range = { 'self-touch': 0, short: 1, medium: 2, long: 3 }[spell.range];
    const area = { single: 0, small: 1, medium: 2, large: 3 }[spell.area];
    const speed = { slow: -1, normal: 0, fast: 1, instant: 3 }[spell.speed];
    const duration = this.durationCost(spell.duration);
    const properties = spell.propertyIds.reduce((total, id) => total + (TECHNIQUE_PROPERTIES.find((entry) => entry.id === id)?.cost ?? 0), 0);
    const limitations = spell.limitationIds.slice(0, 2).reduce((total, id) => total + (SPELL_LIMITATIONS.find((entry) => entry.id === id)?.reduction ?? 0), 0);
    const total = Math.max(1, 1 + functionCost + potency + range + area + speed + duration + properties + secondaryFunction - limitations);

    return { base: 1, function: functionCost, potency, range, area, speed, duration, properties, secondaryFunction, limitations: -limitations, total };
  }

  private durationCost(duration: string): number {
    return {
      instant: 0,
      'next-turn': 1,
      concentration: 1,
      'three-rounds': 2,
      scene: 4
    }[duration as 'instant' | 'next-turn' | 'concentration' | 'three-rounds' | 'scene'] ?? 0;
  }

  private clampChance(value: number): number {
    return Math.min(95, Math.max(5, value));
  }

  private mapAttributes(attributes: AttributeSet, mapper: (value: number) => number): AttributeSet {
    return {
      power: mapper(attributes.power),
      control: mapper(attributes.control),
      dexterity: mapper(attributes.dexterity),
      will: mapper(attributes.will),
      vitality: mapper(attributes.vitality)
    };
  }
}
