<script lang="ts">
  /**
   * This is the navigation component as seen on any tool for the topcoder
  */
  import TopNav from './TopNavbar.svelte';
  import { getMainNavItems } from 'lib/functions/tool-navigation.provider'
  import { getAppContext } from 'lib/app-context';

  const menuItems = getMainNavItems()
  const ctx = getAppContext()

  $: ({toolConfig, navigationHandler} = $ctx)
</script>

<div class="tc-universal-nav-wrap">
  <TopNav
    menuItems={menuItems}
    toolName={toolConfig.name}
    toolRoot={toolConfig.root}
    navigationHandler={navigationHandler}
  />
</div>
