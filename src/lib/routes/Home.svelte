<script>
    import { link } from 'svelte-spa-router';

</script>

<div class="p-5 flex flex-col gap-3">
    <h1 class="text-2xl font-semibold">Unstable Multiverse</h1>
    <p>A 2 to 4 players game where you try to stabilize the universe whilst protecting your realm from harm.</p>
    <div>
        <a class="border-2 border-black rounded-md px-3 py-1" use:link href="/game">Play</a>
    </div>
</div>