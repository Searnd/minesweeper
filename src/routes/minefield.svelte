<script lang="ts">
  import type { Tile } from "$lib/tile";
  import { TileFactory } from "$lib/tile.factory";
  import { onMount } from "svelte";

  export let w: number;
  export let h: number;

  let tileCount = 0;
  let tiles: Tile[][] = [];

  onMount(() => {
    tileCount = w * h;
    tiles = TileFactory.create(w, h);
  });
</script>

<div class="minefield">
  {#each tiles as tileRow}
    {#each tileRow as tile}
      <div class="tile"></div>
    {/each}
  {/each}
</div>

<style lang="scss">
  .minefield {
    display: grid;
    grid-template-columns: var(--template-columns);
    grid-auto-rows: 20px;
    gap: 1px;
  }
  
  .tile {
    background-color: orange;
  }
</style>