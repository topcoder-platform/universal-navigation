<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import ToolSelector from '../tool-selector/ToolSelector.svelte';
  import Button from '../Button.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import styles from './UserArea.module.scss'
  import VerticalSeparator from '../VerticalSeparator.svelte';
  import { fetchUserProfile, fetchUserProfileCompletedness } from 'lib/functions/user-profile.provider';
  import { onMount } from 'svelte';
  import Completedness from './Completedness.svelte';

  const ctx = getAppContext()

  $: ({
    signIn: onSignIn = () => {},
    signUp: onSignUp = () => {},
    signOut: onSignOut = () => {},
    ready: isReady,
    autoFetchUser,
    user,
    profileCompletedness,
  } = $ctx.auth);

  async function fetchProfileDetails() {
    if (!user) {
      return;
    }

    const completednessData = await fetchUserProfileCompletedness(user);

    if (!completednessData) {
      return;
    }

    $ctx.auth = {
      ...$ctx.auth,
      profileCompletedness: completednessData.data?.percentComplete,
      profileCompletednessData: completednessData,
    };
  }

  $: isReady && fetchProfileDetails();

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
        profileCompletedness={profileCompletedness}
      >
        <Completedness />
      </UserAvatar>
    {/if}
  </div>
{/if}

