<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import MobileMenu from 'lib/components/MobileMenu.svelte';
  import Accordion from 'lib/components/Accordion.svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import { classnames } from 'lib/utils/classnames';

  import styles from './MobileNavigation.module.scss';

  export let menuItems: NavMenuItem[];
  export let activeRoutes: NavMenuItem[] = [];
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
            {#if !!child.label}
              <li
                class={
                  classnames(
                    styles.listItem,
                    activeRoutes[2]?.url === child.url && styles.isActive
                  )
                }
              >
              <a href={child.url}>
                {child.label}
              </a>
            </li>
            {/if}
          {/each}
          <li></li>
        </ul>
      </Accordion>
    </Accordion>
  </div>
</MobileMenu>
{/if}
