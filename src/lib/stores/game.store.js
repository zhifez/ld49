import { get, writable } from "svelte/store";

// PLAYER
export const playerPhases = {
    'roll': {
        label: 'Roll dice for tokens.',
        btnLabel: 'Roll',
    },
    'resolve': {
        label: 'Resolve Realm conflicts.',
        btnLabel: 'Pass',
    },
    'buy': {
        label: 'Buy action cards.',
        btnLabel: 'Pass',
    },
    'action': {
        label: 'Perform actions.',
        btnLabel: 'Pass',
    },
    'tile': {
        label: 'Add a new Realm tile.',
        btnLabel: 'End Turn',
    },
};

const createPlayer = (name) => {
    return {
        name,
        tiles: {
            '2-2': {
                value: 'start'
            }
        },
        realmToken: 0,
        multiverseToken: 0,
        hasTakenAction: false,
        conflicts: {},
    };
}

export const players = writable([]);

// GAME
const initGameState = {
    round: 0, turn: -1, 
    phase: 0, // 4 phases: Resolve Multiverse event, Buy Action Cards, Take Actions, Place Realm tile. 
};
export const game = writable(initGameState);

export const initGame = (playerCount) => {
    let nextPlayers = [];
    for (let a=0; a<playerCount; ++a) {
        nextPlayers.push(createPlayer(`Realm ${a + 1}`));
    }
    players.set(nextPlayers);

    game.update(_ => {
        let nextState = {...initGameState};
        nextState.turn = 0;
        return nextState;
    });
}
initGame(2);

export const nextPhase = () => {
    const playersState = get(players);

    game.update(state => {
        let nextState = {...state};
        ++nextState.phase;
        if (nextState.phase === 1) {
            if (!playerHasConflicts(playersState[nextState.turn])) {
                nextState.phase = 2;
            }
        }
        if (nextState.phase >= Object.keys(playerPhases).length) {
            ++nextState.turn;
            nextState.phase = 0;
            if (nextState.turn >= playersState.length) {
                ++nextState.round;
                nextState.turn = 0;
            }
        }
        // TODO: Update player/game data based on phase
        switch (nextState.phase) {
        case 1: // Resolve conflict 
            break;

        case 2: // Buy action cards
            break;

        case 3: // Perform actions
            break;

        case 4: // Place a Realm tile
            break;
        }
        return nextState;
    });
}

const playerHasConflicts = (player) => {
    return Object.keys(player.conflicts).length > 0;
}

export const setActivePlayerState = (key, value) => {
    const gameState = get(game);
    
    players.update(state => {
        let nextState = [...state];
        nextState[gameState.turn][key] = value;
        return nextState;
    });
}

// SYSTEM
export const system = writable({
    showDiceRoll: false,
    diceRollValue: 0,
    showActionCard: false,
    activeActionCard: null,
});

export const setShowDiceRoll = (show) => {
    system.update(state => {
        let nextState = {...state};
        nextState.showDiceRoll = show;
        return nextState;
    });
}

export const setActiveActionCard = (action) => {
    system.update(state => {
        let nextState = {...state};
        if (action) {
            nextState.showActionCard = true;
            nextState.activeActionCard = action;
        }
        else {
            nextState.showActionCard = false;
        }
        return nextState;
    });
}

// OTHERS
export const generateDiceRolls = (count) => {
    let diceValues = Array(count).fill('_').reduce((results, item, index) => {
        results.push(index);
        return results;
    }, []);
    let diceRolls = [];
    while (diceValues.length > 0) {
        let index = Math.floor(Math.random() * diceValues.length);
        diceRolls.push(diceValues[index]);
        diceValues.splice(index, 1);
    }
    return diceRolls;
}