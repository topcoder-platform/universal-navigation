<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { getAppContext } from 'lib/app-context';
  import { getFooterNavItems } from 'lib/functions/footer-navigation.provider';
  import { checkAndLoadFonts } from 'lib/utils/fonts';
  import SupportModal from 'lib/components/modals/SupportModal.svelte';
  import { navItems } from 'lib/config/nav-menu/nav-items.config';
  import { handleNavItemAction } from 'lib/utils/nav-item-action.handler';
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import InlineSvg from 'lib/components/InlineSvg.svelte';
  import { classnames } from 'lib/utils/classnames';
  import { isMobile } from 'lib/utils/window-size.store';
  import FooterBottomBar from './FooterBottomBar.svelte';
  import styles from './FooterNavigation.module.scss'

  const ctx = getAppContext()
  $: ({auth} = $ctx)

  let isAuthenticated: boolean;
  $: isAuthenticated = auth.ready && !!auth.user;

  let menuItems: NavMenuItem[];
  $: menuItems = getFooterNavItems(isAuthenticated)

  let fullFooter: boolean;
  $: fullFooter = $isMobile ? false : $ctx.toolConfig.fullFooter

  let isCollapsed = true;

  let supportVisible = false;
  let footerEl: Element | undefined = undefined;
  let bottomBar: Element | undefined = undefined;

  function toggleSupportModal() {
    supportVisible = true;
  }

  async function toggleFooter() {
    isCollapsed = !isCollapsed;
    await tick()

    if (!isCollapsed) {
      bottomBar.scrollIntoView()
    }
  }

  onMount(checkAndLoadFonts)

  onMount(() => {
    footerEl.addEventListener(navItems.support.action, toggleSupportModal);
  })
</script>

<footer class={styles.footerWrap} bind:this={footerEl}>
  {#if !$isMobile && !fullFooter}
    <div class={classnames(styles.toggleBar, isCollapsed && styles.isCollapsed)} on:click={toggleFooter} on:keydown={() => {}}>
      <span class={styles.icon}>
        <InlineSvg src="/assets/icon-tmenu.svg" />
      </span>
      <span class={classnames(styles.icon, styles.toggl)}>
        <InlineSvg src="/assets/icon-arrow.svg" />
      </span>
    </div>
  {/if}
  {#if fullFooter === true || !isCollapsed}
  <div class={styles.footerNavigation} bind:this={bottomBar}>
    <ul class={styles.menuSections}>
      {#each menuItems as menuItem}
        <li class={styles.menuSection}>
          {#if !!menuItem.label}
            <div class={styles.menuSectionHeading}>
              {menuItem.label}
            </div>
          {/if}
          {#if menuItem.children?.length}
            <ul class={styles.menuSectionEntries}>
              {#each menuItem.children as child}
                {#if !!child.label}
                  <li class={styles.menuSectionEntry}>
                    <a target={child.target ?? '_top'} use:handleNavItemAction={child} href={child.url} rel="noopener">
                      {child.label}
                    </a>
                  </li>
                {/if}
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
  {/if}

  <FooterBottomBar />

  {#if supportVisible}
  <SupportModal bind:isVisible={supportVisible} />
  {/if}
</footer>
