<script type="ts">
    import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
    import LinksMenu from '../../components/LinksMenu.svelte';
    import TopNavbar from 'lib/components/TopNavbar.svelte';
    import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';

    export let style: 'primary'|'secondary'|'tertiary';
    export let menuItems: NavMenuItem[] = [];
    export let activeRoutePath: NavMenuItem[] = [];
    export let activeRoute: NavMenuItem;
    export let isMobile: boolean = false;
</script>

<TopNavbar style={style}>
  {#if isMobile}
    <MobileNavigation
      menuItems={menuItems}
      activeRoutes={activeRoutePath}
    />
  {:else}
    <LinksMenu
      menuItems={menuItems}
      style={style}
      activeRoute={activeRoute}
    />
  {/if}

  <svelte:fragment slot="right">
    <slot name="auth"></slot>
  </svelte:fragment>
</TopNavbar>
