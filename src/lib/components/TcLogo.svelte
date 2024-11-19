<script lang="ts">
  import { allNavItems } from 'lib/config/nav-menu/all-nav-items.config';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './TcLogo.module.scss';
  import { classnames } from 'lib/utils/classnames';

  export let minVersion: boolean = false;

  let imgUrl: string;
  $: imgUrl = getPublicPath(`/assets/logo${minVersion ? '.min' : ''}.svg`);
</script>

<a class={classnames(styles.logo, minVersion && 'min')} href={allNavItems.home.url} target="_top">
  <img src={imgUrl} class="full-logo" alt="Topcoder" />
</a>
