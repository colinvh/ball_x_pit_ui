<script>
  import GridItem from "$lib/components/GridItem.svelte";

  // Create a 5x5 grid for demonstration
  const gridSize = 5;
  $: grid = Array.from({ length: gridSize }, (_, y) =>
    Array.from({ length: gridSize }, (_, x) => ({ x, y }))
  );
</script>

<div class="mt-8">
  <h1 class="text-2xl font-bold mb-4 text-white">BALL x PIT Evolution Chart</h1>
  <p class="mb-4 text-gray-400">
    Hover over cells to display more information.
  </p>

  <div class="grid grid-cols-5 gap-0 w-fit border-1 border-gray-400 p-2">
    {#each grid as row}
      {#each row as cell}
        <GridItem x={cell.x} y={cell.y} />
      {/each}
    {/each}
  </div>
</div>
