<script lang="ts">
  import styles from './MobileMenu.module.scss';
  import TopNavbar from './TopNavbar.svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import { fly, type FlyParams } from 'svelte/transition';
  import { onMount } from 'svelte';

  const closeMenuIcon = getPublicPath(`/assets/icon-close.svg`);

  export let direction: 'x'|'y';
  export let handleClose = () => {}

  let animParams: FlyParams = {duration: 200}
  $: animParams[direction] = direction === 'x' ? -320 : 50

  // Mobile VH unit fix
  // @see: https://css-tricks.com/the-trick-to-viewport-units-on-mobile
  onMount(() => {
    const updateVh = () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // We listen to the resize event
    window.addEventListener('resize', updateVh);

    return () => window.removeEventListener('resize', updateVh);
  })
</script>

<div class={styles.mobileMenuWrap} transition:fly={animParams}>
  <TopNavbar minLogoVersion style="primary">
    <div class={styles.closeIcon} slot="right" on:click={handleClose} on:keydown={() => {}}>
      <img src={closeMenuIcon} alt="close" />
    </div>
  </TopNavbar>
  <div class={styles.mobileMenuContentWrap}>
    <slot />
  </div>
</div>
