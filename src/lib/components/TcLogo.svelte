<script lang="ts">
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './TcLogo.module.scss';
  
  export let minVersion: boolean = false;
  
  const imgUrl = getPublicPath(`/assets/logo${minVersion ? '.min' : ''}.svg`);
</script>

<a class={styles.logo} href="https://topcoder.com" target="_top">
  <img src={imgUrl} class="full-logo" alt="Topcoder.com" />
</a>