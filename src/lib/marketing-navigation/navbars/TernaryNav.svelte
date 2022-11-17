<script>
  import { getActiveRoute } from 'lib/functions/marketing-navigation.provider';
  import styles from './TernaryNav.module.scss';

  export let menuItems = [];

  function getNavItemType(menuItem) {
    return menuItem.type === 'cta' ? styles.navButton : styles.navLink
  }
  let activeRoute = getActiveRoute(2)
</script>

<div class={styles.ternaryNavbar}>
  <div class={styles.mainNav} class:disableHover={!!activeRoute}>
    {#each menuItems as menuItem}
      <a
        class={getNavItemType(menuItem)}
        class:active={activeRoute?.fullPath === menuItem.fullPath}
        href={menuItem.absUrl}
        target="_top"
      >
        {menuItem.label}
      </a>
    {/each}
  </div>
</div>
