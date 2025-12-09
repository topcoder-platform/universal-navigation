<script lang="ts">
  import type { NavMenuItem } from "lib/functions/nav-menu-item.model";
  import styles from "./LinksMenu.module.scss";
  import { classnames } from "lib/utils/classnames";
  import { getPublicPath } from 'lib/utils/paths';
  import SubMenu from "./SubMenu.svelte";
  import type { NavigationHandler } from "../app-context/navigation-handler.model";
  const chevronDownIconUrl = getPublicPath(`/assets/ic-chevron-down.svg`);

  export let ref: Element | undefined = undefined;

  export let style: "primary" | "secondary" | "tertiary" | 'cta';
  export let menuItems: NavMenuItem[] = [];
  export let activeRoute: NavMenuItem | undefined = undefined;
  export let activeRoutePath: NavMenuItem[] = [];
  export let vertical: boolean = false;
  export let navigationHandler: NavigationHandler | undefined = undefined;
  let hoveredMenuItem: NavMenuItem | undefined = undefined;
  let hoveredElement: HTMLElement | undefined = undefined;
  let isPopupMenuActive: boolean = false;

  function isActiveMenu(menuItem: NavMenuItem, activeMenuItem?: NavMenuItem) {
    return activeMenuItem?.url !== undefined && menuItem.url === activeMenuItem?.url
  }

  function itemHasHoverMenu(menuItem: NavMenuItem) {
    return !!(menuItem.children?.length) || !!menuItem.description;
  }

  const handleMouseover = (menuItem: NavMenuItem) => async (ev: Event) => {
    if (!itemHasHoverMenu(menuItem)) {
      return;
    }

    hoveredElement = ev.currentTarget as HTMLElement ?? undefined;
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

  function handleNavigation(ev: MouseEvent, menuItem: NavMenuItem) {
    if (menuItem.url === undefined) {
      ev.preventDefault();
      return;
    }

    if (typeof navigationHandler === 'function') {
      ev.preventDefault()
      navigationHandler({label: menuItem.label ?? '', path: menuItem.url, isMarketingUrl: !!menuItem.marketingPathname});
    }
  }
</script>

<div class={classnames(styles.linksMenuWrap, vertical && styles.vertical)} bind:this={ref}>
  {#each menuItems as menuItem}
    {#if !!menuItem.label}
    <div class={styles.menuItemWrap}>
      <a
        class={getNavItemClassNames(menuItem)}
        class:active={isActiveMenu(menuItem, activeRoute)}
        class:hover={isPopupMenuActive && hoveredMenuItem?.label === menuItem.label}
        href={menuItem.url}
        target={menuItem.target ?? '_top'}
        data-key={menuItem.url}
        on:mouseover={handleMouseover(menuItem)}
        on:focus={handleMouseover(menuItem)}
        on:click={(ev) => handleNavigation(ev, menuItem)}
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
        navigationHandler={navigationHandler}
      />
      {/if}
    </div>
    {/if}
  {/each}
  <slot />
</div>
