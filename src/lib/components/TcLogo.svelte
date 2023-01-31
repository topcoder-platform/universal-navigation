<script lang="ts">
  import { navItems } from 'lib/config/nav-menu/nav-items.config';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './TcLogo.module.scss';

  export let minVersion: boolean = false;

  let imgUrl: string;
  $: imgUrl = getPublicPath(`/assets/logo${minVersion ? '.min' : ''}.svg`);
</script>

<a class={styles.logo} href={navItems.home.url} target="_top">
  <img src={imgUrl} class="full-logo" alt="Topcoder" />
</a>
