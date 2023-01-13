<script lang="ts">
  import LinksMenu from "lib/components/LinksMenu.svelte";
  import { navItems } from "lib/config/nav-menu/nav-items.config";

  export let isMobile: boolean = false

</script>

{#if !isMobile}
  <LinksMenu menuItems={[navItems.aboutUs]} style="primary" />
{/if}
