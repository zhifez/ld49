<script>
    import PlayerCard from './PlayerCard.svelte';

</script>
<div class="h-full p-3 flex flex-col justify-center gap-3">
    {#each Array(2) as _, i}
    <PlayerCard />
    {/each}
</div>