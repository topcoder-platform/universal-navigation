<script type="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { classnames } from 'lib/utils/classnames';
  import HoverMenu from './HoverMenu.svelte';
  import LinksMenu from '../../components/LinksMenu.svelte';
  import styles from './NavigationBar.module.scss';
  import PopupMenu from 'lib/components/PopupMenu.svelte';

  export let style: 'primary'|'secondary'|'ternary';
  export let menuItems: NavMenuItem[] = [];
  export let activeRoute: NavMenuItem;

  let popupIsVisible: boolean;
  let hoveredElement: HTMLElement | undefined;
  let hoveredMenuItem: NavMenuItem;

</script>

<nav class={classnames(styles.navbar, styles[style])}>
  <slot name="logo"></slot>

  <LinksMenu
    className={styles.mainNav}
    menuItems={menuItems}
    activeRoute={activeRoute}
    bind:hoveredMenuItem={hoveredMenuItem}
    bind:hoveredElement={hoveredElement}
    isPopupMenuActive={popupIsVisible}
  />

  <slot name="auth"></slot>

  <PopupMenu
    targetEl={hoveredElement}
    bind:isVisible={popupIsVisible}
    class={styles.hoverMenu}
  >
    <HoverMenu
      menuItems={hoveredMenuItem?.children}
      mainDescription={hoveredMenuItem?.description}
    />
  </PopupMenu>
</nav>