<script lang="ts">
  import type { AuthUser } from 'lib/app-context';
  import { classnames } from 'lib/utils/classnames';
  import { isMobile } from 'lib/utils/window-size.store';
  import styles from './UserAvatar.module.scss';
  import PopupMenu from '../PopupMenu.svelte';
  import MobileMenu from '../MobileMenu.svelte';
  import UserMenu from './UserMenu.svelte';

  export let user: AuthUser;
  export let onSignOut: () => void;

  let elRef: HTMLElement;
  let popupIsVisible: boolean;

</script>

<div
  class={classnames(styles.userAvatarWrap, popupIsVisible && styles.popupVisible)}
  bind:this={elRef}
  on:click={() => popupIsVisible = true}
  on:keydown={() => {}}
>
  {#if user?.photoUrl}
    <img src={user.photoUrl} alt={user.initials} />
  {:else}
    <span>{user.initials}</span>
  {/if}
</div>

{#if !$isMobile}
<PopupMenu targetEl={elRef} bind:isVisible={popupIsVisible}>
  <UserMenu onSignOut={onSignOut} user={user} />
</PopupMenu>
{:else if popupIsVisible}
  <MobileMenu direction="y" handleClose={() => popupIsVisible = false}>
    <UserMenu onSignOut={onSignOut} user={user} />
  </MobileMenu>
{/if}
