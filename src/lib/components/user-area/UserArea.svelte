<script lang="ts">
  import { onMount } from 'svelte';
  import { getAppContext } from 'lib/app-context';
  import { checkUserAppRole, fetchUserProfile } from 'lib/functions/user-profile.provider';
  import { fetchUserProfileCompletedness } from 'lib/functions/profile-nudges';
  import { AUTH0_AUTHENTICATOR_URL } from 'lib/config';
  import { AUTH_USER_ROLE } from 'lib/config/auth';
  import { DISABLE_NUDGES } from "lib/config/profile-toasts.config";

  import ToolSelector from '../tool-selector/ToolSelector.svelte';
  import VerticalSeparator from '../VerticalSeparator.svelte';

  import UserAvatar from './UserAvatar.svelte';
  import styles from './UserArea.module.scss'
  import Completedness from './Completedness.svelte';
  import Button from '../Button.svelte';

  const ctx = getAppContext();

  // debounce updates to user if user.handle stays the same
  let debounce = '';

  $: ({
    signOut: onSignOut = () => {},
    ready: isReady,
    autoFetchUser,
    user,
    profileCompletionData,
  } = $ctx.auth);

  async function fetchProfileDetails() {
    // do nothing if user is not authenticated or has customer role
    if (!user || checkUserAppRole(AUTH_USER_ROLE.customer) || debounce === user.handle) {
      return;
    }

    debounce = user.handle;
    if (!DISABLE_NUDGES) {
      const completednessData = await fetchUserProfileCompletedness(user, true);
      if (!completednessData) {
        return;
      }
      $ctx.auth = {
        ...$ctx.auth,
        profileCompletionData: {
          completed: completednessData.data?.percentComplete === 100,
          handle: completednessData.handle,
          percentComplete: completednessData.data?.percentComplete,
          showToast: completednessData.showToast,
        },
      };
    } else {
      $ctx.auth = {
        ...$ctx.auth,
        profileCompletionData: {
          completed: true,
          handle: user?.handle,
          percentComplete: 0,
          showToast: "",
        },
      };
    }

    setTimeout(() => debounce = '', 100);
  }

  $: isReady && user?.handle && fetchProfileDetails();

  onMount(async () => {
    if (autoFetchUser !== true) {
      return;
    }

    $ctx.auth = {...$ctx.auth, ready: false};
    const authUser = await fetchUserProfile();
    $ctx.auth = {...$ctx.auth, ready: true, user: authUser};
  });

  function onSignIn(signup?: any) {
    const locationHref = `${window.location.origin}${window.location.pathname}`
    window.location.href = `${AUTH0_AUTHENTICATOR_URL}?retUrl=${encodeURIComponent(locationHref)}${signup === true ? '&mode=signUp' : ''}`;
  }

  function onSignUp() {
    onSignIn(true);
  }
</script>

{#if isReady}
  <!-- <VerticalSeparator /> -->
  <div class={styles.userAreaWrap}>
    {#if !user}
      <div class={styles.btnsWrap}>
        <Button variant="primary-link" label="Sign Up" onClick={onSignUp} />
        <Button variant="primary-link" label="Login" onClick={onSignIn} />
      </div>
    {:else }
      <ToolSelector />
      <UserAvatar
        user={user}
        onSignOut={onSignOut}
        profileCompletionPerc={profileCompletionData?.percentComplete}
      >
        {#if profileCompletionData && !DISABLE_NUDGES}
        <Completedness />
        {/if}
      </UserAvatar>
    {/if}
  </div>
{/if}

