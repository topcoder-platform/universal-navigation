<script lang="ts">
  /**
   * This is the navigation component as seen on any tool for the topcoder
  */
 import { getContext } from 'svelte';
  import TopNav from './TopNavbar.svelte';
  import { getMainNavItems } from 'lib/functions/tool-navigation.provider'
  import type { NavContext } from 'main';

  const menuItems = getMainNavItems()

  const toolName: NavContext['toolName'] = getContext('toolName');
</script>

<div class="tc-universal-nav-wrap">
  <TopNav
    menuItems={menuItems}
    toolName={$toolName}
  />
</div>
