export type AttributeName = 'power' | 'control' | 'dexterity' | 'will' | 'vitality';

export type GrimoireType = 'three-leaf';
export type SpellPotency = 'minor' | 'standard' | 'major';
export type SpellRange = 'self-touch' | 'short' | 'medium' | 'long';
export type SpellArea = 'single' | 'small' | 'medium' | 'large';
export type SpellSpeed = 'slow' | 'normal' | 'fast' | 'instant';
export type SpellStatus = 'approved' | 'experimental' | 'needs-review';

export interface AttributeSet {
  power: number;
  control: number;
  dexterity: number;
  will: number;
  vitality: number;
}

export interface CatalogEntry {
  id: string;
  name: string;
  description: string;
}

export interface Affinity extends CatalogEntry {
  fantasy: string;
}

export interface ManaBehavior extends CatalogEntry {
  limitation: string;
}

export interface MagicFunction extends CatalogEntry {
  cost: number;
}

export interface TechniqueProperty extends CatalogEntry {
  cost: number;
  effect: string;
}

export interface SpellLimitation extends CatalogEntry {
  reduction: number;
  mechanicalImpact: string;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  primaryFunctionId: string;
  secondaryFunctionId?: string;
  potency: SpellPotency;
  range: SpellRange;
  area: SpellArea;
  speed: SpellSpeed;
  duration: string;
  propertyIds: string[];
  limitationIds: string[];
  baseManaCost: number;
  status: SpellStatus;
}

export interface Character {
  id: string;
  name: string;
  concept?: string;
  attributes: AttributeSet;
  affinityId: string;
  manaBehaviorId: string;
  grimoireType: GrimoireType;
  spells: Spell[];
  createdAt: string;
  updatedAt: string;
}

export interface DerivedResources {
  manaMaximum: number;
  hitPointsMaximum: number;
  attributePercentages: AttributeSet;
}

export interface SpellCostBreakdown {
  base: number;
  function: number;
  potency: number;
  range: number;
  area: number;
  speed: number;
  duration: number;
  properties: number;
  secondaryFunction: number;
  limitations: number;
  total: number;
}
