<script lang="ts">
  import Button from "./Button.svelte";
  import styles from './UserArea.module.scss'
  import UserAvatar from "./UserAvatar.svelte";
  import ToolSelector from "./ToolSelector.svelte";
  import { getAppContext } from "lib/app-context";

  const ctx = getAppContext()

  $: ({
    signIn: onSignIn = () => {},
    signUp: onSignUp = () => {},
    signOut: onSignOut = () => {},
    ready: isReady,
    user,
  } = $ctx.auth)

</script>

<div class={styles.authWrap}>
  {#if isReady}
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
      />
    {/if}
  {/if}
</div>

