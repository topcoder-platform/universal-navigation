<script type="ts">
    import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
    import { HoverMenu } from '../../components/hover-menu';
    import LinksMenu from '../../components/LinksMenu.svelte';
    import TopNavbar from 'lib/components/TopNavbar.svelte';
    import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';

    export let style: 'primary'|'secondary'|'tertiary';
    export let menuItems: NavMenuItem[] = [];
    export let activeRoutePath: NavMenuItem[] = [];
    export let activeRoute: NavMenuItem;
    export let isMobile: boolean = false;
    export let showHoverMenu: boolean = true;

    let popupIsVisible: boolean;
    let hoveredElement: HTMLElement | undefined;
    let hoveredMenuItem: NavMenuItem;
</script>

<TopNavbar style={style}>
  {#if isMobile}
    <MobileNavigation
      menuItems={menuItems}
      activeRoutes={activeRoutePath}
    />
  {:else}
    <LinksMenu
        menuItems={menuItems}
        activeRoute={activeRoute}
        bind:hoveredMenuItem={hoveredMenuItem}
        bind:hoveredElement={hoveredElement}
        isPopupMenuActive={popupIsVisible}
        style={style}
    >
        {#if showHoverMenu}
            <HoverMenu
                activeRoute={activeRoutePath[3] ?? activeRoutePath[2]}
                menuItems={hoveredMenuItem?.children}
                mainDescription={hoveredMenuItem?.description}
                bind:isHovering={popupIsVisible}
            />
        {/if}
    </LinksMenu>
  {/if}

  <svelte:fragment slot="right">
    <slot name="auth"></slot>
  </svelte:fragment>
</TopNavbar>
