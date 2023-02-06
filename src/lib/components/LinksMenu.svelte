<script lang="ts">
  import type { NavMenuItem } from "lib/functions/nav-menu-item.model";
  import styles from "./LinksMenu.module.scss";
  import { classnames } from "lib/utils/classnames";

  export let ref: Element | undefined = undefined;

  export let style: "primary" | "secondary" | "tertiary";
  export let menuItems: NavMenuItem[];
  export let activeRoute: NavMenuItem = undefined;
  export let hoveredMenuItem: NavMenuItem = undefined;
  export let hoveredElement: HTMLElement = undefined;
  export let isPopupMenuActive: boolean = false;

  function isActiveMenu(menuItem: NavMenuItem) {
    return menuItem.url === activeRoute?.url
  }

  function itemHasHoverMenu(menuItem: NavMenuItem) {
    return menuItem.children?.length || menuItem.description;
  }

  const handleMouseover = (menuItem: NavMenuItem) => async (ev) => {
    if (!itemHasHoverMenu(menuItem) || isActiveMenu(menuItem)) {
      return;
    }

    hoveredElement = ev.target;
    hoveredMenuItem = menuItem;
  };

  function getNavItemType(menuItem: NavMenuItem) {
    return menuItem.type === "cta" ? "navButton" : "navLink";
  }
</script>

<div class={styles.linksMenuWrap} bind:this={ref}>
  {#each menuItems as menuItem}
    {#if !!menuItem.label}
      <a
        class={classnames(getNavItemType(menuItem), menuItem.uiAttr, styles[style])}
        class:active={isActiveMenu(menuItem)}
        class:hover={isPopupMenuActive &&
          hoveredMenuItem?.url === menuItem.url}
          href={menuItem.url}
          target={menuItem.target ?? '_top'}
          data-key={menuItem.url}
          on:mouseover={handleMouseover(menuItem)}
          on:focus={handleMouseover(menuItem)}
        >
        {menuItem.label}
      </a>
    {/if}
  {/each}
  <slot />
</div>
