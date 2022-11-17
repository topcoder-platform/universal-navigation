<script type="ts">
  import type { NavMenuItem } from 'lib/functions/nav-menu-item.model';
  import { classnames } from 'lib/utils/classnames';
  import HoverMenu from './HoverMenu.svelte';
  import LinksMenu from '../../components/LinksMenu.svelte';
  import styles from './NavigationBar.module.scss';

  export let style: 'primary'|'secondary'|'ternary';
  export let menuItems: NavMenuItem[] = [];
  export let activeRoute: NavMenuItem;

  let hoveredMenuItem: NavMenuItem;

</script>

<nav class={classnames(styles.navbar, styles[style])}>
  <slot name="logo"></slot>

  <LinksMenu
    className={styles.mainNav}
    menuItems={menuItems}
    activeRoute={activeRoute}
    bind:hoveredMenuItem={hoveredMenuItem}
  />

  <slot name="auth"></slot>

  {#if !!hoveredMenuItem}
    <HoverMenu
      menuItems={hoveredMenuItem.children}
      mainDescription={hoveredMenuItem.description}
      key={hoveredMenuItem.fullPath}
    />
  {/if}
</nav>