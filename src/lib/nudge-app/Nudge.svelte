<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import type { ProfileCompletednessResponse } from 'lib/functions/user-profile.provider';
  import Toastr from './components/Toastr.svelte';
  import styles from './Nudge.module.scss';
  import type { ToastType } from './config';
  import { getToast, hideToast } from './toast-manager';

  const ctx = getAppContext();

  $: ({
    ready: isReady,
    profileCompletednessData,
  } = $ctx.auth)

  let toast: ToastType;

  function dismissToast() {
    toast = undefined;
    hideToast();
  }

  // const checkAndShowNudges = async () => {
  //   const completednessData = await fetchUserProfileCompletedness();
  //   if (!completednessData) {
  //     return;
  //   }

  //   $ctx.auth = {...$ctx.auth, profileCompletedness: completednessData.data?.percentComplete};
  //   toast = getToast(completednessData);
  // };


  $: toast = isReady && getToast(profileCompletednessData as ProfileCompletednessResponse);
</script>

{#if toast}
<div class={styles.nudgeOuter}>
  <div class={styles.nudgeWrap}>
    <div class={styles.nudgeInner}>
      <Toastr toast={toast} on:dismiss={dismissToast} />
    </div>
  </div>
</div>
{/if}
