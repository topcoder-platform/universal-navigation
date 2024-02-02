<script lang="ts">
  import Button from "../Button.svelte";
  import PopupMenu from "../PopupMenu.svelte";
  import styles from './LoginPopup.module.scss'
  import { getAppContext } from 'lib/app-context';
  import { CUSTOMER_LOGIN } from "../../config";

  export let targetEl: HTMLElement;
  const ctx = getAppContext();

  $: ({
    signIn: onSignIn = () => {},
  } = $ctx.auth);

  const handleCustomerLogin = () => {
    window.location.href = CUSTOMER_LOGIN
  }

</script>

<PopupMenu targetEl={targetEl} class={styles.wrap}>
  <Button
    class={styles.btn}
    variant="contrast"
    label="Customer Log In"
    size="md-0"
    onClick={handleCustomerLogin}
  />

  <Button
    class={styles.btn}
    variant="contrast"
    label="Talent Log In"
    size="md-0"
    onClick={onSignIn}
  />
</PopupMenu>
