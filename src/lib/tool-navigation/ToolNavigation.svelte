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
  import UserArea from 'lib/components/UserArea.svelte';
  import { isMobile } from 'lib/utils/window-size.store';

  import styles from './ToolNavigation.module.scss';
  import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';

  const menuItems = getMainNavItems()
  const ctx = getAppContext()

  $: ({toolConfig, navigationHandler} = $ctx)

  function handleNavigation(ev: MouseEvent) {
    if (typeof navigationHandler === 'function') {
      ev.preventDefault()
      navigationHandler({label: toolConfig.name, path: toolConfig.root});
    }
  }

  let linksMenuEl: HTMLElement;
  let mainMenuWidth = 0;
  let mainMenuVisible = false;

  function toggleMainMenu() {
    mainMenuVisible = !mainMenuVisible
  }

  async function setMainMenuWidth() {
    await document.fonts?.ready
    mainMenuWidth = linksMenuEl?.offsetWidth
  }

  onMount(setMainMenuWidth)

  // if we switch from mobile view to desktop, call `setMainMenuWidth`
  $: linksMenuEl && setMainMenuWidth()
</script>

<TopNavbar minLogoVersion class={styles.navbar} style="primary">
  {#if $isMobile}
    <MobileNavigation />
  {:else}
    <LinksMenu
      menuItems={menuItems}
      bind:ref={linksMenuEl}
      style='primary'
    />

    <div
      class={classnames(styles.togglerSeparator, mainMenuVisible && styles.toggled)}
      style="--margin-left: {mainMenuWidth}px"
    >
      <span class={styles.toggleBtn} on:click={toggleMainMenu} on:keydown={toggleMainMenu}>
        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.334413
            8.26569C0.0219931 7.95327 0.0219931 7.44673 0.334413 7.13432L2.96873
            4.5L0.334412 1.86569C0.0219928 1.55327 0.0219928 1.04673 0.334412
            0.734315C0.646832 0.421895 1.15336 0.421895 1.46578 0.734315L4.66578
            3.93431C4.9782 4.24673 4.9782 4.75327 4.66578 5.06569L1.46578
            8.26569C1.15336 8.57811 0.646832 8.5781 0.334413 8.26569Z"
            fill="white"
          />
        </svg>
      </span>
    </div>

    <div class={styles.toolNavWrap}>
      <a href={toolConfig.root} class={styles.toolName} on:click={handleNavigation}>
        {toolConfig.name ?? ''}
      </a>
    </div>
  {/if}

  <UserArea slot="right" />
</TopNavbar>
