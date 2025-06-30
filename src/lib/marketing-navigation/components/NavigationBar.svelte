<script type="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import LinksMenu from '../../components/LinksMenu.svelte';
  import TopNavbar from 'lib/components/TopNavbar.svelte';
  import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';
  import { marketingRightItems } from 'lib/functions/marketing-navigation.provider'
  import { NavigationHandler } from "../../app-context/navigation-handler.model";

  export let style: 'primary'|'secondary'|'tertiary';
  export let menuItems: NavMenuItem[] = [];
  export let activeRoutePath: NavMenuItem[] = [];
  export let activeRoute: NavMenuItem;
  export let isMobile: boolean = false;
  export let navigationHandler: NavigationHandler | undefined;
</script>

<TopNavbar style={style} minVersionLogo={isMobile}>
  {#if isMobile}
    <MobileNavigation
      menuItems={[...menuItems]}
      activeRoute={activeRoute}
      activeRoutePath={activeRoutePath}
    />
  {:else}
    <LinksMenu
      menuItems={menuItems}
      style={style}
      activeRoute={activeRoute}
      activeRoutePath={activeRoutePath}
      navigationHandler={navigationHandler}
    />
  {/if}

  <svelte:fragment slot="right">
    <slot name="auth"></slot>
  </svelte:fragment>
</TopNavbar>
