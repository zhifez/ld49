
import GiEyeShield from 'svelte-icons/gi/GiEyeShield.svelte';
import GiGiantSquid from 'svelte-icons/gi/GiGiantSquid.svelte';
import GiAbstract013 from 'svelte-icons/gi/GiAbstract013.svelte';
import GiAbstract039 from 'svelte-icons/gi/GiAbstract039.svelte';

export const actions = [
    {
        type: 'defense',
        name: 'Additional Defense',
        icon: GiEyeShield,
    },
    {
        type: 'monster',
        name: 'Wrath of Squiddolus',
        icon: GiGiantSquid,
        hint: 'Unleash Squiddolus to the destruction of another realm.',
        conditions: [
            { key: 'token-realm', quantity: 3 },
            { key: 'token-multiverse', quantity: 3 },
        ],
        placementType: 'any',
        effects: [
            'tile-block',
            'tile-damage'
        ],
        attack: 5,
        defense: 5
    }
];

export const effects = {
    'tile-block': {
        name: 'Block Tile Placement',
        hint: `All nearby tiles (below, vertically or horizontally) cannot have new tile placed around them while this creature exists.`,
    },
    'tile-damage': {
        name: 'Damage Tile',
        hint: `Add a damage token to any nearby tile (vertically or horizontally) every round. Once a tile has accumulated 2 damage tokens, remove it.`
    }
};

export const commonIcons = {
    'token-realm': GiAbstract039,
    'token-multiverse': GiAbstract013,
};