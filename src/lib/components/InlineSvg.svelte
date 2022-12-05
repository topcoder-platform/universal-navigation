<script lang="ts">
  import { getPublicPath } from "lib/utils/paths";
  import { onMount } from "svelte";


  export let src: string;

  let svgHtml: string;
  onMount(async () => {
    const response = await fetch(getPublicPath(src));
    svgHtml = await response.text();
  });
</script>

{@html svgHtml}
