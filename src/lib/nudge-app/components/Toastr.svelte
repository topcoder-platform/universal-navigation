<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { getPublicPath } from 'lib/utils/paths';
  import styles from './Toastr.module.scss';
  import { classnames } from 'lib/utils/classnames';
  import Animation from './Animation.svelte';
  import type { ToastType } from '../../config/profile-toasts.config';

  export let toast: ToastType;
  export let userhandle: string;
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

  function handleCloseKeydown(e: KeyboardEvent) {
    const key = (e as KeyboardEvent).key;
    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
      e.preventDefault();
      dismiss();
    }
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

    <a
      href={toast.ctaLink(userhandle)}
      class={styles.ctaBtn}
      target="_blank"
      rel="noreferrer"
      on:click={dismiss}
    >
      {toast.ctaText}
    </a>
  </div>
  <div
    class={styles.close}
    role="button"
    tabindex="0"
    on:click={dismiss}
    on:keydown={handleCloseKeydown}
  >
    <img src={dismissIcon} alt="close" />
  </div>
</div>
