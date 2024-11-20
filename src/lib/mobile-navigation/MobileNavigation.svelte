<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import MobileMenu from 'lib/components/MobileMenu.svelte';
  import Accordion from 'lib/components/Accordion.svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import { classnames } from 'lib/utils/classnames';

  import styles from './MobileNavigation.module.scss';
  import LinksMenu from 'lib/components/LinksMenu.svelte';

  export let menuItems: NavMenuItem[];
  export let activeRoutePath: NavMenuItem[] = [];
  export let activeRoute: NavMenuItem = null;
  const toggleMenuIcon = getPublicPath(`/assets/icon-menu.svg`);

  let menuIsVisible = false;
</script>

<div class={styles.menuBtn} on:click={() => menuIsVisible = true} on:keydown={() => {}}>
  <img src={toggleMenuIcon} alt='' />
</div>

{#if menuIsVisible}
<MobileMenu direction="x" handleClose={() => menuIsVisible = false}>
  <div class={styles.mobileNavWrap}>
    <LinksMenu
      vertical
      menuItems={menuItems}
      style='primary'
      activeRoute={activeRoute}
      activeRoutePath={activeRoutePath}
    />
  </div>
</MobileMenu>
{/if}
