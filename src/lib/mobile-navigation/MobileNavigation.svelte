<script lang="ts">
  import { getPublicPath } from 'lib/utils/paths';
  import UserArea from 'lib/components/UserArea.svelte';

  import MobileMenu from './components/MobileNav.svelte';
  import styles from './MobileNavigation.module.scss';
  import TopNavbar from 'lib/components/TopNavbar.svelte';

  const toggleMenuIcon = getPublicPath(`/assets/icon-menu.svg`);
</script>

<div class={styles.mobileNavWrap}>
  <TopNavbar minLogoVersion>
    <div class={styles.menuBtn}>
      <img src={toggleMenuIcon} alt='' />
    </div>

    <UserArea slot="right" />
  </TopNavbar>
  <MobileMenu />
</div>
