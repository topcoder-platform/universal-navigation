<script lang="ts">
  import TcLogo from 'lib/components/TcLogo.svelte';
  import { classnames } from 'lib/utils/classnames';
  import styles from './TopBar.module.scss';

  export let minLogoVersion = false;

</script>

<nav class={classnames(styles.navbar, 'top-navbar')}>
  <TcLogo minVersion={minLogoVersion} />
  <slot />


  <div class={styles.right}>
    <slot name="right" />
  </div>
</nav>
