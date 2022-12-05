<script type="ts">
    import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
    import HoverMenu from './HoverMenu.svelte';
    import LinksMenu from '../../components/LinksMenu.svelte';
    import TopNavbar from 'lib/components/TopNavbar.svelte';
    import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';

    export let style: 'primary'|'secondary'|'tertiary';
    export let menuItems: NavMenuItem[] = [];
    export let activeRoute: NavMenuItem;
    export let isMobile: boolean = false;

    let popupIsVisible: boolean;
    let hoveredElement: HTMLElement | undefined;
    let hoveredMenuItem: NavMenuItem;
</script>

<TopNavbar style={style} minLogoVersion={isMobile}>
  {#if isMobile}
    <MobileNavigation />
  {:else}
    <LinksMenu
        menuItems={menuItems}
        activeRoute={activeRoute}
        bind:hoveredMenuItem={hoveredMenuItem}
        bind:hoveredElement={hoveredElement}
        isPopupMenuActive={popupIsVisible}
        style={style}
    >
        {#if !activeRoute}
            <HoverMenu
                menuItems={hoveredMenuItem?.children}
                mainDescription={hoveredMenuItem?.description}
                bind:isHovering={popupIsVisible}
            />
        {/if}
    </LinksMenu>
  {/if}

  <slot name="auth" slot="right"></slot>
</TopNavbar>
