<script type="ts">
    import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
    import LinksMenu from '../../components/LinksMenu.svelte';
    import TopNavbar from 'lib/components/TopNavbar.svelte';
    import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';
    import { marketingRightItems } from 'lib/functions/marketing-navigation.provider'

    export let style: 'primary'|'secondary'|'tertiary';
    export let menuItems: NavMenuItem[] = [];
    export let activeRoutePath: NavMenuItem[] = [];
    export let activeRoute: NavMenuItem;
    export let isMobile: boolean = false;
    export let minVersionLogo: boolean = false;
</script>

<TopNavbar style={style} minVersionLogo={minVersionLogo}>
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
      activeRoutePath={activeRoutePath}
    />
  {/if}

  <svelte:fragment slot="right">
    {#if isMobile}
      <MobileNavigation
        menuItems={menuItems}
        activeRoutes={activeRoutePath}
      />
    {:else}
      <LinksMenu
        menuItems={marketingRightItems}
        style={style}
        activeRoute={activeRoute}
        activeRoutePath={activeRoutePath}
      />
    {/if}
  </svelte:fragment>
</TopNavbar>
