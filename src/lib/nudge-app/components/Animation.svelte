<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './Animation.module.scss';

  export let animation: string;
  export let cover = '';

  interface BodymovinAnimation {
    addEventListener: (event: 'data_ready', listener: () => void) => void;
  }

  interface Bodymovin {
    loadAnimation: (configuration: Record<string, unknown>) => BodymovinAnimation;
  }

  let ref: Element | undefined = undefined;
  let coverRef: HTMLDivElement | undefined = undefined;
  const dispatch = createEventDispatcher();

  function triggerLoaded(animation: any = false) {
    dispatch('loaded', {animation: animation === true});
  }

  /**
   * Loads the requested nudge animation and reveals it after its data is ready.
   * @param path - Animation asset basename
   * @returns void after registering the bodymovin ready listener
   * @throws If the previously loaded bodymovin bundle does not expose its expected browser API
   */
  const loadAnimation = (path: string): void => {
    const animData = {
      container: ref,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: getPublicPath(`/assets/nudge/anim/${path}.json`),
      rendererSettings: {
        progressiveLoad: true
      },
    };
    const bodymovin = (window as unknown as Window & { bodymovin: Bodymovin }).bodymovin;
    const bmAnim = bodymovin.loadAnimation(animData);
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
