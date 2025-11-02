<script lang="ts">
  /**
   * This is the navigation component as seen on any tool for the topcoder
  */
  import { onMount } from 'svelte';
  import { getMainNavItems } from 'lib/functions/tool-navigation.provider'
  import { getAppContext } from 'lib/app-context';
  import TopNavbar from 'lib/components/TopNavbar.svelte';
  import LinksMenu from 'lib/components/LinksMenu.svelte';
  import { classnames } from 'lib/utils/classnames';
  import UserArea from 'lib/components/user-area/UserArea.svelte';
  import { isMobile } from 'lib/utils/window-size.store';
  import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';
  import { checkAndLoadFonts } from 'lib/utils/fonts';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { useSessionStorage } from 'lib/utils/use-storage';
  import { marketingRightItems } from 'lib/functions/marketing-navigation.provider'
  import Maintenance from 'lib/components/Maintenance.svelte';

  import styles from './ToolNavigation.module.scss';
  import ToolNavSeparator from './tool-nav-separator/ToolNavSeparator.svelte';
  import SalesCtaButtons from './SalesCtaButtons.svelte';

  const ctx = getAppContext()
  $: ({toolConfig, navigationHandler, auth} = $ctx)

  let isAuthenticated: boolean;
  $: isAuthenticated = auth.ready && !!auth.user;

  let menuItems: NavMenuItem[];
  $: menuItems = getMainNavItems(isAuthenticated)

  function handleNavigation(ev: MouseEvent) {
    if (typeof navigationHandler === 'function') {
      ev.preventDefault()
      navigationHandler({label: toolConfig.name, path: toolConfig.root});
    }
  }

  let linksMenuEl: HTMLElement;
  let mainMenuWidth = useSessionStorage<number>('mm-width', 154);
  let isHiding = false;
  let mainMenuVisible = false;

  async function setMainMenuWidth() {
    $mainMenuWidth = linksMenuEl?.offsetWidth
  }

  onMount(checkAndLoadFonts)
</script>

<!-- <Maintenance /> -->
<TopNavbar class={classnames(styles.navbar, 'tc-universal-nav-wrap')} style="primary" minVersionLogo>
  {#if $isMobile}
    <MobileNavigation
      menuItems={[...menuItems, ...marketingRightItems.slice(0, -1)]}
    />
  {:else}
    <div class={classnames(styles.primaryMenu, mainMenuVisible && !isHiding && styles.visible, isHiding && styles.hiding)}>
      <LinksMenu
        menuItems={menuItems}
        bind:ref={linksMenuEl}
        style='primary'
      />
    </div>

    <ToolNavSeparator
      offsetLeft={$mainMenuWidth}
      bind:isHiding={isHiding}
      bind:mainMenuVisible={mainMenuVisible}
      onClick={setMainMenuWidth}
    />

    <div class={styles.toolNavWrap}>
      <a href={toolConfig.root} class={styles.toolName} on:click={handleNavigation}>
        {toolConfig.name ?? ''}
      </a>
    </div>
  {/if}

  <svelte:fragment slot="right">
    <UserArea />
  </svelte:fragment>
</TopNavbar>
