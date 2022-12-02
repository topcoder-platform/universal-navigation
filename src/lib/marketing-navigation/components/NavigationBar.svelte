<script type="ts">
    import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
    import HoverMenu from './HoverMenu.svelte';
    import LinksMenu from '../../components/LinksMenu.svelte';
    import TopNavbar from 'lib/components/TopNavbar.svelte';

    export let style: 'primary'|'secondary'|'ternary';
    export let menuItems: NavMenuItem[] = [];
    export let activeRoute: NavMenuItem;

    let popupIsVisible: boolean;
    let hoveredElement: HTMLElement | undefined;
    let hoveredMenuItem: NavMenuItem;
</script>

<TopNavbar style={style}>
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

  <slot name="auth" slot="right"></slot>
</TopNavbar>
