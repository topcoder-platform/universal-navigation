<script lang="ts">
  import { useLocalStorage } from 'lib/utils/use-storage';
  import styles from './Banner.module.scss';

  const bannerName = 'lab45';
  let isDismissed = useLocalStorage<boolean>(`banner:${bannerName}:dismissed`, false);
</script>

{#if !$isDismissed}
<div class={styles.banner}>
  <div class={styles.bannerContent}>
    <div class={styles.bannerText}>
      🎉 Wipro's Lab45 AI Platform is now free with your Topcoder account!
    </div>
    <div class={styles.bannerCta}>
      <a href="https://www.topcoder.com/lab45" target="_blank" rel="noreferrer">
        <button class={styles.btnSecondary}>
          Learn more
        </button>
      </a>
    </div>
  </div>
  <button class={styles.dismissBtn} on:click={() => $isDismissed = true}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true" viewBox="0 0 384 512"><path fill="currentColor" d="M345 137c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119L73 103c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l119 119L39 375c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119L311 409c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119L345 137z"/></svg>
  </button>
</div>
{/if}
