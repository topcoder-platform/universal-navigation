<script lang="ts">
  /**
   * This is the navigation component as seen on any tool for the topcoder
  */
  import TopNav from './TopNavbar.svelte';
  import { getMainNavItems } from 'lib/functions/tool-navigation.provider'

  const menuItems = getMainNavItems()

  export let toolName = '';
</script>

<div class="tc-universal-nav-wrap">
  <TopNav
    menuItems={menuItems}
    toolName={toolName}
  />
</div>
