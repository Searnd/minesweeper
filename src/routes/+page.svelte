<script lang="ts">
  import Minefield from "./minefield.svelte";

  const w = 30;
  const h = 16;

  $: templateColumns = `repeat(${w}, 20px)`;
</script>

<Minefield {w} {h} --template-columns={templateColumns}/>