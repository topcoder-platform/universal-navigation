<script lang="ts">
  import { onMount } from 'svelte';
  import { getFooterNavItems } from 'lib/functions/footer-navigation.provider';
  import { checkAndLoadFonts } from 'lib/utils/fonts';
  import { navUrl } from 'lib/utils/paths';
  import SupportModal from 'lib/components/modals/SupportModal.svelte';
  import { supportMenuItem } from 'lib/config/nav-menu/menu-item';
  import { handleNavItemAction } from 'lib/utils/nav-item-action.handler';
  import FooterBottomBar from './FooterBottomBar.svelte';
  import styles from './FooterNavigation.module.scss'

  const menuItems = getFooterNavItems()
  let supportVisible = false;

  function toggleSupportModal() {
    supportVisible = true;
  }

  onMount(checkAndLoadFonts)

  onMount(() => {
    document.addEventListener(supportMenuItem.action, toggleSupportModal);
    return () => document.removeEventListener(supportMenuItem.action, toggleSupportModal);
  })
</script>

<footer class={styles.footerWrap}>
  <div class={styles.footerNavigation}>
    <ul class={styles.menuSections}>
      {#each menuItems as menuItem}
        <li class={styles.menuSection}>
          <div class={styles.menuSectionHeading}>
            {menuItem.label}
          </div>

          {#if menuItem.children?.length}
            <ul class={styles.menuSectionEntries}>
              {#each menuItem.children as child}
                <li class={styles.menuSectionEntry}>
                  <a target="_top" use:handleNavItemAction={child} href={navUrl(child)}>
                    {child.label}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>

  <FooterBottomBar />

  {#if supportVisible}
  <SupportModal bind:isVisible={supportVisible} />
  {/if}
</footer>
