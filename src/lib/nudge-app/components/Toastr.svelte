<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './Toastr.module.scss';
  import { classnames } from 'lib/utils/classnames';
  import Animation from './Animation.svelte';
  import type { ToastType } from '../config';

  export let toast: ToastType;
  let visible = false;
  const dispatch = createEventDispatcher();

  const dismissIcon = getPublicPath('/assets/nudge/icon-dismiss.svg');

  function dismiss() {
    visible = false;
    setTimeout(dispatch, 300, 'dismiss');
  }

  function onLoaded() {
    visible = true;
  }

</script>

<div class={classnames(styles.toastr, `${toast.theme}-theme`, !visible && 'hidden')}>
  <div class={styles.icon}>
    <div class={styles.animation}>
      {#if toast.type === 'animated'}
        <Animation on:loaded={onLoaded} cover={toast.cover} animation={toast.icon} />
      {:else if toast.type === 'static'}
        <img
          src={getPublicPath(`/assets/nudge/anim/${toast.icon}.png`)}
          alt="icon"
          on:load={onLoaded}
        />
      {/if}
    </div>
  </div>
  <div class={styles.contents}>
    <div class={styles.title}>{toast.title}</div>
    <div class={styles.message}>{toast.message}</div>

    <a href={toast.ctaLink} class={styles.ctaBtn} target="_blank" rel="noreferrer" on:click={dismiss}>
      {toast.ctaText}
    </a>
  </div>
  <div class={styles.close} on:click={dismiss} on:keydown={dismiss} >
    <img src={dismissIcon} alt="close" />
  </div>
</div>
