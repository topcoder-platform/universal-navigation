<script lang="ts">
  import LinksMenu from "lib/components/LinksMenu.svelte";
  import { navItems } from "lib/config/nav-menu/nav-items.config";
  import styles from './AboutUsMenuItem.module.scss';

  export let isMobile: boolean = false

</script>

{#if !isMobile}
  <LinksMenu menuItems={[navItems.aboutUs]} style="primary" />
  <div class={styles.separator}/>
{/if}
