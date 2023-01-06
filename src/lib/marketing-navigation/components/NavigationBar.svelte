<script type="ts">
    import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
    import HoverMenu from './HoverMenu.svelte';
    import LinksMenu from '../../components/LinksMenu.svelte';
    import TopNavbar from 'lib/components/TopNavbar.svelte';
    import MobileNavigation from 'lib/mobile-navigation/MobileNavigation.svelte';
    import { navItems } from 'lib/config/nav-menu/nav-items.config';
    import styles from './NavigationBar.module.scss';


    export let style: 'primary'|'secondary'|'tertiary';
    export let menuItems: NavMenuItem[] = [];
    export let activeRoutePath: NavMenuItem[] = [];
    export let activeRoute: NavMenuItem;
    export let isMobile: boolean = false;

    let popupIsVisible: boolean;
    let hoveredElement: HTMLElement | undefined;
    let hoveredMenuItem: NavMenuItem;
</script>

<TopNavbar style={style} minLogoVersion={isMobile}>
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
        {#if !activeRoute}
            <HoverMenu
                menuItems={hoveredMenuItem?.children}
                mainDescription={hoveredMenuItem?.description}
                bind:isHovering={popupIsVisible}
            />
        {/if}
    </LinksMenu>
  {/if}

  <svelte:fragment slot="right">
    {#if !isMobile}
      <LinksMenu menuItems={[navItems.aboutUs]} style="primary" />
      <div class={styles.separator}/>
    {/if}
    <slot name="auth"></slot>
  </svelte:fragment>
</TopNavbar>
