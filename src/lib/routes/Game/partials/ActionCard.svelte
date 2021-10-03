<script>
    import { fade } from 'svelte/transition';
    import { setActiveActionCard } from '../../../stores/game.store';
    import Tooltip from '../../../components/Tooltip.svelte';

    export let actionData;
    export let marketIndex = -1;

    const onSelectAction = () => {
        setActiveActionCard({
            ...actionData,
            marketIndex
        });
    }
</script>

<Tooltip
    title={actionData.name}
>
    <div 
        class="w-full h-full bg-blue-500 rounded-md p-5 flex flex-col justify-center cursor-pointer hover:shadow"
        on:click={onSelectAction}
        transition:fade
    >
        <div class="w-full text-white flex flex-col gap-2">
            <svelte:component this={actionData.icon} />
        </div>
    </div>
</Tooltip>