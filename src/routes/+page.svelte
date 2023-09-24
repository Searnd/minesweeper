<script lang="ts">
  import Minefield from "./minefield.svelte";

  const w = 30;
  const h = 16;

  $: templateColumns = `repeat(${w}, 1fr)`;
  $: templateRows = `repeat(${h}, 1fr)`;
</script>

<Minefield --template-columns={templateColumns} --template-rows={templateRows}/>