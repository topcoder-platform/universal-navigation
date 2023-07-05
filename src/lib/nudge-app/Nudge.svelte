<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import Toastr from './components/Toastr.svelte';
  import styles from './Nudge.module.scss';
  import type { ToastType } from 'lib/config/profile-toasts.config';
  import { getToast, hideToast } from './toast-manager';
  import Sticky from 'lib/components/sticky/Sticky.svelte';

  const ctx = getAppContext();

  $: ({
    ready: isReady,
    user,
    profileCompletionData,
  } = $ctx.auth)

  let toast: ToastType;

  function dismissToast() {
    toast = undefined;
    hideToast();
  }

  $: toast = isReady && getToast(profileCompletionData);
</script>

{#if toast}
<Sticky class={styles.nudgeOuter} yOffset={10}>
  <div class={styles.nudgeWrap}>
    <div class={styles.nudgeInner}>
      <Toastr userhandle={user.handle} toast={toast} on:dismiss={dismissToast} />
    </div>
  </div>
</Sticky>
{/if}
