<script>
    import { actions } from '../../../stores/gameData';
    import ActionCard from './ActionCard.svelte';
</script>

<div class="h-full flex flex-col justify-center">
    <div class="p-3 mr-3 bg-blue-200 flex flex-col gap-2">
        <h1 class="text-center font-semibold text-lg">Action Cards</h1>
        <div class="grid grid-cols-3 gap-3">
            {#each actions as action}
            <div class="col-span-1">
                <ActionCard actionData={action} />
            </div>
            {/each}
        </div>
    </div>
</div>