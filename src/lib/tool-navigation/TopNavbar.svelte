<script>
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './TopNavbar.module.scss';

  const imgUrl = getPublicPath('/assets/logo.min.svg');

  export let menuItems = [];
  export let toolName = '';

</script>

<nav class={styles.topNavbar}>
  <a class={styles.logo} href="https://topcoder.com" target="_top">
    <img src={imgUrl} class="min-logo" alt="Topcoder.com" />
  </a>
  <div class={styles.mainNav}>
    {#each menuItems as menuItem}
      <a
        class={styles.primaryNavLink}
        href={menuItem.absUrl}
        target="_top"
      >
        {menuItem.label}
      </a>
    {/each}
  </div>

  <div class={styles.togglerSeparator} />

  <div class={styles.toolNavWrap}>
    <div class={styles.toolName}>
      {toolName}
    </div>
    
  </div>
</nav>
