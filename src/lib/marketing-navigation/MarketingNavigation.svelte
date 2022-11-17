<script lang="ts">
  /**
   * This is the full navigation component as seen on the "marketing"
   * part of topcoder (topcoder.com/business, topcoder.com/community)
  */
  import { getMainNavItems } from 'lib/functions/marketing-navigation.provider'
  import TopNavbar from './navbars/TopNavbar.svelte';

  const menuItems = getMainNavItems()
</script>

<div class="tc-universal-nav-wrap">
  <TopNavbar menuItems={menuItems} />
</div>
