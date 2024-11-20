<script lang="ts">
  import { onMount } from 'svelte';

  import Button from '../Button.svelte';

  import styles from './AuthArea.module.scss'
  import SigninPopup from './SigninPopup.svelte';
  import { appPubSub } from '../../../main';

  export let hideSignup = false;
  let signinPopupVisible = false;
  let signinMethod: 'login'|'signup';
  let signInConfig: {talentURL: string, customerURL: string};

  onMount(async () => {
    appPubSub.subscribe('signup', (data) => handleSignin('signup', data))
    appPubSub.subscribe('login', (data) => handleSignin('login', data))
  });

  const handleSignin = (method, data?: any) => {
    signInConfig = data;
    signinPopupVisible = true;
    signinMethod = method;
  }
</script>

<div class={styles.btnsWrap}>
  <Button label="Log In" onClick={() => handleSignin('login')}/>
  {#if !hideSignup}
  <Button
    variant="primary"
    label="Sign Up"
    onClick={() => handleSignin('signup')}
  />
  {/if}
  {#if signinPopupVisible}
    <SigninPopup
      signInConfig={signInConfig}
      signinMethod={signinMethod}
      onClose={() => signinPopupVisible = false}
    />
  {/if}
</div>

