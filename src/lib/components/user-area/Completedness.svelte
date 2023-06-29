<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import styles from './Completedness.module.scss'
  import { getPublicPath } from 'lib/utils/paths';
  import ProgressCircle from './ProgressCicle.svelte';
  import { classnames } from 'lib/utils/classnames';
  import { checkCookie, setCookie } from 'lib/utils/cookies';
  import { onMount } from 'svelte';

  const ctx = getAppContext()

  $: ({
    ready: isReady,
    user,
    profileCompletedness,
  } = $ctx.auth)

  let animate = false;
  $: animate = profileCompletedness < 100 && !checkCookie('uninav-nudge-anim-shown');

  $: {
    // check if animate is true and set cookie flag for 1 day
    if (animate) {
      setCookie('uninav-nudge-anim-shown', true, 1);
    }
  }
</script>

{#if isReady && user}
  <div class={classnames(styles.wrap, isReady && styles.isReady, animate && styles.animate)}>
  {#if profileCompletedness === 100}
    <div class={styles.completed}></div>
  {:else}
    <div class={styles.inProgress}>
      <img src={getPublicPath(`/assets/nudge/circle-progress.svg`)} alt="">
      <div class={styles.progressCircle}>
        <ProgressCircle progress={profileCompletedness} />
      </div>
    </div>
    {/if}
  </div>
{/if}

