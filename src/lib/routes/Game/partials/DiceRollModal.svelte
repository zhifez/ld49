<script>
    import { generateDiceRolls, nextPhase, setActivePlayerState, setShowDiceRoll } from '../../../stores/game.store';
    import { commonDetails } from '../../../stores/gameData';
    import Modal from '../../../components/Modal.svelte';
    import { onMount } from 'svelte';
    import GiDiceSixFacesOne from 'svelte-icons/gi/GiDiceSixFacesOne.svelte';
    import GiDiceSixFacesTwo from 'svelte-icons/gi/GiDiceSixFacesTwo.svelte';
    import GiDiceSixFacesThree from 'svelte-icons/gi/GiDiceSixFacesThree.svelte';
    import GiDiceSixFacesFour from 'svelte-icons/gi/GiDiceSixFacesFour.svelte';
    import GiDiceSixFacesFive from 'svelte-icons/gi/GiDiceSixFacesFive.svelte';
    import GiDiceSixFacesSix from 'svelte-icons/gi/GiDiceSixFacesSix.svelte';
    import Button from '../../../components/Button.svelte';

    const diceRollsMax = 12;

    let realmTokenValue;
    let multiverseTokenValue;
    let diceRolls = diceRollsMax;
    const diceIcons = [
        GiDiceSixFacesOne,
        GiDiceSixFacesTwo,
        GiDiceSixFacesThree,
        GiDiceSixFacesFour,
        GiDiceSixFacesFive,
        GiDiceSixFacesSix,
    ];

    let realmDiceRolls = generateDiceRolls(diceRollsMax);
    let multiverseDiceRolls = generateDiceRolls(diceRollsMax);
    onMount(() => {
        // For realism purposes, add random dice value for display
        let getNextDice = setInterval(() => {
            if (diceRolls <= 0) {
                realmTokenValue = Math.floor(Math.random() * 6) + 1;
                multiverseTokenValue = Math.floor(Math.random() * 6) + 1;
                setActivePlayerState('realmToken', realmTokenValue);
                setActivePlayerState('multiverseToken', multiverseTokenValue);
                clearInterval(getNextDice);
                return;
            }

            --diceRolls;
        }, 100);
    });

    const onCloseModal = () => {
        nextPhase();
        setShowDiceRoll(false);
    }

    let isRolling;
    $: {
        isRolling = (!realmTokenValue || !multiverseTokenValue);
    }
</script>

<Modal
    canClose={false}
>
    <div class="modal-wrapper">
        <h1 class="text-2xl font-semibold">Dice Rolling</h1>
        <hr class="my-3" />
        <div class="flex flex-col justify-center items-center gap-2">
            <div class="grid grid-cols-2 gap-3">
                <div class="col-span-1 flex flex-col items-center gap-2">
                    <div class="h-12">
                        <svelte:component this={commonDetails['token-realm'].icon} />
                    </div>
                    <div class="h-20">
                        <svelte:component this={diceIcons[
                            realmTokenValue ? realmTokenValue - 1 : realmDiceRolls[diceRolls] % 6
                        ]} />
                    </div>
                </div>

                <div class="col-span-1 flex flex-col items-center gap-2">
                    <div class="h-12">
                        <svelte:component this={commonDetails['token-multiverse'].icon} />
                    </div>
                    <div class="h-20">
                        <svelte:component this={diceIcons[
                            multiverseTokenValue ? multiverseTokenValue - 1 : multiverseDiceRolls[diceRolls] % 6
                        ]} />
                    </div>
                </div>
            </div>

            {#if !isRolling}
            <p>{`You received ${realmTokenValue ?? '?'} Realm Token${realmTokenValue > 1 ? 's' : ''} and ${multiverseTokenValue ?? '?'} Multiverse Token${multiverseTokenValue > 1 ? 's' : ''}.`}</p>
            {/if}

            <Button 
                label={isRolling ? 'Rolling...' : 'Close'}
                on:click={onCloseModal}
                disabled={isRolling}
            />
        </div>
    </div>
</Modal>

<style>
    .modal-wrapper {
        min-width: 30vw;
    }
</style>