<script lang="ts">
  import { classnames } from "lib/utils/classnames";
  import styles from './Banner.module.scss';
  import { createEventDispatcher, onMount } from "svelte";
  import { getPublicPath } from "lib/utils/paths";
  import { confirmProfileData, isOnHost } from "lib/functions/profile-nudges";
  import { PROFILE_HOST } from "lib/config";
  import Modal from "lib/components/modals/Modal.svelte";
  import Button from "lib/components/Button.svelte";

  export let userHandle: string;
  export let banner: {key: string; date: Date};
  let redirectUrl: string = `${PROFILE_HOST}/${userHandle}`;
  let visible = false;
  const dispatch = createEventDispatcher();

  const dismissIcon = getPublicPath('/assets/nudge/icon-circle-dismiss.svg');
  const externalIcon = getPublicPath('/assets/icon-external.svg');
  const isOnProfiles = isOnHost(PROFILE_HOST);
  let showConfirmModal = false;

  function dismiss() {
    visible = false;
    setTimeout(dispatch, 300, 'dismiss');
  }

  async function confirm() {
    await confirmProfileData(userHandle)
    dismiss();
  }

  function handleCloseKeydown(e: KeyboardEvent, isConfirm?: boolean) {
    const key = (e as KeyboardEvent).key;
    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
      e.preventDefault();
      isConfirm ? confirm() : dismiss();
    }
  }

  function toStartCase(str: string): string {
    if (!str) return '';
    return str
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // split camelCase
      .replace(/[_\-]+/g, ' ') // replace snake/kebab with space
      .split(/\s+/)
      .map(s => s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : '')
      .join(' ')
      .trim();
  }

  function fmDate(date?: Date) {
    if (!date) {
      return '';
    }

    const d = new Date(date);
    const day = d.getDate();
    const suffix = (day % 10 === 1 && day % 100 !== 11) ? 'st'
                  : (day % 10 === 2 && day % 100 !== 12) ? 'nd'
                  : (day % 10 === 3 && day % 100 !== 13) ? 'rd'
                  : 'th';
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${day}${suffix} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  onMount(() => {
    setTimeout(() => visible = true, 15)
  });
</script>

<div class={classnames(styles.banner, !visible && 'hidden')}>
  {#if isOnProfiles}
    <div class={styles.contents}>
      If your profile is up to date, you can
      <button
        class={styles.inlineBtn}
        on:click={confirm}
        on:keydown={(ev) => handleCloseKeydown(ev, true)}
      >
        click here
      </button>
      to confirm.
    </div>
  {:else}
    <div class={styles.contents}>
      <a href={redirectUrl} target="_blank">
        Hey there! Looks like you haven't updated your profile in a long time.
        You last updated your
        {toStartCase(banner.key)}
        on
        {' '}
        {fmDate(banner.date)}
      </a>
    </div>

    <div class={styles.spacer} />
    <a
      href={redirectUrl}
      target="_blank"
      class={styles.confirmBtn}
      on:keydown={(ev) => handleCloseKeydown(ev, true)}
    >
      Update
      <img class={styles.externalIcon} src={externalIcon} alt="go" />
    </a>
    <button
      class={styles.confirmBtn}
      on:click={() => showConfirmModal = true}
      on:keydown={(ev) => handleCloseKeydown(ev, true)}
    >
      Confirm
    </button>
  {/if}

  <div
    class={styles.close}
    role="button"
    tabindex="0"
    on:click={dismiss}
    on:keydown={handleCloseKeydown}
  >
    <img src={dismissIcon} alt="close" />
  </div>
</div>

<Modal title="Confirm" isVisible={showConfirmModal}>
  Please make sure your profile is up to date.
  <div class={styles.modalBtns}>
    <Button variant="contrast" label="Confirm" onClick={confirm} />
  </div>
</Modal>
