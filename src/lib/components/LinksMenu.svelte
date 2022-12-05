<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import styles from './LinksMenu.module.scss';
  import { classnames } from 'lib/utils/classnames';
  import { navUrl } from 'lib/utils/paths';

  export let ref: Element | undefined = undefined;

  export let style: 'primary'|'secondary'|'tertiary';
  export let menuItems: NavMenuItem[];
  export let activeRoute: NavMenuItem = undefined;
  export let hoveredMenuItem: NavMenuItem = undefined;
  export let hoveredElement: HTMLElement = undefined;
  export let isPopupMenuActive: boolean = false;

  function itemHasHoverMenu(menuItem: NavMenuItem) {
    return menuItem.children?.length || menuItem.description
  }

  const handleMouseover = (menuItem: NavMenuItem) => async (ev) => {
    if (activeRoute) {
      return
    }

    if (!itemHasHoverMenu(menuItem)) {
      return;
    }

    hoveredElement = ev.target
    hoveredMenuItem = menuItem;
  }

  function getNavItemType(menuItem: NavMenuItem) {
    return menuItem.type === 'cta' ? 'navButton' : 'navLink'
  }

</script>

<div
  class={styles.linksMenuWrap}
  bind:this={ref}
>
  {#each menuItems as menuItem}
    <a
      class={classnames(getNavItemType(menuItem), styles[style])}
      class:active={activeRoute?.path === menuItem.path}
      class:hover={
        isPopupMenuActive &&
        hoveredMenuItem?.path === menuItem.path
      }
      href={navUrl(menuItem)}
      target="_top"
      data-key={menuItem.path}
      on:mouseover={handleMouseover(menuItem)}
      on:focus={handleMouseover(menuItem)}
    >
      {menuItem.label}
    </a>
  {/each}
  <slot />
</div>
