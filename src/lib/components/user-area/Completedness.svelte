<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import type { ProfileCompletionData } from 'lib/app-context/profile-completion.model';
  import styles from './Completedness.module.scss'
  import { getPublicPath } from 'lib/utils/paths';
  import ProgressCircle from './ProgressCicle.svelte';
  import { classnames } from 'lib/utils/classnames';
  import { checkCookie, setCookie } from 'lib/utils/cookies';

  const ctx = getAppContext()

  $: ({
    ready: isReady,
    user,
    profileCompletionData = {} as ProfileCompletionData,
  } = $ctx.auth)

  let animate = false;
  $: animate = (
    profileCompletionData.completed === false &&
    !checkCookie('uninav-nudge-anim-shown')
  );

  $: {
    // check if animate is true and set cookie flag for 1 day
    if (animate) {
      setCookie('uninav-nudge-anim-shown', true, 1);
    }
  }
</script>

{#if isReady && user}
  <div class={classnames(styles.wrap, isReady && styles.isReady, animate && styles.animate)}>
  {#if profileCompletionData.completed}
    <div class={styles.completed}></div>
  {:else}
    <div class={styles.inProgress}>
      <img src={getPublicPath(`/assets/nudge/circle-progress.svg`)} alt="">
      <div class={styles.progressCircle}>
        <ProgressCircle progress={profileCompletionData.percentComplete} />
      </div>
    </div>
    {/if}
  </div>
{/if}

