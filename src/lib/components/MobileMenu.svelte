<script lang="ts">
  import styles from './MobileMenu.module.scss';
  import TopNavbar from './TopNavbar.svelte';
  import { getPublicPath } from 'lib/utils/paths';

  const closeMenuIcon = getPublicPath(`/assets/icon-close.svg`);
</script>

<div class={styles.mobileMenuWrap}>
  <TopNavbar minLogoVersion>
    <div class={styles.closeIcon} slot="right">
      <img src={closeMenuIcon} alt="close" />
    </div>
  </TopNavbar>
  <div class={styles.mobileMenuContentWrap}>
    <slot />
  </div>
</div>
