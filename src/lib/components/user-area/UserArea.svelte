<script lang="ts">
  import { getAppContext } from 'lib/app-context';
  import ToolSelector from '../tool-selector/ToolSelector.svelte';
  import Button from '../Button.svelte';
  import UserAvatar from './UserAvatar.svelte';
  import styles from './UserArea.module.scss'

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

