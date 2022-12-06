<script lang="ts">
  /**
   * This is the full navigation component as seen on the "marketing"
   * part of topcoder (topcoder.com/business, topcoder.com/community)
  */
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { getActiveRoute, getMainNavItems } from 'lib/functions/marketing-navigation.provider'
  import TcLogo from 'lib/components/TcLogo.svelte';
  import UserArea from 'lib/components/user-area/UserArea.svelte';
  import NavigationBar from './components/NavigationBar.svelte';
  import { isMobile } from 'lib/utils/window-size.store';

  const menuItems = getMainNavItems()
  const activeRoute: NavMenuItem[] = getActiveRoute()
  const [primaryRoute, secondaryRoute, tertiaryRoute] = activeRoute
</script>

<div class="tc-universal-nav-wrap">
  <NavigationBar
    activeRoute={primaryRoute}
    style='primary'
    menuItems={menuItems}
    isMobile={$isMobile}
  >
    <TcLogo slot="logo" />
    <UserArea slot="auth" />
  </NavigationBar>

  {#if !$isMobile}
    {#if primaryRoute?.children?.length}
      <NavigationBar
        activeRoute={secondaryRoute}
        style='secondary'
        menuItems={primaryRoute.children}
      />
    {/if}

    {#if secondaryRoute?.children?.length}
      <NavigationBar
        activeRoute={tertiaryRoute}
        style='tertiary'
        menuItems={secondaryRoute.children}
      />
    {/if}
  {/if}
</div>
