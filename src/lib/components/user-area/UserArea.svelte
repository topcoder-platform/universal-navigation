<script lang="ts">
  import { onMount } from 'svelte';
  import { getAppContext } from 'lib/app-context';
  import { checkUserAppRole, fetchUserProfile } from 'lib/functions/user-profile.provider';
  import { fetchUserProfileCompletedness, dismissNudgesBasedOnHost } from 'lib/functions/profile-nudges';
  import { AUTH_USER_ROLE } from 'lib/config/auth';

  import ToolSelector from '../tool-selector/ToolSelector.svelte';
  import Button from '../Button.svelte';
  import VerticalSeparator from '../VerticalSeparator.svelte';

  import UserAvatar from './UserAvatar.svelte';
  import styles from './UserArea.module.scss'
  import Completedness from './Completedness.svelte';
  import SignupPopup from './SignupPopup.svelte';
  import LoginPopup from './LoginPopup.svelte';

  const ctx = getAppContext();

  // debounce updates to user if user.handle stays the same
  let debounce = '';

  let signupBtnRef: HTMLElement;
  let loginBtnRef: HTMLElement;

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
</script>

{#if isReady}
  <VerticalSeparator />
  <div class={styles.userAreaWrap}>
    {#if !user}
    <div class={styles.btnsWrap}>
      <div>
        <Button label="Log in" bind:ref={loginBtnRef} />
        <LoginPopup targetEl={loginBtnRef} />
      </div>

      <div>
        <Button
          variant="primary"
          label="Sign Up"
          bind:ref={signupBtnRef}
        />
        <SignupPopup targetEl={signupBtnRef} />
      </div>
    </div>
    {:else }
      <ToolSelector />
      <UserAvatar
        user={user}
        onSignOut={onSignOut}
        profileCompletionPerc={profileCompletionData?.percentComplete}
      >
        {#if profileCompletionData}
        <Completedness />
        {/if}
      </UserAvatar>
    {/if}
  </div>
{/if}

