<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { classnames } from 'lib/utils/classnames';
  import styles from './Modal.module.scss';

  export let isVisible: boolean = false;

  export let title: string = '';
  export let size: 'sm' = undefined;

  function toggleOverflow(toggle) {
    Object.assign(document.body.style, {overflow: toggle ? 'hidden' : ''});
  }

  $: toggleOverflow(isVisible)
</script>

{#if isVisible}
  <div class={classnames(styles.modalWrap, $$props.class, size && `size-${size}`)}>
    <div class={styles.modalContainer}>
      <div class={styles.modalOverlay} transition:fade={{duration: 200}} on:click={() => isVisible = false} on:keydown={() => {}} />
      <div class={styles.modalWindow} transition:fly={{y: 45, duration: 300}}>
        <div class={styles.modalHeader}>
          <h3 class={styles.modalTitle}>
            {title}
          </h3>
          <button
            class={styles.closeBtn}
            on:click={() => isVisible = false}
            on:keydown={() => {}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" aria-hidden="true" width="28" height="28">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <span class="modalSpacer"></span>
        <div class={styles.modalBody}>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
{/if}
