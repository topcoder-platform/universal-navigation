<script lang="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import styles from './LinksMenu.module.scss';
  import { classnames } from 'lib/utils/classnames';

  export let ref: Element | undefined = undefined;
  
  export let className: string;
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
  class={classnames(styles.mainNav, className)}
  class:disableHover={!!activeRoute}
  bind:this={ref}
>
  {#each menuItems as menuItem}
    <a
      class={getNavItemType(menuItem)}
      class:active={activeRoute?.fullPath === menuItem.fullPath}
      class:hover={
        isPopupMenuActive &&
        hoveredMenuItem?.fullPath === menuItem.fullPath
      }
      href={menuItem.absUrl}
      target="_top"
      data-key={menuItem.fullPath}
      on:mouseover={handleMouseover(menuItem)}
      on:focus={handleMouseover(menuItem)}
    >
      {menuItem.label}
    </a>
  {/each}
</div>