<script lang="ts">
  import { getAppContext, type AuthUser, type SupportMeta } from 'lib/app-context';
  import { sendSupportRequest } from 'lib/functions/support/support.service';
  import { classnames } from 'lib/utils/classnames';
  import { delay } from 'lib/utils/delay';
  import Button from '../Button.svelte';
  import Input from '../forms/Input.svelte';
  import Modal from './Modal.svelte';
  import styles from './SupportModal.module.scss';

  const ctx = getAppContext()

  $: ({user} = $ctx.auth)
  $: ({supportMeta: meta = {} as SupportMeta} = $ctx)

  export let isVisible = false;
  let submitted = false;

  async function handleSubmit(ev: MouseEvent | SubmitEvent) {
    ev.preventDefault()

    await sendSupportRequest({...meta, ...formValue});

    submitted = true;
    await delay(1500);
    isVisible = false;
  }

  const formValue = {
    firstName: '',
    lastName: '',
    email: '',
    question: '',
  };

  function initUserData() {
    if (!user) {
      return;
    }

    formValue.firstName = user?.firstName ?? '';
    formValue.lastName = user?.lastName ?? '';
    formValue.email = user?.email ?? '';
  }

  function validate(values) {
    return Object.values(values).every(v => v);
  }

  let isValid = false;
  $: isValid = validate(formValue);
  $: user && initUserData();
</script>

<Modal
  class={styles.supportModal}
  bind:isVisible={isVisible}
  title="WE'RE HERE TO HELP"
  size="sm"
>
  <p>
    Hi
    {#if user?.firstName}
      <strong>{user.firstName}</strong>,
    {:else}
      there,
    {/if}
    we're here to help.
  </p>
  <p>
    Please describe what you'd like to discuss, and a Topcoder Solutions Expert
    will email you back
    {#if user?.email}
      at&nbsp;<strong>{user.email}</strong>
    {/if}
    within one business day.
  </p>
  <div class={classnames(styles.form, submitted && styles.submitted)}>
    <form on:submit={handleSubmit}>
      <p>
        <Input label="First Name" bind:value={formValue.firstName} required />
      </p>
      <p>
        <Input label="Last Name" bind:value={formValue.lastName} required />
      </p>
      <p>
        <Input label="Email" type="email" bind:value={formValue.email} required />
      </p>
      <p>
        <Input
          label="How can we help you?"
          type="textarea"
          bind:value={formValue.question}
          required
        />
      </p>

      <span class="modalSpacer"></span>
      <div class="modalFooter">
        <Button
          label="Submit"
          variant="outline"
          size="md"
          disabled={!isValid || submitted}
        />
      </div>
    </form>
  </div>
</Modal>
