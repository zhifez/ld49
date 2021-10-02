<script>
    import RealmTile from './RealmTile.svelte';

    export let playerData;
    export let active = false;
</script>

<div>
    <p class="mb-1 text-sm">{playerData.name}</p>
    <div 
        class={`p-3 rounded-md shadow
        ${active ? 'bg-blue-400' : 'bg-gray-300'}
        `}
    >
        <div class="grid grid-cols-5 grid-rows-5 gap-1">
            {#each Array(5) as _, y}
            {#each Array(5) as _, x}
            <RealmTile 
                tileData={playerData.tiles[`${x}-${y}`]}
            />
            {/each}
            {/each}
        </div>
    </div>
</div>