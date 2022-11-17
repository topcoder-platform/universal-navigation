<script lang="ts">
  import LinksMenu from 'lib/components/LinksMenu.svelte';
  import TcLogo from 'lib/components/TcLogo.svelte';
  import UserArea from 'lib/components/UserArea.svelte';
  import styles from './TopNavbar.module.scss';

  export let menuItems = [];
  export let toolName = '';

</script>

<nav class={styles.navbar}>
  <TcLogo minVersion />

  <LinksMenu
    className={styles.mainNav}
    menuItems={menuItems}
  />
  
  <div class={styles.togglerSeparator} />

  <div class={styles.toolNavWrap}>
    <div class={styles.toolName}>
      {toolName}
    </div>
  </div>

  <UserArea />
</nav>
