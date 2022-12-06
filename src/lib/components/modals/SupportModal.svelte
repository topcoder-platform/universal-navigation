<script lang="ts">
  import { getAppContext, type AuthUser } from 'lib/app-context';
  import Input from '../forms/Input.svelte';
  import Modal from './Modal.svelte';
  import styles from './SupportModal.module.scss';

  const ctx = getAppContext()

  $: ({user = {} as AuthUser} = $ctx.auth)

  export let isVisible = false;
  let userMessage: string = '';

  function handleSubmit(ev: SubmitEvent) {
    ev.preventDefault()
  }
</script>

<Modal
  class={styles.supportModal}
  bind:isVisible={isVisible}
  title="WE'RE HERE TO HELP"
  size="sm"
>
  <div class={styles.intro}>
    <p>
      Hi <strong>{user.firstName}</strong>, we're here to help.
    </p>
    <p>
      Please describe what you 'd like to discuss, and a Topcoder Solutions Expert
      will email you back at&nbsp;
      {user.email}
      &nbsp;within one business day.
    </p>
    <form on:submit={handleSubmit}>
      <p>
        <Input label="First Name" value={user.firstName} required />
      </p>
      <p>
        <Input label="Last Name" value={user.lastName} required />
      </p>
      <p>
        <Input label="Email" type="email" value={user.email} required />
      </p>
      <p>
        <Input label="How can we help you?" type="textarea" bind:value={userMessage} required />
      </p>
    </form>
  </div>
</Modal>
