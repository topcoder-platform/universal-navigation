<script lang="ts">
  import Button from "../Button.svelte";
  import PopupMenu from "../PopupMenu.svelte";
  import styles from './SignupPopup.module.scss'
  import { getAppContext } from 'lib/app-context';
  import { CUSTOMER_SIGNUP } from "../../config";

  export let targetEl: HTMLElement;
  const ctx = getAppContext();

  $: ({
    signUp: onSignUp = () => {},
  } = $ctx.auth);

  const handleCustomerSignup = () => {
    window.location.href = CUSTOMER_SIGNUP
  }

</script>

<PopupMenu targetEl={targetEl} class={styles.wrap}>
  <div class={styles.title}>Customer</div>
  <p class={styles.description}>I need to get work done.</p>
  <Button
    class={styles.btn}
    variant="contrast"
    label="Customer Sign Up"
    size="md-0"
    onClick={handleCustomerSignup}
  />

  <div class={styles.title}>Talent</div>
  <p class={styles.description}>I&apos;m here to work and learn.</p>
  <Button
    class={styles.btn}
    variant="contrast"
    label="Talent Sign Up"
    size="md-0"
    onClick={onSignUp}
  />
</PopupMenu>
