<script>
    import GiRoundStar from 'svelte-icons/gi/GiRoundStar.svelte';

    export let tileData = null;

    let tileColor = '';
    let tileIcon;
    $: {
        if (tileData) {
            switch (tileData.value) {
            case 'start':
                tileColor = 'bg-white';
                tileIcon = GiRoundStar;
                break;
            }
        }
    }
</script>

<div 
    class={`w-12 h-12 cursor-pointer bg-gray-500`}
>
    <div 
        class={`w-full h-full text-black p-3
        ${tileColor}
        `}
    >
        {#if tileIcon}
        <svelte:component this={tileIcon} />
        {/if}
    </div>
</div>