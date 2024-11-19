<script lang="ts">
  import TcLogo from 'lib/components/TcLogo.svelte';
  import { classnames } from 'lib/utils/classnames';
  import styles from './TopNavbar.module.scss';

  let className = '';
  export {className as class};
  export let showLogo = false;
  export let style: 'primary'|'secondary'|'tertiary';
  export let minVersionLogo: boolean = false;

</script>

<nav class={classnames(styles.topNavbarWrap, className, styles[style], 'uni-topNavbar')}>
  <div class={styles.topNavbarInner}>
    {#if showLogo || style === 'primary'}
      <TcLogo minVersion={minVersionLogo} />
    {/if}
    <slot />

    <div class={styles.right}>
      <slot name="right" />
    </div>
  </div>
</nav>
