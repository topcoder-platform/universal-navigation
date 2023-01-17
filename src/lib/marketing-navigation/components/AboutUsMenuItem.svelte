<script lang="ts">
  import LinksMenu from "lib/components/LinksMenu.svelte";
  import { navItems } from "lib/config/nav-menu/nav-items.config";
  import { isMobile } from 'lib/utils/window-size.store';
</script>

{#if !$isMobile}
  <LinksMenu menuItems={[navItems.aboutUs]} style="primary" />
{/if}
