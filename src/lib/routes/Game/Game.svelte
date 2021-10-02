<script>
    import { game, players, system } from '../../stores/game.store';
    import CardMarket from './partials/CardMarket.svelte';
    import DiceRollModal from './partials/DiceRollModal.svelte';
    import ActionCardModal from './partials/ActionCardModal.svelte';
    import PlayersSidebar from './partials/PlayersSidebar.svelte';
    import RealmTiles from './partials/RealmTiles.svelte';
</script>

{#if $system.showDiceRoll}
<DiceRollModal />
{/if}

{#if $system.showActionCard}
<ActionCardModal />
{/if}

<div class="w-screen h-screen grid grid-cols-4 bg-gray-100">
    <div class="col-span-1">
        <PlayersSidebar />
    </div>
    <div class="col-span-2 flex flex-col justify-center items-center">
        <div class="grid grid-cols-2 gap-4">
            {#each $players as pData, p}
            <div class="col-span-1">
                <RealmTiles 
                    playerData={pData} 
                    active={p === $game.turn}
                />
            </div>
            {/each}
        </div> 
    </div>
    <div class="col-span-1">
        <CardMarket />
    </div>
</div>