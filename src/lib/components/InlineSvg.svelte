<script lang="ts">
  import { getPublicPath } from "lib/utils/paths";
  import { fetchSvgContents } from "lib/utils/svg";
  import { onMount } from "svelte";

  export let src: string;

  let svgHtml: string;
  onMount(async () => {
    svgHtml = await fetchSvgContents(getPublicPath(src));
  });
</script>

{@html svgHtml}
