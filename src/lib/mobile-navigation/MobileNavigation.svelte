<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { getActiveRoute, getMainNavItems } from 'lib/functions/marketing-navigation.provider'
  import MobileMenu from 'lib/components/MobileMenu.svelte';
  import Accordion from 'lib/components/Accordion.svelte';
  import { getPublicPath, navUrl } from 'lib/utils/paths';
  import { classnames } from 'lib/utils/classnames';

  import styles from './MobileNavigation.module.scss';

  const menuItems = getMainNavItems()
  const activeRoutes: NavMenuItem[] = getActiveRoute()
  const toggleMenuIcon = getPublicPath(`/assets/icon-menu.svg`);

  let menuIsVisible = false;
</script>

<div class={styles.menuBtn} on:click={() => menuIsVisible = true} on:keydown={() => {}}>
  <img src={toggleMenuIcon} alt='' />
</div>

{#if menuIsVisible}
<MobileMenu direction="x" handleClose={() => menuIsVisible = false}>
  <div class={styles.mobileNavWrap}>
    <Accordion
      items={menuItems}
      activeRoute={activeRoutes[0]}
      style="primary"

      let:item
    >
      <Accordion
        items={item.children}
        style="secondary"
        activeRoute={activeRoutes[1]}

        let:item={subItem}
      >
        <ul class={styles.list}>
          {#each subItem.children as child}
            <li
              class={
                classnames(
                  styles.listItem,
                  activeRoutes[2]?.path === child.path && styles.isActive
                )
              }
            >
              <a href={child.url ?? navUrl(child)}>
                {child.label}
              </a>
            </li>
          {/each}
          <li></li>
        </ul>
      </Accordion>
    </Accordion>
  </div>
</MobileMenu>
{/if}
