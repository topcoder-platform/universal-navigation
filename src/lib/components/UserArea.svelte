<script lang="ts">
  import { getContext, onDestroy } from "svelte";
  import type { NavContext } from "main";
  import Button from "./Button.svelte";
  import styles from './UserArea.module.scss'
  import UserAvatar from "./UserAvatar.svelte";

  const callbacks: NavContext['callbacks'] = getContext('callbacks')
  
  const {
    signIn: onSignIn = () => {},
    signUp: onSignUp = () => {},
    signOut: onSignOut = () => {},
  } = $callbacks

  const auth: NavContext['auth'] = getContext('auth')

  let isReady: boolean;

  onDestroy(
    auth.subscribe((a) => (
      isReady = Object.prototype.hasOwnProperty.call(a, 'user')
    ))
  )
</script>

<div class={styles.authWrap}>
  {#if isReady}
    {#if !$auth.user}
    <div class={styles.btnsWrap}>
      <Button label="Log in" onClick={onSignIn} />
      <Button variant="primary" label="Sign Up" onClick={onSignUp} />
    </div>
    {:else }
      <UserAvatar user={$auth.user} onClick={onSignOut} />
    {/if}
  {/if}
</div>

