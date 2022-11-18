<script lang="ts">
  import type { NavContext } from "main";
  import { getContext } from "svelte";
  import Button from "./Button.svelte";
  import styles from './UserArea.module.scss'
  import UserAvatar from "./UserAvatar.svelte";

  const {
    signIn: onSignIn = () => {},
    signUp: onSignUp = () => {},
    signOut: onSignOut = () => {},
  }: NavContext['callbacks'] = (
    getContext('callbacks')
    ?? {} as NavContext['callbacks']
  )

  const { user }: NavContext['auth'] = (
    getContext('auth')
    ?? {} as NavContext['auth']
  )

  const isAuthenticated = !!user
</script>

<div class={styles.authWrap}>
  {#if !isAuthenticated}
  <div class={styles.btnsWrap}>
    <Button label="Log in" onClick={onSignIn} />
    <Button variant="primary" label="Sign Up" onClick={onSignUp} />
  </div>
  {:else}
    <UserAvatar {user} onClick={onSignOut} />
  {/if}
</div>

