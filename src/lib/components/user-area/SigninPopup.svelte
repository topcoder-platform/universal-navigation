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
  export let signInConfig: {talentURL: string, customerURL: string};

  const closeMenuIcon = getPublicPath(`/assets/icon-close-w.svg`);
  const talentIcon = getPublicPath(`/assets/icon-algo.png`);
  const customerIcon = getPublicPath(`/assets/icon-tsunny.png`);

  const customerSignInUrl = signinMethod === 'login' ? CUSTOMER_LOGIN : CUSTOMER_SIGNUP;

  // when clicking on talent
  const handleTalentClick = () => {
    if (signInConfig?.talentURL) {
      window.location.href = signInConfig.talentURL;
      return;
    }

    (signinMethod === 'login' ? onSignIn : onSignUp)();
  }
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
      <a href={signInConfig?.customerURL ?? customerSignInUrl}>
        <span>
          <strong>Customer</strong><br>
          <small>Launch and manage work</small>
        </span>
        <img src={customerIcon} alt="Tsunny" />
      </a>
      <div class={styles.link} on:click={handleTalentClick}>
        <span>
          <strong>Talent</strong><br>
          <small>Find and start opportunities</small>
        </span>
        <img src={talentIcon} alt="Algo" width="35" />
      </div>
    </div>
  </div>
</div>
