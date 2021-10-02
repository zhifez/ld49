<script>
    import { game, nextPhase, playerPhases, setShowDiceRoll } from '../../../stores/game.store';
    import Button from '../../../components/Button.svelte';
    import Tooltip from '../../../components/Tooltip.svelte';
    import GiAbstract013 from 'svelte-icons/gi/GiAbstract013.svelte';
    import GiAbstract039 from 'svelte-icons/gi/GiAbstract039.svelte';

    export let playerData;
    export let active = false;

    let phaseKey;
    $: {
        phaseKey = Object.keys(playerPhases)[$game.phase];
    }

    const onBtnNext = () => {
        if (phaseKey === 'roll') {
            setShowDiceRoll(true);
            return;
        }
        
        nextPhase();
    }
</script>

<div 
    class={`w-full h-1/4 px-3 py-2 border-4 rounded-md bg-white relative
    flex flex-col justify-between
    ${active ? 'border-blue-400' : 'border-black'}
    `}
>
    <div class="flex justify-between items-center">
        <p>{playerData.name}{active ? `'s Turn` : ''}</p>

        <div class="flex items-center gap-3">
            <Tooltip
                title="Realm Token"
            >
                <div class="flex items-center gap-1 h-6">
                    <GiAbstract039 />
                    <p>{playerData.realmToken}</p>
                </div>
            </Tooltip>
            <Tooltip
                title="Multiverse Token"
            >
                <div class="flex items-center gap-1 h-6">
                    <GiAbstract013 />
                    <p>{playerData.multiverseToken}</p>
                </div>
            </Tooltip>
        </div>
    </div>
    {#if active}
    <div class="flex justify-between items-center">
        <p class="text-sm">{playerPhases[phaseKey].label}</p>

        <Button 
            label={playerPhases[phaseKey].btnLabel}
            textClass="text-sm"
            paddingClass="px-2 py-1"
            on:click={onBtnNext}
        />
    </div>
    {/if}
</div>