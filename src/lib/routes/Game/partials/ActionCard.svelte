<script>
    export let actionData;
</script>

<div class="w-full h-32 bg-blue-500 rounded-md p-3 flex flex-col justify-center cursor-pointer hover:shadow">
    <div class="w-full text-white">
        <svelte:component this={actionData.icon} />
    </div>
</div>