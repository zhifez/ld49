<script>
    import { game } from '../../../stores/game.store';
    import ActionCard from './ActionCard.svelte';
</script>

<div class="h-full p-3 flex flex-col justify-center">
    <div class="p-3 bg-blue-200 rounded-md flex flex-col gap-2">
        <h1 class="text-center font-semibold text-lg">Action Cards</h1>
        <div class="grid grid-cols-2 gap-3">
            {#each $game.marketActions as action, a}
            <div class="col-span-1 h-32">
                {#if action}
                <ActionCard 
                    actionData={action} 
                    marketIndex={a}
                />
                {:else}
                <div class="w-full h-32 border-2 border-blue-400 border-dotted text-blue-400 rounded-md flex flex-col justify-center items-center">
                    <p class="text-2xl font-semibold">SOLD</p>
                </div>
                {/if}
            </div>
            {/each}
        </div>
    </div>
</div>