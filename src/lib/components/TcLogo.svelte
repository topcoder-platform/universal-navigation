<script lang="ts">
  import { DEFAULT_HOST_URL } from 'lib/config';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './TcLogo.module.scss';

  export let minVersion: boolean = false;

  let imgUrl: string;
  $: imgUrl = getPublicPath(`/assets/logo${minVersion ? '.min' : ''}.svg`);
</script>

<a class={styles.logo} href={DEFAULT_HOST_URL} target="_top">
  <img src={imgUrl} class="full-logo" alt="Topcoder" />
</a>
