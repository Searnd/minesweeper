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

<div class="minefield" style="--template-columns-count: {w}">
  {#each tiles as tileRow}
    {#each tileRow as tile}
      <div class="tile"></div>
    {/each}
  {/each}
</div>

<style lang="scss">
  $mine-size: 20px;
  .minefield {
    display: grid;
    grid-template-columns: repeat(var(--template-columns-count), $mine-size);
    grid-auto-rows: $mine-size;
    gap: 1px;
  }
  
  .tile {
    background-color: orange;
  }
</style>