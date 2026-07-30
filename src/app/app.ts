import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRulesService } from './core/services/game-rules.service';
import { AFFINITIES, MAGIC_FUNCTIONS, MANA_BEHAVIORS, SPELL_LIMITATIONS, TECHNIQUE_PROPERTIES } from './core/data/catalogs';
import { Affinity, AttributeName, AttributeSet, Character, ManaBehavior, Spell } from './core/models/game.models';

type AttributeCard = { key: AttributeName; label: string; description: string };

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly rules = inject(GameRulesService);
  readonly affinities = AFFINITIES;
  readonly manaBehaviors = MANA_BEHAVIORS;
  readonly attributeCards: AttributeCard[] = [
    { key: 'power', label: 'Poder', description: 'Dano mágico e força bruta.' },
    { key: 'control', label: 'Controle', description: 'Acerto mágico e precisão.' },
    { key: 'dexterity', label: 'Destreza', description: 'Reações e agilidade.' },
    { key: 'will', label: 'Vontade', description: 'Mana e resistência mental.' },
    { key: 'vitality', label: 'Vitalidade', description: 'Pontos de vida e resistência.' }
  ];

  readonly availableValues = this.rules.startingAttributeValues;
  readonly name = signal('');
  readonly concept = signal('');
  readonly stage = signal<1 | 2 | 3 | 4 | 5>(1);
  readonly affinityId = signal('water');
  readonly manaBehaviorId = signal('compression');
  readonly magicFunctions = MAGIC_FUNCTIONS;
  readonly techniqueProperties = TECHNIQUE_PROPERTIES;
  readonly spellLimitations = SPELL_LIMITATIONS;
  readonly selectedSpellIndex = signal(0);
  readonly spells = signal<Spell[]>([this.emptySpell(), this.emptySpell(), this.emptySpell()]);
  readonly savedCharacter = signal<Character | null>(null);
  readonly attributes = signal<AttributeSet>({ power: 16, control: 14, dexterity: 12, will: 10, vitality: 8 });
  readonly resources = computed(() => this.rules.deriveResources(this.attributes()));
  readonly attributesAreValid = computed(() => this.rules.isValidAttributeDistribution(this.attributes()));
  readonly isValid = computed(() => this.name().trim().length > 0 && this.rules.isValidAttributeDistribution(this.attributes()));
  readonly selectedAffinity = computed(() => this.affinities.find((entry) => entry.id === this.affinityId()) ?? this.affinities[0]);
  readonly selectedManaBehavior = computed(() => this.manaBehaviors.find((entry) => entry.id === this.manaBehaviorId()) ?? this.manaBehaviors[0]);
  readonly selectedSpell = computed(() => this.spells()[this.selectedSpellIndex()]);
  readonly selectedSpellCost = computed(() => this.rules.spellCost(this.selectedSpell()));
  readonly allSpellsComplete = computed(() => this.spells().every((spell) => this.spellIsComplete(spell)));
  readonly currentSpellComplete = computed(() => this.spellIsComplete(this.selectedSpell()));

  constructor() {
    const stored = localStorage.getItem('grimorios-arcana:character');
    if (!stored) return;
    try {
      const character = JSON.parse(stored) as Character;
      this.name.set(character.name);
      this.concept.set(character.concept ?? '');
      this.attributes.set(character.attributes);
      this.affinityId.set(character.affinityId);
      this.manaBehaviorId.set(character.manaBehaviorId);
      this.spells.set(character.spells);
      this.savedCharacter.set(character);
      this.stage.set(5);
    } catch {
      localStorage.removeItem('grimorios-arcana:character');
    }
  }

  attributeValue(key: AttributeName): number {
    return this.attributes()[key];
  }

  attributePercentage(key: AttributeName): number {
    return this.resources().attributePercentages[key];
  }

  setAttribute(key: AttributeName, event: Event): void {
    const value = Number((event.target as HTMLSelectElement).value);
    this.attributes.update((current) => ({ ...current, [key]: value }));
  }

  reset(): void {
    this.name.set('');
    this.concept.set('');
    this.attributes.set({ power: 16, control: 14, dexterity: 12, will: 10, vitality: 8 });
    this.stage.set(1);
    this.affinityId.set('water');
    this.manaBehaviorId.set('compression');
    this.selectedSpellIndex.set(0);
    this.spells.set([this.emptySpell(), this.emptySpell(), this.emptySpell()]);
    this.savedCharacter.set(null);
  }

  continueFromIdentity(): void {
    if (this.isValid()) this.stage.set(2);
  }

  openGrimoire(): void {
    this.stage.set(3);
  }

  backToIdentity(): void {
    this.stage.set(1);
  }

  backToMagicIdentity(): void {
    this.stage.set(2);
  }

  openSpellForge(): void {
    this.stage.set(4);
  }

  backToGrimoire(): void {
    this.stage.set(3);
  }

  reviewGrimoire(): void {
    if (this.allSpellsComplete()) this.stage.set(5);
  }

  saveCurrentSpell(): void {
    const cost = this.selectedSpellCost().total;
    this.spells.update((spells) => spells.map((spell, index) => index === this.selectedSpellIndex() ? { ...spell, baseManaCost: cost } : spell));
  }

  saveCharacter(): void {
    const now = new Date().toISOString();
    const current = this.savedCharacter();
    const character: Character = {
      id: current?.id ?? crypto.randomUUID(),
      name: this.name().trim(),
      concept: this.concept().trim() || undefined,
      attributes: this.attributes(),
      affinityId: this.affinityId(),
      manaBehaviorId: this.manaBehaviorId(),
      grimoireType: 'three-leaf',
      spells: this.spells().map((spell) => ({ ...spell, baseManaCost: this.rules.spellCost(spell).total })),
      createdAt: current?.createdAt ?? now,
      updatedAt: now
    };
    localStorage.setItem('grimorios-arcana:character', JSON.stringify(character));
    this.savedCharacter.set(character);
  }

  exportCharacter(): void {
    const character = this.savedCharacter();
    if (!character) return;
    const blob = new Blob([JSON.stringify(character, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${character.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'grimorio'}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  backToForge(): void {
    this.stage.set(4);
  }

  selectAffinity(affinity: Affinity): void {
    this.affinityId.set(affinity.id);
  }

  selectManaBehavior(behavior: ManaBehavior): void {
    this.manaBehaviorId.set(behavior.id);
  }

  selectSpell(index: number): void {
    this.selectedSpellIndex.set(index);
  }

  setSpellField(field: 'name' | 'description' | 'primaryFunctionId' | 'secondaryFunctionId' | 'potency' | 'range' | 'area' | 'speed' | 'duration', event: Event): void {
    const value = (event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
    this.spells.update((spells) => spells.map((spell, index) => index === this.selectedSpellIndex() ? { ...spell, [field]: value, ...(field === 'secondaryFunctionId' && value === 'none' ? { secondaryFunctionId: undefined } : {}) } : spell));
  }

  toggleSpellOption(field: 'propertyIds' | 'limitationIds', id: string): void {
    this.spells.update((spells) => spells.map((spell, index) => {
      if (index !== this.selectedSpellIndex()) return spell;
      const values = spell[field];
      return { ...spell, [field]: values.includes(id) ? values.filter((value) => value !== id) : [...values, id] };
    }));
  }

  spellHasOption(field: 'propertyIds' | 'limitationIds', id: string): boolean {
    return this.selectedSpell()[field].includes(id);
  }

  spellIsComplete(spell: Spell): boolean {
    return spell.name.trim().length > 0 && spell.description.trim().length > 0;
  }

  private emptySpell(): Spell {
    return {
      id: crypto.randomUUID(), name: '', description: '', primaryFunctionId: 'attack', potency: 'standard', range: 'medium', area: 'single', speed: 'normal', duration: 'instant', propertyIds: [], limitationIds: [], baseManaCost: 0, status: 'experimental'
    };
  }
}
