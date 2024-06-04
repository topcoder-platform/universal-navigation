<script lang="ts">
  import styles from './SigninPopup.module.scss'
  import { getPublicPath } from 'lib/utils/paths';
  import { getAppContext } from 'lib/app-context';
  import { CUSTOMER_LOGIN, CUSTOMER_SIGNUP } from "../../config";

  const ctx = getAppContext();

  $: ({
    signIn: onSignIn = () => {},
    signUp: onSignUp = () => {},
  } = $ctx.auth);

  export let onClose: () => void;
  export let signinMethod: 'login'|'signup';
  const closeMenuIcon = getPublicPath(`/assets/icon-close-black.png`);

</script>

<div class={styles.modal}>
  <div class={styles.overlay} on:click={onClose}/>
  <div class={styles.modalBox}>
    <h5>
      Which are you?
      <span class={styles.closeIcon} on:click={onClose}>
        <img src={closeMenuIcon} alt="X" />
      </span>
    </h5>
    <div class={styles.options}>
      <div class={styles.link} on:click={signinMethod === 'login' ? onSignIn : onSignUp}>
        <strong>Talent</strong><br>
        <small>I'm here to work and learn</small>
      </div>

      <a href={signinMethod === 'login' ? CUSTOMER_LOGIN : CUSTOMER_SIGNUP}>
        <strong>Customer</strong><br>
        <small>I need to get work done</small>
      </a>
    </div>
  </div>
</div>
