<div class="bg-gray-500 p-3 rounded-md shadow-md">
    <div class="grid grid-cols-5 grid-rows-5 gap-1">
        {#each Array(25) as _, i}
        <div class="w-12 h-12 bg-gray-400">
            <div 
                class={`w-full h-full 
                ${i % 3 === 0 ? 'bg-white' : ''}
                `}
            >
                <p>{i}</p>
            </div>
        </div>
        {/each}
    </div>
</div>