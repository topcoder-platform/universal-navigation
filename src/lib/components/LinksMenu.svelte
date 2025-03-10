<script lang="ts">
  import type { NavMenuItem } from "lib/functions/nav-menu-item.model";
  import styles from "./LinksMenu.module.scss";
  import { classnames } from "lib/utils/classnames";
  import { getPublicPath } from 'lib/utils/paths';
  import SubMenu from "./SubMenu.svelte";
  const chevronDownIconUrl = getPublicPath(`/assets/ic-chevron-down.svg`);

  export let ref: Element | undefined = undefined;

  export let style: "primary" | "secondary" | "tertiary" | 'cta';
  export let menuItems: NavMenuItem[];
  export let activeRoute: NavMenuItem = undefined;
  export let activeRoutePath: NavMenuItem[] = [];
  export let vertical: boolean = false;
  let hoveredMenuItem: NavMenuItem = undefined;
  let hoveredElement: HTMLElement = undefined;
  let isPopupMenuActive: boolean = false;

  function isActiveMenu(menuItem: NavMenuItem) {
    return activeRoute?.url !== undefined && menuItem.url === activeRoute?.url
  }

  function itemHasHoverMenu(menuItem: NavMenuItem) {
    return menuItem.children?.length || menuItem.description;
  }

  const handleMouseover = (menuItem: NavMenuItem) => async (ev) => {
    if (!itemHasHoverMenu(menuItem)) {
      return;
    }

    hoveredElement = ev.target;
    hoveredMenuItem = menuItem;
  };

  function getNavItemClassNames(menuItem: NavMenuItem) {
    return classnames(
      styles[style],
      menuItem.uiAttr,
      menuItem.type === "cta" ? "navButton" : "navLink",
      itemHasHoverMenu(menuItem) && 'has-menu',
    )
  }
</script>

<div class={classnames(styles.linksMenuWrap, vertical && styles.vertical)} bind:this={ref}>
  {#each menuItems as menuItem}
    {#if !!menuItem.label}
    <div class={styles.menuItemWrap}>
      <a
        class={getNavItemClassNames(menuItem)}
        class:active={isActiveMenu(menuItem)}
        class:hover={isPopupMenuActive && hoveredMenuItem?.url === menuItem.url}
        href={menuItem.url}
        target={menuItem.target ?? '_top'}
        data-key={menuItem.url}
        on:mouseover={handleMouseover(menuItem)}
        on:focus={handleMouseover(menuItem)}
      >
        {menuItem.label}
        {#if itemHasHoverMenu(menuItem)}
          <img src={chevronDownIconUrl} alt="" class={styles.ddIcon} />
        {/if}
      </a>
      {#if hoveredMenuItem === menuItem && hoveredMenuItem?.children}
      <SubMenu
        menuItems={hoveredMenuItem?.children}
        bind:isHovering={isPopupMenuActive}
        activeRoute={activeRoutePath[1] ?? activeRoute}
      />
      {/if}
    </div>
    {/if}
  {/each}
  <slot />
</div>
