<script>
    import { setActiveActionCard } from '../../../stores/game.store';
    import Tooltip from '../../../components/Tooltip.svelte';

    export let actionData;

    const onSelectAction = () => {
        setActiveActionCard(actionData);
    }
</script>

<Tooltip
    title={actionData.name}
>
    <div 
        class="w-full h-full bg-blue-500 rounded-md p-5 flex flex-col justify-center cursor-pointer hover:shadow"
        on:click={onSelectAction}
    >
        <div class="w-full text-white flex flex-col gap-2">
            <svelte:component this={actionData.icon} />
        </div>
    </div>
</Tooltip>