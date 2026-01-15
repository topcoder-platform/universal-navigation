<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './Animation.module.scss';

  export let animation: string;
  export let cover: string;

  let ref: Element | undefined = undefined;
  let coverRef: HTMLDivElement | undefined = undefined;
  const dispatch = createEventDispatcher();

  function triggerLoaded(animation: any = false) {
    dispatch('loaded', {animation: animation === true});
  }

  const loadAnimation = (path) => {
    var animData = {
      container: ref,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: getPublicPath(`/assets/nudge/anim/${path}.json`),
      rendererSettings: {
        progressiveLoad: true
      },
    };
    const bmAnim = window['bodymovin'].loadAnimation(animData);
    bmAnim.addEventListener('data_ready', () => {
      if (coverRef) {
        Object.assign(coverRef.style, {display: 'none'});
      }

      triggerLoaded(true);
    });
  }

  onMount(async () => {
    await import(/* @vite-ignore */getPublicPath('/assets/nudge/bodymovin.js'));
    loadAnimation(animation);
  });

</script>

<div class={styles.animation} bind:this={ref}>
  {#if cover}
    <img
      src={getPublicPath(`/assets/nudge/anim/${cover}`)}
      alt="icon"
      bind:this={coverRef} on:load={triggerLoaded}
    />
  {/if}
</div>
