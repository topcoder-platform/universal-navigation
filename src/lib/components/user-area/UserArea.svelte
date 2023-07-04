<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import ToolSelector from '../tool-selector/ToolSelector.svelte';
  import Button from '../Button.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import styles from './UserArea.module.scss'
  import VerticalSeparator from '../VerticalSeparator.svelte';
  import { fetchUserProfile } from 'lib/functions/user-profile.provider';
  import { onMount } from 'svelte';
  import Completedness from './Completedness.svelte';
  import type { ProfileCompletionData } from 'lib/app-context/profile-completion.model';
  import { fetchUserProfileCompletedness } from 'lib/functions/profile-completeness';

  const ctx = getAppContext();

  // debounce updats to user if user.handle stays the same
  let debounce = '';

  $: ({
    signIn: onSignIn = () => {},
    signUp: onSignUp = () => {},
    signOut: onSignOut = () => {},
    ready: isReady,
    autoFetchUser,
    user,
    profileCompletionData = {} as ProfileCompletionData,
  } = $ctx.auth);

  async function fetchProfileDetails() {
    if (!user || debounce === user.handle) {
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
      <Button label="Log in" onClick={onSignIn} />
      <Button variant="primary" label="Sign Up" onClick={onSignUp} />
    </div>
    {:else }
      <ToolSelector />
      <UserAvatar
        user={user}
        onSignOut={onSignOut}
        profileCompletionPerc={profileCompletionData?.percentComplete ?? 0}
      >
        <Completedness />
      </UserAvatar>
    {/if}
  </div>
{/if}

