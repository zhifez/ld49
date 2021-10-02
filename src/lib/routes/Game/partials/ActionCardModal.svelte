<script>
    import { game, setActiveActionCard, system } from '../../../stores/game.store';
    import { commonDetails, effects } from '../../../stores/gameData';
    import Modal from '../../../components/Modal.svelte';
    import Tooltip from '../../../components/Tooltip.svelte';
    import Button from '../../../components/Button.svelte';

    let actionData;
    $: {
        actionData = $system.activeActionCard;
    }

    const onCloseModal = () => {
        setActiveActionCard(null);
    }

    const onBuyAction = () => {
        // TODO: Check can buy action

        // TODO: Buy action if it's possible
    }
</script>

<Modal
    noClass={true}
    on:close={onCloseModal}
>
    <div class="flex flex-col items-center gap-5">
        <div class="modal-wrapper bg-blue-500 rounded-md">
            <div class="h-full flex flex-col items-center justify-between gap-2 p-4 text-white">
                <div class="flex flex-col items-center gap-2">
                    <div class="h-20">
                        <svelte:component this={actionData.icon} />
                    </div>
                    <div class="flex flex-col text-center">
                        <p class="text-lg font-semibold">{actionData.name}</p>
                        <p class="text-xs">{actionData.hint}</p>
                    </div>
                    <div class="flex items-center gap-3">
                        {#each actionData.conditions as cond}
                        <Tooltip
                            title={`${cond.quantity}x ${commonDetails[cond.key].name}`}
                        >
                            <div class="h-6 flex items-center gap-1">
                                <svelte:component this={commonDetails[cond.key].icon} />
                                <p>x{cond.quantity}</p>
                            </div>
                        </Tooltip>
                        {/each}
                    </div>
                </div>

                {#if actionData.abilities}
                <div class="w-full flex flex-col items-center gap-1">
                    <p>Abilities</p>
                    <div class="w-full flex flex-col gap-2">
                        {#each actionData.abilities as ability}
                        <Tooltip
                            subtitle={effects[ability].hint}
                        >
                            <p class="font-semibold px-2 py-1 bg-white text-black text-xs rounded-md cursor-default">
                                {effects[ability].name}
                            </p>
                        </Tooltip>
                        {/each}
                    </div>
                </div>
                {/if}

                {#if actionData.battle}
                <div class="w-full flex flex-col items-center gap-1">
                    <p>Stats</p>
                    <div class="w-full grid grid-cols-2 gap-3">
                        {#each ['attack', 'defense'] as stat}
                        <div class="col-span-1 flex items-center justify-between gap-2 bg-white text-black px-2 py-1 rounded-md">
                            <div class="h-5">
                                <svelte:component this={commonDetails[stat].icon} />
                            </div>
                            <p>{actionData.battle[stat] > 0 ? actionData.battle[stat] : '-'}</p>
                        </div>
                        {/each}
                    </div>
                </div>
                {/if}
            </div>
        </div>

        {#if $game.phase === 2}
        <Button 
            color="white"
            textColor="black"
            label="Buy Action Card"
            disabled={actionData.sold}
        />
        {:else}
        <p class="px-3 py-2 bg-white rounded-md text-xs">
            Note: You can only buy this in Buy Phase.
        </p>
        {/if}
    </div>
</Modal>

<style>
    .modal-wrapper {
        width: 250px;
        height: 400px;
    }
</style>