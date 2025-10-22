import type { Items, StarterItems } from '../types/items.ts';

export const itemEvolutions: [StarterItems, StarterItems, Items][] = [
  ['warHorn', 'babyRattle', 'cornucopia'],
  ['wretchedOnion', 'breastplate', 'odiferousShell'],
  ['reachersSpear', 'deadeyesAmulet', 'graciousImpaler'],
  ['etherealCloak', 'ghostlyCorset', 'phantomRegalia'],
  ['everflowingGoblet', 'vampiricSword', 'soulReaver'],
  ['crownOfThorns', 'spikedCollar', 'tormentorsMask'],
  ['fleetFeet', 'radiantFeather', 'wingsOfTheAnointed'],
] as const;

export const advacnedItemEvolutions = [
  [
    'diamondHiltedDagger' satisfies StarterItems,
    'emeraldHiltedDagger' satisfies StarterItems,
    'rubyHiltedDagger' satisfies StarterItems,
    'sapphireHiltedDagger' satisfies StarterItems,
    'deadeyesCross',
  ],
] as const satisfies Items[][];

export const allItemEvolutions = [...itemEvolutions, ...advacnedItemEvolutions];
