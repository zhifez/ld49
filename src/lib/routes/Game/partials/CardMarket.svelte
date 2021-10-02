<script>
    import { actions } from '../../../stores/gameData';
    import ActionCard from './ActionCard.svelte';
</script>

<div class="h-full p-3 flex flex-col justify-center">
    <div class="p-3 bg-blue-200 rounded-md flex flex-col gap-2">
        <h1 class="text-center font-semibold text-lg">Action Cards</h1>
        <div class="grid grid-cols-2 gap-3">
            {#each Array(6) as _, i}
            <div class="col-span-1 h-28">
                {#if i < actions.length}
                <ActionCard actionData={actions[i % 2]} />
                {/if}
            </div>
            {/each}
        </div>
    </div>
</div>