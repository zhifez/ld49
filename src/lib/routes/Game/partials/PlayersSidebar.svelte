<script>
    import { game, players } from '../../../stores/game.store';
    import PlayerCard from './PlayerCard.svelte';

</script>
<div class="p-3 h-full flex flex-col justify-center gap-3">
    {#each $players as pData, p}
    <PlayerCard 
        playerData={pData} 
        active={p === $game.turn}
    />
    {/each}
</div>