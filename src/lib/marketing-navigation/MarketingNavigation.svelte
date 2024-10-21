<script lang="ts">
  /**
   * This is the full navigation component as seen on the "marketing"
   * part of topcoder (topcoder.com/business, topcoder.com/community)
  */
 import { onMount } from 'svelte';
  import { getAppContext } from 'lib/app-context';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { getActiveRoute, getMainNavItems } from 'lib/functions/marketing-navigation.provider'
  import UserArea from 'lib/components/user-area/UserArea.svelte';
  import { isMobile } from 'lib/utils/window-size.store';
  import { checkAndLoadFonts } from 'lib/utils/fonts';
  import NavigationBar from './components/NavigationBar.svelte';
  import Maintenance from 'lib/components/Maintenance.svelte';

  const ctx = getAppContext()
  $: ({auth} = $ctx)

  let isAuthenticated: boolean;
  $: isAuthenticated = auth.ready && !!auth.user;

  let menuItems: NavMenuItem[];
  $: menuItems = getMainNavItems(isAuthenticated)

  let activeRoute: NavMenuItem[] = [];
  $: activeRoute = getActiveRoute(menuItems)

  let primaryRoute: NavMenuItem;
  let secondaryRoute: NavMenuItem;
  let tertiaryRoute: NavMenuItem;
  $: [primaryRoute, secondaryRoute, tertiaryRoute] = activeRoute

  onMount(checkAndLoadFonts)
</script>

<div class="tc-universal-nav-wrap">
  <Maintenance />
  <NavigationBar
    activeRoutePath={activeRoute}
    activeRoute={primaryRoute}
    style='primary'
    menuItems={menuItems}
    isMobile={$isMobile}
  >
    <UserArea slot="auth" />
  </NavigationBar>
</div>
