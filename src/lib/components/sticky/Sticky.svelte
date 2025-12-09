<script lang="ts">
  import { onMount } from "svelte";
  import styles from './Sticky.module.scss'

  let className = '';
  export { className as class };
  export let yOffset = 0;

  let elRef: HTMLElement | undefined;
  let elYOffset = 0;

  function handleScroll() {
    if (!elRef) {
      return;
    }
    const { scrollY } = window;

    const isFixed = (scrollY + yOffset - elYOffset) >= 0;
    elRef.classList.toggle(styles.sticky, isFixed);
  }

  onMount(() => {
    if (!elRef) {
      return;
    }
    elYOffset = elRef.offsetTop;

    handleScroll();
    document.addEventListener('scroll', handleScroll, false);
    return () => document.removeEventListener('scroll', handleScroll, false);
  })
</script>

<div bind:this={elRef} class={className} style="--top-offset: {yOffset}px">
  <slot />
</div>
