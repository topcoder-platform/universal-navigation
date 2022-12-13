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

  const ctx = getAppContext()
  $: ({auth} = $ctx)

  let isAuthenticated: boolean;
  $: isAuthenticated = auth.ready && !!auth.user;

  let menuItems: NavMenuItem[];
  $: menuItems = getMainNavItems(isAuthenticated)

  const activeRoute: NavMenuItem[] = getActiveRoute()
  const [primaryRoute, secondaryRoute, tertiaryRoute] = activeRoute

  onMount(checkAndLoadFonts)
</script>

<div class="tc-universal-nav-wrap">
  <NavigationBar
    activeRoute={primaryRoute}
    style='primary'
    menuItems={menuItems}
    isMobile={$isMobile}
  >
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
