
import GiEyeShield from 'svelte-icons/gi/GiEyeShield.svelte';
import GiGiantSquid from 'svelte-icons/gi/GiGiantSquid.svelte';
import GiAbstract013 from 'svelte-icons/gi/GiAbstract013.svelte';
import GiAbstract039 from 'svelte-icons/gi/GiAbstract039.svelte';
import GiCrossedSwords from 'svelte-icons/gi/GiCrossedSwords.svelte';
import GiCheckedShield from 'svelte-icons/gi/GiCheckedShield.svelte';

export const actions = [
    {
        type: 'defense',
        name: 'Additional Defense',
        icon: GiEyeShield,
        hint: 'Provide additional defense during battle.',
        conditions: [
            { key: 'token-realm', quantity: 2 },
        ],
        placementType: 'battle',
        battle: {
            attack: 0,
            defense: 2,
        },
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
        abilities: [
            'tile-block',
            'tile-damage'
        ],
        battle: {
            attack: 5,
            defense: 5,
        },
    }
];

export const effects = {
    'tile-block': {
        name: 'Block Tile Placement',
        hint: `All nearby tiles (vertically or horizontally) cannot have new tile placed around them while this creature exists.`,
    },
    'tile-damage': {
        name: 'Damage Tile',
        hint: `Add a damage token to any tile (vertically or horizontally) every round. Once a tile has accumulated 2 damage tokens, remove it.`
    }
};

export const commonDetails = {
    'token-realm': {
        name: 'Realm Token',
        icon: GiAbstract039,
    },
    'token-multiverse': {
        name: 'Multiverse Token',
        icon: GiAbstract013,
    },
    'attack': {
        name: 'Attack',
        icon: GiCrossedSwords,
    },
    'defense': {
        name: 'Defense',
        icon: GiCheckedShield,
    },
};