<script>
    import PlayersSidebar from './partials/PlayersSidebar.svelte';
    import RealmTiles from './partials/RealmTiles.svelte';

</script>

<div class="w-screen h-screen grid grid-cols-4 bg-gray-100">
    <div class="col-span-1">
        <PlayersSidebar />
    </div>
    <div class="col-span-3 flex flex-col justify-center items-center">
        <div class="grid grid-cols-2 gap-8">
            {#each Array(2) as _, i}
            <div class="col-span-1">
                <RealmTiles />
            </div>
            {/each}
        </div> 
    </div>
</div>