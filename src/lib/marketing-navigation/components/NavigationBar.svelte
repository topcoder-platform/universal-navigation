<script type="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import LinksMenu from '../../components/LinksMenu.svelte';
  import TopNavbar from 'lib/components/TopNavbar.svelte';
  import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';
  import { marketingRightItems } from 'lib/functions/marketing-navigation.provider'
  import { allNavItems } from 'lib/config/nav-menu/all-nav-items.config';

  export let style: 'primary'|'secondary'|'tertiary';
  export let menuItems: NavMenuItem[] = [];
  export let activeRoutePath: NavMenuItem[] = [];
  export let activeRoute: NavMenuItem;
  export let isMobile: boolean = false;
</script>

<TopNavbar style={style} minVersionLogo={isMobile}>
  {#if isMobile}
    <MobileNavigation
      menuItems={[...menuItems,...marketingRightItems]}
      activeRoute={activeRoute}
      activeRoutePath={activeRoutePath}
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
    {#if !isMobile}
      <LinksMenu
        menuItems={marketingRightItems}
        style={style}
        activeRoute={activeRoute}
        activeRoutePath={activeRoutePath}
      />
    {:else}
      <LinksMenu
        menuItems={[allNavItems.login]}
        style={style}
        activeRoute={activeRoute}
        activeRoutePath={activeRoutePath}
      />
    {/if}
  </svelte:fragment>
</TopNavbar>
