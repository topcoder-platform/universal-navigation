<script lang="ts">
  /**
   * This is the navigation component as seen on any tool for the topcoder
  */
  import { onMount, tick } from 'svelte';
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

  import styles from './ToolNavigation.module.scss';
  import ToolNavSeparator from './tool-nav-separator/ToolNavSeparator.svelte';

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
  let mainMenuVisible = false;

  async function toggleMainMenu() {
    setMainMenuWidth()
    await tick()
    mainMenuVisible = !mainMenuVisible
  }

  async function setMainMenuWidth() {
    $mainMenuWidth = linksMenuEl?.offsetWidth
  }

  onMount(checkAndLoadFonts)
</script>

<TopNavbar minLogoVersion class={styles.navbar} style="primary">
  {#if $isMobile}
    <MobileNavigation
      menuItems={menuItems}
    />
  {:else}
    <div class={classnames(styles.primaryMenu, mainMenuVisible && styles.visible)}>
      <LinksMenu
        menuItems={menuItems}
        bind:ref={linksMenuEl}
        style='primary'
      />
    </div>

    <ToolNavSeparator
      offsetLeft={$mainMenuWidth}
      isToggled={mainMenuVisible}
      onClick={toggleMainMenu}
    />

    <div class={styles.toolNavWrap}>
      <a href={toolConfig.root} class={styles.toolName} on:click={handleNavigation}>
        {toolConfig.name ?? ''}
      </a>
    </div>
  {/if}

  <UserArea slot="right" />
</TopNavbar>
