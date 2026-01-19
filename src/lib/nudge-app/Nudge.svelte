<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import Toastr from './components/Toastr.svelte';
  import styles from './Nudge.module.scss';
  import { toastsMeta, type ToastType } from 'lib/config/profile-toasts.config';
  import { getToast, hideToast } from './toast-manager';
  import Sticky from 'lib/components/sticky/Sticky.svelte';
  import type { ProfileCompletionData } from 'lib/app-context/profile-completion.model';
  import { getBanner, hide as hideBanner } from './banner-manager';
  import Banner from './components/Banner.svelte';

  const ctx = getAppContext();

  $: ({
    ready: isReady,
    user,
    profileCompletionData,
  } = $ctx.auth)

  let toast: ToastType | undefined;
  let banner: {key: string, date: Date} | undefined;

  function dismissToast() {
    toast = undefined;
    hideToast();
  }

  function dismissBanner() {
    banner = undefined;
    hideBanner();
  }

  $: toast = isReady ? getToast(profileCompletionData as ProfileCompletionData) : undefined;
  $: banner = isReady ? getBanner(profileCompletionData as ProfileCompletionData) : undefined;
</script>

{#if banner}
<Sticky class={styles.bannerOuter} delayYOffset={92}>
  <div class={styles.bannerWrap}>
    <div class={styles.bannerInner}>
      <Banner
        userHandle={user?.handle ?? ''}
        banner={banner}
        redirect={toastsMeta[banner.key].ctaLink(user?.handle ?? '')}
        on:dismiss={dismissBanner}
      />
    </div>
  </div>
</Sticky>
{/if}

{#if toast}
<Sticky class={styles.nudgeOuter} yOffset={10}>
  <div class={styles.nudgeWrap}>
    <div class={styles.nudgeInner}>
      <Toastr userhandle={user?.handle ?? ''} toast={toast} on:dismiss={dismissToast} />
    </div>
  </div>
</Sticky>
{/if}
